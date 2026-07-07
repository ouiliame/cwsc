import { pascalToSnake, snakeToPascal } from '../util/strings';
import * as Ast from '../ast';
import {
  CgContractCrate,
  CgContractMod,
  CgEnum,
  CgErrorMod,
  CgExecEntrypoint,
  CgExecImplFn,
  CgExecMsg,
  CgHelperFn,
  CgImplentationMod,
  CgInstantiateEntrypoint,
  CgInstantiateImplFn,
  CgMsgMod,
  CgQueryEntrypoint,
  CgQueryImplFn,
  CgQueryMsg,
  CgStateMod,
  CgStruct,
  CgTuple,
  CgTypeAlias,
  CgTypesMod,
  CgUnit,
} from './cg';

import { blockToCg, CgBlockContext } from './block-to-cg';

const PRIMITIVE_TYPE_MAP: Record<string, string> = {
  U8: 'u8',
  U16: 'u16',
  U32: 'u32',
  U64: 'u64',
  U128: 'Uint128',
  U256: 'Uint256',
  Int: 'i64',
  String: 'String',
  Bool: 'bool',
  Addr: 'Addr',
  Address: 'Addr',
  Dec: 'Decimal',
  Binary: 'Binary',
  Coin: 'Coin',
  None: '()',
  address: 'Addr',
};

/**
 * Give every anonymous inline struct (e.g. `query #balance() -> struct { balance: Int }`)
 * a deterministic synthesized name derived from its enclosing handler:
 * `#balance -> struct {...}` becomes `BalanceResponse`, matching common
 * CosmWasm naming. Mutates the AST in place (StructDefn.name: null → Ident).
 */
export function synthesizeAnonStructNames(root: Ast.AstNode): void {
  const taken = new Set<string>();
  for (const s of root.descendantsOfType(Ast.StructDefn)) {
    if (s.name) taken.add(s.name.value);
  }
  let anonCounter = 0;
  for (const s of root.descendantsOfType(Ast.StructDefn)) {
    if (s.name) continue;
    // Walk up to find an enclosing named definition to derive the name from.
    let base: string | null = null;
    for (let p: Ast.AstNode | null = s.$parent; p; p = p.$parent) {
      if (
        p instanceof Ast.QueryDefn ||
        p instanceof Ast.ExecDefn ||
        p instanceof Ast.FnDefn
      ) {
        base = snakeToPascal(p.name.value.replace(/^#/, '')) + 'Response';
        break;
      }
      if (p instanceof Ast.TypeAliasDefn) {
        base = p.name.value;
        break;
      }
    }
    let name = base ?? `AnonStruct${++anonCounter}`;
    while (taken.has(name)) name = `${name}${++anonCounter}`;
    taken.add(name);
    s.name = new Ast.Ident(name);
  }
}

/** Name of a struct defn after `synthesizeAnonStructNames` has run. */
function structName(s: Ast.StructDefn): string {
  if (!s.name) {
    // Defensive: synthesis normally runs up-front over the whole file AST.
    s.name = new Ast.Ident('AnonStruct');
  }
  return s.name.value;
}

/** Strip the CWScript `%` prefix from a type variable name: %T → T */
export function mapTypeVarName(name: string): string {
  const stripped = name.replace(/^%/, '');
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
}

/**
 * Collect the unique generic type variables (in order of first appearance)
 * used anywhere inside the given AST subtrees.
 */
export function collectTypeVars(
  nodes: (Ast.AstNode | null | undefined)[]
): string[] {
  const seen: string[] = [];
  for (const n of nodes) {
    if (!n) continue;
    const vars = [
      ...(n instanceof Ast.TypeVarExpr ? [n] : []),
      ...n.descendantsOfType(Ast.TypeVarExpr),
    ];
    for (const v of vars) {
      const name = mapTypeVarName(v.typeVar.value);
      if (!seen.includes(name)) seen.push(name);
    }
  }
  return seen;
}

/** Render a `<T, U>` generics suffix, or '' when there are none. */
function genericsSuffix(vars: string[]): string {
  return vars.length > 0 ? `<${vars.join(', ')}>` : '';
}

export function mapType(node: Ast.TypeExpr | null | undefined): string {
  if (!node) return 'String';

  switch (node.$kind) {
    case 'OptionTypeExpr':
      return `Option<${mapType((node as Ast.OptionTypeExpr).ty)}>`;

    case 'ParamzdTypeExpr': {
      const p = node as Ast.ParamzdTypeExpr;
      const baseName = mapType(p.ty);
      const args = p.typeArgs.map((a) => mapType(a));
      if (baseName === 'List' || baseName === 'Vec') {
        return `Vec<${args[0]}>`;
      }
      // Postfix list syntax `T[]` parses as a parameterized type without args
      if (args.length === 0) {
        return `Vec<${baseName}>`;
      }
      return `${baseName}<${args.join(', ')}>`;
    }

    case 'ArrayTypeExpr': {
      const a = node as Ast.ArrayTypeExpr;
      return `[${mapType(a.ty)}; ${a.size.value}]`;
    }

    case 'TupleTypeExpr': {
      const t = node as Ast.TupleTypeExpr;
      const mapped = t.elements.map((e) => mapType(e));
      // If all elements are the same type, use Rust array [T; N] instead of tuple
      if (mapped.length > 0 && mapped.every((m) => m === mapped[0])) {
        return `[${mapped[0]}; ${mapped.length}]`;
      }
      return `(${mapped.join(', ')})`;
    }

    case 'MapTypeExpr': {
      const m = node as Ast.MapTypeExpr;
      return `HashMap<${mapType(m.keyTy)}, ${mapType(m.valueTy)}>`;
    }

    case 'GroupedTypeExpr':
      return mapType((node as Ast.GroupedTypeExpr).ty);

    case 'MemberTypeExpr': {
      const mem = node as Ast.MemberTypeExpr;
      const memberName = mem.memberName.value.replace(/^#/, '');
      return `${mapType(mem.ty)}::${memberName}`;
    }

    case 'TypeVarExpr':
      return mapTypeVarName((node as Ast.TypeVarExpr).typeVar.value);

    case 'IdentTypeExpr': {
      const name = (node as Ast.IdentTypeExpr).ident.value;
      return PRIMITIVE_TYPE_MAP[name] || name;
    }

    case 'StructDefnTypeExpr': {
      const s = node as Ast.StructDefnTypeExpr;
      return structName(s.structDefn);
    }

    case 'TupleDefnTypeExpr': {
      const t = node as Ast.TupleDefnTypeExpr;
      return t.tupleDefn.name.value;
    }

    case 'UnitDefnTypeExpr': {
      const u = node as Ast.UnitDefnTypeExpr;
      return u.unitDefn.name.value;
    }

    case 'EnumDefnTypeExpr': {
      const e = node as Ast.EnumDefnTypeExpr;
      return e.enumDefn.name.value;
    }

    default: {
      // Fallback: use parse tree text if available
      const text = (node as Ast.AstNode).$antlrParseRuleCtx?.text;
      if (text && PRIMITIVE_TYPE_MAP[text]) {
        return PRIMITIVE_TYPE_MAP[text];
      }
      return text || 'String';
    }
  }
}

/** Map-key type: tuple keys render as rust tuples (PrimaryKey impls exist
 * for key tuples but not for arrays). */
export function mapKeyType(node: Ast.TypeExpr | null | undefined): string {
  if (node && node.$kind === 'TupleTypeExpr') {
    const t = node as Ast.TupleTypeExpr;
    return `(${t.elements.map((e) => mapType(e)).join(', ')})`;
  }
  return mapType(node);
}

export function mapParamType(param: Ast.Param): string {
  const baseType = mapType(param.ty);
  if (param.optional) {
    return `Option<${baseType}>`;
  }
  return baseType;
}

export interface ContractNodes {
  stateDefns: (Ast.StateItemDefn | Ast.StateMapDefn)[];
  instantiateDefn: Ast.InstantiateDefn | undefined;
  execDefns: Ast.ExecDefn[];
  queryDefns: Ast.QueryDefn[];
  structDefns: Ast.StructDefn[];
  tupleDefns: Ast.TupleDefn[];
  unitDefns: Ast.UnitDefn[];
  enumDefns: Ast.EnumDefn[];
  typeAliasDefns: Ast.TypeAliasDefn[];
  errorDefns: Ast.ErrorDefn[];
  eventDefns: Ast.EventDefn[];
  fnDefns: Ast.FnDefn[];
  replyDefns: Ast.ReplyDefn[];
  migrateDefn: Ast.MigrateDefn | undefined;
  implDefns: Ast.ImplDefn[];
}

export function indexContractNodes(ast: Ast.ContractDefn): ContractNodes {
  let contract: ContractNodes = {
    stateDefns: [],
    instantiateDefn: undefined,
    execDefns: [],
    queryDefns: [],
    structDefns: [],
    tupleDefns: [],
    unitDefns: [],
    enumDefns: [],
    typeAliasDefns: [],
    errorDefns: [],
    eventDefns: [],
    fnDefns: [],
    replyDefns: [],
    migrateDefn: undefined,
    implDefns: [],
  };
  const insideImpl = (x: Ast.AstNode): boolean => {
    for (let p: Ast.AstNode | null = x.$parent; p; p = p.$parent) {
      if (p instanceof Ast.ImplDefn) return true;
    }
    return false;
  };
  ast.descendants.forEach((x) => {
    if (x instanceof Ast.StateItemDefn || x instanceof Ast.StateMapDefn) {
      contract.stateDefns.push(x);
    } else if (x instanceof Ast.ErrorDefn) {
      contract.errorDefns.push(x);
    } else if (x instanceof Ast.InstantiateDefn) {
      contract.instantiateDefn = x;
    } else if (x instanceof Ast.ExecDefn) {
      contract.execDefns.push(x);
    } else if (x instanceof Ast.QueryDefn) {
      contract.queryDefns.push(x);
    } else if (x instanceof Ast.StructDefn) {
      contract.structDefns.push(x);
    } else if (x instanceof Ast.TupleDefn) {
      contract.tupleDefns.push(x);
    } else if (x instanceof Ast.UnitDefn) {
      contract.unitDefns.push(x);
    } else if (x instanceof Ast.EnumDefn) {
      contract.enumDefns.push(x);
    } else if (x instanceof Ast.TypeAliasDefn) {
      contract.typeAliasDefns.push(x);
    } else if (x instanceof Ast.EventDefn) {
      contract.eventDefns.push(x);
    } else if (x instanceof Ast.FnDefn) {
      // fns nested in an impl block are methods, not contract helpers
      if (!insideImpl(x)) contract.fnDefns.push(x);
    } else if (x instanceof Ast.ReplyDefn) {
      contract.replyDefns.push(x);
    } else if (x instanceof Ast.MigrateDefn) {
      contract.migrateDefn = x;
    } else if (x instanceof Ast.ImplDefn) {
      contract.implDefns.push(x);
    }
  });
  return contract;
}
export interface TopLevelTypes {
  topLevelStructs?: Ast.StructDefn[];
  topLevelEnums?: Ast.EnumDefn[];
  topLevelConsts?: Ast.ConstIdentStmt[];
  topLevelTuples?: Ast.TupleDefn[];
  topLevelUnits?: Ast.UnitDefn[];
  topLevelImpls?: Ast.ImplDefn[];
  topLevelAliases?: Ast.TypeAliasDefn[];
  topLevelErrors?: Ast.ErrorDefn[];
  topLevelEvents?: Ast.EventDefn[];
}

export function contractAstToCg(ast: Ast.ContractDefn, topLevel?: TopLevelTypes): CgContractCrate {
  synthesizeAnonStructNames(ast);
  const name = ast.name.value;
  const {
    stateDefns,
    instantiateDefn,
    execDefns,
    queryDefns,
    structDefns,
    tupleDefns,
    unitDefns,
    enumDefns,
    typeAliasDefns,
    errorDefns,
    eventDefns,
    fnDefns,
    replyDefns,
    migrateDefn,
    implDefns,
  } = indexContractNodes(ast);

  // File-level error/event definitions participate like contract-level ones
  const contractErrorNames = new Set(errorDefns.map((e) => e.name.value));
  for (const e of topLevel?.topLevelErrors || []) {
    if (!contractErrorNames.has(e.name.value)) errorDefns.push(e);
  }
  const contractEventNames = new Set(eventDefns.map((e) => e.name.value));
  for (const e of topLevel?.topLevelEvents || []) {
    if (!contractEventNames.has(e.name.value)) eventDefns.push(e);
  }

  // state mod
  const stateFields = stateDefns.map((x) => {
    if (x instanceof Ast.StateItemDefn) {
      return {
        $type: 'item' as const,
        name: x.name.value,
        ty: `Item<${mapType(x.ty)}>`,
      };
    } else {
      return {
        $type: 'map' as const,
        name: x.name.value,
        idxTy: mapKeyType(x.indexTy),
        ty: mapType(x.ty),
      };
    }
  });
  const stateMod = new CgStateMod(stateFields);

  // error mod - collect explicitly defined errors
  let errorVariants = errorDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: mapParamType(y),
        };
      }),
    };
  });

  // Auto-collect error names from fail! statements in the AST
  const definedErrorNames = new Set(errorVariants.map((e) => e.name));
  const failStmts = ast.descendantsOfType(Ast.FailStmt);
  const failExprs = ast.descendantsOfType(Ast.FailExpr);
  for (const fail of [...failStmts, ...failExprs]) {
    const value = fail.value;
    if (value instanceof Ast.CallExpr && value.fn instanceof Ast.IdentExpr) {
      const errorName = value.fn.ident.value;
      if (!definedErrorNames.has(errorName)) {
        definedErrorNames.add(errorName);
        // Auto-generate with named fields from the call args
        const fields = value.args
          .filter((a) => !!a.name)
          .map((a) => ({
            name: a.name!.value,
            ty: 'String',
          }));
        errorVariants.push({ name: errorName, fields });
      }
    }
  }

  const errorMod = new CgErrorMod(errorVariants);

  // msg mod
  // If parsing lost the instantiate definition (syntax-error recovery),
  // degrade to an empty instantiate rather than aborting codegen.
  if (!instantiateDefn) {
    console.warn(
      `warning: no instantiate definition found for contract ${name}; generating an empty InstantiateMsg`
    );
  }
  const instantiateParams = instantiateDefn
    ? instantiateDefn.params.map((x) => ({
        name: x.name.value,
        ty: mapParamType(x),
      }))
    : [];
  let instantiateMsg = {
    params: instantiateParams,
  };
  let execMsg: CgExecMsg = {
    variants: execDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: mapParamType(y),
          };
        }),
      };
    }),
  };
  let queryMsg: CgQueryMsg = {
    variants: queryDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: mapParamType(y),
          };
        }),
        resType: mapType(x.returnTy),
      };
    }),
  };
  const migrateParams = migrateDefn
    ? migrateDefn.params
        .toArray()
        .filter((p) => !p.name.value.startsWith('$'))
        .map((p) => ({ name: p.name.value, ty: mapParamType(p) }))
    : null;
  const msgMod = new CgMsgMod(
    instantiateMsg,
    execMsg,
    queryMsg,
    migrateParams ? { params: migrateParams } : null
  );

  // contract mod
  let instantiateEntrypoint: CgInstantiateEntrypoint = {
    params: instantiateParams,
  };
  let execEntrypoint: CgExecEntrypoint = {
    variants: execDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: mapParamType(y),
          };
        }),
      };
    }),
  };
  let queryEntrypoint: CgQueryEntrypoint = {
    variants: queryDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: mapParamType(y),
          };
        }),
        resType: mapType(x.returnTy),
      };
    }),
  };
  const replyHandlers: { name: string; id: number; kind: string }[] = [];
  const contractMod = new CgContractMod(
    instantiateEntrypoint,
    execEntrypoint,
    queryEntrypoint,
    replyHandlers,
    migrateParams
  );

  // Build context for block codegen
  const stateFieldNames = stateDefns.map((x) => x.name.value);
  // Include auto-collected fail! error names, not just declared ones
  const errorNames = errorVariants.map((x) => x.name);
  const execHandlerNames = execDefns.map((x) => x.name.value.substring(1));
  const queryHandlerNames = queryDefns.map((x) => x.name.value.substring(1));
  const helperFnNames = fnDefns.map((x) => x.name.value);
  const eventNames = eventDefns.map((x) => x.name.value);

  // Struct positional-constructor info: struct name → ordered field names.
  // Includes both contract-level and top-level definitions.
  // Standalone struct definitions take priority over structs declared inline
  // in a handler signature (e.g. `-> struct TokenInfo {...}`) when names
  // collide.
  const isSignatureInline = (s: Ast.StructDefn): boolean => {
    for (let pp: Ast.AstNode | null = s.$parent; pp; pp = pp.$parent) {
      if (
        pp instanceof Ast.QueryDefn ||
        pp instanceof Ast.ExecDefn ||
        pp instanceof Ast.InstantiateDefn ||
        pp instanceof Ast.MigrateDefn ||
        pp instanceof Ast.FnDefn
      ) {
        return true;
      }
      if (pp instanceof Ast.ContractDefn) return false;
    }
    return false;
  };
  const byDefnStrength = (arr: Ast.StructDefn[]): Ast.StructDefn[] => [
    ...arr.filter((s) => !isSignatureInline(s)),
    ...arr.filter((s) => isSignatureInline(s)),
  ];
  const ctxAllStructDefns = byDefnStrength([
    ...structDefns,
    ...(topLevel?.topLevelStructs || []),
  ]);
  const ctxAllEnumDefns = [
    ...enumDefns,
    ...(topLevel?.topLevelEnums || []),
  ];
  const ctxAllTupleDefns = [
    ...tupleDefns,
    ...(topLevel?.topLevelTuples || []),
  ];
  const ctxAllUnitDefns = [
    ...unitDefns,
    ...(topLevel?.topLevelUnits || []),
  ];
  const ctxAllAliasDefns = [
    ...typeAliasDefns,
    ...(topLevel?.topLevelAliases || []),
  ];
  const ctxAllImplDefns = [
    ...implDefns,
    ...(topLevel?.topLevelImpls || []),
  ];
  // Duplicate struct names (e.g. an inline query-return struct shadowing a
  // contract struct) keep the FIRST definition everywhere, consistently.
  const structFields: Record<string, string[]> = {};
  for (const s of ctxAllStructDefns) {
    if (structFields[structName(s)]) continue;
    structFields[structName(s)] = s.fields.map((f) => f.name.value);
  }
  // Struct field types: struct name → { field → rust type }
  const structFieldTypes: Record<string, Record<string, string>> = {};
  for (const s of ctxAllStructDefns) {
    if (structFieldTypes[structName(s)]) continue;
    const m: Record<string, string> = {};
    for (const f of s.fields.toArray()) {
      m[f.name.value] = mapParamType(f);
    }
    structFieldTypes[structName(s)] = m;
  }
  // Tuple struct element types: name → [rust types]
  const tupleTypes: Record<string, string[]> = {};
  for (const t of ctxAllTupleDefns) {
    tupleTypes[t.name.value] = t.elements.map((e) => mapType(e));
  }
  // State field type info
  const stateTypes: Record<string, { kind: 'item' | 'map'; ty: string; keyTy?: string }> = {};
  for (const x of stateDefns) {
    if (x instanceof Ast.StateItemDefn) {
      stateTypes[x.name.value] = { kind: 'item', ty: mapType(x.ty) };
    } else {
      stateTypes[x.name.value] = {
        kind: 'map',
        ty: mapType(x.ty),
        keyTy: mapKeyType(x.indexTy),
      };
    }
  }
  // Enum variant fields: enum name → { fieldName → rust type }
  const enumVariantFields: Record<string, Record<string, string>> = {};
  // Per-variant detail: enum name → variant → shape + ordered fields
  const enumVariants: Record<
    string,
    Record<string, { shape: 'struct' | 'tuple' | 'unit'; fields: { name: string; ty: string }[] }>
  > = {};
  for (const e of ctxAllEnumDefns) {
    const fields: Record<string, string> = {};
    const variants: Record<string, { shape: 'struct' | 'tuple' | 'unit'; fields: { name: string; ty: string }[] }> = {};
    for (const v of e.variants.toArray()) {
      const vname = v.name.value.replace(/^#/, '');
      if (v instanceof Ast.EnumVariantStructDefn) {
        for (const f of v.fields.toArray()) {
          fields[f.name.value] = mapParamType(f);
        }
        variants[vname] = {
          shape: 'struct',
          fields: v.fields.map((f) => ({ name: f.name.value, ty: mapParamType(f) })),
        };
      } else if (v instanceof Ast.EnumVariantTupleDefn) {
        variants[vname] = {
          shape: 'tuple',
          fields: v.elements.map((el, i) => ({ name: String(i), ty: mapType(el) })),
        };
      } else {
        variants[vname] = { shape: 'unit', fields: [] };
      }
    }
    enumVariantFields[e.name.value] = fields;
    enumVariants[e.name.value] = variants;
  }
  // Struct field name → declared type name (used to resolve enum-typed fields
  // like Asset.info: AssetInfo so member access can go through an accessor fn)
  const fieldTypeByName: Record<string, string> = {};
  for (const s of ctxAllStructDefns) {
    for (const f of s.fields.toArray()) {
      const tyName = mapType(f.ty);
      if (enumVariantFields[tyName]) {
        fieldTypeByName[f.name.value] = tyName;
      }
    }
  }
  const knownTypeNames = [
    ...ctxAllStructDefns.map((x) => structName(x)),
    ...ctxAllEnumDefns.map((x) => x.name.value),
    ...ctxAllTupleDefns.map((x) => x.name.value),
    ...ctxAllUnitDefns.map((x) => x.name.value),
    ...ctxAllAliasDefns.map((x) => x.name.value),
  ];
  const errorFields: Record<string, string[]> = {};
  const errorFieldTypes: Record<string, Record<string, string>> = {};
  for (const e of errorDefns) {
    errorFields[e.name.value] = e.fields.map((f) => f.name.value);
    const m: Record<string, string> = {};
    for (const f of e.fields.toArray()) m[f.name.value] = mapParamType(f);
    errorFieldTypes[e.name.value] = m;
  }
  // Constant name → rust type (for coercions on const references)
  const constTypes: Record<string, string> = {};
  const PRIMITIVE_CONST_TYPES = new Set(['u8', 'u16', 'u32', 'u64', 'i64', 'bool']);
  for (const c of topLevel?.topLevelConsts || []) {
    const declaredTy = c.ty ? mapType(c.ty) : null;
    if (c.value instanceof Ast.StringLit) constTypes[c.name.value] = '&str';
    else if (c.value instanceof Ast.IntLit)
      constTypes[c.name.value] =
        declaredTy && PRIMITIVE_CONST_TYPES.has(declaredTy) ? declaredTy : 'u64';
    else if (c.value instanceof Ast.BoolLit) constTypes[c.name.value] = 'bool';
    else constTypes[c.name.value] = '&str';
  }
  // Helper fn signatures (context param, fallibility, rust types)
  const isCtxParam = (pp: Ast.Param) => pp.name.value.startsWith('$');
  const fnSigs: Record<
    string,
    {
      params: { name: string; ty: string }[];
      retOk: string;
      fallible: boolean;
      needsCtx: boolean;
      ctxKind: 'none' | 'read' | 'mut';
    }
  > = {};
  for (const x of fnDefns) {
    const ps = x.params.toArray();
    const needsCtx = ps.some(isCtxParam);
    const plainParams = ps
      .filter((pp) => !isCtxParam(pp))
      .filter((pp) => pp.ty)
      .map((pp) => ({ name: pp.name.value, ty: mapParamType(pp) }));
    const hasFail =
      x.body.descendantsOfType(Ast.FailStmt).length > 0 ||
      x.body.descendantsOfType(Ast.FailExpr).length > 0;
    const touchesState = x.body
      .descendantsOfType(Ast.IdentExpr)
      .some((i) => i.ident.value === '$state');
    const callsFallible = x.body
      .descendantsOfType(Ast.CallExpr)
      .some((c) => c.fallible);
    const hasTry = x.body.descendantsOfType(Ast.QueryExpr).length > 0;
    const fallible = x.fallible || hasFail || touchesState || callsFallible || hasTry;
    let retOk: string;
    if (x.returnTy) {
      retOk = mapType(x.returnTy);
    } else {
      const hasReturnValue = x.body
        .descendantsOfType(Ast.ReturnStmt)
        .some((r) => !(r.value instanceof Ast.NoneLit));
      retOk = hasReturnValue ? 'String' : '()';
    }
    // Read-only ctx helpers take a &QueryCtx so queries can call them too;
    // helpers that write state or read $info need the full execute context.
    const writesState =
      x.body.descendantsOfType(Ast.MemberAssignStmt).some(
        (s) => s.obj instanceof Ast.IdentExpr && s.obj.ident.value === '$state'
      ) ||
      x.body.descendantsOfType(Ast.IndexAssignStmt).some(
        (s) =>
          s.obj instanceof Ast.DotExpr &&
          s.obj.obj instanceof Ast.IdentExpr &&
          s.obj.obj.ident.value === '$state'
      );
    const usesInfo = x.body
      .descendantsOfType(Ast.IdentExpr)
      .some((i) => i.ident.value === '$info');
    const hasMutCtxParam = ps.some((pp) => isCtxParam(pp) && pp.mut);
    const ctxKind: 'none' | 'read' | 'mut' = !needsCtx
      ? 'none'
      : writesState || usesInfo || hasMutCtxParam
      ? 'mut'
      : 'read';
    fnSigs[x.name.value] = { params: plainParams, retOk, fallible, needsCtx, ctxKind };
  }
  // Exec-msg variant info for delegate_exec! codegen
  const execMsgVariants: Record<string, { msgName: string; params: { name: string; ty: string }[] }> = {};
  for (const v of execMsg.variants) {
    execMsgVariants[v.fnName] = { msgName: v.msgName, params: v.params };
  }
  // Query handler return types for `query! $.#handler(...)`
  const queryReturnTypes: Record<string, string> = {};
  for (const v of queryMsg.variants) {
    queryReturnTypes[v.fnName] = v.resType;
  }
  // Reply handler ids: declared handlers first, inline `send ... reply` next
  const replyIds: Record<string, number> = {};
  replyDefns.forEach((r, i) => {
    replyIds[r.name.value] = i + 1;
  });
  const replyIdCounter = { next: replyDefns.length + 1 };
  const liftedReplies: { name: string; id: number; kind: string; body: Ast.Block }[] = [];

  // types mod - include both contract-level and top-level struct/enum definitions
  // Deduplicate by name: contract-level definitions take priority
  const contractStructNames = new Set(structDefns.map((s) => structName(s)));
  const contractEnumNames = new Set(enumDefns.map((e) => e.name.value));
  const allStructDefns = byDefnStrength([
    ...structDefns,
    ...(topLevel?.topLevelStructs || []).filter((s) => !contractStructNames.has(structName(s))),
  ]);
  const allEnumDefns = [
    ...enumDefns,
    ...(topLevel?.topLevelEnums || []).filter((e) => !contractEnumNames.has(e.name.value)),
  ];

  const contractTupleNames = new Set(tupleDefns.map((t) => t.name.value));
  const contractUnitNames = new Set(unitDefns.map((u) => u.name.value));
  const contractAliasNames = new Set(typeAliasDefns.map((a) => a.name.value));
  const allTupleDefns = [
    ...tupleDefns,
    ...(topLevel?.topLevelTuples || []).filter((t) => !contractTupleNames.has(t.name.value)),
  ];
  const allUnitDefns = [
    ...unitDefns,
    ...(topLevel?.topLevelUnits || []).filter((u) => !contractUnitNames.has(u.name.value)),
  ];
  const allAliasDefns = [
    ...typeAliasDefns,
    ...(topLevel?.topLevelAliases || []).filter((a) => !contractAliasNames.has(a.name.value)),
  ];

  const seenStructNames = new Set<string>();
  const structs: CgStruct[] = [];
  for (const x of allStructDefns) {
    if (seenStructNames.has(structName(x))) continue;
    seenStructNames.add(structName(x));
    const generics = collectTypeVars(x.fields.map((y) => y.ty));
    structs.push({
      name: structName(x) + genericsSuffix(generics),
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: mapParamType(y),
        };
      }),
    });
  }
  const tuples: CgTuple[] = allTupleDefns.map((x) => {
    const generics = collectTypeVars(x.elements.toArray());
    return {
      name: x.name.value + genericsSuffix(generics),
      elements: x.elements.map((y) => mapType(y)),
    };
  });
  const units: CgUnit[] = allUnitDefns.map((x) => {
    return {
      name: x.name.value,
    };
  });
  const enums: CgEnum[] = allEnumDefns.map((x) => {
    const generics = collectTypeVars(x.variants.toArray());
    const variants = x.variants.map((y) => {
      if (y instanceof Ast.EnumVariantStructDefn) {
        return {
          $type: 'struct' as const,
          name: y.name.value.substring(1),
          fields: y.fields.map((z) => {
            return {
              name: z.name.value,
              ty: mapParamType(z),
            };
          }),
        };
      } else if (y instanceof Ast.EnumVariantTupleDefn) {
        return {
          $type: 'tuple' as const,
          name: y.name.value.substring(1),
          elements: y.elements.map((z) => mapType(z)),
        };
      } else {
        return {
          $type: 'unit' as const,
          name: y.name.value.substring(1),
        };
      }
    });
    return {
      name: x.name.value + genericsSuffix(generics),
      variants,
    };
  });
  const aliases: CgTypeAlias[] = allAliasDefns.map((x) => {
    const generics = collectTypeVars([x.ty]);
    let ty = mapType(x.ty);
    // If the alias target is an inline defn (rendered as a bare name) that
    // uses type vars, the generated struct carries the same generics.
    if (
      generics.length > 0 &&
      (x.ty instanceof Ast.StructDefnTypeExpr ||
        x.ty instanceof Ast.EnumDefnTypeExpr ||
        x.ty instanceof Ast.TupleDefnTypeExpr)
    ) {
      ty += genericsSuffix(generics);
    }
    return {
      name: x.name.value + genericsSuffix(generics),
      ty,
    };
  });
  const errors: CgStruct[] = errorDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: mapParamType(y),
        };
      }),
    };
  });
  const events: CgStruct[] = eventDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: mapParamType(y),
        };
      }),
    };
  });
  const typesMod = new CgTypesMod(
    structs,
    tuples,
    units,
    enums,
    aliases,
    errors,
    events
  );


  const implExtraItems: string[] = [];
  // Generate top-level const declarations from source file
  const topLevelConstNames = new Set<string>();
  if (topLevel?.topLevelConsts) {
    for (const c of topLevel.topLevelConsts) {
      const constName = c.name.value;
      topLevelConstNames.add(constName);
      // Use the declared type annotation if present, else infer from value
      let constType = '&str';
      let constVal = '';
      const PRIMITIVE_CONST_TYPES = new Set([
        'u8', 'u16', 'u32', 'u64', 'i64', 'bool',
      ]);
      const declaredTy = c.ty ? mapType(c.ty) : null;
      if (c.value instanceof Ast.StringLit) {
        constType = '&str';
        constVal = c.value.value; // already quoted
      } else if (c.value instanceof Ast.IntLit) {
        constType =
          declaredTy && PRIMITIVE_CONST_TYPES.has(declaredTy) ? declaredTy : 'u64';
        constVal = c.value.value;
      } else if (c.value instanceof Ast.BoolLit) {
        constType = 'bool';
        constVal = c.value.value ? 'true' : 'false';
      } else if (c.value instanceof Ast.DecLit) {
        // Decimal can't be constructed in const context; expose the literal
        // as a string constant (parse at use site).
        constType = '&str';
        constVal = `"${c.value.value}"`;
      } else {
        constType = '&str';
        constVal = '"unknown"';
      }
      implExtraItems.push(`pub const ${constName}: ${constType} = ${constVal};`);
    }
  }

  // Scan for undeclared constants (ALL_CAPS identifiers) and generate stubs
  const definedNames = new Set([
    ...stateDefns.map((s) => s.name.value.toUpperCase()),
    ...structDefns.map((s) => structName(s)),
    ...enumDefns.map((e) => e.name.value),
    ...errorDefns.map((e) => e.name.value),
    ...topLevelConstNames,
  ]);
  const constantRefs = new Set<string>();
  for (const ident of ast.descendantsOfType(Ast.IdentExpr)) {
    const name = ident.ident.value;
    // ALL_CAPS with at least 2 chars and underscores → likely a constant
    if (/^[A-Z][A-Z0-9_]+$/.test(name) && !definedNames.has(name)) {
      constantRefs.add(name);
    }
  }
  // Generate constant stubs in the implementation module
  const CONSTANT_TYPES: Record<string, string> = {
    COMMISSION_RATE: 'u64 = 3',  // 3 permille = 0.3%
    MINIMUM_LIQUIDITY_AMOUNT: 'Uint128 = Uint128::new(1000)',
    INSTANTIATE_REPLY_ID: 'u64 = 1',
    DEFAULT_LIMIT: 'u32 = 10',
    MAX_LIMIT: 'u32 = 30',
  };
  for (const name of constantRefs) {
    const typeDef = CONSTANT_TYPES[name] || 'u64 = 0';
    implExtraItems.push(`pub const ${name}: ${typeDef};`);
  }


  const typesExtraItems: string[] = [];
  // Scan for type references used in matches!/is-expressions that aren't defined
  // Add stub enums for external types like Cw20HookMsg
  const definedTypeNames = new Set([
    ...allStructDefns.map((s) => structName(s)),
    ...allEnumDefns.map((e) => e.name.value),
    ...allTupleDefns.map((t) => t.name.value),
    ...allUnitDefns.map((u) => u.name.value),
    ...allAliasDefns.map((a) => a.name.value),
  ]);
  // Check IsExpr and CallExpr for type names used but not defined
  const KNOWN_EXTERNAL_STUBS: Record<string, string> = {
    Cw20HookMsg: `#[cw_serde]\npub enum Cw20HookMsg {\n  Swap { belief_price: Option<Decimal>, max_spread: Option<Decimal>, to: Option<String>, deadline: Option<u64> },\n  WithdrawLiquidity { min_assets: Option<[Asset; 2]>, deadline: u64 },\n}`,
    PoolResponse: `#[cw_serde]\npub struct PoolResponse { pub assets: Vec<Asset>, pub total_share: Uint128 }`,
    SimulationResponse: `#[cw_serde]\npub struct SimulationResponse { pub return_amount: Uint128, pub spread_amount: Uint128, pub commission_amount: Uint128 }`,
    ReverseSimulationResponse: `#[cw_serde]\npub struct ReverseSimulationResponse { pub offer_amount: Uint128, pub spread_amount: Uint128, pub commission_amount: Uint128 }`,
    MinterResponse: `#[cw_serde]\npub struct MinterResponse { pub minter: Addr, pub cap: Option<Uint128> }`,
  };
  const usesCw20Instantiate = ast.descendantsOfType(Ast.DotExpr).some(
    (d) =>
      d.obj instanceof Ast.IdentExpr &&
      d.obj.ident.value === 'Cw20' &&
      d.memberName.value.replace(/^#/, '') === 'instantiate'
  );
  if (usesCw20Instantiate) {
    typesExtraItems.push(
      `/// Serialization-compatible stand-in for cw20-base's InstantiateMsg\n#[cw_serde]\npub struct Cw20InstantiateMsg {\n  pub name: String,\n  pub symbol: String,\n  pub decimals: u8,\n  pub initial_balances: Vec<cw20::Cw20Coin>,\n  pub mint: Option<cw20::MinterResponse>,\n}`
    );
  }
  for (const [typeName, stub] of Object.entries(KNOWN_EXTERNAL_STUBS)) {
    if (!definedTypeNames.has(typeName)) {
      // Check if this type is actually referenced in the contract
      const isReferenced = ast.descendantsOfType(Ast.IdentExpr)
        .some((id: any) => id.ident.value === typeName)
        || ast.descendantsOfType(Ast.IdentTypeExpr)
          .some((id: any) => id.ident.value === typeName);
      if (isReferenced) {
        typesExtraItems.push(stub);
      }
    }
  }

  // Generic fallback stubs: any type name referenced in generated signatures
  // (msg/state/type fields) that is neither defined in the contract nor a
  // known cosmwasm/std type gets an opaque alias so the crate still compiles.
  const KNOWN_RUST_TYPES = new Set([
    'String', 'Option', 'Vec', 'HashMap', 'Result', 'Binary', 'Addr', 'Coin',
    'Uint128', 'Uint256', 'Decimal', 'Decimal256', 'Response', 'Item', 'Map',
    'Cw20ReceiveMsg', 'bool', 'Self',
    ...Object.keys(KNOWN_EXTERNAL_STUBS),
  ]);
  const referencedTys: string[] = [];
  const collectTys = (ty: string) => referencedTys.push(ty);
  instantiateParams.forEach((p) => collectTys(p.ty));
  execMsg.variants.forEach((v) => v.params.forEach((p) => collectTys(p.ty)));
  queryMsg.variants.forEach((v) => {
    v.params.forEach((p) => collectTys(p.ty));
    collectTys(v.resType);
  });
  stateFields.forEach((f) => {
    collectTys(f.ty);
    if (f.$type === 'map') collectTys(f.idxTy);
  });
  [...structs, ...errors, ...events].forEach((s) =>
    s.fields.forEach((f) => collectTys(f.ty))
  );
  tuples.forEach((t) => t.elements.forEach((e) => collectTys(e)));
  enums.forEach((e) =>
    e.variants.forEach((v) => {
      if (v.$type === 'struct') v.fields.forEach((f) => collectTys(f.ty));
      if (v.$type === 'tuple') v.elements.forEach((el) => collectTys(el));
    })
  );
  aliases.forEach((a) => collectTys(a.ty));
  const stubTypeNames = new Set<string>();
  const stubModTypes: Record<string, Set<string>> = {};
  const genericTypeVars = new Set(['T', 'U', 'V', 'W']);
  for (const ty of referencedTys) {
    // Qualified paths like Wasm::ExecMsg → module stub
    for (const m of ty.matchAll(/([A-Z][A-Za-z0-9_]*)::([A-Za-z][A-Za-z0-9_]*)/g)) {
      if (!KNOWN_RUST_TYPES.has(m[1]) && !definedTypeNames.has(m[1])) {
        (stubModTypes[m[1]] ||= new Set()).add(m[2]);
      }
    }
    const bare = ty.replace(/([A-Z][A-Za-z0-9_]*)::([A-Za-z][A-Za-z0-9_]*)/g, '');
    for (const m of bare.matchAll(/[A-Za-z_][A-Za-z0-9_]*/g)) {
      const name = m[0];
      if (!/^[A-Z]/.test(name)) continue;
      if (KNOWN_RUST_TYPES.has(name)) continue;
      if (definedTypeNames.has(name)) continue;
      if (genericTypeVars.has(name)) continue;
      // Skip names of aliases/units defined in this contract
      if (allUnitDefns.some((u) => u.name.value === name)) continue;
      if (allAliasDefns.some((a) => a.name.value === name)) continue;
      stubTypeNames.add(name);
    }
  }
  for (const name of stubTypeNames) {
    typesExtraItems.push(
      `/// Opaque stub for unresolved external type \`${name}\`\npub type ${name} = cosmwasm_std::Binary;`
    );
  }
  for (const [modName, tys] of Object.entries(stubModTypes)) {
    const inner = [...tys]
      .map((t) => `pub type ${t} = cosmwasm_std::Binary;`)
      .join('\n');
    typesExtraItems.push(
      `/// Opaque stub for unresolved external module \`${modName}\`\npub mod ${modName} {\n${inner}\n}`
    );
  }


  // Names that resolved to opaque Binary stubs: member access on these
  // degrades to todo!() in block codegen.
  const stubTypes = new Set<string>([
    ...stubTypeNames,
    ...Object.keys(stubModTypes),
  ]);
  // Stub constants get known types for coercion purposes
  for (const name of constantRefs) {
    if (!constTypes[name]) {
      constTypes[name] = (CONSTANT_TYPES[name] || 'u64 = 0').split(' ')[0];
    }
  }

  const cgCtx: CgBlockContext = {
    stateFieldNames,
    errorNames,
    errorFields,
    errorFieldTypes,
    execHandlerNames,
    queryHandlerNames,
    helperFnNames,
    eventNames,
    structFields,
    structFieldTypes,
    tupleTypes,
    stateTypes,
    enumVariantFields,
    enumVariants,
    fieldTypeByName,
    knownTypeNames,
    constTypes,
    fnSigs,
    execMsgVariants,
    queryReturnTypes,
    replyIds,
    replyIdCounter,
    liftedReplies,
    stubTypes,
  };

  // impl mod
  const toParamTypes = (ps: { name: string; ty: string }[]) =>
    Object.fromEntries(ps.map((p) => [p.name, p.ty]));
  const instantiateImplFn: CgInstantiateImplFn = {
    params: instantiateParams,
    body: instantiateDefn
      ? blockToCg(instantiateDefn.body, {
          ...cgCtx,
          handlerType: 'instantiate',
          paramNames: instantiateParams.map((y) => y.name),
          paramTypes: toParamTypes(instantiateParams),
          returnType: 'Response',
        })
      : [],
  };
  const execImplFns: CgExecImplFn[] = execDefns.map((x) => {
    const params = x.params.map((y) => ({
      name: y.name.value,
      ty: mapParamType(y),
    }));
    return {
      fnName: x.name.value.substring(1),
      msgName: snakeToPascal(x.name.value.substring(1)),
      params,
      body: blockToCg(x.body, {
        ...cgCtx,
        handlerType: 'exec',
        paramNames: params.map((y) => y.name),
        paramTypes: toParamTypes(params),
        returnType: 'Response',
      }),
    };
  });
  const queryImplFns: CgQueryImplFn[] = queryDefns.map((x) => {
    const params = x.params.map((y) => ({
      name: y.name.value,
      ty: mapParamType(y),
    }));
    return {
      fnName: x.name.value.substring(1),
      msgName: snakeToPascal(x.name.value.substring(1)),
      params,
      resType: mapType(x.returnTy),
      body: blockToCg(x.body, {
        ...cgCtx,
        handlerType: 'query',
        paramNames: params.map((y) => y.name),
        paramTypes: toParamTypes(params),
        returnType: mapType(x.returnTy),
      }),
    };
  });
  // helper fn definitions
  const helperFns: CgHelperFn[] = fnDefns.map((x) => {
    const fnName = x.name.value;
    const sig = fnSigs[fnName];
    const params = x.params.toArray();
    // ctx goes LAST so call-site args that read ctx (e.g. $env.block.time)
    // are evaluated before the &mut ctx borrow is taken.
    const ctxParamTy = sig.ctxKind === 'read' ? '&QueryCtx' : '&mut ExecuteCtx';
    const fnParams = [
      ...sig.params,
      ...(sig.needsCtx ? [{ name: 'ctx', ty: ctxParamTy }] : []),
    ];
    const returnType = sig.fallible
      ? `Result<${sig.retOk}, ContractError>`
      : sig.retOk;
    // Generic type params used in the signature (e.g. fn f[%T](x: %T))
    const generics = collectTypeVars([
      ...params.filter((pp) => !isCtxParam(pp)).map((pp) => pp.ty),
      x.returnTy,
    ]);
    return {
      name: fnName + genericsSuffix(generics),
      params: fnParams,
      returnType,
      body: blockToCg(x.body, {
        ...cgCtx,
        handlerType: 'helper',
        paramNames: params.map((pp) => pp.name.value),
        paramTypes: toParamTypes(sig.params),
        returnType: sig.retOk,
        fnResultWrap: sig.fallible,
        hasCtx: sig.needsCtx,
        selfCtxKind: sig.ctxKind,
      }),
      needsCtx: sig.needsCtx,
    };
  });

  // reply handler impl fns (declared reply.success / reply.error defns)
  const replyImplFns = replyDefns.map((r) => ({
    name: r.name.value,
    id: replyIds[r.name.value],
    kind: r.kind.value,
    body: blockToCg(r.body, {
      ...cgCtx,
      handlerType: 'reply' as const,
      paramNames: [],
      paramTypes: {},
      returnType: 'Response',
    }),
  }));

  // migrate impl fn
  const migrateImplFn = migrateDefn
    ? {
        params: migrateParams || [],
        body: blockToCg(migrateDefn.body, {
          ...cgCtx,
          handlerType: 'migrate' as const,
          paramNames: (migrateParams || []).map((y) => y.name),
          paramTypes: toParamTypes(migrateParams || []),
          returnType: 'Response',
        }),
      }
    : null;

  // Inline `send ... reply(...) on success { ... }` bodies lifted out of
  // handler blocks become additional reply impl fns.
  for (const lr of liftedReplies) {
    replyImplFns.push({
      name: lr.name,
      id: lr.id,
      kind: lr.kind,
      body: blockToCg(lr.body, {
        ...cgCtx,
        handlerType: 'reply' as const,
        paramNames: [],
        paramTypes: {},
        returnType: 'Response',
      }),
    });
  }
  // Register all reply handlers on the contract-mod dispatcher
  for (const r of replyImplFns) {
    replyHandlers.push({ name: r.name, id: r.id, kind: r.kind });
  }

  const implMod = new CgImplentationMod(
    instantiateImplFn,
    execImplFns,
    queryImplFns,
    helperFns,
    replyImplFns,
    migrateImplFn
  );
  implMod.extraRawItems.push(...implExtraItems);
  typesMod.extraRawItems.push(...typesExtraItems);

  // impl blocks → inherent impls and operator-trait impls on generated types
  const OPERATOR_TRAITS: Record<string, { trait: string; method: string }> = {
    __add__: { trait: 'Add', method: 'add' },
    __sub__: { trait: 'Sub', method: 'sub' },
    __mul__: { trait: 'Mul', method: 'mul' },
    __div__: { trait: 'Div', method: 'div' },
    __rem__: { trait: 'Rem', method: 'rem' },
  };
  for (const im of ctxAllImplDefns) {
    const tyName = im.name.value;
    const generics = im.typeParams.map((tv) => mapTypeVarName(tv.value));
    const genArgs = generics.length > 0 ? `<${generics.join(', ')}>` : '';
    const genBounds =
      generics.length > 0
        ? `<${generics.map((g) => `${g}: Clone`).join(', ')}>`
        : '';
    const methods: string[] = [];
    for (const fn of im.body.descendantsOfType(Ast.FnDefn)) {
      const ps = fn.params.toArray();
      const hasSelf = ps.length > 0 && ps[0].name.value === 'self';
      const rest = (hasSelf ? ps.slice(1) : ps).filter((pp) => pp.ty);
      const restSig = rest
        .map((pp) => `${pp.name.value}: ${mapParamType(pp)}`)
        .join(', ');
      const ret = fn.returnTy ? mapType(fn.returnTy) : '()';
      const body = blockToCg(fn.body, {
        ...cgCtx,
        handlerType: 'method',
        paramNames: ['self', ...rest.map((pp) => pp.name.value)],
        paramTypes: {
          ...toParamTypes(
            rest.map((pp) => ({ name: pp.name.value, ty: mapParamType(pp) }))
          ),
          self: tyName,
        },
        returnType: ret,
      }).join('\n');
      const op = OPERATOR_TRAITS[fn.name.value];
      if (op) {
        typesMod.extraRawItems.push(
          `impl${genBounds} std::ops::${op.trait} for ${tyName}${genArgs} {\n` +
            `type Output = ${ret};\n` +
            `fn ${op.method}(self${restSig ? ', ' + restSig : ''}) -> ${ret} {\n${body}\n}\n}`
        );
      } else {
        methods.push(
          `pub fn ${fn.name.value}(&self${restSig ? ', ' + restSig : ''}) -> ${ret} {\n${body}\n}`
        );
      }
    }
    if (methods.length > 0) {
      typesMod.extraRawItems.push(
        `impl${genBounds} ${tyName}${genArgs} {\n${methods.join('\n')}\n}`
      );
    }
  }

  return new CgContractCrate(
    name,
    stateMod,
    errorMod,
    msgMod,
    contractMod,
    implMod,
    typesMod,
    null
  );
}

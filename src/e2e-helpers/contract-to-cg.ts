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
  None: 'None',
};

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
      return (node as Ast.TypeVarExpr).typeVar.value;

    case 'IdentTypeExpr': {
      const name = (node as Ast.IdentTypeExpr).ident.value;
      return PRIMITIVE_TYPE_MAP[name] || name;
    }

    case 'StructDefnTypeExpr': {
      const s = node as Ast.StructDefnTypeExpr;
      return s.structDefn.name.value;
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
      const text = node.$antlrParseRuleCtx?.text;
      if (text && PRIMITIVE_TYPE_MAP[text]) {
        return PRIMITIVE_TYPE_MAP[text];
      }
      return text || 'String';
    }
  }
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
      contract.fnDefns.push(x);
    }
  });
  return contract;
}
export interface TopLevelTypes {
  topLevelStructs?: Ast.StructDefn[];
  topLevelEnums?: Ast.EnumDefn[];
}

export function contractAstToCg(ast: Ast.ContractDefn, topLevel?: TopLevelTypes): CgContractCrate {
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
  } = indexContractNodes(ast);

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
        idxTy: mapType(x.indexTy),
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
          .filter((a) => a.name)
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
  if (!instantiateDefn) {
    throw new Error('No instantiate definition found');
  }
  let instantiateMsg = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: mapParamType(x),
    })),
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
  const msgMod = new CgMsgMod(instantiateMsg, execMsg, queryMsg);

  // contract mod
  let instantiateEntrypoint: CgInstantiateEntrypoint = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: mapParamType(x),
    })),
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
  const contractMod = new CgContractMod(
    instantiateEntrypoint,
    execEntrypoint,
    queryEntrypoint
  );

  // Build context for block codegen
  const stateFieldNames = stateDefns.map((x) => x.name.value);
  const errorNames = errorDefns.map((x) => x.name.value);
  const execHandlerNames = execDefns.map((x) => x.name.value.substring(1));
  const queryHandlerNames = queryDefns.map((x) => x.name.value.substring(1));
  const helperFnNames = fnDefns.map((x) => x.name.value);
  const cgCtx: CgBlockContext = { stateFieldNames, errorNames, execHandlerNames, queryHandlerNames, helperFnNames };

  // impl mod
  const instantiateImplFn: CgInstantiateImplFn = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: mapParamType(x),
    })),
    body: blockToCg(instantiateDefn.body, { ...cgCtx, handlerType: 'instantiate' }),
  };
  const execImplFns: CgExecImplFn[] = execDefns.map((x) => {
    return {
      fnName: x.name.value.substring(1),
      msgName: snakeToPascal(x.name.value.substring(1)),
      params: x.params.map((y) => {
        return {
          name: y.name.value,
          ty: mapParamType(y),
        };
      }),
      body: blockToCg(x.body, { ...cgCtx, handlerType: 'exec' }),
    };
  });
  const queryImplFns: CgQueryImplFn[] = queryDefns.map((x) => {
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
      body: blockToCg(x.body, { ...cgCtx, handlerType: 'query' }),
    };
  });
  // helper fn definitions
  const helperFns: CgHelperFn[] = fnDefns.map((x) => {
    const fnName = x.name.value;
    // Check if first param is $ (needs context) — skip the $ param
    const params = x.params.toArray();
    const needsCtx = params.length > 0 && params[0].name.value === '$';
    const fnParams = (needsCtx ? params.slice(1) : params)
      .filter((p) => p.ty) // skip params without type annotation
      .map((p) => ({
        name: p.name.value,
        ty: mapParamType(p),
      }));
    // Infer return type: if annotated use that, else check body for fail!/Err patterns
    let returnType: string;
    if (x.returnTy) {
      returnType = mapType(x.returnTy);
    } else {
      // Check if function body contains fail! statements (assertion-style function)
      const hasFailStmts = x.body.descendantsOfType(Ast.FailStmt).length > 0
        || x.body.descendantsOfType(Ast.FailExpr).length > 0;
      if (hasFailStmts) {
        returnType = 'Result<(), ContractError>';
      } else {
        returnType = 'String';
      }
    }
    return {
      name: fnName,
      params: fnParams,
      returnType,
      body: blockToCg(x.body, { ...cgCtx, handlerType: 'exec' }),
      needsCtx,
    };
  });

  const implMod = new CgImplentationMod(
    instantiateImplFn,
    execImplFns,
    queryImplFns,
    helperFns
  );

  // types mod - include both contract-level and top-level struct/enum definitions
  // Deduplicate by name: contract-level definitions take priority
  const contractStructNames = new Set(structDefns.map((s) => s.name.value));
  const contractEnumNames = new Set(enumDefns.map((e) => e.name.value));
  const allStructDefns = [
    ...structDefns,
    ...(topLevel?.topLevelStructs || []).filter((s) => !contractStructNames.has(s.name.value)),
  ];
  const allEnumDefns = [
    ...enumDefns,
    ...(topLevel?.topLevelEnums || []).filter((e) => !contractEnumNames.has(e.name.value)),
  ];

  const structs: CgStruct[] = allStructDefns.map((x) => {
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
  const tuples: CgTuple[] = tupleDefns.map((x) => {
    return {
      name: x.name.value,
      elements: x.elements.map((y) => mapType(y)),
    };
  });
  const units: CgUnit[] = unitDefns.map((x) => {
    return {
      name: x.name.value,
    };
  });
  const enums: CgEnum[] = allEnumDefns.map((x) => {
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
      name: x.name.value,
      variants,
    };
  });
  const aliases: CgTypeAlias[] = typeAliasDefns.map((x) => {
    return {
      name: x.name.value,
      ty: mapType(x.ty),
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

  // Scan for undeclared constants (ALL_CAPS identifiers) and generate stubs
  const definedNames = new Set([
    ...stateDefns.map((s) => s.name.value.toUpperCase()),
    ...structDefns.map((s) => s.name.value),
    ...enumDefns.map((e) => e.name.value),
    ...errorDefns.map((e) => e.name.value),
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
  };
  for (const name of constantRefs) {
    const typeDef = CONSTANT_TYPES[name] || 'u64 = 0';
    implMod.extraRawItems.push(`pub const ${name}: ${typeDef};`);
  }

  // Scan for type references used in matches!/is-expressions that aren't defined
  // Add stub enums for external types like Cw20HookMsg
  const definedTypeNames = new Set([
    ...allStructDefns.map((s) => s.name.value),
    ...allEnumDefns.map((e) => e.name.value),
    ...tupleDefns.map((t) => t.name.value),
    ...unitDefns.map((u) => u.name.value),
  ]);
  // Check IsExpr and CallExpr for type names used but not defined
  const KNOWN_EXTERNAL_STUBS: Record<string, string> = {
    Cw20HookMsg: `#[cw_serde]\npub enum Cw20HookMsg {\n  Swap { belief_price: Option<Decimal>, max_spread: Option<Decimal>, to: Option<String>, deadline: Option<u64> },\n  WithdrawLiquidity { min_assets: Option<[Asset; 2]>, deadline: u64 },\n}`,
    PoolResponse: `#[cw_serde]\npub struct PoolResponse { pub assets: Vec<Asset>, pub total_share: Uint128 }`,
    SimulationResponse: `#[cw_serde]\npub struct SimulationResponse { pub return_amount: Uint128, pub spread_amount: Uint128, pub commission_amount: Uint128 }`,
    ReverseSimulationResponse: `#[cw_serde]\npub struct ReverseSimulationResponse { pub offer_amount: Uint128, pub spread_amount: Uint128, pub commission_amount: Uint128 }`,
    MinterResponse: `#[cw_serde]\npub struct MinterResponse { pub minter: Addr, pub cap: Option<Uint128> }`,
  };
  for (const [typeName, stub] of Object.entries(KNOWN_EXTERNAL_STUBS)) {
    if (!definedTypeNames.has(typeName)) {
      // Check if this type is actually referenced in the contract
      const isReferenced = ast.descendantsOfType(Ast.IdentExpr)
        .some((id: any) => id.ident.value === typeName)
        || ast.descendantsOfType(Ast.IdentTypeExpr)
          .some((id: any) => id.ident.value === typeName);
      if (isReferenced) {
        typesMod.extraRawItems.push(stub);
      }
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

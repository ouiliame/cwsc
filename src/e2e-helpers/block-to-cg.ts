import * as Ast from '../ast';
import { mapType } from './contract-to-cg';

export interface CgStateTypeInfo {
  kind: 'item' | 'map';
  ty: string;
  keyTy?: string;
}

export interface CgFnSig {
  params: { name: string; ty: string }[];
  retOk: string;
  fallible: boolean;
  needsCtx: boolean;
  /** 'read' → helper takes &QueryCtx; 'mut' → &mut ExecuteCtx */
  ctxKind: 'none' | 'read' | 'mut';
}

export interface CgEnumVariantInfo {
  shape: 'struct' | 'tuple' | 'unit';
  fields: { name: string; ty: string }[];
}

export interface CgBlockContext {
  stateFieldNames: string[];
  errorNames: string[];
  handlerType?:
    | 'instantiate'
    | 'exec'
    | 'query'
    | 'helper'
    | 'reply'
    | 'migrate'
    | 'method';
  execHandlerNames?: string[];
  queryHandlerNames?: string[];
  helperFnNames?: string[];
  eventNames?: string[];
  /** struct name → ordered field names (for positional constructors) */
  structFields?: Record<string, string[]>;
  /** struct name → { field → rust type } */
  structFieldTypes?: Record<string, Record<string, string>>;
  /** tuple struct name → ordered element rust types */
  tupleTypes?: Record<string, string[]>;
  /** state field → type info */
  stateTypes?: Record<string, CgStateTypeInfo>;
  /** enum name → { variant field name → rust type } (for accessor methods) */
  enumVariantFields?: Record<string, Record<string, string>>;
  /** enum name → variant → shape + ordered fields */
  enumVariants?: Record<string, Record<string, CgEnumVariantInfo>>;
  /** struct field name → enum type name, when a field's declared type is an enum */
  fieldTypeByName?: Record<string, string>;
  /** parameter names of the enclosing handler/function (for scope tracking) */
  paramNames?: string[];
  /** parameter name → rust type of the enclosing handler/function */
  paramTypes?: Record<string, string>;
  /** declared error name → ordered field names */
  errorFields?: Record<string, string[]>;
  /** declared error name → { field → rust type } */
  errorFieldTypes?: Record<string, Record<string, string>>;
  /** all type-ish names defined in the contract (structs, enums, errors, ...) */
  knownTypeNames?: string[];
  /** const name → rust type */
  constTypes?: Record<string, string>;
  /** helper fn name → signature */
  fnSigs?: Record<string, CgFnSig>;
  /** exec handler name → ExecuteMsg variant info (for delegate_exec!) */
  execMsgVariants?: Record<string, { msgName: string; params: { name: string; ty: string }[] }>;
  /** query handler name → rust result type (for query! $.#handler) */
  queryReturnTypes?: Record<string, string>;
  /** reply handler name → dispatch id */
  replyIds?: Record<string, number>;
  /** shared counter for inline `send ... reply` handler ids */
  replyIdCounter?: { next: number };
  /** inline reply bodies lifted out of handler blocks */
  liftedReplies?: { name: string; id: number; kind: string; body: Ast.Block }[];
  /** rust "success" type of the enclosing body (query res type, helper T, ...) */
  returnType?: string;
  /** helper returns Result<T, ContractError>: wrap `return v` in Ok(...) */
  fnResultWrap?: boolean;
  /** false when the enclosing fn has no `ctx` binding (plain helpers/methods) */
  hasCtx?: boolean;
  /** ctx kind of the enclosing helper fn body */
  selfCtxKind?: 'none' | 'read' | 'mut';
  /** type names that resolved to opaque Binary stubs */
  stubTypes?: Set<string>;
}

const DEFAULT_CTX: CgBlockContext = {
  stateFieldNames: [],
  errorNames: [],
};

// Known type names that use :: for static method calls
// NOTE: U256/Dec256 are pragmatically mapped to Uint128/Decimal so that
// mixed U128/U256 arithmetic in the source unifies to one numeric domain in
// the generated Rust (cosmwasm-std has no Decimal*Uint256 etc. cross impls).
const STATIC_TYPE_MAP: Record<string, string> = {
  Addr: 'Addr',
  Address: 'Addr',
  Dec: 'Decimal',
  Decimal: 'Decimal',
  Dec256: 'Decimal',
  Decimal256: 'Decimal',
  U128: 'Uint128',
  U256: 'Uint128',
  Uint128: 'Uint128',
  Uint256: 'Uint128',
};

// Identifiers that are always available in generated code even though they
// are not declared in the enclosing scope.
const BUILTIN_IDENTS = new Set([
  'min', 'max', 'event', 'deserialize', 'ctx', 'self', 'true', 'false', 'msg',
]);

// Capitalized names that map to real Rust items in the generated code
// (primitive constructors, cosmwasm types, Option/Result variants, ...).
const BUILTIN_TYPE_IDENTS = new Set([
  'Some', 'None', 'Ok', 'Err', 'String', 'Vec', 'List', 'HashMap',
  'Addr', 'Address', 'Coin', 'Binary', 'Event', 'Response', 'Bank', 'Wasm', 'CW2', 'Cw20',
  'U8', 'U16', 'U32', 'U64', 'U128', 'U256', 'Int', 'Bool',
  'Uint128', 'Uint256', 'Dec', 'Decimal', 'Dec256', 'Decimal256',
  // types stubbed by KNOWN_EXTERNAL_STUBS in contract-to-cg when referenced
  'Asset', 'MinterResponse', 'Cw20HookMsg', 'PoolResponse',
  'SimulationResponse', 'ReverseSimulationResponse', 'Cw20ReceiveMsg',
]);

// Fields of well-known cosmwasm/cw20 types, for lightweight type inference.
const BUILTIN_FIELD_TYPES: Record<string, Record<string, string>> = {
  Coin: { denom: 'String', amount: 'Uint128' },
  'cw20::TokenInfoResponse': {
    name: 'String',
    symbol: 'String',
    decimals: 'u8',
    total_supply: 'Uint128',
  },
  'cw20::BalanceResponse': { balance: 'Uint128' },
  // KNOWN_EXTERNAL_STUBS shapes (see contract-to-cg)
  PoolResponse: { assets: 'Vec<Asset>', total_share: 'Uint128' },
  SimulationResponse: {
    return_amount: 'Uint128',
    spread_amount: 'Uint128',
    commission_amount: 'Uint128',
  },
  ReverseSimulationResponse: {
    offer_amount: 'Uint128',
    spread_amount: 'Uint128',
    commission_amount: 'Uint128',
  },
  MinterResponse: { minter: 'Addr', cap: 'Option<Uint128>' },
};

// cw20 execute messages callable via `exec! Cw20(addr).#method(...)`
const CW20_EXEC_MSGS: Record<string, { msgName: string; fields: [string, string][] }> = {
  transfer: { msgName: 'Transfer', fields: [['recipient', 'String'], ['amount', 'Uint128']] },
  burn: { msgName: 'Burn', fields: [['amount', 'Uint128']] },
  mint: { msgName: 'Mint', fields: [['recipient', 'String'], ['amount', 'Uint128']] },
  send: { msgName: 'Send', fields: [['contract', 'String'], ['amount', 'Uint128'], ['msg', 'Binary']] },
  transfer_from: { msgName: 'TransferFrom', fields: [['owner', 'String'], ['recipient', 'String'], ['amount', 'Uint128']] },
};

// WasmMsg::Instantiate field order/types/defaults
const WASM_INSTANTIATE_FIELDS: [string, string, string][] = [
  ['admin', 'Option<String>', 'None'],
  ['code_id', 'u64', '0u64'],
  ['msg', 'Binary', 'Binary::default()'],
  ['funds', 'Vec<Coin>', 'vec![]'],
  ['label', 'String', 'String::new()'],
];

export class CgBlockVisitor extends Ast.AstVisitor<string> {
  private _todoVars = new Set<string>();
  // Names known to be bound in (or above) the current scope. Used to detect
  // statements that reference undefined variables so they can degrade to
  // todo!() instead of producing non-compiling Rust.
  private _scope = new Set<string>();
  // Best-known rust type of in-scope bindings ('#int' = untyped int literal)
  private _varTypes = new Map<string, string>();
  // > 0 while rendering inside a closure body: `?` is invalid there, so
  // fallible calls use .unwrap() and `return` is not Ok-wrapped.
  private _closureDepth = 0;

  constructor(public ctx: CgBlockContext) {
    super();
    (ctx.paramNames || []).forEach((p) => this._scope.add(p));
    for (const [k, v] of Object.entries(ctx.paramTypes || {})) {
      this._varTypes.set(k, v);
    }
  }

  private declare(name: string, ty?: string | null) {
    this._scope.add(name);
    if (ty) this._varTypes.set(name, ty);
  }

  /** Is this rust type an opaque stub (Binary alias) — field access on it
   * can never compile. */
  private isStubTy(ty: string | null | undefined): boolean {
    if (!ty) return false;
    if (ty === 'Binary') return true;
    if (this.ctx.stubTypes?.has(ty)) return true;
    const base = ty.split('::')[0].split('<')[0];
    return !!this.ctx.stubTypes?.has(base) && ty.includes('::');
  }

  private hasCtx(): boolean {
    if (this.ctx.hasCtx !== undefined) return this.ctx.hasCtx;
    return this.ctx.handlerType !== 'method';
  }

  /** `?` outside closures; `.unwrap()` inside them. */
  private trySuffix(): string {
    return this._closureDepth > 0 ? '.unwrap()' : '?';
  }

  // --- Type inference & coercion -----------------------------------------

  /** Best-effort rust type of an expression; '#int' = untyped int literal. */
  private inferType(expr: Ast.Expr | null | undefined): string | null {
    if (!expr) return null;
    if (expr instanceof Ast.IntLit) return '#int';
    if (expr instanceof Ast.DecLit) return 'Decimal';
    if (expr instanceof Ast.StringLit) return 'String';
    if (expr instanceof Ast.BoolLit) return 'bool';
    if (expr instanceof Ast.GroupedExpr) return this.inferType(expr.expr);
    if (expr instanceof Ast.IdentExpr) {
      const n = expr.ident.value;
      if (this._varTypes.has(n)) return this._varTypes.get(n)!;
      if (this.ctx.constTypes?.[n]) return this.ctx.constTypes[n];
      if (/^[A-Z][A-Z0-9_]+$/.test(n)) return 'u64'; // generated const stub default
      return null;
    }
    if (expr instanceof Ast.DotExpr) {
      const member = this.stripHash(expr.memberName.value);
      if (expr.obj instanceof Ast.IdentExpr) {
        const obj = expr.obj.ident.value;
        if (obj === '$state') return this.ctx.stateTypes?.[member]?.ty ?? null;
        if (obj === '$info') {
          if (member === 'sender') return 'Addr';
          if (member === 'funds') return 'Vec<Coin>';
          return null;
        }
      }
      let objTy = this.inferType(expr.obj);
      if (objTy?.startsWith('Option<')) objTy = objTy.slice(7, -1);
      if (objTy) {
        const f =
          this.ctx.structFieldTypes?.[objTy]?.[member] ??
          this.ctx.enumVariantFields?.[objTy]?.[member] ??
          BUILTIN_FIELD_TYPES[objTy]?.[member];
        if (f) return f;
      }
      return null;
    }
    if (expr instanceof Ast.IndexExpr) {
      if (expr.obj instanceof Ast.DotExpr && this.isStateDotExpr(expr.obj)) {
        const f = this.stripHash(expr.obj.memberName.value);
        const t = this.ctx.stateTypes?.[f]?.ty ?? null;
        // Option-valued map reads are auto-unwrapped in codegen
        if (t?.startsWith('Option<')) return t.slice(7, -1);
        return t;
      }
      const t = this.inferType(expr.obj);
      if (t) {
        const arr = t.match(/^\[(.+); *\d+\]$/);
        if (arr) return arr[1];
        const vec = t.match(/^Vec<(.+)>$/);
        if (vec) return vec[1];
      }
      return null;
    }
    if (expr instanceof Ast.CallExpr) {
      if (expr.fn instanceof Ast.IdentExpr) {
        const n = expr.fn.ident.value;
        if (n === 'U128' || n === 'Uint128' || n === 'U256' || n === 'Uint256')
          return 'Uint128';
        if (n === 'U64') return 'u64';
        if (n === 'Dec') return 'Decimal';
        if (n === 'String') return 'String';
        if (n === 'Addr') return 'Addr';
        if (n === 'Coin') return 'Coin';
        const sig = this.ctx.fnSigs?.[n];
        if (sig) return sig.retOk;
        if (this.ctx.structFields?.[n]) return n;
        if (this.ctx.tupleTypes?.[n]) return n;
      }
      if (expr.fn instanceof Ast.DotExpr) {
        const member = this.stripHash(expr.fn.memberName.value);
        if (
          expr.fn.obj instanceof Ast.IdentExpr &&
          expr.fn.obj.ident.value === '$'
        ) {
          const sig = this.ctx.fnSigs?.[member];
          if (sig) return sig.retOk;
          return null;
        }
        if (expr.fn.obj instanceof Ast.IdentExpr) {
          const base = expr.fn.obj.ident.value;
          if (['Dec', 'Decimal', 'Dec256', 'Decimal256'].includes(base))
            return 'Decimal';
          if (base === 'Addr')
            return member === 'canonicalize' ? 'CanonicalAddr' : 'Addr';
          if (['U128', 'Uint128', 'U256', 'Uint256'].includes(base))
            return 'Uint128';
          // Enum variant construction Enum.#Variant(...)
          if (this.ctx.enumVariants?.[base]) return base;
        }
        // method call on a value: obj.method(...)
        const objTy = this.inferType(expr.fn.obj);
        if (objTy === 'Timestamp' && member === 'seconds') return 'u64';
      }
      return null;
    }
    if (expr instanceof Ast.BinOpExpr) {
      if (['==', '!=', '<', '<=', '>', '>='].includes(expr.op)) return 'bool';
      const l = this.inferType(expr.lhs);
      const r0 = this.inferType(expr.rhs);
      // cosmwasm: Decimal * Uint128 → Uint128 (and vice versa)
      if (
        expr.op === '*' &&
        ((l === 'Decimal' && r0 === 'Uint128') || (l === 'Uint128' && r0 === 'Decimal'))
      ) {
        return 'Uint128';
      }
      // codegen lifts the integer side of Decimal ± Uint128 into Decimal
      if (
        (expr.op === '+' || expr.op === '-') &&
        ((l === 'Decimal' && r0 === 'Uint128') || (l === 'Uint128' && r0 === 'Decimal'))
      ) {
        return 'Decimal';
      }
      if (l && l !== '#int') return l;
      return r0 && r0 !== '#int' ? r0 : l;
    }
    if (expr instanceof Ast.StructExpr) return mapType(expr.ty);
    if (expr instanceof Ast.QueryExpr) {
      const q = expr.expr;
      if (q instanceof Ast.CallExpr && q.fn instanceof Ast.DotExpr) {
        const method = this.stripHash(q.fn.memberName.value);
        if (q.fn.obj instanceof Ast.IdentExpr) {
          const t = q.fn.obj.ident.value;
          if (t === 'Bank' && method === 'balance') return 'Coin';
          if (t === '$') return this.ctx.queryReturnTypes?.[method] ?? null;
        }
        if (
          q.fn.obj instanceof Ast.CallExpr &&
          q.fn.obj.fn instanceof Ast.IdentExpr &&
          q.fn.obj.fn.ident.value === 'Cw20'
        ) {
          if (method === 'token_info') return 'cw20::TokenInfoResponse';
          if (method === 'balance') return 'Uint128';
          if (method === 'minter') return 'Option<cw20::MinterResponse>';
        }
      }
      return null;
    }
    if (expr instanceof Ast.ShortTryExpr) {
      const lt = this.inferType(expr.lhs);
      if (lt?.startsWith('Option<')) return lt.slice(7, -1);
      return lt;
    }
    if (expr instanceof Ast.IfExpr) {
      return this.inferBlockTailType(expr.thenBody);
    }
    if (expr instanceof Ast.TupleExpr) {
      const ts = expr.exprs.map((e) => this.inferType(e));
      if (ts.length > 0 && ts[0] && ts.every((t) => t === ts[0])) {
        return `[${ts[0]}; ${ts.length}]`;
      }
      return null;
    }
    if (
      expr instanceof Ast.IsExpr ||
      expr instanceof Ast.InExpr ||
      expr instanceof Ast.NotExpr ||
      expr instanceof Ast.AndExpr ||
      expr instanceof Ast.OrExpr ||
      expr instanceof Ast.ExistsExpr
    ) {
      return 'bool';
    }
    return null;
  }

  private inferBlockTailType(block: Ast.Block | null): string | null {
    if (!block) return null;
    const stmts = block.stmts.toArray();
    const last = stmts[stmts.length - 1];
    if (last instanceof Ast.ExprStmt) return this.inferType(last.value);
    return null;
  }

  /**
   * Render `expr` so it fits an expected rust type: wraps bare integer
   * literals for Uint128/Uint256/Decimal targets, upgrades &str constants to
   * String, etc. Falls back to the plain rendering when no rule applies.
   */
  private coerceValue(
    expected: string | null | undefined,
    expr: Ast.Expr,
    rendered?: string
  ): string {
    const r = rendered ?? this.visit(expr);
    if (!expected) return r;
    if (r.includes('todo!(')) return r;
    let exp = expected.trim();
    if (expr instanceof Ast.NoneLit) {
      if (exp.startsWith('Option<')) return `None::<${exp.slice(7, -1)}>`;
      return r;
    }
    // Option<T> target with a non-None value: coerce to T, then decide on a
    // Some(...) wrap based on what we know about the value's type.
    const wasOption = exp.startsWith('Option<');
    if (wasOption) exp = exp.slice(7, -1).trim();
    const wrap = (v: string, definitelyBare: boolean): string => {
      if (!wasOption) return v;
      if (definitelyBare) return `Some(${v})`;
      const actual = this.inferType(expr);
      if (actual && actual !== '#int' && !actual.startsWith('Option<')) {
        return `Some(${v})`;
      }
      return v;
    };
    if (expr instanceof Ast.GroupedExpr) {
      return wrap(`(${this.coerceValue(exp, expr.expr)})`, false);
    }
    if (expr instanceof Ast.IntLit) {
      if (exp === 'Uint128') return wrap(`Uint128::new(${r}u128)`, true);
      if (exp === 'Uint256') return wrap(`Uint256::from(${r}u128)`, true);
      if (exp === 'Decimal') return wrap(`Decimal::from_ratio(${r}u128, 1u128)`, true);
      if (exp === 'String') return wrap(`${r}.to_string()`, true);
      return wrap(r, true);
    }
    if (expr instanceof Ast.StringLit || expr instanceof Ast.BoolLit || expr instanceof Ast.DecLit) {
      return wrap(r, true);
    }
    if (expr instanceof Ast.BinOpExpr) {
      return wrap(this.renderBinOp(expr, exp), false);
    }
    if (expr instanceof Ast.TupleExpr) {
      return wrap(this.renderTupleExpr(expr, exp), true);
    }
    if (expr instanceof Ast.IfExpr) {
      return wrap(this.renderIfExpr(expr, exp), false);
    }
    const actual = this.inferType(expr);
    if (exp === 'String' && (actual === '&str' || actual === 'Addr')) {
      return wrap(`${r}.to_string()`, true);
    }
    if (
      (exp === 'Uint128' || exp === 'Uint256') &&
      actual === '#int'
    ) {
      const ctor = exp === 'Uint128' ? 'Uint128::new' : 'Uint256::from';
      return wrap(`${ctor}((${r}) as u128)`, true);
    }
    if (exp === 'Uint128' && actual && ['u8', 'u16', 'u32', 'u64', 'i64', 'u128'].includes(actual)) {
      return wrap(`Uint128::new((${r}) as u128)`, true);
    }
    // Optional value where the inner type is expected → auto-unwrap
    if (
      !wasOption &&
      actual?.startsWith('Option<') &&
      actual.slice(7, -1) === exp
    ) {
      return `(${r}).clone().unwrap()`;
    }
    // Primitive int domain conversions
    const INTS = new Set(['u8', 'u16', 'u32', 'u64', 'i64', 'u128', 'usize']);
    if (INTS.has(exp) && actual && INTS.has(actual) && exp !== actual) {
      return wrap(`((${r}) as ${exp})`, true);
    }
    if (exp === 'Decimal' && actual === '&str') {
      return wrap(`${r}.parse::<Decimal>().unwrap()`, true);
    }
    if (exp === 'Addr' && actual === 'String') {
      return wrap(`Addr::unchecked(${r})`, true);
    }
    if (wasOption && actual?.startsWith('Option<')) {
      const actualInner = actual.slice(7, -1);
      if (exp === 'Addr' && actualInner === 'String') {
        return `${r}.map(|__s| Addr::unchecked(__s))`;
      }
      if (exp === 'String' && actualInner === 'Addr') {
        return `${r}.map(|__a| __a.to_string())`;
      }
    }
    // A unit value can never satisfy a real type expectation
    if (actual === '()' && exp !== '()') {
      return `todo!("unit value where ${exp} was expected")`;
    }
    return wrap(r, false);
  }

  /** Render a TupleExpr as a rust array or tuple, guided by the expected
   * type (or by element-type homogeneity when no expectation exists). */
  private renderTupleExpr(node: Ast.TupleExpr, expected?: string | null): string {
    const exprs = node.exprs.toArray();
    let elemExpectations: (string | null)[] = exprs.map(() => null);
    let asTuple = false;
    if (expected) {
      const arr = expected.match(/^\[(.+); *\d+\]$/);
      const tup = expected.match(/^\((.+)\)$/);
      if (arr) {
        elemExpectations = exprs.map(() => arr[1]);
      } else if (tup) {
        const parts = splitTopLevel(tup[1]);
        elemExpectations = exprs.map((_, i) => parts[i] ?? null);
        asTuple = true;
      } else if (expected.startsWith('Vec<')) {
        const inner = expected.slice(4, -1);
        elemExpectations = exprs.map(() => inner);
        const items = exprs.map((e, i) => this.coerceValue(elemExpectations[i], e));
        return `vec![${items.join(', ')}]`;
      }
    } else {
      if (exprs.length === 0) {
        // bare `[]` — a growable Vec is the most useful concrete shape
        return `Vec::new()`;
      }
      // No expectation: heterogeneous element types → tuple, else array
      const ts = exprs.map((e) => this.inferType(e));
      if (
        ts.length > 1 &&
        ts.some((t) => t !== null) &&
        !ts.every((t) => t === ts[0])
      ) {
        asTuple = true;
      }
    }
    const items = exprs.map((e, i) => this.coerceValue(elemExpectations[i], e));
    return asTuple ? `(${items.join(', ')})` : `[${items.join(', ')}]`;
  }

  // --- Helpers ---

  private stripHash(name: string): string {
    return name.replace(/^#/, '');
  }

  private isStateDotExpr(node: Ast.DotExpr): boolean {
    return (
      node.obj instanceof Ast.IdentExpr && node.obj.ident.value === '$state'
    );
  }

  private isStateAccess(obj: Ast.Expr, _memberName: string): boolean {
    return obj instanceof Ast.IdentExpr && obj.ident.value === '$state';
  }

  /** Is this a call to a fallible helper fn (directly or via `$.`)? */
  private fallibleCallSig(expr: Ast.Expr): CgFnSig | null {
    if (!(expr instanceof Ast.CallExpr)) return null;
    let name: string | null = null;
    if (expr.fn instanceof Ast.IdentExpr) name = expr.fn.ident.value;
    else if (
      expr.fn instanceof Ast.DotExpr &&
      expr.fn.obj instanceof Ast.IdentExpr &&
      expr.fn.obj.ident.value === '$'
    ) {
      name = this.stripHash(expr.fn.memberName.value);
    }
    if (!name) return null;
    const sig = this.ctx.fnSigs?.[name];
    return sig && sig.fallible ? sig : null;
  }

  /**
   * Returns the names of identifiers referenced inside `node` that are not
   * bound in scope, not builtins, and not known global names.
   */
  private undefinedIdents(node: Ast.AstNode): string[] {
    const idents = [
      ...(node instanceof Ast.IdentExpr ? [node] : []),
      ...node.descendantsOfType(Ast.IdentExpr),
    ];
    // Names bound within this subtree count as declared (closure params,
    // nested lets, loop variables, destructures)
    const localBindings = new Set<string>();
    for (const c of node.descendantsOfType(Ast.ClosureExpr)) {
      c.params.map((p) => localBindings.add(p.name.value));
    }
    for (const l of node.descendantsOfType(Ast.LetIdentStmt)) {
      localBindings.add(l.name.value);
    }
    for (const l of node.descendantsOfType(Ast.LetTupleStmt)) {
      l.names.map((n) => localBindings.add(n.value));
    }
    for (const l of node.descendantsOfType(Ast.LetStructStmt)) {
      l.bindings.map((b) => localBindings.add((b.alias ?? b.name).value));
    }
    for (const f of node.descendantsOfType(Ast.ForIdentStmt)) {
      localBindings.add(f.name.value);
    }
    for (const f of node.descendantsOfType(Ast.ForTupleStmt)) {
      f.names.map((n) => localBindings.add(n.value));
    }
    for (const f of node.descendantsOfType(Ast.ForStructStmt)) {
      f.bindings.map((b: any) => localBindings.add((b.alias ?? b.name).value));
    }
    const known = (name: string) => {
      // #handler references (delegate_exec! targets etc.)
      if (name.startsWith('#')) {
        const bare = name.slice(1);
        return (
          (this.ctx.execHandlerNames || []).includes(bare) ||
          (this.ctx.queryHandlerNames || []).includes(bare)
        );
      }
      if (/^[A-Z]/.test(name)) {
        // Capitalized: type/constructor/constant. ALL_CAPS constants get
        // stubs generated; PascalCase names must be defined somewhere.
        return (
          /^[A-Z][A-Z0-9_]*$/.test(name) ||
          BUILTIN_TYPE_IDENTS.has(name) ||
          (this.ctx.knownTypeNames || []).includes(name) ||
          (this.ctx.errorNames || []).includes(name) ||
          (this.ctx.eventNames || []).includes(name) ||
          !!this.ctx.structFields?.[name] ||
          !!this.ctx.enumVariantFields?.[name]
        );
      }
      return (
        name.startsWith('$') ||
        BUILTIN_IDENTS.has(name) ||
        localBindings.has(name) ||
        this._scope.has(name) ||
        this._todoVars.has(name) ||
        (this.ctx.helperFnNames || []).includes(name) ||
        (this.ctx.execHandlerNames || []).includes(name) ||
        (this.ctx.queryHandlerNames || []).includes(name) ||
        (this.ctx.stateFieldNames || []).includes(name)
      );
    };
    // Idents inside exec!/emit!/query!/fail! subtrees are handled by those
    // constructs' own degradation (they render todo!() themselves), so they
    // must not poison the enclosing statement.
    const insideDegradable = (id: Ast.AstNode): boolean => {
      let cur: any = id.$parent;
      while (cur && cur !== node) {
        if (
          cur instanceof Ast.ExecStmt ||
          cur instanceof Ast.EmitStmt ||
          cur instanceof Ast.QueryExpr ||
          cur instanceof Ast.InstantiateStmt ||
          cur instanceof Ast.SendStmt ||
          cur instanceof Ast.DelegateExecStmt ||
          cur instanceof Ast.AnnotStmt ||
          cur instanceof Ast.FailStmt ||
          cur instanceof Ast.FailExpr
        ) {
          return true;
        }
        cur = cur.$parent;
      }
      return false;
    };
    const missing: string[] = [];
    for (const id of idents) {
      const name = id.ident.value;
      if (!known(name) && !missing.includes(name) && !insideDegradable(id)) {
        missing.push(name);
      }
    }
    // $.method(...) references a contract helper — check it actually exists
    const dots = [
      ...(node instanceof Ast.DotExpr ? [node] : []),
      ...node.descendantsOfType(Ast.DotExpr),
    ];
    for (const d of dots) {
      if (d.obj instanceof Ast.IdentExpr && d.obj.ident.value === '$') {
        const m = this.stripHash(d.memberName.value).replace(/!$/, '');
        if (
          !(this.ctx.helperFnNames || []).includes(m) &&
          !(this.ctx.execHandlerNames || []).includes(m) &&
          !(this.ctx.queryHandlerNames || []).includes(m) &&
          !missing.includes(`$.${m}`) &&
          !insideDegradable(d)
        ) {
          missing.push(`$.${m}`);
        }
      }
    }
    return missing;
  }

  /**
   * Statement-level guard: if the statement references identifiers that are
   * not in scope (possible with syntax-error-recovered ASTs and
   * kitchen-sink sources), degrade the whole statement to todo!().
   */
  private guardUndefined(node: Ast.AstNode, render: () => string): string {
    const missing = this.undefinedIdents(node);
    if (missing.length > 0) {
      return `todo!("references undefined: ${missing.join(', ')}");`;
    }
    return render();
  }

  defaultVisit(node: Ast.AstNode<string>): string {
    return `/* TODO: ${node.$kind} */`;
  }

  /**
   * Detect pattern: if x is Enum.#Variant { let { field1, field2 } = x; ... }
   * Also handles: if x.field is Enum.#Variant { let { field1, field2 } = x.field; ... }
   * Returns info needed to generate: if let Enum::Variant { field1, field2, .. } = x { ... }
   */
  private extractEnumDestructure(pred: Ast.Expr, body: Ast.Block): {
    varName: string;
    enumVariant: string;
    bindings: string[];
    remainingStmts: Ast.Stmt[];
  } | null {
    // pred must be an IsExpr: x is Enum.#Variant
    if (!(pred instanceof Ast.IsExpr) || pred.negative) {
      return null;
    }

    // lhs can be a simple identifier OR a dot expression (e.g., pool.info)
    let varName = '';
    if (pred.lhs instanceof Ast.IdentExpr) {
      varName = pred.lhs.ident.value;
    } else if (pred.lhs instanceof Ast.DotExpr) {
      // For dot expressions, visit to get the Rust expression string
      varName = this.visit(pred.lhs);
    } else {
      return null;
    }

    // Get the enum variant type string
    let enumVariant = '';
    if (pred.rhs) {
      enumVariant = mapType(pred.rhs);
    }
    if (!enumVariant) {
      enumVariant = pred.rhs?.$antlrParseRuleCtx?.text || '';
    }
    enumVariant = enumVariant.replace(/#/g, '');
    if (!enumVariant || !enumVariant.includes('::')) {
      return null;
    }
    const enumBase = enumVariant.split('::')[0];
    if (
      !this.ctx.enumVariants?.[enumBase] &&
      !BUILTIN_TYPE_IDENTS.has(enumBase)
    ) {
      return null;
    }
    if (this.ctx.stubTypes?.has(enumBase)) {
      return null;
    }

    // Look for LetStructStmt in the body that destructures from the same variable
    const stmtsArray = body.stmts.toArray();
    const firstStmt = stmtsArray[0];
    if (!(firstStmt instanceof Ast.LetStructStmt)) {
      return null;
    }

    // Check that destructure source matches the IsExpr LHS
    let destructureSource = '';
    if (firstStmt.value instanceof Ast.IdentExpr) {
      destructureSource = firstStmt.value.ident.value;
    } else if (firstStmt.value instanceof Ast.DotExpr) {
      destructureSource = this.visit(firstStmt.value);
    } else {
      return null;
    }

    if (destructureSource !== varName) return null;

    const bindings = firstStmt.bindings.map((b) => b.name.value);
    const remainingStmts = stmtsArray.slice(1);

    return { varName, enumVariant, bindings, remainingStmts };
  }

  // --- Blocks ---

  /** Terminate a mid-block statement rendering with `;` when needed. */
  private terminateStmt(rendered: string): string {
    const t = rendered.trimEnd();
    if (t.length === 0 || t.endsWith(';') || t.endsWith('}')) return rendered;
    return `${t};`;
  }

  visitBlock(node: Ast.Block): string {
    const stmts = node.stmts.toArray();
    return stmts
      .map((x, i) => {
        const r = this.visit(x);
        // all but the trailing expression must be terminated
        return i < stmts.length - 1 ? this.terminateStmt(r) : r;
      })
      .join('\n');
  }

  /**
   * Render a block in statement position: a trailing expression without a
   * semicolon gets one appended so the block evaluates to () — this prevents
   * `if`/`for` statements from leaking incompatible branch value types.
   */
  private visitBlockAsUnit(node: Ast.AstNode): string {
    if (!(node instanceof Ast.Block)) {
      return this.visit(node);
    }
    const stmts = node.stmts.toArray();
    const rendered = stmts.map((x) => this.visit(x));
    if (rendered.length > 0) {
      const last = stmts[stmts.length - 1];
      const lastRendered = rendered[rendered.length - 1];
      if (last instanceof Ast.ExprStmt && !last.semi && !lastRendered.trim().endsWith(';')) {
        rendered[rendered.length - 1] = `${lastRendered};`;
      }
    }
    return rendered.join('\n');
  }

  /** Render a block in value position, coercing the trailing expression. */
  private visitBlockValue(node: Ast.Block, expected: string | null): string {
    const stmts = node.stmts.toArray();
    const rendered = stmts.map((x, i) => {
      if (i === stmts.length - 1 && x instanceof Ast.ExprStmt && !x.semi) {
        return this.coerceValue(expected, x.value);
      }
      return this.visit(x);
    });
    return rendered.join('\n');
  }

  // --- Statements ---

  visitLetIdentStmt(node: Ast.LetIdentStmt): string {
    const name = node.name.value;
    const declaredTy = node.ty ? mapType(node.ty) : null;
    // Value references undefined identifiers → bind a todo!() placeholder
    const missing = this.undefinedIdents(node.value);
    const value =
      missing.length > 0
        ? `todo!("references undefined: ${missing.join(', ')}")`
        : this.coerceValue(declaredTy, node.value);
    const inferred = declaredTy ?? this.inferType(node.value);
    this.declare(name, inferred);
    // If value is a todo!(), track it so subsequent field accesses propagate
    // todo — unless we can give the binding a concrete type, which keeps the
    // rest of the body compiling as real code.
    if (value.includes('todo!(')) {
      const KNOWN_TODO_TYPES: Record<string, string> = {
        total_share: 'u128',
        total_supply: 'u128',
      };
      const t = declaredTy ?? KNOWN_TODO_TYPES[name];
      if (t) {
        this.declare(name, t);
        return `let mut ${name}: ${t} = ${value};`;
      }
      this._todoVars.add(name);
    }
    let tyAnn = declaredTy ? `: ${declaredTy}` : '';
    if (!declaredTy && node.value instanceof Ast.NoneLit) {
      // bare `let x = None;` can't infer T — pick an arbitrary payload type
      tyAnn = ': Option<Binary>';
    }
    return `let mut ${name}${tyAnn} = ${value};`;
  }

  visitLetTupleStmt(node: Ast.LetTupleStmt): string {
    const names = node.names.map((x) => x.value);
    const missing = this.undefinedIdents(node.value);
    const value =
      missing.length > 0
        ? `todo!("references undefined: ${missing.join(', ')}")`
        : this.visit(node.value);
    // A todo!() rhs leaves element types unknowable — bind each name to its
    // own todo!() placeholder instead.
    if (value.includes('todo!(')) {
      names.forEach((n) => {
        this._todoVars.add(n);
        this.declare(n);
      });
      return names.map((n) => `let ${n} = todo!("${n}");`).join('\n');
    }
    // element types from the source expr (array/tuple type)
    const srcTy = this.inferType(node.value);
    const arr = srcTy?.match(/^\[(.+); *\d+\]$/);
    names.forEach((n) => this.declare(n, arr ? arr[1] : null));
    // Use array destructuring [a, b] since CWScript [a, b] maps to arrays
    return `let [${names.map((n) => `mut ${n}`).join(', ')}] = ${value};`;
  }

  visitLetStructStmt(node: Ast.LetStructStmt): string {
    const bindings = node.bindings.toArray().map((b) => ({
      field: b.name.value,
      local: (b.alias ?? b.name).value,
    }));
    // Special case: let { field } = $state → load state fields
    if (node.value instanceof Ast.IdentExpr && node.value.ident.value === '$state') {
      return bindings.map(({ field, local }) => {
        if (!this.ctx.stateFieldNames.includes(field)) {
          this._todoVars.add(local);
          this.declare(local);
          return `let ${local} = todo!("undeclared state field ${field}");`;
        }
        const constName = field.toUpperCase();
        this.declare(local, this.ctx.stateTypes?.[field]?.ty ?? null);
        return `let mut ${local} = ${constName}.load(ctx.deps.storage)?;`;
      }).join('\n');
    }
    const value = this.visit(node.value);
    const srcTy = this.inferType(node.value);
    // If the value is a todo!() / query placeholder, don't access fields on it.
    // Known numeric fields get a concrete type annotation so that downstream
    // arithmetic/comparison type inference doesn't collapse to ().
    const KNOWN_FIELD_TYPES: Record<string, string> = {
      total_share: 'u128',
      total_supply: 'u128',
    };
    if (value.includes('todo!(')) {
      bindings.forEach(({ local }) => {
        // A typed todo binding stays usable as real code downstream
        if (KNOWN_FIELD_TYPES[local]) {
          this.declare(local, KNOWN_FIELD_TYPES[local]);
        } else {
          this._todoVars.add(local);
          this.declare(local);
        }
      });
      return bindings.map(({ local }) => {
        const tyAnn = KNOWN_FIELD_TYPES[local] ? `: ${KNOWN_FIELD_TYPES[local]}` : '';
        return `let ${local}${tyAnn} = todo!("${local}");`;
      }).join('\n');
    }
    // Destructuring an opaque stub type can't access fields
    if (srcTy && this.ctx.stubTypes?.has(srcTy)) {
      bindings.forEach(({ local }) => {
        this._todoVars.add(local);
        this.declare(local);
      });
      return bindings
        .map(({ local }) => `let ${local} = todo!("destructure stub ${srcTy}");`)
        .join('\n');
    }
    // If value is an enum (identified by matches!() pattern), field access won't work
    // Use todo!() as placeholder — proper destructuring needs if-let
    if (value.includes('matches!(')) {
      bindings.forEach(({ local }) => {
        this._todoVars.add(local);
        this.declare(local);
      });
      return bindings.map(({ local }) => `let ${local} = todo!("destructure ${local}");`).join('\n');
    }
    // Repeated field access moves out of `value` when it's a call expression;
    // bind a temp first when there are multiple bindings.
    if (bindings.length > 1 && !(node.value instanceof Ast.IdentExpr)) {
      const lines = [`let __src = ${value};`];
      for (const { field, local } of bindings) {
        const fTy = srcTy
          ? this.ctx.structFieldTypes?.[srcTy]?.[field] ??
            BUILTIN_FIELD_TYPES[srcTy]?.[field] ?? null
          : null;
        this.declare(local, fTy);
        lines.push(`let mut ${local} = __src.${field}.clone();`);
      }
      return lines.join('\n');
    }
    return bindings.map(({ field, local }) => {
      const fTy = srcTy
        ? this.ctx.structFieldTypes?.[srcTy]?.[field] ??
          BUILTIN_FIELD_TYPES[srcTy]?.[field] ?? null
        : null;
      this.declare(local, fTy);
      return `let mut ${local} = ${value}.${field}.clone();`;
    }).join('\n');
  }

  visitAssignStmt(node: Ast.AssignStmt): string {
    return this.guardUndefined(node, () => {
      const name = node.name.value;
      if (this._todoVars.has(name)) {
        return `todo!("assign to placeholder ${name}");`;
      }
      if (!this._scope.has(name) && !name.startsWith('$')) {
        return `todo!("assign to undeclared ${name}");`;
      }
      const expected = this._varTypes.get(name) ?? null;
      const value = this.coerceValue(expected, node.value);
      if (value.includes('todo!(')) {
        return `todo!("assignment value for ${name} unavailable");`;
      }
      return `${name} ${node.assignOp} ${value};`;
    });
  }

  visitMemberAssignStmt(node: Ast.MemberAssignStmt): string {
    // Assignments into todo!()-placeholder variables can't type-check
    if (node.obj instanceof Ast.IdentExpr && this._todoVars.has(node.obj.ident.value)) {
      return `todo!("assign to placeholder ${node.obj.ident.value}");`;
    }
    const missingAssign = this.undefinedIdents(node);
    if (missingAssign.length > 0) {
      return `todo!("references undefined: ${missingAssign.join(', ')}");`;
    }
    const memberName = this.stripHash(node.memberName.value);

    // Check if this is a state assignment: $state.field = value
    if (this.isStateAccess(node.obj, memberName)) {
      if (!this.ctx.stateFieldNames.includes(memberName)) {
        return `todo!("undeclared state field ${memberName}");`;
      }
      if (this.ctx.stateTypes?.[memberName]?.kind === 'map') {
        return `todo!("map state field ${memberName} assigned without a key");`;
      }
      const constName = memberName.toUpperCase();
      const expected = this.ctx.stateTypes?.[memberName]?.ty ?? null;
      const value = this.coerceValue(expected, node.value);
      if (value.includes('todo!(')) {
        return `todo!("state value for ${memberName} unavailable");`;
      }

      if (node.assignOp === Ast.AssignOp.EQ) {
        return `${constName}.save(ctx.deps.storage, &(${value}))?;`;
      } else {
        const rustOp = node.assignOp;
        return `${constName}.update(ctx.deps.storage, |mut c| -> StdResult<_> { c ${rustOp} ${value}; Ok(c) })?;`;
      }
    }

    // $res.field = value → mutate the accumulated Response directly
    if (node.obj instanceof Ast.IdentExpr && node.obj.ident.value === '$res') {
      const field = memberName === 'msgs' ? 'messages' : memberName;
      const value = this.visit(node.value);
      return `_response.${field} ${node.assignOp} ${value};`;
    }

    // Nested state field assignment: $state.item.field op= value →
    // read-modify-write through Item::update
    if (node.obj instanceof Ast.DotExpr && this.isStateDotExpr(node.obj)) {
      const stateField = this.stripHash(node.obj.memberName.value);
      const info = this.ctx.stateTypes?.[stateField];
      if (info && this.ctx.stubTypes?.has(info.ty)) {
        return `todo!("field ${memberName} on stub state type ${info.ty}");`;
      }
      if (info && info.kind === 'item') {
        const constName = stateField.toUpperCase();
        const expected =
          this.ctx.structFieldTypes?.[info.ty]?.[memberName] ?? null;
        const value = this.coerceValue(expected, node.value);
        if (value.includes('todo!(')) {
          return `todo!("state value for ${stateField}.${memberName} unavailable");`;
        }
        return `${constName}.update(ctx.deps.storage, |mut c| -> StdResult<_> { c.${memberName} ${node.assignOp} ${value}; Ok(c) })?;`;
      }
    }

    // Regular member assignment
    const obj = this.visit(node.obj);
    if (obj.includes('todo!(')) {
      return `todo!("assign to placeholder member ${memberName}");`;
    }
    const objTy = this.inferType(node.obj);
    if (objTy?.startsWith('Option<')) {
      return `todo!("member assignment through optional value ${memberName}");`;
    }
    const expected = objTy
      ? this.ctx.structFieldTypes?.[objTy]?.[memberName] ??
        BUILTIN_FIELD_TYPES[objTy]?.[memberName] ?? null
      : null;
    const value = this.coerceValue(expected, node.value);
    return `${obj}.${memberName} ${node.assignOp} ${value};`;
  }

  visitIndexAssignStmt(node: Ast.IndexAssignStmt): string {
    const missingIdx = this.undefinedIdents(node);
    if (missingIdx.length > 0) {
      return `todo!("references undefined: ${missingIdx.join(', ')}");`;
    }
    // Check if this is a state map assignment: $state.map[key] = value
    if (node.obj instanceof Ast.DotExpr && this.isStateDotExpr(node.obj)) {
      const fieldName = this.stripHash(node.obj.memberName.value);
      if (!this.ctx.stateFieldNames.includes(fieldName)) {
        return `todo!("undeclared state field ${fieldName}");`;
      }
      const constName = fieldName.toUpperCase();
      const key = this.mapKeyExpr(node.index);
      const expected = this.ctx.stateTypes?.[fieldName]?.ty ?? null;
      const value = this.coerceValue(expected, node.value);
      if (value.includes('todo!(')) {
        return `todo!("map value for ${fieldName} unavailable");`;
      }
      if (node.assignOp === Ast.AssignOp.EQ) {
        return `${constName}.save(ctx.deps.storage, ${key}, &(${value}))?;`;
      }
      // Compound map update: read-modify-write through Map::update
      return `${constName}.update(ctx.deps.storage, ${key}, |v| -> StdResult<_> { let mut c = v.unwrap_or_default(); c ${node.assignOp} ${value}; Ok(c) })?;`;
    }

    const obj = this.visit(node.obj);
    const index = this.visit(node.index);
    const objTy = this.inferType(node.obj);
    const elemTy = objTy?.match(/^\[(.+); *\d+\]$/)?.[1] ?? objTy?.match(/^Vec<(.+)>$/)?.[1] ?? null;
    const value = this.coerceValue(elemTy, node.value);
    return `${obj}[${index} as usize] ${node.assignOp} ${value};`;
  }

  visitIfStmt(node: Ast.IfStmt): string {
    // Check for enum destructuring pattern: if x is Enum.#Variant { let { fields } = x; ... }
    const enumDestructure = this.extractEnumDestructure(node.pred, node.thenBody);
    if (enumDestructure) {
      const { varName, enumVariant, bindings, remainingStmts } = enumDestructure;
      bindings.forEach((b) => this.declare(b));
      const bindingList = bindings.length > 0 ? `${bindings.join(', ')}, ..` : '..';
      const bodyCode = remainingStmts.map((s) => this.visit(s)).join('\n');
      const bodyWithExtra = bodyCode;
      if (node.elseBody) {
        const elseBody = this.visitBlockAsUnit(node.elseBody);
        return `if let ${enumVariant} { ${bindingList} } = ${varName} {\n${bodyWithExtra}\n} else {\n${elseBody}\n}`;
      }
      return `if let ${enumVariant} { ${bindingList} } = ${varName} {\n${bodyWithExtra}\n}`;
    }

    // Predicate referencing undefined identifiers → degrade the whole if
    const missingPred = this.undefinedIdents(node.pred);
    if (missingPred.length > 0) {
      return `todo!("if-predicate references undefined: ${missingPred.join(', ')}");`;
    }
    const pred = this.visit(node.pred);
    // Extract variable names from .is_some() checks and auto-unwrap in body
    // e.g., if max_spread.is_some() { ... } → adds let max_spread = max_spread.unwrap();
    const isSomeMatches = [...pred.matchAll(/(\w+)\.is_some\(\)/g)];
    const restores = this.stripOptionVarTypes(isSomeMatches.map((m) => m[1]));
    const thenBody = this.visitBlockAsUnit(node.thenBody);
    const unwrapLines = isSomeMatches.map(m => `let ${m[1]} = ${m[1]}.clone().unwrap();`).join('\n');
    const bodyWithUnwraps = unwrapLines ? `${unwrapLines}\n${thenBody}` : thenBody;
    restores();
    if (node.elseBody) {
      const elseBody = this.visitBlockAsUnit(node.elseBody);
      return `if ${pred} {\n${bodyWithUnwraps}\n} else {\n${elseBody}\n}`;
    }
    return `if ${pred} {\n${bodyWithUnwraps}\n}`;
  }

  /** While rendering an unwrapped-Option scope, the vars' tracked types drop
   * their Option layer. Returns a restore fn. */
  private stripOptionVarTypes(names: string[]): () => void {
    const saved: [string, string | undefined][] = [];
    for (const n of names) {
      const t = this._varTypes.get(n);
      saved.push([n, t]);
      if (t?.startsWith('Option<')) {
        this._varTypes.set(n, t.slice(7, -1));
      }
    }
    return () => {
      for (const [n, t] of saved) {
        if (t === undefined) this._varTypes.delete(n);
        else this._varTypes.set(n, t);
      }
    };
  }

  /** Does the loop body mutate (assign to a member of) one of the loop vars? */
  private bodyMutatesLoopVar(body: Ast.Block, names: string[]): boolean {
    return body.descendantsOfType(Ast.MemberAssignStmt).some(
      (s) => s.obj instanceof Ast.IdentExpr && names.includes(s.obj.ident.value)
    );
  }

  private elemTypeOf(iterExpr: Ast.Expr): string | null {
    const t = this.inferType(iterExpr);
    if (!t) return null;
    const arr = t.match(/^\[(.+); *\d+\]$/);
    if (arr) return arr[1];
    const vec = t.match(/^Vec<(.+)>$/);
    if (vec) return vec[1];
    return null;
  }

  visitForIdentStmt(node: Ast.ForIdentStmt): string {
    const missingIter = this.undefinedIdents(node.iter);
    if (missingIter.length > 0) {
      return `todo!("for-iterable references undefined: ${missingIter.join(', ')}");`;
    }
    const iterTy = this.inferType(node.iter);
    if (iterTy === '()' || (iterTy && this.isStubTy(iterTy))) {
      return `todo!("iterate over unresolved value of type ${iterTy}");`;
    }
    const name = node.name.value;
    this.declare(name, this.elemTypeOf(node.iter));
    let iter = this.visit(node.iter);
    // Iterating a plain variable consumes it; clone so the collection stays
    // usable after the loop (CWScript has implicit-copy semantics).
    if (node.iter instanceof Ast.IdentExpr || node.iter instanceof Ast.DotExpr) {
      iter = `${iter}.clone()`;
    }
    const body = this.visitBlockAsUnit(node.body);
    return `for mut ${name} in ${iter} {\n${body}\n}`;
  }

  visitForTupleStmt(node: Ast.ForTupleStmt): string {
    const names = node.names.map((x) => x.value);
    const receiver =
      node.iter instanceof Ast.CallExpr && node.iter.fn instanceof Ast.DotExpr
        ? node.iter.fn.obj
        : node.iter;
    const recvTy = this.inferType(receiver);
    if (recvTy === '()' || (recvTy && this.ctx.stubTypes?.has(recvTy))) {
      return `todo!("iterate over unresolved value of type ${recvTy}");`;
    }
    let iter = this.visit(node.iter);
    const isEnumerate = iter.includes('.enumerate()');
    const elemTy = this.elemTypeOf(
      node.iter instanceof Ast.CallExpr &&
        node.iter.fn instanceof Ast.DotExpr
        ? node.iter.fn.obj
        : node.iter
    );
    if (isEnumerate) {
      this.declare(names[0], 'usize');
      if (names[1]) this.declare(names[1], elemTy);
    } else {
      // destructuring array elements: [a, b] in [[1,2],[3,4]]
      const inner = elemTy?.match(/^\[(.+); *\d+\]$/)?.[1] ?? null;
      names.forEach((n) => this.declare(n, inner));
    }
    // If the body mutates a loop variable and we're iterating via
    // enumerate, switch to .iter_mut() so mutations hit the collection
    if (iter.includes('todo!(')) {
      return `todo!("iterate over placeholder");`;
    }
    if (this.bodyMutatesLoopVar(node.body, names)) {
      if (iter.includes('.clone().into_iter().')) {
        iter = iter.replace('.clone().into_iter().', '.iter_mut().');
      } else if (iter.includes('.iter().')) {
        iter = iter.replace('.iter().', '.iter_mut().');
      }
    }
    const body = this.visitBlockAsUnit(node.body);
    const pattern = isEnumerate ? `(${names.join(', ')})` : `[${names.join(', ')}]`;
    return `for ${pattern} in ${iter} {\n${body}\n}`;
  }

  visitForStructStmt(node: Ast.ForStructStmt): string {
    // for { field as alias, other } in items { ... }
    const iterExpr: Ast.Expr = node.iter;
    const missingIter = this.undefinedIdents(iterExpr);
    if (missingIter.length > 0) {
      return `todo!("for-iterable references undefined: ${missingIter.join(', ')}");`;
    }
    const iterTy0 = this.inferType(iterExpr);
    if (iterTy0 === '()' || (iterTy0 && this.isStubTy(iterTy0))) {
      return `todo!("iterate over unresolved value of type ${iterTy0}");`;
    }
    let iter = this.visit(iterExpr);
    if (iterExpr instanceof Ast.IdentExpr || iterExpr instanceof Ast.DotExpr) {
      iter = `${iter}.clone()`;
    }
    const elemTy = this.elemTypeOf(iterExpr);
    const bindings = node.bindings
      .toArray()
      .map((b) => ({ field: b.name.value, local: (b.alias ?? b.name).value }));
    const lines: string[] = [];
    const elemIsStub = this.isStubTy(elemTy);
    for (const { field, local } of bindings) {
      if (elemIsStub) {
        this._todoVars.add(local);
        this.declare(local);
        lines.push(`let ${local} = todo!("field ${field} on stub element");`);
        continue;
      }
      const fTy = elemTy ? this.ctx.structFieldTypes?.[elemTy]?.[field] ?? null : null;
      this.declare(local, fTy);
      lines.push(`let mut ${local} = __item.${field}.clone();`);
    }
    const body = this.visitBlockAsUnit(node.body);
    return `for __item in ${iter} {\n${lines.join('\n')}\n${body}\n}`;
  }

  /** Render a coins argument as a Vec<Coin> expression. */
  private coinsArgToVec(arg: Ast.Expr): string {
    if (arg instanceof Ast.TupleExpr && arg.exprs.toArray().length === 0) {
      return `vec![]`;
    }
    const rendered = this.visit(arg);
    if (arg instanceof Ast.TupleExpr) {
      // [Coin(...), ...] literal → array, convert to Vec
      return `${rendered}.to_vec()`;
    }
    if (arg instanceof Ast.CallExpr) {
      // Single Coin(...) constructor → wrap in vec![]
      return `vec![${rendered}]`;
    }
    // Variable / field holding a coin list already
    return `(${rendered}).into()`;
  }

  /** Find an argument by name, else by position. */
  private argByNameOrPos(
    args: Ast.Arg[],
    name: string,
    pos: number
  ): Ast.Arg | undefined {
    return args.find((a) => a.name?.value === name) ?? (args.some((a) => a.name) ? undefined : args[pos]);
  }

  /**
   * Translate an exec-call expression (`Bank.#send(...)`, `Wasm.#execute(...)`,
   * `Cw20(addr).#transfer(...)`) into a CosmosMsg expression string.
   * Returns null when the target can't be resolved.
   */
  private execCallToCosmosMsg(value: Ast.Expr): string | null {
    if (!(value instanceof Ast.CallExpr) || !(value.fn instanceof Ast.DotExpr)) {
      return null;
    }
    const dotExpr = value.fn;
    const method = this.stripHash(dotExpr.memberName.value);
    const argList = value.args.toArray();

    // Module contract targets: Bank.#..., Wasm.#...
    if (dotExpr.obj instanceof Ast.IdentExpr) {
      const target = dotExpr.obj.ident.value;

      if (target === 'Bank' && method === 'send' && argList.length >= 2) {
        const toAddrArg =
          argList.find((a) => a.name?.value === 'to_address') || argList[0];
        const coinsArg =
          argList.find((a) => a.name?.value === 'amount') || argList[1];
        const toAddr = this.visit(toAddrArg.value);
        const coins = this.coinsArgToVec(coinsArg.value);
        return `CosmosMsg::Bank(BankMsg::Send { to_address: (${toAddr}).to_string(), amount: ${coins} })`;
      }
      if (target === 'Bank' && method === 'burn' && argList.length >= 1) {
        const coins = this.coinsArgToVec(argList[0].value);
        return `CosmosMsg::Bank(BankMsg::Burn { amount: ${coins} })`;
      }
      if (target === 'Wasm' && method === 'instantiate') {
        const fields: string[] = [];
        WASM_INSTANTIATE_FIELDS.forEach(([fname, fty, fdefault], i) => {
          const arg = this.argByNameOrPos(argList, fname, i);
          if (!arg) {
            fields.push(`${fname}: ${fdefault}`);
            return;
          }
          fields.push(`${fname}: ${this.wasmFieldValue(fname, fty, arg.value)}`);
        });
        return `CosmosMsg::Wasm(WasmMsg::Instantiate { ${fields.join(', ')} })`;
      }
      if (target === 'Wasm' && method === 'execute' && argList.length >= 2) {
        const addr = this.argByNameOrPos(argList, 'contract_addr', 0);
        const msgA = this.argByNameOrPos(argList, 'msg', 1);
        if (!addr || !msgA) return null;
        const fundsA = this.argByNameOrPos(argList, 'funds', 2);
        const funds = fundsA ? this.coinsArgToVec(fundsA.value) : 'vec![]';
        return `CosmosMsg::Wasm(WasmMsg::Execute { contract_addr: (${this.visit(addr.value)}).to_string(), msg: (${this.visit(msgA.value)}).clone(), funds: ${funds} })`;
      }
      return null;
    }

    // Contract-instance targets: Cw20(addr).#transfer(...), Pair(addr).#swap(...)
    if (
      dotExpr.obj instanceof Ast.CallExpr &&
      dotExpr.obj.fn instanceof Ast.IdentExpr &&
      dotExpr.obj.args.toArray().length >= 1
    ) {
      const contractTy = dotExpr.obj.fn.ident.value;
      const addr = this.visit(dotExpr.obj.args.at(0)!.value);
      if (contractTy === 'Cw20' && CW20_EXEC_MSGS[method]) {
        const spec = CW20_EXEC_MSGS[method];
        const fields: string[] = [];
        spec.fields.forEach(([fname, fty], i) => {
          const arg = this.argByNameOrPos(argList, fname, i);
          if (!arg) return;
          let v = this.coerceValue(fty, arg.value);
          if (fty === 'String') v = `(${v}).to_string()`;
          fields.push(`${fname}: ${v}`);
        });
        return `CosmosMsg::Wasm(WasmMsg::Execute { contract_addr: (${addr}).to_string(), msg: to_json_binary(&cw20::Cw20ExecuteMsg::${spec.msgName} { ${fields.join(', ')} })${this.trySuffix()}, funds: vec![] })`;
      }
      return null;
    }

    return null;
  }

  private wasmFieldValue(fname: string, fty: string, expr: Ast.Expr): string {
    if (fname === 'admin') {
      if (expr instanceof Ast.NoneLit) return 'None';
      return `Some((${this.visit(expr)}).to_string())`;
    }
    if (fname === 'funds') return this.coinsArgToVec(expr);
    if (fname === 'label') return `(${this.visit(expr)}).to_string()`;
    if (fname === 'msg') return `(${this.visit(expr)}).clone()`;
    // code_id
    return this.coerceValue(fty, expr);
  }

  /** Render `_response = _response.add_message(...)` or a SubMsg version. */
  private renderOutgoingMsg(
    msg: string | null,
    fallbackLabel: string,
    reply?: { id: number | string; on: string; gasLimit?: string }
  ): string {
    if (!reply) {
      if (!msg) return `todo!("${fallbackLabel}");`;
      return `_response = _response.add_message(${msg});`;
    }
    const msgExpr = msg ?? `todo!("${fallbackLabel}")`;
    const gas = reply.gasLimit ?? 'None';
    return `_response = _response.add_submessage(SubMsg { id: (${reply.id}) as u64, msg: ${msgExpr}, gas_limit: ${gas}, reply_on: ReplyOn::${reply.on} });`;
  }

  /** Peel a `.reply_on_success(gas_limit=None, id=X)`-style chain off an
   * exec! target. Returns the inner call plus reply info. */
  private peelReplyChain(value: Ast.Expr): {
    inner: Ast.Expr;
    reply?: { id: string; on: string; gasLimit?: string };
  } {
    const REPLY_METHODS: Record<string, string> = {
      reply_on_success: 'Success',
      reply_on_error: 'Error',
      reply_always: 'Always',
    };
    if (
      value instanceof Ast.CallExpr &&
      value.fn instanceof Ast.DotExpr &&
      REPLY_METHODS[this.stripHash(value.fn.memberName.value)]
    ) {
      const on = REPLY_METHODS[this.stripHash(value.fn.memberName.value)];
      const args = value.args.toArray();
      const idArg = args.find((a) => a.name?.value === 'id') ?? args[args.length - 1];
      const gasArg = args.find((a) => a.name?.value === 'gas_limit');
      let gasLimit: string | undefined;
      if (gasArg && !(gasArg.value instanceof Ast.NoneLit)) {
        gasLimit = `Some((${this.visit(gasArg.value)}) as u64)`;
      }
      return {
        inner: value.fn.obj,
        reply: {
          id: idArg ? this.visit(idArg.value) : '0',
          on,
          gasLimit,
        },
      };
    }
    return { inner: value };
  }

  visitExecStmt(node: Ast.ExecStmt): string {
    const { inner, reply } = this.peelReplyChain(node.value);
    // Undefined identifiers inside the args of a resolvable target still
    // degrade the statement.
    const label = this.execLabel(inner);
    const msg = this.execCallToCosmosMsg(inner);
    if (msg && this.undefinedIdents(inner).length > 0) {
      return `todo!("exec! references undefined: ${this.undefinedIdents(inner).join(', ')}");`;
    }
    return this.renderOutgoingMsg(msg, `exec! ${label}`, reply);
  }

  private execLabel(value: Ast.Expr): string {
    const text = value.$antlrParseRuleCtx?.text ?? '';
    return text.slice(0, 40).replace(/"/g, "'");
  }

  visitDelegateExecStmt(node: Ast.DelegateExecStmt): string {
    // delegate_exec! #handler(args) → WasmMsg::Execute to our own address
    const missing = this.undefinedIdents(node.value);
    if (missing.length > 0) {
      return `todo!("delegate_exec! references undefined: ${missing.join(', ')}");`;
    }
    const value = node.value;
    if (value instanceof Ast.CallExpr) {
      let handler: string | null = null;
      if (value.fn instanceof Ast.IdentExpr) {
        handler = this.stripHash(value.fn.ident.value);
      } else if (value.fn instanceof Ast.DotExpr) {
        handler = this.stripHash(value.fn.memberName.value);
      }
      const variant = handler ? this.ctx.execMsgVariants?.[handler] : undefined;
      if (variant) {
        const args = value.args.toArray();
        const fields = variant.params.map((p, i) => {
          const arg = this.argByNameOrPos(args, p.name, i);
          const v = arg ? this.coerceValue(p.ty, arg.value) : 'Default::default()';
          return `${p.name}: ${v}`;
        });
        const msg = `CosmosMsg::Wasm(WasmMsg::Execute { contract_addr: ctx.env.contract.address.to_string(), msg: to_json_binary(&ExecuteMsg::${variant.msgName} { ${fields.join(', ')} })${this.trySuffix()}, funds: vec![] })`;
        return `_response = _response.add_message(${msg});`;
      }
    }
    return `todo!("delegate_exec!");`;
  }

  visitSendStmt(node: Ast.SendStmt): string {
    let msg: string | null = null;
    let label = 'send';
    if (node.value instanceof Ast.StructExpr) {
      const ty = mapType(node.value.ty);
      label = `send ${ty}`;
      if (ty === 'Wasm::Instantiate' || ty === 'Wasm::Execute') {
        const given = new Map<string, Ast.Expr>();
        node.value.fields.toArray().forEach((f) => {
          if (f.value) given.set(f.name.value, f.value);
        });
        if (ty === 'Wasm::Instantiate') {
          const fields = WASM_INSTANTIATE_FIELDS.map(([fname, fty, fdefault]) => {
            const e = given.get(fname);
            return `${fname}: ${e ? this.wasmFieldValue(fname, fty, e) : fdefault}`;
          });
          msg = `CosmosMsg::Wasm(WasmMsg::Instantiate { ${fields.join(', ')} })`;
        } else {
          const addr = given.get('contract_addr');
          const m = given.get('msg');
          msg = `CosmosMsg::Wasm(WasmMsg::Execute { contract_addr: (${addr ? this.visit(addr) : 'ctx.env.contract.address'}).to_string(), msg: ${m ? `(${this.visit(m)}).clone()` : 'Binary::default()'}, funds: vec![] })`;
        }
      }
    } else {
      msg = this.execCallToCosmosMsg(node.value);
      label = `send ${this.execLabel(node.value)}`;
    }
    if (node.reply) {
      const id = this.ctx.replyIdCounter ? this.ctx.replyIdCounter.next++ : 1;
      const name = `inline_${id}`;
      const kind = node.reply.kind.value;
      this.ctx.liftedReplies?.push({ name, id, kind, body: node.reply.body });
      const on = kind === 'error' ? 'Error' : kind === 'always' ? 'Always' : 'Success';
      return this.renderOutgoingMsg(msg, label, { id, on });
    }
    return this.renderOutgoingMsg(msg, label);
  }

  visitAnnotStmt(node: Ast.AnnotStmt): string {
    // Parse @reply.*(handler) and @gas_limit(n) annotations
    let replyOn: string | null = null;
    let handlerName: string | null = null;
    let gasLimit: string | undefined;
    const comments: string[] = [];
    for (const ann of node.annotations.toArray()) {
      const v = ann.value;
      if (v instanceof Ast.CallExpr && v.fn instanceof Ast.DotExpr) {
        const base =
          v.fn.obj instanceof Ast.IdentExpr ? v.fn.obj.ident.value : '';
        const kind = this.stripHash(v.fn.memberName.value);
        if (base === 'reply') {
          const KINDS: Record<string, string> = {
            success: 'Success',
            on_success: 'Success',
            error: 'Error',
            on_error: 'Error',
            always: 'Always',
          };
          replyOn = KINDS[kind] ?? 'Success';
          const arg = v.args.at(0);
          if (arg && arg.value instanceof Ast.IdentExpr) {
            handlerName = arg.value.ident.value;
          }
          continue;
        }
      }
      if (
        v instanceof Ast.CallExpr &&
        v.fn instanceof Ast.IdentExpr &&
        v.fn.ident.value === 'gas_limit'
      ) {
        const arg = v.args.at(0);
        if (arg) gasLimit = `Some((${this.visit(arg.value)}) as u64)`;
        continue;
      }
      comments.push(`// @${v.$antlrParseRuleCtx?.text ?? 'annotation'}`);
    }

    if (replyOn && node.inner instanceof Ast.ExecStmt) {
      const { inner } = this.peelReplyChain(node.inner.value);
      const id = handlerName ? this.ctx.replyIds?.[handlerName] ?? 0 : 0;
      const msg = this.execCallToCosmosMsg(inner);
      const rendered = this.renderOutgoingMsg(msg, `exec! ${this.execLabel(inner)}`, {
        id,
        on: replyOn,
        gasLimit,
      });
      return [...comments, rendered].join('\n');
    }
    return [...comments, this.visit(node.inner)].join('\n');
  }

  visitEmitStmt(node: Ast.EmitStmt): string {
    // emit! event(key=value, ...) → anonymous event, add attributes to response
    // emit! EventName(key=value, ...) → named event, add Event to response
    if (node.value instanceof Ast.CallExpr && node.value.fn instanceof Ast.IdentExpr) {
      const name = node.value.fn.ident.value;
      const args = node.value.args;

      // Degrade to todo!() if the emit references undefined identifiers
      const missing = this.undefinedIdents(node.value);
      if (missing.length > 0) {
        return `todo!("emit! references undefined: ${missing.join(', ')}");`;
      }

      // NOTE: attributes use {:?} — generated types derive Debug (via
      // cw_serde) but not Display.
      if (name === 'event') {
        // Anonymous event → _response = _response.add_attribute("key", val)
        const lines: string[] = [];
        args.map((a) => {
          const val = this.visit(a.value);
          const key = a.name ? a.name.value : 'value';
          lines.push(`_response = _response.add_attribute("${key}", format!("{:?}", ${val}));`);
        });
        return lines.join('\n');
      } else {
        // Named event → _response = _response.add_event(Event::new("snake_name").add_attribute(...))
        const snakeName = name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        let eventExpr = `Event::new("${snakeName}")`;
        args.map((a) => {
          const val = this.visit(a.value);
          const key = a.name ? a.name.value : 'value';
          eventExpr += `.add_attribute("${key}", format!("{:?}", ${val}))`;
        });
        return `_response = _response.add_event(${eventExpr});`;
      }
    }
    const value = this.visit(node.value);
    return `/* emit! ${value} */`;
  }

  /** Render the fields of an error-constructor call for ContractError::X { ... } */
  private failErrorFields(errorName: string, args: Ast.List<Ast.Arg>): string {
    const declaredFields = this.ctx.errorFields?.[errorName];
    const declaredTypes = this.ctx.errorFieldTypes?.[errorName];
    const fields: string[] = [];
    args.toArray().forEach((a, i) => {
      if (a.name) {
        const fTy = declaredTypes?.[a.name.value];
        if (fTy) {
          fields.push(`${a.name.value}: ${this.coerceValue(fTy, a.value)}`);
        } else {
          // Auto-generated error variants type all fields as String
          fields.push(`${a.name.value}: format!("{:?}", ${this.visit(a.value)})`);
        }
      } else if (declaredFields && declaredFields[i]) {
        const fTy = declaredTypes?.[declaredFields[i]];
        fields.push(`${declaredFields[i]}: ${this.coerceValue(fTy ?? null, a.value)}`);
      }
      // Positional args without a declared field are dropped — the
      // auto-generated variant has no corresponding field.
    });
    return fields.join(', ');
  }

  private failValueToError(value: Ast.Expr): string {
    if (value instanceof Ast.CallExpr && value.fn instanceof Ast.IdentExpr) {
      const errorName = value.fn.ident.value;
      const args = value.args;
      if (args.length === 0) {
        return `ContractError::${errorName} {}`;
      }
      return `ContractError::${errorName} { ${this.failErrorFields(errorName, args)} }`;
    }
    if (value instanceof Ast.StringLit) {
      return `ContractError::StdError(StdError::generic_err(${this.visit(value)}))`;
    }
    if (value instanceof Ast.NoneLit) {
      return `ContractError::StdError(StdError::generic_err("None"))`;
    }
    const val = this.visit(value);
    return `ContractError::StdError(StdError::generic_err(format!("{:?}", ${val})))`;
  }

  visitFailStmt(node: Ast.FailStmt): string {
    return `return Err(${this.failValueToError(node.value)});`;
  }

  visitReturnStmt(node: Ast.ReturnStmt): string {
    // In instantiate/exec/reply/migrate handlers the Rust return type is
    // Result<Response, ContractError>; a bare `return None`-style statement
    // maps to returning the accumulated response.
    const ht = this.ctx.handlerType;
    if (
      (ht === 'instantiate' || ht === 'exec' || ht === 'reply' || ht === 'migrate') &&
      node.value instanceof Ast.NoneLit
    ) {
      return `return Ok(_response);`;
    }
    const missing = this.undefinedIdents(node.value);
    if (missing.length > 0) {
      // NOTE: message must not contain the word 'return' followed by a space —
      // the fallback-injection logic greps for 'return ' in the body.
      return `todo!("returns-undefined: ${missing.join(', ')}");`;
    }
    const expected = this.ctx.returnType ?? null;
    let value = this.coerceValue(expected, node.value);
    // Returning a bare todo!() placeholder: to_json_binary(&todo!()) can't
    // infer a Serialize impl, so replace the whole return with todo!()
    if (value.trim().startsWith('todo!(')) {
      return `todo!("placeholder-return");`;
    }
    if (this._closureDepth > 0) {
      return `return ${value};`;
    }
    if (ht === 'query') {
      return `return Ok(to_json_binary(&(${value}))?);`;
    }
    if (ht === 'method') {
      // methods take &self: clone field reads out of the reference
      if (node.value instanceof Ast.DotExpr && !value.endsWith(')')) {
        value = `${value}.clone()`;
      }
      return `return ${value};`;
    }
    if (this.ctx.fnResultWrap) {
      return `return Ok(${value});`;
    }
    return `return ${value};`;
  }

  visitExprStmt(node: Ast.ExprStmt): string {
    // Skip bare 'emit' keyword that wasn't parsed as EmitStmt
    if (node.value instanceof Ast.IdentExpr && node.value.ident.value === 'emit') {
      return '/* emit */';
    }
    // log { key: value, shorthand } → response attributes
    if (
      node.value instanceof Ast.StructExpr &&
      node.value.ty instanceof Ast.IdentTypeExpr &&
      node.value.ty.ident.value === 'log'
    ) {
      const lines = node.value.fields.map((f) => {
        const v = f.value ? this.visit(f.value) : f.name.value;
        return `_response = _response.add_attribute("${f.name.value}", format!("{:?}", ${v}));`;
      });
      return lines.join('\n');
    }
    const missing = this.undefinedIdents(node.value);
    if (missing.length > 0) {
      return `todo!("references undefined: ${missing.join(', ')}");`;
    }
    const value = this.visit(node.value);
    if (node.semi) {
      return `${value};`;
    }
    return value;
  }

  /** Render the match scrutinee for a try body: a single-expression block's
   * Result value (with any trailing `?` stripped). */
  private tryBodyResultExpr(body: Ast.Block): string | null {
    const stmts = body.stmts.toArray();
    if (stmts.length !== 1) return null;
    const s = stmts[0];
    let expr: Ast.Expr | null = null;
    if (s instanceof Ast.ExprStmt) expr = s.value;
    else if (s instanceof Ast.ReturnStmt) expr = s.value;
    if (!expr) return null;
    const missing = this.undefinedIdents(expr);
    if (missing.length > 0) return null;
    let r = this.visit(expr);
    if (r.endsWith('?')) r = r.slice(0, -1);
    if (r.endsWith('.unwrap()')) r = r.slice(0, -'.unwrap()'.length);
    return r;
  }

  visitTryCatchElseStmt(node: Ast.TryCatchElseStmt): string {
    const result = this.tryBodyResultExpr(node.body);
    if (!result) {
      // Fallback: run the body inline (error propagates)
      return `{ ${this.visitBlockAsUnit(node.body)} }`;
    }
    const arms: string[] = [];
    for (const clause of node.catchClauses.toArray()) {
      const ty = mapType(clause.ty).replace(/#/g, '');
      const body = this.visitBlockAsUnit(clause.body);
      arms.push(`Err(ContractError::${ty} { .. }) => {\n${body}\n}`);
    }
    arms.push(`Err(__e) => { return Err(__e); }`);
    const elseBody = node.elseBody ? this.visitBlockAsUnit(node.elseBody) : '';
    arms.push(`Ok(_) => {\n${elseBody}\n}`);
    return `match ${result} {\n${arms.join(',\n')}\n}`;
  }

  visitTryCatchElseExpr(node: Ast.TryCatchElseExpr): string {
    const result = this.tryBodyResultExpr(node.body);
    if (!result) {
      return `/* try */ { ${this.visitBlockAsUnit(node.body)} }`;
    }
    const arms: string[] = [`Ok(__v) => __v`];
    for (const clause of node.catchClauses.toArray()) {
      const ty = mapType(clause.ty).replace(/#/g, '');
      const body = this.visitBlockValue(clause.body, null);
      arms.push(`Err(ContractError::${ty} { .. }) => {\n${body}\n}`);
    }
    if (node.elseBody) {
      const body = this.visitBlockValue(node.elseBody, null);
      arms.push(`Err(_) => {\n${body}\n}`);
    } else {
      arms.push(`Err(__e) => { return Err(__e.into()); }`);
    }
    return `match ${result} {\n${arms.join(',\n')}\n}`;
  }

  // --- Expressions ---

  visitDotExpr(node: Ast.DotExpr): string {
    const memberName = this.stripHash(node.memberName.value);

    // $state.field → FIELD.load(ctx.deps.storage)?
    if (this.isStateDotExpr(node)) {
      if (!this.ctx.stateFieldNames.includes(memberName)) {
        return `todo!("undeclared state field ${memberName}")`;
      }
      if (this.ctx.stateTypes?.[memberName]?.kind === 'map') {
        return `todo!("map state field ${memberName} accessed without a key")`;
      }
      const constName = memberName.toUpperCase();
      return `${constName}.load(ctx.deps.storage)${this.trySuffix()}`;
    }

    // $.method → method (direct function call, not self.method)
    if (node.obj instanceof Ast.IdentExpr && node.obj.ident.value === '$') {
      return memberName;
    }

    // $res.X → accumulated Response fields
    if (node.obj instanceof Ast.IdentExpr && node.obj.ident.value === '$res') {
      const field = memberName === 'msgs' ? 'messages' : memberName;
      return `_response.${field}.clone()`;
    }

    // $info.sender → ctx.info.sender.clone()
    // $env.block.height → ctx.env.block.height
    if (node.obj instanceof Ast.IdentExpr) {
      const ident = node.obj.ident.value;
      if (ident === '$info') {
        if (memberName === 'sender') {
          return `ctx.info.sender.clone()`;
        }
        return `ctx.info.${memberName}.clone()`;
      }
      if (ident === '$env') {
        // common source slip: $env.sender means the message sender
        if (memberName === 'sender') {
          const ht = this.ctx.handlerType;
          if (ht === 'instantiate' || ht === 'exec') {
            return `ctx.info.sender.clone()`;
          }
          return `todo!("$env.sender outside execute context")`;
        }
        return this.maybeCloneEnvPath(node, `ctx.env.${memberName}`);
      }

      // Enum variant reference: Enum.#Variant (unit) / Enum.#Variant used as fn
      if (this.ctx.enumVariants?.[ident]) {
        const variants = this.ctx.enumVariants[ident];
        if (variants[memberName]) {
          return `${ident}::${memberName}`;
        }
      }

      // Static type method calls: Addr.validate → Addr::validate, Dec.ratio → Decimal::from_ratio
      const staticType = STATIC_TYPE_MAP[ident];
      if (staticType) {
        // Translate specific method names
        const METHOD_MAP: Record<string, Record<string, string>> = {
          Decimal: { ratio: 'from_ratio', permille: 'permille', one: 'one', zero: 'zero' },
          Decimal256: { ratio: 'from_ratio', permille: 'permille', one: 'one', zero: 'zero' },
          Addr: { empty: 'unchecked', validate: 'unchecked', canonicalize: 'unchecked', humanize: 'unchecked', unchecked: 'unchecked' },
          Uint128: { zero: 'zero', one: 'one' },
          Uint256: { zero: 'zero', one: 'one' },
        };
        const mappedMethod = METHOD_MAP[staticType]?.[memberName] || memberName;
        return `${staticType}::${mappedMethod}`;
      }
    }

    // .trim() works on &str; go through .as_str() so it also works when the
    // receiver is a String or an Addr
    if (memberName === 'trim') {
      const obj = this.visit(node.obj);
      return `${obj}.as_str().trim`;
    }

    // Iterator methods need an iterator receiver in Rust. Iterate owned
    // clones so closures see values (predicates still get references — the
    // closure renderer clones its params).
    const ITER_METHODS = new Set(['find', 'enumerate', 'filter', 'flat_map', 'fold', 'any', 'all', 'sum', 'collect', 'zip', 'count', 'position']);
    if (ITER_METHODS.has(memberName)) {
      const obj = this.visit(node.obj);
      const alreadyIter = obj.includes('.iter()') || obj.includes('.into_iter()');
      const recv = alreadyIter ? obj : `${obj}.clone().into_iter()`;
      return `${recv}.${memberName}`;
    }
    // .map() needs special handling: on collections → iterator map, on Option → .map()
    if (memberName === 'map') {
      const obj = this.visit(node.obj);
      const OPTION_RETURNING = ['.find(', '.position(', '.first(', '.last(', '.get('];
      const isOptionChain = OPTION_RETURNING.some(m => obj.includes(m));
      const objTy = this.inferType(node.obj);
      if (isOptionChain || objTy?.startsWith('Option<')) {
        return `${obj}.${memberName}`;
      }
      const alreadyIter = obj.includes('.iter()') || obj.includes('.into_iter()');
      const recv = alreadyIter ? obj : `${obj}.clone().into_iter()`;
      return `${recv}.${memberName}`;
    }

    // Nested dot: $env.block.height, etc.
    const obj = this.visit(node.obj);
    // If obj contains todo!(), propagate it — accessing fields on ! type fails
    if (obj.includes('todo!(')) {
      return `todo!("${memberName}")`;
    }
    // Field access on values whose type is an opaque Binary stub or a
    // primitive can't compile — degrade (method-call receivers excluded).
    {
      const parent: any = node.$parent;
      const isMethodReceiver =
        parent instanceof Ast.CallExpr && parent.fn === node;
      if (!isMethodReceiver) {
        const objTy0 = this.inferType(node.obj);
        if (objTy0 && this.isStubTy(objTy0)) {
          return `todo!("field ${memberName} on stub type ${objTy0}")`;
        }
        const PRIMITIVES = new Set(['Uint128', 'Uint256', 'u8', 'u16', 'u32', 'u64', 'i64', 'bool', 'Decimal']);
        if (objTy0 && PRIMITIVES.has(objTy0)) {
          return `todo!("no field ${memberName} on ${objTy0}")`;
        }
        // CWScript auto-unwraps optionals on member access (after a `x?`
        // check); Option methods themselves must pass through untouched.
        const OPTION_METHODS = new Set(['is_some', 'is_none', 'unwrap', 'unwrap_or', 'map', 'clone', 'ok_or']);
        if (
          objTy0?.startsWith('Option<') &&
          !OPTION_METHODS.has(memberName)
        ) {
          const inner = objTy0.slice(7, -1);
          if (
            this.ctx.structFieldTypes?.[inner]?.[memberName] !== undefined ||
            BUILTIN_FIELD_TYPES[inner]?.[memberName] !== undefined
          ) {
            return `${obj}.clone().unwrap().${memberName}`;
          }
          if (this.ctx.stubTypes?.has(inner) || /^[A-Z]/.test(inner)) {
            return `todo!("field ${memberName} through optional ${inner}")`;
          }
        }
      }
    }
    // If obj is a variable known to be assigned from todo!(), propagate todo
    if (node.obj instanceof Ast.IdentExpr && this._todoVars.has(node.obj.ident.value)) {
      return `todo!("${memberName}")`;
    }
    // Enum variant field access, e.g. `pool.info.denom` where Asset.info is
    // the enum AssetInfo → use the generated accessor method: pool.info.denom()
    if (node.obj instanceof Ast.DotExpr) {
      const parentField = this.stripHash(node.obj.memberName.value);
      const enumName = this.ctx.fieldTypeByName?.[parentField];
      if (enumName && this.ctx.enumVariantFields?.[enumName]?.[memberName]) {
        return `${obj}.${memberName}()`;
      }
    }
    // Direct enum-typed value field access: `info.denom` where info: AssetInfo
    const objTy = this.inferType(node.obj);
    if (objTy && this.ctx.enumVariants?.[objTy] && this.ctx.enumVariantFields?.[objTy]?.[memberName]) {
      return `${obj}.${memberName}()`;
    }
    return this.maybeCloneEnvPath(node, `${obj}.${memberName}`);
  }

  /** Locally-defined type names that collide with cosmwasm_std exports must
   * be path-qualified at construction sites (two glob imports → ambiguity). */
  private qualifyLocalType(name: string): string {
    const COSMWASM_COLLIDING = new Set([
      'BalanceResponse', 'AllBalanceResponse', 'SupplyResponse',
      'DelegationResponse', 'AllDelegationsResponse', 'BondedDenomResponse',
      'ValidatorResponse', 'AllValidatorsResponse', 'ChannelResponse',
      'ListChannelsResponse', 'PortIdResponse', 'CodeInfoResponse',
      'ContractInfoResponse', 'Timestamp',
    ]);
    if (
      COSMWASM_COLLIDING.has(name) &&
      (this.ctx.structFields?.[name] || this.ctx.enumVariantFields?.[name])
    ) {
      return `super::types::${name}`;
    }
    return name;
  }

  /** `let x = $env.contract.address` must clone (Env fields are owned);
   * method-call receivers and intermediate segments must not. */
  private maybeCloneEnvPath(node: Ast.DotExpr, rendered: string): string {
    if (!rendered.startsWith('ctx.env.')) return rendered;
    const parent: any = node.$parent;
    const isReceiver =
      parent instanceof Ast.DotExpr ||
      (parent instanceof Ast.CallExpr && parent.fn === node);
    if (isReceiver) return rendered;
    // Copy fields (heights etc.) don't need clone but tolerate it
    return `${rendered}.clone()`;
  }

  /** Render a state-map key; tuple keys become rust tuples (PrimaryKey). */
  private mapKeyExpr(index: Ast.Expr): string {
    if (index instanceof Ast.TupleExpr) {
      const parts = index.exprs.map((e) => `(${this.visit(e)}).clone()`);
      return `(${parts.join(', ')})`;
    }
    return `(${this.visit(index)}).clone()`;
  }

  visitIndexExpr(node: Ast.IndexExpr): string {
    // $state.map[key] → MAP.load(ctx.deps.storage, &key)?
    if (node.obj instanceof Ast.DotExpr && this.isStateDotExpr(node.obj)) {
      const fieldName = this.stripHash(node.obj.memberName.value);
      if (!this.ctx.stateFieldNames.includes(fieldName)) {
        return `todo!("undeclared state field ${fieldName}")`;
      }
      const info = this.ctx.stateTypes?.[fieldName];
      const keyTy = info?.keyTy;
      const actualKey = this.inferType(node.index);
      if (
        keyTy &&
        actualKey &&
        actualKey !== '#int' &&
        actualKey !== keyTy &&
        !(keyTy === 'String' && actualKey === 'Addr') &&
        !(keyTy === 'Addr' && actualKey === 'String')
      ) {
        return `todo!("map key type mismatch for ${fieldName}")`;
      }
      const constName = fieldName.toUpperCase();
      const load = `${constName}.load(ctx.deps.storage, ${this.mapKeyExpr(node.index)})${this.trySuffix()}`;
      // Optional-valued maps auto-unwrap on read (CWScript `?` checks guard)
      if (info?.ty.startsWith('Option<')) {
        return `${load}.unwrap()`;
      }
      return load;
    }

    if (node.obj instanceof Ast.IdentExpr && this._todoVars.has(node.obj.ident.value)) {
      return `todo!("index into placeholder ${node.obj.ident.value}")`;
    }
    const objTy = this.inferType(node.obj);
    if (objTy === '()' || (objTy && this.ctx.stubTypes?.has(objTy))) {
      return `todo!("index into ${objTy}")`;
    }
    const obj = this.visit(node.obj);
    if (obj.includes('todo!(')) {
      return `todo!("index into placeholder")`;
    }
    const index = this.visit(node.index);
    return `${obj}[${index} as usize].clone()`;
  }

  visitIdentExpr(node: Ast.IdentExpr): string {
    const name = node.ident.value;
    // Reading a placeholder binding propagates the todo
    if (this._todoVars.has(name)) {
      return `todo!("placeholder ${name}")`;
    }
    // $ alone → empty (handled by visitDotExpr for $.method)
    if (name === '$') return 'self';
    // $state → should not appear alone (always $state.field)
    if (name === '$state') return '/* $state */';
    // $info → ctx.info
    if (name === '$info') return 'ctx.info';
    // $env → ctx.env
    if (name === '$env') return 'ctx.env';
    // $res → the accumulated Response value
    if (name === '$res') return '_response';
    // reply-handler context: $data / $events / $error come from the Reply msg
    if (name === '$data') return 'msg.result.clone().unwrap().data.unwrap_or_default()';
    if (name === '$events') return 'msg.result.clone().unwrap().events';
    if (name === '$error') return 'msg.result.clone().unwrap_err()';
    if (name.startsWith('$')) {
      return `ctx.${name.substring(1)}`;
    }
    // Sloppy sources sometimes reference state fields without `$state.` —
    // resolve them as loads when the name isn't a local binding.
    if (
      !this._scope.has(name) &&
      this.ctx.stateFieldNames.includes(name) &&
      this.hasCtx()
    ) {
      const info = this.ctx.stateTypes?.[name];
      if (info?.kind === 'map') {
        return `todo!("map state field ${name} accessed without a key")`;
      }
      return `${name.toUpperCase()}.load(ctx.deps.storage)${this.trySuffix()}`;
    }
    return name;
  }

  /** Resolve a helper-fn call target name for `f(...)` or `$.f(...)`. */
  private helperCallName(fnExpr: Ast.Expr): string | null {
    if (fnExpr instanceof Ast.IdentExpr) {
      const n = fnExpr.ident.value;
      return this.ctx.fnSigs?.[n] ? n : null;
    }
    if (
      fnExpr instanceof Ast.DotExpr &&
      fnExpr.obj instanceof Ast.IdentExpr &&
      fnExpr.obj.ident.value === '$'
    ) {
      const n = this.stripHash(fnExpr.memberName.value);
      return this.ctx.fnSigs?.[n] ? n : null;
    }
    return null;
  }

  visitCallExpr(node: Ast.CallExpr): string {
    // Helper fn calls (possibly via $.): typed args, ctx threading, `?`
    const helperName = this.helperCallName(node.fn);
    if (helperName) {
      const sig = this.ctx.fnSigs![helperName];
      // `$`-style context args are threaded via the trailing ctx param
      const args = node.args
        .toArray()
        .filter(
          (a) =>
            !(
              a.value instanceof Ast.IdentExpr &&
              a.value.ident.value.startsWith('$')
            )
        );
      const rendered = args.map((a, i) => {
        const expected = sig.params[i]?.ty ?? null;
        const v = this.coerceValue(expected, a.value);
        // clone plain variable reads (implicit-copy semantics)
        if (
          a.value instanceof Ast.IdentExpr &&
          !a.value.ident.value.startsWith('$') &&
          v === a.value.ident.value
        ) {
          return `${v}.clone()`;
        }
        return v;
      });
      if (sig.needsCtx) {
        const ctxArg = this.ctxArgFor(sig.ctxKind);
        if (!ctxArg) {
          return `todo!("helper ${helperName} needs a mutable context; not callable here")`;
        }
        rendered.push(ctxArg);
      }
      const call = `${helperName}(${rendered.join(', ')})`;
      return sig.fallible ? `${call}${this.trySuffix()}` : call;
    }

    // Map-entry methods on `$state.map[key]`: remove / update act on the map
    if (
      node.fn instanceof Ast.DotExpr &&
      node.fn.obj instanceof Ast.IndexExpr &&
      node.fn.obj.obj instanceof Ast.DotExpr &&
      this.isStateDotExpr(node.fn.obj.obj)
    ) {
      const mapField = this.stripHash(node.fn.obj.obj.memberName.value);
      const method = this.stripHash(node.fn.memberName.value);
      if (this.ctx.stateTypes?.[mapField]?.kind === 'map') {
        const constName = mapField.toUpperCase();
        const key = this.mapKeyExpr(node.fn.obj.index);
        if (method === 'remove') {
          return `${constName}.remove(ctx.deps.storage, ${key})`;
        }
        if (method === 'update') {
          const cl = node.args.at(0)?.value;
          if (cl instanceof Ast.ClosureExpr && cl.params.toArray().length === 1) {
            const pname = cl.params.at(0)!.name.value;
            this.declare(pname, this.ctx.stateTypes[mapField].ty);
            this._closureDepth++;
            const body = this.visitBlockValue(cl.body, this.ctx.stateTypes[mapField].ty);
            this._closureDepth--;
            return `${constName}.update(ctx.deps.storage, ${key}, |${pname}| -> StdResult<_> { let mut ${pname} = ${pname}.unwrap_or_default(); Ok({ ${body} }) })${this.trySuffix()}`;
          }
        }
      }
    }

    // parse_response! on module-contract calls
    if (
      node.fn instanceof Ast.DotExpr &&
      this.stripHash(node.fn.memberName.value) === 'parse_response'
    ) {
      const chainText = node.fn.obj.$antlrParseRuleCtx?.text ?? '';
      if (chainText.startsWith('Wasm.#instantiate') && this.ctx.handlerType === 'reply') {
        return `cw_utils::parse_reply_instantiate_data(msg.clone()).map_err(|e| StdError::generic_err(e.to_string()))${this.trySuffix()}`;
      }
      return `todo!("parse_response! ${chainText.slice(0, 40)}")`;
    }

    // Cw20.#instantiate(...) used as a message value → serialize a
    // cw20-base-compatible InstantiateMsg
    if (
      node.fn instanceof Ast.DotExpr &&
      node.fn.obj instanceof Ast.IdentExpr &&
      node.fn.obj.ident.value === 'Cw20' &&
      this.stripHash(node.fn.memberName.value) === 'instantiate'
    ) {
      const args = node.args.toArray();
      const nameA = this.argByNameOrPos(args, 'name', 0);
      const symbolA = this.argByNameOrPos(args, 'symbol', 1);
      const decA = this.argByNameOrPos(args, 'decimals', 2);
      const mintA = this.argByNameOrPos(args, 'mint', 4);
      let mint = 'None';
      if (mintA && !(mintA.value instanceof Ast.NoneLit) && mintA.value instanceof Ast.CallExpr) {
        const margs = mintA.value.args.toArray();
        const minter = this.argByNameOrPos(margs, 'minter', 0);
        const cap = this.argByNameOrPos(margs, 'cap', 1);
        const minterV = minter ? this.visit(minter.value) : '""';
        const capV = cap && !(cap.value instanceof Ast.NoneLit)
          ? `Some(${this.coerceValue('Uint128', cap.value)})`
          : 'None';
        mint = `Some(cw20::MinterResponse { minter: (${minterV}).to_string(), cap: ${capV} })`;
      }
      return `to_json_binary(&Cw20InstantiateMsg { name: (${nameA ? this.visit(nameA.value) : '""'}).to_string(), symbol: (${symbolA ? this.visit(symbolA.value) : '""'}).to_string(), decimals: (${decA ? this.visit(decA.value) : '0'}) as u8, initial_balances: vec![], mint: ${mint} })${this.trySuffix()}`;
    }

    // CW2.set_contract_version!(mut $, name, version) → cw2 crate call
    if (
      node.fn instanceof Ast.DotExpr &&
      node.fn.obj instanceof Ast.IdentExpr &&
      node.fn.obj.ident.value === 'CW2' &&
      this.stripHash(node.fn.memberName.value) === 'set_contract_version'
    ) {
      const args = node.args
        .toArray()
        .filter((a) => !(a.value instanceof Ast.IdentExpr && a.value.ident.value.startsWith('$')))
        .map((a) => this.visit(a.value));
      return `cw2::set_contract_version(ctx.deps.storage, ${args.join(', ')})${this.trySuffix()}`;
    }

    // Enum variant construction: Enum.#Variant(...) with named/positional args
    if (
      node.fn instanceof Ast.DotExpr &&
      node.fn.obj instanceof Ast.IdentExpr &&
      this.ctx.enumVariants?.[node.fn.obj.ident.value]
    ) {
      const enumName = node.fn.obj.ident.value;
      const variantName = this.stripHash(node.fn.memberName.value);
      const info = this.ctx.enumVariants[enumName][variantName];
      if (info) {
        return this.renderEnumVariantCtor(enumName, variantName, info, node.args.toArray());
      }
    }

    // Addr utility calls use the real cosmwasm Api when a ctx is available
    if (
      node.fn instanceof Ast.DotExpr &&
      node.fn.obj instanceof Ast.IdentExpr &&
      ['Addr', 'Address'].includes(node.fn.obj.ident.value) &&
      this.hasCtx()
    ) {
      const ADDR_METHOD_ALIASES: Record<string, string> = {
        Canonical: 'canonicalize',
        canonical: 'canonicalize',
        Humanize: 'humanize',
      };
      let m = this.stripHash(node.fn.memberName.value);
      m = ADDR_METHOD_ALIASES[m] ?? m;
      const a0 = node.args.at(0) ? this.visit(node.args.at(0)!.value) : null;
      if (a0 && a0.includes('todo!(')) {
        return `todo!("address op on placeholder")`;
      }
      if (m === 'validate' && a0) {
        return `ctx.deps.api.addr_validate((${a0}).as_str())${this.trySuffix()}`;
      }
      if (m === 'canonicalize' && a0) {
        return `ctx.deps.api.addr_canonicalize((${a0}).as_str())${this.trySuffix()}`;
      }
      if (m === 'humanize' && a0) {
        const argTy = this.inferType(node.args.at(0)!.value);
        if (argTy === 'CanonicalAddr') {
          return `ctx.deps.api.addr_humanize(&(${a0}))${this.trySuffix()}`;
        }
        // not actually canonical — treat as an unchecked address string
        return `Addr::unchecked((${a0}).to_string())`;
      }
    }

    // Dec.ratio / Dec.ratio! → Decimal::from_ratio / checked_from_ratio
    if (
      node.fn instanceof Ast.DotExpr &&
      node.fn.obj instanceof Ast.IdentExpr &&
      ['Dec', 'Decimal', 'Dec256', 'Decimal256'].includes(node.fn.obj.ident.value) &&
      this.stripHash(node.fn.memberName.value) === 'ratio'
    ) {
      const args = node.args.map((a) =>
        a.value instanceof Ast.IntLit ? `${this.visit(a.value)}u128` : this.visit(a.value)
      );
      if (node.fallible) {
        return `Decimal::checked_from_ratio(${args.join(', ')}).map_err(|e| StdError::generic_err(e.to_string()))${this.trySuffix()}`;
      }
      return `Decimal::from_ratio(${args.join(', ')})`;
    }

    const fnName = this.visit(node.fn);

    // Calling a todo!() placeholder isn't valid Rust — propagate the todo
    if (fnName.includes('todo!(')) {
      return `todo!("call on placeholder")`;
    }
    if (node.fn instanceof Ast.IdentExpr && this._todoVars.has(node.fn.ident.value)) {
      return `todo!("call on placeholder ${node.fn.ident.value}")`;
    }

    // Enum variant construction when the fn rendered to Enum::Variant
    const pathMatch = fnName.match(/^([A-Za-z0-9_]+)::([A-Za-z0-9_]+)$/);
    if (pathMatch && this.ctx.enumVariants?.[pathMatch[1]]?.[pathMatch[2]]) {
      return this.renderEnumVariantCtor(
        pathMatch[1],
        pathMatch[2],
        this.ctx.enumVariants[pathMatch[1]][pathMatch[2]],
        node.args.toArray()
      );
    }

    // Tuple-struct constructors: TuPair(1, "one") with element coercion
    const tupleTys = this.ctx.tupleTypes?.[fnName];
    if (tupleTys) {
      const args = node.args.map((a, i) => this.coerceValue(tupleTys[i] ?? null, a.value));
      return `${fnName}(${args.join(', ')})`;
    }

    // deserialize![T](x) → from_json::<T>(&x)
    if (fnName === 'deserialize') {
      const tyArg = node.typeArgs.at(0);
      const ty = tyArg ? mapType(tyArg) : 'Cw20HookMsg';
      const args = node.args.map((a) => this.visitArg(a));
      return `cosmwasm_std::from_json::<${ty}>(&${args[0]})${node.fallible ? this.trySuffix() : '.unwrap()'}`;
    }

    // Named args with uppercase function name → struct construction
    // e.g., Asset(info=x, amount=y) → Asset { info: x, amount: y }
    let hasNamedArgs = false;
    node.args.map((a) => { if (a.name) hasNamedArgs = true; });
    const FUNC_NAMES = ['Ok', 'Err', 'Some', 'None', 'Vec', 'HashMap', 'String', 'String::from'];
    if (/^[A-Z]/.test(fnName) && this.ctx.stubTypes?.has(fnName)) {
      return `todo!("construct stub type ${fnName}")`;
    }
    if (hasNamedArgs && /^[A-Z]/.test(fnName) && !FUNC_NAMES.includes(fnName) && !fnName.includes('.') && !fnName.includes('::')) {
      const fieldTys = this.ctx.structFieldTypes?.[fnName];
      const fields: string[] = [];
      node.args.map((a) => {
        if (a.name) {
          const fname = this.stripHash(a.name.value);
          const expected = fieldTys?.[fname] ?? null;
          fields.push(`${fname}: ${this.coerceCloned(expected, a)}`);
        } else {
          fields.push(this.visitArgCloned(a));
        }
      });
      return `${this.qualifyLocalType(fnName)} { ${fields.join(', ')} }`;
    }

    // Known struct positional constructors: Asset(info, amount) → Asset { info, amount }
    // CWScript's Coin constructor is Coin(amount, denom)
    const KNOWN_STRUCT_FIELDS: Record<string, string[]> = {
      Asset: ['info', 'amount'],
      Coin: ['amount', 'denom'],
      MinterResponse: ['minter', 'cap'],
    };
    const structFields =
      this.ctx.structFields?.[fnName] || KNOWN_STRUCT_FIELDS[fnName];
    if (structFields && !hasNamedArgs && node.args.length === structFields.length) {
      const fieldTys =
        this.ctx.structFieldTypes?.[fnName] ?? BUILTIN_FIELD_TYPES[fnName];
      const fields = node.args.map((a, i) => {
        const expected = fieldTys?.[structFields[i]] ?? null;
        return `${structFields[i]}: ${this.coerceCloned(expected, a)}`;
      });
      return `${this.qualifyLocalType(fnName)} { ${fields.join(', ')} }`;
    }
    if (structFields && !hasNamedArgs && node.args.length !== structFields.length) {
      // duplicate/ambiguous struct definitions can leave a mismatched arity
      return `todo!("constructor arity mismatch for ${fnName}")`;
    }

    // Calls to event constructors outside emit statements are no-ops
    if (this.ctx.eventNames?.includes(fnName)) {
      return `/* event ${fnName} */ ()`;
    }

    // Type constructors / conversions: U128(x), Dec(x), String(x), Addr(x)
    // (U256 is pragmatically unified with Uint128 — see STATIC_TYPE_MAP note)
    if (['U256', 'Uint256', 'U128', 'Uint128'].includes(fnName)) {
      const argNode = node.args.at(0);
      const arg = argNode ? this.visitArg(argNode) : '0';
      if (arg.includes('todo!(')) {
        return `todo!("numeric conversion of placeholder")`;
      }
      if (/^\d+$/.test(arg)) {
        return `Uint128::new(${arg}u128)`;
      }
      if (argNode && this.inferType(argNode.value) === 'Decimal') {
        return `(${arg}).to_uint_floor()`;
      }
      if (argNode && this.inferType(argNode.value) === 'Uint128') {
        return `(${arg})`;
      }
      if (argNode && argNode.value instanceof Ast.StringLit) {
        return `${arg}.parse::<Uint128>().map_err(|e| StdError::generic_err(e.to_string()))${this.trySuffix()}`;
      }
      return `Uint128::try_from(${arg}).unwrap()`;
    }
    if (fnName === 'U64') {
      const args = node.args.map((a) => this.visitArg(a));
      return `(${args[0]} as u64)`;
    }
    if (['Dec', 'Decimal', 'Dec256', 'Decimal256'].includes(fnName)) {
      const argNode = node.args.at(0);
      if (argNode && argNode.value instanceof Ast.IntLit) {
        return `Decimal::from_ratio(${this.visit(argNode.value)}u128, 1u128)`;
      }
      const arg = argNode ? this.visitArg(argNode) : '"0"';
      return `(${arg}).to_string().parse::<Decimal>().map_err(|e| StdError::generic_err(e.to_string()))${this.trySuffix()}`;
    }
    if (fnName === 'String') {
      const argNode = node.args.at(0);
      if (argNode && argNode.value instanceof Ast.StringLit) {
        return this.visit(argNode.value);
      }
      return `(${argNode ? this.visitArg(argNode) : '""'}).to_string()`;
    }
    if (fnName === 'Addr' || fnName === 'Address') {
      const argNode = node.args.at(0);
      const arg = argNode ? this.visitArg(argNode) : '""';
      if (arg.includes('todo!(')) {
        return `todo!("address of placeholder")`;
      }
      if (this.hasCtx()) {
        return `ctx.deps.api.addr_validate((${arg}).as_str())${this.trySuffix()}`;
      }
      return `Addr::unchecked(${arg})`;
    }

    // List() → vec![]
    if (fnName === 'List' && node.args.length === 0) {
      return `vec![]`;
    }

    // Known built-in function mappings
    if (fnName === 'min' && node.args.length === 2) {
      const args = node.args.map((a) => this.visitArg(a));
      return `std::cmp::min(${args.join(', ')})`;
    }

    // Exec/query handler calls that can't be directly translated → todo!()
    if (this.ctx.execHandlerNames?.includes(fnName) || this.ctx.queryHandlerNames?.includes(fnName)) {
      return `todo!("call ${fnName}")`;
    }
    // External queries → todo!()
    if (fnName === 'query_token_info') {
      return `todo!("query_token_info")`;
    }

    // Addr::unchecked with 0 args → Addr::unchecked("")
    if (fnName === 'Addr::unchecked' && node.args.length === 0) {
      return `Addr::unchecked("")`;
    }

    // If this is an iterator .map()/.filter() call, materialize with collect
    if (fnName.endsWith('.into_iter().map') || fnName.endsWith('.iter().map')) {
      const args = node.args.map((a) => this.visitArg(a));
      // NOTE: `map!` fallibility is handled inside the closure (fallible
      // calls there use .unwrap()), so a plain Vec collect is correct.
      return `${fnName}(${args.join(', ')}).collect::<Vec<_>>()`;
    }
    if (fnName.endsWith('.into_iter().filter') || fnName.endsWith('.iter().filter')) {
      const args = node.args.map((a) => this.visitArg(a));
      return `${fnName}(${args.join(', ')}).collect::<Vec<_>>()`;
    }
    // .pow() expects u32 arg in Rust — cast if needed
    if (fnName.endsWith('.pow')) {
      const args = node.args.map((a) => this.visitArg(a));
      return `${fnName}(${args.map(a => `(${a}) as u32`).join(', ')})`;
    }
    // .min()/.max() coerce their argument to the receiver's type
    if (
      node.fn instanceof Ast.DotExpr &&
      ['min', 'max'].includes(this.stripHash(node.fn.memberName.value)) &&
      node.args.toArray().length === 1
    ) {
      const recvTy0 = this.inferType(node.fn.obj);
      if (recvTy0 && !recvTy0.startsWith('Option<')) {
        const recv = this.visit(node.fn.obj);
        const arg = this.coerceValue(recvTy0, node.args.at(0)!.value);
        return `${recv}.${this.stripHash(node.fn.memberName.value)}(${arg})`;
      }
    }

    // Fallible arithmetic methods → checked_* with error conversion
    const CHECKED_METHODS = new Set(['mul', 'add', 'sub', 'div']);
    if (node.fallible && node.fn instanceof Ast.DotExpr) {
      const m = this.stripHash(node.fn.memberName.value);
      if (CHECKED_METHODS.has(m)) {
        const recv = this.visit(node.fn.obj);
        const args2 = node.args.map((a) => this.visitArg(a));
        if (recv.includes('todo!(')) return `todo!("checked ${m} on placeholder")`;
        return `${recv}.checked_${m}(${args2.join(', ')}).map_err(|e| StdError::generic_err(e.to_string()))${this.trySuffix()}`;
      }
    }
    // Plain function calls: clone simple variable/field arguments so
    // by-value passing doesn't move bindings that are used again later.
    const isPlainFnCall =
      node.fn instanceof Ast.IdentExpr ||
      /^[A-Za-z_][A-Za-z0-9_:]*$/.test(fnName);
    const args = node.args.map((a) =>
      isPlainFnCall ? this.visitArgCloned(a) : this.visitArg(a)
    );
    const call = `${fnName}(${args.join(', ')})`;
    // Fallible method chains (e.g. checked math) propagate
    if (node.fallible && !(node.fn instanceof Ast.IdentExpr)) {
      return `${call}${this.trySuffix()}`;
    }
    return call;
  }

  /** Enum variant construction with field coercion. */
  private renderEnumVariantCtor(
    enumName: string,
    variantName: string,
    info: CgEnumVariantInfo,
    args: Ast.Arg[]
  ): string {
    const path = `${enumName}::${variantName}`;
    if (info.shape === 'unit' || (info.fields.length === 0 && args.length === 0)) {
      if (info.shape === 'tuple') return `${path}()`;
      if (info.shape === 'struct') return `${path} {}`;
      return path;
    }
    if (info.shape === 'tuple') {
      const items = args.map((a, i) =>
        this.coerceValue(info.fields[i]?.ty ?? null, a.value)
      );
      return `${path}(${items.join(', ')})`;
    }
    // struct shape: named args match by name, positional by declaration order
    const fields: string[] = [];
    args.forEach((a, i) => {
      const fname = a.name ? this.stripHash(a.name.value) : info.fields[i]?.name;
      if (!fname) return;
      const fTy = info.fields.find((f) => f.name === fname)?.ty ?? null;
      fields.push(`${fname}: ${this.coerceCloned(fTy, a)}`);
    });
    return `${path} { ${fields.join(', ')} }`;
  }

  visitArg(node: Ast.Arg): string {
    return this.visit(node.value);
  }

  /** Coerce an argument value and clone simple variable reads. */
  private coerceCloned(expected: string | null, node: Ast.Arg): string {
    const v = this.coerceValue(expected, node.value);
    if (v.includes('todo!(')) return v;
    if (
      node.value instanceof Ast.IdentExpr &&
      !node.value.ident.value.startsWith('$') &&
      !this._todoVars.has(node.value.ident.value) &&
      v === node.value.ident.value
    ) {
      return `${v}.clone()`;
    }
    if (node.value instanceof Ast.DotExpr && !v.endsWith(')')) {
      return `${v}.clone()`;
    }
    return v;
  }

  /**
   * Render a call argument, cloning simple variable / field reads so that
   * passing them by value doesn't move them out of the caller's scope
   * (CWScript has implicit-copy semantics; generated code may over-clone).
   */
  visitArgCloned(node: Ast.Arg): string {
    const rendered = this.visit(node.value);
    if (rendered.includes('todo!(')) return rendered;
    if (
      node.value instanceof Ast.IdentExpr &&
      !node.value.ident.value.startsWith('$') &&
      !this._todoVars.has(node.value.ident.value)
    ) {
      return `${rendered}.clone()`;
    }
    if (node.value instanceof Ast.DotExpr && !rendered.endsWith(')')) {
      return `${rendered}.clone()`;
    }
    return rendered;
  }

  /** Binary operator rendering with an optional expected result type. */
  private renderBinOp(node: Ast.BinOpExpr, expected: string | null): string {
    // Determine a target numeric type: expectation, else the non-literal side
    let target = expected;
    let lt = this.inferType(node.lhs);
    let rt = this.inferType(node.rhs);
    // Optional operands auto-unwrap in binary expressions (guarded by `x?`)
    if (lt?.startsWith('Option<')) lt = lt.slice(7, -1);
    if (rt?.startsWith('Option<')) rt = rt.slice(7, -1);
    if (!target || ['bool'].includes(target)) {
      // The wide cosmwasm numeric types dominate primitive ints
      const WIDE = ['Uint128', 'Uint256', 'Decimal'];
      if (lt && WIDE.includes(lt)) target = lt;
      else if (rt && WIDE.includes(rt)) target = rt;
      else target = lt && lt !== '#int' ? lt : rt && rt !== '#int' ? rt : null;
    }
    const operandTarget = ['Uint128', 'Uint256', 'Decimal', 'u8', 'u16', 'u32', 'u64', 'i64'].includes(target ?? '')
      ? target
      : null;

    if (node.op === Ast.Op.POW) {
      let lhs = this.coerceValue(operandTarget, node.lhs);
      if (node.lhs instanceof Ast.IntLit && !operandTarget) lhs = `(${lhs}u64)`;
      else if (!(node.lhs instanceof Ast.GroupedExpr)) lhs = `(${lhs})`;
      const rhs = this.visit(node.rhs);
      return `${lhs}.pow((${rhs}) as u32)`;
    }

    const isTodoIdent = (e: Ast.Expr) =>
      e instanceof Ast.IdentExpr && this._todoVars.has(e.ident.value);
    if (isTodoIdent(node.lhs) || isTodoIdent(node.rhs)) {
      return `todo!("binop on placeholder")`;
    }
    let lhs = this.coerceValue(operandTarget, node.lhs);
    let rhs = this.coerceValue(operandTarget, node.rhs);
    // Comparisons/arithmetic against todo!() placeholders can't type-infer
    if (lhs.includes('todo!(') || rhs.includes('todo!(')) {
      return `todo!("binop on placeholder")`;
    }
    // String concatenation
    if (node.op === Ast.Op.PLUS && target === 'String') {
      return `format!("{}{}", ${lhs}, ${rhs})`;
    }
    // Decimal ± Uint128 has no impl — lift the integer side into Decimal
    if (node.op === Ast.Op.PLUS || node.op === Ast.Op.MINUS) {
      if (lt === 'Decimal' && rt === 'Uint128') {
        rhs = `Decimal::from_ratio(${rhs}, 1u128)`;
      } else if (lt === 'Uint128' && rt === 'Decimal') {
        lhs = `Decimal::from_ratio(${lhs}, 1u128)`;
      }
    }
    return `${lhs} ${node.op} ${rhs}`;
  }

  visitBinOpExpr(node: Ast.BinOpExpr): string {
    return this.renderBinOp(node, null);
  }

  visitAndExpr(node: Ast.AndExpr): string {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    return `${lhs} && ${rhs}`;
  }

  visitOrExpr(node: Ast.OrExpr): string {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    return `${lhs} || ${rhs}`;
  }

  visitNotExpr(node: Ast.NotExpr): string {
    const expr = this.visit(node.expr);
    return `!${expr}`;
  }

  /** If-expression rendering with an optional expected value type. */
  private renderIfExpr(node: Ast.IfExpr, expected: string | null): string {
    // Check for enum destructuring pattern (same as visitIfStmt)
    const enumDestructure = this.extractEnumDestructure(node.pred, node.thenBody);
    if (enumDestructure) {
      const { varName, enumVariant, bindings, remainingStmts } = enumDestructure;
      bindings.forEach((b) => this.declare(b));
      const bindingList = bindings.length > 0 ? `${bindings.join(', ')}, ..` : '..';
      const bodyCode = remainingStmts.map((s) => this.visit(s)).join('\n');
      if (node.elseBody) {
        const elseBody = this.visitBlockValue(node.elseBody, expected);
        return `if let ${enumVariant} { ${bindingList} } = ${varName} { ${bodyCode} } else { ${elseBody} }`;
      }
      return `if let ${enumVariant} { ${bindingList} } = ${varName} { ${bodyCode} } else { todo!("missing else branch") }`;
    }

    const pred = this.visit(node.pred);
    // Establish the branch value type: expectation, else first known branch
    let target = expected;
    if (!target) {
      const tt = this.inferBlockTailType(node.thenBody);
      const et = this.inferBlockTailType(node.elseBody);
      target = (tt && tt !== '#int' ? tt : null) ?? (et && et !== '#int' ? et : null);
    }
    // Auto-unwrap Option variables checked with .is_some() (same as visitIfStmt)
    const isSomeMatches = [...pred.matchAll(/(\w+)\.is_some\(\)/g)];
    const restores = this.stripOptionVarTypes(isSomeMatches.map((m) => m[1]));
    const thenBody = this.visitBlockValue(node.thenBody, target);
    restores();
    const unwrapLines = isSomeMatches.map(m => `let ${m[1]} = ${m[1]}.clone().unwrap();`).join('\n');
    const bodyWithUnwraps = unwrapLines ? `${unwrapLines}\n${thenBody}` : thenBody;
    if (node.elseBody) {
      const elseBody = this.visitBlockValue(node.elseBody, target);
      return `if ${pred} { ${bodyWithUnwraps} } else { ${elseBody} }`;
    }
    // A value-position if without else can't produce a non-() value; give it
    // a todo!() else branch so the then-branch type wins.
    return `if ${pred} { ${bodyWithUnwraps} } else { todo!("missing else branch") }`;
  }

  visitIfExpr(node: Ast.IfExpr): string {
    return this.renderIfExpr(node, null);
  }

  visitShortTryExpr(node: Ast.ShortTryExpr): string {
    // Flatten `a ?? b ?? c` (left-assoc) into [a, b, c]
    const parts: Ast.Expr[] = [];
    let cur: Ast.Expr = node;
    while (cur instanceof Ast.ShortTryExpr) {
      parts.unshift(cur.rhs);
      cur = cur.lhs;
    }
    parts.unshift(cur);
    const fallback = parts[parts.length - 1];
    const options = parts.slice(0, -1);

    const first = options[0];
    const firstRendered = this.visit(first);
    if (
      firstRendered.includes('todo!(') ||
      (first instanceof Ast.IdentExpr && this._todoVars.has(first.ident.value))
    ) {
      return `todo!("?? on placeholder")`;
    }

    // Normalize each option to Option<T>
    const asOption = (e: Ast.Expr): string => {
      const r = this.visit(e);
      if (this.fallibleCallSig(e)) {
        // fallible call renders with a trailing `?`/.unwrap() — strip it
        let base = r;
        if (base.endsWith('?')) base = base.slice(0, -1);
        else if (base.endsWith('.unwrap()')) base = base.slice(0, -'.unwrap()'.length);
        return `${base}.ok()`;
      }
      // unwrap_or/ok_or consume the Option — clone plain variable reads so
      // the binding stays usable afterwards (implicit-copy semantics)
      if (e instanceof Ast.IdentExpr && !e.ident.value.startsWith('$')) {
        return `${r}.clone()`;
      }
      return r;
    };

    const inner = this.inferType(first);
    const valueTy = inner?.startsWith('Option<') ? inner.slice(7, -1) : inner;

    // `x ?? fallback` where x is a plain value (not Option / fallible):
    // the fallback can never apply
    if (
      options.length === 1 &&
      inner &&
      inner !== '#int' &&
      !inner.startsWith('Option<') &&
      !this.fallibleCallSig(first)
    ) {
      return this.visit(first);
    }

    let chain = asOption(options[0]);
    for (const o of options.slice(1)) {
      chain = `${chain}.or(${asOption(o)})`;
    }

    if (fallback instanceof Ast.FailExpr) {
      const errVal = this.failValueToError(fallback.value);
      return `${chain}.ok_or_else(|| ${errVal})${this.trySuffix()}`;
    }
    const fb = this.coerceValue(valueTy ?? null, fallback);
    return `${chain}.unwrap_or(${fb})`;
  }

  visitExistsExpr(node: Ast.ExistsExpr): string {
    // `$state.map[key]?` → key-existence check via may_load
    if (
      node.expr instanceof Ast.IndexExpr &&
      node.expr.obj instanceof Ast.DotExpr &&
      this.isStateDotExpr(node.expr.obj)
    ) {
      const fieldName = this.stripHash(node.expr.obj.memberName.value);
      if (this.ctx.stateFieldNames.includes(fieldName)) {
        const constName = fieldName.toUpperCase();
        return `${constName}.may_load(ctx.deps.storage, ${this.mapKeyExpr(node.expr.index)})${this.trySuffix()}.is_some()`;
      }
    }
    const expr = this.visit(node.expr);
    if (
      expr.includes('todo!(') ||
      (node.expr instanceof Ast.IdentExpr && this._todoVars.has(node.expr.ident.value))
    ) {
      return `todo!("exists on placeholder")`;
    }
    // If the inner expression is a function call or method call,
    // use Rust ? operator (error propagation) instead of .is_some()
    if (node.expr instanceof Ast.CallExpr) {
      if (expr.endsWith('?') || expr.endsWith('.unwrap()')) return expr;
      return `${expr}${this.trySuffix()}`;
    }
    return `${expr}.is_some()`;
  }

  visitGroupedExpr(node: Ast.GroupedExpr): string {
    const expr = this.visit(node.expr);
    return `(${expr})`;
  }

  visitTupleExpr(node: Ast.TupleExpr): string {
    // CWScript uses [a, b] for both tuples and arrays; pick by element types.
    return this.renderTupleExpr(node, null);
  }

  visitStructExpr(node: Ast.StructExpr): string {
    const tyText = mapType(node.ty);
    // Constructing an unknown/external struct type → degrade to todo!()
    const baseTy = tyText.split('<')[0].split('::')[0];
    const isKnownTy =
      BUILTIN_TYPE_IDENTS.has(baseTy) ||
      (this.ctx.knownTypeNames || []).includes(baseTy) ||
      !!this.ctx.structFields?.[baseTy] ||
      !!this.ctx.enumVariantFields?.[baseTy];
    if (/^[A-Z]/.test(baseTy) && !isKnownTy) {
      return `todo!("construct unknown type ${baseTy}")`;
    }
    if (this.ctx.stubTypes?.has(baseTy)) {
      return `todo!("construct stub type ${baseTy}")`;
    }
    // Field type context: plain struct or enum struct-variant
    let fieldTys: Record<string, string> | undefined =
      this.ctx.structFieldTypes?.[tyText] ?? BUILTIN_FIELD_TYPES[tyText];
    const pathMatch = tyText.match(/^([A-Za-z0-9_]+)::([A-Za-z0-9_]+)$/);
    if (!fieldTys && pathMatch && this.ctx.enumVariants?.[pathMatch[1]]?.[pathMatch[2]]) {
      fieldTys = Object.fromEntries(
        this.ctx.enumVariants[pathMatch[1]][pathMatch[2]].fields.map((f) => [f.name, f.ty])
      );
    }
    const fields = node.fields.map((f) => {
      const expected = fieldTys?.[f.name.value] ?? null;
      if (f.value) {
        const val = this.coerceValue(expected, f.value);
        if (val.includes('todo!(')) {
          return `${f.name.value}: todo!()`;
        }
        // Clone local variable/field reads to avoid Rust move issues
        // (CWScript semantics: values are implicitly cloned when passed)
        if (f.value instanceof Ast.IdentExpr && !f.value.ident.value.startsWith('$')) {
          if (this._todoVars.has(f.value.ident.value)) {
            return `${f.name.value}: todo!()`;
          }
          if (val === f.value.ident.value) {
            return `${f.name.value}: ${val}.clone()`;
          }
          return `${f.name.value}: ${val}`;
        }
        if (f.value instanceof Ast.DotExpr && !val.endsWith(')')) {
          return `${f.name.value}: ${val}.clone()`;
        }
        return `${f.name.value}: ${val}`;
      }
      // Shorthand field: clone the variable to avoid moves
      if (this._todoVars.has(f.name.value)) {
        return `${f.name.value}: todo!()`;
      }
      // numeric-domain coercion for shorthand fields
      const exp2 = fieldTys?.[f.name.value] ?? null;
      const act = this._varTypes.get(f.name.value) ?? null;
      if (exp2 === 'Uint128' && act && ['u8', 'u16', 'u32', 'u64', 'i64', 'u128', '#int'].includes(act)) {
        return `${f.name.value}: Uint128::new((${f.name.value}) as u128)`;
      }
      if (exp2 === 'String' && act === 'Addr') {
        return `${f.name.value}: ${f.name.value}.to_string()`;
      }
      return `${f.name.value}: ${f.name.value}.clone()`;
    });
    return `${this.qualifyLocalType(tyText)} { ${fields.join(', ')} }`;
  }

  visitClosureExpr(node: Ast.ClosureExpr): string {
    const params = node.params.map((p) => p.name.value);
    // Find the call this closure is an argument of (walking through the
    // Arg and List wrapper nodes).
    let p: any = node.$parent;
    while (p && !(p instanceof Ast.CallExpr)) {
      if (!(p instanceof Ast.Arg) && !(p instanceof Ast.List)) {
        p = null;
        break;
      }
      p = p.$parent;
    }
    const callExpr: Ast.CallExpr | null = p instanceof Ast.CallExpr ? p : null;
    const fnText = callExpr?.fn.$antlrParseRuleCtx?.text || '';
    // Element type of the iterated collection, for arg coercions inside the
    // closure body. Deliberately preferred over the declared param type: the
    // rust elements keep the collection's type.
    let elemTy: string | null = null;
    if (callExpr && callExpr.fn instanceof Ast.DotExpr) {
      elemTy = this.elemTypeOf(callExpr.fn.obj);
    }
    params.forEach((name) => this.declare(name, elemTy));
    this._closureDepth++;
    const body = this.visit(node.body);
    this._closureDepth--;
    // Closures used in iterator contexts receive references (or values we'd
    // rather not move) — rebind params as owned clones.
    const ITER_CALLS = ['.map', '.filter', '.find', '.any', '.all', '.position', '.flat_map', '.fold'];
    if (ITER_CALLS.some((m) => fnText.endsWith(m) || fnText.endsWith(m + '!'))) {
      const cloneLines = params.map(name => `let ${name} = ${name}.clone();`).join('\n');
      return `|${params.join(', ')}| { ${cloneLines}\n${body} }`;
    }
    return `|${params.join(', ')}| { ${body} }`;
  }

  visitMapExpr(node: Ast.MapExpr): string {
    const entries = node.entries.map((e) => {
      const key = this.visit(e.key);
      const val = this.visit(e.value);
      return `(${key}, ${val})`;
    });
    return `HashMap::from([${entries.join(', ')}])`;
  }

  visitIsExpr(node: Ast.IsExpr): string {
    let lhs = this.visit(node.lhs);
    // Generate matches!() macro call instead of a comment
    let tyText = '';
    if (node.rhs) {
      tyText = mapType(node.rhs);
    }
    if (!tyText) {
      tyText = node.rhs?.$antlrParseRuleCtx?.text || 'Unknown';
    }
    // Strip any remaining # from type text
    tyText = tyText.replace(/#/g, '');

    // If comparing against AssetInfo variant but LHS is likely an Asset,
    // append .info to access the enum field
    if (tyText.startsWith('AssetInfo::') && !lhs.endsWith('.info')) {
      const lhsLower = lhs.toLowerCase();
      const isAssetInfoVar = lhsLower.includes('asset_info') || lhsLower.includes('assetinfo') || lhsLower === 'info';
      if (!isAssetInfoVar && (lhsLower.includes('asset') || lhsLower === 'pool')) {
        lhs = `${lhs}.info`;
      }
    }

    const base = tyText.split('::')[0].split('<')[0];
    const baseKnown =
      !!this.ctx.enumVariants?.[base] ||
      !!this.ctx.structFields?.[base] ||
      BUILTIN_TYPE_IDENTS.has(base) ||
      (this.ctx.knownTypeNames || []).includes(base);
    if (!baseKnown || this.ctx.stubTypes?.has(base)) {
      return `todo!("type check against unresolved type ${base}")`;
    }
    if (lhs.includes('todo!(')) {
      return `todo!("type check on placeholder")`;
    }
    if (node.negative) {
      return `!matches!(${lhs}, ${tyText} { .. })`;
    }
    return `matches!(${lhs}, ${tyText} { .. })`;
  }

  visitInExpr(node: Ast.InExpr): string {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    if (lhs.includes('todo!(') || rhs.includes('todo!(')) {
      return `todo!("in-check on placeholder")`;
    }
    if (node.negative) {
      return `!${rhs}.contains(&${lhs})`;
    }
    return `${rhs}.contains(&${lhs})`;
  }

  visitQueryExpr(node: Ast.QueryExpr): string {
    const real = this.queryCallToExpr(node.expr);
    if (real) return real;
    const label = (node.expr.$antlrParseRuleCtx?.text ?? 'query').slice(0, 40).replace(/"/g, "'");
    return `todo!("query! ${label}")`;
  }

  /** Deps expression usable for querier / own-query calls per handler type. */
  private depsRef(): string {
    if (this.ctx.handlerType === 'query') return 'ctx.deps';
    if (this.ctx.handlerType === 'helper' && this.ctx.selfCtxKind === 'read') {
      return 'ctx.deps';
    }
    return 'ctx.deps.as_ref()';
  }

  /** Expression to pass as the trailing ctx arg of a helper call, or null
   * when the callee's requirements can't be met in this handler. */
  private ctxArgFor(calleeKind: 'none' | 'read' | 'mut'): string | null {
    const ht = this.ctx.handlerType;
    const selfKind = ht === 'helper' ? this.ctx.selfCtxKind ?? 'none' : null;
    if (calleeKind === 'mut') {
      if (ht === 'query') return null;
      if (ht === 'helper') {
        return selfKind === 'mut' ? 'ctx' : null;
      }
      return '&mut ctx';
    }
    // read-only callee: build a QueryCtx view
    if (ht === 'helper') {
      if (selfKind === 'read') return 'ctx';
      if (selfKind === 'mut')
        return '&QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() }';
      return null;
    }
    if (ht === 'query') {
      return '&QueryCtx { deps: ctx.deps, env: ctx.env.clone() }';
    }
    return '&QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() }';
  }

  private queryCallToExpr(expr: Ast.Expr): string | null {
    if (!(expr instanceof Ast.CallExpr) || !(expr.fn instanceof Ast.DotExpr)) {
      return null;
    }
    const dot = expr.fn;
    const method = this.stripHash(dot.memberName.value);
    const args = expr.args.toArray();

    if (dot.obj instanceof Ast.IdentExpr) {
      const target = dot.obj.ident.value;
      if (target === 'Bank' && method === 'balance' && args.length >= 2) {
        const addr = this.visit(args[0].value);
        const denom = this.visit(args[1].value);
        if (addr.includes('todo!(') || denom.includes('todo!(')) return null;
        return `ctx.deps.querier.query_balance(${addr}, ${denom})${this.trySuffix()}`;
      }
      // query! $.#handler(args) → call our own query impl and decode
      if (target === '$') {
        const handler = method;
        if (this.ctx.queryReturnTypes?.[handler] !== undefined) {
          const rt = this.ctx.queryReturnTypes[handler] || 'Binary';
          const rendered = args.map((a) => this.visitArgCloned(a));
          const callArgs = ['', ...rendered].join(', ');
          return `from_json::<${rt}>(&query_${handler}_impl(QueryCtx { deps: ${this.depsRef()}, env: ctx.env.clone() }${callArgs})${this.trySuffix()})${this.trySuffix()}`;
        }
      }
      return null;
    }

    // Contract-instance queries: Cw20(addr).#token_info() etc.
    if (
      dot.obj instanceof Ast.CallExpr &&
      dot.obj.fn instanceof Ast.IdentExpr &&
      dot.obj.args.toArray().length >= 1
    ) {
      const contractTy = dot.obj.fn.ident.value;
      const addr = this.visit(dot.obj.args.at(0)!.value);
      if (contractTy === 'Cw20') {
        if (method === 'token_info') {
          return `ctx.deps.querier.query_wasm_smart::<cw20::TokenInfoResponse>((${addr}).clone(), &cw20::Cw20QueryMsg::TokenInfo {})${this.trySuffix()}`;
        }
        if (method === 'balance') {
          const a = this.argByNameOrPos(args, 'address', 0);
          const address = a ? `(${this.visit(a.value)}).to_string()` : 'String::new()';
          return `ctx.deps.querier.query_wasm_smart::<cw20::BalanceResponse>((${addr}).clone(), &cw20::Cw20QueryMsg::Balance { address: ${address} })${this.trySuffix()}.balance`;
        }
        if (method === 'minter') {
          return `ctx.deps.querier.query_wasm_smart::<Option<cw20::MinterResponse>>((${addr}).clone(), &cw20::Cw20QueryMsg::Minter {})${this.trySuffix()}`;
        }
      }
      return null;
    }
    return null;
  }

  visitFailExpr(node: Ast.FailExpr): string {
    return `return Err(${this.failValueToError(node.value)})`;
  }

  visitReturnExpr(node: Ast.ReturnExpr): string {
    const val = this.visit(node.value);
    return `return ${val}`;
  }

  visitUnitExpr(node: Ast.UnitExpr): string {
    const tyText = node.ty.$antlrParseRuleCtx?.text || 'Unit';
    return `${tyText} {}`;
  }

  // --- Literals ---

  visitIntLit(node: Ast.IntLit): string {
    return node.value;
  }

  visitStringLit(node: Ast.StringLit): string {
    const raw = node.value; // includes surrounding quotes
    if (raw.startsWith("'")) {
      // Raw string literal — single quotes, no interpolation
      const inner = raw.slice(1, -1).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `String::from("${inner}")`;
    }
    const inner = raw.slice(1, -1);
    // Interpolation: {expr} → format!("...{}...", expr)
    const parts = inner.split(/\{([^{}]+)\}/g);
    if (parts.length > 1) {
      const fmt = parts.filter((_, i) => i % 2 === 0).join('{}');
      const argExprs = parts.filter((_, i) => i % 2 === 1).map((s) => s.trim());
      return `format!("${fmt}", ${argExprs.join(', ')})`;
    }
    return `String::from(${raw})`;
  }

  visitBoolLit(node: Ast.BoolLit): string {
    return node.value ? 'true' : 'false';
  }

  visitDecLit(node: Ast.DecLit): string {
    return `"${node.value}".parse::<Decimal>().unwrap()`;
  }

  visitNoneLit(_node: Ast.NoneLit): string {
    return 'None';
  }
}

/** Split "A, B<C, D>, E" on top-level commas. */
function splitTopLevel(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of s) {
    if (ch === '<' || ch === '(' || ch === '[') depth++;
    if (ch === '>' || ch === ')' || ch === ']') depth--;
    if (ch === ',' && depth === 0) {
      out.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

export function blockToCg(node: Ast.Block, ctx?: CgBlockContext): string[] {
  const blockVisitor = new CgBlockVisitor(ctx || DEFAULT_CTX);
  // Fallible helpers return Result<T, _>: a trailing expression (no semi)
  // is the success value and needs an Ok(...) wrap.
  if (ctx?.fnResultWrap) {
    const stmts = node.stmts.toArray();
    const rendered = stmts.map((s, i) => {
      const r = blockVisitor.visit(s);
      if (
        i === stmts.length - 1 &&
        s instanceof Ast.ExprStmt &&
        !s.semi &&
        !r.trim().endsWith(';') &&
        !r.includes('todo!(')
      ) {
        return `return Ok(${r});`;
      }
      return r;
    });
    return [rendered.join('\n')];
  }
  const result = blockVisitor.visit(node);
  return [result];
}

import * as Ast from '../ast';
import { mapType } from './contract-to-cg';

export interface CgBlockContext {
  stateFieldNames: string[];
  errorNames: string[];
  handlerType?: 'instantiate' | 'exec' | 'query';
  execHandlerNames?: string[];
  queryHandlerNames?: string[];
  helperFnNames?: string[];
}

const DEFAULT_CTX: CgBlockContext = {
  stateFieldNames: [],
  errorNames: [],
};

// Known type names that use :: for static method calls
const STATIC_TYPE_MAP: Record<string, string> = {
  Addr: 'Addr',
  Dec: 'Decimal',
  Decimal: 'Decimal',
  Dec256: 'Decimal256',
  Decimal256: 'Decimal256',
  U128: 'Uint128',
  U256: 'Uint256',
  Uint128: 'Uint128',
  Uint256: 'Uint256',
};

export class CgBlockVisitor extends Ast.AstVisitor<string> {
  private _todoVars = new Set<string>();

  constructor(public ctx: CgBlockContext) {
    super();
  }

  defaultVisit(node: Ast.AstNode<string>): string {
    return `/* TODO: ${node.$kind} */`;
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

    // Look for LetStructStmt in the body that destructures from the same variable
    const stmtsArray = body.stmts.toArray();
    const firstStmt = stmtsArray[0];
    if (!(firstStmt instanceof Ast.LetStructStmt)) {
      return null;
    }

    // Check that destructure source matches the IsExpr LHS
    // For IdentExpr: firstStmt.value must be the same identifier
    // For DotExpr: visit firstStmt.value and compare strings
    let destructureSource = '';
    if (firstStmt.value instanceof Ast.IdentExpr) {
      destructureSource = firstStmt.value.ident.value;
    } else if (firstStmt.value instanceof Ast.DotExpr) {
      destructureSource = this.visit(firstStmt.value);
    } else {
      return null;
    }

    // Compare: for simple idents, compare directly; for dot exprs, compare visited strings
    if (pred.lhs instanceof Ast.IdentExpr) {
      if (destructureSource !== varName) return null;
    } else {
      if (destructureSource !== varName) return null;
    }

    const bindings = firstStmt.bindings.map((b) => b.name.value);
    const remainingStmts = stmtsArray.slice(1);

    return { varName, enumVariant, bindings, remainingStmts };
  }

  // --- Blocks ---

  visitBlock(node: Ast.Block): string {
    return node.stmts.map((x) => this.visit(x)).join('\n');
  }

  // --- Statements ---

  visitLetIdentStmt(node: Ast.LetIdentStmt): string {
    const name = node.name.value;
    const value = this.visit(node.value);
    // If value is a todo!(), track it so subsequent field accesses propagate todo
    if (value.includes('todo!(')) {
      this._todoVars.add(name);
    }
    return `let ${name} = ${value};`;
  }

  visitLetTupleStmt(node: Ast.LetTupleStmt): string {
    const names = node.names.map((x) => x.value);
    const value = this.visit(node.value);
    // Use array destructuring [a, b] since CWScript [a, b] maps to arrays
    return `let [${names.join(', ')}] = ${value};`;
  }

  visitLetStructStmt(node: Ast.LetStructStmt): string {
    const bindings = node.bindings.map((b) => b.name.value);
    // Special case: let { field } = $state → load state fields
    if (node.value instanceof Ast.IdentExpr && node.value.ident.value === '$state') {
      return bindings.map((name) => {
        const constName = name.toUpperCase();
        return `let ${name} = ${constName}.load(ctx.deps.storage)?;`;
      }).join('\n');
    }
    const value = this.visit(node.value);
    // If the value is a todo!() / query placeholder, don't access fields on it
    if (value.includes('todo!(')) {
      bindings.forEach((name) => this._todoVars.add(name));
      return bindings.map((name) => `let ${name} = todo!("${name}");`).join('\n');
    }
    // If value is an enum (identified by matches!() pattern), field access won't work
    // Use todo!() as placeholder — proper destructuring needs if-let
    if (value.includes('matches!(') || value.includes('Cw20HookMsg') || value.includes('AssetInfo')) {
      return bindings.map((name) => `let ${name} = todo!("destructure ${name}");`).join('\n');
    }
    return bindings.map((name) => `let ${name} = ${value}.${name}.clone();`).join('\n');
  }

  visitAssignStmt(node: Ast.AssignStmt): string {
    const name = node.name.value;
    const value = this.visit(node.value);
    return `${name} ${node.assignOp} ${value};`;
  }

  visitMemberAssignStmt(node: Ast.MemberAssignStmt): string {
    const memberName = this.stripHash(node.memberName.value);

    // Check if this is a state assignment: $state.field = value
    if (this.isStateAccess(node.obj, memberName)) {
      const constName = memberName.toUpperCase();
      const value = this.visit(node.value);

      if (node.assignOp === Ast.AssignOp.EQ) {
        return `${constName}.save(ctx.deps.storage, &(${value}))?;`;
      } else {
        const rustOp = node.assignOp;
        return `${constName}.update(ctx.deps.storage, |mut c| -> StdResult<_> { c ${rustOp} ${value}; Ok(c) })?;`;
      }
    }

    // Regular member assignment
    const obj = this.visit(node.obj);
    const value = this.visit(node.value);
    return `${obj}.${memberName} ${node.assignOp} ${value};`;
  }

  visitIndexAssignStmt(node: Ast.IndexAssignStmt): string {
    // Check if this is a state map assignment: $state.map[key] = value
    if (node.obj instanceof Ast.DotExpr && this.isStateDotExpr(node.obj)) {
      const fieldName = this.stripHash(node.obj.memberName.value);
      const constName = fieldName.toUpperCase();
      const key = this.visit(node.index);
      const value = this.visit(node.value);
      return `${constName}.save(ctx.deps.storage, &(${key}), &(${value}))?;`;
    }

    const obj = this.visit(node.obj);
    const index = this.visit(node.index);
    const value = this.visit(node.value);
    return `${obj}[${index}] ${node.assignOp} ${value};`;
  }

  visitIfStmt(node: Ast.IfStmt): string {
    // Check for enum destructuring pattern: if x is Enum.#Variant { let { fields } = x; ... }
    const enumDestructure = this.extractEnumDestructure(node.pred, node.thenBody);
    if (enumDestructure) {
      const { varName, enumVariant, bindings, remainingStmts } = enumDestructure;
      const bindingList = bindings.length > 0 ? `${bindings.join(', ')}, ..` : '..';
      const bodyCode = remainingStmts.map((s) => this.visit(s)).join('\n');
      const bodyWithExtra = bodyCode;
      if (node.elseBody) {
        const elseBody = this.visit(node.elseBody);
        return `if let ${enumVariant} { ${bindingList} } = ${varName} {\n${bodyWithExtra}\n} else {\n${elseBody}\n}`;
      }
      return `if let ${enumVariant} { ${bindingList} } = ${varName} {\n${bodyWithExtra}\n}`;
    }

    const pred = this.visit(node.pred);
    const thenBody = this.visit(node.thenBody);
    // Extract variable names from .is_some() checks and auto-unwrap in body
    // e.g., if max_spread.is_some() { ... } → adds let max_spread = max_spread.unwrap();
    const isSomeMatches = [...pred.matchAll(/(\w+)\.is_some\(\)/g)];
    const unwrapLines = isSomeMatches.map(m => `let ${m[1]} = ${m[1]}.unwrap();`).join('\n');
    const bodyWithUnwraps = unwrapLines ? `${unwrapLines}\n${thenBody}` : thenBody;
    if (node.elseBody) {
      const elseBody = this.visit(node.elseBody);
      return `if ${pred} {\n${bodyWithUnwraps}\n} else {\n${elseBody}\n}`;
    }
    return `if ${pred} {\n${bodyWithUnwraps}\n}`;
  }

  visitForIdentStmt(node: Ast.ForIdentStmt): string {
    const name = node.name.value;
    const iter = this.visit(node.iter);
    const body = this.visit(node.body);
    return `for ${name} in ${iter} {\n${body}\n}`;
  }

  visitForTupleStmt(node: Ast.ForTupleStmt): string {
    const names = node.names.map((x) => x.value);
    const iter = this.visit(node.iter);
    const body = this.visit(node.body);
    return `for (${names.join(', ')}) in ${iter} {\n${body}\n}`;
  }

  visitExecStmt(node: Ast.ExecStmt): string {
    // exec! Bank.#send(addr, coins) → BankMsg::Send { to_address, amount }
    // exec! Bank.#burn(coins) → BankMsg::Burn { amount }
    // exec! other → todo!()
    if (node.value instanceof Ast.CallExpr && node.value.fn instanceof Ast.DotExpr) {
      const dotExpr = node.value.fn;
      if (dotExpr.obj instanceof Ast.IdentExpr) {
        const target = dotExpr.obj.ident.value;
        const method = this.stripHash(dotExpr.memberName.value);
        const args = node.value.args;

        if (target === 'Bank' && method === 'send' && args.length >= 2) {
          const toAddr = this.visit(args.at(0)!.value);
          const coins = this.visit(args.at(1)!.value);
          return `_response = _response.add_message(CosmosMsg::Bank(BankMsg::Send { to_address: (${toAddr}).to_string(), amount: ${coins}.to_vec() }));`;
        }
        if (target === 'Bank' && method === 'burn' && args.length >= 1) {
          const coins = this.visit(args.at(0)!.value);
          return `_response = _response.add_message(CosmosMsg::Bank(BankMsg::Burn { amount: ${coins}.to_vec() }));`;
        }
        return `todo!("exec! ${target}.${method}");`;
      }
    }
    return `todo!("exec!");`;
  }

  visitEmitStmt(node: Ast.EmitStmt): string {
    // emit! event(key=value, ...) → anonymous event, add attributes to response
    // emit! EventName(key=value, ...) → named event, add Event to response
    if (node.value instanceof Ast.CallExpr && node.value.fn instanceof Ast.IdentExpr) {
      const name = node.value.fn.ident.value;
      const args = node.value.args;

      if (name === 'event') {
        // Anonymous event → _response = _response.add_attribute("key", val)
        const lines: string[] = [];
        args.map((a) => {
          const val = this.visit(a.value);
          const key = a.name ? a.name.value : 'value';
          lines.push(`_response = _response.add_attribute("${key}", format!("{}", ${val}));`);
        });
        return lines.join('\n');
      } else {
        // Named event → _response = _response.add_event(Event::new("snake_name").add_attribute(...))
        const snakeName = name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        let eventExpr = `Event::new("${snakeName}")`;
        args.map((a) => {
          const val = this.visit(a.value);
          const key = a.name ? a.name.value : 'value';
          eventExpr += `.add_attribute("${key}", format!("{}", ${val}))`;
        });
        return `_response = _response.add_event(${eventExpr});`;
      }
    }
    const value = this.visit(node.value);
    return `/* emit! ${value} */`;
  }

  visitFailStmt(node: Ast.FailStmt): string {
    const value = node.value;
    // fail! ErrorName() → return Err(ContractError::ErrorName {})
    if (value instanceof Ast.CallExpr && value.fn instanceof Ast.IdentExpr) {
      const errorName = value.fn.ident.value;
      const args = value.args;
      if (args.length === 0) {
        return `return Err(ContractError::${errorName} {});`;
      }
      // With fields — wrap values in format!() since error fields are String
      const fields = args.map((a) => {
        const val = this.visit(a.value);
        if (a.name) {
          return `${a.name.value}: format!("{:?}", ${val})`;
        }
        return val;
      });
      return `return Err(ContractError::${errorName} { ${fields.join(', ')} });`;
    }
    // fail! "string" → return Err(ContractError::Std(StdError::generic_err("string")))
    if (value instanceof Ast.StringLit) {
      return `return Err(ContractError::StdError(StdError::generic_err(${value.value})));`;
    }
    const val = this.visit(value);
    return `return Err(ContractError::Std(StdError::generic_err(${val})));`;
  }

  visitReturnStmt(node: Ast.ReturnStmt): string {
    const value = this.visit(node.value);
    if (this.ctx.handlerType === 'query') {
      return `return Ok(to_json_binary(&(${value}))?);`;
    }
    return `return ${value};`;
  }

  visitExprStmt(node: Ast.ExprStmt): string {
    // Skip bare 'emit' keyword that wasn't parsed as EmitStmt
    if (node.value instanceof Ast.IdentExpr && node.value.ident.value === 'emit') {
      return '/* emit */';
    }
    const value = this.visit(node.value);
    if (node.semi) {
      return `${value};`;
    }
    return value;
  }

  visitTryCatchElseStmt(node: Ast.TryCatchElseStmt): string {
    const body = this.visit(node.body);
    return `/* try-catch */ { ${body} }`;
  }

  // --- Expressions ---

  visitDotExpr(node: Ast.DotExpr): string {
    const memberName = this.stripHash(node.memberName.value);

    // $state.field → FIELD.load(ctx.deps.storage)?
    if (this.isStateDotExpr(node)) {
      const constName = memberName.toUpperCase();
      return `${constName}.load(ctx.deps.storage)?`;
    }

    // $.method → method (direct function call, not self.method)
    if (node.obj instanceof Ast.IdentExpr && node.obj.ident.value === '$') {
      return memberName;
    }

    // $info.sender → ctx.info.sender.clone()
    // $info.funds → ctx.info.funds.clone()
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
        return `ctx.env.${memberName}`;
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

    // Iterator methods need .iter() prefix in Rust
    const ITER_METHODS = new Set(['find', 'enumerate', 'filter', 'flat_map', 'fold', 'any', 'all', 'sum', 'collect', 'zip', 'count', 'position']);
    if (ITER_METHODS.has(memberName)) {
      const obj = this.visit(node.obj);
      return `${obj}.iter().${memberName}`;
    }
    // .map() needs special handling: on collections → .iter().map(), on Option → .map()
    // Heuristic: if the preceding chain includes .find() or similar Option-returning
    // methods, this is Option::map, not Iterator::map
    if (memberName === 'map') {
      const obj = this.visit(node.obj);
      const OPTION_RETURNING = ['.find(', '.position(', '.first(', '.last(', '.get('];
      const isOptionChain = OPTION_RETURNING.some(m => obj.includes(m));
      if (isOptionChain) {
        return `${obj}.${memberName}`;
      }
      return `${obj}.iter().${memberName}`;
    }

    // Nested dot: $env.block.height, etc.
    const obj = this.visit(node.obj);
    // If obj contains todo!(), propagate it — accessing fields on ! type fails
    if (obj.includes('todo!(')) {
      return `todo!("${memberName}")`;
    }
    // If obj is a variable known to be assigned from todo!(), propagate todo
    if (node.obj instanceof Ast.IdentExpr && this._todoVars.has(node.obj.ident.value)) {
      return `todo!("${memberName}")`;
    }
    return `${obj}.${memberName}`;
  }

  visitIndexExpr(node: Ast.IndexExpr): string {
    // $state.map[key] → MAP.load(ctx.deps.storage, &key)?
    if (node.obj instanceof Ast.DotExpr && this.isStateDotExpr(node.obj)) {
      const fieldName = this.stripHash(node.obj.memberName.value);
      const constName = fieldName.toUpperCase();
      const key = this.visit(node.index);
      return `${constName}.load(ctx.deps.storage, &(${key}))?`;
    }

    const obj = this.visit(node.obj);
    const index = this.visit(node.index);
    return `${obj}[${index} as usize].clone()`;
  }

  visitIdentExpr(node: Ast.IdentExpr): string {
    const name = node.ident.value;
    // $ alone → empty (handled by visitDotExpr for $.method)
    if (name === '$') return 'self';
    // $state → should not appear alone (always $state.field)
    if (name === '$state') return '/* $state */';
    // $info → ctx.info
    if (name === '$info') return 'ctx.info';
    // $env → ctx.env
    if (name === '$env') return 'ctx.env';
    if (name.startsWith('$')) {
      return `ctx.${name.substring(1)}`;
    }
    return name;
  }

  visitCallExpr(node: Ast.CallExpr): string {
    const fnName = this.visit(node.fn);

    // Named args with uppercase function name → struct construction
    // e.g., Asset(info=x, amount=y) → Asset { info: x, amount: y }
    let hasNamedArgs = false;
    node.args.map((a) => { if (a.name) hasNamedArgs = true; });
    const FUNC_NAMES = ['Ok', 'Err', 'Some', 'None', 'Vec', 'HashMap', 'String', 'String::from'];
    // Only convert to struct syntax for simple type names (no dots or ::)
    if (hasNamedArgs && /^[A-Z]/.test(fnName) && !FUNC_NAMES.includes(fnName) && !fnName.includes('.') && !fnName.includes('::')) {
      const fields: string[] = [];
      node.args.map((a) => {
        const val = this.visit(a.value);
        if (a.name) {
          fields.push(`${this.stripHash(a.name.value)}: ${val}`);
        } else {
          fields.push(val);
        }
      });
      return `${fnName} { ${fields.join(', ')} }`;
    }

    // Known struct positional constructors: Asset(info, amount) → Asset { info, amount }
    const KNOWN_STRUCT_FIELDS: Record<string, string[]> = {
      Asset: ['info', 'amount'],
      Coin: ['denom', 'amount'],
      MinterResponse: ['minter', 'cap'],
    };
    const structFields = KNOWN_STRUCT_FIELDS[fnName];
    if (structFields && !hasNamedArgs && node.args.length === structFields.length) {
      const fields = node.args.map((a, i) => {
        const val = this.visitArg(a);
        return `${structFields[i]}: ${val}`;
      });
      return `${fnName} { ${fields.join(', ')} }`;
    }

    // Type constructors: U256(x) → Uint256::from(x)
    // For integer literals, add u128 suffix since Uint256 doesn't implement From<i32>
    if (fnName === 'U256' || fnName === 'Uint256') {
      const args = node.args.map((a) => this.visitArg(a));
      const arg = args[0];
      // Check if arg is a numeric literal
      if (/^\d+$/.test(arg)) {
        return `Uint256::from(${arg}u128)`;
      }
      return `Uint256::from(${arg})`;
    }
    const TYPE_CONSTRUCTORS: Record<string, string> = {
      String: 'String::from',
    };
    // Uint128 conversion needs try_from since source might be Uint256
    if (fnName === 'U128' || fnName === 'Uint128') {
      const args = node.args.map((a) => this.visitArg(a));
      return `Uint128::try_from(${args.join(', ')}).unwrap()`;
    }
    // U64(x) → (x as u64) — u64::from() doesn't accept i32 literals
    if (fnName === 'U64') {
      const args = node.args.map((a) => this.visitArg(a));
      return `(${args[0]} as u64)`;
    }
    const typeCtorName = TYPE_CONSTRUCTORS[fnName];
    if (typeCtorName) {
      const args = node.args.map((a) => this.visitArg(a));
      return `${typeCtorName}(${args.join(', ')})`;
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
    if (fnName === 'deserialize') {
      const args = node.args.map((a) => this.visitArg(a));
      return `cosmwasm_std::from_json::<Cw20HookMsg>(&${args[0]}).unwrap()`;
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

    const args = node.args.map((a) => this.visitArg(a));
    // If this is a .iter().map() or .into_iter().map() call, append .collect::<Vec<_>>()
    if (fnName.endsWith('.iter().map') || fnName.endsWith('.into_iter().map')) {
      return `${fnName}(${args.join(', ')}).collect::<Vec<_>>()`;
    }
    // .pow() expects u32 arg in Rust — cast if needed
    if (fnName.endsWith('.pow')) {
      return `${fnName}(${args.map(a => `(${a}) as u32`).join(', ')})`;
    }
    return `${fnName}(${args.join(', ')})`;
  }

  visitArg(node: Ast.Arg): string {
    return this.visit(node.value);
  }

  visitBinOpExpr(node: Ast.BinOpExpr): string {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    return `${lhs} ${node.op} ${rhs}`;
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

  visitIfExpr(node: Ast.IfExpr): string {
    // Check for enum destructuring pattern (same as visitIfStmt)
    const enumDestructure = this.extractEnumDestructure(node.pred, node.thenBody);
    if (enumDestructure) {
      const { varName, enumVariant, bindings, remainingStmts } = enumDestructure;
      const bindingList = bindings.length > 0 ? `${bindings.join(', ')}, ..` : '..';
      const bodyCode = remainingStmts.map((s) => this.visit(s)).join('\n');
      if (node.elseBody) {
        const elseBody = this.visit(node.elseBody);
        return `if let ${enumVariant} { ${bindingList} } = ${varName} { ${bodyCode} } else { ${elseBody} }`;
      }
      return `if let ${enumVariant} { ${bindingList} } = ${varName} { ${bodyCode} }`;
    }

    const pred = this.visit(node.pred);
    const thenBody = this.visit(node.thenBody);
    // Auto-unwrap Option variables checked with .is_some() (same as visitIfStmt)
    const isSomeMatches = [...pred.matchAll(/(\w+)\.is_some\(\)/g)];
    const unwrapLines = isSomeMatches.map(m => `let ${m[1]} = ${m[1]}.unwrap();`).join('\n');
    const bodyWithUnwraps = unwrapLines ? `${unwrapLines}\n${thenBody}` : thenBody;
    if (node.elseBody) {
      const elseBody = this.visit(node.elseBody);
      return `if ${pred} { ${bodyWithUnwraps} } else { ${elseBody} }`;
    }
    return `if ${pred} { ${bodyWithUnwraps} }`;
  }

  visitShortTryExpr(node: Ast.ShortTryExpr): string {
    const lhs = this.visit(node.lhs);
    // If RHS is a fail! expression, use .unwrap_or_default() or .ok_or()? pattern
    if (node.rhs instanceof Ast.FailExpr) {
      // fail! expr → generate .ok_or_else(|| err)?
      const errVal = this.visitFailExprAsValue(node.rhs);
      return `${lhs}.ok_or_else(|| ${errVal})?`;
    }
    const rhs = this.visit(node.rhs);
    return `${lhs}.unwrap_or(${rhs})`;
  }

  private visitFailExprAsValue(node: Ast.FailExpr): string {
    const value = node.value;
    if (value instanceof Ast.CallExpr && value.fn instanceof Ast.IdentExpr) {
      const errorName = value.fn.ident.value;
      const args = value.args;
      if (args.length === 0) {
        return `ContractError::${errorName} {}`;
      }
      const fields = args.map((a) => {
        const val = this.visit(a.value);
        if (a.name) {
          return `${a.name.value}: format!("{:?}", ${val})`;
        }
        return val;
      });
      return `ContractError::${errorName} { ${fields.join(', ')} }`;
    }
    if (value instanceof Ast.StringLit) {
      return `ContractError::StdError(StdError::generic_err(${value.value}))`;
    }
    const val = this.visit(value);
    return `ContractError::Std(StdError::generic_err(${val}))`;
  }

  visitExistsExpr(node: Ast.ExistsExpr): string {
    const expr = this.visit(node.expr);
    // If the inner expression is a function call or method call,
    // use Rust ? operator (error propagation) instead of .is_some()
    if (node.expr instanceof Ast.CallExpr) {
      return `${expr}?`;
    }
    return `${expr}.is_some()`;
  }

  visitGroupedExpr(node: Ast.GroupedExpr): string {
    const expr = this.visit(node.expr);
    return `(${expr})`;
  }

  visitTupleExpr(node: Ast.TupleExpr): string {
    // CWScript uses [a, b] for both tuples and arrays.
    // Generate array syntax [a, b] since it supports indexing and iteration.
    const exprs = node.exprs.map((x) => this.visit(x));
    return `[${exprs.join(', ')}]`;
  }

  visitStructExpr(node: Ast.StructExpr): string {
    const tyText = mapType(node.ty);
    const fields = node.fields.map((f) => {
      if (f.value) {
        const val = this.visit(f.value);
        // Clone local variable identifiers to avoid Rust move issues
        // (CWScript semantics: values are implicitly cloned when passed)
        if (f.value instanceof Ast.IdentExpr && !f.value.ident.value.startsWith('$')) {
          return `${f.name.value}: ${val}.clone()`;
        }
        return `${f.name.value}: ${val}`;
      }
      // Shorthand field: clone the variable to avoid moves
      return `${f.name.value}: ${f.name.value}.clone()`;
    });
    return `${tyText} { ${fields.join(', ')} }`;
  }

  visitClosureExpr(node: Ast.ClosureExpr): string {
    const params = node.params.map((p) => p.name.value);
    const body = this.visit(node.body);
    // Check if this closure is used in an iterator context (iter().map, etc.)
    // If so, clone the params since .iter() yields references
    const parent = node.$parent;
    const isIterClosure = parent instanceof Ast.Arg && parent.$parent instanceof Ast.CallExpr;
    if (isIterClosure) {
      const callExpr = parent.$parent as Ast.CallExpr;
      const fnText = callExpr.fn.$antlrParseRuleCtx?.text || '';
      // If the fn is a map!/map call, params are likely references → clone them
      if (fnText.endsWith('.map') || fnText.endsWith('.map!') || fnText.endsWith('.map(') || fnText.endsWith('.map!(')) {
        const cloneLines = params.map(p => `let ${p} = ${p}.clone();`).join('\n');
        return `|${params.join(', ')}| { ${cloneLines}\n${body} }`;
      }
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
      // Check if LHS is a plain identifier that looks like it holds an Asset (not AssetInfo)
      // Heuristic: identifiers containing "asset" but NOT "asset_info" or "info"
      const lhsLower = lhs.toLowerCase();
      const isAssetInfoVar = lhsLower.includes('asset_info') || lhsLower.includes('assetinfo') || lhsLower === 'info';
      if (!isAssetInfoVar && (lhsLower.includes('asset') || lhsLower === 'pool')) {
        lhs = `${lhs}.info`;
      }
    }

    if (node.negative) {
      return `!matches!(${lhs}, ${tyText} { .. })`;
    }
    return `matches!(${lhs}, ${tyText} { .. })`;
  }

  visitInExpr(node: Ast.InExpr): string {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    if (node.negative) {
      return `!${rhs}.contains(&${lhs})`;
    }
    return `${rhs}.contains(&${lhs})`;
  }

  visitQueryExpr(node: Ast.QueryExpr): string {
    const expr = this.visit(node.expr);
    return `/* query! ${expr} */ todo!("query")`;
  }

  visitTryCatchElseExpr(node: Ast.TryCatchElseExpr): string {
    const body = this.visit(node.body);
    return `/* try */ { ${body} }`;
  }

  visitFailExpr(node: Ast.FailExpr): string {
    const value = node.value;
    if (value instanceof Ast.CallExpr && value.fn instanceof Ast.IdentExpr) {
      const errorName = value.fn.ident.value;
      const args = value.args;
      if (args.length === 0) {
        return `return Err(ContractError::${errorName} {})`;
      }
      const fields = args.map((a) => {
        const val = this.visit(a.value);
        if (a.name) {
          return `${a.name.value}: format!("{:?}", ${val})`;
        }
        return val;
      });
      return `return Err(ContractError::${errorName} { ${fields.join(', ')} })`;
    }
    if (value instanceof Ast.StringLit) {
      return `return Err(ContractError::StdError(StdError::generic_err(${value.value})))`;
    }
    const val = this.visit(value);
    return `return Err(ContractError::Std(StdError::generic_err(${val})))`;
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
    return `String::from(${node.value})`;
  }

  visitBoolLit(node: Ast.BoolLit): string {
    return node.value ? 'true' : 'false';
  }

  visitDecLit(node: Ast.DecLit): string {
    return `Decimal::from_str("${node.value}").unwrap()`;
  }

  visitNoneLit(_node: Ast.NoneLit): string {
    return 'None';
  }
}

export function blockToCg(node: Ast.Block, ctx?: CgBlockContext): string[] {
  const blockVisitor = new CgBlockVisitor(ctx || DEFAULT_CTX);
  const result = blockVisitor.visit(node);
  return [result];
}

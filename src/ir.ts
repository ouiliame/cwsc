import { Expr } from './codegen';
import * as Rust from './rust-syntax';

export type ContractItem =
  | InstantiateFnDefn
  | ExecFnDefn
  | QueryFnDefn
  | StateItemDefn
  | StateMapDefn
  | EventDefn
  | ErrorDefn
  | StructDefn
  | TupleDefn
  | EnumDefn
  | FnDefn;

export interface ContractDefn {
  $type: 'defn.contract';
  name: string;
  body: ContractItem[];
}

export interface StructDefn {
  $type: 'defn.struct';
  name: string;
  fields: StructFieldDefn[];
}

export interface TupleDefn {
  $type: 'defn.tuple';
  name: string;
  fieldTys: string[];
}

export interface EnumDefn {
  $type: 'defn.enum';
  name: string;
  variants: EnumVariantDefn[];
}

export type EnumVariantDefn =
  | EnumStructVariantDefn
  | EnumTupleVariantDefn
  | EnumUnitVariantDefn;

export interface EnumStructVariantDefn {
  $type: 'defn.enum.variant.struct';
  name: string;
  fields: StructFieldDefn[];
}

export interface EnumTupleVariantDefn {
  $type: 'defn.enum.variant.tuple';
  name: string;
  fields: string[];
}

export interface EnumUnitVariantDefn {
  $type: 'defn.enum.variant.unit';
  name: string;
}

export interface StateItemDefn {
  $type: 'defn.state.item';
  key: string;
  ty: string;
}

export interface StateMapDefn {
  $type: 'defn.state.map';
  key: string;
  idxTy: string;
  valTy: string;
}

export interface EventDefn {
  $type: 'defn.event';
  name: string;
  fields: StructFieldDefn[];
}

export interface ErrorDefn {
  $type: 'defn.error';
  name: string;
  fields: StructFieldDefn[];
}

export interface StructFieldDefn {
  $type: 'defn.struct.field';
  name: string;
  ty: string;
}

export interface FnDefn {
  $type: 'defn.fn';
  name: string;
  fallible: boolean;
  returnTy: string;
  params: FnParamDefn[];
  body: Stmt[];
}

export interface FnParamDefn {
  $type: 'defn.fn.param';
  name: string;
  optional: boolean;
  ty: string;
  default?: Expr;
}

export interface InstantiateFnDefn {
  $type: 'defn.fn.instantiate';
  params: FnParamDefn[];
  body: Stmt[];
}

export interface ExecFnDefn {
  $type: 'defn.fn.exec';
  name: string;
  params: FnParamDefn[];
  body: Stmt[];
}

export interface QueryFnDefn {
  $type: 'defn.fn.query';
  name: string;
  params: FnParamDefn[];
  returnTy: string;
  body: Stmt[];
}

// STATEMENTS

export type Stmt =
  | LetStmt
  | StateItemAssignStmt
  | StateMapAssignStmt
  | IfStmt
  | FailStmt
  | ReturnStmt
  | ExprStmt;

export interface LetStmt {
  $type: 'stmt.let';
  name: string;
  type: string;
  value: Expr;
}

export interface StateItemAssignStmt {
  $type: 'stmt.assign.state.item';
  key: string;
  value: Expr;
  op: '=' | '+=' | '-=' | '*=' | '/=' | '%=';
}

export interface StateMapAssignStmt {
  $type: 'stmt.assign.state.map';
  key: string;
  index: Expr;
  value: Expr;
  op: '=' | '+=' | '-=' | '*=' | '/=' | '%=';
}

export interface IfStmt {
  $type: 'stmt.if';
  predicate: Expr;
  then_branch: Stmt[];
  else_branch?: Stmt[];
}

export interface FailStmt {
  $type: 'stmt.fail';
  error: Expr;
}

export interface ReturnStmt {
  $type: 'stmt.return';
  value: Expr;
}

export interface ExprStmt {
  $type: 'stmt.expr';
  expr: Expr;
}

// END STATEMENTS

// EXPRESSIONS

export type Expr =
  | IdentExpr
  | NotNullExpr
  | OtherwiseExpr
  | BinOpExpr
  | FnCallExpr
  | MemberExpr
  | IntLitExpr
  | StringLitExpr
  | BoolLitExpr
  | StructExpr
  | EnumStructExpr
  | EnumTupleExpr
  | EnumUnitExpr;

export interface IdentExpr {
  $type: 'expr.ident';
  name: string;
}

export interface NotNullExpr {
  $type: 'expr.q';
  expr: Expr;
}

export interface OtherwiseExpr {
  $type: 'expr.otherwise';
  lhs: Expr;
  rhs: Expr;
}

export interface BinOpExpr {
  $type: 'expr.binop';
  lhs: Expr;
  op: '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=';
  rhs: Expr;
}

export interface FnCallExpr {
  $type: 'expr.fn-call';
  fn: Expr;
  pos_args: Expr[];
  named_args: { name: string; value: Expr }[];
}

export interface MemberExpr {
  $type: 'expr.member';
  expr: Expr;
  member: string;
}

export interface IntLitExpr {
  $type: 'expr.lit.int';
  value: string;
  ty: string;
}

export interface StringLitExpr {
  $type: 'expr.lit.string';
  value: string;
}

export interface BoolLitExpr {
  $type: 'expr.lit.bool';
  value: boolean;
}

export interface StructExpr {
  $type: 'expr.struct';
  ty: string;
  fields: { name: string; value: Expr }[];
}

export interface EnumStructExpr {
  $type: 'expr.enum.struct';
  enumTy: string;
  variant: string;
  fields: { name: string; value: Expr }[];
}

export interface EnumTupleExpr {
  $type: 'expr.enum.tuple';
  enumTy: string;
  variant: string;
  fields: Expr[];
}

export interface EnumUnitExpr {
  $type: 'expr.enum.unit';
  ty: string;
  variant: string;
}

// END EXPRESSIONS

function contractDefn(name: string, body: ContractItem[]): ContractDefn {
  return {
    $type: 'defn.contract',
    name,
    body,
  };
}

function stateItem(key: string, ty: string): StateItemDefn {
  return {
    $type: 'defn.state.item',
    key,
    ty,
  };
}

function error(name: string, fields: StructFieldDefn[]): ErrorDefn {
  return {
    $type: 'defn.error',
    name,
    fields,
  };
}

function instantiateFn(params: FnParamDefn[], body: Stmt[]): InstantiateFnDefn {
  return {
    $type: 'defn.fn.instantiate',
    params,
    body,
  };
}

function execFn(name: string, params: FnParamDefn[], body: Stmt[]): ExecFnDefn {
  return {
    $type: 'defn.fn.exec',
    name,
    params,
    body,
  };
}

function queryFn(
  name: string,
  params: FnParamDefn[],
  returnTy: string,
  body: Stmt[]
): QueryFnDefn {
  return {
    $type: 'defn.fn.query',
    name,
    params,
    returnTy,
    body,
  };
}

function fnDefn(
  name: string,
  fallible: boolean,
  returnTy: string,
  params: FnParamDefn[],
  body: Stmt[]
): FnDefn {
  return {
    $type: 'defn.fn',
    name,
    fallible,
    returnTy,
    params,
    body,
  };
}

function stateMap(key: string, idxTy: string, valTy: string): StateMapDefn {
  return {
    $type: 'defn.state.map',
    key,
    idxTy,
    valTy,
  };
}

function fnParam(
  name: string,
  ty: string,
  optional: boolean = false,
  defaultExpr: Expr | undefined = undefined
): FnParamDefn {
  return {
    $type: 'defn.fn.param',
    name,
    ty,
    optional,
    default: defaultExpr,
  };
}

function structField(name: string, ty: string): StructFieldDefn {
  return {
    $type: 'defn.struct.field',
    name,
    ty,
  };
}

export interface ParsedContractDefn {
  state: (StateItemDefn | StateMapDefn)[];
  errors: ErrorDefn[];
  instantiateFn: InstantiateFnDefn | undefined;
  execFns: ExecFnDefn[];
  queryFns: QueryFnDefn[];
  types: (StructDefn | TupleDefn | EnumDefn)[];
  fns: FnDefn[];
  events: EventDefn[];
}

export function parseContractItems(defn: ContractDefn): ParsedContractDefn {
  let state: (StateItemDefn | StateMapDefn)[] = [];
  let errors: ErrorDefn[] = [];
  let instantiateFn: InstantiateFnDefn | undefined = undefined;
  let execFns: ExecFnDefn[] = [];
  let queryFns: QueryFnDefn[] = [];
  let types: (StructDefn | TupleDefn | EnumDefn)[] = [];
  let fns: FnDefn[] = [];
  let events: EventDefn[] = [];

  for (const item of defn.body) {
    switch (item.$type) {
      case 'defn.state.item':
      case 'defn.state.map':
        state.push(item);
        break;
      case 'defn.error':
        errors.push(item);
        break;
      case 'defn.fn.instantiate':
        if (instantiateFn !== undefined) {
          throw new Error('Multiple instantiate functions');
        }
        instantiateFn = item;
        break;
      case 'defn.fn.exec':
        execFns.push(item);
        break;
      case 'defn.struct':
      case 'defn.tuple':
      case 'defn.enum':
        types.push(item);
        break;
      case 'defn.fn':
        fns.push(item);
        break;
      case 'defn.fn.query':
        queryFns.push(item);
        break;
      case 'defn.event':
        events.push(item);
        break;
    }
  }
  return {
    state,
    errors,
    instantiateFn,
    execFns,
    queryFns,
    types,
    fns,
    events,
  };
}

export class IRCodegenVisitor {
  visitContractDefn(defn: ContractDefn): Rust.ModuleDefn {
    const contract = parseContractItems(defn);
    // make the inner modules
    // - state
    // - error
    // - msg
    // - cws
    // - implementation
    // - contract
    const stateMod = this.buildStateModule(contract);
    const errorMod = this.buildErrorModule(contract);
    const msgMod = this.buildMsgModule(contract);
    const cwsMod = this.buildCwsModule(contract);
    const implMod = this.buildImplModule(contract);
    const contractMod = this.buildContractModule(contract);
    // make the contract top-level module
    const mod = Rust.mod(defn.name, [
      stateMod,
      errorMod,
      msgMod,
      cwsMod,
      implMod,
      contractMod,
    ]);
  }

  buildStateModule(contract: ParsedContractDefn): Rust.ModuleDefn {
    const stateItems = contract.state.map((item) => {
      switch (item.$type) {
        case 'defn.state.item':
          return Rust.konst(
            item.key,
            `Item<${item.ty}>`,
            Rust.raw(`Item::new(${item.key})`)
          );
        case 'defn.state.map':
          return Rust.konst(
            item.key,
            `Map<${item.idxTy}, ${item.valTy}>`,
            Rust.raw(`Map::new(${item.key})`)
          );
      }
    });

    return Rust.mod('state', [
      Rust.use('cw_storage_plus::Item'),
      Rust.use('cw_storage_plus::Map'),
      Rust.use('schemars::JsonSchema'),
      Rust.use('serde::{Deserialize, Serialize}'),

      ...stateItems,
    ]);
  }

  buildErrorModule(contract: ParsedContractDefn): Rust.ModuleDefn {
    const error = contract.errors.reduce(
      (acc, item) => {
        acc.push(Rust.enumVariant(item.name, item.fields));
        return acc;
      },
      [Rust.ann('#[error("StdError")]')]
    );

    return Rust.mod('error', [
      Rust.use('cosmwasm_std::StdError'),
      Rust.use('thiserror::Error'),
      Rust.enumDefn('ContractError', error),
    ]);
  }

  buildMsgModule(contract: ParsedContractDefn): Rust.ModuleDefn {
    let instantiateMsg = Rust.ann(
      '#[cw_serde]',
      Rust.structDefn(
        'InstantiateMsg',
        contract.instantiateFn!.params.map((p) =>
          Rust.structField(p.name, p.ty)
        )
      )
    );

    let execMsg = Rust.ann(
      '#[cw_serde]',
      Rust.enumDefn(
        'ExecuteMsg',
        contract.execFns.map((x) => {
          return Rust.enumVariant(
            x.name,
            x.params.map((p) => Rust.structField(p.name, p.ty))
          );
        })
      )
    );

    let queryMsg = Rust.ann(
      '#[cw_serde]',
      Rust.enumDefn(
        'QueryMsg',
        contract.queryFns.map((x) => {
          return Rust.enumVariant(
            x.name,
            x.params.map((p) => Rust.structField(p.name, p.ty))
          );
        })
      )
    );

    let responseWrapper = Rust.ann(
      '#[cw_serde]',
      Rust.tupleDefn('CWSQueryResponse<T>', ['T'])
    );

    return Rust.mod('msg', [
      Rust.use('cosmwasm_schema::{cw_serde, QueryResponse}'),
      Rust.use('cosmwasm_std::*'),

      instantiateMsg,
      execMsg,
      queryMsg,

      responseWrapper,
    ]);
  }

  visitStmt(stmt: Stmt): Rust.Stmt[] {
    return [];
  }

  buildCwsModule(contract: ParsedContractDefn): Rust.ModuleDefn {
    return Rust.mod('cws', [
      Rust.use('cosmwasm_std::*'),
      Rust.structDefn("InstantiateCtx<'a>", [
        Rust.structField('deps', "DepsMut<'a>"),
        Rust.structField('env', 'Env'),
        Rust.structField('info', 'MessageInfo'),
      ]),
      Rust.structDefn("ExecuteCtx<'a>", [
        Rust.structField('deps', "DepsMut<'a>"),
        Rust.structField('env', 'Env'),
        Rust.structField('info', 'MessageInfo'),
      ]),
      Rust.structDefn("QueryCtx<'a>", [
        Rust.structField('deps', "Deps<'a>"),
        Rust.structField('env', 'Env'),
      ]),
    ]);
  }

  visitInstantiateFnDefn(defn: InstantiateFnDefn): Rust.FunctionDefn {
    return Rust.fnDefn(
      'instantiate_impl',
      [
        Rust.fnParam('ctx', 'InstantiateCtx'),
        ...defn.params.map((p) => Rust.fnParam(p.name, p.ty)),
      ],
      'Result<Response, ContractError>',
      defn.body.map((stmt) => this.visitStmt(stmt))
    );
  }

  visitExecFnDefn(defn: ExecFnDefn): Rust.FunctionDefn {
    return Rust.fnDefn(
      defn.name,
      [
        Rust.fnParam('ctx', 'ExecuteCtx'),
        ...defn.params.map((p) => Rust.fnParam(p.name, p.ty)),
      ],
      'Result<Response, ContractError>',
      defn.body.map((stmt) => this.visitStmt(stmt))
    );
  }

  visitQueryFnDefn(defn: QueryFnDefn): Rust.FunctionDefn {
    return Rust.fnDefn(
      defn.name,
      [
        Rust.fnParam('ctx', 'QueryCtx'),
        ...defn.params.map((p) => Rust.fnParam(p.name, p.ty)),
      ],
      'StdResult<CWSQueryResponse<' + defn.returnTy + '>',
      defn.body.map((stmt) => this.visitStmt(stmt))
    );
  }

  buildImplModule(contract: ParsedContractDefn): Rust.ModuleDefn {
    const instantiateImplFn = this.visitInstantiateFnDefn(
      contract.instantiateFn!
    );
    const execImplFns = contract.execFns.map((x) => this.visitExecFnDefn(x));
    const queryImplFns = contract.queryFns.map((x) => this.visitQueryFnDefn(x));

    return Rust.mod('implementation', [
      Rust.use('super::cws::*'),
      Rust.use('super::error::*'),
      Rust.use('super::msg::*'),
      Rust.use('super::state::*'),
      Rust.use('cosmwasm_std::*'),
      instantiateImplFn,
      ...execImplFns,
      ...queryImplFns,
    ]);
  }

  buildContractModule(contract: ParsedContractDefn): Rust.ModuleDefn {
    let instantiateFn = Rust.entryPoint(
      Rust.fnDefn(
        'instantiate',
        [
          Rust.fnParam('deps', 'DepsMut'),
          Rust.fnParam('env', 'Env'),
          Rust.fnParam('info', 'MessageInfo'),
          Rust.fnParam('msg', 'InstantiateMsg'),
        ],
        'Result<Response, ContractError>',
        [
          Rust.letStmt(
            'ctx',
            false,
            'InstantiateCtx',
            Rust.structExpr('InstantiateCtx', [
              Rust.structFieldAssn('deps', Rust.identExpr('deps')),
              Rust.structFieldAssn('env', Rust.identExpr('env')),
              Rust.structFieldAssn('info', Rust.identExpr('info')),
            ])
          ),
          Rust.fnCallExpr('instantiate_impl', [
            Rust.identExpr('ctx'),
            ...contract.instantiateFn!.params.map((p) =>
              Rust.identExpr('msg.' + p.name)
            ),
          ]),
        ]
      )
    );

    let execFn = Rust.entryPoint(
      Rust.fnDefn(
        'execute',
        [
          Rust.fnParam('deps', 'DepsMut'),
          Rust.fnParam('env', 'Env'),
          Rust.fnParam('info', 'MessageInfo'),
          Rust.fnParam('msg', 'ExecuteMsg'),
        ],
        'Result<Response, ContractError>',
        [
          Rust.letStmt(
            'ctx',
            false,
            'ExecuteCtx',
            Rust.structExpr('ExecuteCtx', [
              Rust.structFieldAssn('deps', Rust.identExpr('deps')),
              Rust.structFieldAssn('env', Rust.identExpr('env')),
              Rust.structFieldAssn('info', Rust.identExpr('info')),
            ])
          ),
          Rust.matchExpr(Rust.identExpr('msg'), [
            contract.execFns.map((x) => {
              return Rust.arm(
                `ExecuteMsg::${x.name} { ${x.params
                  .map((p) => p.name)
                  .join(', ')} }`,
                Rust.fnCallExpr(x.name, [
                  Rust.identExpr('ctx'),
                  ...x.params.map((p) => Rust.identExpr(p.name)),
                ])
              );
            }),
          ]),
        ]
      )
    );

    let queryFn = Rust.entryPoint(
      Rust.fnDefn(
        'query',
        [
          Rust.fnParam('deps', 'DepsMut'),
          Rust.fnParam('env', 'Env'),
          Rust.fnParam('msg', 'ExecuteMsg'),
        ],
        'StdResult<Binary>',
        [
          Rust.letStmt(
            'ctx',
            false,
            'QueryCtx',
            Rust.structExpr('QueryCtx', [
              Rust.structFieldAssn('deps', Rust.identExpr('deps')),
              Rust.structFieldAssn('env', Rust.identExpr('env')),
              Rust.structFieldAssn('info', Rust.identExpr('info')),
            ])
          ),
          Rust.matchExpr(Rust.identExpr('msg'), [
            contract.queryFns.map((x) => {
              let queryImplFn = 'query_' + x.name + '_impl';
              return Rust.arm(
                `QueryMsg::${x.name} { ${x.params
                  .map((p) => p.name)
                  .join(', ')} }`,
                Rust.fnCallExpr('to_json_binary', [
                  Rust.refExpr(
                    Rust.tryExpr(
                      Rust.fnCallExpr(queryImplFn, [
                        Rust.identExpr('ctx'),
                        ...x.params.map((p) => Rust.identExpr(p.name)),
                      ])
                    )
                  ),
                ])
              );
            }),
          ]),
        ]
      )
    );

    return Rust.mod('contract', [
      Rust.use('super::cws::*'),
      Rust.use('super::error::*'),
      Rust.use('super::msg::*'),
      Rust.use('super::implementation::*'),
      Rust.use('cosmwasm_std::*'),
      instantiateFn,
      execFn,
      queryFn,
    ]);
  }
}

const counterContract = contractDefn('Counter', [
  stateItem('COUNT', 'u64'),
  stateItem('OWNER', 'String'),
  error('Unauthorized', []),
  error('CountIsZeroError', []),
  instantiateFn(
    [fnParam('count', 'Option<u32>'), fnParam('owner', 'Option<String>')],
    []
  ),
  execFn('increment', [], []),
  execFn('decrement', [], []),
  execFn('reset', [fnParam('count', 'Option<u32>')], []),
  queryFn('count', [], []),
  queryFn('owner', [], []),
]);

const cg = new IRCodegenVisitor();
console.log(cg.visitContractDefn(counterContract));

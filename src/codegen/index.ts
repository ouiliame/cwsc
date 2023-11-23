import prettier from 'prettier';
import * as rustPlugin from 'prettier-plugin-rust';

export interface Render {
  render(): string;
}

export class ModuleDefn implements Render {
  constructor(
    public name: string,
    public body: Render[]
  ) {}

  public render(): string {
    return `pub mod ${this.name} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}

export class UseStmt implements Render {
  constructor(public path: string) {}

  public render(): string {
    return `use ${this.path};`;
  }
}

export class ConstStmt implements Render {
  constructor(
    public name: string,
    public ty: string,
    public value: Render
  ) {}

  public render(): string {
    return `pub const ${this.name}: ${this.ty} = ${this.value.render()};`;
  }
}

export class EnumDefn implements Render {
  constructor(
    public name: string,
    public variants: EnumVariant[]
  ) {}

  public render(): string {
    return `pub enum ${this.name} {
      ${this.variants.map((variant) => variant.render()).join(',\n')}
    }`;
  }
}

export class StructDefn implements Render {
  constructor(
    public name: string,
    public fields: StructField[]
  ) {}

  public render(): string {
    return `pub struct ${this.name} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class TupleStructDefn implements Render {
  constructor(
    public name: string,
    public fields: string[]
  ) {}

  public render(): string {
    return `pub struct ${this.name}(${this.fields
      .map((x) => 'pub ' + x)
      .join(', ')});`;
  }
}

export type EnumVariant =
  | EnumVariantStruct
  | EnumVariantTuple
  | EnumVariantUnit
  | Annotated<EnumVariant>;

export class EnumVariantStruct implements Render {
  constructor(
    public name: string,
    public fields: StructField[]
  ) {
    for (let field of fields) {
      field.pub = false;
    }
  }

  public render(): string {
    return `${this.name} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class EnumVariantTuple implements Render {
  constructor(
    public name: string,
    public fields: Render[]
  ) {}

  public render(): string {
    return `${this.name}(${this.fields
      .map((field) => field.render())
      .join(', ')})`;
  }
}

export class EnumVariantUnit implements Render {
  constructor(public name: string) {}

  public render(): string {
    return `${this.name}`;
  }
}

export class StructField implements Render {
  constructor(
    public name: string,
    public type: string,
    public pub: boolean = true
  ) {}

  public render(): string {
    return `${this.pub ? 'pub ' : ''}${this.name}: ${this.type}`;
  }
}

export class FunctionParam implements Render {
  constructor(
    public name: string,
    public type: string
  ) {}

  public render(): string {
    return `${this.name}: ${this.type}`;
  }
}

export class FunctionDefn implements Render {
  constructor(
    public name: string,
    public params: FunctionParam[],
    public returnType: string,
    public body: Render[]
  ) {}

  public render(): string {
    return `pub fn ${this.name}(${this.params
      .map((param) => param.render())
      .join(', ')}) -> ${this.returnType} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}
export function mod(name: string, body: Render[]): ModuleDefn {
  return new ModuleDefn(name, body);
}

export function use(path: string): UseStmt {
  return new UseStmt(path);
}

export function konst(name: string, ty: string, value: Render): ConstStmt {
  return new ConstStmt(name, ty, value);
}

export function enumDefn(name: string, variants: EnumVariant[]): EnumDefn {
  return new EnumDefn(name, variants);
}

export function variantStruct(
  name: string,
  fields: StructField[]
): EnumVariantStruct {
  return new EnumVariantStruct(name, fields);
}

export function variantTuple(name: string, fields: Render[]): EnumVariantTuple {
  return new EnumVariantTuple(name, fields);
}

export function variantUnit(name: string): EnumVariantUnit {
  return new EnumVariantUnit(name);
}

export function structField(
  name: string,
  type: string,
  pub: boolean = true
): StructField {
  return new StructField(name, type, pub);
}

export function fnParam(name: string, type: string): FunctionParam {
  return new FunctionParam(name, type);
}

export function fnDefn(
  name: string,
  params: FunctionParam[],
  returnType: string,
  body: Render[]
): FunctionDefn {
  return new FunctionDefn(name, params, returnType, body);
}

export function structDefn(name: string, fields: StructField[]): StructDefn {
  return new StructDefn(name, fields);
}

export function tupleStructDefn(
  name: string,
  fields: string[]
): TupleStructDefn {
  return new TupleStructDefn(name, fields);
}

export class StructExpr implements Render {
  constructor(
    public ty: string,
    public fields: StructFieldAssignment[]
  ) {}

  public render(): string {
    return `${this.ty} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class TupleStructExpr implements Render {
  constructor(
    public ty: string,
    public fields: Render[]
  ) {}

  public render(): string {
    return `${this.ty}(${this.fields
      .map((field) => field.render())
      .join(', ')})`;
  }
}

export class StructFieldAssignment implements Render {
  constructor(
    public name: string,
    public value: Render
  ) {}

  public render(): string {
    return `${this.name}: ${this.value.render()}`;
  }
}

export class EnumVariantStructExpr implements Render {
  constructor(
    public enumTy: string,
    public variantName: string,
    public fields: StructFieldAssignment[]
  ) {}

  public render(): string {
    return `${this.enumTy}::${this.variantName} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class EnumVariantTupleExpr implements Render {
  constructor(
    public enumTy: string,
    public variantName: string,
    public fields: Render[]
  ) {}

  public render(): string {
    return `${this.enumTy}::${this.variantName}(${this.fields
      .map((field) => field.render())
      .join(', ')})`;
  }
}

export class EnumVariantUnitExpr implements Render {
  constructor(
    public enumTy: string,
    public variantName: string
  ) {}

  public render(): string {
    return `${this.enumTy}::${this.variantName}`;
  }
}

export type Expr =
  | StructExpr
  | TupleStructExpr
  | EnumVariantStructExpr
  | EnumVariantTupleExpr
  | EnumVariantUnitExpr
  | Annotated<Expr>
  | Block
  | IdentifierExpr
  | LiteralExpr
  | TryExpr
  | MethodCallExpr
  | FnCallExpr
  | BinaryExpr
  | ReturnStmt
  | IfExpr;

export class ExprStmt implements Render {
  constructor(public expr: Expr) {}
  public render(): string {
    return `${this.expr.render()};`;
  }
}
export class LetStmt implements Render {
  constructor(
    public name: string,
    public mutable: boolean,
    public type: string,
    public expr: Expr
  ) {}

  public render(): string {
    return `let ${this.mutable ? 'mut ' : ''}${this.name}${
      this.type ? `: ${this.type}` : ''
    } = ${this.expr.render()};`;
  }
}

export class Block implements Render {
  constructor(public statements: Render[]) {}

  public render(): string {
    return `{\n${this.statements.map((s) => s.render()).join('\n')}\n}`;
  }
}

export class LiteralExpr implements Render {
  constructor(public value: string) {}

  public render(): string {
    return this.value;
  }
}
export class IdentifierExpr implements Render {
  constructor(public name: string) {}

  public render(): string {
    return this.name;
  }
}

export class TryExpr implements Render {
  constructor(public expr: Expr) {}

  public render(): string {
    return `${this.expr.render()}?`;
  }
}

export class MethodCallExpr implements Render {
  constructor(
    public expr: Expr,
    public name: string,
    public args: Expr[]
  ) {}

  public render(): string {
    return `${this.expr.render()}.${this.name}(${this.args
      .map((a) => a.render())
      .join(', ')})`;
  }
}

export class FnCallExpr implements Render {
  constructor(
    public fn: string,
    public args: Expr[]
  ) {}

  public render(): string {
    return `${this.fn}(${this.args.map((a) => a.render()).join(', ')})`;
  }
}

export class IfExpr {
  constructor(
    public condition: Expr,
    public consequent: Block,
    public alternative?: Block
  ) {}

  public render(): string {
    return `if ${this.condition.render()} { 
      ${this.consequent.render()}}${
        this.alternative ? ` else { ${this.alternative.render()} }` : ''
      }`;
  }
}

export class BinaryExpr {
  constructor(
    public left: Expr,
    public operator: string,
    public right: Expr
  ) {}

  public render(): string {
    return `${this.left.render()} ${this.operator} ${this.right.render()}`;
  }
}

export class ReturnStmt {
  constructor(public expression: Expr) {}

  public render(): string {
    return `return ${this.expression.render()};`;
  }
}
export class Annotated<T extends Render> implements Render {
  constructor(
    public annotation: string,
    public target: T
  ) {}

  public render(): string {
    return `${this.annotation} ${this.target.render()}`;
  }
}

export class MatchExpr implements Render {
  constructor(
    public expr: Expr,
    public arms: MatchArm[]
  ) {}

  public render(): string {
    return `match ${this.expr.render()} {
      ${this.arms.map((arm) => arm.render()).join(',\n')}
    }`;
  }
}

export class MatchArm implements Render {
  constructor(
    public pattern: string,
    public expr: Expr
  ) {}

  public render(): string {
    return `${this.pattern} => ${this.expr.render()}`;
  }
}

export class RefExpr implements Render {
  constructor(public expr: Expr) {}

  public render(): string {
    return `&${this.expr.render()}`;
  }
}

export class Raw implements Render {
  constructor(public text: string) {}

  public render(): string {
    return this.text;
  }
}

export function raw(text: string): Raw {
  return new Raw(text);
}

export function stmt(expr: Expr): ExprStmt {
  return new ExprStmt(expr);
}

export function ann<T extends Render>(
  annotation: string,
  target: T
): Annotated<T> {
  return new Annotated(annotation, target);
}

export function letStmt(
  name: string,
  mutable: boolean,
  type: string,
  expr: Expr
): LetStmt {
  return new LetStmt(name, mutable, type, expr);
}

export function block(statements: Render[]): Block {
  return new Block(statements);
}

export function litExpr(value: string): LiteralExpr {
  return new LiteralExpr(value);
}

export function identExpr(name: string): IdentifierExpr {
  return new IdentifierExpr(name);
}

export function structExpr(
  ty: string,
  fields: StructFieldAssignment[]
): StructExpr {
  return new StructExpr(ty, fields);
}

export function tupleStructExpr(ty: string, fields: Render[]): TupleStructExpr {
  return new TupleStructExpr(ty, fields);
}

export function structFieldAssn(
  name: string,
  value: Render
): StructFieldAssignment {
  return new StructFieldAssignment(name, value);
}

export function enumStructExpr(
  enumTy: string,
  variantName: string,
  fields: StructFieldAssignment[]
): EnumVariantStructExpr {
  return new EnumVariantStructExpr(enumTy, variantName, fields);
}

export function enumTupleExpr(
  enumTy: string,
  variantName: string,
  fields: Render[]
): EnumVariantTupleExpr {
  return new EnumVariantTupleExpr(enumTy, variantName, fields);
}

export function enumUnitExpr(
  enumTy: string,
  variantName: string
): EnumVariantUnitExpr {
  return new EnumVariantUnitExpr(enumTy, variantName);
}

export function tryExpr(expr: Expr): TryExpr {
  return new TryExpr(expr);
}

export function methodCallExpr(
  expr: Expr,
  name: string,
  args: Expr[]
): MethodCallExpr {
  return new MethodCallExpr(expr, name, args);
}

export function fnCallExpr(fn: string, args: Expr[]): FnCallExpr {
  return new FnCallExpr(fn, args);
}

export function matchExpr(expr: Expr, arms: MatchArm[]): MatchExpr {
  return new MatchExpr(expr, arms);
}

export function arm(pattern: string, expr: Expr): MatchArm {
  return new MatchArm(pattern, expr);
}

export function refExpr(expr: Expr): RefExpr {
  return new RefExpr(expr);
}

type Statement = Expr | LetStmt;

export function ifExpr(
  condition: Expr,
  consequent: Block,
  alternative?: Block
): IfExpr {
  return new IfExpr(condition, consequent, alternative);
}

export function returnStmt(expression: Expr): ReturnStmt {
  return new ReturnStmt(expression);
}

export function binExpr(left: Expr, operator: string, right: Expr): BinaryExpr {
  return new BinaryExpr(left, operator, right);
}

let stateMod = mod('state', [
  use('schemars::JsonSchema'),
  use('serde::{Deserialize, Serialize}'),
  use('cw_storage_plus::Item'),
  konst('COUNT', 'Item<u32>', raw('Item::new("count")')),
  konst('OWNER', 'Item<String>', raw('Item::new("owner")')),
]);

let errorMod = mod('error', [
  use('cosmwasm_std::StdError'),
  use('thiserror::Error'),
  ann(
    '#[derive(Error, Debug)]',
    enumDefn('ContractError', [
      ann(
        '#[error("StdError")]',
        variantTuple('StdError', [ann('#[from]', raw('StdError'))])
      ),
      ann('#[error("Unauthorized")]', variantStruct('Unauthorized', [])),
      ann(
        '#[error("CountIsZeroError")]',
        variantStruct('CountIsZeroError', [])
      ),
    ])
  ),
]);

let msgMod = mod('msg', [
  use('cosmwasm_schema::{cw_serde, QueryResponses}'),
  use('cosmwasm_std::*'),
  ann(
    '#[cw_serde]',
    structDefn('InstantiateMsg', [
      structField('count', 'Option<u32>'),
      structField('owner', 'Option<String>'),
    ])
  ),

  ann(
    '#[cw_serde]',
    enumDefn('ExecuteMsg', [
      variantStruct('Increment', []),
      variantStruct('Decrement', []),
      variantStruct('Reset', [structField('count', 'Option<u32>')]),
    ])
  ),
  ann(
    '#[cw_serde]',
    enumDefn('QueryMsg', [
      variantStruct('Count', []),
      variantStruct('Owner', []),
    ])
  ),
  ann('#[cw_serde]', tupleStructDefn('CWSQueryResponse<T>', ['T'])),
]);

let instantiateImplFn = fnDefn(
  'instantiate_impl',
  [
    fnParam('ctx', 'InstantiateCtx'),
    fnParam('count', 'Option<u32>'),
    fnParam('owner', 'Option<String>'),
  ],
  'Result<Response, ContractError>',
  [
    letStmt(
      'count',
      false,
      'u32',
      fnCallExpr('count.unwrap_or', [litExpr('0')])
    ),
    letStmt(
      'owner',
      false,
      'String',
      fnCallExpr('ctx.info.sender.to_string', [])
    ),
    stmt(
      tryExpr(
        fnCallExpr('COUNT.save', [
          identExpr('ctx.deps.storage'),
          refExpr(identExpr('count')),
        ])
      )
    ),
    stmt(
      tryExpr(
        fnCallExpr('OWNER.save', [
          identExpr('ctx.deps.storage'),
          refExpr(identExpr('owner')),
        ])
      )
    ),
    fnCallExpr('Ok', [fnCallExpr('Response::new', [])]),
  ]
);

let execResetImplFn = fnDefn(
  'exec_reset_impl',
  [fnParam('ctx', 'ExecuteCtx'), fnParam('count', 'Option<u32>')],
  'Result<Response, ContractError>',
  [
    letStmt(
      'owner',
      true,
      'String',
      tryExpr(fnCallExpr('OWNER.load', [identExpr('ctx.deps.storage')]))
    ),
    letStmt(
      'count',
      true,
      'u32',
      tryExpr(fnCallExpr('COUNT.load', [identExpr('ctx.deps.storage')]))
    ),
    ifExpr(
      binExpr(
        identExpr('owner'),
        '!=',
        fnCallExpr('ctx.info.sender.to_string', [])
      ),
      block([
        returnStmt(
          fnCallExpr('Err', [
            enumStructExpr('ContractError', 'Unauthorized', []),
          ])
        ),
      ])
    ),
    stmt(
      tryExpr(
        fnCallExpr('COUNT.save', [
          identExpr('ctx.deps.storage'),
          refExpr(identExpr('count')),
        ])
      )
    ),
    fnCallExpr('Ok', [fnCallExpr('Response::new', [])]),
  ]
);

let execIncrementImplFn = fnDefn(
  'exec_increment_impl',
  [fnParam('ctx', 'ExecuteCtx')],
  'Result<Response, ContractError>',
  [
    letStmt(
      'count',
      true,
      'u32',
      tryExpr(fnCallExpr('COUNT.load', [identExpr('ctx.deps.storage')]))
    ),
    letStmt(
      'count',
      true,
      'u32',
      binExpr(identExpr('count'), '+', litExpr('1'))
    ),
    stmt(
      tryExpr(
        fnCallExpr('COUNT.save', [
          identExpr('ctx.deps.storage'),
          refExpr(identExpr('count')),
        ])
      )
    ),
    fnCallExpr('Ok', [fnCallExpr('Response::new', [])]),
  ]
);

let execDecrementImplFn = fnDefn(
  'exec_decrement_impl',
  [fnParam('ctx', 'ExecuteCtx')],
  'Result<Response, ContractError>',
  [
    letStmt(
      'count',
      true,
      'u32',
      tryExpr(fnCallExpr('COUNT.load', [identExpr('ctx.deps.storage')]))
    ),
    ifExpr(
      binExpr(identExpr('count'), '==', litExpr('0')),
      block([
        returnStmt(
          fnCallExpr('Err', [
            enumStructExpr('ContractError', 'CountIsZeroError', []),
          ])
        ),
      ])
    ),
    letStmt(
      'count',
      true,
      'u32',
      binExpr(identExpr('count'), '-', litExpr('1'))
    ),
    stmt(
      tryExpr(
        fnCallExpr('COUNT.save', [
          identExpr('ctx.deps.storage'),
          refExpr(identExpr('count')),
        ])
      )
    ),
    fnCallExpr('Ok', [fnCallExpr('Response::new', [])]),
  ]
);

let queryCountImplFn = fnDefn(
  'query_count_impl',
  [fnParam('ctx', 'QueryCtx')],
  'StdResult<CWSQueryResponse<u32>>',
  [
    letStmt(
      'count',
      false,
      'u32',
      tryExpr(fnCallExpr('COUNT.load', [identExpr('ctx.deps.storage')]))
    ),
    fnCallExpr('Ok', [
      tupleStructExpr('CWSQueryResponse', [identExpr('count')]),
    ]),
  ]
);

let queryOwnerImplFn = fnDefn(
  'query_owner_impl',
  [fnParam('ctx', 'QueryCtx')],
  'StdResult<CWSQueryResponse<String>>',
  [
    letStmt(
      'owner',
      false,
      'String',
      tryExpr(fnCallExpr('OWNER.load', [identExpr('ctx.deps.storage')]))
    ),
    fnCallExpr('Ok', [
      tupleStructExpr('CWSQueryResponse', [identExpr('owner')]),
    ]),
  ]
);

let implementationMod = mod('implementation', [
  use('super::cws::*'),
  use('super::error::*'),
  use('super::msg::*'),
  use('super::state::*'),
  use('cosmwasm_std::*'),
  instantiateImplFn,
  execIncrementImplFn,
  execDecrementImplFn,
  execResetImplFn,
  queryCountImplFn,
  queryOwnerImplFn,
]);

let entryPoint = (fn: FunctionDefn) =>
  ann(`#[cfg_attr(not(feature = "library"), entry_point)]`, fn);

let instantiateFn = entryPoint(
  fnDefn(
    'instantiate',
    [
      fnParam('deps', 'DepsMut'),
      fnParam('env', 'Env'),
      fnParam('info', 'MessageInfo'),
      fnParam('msg', 'InstantiateMsg'),
    ],
    'Result<Response, ContractError>',
    [
      letStmt(
        'ctx',
        false,
        'InstantiateCtx',
        structExpr('InstantiateCtx', [
          structFieldAssn('deps', identExpr('deps')),
          structFieldAssn('env', identExpr('env')),
          structFieldAssn('info', identExpr('info')),
        ])
      ),
      fnCallExpr('instantiate_impl', [
        identExpr('ctx'),
        identExpr('msg.count'),
        identExpr('msg.owner'),
      ]),
    ]
  )
);

let executeFn = entryPoint(
  fnDefn(
    'execute',
    [
      fnParam('deps', 'DepsMut'),
      fnParam('env', 'Env'),
      fnParam('info', 'MessageInfo'),
      fnParam('msg', 'ExecuteMsg'),
    ],
    'Result<Response, ContractError>',
    [
      letStmt(
        'ctx',
        false,
        'ExecuteCtx',
        structExpr('ExecuteCtx', [
          structFieldAssn('deps', identExpr('deps')),
          structFieldAssn('env', identExpr('env')),
          structFieldAssn('info', identExpr('info')),
        ])
      ),
      matchExpr(identExpr('msg'), [
        arm(
          'ExecuteMsg::Increment {}',
          fnCallExpr('exec_increment_impl', [identExpr('ctx')])
        ),
        arm(
          'ExecuteMsg::Decrement {}',
          fnCallExpr('exec_decrement_impl', [identExpr('ctx')])
        ),
        arm(
          'ExecuteMsg::Reset { count }',
          fnCallExpr('exec_reset_impl', [identExpr('ctx'), identExpr('count')])
        ),
      ]),
    ]
  )
);

let queryFn = entryPoint(
  fnDefn(
    'query',
    [
      fnParam('deps', 'Deps'),
      fnParam('env', 'Env'),
      fnParam('msg', 'QueryMsg'),
    ],
    'StdResult<Binary>',
    [
      letStmt(
        'ctx',
        false,
        'QueryCtx',
        structExpr('QueryCtx', [
          structFieldAssn('deps', identExpr('deps')),
          structFieldAssn('env', identExpr('env')),
        ])
      ),
      matchExpr(identExpr('msg'), [
        arm(
          'QueryMsg::Count {}',
          fnCallExpr('to_json_binary', [
            tryExpr(
              refExpr(fnCallExpr('query_count_impl', [identExpr('ctx')]))
            ),
          ])
        ),
        arm(
          'QueryMsg::Owner {}',
          fnCallExpr('to_json_binary', [
            tryExpr(
              refExpr(fnCallExpr('query_owner_impl', [identExpr('ctx')]))
            ),
          ])
        ),
      ]),
    ]
  )
);

let contractMod = mod('contract', [
  use('super::cws::*'),
  use('super::error::*'),
  use('super::msg::*'),
  use('super::implementation::*'),
  use('cosmwasm_std::*'),
  instantiateFn,
  executeFn,
  queryFn,
]);

let cwsMod = mod('cws', [
  use('cosmwasm_std::*'),
  structDefn("InstantiateCtx<'a>", [
    structField('deps', "DepsMut<'a>"),
    structField('env', 'Env'),
    structField('info', 'MessageInfo'),
  ]),
  structDefn("ExecuteCtx<'a>", [
    structField('deps', "DepsMut<'a>"),
    structField('env', 'Env'),
    structField('info', 'MessageInfo'),
  ]),
  structDefn("QueryCtx<'a>", [
    structField('deps', "Deps<'a>"),
    structField('env', 'Env'),
  ]),
]);

let counterMod = mod('counter', [
  stateMod,
  errorMod,
  msgMod,
  cwsMod,
  implementationMod,
  contractMod,
]);

async function main() {
  let code = prettier.format(counterMod.render(), { plugins: [rustPlugin] });
  console.log(code);
}

main();

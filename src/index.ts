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
    return `const ${this.name}: ${this.ty} = ${this.value.render()};`;
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

export type EnumVariant =
  | EnumVariantStruct
  | EnumVariantTuple
  | EnumVariantUnit
  | Annotated<EnumVariant>;

export class EnumVariantStruct implements Render {
  constructor(
    public name: string,
    public fields: StructField[]
  ) {}

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
    public type: string
  ) {}

  public render(): string {
    return `${this.name}: ${this.type}`;
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
      .join(', ')}): ${this.returnType} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}
function mod(name: string, body: Render[]): ModuleDefn {
  return new ModuleDefn(name, body);
}

function use(path: string): UseStmt {
  return new UseStmt(path);
}

function konst(name: string, ty: string, value: Render): ConstStmt {
  return new ConstStmt(name, ty, value);
}

function enumDefn(name: string, variants: EnumVariant[]): EnumDefn {
  return new EnumDefn(name, variants);
}

function variantStruct(name: string, fields: StructField[]): EnumVariantStruct {
  return new EnumVariantStruct(name, fields);
}

function variantTuple(name: string, fields: Render[]): EnumVariantTuple {
  return new EnumVariantTuple(name, fields);
}

function variantUnit(name: string): EnumVariantUnit {
  return new EnumVariantUnit(name);
}

function structField(name: string, type: string): StructField {
  return new StructField(name, type);
}

function fnParam(name: string, type: string): FunctionParam {
  return new FunctionParam(name, type);
}

function fnDefn(
  name: string,
  params: FunctionParam[],
  returnType: string,
  body: Render[]
): FunctionDefn {
  return new FunctionDefn(name, params, returnType, body);
}

function structDefn(name: string, fields: StructField[]): StructDefn {}

export class Expr implements Render {
  constructor(public text: string) {}
  public render(): string {
    return this.text;
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

function expr(text: string): Expr {
  return new Expr(text);
}

function ann<T extends Render>(annotation: string, target: T): Annotated<T> {
  return new Annotated(annotation, target);
}

let stateMod = mod('state', [
  use('schemars::JsonSchema'),
  use('serde::{Deserialize, Serialize}'),
  use('cw_storage_plus::Item'),
  konst('COUNT', 'Item<u32>', expr('Item::new("count")')),
  konst('OWNER', 'Item<String>', expr('Item::new("owner")')),
]);

let errorMod = mod('error', [
  use('cosmwasm_std::StdError'),
  use('thiserror::Error'),
  ann(
    '#[derive(Error, Debug)]',
    enumDefn('ContractError', [
      ann(
        '#[error("StdError")]',
        variantTuple('StdError', [ann('#[from]', expr('StdError'))])
      ),
      ann('#[error("Unauthorized")]', variantStruct('Unauthorized', [])),
      ann(
        '#[error("CountIsZeroError")]',
        variantStruct('CountIsZeroError', [])
      ),
    ])
  ),
]);

/*
    pub mod msg {
        use cosmwasm_schema::{cw_serde, QueryResponses};
        use cosmwasm_std::*;

        #[cw_serde]
        pub struct InstantiateMsg {
            pub count: Option<u32>,
            pub owner: Option<String>,
        }

        #[cw_serde]
        pub enum ExecuteMsg {
            Increment {},
            Decrement {},
            Reset { count: Option<u32> },
        }

        #[cw_serde]
        pub enum QueryMsg {
            // GetCount returns the current count as a json-encoded number
            Count {},
            Owner {},
        }

        #[cw_serde]
        pub struct CWSQueryResponse<T>(pub T);
    }
*/

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

let counterMod = mod('counter', [stateMod, errorMod, msgMod]);

console.log(counterMod.render());

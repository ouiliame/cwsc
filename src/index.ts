import * as CG from './codegen';

import { Module, UseStmt, ConstStmt } from './codegen';

const countItem = new ConstStmt('COUNT', 'Item<u32>', new CG.Literal('Item::new("count")'));
const ownerItem = new ConstStmt('OWNER', 'Item<String>', new CG.Literal('Item::new("owner")'));

const stateModule = new Module('state', [
  new UseStmt('cw_storage_plus::Item'),
  countItem,
  ownerItem,
]);

// Export the stateModule if needed elsewhere
export { stateModule };

export class EnumDefn implements Render {
  constructor(
    public name: string,
    public variants: EnumVariant[]
  ) {}

  public render() {
    return `pub enum ${this.name} {
      ${this.variants.map((variant) => variant.render()).join(',\n')}
    }`;
  }
}

export type EnumVariant =
  | EnumVariantStruct
  | EnumVariantTuple
  | EnumVariantUnit;

export class EnumVariantStruct implements Render {
  constructor(
    public name: string,
    public fields: StructField[]
  ) {}

  public render() {
    return `${this.name} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class EnumVariantTuple implements Render {
  constructor(
    public name: string,
    public fields: string[]
  ) {}

  public render() {
    return `${this.name}(${this.fields.join(', ')})`;
  }
}

export class EnumVariantUnit implements Render {
  constructor(public name: string) {}

  public render() {
    return `${this.name}`;
  }
}

export class StructField implements Render {
  constructor(
    public name: string,
    public type: string
  ) {}

  public render() {
    return `${this.name}: ${this.type}`;
  }
}

export class FunctionParam implements Render {
  constructor(
    public name: string,
    public type: string
  ) {}

  public render() {
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

  public render() {
    return `pub fn ${this.name}(${this.params
      .map((param) => param.render())
      .join(', ')}): ${this.returnType} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}

import * as CG from './codegen';

function createModule(name: string, body: Stmt[]): Module {
  return new Module(name, body);
}

function createUseStmt(path: string): UseStmt {
  return new UseStmt(path);
}

function createConstStmt(name: string, ty: string, value: Render): ConstStmt {
  return new ConstStmt(name, ty, value);
}

function createEnumDefn(name: string, variants: EnumVariant[]): EnumDefn {
  return new EnumDefn(name, variants);
}

function createEnumVariantStruct(name: string, fields: StructField[]): EnumVariantStruct {
  return new EnumVariantStruct(name, fields);
}

function createEnumVariantTuple(name: string, fields: string[]): EnumVariantTuple {
  return new EnumVariantTuple(name, fields);
}

function createEnumVariantUnit(name: string): EnumVariantUnit {
  return new EnumVariantUnit(name);
}

function createStructField(name: string, type: string): StructField {
  return new StructField(name, type);
}

function createFunctionParam(name: string, type: string): FunctionParam {
  return new FunctionParam(name, type);
}

function createFunctionDefn(name: string, params: FunctionParam[], returnType: string, body: Render[]): FunctionDefn {
  return new FunctionDefn(name, params, returnType, body);
}

export interface Render {
  render(): string;
}

export type Stmt = UseStmt | ConstStmt | EnumDefn | ModuleDefn;
export class Module implements Render {
  constructor(
    public name: string,
    public body: Stmt[]
  ) {}

  public render() {
    return `pub mod ${this.name} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}

export class UseStmt implements Render {
  constructor(public path: string) {}

  public render() {
    return `use ${this.path};`;
  }
}

export class ConstStmt implements Render {
  constructor(
    public name: string,
    public ty: string,
    public value: Render
  ) {}

  public render() {
    return `const ${this.name}: ${this.ty} = ${this.value.render()};`;
  }
}

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

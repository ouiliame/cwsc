export interface RustSyntax {
  render(): string;
}

export class ModuleDefn implements RustSyntax {
  constructor(public name: string, public body: RustSyntax[]) {}

  public render(): string {
    return `pub mod ${this.name} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}

export class UseStmt implements RustSyntax {
  constructor(public path: string) {}

  public render(): string {
    return `use ${this.path};`;
  }
}

export class LineComment implements RustSyntax {
  constructor(public text: string) {}

  public render(): string {
    return `// ${this.text}`;
  }
}

export class BlockComment implements RustSyntax {
  constructor(public text: string) {}

  public render(): string {
    return `/*\n${this.text}\n*/`;
  }
}

export class LineDocComment implements RustSyntax {
  constructor(public text: string) {}

  public render(): string {
    return `/// ${this.text}`;
  }
}

export class BlockDocComment implements RustSyntax {
  constructor(public text: string) {}

  public render(): string {
    return `/**\n${this.text}\n*/`;
  }
}

export class ConstStmt implements RustSyntax {
  constructor(
    public name: string,
    public ty: string,
    public value: RustSyntax
  ) {}

  public render(): string {
    return `pub const ${this.name}: ${this.ty} = ${this.value.render()};`;
  }
}

export class EnumDefn implements RustSyntax {
  constructor(public name: string, public variants: EnumVariant[]) {}

  public render(): string {
    return `pub enum ${this.name} {
      ${this.variants.map((variant) => variant.render()).join(',\n')}
    }`;
  }
}

export class TypeAliasDefn implements RustSyntax {
  constructor(public name: string, public ty: string) {}

  public render(): string {
    return `pub type ${this.name} = ${this.ty};`;
  }
}

export class StructDefn implements RustSyntax {
  constructor(public name: string, public fields: StructField[]) {}

  public render(): string {
    return `pub struct ${this.name} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class TupleStructDefn implements RustSyntax {
  constructor(public name: string, public fields: string[]) {}

  public render(): string {
    return `pub struct ${this.name}(${this.fields
      .map((x) => 'pub ' + x)
      .join(', ')});`;
  }
}

export class UnitStructDefn implements RustSyntax {
  constructor(public name: string) {}

  public render(): string {
    return `pub struct ${this.name};`;
  }
}

export type EnumVariant =
  | EnumVariantStruct
  | EnumVariantTuple
  | EnumVariantUnit
  | Annotated<EnumVariant>;

export class EnumVariantStruct implements RustSyntax {
  constructor(public name: string, public fields: StructField[]) {
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

export class EnumVariantTuple implements RustSyntax {
  constructor(public name: string, public fields: RustSyntax[]) {}

  public render(): string {
    return `${this.name}(${this.fields
      .map((field) => field.render())
      .join(', ')})`;
  }
}

export class EnumVariantUnit implements RustSyntax {
  constructor(public name: string) {}

  public render(): string {
    return `${this.name}`;
  }
}

export class StructField implements RustSyntax {
  constructor(
    public name: string,
    public type: string,
    public pub: boolean = true
  ) {}

  public render(): string {
    return `${this.pub ? 'pub ' : ''}${this.name}: ${this.type}`;
  }
}

export class FunctionParam implements RustSyntax {
  constructor(public name: string, public type: string) {}

  public render(): string {
    return `${this.name}: ${this.type}`;
  }
}

export class FunctionDefn implements RustSyntax {
  constructor(
    public name: string,
    public params: FunctionParam[],
    public returnType: string,
    public body: RustSyntax[]
  ) {}

  public render(): string {
    return `pub fn ${this.name}(${this.params
      .map((param) => param.render())
      .join(', ')}) -> ${this.returnType} {
      ${this.body.map((statement) => statement.render()).join('\n')}
    }`;
  }
}
export function mod(name: string, body: RustSyntax[]): ModuleDefn {
  return new ModuleDefn(name, body);
}

export function use(path: string): UseStmt {
  return new UseStmt(path);
}

export function konst(name: string, ty: string, value: RustSyntax): ConstStmt {
  return new ConstStmt(name, ty, value);
}

export function enumDefn(name: string, variants: EnumVariant[]): EnumDefn {
  return new EnumDefn(name, variants);
}

export function typeAliasDefn(name: string, ty: string): TypeAliasDefn {
  return new TypeAliasDefn(name, ty);
}

export function variantStruct(
  name: string,
  fields: StructField[]
): EnumVariantStruct {
  return new EnumVariantStruct(name, fields);
}

export function variantTuple(
  name: string,
  fields: RustSyntax[]
): EnumVariantTuple {
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
  body: RustSyntax[]
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

export function unitStructDefn(name: string): UnitStructDefn {
  return new UnitStructDefn(name);
}

export class StructExpr implements RustSyntax {
  constructor(public ty: string, public fields: StructFieldAssignment[]) {}

  public render(): string {
    return `${this.ty} {
      ${this.fields.map((field) => field.render()).join(',\n')}
    }`;
  }
}

export class TupleStructExpr implements RustSyntax {
  constructor(public ty: string, public fields: RustSyntax[]) {}

  public render(): string {
    return `${this.ty}(${this.fields
      .map((field) => field.render())
      .join(', ')})`;
  }
}

export class StructFieldAssignment implements RustSyntax {
  constructor(public name: string, public value: RustSyntax) {}

  public render(): string {
    return `${this.name}: ${this.value.render()}`;
  }
}

export class EnumVariantStructExpr implements RustSyntax {
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

export class EnumVariantTupleExpr implements RustSyntax {
  constructor(
    public enumTy: string,
    public variantName: string,
    public fields: RustSyntax[]
  ) {}

  public render(): string {
    return `${this.enumTy}::${this.variantName}(${this.fields
      .map((field) => field.render())
      .join(', ')})`;
  }
}

export class EnumVariantUnitExpr implements RustSyntax {
  constructor(public enumTy: string, public variantName: string) {}

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

export class ExprStmt implements RustSyntax {
  constructor(public expr: Expr) {}
  public render(): string {
    return `${this.expr.render()};`;
  }
}
export class LetStmt implements RustSyntax {
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

export class Block implements RustSyntax {
  constructor(public statements: RustSyntax[]) {}

  public render(): string {
    return `{\n${this.statements.map((s) => s.render()).join('\n')}\n}`;
  }
}

export class LiteralExpr implements RustSyntax {
  constructor(public value: string) {}

  public render(): string {
    return this.value;
  }
}
export class IdentifierExpr implements RustSyntax {
  constructor(public name: string) {}

  public render(): string {
    return this.name;
  }
}

export class TryExpr implements RustSyntax {
  constructor(public expr: Expr) {}

  public render(): string {
    return `${this.expr.render()}?`;
  }
}

export class MethodCallExpr implements RustSyntax {
  constructor(public expr: Expr, public name: string, public args: Expr[]) {}

  public render(): string {
    return `${this.expr.render()}.${this.name}(${this.args
      .map((a) => a.render())
      .join(', ')})`;
  }
}

export class FnCallExpr implements RustSyntax {
  constructor(public fn: string, public args: Expr[]) {}

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
  constructor(public left: Expr, public operator: string, public right: Expr) {}

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
export class Annotated<T extends RustSyntax> implements RustSyntax {
  constructor(public annotation: string, public target: T) {}

  public render(): string {
    return `${this.annotation} ${this.target.render()}`;
  }
}

export class MatchExpr implements RustSyntax {
  constructor(public expr: Expr, public arms: MatchArm[]) {}

  public render(): string {
    return `match ${this.expr.render()} {
      ${this.arms.map((arm) => arm.render()).join(',\n')}
    }`;
  }
}

export class MatchArm implements RustSyntax {
  constructor(public pattern: string, public expr: Expr) {}

  public render(): string {
    return `${this.pattern} => ${this.expr.render()}`;
  }
}

export class RefExpr implements RustSyntax {
  constructor(public expr: Expr) {}

  public render(): string {
    return `&${this.expr.render()}`;
  }
}

export class Raw implements RustSyntax {
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

export function ann<T extends RustSyntax>(
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

export function block(statements: RustSyntax[]): Block {
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

export function tupleStructExpr(
  ty: string,
  fields: RustSyntax[]
): TupleStructExpr {
  return new TupleStructExpr(ty, fields);
}

export function structFieldAssn(
  name: string,
  value: RustSyntax
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
  fields: RustSyntax[]
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

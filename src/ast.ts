import { ParserRuleContext } from 'antlr4ts';

export abstract class AST {
  public $ctx: ParserRuleContext | null = null;

  constructor(public $parent: AST | null = null) {}

  public isStmt(): boolean {
    return false;
  }

  public isDefn(): boolean {
    return false;
  }

  public isExpr(): boolean {
    return false;
  }

  public isTypeExpr(): boolean {
    return false;
  }

  public isLiteral(): boolean {
    return false;
  }

  static isNode(x: any): x is AST {
    return x instanceof AST;
  }

  public setParent(parent: AST | null): void {
    this.$parent = parent;
  }

  public $(ctx: ParserRuleContext): this {
    this.$ctx = ctx;
    this.setParentForChildren();
    return this;
  }

  public get children(): AST[] {
    return Object.entries(this)
      .filter(
        ([key, value]) =>
          AST.isNode(value) && key !== '$parent' && key !== '$ctx'
      )
      .map(([_, value]) => value);
  }

  public get ancestors(): AST[] {
    const result = [];
    for (const ancestor of this.walkAncestors()) {
      result.push(ancestor);
    }
    return result;
  }

  public get ancestorsAndSelf(): AST[] {
    const result = [];
    for (const ancestor of this.walkAncestors(true)) {
      result.push(ancestor);
    }
    return result;
  }

  public *walkAncestors(includeSelf: boolean = false): IterableIterator<AST> {
    let parent = this.$parent;
    while (parent !== null) {
      yield parent;
      parent = parent.$parent;
    }
  }

  public get nearestNodeCtx(): ParserRuleContext {
    for (const ancestor of this.ancestorsAndSelf) {
      if (ancestor.$ctx !== null) {
        return ancestor.$ctx;
      }
    }
    // not possible
    throw new Error('No ancestor has a context');
  }

  public nearestAncestorWhere(predicate: (x: AST) => boolean): AST | undefined {
    for (const ancestor of this.walkAncestors()) {
      if (predicate(ancestor)) {
        return ancestor;
      }
    }
    return undefined;
  }

  public nearestAncestorOfType<X extends AST>(
    astType: new (...args: any) => X
  ): X | undefined {
    return this.nearestAncestorWhere(
      (x) => x.constructor.name === astType.name
    ) as X | undefined;
  }

  /// Breadth-first traversal of descendant nodes.
  public *walkDescendantsBFS(): IterableIterator<AST> {
    yield* this.children;
    for (const child of this.children) {
      yield* child.walkDescendantsBFS();
    }
  }

  /// Depth-first traversal of descendant nodes.
  public *walkDescendants(): IterableIterator<AST> {
    for (const child of this.children) {
      yield child;
      yield* child.walkDescendants();
    }
  }

  // Leaves-first traversal of descendant nodes.
  public *walkDescendantsLF(): IterableIterator<AST> {
    for (const child of this.children) {
      yield* child.walkDescendantsLF();
    }
    yield* this.children;
  }

  public get descendants(): AST[] {
    return Array.from(this.walkDescendants());
  }

  public descendantsOfType<X extends AST>(
    astType: new (...args: any) => X
  ): X[] {
    return this.descendants
      .filter((x) => x.constructor.name === astType.name)
      .map((x) => x as X);
  }

  /**
   * Returns true if this node is a "virtual" node, i.e. a node that does not
   * correspond to a node in the AST. This is because we go over the AST in
   * multiple passes of simplification and transformation. The final AST prior
   * to code generation passes will be the semantically richest representation of the
   * original source code.
   *
   * We only drop context after it is no longer needed for further passes,
   * i.e. after all of the validation passes have been run. The context is mainly
   * used to provide diagnostics and error messages -- The AST is traversible
   * without the context.
   *
   * @returns {boolean}
   */
  public isVirtual(): boolean {
    return this.$ctx === null;
  }

  public toJSON(): any {
    let res: any = { $children: [] };
    for (const key of Object.keys(this)) {
      //@ts-ignore
      if (key === '$parent' || key === '$ctx') {
        continue;
      }

      // @ts-ignore
      if (AST.isNode(this[key])) {
        // @ts-ignore
        res.$children.push({ key, value: this[key].toJSON() });
        // @ts-ignore
      } else {
        // @ts-ignore
        res[key] = this[key];
      }
    }

    res['$type'] = this.constructor.name;
    return res;
  }

  protected setParentForChildren(): void {
    for (const key in this) {
      if (AST.isNode(this[key])) {
        // @ts-ignore
        this[key].setParent(this);
      }
    }
  }
}

export class List<T extends AST = AST> extends AST {
  constructor(public $children: T[]) {
    super();
  }

  static empty<T extends AST = AST>(): List<T> {
    return new List<T>([]);
  }

  // Use this to create a "virtual" list, i.e. a list that does not
  // correspond to a node in the AST.
  static virtual<T extends AST = AST>(children: T[]): List<T> {
    let list = new List<T>(children);
    list.setParentForChildren();
    return list;
  }

  public get children(): T[] {
    return this.$children;
  }

  public toJSON(): any {
    return {
      $type: this.constructor.name,
      $children: this.$children.map((x, key) => ({ key, value: x.toJSON() })),
    };
  }

  protected setParentForChildren(): void {
    this.$children.forEach((x) => x.setParent(this));
  }

  public map<U>(f: (x: T, i: number, o: T[]) => U): U[] {
    return this.$children.map(f);
  }

  public filter(f: (x: T, i: number, o: T[]) => boolean): T[] {
    return this.$children.filter(f);
  }

  public find(f: (x: T, i: number, o: T[]) => boolean): T | undefined {
    return this.$children.find(f);
  }

  public toArray(): T[] {
    return this.$children;
  }

  public at(index: number): T | undefined {
    return this.$children[index];
  }

  public forEach(f: (x: T, i: number, o: T[]) => void): void {
    this.$children.forEach(f);
  }

  public get length(): number {
    return this.$children.length;
  }
}

export class Empty extends AST {}
export const EMPTY = new Empty();

export class SourceFile extends List<Stmt> {}

//#region Statements

export class Stmt extends AST {
  public isStmt(): this is Stmt {
    return true;
  }

  public isExpr(): this is Expr {
    return false;
  }

  public isTypeExpr(): this is TypeExpr {
    return false;
  }

  public isLiteral(): this is Literal<any> {
    return false;
  }
}
export class ImportStmt extends Stmt {
  constructor(public items: List<Ident> | null, public src: string) {
    super();
  }
}
export class LetStmt extends Stmt {
  constructor(public binding: Binding, public value: Expr) {
    super();
  }
}

export class IdentBinding extends AST {
  constructor(public name: Ident, public ty: TypeExpr | null) {
    super();
  }
}

export class TupleBinding extends AST {
  constructor(public names: List<Ident>) {
    super();
  }
}

export class StructBinding extends AST {
  constructor(public names: List<Ident>) {
    super();
  }
}

export type Binding = IdentBinding | TupleBinding | StructBinding;

export class ConstStmt extends Stmt {
  constructor(
    public name: Ident,
    public ty: TypeExpr | null,
    public value: Expr
  ) {
    super();
  }
}

export enum AssignOp {
  EQ = '=',
  PLUS_EQ = '+=',
  MINUS_EQ = '-=',
  MUL_EQ = '*=',
  DIV_EQ = '/=',
  MOD_EQ = '%=',
}

export class AssignStmt extends Stmt {
  constructor(
    public name: Ident,
    public assignOp: AssignOp,
    public value: Expr
  ) {
    super();
  }
}

export class MemberAssignStmt extends Stmt {
  constructor(
    public obj: Expr,
    public memberName: Ident,
    public assignOp: AssignOp,
    public value: Expr
  ) {
    super();
  }
}

export class IndexAssignStmt extends Stmt {
  constructor(
    public obj: Expr,
    public index: Expr,
    public assignOp: AssignOp,
    public value: Expr
  ) {
    super();
  }
}

export class IfStmt extends Stmt {
  constructor(
    public pred: Expr,
    public thenBody: Block,
    public elseBody: Block | null
  ) {
    super();
  }
}

export class ForStmt extends Stmt {
  constructor(public binding: Binding, public iter: Expr, public body: Block) {
    super();
  }
}

export class ExecStmt extends Stmt {
  constructor(public value: Expr) {
    super();
  }
}

export class InstantiateStmt extends Stmt {
  constructor(public value: Expr) {
    super();
  }
}

export class EmitStmt extends Stmt {
  constructor(public value: Expr) {
    super();
  }
}

export class FailStmt extends Stmt {
  constructor(public value: Expr) {
    super();
  }
}

export class ReturnStmt extends Stmt {
  constructor(public value: Expr) {
    super();
  }
}

//#endregion Statements

//#region Expressions
export class Expr extends AST {
  public isStmt(): this is Stmt {
    return true;
  }

  public isExpr(): this is Expr {
    return true;
  }

  public isTypeExpr(): this is TypeExpr {
    return false;
  }

  public isLiteral(): this is Literal<any> {
    return false;
  }
}
export class TupleExpr extends Expr {
  constructor(public exprs: List<Expr> | null) {
    super();
  }
}

export class StructExpr extends Expr {
  constructor(public ty: TypeExpr, public fields: List<Field> | null) {
    super();
  }
}

export class GroupedExpr extends Expr {
  constructor(public expr: Expr) {
    super();
  }
}

export enum UnwrapOp {
  OR_FAIL = '!',
  OR_NONE = '?',
}

export class DotExpr extends Expr {
  constructor(public obj: Expr, public memberName: Ident) {
    super();
  }
}

export class AsExpr extends Expr {
  constructor(public expr: Expr, public ty: TypeExpr) {
    super();
  }
}

export class IndexExpr extends Expr {
  constructor(public obj: Expr, public index: Expr) {
    super();
  }
}

export class CallExpr extends Expr {
  constructor(
    public fn: Expr,
    public fallible: boolean,
    public typeArgs: List<TypeExpr> | null,
    public args: List<Arg> | null
  ) {
    super();
  }
}

export class ExistsExpr extends Expr {
  constructor(public expr: Expr) {
    super();
  }
}

export class IfExpr extends Expr {
  constructor(
    public pred: Expr,
    public thenBody: Block,
    public elseBody: Block | null
  ) {
    super();
  }
}

export enum Op {
  EQ = '==',
  NEQ = '!=',
  LT = '<',
  LTE = '<=',
  GT = '>',
  GTE = '>=',
  PLUS = '+',
  MINUS = '-',
  MUL = '*',
  DIV = '/',
  MOD = '%',
}

export class BinOpExpr extends Expr {
  constructor(public lhs: Expr, public op: Op, public rhs: Expr) {
    super();
  }
}

export class AndExpr extends Expr {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class OrExpr extends Expr {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class IsExpr extends Expr {
  constructor(
    public negative: boolean,
    public lhs: Expr,
    public rhs: TypeExpr
  ) {
    super();
  }
}

export class InExpr extends Expr {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class ShortTryExpr extends Expr {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class TryCatchElseExpr extends Expr {
  constructor(
    public body: Block,
    public catchClauses: List<CatchClause> | null,
    public elseBody: Block | null
  ) {
    super();
  }
}

export class CatchClause extends AST {
  constructor(public ty: TypeExpr, public body: Block) {
    super();
  }
}

export class ClosureExpr extends Expr {
  constructor(
    public fallible: boolean,
    public params: List<Param> | null,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class NotExpr extends Expr {
  constructor(public expr: Expr) {
    super();
  }
}

export class QueryExpr extends Expr {
  constructor(public expr: Expr) {
    super();
  }
}

export class QueryNowExpr extends Expr {
  constructor(public expr: Expr) {
    super();
  }
}

export class FailExpr extends Expr {
  constructor(public expr: Expr) {
    super();
  }
}

export class UnitExpr extends Expr {
  constructor(public ty: TypeExpr) {
    super();
  }
}

export class IdentExpr extends Expr {
  constructor(public ident: Ident) {
    super();
  }
}

//#endregion Expressions
//#region Definitions
export class Defn extends AST {
  public isStmt(): this is Stmt {
    return true;
  }

  public isDefn(): this is Defn {
    return true;
  }

  public isExpr(): this is Expr {
    return false;
  }

  public isTypeExpr(): this is TypeExpr {
    return false;
  }

  public isLiteral(): this is Literal<any> {
    return false;
  }
}

export class ContractDefn extends Defn {
  constructor(
    public name: Ident,
    public base: TypeExpr | null,
    public interfaces: List<TypeExpr> | null,
    public body: Block
  ) {
    super();
  }
}

export class InterfaceDefn extends Defn {
  constructor(
    public name: Ident,
    public baseInterfaces: List<TypeExpr> | null,
    public body: Block
  ) {
    super();
  }
}

export class StructDefn extends Defn {
  constructor(
    public name: Ident,
    public typeParams: List<TypeVar> | null,
    public fields: List<Param>
  ) {
    super();
  }
}

export class TupleDefn extends Defn {
  constructor(
    public name: Ident,
    public typeParams: List<TypeVar> | null,
    public elements: List<TypeExpr>
  ) {
    super();
  }
}

export class UnitDefn extends Defn {
  constructor(public name: Ident, public typeParams: List<TypeVar> | null) {
    super();
  }
}

export class EnumDefn extends Defn {
  constructor(
    public name: Ident,
    public typeParams: List<TypeVar> | null,
    public variants: List<EnumVariantDefn>
  ) {
    super();
  }
}

export abstract class EnumVariantDefn extends Defn {
  abstract name: Ident;
}

export class EnumVariantStructDefn extends EnumVariantDefn {
  constructor(public name: Ident, public fields: List<Param>) {
    super();
  }
}

export class EnumVariantTupleDefn extends EnumVariantDefn {
  constructor(public name: Ident, public fields: List<TypeExpr> | null) {
    super();
  }
}

export class EnumVariantUnitDefn extends EnumVariantDefn {
  constructor(public name: Ident) {
    super();
  }
}

export class TypeAliasDefn extends Defn {
  constructor(
    public name: Ident,
    public typeParams: List<TypeVar> | null,
    public ty: TypeExpr
  ) {
    super();
  }
}

export class FnDefn extends Defn {
  constructor(
    public name: Ident,
    public fallible: boolean,
    public typeParams: List<TypeVar> | null,
    public params: List<Param> | null,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class InstantiateDefn extends Defn {
  constructor(
    public fallible: boolean,
    public params: List<Param> | null,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class ExecDefn extends Defn {
  constructor(
    public name: Ident,
    public fallible: boolean,
    public params: List<Param> | null,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class QueryDefn extends Defn {
  constructor(
    public name: Ident,
    public fallible: boolean,
    public params: List<Param> | null,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class ErrorDefn extends Defn {
  constructor(public name: Ident, public fields: List<Param> | null) {
    super();
  }
}

export class EventDefn extends Defn {
  constructor(public name: Ident, public fields: List<Param> | null) {
    super();
  }
}

export class StateBlockDefn extends Defn {
  constructor(
    public name: Ident,
    public stateFields: List<StateItemDefn | StateMapDefn>
  ) {
    super();
  }
}

export class StateItemDefn extends Defn {
  constructor(public name: Ident, public ty: TypeExpr) {
    super();
  }
}

export class StateMapDefn extends Defn {
  constructor(
    public name: Ident,
    public indexTy: TypeExpr,
    public ty: TypeExpr
  ) {
    super();
  }
}

//#endregion Definitions

//#region Type Expressions
export class TypeExpr extends AST {
  public isStmt(): this is Stmt {
    return true;
  }

  public isExpr(): this is Expr {
    return false;
  }

  public isTypeExpr(): this is TypeExpr {
    return true;
  }

  public isLiteral(): this is Literal<any> {
    return false;
  }
}

export class GroupedTypeExpr extends TypeExpr {
  constructor(public ty: TypeExpr) {
    super();
  }
}

export class ParamzdTypeExpr extends TypeExpr {
  constructor(public ty: TypeExpr, public typeArgs: List<TypeExpr>) {
    super();
  }
}

export class MemberTypeExpr extends TypeExpr {
  constructor(public ty: TypeExpr, public memberName: Ident) {
    super();
  }
}

export class ArrayTypeExpr extends TypeExpr {
  constructor(public ty: TypeExpr, public size: number) {
    super();
  }
}

export class StructDefnTypeExpr extends TypeExpr {
  constructor(public structDefn: StructDefn) {
    super();
  }
}

export class TupleDefnTypeExpr extends TypeExpr {
  constructor(public tupleDefn: TupleDefn) {
    super();
  }
}

export class UnitDefnTypeExpr extends TypeExpr {
  constructor(public unitDefn: UnitDefn) {
    super();
  }
}

export class EnumDefnTypeExpr extends TypeExpr {
  constructor(public enumDefn: EnumDefn) {
    super();
  }
}

export class OptionTypeExpr extends TypeExpr {
  constructor(public ty: TypeExpr) {
    super();
  }
}

export class TypeVar extends AST {
  constructor(public value: string) {
    super();
  }
}

export class TypeVarExpr extends TypeExpr {
  constructor(public typeVar: TypeVar) {
    super();
  }
}

export class IdentTypeExpr extends TypeExpr {
  constructor(public ident: Ident) {
    super();
  }
}

//#endregion Type Expressions

//#region Literals
export class Literal<T> extends Expr {
  public isLiteral(): this is Literal<T> {
    return true;
  }

  constructor(public value: T) {
    super();
  }
}

export class StringLit extends Literal<string> {
  constructor(public value: string) {
    super(value);
  }
}
export class IntLit extends Literal<string> {
  constructor(public value: string) {
    super(value);
  }
}

export class DecLit extends Literal<string> {
  constructor(public value: string) {
    super(value);
  }
}

export class BoolLit extends Literal<boolean> {
  constructor(public value: boolean) {
    super(value);
  }
}
export class NoneLit extends Literal<null> {
  constructor() {
    super(null);
  }
}
//#endregion Literals

//#region Common
export class Ident extends AST {
  constructor(public value: string) {
    super();
  }
}

export class Param extends AST {
  constructor(
    public name: Ident,
    public optional: boolean,
    public ty: TypeExpr | null
  ) {
    super();
  }
}

export class Field extends AST {
  constructor(public name: Ident, public value: Expr | null) {
    super();
  }
}

export class Arg extends AST {
  constructor(public name: Ident | null, public value: Expr) {
    super();
  }
}

export class Block extends List<Stmt> {
  constructor(public stmts: List<Stmt>) {
    super(stmts.toArray());
  }
}

//#endregion Common

export class ASTVisitor<T> {
  private getVisitor(node: AST): ((node: AST) => T) | undefined {
    // @ts-ignore
    return this[`visit${node.constructor.name}`];
  }

  defaultVisit(node: AST): T {
    throw new Error(`No visitor for ${node.constructor.name}`);
  }

  collect(values: T[]): T {
    throw new Error('Not implemented');
  }

  visitChildren(node: AST): T[] {
    return node.children.map((child) => this.visit(child));
  }

  visit(node: AST): T {
    let visitorFn = this.getVisitor(node);
    if (visitorFn !== undefined) {
      return visitorFn.call(this, node);
    } else {
      return this.defaultVisit(node);
    }
  }
}

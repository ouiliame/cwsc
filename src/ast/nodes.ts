import { AstNode, AstJsonNode, AstJsonNodeList } from './abstract-node';
import type { TextView } from '../util/position';
import { Doc } from 'prettier';
import { LetIdentStmtContext } from 'src/grammar/CWScriptParser';
export class List<T extends AstNode> extends AstNode<'List'> {
  public $kind: 'List' = 'List';

  constructor(public $children: T[]) {
    super();
  }

  static empty<A extends AstNode>(): List<A> {
    return new List<A>([]);
  }

  public get children(): T[] {
    return this.$children;
  }

  public json(): AstJsonNodeList {
    return {
      $list: this.$children.map((x) => x.json() as AstJsonNode),
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

export class Empty extends AstNode<'Empty'> {
  public $kind: 'Empty' = 'Empty';
}
export const EMPTY = new Empty();

//#region Statements
export type Stmt =
  | ImportStmt
  | LetIdentStmt
  | LetTupleStmt
  | LetStructStmt
  | ConstStmt
  | AssignStmt
  | MemberAssignStmt
  | IndexAssignStmt
  | IfStmt
  | ForIdentStmt
  | ForTupleStmt
  | ForStructStmt
  | ExecStmt
  | InstantiateStmt
  | ExprStmt
  | EmitStmt
  | FailStmt
  | ReturnStmt;

export class ImportStmt extends AstNode<'ImportStmt'> {
  public $kind: 'ImportStmt' = 'ImportStmt';

  constructor(public bindings: List<Binding>, public src: StringLit) {
    super();
  }
}

export class ExportStmt extends AstNode<'ExportStmt'> {
  public $kind: 'ExportStmt' = 'ExportStmt';

  constructor(public fields: List<Field>) {
    super();
  }
}

export class Binding extends AstNode<'Binding'> {
  public $kind: 'Binding' = 'Binding';

  constructor(public name: Ident, public alias: Ident | null) {
    super();
  }
}
export class LetIdentStmt extends AstNode<'LetIdentStmt'> {
  public $kind: 'LetIdentStmt' = 'LetIdentStmt';

  constructor(
    public name: Ident,
    public ty: TypeExpr | null,
    public value: Expr
  ) {
    super();
  }
}

export class LetTupleStmt extends AstNode<'LetTupleStmt'> {
  public $kind: 'LetTupleStmt' = 'LetTupleStmt';

  constructor(
    public names: List<Ident>,
    public ty: TypeExpr | null,
    public value: Expr
  ) {
    super();
  }
}

export class LetStructStmt extends AstNode<'LetStructStmt'> {
  public $kind: 'LetStructStmt' = 'LetStructStmt';

  constructor(
    public bindings: List<Binding>,
    public ty: TypeExpr | null,
    public value: Expr
  ) {
    super();
  }
}

export class ConstStmt extends AstNode<'ConstStmt'> {
  public $kind: 'ConstStmt' = 'ConstStmt';
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

export class AssignStmt extends AstNode<'AssignStmt'> {
  public $kind: 'AssignStmt' = 'AssignStmt';

  constructor(
    public name: Ident,
    public assignOp: AssignOp,
    public value: Expr
  ) {
    super();
  }
}

export class MemberAssignStmt extends AstNode<'MemberAssignStmt'> {
  public $kind: 'MemberAssignStmt' = 'MemberAssignStmt';

  constructor(
    public obj: Expr,
    public memberName: Ident,
    public assignOp: AssignOp,
    public value: Expr
  ) {
    super();
  }
}

export class IndexAssignStmt extends AstNode<'IndexAssignStmt'> {
  public $kind: 'IndexAssignStmt' = 'IndexAssignStmt';

  constructor(
    public obj: Expr,
    public index: Expr,
    public assignOp: AssignOp,
    public value: Expr
  ) {
    super();
  }
}

export class IfStmt extends AstNode<'IfStmt'> {
  public $kind: 'IfStmt' = 'IfStmt';

  constructor(
    public pred: Expr,
    public thenBody: Block,
    public elseBody: Block | null
  ) {
    super();
  }
}

export class ForIdentStmt extends AstNode<'ForIdentStmt'> {
  public $kind: 'ForIdentStmt' = 'ForIdentStmt';

  constructor(public name: Ident, public iter: Expr, public body: Block) {
    super();
  }
}

export class ForTupleStmt extends AstNode<'ForTupleStmt'> {
  public $kind: 'ForTupleStmt' = 'ForTupleStmt';

  constructor(
    public names: List<Ident>,
    public iter: Expr,
    public body: Block
  ) {
    super();
  }
}

export class ForStructStmt extends AstNode<'ForStructStmt'> {
  public $kind: 'ForStructStmt' = 'ForStructStmt';

  constructor(
    public bindings: List<Binding>,
    public iter: Expr,
    public body: Block
  ) {
    super();
  }
}

export class ExecStmt extends AstNode<'ExecStmt'> {
  public $kind: 'ExecStmt' = 'ExecStmt';

  constructor(public value: Expr) {
    super();
  }
}

export class InstantiateStmt extends AstNode<'InstantiateStmt'> {
  public $kind: 'InstantiateStmt' = 'InstantiateStmt';

  constructor(public value: Expr) {
    super();
  }
}

export class EmitStmt extends AstNode<'EmitStmt'> {
  public $kind: 'EmitStmt' = 'EmitStmt';

  constructor(public value: Expr) {
    super();
  }
}

export class ExprStmt extends AstNode<'ExprStmt'> {
  public $kind: 'ExprStmt' = 'ExprStmt';

  constructor(public value: Expr, public semi: boolean) {
    super();
  }
}

export class FailStmt extends AstNode<'FailStmt'> {
  public $kind: 'FailStmt' = 'FailStmt';

  constructor(public value: Expr) {
    super();
  }
}

export class ReturnStmt extends AstNode<'ReturnStmt'> {
  public $kind: 'ReturnStmt' = 'ReturnStmt';

  constructor(public value: Expr) {
    super();
  }
}

//#endregion Statements

//#region Expressions
export type Expr =
  | TupleExpr
  | StructExpr
  | GroupedExpr
  | DotExpr
  | IndexExpr
  | CallExpr
  | ExistsExpr
  | IfExpr
  | BinOpExpr
  | AndExpr
  | OrExpr
  | IsExpr
  | InExpr
  | ShortTryExpr
  | TryCatchElseExpr
  | ClosureExpr
  | NotExpr
  | QueryExpr
  | QueryNowExpr
  | FailExpr
  | UnitExpr
  | IdentExpr;
export class TupleExpr extends AstNode<'TupleExpr'> {
  public $kind: 'TupleExpr' = 'TupleExpr';

  constructor(public exprs: List<Expr>) {
    super();
  }
}

export class StructExpr extends AstNode<'StructExpr'> {
  public $kind: 'StructExpr' = 'StructExpr';

  constructor(public ty: TypeExpr, public fields: List<Field>) {
    super();
  }
}

export class GroupedExpr extends AstNode<'GroupedExpr'> {
  public $kind: 'GroupedExpr' = 'GroupedExpr';

  constructor(public expr: Expr) {
    super();
  }
}

export enum UnwrapOp {
  OR_FAIL = '!',
  OR_NONE = '?',
}

export class DotExpr extends AstNode<'DotExpr'> {
  public $kind: 'DotExpr' = 'DotExpr';

  constructor(public obj: Expr, public memberName: Ident) {
    super();
  }
}

export class IndexExpr extends AstNode<'IndexExpr'> {
  public $kind: 'IndexExpr' = 'IndexExpr';

  constructor(public obj: Expr, public index: Expr) {
    super();
  }
}

export class CallExpr extends AstNode<'CallExpr'> {
  public $kind: 'CallExpr' = 'CallExpr';

  constructor(
    public fn: Expr,
    public fallible: boolean,
    public typeArgs: List<TypeExpr>,
    public args: List<Arg>
  ) {
    super();
  }
}

export class ExistsExpr extends AstNode<'ExistsExpr'> {
  public $kind: 'ExistsExpr' = 'ExistsExpr';

  constructor(public expr: Expr) {
    super();
  }
}

export class IfExpr extends AstNode<'IfExpr'> {
  public $kind: 'IfExpr' = 'IfExpr';

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

export class BinOpExpr extends AstNode<'BinOpExpr'> {
  public $kind: 'BinOpExpr' = 'BinOpExpr';

  constructor(public lhs: Expr, public op: Op, public rhs: Expr) {
    super();
  }
}

export class AndExpr extends AstNode<'AndExpr'> {
  public $kind: 'AndExpr' = 'AndExpr';

  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class OrExpr extends AstNode<'OrExpr'> {
  public $kind: 'OrExpr' = 'OrExpr';
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class IsExpr extends AstNode<'IsExpr'> {
  public $kind: 'IsExpr' = 'IsExpr';

  constructor(
    public negative: boolean,
    public lhs: Expr,
    public rhs: TypeExpr
  ) {
    super();
  }
}

export class InExpr extends AstNode<'InExpr'> {
  public $kind: 'InExpr' = 'InExpr';

  constructor(public negative: boolean, public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class ShortTryExpr extends AstNode<'ShortTryExpr'> {
  public $kind: 'ShortTryExpr' = 'ShortTryExpr';

  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class TryCatchElseExpr extends AstNode<'TryCatchElseExpr'> {
  public $kind: 'TryCatchElseExpr' = 'TryCatchElseExpr';

  constructor(
    public body: Block,
    public catchClauses: List<CatchClause>,
    public elseBody: Block | null
  ) {
    super();
  }
}

export class CatchClause extends AstNode<'CatchClause'> {
  public $kind: 'CatchClause' = 'CatchClause';

  constructor(public ty: TypeExpr, public body: Block) {
    super();
  }
}

export class ClosureExpr extends AstNode<'ClosureExpr'> {
  public $kind: 'ClosureExpr' = 'ClosureExpr';

  constructor(
    public params: List<Param>,
    public fallible: boolean,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class NotExpr extends AstNode<'NotExpr'> {
  public $kind: 'NotExpr' = 'NotExpr';

  constructor(public expr: Expr) {
    super();
  }
}

export class QueryExpr extends AstNode<'QueryExpr'> {
  public $kind: 'QueryExpr' = 'QueryExpr';

  constructor(public expr: Expr) {
    super();
  }
}

export class QueryNowExpr extends AstNode<'QueryNowExpr'> {
  public $kind: 'QueryNowExpr' = 'QueryNowExpr';

  constructor(public expr: Expr) {
    super();
  }
}

export class TryCatchElseStmt extends AstNode<'TryCatchElseStmt'> {
  public $kind: 'TryCatchElseStmt' = 'TryCatchElseStmt';

  constructor(
    public body: Block,
    public catchClauses: List<CatchClause>,
    public elseBody: Block | null
  ) {
    super();
  }
}

export class FailExpr extends AstNode<'FailExpr'> {
  public $kind: 'FailExpr' = 'FailExpr';

  constructor(public value: Expr) {
    super();
  }
}

export class ReturnExpr extends AstNode<'ReturnExpr'> {
  public $kind: 'ReturnExpr' = 'ReturnExpr';

  constructor(public value: Expr) {
    super();
  }
}

export class UnitExpr extends AstNode<'UnitExpr'> {
  public $kind: 'UnitExpr' = 'UnitExpr';

  constructor(public ty: TypeExpr) {
    super();
  }
}

export class IdentExpr extends AstNode<'IdentExpr'> {
  public $kind: 'IdentExpr' = 'IdentExpr';

  constructor(public ident: Ident) {
    super();
  }
}

//#endregion Expressions
//#region Definitions

export type Defn =
  | ContractDefn
  | InterfaceDefn
  | StructDefn
  | TupleDefn
  | UnitDefn
  | EnumDefn
  | TypeAliasDefn
  | FnDefn
  | InstantiateDefn
  | ExecDefn
  | QueryDefn
  | ErrorDefn
  | EventDefn
  | StateBlockDefn
  | StateItemDefn
  | StateMapDefn;

export class ContractDefn extends AstNode<'ContractDefn'> {
  public $kind: 'ContractDefn' = 'ContractDefn';

  constructor(
    public name: Ident,
    public base: TypeExpr | null,
    public interfaces: List<TypeExpr>,
    public body: Block
  ) {
    super();
  }
}

export class InterfaceDefn extends AstNode<'InterfaceDefn'> {
  public $kind: 'InterfaceDefn' = 'InterfaceDefn';

  public isTypeExpr(): this is TypeExpr {
    return true;
  }
  constructor(
    public name: Ident,
    public baseInterfaces: List<TypeExpr>,
    public body: Block
  ) {
    super();
  }
}

export class StructDefn extends AstNode<'StructDefn'> {
  public $kind: 'StructDefn' = 'StructDefn';

  public isTypeExpr(): this is TypeExpr {
    return true;
  }

  constructor(
    public name: Ident,
    public typeParams: List<TypeVar>,
    public fields: List<Param>
  ) {
    super();
  }
}

export class TupleDefn extends AstNode<'TupleDefn'> {
  public $kind: 'TupleDefn' = 'TupleDefn';

  public isTypeExpr(): this is TypeExpr {
    return true;
  }
  constructor(
    public name: Ident,
    public typeParams: List<TypeVar>,
    public elements: List<TypeExpr>
  ) {
    super();
  }
}

export class UnitDefn extends AstNode<'UnitDefn'> {
  public $kind: 'UnitDefn' = 'UnitDefn';

  public isTypeExpr(): this is TypeExpr {
    return true;
  }
  constructor(public name: Ident, public typeParams: List<TypeVar>) {
    super();
  }
}

export class EnumDefn extends AstNode<'EnumDefn'> {
  public $kind: 'EnumDefn' = 'EnumDefn';

  public isTypeExpr(): this is TypeExpr {
    return true;
  }
  constructor(
    public name: Ident,
    public typeParams: List<TypeVar>,
    public variants: List<EnumVariantDefn>
  ) {
    super();
  }
}

export abstract class EnumVariantDefn<
  K extends string = string
> extends AstNode<K> {
  abstract name: Ident;
}

export class EnumVariantStructDefn extends EnumVariantDefn<'EnumVariantStructDefn'> {
  public $kind: 'EnumVariantStructDefn' = 'EnumVariantStructDefn';

  constructor(public name: Ident, public fields: List<Param>) {
    super();
  }
}

export class EnumVariantTupleDefn extends EnumVariantDefn<'EnumVariantTupleDefn'> {
  public $kind: 'EnumVariantTupleDefn' = 'EnumVariantTupleDefn';
  constructor(public name: Ident, public elements: List<TypeExpr>) {
    super();
  }
}

export class EnumVariantUnitDefn extends EnumVariantDefn<'EnumVariantUnitDefn'> {
  public $kind: 'EnumVariantUnitDefn' = 'EnumVariantUnitDefn';
  constructor(public name: Ident) {
    super();
  }
}

export class TypeAliasDefn extends AstNode<'TypeAliasDefn'> {
  public $kind: 'TypeAliasDefn' = 'TypeAliasDefn';

  public isTypeExpr(): this is TypeExpr {
    return true;
  }

  constructor(
    public name: Ident,
    public typeParams: List<TypeVar>,
    public ty: TypeExpr
  ) {
    super();
  }
}

export class FnDefn extends AstNode<'FnDefn'> {
  public $kind: 'FnDefn' = 'FnDefn';

  constructor(
    public name: Ident,
    public fallible: boolean,
    public typeParams: List<TypeVar>,
    public params: List<Param>,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class InstantiateDefn extends AstNode<'InstantiateDefn'> {
  public $kind: 'InstantiateDefn' = 'InstantiateDefn';

  constructor(
    public fallible: boolean,
    public params: List<Param>,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class ExecDefn extends AstNode<'ExecDefn'> {
  public $kind: 'ExecDefn' = 'ExecDefn';

  constructor(
    public name: Ident,
    public fallible: boolean,
    public isTuple: boolean,
    public params: List<Param>,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class QueryDefn extends AstNode<'QueryDefn'> {
  public $kind: 'QueryDefn' = 'QueryDefn';

  constructor(
    public name: Ident,
    public fallible: boolean,
    public isTuple: boolean,
    public params: List<Param>,
    public returnTy: TypeExpr | null,
    public body: Block
  ) {
    super();
  }
}

export class ErrorDefn extends AstNode<'ErrorDefn'> {
  public $kind: 'ErrorDefn' = 'ErrorDefn';
  constructor(public name: Ident, public fields: List<Param>) {
    super();
  }
}

export class EventDefn extends AstNode<'EventDefn'> {
  public $kind: 'EventDefn' = 'EventDefn';
  constructor(public name: Ident, public fields: List<Param>) {
    super();
  }
}

export class StateBlockDefn extends AstNode<'StateBlockDefn'> {
  public $kind: 'StateBlockDefn' = 'StateBlockDefn';

  constructor(public stateFields: List<StateItemDefn | StateMapDefn>) {
    super();
  }
}

export class StateItemDefn extends AstNode<'StateItemDefn'> {
  public $kind: 'StateItemDefn' = 'StateItemDefn';
  constructor(public name: Ident, public ty: TypeExpr) {
    super();
  }
}

export class StateMapDefn extends AstNode<'StateMapDefn'> {
  public $kind: 'StateMapDefn' = 'StateMapDefn';
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

export type TypeExpr =
  | GroupedTypeExpr
  | ParamzdTypeExpr
  | MemberTypeExpr
  | ArrayTypeExpr
  | StructDefnTypeExpr
  | TupleDefnTypeExpr
  | UnitDefnTypeExpr
  | EnumDefnTypeExpr
  | OptionTypeExpr
  | TypeVarExpr
  | IdentTypeExpr;
export class GroupedTypeExpr extends AstNode<'GroupedTypeExpr'> {
  public $kind: 'GroupedTypeExpr' = 'GroupedTypeExpr';

  constructor(public ty: TypeExpr) {
    super();
  }
}

export class ParamzdTypeExpr extends AstNode<'ParamzdTypeExpr'> {
  public $kind: 'ParamzdTypeExpr' = 'ParamzdTypeExpr';

  constructor(public ty: TypeExpr, public typeArgs: List<TypeExpr>) {
    super();
  }
}

export class MemberTypeExpr extends AstNode<'MemberTypeExpr'> {
  public $kind: 'MemberTypeExpr' = 'MemberTypeExpr';

  constructor(public ty: TypeExpr, public memberName: Ident) {
    super();
  }
}

export class TupleTypeExpr extends AstNode<'TupleTypeExpr'> {
  public $kind: 'TupleTypeExpr' = 'TupleTypeExpr';

  constructor(public elements: List<TypeExpr>) {
    super();
  }
}

export class ArrayTypeExpr extends AstNode<'ArrayTypeExpr'> {
  public $kind: 'ArrayTypeExpr' = 'ArrayTypeExpr';

  constructor(public ty: TypeExpr, public size: IntLit) {
    super();
  }
}

export class StructDefnTypeExpr extends AstNode<'StructDefnTypeExpr'> {
  public $kind: 'StructDefnTypeExpr' = 'StructDefnTypeExpr';

  constructor(public structDefn: StructDefn) {
    super();
  }
}

export class TupleDefnTypeExpr extends AstNode<'TupleDefnTypeExpr'> {
  public $kind: 'TupleDefnTypeExpr' = 'TupleDefnTypeExpr';

  constructor(public tupleDefn: TupleDefn) {
    super();
  }
}

export class UnitDefnTypeExpr extends AstNode<'UnitDefnTypeExpr'> {
  public $kind: 'UnitDefnTypeExpr' = 'UnitDefnTypeExpr';

  constructor(public unitDefn: UnitDefn) {
    super();
  }
}

export class EnumDefnTypeExpr extends AstNode<'EnumDefnTypeExpr'> {
  public $kind: 'EnumDefnTypeExpr' = 'EnumDefnTypeExpr';

  constructor(public enumDefn: EnumDefn) {
    super();
  }
}

export class OptionTypeExpr extends AstNode<'OptionTypeExpr'> {
  public $kind: 'OptionTypeExpr' = 'OptionTypeExpr';

  constructor(public ty: TypeExpr) {
    super();
  }
}

export class TypeVar extends AstNode<'TypeVar'> {
  public $kind: 'TypeVar' = 'TypeVar';

  constructor(public value: string) {
    super();
  }
}

export class TypeVarExpr extends AstNode<'TypeVarExpr'> {
  public $kind: 'TypeVarExpr' = 'TypeVarExpr';

  constructor(public typeVar: TypeVar) {
    super();
  }
}

export class IdentTypeExpr extends AstNode<'IdentTypeExpr'> {
  public $kind: 'IdentTypeExpr' = 'IdentTypeExpr';

  constructor(public ident: Ident) {
    super();
  }
}

//#endregion Type Expressions

//#region Literals

export type Literal = StringLit | IntLit | DecLit | BoolLit | NoneLit;

export class StringLit extends AstNode<'StringLit'> {
  public $kind: 'StringLit' = 'StringLit';

  constructor(public value: string) {
    super();
  }
}
export class IntLit extends AstNode<'IntLit'> {
  public $kind: 'IntLit' = 'IntLit';

  constructor(public value: string) {
    super();
  }
}

export class DecLit extends AstNode<'DecLit'> {
  public $kind: 'DecLit' = 'DecLit';

  constructor(public value: string) {
    super();
  }
}

export class BoolLit extends AstNode<'BoolLit'> {
  public $kind: 'BoolLit' = 'BoolLit';

  constructor(public value: boolean) {
    super();
  }
}
export class NoneLit extends AstNode<'NoneLit'> {
  public $kind: 'NoneLit' = 'NoneLit';

  constructor() {
    super(null);
  }
}
//#endregion Literals

//#region Common
export class Ident extends AstNode<'Ident'> {
  public $kind: 'Ident' = 'Ident';
  public value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  public get isHashIdent(): boolean {
    return this.value.startsWith('#');
  }

  public get isDollarIdent(): boolean {
    return this.value.startsWith('$');
  }

  public get isEscapedIdent(): boolean {
    return this.value.startsWith('`') && this.value.endsWith('`');
  }
}

export class Param extends AstNode<'Param'> {
  public $kind: 'Param' = 'Param';

  constructor(
    public name: Ident,
    public optional: boolean,
    public ty: TypeExpr | null
  ) {
    super();
  }
}

export class Field extends AstNode<'Field'> {
  public $kind: 'Field' = 'Field';

  constructor(public name: Ident, public value: Expr | null) {
    super();
  }
}

export class Arg extends AstNode<'Arg'> {
  public $kind: 'Arg' = 'Arg';

  constructor(public name: Ident | null, public value: Expr) {
    super();
  }
}

export class Block extends AstNode<'Block'> {
  public $kind: 'Block' = 'Block';

  constructor(public stmts: List<Stmt>) {
    super();
  }
}

//#endregion Common

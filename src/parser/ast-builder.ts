import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import * as AST from '../ast';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserVisitor as ANTLRCWScriptParserVisitor } from '../grammar/CWScriptParserVisitor';

function assignOpFromText(text: string) {
  switch (text) {
    case '=':
      return AST.AssignOp.EQ;
    case '+=':
      return AST.AssignOp.PLUS_EQ;
    case '-=':
      return AST.AssignOp.MINUS_EQ;
    case '*=':
      return AST.AssignOp.MUL_EQ;
    case '/=':
      return AST.AssignOp.DIV_EQ;

    default:
      throw new Error(`Invalid assign operator: ${text}`);
  }
}

export class ASTBuilderVisitor
  extends AbstractParseTreeVisitor<AST.AST>
  implements ANTLRCWScriptParserVisitor<AST.AST>
{
  visitSourceFile(ctx: P.SourceFileContext): AST.SourceFile {
    const stmts = ctx._stmts.map((s) => this.visit(s));
    return new AST.SourceFile(stmts);
  }

  visitImportStmt(ctx: P.ImportStmtContext): AST.ImportStmt {
    const items = ctx._items
      ? this.visitIdentList(ctx._items)
      : AST.List.empty<AST.Ident>();
    const src = ctx._src.text!;
    return new AST.ImportStmt(items, src);
  }

  visitIdentList(ctx: P.IdentListContext): AST.List<AST.Ident> {
    return new AST.List(ctx.ident().map((i) => this.visitIdent(i)));
  }

  visitIdent(ctx: P.IdentContext): AST.Ident {
    return new AST.Ident(ctx.text);
  }

  protected defaultResult(): AST.AST {
    return new AST.AST();
  }

  visitLetStmt(ctx: P.LetStmtContext): AST.LetStmt {
    const binding = this.visit(
      ctx._binding as P.Binding_Context
    ) as AST.Binding;
    const value = this.visit(ctx._value);
    return new AST.LetStmt(binding, value);
  }

  visitIdentBinding(ctx: P.IdentBindingContext): AST.IdentBinding {
    return new AST.IdentBinding(
      this.visitIdent(ctx._name),
      ctx._ty ? this.visit(ctx._ty) : null
    );
  }

  visitTupleBinding(ctx: P.TupleBindingContext): AST.TupleBinding {
    const names = this.visitIdentList(
      ctx._names as P.IdentListContext
    ) as AST.List<AST.Ident>;
    return new AST.TupleBinding(names);
  }

  visitStructBinding(ctx: P.StructBindingContext): AST.StructBinding {
    const names = this.visitIdentList(
      ctx._names as P.IdentListContext
    ) as AST.List<AST.Ident>;
    return new AST.StructBinding(names);
  }

  visitConstStmt(ctx: P.ConstStmtContext): AST.ConstStmt {
    const name = this.visitIdent(ctx._name);
    const ty = ctx._ty ? this.visit(ctx._ty) : null;
    const value = this.visit(ctx._value);
    return new AST.ConstStmt(name, ty, value);
  }

  visitAssignStmt(ctx: P.AssignStmtContext): AST.AssignStmt {
    const name = this.visitIdent(ctx._name);
    const op = ctx._assignOp.text ?? '=';
    const value = this.visit(ctx._value);
    return new AST.AssignStmt(name, assignOpFromText(op), value);
  }

  visitMemberAssignStmt(ctx: P.MemberAssignStmtContext): AST.MemberAssignStmt {
    const obj = this.visit(ctx._obj);
    const name = this.visitIdent(ctx._memberName);
    const op = ctx._assignOp.text ?? '=';
    const value = this.visit(ctx._value);
    return new AST.MemberAssignStmt(obj, name, assignOpFromText(op), value);
  }

  visitIndexAssignStmt(ctx: P.IndexAssignStmtContext): AST.IndexAssignStmt {
    const obj = this.visit(ctx._obj);
    const index = this.visit(ctx._index);
    const op = ctx._assignOp.text ?? '=';
    const value = this.visit(ctx._value);
    return new AST.IndexAssignStmt(obj, index, assignOpFromText(op), value);
  }

  visitReturnStmt(ctx: P.ReturnStmtContext): AST.ReturnStmt {
    const value = this.visit(ctx._value);
    return new AST.ReturnStmt(value);
  }

  visitFailStmt(ctx: P.FailStmtContext): AST.FailStmt {
    const value = this.visit(ctx._value);
    return new AST.FailStmt(value);
  }

  visitForStmt(ctx: P.ForStmtContext): AST.ForStmt {
    const binding = this.visit(ctx._binding) as AST.Binding;
    const iter = this.visit(ctx._iter);
    const body = ctx._body.map((s) => this.visit(s));
    return new AST.ForStmt(binding, iter, block);
  }

  visitExecStmt(ctx: P.ExecStmtContext): AST.ExecStmt {
    const value = this.visit(ctx._value);
    return new AST.ExecStmt(value);
  }

  visitInstantiateStmt(ctx: P.InstantiateStmtContext): AST.InstantiateStmt {
    const value = this.visit(ctx._value);
    return new AST.InstantiateStmt(value);
  }

  visitEmitStmt(ctx: P.EmitStmtContext): AST.EmitStmt {
    const value = this.visit(ctx._value);
    return new AST.EmitStmt(value);
  }

  visitIfExpr_(ctx: P.IfExpr_Context): AST.IfExpr {
    const cond = this.visit(ctx._cond);
    const thenBody = ctx._thenBody.map((s) => this.visit(s)) as List<AST.Stmt>;
    const elseBody = ctx._elseBody.map((s) => this.visit(s)) as List<AST.Stmt>;
    return new AST.IfStmt(cond, thenBody, elseBody);
  }

  visitTryCatchElseExpr_(
    ctx: P.TryCatchElseExpr_Context
  ): AST.TryCatchElseExpr {
    const tryBody = ctx._tryBody.map((s) => this.visit(s));
    const catchClauses = ctx._catchClauses.map((s) => this.visit(s));
    const elseBody = ctx._elseBody.map((s) => this.visit(s));
    return new AST.TryCatchElseExpr(tryBody, catchClauses, elseBody);
  }

  visitCatchClause(ctx: P.CatchClauseContext): AST.CatchClause {
    const ty = this.visit(ctx._ty);
    const body = ctx._body.map((s) => this.visit(s));
    return new AST.CatchClause(ty, body);
  }

  // Definitions
  visitContractDefn(ctx: P.ContractDefnContext): AST.ContractDefn {
    const name = this.visitIdent(ctx._name);
    const extend = ctx._base ? this.visitIdentList(ctx._base) : null;
    const implement = ctx._interfaces
      ? (this.visit(ctx._interfaces) as List<TypeExpr>)
      : null;
    const body = ctx._body.map((s) => this.visit(s));
    return new AST.ContractDefn(name, extend, implement, body);
  }

  visitInterfaceDefn(ctx: P.InterfaceDefnContext): AST.InterfaceDefn {
    const name = this.visitIdent(ctx._name);
    const extend = ctx._baseInterfaces
      ? (this.visit(ctx._baseInterfaces) as List<TypeExpr>)
      : null;
    const body = ctx._body.map((s) => this.visit(s));
    return new AST.InterfaceDefn(name, extend, body);
  }

  visitStructDefn(ctx: P.StructDefnContext): AST.StructDefn {
    const name = this.visitIdent(ctx._name);
    const typeVars = ctx._typeVars ? this.visit(ctx._typeVars) : null;
    const fields = this.visit(ctx._fields);
    return new AST.StructDefn(name, typeVars, fields);
  }

  visitTupleDefn(ctx: P.TupleDefnContext): AST.TupleDefn {
    const name = this.visitIdent(ctx._name);
    const typeVars = ctx._typeVars ? this.visit(ctx._typeVars) : null;
    const elements = ctx._elements ? this.visit(ctx._elements) : null;
    return new AST.TupleDefn(typeVars, fields, elements);
  }

  visitUnitDefn(ctx: P.UnitDefnContext): AST.UnitDefn {
    const typeVars = ctx._typeVars ? this.visit(ctx._typeVars) : null;
    const name = this.visitIdent(ctx._name);
    return new AST.UnitDefn(typeVars, name);
  }

  visitEnumDefn(ctx: P.EnumDefnContext): AST.EnumDefn {
    const name = this.visitIdent(ctx._name);
    const typeVars = ctx._typeVars ? this.visit(ctx._typeVars) : null;
    const variants = ctx._variants ? this.visit(ctx._variants) : null;
    return new AST.EnumDefn(name, typeVars, variants);
  }

  visitEnumVariantList(ctx: P.EnumVariantListContext): AST.EnumVariantList {
    return new AST.EnumVariantList(ctx._variants.map((v) => this.visit(v)));
  }

  visitEnumVariantStructDefn(
    ctx: P.EnumVariantStructDefnContext
  ): AST.EnumVariantStructDefn {
    const name = this.visitIdent(ctx._name);
    const fields = ctx._fields
      ? (this.visit(ctx._fields) as List<Param>)
      : null;
    return new AST.EnumVariantStructDefn(name, fields);
  }

  // Expressions

  visitClosureExpr_(ctx: P.ClosureExpr_Context): AST.ClosureExpr {
    throw 'unimplemented: visitClosureExpr';
  }

  visitStructExpr_(ctx: P.StructExpr_Context): AST.StructExpr {
    let ty = this.visit(ctx._ty);
    let fields = this.visit(ctx._fields) as List<MemberVar>;
    return new AST.StructExpr(ty, fields);
  }

  visitFieldList(ctx: P.FieldListContext): AST.FieldList {
    return new AST.FieldList(ctx._fields.map((f) => this.visit(f)));
  }

  visitField(ctx: P.FieldContext): AST.Field {
    throw new Error('Method not implemented.');
  }

  visitTupleExpr(ctx: P.TupleExprContext): AST.TupleExpr {
    const elems = ctx._elements.map((e) => this.visit(e));
    return new AST.TupleExpr(elems);
  }

  visitTypeExpr(ctx: P.TypeExprContext): AST.TypeExpr {
    throw new Error('Method not implemented.');
  }

  visitExpr(ctx: P.ExprContext): AST.Expr {
    throw new Error('Method not implemented.');
  }
}

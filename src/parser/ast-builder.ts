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
  protected defaultResult(): AST.AST {
    return new AST.AST();
  }

  visitSourceFile(ctx: P.SourceFileContext): AST.SourceFile {
    const stmts = ctx._stmts.map((s) => this.visit(s));
    return new AST.SourceFile(stmts);
  }

  //#region Statements
  visitImportStmt(ctx: P.ImportStmtContext): AST.ImportStmt {
    const items = ctx._items
      ? this.visitIdentList(ctx._items)
      : AST.List.empty<AST.Ident>();
    const src = ctx._src.text!;
    return new AST.ImportStmt(items, src);
  }

  visitLetStmt(ctx: P.LetStmtContext): AST.LetStmt {
    const binding = this.visit(
      ctx._binding as P.Binding_Context
    ) as AST.Binding;
    const value = this.visit(ctx._value);
    return new AST.LetStmt(binding, value);
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
    const body = this.visitBlock(ctx._body);
    return new AST.ForStmt(binding, iter, body);
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
  //#endregion Statements

  visitIdentBinding(ctx: P.IdentBindingContext): AST.IdentBinding {
    return new AST.IdentBinding(
      this.visitIdent(ctx._name),
      ctx._ty ? this.visit(ctx._ty) : null
    );
  }

  visitTupleBinding(ctx: P.TupleBindingContext): AST.TupleBinding {
    const names = this.visitIdentList(ctx._names);
    return new AST.TupleBinding(names);
  }

  visitStructBinding(ctx: P.StructBindingContext): AST.StructBinding {
    const names = this.visitIdentList(ctx._names);
    return new AST.StructBinding(names);
  }

  visitIfExpr_(ctx: P.IfExpr_Context): AST.IfExpr {
    const pred = this.visit(ctx._pred);
    const thenBody = this.visitBlock(ctx._thenBody);
    const elseBody = ctx._elseBody ? this.visitBlock(ctx._elseBody) : null;
    return new AST.IfExpr(pred, thenBody, elseBody);
  }

  visitTryCatchElseExpr_(
    ctx: P.TryCatchElseExpr_Context
  ): AST.TryCatchElseExpr {
    const body = this.visitBlock(ctx._body);
    const catchClauses = ctx._catchClauses
      ? new AST.List(ctx._catchClauses.map((s) => this.visitCatchClause(s)))
      : null;
    const elseBody = ctx._elseBody ? this.visitBlock(ctx._elseBody) : null;
    return new AST.TryCatchElseExpr(body, catchClauses, elseBody);
  }

  visitCatchClause(ctx: P.CatchClauseContext): AST.CatchClause {
    const ty = this.visit(ctx._ty);
    const body = this.visitBlock(ctx._body);
    return new AST.CatchClause(ty, body);
  }

  //#region Definitions
  visitContractDefn(ctx: P.ContractDefnContext): AST.ContractDefn {
    const name = this.visitIdent(ctx._name);
    const base = ctx._base ? this.visitTypeExpr(ctx._base) : null;
    const interfaces = ctx._interfaces
      ? this.visitTypeExprList(ctx._interfaces)
      : null;
    const body = this.visitBlock(ctx._body);
    return new AST.ContractDefn(name, base, interfaces, body);
  }

  visitInterfaceDefn(ctx: P.InterfaceDefnContext): AST.InterfaceDefn {
    const name = this.visitIdent(ctx._name);
    const extend = ctx._baseInterfaces
      ? (this.visit(ctx._baseInterfaces) as List<TypeExpr>)
      : null;
    const body = this.visitBlock(ctx._body);
    return new AST.InterfaceDefn(name, extend, body);
  }

  visitStructDefn(ctx: P.StructDefnContext): AST.StructDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const fields = this.visitParamList(ctx._fields);
    return new AST.StructDefn(name, typeParams, fields);
  }

  visitTupleDefn(ctx: P.TupleDefnContext): AST.TupleDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const elements = ctx._elements
      ? this.visitTypeExprList(ctx._elements)
      : null;
    return new AST.TupleDefn(name, typeParams, elements);
  }

  visitUnitDefn(ctx: P.UnitDefnContext): AST.UnitDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    return new AST.UnitDefn(name, typeParams);
  }

  visitEnumDefn(ctx: P.EnumDefnContext): AST.EnumDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const variants = ctx._variants
      ? this.visitEnumVariantDefnList(ctx._variants)
      : null;
    return new AST.EnumDefn(name, typeParams, variants);
  }

  visitEnumVariantDefnList(
    ctx: P.EnumVariantDefnListContext
  ): AST.List<AST.EnumVariantDefn> {
    return new AST.List(
      ctx.enumVariantDefn().map((v) => this.visit(v) as AST.EnumVariantDefn)
    );
  }

  visitEnumVariantStructDefn(
    ctx: P.EnumVariantStructDefnContext
  ): AST.EnumVariantStructDefn {
    const name = this.visitIdent(ctx._name);
    const fields = this.visitParamList(ctx._fields);
    return new AST.EnumVariantStructDefn(name, fields);
  }

  visitEnumVariantTupleDefn(
    ctx: P.EnumVariantTupleDefnContext
  ): AST.EnumVariantTupleDefn {
    const name = this.visitIdent(ctx._name);
    const elements = ctx._elements
      ? this.visitTypeExprList(ctx._elements)
      : null;
    return new AST.EnumVariantTupleDefn(name, elements);
  }

  visitTypeAliasDefn(ctx: P.TypeAliasDefnContext): AST.TypeAliasDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const ty = this.visit(ctx._ty);
    return new AST.TypeAliasDefn(name, typeParams, ty);
  }

  visitFnDefn(ctx: P.FnDefnContext): AST.FnDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const params = this.visitParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.visitTypeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.FnDefn(name, typeParams, params, returnTy, body);
  }

  visitInstantiateDefn(ctx: P.InstantiateDefnContext): AST.InstantiateDefn {
    const params = this.visitParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.visitTypeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.InstantiateDefn(params, returnTy, body);
  }

  visitExecDefn(ctx: P.ExecDefnContext): AST.ExecDefn {
    const name = this.visitIdent(ctx._name);
    const params = this.visitParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.visitTypeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.ExecDefn(name, params, returnTy, body);
  }

  visitQueryDefn(ctx: P.QueryDefnContext): AST.QueryDefn {
    const name = this.visitIdent(ctx._name);
    const params = this.visitParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.visitTypeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.QueryDefn(name, params, returnTy, body);
  }

  //#endregion Definitions

  //#region Expressions
  visitDotExpr(ctx: P.DotExprContext): AST.DotExpr {
    const obj = this.visit(ctx.expr());
    const memberName = this.visitIdent(ctx._memberName);
    return new AST.DotExpr(obj, memberName);
  }

  visitCallExpr(ctx: P.CallExprContext): AST.CallExpr {
    const fn = this.visit(ctx.expr());
    const typeArgs = ctx._typeArgs
      ? this.visitTypeExprList(ctx._typeArgs)
      : null;
    const args = ctx._args ? this.visitArgList(ctx._args) : null;
    return new AST.CallExpr(fn, typeArgs, args);
  }

  visitIndexExpr(ctx: P.IndexExprContext): AST.IndexExpr {
    const [obj, index] = [this.visit(ctx.expr(0)), this.visit(ctx.expr(1))];
    return new AST.IndexExpr(obj, index);
  }

  visitAsExpr(ctx: P.AsExprContext): AST.AsExpr {
    const obj = this.visit(ctx.expr());
    const ty = this.visitTypeExpr(ctx._ty);
    return new AST.AsExpr(obj, ty);
  }

  visitExistsExpr(ctx: P.ExistsExprContext): AST.ExistsExpr {
    const expr = this.visit(ctx.expr());
    return new AST.ExistsExpr(expr);
  }

  visitMulExpr(ctx: P.MulExprContext): AST.BinOpExpr {
    const [left, right] = [this.visit(ctx.expr(0)), this.visit(ctx.expr(1))];
    return new AST.BinOpExpr(left, ctx._op.text! as AST.Op, right);
  }

  visitAddExpr(ctx: P.AddExprContext): AST.BinOpExpr {
    const [left, right] = [this.visit(ctx.expr(0)), this.visit(ctx.expr(1))];
    return new AST.BinOpExpr(left, ctx._op.text! as AST.Op, right);
  }

  visitClosureExpr_(ctx: P.ClosureExpr_Context): AST.ClosureExpr {
    throw 'unimplemented: visitClosureExpr';
  }

  visitStructExpr_(ctx: P.StructExpr_Context): AST.StructExpr {
    let ty = this.visit(ctx._ty);
    let fields = this.visit(ctx._fields) as List<MemberVar>;
    return new AST.StructExpr(ty, fields);
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
  //#endregion Expressions

  //#region Type Expressions
  visitGroupedTypeExpr(ctx: P.GroupedTypeExprContext): AST.GroupedTypeExpr {
    return new AST.GroupedTypeExpr(this.visit(ctx._typeArgs));
  }

  visitParameterizedTypeExpr(
    ctx: P.ParameTypeExprContext
  ): AST.ParameterizedTypeExpr {
    const ty = this.visit(ctx._ty);
    const typeArgs = this.visitTypeExprList(ctx._typeArgs);
    return new AST.ParameterizedTypeExpr(ty, typeArgs);
  }

  visitMemberTypeExpr(ctx: P.MemberTypeExprContext): AST.MemberTypeExpr {}

  visitArrayTypeExpr(ctx: P.ArrayTypeExprContext): AST.ArrayTypeExpr {
    const ty = this.visit(ctx._ty);
    return new AST.ArrayTypeExpr(ty);
  }

  visitStructDefnTypeExpr(
    ctx: P.StructDefnTypeExprContext
  ): AST.StructDefnTypeExpr {
    const ty = this.visit(ctx._ty);
    return new AST.StructDefnTypeExpr(ty);
  }

  visitTupleDefnTypeExpr(
    ctx: P.TupleDefnTypeExprContext
  ): AST.TupleDefnTypeExpr {
  //#endregion

  //#region Common
  visitIdent(ctx: P.IdentContext): AST.Ident {
    return new AST.Ident(ctx.text);
  }

  visitParam(ctx: P.ParamContext): AST.Param {
    const name = this.visitIdent(ctx._name);
    const optional = ctx._optional ? true : false;
    const ty = ctx._ty ? this.visit(ctx._ty) : null;
    return new AST.Param(name, optional, ty);
  }

  visitField(ctx: P.FieldContext): AST.Field {
    const name = this.visitIdent(ctx._name);
    const value = this.visit(ctx._value);
    return new AST.Field(name, value);
  }

  visitArg(ctx: P.ArgContext): AST.Arg {
    const namedArg = ctx.namedArg();
    if (namedArg) {
      const name = this.visitIdent(namedArg._name);
      const value = this.visit(namedArg._value);
      return new AST.Arg(name, value);
    } else {
      const value = this.visit(ctx.expr()!);
      return new AST.Arg(null, value);
    }
  }

  visitIdentList(ctx: P.IdentListContext): AST.List<AST.Ident> {
    return new AST.List(ctx.ident().map((i) => this.visitIdent(i)));
  }

  visitParamList(ctx: P.ParamListContext): AST.List<AST.Param> {
    return new AST.List(ctx.param().map((p) => this.visitParam(p)));
  }

  visitTypeExprList(ctx: P.TypeExprListContext): AST.List<AST.TypeExpr> {
    return new AST.List(ctx.typeExpr().map((t) => this.visitTypeExpr(t)));
  }

  visitFieldList(ctx: P.FieldListContext): AST.List<AST.Field> {
    return new AST.List(ctx.field().map((f) => this.visitField(f)));
  }

  visitArgList(ctx: P.ArgListContext): AST.List<AST.Arg> {
    return new AST.List(ctx.arg().map((a) => this.visitArg(a)));
  }

  visitBlock(ctx: P.BlockContext): AST.Block {
    return new AST.Block(ctx._stmts.map((s) => this.visit(s)));
  }

  //#endregion Common
}

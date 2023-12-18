import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import * as Ast from '../ast';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserVisitor as ANTLRCWScriptParserVisitor } from '../grammar/CWScriptParserVisitor';
import { ParserRuleContext } from 'antlr4ts';

function assignOpFromText(text: string) {
  switch (text) {
    case '=':
      return Ast.AssignOp.EQ;
    case '+=':
      return Ast.AssignOp.PLUS_EQ;
    case '-=':
      return Ast.AssignOp.MINUS_EQ;
    case '*=':
      return Ast.AssignOp.MUL_EQ;
    case '/=':
      return Ast.AssignOp.DIV_EQ;

    default:
      throw new Error(`Invalid assign operator: ${text}`);
  }
}

export class AstBuilderVisitor
  extends AbstractParseTreeVisitor<Ast.AstNode>
  implements ANTLRCWScriptParserVisitor<Ast.AstNode>
{
  protected defaultResult(): Ast.AstNode {
    return Ast.EMPTY;
  }

  visitSourceFile(ctx: P.SourceFileContext): Ast.SourceFile {
    const stmts = new Ast.List(ctx._stmts.map((s) => this.stmt(s))).$(ctx);
    return new Ast.SourceFile(stmts).$(ctx);
  }

  visitDocComment(ctx: P.DocCommentContext): Ast.DocComment {
    return new Ast.DocComment(ctx.text!).$(ctx);
  }

  expr<T extends ParserRuleContext>(ctx: T): Ast.Expr {
    let res = this.visit(ctx);
    // if (!res.isExpr()) {
    //   throw new Error(`Expected expression, got ${res.constructor.name}`);
    // }
    return res as Ast.Expr;
  }

  typeExpr<T extends ParserRuleContext>(ctx: T): Ast.TypeExpr {
    let res = this.visit(ctx);
    // if (!res.isTypeExpr()) {
    //   throw new Error(`Expected type expression, got ${res.constructor.name}`);
    // }
    return res as Ast.TypeExpr;
  }

  stmt<T extends ParserRuleContext>(ctx: T): Ast.Stmt {
    let res = this.visit(ctx);
    // if (!res.isStmt()) {
    //   throw new Error(`Expected statement, got ${res.constructor.name}`);
    // }
    return res as Ast.Stmt;
  }

  //#region Statements
  visitBinding(ctx: P.BindingContext): Ast.Binding {
    const name = this.visitIdent(ctx._name);
    const alias = ctx._alias ? this.visitIdent(ctx._alias) : null;
    return new Ast.Binding(name, alias).$(ctx);
  }

  visitBraceBindingList(ctx: P.BraceBindingListContext): Ast.List<Ast.Binding> {
    return new Ast.List(ctx.binding().map((b) => this.visitBinding(b))).$(ctx);
  }

  visitBrackIdentList(ctx: P.BrackIdentListContext): Ast.List<Ast.Ident> {
    return new Ast.List(ctx.ident().map((i) => this.visitIdent(i))).$(ctx);
  }

  visitImportStmt(ctx: P.ImportStmtContext): Ast.ImportStmt {
    const bindings = this.visitBraceBindingList(ctx._bindings);
    const src = this.visitStringLit(ctx._src);
    return new Ast.ImportStmt(bindings, src).$(ctx);
  }
  visitExportStmt(ctx: P.ExportStmtContext): Ast.ExportStmt {
    const fields = this.visitBraceFieldList(ctx._fields);
    return new Ast.ExportStmt(fields).$(ctx);
  }

  visitLetIdentStmt(ctx: P.LetIdentStmtContext): Ast.LetIdentStmt {
    const name = this.visitIdent(ctx._name);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.expr(ctx._value);
    return new Ast.LetIdentStmt(name, ty, value).$(ctx);
  }

  visitLetTupleStmt(ctx: P.LetTupleStmtContext): Ast.LetTupleStmt {
    const names = this.visitBrackIdentList(ctx._names);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.expr(ctx._value);
    return new Ast.LetTupleStmt(names, ty, value).$(ctx);
  }

  visitLetStructStmt(ctx: P.LetStructStmtContext): Ast.LetStructStmt {
    const bindings = this.visitBraceBindingList(ctx._bindings);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.expr(ctx._value);
    return new Ast.LetStructStmt(bindings, ty, value).$(ctx);
  }

  visitConstIdentStmt(ctx: P.ConstIdentStmtContext): Ast.ConstIdentStmt {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.visit(ctx._value) as Ast.Expr;
    return new Ast.ConstIdentStmt(doc, exported, name, ty, value).$(ctx);
  }

  visitConstTupleStmt(ctx: P.ConstTupleStmtContext): Ast.ConstTupleStmt {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const names = this.visitBrackIdentList(ctx._names);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.visit(ctx._value) as Ast.Expr;
    return new Ast.ConstTupleStmt(doc, exported, names, ty, value).$(ctx);
  }

  visitConstStructStmt(ctx: P.ConstStructStmtContext): Ast.ConstStructStmt {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const bindings = this.visitBraceBindingList(ctx._bindings);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.visit(ctx._value) as Ast.Expr;
    return new Ast.ConstStructStmt(doc, exported, bindings, ty, value).$(ctx);
  }

  visitAssignStmt(ctx: P.AssignStmtContext): Ast.AssignStmt {
    const name = this.visitIdent(ctx._name);
    const op = ctx._assignOp.text ?? '=';
    const value = this.expr(ctx._value);
    return new Ast.AssignStmt(name, assignOpFromText(op), value).$(ctx);
  }

  visitMemberAssignStmt(ctx: P.MemberAssignStmtContext): Ast.MemberAssignStmt {
    const obj = this.visit(ctx._obj) as Ast.Expr;
    const name = this.visitIdent(ctx._memberName);
    const op = ctx._assignOp.text ?? '=';
    const value = this.expr(ctx._value);
    return new Ast.MemberAssignStmt(obj, name, assignOpFromText(op), value).$(
      ctx
    );
  }

  visitIndexAssignStmt(ctx: P.IndexAssignStmtContext): Ast.IndexAssignStmt {
    const obj = this.expr(ctx._obj);
    const index = this.expr(ctx._index);
    const op = ctx._assignOp.text ?? '=';
    const value = this.expr(ctx._value);
    return new Ast.IndexAssignStmt(obj, index, assignOpFromText(op), value).$(
      ctx
    );
  }

  visitTryCatchElseStmt(ctx: P.TryCatchElseStmtContext): Ast.TryCatchElseStmt {
    let tryCatchElseExpr = this.visitTryCatchElseExpr_(
      ctx.tryCatchElseExpr_()
    ).$(ctx);
    const { body, catchClauses, elseBody } = tryCatchElseExpr;
    return new Ast.TryCatchElseStmt(body, catchClauses, elseBody).$(ctx);
  }

  visitIfStmt(ctx: P.IfStmtContext): Ast.IfStmt {
    const ifExpr = this.visitIfExpr_(ctx.ifExpr_());
    return new Ast.IfStmt(ifExpr.pred, ifExpr.thenBody, ifExpr.elseBody).$(ctx);
  }

  visitReturnStmt(ctx: P.ReturnStmtContext): Ast.ReturnStmt {
    const returnExpr = this.visitReturnExpr_(ctx.returnExpr_());
    return new Ast.ReturnStmt(returnExpr.value).$(ctx);
  }

  visitFailStmt(ctx: P.FailStmtContext): Ast.FailStmt {
    const failExpr = this.visitFailExpr_(ctx.failExpr_());
    return new Ast.FailStmt(failExpr.value).$(ctx);
  }

  visitForIdentStmt(ctx: P.ForIdentStmtContext): Ast.ForIdentStmt {
    const name = this.visitIdent(ctx._name);
    const iter = this.expr(ctx._iter);
    const body = this.visitBlock(ctx._body);
    return new Ast.ForIdentStmt(name, iter, body).$(ctx);
  }

  visitForTupleStmt(ctx: P.ForTupleStmtContext): Ast.ForTupleStmt {
    const names = this.visitIdentList(ctx._names);
    const iter = this.expr(ctx._iter);
    const body = this.visitBlock(ctx._body);
    return new Ast.ForTupleStmt(names, iter, body).$(ctx);
  }

  visitForStructStmt(ctx: P.ForStructStmtContext): Ast.ForStructStmt {
    const bindings = this.visitBraceBindingList(ctx._bindings);
    const iter = this.expr(ctx._iter);
    const body = this.visitBlock(ctx._body);
    return new Ast.ForStructStmt(bindings, iter, body).$(ctx);
  }

  visitExecStmt(ctx: P.ExecStmtContext): Ast.ExecStmt {
    const value = this.expr(ctx._value);
    return new Ast.ExecStmt(value).$(ctx);
  }

  visitInstantiateStmt(ctx: P.InstantiateStmtContext): Ast.InstantiateStmt {
    const value = this.expr(ctx._value);
    return new Ast.InstantiateStmt(value).$(ctx);
  }

  visitEmitStmt(ctx: P.EmitStmtContext): Ast.EmitStmt {
    const value = this.expr(ctx._value);
    return new Ast.EmitStmt(value).$(ctx);
  }

  visitExprStmt(ctx: P.ExprStmtContext): Ast.ExprStmt {
    const expr = this.expr(ctx.expr());
    const semi = ctx._semi ? true : false;
    return new Ast.ExprStmt(expr, semi).$(ctx);
  }
  //#endregion Statements

  visitReturnExpr_(ctx: P.ReturnExpr_Context): Ast.ReturnExpr {
    const value = this.expr(ctx._value);
    return new Ast.ReturnExpr(value).$(ctx);
  }

  visitFailExpr_(ctx: P.FailExpr_Context): Ast.FailExpr {
    const value = this.expr(ctx._value);
    return new Ast.FailExpr(value).$(ctx);
  }

  visitIfExpr_(ctx: P.IfExpr_Context): Ast.IfExpr {
    const pred = this.expr(ctx._pred);
    const thenBody = this.visitBlockOrExpr(ctx._thenBody);
    const elseBody = ctx._elseBody
      ? this.visitBlockOrExpr(ctx._elseBody)
      : null;
    return new Ast.IfExpr(pred, thenBody, elseBody).$(ctx);
  }

  visitTryCatchElseExpr_(
    ctx: P.TryCatchElseExpr_Context
  ): Ast.TryCatchElseExpr {
    const body = this.visitBlock(ctx._body);
    const catchClauses = ctx._catchClauses
      ? new Ast.List(ctx._catchClauses.map((s) => this.visitCatchClause(s))).$(
          ctx
        )
      : Ast.List.empty<Ast.CatchClause>().$(ctx);
    const elseBody = ctx._elseBody ? this.visitBlock(ctx._elseBody) : null;
    return new Ast.TryCatchElseExpr(body, catchClauses, elseBody).$(ctx);
  }

  visitCatchClause(ctx: P.CatchClauseContext): Ast.CatchClause {
    const ty = this.typeExpr(ctx._ty);
    const body = this.visitBlock(ctx._body);
    return new Ast.CatchClause(ty, body).$(ctx);
  }

  //#region Definitions
  visitContractDefn(ctx: P.ContractDefnContext): Ast.ContractDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const base = ctx._base ? this.typeExpr(ctx._base) : null;
    const interfaces = ctx._interfaces
      ? this.visitTypeExprList(ctx._interfaces)
      : Ast.List.empty<Ast.TypeExpr>().$(ctx);
    const body = this.visitBlock(ctx._body);
    return new Ast.ContractDefn(doc, exported, name, base, interfaces, body).$(
      ctx
    );
  }

  visitInterfaceDefn(ctx: P.InterfaceDefnContext): Ast.InterfaceDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const extend = ctx._baseInterfaces
      ? this.visitTypeExprList(ctx._baseInterfaces)
      : Ast.List.empty<Ast.TypeExpr>().$(ctx);
    const body = this.visitBlock(ctx._body);
    return new Ast.InterfaceDefn(doc, exported, name, extend, body).$(ctx);
  }

  visitStructDefnBrace(ctx: P.StructDefnBraceContext): Ast.StructDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    const fields = this.visitBraceParamList(ctx._fields);
    return new Ast.StructDefn(doc, exported, name, typeParams, fields).$(ctx);
  }

  visitStructDefnParen(ctx: P.StructDefnParenContext): Ast.StructDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    const fields = this.visitParenParamList(ctx._fields);
    return new Ast.StructDefn(doc, exported, name, typeParams, fields).$(ctx);
  }

  visitTupleDefn(ctx: P.TupleDefnContext): Ast.TupleDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    const elements = this.visitBrackTypeExprList(ctx._elements);
    return new Ast.TupleDefn(doc, exported, name, typeParams, elements).$(ctx);
  }

  visitUnitDefn(ctx: P.UnitDefnContext): Ast.UnitDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    return new Ast.UnitDefn(doc, exported, name, typeParams).$(ctx);
  }

  visitEnumDefn(ctx: P.EnumDefnContext): Ast.EnumDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    const variants = ctx._variants
      ? this.visitEnumVariantDefnList(ctx._variants)
      : Ast.List.empty<Ast.EnumVariantDefn>().$(ctx);
    return new Ast.EnumDefn(doc, exported, name, typeParams, variants).$(ctx);
  }

  visitEnumVariantDefnList(
    ctx: P.EnumVariantDefnListContext
  ): Ast.List<Ast.EnumVariantDefn> {
    return new Ast.List(
      ctx.enumVariantDefn().map((v) => this.visit(v) as Ast.EnumVariantDefn)
    ).$(ctx);
  }

  visitEnumVariantStructDefnBrace(
    ctx: P.EnumVariantStructDefnBraceContext
  ): Ast.EnumVariantStructDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const fields = this.visitBraceParamList(ctx._fields);
    return new Ast.EnumVariantStructDefn(doc, name, fields).$(ctx);
  }

  visitEnumVariantStructDefnParen(
    ctx: P.EnumVariantStructDefnParenContext
  ): Ast.EnumVariantStructDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const fields = this.visitParenParamList(ctx._fields);
    return new Ast.EnumVariantStructDefn(doc, name, fields).$(ctx);
  }

  visitEnumVariantTupleDefn(
    ctx: P.EnumVariantTupleDefnContext
  ): Ast.EnumVariantTupleDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const elements = this.visitBrackTypeExprList(ctx._elements);
    return new Ast.EnumVariantTupleDefn(doc, name, elements).$(ctx);
  }

  visitEnumVariantUnitDefn(
    ctx: P.EnumVariantUnitDefnContext
  ): Ast.EnumVariantUnitDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    return new Ast.EnumVariantUnitDefn(doc, name).$(ctx);
  }

  visitTypeAliasDefn(ctx: P.TypeAliasDefnContext): Ast.TypeAliasDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    const ty = this.typeExpr(ctx._ty);
    return new Ast.TypeAliasDefn(doc, exported, name, typeParams, ty).$(ctx);
  }

  visitFnDefn(ctx: P.FnDefnContext): Ast.FnDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const typeParams = ctx._typeParams
      ? this.visitBrackTypeParamList(ctx._typeParams)
      : Ast.List.empty<Ast.TypeVar>().$(ctx);
    const params = this.visitParenParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.FnDefn(
      doc,
      exported,
      name,
      fallible,
      typeParams,
      params,
      returnTy,
      body
    ).$(ctx);
  }

  visitInstantiateDefn(ctx: P.InstantiateDefnContext): Ast.InstantiateDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const fallible = ctx._fallible ? true : false;
    const params = this.visitParenParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.InstantiateDefn(doc, fallible, params, returnTy, body).$(
      ctx
    );
  }

  visitExecDefn(ctx: P.ExecDefnContext): Ast.ExecDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const params = this.visitParenParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.ExecDefn(
      doc,
      name,
      fallible,
      false,
      params,
      returnTy,
      body
    ).$(ctx);
  }

  visitExecTupleDefn(ctx: P.ExecTupleDefnContext): Ast.ExecDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const params = this.visitTupleParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.ExecDefn(
      doc,
      name,
      fallible,
      true,
      params,
      returnTy,
      body
    ).$(ctx);
  }

  visitQueryDefn(ctx: P.QueryDefnContext): Ast.QueryDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const params = this.visitParenParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.QueryDefn(
      doc,
      name,
      fallible,
      false,
      params,
      returnTy,
      body
    ).$(ctx);
  }

  visitQueryTupleDefn(ctx: P.QueryTupleDefnContext): Ast.QueryDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const params = this.visitTupleParamList(ctx._params);
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.QueryDefn(
      doc,
      name,
      fallible,
      true,
      params,
      returnTy,
      body
    ).$(ctx);
  }

  visitErrorDefn(ctx: P.ErrorDefnContext): Ast.ErrorDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const params = this.visitParenParamList(ctx._params);
    return new Ast.ErrorDefn(doc, exported, name, params).$(ctx);
  }

  visitEventDefn(ctx: P.EventDefnContext): Ast.EventDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const exported = ctx._exported ? true : false;
    const name = this.visitIdent(ctx._name);
    const params = this.visitParenParamList(ctx._params);
    return new Ast.EventDefn(doc, exported, name, params).$(ctx);
  }

  visitStateBlockDefn(ctx: P.StateBlockDefnContext): Ast.StateBlockDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const stateFields = ctx._stateFields.map((f) => this.visitStateDefn(f));
    return new Ast.StateBlockDefn(doc, new Ast.List(stateFields).$(ctx)).$(ctx);
  }

  visitStateDefn(
    ctx: P.StateDefnContext
  ): Ast.StateItemDefn | Ast.StateMapDefn {
    let defn = ctx.stateItemDefn() ?? ctx.stateMapDefn();
    return this.visit(defn!) as Ast.StateItemDefn | Ast.StateMapDefn;
  }

  visitStateItemDefn(ctx: P.StateItemDefnContext): Ast.StateItemDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const ty = this.typeExpr(ctx._ty);
    return new Ast.StateItemDefn(doc, name, ty).$(ctx);
  }

  visitStateMapDefn(ctx: P.StateMapDefnContext): Ast.StateMapDefn {
    const doc = ctx._doc ? this.visitDocComment(ctx._doc) : null;
    const name = this.visitIdent(ctx._name);
    const indexTy = this.typeExpr(ctx._indexTy);
    const ty = this.typeExpr(ctx._ty);
    return new Ast.StateMapDefn(doc, name, indexTy, ty).$(ctx);
  }

  //#endregion Definitions

  //#region Expressions
  visitDotExpr(ctx: P.DotExprContext): Ast.DotExpr {
    const obj = this.expr(ctx.expr());
    const memberName = this.visitIdent(ctx._memberName);
    return new Ast.DotExpr(obj, memberName).$(ctx);
  }

  visitCallExpr(ctx: P.CallExprContext): Ast.CallExpr {
    const fn = this.expr(ctx.expr());
    const fallible = ctx._fallible ? true : false;
    const typeArgs = ctx._typeArgs
      ? this.visitBrackTypeExprList(ctx._typeArgs)
      : Ast.List.empty<Ast.TypeExpr>().$(ctx);
    const args = new Ast.List(ctx._args.map((a) => this.visitArg(a))).$(ctx);
    return new Ast.CallExpr(fn, fallible, typeArgs, args).$(ctx);
  }

  visitIndexExpr(ctx: P.IndexExprContext): Ast.IndexExpr {
    const [obj, index] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.IndexExpr(obj, index).$(ctx);
  }

  visitExistsExpr(ctx: P.ExistsExprContext): Ast.ExistsExpr {
    const expr = this.expr(ctx.expr());
    return new Ast.ExistsExpr(expr).$(ctx);
  }

  visitMulExpr(ctx: P.MulExprContext): Ast.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.BinOpExpr(lhs, ctx._op.text! as Ast.Op, rhs).$(ctx);
  }

  visitAddExpr(ctx: P.AddExprContext): Ast.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.BinOpExpr(lhs, ctx._op.text! as Ast.Op, rhs).$(ctx);
  }

  visitCompExpr(ctx: P.CompExprContext): Ast.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.BinOpExpr(lhs, ctx._op.text! as Ast.Op, rhs).$(ctx);
  }

  visitQueryExpr(ctx: P.QueryExprContext): Ast.QueryExpr {
    const expr = this.expr(ctx.expr());
    return new Ast.QueryExpr(expr).$(ctx);
  }

  visitShortTryExpr(ctx: P.ShortTryExprContext): Ast.ShortTryExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.ShortTryExpr(lhs, rhs).$(ctx);
  }

  visitIsExpr(ctx: P.IsExprContext): Ast.IsExpr {
    const [lhs, rhs] = [this.expr(ctx.expr()), this.typeExpr(ctx._ty)];
    const negative = ctx._negative ? true : false;
    return new Ast.IsExpr(negative, lhs, rhs).$(ctx);
  }

  visitInExpr(ctx: P.InExprContext): Ast.InExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    const negative = ctx._negative ? true : false;
    return new Ast.InExpr(negative, lhs, rhs).$(ctx);
  }

  visitEqExpr(ctx: P.EqExprContext): Ast.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.BinOpExpr(lhs, ctx._op.text! as Ast.Op, rhs).$(ctx);
  }

  visitNotExpr(ctx: P.NotExprContext): Ast.NotExpr {
    const expr = this.expr(ctx.expr());
    return new Ast.NotExpr(expr).$(ctx);
  }

  visitAndExpr(ctx: P.AndExprContext): Ast.AndExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.AndExpr(lhs, rhs).$(ctx);
  }

  visitOrExpr(ctx: P.OrExprContext): Ast.OrExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new Ast.OrExpr(lhs, rhs).$(ctx);
  }

  visitIfExpr(ctx: P.IfExprContext): Ast.IfExpr {
    return this.visitIfExpr_(ctx.ifExpr_()).$(ctx);
  }

  visitTryCatchElseExpr(ctx: P.TryCatchElseExprContext): Ast.TryCatchElseExpr {
    return this.visitTryCatchElseExpr_(ctx.tryCatchElseExpr_()).$(ctx);
  }

  visitMapEntry(ctx: P.MapEntryContext): Ast.MapEntry {
    const key = this.expr(ctx.expr(0));
    const value = this.expr(ctx.expr(1));
    return new Ast.MapEntry(key, value).$(ctx);
  }

  visitMapExpr(ctx: P.MapExprContext): Ast.MapExpr {
    return this.visitMapExpr_(ctx.mapExpr_()).$(ctx);
  }

  visitMapExpr_(ctx: P.MapExpr_Context): Ast.MapExpr {
    const entries = new Ast.List<Ast.MapEntry>(
      ctx._entries.map((e) => this.visitMapEntry(e))
    ).$(ctx);
    return new Ast.MapExpr(entries).$(ctx);
  }

  visitBlockClosureExpr(ctx: P.BlockClosureExprContext): Ast.ClosureExpr {
    const params = this.visitBarsParamList(ctx._params);
    const fallible = ctx._fallible ? true : false;
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new Ast.ClosureExpr(params, fallible, returnTy, body).$(ctx);
  }

  visitExprClosureExpr(ctx: P.ExprClosureExprContext): Ast.ClosureExpr {
    const params = this.visitBarsParamList(ctx._params);
    const fallible = ctx._fallible ? true : false;
    const exprStmt = this.visitExprStmt(ctx._body);
    return new Ast.ClosureExpr(
      params,
      fallible,
      null,
      new Ast.Block(new Ast.List([exprStmt]).$(ctx._body)).$(ctx._body)
    ).$(ctx);
  }

  visitStructExpr(ctx: P.StructExprContext): Ast.StructExpr {
    return this.visitStructExpr_(ctx.structExpr_()).$(ctx);
  }

  visitStructExpr_(ctx: P.StructExpr_Context): Ast.StructExpr {
    let ty = this.typeExpr(ctx._ty).$(ctx);
    let fields = this.visitBraceFieldList(ctx._fields);
    return new Ast.StructExpr(ty, fields).$(ctx);
  }

  visitTupleExpr(ctx: P.TupleExprContext): Ast.TupleExpr {
    return this.visitTupleExpr_(ctx.tupleExpr_()).$(ctx);
  }

  visitTupleExpr_(ctx: P.TupleExpr_Context): Ast.TupleExpr {
    let elements = new Ast.List(ctx._elements.map((e) => this.expr(e))).$(ctx);
    return new Ast.TupleExpr(elements).$(ctx);
  }

  visitLiteralExpr(ctx: P.LiteralExprContext): Ast.Literal {
    return this.visit(ctx.literal()).$(ctx) as Ast.Literal;
  }

  visitIdentExpr(ctx: P.IdentExprContext): Ast.IdentExpr {
    const ident = this.visitIdent(ctx.ident());
    return new Ast.IdentExpr(ident).$(ctx);
  }

  visitGroupedExpr(ctx: P.GroupedExprContext): Ast.GroupedExpr {
    return new Ast.GroupedExpr(this.expr(ctx.expr())).$(ctx);
  }

  //#endregion Expressions

  //#region Literals
  visitStringLit(ctx: P.StringLitContext): Ast.StringLit {
    return new Ast.StringLit(ctx.text!).$(ctx);
  }

  visitIntLit(ctx: P.IntLitContext): Ast.IntLit {
    return new Ast.IntLit(ctx.text!).$(ctx);
  }

  visitDecLit(ctx: P.DecLitContext): Ast.DecLit {
    return new Ast.DecLit(ctx.text!).$(ctx);
  }

  visitBoolLit(ctx: P.BoolLitContext): Ast.BoolLit {
    return new Ast.BoolLit(ctx.text! === 'true').$(ctx);
  }

  visitNoneLit(ctx: P.NoneLitContext): Ast.NoneLit {
    return new Ast.NoneLit().$(ctx);
  }
  //#endregion Literals

  //#region Type Expressions
  visitGroupedTypeExpr(ctx: P.GroupedTypeExprContext): Ast.GroupedTypeExpr {
    return new Ast.GroupedTypeExpr(this.typeExpr(ctx.typeExpr())).$(ctx);
  }

  visitParameterizedTypeExpr(
    ctx: P.ParameterizedTypeExprContext
  ): Ast.ParamzdTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    const typeArgs = this.visitTypeExprList(ctx._typeArgs);
    return new Ast.ParamzdTypeExpr(ty, typeArgs).$(ctx);
  }

  visitMemberTypeExpr(ctx: P.MemberTypeExprContext): Ast.MemberTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    const memberName = this.visitIdent(ctx._memberName);
    return new Ast.MemberTypeExpr(ty, memberName).$(ctx);
  }

  visitTupleTypeExpr(ctx: P.TupleTypeExprContext): Ast.TupleTypeExpr {
    const elements = this.visitBrackTypeExprList(ctx._elements);
    return new Ast.TupleTypeExpr(elements).$(ctx);
  }

  visitArrayTypeExpr(ctx: P.ArrayTypeExprContext): Ast.ArrayTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    return new Ast.ArrayTypeExpr(ty, this.visitIntLit(ctx._size)).$(ctx);
  }

  visitMapTypeExpr(ctx: P.MapTypeExprContext): Ast.MapTypeExpr {
    const keyTy = this.typeExpr(ctx.typeExpr(0));
    const valueTy = this.typeExpr(ctx.typeExpr(1));
    return new Ast.MapTypeExpr(keyTy, valueTy).$(ctx);
  }

  visitStructDefnTypeExpr(
    ctx: P.StructDefnTypeExprContext
  ): Ast.StructDefnTypeExpr {
    const ty = this.typeExpr(ctx.structDefn()) as any as Ast.StructDefn;
    return new Ast.StructDefnTypeExpr(ty).$(ctx);
  }

  visitTupleDefnTypeExpr(
    ctx: P.TupleDefnTypeExprContext
  ): Ast.TupleDefnTypeExpr {
    const ty = this.visitTupleDefn(ctx.tupleDefn());
    return new Ast.TupleDefnTypeExpr(ty).$(ctx);
  }

  visitUnitDefnTypeExpr(ctx: P.UnitDefnTypeExprContext): Ast.UnitDefnTypeExpr {
    const ty = this.visitUnitDefn(ctx.unitDefn());
    return new Ast.UnitDefnTypeExpr(ty).$(ctx);
  }

  visitEnumDefnTypeExpr(ctx: P.EnumDefnTypeExprContext): Ast.EnumDefnTypeExpr {
    const ty = this.visitEnumDefn(ctx.enumDefn());
    return new Ast.EnumDefnTypeExpr(ty).$(ctx);
  }

  visitOptionTypeExpr(ctx: P.OptionTypeExprContext): Ast.OptionTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    return new Ast.OptionTypeExpr(ty).$(ctx);
  }

  visitIdentTypeExpr(ctx: P.IdentTypeExprContext): Ast.IdentTypeExpr {
    const ident = this.visitIdent(ctx.ident());
    return new Ast.IdentTypeExpr(ident).$(ctx);
  }

  visitTypeVarExpr(ctx: P.TypeVarExprContext): Ast.TypeVarExpr {
    const typeVar = this.visitTypeVar(ctx.typeVar());
    return new Ast.TypeVarExpr(typeVar).$(ctx);
  }

  visitTypeVar(ctx: P.TypeVarContext): Ast.TypeVar {
    return new Ast.TypeVar(ctx.text!).$(ctx);
  }

  // #endregion

  //#region Common
  visitIdent(ctx: P.IdentContext): Ast.Ident {
    return new Ast.Ident(ctx.text).$(ctx);
  }

  visitParam(ctx: P.ParamContext): Ast.Param {
    const name = this.visitIdent(ctx._name);
    const optional = ctx._optional ? true : false;
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    return new Ast.Param(name, optional, ty).$(ctx);
  }

  visitField(ctx: P.FieldContext): Ast.Field {
    const name = this.visitIdent(ctx._name);
    const value = ctx._value ? this.expr(ctx._value) : null;
    return new Ast.Field(name, value).$(ctx);
  }

  visitArg(ctx: P.ArgContext): Ast.Arg {
    const namedArg = ctx.namedArg();
    if (namedArg) {
      const name = this.visitIdent(namedArg._name);
      const value = this.expr(namedArg._value);
      return new Ast.Arg(name, value).$(ctx);
    } else {
      const value = this.expr(ctx.expr()!);
      return new Ast.Arg(null, value).$(ctx);
    }
  }

  visitIdentList(ctx: P.IdentListContext): Ast.List<Ast.Ident> {
    return new Ast.List(ctx.ident().map((i) => this.visitIdent(i))).$(ctx);
  }

  visitParenParamList(ctx: P.ParenParamListContext): Ast.List<Ast.Param> {
    return new Ast.List(ctx.param().map((p) => this.visitParam(p))).$(ctx);
  }

  visitTupleParamList(ctx: P.TupleParamListContext): Ast.List<Ast.Param> {
    return new Ast.List(ctx.param().map((p) => this.visitParam(p))).$(ctx);
  }

  visitBraceParamList(ctx: P.BraceParamListContext): Ast.List<Ast.Param> {
    return new Ast.List(ctx.param().map((p) => this.visitParam(p))).$(ctx);
  }

  visitBarsParamList(ctx: P.BarsParamListContext): Ast.List<Ast.Param> {
    return new Ast.List(ctx.param().map((p) => this.visitParam(p))).$(ctx);
  }

  visitBrackTypeParamList(
    ctx: P.BrackTypeParamListContext
  ): Ast.List<Ast.TypeVar> {
    return new Ast.List(ctx.typeVar().map((t) => this.visitTypeVar(t))).$(ctx);
  }

  visitBrackTypeExprList(
    ctx: P.BrackTypeExprListContext
  ): Ast.List<Ast.TypeExpr> {
    return new Ast.List(ctx.typeExpr().map((t) => this.typeExpr(t))).$(ctx);
  }

  visitBraceFieldList(ctx: P.BraceFieldListContext): Ast.List<Ast.Field> {
    return new Ast.List(ctx.field().map((f) => this.visitField(f))).$(ctx);
  }

  visitTypeExprList(ctx: P.TypeExprListContext): Ast.List<Ast.TypeExpr> {
    return new Ast.List(ctx.typeExpr().map((t) => this.typeExpr(t))).$(ctx);
  }

  visitBlock(ctx: P.BlockContext): Ast.Block {
    const stmts = new Ast.List<Ast.Stmt>(ctx._stmts.map((s) => this.stmt(s))).$(
      ctx
    );
    return new Ast.Block(stmts).$(ctx);
  }

  visitBlockOrExpr(ctx: P.BlockOrExprContext): Ast.Block {
    let block = ctx.block();
    let expr = ctx.expr();
    if (block) {
      return this.visitBlock(block);
    } else if (expr) {
      return new Ast.Block(
        new Ast.List<Ast.Stmt>([
          new Ast.ExprStmt(this.expr(expr), false).$(ctx),
        ]).$(ctx)
      ).$(ctx);
    }
    throw new Error('Unreachable');
  }

  //#endregion Common
}

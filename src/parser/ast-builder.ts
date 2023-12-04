import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import * as AST from '../ast';
import * as P from '../grammar/CWScriptParser';
import { CWScriptParserVisitor as ANTLRCWScriptParserVisitor } from '../grammar/CWScriptParserVisitor';
import { ParserRuleContext } from 'antlr4ts';

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
    throw new Error('Visitor not implemented');
  }

  visitSourceFile(ctx: P.SourceFileContext): AST.SourceFile {
    const stmts = ctx._stmts.map((s) => this.stmt(s));
    return new AST.SourceFile(stmts).$(ctx);
  }

  expr<T extends ParserRuleContext>(ctx: T): AST.Expr {
    let res = this.visit(ctx);
    if (!res.isExpr()) {
      throw new Error(`Expected expression, got ${res.constructor.name}`);
    }
    return res;
  }

  typeExpr<T extends ParserRuleContext>(ctx: T): AST.TypeExpr {
    let res = this.visit(ctx);
    if (!res.isTypeExpr()) {
      throw new Error(`Expected type expression, got ${res.constructor.name}`);
    }
    return res;
  }

  stmt<T extends ParserRuleContext>(ctx: T): AST.Stmt {
    let res = this.visit(ctx);
    if (!res.isStmt()) {
      throw new Error(`Expected statement, got ${res.constructor.name}`);
    }
    return res;
  }

  //#region Statements
  visitImportStmt(ctx: P.ImportStmtContext): AST.ImportStmt {
    const items = ctx._items ? this.visitIdentList(ctx._items) : null;
    const src = ctx._src.text!;
    return new AST.ImportStmt(items, src).$(ctx);
  }

  visitLetStmt(ctx: P.LetStmtContext): AST.LetStmt {
    const binding = this.visit(
      ctx._binding as P.Binding_Context
    ) as AST.Binding;
    const value = this.expr(ctx._value);
    return new AST.LetStmt(binding, value).$(ctx);
  }

  visitConstStmt(ctx: P.ConstStmtContext): AST.ConstStmt {
    const name = this.visitIdent(ctx._name);
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    const value = this.visit(ctx._value) as AST.Expr;
    return new AST.ConstStmt(name, ty, value).$(ctx);
  }

  visitAssignStmt(ctx: P.AssignStmtContext): AST.AssignStmt {
    const name = this.visitIdent(ctx._name);
    const op = ctx._assignOp.text ?? '=';
    const value = this.expr(ctx._value);
    return new AST.AssignStmt(name, assignOpFromText(op), value).$(ctx);
  }

  visitMemberAssignStmt(ctx: P.MemberAssignStmtContext): AST.MemberAssignStmt {
    const obj = this.visit(ctx._obj) as AST.Expr;
    const name = this.visitIdent(ctx._memberName);
    const op = ctx._assignOp.text ?? '=';
    const value = this.expr(ctx._value);
    return new AST.MemberAssignStmt(obj, name, assignOpFromText(op), value).$(
      ctx
    );
  }

  visitIndexAssignStmt(ctx: P.IndexAssignStmtContext): AST.IndexAssignStmt {
    const obj = this.expr(ctx._obj);
    const index = this.expr(ctx._index);
    const op = ctx._assignOp.text ?? '=';
    const value = this.expr(ctx._value);
    return new AST.IndexAssignStmt(obj, index, assignOpFromText(op), value).$(
      ctx
    );
  }

  visitReturnStmt(ctx: P.ReturnStmtContext): AST.ReturnStmt {
    const value = this.expr(ctx._value);
    return new AST.ReturnStmt(value).$(ctx);
  }

  visitFailStmt(ctx: P.FailStmtContext): AST.FailStmt {
    const value = this.expr(ctx._value);
    return new AST.FailStmt(value).$(ctx);
  }

  visitForStmt(ctx: P.ForStmtContext): AST.ForStmt {
    const binding = this.visit(ctx._binding) as AST.Binding;
    const iter = this.expr(ctx._iter);
    const body = this.visitBlock(ctx._body);
    return new AST.ForStmt(binding, iter, body).$(ctx);
  }

  visitExecStmt(ctx: P.ExecStmtContext): AST.ExecStmt {
    const value = this.expr(ctx._value);
    return new AST.ExecStmt(value).$(ctx);
  }

  visitInstantiateStmt(ctx: P.InstantiateStmtContext): AST.InstantiateStmt {
    const value = this.expr(ctx._value);
    return new AST.InstantiateStmt(value).$(ctx);
  }

  visitEmitStmt(ctx: P.EmitStmtContext): AST.EmitStmt {
    const value = this.expr(ctx._value);
    return new AST.EmitStmt(value).$(ctx);
  }
  //#endregion Statements

  visitIdentBinding(ctx: P.IdentBindingContext): AST.IdentBinding {
    return new AST.IdentBinding(
      this.visitIdent(ctx._name),
      ctx._ty ? this.typeExpr(ctx._ty) : null
    ).$(ctx);
  }

  visitTupleBinding(ctx: P.TupleBindingContext): AST.TupleBinding {
    const names = this.visitIdentList(ctx._names);
    return new AST.TupleBinding(names).$(ctx);
  }

  visitStructBinding(ctx: P.StructBindingContext): AST.StructBinding {
    const names = this.visitIdentList(ctx._names);
    return new AST.StructBinding(names).$(ctx);
  }

  visitIfExpr_(ctx: P.IfExpr_Context): AST.IfExpr {
    const pred = this.expr(ctx._pred);
    const thenBody = this.visitBlock(ctx._thenBody);
    const elseBody = ctx._elseBody ? this.visitBlock(ctx._elseBody) : null;
    return new AST.IfExpr(pred, thenBody, elseBody).$(ctx);
  }

  visitTryCatchElseExpr_(
    ctx: P.TryCatchElseExpr_Context
  ): AST.TryCatchElseExpr {
    const body = this.visitBlock(ctx._body);
    const catchClauses = ctx._catchClauses
      ? new AST.List(ctx._catchClauses.map((s) => this.visitCatchClause(s)))
      : null;
    const elseBody = ctx._elseBody ? this.visitBlock(ctx._elseBody) : null;
    return new AST.TryCatchElseExpr(body, catchClauses, elseBody).$(ctx);
  }

  visitCatchClause(ctx: P.CatchClauseContext): AST.CatchClause {
    const ty = this.typeExpr(ctx._ty);
    const body = this.visitBlock(ctx._body);
    return new AST.CatchClause(ty, body).$(ctx);
  }

  //#region Definitions
  visitContractDefn(ctx: P.ContractDefnContext): AST.ContractDefn {
    const name = this.visitIdent(ctx._name);
    const base = ctx._base ? this.typeExpr(ctx._base) : null;
    const interfaces = ctx._interfaces
      ? this.visitTypeExprList(ctx._interfaces)
      : null;
    const body = this.visitBlock(ctx._body);
    return new AST.ContractDefn(name, base, interfaces, body).$(ctx);
  }

  visitInterfaceDefn(ctx: P.InterfaceDefnContext): AST.InterfaceDefn {
    const name = this.visitIdent(ctx._name);
    const extend = ctx._baseInterfaces
      ? this.visitTypeExprList(ctx._baseInterfaces)
      : null;
    const body = this.visitBlock(ctx._body);
    return new AST.InterfaceDefn(name, extend, body).$(ctx);
  }

  visitStructDefn(ctx: P.StructDefnContext): AST.StructDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const fields = this.visitParamList(ctx._fields);
    return new AST.StructDefn(name, typeParams, fields).$(ctx);
  }

  visitTupleDefn(ctx: P.TupleDefnContext): AST.TupleDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const elements = ctx._elements
      ? this.visitTypeExprList(ctx._elements)
      : AST.List.empty<AST.TypeExpr>();
    return new AST.TupleDefn(name, typeParams, elements).$(ctx);
  }

  visitUnitDefn(ctx: P.UnitDefnContext): AST.UnitDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    return new AST.UnitDefn(name, typeParams).$(ctx);
  }

  visitEnumDefn(ctx: P.EnumDefnContext): AST.EnumDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : AST.List.empty<AST.TypeVar>();
    const variants = ctx._variants
      ? this.visitEnumVariantDefnList(ctx._variants)
      : AST.List.empty<AST.EnumVariantDefn>();
    return new AST.EnumDefn(name, typeParams, variants).$(ctx);
  }

  visitEnumVariantDefnList(
    ctx: P.EnumVariantDefnListContext
  ): AST.List<AST.EnumVariantDefn> {
    return new AST.List(
      ctx.enumVariantDefn().map((v) => this.visit(v) as AST.EnumVariantDefn)
    ).$(ctx);
  }

  visitEnumVariantStructDefn(
    ctx: P.EnumVariantStructDefnContext
  ): AST.EnumVariantStructDefn {
    const name = this.visitIdent(ctx._name);
    const fields = this.visitParamList(ctx._fields);
    return new AST.EnumVariantStructDefn(name, fields).$(ctx);
  }

  visitEnumVariantTupleDefn(
    ctx: P.EnumVariantTupleDefnContext
  ): AST.EnumVariantTupleDefn {
    const name = this.visitIdent(ctx._name);
    const elements = ctx._elements
      ? this.visitTypeExprList(ctx._elements)
      : null;
    return new AST.EnumVariantTupleDefn(name, elements).$(ctx);
  }

  visitTypeAliasDefn(ctx: P.TypeAliasDefnContext): AST.TypeAliasDefn {
    const name = this.visitIdent(ctx._name);
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const ty = this.typeExpr(ctx._ty);
    return new AST.TypeAliasDefn(name, typeParams, ty).$(ctx);
  }

  visitFnDefn(ctx: P.FnDefnContext): AST.FnDefn {
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const typeParams = ctx._typeParams
      ? this.visitTypeVarList(ctx._typeParams)
      : null;
    const params = ctx._params ? this.visitParamList(ctx._params) : null;
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.FnDefn(name, fallible, typeParams, params, returnTy, body).$(
      ctx
    );
  }

  visitInstantiateDefn(ctx: P.InstantiateDefnContext): AST.InstantiateDefn {
    const fallible = ctx._fallible ? true : false;
    const params = ctx._params ? this.visitParamList(ctx._params) : null;
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.InstantiateDefn(fallible, params, returnTy, body).$(ctx);
  }

  visitExecDefn(ctx: P.ExecDefnContext): AST.ExecDefn {
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const params = ctx._params ? this.visitParamList(ctx._params) : null;
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.ExecDefn(name, fallible, params, returnTy, body).$(ctx);
  }

  visitQueryDefn(ctx: P.QueryDefnContext): AST.QueryDefn {
    const name = this.visitIdent(ctx._name);
    const fallible = ctx._fallible ? true : false;
    const params = ctx._params ? this.visitParamList(ctx._params) : null;
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.QueryDefn(name, fallible, params, returnTy, body).$(ctx);
  }

  //#endregion Definitions

  //#region Expressions
  visitDotExpr(ctx: P.DotExprContext): AST.DotExpr {
    const obj = this.expr(ctx.expr());
    const memberName = this.visitIdent(ctx._memberName);
    return new AST.DotExpr(obj, memberName).$(ctx);
  }

  visitCallExpr(ctx: P.CallExprContext): AST.CallExpr {
    const fn = this.expr(ctx.expr());
    const fallible = ctx._fallible ? true : false;
    const typeArgs = ctx._typeArgs
      ? this.visitTypeExprList(ctx._typeArgs)
      : null;
    const args = ctx._args ? this.visitArgList(ctx._args) : null;
    return new AST.CallExpr(fn, fallible, typeArgs, args).$(ctx);
  }

  visitIndexExpr(ctx: P.IndexExprContext): AST.IndexExpr {
    const [obj, index] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.IndexExpr(obj, index).$(ctx);
  }

  visitAsExpr(ctx: P.AsExprContext): AST.AsExpr {
    const obj = this.expr(ctx.expr());
    const ty = this.typeExpr(ctx._ty);
    return new AST.AsExpr(obj, ty).$(ctx);
  }

  visitExistsExpr(ctx: P.ExistsExprContext): AST.ExistsExpr {
    const expr = this.expr(ctx.expr());
    return new AST.ExistsExpr(expr).$(ctx);
  }

  visitMulExpr(ctx: P.MulExprContext): AST.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.BinOpExpr(lhs, ctx._op.text! as AST.Op, rhs).$(ctx);
  }

  visitAddExpr(ctx: P.AddExprContext): AST.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.BinOpExpr(lhs, ctx._op.text! as AST.Op, rhs).$(ctx);
  }

  visitCompExpr(ctx: P.CompExprContext): AST.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.BinOpExpr(lhs, ctx._op.text! as AST.Op, rhs).$(ctx);
  }

  visitQueryExpr(ctx: P.QueryExprContext): AST.QueryExpr {
    const expr = this.expr(ctx.expr());
    return new AST.QueryExpr(expr).$(ctx);
  }

  visitShortTryExpr(ctx: P.ShortTryExprContext): AST.ShortTryExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.ShortTryExpr(lhs, rhs).$(ctx);
  }

  visitInExpr(ctx: P.InExprContext): AST.InExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.InExpr(lhs, rhs).$(ctx);
  }

  visitEqExpr(ctx: P.EqExprContext): AST.BinOpExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.BinOpExpr(lhs, ctx._op.text! as AST.Op, rhs).$(ctx);
  }

  visitAndExpr(ctx: P.AndExprContext): AST.AndExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.AndExpr(lhs, rhs).$(ctx);
  }

  visitOrExpr(ctx: P.OrExprContext): AST.OrExpr {
    const [lhs, rhs] = [this.expr(ctx.expr(0)), this.expr(ctx.expr(1))];
    return new AST.OrExpr(lhs, rhs).$(ctx);
  }

  visitIfExpr(ctx: P.IfExprContext): AST.IfExpr {
    return this.visitIfExpr_(ctx.ifExpr_()).$(ctx);
  }

  visitTryCatchElseExpr(ctx: P.TryCatchElseExprContext): AST.TryCatchElseExpr {
    return this.visitTryCatchElseExpr_(ctx.tryCatchElseExpr_()).$(ctx);
  }

  visitClosureExpr(ctx: P.ClosureExprContext): AST.ClosureExpr {
    return this.visitClosureExpr_(ctx.closureExpr_()).$(ctx);
  }

  visitClosureExpr_(ctx: P.ClosureExpr_Context): AST.ClosureExpr {
    const fallible = ctx._fallible ? true : false;
    const params = ctx._params ? this.visitParamList(ctx._params) : null;
    const returnTy = ctx._returnTy ? this.typeExpr(ctx._returnTy) : null;
    const body = this.visitBlock(ctx._body);
    return new AST.ClosureExpr(fallible, params, returnTy, body).$(ctx);
  }

  visitStructExpr(ctx: P.StructExprContext): AST.StructExpr {
    return this.visitStructExpr_(ctx.structExpr_()).$(ctx);
  }

  visitStructExpr_(ctx: P.StructExpr_Context): AST.StructExpr {
    let ty = this.typeExpr(ctx._ty).$(ctx);
    let fields = ctx._fields ? this.visitFieldList(ctx._fields) : null;
    return new AST.StructExpr(ty, fields).$(ctx);
  }

  visitTupleExpr(ctx: P.TupleExprContext): AST.TupleExpr {
    return this.visitTupleExpr_(ctx.tupleExpr_()).$(ctx);
  }

  visitTupleExpr_(ctx: P.TupleExpr_Context): AST.TupleExpr {
    let elements = ctx._elements ? this.visitExprList(ctx._elements) : null;
    return new AST.TupleExpr(elements).$(ctx);
  }

  visitLiteralExpr(ctx: P.LiteralExprContext): AST.Literal<any> {
    return this.visit(ctx.literal()).$(ctx) as AST.Literal<any>;
  }

  visitIdentExpr(ctx: P.IdentExprContext): AST.IdentExpr {
    const ident = this.visitIdent(ctx.ident());
    return new AST.IdentExpr(ident).$(ctx);
  }

  visitGroupedExpr(ctx: P.GroupedExprContext): AST.GroupedExpr {
    return new AST.GroupedExpr(this.expr(ctx.expr())).$(ctx);
  }

  //#endregion Expressions

  //#region Literals
  visitStringLit(ctx: P.StringLitContext): AST.StringLit {
    return new AST.StringLit(ctx.text!).$(ctx);
  }

  visitIntLit(ctx: P.IntLitContext): AST.IntLit {
    return new AST.IntLit(ctx.text!).$(ctx);
  }

  visitDecLit(ctx: P.DecLitContext): AST.DecLit {
    return new AST.DecLit(ctx.text!).$(ctx);
  }

  visitBoolLit(ctx: P.BoolLitContext): AST.BoolLit {
    return new AST.BoolLit(ctx.text! === 'true').$(ctx);
  }

  visitNoneLit(ctx: P.NoneLitContext): AST.NoneLit {
    return new AST.NoneLit().$(ctx);
  }
  //#endregion Literals

  //#region Type Expressions
  visitGroupedTypeExpr(ctx: P.GroupedTypeExprContext): AST.GroupedTypeExpr {
    return new AST.GroupedTypeExpr(this.typeExpr(ctx.typeExpr())).$(ctx);
  }

  visitTypeVarList(ctx: P.TypeVarListContext): AST.List<AST.TypeVar> {
    return new AST.List(
      ctx.typeVar().map((t) => this.visit(t) as AST.TypeVar)
    ).$(ctx);
  }

  visitParameterizedTypeExpr(
    ctx: P.ParameterizedTypeExprContext
  ): AST.ParamzdTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    const typeArgs = this.visitTypeExprList(ctx._typeArgs);
    return new AST.ParamzdTypeExpr(ty, typeArgs).$(ctx);
  }

  visitMemberTypeExpr(ctx: P.MemberTypeExprContext): AST.MemberTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    const memberName = this.visitIdent(ctx._memberName);
    return new AST.MemberTypeExpr(ty, memberName).$(ctx);
  }

  visitArrayTypeExpr(ctx: P.ArrayTypeExprContext): AST.ArrayTypeExpr {
    const ty = this.typeExpr(ctx._ty);
    return new AST.ArrayTypeExpr(ty, Number.parseInt(ctx._size.text!)).$(ctx);
  }

  visitStructDefnTypeExpr(
    ctx: P.StructDefnTypeExprContext
  ): AST.StructDefnTypeExpr {
    const ty = this.visitStructDefn(ctx.structDefn());
    return new AST.StructDefnTypeExpr(ty).$(ctx);
  }

  visitTupleDefnTypeExpr(
    ctx: P.TupleDefnTypeExprContext
  ): AST.TupleDefnTypeExpr {
    const ty = this.visitTupleDefn(ctx.tupleDefn());
    return new AST.TupleDefnTypeExpr(ty).$(ctx);
  }

  visitUnitDefnTypeExpr(ctx: P.UnitDefnTypeExprContext): AST.UnitDefnTypeExpr {
    const ty = this.visitUnitDefn(ctx.unitDefn());
    return new AST.UnitDefnTypeExpr(ty).$(ctx);
  }

  visitEnumDefnTypeExpr(ctx: P.EnumDefnTypeExprContext): AST.EnumDefnTypeExpr {
    const ty = this.visitEnumDefn(ctx.enumDefn());
    return new AST.EnumDefnTypeExpr(ty).$(ctx);
  }

  visitOptionTypeExpr(ctx: P.OptionTypeExprContext): AST.OptionTypeExpr {
    const ty = this.typeExpr(ctx.typeExpr());
    return new AST.OptionTypeExpr(ty).$(ctx);
  }

  visitIdentTypeExpr(ctx: P.IdentTypeExprContext): AST.IdentTypeExpr {
    const ident = this.visitIdent(ctx.ident());
    return new AST.IdentTypeExpr(ident).$(ctx);
  }

  visitTypeVarExpr(ctx: P.TypeVarExprContext): AST.TypeVarExpr {
    const typeVar = this.visitTypeVar(ctx.typeVar());
    return new AST.TypeVarExpr(typeVar).$(ctx);
  }

  visitTypeVar(ctx: P.TypeVarContext): AST.TypeVar {
    return new AST.TypeVar(ctx.text!).$(ctx);
  }

  // #endregion

  //#region Common
  visitIdent(ctx: P.IdentContext): AST.Ident {
    return new AST.Ident(ctx.text).$(ctx);
  }

  visitParam(ctx: P.ParamContext): AST.Param {
    const name = this.visitIdent(ctx._name);
    const optional = ctx._optional ? true : false;
    const ty = ctx._ty ? this.typeExpr(ctx._ty) : null;
    return new AST.Param(name, optional, ty).$(ctx);
  }

  visitField(ctx: P.FieldContext): AST.Field {
    const name = this.visitIdent(ctx._name);
    const value = this.expr(ctx._value);
    return new AST.Field(name, value).$(ctx);
  }

  visitArg(ctx: P.ArgContext): AST.Arg {
    const namedArg = ctx.namedArg();
    if (namedArg) {
      const name = this.visitIdent(namedArg._name);
      const value = this.expr(namedArg._value);
      return new AST.Arg(name, value).$(ctx);
    } else {
      const value = this.expr(ctx.expr()!);
      return new AST.Arg(null, value).$(ctx);
    }
  }

  visitIdentList(ctx: P.IdentListContext): AST.List<AST.Ident> {
    return new AST.List(ctx.ident().map((i) => this.visitIdent(i))).$(ctx);
  }

  visitParamList(ctx: P.ParamListContext): AST.List<AST.Param> {
    return new AST.List(ctx.param().map((p) => this.visitParam(p))).$(ctx);
  }

  visitExprList(ctx: P.ExprListContext): AST.List<AST.Expr> {
    return new AST.List(ctx.expr().map((e) => this.expr(e))).$(ctx);
  }

  visitTypeExprList(ctx: P.TypeExprListContext): AST.List<AST.TypeExpr> {
    return new AST.List(
      ctx.typeExpr().map((t) => this.visit(t) as AST.TypeExpr)
    ).$(ctx);
  }

  visitFieldList(ctx: P.FieldListContext): AST.List<AST.Field> {
    return new AST.List(ctx.field().map((f) => this.visitField(f))).$(ctx);
  }

  visitArgList(ctx: P.ArgListContext): AST.List<AST.Arg> {
    return new AST.List(ctx.arg().map((a) => this.visitArg(a))).$(ctx);
  }

  visitBlock(ctx: P.BlockContext): AST.Block {
    return new AST.Block(
      new AST.List(ctx._stmts.map((s) => this.visit(s) as AST.Stmt))
    ).$(ctx);
  }

  //#endregion Common
}

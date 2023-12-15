// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LetIdentStmtContext } from "./CWScriptParser";
import { LetTupleStmtContext } from "./CWScriptParser";
import { LetStructStmtContext } from "./CWScriptParser";
import { StructDefnBraceContext } from "./CWScriptParser";
import { StructDefnParenContext } from "./CWScriptParser";
import { ForIdentStmtContext } from "./CWScriptParser";
import { ForTupleStmtContext } from "./CWScriptParser";
import { ForStructStmtContext } from "./CWScriptParser";
import { EnumVariantStructDefnBraceContext } from "./CWScriptParser";
import { EnumVariantStructDefnParenContext } from "./CWScriptParser";
import { EnumVariantTupleDefnContext } from "./CWScriptParser";
import { EnumVariantUnitDefnContext } from "./CWScriptParser";
import { DotExprContext } from "./CWScriptParser";
import { CallExprContext } from "./CWScriptParser";
import { IndexExprContext } from "./CWScriptParser";
import { ExistsExprContext } from "./CWScriptParser";
import { NotExprContext } from "./CWScriptParser";
import { MulExprContext } from "./CWScriptParser";
import { AddExprContext } from "./CWScriptParser";
import { CompExprContext } from "./CWScriptParser";
import { QueryExprContext } from "./CWScriptParser";
import { ShortTryExprContext } from "./CWScriptParser";
import { InExprContext } from "./CWScriptParser";
import { IsExprContext } from "./CWScriptParser";
import { EqExprContext } from "./CWScriptParser";
import { AndExprContext } from "./CWScriptParser";
import { OrExprContext } from "./CWScriptParser";
import { IfExprContext } from "./CWScriptParser";
import { TryCatchElseExprContext } from "./CWScriptParser";
import { ClosureExprContext } from "./CWScriptParser";
import { StructExprContext } from "./CWScriptParser";
import { TupleExprContext } from "./CWScriptParser";
import { LiteralExprContext } from "./CWScriptParser";
import { ReturnExprContext } from "./CWScriptParser";
import { FailExprContext } from "./CWScriptParser";
import { IdentExprContext } from "./CWScriptParser";
import { GroupedExprContext } from "./CWScriptParser";
import { GroupedTypeExprContext } from "./CWScriptParser";
import { ParameterizedTypeExprContext } from "./CWScriptParser";
import { MemberTypeExprContext } from "./CWScriptParser";
import { TupleTypeExprContext } from "./CWScriptParser";
import { ArrayTypeExprContext } from "./CWScriptParser";
import { StructDefnTypeExprContext } from "./CWScriptParser";
import { TupleDefnTypeExprContext } from "./CWScriptParser";
import { UnitDefnTypeExprContext } from "./CWScriptParser";
import { EnumDefnTypeExprContext } from "./CWScriptParser";
import { OptionTypeExprContext } from "./CWScriptParser";
import { TypeVarExprContext } from "./CWScriptParser";
import { IdentTypeExprContext } from "./CWScriptParser";
import { SourceFileContext } from "./CWScriptParser";
import { CwspecContext } from "./CWScriptParser";
import { StmtContext } from "./CWScriptParser";
import { ImportStmtContext } from "./CWScriptParser";
import { ExportStmtContext } from "./CWScriptParser";
import { BindingContext } from "./CWScriptParser";
import { BindingListContext } from "./CWScriptParser";
import { BrackIdentListContext } from "./CWScriptParser";
import { BraceBindingListContext } from "./CWScriptParser";
import { LetStmtContext } from "./CWScriptParser";
import { ConstStmtContext } from "./CWScriptParser";
import { AssignStmtContext } from "./CWScriptParser";
import { MemberAssignStmtContext } from "./CWScriptParser";
import { IndexAssignStmtContext } from "./CWScriptParser";
import { TryCatchElseStmtContext } from "./CWScriptParser";
import { IfStmtContext } from "./CWScriptParser";
import { ReturnStmtContext } from "./CWScriptParser";
import { FailStmtContext } from "./CWScriptParser";
import { ForStmtContext } from "./CWScriptParser";
import { ExecStmtContext } from "./CWScriptParser";
import { InstantiateStmtContext } from "./CWScriptParser";
import { EmitStmtContext } from "./CWScriptParser";
import { DefnContext } from "./CWScriptParser";
import { ContractDefnContext } from "./CWScriptParser";
import { InterfaceDefnContext } from "./CWScriptParser";
import { StructDefnContext } from "./CWScriptParser";
import { TupleDefnContext } from "./CWScriptParser";
import { UnitDefnContext } from "./CWScriptParser";
import { EnumDefnContext } from "./CWScriptParser";
import { EnumVariantDefnListContext } from "./CWScriptParser";
import { EnumVariantDefnContext } from "./CWScriptParser";
import { TypeAliasDefnContext } from "./CWScriptParser";
import { FnDefnContext } from "./CWScriptParser";
import { InstantiateDefnContext } from "./CWScriptParser";
import { ExecDefnContext } from "./CWScriptParser";
import { ExecTupleDefnContext } from "./CWScriptParser";
import { QueryDefnContext } from "./CWScriptParser";
import { QueryTupleDefnContext } from "./CWScriptParser";
import { ErrorDefnContext } from "./CWScriptParser";
import { EventDefnContext } from "./CWScriptParser";
import { StateBlockDefnContext } from "./CWScriptParser";
import { StateDefnContext } from "./CWScriptParser";
import { StateItemDefnContext } from "./CWScriptParser";
import { StateMapDefnContext } from "./CWScriptParser";
import { ImplDefnContext } from "./CWScriptParser";
import { ExprStmtContext } from "./CWScriptParser";
import { ExprContext } from "./CWScriptParser";
import { IfExpr_Context } from "./CWScriptParser";
import { TryCatchElseExpr_Context } from "./CWScriptParser";
import { CatchClauseContext } from "./CWScriptParser";
import { BlockClosureExprContext } from "./CWScriptParser";
import { ExprClosureExprContext } from "./CWScriptParser";
import { StructExpr_Context } from "./CWScriptParser";
import { TupleExpr_Context } from "./CWScriptParser";
import { ReturnExpr_Context } from "./CWScriptParser";
import { FailExpr_Context } from "./CWScriptParser";
import { LiteralContext } from "./CWScriptParser";
import { StringLitContext } from "./CWScriptParser";
import { IntLitContext } from "./CWScriptParser";
import { DecLitContext } from "./CWScriptParser";
import { BoolLitContext } from "./CWScriptParser";
import { NoneLitContext } from "./CWScriptParser";
import { TypeExprContext } from "./CWScriptParser";
import { TypeVarContext } from "./CWScriptParser";
import { IdentContext } from "./CWScriptParser";
import { ParamContext } from "./CWScriptParser";
import { FieldContext } from "./CWScriptParser";
import { NamedArgContext } from "./CWScriptParser";
import { ArgContext } from "./CWScriptParser";
import { IdentListContext } from "./CWScriptParser";
import { ParenParamListContext } from "./CWScriptParser";
import { BarsParamListContext } from "./CWScriptParser";
import { TupleParamListContext } from "./CWScriptParser";
import { BraceParamListContext } from "./CWScriptParser";
import { BrackTypeParamListContext } from "./CWScriptParser";
import { BrackTypeExprListContext } from "./CWScriptParser";
import { BraceFieldListContext } from "./CWScriptParser";
import { TypeExprListContext } from "./CWScriptParser";
import { BlockContext } from "./CWScriptParser";
import { BlockOrExprContext } from "./CWScriptParser";
import { KeywordIdentContext } from "./CWScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CWScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CWScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `LetIdentStmt`
	 * labeled alternative in `CWScriptParser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetIdentStmt?: (ctx: LetIdentStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `LetTupleStmt`
	 * labeled alternative in `CWScriptParser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetTupleStmt?: (ctx: LetTupleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `LetStructStmt`
	 * labeled alternative in `CWScriptParser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStructStmt?: (ctx: LetStructStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructDefnBrace`
	 * labeled alternative in `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefnBrace?: (ctx: StructDefnBraceContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructDefnParen`
	 * labeled alternative in `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefnParen?: (ctx: StructDefnParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForIdentStmt`
	 * labeled alternative in `CWScriptParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForIdentStmt?: (ctx: ForIdentStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForTupleStmt`
	 * labeled alternative in `CWScriptParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForTupleStmt?: (ctx: ForTupleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStructStmt`
	 * labeled alternative in `CWScriptParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStructStmt?: (ctx: ForStructStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnumVariantStructDefnBrace`
	 * labeled alternative in `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantStructDefnBrace?: (ctx: EnumVariantStructDefnBraceContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnumVariantStructDefnParen`
	 * labeled alternative in `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantStructDefnParen?: (ctx: EnumVariantStructDefnParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnumVariantTupleDefn`
	 * labeled alternative in `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantTupleDefn?: (ctx: EnumVariantTupleDefnContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnumVariantUnitDefn`
	 * labeled alternative in `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantUnitDefn?: (ctx: EnumVariantUnitDefnContext) => Result;

	/**
	 * Visit a parse tree produced by the `DotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotExpr?: (ctx: DotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `CallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpr?: (ctx: CallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IndexExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexExpr?: (ctx: IndexExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExistsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsExpr?: (ctx: ExistsExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpr?: (ctx: MulExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpr?: (ctx: AddExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpr?: (ctx: CompExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `QueryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpr?: (ctx: QueryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ShortTryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortTryExpr?: (ctx: ShortTryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `InExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpr?: (ctx: InExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsExpr?: (ctx: IsExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpr?: (ctx: EqExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr?: (ctx: IfExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TryCatchElseExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchElseExpr?: (ctx: TryCatchElseExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ClosureExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureExpr?: (ctx: ClosureExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExpr?: (ctx: StructExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpr?: (ctx: TupleExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReturnExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnExpr?: (ctx: ReturnExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FailExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailExpr?: (ctx: FailExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentExpr?: (ctx: IdentExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedExpr?: (ctx: GroupedExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `GroupedTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedTypeExpr?: (ctx: GroupedTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParameterizedTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedTypeExpr?: (ctx: ParameterizedTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberTypeExpr?: (ctx: MemberTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeExpr?: (ctx: TupleTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayTypeExpr?: (ctx: ArrayTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefnTypeExpr?: (ctx: StructDefnTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleDefnTypeExpr?: (ctx: TupleDefnTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnitDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitDefnTypeExpr?: (ctx: UnitDefnTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnumDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefnTypeExpr?: (ctx: EnumDefnTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `OptionTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionTypeExpr?: (ctx: OptionTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeVarExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVarExpr?: (ctx: TypeVarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentTypeExpr?: (ctx: IdentTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.cwspec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCwspec?: (ctx: CwspecContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.exportStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStmt?: (ctx: ExportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding?: (ctx: BindingContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.bindingList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingList?: (ctx: BindingListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.brackIdentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrackIdentList?: (ctx: BrackIdentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.braceBindingList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceBindingList?: (ctx: BraceBindingListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStmt?: (ctx: LetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.constStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstStmt?: (ctx: ConstStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.assignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.memberAssignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAssignStmt?: (ctx: MemberAssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.indexAssignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexAssignStmt?: (ctx: IndexAssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.tryCatchElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchElseStmt?: (ctx: TryCatchElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.failStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailStmt?: (ctx: FailStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStmt?: (ctx: ExecStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.instantiateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiateStmt?: (ctx: InstantiateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.emitStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmitStmt?: (ctx: EmitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefn?: (ctx: DefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractDefn?: (ctx: ContractDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDefn?: (ctx: InterfaceDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefn?: (ctx: StructDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.tupleDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleDefn?: (ctx: TupleDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.unitDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitDefn?: (ctx: UnitDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefn?: (ctx: EnumDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumVariantDefnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantDefnList?: (ctx: EnumVariantDefnListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantDefn?: (ctx: EnumVariantDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasDefn?: (ctx: TypeAliasDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefn?: (ctx: FnDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiateDefn?: (ctx: InstantiateDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDefn?: (ctx: ExecDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execTupleDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecTupleDefn?: (ctx: ExecTupleDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDefn?: (ctx: QueryDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryTupleDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTupleDefn?: (ctx: QueryTupleDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDefn?: (ctx: ErrorDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDefn?: (ctx: EventDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateBlockDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateBlockDefn?: (ctx: StateBlockDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefn?: (ctx: StateDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateItemDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateItemDefn?: (ctx: StateItemDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateMapDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateMapDefn?: (ctx: StateMapDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.implDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplDefn?: (ctx: ImplDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.exprStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprStmt?: (ctx: ExprStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.ifExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr_?: (ctx: IfExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.tryCatchElseExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchElseExpr_?: (ctx: TryCatchElseExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.blockClosureExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockClosureExpr?: (ctx: BlockClosureExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.exprClosureExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprClosureExpr?: (ctx: ExprClosureExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructExpr_?: (ctx: StructExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.tupleExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpr_?: (ctx: TupleExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.returnExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnExpr_?: (ctx: ReturnExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.failExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailExpr_?: (ctx: FailExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stringLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLit?: (ctx: StringLitContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.intLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLit?: (ctx: IntLitContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.decLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecLit?: (ctx: DecLitContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.boolLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLit?: (ctx: BoolLitContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.noneLit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoneLit?: (ctx: NoneLitContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpr?: (ctx: TypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVar?: (ctx: TypeVarContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.namedArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArg?: (ctx: NamedArgContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.identList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentList?: (ctx: IdentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.parenParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenParamList?: (ctx: ParenParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.barsParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBarsParamList?: (ctx: BarsParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.tupleParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleParamList?: (ctx: TupleParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.braceParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceParamList?: (ctx: BraceParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.brackTypeParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrackTypeParamList?: (ctx: BrackTypeParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.brackTypeExprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrackTypeExprList?: (ctx: BrackTypeExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.braceFieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceFieldList?: (ctx: BraceFieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeExprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExprList?: (ctx: TypeExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.blockOrExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockOrExpr?: (ctx: BlockOrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.keywordIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordIdent?: (ctx: KeywordIdentContext) => Result;
}


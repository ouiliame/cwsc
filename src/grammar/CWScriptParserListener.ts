// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StringLitContext } from "./CWScriptParser";
import { IntLitContext } from "./CWScriptParser";
import { DecLitContext } from "./CWScriptParser";
import { BoolLitContext } from "./CWScriptParser";
import { NoneLitContext } from "./CWScriptParser";
import { DotExprContext } from "./CWScriptParser";
import { CallExprContext } from "./CWScriptParser";
import { IndexExprContext } from "./CWScriptParser";
import { AsExprContext } from "./CWScriptParser";
import { ExistsExprContext } from "./CWScriptParser";
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
import { IdentExprContext } from "./CWScriptParser";
import { GroupedExprContext } from "./CWScriptParser";
import { GroupedTypeExprContext } from "./CWScriptParser";
import { ParameterizedTypeExprContext } from "./CWScriptParser";
import { MemberTypeExprContext } from "./CWScriptParser";
import { ArrayTypeExprContext } from "./CWScriptParser";
import { StructDefnTypeExprContext } from "./CWScriptParser";
import { TupleDefnTypeExprContext } from "./CWScriptParser";
import { UnitDefnTypeExprContext } from "./CWScriptParser";
import { EnumDefnTypeExprContext } from "./CWScriptParser";
import { OptionTypeExprContext } from "./CWScriptParser";
import { TypeVarExprContext } from "./CWScriptParser";
import { IdentTypeExprContext } from "./CWScriptParser";
import { IdentBindingContext } from "./CWScriptParser";
import { TupleBindingContext } from "./CWScriptParser";
import { StructBindingContext } from "./CWScriptParser";
import { SourceFileContext } from "./CWScriptParser";
import { StmtContext } from "./CWScriptParser";
import { ImportStmtContext } from "./CWScriptParser";
import { LetStmtContext } from "./CWScriptParser";
import { Binding_Context } from "./CWScriptParser";
import { ConstStmtContext } from "./CWScriptParser";
import { AssignStmtContext } from "./CWScriptParser";
import { MemberAssignStmtContext } from "./CWScriptParser";
import { IndexAssignStmtContext } from "./CWScriptParser";
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
import { EnumVariantStructDefnContext } from "./CWScriptParser";
import { EnumVariantTupleDefnContext } from "./CWScriptParser";
import { EnumVariantUnitDefnContext } from "./CWScriptParser";
import { TypeAliasDefnContext } from "./CWScriptParser";
import { FnDefnContext } from "./CWScriptParser";
import { InstantiateDefnContext } from "./CWScriptParser";
import { ExecDefnContext } from "./CWScriptParser";
import { QueryDefnContext } from "./CWScriptParser";
import { ErrorDefnContext } from "./CWScriptParser";
import { EventDefnContext } from "./CWScriptParser";
import { StateBlockDefnContext } from "./CWScriptParser";
import { StateDefnContext } from "./CWScriptParser";
import { StateItemDefnContext } from "./CWScriptParser";
import { StateMapDefnContext } from "./CWScriptParser";
import { ExprContext } from "./CWScriptParser";
import { IfExpr_Context } from "./CWScriptParser";
import { TryCatchElseExpr_Context } from "./CWScriptParser";
import { CatchClauseContext } from "./CWScriptParser";
import { ClosureExpr_Context } from "./CWScriptParser";
import { StructExpr_Context } from "./CWScriptParser";
import { TupleExpr_Context } from "./CWScriptParser";
import { LiteralContext } from "./CWScriptParser";
import { TypeExprContext } from "./CWScriptParser";
import { TypeVarContext } from "./CWScriptParser";
import { TypeVarListContext } from "./CWScriptParser";
import { IdentContext } from "./CWScriptParser";
import { ParamContext } from "./CWScriptParser";
import { FieldContext } from "./CWScriptParser";
import { NamedArgContext } from "./CWScriptParser";
import { ArgContext } from "./CWScriptParser";
import { IdentListContext } from "./CWScriptParser";
import { ParamListContext } from "./CWScriptParser";
import { TypeExprListContext } from "./CWScriptParser";
import { ExprListContext } from "./CWScriptParser";
import { FieldListContext } from "./CWScriptParser";
import { ArgListContext } from "./CWScriptParser";
import { BlockContext } from "./CWScriptParser";
import { ReservedKeywordContext } from "./CWScriptParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CWScriptParser`.
 */
export interface CWScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `StringLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLit?: (ctx: StringLitContext) => void;
	/**
	 * Exit a parse tree produced by the `StringLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLit?: (ctx: StringLitContext) => void;

	/**
	 * Enter a parse tree produced by the `IntLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntLit?: (ctx: IntLitContext) => void;
	/**
	 * Exit a parse tree produced by the `IntLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntLit?: (ctx: IntLitContext) => void;

	/**
	 * Enter a parse tree produced by the `DecLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterDecLit?: (ctx: DecLitContext) => void;
	/**
	 * Exit a parse tree produced by the `DecLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitDecLit?: (ctx: DecLitContext) => void;

	/**
	 * Enter a parse tree produced by the `BoolLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBoolLit?: (ctx: BoolLitContext) => void;
	/**
	 * Exit a parse tree produced by the `BoolLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBoolLit?: (ctx: BoolLitContext) => void;

	/**
	 * Enter a parse tree produced by the `NoneLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNoneLit?: (ctx: NoneLitContext) => void;
	/**
	 * Exit a parse tree produced by the `NoneLit`
	 * labeled alternative in `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNoneLit?: (ctx: NoneLitContext) => void;

	/**
	 * Enter a parse tree produced by the `DotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDotExpr?: (ctx: DotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `DotExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDotExpr?: (ctx: DotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `CallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCallExpr?: (ctx: CallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `CallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCallExpr?: (ctx: CallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IndexExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIndexExpr?: (ctx: IndexExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IndexExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIndexExpr?: (ctx: IndexExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAsExpr?: (ctx: AsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAsExpr?: (ctx: AsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ExistsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExistsExpr?: (ctx: ExistsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ExistsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExistsExpr?: (ctx: ExistsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MulExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MulExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AddExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;

	/**
	 * Enter a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCompExpr?: (ctx: CompExprContext) => void;
	/**
	 * Exit a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCompExpr?: (ctx: CompExprContext) => void;

	/**
	 * Enter a parse tree produced by the `QueryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterQueryExpr?: (ctx: QueryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `QueryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitQueryExpr?: (ctx: QueryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ShortTryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterShortTryExpr?: (ctx: ShortTryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ShortTryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitShortTryExpr?: (ctx: ShortTryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `InExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInExpr?: (ctx: InExprContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInExpr?: (ctx: InExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIsExpr?: (ctx: IsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IsExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIsExpr?: (ctx: IsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqExpr?: (ctx: EqExprContext) => void;
	/**
	 * Exit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqExpr?: (ctx: EqExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfExpr?: (ctx: IfExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfExpr?: (ctx: IfExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TryCatchElseExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTryCatchElseExpr?: (ctx: TryCatchElseExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TryCatchElseExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTryCatchElseExpr?: (ctx: TryCatchElseExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ClosureExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterClosureExpr?: (ctx: ClosureExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ClosureExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitClosureExpr?: (ctx: ClosureExprContext) => void;

	/**
	 * Enter a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStructExpr?: (ctx: StructExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStructExpr?: (ctx: StructExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTupleExpr?: (ctx: TupleExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTupleExpr?: (ctx: TupleExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdentExpr?: (ctx: IdentExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdentExpr?: (ctx: IdentExprContext) => void;

	/**
	 * Enter a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGroupedExpr?: (ctx: GroupedExprContext) => void;
	/**
	 * Exit a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGroupedExpr?: (ctx: GroupedExprContext) => void;

	/**
	 * Enter a parse tree produced by the `GroupedTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterGroupedTypeExpr?: (ctx: GroupedTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `GroupedTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitGroupedTypeExpr?: (ctx: GroupedTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ParameterizedTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterParameterizedTypeExpr?: (ctx: ParameterizedTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ParameterizedTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitParameterizedTypeExpr?: (ctx: ParameterizedTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterMemberTypeExpr?: (ctx: MemberTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitMemberTypeExpr?: (ctx: MemberTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterArrayTypeExpr?: (ctx: ArrayTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitArrayTypeExpr?: (ctx: ArrayTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `StructDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterStructDefnTypeExpr?: (ctx: StructDefnTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StructDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitStructDefnTypeExpr?: (ctx: StructDefnTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTupleDefnTypeExpr?: (ctx: TupleDefnTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTupleDefnTypeExpr?: (ctx: TupleDefnTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `UnitDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterUnitDefnTypeExpr?: (ctx: UnitDefnTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `UnitDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitUnitDefnTypeExpr?: (ctx: UnitDefnTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `EnumDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterEnumDefnTypeExpr?: (ctx: EnumDefnTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `EnumDefnTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitEnumDefnTypeExpr?: (ctx: EnumDefnTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `OptionTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterOptionTypeExpr?: (ctx: OptionTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `OptionTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitOptionTypeExpr?: (ctx: OptionTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeVarExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTypeVarExpr?: (ctx: TypeVarExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeVarExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTypeVarExpr?: (ctx: TypeVarExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterIdentTypeExpr?: (ctx: IdentTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitIdentTypeExpr?: (ctx: IdentTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentBinding`
	 * labeled alternative in `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	enterIdentBinding?: (ctx: IdentBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentBinding`
	 * labeled alternative in `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	exitIdentBinding?: (ctx: IdentBindingContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleBinding`
	 * labeled alternative in `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	enterTupleBinding?: (ctx: TupleBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleBinding`
	 * labeled alternative in `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	exitTupleBinding?: (ctx: TupleBindingContext) => void;

	/**
	 * Enter a parse tree produced by the `StructBinding`
	 * labeled alternative in `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	enterStructBinding?: (ctx: StructBindingContext) => void;
	/**
	 * Exit a parse tree produced by the `StructBinding`
	 * labeled alternative in `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	exitStructBinding?: (ctx: StructBindingContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportStmt?: (ctx: ImportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportStmt?: (ctx: ImportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.letStmt`.
	 * @param ctx the parse tree
	 */
	enterLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.letStmt`.
	 * @param ctx the parse tree
	 */
	exitLetStmt?: (ctx: LetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	enterBinding_?: (ctx: Binding_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.binding_`.
	 * @param ctx the parse tree
	 */
	exitBinding_?: (ctx: Binding_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.constStmt`.
	 * @param ctx the parse tree
	 */
	enterConstStmt?: (ctx: ConstStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.constStmt`.
	 * @param ctx the parse tree
	 */
	exitConstStmt?: (ctx: ConstStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.memberAssignStmt`.
	 * @param ctx the parse tree
	 */
	enterMemberAssignStmt?: (ctx: MemberAssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.memberAssignStmt`.
	 * @param ctx the parse tree
	 */
	exitMemberAssignStmt?: (ctx: MemberAssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.indexAssignStmt`.
	 * @param ctx the parse tree
	 */
	enterIndexAssignStmt?: (ctx: IndexAssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.indexAssignStmt`.
	 * @param ctx the parse tree
	 */
	exitIndexAssignStmt?: (ctx: IndexAssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.failStmt`.
	 * @param ctx the parse tree
	 */
	enterFailStmt?: (ctx: FailStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.failStmt`.
	 * @param ctx the parse tree
	 */
	exitFailStmt?: (ctx: FailStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execStmt`.
	 * @param ctx the parse tree
	 */
	enterExecStmt?: (ctx: ExecStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execStmt`.
	 * @param ctx the parse tree
	 */
	exitExecStmt?: (ctx: ExecStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.instantiateStmt`.
	 * @param ctx the parse tree
	 */
	enterInstantiateStmt?: (ctx: InstantiateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.instantiateStmt`.
	 * @param ctx the parse tree
	 */
	exitInstantiateStmt?: (ctx: InstantiateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.emitStmt`.
	 * @param ctx the parse tree
	 */
	enterEmitStmt?: (ctx: EmitStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.emitStmt`.
	 * @param ctx the parse tree
	 */
	exitEmitStmt?: (ctx: EmitStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.defn`.
	 * @param ctx the parse tree
	 */
	enterDefn?: (ctx: DefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.defn`.
	 * @param ctx the parse tree
	 */
	exitDefn?: (ctx: DefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 */
	enterContractDefn?: (ctx: ContractDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 */
	exitContractDefn?: (ctx: ContractDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDefn?: (ctx: InterfaceDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDefn?: (ctx: InterfaceDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 */
	enterStructDefn?: (ctx: StructDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 */
	exitStructDefn?: (ctx: StructDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.tupleDefn`.
	 * @param ctx the parse tree
	 */
	enterTupleDefn?: (ctx: TupleDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.tupleDefn`.
	 * @param ctx the parse tree
	 */
	exitTupleDefn?: (ctx: TupleDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.unitDefn`.
	 * @param ctx the parse tree
	 */
	enterUnitDefn?: (ctx: UnitDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.unitDefn`.
	 * @param ctx the parse tree
	 */
	exitUnitDefn?: (ctx: UnitDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumDefn?: (ctx: EnumDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumDefn?: (ctx: EnumDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariantDefnList`.
	 * @param ctx the parse tree
	 */
	enterEnumVariantDefnList?: (ctx: EnumVariantDefnListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariantDefnList`.
	 * @param ctx the parse tree
	 */
	exitEnumVariantDefnList?: (ctx: EnumVariantDefnListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumVariantDefn?: (ctx: EnumVariantDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariantDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumVariantDefn?: (ctx: EnumVariantDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariantStructDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumVariantStructDefn?: (ctx: EnumVariantStructDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariantStructDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumVariantStructDefn?: (ctx: EnumVariantStructDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariantTupleDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumVariantTupleDefn?: (ctx: EnumVariantTupleDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariantTupleDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumVariantTupleDefn?: (ctx: EnumVariantTupleDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariantUnitDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumVariantUnitDefn?: (ctx: EnumVariantUnitDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariantUnitDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumVariantUnitDefn?: (ctx: EnumVariantUnitDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasDefn?: (ctx: TypeAliasDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasDefn?: (ctx: TypeAliasDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	enterFnDefn?: (ctx: FnDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	exitFnDefn?: (ctx: FnDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 */
	enterInstantiateDefn?: (ctx: InstantiateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 */
	exitInstantiateDefn?: (ctx: InstantiateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 */
	enterExecDefn?: (ctx: ExecDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 */
	exitExecDefn?: (ctx: ExecDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 */
	enterQueryDefn?: (ctx: QueryDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 */
	exitQueryDefn?: (ctx: QueryDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 */
	enterErrorDefn?: (ctx: ErrorDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 */
	exitErrorDefn?: (ctx: ErrorDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 */
	enterEventDefn?: (ctx: EventDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 */
	exitEventDefn?: (ctx: EventDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateBlockDefn`.
	 * @param ctx the parse tree
	 */
	enterStateBlockDefn?: (ctx: StateBlockDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateBlockDefn`.
	 * @param ctx the parse tree
	 */
	exitStateBlockDefn?: (ctx: StateBlockDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateDefn?: (ctx: StateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateDefn?: (ctx: StateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateItemDefn`.
	 * @param ctx the parse tree
	 */
	enterStateItemDefn?: (ctx: StateItemDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateItemDefn`.
	 * @param ctx the parse tree
	 */
	exitStateItemDefn?: (ctx: StateItemDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateMapDefn`.
	 * @param ctx the parse tree
	 */
	enterStateMapDefn?: (ctx: StateMapDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateMapDefn`.
	 * @param ctx the parse tree
	 */
	exitStateMapDefn?: (ctx: StateMapDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ifExpr_`.
	 * @param ctx the parse tree
	 */
	enterIfExpr_?: (ctx: IfExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ifExpr_`.
	 * @param ctx the parse tree
	 */
	exitIfExpr_?: (ctx: IfExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.tryCatchElseExpr_`.
	 * @param ctx the parse tree
	 */
	enterTryCatchElseExpr_?: (ctx: TryCatchElseExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.tryCatchElseExpr_`.
	 * @param ctx the parse tree
	 */
	exitTryCatchElseExpr_?: (ctx: TryCatchElseExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.closureExpr_`.
	 * @param ctx the parse tree
	 */
	enterClosureExpr_?: (ctx: ClosureExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.closureExpr_`.
	 * @param ctx the parse tree
	 */
	exitClosureExpr_?: (ctx: ClosureExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structExpr_`.
	 * @param ctx the parse tree
	 */
	enterStructExpr_?: (ctx: StructExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structExpr_`.
	 * @param ctx the parse tree
	 */
	exitStructExpr_?: (ctx: StructExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.tupleExpr_`.
	 * @param ctx the parse tree
	 */
	enterTupleExpr_?: (ctx: TupleExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.tupleExpr_`.
	 * @param ctx the parse tree
	 */
	exitTupleExpr_?: (ctx: TupleExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTypeExpr?: (ctx: TypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTypeExpr?: (ctx: TypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeVar`.
	 * @param ctx the parse tree
	 */
	enterTypeVar?: (ctx: TypeVarContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeVar`.
	 * @param ctx the parse tree
	 */
	exitTypeVar?: (ctx: TypeVarContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeVarList`.
	 * @param ctx the parse tree
	 */
	enterTypeVarList?: (ctx: TypeVarListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeVarList`.
	 * @param ctx the parse tree
	 */
	exitTypeVarList?: (ctx: TypeVarListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.namedArg`.
	 * @param ctx the parse tree
	 */
	enterNamedArg?: (ctx: NamedArgContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.namedArg`.
	 * @param ctx the parse tree
	 */
	exitNamedArg?: (ctx: NamedArgContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.identList`.
	 * @param ctx the parse tree
	 */
	enterIdentList?: (ctx: IdentListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.identList`.
	 * @param ctx the parse tree
	 */
	exitIdentList?: (ctx: IdentListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeExprList`.
	 * @param ctx the parse tree
	 */
	enterTypeExprList?: (ctx: TypeExprListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeExprList`.
	 * @param ctx the parse tree
	 */
	exitTypeExprList?: (ctx: TypeExprListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	enterReservedKeyword?: (ctx: ReservedKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	exitReservedKeyword?: (ctx: ReservedKeywordContext) => void;
}


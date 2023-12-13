// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CWScriptParserListener } from "./CWScriptParserListener";
import { CWScriptParserVisitor } from "./CWScriptParserVisitor";


export class CWScriptParser extends Parser {
	public static readonly DEBUG = 1;
	public static readonly CONTRACT = 2;
	public static readonly INTERFACE = 3;
	public static readonly IMPORT = 4;
	public static readonly IMPLEMENTS = 5;
	public static readonly EXTENDS = 6;
	public static readonly ERROR = 7;
	public static readonly EVENT = 8;
	public static readonly DEFER = 9;
	public static readonly INSTANTIATE_NOW = 10;
	public static readonly EXEC_NOW = 11;
	public static readonly QUERY_NOW = 12;
	public static readonly DELEGATE_EXEC = 13;
	public static readonly H_INSTANTIATE = 14;
	public static readonly INSTANTIATE = 15;
	public static readonly EXEC = 16;
	public static readonly QUERY = 17;
	public static readonly REPLY = 18;
	public static readonly FOR = 19;
	public static readonly IN = 20;
	public static readonly FROM = 21;
	public static readonly STATE = 22;
	public static readonly IF = 23;
	public static readonly IS = 24;
	public static readonly TRY = 25;
	public static readonly CATCH = 26;
	public static readonly ELSE = 27;
	public static readonly NOT = 28;
	public static readonly NONE = 29;
	public static readonly MUT = 30;
	public static readonly AND = 31;
	public static readonly OR = 32;
	public static readonly TRUE = 33;
	public static readonly FALSE = 34;
	public static readonly FN = 35;
	public static readonly LET = 36;
	public static readonly CONST = 37;
	public static readonly FAIL = 38;
	public static readonly RETURN = 39;
	public static readonly STRUCT = 40;
	public static readonly TUPLE = 41;
	public static readonly UNIT = 42;
	public static readonly ENUM = 43;
	public static readonly TYPE = 44;
	public static readonly EMIT = 45;
	public static readonly AS = 46;
	public static readonly TILDE = 47;
	public static readonly LPAREN = 48;
	public static readonly RPAREN = 49;
	public static readonly LBRACK = 50;
	public static readonly RBRACK = 51;
	public static readonly LBRACE = 52;
	public static readonly RBRACE = 53;
	public static readonly DOT = 54;
	public static readonly COMMA = 55;
	public static readonly D_QUEST = 56;
	public static readonly QUEST = 57;
	public static readonly BANG = 58;
	public static readonly SEMI = 59;
	public static readonly COLON = 60;
	public static readonly D_COLON = 61;
	public static readonly AT = 62;
	public static readonly AMP = 63;
	public static readonly ARROW = 64;
	public static readonly FAT_ARROW = 65;
	public static readonly BAR = 66;
	public static readonly S_QUOTE = 67;
	public static readonly D_QUOTE = 68;
	public static readonly EQ = 69;
	public static readonly EQ_EQ = 70;
	public static readonly NEQ = 71;
	public static readonly PLUS = 72;
	public static readonly PLUS_EQ = 73;
	public static readonly MINUS = 74;
	public static readonly MINUS_EQ = 75;
	public static readonly MUL = 76;
	public static readonly MUL_EQ = 77;
	public static readonly DIV = 78;
	public static readonly DIV_EQ = 79;
	public static readonly MOD = 80;
	public static readonly MOD_EQ = 81;
	public static readonly LT = 82;
	public static readonly LT_EQ = 83;
	public static readonly GT = 84;
	public static readonly GT_EQ = 85;
	public static readonly POW = 86;
	public static readonly BoolLiteral = 87;
	public static readonly HashIdent = 88;
	public static readonly DollarIdent = 89;
	public static readonly Ident = 90;
	public static readonly TypeVar = 91;
	public static readonly StringLiteral = 92;
	public static readonly IntLiteral = 93;
	public static readonly DecLiteral = 94;
	public static readonly CWSPEC_LINE_COMMENT = 95;
	public static readonly CWSPEC_BLOCK_COMMENT = 96;
	public static readonly LINE_COMMENT = 97;
	public static readonly BLOCK_COMMENT = 98;
	public static readonly WS = 99;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_cwspec = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_importStmt = 3;
	public static readonly RULE_letStmt = 4;
	public static readonly RULE_binding_ = 5;
	public static readonly RULE_constStmt = 6;
	public static readonly RULE_assignStmt = 7;
	public static readonly RULE_memberAssignStmt = 8;
	public static readonly RULE_indexAssignStmt = 9;
	public static readonly RULE_tryCatchElseStmt = 10;
	public static readonly RULE_ifStmt = 11;
	public static readonly RULE_returnStmt = 12;
	public static readonly RULE_failStmt = 13;
	public static readonly RULE_forStmt = 14;
	public static readonly RULE_execStmt = 15;
	public static readonly RULE_instantiateStmt = 16;
	public static readonly RULE_emitStmt = 17;
	public static readonly RULE_defn = 18;
	public static readonly RULE_contractDefn = 19;
	public static readonly RULE_interfaceDefn = 20;
	public static readonly RULE_structDefn = 21;
	public static readonly RULE_tupleDefn = 22;
	public static readonly RULE_unitDefn = 23;
	public static readonly RULE_enumDefn = 24;
	public static readonly RULE_enumVariantDefnList = 25;
	public static readonly RULE_enumVariantDefn = 26;
	public static readonly RULE_typeAliasDefn = 27;
	public static readonly RULE_fnDefn = 28;
	public static readonly RULE_instantiateDefn = 29;
	public static readonly RULE_execDefn = 30;
	public static readonly RULE_execTupleDefn = 31;
	public static readonly RULE_queryDefn = 32;
	public static readonly RULE_queryTupleDefn = 33;
	public static readonly RULE_errorDefn = 34;
	public static readonly RULE_eventDefn = 35;
	public static readonly RULE_stateBlockDefn = 36;
	public static readonly RULE_stateDefn = 37;
	public static readonly RULE_stateItemDefn = 38;
	public static readonly RULE_stateMapDefn = 39;
	public static readonly RULE_exprStmt = 40;
	public static readonly RULE_expr = 41;
	public static readonly RULE_ifExpr_ = 42;
	public static readonly RULE_tryCatchElseExpr_ = 43;
	public static readonly RULE_catchClause = 44;
	public static readonly RULE_closureExpr_ = 45;
	public static readonly RULE_structExpr_ = 46;
	public static readonly RULE_tupleExpr_ = 47;
	public static readonly RULE_returnExpr_ = 48;
	public static readonly RULE_failExpr_ = 49;
	public static readonly RULE_literal = 50;
	public static readonly RULE_stringLit = 51;
	public static readonly RULE_intLit = 52;
	public static readonly RULE_decLit = 53;
	public static readonly RULE_boolLit = 54;
	public static readonly RULE_noneLit = 55;
	public static readonly RULE_typeExpr = 56;
	public static readonly RULE_typeVar = 57;
	public static readonly RULE_ident = 58;
	public static readonly RULE_param = 59;
	public static readonly RULE_field = 60;
	public static readonly RULE_namedArg = 61;
	public static readonly RULE_arg = 62;
	public static readonly RULE_identList = 63;
	public static readonly RULE_parenParamList = 64;
	public static readonly RULE_tupleParamList = 65;
	public static readonly RULE_braceParamList = 66;
	public static readonly RULE_barParamList = 67;
	public static readonly RULE_brackTypeParamList = 68;
	public static readonly RULE_brackTypeExprList = 69;
	public static readonly RULE_braceFieldList = 70;
	public static readonly RULE_typeExprList = 71;
	public static readonly RULE_block = 72;
	public static readonly RULE_blockOrExpr = 73;
	public static readonly RULE_reservedKeyword = 74;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "cwspec", "stmt", "importStmt", "letStmt", "binding_", "constStmt", 
		"assignStmt", "memberAssignStmt", "indexAssignStmt", "tryCatchElseStmt", 
		"ifStmt", "returnStmt", "failStmt", "forStmt", "execStmt", "instantiateStmt", 
		"emitStmt", "defn", "contractDefn", "interfaceDefn", "structDefn", "tupleDefn", 
		"unitDefn", "enumDefn", "enumVariantDefnList", "enumVariantDefn", "typeAliasDefn", 
		"fnDefn", "instantiateDefn", "execDefn", "execTupleDefn", "queryDefn", 
		"queryTupleDefn", "errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", 
		"stateItemDefn", "stateMapDefn", "exprStmt", "expr", "ifExpr_", "tryCatchElseExpr_", 
		"catchClause", "closureExpr_", "structExpr_", "tupleExpr_", "returnExpr_", 
		"failExpr_", "literal", "stringLit", "intLit", "decLit", "boolLit", "noneLit", 
		"typeExpr", "typeVar", "ident", "param", "field", "namedArg", "arg", "identList", 
		"parenParamList", "tupleParamList", "braceParamList", "barParamList", 
		"brackTypeParamList", "brackTypeExprList", "braceFieldList", "typeExprList", 
		"block", "blockOrExpr", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
		"'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", "'exec!'", 
		"'query!'", "'delegate_exec!'", "'#instantiate'", "'instantiate'", "'exec'", 
		"'query'", "'reply'", "'for'", "'in'", "'from'", "'state'", "'if'", "'is'", 
		"'try'", "'catch'", "'else'", "'not'", "'None'", "'mut'", "'and'", "'or'", 
		"'true'", "'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", 
		"'struct'", "'tuple'", "'unit'", "'enum'", "'type'", "'emit'", "'as'", 
		"'~'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'", 
		"'?'", "'!'", "';'", "':'", "'::'", "'@'", "'&'", "'->'", "'=>'", "'|'", 
		"'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", 
		"'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
		"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
		"DELEGATE_EXEC", "H_INSTANTIATE", "INSTANTIATE", "EXEC", "QUERY", "REPLY", 
		"FOR", "IN", "FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", 
		"NONE", "MUT", "AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", 
		"RETURN", "STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", 
		"LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", 
		"D_QUEST", "QUEST", "BANG", "SEMI", "COLON", "D_COLON", "AT", "AMP", "ARROW", 
		"FAT_ARROW", "BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", 
		"PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", 
		"MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "BoolLiteral", "HashIdent", 
		"DollarIdent", "Ident", "TypeVar", "StringLiteral", "IntLiteral", "DecLiteral", 
		"CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CWScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CWScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CWScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CWScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CWScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CWScriptParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
				{
				{
				this.state = 150;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 156;
			this.match(CWScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cwspec(): CwspecContext {
		let _localctx: CwspecContext = new CwspecContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_cwspec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_la = this._input.LA(1);
			if (!(_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CWScriptParser.RULE_stmt);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 161;
				this.defn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 162;
				this.letStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 163;
				this.constStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 164;
				this.assignStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 165;
				this.memberAssignStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 166;
				this.indexAssignStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 167;
				this.ifStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 168;
				this.tryCatchElseStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 169;
				this.forStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 170;
				this.execStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 171;
				this.instantiateStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 172;
				this.emitStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 173;
				this.failStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 174;
				this.returnStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 175;
				this.exprStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CWScriptParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(CWScriptParser.IMPORT);
			this.state = 179;
			this.match(CWScriptParser.LBRACE);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 180;
				_localctx._items = this.identList();
				}
			}

			this.state = 183;
			this.match(CWScriptParser.RBRACE);
			this.state = 184;
			this.match(CWScriptParser.FROM);
			{
			this.state = 185;
			_localctx._src = this.stringLit();
			}
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 186;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStmt(): LetStmtContext {
		let _localctx: LetStmtContext = new LetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_letStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 189;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 192;
			this.match(CWScriptParser.LET);
			{
			this.state = 193;
			_localctx._binding = this.binding_();
			}
			{
			this.state = 194;
			this.match(CWScriptParser.EQ);
			this.state = 195;
			_localctx._value = this.expr(0);
			}
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 197;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binding_(): Binding_Context {
		let _localctx: Binding_Context = new Binding_Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_binding_);
		let _la: number;
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.H_INSTANTIATE:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.NONE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.STRUCT:
			case CWScriptParser.TUPLE:
			case CWScriptParser.UNIT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.HashIdent:
			case CWScriptParser.DollarIdent:
			case CWScriptParser.Ident:
				_localctx = new IdentBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 200;
				(_localctx as IdentBindingContext)._name = this.ident();
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 201;
					this.match(CWScriptParser.COLON);
					this.state = 202;
					(_localctx as IdentBindingContext)._ty = this.typeExpr(0);
					}
				}

				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 205;
				this.match(CWScriptParser.LBRACK);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
					{
					this.state = 206;
					(_localctx as TupleBindingContext)._names = this.identList();
					}
				}

				this.state = 209;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.match(CWScriptParser.LBRACE);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
					{
					this.state = 211;
					(_localctx as StructBindingContext)._names = this.identList();
					}
				}

				this.state = 214;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constStmt(): ConstStmtContext {
		let _localctx: ConstStmtContext = new ConstStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CWScriptParser.RULE_constStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 217;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 220;
			this.match(CWScriptParser.CONST);
			{
			this.state = 221;
			_localctx._name = this.ident();
			}
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 222;
				this.match(CWScriptParser.COLON);
				this.state = 223;
				_localctx._ty = this.typeExpr(0);
				}
			}

			{
			this.state = 226;
			this.match(CWScriptParser.EQ);
			this.state = 227;
			_localctx._value = this.expr(0);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 229;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_assignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 232;
			_localctx._name = this.ident();
			}
			this.state = 233;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (CWScriptParser.EQ - 69)) | (1 << (CWScriptParser.PLUS_EQ - 69)) | (1 << (CWScriptParser.MINUS_EQ - 69)) | (1 << (CWScriptParser.MUL_EQ - 69)) | (1 << (CWScriptParser.DIV_EQ - 69)) | (1 << (CWScriptParser.MOD_EQ - 69)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			{
			this.state = 234;
			_localctx._value = this.expr(0);
			}
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 235;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberAssignStmt(): MemberAssignStmtContext {
		let _localctx: MemberAssignStmtContext = new MemberAssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_memberAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 238;
			_localctx._obj = this.expr(0);
			}
			this.state = 239;
			this.match(CWScriptParser.DOT);
			{
			this.state = 240;
			_localctx._memberName = this.ident();
			}
			this.state = 241;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (CWScriptParser.EQ - 69)) | (1 << (CWScriptParser.PLUS_EQ - 69)) | (1 << (CWScriptParser.MINUS_EQ - 69)) | (1 << (CWScriptParser.MUL_EQ - 69)) | (1 << (CWScriptParser.DIV_EQ - 69)) | (1 << (CWScriptParser.MOD_EQ - 69)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			{
			this.state = 242;
			_localctx._value = this.expr(0);
			}
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 243;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexAssignStmt(): IndexAssignStmtContext {
		let _localctx: IndexAssignStmtContext = new IndexAssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_indexAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 246;
			_localctx._obj = this.expr(0);
			}
			this.state = 247;
			this.match(CWScriptParser.LBRACK);
			this.state = 248;
			_localctx._index = this.expr(0);
			this.state = 249;
			this.match(CWScriptParser.RBRACK);
			this.state = 250;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (CWScriptParser.EQ - 69)) | (1 << (CWScriptParser.PLUS_EQ - 69)) | (1 << (CWScriptParser.MINUS_EQ - 69)) | (1 << (CWScriptParser.MUL_EQ - 69)) | (1 << (CWScriptParser.DIV_EQ - 69)) | (1 << (CWScriptParser.MOD_EQ - 69)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 251;
			_localctx._value = this.expr(0);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 252;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchElseStmt(): TryCatchElseStmtContext {
		let _localctx: TryCatchElseStmtContext = new TryCatchElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_tryCatchElseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.tryCatchElseExpr_();
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 256;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.ifExpr_();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 260;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CWScriptParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.returnExpr_();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 264;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failStmt(): FailStmtContext {
		let _localctx: FailStmtContext = new FailStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CWScriptParser.RULE_failStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.failExpr_();
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 268;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(CWScriptParser.FOR);
			{
			this.state = 272;
			_localctx._binding = this.binding_();
			}
			this.state = 273;
			this.match(CWScriptParser.IN);
			{
			this.state = 274;
			_localctx._iter = this.expr(0);
			}
			this.state = 275;
			_localctx._body = this.block();
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 276;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execStmt(): ExecStmtContext {
		let _localctx: ExecStmtContext = new ExecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_execStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(CWScriptParser.EXEC_NOW);
			this.state = 280;
			_localctx._value = this.expr(0);
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 281;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateStmt(): InstantiateStmtContext {
		let _localctx: InstantiateStmtContext = new InstantiateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_instantiateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(CWScriptParser.INSTANTIATE_NOW);
			this.state = 285;
			_localctx._value = this.expr(0);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 286;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emitStmt(): EmitStmtContext {
		let _localctx: EmitStmtContext = new EmitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_emitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(CWScriptParser.EMIT);
			this.state = 290;
			_localctx._value = this.expr(0);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 291;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defn(): DefnContext {
		let _localctx: DefnContext = new DefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CWScriptParser.RULE_defn);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 294;
				this.contractDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.interfaceDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 296;
				this.structDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 297;
				this.tupleDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 298;
				this.unitDefn();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 299;
				this.enumDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 300;
				this.typeAliasDefn();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 301;
				this.fnDefn();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 302;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 303;
				this.execDefn();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 304;
				this.execTupleDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 305;
				this.queryDefn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 306;
				this.queryTupleDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 307;
				this.errorDefn();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 308;
				this.eventDefn();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 309;
				this.stateBlockDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefn(): ContractDefnContext {
		let _localctx: ContractDefnContext = new ContractDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_contractDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 312;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 315;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 316;
			_localctx._name = this.ident();
			}
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 317;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 318;
				_localctx._base = this.typeExpr(0);
				}
				}
			}

			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 321;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 322;
				_localctx._interfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 325;
			_localctx._body = this.block();
			}
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 326;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDefn(): InterfaceDefnContext {
		let _localctx: InterfaceDefnContext = new InterfaceDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 329;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 332;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 333;
			_localctx._name = this.ident();
			}
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 334;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 335;
				_localctx._baseInterfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 338;
			_localctx._body = this.block();
			}
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 339;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefn(): StructDefnContext {
		let _localctx: StructDefnContext = new StructDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 342;
					(_localctx as StructDefnBraceContext)._spec = this.cwspec();
					}
				}

				this.state = 345;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 346;
				(_localctx as StructDefnBraceContext)._name = this.ident();
				}
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 347;
					(_localctx as StructDefnBraceContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 350;
				(_localctx as StructDefnBraceContext)._fields = this.braceParamList();
				}
				this.state = 352;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 351;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new StructDefnParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 354;
					(_localctx as StructDefnParenContext)._spec = this.cwspec();
					}
				}

				this.state = 357;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 358;
				(_localctx as StructDefnParenContext)._name = this.ident();
				}
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 359;
					(_localctx as StructDefnParenContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 362;
				(_localctx as StructDefnParenContext)._fields = this.parenParamList();
				}
				this.state = 364;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 363;
					this.match(CWScriptParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleDefn(): TupleDefnContext {
		let _localctx: TupleDefnContext = new TupleDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CWScriptParser.RULE_tupleDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 368;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 371;
			this.match(CWScriptParser.TUPLE);
			{
			this.state = 372;
			_localctx._name = this.ident();
			}
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 373;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 376;
			this.match(CWScriptParser.LPAREN);
			{
			this.state = 377;
			_localctx._elements = this.brackTypeExprList();
			}
			this.state = 378;
			this.match(CWScriptParser.RPAREN);
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 379;
				this.match(CWScriptParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unitDefn(): UnitDefnContext {
		let _localctx: UnitDefnContext = new UnitDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CWScriptParser.RULE_unitDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 382;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 385;
			this.match(CWScriptParser.UNIT);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 386;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 389;
			_localctx._name = this.ident();
			}
			this.state = 391;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 390;
				this.match(CWScriptParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefn(): EnumDefnContext {
		let _localctx: EnumDefnContext = new EnumDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 393;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 396;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 397;
			_localctx._name = this.ident();
			}
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 398;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 401;
			this.match(CWScriptParser.LBRACE);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 402;
				_localctx._variants = this.enumVariantDefnList();
				}
			}

			this.state = 405;
			this.match(CWScriptParser.RBRACE);
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 406;
				this.match(CWScriptParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumVariantDefnList(): EnumVariantDefnListContext {
		let _localctx: EnumVariantDefnListContext = new EnumVariantDefnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CWScriptParser.RULE_enumVariantDefnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 409;
			this.enumVariantDefn();
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 410;
				this.match(CWScriptParser.COMMA);
				this.state = 411;
				this.enumVariantDefn();
				}
				}
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumVariantDefn(): EnumVariantDefnContext {
		let _localctx: EnumVariantDefnContext = new EnumVariantDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_enumVariantDefn);
		let _la: number;
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 417;
					(_localctx as EnumVariantStructDefnBraceContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 420;
				(_localctx as EnumVariantStructDefnBraceContext)._name = this.ident();
				}
				{
				this.state = 421;
				(_localctx as EnumVariantStructDefnBraceContext)._fields = this.braceParamList();
				}
				}
				break;

			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 423;
					(_localctx as EnumVariantStructDefnParenContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 426;
				(_localctx as EnumVariantStructDefnParenContext)._name = this.ident();
				}
				{
				this.state = 427;
				(_localctx as EnumVariantStructDefnParenContext)._fields = this.parenParamList();
				}
				}
				break;

			case 3:
				_localctx = new EnumVariantTupleDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 429;
					(_localctx as EnumVariantTupleDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 432;
				(_localctx as EnumVariantTupleDefnContext)._name = this.ident();
				}
				this.state = 433;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 434;
				(_localctx as EnumVariantTupleDefnContext)._elements = this.brackTypeExprList();
				}
				this.state = 435;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				_localctx = new EnumVariantUnitDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 437;
					(_localctx as EnumVariantUnitDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 440;
				(_localctx as EnumVariantUnitDefnContext)._name = this.ident();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDefn(): TypeAliasDefnContext {
		let _localctx: TypeAliasDefnContext = new TypeAliasDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CWScriptParser.RULE_typeAliasDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 443;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 446;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 447;
			_localctx._name = this.ident();
			}
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 448;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 451;
			this.match(CWScriptParser.EQ);
			{
			this.state = 452;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 453;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDefn(): FnDefnContext {
		let _localctx: FnDefnContext = new FnDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CWScriptParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 456;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 459;
			this.match(CWScriptParser.FN);
			{
			this.state = 460;
			_localctx._name = this.ident();
			}
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 461;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 464;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 467;
			_localctx._params = this.parenParamList();
			}
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 468;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 469;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 472;
			_localctx._body = this.block();
			}
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 473;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDefn(): InstantiateDefnContext {
		let _localctx: InstantiateDefnContext = new InstantiateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CWScriptParser.RULE_instantiateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 476;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 479;
			this.match(CWScriptParser.H_INSTANTIATE);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 480;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 483;
			_localctx._params = this.parenParamList();
			}
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 484;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 485;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 488;
			_localctx._body = this.block();
			}
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 489;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefn(): ExecDefnContext {
		let _localctx: ExecDefnContext = new ExecDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CWScriptParser.RULE_execDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 492;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 495;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 496;
			_localctx._name = this.ident();
			}
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 497;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 500;
			_localctx._params = this.parenParamList();
			}
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 501;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 502;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 505;
			_localctx._body = this.block();
			}
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 506;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execTupleDefn(): ExecTupleDefnContext {
		let _localctx: ExecTupleDefnContext = new ExecTupleDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CWScriptParser.RULE_execTupleDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 509;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 512;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 513;
			_localctx._name = this.ident();
			}
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 514;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 517;
			_localctx._params = this.tupleParamList();
			}
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 518;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 519;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 522;
			_localctx._body = this.block();
			}
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 523;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDefn(): QueryDefnContext {
		let _localctx: QueryDefnContext = new QueryDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 526;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 529;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 530;
			_localctx._name = this.ident();
			}
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 531;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 534;
			_localctx._params = this.parenParamList();
			}
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 535;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 536;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 539;
			_localctx._body = this.block();
			}
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 540;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryTupleDefn(): QueryTupleDefnContext {
		let _localctx: QueryTupleDefnContext = new QueryTupleDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CWScriptParser.RULE_queryTupleDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 543;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 546;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 547;
			_localctx._name = this.ident();
			}
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 548;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 551;
			_localctx._params = this.tupleParamList();
			}
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 552;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 553;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 556;
			_localctx._body = this.block();
			}
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 557;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefn(): ErrorDefnContext {
		let _localctx: ErrorDefnContext = new ErrorDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CWScriptParser.RULE_errorDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 560;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 563;
			this.match(CWScriptParser.ERROR);
			{
			this.state = 564;
			_localctx._name = this.ident();
			}
			{
			this.state = 565;
			_localctx._params = this.parenParamList();
			}
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 566;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefn(): EventDefnContext {
		let _localctx: EventDefnContext = new EventDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CWScriptParser.RULE_eventDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 569;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 572;
			this.match(CWScriptParser.EVENT);
			{
			this.state = 573;
			_localctx._name = this.ident();
			}
			{
			this.state = 574;
			_localctx._params = this.parenParamList();
			}
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 575;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateBlockDefn(): StateBlockDefnContext {
		let _localctx: StateBlockDefnContext = new StateBlockDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CWScriptParser.RULE_stateBlockDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.match(CWScriptParser.STATE);
			this.state = 579;
			this.match(CWScriptParser.LBRACE);
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				{
				this.state = 580;
				_localctx._stateDefn = this.stateDefn();
				_localctx._stateFields.push(_localctx._stateDefn);
				}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 586;
			this.match(CWScriptParser.RBRACE);
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 587;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefn(): StateDefnContext {
		let _localctx: StateDefnContext = new StateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CWScriptParser.RULE_stateDefn);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.stateItemDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 591;
				this.stateMapDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateItemDefn(): StateItemDefnContext {
		let _localctx: StateItemDefnContext = new StateItemDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CWScriptParser.RULE_stateItemDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 594;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 597;
			_localctx._name = this.ident();
			}
			this.state = 598;
			this.match(CWScriptParser.COLON);
			{
			this.state = 599;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 600;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateMapDefn(): StateMapDefnContext {
		let _localctx: StateMapDefnContext = new StateMapDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CWScriptParser.RULE_stateMapDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 603;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 606;
			_localctx._name = this.ident();
			}
			this.state = 607;
			this.match(CWScriptParser.LBRACK);
			{
			this.state = 608;
			_localctx._indexTy = this.typeExpr(0);
			}
			this.state = 609;
			this.match(CWScriptParser.RBRACK);
			this.state = 610;
			this.match(CWScriptParser.COLON);
			{
			this.state = 611;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 612;
				this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprStmt(): ExprStmtContext {
		let _localctx: ExprStmtContext = new ExprStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CWScriptParser.RULE_exprStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.expr(0);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 616;
				_localctx._semi = this.match(CWScriptParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 620;
				this.match(CWScriptParser.NOT);
				this.state = 621;
				this.expr(21);
				}
				break;

			case 2:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 622;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 623;
				this.expr(17);
				}
				break;

			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 624;
				this.ifExpr_();
				}
				break;

			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 625;
				this.tryCatchElseExpr_();
				}
				break;

			case 5:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 626;
				this.closureExpr_();
				}
				break;

			case 6:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 627;
				this.structExpr_();
				}
				break;

			case 7:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 628;
				this.tupleExpr_();
				}
				break;

			case 8:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 629;
				this.literal();
				}
				break;

			case 9:
				{
				_localctx = new ReturnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 630;
				this.returnExpr_();
				}
				break;

			case 10:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 631;
				this.failExpr_();
				}
				break;

			case 11:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 632;
				this.ident();
				}
				break;

			case 12:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 633;
				this.match(CWScriptParser.LPAREN);
				this.state = 634;
				this.expr(0);
				this.state = 635;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 704;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 639;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 640;
						(_localctx as MulExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CWScriptParser.MUL - 76)) | (1 << (CWScriptParser.DIV - 76)) | (1 << (CWScriptParser.MOD - 76)))) !== 0))) {
							(_localctx as MulExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 641;
						this.expr(21);
						}
						break;

					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 642;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						{
						this.state = 643;
						(_localctx as AddExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
							(_localctx as AddExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 644;
						this.expr(20);
						}
						break;

					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 645;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						{
						this.state = 646;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.LT - 82)) | (1 << (CWScriptParser.LT_EQ - 82)) | (1 << (CWScriptParser.GT - 82)) | (1 << (CWScriptParser.GT_EQ - 82)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 647;
						this.expr(19);
						}
						break;

					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 648;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 649;
						this.match(CWScriptParser.D_QUEST);
						this.state = 650;
						this.expr(17);
						}
						break;

					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 651;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 653;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 652;
							(_localctx as InExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						this.state = 655;
						this.match(CWScriptParser.IN);
						this.state = 656;
						this.expr(16);
						}
						break;

					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 657;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						{
						this.state = 658;
						(_localctx as EqExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.EQ_EQ || _la === CWScriptParser.NEQ)) {
							(_localctx as EqExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 659;
						this.expr(14);
						}
						break;

					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 660;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 661;
						this.match(CWScriptParser.AND);
						this.state = 662;
						this.expr(13);
						}
						break;

					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 663;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 664;
						this.match(CWScriptParser.OR);
						this.state = 665;
						this.expr(12);
						}
						break;

					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 666;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 667;
						this.match(CWScriptParser.DOT);
						{
						this.state = 668;
						(_localctx as DotExprContext)._memberName = this.ident();
						}
						}
						break;

					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 669;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 671;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 670;
							(_localctx as CallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 674;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.LBRACK) {
							{
							this.state = 673;
							(_localctx as CallExprContext)._typeArgs = this.brackTypeExprList();
							}
						}

						this.state = 676;
						this.match(CWScriptParser.LPAREN);
						this.state = 685;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
							{
							{
							this.state = 677;
							(_localctx as CallExprContext)._arg = this.arg();
							(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
							}
							this.state = 682;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 678;
								this.match(CWScriptParser.COMMA);
								this.state = 679;
								(_localctx as CallExprContext)._arg = this.arg();
								(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
								}
								}
								this.state = 684;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 687;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 688;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 689;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 690;
						(_localctx as IndexExprContext)._index = this.expr(0);
						}
						this.state = 691;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 12:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 693;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 694;
						this.match(CWScriptParser.AS);
						{
						this.state = 695;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 696;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 697;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 14:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 698;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 699;
						this.match(CWScriptParser.IS);
						this.state = 701;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 700;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 703;
						(_localctx as IsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;
					}
					}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExpr_(): IfExpr_Context {
		let _localctx: IfExpr_Context = new IfExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, CWScriptParser.RULE_ifExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(CWScriptParser.IF);
			{
			this.state = 710;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 711;
			_localctx._thenBody = this.blockOrExpr();
			}
			this.state = 714;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 712;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 713;
				_localctx._elseBody = this.blockOrExpr();
				}
				}
				break;
			}
			this.state = 717;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 716;
				this.match(CWScriptParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		let _localctx: TryCatchElseExpr_Context = new TryCatchElseExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.match(CWScriptParser.TRY);
			{
			this.state = 720;
			_localctx._body = this.block();
			}
			this.state = 724;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 721;
					_localctx._catchClause = this.catchClause();
					_localctx._catchClauses.push(_localctx._catchClause);
					}
					}
				}
				this.state = 726;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			}
			this.state = 729;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 727;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 728;
				_localctx._elseBody = this.block();
				}
				}
				break;
			}
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 731;
				this.match(CWScriptParser.SEMI);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(CWScriptParser.CATCH);
			{
			this.state = 735;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 736;
			_localctx._body = this.block();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureExpr_(): ClosureExpr_Context {
		let _localctx: ClosureExpr_Context = new ClosureExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_closureExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 738;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 741;
			_localctx._params = this.barParamList();
			}
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 742;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 743;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 746;
			_localctx._body = this.blockOrExpr();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structExpr_(): StructExpr_Context {
		let _localctx: StructExpr_Context = new StructExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 92, CWScriptParser.RULE_structExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 748;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 749;
			_localctx._fields = this.braceFieldList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpr_(): TupleExpr_Context {
		let _localctx: TupleExpr_Context = new TupleExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 94, CWScriptParser.RULE_tupleExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(CWScriptParser.LBRACK);
			this.state = 760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
				{
				{
				this.state = 752;
				_localctx._expr = this.expr(0);
				_localctx._elements.push(_localctx._expr);
				}
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 753;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 754;
					_localctx._expr = this.expr(0);
					_localctx._elements.push(_localctx._expr);
					}
					}
					}
					this.state = 759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 762;
			this.match(CWScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnExpr_(): ReturnExpr_Context {
		let _localctx: ReturnExpr_Context = new ReturnExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 96, CWScriptParser.RULE_returnExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(CWScriptParser.RETURN);
			{
			this.state = 765;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failExpr_(): FailExpr_Context {
		let _localctx: FailExpr_Context = new FailExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 98, CWScriptParser.RULE_failExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(CWScriptParser.FAIL);
			{
			this.state = 768;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CWScriptParser.RULE_literal);
		try {
			this.state = 775;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 770;
				this.stringLit();
				}
				break;
			case CWScriptParser.IntLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 771;
				this.intLit();
				}
				break;
			case CWScriptParser.DecLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 772;
				this.decLit();
				}
				break;
			case CWScriptParser.BoolLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 773;
				this.boolLit();
				}
				break;
			case CWScriptParser.NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 774;
				this.noneLit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLit(): StringLitContext {
		let _localctx: StringLitContext = new StringLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CWScriptParser.RULE_stringLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.match(CWScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intLit(): IntLitContext {
		let _localctx: IntLitContext = new IntLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CWScriptParser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(CWScriptParser.IntLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decLit(): DecLitContext {
		let _localctx: DecLitContext = new DecLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CWScriptParser.RULE_decLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.match(CWScriptParser.DecLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolLit(): BoolLitContext {
		let _localctx: BoolLitContext = new BoolLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CWScriptParser.RULE_boolLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(CWScriptParser.BoolLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noneLit(): NoneLitContext {
		let _localctx: NoneLitContext = new NoneLitContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CWScriptParser.RULE_noneLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(CWScriptParser.NONE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeExpr(): TypeExprContext;
	public typeExpr(_p: number): TypeExprContext;
	// @RuleVersion(0)
	public typeExpr(_p?: number): TypeExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeExprContext = new TypeExprContext(this._ctx, _parentState);
		let _prevctx: TypeExprContext = _localctx;
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, CWScriptParser.RULE_typeExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 788;
				this.match(CWScriptParser.LPAREN);
				this.state = 789;
				this.typeExpr(0);
				this.state = 790;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				{
				this.state = 792;
				(_localctx as TupleTypeExprContext)._elements = this.brackTypeExprList();
				}
				}
				break;

			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 793;
				this.match(CWScriptParser.LBRACK);
				this.state = 794;
				this.typeExpr(0);
				this.state = 795;
				this.match(CWScriptParser.SEMI);
				{
				this.state = 796;
				(_localctx as ArrayTypeExprContext)._size = this.intLit();
				}
				this.state = 797;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 4:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 799;
				this.structDefn();
				}
				break;

			case 5:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 800;
				this.tupleDefn();
				}
				break;

			case 6:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 801;
				this.unitDefn();
				}
				break;

			case 7:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 802;
				this.enumDefn();
				}
				break;

			case 8:
				{
				_localctx = new TypeVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 803;
				this.typeVar();
				}
				break;

			case 9:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 804;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 816;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 814;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 807;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 808;
						(_localctx as ParameterizedTypeExprContext)._typeArgs = this.brackTypeExprList();
						}
						}
						break;

					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 809;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 810;
						this.match(CWScriptParser.DOT);
						{
						this.state = 811;
						(_localctx as MemberTypeExprContext)._memberName = this.ident();
						}
						}
						break;

					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 812;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 813;
						this.match(CWScriptParser.QUEST);
						}
						break;
					}
					}
				}
				this.state = 818;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVar(): TypeVarContext {
		let _localctx: TypeVarContext = new TypeVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CWScriptParser.RULE_typeVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 819;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 822;
			this.match(CWScriptParser.TypeVar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CWScriptParser.RULE_ident);
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.HashIdent:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 824;
				this.match(CWScriptParser.HashIdent);
				}
				break;
			case CWScriptParser.DollarIdent:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 825;
				this.match(CWScriptParser.DollarIdent);
				}
				break;
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 826;
				this.match(CWScriptParser.Ident);
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.H_INSTANTIATE:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.NONE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.STRUCT:
			case CWScriptParser.TUPLE:
			case CWScriptParser.UNIT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 827;
				this.reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 830;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 833;
			_localctx._name = this.ident();
			}
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 834;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 837;
				this.match(CWScriptParser.COLON);
				{
				this.state = 838;
				_localctx._ty = this.typeExpr(0);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CWScriptParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 841;
			_localctx._name = this.ident();
			}
			this.state = 844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 842;
				this.match(CWScriptParser.COLON);
				{
				this.state = 843;
				_localctx._value = this.expr(0);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedArg(): NamedArgContext {
		let _localctx: NamedArgContext = new NamedArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CWScriptParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 846;
			_localctx._name = this.ident();
			}
			this.state = 847;
			this.match(CWScriptParser.EQ);
			{
			this.state = 848;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 852;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 850;
				this.expr(0);
				}
				break;

			case 2:
				{
				this.state = 851;
				this.namedArg();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identList(): IdentListContext {
		let _localctx: IdentListContext = new IdentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 854;
			this.ident();
			this.state = 859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 855;
				this.match(CWScriptParser.COMMA);
				this.state = 856;
				this.ident();
				}
				}
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenParamList(): ParenParamListContext {
		let _localctx: ParenParamListContext = new ParenParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CWScriptParser.RULE_parenParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this.match(CWScriptParser.LPAREN);
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 863;
				this.param();
				this.state = 868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 864;
					this.match(CWScriptParser.COMMA);
					this.state = 865;
					this.param();
					}
					}
					this.state = 870;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 873;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleParamList(): TupleParamListContext {
		let _localctx: TupleParamListContext = new TupleParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CWScriptParser.RULE_tupleParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(CWScriptParser.LPAREN);
			this.state = 876;
			this.match(CWScriptParser.LBRACK);
			this.state = 885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 877;
				this.param();
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 878;
					this.match(CWScriptParser.COMMA);
					this.state = 879;
					this.param();
					}
					}
					this.state = 884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 887;
			this.match(CWScriptParser.RBRACK);
			this.state = 888;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public braceParamList(): BraceParamListContext {
		let _localctx: BraceParamListContext = new BraceParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CWScriptParser.RULE_braceParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.match(CWScriptParser.LBRACE);
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 891;
				this.param();
				this.state = 896;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 892;
						this.match(CWScriptParser.COMMA);
						this.state = 893;
						this.param();
						}
						}
					}
					this.state = 898;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				}
				}
			}

			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 901;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 904;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public barParamList(): BarParamListContext {
		let _localctx: BarParamListContext = new BarParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CWScriptParser.RULE_barParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(CWScriptParser.BAR);
			this.state = 915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 907;
				this.param();
				this.state = 912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 908;
					this.match(CWScriptParser.COMMA);
					this.state = 909;
					this.param();
					}
					}
					this.state = 914;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 917;
			this.match(CWScriptParser.BAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public brackTypeParamList(): BrackTypeParamListContext {
		let _localctx: BrackTypeParamListContext = new BrackTypeParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CWScriptParser.RULE_brackTypeParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
			this.match(CWScriptParser.LBRACK);
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CWScriptParser.TypeVar - 91)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 91)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 91)))) !== 0)) {
				{
				this.state = 920;
				this.typeVar();
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 921;
					this.match(CWScriptParser.COMMA);
					this.state = 922;
					this.typeVar();
					}
					}
					this.state = 927;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 930;
			this.match(CWScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public brackTypeExprList(): BrackTypeExprListContext {
		let _localctx: BrackTypeExprListContext = new BrackTypeExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CWScriptParser.RULE_brackTypeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 932;
			this.match(CWScriptParser.LBRACK);
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.TypeVar - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 933;
				this.typeExpr(0);
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 934;
					this.match(CWScriptParser.COMMA);
					this.state = 935;
					this.typeExpr(0);
					}
					}
					this.state = 940;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 943;
			this.match(CWScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public braceFieldList(): BraceFieldListContext {
		let _localctx: BraceFieldListContext = new BraceFieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CWScriptParser.RULE_braceFieldList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this.match(CWScriptParser.LBRACE);
			this.state = 954;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 946;
				this.field();
				this.state = 951;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 947;
						this.match(CWScriptParser.COMMA);
						this.state = 948;
						this.field();
						}
						}
					}
					this.state = 953;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				}
				}
			}

			this.state = 957;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 956;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 959;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeExprList(): TypeExprListContext {
		let _localctx: TypeExprListContext = new TypeExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CWScriptParser.RULE_typeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 961;
			this.typeExpr(0);
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 962;
				this.match(CWScriptParser.COMMA);
				this.state = 963;
				this.typeExpr(0);
				}
				}
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.match(CWScriptParser.LBRACE);
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
				{
				{
				this.state = 970;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 976;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockOrExpr(): BlockOrExprContext {
		let _localctx: BlockOrExprContext = new BlockOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CWScriptParser.RULE_blockOrExpr);
		try {
			this.state = 980;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 978;
				this.block();
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.QUERY_NOW:
			case CWScriptParser.H_INSTANTIATE:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.TRY:
			case CWScriptParser.ELSE:
			case CWScriptParser.NOT:
			case CWScriptParser.NONE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.FAIL:
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.TUPLE:
			case CWScriptParser.UNIT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.LPAREN:
			case CWScriptParser.LBRACK:
			case CWScriptParser.BANG:
			case CWScriptParser.BAR:
			case CWScriptParser.BoolLiteral:
			case CWScriptParser.HashIdent:
			case CWScriptParser.DollarIdent:
			case CWScriptParser.Ident:
			case CWScriptParser.TypeVar:
			case CWScriptParser.StringLiteral:
			case CWScriptParser.IntLiteral:
			case CWScriptParser.DecLiteral:
			case CWScriptParser.CWSPEC_LINE_COMMENT:
			case CWScriptParser.CWSPEC_BLOCK_COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 979;
				this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 41:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 56:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 13);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 26);

		case 9:
			return this.precpred(this._ctx, 25);

		case 10:
			return this.precpred(this._ctx, 24);

		case 11:
			return this.precpred(this._ctx, 23);

		case 12:
			return this.precpred(this._ctx, 22);

		case 13:
			return this.precpred(this._ctx, 14);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 11);

		case 15:
			return this.precpred(this._ctx, 10);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u03DB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x03\x02\x07\x02\x9A" +
		"\n\x02\f\x02\x0E\x02\x9D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xB3\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\xB8\n\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\xBE\n\x05\x03\x06\x05\x06\xC1\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\xC9\n\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\xCE\n\x07\x03\x07\x03\x07\x05\x07\xD2\n\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\xD7\n\x07\x03\x07\x05\x07\xDA\n\x07\x03\b\x05\b\xDD\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\xE3\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\xE9\n\b\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\xEF\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\xF7\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0100\n" +
		"\v\x03\f\x03\f\x05\f\u0104\n\f\x03\r\x03\r\x05\r\u0108\n\r\x03\x0E\x03" +
		"\x0E\x05\x0E\u010C\n\x0E\x03\x0F\x03\x0F\x05\x0F\u0110\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0118\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u011D\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0122\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u0127\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0139\n\x14\x03\x15\x05\x15\u013C" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0142\n\x15\x03\x15\x03" +
		"\x15\x05\x15\u0146\n\x15\x03\x15\x03\x15\x05\x15\u014A\n\x15\x03\x16\x05" +
		"\x16\u014D\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0153\n\x16\x03" +
		"\x16\x03\x16\x05\x16\u0157\n\x16\x03\x17\x05\x17\u015A\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u015F\n\x17\x03\x17\x03\x17\x05\x17\u0163\n\x17\x03" +
		"\x17\x05\x17\u0166\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u016B\n\x17\x03" +
		"\x17\x03\x17\x05\x17\u016F\n\x17\x05\x17\u0171\n\x17\x03\x18\x05\x18\u0174" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0179\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u017F\n\x18\x03\x19\x05\x19\u0182\n\x19\x03\x19\x03" +
		"\x19\x05\x19\u0186\n\x19\x03\x19\x03\x19\x05\x19\u018A\n\x19\x03\x1A\x05" +
		"\x1A\u018D\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0192\n\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u0196\n\x1A\x03\x1A\x03\x1A\x05\x1A\u019A\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u019F\n\x1B\f\x1B\x0E\x1B\u01A2\v\x1B\x03\x1C\x05" +
		"\x1C\u01A5\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01AB\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01B1\n\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01B9\n\x1C\x03\x1C\x05\x1C\u01BC\n\x1C" +
		"\x03\x1D\x05\x1D\u01BF\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01C4\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01C9\n\x1D\x03\x1E\x05\x1E\u01CC\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D1\n\x1E\x03\x1E\x05\x1E\u01D4\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D9\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01DD" +
		"\n\x1E\x03\x1F\x05\x1F\u01E0\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01E4\n\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01E9\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01ED" +
		"\n\x1F\x03 \x05 \u01F0\n \x03 \x03 \x03 \x05 \u01F5\n \x03 \x03 \x03 " +
		"\x05 \u01FA\n \x03 \x03 \x05 \u01FE\n \x03!\x05!\u0201\n!\x03!\x03!\x03" +
		"!\x05!\u0206\n!\x03!\x03!\x03!\x05!\u020B\n!\x03!\x03!\x05!\u020F\n!\x03" +
		"\"\x05\"\u0212\n\"\x03\"\x03\"\x03\"\x05\"\u0217\n\"\x03\"\x03\"\x03\"" +
		"\x05\"\u021C\n\"\x03\"\x03\"\x05\"\u0220\n\"\x03#\x05#\u0223\n#\x03#\x03" +
		"#\x03#\x05#\u0228\n#\x03#\x03#\x03#\x05#\u022D\n#\x03#\x03#\x05#\u0231" +
		"\n#\x03$\x05$\u0234\n$\x03$\x03$\x03$\x03$\x05$\u023A\n$\x03%\x05%\u023D" +
		"\n%\x03%\x03%\x03%\x03%\x05%\u0243\n%\x03&\x03&\x03&\x07&\u0248\n&\f&" +
		"\x0E&\u024B\v&\x03&\x03&\x05&\u024F\n&\x03\'\x03\'\x05\'\u0253\n\'\x03" +
		"(\x05(\u0256\n(\x03(\x03(\x03(\x03(\x05(\u025C\n(\x03)\x05)\u025F\n)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0268\n)\x03*\x03*\x05*\u026C\n*" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x05+\u0280\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0290\n+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02A2" +
		"\n+\x03+\x05+\u02A5\n+\x03+\x03+\x03+\x03+\x07+\u02AB\n+\f+\x0E+\u02AE" +
		"\v+\x05+\u02B0\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x05+\u02C0\n+\x03+\x07+\u02C3\n+\f+\x0E+\u02C6\v+\x03" +
		",\x03,\x03,\x03,\x03,\x05,\u02CD\n,\x03,\x05,\u02D0\n,\x03-\x03-\x03-" +
		"\x07-\u02D5\n-\f-\x0E-\u02D8\v-\x03-\x03-\x05-\u02DC\n-\x03-\x05-\u02DF" +
		"\n-\x03.\x03.\x03.\x03.\x03/\x05/\u02E6\n/\x03/\x03/\x03/\x05/\u02EB\n" +
		"/\x03/\x03/\x030\x030\x030\x031\x031\x031\x031\x071\u02F6\n1\f1\x0E1\u02F9" +
		"\v1\x051\u02FB\n1\x031\x031\x032\x032\x032\x033\x033\x033\x034\x034\x03" +
		"4\x034\x034\x054\u030A\n4\x035\x035\x036\x036\x037\x037\x038\x038\x03" +
		"9\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x05:\u0328\n:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x07:\u0331\n:\f:\x0E:\u0334\v:\x03;\x05;\u0337\n;\x03;\x03;\x03" +
		"<\x03<\x03<\x03<\x05<\u033F\n<\x03=\x05=\u0342\n=\x03=\x03=\x05=\u0346" +
		"\n=\x03=\x03=\x05=\u034A\n=\x03>\x03>\x03>\x05>\u034F\n>\x03?\x03?\x03" +
		"?\x03?\x03@\x03@\x05@\u0357\n@\x03A\x03A\x03A\x07A\u035C\nA\fA\x0EA\u035F" +
		"\vA\x03B\x03B\x03B\x03B\x07B\u0365\nB\fB\x0EB\u0368\vB\x05B\u036A\nB\x03" +
		"B\x03B\x03C\x03C\x03C\x03C\x03C\x07C\u0373\nC\fC\x0EC\u0376\vC\x05C\u0378" +
		"\nC\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x07D\u0381\nD\fD\x0ED\u0384\vD" +
		"\x05D\u0386\nD\x03D\x05D\u0389\nD\x03D\x03D\x03E\x03E\x03E\x03E\x07E\u0391" +
		"\nE\fE\x0EE\u0394\vE\x05E\u0396\nE\x03E\x03E\x03F\x03F\x03F\x03F\x07F" +
		"\u039E\nF\fF\x0EF\u03A1\vF\x05F\u03A3\nF\x03F\x03F\x03G\x03G\x03G\x03" +
		"G\x07G\u03AB\nG\fG\x0EG\u03AE\vG\x05G\u03B0\nG\x03G\x03G\x03H\x03H\x03" +
		"H\x03H\x07H\u03B8\nH\fH\x0EH\u03BB\vH\x05H\u03BD\nH\x03H\x05H\u03C0\n" +
		"H\x03H\x03H\x03I\x03I\x03I\x07I\u03C7\nI\fI\x0EI\u03CA\vI\x03J\x03J\x07" +
		"J\u03CE\nJ\fJ\x0EJ\u03D1\vJ\x03J\x03J\x03K\x03K\x05K\u03D7\nK\x03L\x03" +
		"L\x03L\x02\x02\x04TrM\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x02\t\x03\x02ab\b" +
		"\x02GGKKMMOOQQSS\x05\x02NNPPRR\x04\x02JJLL\x03\x02TW\x03\x02HI\b\x02\x04" +
		"\n\x10\x19\x1D\x1D\x1F\x1F!&*/\x02\u0461\x02\x9B\x03\x02\x02\x02\x04\xA0" +
		"\x03\x02\x02\x02\x06\xB2\x03\x02\x02\x02\b\xB4\x03\x02\x02\x02\n\xC0\x03" +
		"\x02\x02\x02\f\xD9\x03\x02\x02\x02\x0E\xDC\x03\x02\x02\x02\x10\xEA\x03" +
		"\x02\x02\x02\x12\xF0\x03\x02\x02\x02\x14\xF8\x03\x02\x02\x02\x16\u0101" +
		"\x03\x02\x02\x02\x18\u0105\x03\x02\x02\x02\x1A\u0109\x03\x02\x02\x02\x1C" +
		"\u010D\x03\x02\x02\x02\x1E\u0111\x03\x02\x02\x02 \u0119\x03\x02\x02\x02" +
		"\"\u011E\x03\x02\x02\x02$\u0123\x03\x02\x02\x02&\u0138\x03\x02\x02\x02" +
		"(\u013B\x03\x02\x02\x02*\u014C\x03\x02\x02\x02,\u0170\x03\x02\x02\x02" +
		".\u0173\x03\x02\x02\x020\u0181\x03\x02\x02\x022\u018C\x03\x02\x02\x02" +
		"4\u019B\x03\x02\x02\x026\u01BB\x03\x02\x02\x028\u01BE\x03\x02\x02\x02" +
		":\u01CB\x03\x02\x02\x02<\u01DF\x03\x02\x02\x02>\u01EF\x03\x02\x02\x02" +
		"@\u0200\x03\x02\x02\x02B\u0211\x03\x02\x02\x02D\u0222\x03\x02\x02\x02" +
		"F\u0233\x03\x02\x02\x02H\u023C\x03\x02\x02\x02J\u0244\x03\x02\x02\x02" +
		"L\u0252\x03\x02\x02\x02N\u0255\x03\x02\x02\x02P\u025E\x03\x02\x02\x02" +
		"R\u0269\x03\x02\x02\x02T\u027F\x03\x02\x02\x02V\u02C7\x03\x02\x02\x02" +
		"X\u02D1\x03\x02\x02\x02Z\u02E0\x03\x02\x02\x02\\\u02E5\x03\x02\x02\x02" +
		"^\u02EE\x03\x02\x02\x02`\u02F1\x03\x02\x02\x02b\u02FE\x03\x02\x02\x02" +
		"d\u0301\x03\x02\x02\x02f\u0309\x03\x02\x02\x02h\u030B\x03\x02\x02\x02" +
		"j\u030D\x03\x02\x02\x02l\u030F\x03\x02\x02\x02n\u0311\x03\x02\x02\x02" +
		"p\u0313\x03\x02\x02\x02r\u0327\x03\x02\x02\x02t\u0336\x03\x02\x02\x02" +
		"v\u033E\x03\x02\x02\x02x\u0341\x03\x02\x02\x02z\u034B\x03\x02\x02\x02" +
		"|\u0350\x03\x02\x02\x02~\u0356\x03\x02\x02\x02\x80\u0358\x03\x02\x02\x02" +
		"\x82\u0360\x03\x02\x02\x02\x84\u036D\x03\x02\x02\x02\x86\u037C\x03\x02" +
		"\x02\x02\x88\u038C\x03\x02\x02\x02\x8A\u0399\x03\x02\x02\x02\x8C\u03A6" +
		"\x03\x02\x02\x02\x8E\u03B3\x03\x02\x02\x02\x90\u03C3\x03\x02\x02\x02\x92" +
		"\u03CB\x03\x02\x02\x02\x94\u03D6\x03\x02\x02\x02\x96\u03D8\x03\x02\x02" +
		"\x02\x98\x9A\x05\x06\x04\x02\x99\x98\x03\x02\x02\x02\x9A\x9D\x03\x02\x02" +
		"\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02\x02" +
		"\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\x07\x02\x02\x03\x9F\x03\x03\x02\x02" +
		"\x02\xA0\xA1\t\x02\x02\x02\xA1\x05\x03\x02\x02\x02\xA2\xB3\x05\b\x05\x02" +
		"\xA3\xB3\x05&\x14\x02\xA4\xB3\x05\n\x06\x02\xA5\xB3\x05\x0E\b\x02\xA6" +
		"\xB3\x05\x10\t\x02\xA7\xB3\x05\x12\n\x02\xA8\xB3\x05\x14\v\x02\xA9\xB3" +
		"\x05\x18\r\x02\xAA\xB3\x05\x16\f\x02\xAB\xB3\x05\x1E\x10\x02\xAC\xB3\x05" +
		" \x11\x02\xAD\xB3\x05\"\x12\x02\xAE\xB3\x05$\x13\x02\xAF\xB3\x05\x1C\x0F" +
		"\x02\xB0\xB3\x05\x1A\x0E\x02\xB1\xB3\x05R*\x02\xB2\xA2\x03\x02\x02\x02" +
		"\xB2\xA3\x03\x02\x02\x02\xB2\xA4\x03\x02\x02\x02\xB2\xA5\x03\x02\x02\x02" +
		"\xB2\xA6\x03\x02\x02\x02\xB2\xA7\x03\x02\x02\x02\xB2\xA8\x03\x02\x02\x02" +
		"\xB2\xA9\x03\x02\x02\x02\xB2\xAA\x03\x02\x02\x02\xB2\xAB\x03\x02\x02\x02" +
		"\xB2\xAC\x03\x02\x02\x02\xB2\xAD\x03\x02\x02\x02\xB2\xAE\x03\x02\x02\x02" +
		"\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02" +
		"\xB3\x07\x03\x02\x02\x02\xB4\xB5\x07\x06\x02\x02\xB5\xB7\x076\x02\x02" +
		"\xB6\xB8\x05\x80A\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02" +
		"\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x077\x02\x02\xBA\xBB\x07\x17\x02\x02" +
		"\xBB\xBD\x05h5\x02\xBC\xBE\x07=\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE" +
		"\x03\x02\x02\x02\xBE\t\x03\x02\x02\x02\xBF\xC1\x05\x04\x03\x02\xC0\xBF" +
		"\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3" +
		"\x07&\x02\x02\xC3\xC4\x05\f\x07\x02\xC4\xC5\x07G\x02\x02\xC5\xC6\x05T" +
		"+\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC9\x07=\x02\x02\xC8\xC7\x03\x02\x02" +
		"\x02\xC8\xC9\x03\x02\x02\x02\xC9\v\x03\x02\x02\x02\xCA\xCD\x05v<\x02\xCB" +
		"\xCC\x07>\x02\x02\xCC\xCE\x05r:\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE\xDA\x03\x02\x02\x02\xCF\xD1\x074\x02\x02\xD0\xD2\x05" +
		"\x80A\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03" +
		"\x02\x02\x02\xD3\xDA\x075\x02\x02\xD4\xD6\x076\x02\x02\xD5\xD7\x05\x80" +
		"A\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02" +
		"\x02\x02\xD8\xDA\x077\x02\x02\xD9\xCA\x03\x02\x02\x02\xD9\xCF\x03\x02" +
		"\x02\x02\xD9\xD4\x03\x02\x02\x02\xDA\r\x03\x02\x02\x02\xDB\xDD\x05\x04" +
		"\x03\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02" +
		"\x02\x02\xDE\xDF\x07\'\x02\x02\xDF\xE2\x05v<\x02\xE0\xE1\x07>\x02\x02" +
		"\xE1\xE3\x05r:\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE5\x07G\x02\x02\xE5\xE6\x05T+\x02\xE6\xE8\x03" +
		"\x02\x02\x02\xE7\xE9\x07=\x02\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\x0F\x03\x02\x02\x02\xEA\xEB\x05v<\x02\xEB\xEC\t\x03\x02" +
		"\x02\xEC\xEE\x05T+\x02\xED\xEF\x07=\x02\x02\xEE\xED\x03\x02\x02\x02\xEE" +
		"\xEF\x03\x02\x02\x02\xEF\x11\x03\x02\x02\x02\xF0\xF1\x05T+\x02\xF1\xF2" +
		"\x078\x02\x02\xF2\xF3\x05v<\x02\xF3\xF4\t\x03\x02\x02\xF4\xF6\x05T+\x02" +
		"\xF5\xF7\x07=\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02" +
		"\xF7\x13\x03\x02\x02\x02\xF8\xF9\x05T+\x02\xF9\xFA\x074\x02\x02\xFA\xFB" +
		"\x05T+\x02\xFB\xFC\x075\x02\x02\xFC\xFD\t\x03\x02\x02\xFD\xFF\x05T+\x02" +
		"\xFE\u0100\x07=\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
		"\x02\u0100\x15\x03\x02\x02\x02\u0101\u0103\x05X-\x02\u0102\u0104\x07=" +
		"\x02\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104" +
		"\x17\x03\x02\x02\x02\u0105\u0107\x05V,\x02\u0106\u0108\x07=\x02\x02\u0107" +
		"\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\x19\x03\x02\x02" +
		"\x02\u0109\u010B\x05b2\x02\u010A\u010C\x07=\x02\x02\u010B\u010A\x03\x02" +
		"\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\x1B\x03\x02\x02\x02\u010D\u010F" +
		"\x05d3\x02\u010E\u0110\x07=\x02\x02\u010F\u010E\x03\x02\x02\x02\u010F" +
		"\u0110\x03\x02\x02\x02\u0110\x1D\x03\x02\x02\x02\u0111\u0112\x07\x15\x02" +
		"\x02\u0112\u0113\x05\f\x07\x02\u0113\u0114\x07\x16\x02\x02\u0114\u0115" +
		"\x05T+\x02\u0115\u0117\x05\x92J\x02\u0116\u0118\x07=\x02\x02\u0117\u0116" +
		"\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\x1F\x03\x02\x02\x02" +
		"\u0119\u011A\x07\r\x02\x02\u011A\u011C\x05T+\x02\u011B\u011D\x07=\x02" +
		"\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D!\x03" +
		"\x02\x02\x02\u011E\u011F\x07\f\x02\x02\u011F\u0121\x05T+\x02\u0120\u0122" +
		"\x07=\x02\x02\u0121\u0120\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02" +
		"\u0122#\x03\x02\x02\x02\u0123\u0124\x07/\x02\x02\u0124\u0126\x05T+\x02" +
		"\u0125\u0127\x07=\x02\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03" +
		"\x02\x02\x02\u0127%\x03\x02\x02\x02\u0128\u0139\x05(\x15\x02\u0129\u0139" +
		"\x05*\x16\x02\u012A\u0139\x05,\x17\x02\u012B\u0139\x05.\x18\x02\u012C" +
		"\u0139\x050\x19\x02\u012D\u0139\x052\x1A\x02\u012E\u0139\x058\x1D\x02" +
		"\u012F\u0139\x05:\x1E\x02\u0130\u0139\x05<\x1F\x02\u0131\u0139\x05> \x02" +
		"\u0132\u0139\x05@!\x02\u0133\u0139\x05B\"\x02\u0134\u0139\x05D#\x02\u0135" +
		"\u0139\x05F$\x02\u0136\u0139\x05H%\x02\u0137\u0139\x05J&\x02\u0138\u0128" +
		"\x03\x02\x02\x02\u0138\u0129\x03\x02\x02\x02\u0138\u012A\x03\x02\x02\x02" +
		"\u0138\u012B\x03\x02\x02\x02\u0138\u012C\x03\x02\x02\x02\u0138\u012D\x03" +
		"\x02\x02\x02\u0138\u012E\x03\x02\x02\x02\u0138\u012F\x03\x02\x02\x02\u0138" +
		"\u0130\x03\x02\x02\x02\u0138\u0131\x03\x02\x02\x02\u0138\u0132\x03\x02" +
		"\x02\x02\u0138\u0133\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02\u0138" +
		"\u0135\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0137\x03\x02" +
		"\x02\x02\u0139\'\x03\x02\x02\x02\u013A\u013C\x05\x04\x03\x02\u013B\u013A" +
		"\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02" +
		"\u013D\u013E\x07\x04\x02\x02\u013E\u0141\x05v<\x02\u013F\u0140\x07\b\x02" +
		"\x02\u0140\u0142\x05r:\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0144\x07\x07\x02\x02\u0144" +
		"\u0146\x05\x90I\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02" +
		"\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x05\x92J\x02\u0148\u014A" +
		"\x07=\x02\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02" +
		"\u014A)\x03\x02\x02\x02\u014B\u014D\x05\x04\x03\x02\u014C\u014B\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
		"\u014F\x07\x05\x02\x02\u014F\u0152\x05v<\x02\u0150\u0151\x07\b\x02\x02" +
		"\u0151\u0153\x05\x90I\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x05\x92J\x02\u0155" +
		"\u0157\x07=\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02" +
		"\x02\u0157+\x03\x02\x02\x02\u0158\u015A\x05\x04\x03\x02\u0159\u0158\x03" +
		"\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
		"\u015C\x07*\x02\x02\u015C\u015E\x05v<\x02\u015D\u015F\x05\x8AF\x02\u015E" +
		"\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02" +
		"\x02\x02\u0160\u0162\x05\x86D\x02\u0161\u0163\x07=\x02\x02\u0162\u0161" +
		"\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0171\x03\x02\x02\x02" +
		"\u0164\u0166\x05\x04\x03\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03" +
		"\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x07*\x02\x02\u0168" +
		"\u016A\x05v<\x02\u0169\u016B\x05\x8AF\x02\u016A\u0169\x03\x02\x02\x02" +
		"\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016E\x05" +
		"\x82B\x02\u016D\u016F\x07=\x02\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F" +
		"\x03\x02\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170\u0159\x03\x02\x02\x02" +
		"\u0170\u0165\x03\x02\x02\x02\u0171-\x03\x02\x02\x02\u0172\u0174\x05\x04" +
		"\x03\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174" +
		"\u0175\x03\x02\x02\x02\u0175\u0176\x07+\x02\x02\u0176\u0178\x05v<\x02" +
		"\u0177\u0179\x05\x8AF\x02\u0178\u0177\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x072\x02\x02\u017B" +
		"\u017C\x05\x8CG\x02\u017C\u017E\x073\x02\x02\u017D\u017F\x07=\x02\x02" +
		"\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F/\x03\x02" +
		"\x02\x02\u0180\u0182\x05\x04\x03\x02\u0181\u0180\x03\x02\x02\x02\u0181" +
		"\u0182\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0185\x07,\x02" +
		"\x02\u0184\u0186\x05\x8AF\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186" +
		"\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x05v<\x02\u0188" +
		"\u018A\x07=\x02\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02" +
		"\x02\u018A1\x03\x02\x02\x02\u018B\u018D\x05\x04\x03\x02\u018C\u018B\x03" +
		"\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		"\u018F\x07-\x02\x02\u018F\u0191\x05v<\x02\u0190\u0192\x05\x8AF\x02\u0191" +
		"\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03\x02" +
		"\x02\x02\u0193\u0195\x076\x02\x02\u0194\u0196\x054\x1B\x02\u0195\u0194" +
		"\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02" +
		"\u0197\u0199\x077\x02\x02\u0198\u019A\x07=\x02\x02\u0199\u0198\x03\x02" +
		"\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A3\x03\x02\x02\x02\u019B\u01A0" +
		"\x056\x1C\x02\u019C\u019D\x079\x02\x02\u019D\u019F\x056\x1C\x02\u019E" +
		"\u019C\x03\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02" +
		"\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A15\x03\x02\x02\x02\u01A2\u01A0" +
		"\x03\x02\x02\x02\u01A3\u01A5\x05\x04\x03\x02\u01A4\u01A3\x03\x02\x02\x02" +
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x05" +
		"v<\x02\u01A7\u01A8\x05\x86D\x02\u01A8\u01BC\x03\x02\x02\x02\u01A9\u01AB" +
		"\x05\x04\x03\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x05v<\x02\u01AD\u01AE\x05\x82" +
		"B\x02\u01AE\u01BC\x03\x02\x02\x02\u01AF\u01B1\x05\x04\x03\x02\u01B0\u01AF" +
		"\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02" +
		"\u01B2\u01B3\x05v<\x02\u01B3\u01B4\x072";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01B4\u01B5\x05\x8CG\x02\u01B5\u01B6\x073\x02\x02\u01B6\u01BC" +
		"\x03\x02\x02\x02\u01B7\u01B9\x05\x04\x03\x02\u01B8\u01B7\x03\x02\x02\x02" +
		"\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BC\x05" +
		"v<\x02\u01BB\u01A4\x03\x02\x02\x02\u01BB\u01AA\x03\x02\x02\x02\u01BB\u01B0" +
		"\x03\x02\x02\x02\u01BB\u01B8\x03\x02\x02\x02\u01BC7\x03\x02\x02\x02\u01BD" +
		"\u01BF\x05\x04\x03\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
		"\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x07.\x02\x02\u01C1\u01C3" +
		"\x05v<\x02\u01C2\u01C4\x05\x8AF\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3" +
		"\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07G\x02" +
		"\x02\u01C6\u01C8\x05r:\x02\u01C7\u01C9\x07=\x02\x02\u01C8\u01C7\x03\x02" +
		"\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C99\x03\x02\x02\x02\u01CA\u01CC" +
		"\x05\x04\x03\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
		"\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x07%\x02\x02\u01CE\u01D0\x05" +
		"v<\x02\u01CF\u01D1\x07<\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1" +
		"\x03\x02\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01D4\x05\x8AF\x02" +
		"\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5\u01D8\x05\x82B\x02\u01D6\u01D7\x07B\x02\x02\u01D7\u01D9" +
		"\x05r:\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
		"\u01DA\x03\x02\x02\x02\u01DA\u01DC\x05\x92J\x02\u01DB\u01DD\x07=\x02\x02" +
		"\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD;\x03\x02" +
		"\x02\x02\u01DE\u01E0\x05\x04\x03\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF" +
		"\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3\x07\x10" +
		"\x02\x02\u01E2\u01E4\x07<\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4" +
		"\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E8\x05\x82B\x02" +
		"\u01E6\u01E7\x07B\x02\x02\u01E7\u01E9\x05r:\x02\u01E8\u01E6\x03\x02\x02" +
		"\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EC" +
		"\x05\x92J\x02\u01EB\u01ED\x07=\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC" +
		"\u01ED\x03\x02\x02\x02\u01ED=\x03\x02\x02\x02\u01EE\u01F0\x05\x04\x03" +
		"\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1" +
		"\x03\x02\x02\x02\u01F1\u01F2\x07\x12\x02\x02\u01F2\u01F4\x05v<\x02\u01F3" +
		"\u01F5\x07<\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02" +
		"\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F9\x05\x82B\x02\u01F7\u01F8" +
		"\x07B\x02\x02\u01F8\u01FA\x05r:\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9" +
		"\u01FA\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x05\x92" +
		"J\x02\u01FC\u01FE\x07=\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE" +
		"\x03\x02\x02\x02\u01FE?\x03\x02\x02\x02\u01FF\u0201\x05\x04\x03\x02\u0200" +
		"\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03\x02" +
		"\x02\x02\u0202\u0203\x07\x12\x02\x02\u0203\u0205\x05v<\x02\u0204\u0206" +
		"\x07<\x02\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206\u0207\x03\x02\x02\x02\u0207\u020A\x05\x84C\x02\u0208\u0209\x07" +
		"B\x02\x02\u0209\u020B\x05r:\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B" +
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x05\x92J\x02" +
		"\u020D\u020F\x07=\x02\x02\u020E\u020D\x03\x02\x02\x02\u020E\u020F\x03" +
		"\x02\x02\x02\u020FA\x03\x02\x02\x02\u0210\u0212\x05\x04\x03\x02\u0211" +
		"\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02" +
		"\x02\x02\u0213\u0214\x07\x13\x02\x02\u0214\u0216\x05v<\x02\u0215\u0217" +
		"\x07<\x02\x02\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02" +
		"\u0217\u0218\x03\x02\x02\x02\u0218\u021B\x05\x82B\x02\u0219\u021A\x07" +
		"B\x02\x02\u021A\u021C\x05r:\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021C" +
		"\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021F\x05\x92J\x02" +
		"\u021E\u0220\x07=\x02\x02\u021F\u021E\x03\x02\x02\x02\u021F\u0220\x03" +
		"\x02\x02\x02\u0220C\x03\x02\x02\x02\u0221\u0223\x05\x04\x03\x02\u0222" +
		"\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02" +
		"\x02\x02\u0224\u0225\x07\x13\x02\x02\u0225\u0227\x05v<\x02\u0226\u0228" +
		"\x07<\x02\x02\u0227\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02" +
		"\u0228\u0229\x03\x02\x02\x02\u0229\u022C\x05\x84C\x02\u022A\u022B\x07" +
		"B\x02\x02\u022B\u022D\x05r:\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D" +
		"\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0230\x05\x92J\x02" +
		"\u022F\u0231\x07=\x02\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03" +
		"\x02\x02\x02\u0231E\x03\x02\x02\x02\u0232\u0234\x05\x04\x03\x02\u0233" +
		"\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02" +
		"\x02\x02\u0235\u0236\x07\t\x02\x02\u0236\u0237\x05v<\x02\u0237\u0239\x05" +
		"\x82B\x02\u0238\u023A\x07=\x02\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A" +
		"\x03\x02\x02\x02\u023AG\x03\x02\x02\x02\u023B\u023D\x05\x04\x03\x02\u023C" +
		"\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02" +
		"\x02\x02\u023E\u023F\x07\n\x02\x02\u023F\u0240\x05v<\x02\u0240\u0242\x05" +
		"\x82B\x02\u0241\u0243\x07=\x02\x02\u0242\u0241\x03\x02\x02\x02\u0242\u0243" +
		"\x03\x02\x02\x02\u0243I\x03\x02\x02\x02\u0244\u0245\x07\x18\x02\x02\u0245" +
		"\u0249\x076\x02\x02\u0246\u0248\x05L\'\x02\u0247\u0246\x03\x02\x02\x02" +
		"\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03" +
		"\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C" +
		"\u024E\x077\x02\x02\u024D\u024F\x07=\x02\x02\u024E\u024D\x03\x02\x02\x02" +
		"\u024E\u024F\x03\x02\x02\x02\u024FK\x03\x02\x02\x02\u0250\u0253\x05N(" +
		"\x02\u0251\u0253\x05P)\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0251\x03" +
		"\x02\x02\x02\u0253M\x03\x02\x02\x02\u0254\u0256\x05\x04\x03\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02" +
		"\x02\x02\u0257\u0258\x05v<\x02\u0258\u0259\x07>\x02\x02\u0259\u025B\x05" +
		"r:\x02\u025A\u025C\x07=\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C" +
		"\x03\x02\x02\x02\u025CO\x03\x02\x02\x02\u025D\u025F\x05\x04\x03\x02\u025E" +
		"\u025D\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02" +
		"\x02\x02\u0260\u0261\x05v<\x02\u0261\u0262\x074\x02\x02\u0262\u0263\x05" +
		"r:\x02\u0263\u0264\x075\x02\x02\u0264\u0265\x07>\x02\x02\u0265\u0267\x05" +
		"r:\x02\u0266\u0268\x07=\x02\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268" +
		"\x03\x02\x02\x02\u0268Q\x03\x02\x02\x02\u0269\u026B\x05T+\x02\u026A\u026C" +
		"\x07=\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02" +
		"\u026CS\x03\x02\x02\x02\u026D\u026E\b+\x01\x02\u026E\u026F\x07\x1E\x02" +
		"\x02\u026F\u0280\x05T+\x17\u0270\u0271\x07\x0E\x02\x02\u0271\u0280\x05" +
		"T+\x13\u0272\u0280\x05V,\x02\u0273\u0280\x05X-\x02\u0274\u0280\x05\\/" +
		"\x02\u0275\u0280\x05^0\x02\u0276\u0280\x05`1\x02\u0277\u0280\x05f4\x02" +
		"\u0278\u0280\x05b2\x02\u0279\u0280\x05d3\x02\u027A\u0280\x05v<\x02\u027B" +
		"\u027C\x072\x02\x02\u027C\u027D\x05T+\x02\u027D\u027E\x073\x02\x02\u027E" +
		"\u0280\x03\x02\x02\x02\u027F\u026D\x03\x02\x02\x02\u027F\u0270\x03\x02" +
		"\x02\x02\u027F\u0272\x03\x02\x02\x02\u027F\u0273\x03\x02\x02\x02\u027F" +
		"\u0274\x03\x02\x02\x02\u027F\u0275\x03\x02\x02\x02\u027F\u0276\x03\x02" +
		"\x02\x02\u027F\u0277\x03\x02\x02\x02\u027F\u0278\x03\x02\x02\x02\u027F" +
		"\u0279\x03\x02\x02\x02\u027F\u027A\x03\x02\x02\x02\u027F\u027B\x03\x02" +
		"\x02\x02\u0280\u02C4\x03\x02\x02\x02\u0281\u0282\f\x16\x02\x02\u0282\u0283" +
		"\t\x04\x02\x02\u0283\u02C3\x05T+\x17\u0284\u0285\f\x15\x02\x02\u0285\u0286" +
		"\t\x05\x02\x02\u0286\u02C3\x05T+\x16\u0287\u0288\f\x14\x02\x02\u0288\u0289" +
		"\t\x06\x02\x02\u0289\u02C3\x05T+\x15\u028A\u028B\f\x12\x02\x02\u028B\u028C" +
		"\x07:\x02\x02\u028C\u02C3\x05T+\x13\u028D\u028F\f\x11\x02\x02\u028E\u0290" +
		"\x07\x1E\x02\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02" +
		"\u0290\u0291\x03\x02\x02\x02\u0291\u0292\x07\x16\x02\x02\u0292\u02C3\x05" +
		"T+\x12\u0293\u0294\f\x0F\x02\x02\u0294\u0295\t\x07\x02\x02\u0295\u02C3" +
		"\x05T+\x10\u0296\u0297\f\x0E\x02\x02\u0297\u0298\x07!\x02\x02\u0298\u02C3" +
		"\x05T+\x0F\u0299\u029A\f\r\x02\x02\u029A\u029B\x07\"\x02\x02\u029B\u02C3" +
		"\x05T+\x0E\u029C\u029D\f\x1C\x02\x02\u029D\u029E\x078\x02\x02\u029E\u02C3" +
		"\x05v<\x02\u029F\u02A1\f\x1B\x02\x02\u02A0\u02A2\x07<\x02\x02\u02A1\u02A0" +
		"\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02\x02\x02" +
		"\u02A3\u02A5\x05\x8CG\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03" +
		"\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02AF\x072\x02\x02\u02A7" +
		"\u02AC\x05~@\x02\u02A8\u02A9\x079\x02\x02\u02A9\u02AB\x05~@\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02" +
		"\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE" +
		"\u02AC\x03\x02\x02\x02\u02AF\u02A7\x03\x02\x02\x02\u02AF\u02B0\x03\x02" +
		"\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02C3\x073\x02\x02\u02B2\u02B3" +
		"\f\x1A\x02\x02\u02B3\u02B4\x074\x02\x02\u02B4\u02B5\x05T+\x02\u02B5\u02B6" +
		"\x075\x02\x02\u02B6\u02C3\x03\x02\x02\x02\u02B7\u02B8\f\x19\x02\x02\u02B8" +
		"\u02B9\x070\x02\x02\u02B9\u02C3\x05r:\x02\u02BA\u02BB\f\x18\x02\x02\u02BB" +
		"\u02C3\x07;\x02\x02\u02BC\u02BD\f\x10\x02\x02\u02BD\u02BF\x07\x1A\x02" +
		"\x02\u02BE\u02C0\x07\x1E\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0" +
		"\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3\x05r:\x02\u02C2" +
		"\u0281\x03\x02\x02\x02\u02C2\u0284\x03\x02\x02\x02\u02C2\u0287\x03\x02" +
		"\x02\x02\u02C2\u028A\x03\x02\x02\x02\u02C2\u028D\x03\x02\x02\x02\u02C2" +
		"\u0293\x03\x02\x02\x02\u02C2\u0296\x03\x02\x02\x02\u02C2\u0299\x03\x02" +
		"\x02\x02\u02C2\u029C\x03\x02\x02\x02\u02C2\u029F\x03\x02\x02\x02\u02C2" +
		"\u02B2\x03\x02\x02\x02\u02C2\u02B7\x03\x02\x02\x02\u02C2\u02BA\x03\x02" +
		"\x02\x02\u02C2\u02BC\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4" +
		"\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5U\x03\x02\x02" +
		"\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02C8\x07\x19\x02\x02\u02C8\u02C9" +
		"\x05T+\x02\u02C9\u02CC\x05\x94K\x02\u02CA\u02CB\x07\x1D\x02\x02\u02CB" +
		"\u02CD\x05\x94K\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02" +
		"\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02D0\x07=\x02\x02\u02CF\u02CE" +
		"\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0W\x03\x02\x02\x02\u02D1" +
		"\u02D2\x07\x1B\x02\x02\u02D2\u02D6\x05\x92J\x02\u02D3\u02D5\x05Z.\x02" +
		"\u02D4\u02D3\x03\x02\x02\x02\u02D5\u02D8\x03\x02\x02\x02\u02D6\u02D4\x03" +
		"\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02DB\x03\x02\x02\x02\u02D8" +
		"\u02D6\x03\x02\x02\x02\u02D9\u02DA\x07\x1D\x02\x02\u02DA\u02DC\x05\x92" +
		"J\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE" +
		"\x03\x02\x02\x02\u02DD\u02DF\x07=\x02\x02\u02DE\u02DD\x03\x02\x02\x02" +
		"\u02DE\u02DF\x03\x02\x02\x02\u02DFY\x03\x02\x02\x02\u02E0\u02E1\x07\x1C" +
		"\x02\x02\u02E1\u02E2\x05r:\x02\u02E2\u02E3\x05\x92J\x02\u02E3[\x03\x02" +
		"\x02\x02\u02E4\u02E6\x07<\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6" +
		"\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02EA\x05\x88E\x02" +
		"\u02E8\u02E9\x07B\x02\x02\u02E9\u02EB\x05r:\x02\u02EA\u02E8\x03\x02\x02" +
		"\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02ED" +
		"\x05\x94K\x02\u02ED]\x03\x02\x02\x02\u02EE\u02EF\x05r:\x02\u02EF\u02F0" +
		"\x05\x8EH\x02\u02F0_\x03\x02\x02\x02\u02F1\u02FA\x074\x02\x02\u02F2\u02F7" +
		"\x05T+\x02\u02F3\u02F4\x079\x02\x02\u02F4\u02F6\x05T+\x02\u02F5\u02F3" +
		"\x03\x02\x02\x02\u02F6\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02" +
		"\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02FB\x03\x02\x02\x02\u02F9\u02F7\x03" +
		"\x02\x02\x02\u02FA\u02F2\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB" +
		"\u02FC\x03\x02\x02\x02\u02FC\u02FD\x075\x02\x02\u02FDa\x03\x02\x02\x02" +
		"\u02FE\u02FF\x07)\x02\x02\u02FF\u0300\x05T+\x02\u0300c\x03\x02\x02\x02" +
		"\u0301\u0302\x07(\x02\x02\u0302\u0303\x05T+\x02\u0303e\x03\x02\x02\x02" +
		"\u0304\u030A\x05h5\x02\u0305\u030A\x05j6\x02\u0306\u030A\x05l7\x02\u0307" +
		"\u030A\x05n8\x02\u0308\u030A\x05p9\x02\u0309\u0304\x03\x02\x02\x02\u0309" +
		"\u0305\x03\x02\x02\x02\u0309\u0306\x03\x02\x02\x02\u0309\u0307\x03\x02" +
		"\x02\x02\u0309\u0308\x03\x02\x02\x02\u030Ag\x03\x02\x02\x02\u030B\u030C" +
		"\x07^\x02\x02\u030Ci\x03\x02\x02\x02\u030D\u030E\x07_\x02\x02\u030Ek\x03" +
		"\x02\x02\x02\u030F\u0310\x07`\x02\x02\u0310m\x03\x02\x02\x02\u0311\u0312" +
		"\x07Y\x02\x02\u0312o\x03\x02\x02\x02\u0313\u0314\x07\x1F\x02\x02\u0314" +
		"q\x03\x02\x02\x02\u0315\u0316\b:\x01\x02\u0316\u0317\x072\x02\x02\u0317" +
		"\u0318\x05r:\x02\u0318\u0319\x073\x02\x02\u0319\u0328\x03\x02\x02\x02" +
		"\u031A\u0328\x05\x8CG\x02\u031B\u031C\x074\x02\x02\u031C\u031D\x05r:\x02" +
		"\u031D\u031E\x07=\x02\x02\u031E\u031F\x05j6\x02\u031F\u0320\x075\x02\x02" +
		"\u0320\u0328\x03\x02\x02\x02\u0321\u0328\x05,\x17\x02\u0322\u0328\x05" +
		".\x18\x02\u0323\u0328\x050\x19\x02\u0324\u0328\x052\x1A\x02\u0325\u0328" +
		"\x05t;\x02\u0326\u0328\x05v<\x02\u0327\u0315\x03\x02\x02\x02\u0327\u031A" +
		"\x03\x02\x02\x02\u0327\u031B\x03\x02\x02\x02\u0327\u0321\x03\x02\x02\x02" +
		"\u0327\u0322\x03\x02\x02\x02\u0327\u0323\x03\x02\x02\x02\u0327\u0324\x03" +
		"\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0327\u0326\x03\x02\x02\x02\u0328" +
		"\u0332\x03\x02\x02\x02\u0329\u032A\f\r\x02\x02\u032A\u0331\x05\x8CG\x02" +
		"\u032B\u032C\f\f\x02\x02\u032C\u032D\x078\x02\x02\u032D\u0331\x05v<\x02" +
		"\u032E\u032F\f\x05\x02\x02\u032F\u0331\x07;\x02\x02\u0330\u0329\x03\x02" +
		"\x02\x02\u0330\u032B\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0331" +
		"\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02" +
		"\x02\x02\u0333s\x03\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u0337" +
		"\x05\x04\x03\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02" +
		"\u0337\u0338\x03\x02\x02\x02\u0338\u0339\x07]\x02\x02\u0339u\x03\x02\x02" +
		"\x02\u033A\u033F\x07Z\x02\x02\u033B\u033F\x07[\x02\x02\u033C\u033F\x07" +
		"\\\x02\x02\u033D\u033F\x05\x96L\x02\u033E\u033A\x03\x02\x02\x02\u033E" +
		"\u033B\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033D\x03\x02" +
		"\x02\x02\u033Fw\x03\x02\x02\x02\u0340\u0342\x05\x04\x03\x02\u0341\u0340" +
		"\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02" +
		"\u0343\u0345\x05v<\x02\u0344\u0346\x07;\x02\x02\u0345\u0344\x03\x02\x02" +
		"\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0349\x03\x02\x02\x02\u0347\u0348" +
		"\x07>\x02\x02\u0348\u034A\x05r:\x02\u0349\u0347\x03\x02\x02\x02\u0349" +
		"\u034A\x03\x02\x02\x02\u034Ay\x03\x02\x02\x02\u034B\u034E\x05v<\x02\u034C" +
		"\u034D\x07>\x02\x02\u034D\u034F\x05T+\x02\u034E\u034C\x03\x02\x02\x02" +
		"\u034E\u034F\x03\x02\x02\x02\u034F{\x03\x02\x02\x02\u0350\u0351\x05v<" +
		"\x02\u0351\u0352\x07G\x02\x02\u0352\u0353\x05T+\x02\u0353}\x03\x02\x02" +
		"\x02\u0354\u0357\x05T+\x02\u0355\u0357\x05|?\x02\u0356\u0354\x03\x02\x02" +
		"\x02\u0356\u0355\x03\x02\x02\x02\u0357\x7F\x03\x02\x02\x02\u0358\u035D" +
		"\x05v<\x02\u0359\u035A\x079\x02\x02\u035A\u035C\x05v<\x02\u035B\u0359" +
		"\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D\u035B\x03\x02\x02\x02" +
		"\u035D\u035E\x03\x02\x02\x02\u035E\x81\x03\x02\x02\x02\u035F\u035D\x03" +
		"\x02\x02\x02\u0360\u0369\x072\x02\x02\u0361\u0366\x05x=\x02\u0362\u0363" +
		"\x079\x02\x02\u0363\u0365\x05x=\x02\u0364\u0362\x03\x02\x02\x02\u0365" +
		"\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0367\x03\x02" +
		"\x02\x02\u0367\u036A\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369" +
		"\u0361\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03\x02" +
		"\x02\x02\u036B\u036C\x073\x02\x02\u036C\x83\x03\x02\x02\x02\u036D\u036E" +
		"\x072\x02\x02\u036E\u0377\x074\x02\x02\u036F\u0374\x05x=\x02\u0370\u0371" +
		"\x079\x02\x02\u0371\u0373\x05x=\x02\u0372\u0370\x03\x02\x02\x02\u0373" +
		"\u0376\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0374\u0375\x03\x02" +
		"\x02\x02\u0375\u0378\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377" +
		"\u036F\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u0379\x03\x02" +
		"\x02\x02\u0379\u037A\x075\x02\x02\u037A\u037B\x073\x02\x02\u037B\x85\x03" +
		"\x02\x02\x02\u037C\u0385\x076\x02\x02\u037D\u0382\x05x=\x02\u037E\u037F" +
		"\x079\x02\x02\u037F\u0381\x05x=\x02\u0380\u037E\x03\x02\x02\x02\u0381" +
		"\u0384\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02" +
		"\x02\x02\u0383\u0386\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385" +
		"\u037D\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u0388\x03\x02" +
		"\x02\x02\u0387\u0389\x079\x02\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389" +
		"\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038B\x077\x02\x02" +
		"\u038B\x87\x03\x02\x02\x02\u038C\u0395\x07D\x02\x02\u038D\u0392\x05x=" +
		"\x02\u038E\u038F\x079\x02\x02\u038F\u0391\x05x=\x02\u0390\u038E\x03\x02" +
		"\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392" +
		"\u0393\x03\x02\x02\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02" +
		"\x02\x02\u0395\u038D\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396" +
		"\u0397\x03\x02\x02\x02\u0397\u0398\x07D\x02\x02\u0398\x89\x03\x02\x02" +
		"\x02\u0399\u03A2\x074\x02\x02\u039A\u039F\x05t;\x02\u039B\u039C\x079\x02" +
		"\x02\u039C\u039E\x05t;\x02\u039D\u039B\x03\x02\x02\x02\u039E\u03A1\x03" +
		"\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0" +
		"\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A2\u039A\x03\x02" +
		"\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4" +
		"\u03A5\x075\x02\x02\u03A5\x8B\x03\x02\x02\x02\u03A6\u03AF\x074\x02\x02" +
		"\u03A7\u03AC\x05r:\x02\u03A8\u03A9\x079\x02\x02\u03A9\u03AB\x05r:\x02" +
		"\u03AA\u03A8\x03\x02\x02\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03" +
		"\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE" +
		"\u03AC\x03\x02\x02\x02\u03AF\u03A7\x03\x02\x02\x02\u03AF\u03B0\x03\x02" +
		"\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x075\x02\x02\u03B2\x8D" +
		"\x03\x02\x02\x02\u03B3\u03BC\x076\x02\x02\u03B4\u03B9\x05z>\x02\u03B5" +
		"\u03B6\x079\x02\x02\u03B6\u03B8\x05z>\x02\u03B7\u03B5\x03\x02\x02\x02" +
		"\u03B8\u03BB\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03" +
		"\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC" +
		"\u03B4\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BF\x03\x02" +
		"\x02\x02\u03BE\u03C0\x079\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0" +
		"\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x077\x02\x02" +
		"\u03C2\x8F\x03\x02\x02\x02\u03C3\u03C8\x05r:\x02\u03C4\u03C5\x079\x02" +
		"\x02\u03C5\u03C7\x05r:\x02\u03C6\u03C4\x03\x02\x02\x02\u03C7\u03CA\x03" +
		"\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
		"\x91\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CF\x076\x02" +
		"\x02\u03CC\u03CE\x05\x06\x04\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE\u03D1" +
		"\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02" +
		"\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D3\x07" +
		"7\x02\x02\u03D3\x93\x03\x02\x02\x02\u03D4\u03D7\x05\x92J\x02\u03D5\u03D7" +
		"\x05T+\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7" +
		"\x95\x03\x02\x02\x02\u03D8\u03D9\t\b\x02\x02\u03D9\x97\x03\x02\x02\x02" +
		"\x92\x9B\xB2\xB7\xBD\xC0\xC8\xCD\xD1\xD6\xD9\xDC\xE2\xE8\xEE\xF6\xFF\u0103" +
		"\u0107\u010B\u010F\u0117\u011C\u0121\u0126\u0138\u013B\u0141\u0145\u0149" +
		"\u014C\u0152\u0156\u0159\u015E\u0162\u0165\u016A\u016E\u0170\u0173\u0178" +
		"\u017E\u0181\u0185\u0189\u018C\u0191\u0195\u0199\u01A0\u01A4\u01AA\u01B0" +
		"\u01B8\u01BB\u01BE\u01C3\u01C8\u01CB\u01D0\u01D3\u01D8\u01DC\u01DF\u01E3" +
		"\u01E8\u01EC\u01EF\u01F4\u01F9\u01FD\u0200\u0205\u020A\u020E\u0211\u0216" +
		"\u021B\u021F\u0222\u0227\u022C\u0230\u0233\u0239\u023C\u0242\u0249\u024E" +
		"\u0252\u0255\u025B\u025E\u0267\u026B\u027F\u028F\u02A1\u02A4\u02AC\u02AF" +
		"\u02BF\u02C2\u02C4\u02CC\u02CF\u02D6\u02DB\u02DE\u02E5\u02EA\u02F7\u02FA" +
		"\u0309\u0327\u0330\u0332\u0336\u033E\u0341\u0345\u0349\u034E\u0356\u035D" +
		"\u0366\u0369\u0374\u0377\u0382\u0385\u0388\u0392\u0395\u039F\u03A2\u03AC" +
		"\u03AF\u03B9\u03BC\u03BF\u03C8\u03CF\u03D6";
	public static readonly _serializedATN: string = Utils.join(
		[
			CWScriptParser._serializedATNSegment0,
			CWScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CWScriptParser.__ATN) {
			CWScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
		}

		return CWScriptParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public _stmt!: StmtContext;
	public _stmts: StmtContext[] = [];
	public EOF(): TerminalNode { return this.getToken(CWScriptParser.EOF, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CwspecContext extends ParserRuleContext {
	public CWSPEC_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CWSPEC_LINE_COMMENT, 0); }
	public CWSPEC_BLOCK_COMMENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CWSPEC_BLOCK_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_cwspec; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCwspec) {
			listener.enterCwspec(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCwspec) {
			listener.exitCwspec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCwspec) {
			return visitor.visitCwspec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public defn(): DefnContext | undefined {
		return this.tryGetRuleContext(0, DefnContext);
	}
	public letStmt(): LetStmtContext | undefined {
		return this.tryGetRuleContext(0, LetStmtContext);
	}
	public constStmt(): ConstStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstStmtContext);
	}
	public assignStmt(): AssignStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignStmtContext);
	}
	public memberAssignStmt(): MemberAssignStmtContext | undefined {
		return this.tryGetRuleContext(0, MemberAssignStmtContext);
	}
	public indexAssignStmt(): IndexAssignStmtContext | undefined {
		return this.tryGetRuleContext(0, IndexAssignStmtContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public tryCatchElseStmt(): TryCatchElseStmtContext | undefined {
		return this.tryGetRuleContext(0, TryCatchElseStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public execStmt(): ExecStmtContext | undefined {
		return this.tryGetRuleContext(0, ExecStmtContext);
	}
	public instantiateStmt(): InstantiateStmtContext | undefined {
		return this.tryGetRuleContext(0, InstantiateStmtContext);
	}
	public emitStmt(): EmitStmtContext | undefined {
		return this.tryGetRuleContext(0, EmitStmtContext);
	}
	public failStmt(): FailStmtContext | undefined {
		return this.tryGetRuleContext(0, FailStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public exprStmt(): ExprStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	public _items!: IdentListContext;
	public _src!: StringLitContext;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public stringLit(): StringLitContext | undefined {
		return this.tryGetRuleContext(0, StringLitContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportStmt) {
			listener.enterImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportStmt) {
			listener.exitImportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStmt) {
			return visitor.visitImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmtContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _binding!: Binding_Context;
	public _value!: ExprContext;
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public binding_(): Binding_Context | undefined {
		return this.tryGetRuleContext(0, Binding_Context);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_letStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Binding_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_binding_; }
	public copyFrom(ctx: Binding_Context): void {
		super.copyFrom(ctx);
	}
}
export class IdentBindingContext extends Binding_Context {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: Binding_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentBinding) {
			listener.enterIdentBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentBinding) {
			listener.exitIdentBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentBinding) {
			return visitor.visitIdentBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleBindingContext extends Binding_Context {
	public _names!: IdentListContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	constructor(ctx: Binding_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleBinding) {
			listener.enterTupleBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleBinding) {
			listener.exitTupleBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleBinding) {
			return visitor.visitTupleBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructBindingContext extends Binding_Context {
	public _names!: IdentListContext;
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	constructor(ctx: Binding_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructBinding) {
			listener.enterStructBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructBinding) {
			listener.exitStructBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructBinding) {
			return visitor.visitStructBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmtContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public _value!: ExprContext;
	public CONST(): TerminalNode { return this.getToken(CWScriptParser.CONST, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_constStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstStmt) {
			listener.enterConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstStmt) {
			listener.exitConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstStmt) {
			return visitor.visitConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStmtContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _assignOp!: Token;
	public _value!: ExprContext;
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberAssignStmtContext extends ParserRuleContext {
	public _obj!: ExprContext;
	public _memberName!: IdentContext;
	public _assignOp!: Token;
	public _value!: ExprContext;
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_memberAssignStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMemberAssignStmt) {
			listener.enterMemberAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMemberAssignStmt) {
			listener.exitMemberAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberAssignStmt) {
			return visitor.visitMemberAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexAssignStmtContext extends ParserRuleContext {
	public _obj!: ExprContext;
	public _index!: ExprContext;
	public _assignOp!: Token;
	public _value!: ExprContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_indexAssignStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIndexAssignStmt) {
			listener.enterIndexAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIndexAssignStmt) {
			listener.exitIndexAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexAssignStmt) {
			return visitor.visitIndexAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchElseStmtContext extends ParserRuleContext {
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		return this.getRuleContext(0, TryCatchElseExpr_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tryCatchElseStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseStmt) {
			listener.enterTryCatchElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseStmt) {
			listener.exitTryCatchElseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseStmt) {
			return visitor.visitTryCatchElseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public ifExpr_(): IfExpr_Context {
		return this.getRuleContext(0, IfExpr_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public returnExpr_(): ReturnExpr_Context {
		return this.getRuleContext(0, ReturnExpr_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailStmtContext extends ParserRuleContext {
	public failExpr_(): FailExpr_Context {
		return this.getRuleContext(0, FailExpr_Context);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_failStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailStmt) {
			listener.enterFailStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailStmt) {
			listener.exitFailStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailStmt) {
			return visitor.visitFailStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public _binding!: Binding_Context;
	public _iter!: ExprContext;
	public _body!: BlockContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public binding_(): Binding_Context | undefined {
		return this.tryGetRuleContext(0, Binding_Context);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecStmtContext extends ParserRuleContext {
	public _value!: ExprContext;
	public EXEC_NOW(): TerminalNode { return this.getToken(CWScriptParser.EXEC_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecStmt) {
			listener.enterExecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecStmt) {
			listener.exitExecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecStmt) {
			return visitor.visitExecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateStmtContext extends ParserRuleContext {
	public _value!: ExprContext;
	public INSTANTIATE_NOW(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateStmt) {
			listener.enterInstantiateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateStmt) {
			listener.exitInstantiateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateStmt) {
			return visitor.visitInstantiateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStmtContext extends ParserRuleContext {
	public _value!: ExprContext;
	public EMIT(): TerminalNode { return this.getToken(CWScriptParser.EMIT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_emitStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEmitStmt) {
			listener.enterEmitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEmitStmt) {
			listener.exitEmitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEmitStmt) {
			return visitor.visitEmitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefnContext extends ParserRuleContext {
	public contractDefn(): ContractDefnContext | undefined {
		return this.tryGetRuleContext(0, ContractDefnContext);
	}
	public interfaceDefn(): InterfaceDefnContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDefnContext);
	}
	public structDefn(): StructDefnContext | undefined {
		return this.tryGetRuleContext(0, StructDefnContext);
	}
	public tupleDefn(): TupleDefnContext | undefined {
		return this.tryGetRuleContext(0, TupleDefnContext);
	}
	public unitDefn(): UnitDefnContext | undefined {
		return this.tryGetRuleContext(0, UnitDefnContext);
	}
	public enumDefn(): EnumDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumDefnContext);
	}
	public typeAliasDefn(): TypeAliasDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDefnContext);
	}
	public fnDefn(): FnDefnContext | undefined {
		return this.tryGetRuleContext(0, FnDefnContext);
	}
	public instantiateDefn(): InstantiateDefnContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDefnContext);
	}
	public execDefn(): ExecDefnContext | undefined {
		return this.tryGetRuleContext(0, ExecDefnContext);
	}
	public execTupleDefn(): ExecTupleDefnContext | undefined {
		return this.tryGetRuleContext(0, ExecTupleDefnContext);
	}
	public queryDefn(): QueryDefnContext | undefined {
		return this.tryGetRuleContext(0, QueryDefnContext);
	}
	public queryTupleDefn(): QueryTupleDefnContext | undefined {
		return this.tryGetRuleContext(0, QueryTupleDefnContext);
	}
	public errorDefn(): ErrorDefnContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnContext);
	}
	public eventDefn(): EventDefnContext | undefined {
		return this.tryGetRuleContext(0, EventDefnContext);
	}
	public stateBlockDefn(): StateBlockDefnContext | undefined {
		return this.tryGetRuleContext(0, StateBlockDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_defn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDefn) {
			listener.enterDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDefn) {
			listener.exitDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDefn) {
			return visitor.visitDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _base!: TypeExprContext;
	public _interfaces!: TypeExprListContext;
	public _body!: BlockContext;
	public CONTRACT(): TerminalNode { return this.getToken(CWScriptParser.CONTRACT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public typeExprList(): TypeExprListContext | undefined {
		return this.tryGetRuleContext(0, TypeExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractDefn) {
			listener.enterContractDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractDefn) {
			listener.exitContractDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractDefn) {
			return visitor.visitContractDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _baseInterfaces!: TypeExprListContext;
	public _body!: BlockContext;
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public typeExprList(): TypeExprListContext | undefined {
		return this.tryGetRuleContext(0, TypeExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceDefn) {
			listener.enterInterfaceDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceDefn) {
			listener.exitInterfaceDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDefn) {
			return visitor.visitInterfaceDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn; }
	public copyFrom(ctx: StructDefnContext): void {
		super.copyFrom(ctx);
	}
}
export class StructDefnBraceContext extends StructDefnContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _fields!: BraceParamListContext;
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public braceParamList(): BraceParamListContext | undefined {
		return this.tryGetRuleContext(0, BraceParamListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	constructor(ctx: StructDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefnBrace) {
			listener.enterStructDefnBrace(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefnBrace) {
			listener.exitStructDefnBrace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefnBrace) {
			return visitor.visitStructDefnBrace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructDefnParenContext extends StructDefnContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _fields!: ParenParamListContext;
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	constructor(ctx: StructDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefnParen) {
			listener.enterStructDefnParen(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefnParen) {
			listener.exitStructDefnParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefnParen) {
			return visitor.visitStructDefnParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _elements!: BrackTypeExprListContext;
	public TUPLE(): TerminalNode { return this.getToken(CWScriptParser.TUPLE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tupleDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleDefn) {
			listener.enterTupleDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleDefn) {
			listener.exitTupleDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleDefn) {
			return visitor.visitTupleDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _typeParams!: BrackTypeParamListContext;
	public _name!: IdentContext;
	public UNIT(): TerminalNode { return this.getToken(CWScriptParser.UNIT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_unitDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnitDefn) {
			listener.enterUnitDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnitDefn) {
			listener.exitUnitDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnitDefn) {
			return visitor.visitUnitDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _variants!: EnumVariantDefnListContext;
	public ENUM(): TerminalNode { return this.getToken(CWScriptParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	public enumVariantDefnList(): EnumVariantDefnListContext | undefined {
		return this.tryGetRuleContext(0, EnumVariantDefnListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumDefn) {
			listener.enterEnumDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumDefn) {
			listener.exitEnumDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumDefn) {
			return visitor.visitEnumDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantDefnListContext extends ParserRuleContext {
	public enumVariantDefn(): EnumVariantDefnContext[];
	public enumVariantDefn(i: number): EnumVariantDefnContext;
	public enumVariantDefn(i?: number): EnumVariantDefnContext | EnumVariantDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumVariantDefnContext);
		} else {
			return this.getRuleContext(i, EnumVariantDefnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantDefnList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantDefnList) {
			listener.enterEnumVariantDefnList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantDefnList) {
			listener.exitEnumVariantDefnList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantDefnList) {
			return visitor.visitEnumVariantDefnList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantDefnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantDefn; }
	public copyFrom(ctx: EnumVariantDefnContext): void {
		super.copyFrom(ctx);
	}
}
export class EnumVariantStructDefnBraceContext extends EnumVariantDefnContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fields!: BraceParamListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public braceParamList(): BraceParamListContext | undefined {
		return this.tryGetRuleContext(0, BraceParamListContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: EnumVariantDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantStructDefnBrace) {
			listener.enterEnumVariantStructDefnBrace(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantStructDefnBrace) {
			listener.exitEnumVariantStructDefnBrace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantStructDefnBrace) {
			return visitor.visitEnumVariantStructDefnBrace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumVariantStructDefnParenContext extends EnumVariantDefnContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fields!: ParenParamListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: EnumVariantDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantStructDefnParen) {
			listener.enterEnumVariantStructDefnParen(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantStructDefnParen) {
			listener.exitEnumVariantStructDefnParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantStructDefnParen) {
			return visitor.visitEnumVariantStructDefnParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumVariantTupleDefnContext extends EnumVariantDefnContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _elements!: BrackTypeExprListContext;
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: EnumVariantDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantTupleDefn) {
			listener.enterEnumVariantTupleDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantTupleDefn) {
			listener.exitEnumVariantTupleDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantTupleDefn) {
			return visitor.visitEnumVariantTupleDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumVariantUnitDefnContext extends EnumVariantDefnContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: EnumVariantDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantUnitDefn) {
			listener.enterEnumVariantUnitDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantUnitDefn) {
			listener.exitEnumVariantUnitDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantUnitDefn) {
			return visitor.visitEnumVariantUnitDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _ty!: TypeExprContext;
	public TYPE(): TerminalNode { return this.getToken(CWScriptParser.TYPE, 0); }
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeAliasDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeAliasDefn) {
			listener.enterTypeAliasDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeAliasDefn) {
			listener.exitTypeAliasDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasDefn) {
			return visitor.visitTypeAliasDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fallible!: Token;
	public _typeParams!: BrackTypeParamListContext;
	public _params!: ParenParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public FN(): TerminalNode { return this.getToken(CWScriptParser.FN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnDefn) {
			listener.enterFnDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnDefn) {
			listener.exitFnDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnDefn) {
			return visitor.visitFnDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _fallible!: Token;
	public _params!: ParenParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public H_INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.H_INSTANTIATE, 0); }
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDefn) {
			listener.enterInstantiateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDefn) {
			listener.exitInstantiateDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDefn) {
			return visitor.visitInstantiateDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fallible!: Token;
	public _params!: ParenParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDefn) {
			listener.enterExecDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDefn) {
			listener.exitExecDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDefn) {
			return visitor.visitExecDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecTupleDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fallible!: Token;
	public _params!: TupleParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public tupleParamList(): TupleParamListContext | undefined {
		return this.tryGetRuleContext(0, TupleParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execTupleDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecTupleDefn) {
			listener.enterExecTupleDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecTupleDefn) {
			listener.exitExecTupleDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecTupleDefn) {
			return visitor.visitExecTupleDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fallible!: Token;
	public _params!: ParenParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDefn) {
			listener.enterQueryDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDefn) {
			listener.exitQueryDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDefn) {
			return visitor.visitQueryDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTupleDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _fallible!: Token;
	public _params!: TupleParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public tupleParamList(): TupleParamListContext | undefined {
		return this.tryGetRuleContext(0, TupleParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryTupleDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryTupleDefn) {
			listener.enterQueryTupleDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryTupleDefn) {
			listener.exitQueryTupleDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryTupleDefn) {
			return visitor.visitQueryTupleDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _params!: ParenParamListContext;
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefn) {
			listener.enterErrorDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefn) {
			listener.exitErrorDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefn) {
			return visitor.visitErrorDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _params!: ParenParamListContext;
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefn) {
			listener.enterEventDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefn) {
			listener.exitEventDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefn) {
			return visitor.visitEventDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateBlockDefnContext extends ParserRuleContext {
	public _stateDefn!: StateDefnContext;
	public _stateFields: StateDefnContext[] = [];
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public stateDefn(): StateDefnContext[];
	public stateDefn(i: number): StateDefnContext;
	public stateDefn(i?: number): StateDefnContext | StateDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateDefnContext);
		} else {
			return this.getRuleContext(i, StateDefnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateBlockDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateBlockDefn) {
			listener.enterStateBlockDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateBlockDefn) {
			listener.exitStateBlockDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateBlockDefn) {
			return visitor.visitStateBlockDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnContext extends ParserRuleContext {
	public stateItemDefn(): StateItemDefnContext | undefined {
		return this.tryGetRuleContext(0, StateItemDefnContext);
	}
	public stateMapDefn(): StateMapDefnContext | undefined {
		return this.tryGetRuleContext(0, StateMapDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefn) {
			listener.enterStateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefn) {
			listener.exitStateDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefn) {
			return visitor.visitStateDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateItemDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateItemDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateItemDefn) {
			listener.enterStateItemDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateItemDefn) {
			listener.exitStateItemDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateItemDefn) {
			return visitor.visitStateItemDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMapDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _indexTy!: TypeExprContext;
	public _ty!: TypeExprContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateMapDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateMapDefn) {
			listener.enterStateMapDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateMapDefn) {
			listener.exitStateMapDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateMapDefn) {
			return visitor.visitStateMapDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprStmtContext extends ParserRuleContext {
	public _semi!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_exprStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExprStmt) {
			listener.enterExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExprStmt) {
			listener.exitExprStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExprStmt) {
			return visitor.visitExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class DotExprContext extends ExprContext {
	public _memberName!: IdentContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDotExpr) {
			listener.enterDotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDotExpr) {
			listener.exitDotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDotExpr) {
			return visitor.visitDotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExprContext extends ExprContext {
	public _fallible!: Token;
	public _typeArgs!: BrackTypeExprListContext;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCallExpr) {
			listener.enterCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCallExpr) {
			listener.exitCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCallExpr) {
			return visitor.visitCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexExprContext extends ExprContext {
	public _index!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIndexExpr) {
			listener.enterIndexExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIndexExpr) {
			listener.exitIndexExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexExpr) {
			return visitor.visitIndexExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AsExprContext extends ExprContext {
	public _ty!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public AS(): TerminalNode { return this.getToken(CWScriptParser.AS, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAsExpr) {
			listener.enterAsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAsExpr) {
			listener.exitAsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAsExpr) {
			return visitor.visitAsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExistsExpr) {
			listener.enterExistsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExistsExpr) {
			listener.exitExistsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExistsExpr) {
			return visitor.visitExistsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExprContext extends ExprContext {
	public NOT(): TerminalNode { return this.getToken(CWScriptParser.NOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMulExpr) {
			listener.enterMulExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMulExpr) {
			listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCompExpr) {
			listener.enterCompExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCompExpr) {
			listener.exitCompExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCompExpr) {
			return visitor.visitCompExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryExprContext extends ExprContext {
	public QUERY_NOW(): TerminalNode { return this.getToken(CWScriptParser.QUERY_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryExpr) {
			listener.enterQueryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryExpr) {
			listener.exitQueryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryExpr) {
			return visitor.visitQueryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortTryExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public D_QUEST(): TerminalNode { return this.getToken(CWScriptParser.D_QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterShortTryExpr) {
			listener.enterShortTryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitShortTryExpr) {
			listener.exitShortTryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitShortTryExpr) {
			return visitor.visitShortTryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExprContext extends ExprContext {
	public _negative!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInExpr) {
			listener.enterInExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInExpr) {
			listener.exitInExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpr) {
			return visitor.visitInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsExprContext extends ExprContext {
	public _negative!: Token;
	public _ty!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS(): TerminalNode { return this.getToken(CWScriptParser.IS, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIsExpr) {
			listener.enterIsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIsExpr) {
			listener.exitIsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIsExpr) {
			return visitor.visitIsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ_EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEqExpr) {
			listener.enterEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEqExpr) {
			listener.exitEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEqExpr) {
			return visitor.visitEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CWScriptParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CWScriptParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExprContext extends ExprContext {
	public ifExpr_(): IfExpr_Context {
		return this.getRuleContext(0, IfExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryCatchElseExprContext extends ExprContext {
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		return this.getRuleContext(0, TryCatchElseExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseExpr) {
			listener.enterTryCatchElseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseExpr) {
			listener.exitTryCatchElseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseExpr) {
			return visitor.visitTryCatchElseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClosureExprContext extends ExprContext {
	public closureExpr_(): ClosureExpr_Context {
		return this.getRuleContext(0, ClosureExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosureExpr) {
			listener.enterClosureExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosureExpr) {
			listener.exitClosureExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosureExpr) {
			return visitor.visitClosureExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructExprContext extends ExprContext {
	public structExpr_(): StructExpr_Context {
		return this.getRuleContext(0, StructExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructExpr) {
			listener.enterStructExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructExpr) {
			listener.exitStructExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructExpr) {
			return visitor.visitStructExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExprContext extends ExprContext {
	public tupleExpr_(): TupleExpr_Context {
		return this.getRuleContext(0, TupleExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleExpr) {
			listener.enterTupleExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleExpr) {
			listener.exitTupleExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleExpr) {
			return visitor.visitTupleExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnExprContext extends ExprContext {
	public returnExpr_(): ReturnExpr_Context {
		return this.getRuleContext(0, ReturnExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReturnExpr) {
			listener.enterReturnExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReturnExpr) {
			listener.exitReturnExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnExpr) {
			return visitor.visitReturnExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailExprContext extends ExprContext {
	public failExpr_(): FailExpr_Context {
		return this.getRuleContext(0, FailExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailExpr) {
			listener.enterFailExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailExpr) {
			listener.exitFailExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailExpr) {
			return visitor.visitFailExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentExpr) {
			listener.enterIdentExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentExpr) {
			listener.exitIdentExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentExpr) {
			return visitor.visitIdentExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupedExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGroupedExpr) {
			listener.enterGroupedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGroupedExpr) {
			listener.exitGroupedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGroupedExpr) {
			return visitor.visitGroupedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExpr_Context extends ParserRuleContext {
	public _pred!: ExprContext;
	public _thenBody!: BlockOrExprContext;
	public _elseBody!: BlockOrExprContext;
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public blockOrExpr(): BlockOrExprContext[];
	public blockOrExpr(i: number): BlockOrExprContext;
	public blockOrExpr(i?: number): BlockOrExprContext | BlockOrExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockOrExprContext);
		} else {
			return this.getRuleContext(i, BlockOrExprContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExpr_) {
			listener.enterIfExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExpr_) {
			listener.exitIfExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExpr_) {
			return visitor.visitIfExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchElseExpr_Context extends ParserRuleContext {
	public _body!: BlockContext;
	public _catchClause!: CatchClauseContext;
	public _catchClauses: CatchClauseContext[] = [];
	public _elseBody!: BlockContext;
	public TRY(): TerminalNode { return this.getToken(CWScriptParser.TRY, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tryCatchElseExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseExpr_) {
			listener.enterTryCatchElseExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseExpr_) {
			listener.exitTryCatchElseExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseExpr_) {
			return visitor.visitTryCatchElseExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public _ty!: TypeExprContext;
	public _body!: BlockContext;
	public CATCH(): TerminalNode { return this.getToken(CWScriptParser.CATCH, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureExpr_Context extends ParserRuleContext {
	public _fallible!: Token;
	public _params!: BarParamListContext;
	public _returnTy!: TypeExprContext;
	public _body!: BlockOrExprContext;
	public barParamList(): BarParamListContext | undefined {
		return this.tryGetRuleContext(0, BarParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public blockOrExpr(): BlockOrExprContext | undefined {
		return this.tryGetRuleContext(0, BlockOrExprContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_closureExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosureExpr_) {
			listener.enterClosureExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosureExpr_) {
			listener.exitClosureExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosureExpr_) {
			return visitor.visitClosureExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructExpr_Context extends ParserRuleContext {
	public _ty!: TypeExprContext;
	public _fields!: BraceFieldListContext;
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public braceFieldList(): BraceFieldListContext | undefined {
		return this.tryGetRuleContext(0, BraceFieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructExpr_) {
			listener.enterStructExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructExpr_) {
			listener.exitStructExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructExpr_) {
			return visitor.visitStructExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpr_Context extends ParserRuleContext {
	public _expr!: ExprContext;
	public _elements: ExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tupleExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleExpr_) {
			listener.enterTupleExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleExpr_) {
			listener.exitTupleExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleExpr_) {
			return visitor.visitTupleExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnExpr_Context extends ParserRuleContext {
	public _value!: ExprContext;
	public RETURN(): TerminalNode { return this.getToken(CWScriptParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_returnExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReturnExpr_) {
			listener.enterReturnExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReturnExpr_) {
			listener.exitReturnExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnExpr_) {
			return visitor.visitReturnExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailExpr_Context extends ParserRuleContext {
	public _value!: ExprContext;
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_failExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailExpr_) {
			listener.enterFailExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailExpr_) {
			listener.exitFailExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailExpr_) {
			return visitor.visitFailExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public stringLit(): StringLitContext | undefined {
		return this.tryGetRuleContext(0, StringLitContext);
	}
	public intLit(): IntLitContext | undefined {
		return this.tryGetRuleContext(0, IntLitContext);
	}
	public decLit(): DecLitContext | undefined {
		return this.tryGetRuleContext(0, DecLitContext);
	}
	public boolLit(): BoolLitContext | undefined {
		return this.tryGetRuleContext(0, BoolLitContext);
	}
	public noneLit(): NoneLitContext | undefined {
		return this.tryGetRuleContext(0, NoneLitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLitContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(CWScriptParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stringLit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStringLit) {
			listener.enterStringLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStringLit) {
			listener.exitStringLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLit) {
			return visitor.visitStringLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntLitContext extends ParserRuleContext {
	public IntLiteral(): TerminalNode { return this.getToken(CWScriptParser.IntLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_intLit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIntLit) {
			listener.enterIntLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIntLit) {
			listener.exitIntLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIntLit) {
			return visitor.visitIntLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecLitContext extends ParserRuleContext {
	public DecLiteral(): TerminalNode { return this.getToken(CWScriptParser.DecLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_decLit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDecLit) {
			listener.enterDecLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDecLit) {
			listener.exitDecLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDecLit) {
			return visitor.visitDecLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolLitContext extends ParserRuleContext {
	public BoolLiteral(): TerminalNode { return this.getToken(CWScriptParser.BoolLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_boolLit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBoolLit) {
			listener.enterBoolLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBoolLit) {
			listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoneLitContext extends ParserRuleContext {
	public NONE(): TerminalNode { return this.getToken(CWScriptParser.NONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_noneLit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNoneLit) {
			listener.enterNoneLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNoneLit) {
			listener.exitNoneLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNoneLit) {
			return visitor.visitNoneLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeExpr; }
	public copyFrom(ctx: TypeExprContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupedTypeExprContext extends TypeExprContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGroupedTypeExpr) {
			listener.enterGroupedTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGroupedTypeExpr) {
			listener.exitGroupedTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGroupedTypeExpr) {
			return visitor.visitGroupedTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterizedTypeExprContext extends TypeExprContext {
	public _typeArgs!: BrackTypeExprListContext;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParameterizedTypeExpr) {
			listener.enterParameterizedTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParameterizedTypeExpr) {
			listener.exitParameterizedTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParameterizedTypeExpr) {
			return visitor.visitParameterizedTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberTypeExprContext extends TypeExprContext {
	public _memberName!: IdentContext;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMemberTypeExpr) {
			listener.enterMemberTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMemberTypeExpr) {
			listener.exitMemberTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberTypeExpr) {
			return visitor.visitMemberTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTypeExprContext extends TypeExprContext {
	public _elements!: BrackTypeExprListContext;
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleTypeExpr) {
			listener.enterTupleTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleTypeExpr) {
			listener.exitTupleTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleTypeExpr) {
			return visitor.visitTupleTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayTypeExprContext extends TypeExprContext {
	public _size!: IntLitContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public SEMI(): TerminalNode { return this.getToken(CWScriptParser.SEMI, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public intLit(): IntLitContext | undefined {
		return this.tryGetRuleContext(0, IntLitContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterArrayTypeExpr) {
			listener.enterArrayTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitArrayTypeExpr) {
			listener.exitArrayTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayTypeExpr) {
			return visitor.visitArrayTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructDefnTypeExprContext extends TypeExprContext {
	public structDefn(): StructDefnContext {
		return this.getRuleContext(0, StructDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefnTypeExpr) {
			listener.enterStructDefnTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefnTypeExpr) {
			listener.exitStructDefnTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefnTypeExpr) {
			return visitor.visitStructDefnTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleDefnTypeExprContext extends TypeExprContext {
	public tupleDefn(): TupleDefnContext {
		return this.getRuleContext(0, TupleDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleDefnTypeExpr) {
			listener.enterTupleDefnTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleDefnTypeExpr) {
			listener.exitTupleDefnTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleDefnTypeExpr) {
			return visitor.visitTupleDefnTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitDefnTypeExprContext extends TypeExprContext {
	public unitDefn(): UnitDefnContext {
		return this.getRuleContext(0, UnitDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnitDefnTypeExpr) {
			listener.enterUnitDefnTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnitDefnTypeExpr) {
			listener.exitUnitDefnTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnitDefnTypeExpr) {
			return visitor.visitUnitDefnTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnumDefnTypeExprContext extends TypeExprContext {
	public enumDefn(): EnumDefnContext {
		return this.getRuleContext(0, EnumDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumDefnTypeExpr) {
			listener.enterEnumDefnTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumDefnTypeExpr) {
			listener.exitEnumDefnTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumDefnTypeExpr) {
			return visitor.visitEnumDefnTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionTypeExprContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOptionTypeExpr) {
			listener.enterOptionTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOptionTypeExpr) {
			listener.exitOptionTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOptionTypeExpr) {
			return visitor.visitOptionTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeVarExprContext extends TypeExprContext {
	public typeVar(): TypeVarContext {
		return this.getRuleContext(0, TypeVarContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeVarExpr) {
			listener.enterTypeVarExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeVarExpr) {
			listener.exitTypeVarExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeVarExpr) {
			return visitor.visitTypeVarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentTypeExprContext extends TypeExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentTypeExpr) {
			listener.enterIdentTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentTypeExpr) {
			listener.exitIdentTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentTypeExpr) {
			return visitor.visitIdentTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVarContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public TypeVar(): TerminalNode { return this.getToken(CWScriptParser.TypeVar, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeVar; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeVar) {
			listener.enterTypeVar(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeVar) {
			listener.exitTypeVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeVar) {
			return visitor.visitTypeVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public HashIdent(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.HashIdent, 0); }
	public DollarIdent(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DollarIdent, 0); }
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.Ident, 0); }
	public reservedKeyword(): ReservedKeywordContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ident; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _optional!: Token;
	public _ty!: TypeExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_param; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_field; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedArgContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedArg; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNamedArg) {
			listener.enterNamedArg(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNamedArg) {
			listener.exitNamedArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNamedArg) {
			return visitor.visitNamedArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public namedArg(): NamedArgContext | undefined {
		return this.tryGetRuleContext(0, NamedArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_arg; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentListContext extends ParserRuleContext {
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_identList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentList) {
			listener.enterIdentList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentList) {
			listener.exitIdentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentList) {
			return visitor.visitIdentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenParamListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_parenParamList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParenParamList) {
			listener.enterParenParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParenParamList) {
			listener.exitParenParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParenParamList) {
			return visitor.visitParenParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleParamListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tupleParamList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleParamList) {
			listener.enterTupleParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleParamList) {
			listener.exitTupleParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleParamList) {
			return visitor.visitTupleParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceParamListContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_braceParamList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBraceParamList) {
			listener.enterBraceParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBraceParamList) {
			listener.exitBraceParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBraceParamList) {
			return visitor.visitBraceParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BarParamListContext extends ParserRuleContext {
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.BAR);
		} else {
			return this.getToken(CWScriptParser.BAR, i);
		}
	}
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_barParamList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBarParamList) {
			listener.enterBarParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBarParamList) {
			listener.exitBarParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBarParamList) {
			return visitor.visitBarParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BrackTypeParamListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeVar(): TypeVarContext[];
	public typeVar(i: number): TypeVarContext;
	public typeVar(i?: number): TypeVarContext | TypeVarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeVarContext);
		} else {
			return this.getRuleContext(i, TypeVarContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_brackTypeParamList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBrackTypeParamList) {
			listener.enterBrackTypeParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBrackTypeParamList) {
			listener.exitBrackTypeParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBrackTypeParamList) {
			return visitor.visitBrackTypeParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BrackTypeExprListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_brackTypeExprList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBrackTypeExprList) {
			listener.enterBrackTypeExprList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBrackTypeExprList) {
			listener.exitBrackTypeExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBrackTypeExprList) {
			return visitor.visitBrackTypeExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceFieldListContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_braceFieldList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBraceFieldList) {
			listener.enterBraceFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBraceFieldList) {
			listener.exitBraceFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBraceFieldList) {
			return visitor.visitBraceFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExprListContext extends ParserRuleContext {
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeExprList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeExprList) {
			listener.enterTypeExprList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeExprList) {
			listener.exitTypeExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeExprList) {
			return visitor.visitTypeExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _stmt!: StmtContext;
	public _stmts: StmtContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockOrExprContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_blockOrExpr; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBlockOrExpr) {
			listener.enterBlockOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBlockOrExpr) {
			listener.exitBlockOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBlockOrExpr) {
			return visitor.visitBlockOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EVENT, 0); }
	public H_INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.H_INSTANTIATE, 0); }
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NONE, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public REPLY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.REPLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IN, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FROM, 0); }
	public STATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STATE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IF, 0); }
	public FN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.OR, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FALSE, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LET, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
	public TUPLE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TUPLE, 0); }
	public UNIT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.UNIT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ENUM, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TYPE, 0); }
	public EMIT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_reservedKeyword; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReservedKeyword) {
			listener.enterReservedKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReservedKeyword) {
			listener.exitReservedKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedKeyword) {
			return visitor.visitReservedKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



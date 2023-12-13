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
	public static readonly RULE_queryDefn = 31;
	public static readonly RULE_errorDefn = 32;
	public static readonly RULE_eventDefn = 33;
	public static readonly RULE_stateBlockDefn = 34;
	public static readonly RULE_stateDefn = 35;
	public static readonly RULE_stateItemDefn = 36;
	public static readonly RULE_stateMapDefn = 37;
	public static readonly RULE_exprStmt = 38;
	public static readonly RULE_expr = 39;
	public static readonly RULE_ifExpr_ = 40;
	public static readonly RULE_tryCatchElseExpr_ = 41;
	public static readonly RULE_catchClause = 42;
	public static readonly RULE_closureExpr_ = 43;
	public static readonly RULE_structExpr_ = 44;
	public static readonly RULE_tupleExpr_ = 45;
	public static readonly RULE_returnExpr_ = 46;
	public static readonly RULE_failExpr_ = 47;
	public static readonly RULE_literal = 48;
	public static readonly RULE_stringLit = 49;
	public static readonly RULE_intLit = 50;
	public static readonly RULE_decLit = 51;
	public static readonly RULE_boolLit = 52;
	public static readonly RULE_noneLit = 53;
	public static readonly RULE_typeExpr = 54;
	public static readonly RULE_typeVar = 55;
	public static readonly RULE_ident = 56;
	public static readonly RULE_param = 57;
	public static readonly RULE_field = 58;
	public static readonly RULE_namedArg = 59;
	public static readonly RULE_arg = 60;
	public static readonly RULE_identList = 61;
	public static readonly RULE_parenParamList = 62;
	public static readonly RULE_braceParamList = 63;
	public static readonly RULE_barParamList = 64;
	public static readonly RULE_brackTypeParamList = 65;
	public static readonly RULE_brackTypeExprList = 66;
	public static readonly RULE_braceFieldList = 67;
	public static readonly RULE_typeExprList = 68;
	public static readonly RULE_block = 69;
	public static readonly RULE_blockOrExpr = 70;
	public static readonly RULE_reservedKeyword = 71;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "cwspec", "stmt", "importStmt", "letStmt", "binding_", "constStmt", 
		"assignStmt", "memberAssignStmt", "indexAssignStmt", "tryCatchElseStmt", 
		"ifStmt", "returnStmt", "failStmt", "forStmt", "execStmt", "instantiateStmt", 
		"emitStmt", "defn", "contractDefn", "interfaceDefn", "structDefn", "tupleDefn", 
		"unitDefn", "enumDefn", "enumVariantDefnList", "enumVariantDefn", "typeAliasDefn", 
		"fnDefn", "instantiateDefn", "execDefn", "queryDefn", "errorDefn", "eventDefn", 
		"stateBlockDefn", "stateDefn", "stateItemDefn", "stateMapDefn", "exprStmt", 
		"expr", "ifExpr_", "tryCatchElseExpr_", "catchClause", "closureExpr_", 
		"structExpr_", "tupleExpr_", "returnExpr_", "failExpr_", "literal", "stringLit", 
		"intLit", "decLit", "boolLit", "noneLit", "typeExpr", "typeVar", "ident", 
		"param", "field", "namedArg", "arg", "identList", "parenParamList", "braceParamList", 
		"barParamList", "brackTypeParamList", "brackTypeExprList", "braceFieldList", 
		"typeExprList", "block", "blockOrExpr", "reservedKeyword",
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
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
				{
				{
				this.state = 144;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
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
			this.state = 152;
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
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.defn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.letStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 157;
				this.constStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 158;
				this.assignStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 159;
				this.memberAssignStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 160;
				this.indexAssignStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 161;
				this.ifStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 162;
				this.tryCatchElseStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 163;
				this.forStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 164;
				this.execStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 165;
				this.instantiateStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 166;
				this.emitStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 167;
				this.failStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 168;
				this.returnStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 169;
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
			this.state = 172;
			this.match(CWScriptParser.IMPORT);
			this.state = 173;
			this.match(CWScriptParser.LBRACE);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 174;
				_localctx._items = this.identList();
				}
			}

			this.state = 177;
			this.match(CWScriptParser.RBRACE);
			this.state = 178;
			this.match(CWScriptParser.FROM);
			{
			this.state = 179;
			_localctx._src = this.stringLit();
			}
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 180;
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
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 183;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 186;
			this.match(CWScriptParser.LET);
			{
			this.state = 187;
			_localctx._binding = this.binding_();
			}
			{
			this.state = 188;
			this.match(CWScriptParser.EQ);
			this.state = 189;
			_localctx._value = this.expr(0);
			}
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 191;
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
			this.state = 209;
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
				this.state = 194;
				(_localctx as IdentBindingContext)._name = this.ident();
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 195;
					this.match(CWScriptParser.COLON);
					this.state = 196;
					(_localctx as IdentBindingContext)._ty = this.typeExpr(0);
					}
				}

				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
				this.match(CWScriptParser.LBRACK);
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
					{
					this.state = 200;
					(_localctx as TupleBindingContext)._names = this.identList();
					}
				}

				this.state = 203;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
				this.match(CWScriptParser.LBRACE);
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
					{
					this.state = 205;
					(_localctx as StructBindingContext)._names = this.identList();
					}
				}

				this.state = 208;
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
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 211;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 214;
			this.match(CWScriptParser.CONST);
			{
			this.state = 215;
			_localctx._name = this.ident();
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 216;
				this.match(CWScriptParser.COLON);
				this.state = 217;
				_localctx._ty = this.typeExpr(0);
				}
			}

			{
			this.state = 220;
			this.match(CWScriptParser.EQ);
			this.state = 221;
			_localctx._value = this.expr(0);
			}
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 223;
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
			this.state = 226;
			_localctx._name = this.ident();
			}
			this.state = 227;
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
			this.state = 228;
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
	public memberAssignStmt(): MemberAssignStmtContext {
		let _localctx: MemberAssignStmtContext = new MemberAssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_memberAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 232;
			_localctx._obj = this.expr(0);
			}
			this.state = 233;
			this.match(CWScriptParser.DOT);
			{
			this.state = 234;
			_localctx._memberName = this.ident();
			}
			this.state = 235;
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
			this.state = 236;
			_localctx._value = this.expr(0);
			}
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 237;
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
			this.state = 240;
			_localctx._obj = this.expr(0);
			}
			this.state = 241;
			this.match(CWScriptParser.LBRACK);
			this.state = 242;
			_localctx._index = this.expr(0);
			this.state = 243;
			this.match(CWScriptParser.RBRACK);
			this.state = 244;
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
			this.state = 245;
			_localctx._value = this.expr(0);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 246;
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
			this.state = 249;
			this.tryCatchElseExpr_();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 250;
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
			this.state = 253;
			this.ifExpr_();
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 254;
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
			this.state = 257;
			this.returnExpr_();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 258;
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
			this.state = 261;
			this.failExpr_();
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 262;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(CWScriptParser.FOR);
			{
			this.state = 266;
			_localctx._binding = this.binding_();
			}
			this.state = 267;
			this.match(CWScriptParser.IN);
			{
			this.state = 268;
			_localctx._iter = this.expr(0);
			}
			this.state = 269;
			_localctx._body = this.blockOrExpr();
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
			this.state = 271;
			this.match(CWScriptParser.EXEC_NOW);
			this.state = 272;
			_localctx._value = this.expr(0);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 273;
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
			this.state = 276;
			this.match(CWScriptParser.INSTANTIATE_NOW);
			this.state = 277;
			_localctx._value = this.expr(0);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 278;
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
			this.state = 281;
			this.match(CWScriptParser.EMIT);
			this.state = 282;
			_localctx._value = this.expr(0);
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 283;
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
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.contractDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.interfaceDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 288;
				this.structDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 289;
				this.tupleDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 290;
				this.unitDefn();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 291;
				this.enumDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 292;
				this.typeAliasDefn();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 293;
				this.fnDefn();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 294;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 295;
				this.execDefn();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 296;
				this.queryDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 297;
				this.errorDefn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 298;
				this.eventDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 299;
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
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 302;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 305;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 306;
			_localctx._name = this.ident();
			}
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 307;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 308;
				_localctx._base = this.typeExpr(0);
				}
				}
			}

			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 311;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 312;
				_localctx._interfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 315;
			_localctx._body = this.block();
			}
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 316;
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
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 319;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 322;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 323;
			_localctx._name = this.ident();
			}
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 324;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 325;
				_localctx._baseInterfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 328;
			_localctx._body = this.block();
			}
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 329;
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
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 332;
					(_localctx as StructDefnBraceContext)._spec = this.cwspec();
					}
				}

				this.state = 335;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 336;
				(_localctx as StructDefnBraceContext)._name = this.ident();
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 337;
					(_localctx as StructDefnBraceContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 340;
				(_localctx as StructDefnBraceContext)._fields = this.braceParamList();
				}
				this.state = 342;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 341;
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
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 344;
					(_localctx as StructDefnParenContext)._spec = this.cwspec();
					}
				}

				this.state = 347;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 348;
				(_localctx as StructDefnParenContext)._name = this.ident();
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 349;
					(_localctx as StructDefnParenContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 352;
				(_localctx as StructDefnParenContext)._fields = this.parenParamList();
				}
				this.state = 354;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 353;
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
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 358;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 361;
			this.match(CWScriptParser.TUPLE);
			{
			this.state = 362;
			_localctx._name = this.ident();
			}
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 363;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 366;
			this.match(CWScriptParser.LPAREN);
			{
			this.state = 367;
			_localctx._elements = this.brackTypeExprList();
			}
			this.state = 368;
			this.match(CWScriptParser.RPAREN);
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 369;
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
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 372;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 375;
			this.match(CWScriptParser.UNIT);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 376;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 379;
			_localctx._name = this.ident();
			}
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 380;
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
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 383;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 386;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 387;
			_localctx._name = this.ident();
			}
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 388;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 391;
			this.match(CWScriptParser.LBRACE);
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 392;
				_localctx._variants = this.enumVariantDefnList();
				}
			}

			this.state = 395;
			this.match(CWScriptParser.RBRACE);
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 396;
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
			this.state = 399;
			this.enumVariantDefn();
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 400;
				this.match(CWScriptParser.COMMA);
				this.state = 401;
				this.enumVariantDefn();
				}
				}
				this.state = 406;
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
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 407;
					(_localctx as EnumVariantStructDefnBraceContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 410;
				(_localctx as EnumVariantStructDefnBraceContext)._name = this.ident();
				}
				{
				this.state = 411;
				(_localctx as EnumVariantStructDefnBraceContext)._fields = this.braceParamList();
				}
				}
				break;

			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 413;
					(_localctx as EnumVariantStructDefnParenContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 416;
				(_localctx as EnumVariantStructDefnParenContext)._name = this.ident();
				}
				{
				this.state = 417;
				(_localctx as EnumVariantStructDefnParenContext)._fields = this.parenParamList();
				}
				}
				break;

			case 3:
				_localctx = new EnumVariantTupleDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 419;
					(_localctx as EnumVariantTupleDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 422;
				(_localctx as EnumVariantTupleDefnContext)._name = this.ident();
				}
				this.state = 423;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 424;
				(_localctx as EnumVariantTupleDefnContext)._elements = this.brackTypeExprList();
				}
				this.state = 425;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				_localctx = new EnumVariantUnitDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 427;
					(_localctx as EnumVariantUnitDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 430;
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
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 433;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 436;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 437;
			_localctx._name = this.ident();
			}
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 438;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 441;
			this.match(CWScriptParser.EQ);
			{
			this.state = 442;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 443;
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
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 446;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 449;
			this.match(CWScriptParser.FN);
			{
			this.state = 450;
			_localctx._name = this.ident();
			}
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 451;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 454;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 457;
			_localctx._params = this.parenParamList();
			}
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 458;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 459;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 462;
			_localctx._body = this.block();
			}
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 463;
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
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 466;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 469;
			this.match(CWScriptParser.H_INSTANTIATE);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 470;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 473;
			_localctx._params = this.parenParamList();
			}
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 474;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 475;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 478;
			_localctx._body = this.block();
			}
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 479;
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
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 482;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 485;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 486;
			_localctx._name = this.ident();
			}
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 487;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 490;
			_localctx._params = this.parenParamList();
			}
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 491;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 492;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 495;
			_localctx._body = this.block();
			}
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 496;
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
		this.enterRule(_localctx, 62, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 499;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 502;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 503;
			_localctx._name = this.ident();
			}
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 504;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 507;
			_localctx._params = this.parenParamList();
			}
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 508;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 509;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 512;
			_localctx._body = this.block();
			}
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 513;
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
		this.enterRule(_localctx, 64, CWScriptParser.RULE_errorDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 516;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 519;
			this.match(CWScriptParser.ERROR);
			{
			this.state = 520;
			_localctx._name = this.ident();
			}
			{
			this.state = 521;
			_localctx._params = this.parenParamList();
			}
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 522;
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
		this.enterRule(_localctx, 66, CWScriptParser.RULE_eventDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 525;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 528;
			this.match(CWScriptParser.EVENT);
			{
			this.state = 529;
			_localctx._name = this.ident();
			}
			{
			this.state = 530;
			_localctx._params = this.parenParamList();
			}
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 531;
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
		this.enterRule(_localctx, 68, CWScriptParser.RULE_stateBlockDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(CWScriptParser.STATE);
			this.state = 535;
			this.match(CWScriptParser.LBRACE);
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				{
				this.state = 536;
				_localctx._stateDefn = this.stateDefn();
				_localctx._stateFields.push(_localctx._stateDefn);
				}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 542;
			this.match(CWScriptParser.RBRACE);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 543;
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
		this.enterRule(_localctx, 70, CWScriptParser.RULE_stateDefn);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.stateItemDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 547;
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
		this.enterRule(_localctx, 72, CWScriptParser.RULE_stateItemDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 550;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 553;
			_localctx._name = this.ident();
			}
			this.state = 554;
			this.match(CWScriptParser.COLON);
			{
			this.state = 555;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 556;
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
		this.enterRule(_localctx, 74, CWScriptParser.RULE_stateMapDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 559;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 562;
			_localctx._name = this.ident();
			}
			this.state = 563;
			this.match(CWScriptParser.LBRACK);
			{
			this.state = 564;
			_localctx._indexTy = this.typeExpr(0);
			}
			this.state = 565;
			this.match(CWScriptParser.RBRACK);
			this.state = 566;
			this.match(CWScriptParser.COLON);
			{
			this.state = 567;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 568;
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
		this.enterRule(_localctx, 76, CWScriptParser.RULE_exprStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.expr(0);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 572;
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
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 576;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 577;
				this.expr(17);
				}
				break;

			case 2:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 578;
				this.ifExpr_();
				}
				break;

			case 3:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 579;
				this.tryCatchElseExpr_();
				}
				break;

			case 4:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 580;
				this.closureExpr_();
				}
				break;

			case 5:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 581;
				this.structExpr_();
				}
				break;

			case 6:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 582;
				this.tupleExpr_();
				}
				break;

			case 7:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 583;
				this.literal();
				}
				break;

			case 8:
				{
				_localctx = new ReturnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 584;
				this.returnExpr_();
				}
				break;

			case 9:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 585;
				this.failExpr_();
				}
				break;

			case 10:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 586;
				this.ident();
				}
				break;

			case 11:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 587;
				this.match(CWScriptParser.LPAREN);
				this.state = 588;
				this.expr(0);
				this.state = 589;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 657;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 655;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 593;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 594;
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
						this.state = 595;
						this.expr(21);
						}
						break;

					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 596;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						{
						this.state = 597;
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
						this.state = 598;
						this.expr(20);
						}
						break;

					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 599;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						{
						this.state = 600;
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
						this.state = 601;
						this.expr(19);
						}
						break;

					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 602;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 603;
						this.match(CWScriptParser.D_QUEST);
						this.state = 604;
						this.expr(17);
						}
						break;

					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 605;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 606;
						this.match(CWScriptParser.IN);
						this.state = 607;
						this.expr(16);
						}
						break;

					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 608;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						{
						this.state = 609;
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
						this.state = 610;
						this.expr(14);
						}
						break;

					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 611;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 612;
						this.match(CWScriptParser.AND);
						this.state = 613;
						this.expr(13);
						}
						break;

					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 614;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 615;
						this.match(CWScriptParser.OR);
						this.state = 616;
						this.expr(12);
						}
						break;

					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 617;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 618;
						this.match(CWScriptParser.DOT);
						{
						this.state = 619;
						(_localctx as DotExprContext)._memberName = this.ident();
						}
						}
						break;

					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 620;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 622;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 621;
							(_localctx as CallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 625;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.LBRACK) {
							{
							this.state = 624;
							(_localctx as CallExprContext)._typeArgs = this.brackTypeExprList();
							}
						}

						this.state = 627;
						this.match(CWScriptParser.LPAREN);
						this.state = 636;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
							{
							{
							this.state = 628;
							(_localctx as CallExprContext)._arg = this.arg();
							(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
							}
							this.state = 633;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 629;
								this.match(CWScriptParser.COMMA);
								this.state = 630;
								(_localctx as CallExprContext)._arg = this.arg();
								(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
								}
								}
								this.state = 635;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 638;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 639;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 640;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 641;
						(_localctx as IndexExprContext)._index = this.expr(0);
						}
						this.state = 642;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 12:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 644;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 645;
						this.match(CWScriptParser.AS);
						{
						this.state = 646;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 647;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 648;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 14:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 649;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 650;
						this.match(CWScriptParser.IS);
						this.state = 652;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 651;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 654;
						(_localctx as IsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;
					}
					}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
		this.enterRule(_localctx, 80, CWScriptParser.RULE_ifExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.match(CWScriptParser.IF);
			{
			this.state = 661;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 662;
			_localctx._thenBody = this.blockOrExpr();
			}
			this.state = 665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 663;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 664;
				_localctx._elseBody = this.blockOrExpr();
				}
				}
				break;
			}
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 667;
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
		this.enterRule(_localctx, 82, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.match(CWScriptParser.TRY);
			{
			this.state = 671;
			_localctx._body = this.block();
			}
			this.state = 675;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 672;
					_localctx._catchClause = this.catchClause();
					_localctx._catchClauses.push(_localctx._catchClause);
					}
					}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			}
			this.state = 680;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 678;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 679;
				_localctx._elseBody = this.block();
				}
				}
				break;
			}
			this.state = 683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 682;
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
		this.enterRule(_localctx, 84, CWScriptParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(CWScriptParser.CATCH);
			{
			this.state = 686;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 687;
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
		this.enterRule(_localctx, 86, CWScriptParser.RULE_closureExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 689;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 692;
			_localctx._params = this.barParamList();
			}
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 693;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 694;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 697;
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
		this.enterRule(_localctx, 88, CWScriptParser.RULE_structExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 699;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 700;
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
		this.enterRule(_localctx, 90, CWScriptParser.RULE_tupleExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(CWScriptParser.LBRACK);
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
				{
				{
				this.state = 703;
				_localctx._expr = this.expr(0);
				_localctx._elements.push(_localctx._expr);
				}
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 704;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 705;
					_localctx._expr = this.expr(0);
					_localctx._elements.push(_localctx._expr);
					}
					}
					}
					this.state = 710;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 713;
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
		this.enterRule(_localctx, 92, CWScriptParser.RULE_returnExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this.match(CWScriptParser.RETURN);
			{
			this.state = 716;
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
		this.enterRule(_localctx, 94, CWScriptParser.RULE_failExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(CWScriptParser.FAIL);
			{
			this.state = 719;
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
		this.enterRule(_localctx, 96, CWScriptParser.RULE_literal);
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 721;
				this.stringLit();
				}
				break;
			case CWScriptParser.IntLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 722;
				this.intLit();
				}
				break;
			case CWScriptParser.DecLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 723;
				this.decLit();
				}
				break;
			case CWScriptParser.BoolLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 724;
				this.boolLit();
				}
				break;
			case CWScriptParser.NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 725;
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
		this.enterRule(_localctx, 98, CWScriptParser.RULE_stringLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
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
		this.enterRule(_localctx, 100, CWScriptParser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
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
		this.enterRule(_localctx, 102, CWScriptParser.RULE_decLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
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
		this.enterRule(_localctx, 104, CWScriptParser.RULE_boolLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
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
		this.enterRule(_localctx, 106, CWScriptParser.RULE_noneLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
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
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, CWScriptParser.RULE_typeExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 739;
				this.match(CWScriptParser.LPAREN);
				this.state = 740;
				this.typeExpr(0);
				this.state = 741;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				{
				this.state = 743;
				(_localctx as TupleTypeExprContext)._elements = this.brackTypeExprList();
				}
				}
				break;

			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 744;
				this.match(CWScriptParser.LBRACK);
				this.state = 745;
				this.typeExpr(0);
				this.state = 746;
				this.match(CWScriptParser.SEMI);
				{
				this.state = 747;
				(_localctx as ArrayTypeExprContext)._size = this.intLit();
				}
				this.state = 748;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 4:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 750;
				this.structDefn();
				}
				break;

			case 5:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 751;
				this.tupleDefn();
				}
				break;

			case 6:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 752;
				this.unitDefn();
				}
				break;

			case 7:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 753;
				this.enumDefn();
				}
				break;

			case 8:
				{
				_localctx = new TypeVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 754;
				this.typeVar();
				}
				break;

			case 9:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 755;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 767;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 765;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 758;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 759;
						(_localctx as ParameterizedTypeExprContext)._typeArgs = this.brackTypeExprList();
						}
						}
						break;

					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 760;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 761;
						this.match(CWScriptParser.DOT);
						{
						this.state = 762;
						(_localctx as MemberTypeExprContext)._memberName = this.ident();
						}
						}
						break;

					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 763;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 764;
						this.match(CWScriptParser.QUEST);
						}
						break;
					}
					}
				}
				this.state = 769;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
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
		this.enterRule(_localctx, 110, CWScriptParser.RULE_typeVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 770;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 773;
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
		this.enterRule(_localctx, 112, CWScriptParser.RULE_ident);
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.HashIdent:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 775;
				this.match(CWScriptParser.HashIdent);
				}
				break;
			case CWScriptParser.DollarIdent:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 776;
				this.match(CWScriptParser.DollarIdent);
				}
				break;
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 777;
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
				this.state = 778;
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
		this.enterRule(_localctx, 114, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 781;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 784;
			_localctx._name = this.ident();
			}
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 785;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 788;
				this.match(CWScriptParser.COLON);
				{
				this.state = 789;
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
		this.enterRule(_localctx, 116, CWScriptParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 792;
			_localctx._name = this.ident();
			}
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 793;
				this.match(CWScriptParser.COLON);
				{
				this.state = 794;
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
		this.enterRule(_localctx, 118, CWScriptParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 797;
			_localctx._name = this.ident();
			}
			this.state = 798;
			this.match(CWScriptParser.EQ);
			{
			this.state = 799;
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
		this.enterRule(_localctx, 120, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 801;
				this.expr(0);
				}
				break;

			case 2:
				{
				this.state = 802;
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
		this.enterRule(_localctx, 122, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 805;
			this.ident();
			this.state = 810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 806;
				this.match(CWScriptParser.COMMA);
				this.state = 807;
				this.ident();
				}
				}
				this.state = 812;
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
		this.enterRule(_localctx, 124, CWScriptParser.RULE_parenParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(CWScriptParser.LPAREN);
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 814;
				this.param();
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 815;
					this.match(CWScriptParser.COMMA);
					this.state = 816;
					this.param();
					}
					}
					this.state = 821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 824;
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
		this.enterRule(_localctx, 126, CWScriptParser.RULE_braceParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.match(CWScriptParser.LBRACE);
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 827;
				this.param();
				this.state = 832;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 828;
						this.match(CWScriptParser.COMMA);
						this.state = 829;
						this.param();
						}
						}
					}
					this.state = 834;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				}
			}

			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 837;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 840;
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
		this.enterRule(_localctx, 128, CWScriptParser.RULE_barParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.match(CWScriptParser.BAR);
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 843;
				this.param();
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 844;
					this.match(CWScriptParser.COMMA);
					this.state = 845;
					this.param();
					}
					}
					this.state = 850;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 853;
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
		this.enterRule(_localctx, 130, CWScriptParser.RULE_brackTypeParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(CWScriptParser.LBRACK);
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CWScriptParser.TypeVar - 91)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 91)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 91)))) !== 0)) {
				{
				this.state = 856;
				this.typeVar();
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 857;
					this.match(CWScriptParser.COMMA);
					this.state = 858;
					this.typeVar();
					}
					}
					this.state = 863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 866;
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
		this.enterRule(_localctx, 132, CWScriptParser.RULE_brackTypeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			this.match(CWScriptParser.LBRACK);
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.TypeVar - 88)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 869;
				this.typeExpr(0);
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 870;
					this.match(CWScriptParser.COMMA);
					this.state = 871;
					this.typeExpr(0);
					}
					}
					this.state = 876;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 879;
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
		this.enterRule(_localctx, 134, CWScriptParser.RULE_braceFieldList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(CWScriptParser.LBRACE);
			this.state = 890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 882;
				this.field();
				this.state = 887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 883;
						this.match(CWScriptParser.COMMA);
						this.state = 884;
						this.field();
						}
						}
					}
					this.state = 889;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
				}
			}

			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 892;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 895;
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
		this.enterRule(_localctx, 136, CWScriptParser.RULE_typeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 897;
			this.typeExpr(0);
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 898;
				this.match(CWScriptParser.COMMA);
				this.state = 899;
				this.typeExpr(0);
				}
				}
				this.state = 904;
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
		this.enterRule(_localctx, 138, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.match(CWScriptParser.LBRACE);
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.DollarIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 66)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 66)))) !== 0)) {
				{
				{
				this.state = 906;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 912;
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
		this.enterRule(_localctx, 140, CWScriptParser.RULE_blockOrExpr);
		try {
			this.state = 916;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 914;
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
				this.state = 915;
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
		this.enterRule(_localctx, 142, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
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
		case 39:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 54:
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
			return this.precpred(this._ctx, 25);

		case 9:
			return this.precpred(this._ctx, 24);

		case 10:
			return this.precpred(this._ctx, 23);

		case 11:
			return this.precpred(this._ctx, 22);

		case 12:
			return this.precpred(this._ctx, 21);

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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u039B\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x03\x02\x07\x02\x94\n\x02\f\x02\x0E\x02\x97" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xAD\n\x04\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\xB2\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB8\n\x05\x03\x06" +
		"\x05\x06\xBB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\xC3\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\xC8\n\x07\x03\x07\x03\x07" +
		"\x05\x07\xCC\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\xD1\n\x07\x03\x07\x05" +
		"\x07\xD4\n\x07\x03\b\x05\b\xD7\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\xDD\n" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xE3\n\b\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\xE9\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xF1\n\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xFA\n\v\x03\f\x03\f\x05\f\xFE\n\f" +
		"\x03\r\x03\r\x05\r\u0102\n\r\x03\x0E\x03\x0E\x05\x0E\u0106\n\x0E\x03\x0F" +
		"\x03\x0F\x05\x0F\u010A\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0115\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\u011A\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\u011F\n\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u012F\n\x14\x03\x15\x05\x15\u0132" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0138\n\x15\x03\x15\x03" +
		"\x15\x05\x15\u013C\n\x15\x03\x15\x03\x15\x05\x15\u0140\n\x15\x03\x16\x05" +
		"\x16\u0143\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0149\n\x16\x03" +
		"\x16\x03\x16\x05\x16\u014D\n\x16\x03\x17\x05\x17\u0150\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u0155\n\x17\x03\x17\x03\x17\x05\x17\u0159\n\x17\x03" +
		"\x17\x05\x17\u015C\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0161\n\x17\x03" +
		"\x17\x03\x17\x05\x17\u0165\n\x17\x05\x17\u0167\n\x17\x03\x18\x05\x18\u016A" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\u016F\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u0175\n\x18\x03\x19\x05\x19\u0178\n\x19\x03\x19\x03" +
		"\x19\x05\x19\u017C\n\x19\x03\x19\x03\x19\x05\x19\u0180\n\x19\x03\x1A\x05" +
		"\x1A\u0183\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0188\n\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u018C\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0190\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u0195\n\x1B\f\x1B\x0E\x1B\u0198\v\x1B\x03\x1C\x05" +
		"\x1C\u019B\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01A1\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01A7\n\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01AF\n\x1C\x03\x1C\x05\x1C\u01B2\n\x1C" +
		"\x03\x1D\x05\x1D\u01B5\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01BA\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01BF\n\x1D\x03\x1E\x05\x1E\u01C2\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01C7\n\x1E\x03\x1E\x05\x1E\u01CA\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01CF\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01D3" +
		"\n\x1E\x03\x1F\x05\x1F\u01D6\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01DA\n\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01DF\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01E3" +
		"\n\x1F\x03 \x05 \u01E6\n \x03 \x03 \x03 \x05 \u01EB\n \x03 \x03 \x03 " +
		"\x05 \u01F0\n \x03 \x03 \x05 \u01F4\n \x03!\x05!\u01F7\n!\x03!\x03!\x03" +
		"!\x05!\u01FC\n!\x03!\x03!\x03!\x05!\u0201\n!\x03!\x03!\x05!\u0205\n!\x03" +
		"\"\x05\"\u0208\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u020E\n\"\x03#\x05#\u0211" +
		"\n#\x03#\x03#\x03#\x03#\x05#\u0217\n#\x03$\x03$\x03$\x07$\u021C\n$\f$" +
		"\x0E$\u021F\v$\x03$\x03$\x05$\u0223\n$\x03%\x03%\x05%\u0227\n%\x03&\x05" +
		"&\u022A\n&\x03&\x03&\x03&\x03&\x05&\u0230\n&\x03\'\x05\'\u0233\n\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u023C\n\'\x03(\x03(\x05(" +
		"\u0240\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x05)\u0252\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0271\n)\x03)\x05)\u0274" +
		"\n)\x03)\x03)\x03)\x03)\x07)\u027A\n)\f)\x0E)\u027D\v)\x05)\u027F\n)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05" +
		")\u028F\n)\x03)\x07)\u0292\n)\f)\x0E)\u0295\v)\x03*\x03*\x03*\x03*\x03" +
		"*\x05*\u029C\n*\x03*\x05*\u029F\n*\x03+\x03+\x03+\x07+\u02A4\n+\f+\x0E" +
		"+\u02A7\v+\x03+\x03+\x05+\u02AB\n+\x03+\x05+\u02AE\n+\x03,\x03,\x03,\x03" +
		",\x03-\x05-\u02B5\n-\x03-\x03-\x03-\x05-\u02BA\n-\x03-\x03-\x03.\x03." +
		"\x03.\x03/\x03/\x03/\x03/\x07/\u02C5\n/\f/\x0E/\u02C8\v/\x05/\u02CA\n" +
		"/\x03/\x03/\x030\x030\x030\x031\x031\x031\x032\x032\x032\x032\x032\x05" +
		"2\u02D9\n2\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x058\u02F7\n8\x038\x038\x038\x038\x038\x038\x038\x078\u0300" +
		"\n8\f8\x0E8\u0303\v8\x039\x059\u0306\n9\x039\x039\x03:\x03:\x03:\x03:" +
		"\x05:\u030E\n:\x03;\x05;\u0311\n;\x03;\x03;\x05;\u0315\n;\x03;\x03;\x05" +
		";\u0319\n;\x03<\x03<\x03<\x05<\u031E\n<\x03=\x03=\x03=\x03=\x03>\x03>" +
		"\x05>\u0326\n>\x03?\x03?\x03?\x07?\u032B\n?\f?\x0E?\u032E\v?\x03@\x03" +
		"@\x03@\x03@\x07@\u0334\n@\f@\x0E@\u0337\v@\x05@\u0339\n@\x03@\x03@\x03" +
		"A\x03A\x03A\x03A\x07A\u0341\nA\fA\x0EA\u0344\vA\x05A\u0346\nA\x03A\x05" +
		"A\u0349\nA\x03A\x03A\x03B\x03B\x03B\x03B\x07B\u0351\nB\fB\x0EB\u0354\v" +
		"B\x05B\u0356\nB\x03B\x03B\x03C\x03C\x03C\x03C\x07C\u035E\nC\fC\x0EC\u0361" +
		"\vC\x05C\u0363\nC\x03C\x03C\x03D\x03D\x03D\x03D\x07D\u036B\nD\fD\x0ED" +
		"\u036E\vD\x05D\u0370\nD\x03D\x03D\x03E\x03E\x03E\x03E\x07E\u0378\nE\f" +
		"E\x0EE\u037B\vE\x05E\u037D\nE\x03E\x05E\u0380\nE\x03E\x03E\x03F\x03F\x03" +
		"F\x07F\u0387\nF\fF\x0EF\u038A\vF\x03G\x03G\x07G\u038E\nG\fG\x0EG\u0391" +
		"\vG\x03G\x03G\x03H\x03H\x05H\u0397\nH\x03I\x03I\x03I\x02\x02\x04PnJ\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x02\t\x03\x02ab\b\x02GGKKMMOOQQSS\x05\x02NNPPRR\x04\x02JJLL\x03\x02T" +
		"W\x03\x02HI\b\x02\x04\n\x10\x19\x1D\x1D\x1F\x1F!&*/\x02\u0415\x02\x95" +
		"\x03\x02\x02\x02\x04\x9A\x03\x02\x02\x02\x06\xAC\x03\x02\x02\x02\b\xAE" +
		"\x03\x02\x02\x02\n\xBA\x03\x02\x02\x02\f\xD3\x03\x02\x02\x02\x0E\xD6\x03" +
		"\x02\x02\x02\x10\xE4\x03\x02\x02\x02\x12\xEA\x03\x02\x02\x02\x14\xF2\x03" +
		"\x02\x02\x02\x16\xFB\x03\x02\x02\x02\x18\xFF\x03\x02\x02\x02\x1A\u0103" +
		"\x03\x02\x02\x02\x1C\u0107\x03\x02\x02\x02\x1E\u010B\x03\x02\x02\x02 " +
		"\u0111\x03\x02\x02\x02\"\u0116\x03\x02\x02\x02$\u011B\x03\x02\x02\x02" +
		"&\u012E\x03\x02\x02\x02(\u0131\x03\x02\x02\x02*\u0142\x03\x02\x02\x02" +
		",\u0166\x03\x02\x02\x02.\u0169\x03\x02\x02\x020\u0177\x03\x02\x02\x02" +
		"2\u0182\x03\x02\x02\x024\u0191\x03\x02\x02\x026\u01B1\x03\x02\x02\x02" +
		"8\u01B4\x03\x02\x02\x02:\u01C1\x03\x02\x02\x02<\u01D5\x03\x02\x02\x02" +
		">\u01E5\x03\x02\x02\x02@\u01F6\x03\x02\x02\x02B\u0207\x03\x02\x02\x02" +
		"D\u0210\x03\x02\x02\x02F\u0218\x03\x02\x02\x02H\u0226\x03\x02\x02\x02" +
		"J\u0229\x03\x02\x02\x02L\u0232\x03\x02\x02\x02N\u023D\x03\x02\x02\x02" +
		"P\u0251\x03\x02\x02\x02R\u0296\x03\x02\x02\x02T\u02A0\x03\x02\x02\x02" +
		"V\u02AF\x03\x02\x02\x02X\u02B4\x03\x02\x02\x02Z\u02BD\x03\x02\x02\x02" +
		"\\\u02C0\x03\x02\x02\x02^\u02CD\x03\x02\x02\x02`\u02D0\x03\x02\x02\x02" +
		"b\u02D8\x03\x02\x02\x02d\u02DA\x03\x02\x02\x02f\u02DC\x03\x02\x02\x02" +
		"h\u02DE\x03\x02\x02\x02j\u02E0\x03\x02\x02\x02l\u02E2\x03\x02\x02\x02" +
		"n\u02F6\x03\x02\x02\x02p\u0305\x03\x02\x02\x02r\u030D\x03\x02\x02\x02" +
		"t\u0310\x03\x02\x02\x02v\u031A\x03\x02\x02\x02x\u031F\x03\x02\x02\x02" +
		"z\u0325\x03\x02\x02\x02|\u0327\x03\x02\x02\x02~\u032F\x03\x02\x02\x02" +
		"\x80\u033C\x03\x02\x02\x02\x82\u034C\x03\x02\x02\x02\x84\u0359\x03\x02" +
		"\x02\x02\x86\u0366\x03\x02\x02\x02\x88\u0373\x03\x02\x02\x02\x8A\u0383" +
		"\x03\x02\x02\x02\x8C\u038B\x03\x02\x02\x02\x8E\u0396\x03\x02\x02\x02\x90" +
		"\u0398\x03\x02\x02\x02\x92\x94\x05\x06\x04\x02\x93\x92\x03\x02\x02\x02" +
		"\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02" +
		"\x96\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x99\x07\x02\x02\x03" +
		"\x99\x03\x03\x02\x02\x02\x9A\x9B\t\x02\x02\x02\x9B\x05\x03\x02\x02\x02" +
		"\x9C\xAD\x05\b\x05\x02\x9D\xAD\x05&\x14\x02\x9E\xAD\x05\n\x06\x02\x9F" +
		"\xAD\x05\x0E\b\x02\xA0\xAD\x05\x10\t\x02\xA1\xAD\x05\x12\n\x02\xA2\xAD" +
		"\x05\x14\v\x02\xA3\xAD\x05\x18\r\x02\xA4\xAD\x05\x16\f\x02\xA5\xAD\x05" +
		"\x1E\x10\x02\xA6\xAD\x05 \x11\x02\xA7\xAD\x05\"\x12\x02\xA8\xAD\x05$\x13" +
		"\x02\xA9\xAD\x05\x1C\x0F\x02\xAA\xAD\x05\x1A\x0E\x02\xAB\xAD\x05N(\x02" +
		"\xAC\x9C\x03\x02\x02\x02\xAC\x9D\x03\x02\x02\x02\xAC\x9E\x03\x02\x02\x02" +
		"\xAC\x9F\x03\x02\x02\x02\xAC\xA0\x03\x02\x02\x02\xAC\xA1\x03\x02\x02\x02" +
		"\xAC\xA2\x03\x02\x02\x02\xAC\xA3\x03\x02\x02\x02\xAC\xA4\x03\x02\x02\x02" +
		"\xAC\xA5\x03\x02\x02\x02\xAC\xA6\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02" +
		"\xAC\xA8\x03\x02\x02\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02" +
		"\xAC\xAB\x03\x02\x02\x02\xAD\x07\x03\x02\x02\x02\xAE\xAF\x07\x06\x02\x02" +
		"\xAF\xB1\x076\x02\x02\xB0\xB2\x05|?\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2" +
		"\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x077\x02\x02\xB4\xB5" +
		"\x07\x17\x02\x02\xB5\xB7\x05d3\x02\xB6\xB8\x07=\x02\x02\xB7\xB6\x03\x02" +
		"\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\t\x03\x02\x02\x02\xB9\xBB\x05\x04" +
		"\x03\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xBD\x07&\x02\x02\xBD\xBE\x05\f\x07\x02\xBE\xBF\x07G\x02\x02" +
		"\xBF\xC0\x05P)\x02\xC0\xC2\x03\x02\x02\x02\xC1\xC3\x07=\x02\x02\xC2\xC1" +
		"\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\v\x03\x02\x02\x02\xC4\xC7" +
		"\x05r:\x02\xC5\xC6\x07>\x02\x02\xC6\xC8\x05n8\x02\xC7\xC5\x03\x02\x02" +
		"\x02\xC7\xC8\x03\x02\x02\x02\xC8\xD4\x03\x02\x02\x02\xC9\xCB\x074\x02" +
		"\x02\xCA\xCC\x05|?\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\xCD\x03\x02\x02\x02\xCD\xD4\x075\x02\x02\xCE\xD0\x076\x02\x02\xCF" +
		"\xD1\x05|?\x02\xD0\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xD4\x077\x02\x02\xD3\xC4\x03\x02\x02\x02\xD3\xC9" +
		"\x03\x02\x02\x02\xD3\xCE\x03\x02\x02\x02\xD4\r\x03\x02\x02\x02\xD5\xD7" +
		"\x05\x04\x03\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\xD9\x07\'\x02\x02\xD9\xDC\x05r:\x02\xDA\xDB\x07>" +
		"\x02\x02\xDB\xDD\x05n8\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02" +
		"\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x07G\x02\x02\xDF\xE0\x05P)\x02\xE0" +
		"\xE2\x03\x02\x02\x02\xE1\xE3\x07=\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2" +
		"\xE3\x03\x02\x02\x02\xE3\x0F\x03\x02\x02\x02\xE4\xE5\x05r:\x02\xE5\xE6" +
		"\t\x03\x02\x02\xE6\xE8\x05P)\x02\xE7\xE9\x07=\x02\x02\xE8\xE7\x03\x02" +
		"\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\x11\x03\x02\x02\x02\xEA\xEB\x05P" +
		")\x02\xEB\xEC\x078\x02\x02\xEC\xED\x05r:\x02\xED\xEE\t\x03\x02\x02\xEE" +
		"\xF0\x05P)\x02\xEF\xF1\x07=\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03" +
		"\x02\x02\x02\xF1\x13\x03\x02\x02\x02\xF2\xF3\x05P)\x02\xF3\xF4\x074\x02" +
		"\x02\xF4\xF5\x05P)\x02\xF5\xF6\x075\x02\x02\xF6\xF7\t\x03\x02\x02\xF7" +
		"\xF9\x05P)\x02\xF8\xFA\x07=\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03" +
		"\x02\x02\x02\xFA\x15\x03\x02\x02\x02\xFB\xFD\x05T+\x02\xFC\xFE\x07=\x02" +
		"\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\x17\x03\x02\x02" +
		"\x02\xFF\u0101\x05R*\x02\u0100\u0102\x07=\x02\x02\u0101\u0100\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\x19\x03\x02\x02\x02\u0103\u0105" +
		"\x05^0\x02\u0104\u0106\x07=\x02\x02\u0105\u0104\x03\x02\x02\x02\u0105" +
		"\u0106\x03\x02\x02\x02\u0106\x1B\x03\x02\x02\x02\u0107\u0109\x05`1\x02" +
		"\u0108\u010A\x07=\x02\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03" +
		"\x02\x02\x02\u010A\x1D\x03\x02\x02\x02\u010B\u010C\x07\x15\x02\x02\u010C" +
		"\u010D\x05\f\x07\x02\u010D\u010E\x07\x16\x02\x02\u010E\u010F\x05P)\x02" +
		"\u010F\u0110\x05\x8EH\x02\u0110\x1F\x03\x02\x02\x02\u0111\u0112\x07\r" +
		"\x02\x02\u0112\u0114\x05P)\x02\u0113\u0115\x07=\x02\x02\u0114\u0113\x03" +
		"\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115!\x03\x02\x02\x02\u0116" +
		"\u0117\x07\f\x02\x02\u0117\u0119\x05P)\x02\u0118\u011A\x07=\x02\x02\u0119" +
		"\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A#\x03\x02\x02" +
		"\x02\u011B\u011C\x07/\x02\x02\u011C\u011E\x05P)\x02\u011D\u011F\x07=\x02" +
		"\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F%\x03" +
		"\x02\x02\x02\u0120\u012F\x05(\x15\x02\u0121\u012F\x05*\x16\x02\u0122\u012F" +
		"\x05,\x17\x02\u0123\u012F\x05.\x18\x02\u0124\u012F\x050\x19\x02\u0125" +
		"\u012F\x052\x1A\x02\u0126\u012F\x058\x1D\x02\u0127\u012F\x05:\x1E\x02" +
		"\u0128\u012F\x05<\x1F\x02\u0129\u012F\x05> \x02\u012A\u012F\x05@!\x02" +
		"\u012B\u012F\x05B\"\x02\u012C\u012F\x05D#\x02\u012D\u012F\x05F$\x02\u012E" +
		"\u0120\x03\x02\x02\x02\u012E\u0121\x03\x02\x02\x02\u012E\u0122\x03\x02" +
		"\x02\x02\u012E\u0123\x03\x02\x02\x02\u012E\u0124\x03\x02\x02\x02\u012E" +
		"\u0125\x03\x02\x02\x02\u012E\u0126\x03\x02\x02\x02\u012E\u0127\x03\x02" +
		"\x02\x02\u012E\u0128\x03\x02\x02\x02\u012E\u0129\x03\x02\x02\x02\u012E" +
		"\u012A\x03\x02\x02\x02\u012E\u012B\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F\'\x03\x02\x02\x02\u0130\u0132" +
		"\x05\x04\x03\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x07\x04\x02\x02\u0134\u0137\x05" +
		"r:\x02\u0135\u0136\x07\b\x02\x02\u0136\u0138\x05n8\x02\u0137\u0135\x03" +
		"\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139" +
		"\u013A\x07\x07\x02\x02\u013A\u013C\x05\x8AF\x02\u013B\u0139\x03\x02\x02" +
		"\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F" +
		"\x05\x8CG\x02\u013E\u0140\x07=\x02\x02\u013F\u013E\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140)\x03\x02\x02\x02\u0141\u0143\x05\x04\x03" +
		"\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144" +
		"\x03\x02\x02\x02\u0144\u0145\x07\x05\x02\x02\u0145\u0148\x05r:\x02\u0146" +
		"\u0147\x07\b\x02\x02\u0147\u0149\x05\x8AF\x02\u0148\u0146\x03\x02\x02" +
		"\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014C" +
		"\x05\x8CG\x02\u014B\u014D\x07=\x02\x02\u014C\u014B\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D+\x03\x02\x02\x02\u014E\u0150\x05\x04\x03" +
		"\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151" +
		"\x03\x02\x02\x02\u0151\u0152\x07*\x02\x02\u0152\u0154\x05r:\x02\u0153" +
		"\u0155\x05\x84C\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02" +
		"\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x05\x80A\x02\u0157\u0159" +
		"\x07=\x02\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02" +
		"\u0159\u0167\x03\x02\x02\x02\u015A\u015C\x05\x04\x03\x02\u015B\u015A\x03" +
		"\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
		"\u015E\x07*\x02\x02\u015E\u0160\x05r:\x02\u015F\u0161\x05\x84C\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0164\x05~@\x02\u0163\u0165\x07=\x02\x02\u0164\u0163\x03" +
		"\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166" +
		"\u014F\x03\x02\x02\x02\u0166\u015B\x03\x02\x02\x02\u0167-\x03\x02\x02" +
		"\x02\u0168\u016A\x05\x04\x03\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A" +
		"\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x07+\x02\x02" +
		"\u016C\u016E\x05r:\x02\u016D\u016F\x05\x84C\x02\u016E\u016D\x03\x02\x02" +
		"\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171" +
		"\x072\x02\x02\u0171\u0172\x05\x86D\x02\u0172\u0174\x073\x02\x02\u0173" +
		"\u0175\x07=\x02\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175\x03\x02\x02" +
		"\x02\u0175/\x03\x02\x02\x02\u0176\u0178\x05\x04\x03\x02\u0177\u0176\x03" +
		"\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017B\x07,\x02\x02\u017A\u017C\x05\x84C\x02\u017B\u017A\x03\x02\x02\x02" +
		"\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x05" +
		"r:\x02\u017E\u0180\x07=\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180" +
		"\x03\x02\x02\x02\u01801\x03\x02\x02\x02\u0181\u0183\x05\x04\x03\x02\u0182" +
		"\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184\u0185\x07-\x02\x02\u0185\u0187\x05r:\x02\u0186\u0188\x05" +
		"\x84C\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018B\x076\x02\x02\u018A\u018C\x054\x1B\x02" +
		"\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03" +
		"\x02\x02\x02\u018D\u018F\x077\x02\x02\u018E\u0190\x07=\x02\x02\u018F\u018E" +
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u01903\x03\x02\x02\x02\u0191" +
		"\u0196\x056\x1C\x02\u0192\u0193\x079\x02\x02\u0193\u0195\x056\x1C\x02" +
		"\u0194\u0192\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u01975\x03\x02\x02\x02\u0198" +
		"\u0196\x03\x02\x02\x02\u0199\u019B\x05\x04\x03\x02\u019A\u0199\x03\x02" +
		"\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C" +
		"\u019D\x05r:\x02\u019D\u019E\x05\x80A\x02\u019E\u01B2\x03\x02\x02\x02" +
		"\u019F\u01A1\x05\x04\x03\x02\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x05r:\x02\u01A3\u01A4" +
		"\x05~@\x02\u01A4\u01B2\x03\x02\x02\x02\u01A5\u01A7\x05\x04\x03\x02\u01A6" +
		"\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8\u01A9\x05r:\x02\u01A9\u01AA\x072\x02\x02\u01AA\u01AB\x05" +
		"\x86D\x02\u01AB\u01AC\x073\x02\x02\u01AC\u01B2\x03\x02\x02\x02\u01AD\u01AF" +
		"\x05\x04\x03\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02" +
		"\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2\x05r:\x02\u01B1\u019A\x03\x02" +
		"\x02\x02\u01B1\u01A0\x03\x02\x02\x02\u01B1\u01A6\x03\x02\x02\x02\u01B1" +
		"\u01AE\x03\x02\x02\x02\u01B27\x03\x02\x02\x02\u01B3\u01B5\x05\x04\x03" +
		"\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6" +
		"\x03\x02\x02\x02\u01B6\u01B7\x07.\x02\x02\u01B7\u01B9\x05r:\x02\u01B8" +
		"\u01BA\x05\x84C\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02" +
		"\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x07G\x02\x02\u01BC\u01BE" +
		"\x05n8\x02\u01BD\u01BF\x07=\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE" +
		"\u01BF\x03\x02\x02\x02\u01BF9\x03\x02\x02\x02\u01C0\u01C2\x05\x04\x03" +
		"\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3" +
		"\x03\x02\x02\x02\u01C3\u01C4\x07%\x02\x02\u01C4";
	private static readonly _serializedATNSegment1: string =
		"\u01C6\x05r:\x02\u01C5\u01C7\x07<\x02\x02\u01C6\u01C5\x03\x02\x02\x02" +
		"\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8\u01CA\x05" +
		"\x84C\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01CE\x05~@\x02\u01CC\u01CD\x07B\x02\x02" +
		"\u01CD\u01CF\x05n8\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
		"\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x05\x8CG\x02\u01D1\u01D3" +
		"\x07=\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3;\x03\x02\x02\x02\u01D4\u01D6\x05\x04\x03\x02\u01D5\u01D4\x03\x02" +
		"\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
		"\u01D9\x07\x10\x02\x02\u01D8\u01DA\x07<\x02\x02\u01D9\u01D8\x03\x02\x02" +
		"\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DE" +
		"\x05~@\x02\u01DC\u01DD\x07B\x02\x02\u01DD\u01DF\x05n8\x02\u01DE\u01DC" +
		"\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02" +
		"\u01E0\u01E2\x05\x8CG\x02\u01E1\u01E3\x07=\x02\x02\u01E2\u01E1\x03\x02" +
		"\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3=\x03\x02\x02\x02\u01E4\u01E6" +
		"\x05\x04\x03\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02" +
		"\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E8\x07\x12\x02\x02\u01E8\u01EA\x05" +
		"r:\x02\u01E9\u01EB\x07<\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB" +
		"\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EF\x05~@\x02\u01ED" +
		"\u01EE\x07B\x02\x02\u01EE\u01F0\x05n8\x02\u01EF\u01ED\x03\x02\x02\x02" +
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x05" +
		"\x8CG\x02\u01F2\u01F4\x07=\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4" +
		"\x03\x02\x02\x02\u01F4?\x03\x02\x02\x02\u01F5\u01F7\x05\x04\x03\x02\u01F6" +
		"\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\x03\x02" +
		"\x02\x02\u01F8\u01F9\x07\x13\x02\x02\u01F9\u01FB\x05r:\x02\u01FA\u01FC" +
		"\x07<\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02" +
		"\u01FC\u01FD\x03\x02\x02\x02\u01FD\u0200\x05~@\x02\u01FE\u01FF\x07B\x02" +
		"\x02\u01FF\u0201\x05n8\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03" +
		"\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204\x05\x8CG\x02\u0203" +
		"\u0205\x07=\x02\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02" +
		"\x02\u0205A\x03\x02\x02\x02\u0206\u0208\x05\x04\x03\x02\u0207\u0206\x03" +
		"\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209" +
		"\u020A\x07\t\x02\x02\u020A\u020B\x05r:\x02\u020B\u020D\x05~@\x02\u020C" +
		"\u020E\x07=\x02\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E\x03\x02\x02" +
		"\x02\u020EC\x03\x02\x02\x02\u020F\u0211\x05\x04\x03\x02\u0210\u020F\x03" +
		"\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0213\x07\n\x02\x02\u0213\u0214\x05r:\x02\u0214\u0216\x05~@\x02\u0215" +
		"\u0217\x07=\x02\x02\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02" +
		"\x02\u0217E\x03\x02\x02\x02\u0218\u0219\x07\x18\x02\x02\u0219\u021D\x07" +
		"6\x02\x02\u021A\u021C\x05H%\x02\u021B\u021A\x03\x02\x02\x02\u021C\u021F" +
		"\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02" +
		"\u021E\u0220\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220\u0222\x07" +
		"7\x02\x02\u0221\u0223\x07=\x02\x02\u0222\u0221\x03\x02\x02\x02\u0222\u0223" +
		"\x03\x02\x02\x02\u0223G\x03\x02\x02\x02\u0224\u0227\x05J&\x02\u0225\u0227" +
		"\x05L\'\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227" +
		"I\x03\x02\x02\x02\u0228\u022A\x05\x04\x03\x02\u0229\u0228\x03\x02\x02" +
		"\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C" +
		"\x05r:\x02\u022C\u022D\x07>\x02\x02\u022D\u022F\x05n8\x02\u022E\u0230" +
		"\x07=\x02\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
		"\u0230K\x03\x02\x02\x02\u0231\u0233\x05\x04\x03\x02\u0232\u0231\x03\x02" +
		"\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234" +
		"\u0235\x05r:\x02\u0235\u0236\x074\x02\x02\u0236\u0237\x05n8\x02\u0237" +
		"\u0238\x075\x02\x02\u0238\u0239\x07>\x02\x02\u0239\u023B\x05n8\x02\u023A" +
		"\u023C\x07=\x02\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02" +
		"\x02\u023CM\x03\x02\x02\x02\u023D\u023F\x05P)\x02\u023E\u0240\x07=\x02" +
		"\x02\u023F\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240O\x03" +
		"\x02\x02\x02\u0241\u0242\b)\x01\x02\u0242\u0243\x07\x0E\x02\x02\u0243" +
		"\u0252\x05P)\x13\u0244\u0252\x05R*\x02\u0245\u0252\x05T+\x02\u0246\u0252" +
		"\x05X-\x02\u0247\u0252\x05Z.\x02\u0248\u0252\x05\\/\x02\u0249\u0252\x05" +
		"b2\x02\u024A\u0252\x05^0\x02\u024B\u0252\x05`1\x02\u024C\u0252\x05r:\x02" +
		"\u024D\u024E\x072\x02\x02\u024E\u024F\x05P)\x02\u024F\u0250\x073\x02\x02" +
		"\u0250\u0252\x03\x02\x02\x02\u0251\u0241\x03\x02\x02\x02\u0251\u0244\x03" +
		"\x02\x02\x02\u0251\u0245\x03\x02\x02\x02\u0251\u0246\x03\x02\x02\x02\u0251" +
		"\u0247\x03\x02\x02\x02\u0251\u0248\x03\x02\x02\x02\u0251\u0249\x03\x02" +
		"\x02\x02\u0251\u024A\x03\x02\x02\x02\u0251\u024B\x03\x02\x02\x02\u0251" +
		"\u024C\x03\x02\x02\x02\u0251\u024D\x03\x02\x02\x02\u0252\u0293\x03\x02" +
		"\x02\x02\u0253\u0254\f\x16\x02\x02\u0254\u0255\t\x04\x02\x02\u0255\u0292" +
		"\x05P)\x17\u0256\u0257\f\x15\x02\x02\u0257\u0258\t\x05\x02\x02\u0258\u0292" +
		"\x05P)\x16\u0259\u025A\f\x14\x02\x02\u025A\u025B\t\x06\x02\x02\u025B\u0292" +
		"\x05P)\x15\u025C\u025D\f\x12\x02\x02\u025D\u025E\x07:\x02\x02\u025E\u0292" +
		"\x05P)\x13\u025F\u0260\f\x11\x02\x02\u0260\u0261\x07\x16\x02\x02\u0261" +
		"\u0292\x05P)\x12\u0262\u0263\f\x0F\x02\x02\u0263\u0264\t\x07\x02\x02\u0264" +
		"\u0292\x05P)\x10\u0265\u0266\f\x0E\x02\x02\u0266\u0267\x07!\x02\x02\u0267" +
		"\u0292\x05P)\x0F\u0268\u0269\f\r\x02\x02\u0269\u026A\x07\"\x02\x02\u026A" +
		"\u0292\x05P)\x0E\u026B\u026C\f\x1B\x02\x02\u026C\u026D\x078\x02\x02\u026D" +
		"\u0292\x05r:\x02\u026E\u0270\f\x1A\x02\x02\u026F\u0271\x07<\x02\x02\u0270" +
		"\u026F\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0273\x03\x02" +
		"\x02\x02\u0272\u0274\x05\x86D\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274" +
		"\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u027E\x072\x02\x02" +
		"\u0276\u027B\x05z>\x02\u0277\u0278\x079\x02\x02\u0278\u027A\x05z>\x02" +
		"\u0279\u0277\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D" +
		"\u027B\x03\x02\x02\x02\u027E\u0276\x03\x02\x02\x02\u027E\u027F\x03\x02" +
		"\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0292\x073\x02\x02\u0281\u0282" +
		"\f\x19\x02\x02\u0282\u0283\x074\x02\x02\u0283\u0284\x05P)\x02\u0284\u0285" +
		"\x075\x02\x02\u0285\u0292\x03\x02\x02\x02\u0286\u0287\f\x18\x02\x02\u0287" +
		"\u0288\x070\x02\x02\u0288\u0292\x05n8\x02\u0289\u028A\f\x17\x02\x02\u028A" +
		"\u0292\x07;\x02\x02\u028B\u028C\f\x10\x02\x02\u028C\u028E\x07\x1A\x02" +
		"\x02\u028D\u028F\x07\x1E\x02\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F" +
		"\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x05n8\x02\u0291" +
		"\u0253\x03\x02\x02\x02\u0291\u0256\x03\x02\x02\x02\u0291\u0259\x03\x02" +
		"\x02\x02\u0291\u025C\x03\x02\x02\x02\u0291\u025F\x03\x02\x02\x02\u0291" +
		"\u0262\x03\x02\x02\x02\u0291\u0265\x03\x02\x02\x02\u0291\u0268\x03\x02" +
		"\x02\x02\u0291\u026B\x03\x02\x02\x02\u0291\u026E\x03\x02\x02\x02\u0291" +
		"\u0281\x03\x02\x02\x02\u0291\u0286\x03\x02\x02\x02\u0291\u0289\x03\x02" +
		"\x02\x02\u0291\u028B\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293" +
		"\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294Q\x03\x02\x02" +
		"\x02\u0295\u0293\x03\x02\x02\x02\u0296\u0297\x07\x19\x02\x02\u0297\u0298" +
		"\x05P)\x02\u0298\u029B\x05\x8EH\x02\u0299\u029A\x07\x1D\x02\x02\u029A" +
		"\u029C\x05\x8EH\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02\x02" +
		"\x02\u029C\u029E\x03\x02\x02\x02\u029D\u029F\x07=\x02\x02\u029E\u029D" +
		"\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029FS\x03\x02\x02\x02\u02A0" +
		"\u02A1\x07\x1B\x02\x02\u02A1\u02A5\x05\x8CG\x02\u02A2\u02A4\x05V,\x02" +
		"\u02A3\u02A2\x03\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A3\x03" +
		"\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02AA\x03\x02\x02\x02\u02A7" +
		"\u02A5\x03\x02\x02\x02\u02A8\u02A9\x07\x1D\x02\x02\u02A9\u02AB\x05\x8C" +
		"G\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD" +
		"\x03\x02\x02\x02\u02AC\u02AE\x07=\x02\x02\u02AD\u02AC\x03\x02\x02\x02" +
		"\u02AD\u02AE\x03\x02\x02\x02\u02AEU\x03\x02\x02\x02\u02AF\u02B0\x07\x1C" +
		"\x02\x02\u02B0\u02B1\x05n8\x02\u02B1\u02B2\x05\x8CG\x02\u02B2W\x03\x02" +
		"\x02\x02\u02B3\u02B5\x07<\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5" +
		"\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B9\x05\x82B\x02" +
		"\u02B7\u02B8\x07B\x02\x02\u02B8\u02BA\x05n8\x02\u02B9\u02B7\x03\x02\x02" +
		"\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC" +
		"\x05\x8EH\x02\u02BCY\x03\x02\x02\x02\u02BD\u02BE\x05n8\x02\u02BE\u02BF" +
		"\x05\x88E\x02\u02BF[\x03\x02\x02\x02\u02C0\u02C9\x074\x02\x02\u02C1\u02C6" +
		"\x05P)\x02\u02C2\u02C3\x079\x02\x02\u02C3\u02C5\x05P)\x02\u02C4\u02C2" +
		"\x03\x02\x02\x02\u02C5\u02C8\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02" +
		"\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02\u02C8\u02C6\x03" +
		"\x02\x02\x02\u02C9\u02C1\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA" +
		"\u02CB\x03\x02\x02\x02\u02CB\u02CC\x075\x02\x02\u02CC]\x03\x02\x02\x02" +
		"\u02CD\u02CE\x07)\x02\x02\u02CE\u02CF\x05P)\x02\u02CF_\x03\x02\x02\x02" +
		"\u02D0\u02D1\x07(\x02\x02\u02D1\u02D2\x05P)\x02\u02D2a\x03\x02\x02\x02" +
		"\u02D3\u02D9\x05d3\x02\u02D4\u02D9\x05f4\x02\u02D5\u02D9\x05h5\x02\u02D6" +
		"\u02D9\x05j6\x02\u02D7\u02D9\x05l7\x02\u02D8\u02D3\x03\x02\x02\x02\u02D8" +
		"\u02D4\x03\x02\x02\x02\u02D8\u02D5\x03\x02\x02\x02\u02D8\u02D6\x03\x02" +
		"\x02\x02\u02D8\u02D7\x03\x02\x02\x02\u02D9c\x03\x02\x02\x02\u02DA\u02DB" +
		"\x07^\x02\x02\u02DBe\x03\x02\x02\x02\u02DC\u02DD\x07_\x02\x02\u02DDg\x03" +
		"\x02\x02\x02\u02DE\u02DF\x07`\x02\x02\u02DFi\x03\x02\x02\x02\u02E0\u02E1" +
		"\x07Y\x02\x02\u02E1k\x03\x02\x02\x02\u02E2\u02E3\x07\x1F\x02\x02\u02E3" +
		"m\x03\x02\x02\x02\u02E4\u02E5\b8\x01\x02\u02E5\u02E6\x072\x02\x02\u02E6" +
		"\u02E7\x05n8\x02\u02E7\u02E8\x073\x02\x02\u02E8\u02F7\x03\x02\x02\x02" +
		"\u02E9\u02F7\x05\x86D\x02\u02EA\u02EB\x074\x02\x02\u02EB\u02EC\x05n8\x02" +
		"\u02EC\u02ED\x07=\x02\x02\u02ED\u02EE\x05f4\x02\u02EE\u02EF\x075\x02\x02" +
		"\u02EF\u02F7\x03\x02\x02\x02\u02F0\u02F7\x05,\x17\x02\u02F1\u02F7\x05" +
		".\x18\x02\u02F2\u02F7\x050\x19\x02\u02F3\u02F7\x052\x1A\x02\u02F4\u02F7" +
		"\x05p9\x02\u02F5\u02F7\x05r:\x02\u02F6\u02E4\x03\x02\x02\x02\u02F6\u02E9" +
		"\x03\x02\x02\x02\u02F6\u02EA\x03\x02\x02\x02\u02F6\u02F0\x03\x02\x02\x02" +
		"\u02F6\u02F1\x03\x02\x02\x02\u02F6\u02F2\x03\x02\x02\x02\u02F6\u02F3\x03" +
		"\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6\u02F5\x03\x02\x02\x02\u02F7" +
		"\u0301\x03\x02\x02\x02\u02F8\u02F9\f\r\x02\x02\u02F9\u0300\x05\x86D\x02" +
		"\u02FA\u02FB\f\f\x02\x02\u02FB\u02FC\x078\x02\x02\u02FC\u0300\x05r:\x02" +
		"\u02FD\u02FE\f\x05\x02\x02\u02FE\u0300\x07;\x02\x02\u02FF\u02F8\x03\x02" +
		"\x02\x02\u02FF\u02FA\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300" +
		"\u0303\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02" +
		"\x02\x02\u0302o\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0304\u0306" +
		"\x05\x04\x03\x02\u0305\u0304\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02" +
		"\u0306\u0307\x03\x02\x02\x02\u0307\u0308\x07]\x02\x02\u0308q\x03\x02\x02" +
		"\x02\u0309\u030E\x07Z\x02\x02\u030A\u030E\x07[\x02\x02\u030B\u030E\x07" +
		"\\\x02\x02\u030C\u030E\x05\x90I\x02\u030D\u0309\x03\x02\x02\x02\u030D" +
		"\u030A\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D\u030C\x03\x02" +
		"\x02\x02\u030Es\x03\x02\x02\x02\u030F\u0311\x05\x04\x03\x02\u0310\u030F" +
		"\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02" +
		"\u0312\u0314\x05r:\x02\u0313\u0315\x07;\x02\x02\u0314\u0313\x03\x02\x02" +
		"\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0317" +
		"\x07>\x02\x02\u0317\u0319\x05n8\x02\u0318\u0316\x03\x02\x02\x02\u0318" +
		"\u0319\x03\x02\x02\x02\u0319u\x03\x02\x02\x02\u031A\u031D\x05r:\x02\u031B" +
		"\u031C\x07>\x02\x02\u031C\u031E\x05P)\x02\u031D\u031B\x03\x02\x02\x02" +
		"\u031D\u031E\x03\x02\x02\x02\u031Ew\x03\x02\x02\x02\u031F\u0320\x05r:" +
		"\x02\u0320\u0321\x07G\x02\x02\u0321\u0322\x05P)\x02\u0322y\x03\x02\x02" +
		"\x02\u0323\u0326\x05P)\x02\u0324\u0326\x05x=\x02\u0325\u0323\x03\x02\x02" +
		"\x02\u0325\u0324\x03\x02\x02\x02\u0326{\x03\x02\x02\x02\u0327\u032C\x05" +
		"r:\x02\u0328\u0329\x079\x02\x02\u0329\u032B\x05r:\x02\u032A\u0328\x03" +
		"\x02\x02\x02\u032B\u032E\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C" +
		"\u032D\x03\x02\x02\x02\u032D}\x03\x02\x02\x02\u032E\u032C\x03\x02\x02" +
		"\x02\u032F\u0338\x072\x02\x02\u0330\u0335\x05t;\x02\u0331\u0332\x079\x02" +
		"\x02\u0332\u0334\x05t;\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0337\x03" +
		"\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336" +
		"\u0339\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0338\u0330\x03\x02" +
		"\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A" +
		"\u033B\x073\x02\x02\u033B\x7F\x03\x02\x02\x02\u033C\u0345\x076\x02\x02" +
		"\u033D\u0342\x05t;\x02\u033E\u033F\x079\x02\x02\u033F\u0341\x05t;\x02" +
		"\u0340\u033E\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340\x03" +
		"\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344" +
		"\u0342\x03\x02\x02\x02\u0345\u033D\x03\x02\x02\x02\u0345\u0346\x03\x02" +
		"\x02\x02\u0346\u0348\x03\x02\x02\x02\u0347\u0349\x079\x02\x02\u0348\u0347" +
		"\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02" +
		"\u034A\u034B\x077\x02\x02\u034B\x81\x03\x02\x02\x02\u034C\u0355\x07D\x02" +
		"\x02\u034D\u0352\x05t;\x02\u034E\u034F\x079\x02\x02\u034F\u0351\x05t;" +
		"\x02\u0350\u034E\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350" +
		"\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02" +
		"\u0354\u0352\x03\x02\x02\x02\u0355\u034D\x03\x02\x02\x02\u0355\u0356\x03" +
		"\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358\x07D\x02\x02\u0358" +
		"\x83\x03\x02\x02\x02\u0359\u0362\x074\x02\x02\u035A\u035F\x05p9\x02\u035B" +
		"\u035C\x079\x02\x02\u035C\u035E\x05p9\x02\u035D\u035B\x03\x02\x02\x02" +
		"\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F\u0360\x03" +
		"\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362" +
		"\u035A\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364\x03\x02" +
		"\x02\x02\u0364\u0365\x075\x02\x02\u0365\x85\x03\x02\x02\x02\u0366\u036F" +
		"\x074\x02\x02\u0367\u036C\x05n8\x02\u0368\u0369\x079\x02\x02\u0369\u036B" +
		"\x05n8\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C" +
		"\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u0370\x03\x02" +
		"\x02\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0367\x03\x02\x02\x02\u036F" +
		"\u0370\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372\x075\x02" +
		"\x02\u0372\x87\x03\x02\x02\x02\u0373\u037C\x076\x02\x02\u0374\u0379\x05" +
		"v<\x02\u0375\u0376\x079\x02\x02\u0376\u0378\x05v<\x02\u0377\u0375\x03" +
		"\x02\x02\x02\u0378\u037B\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02" +
		"\x02\x02\u037C\u0374\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D" +
		"\u037F\x03\x02\x02\x02\u037E\u0380\x079\x02\x02\u037F\u037E\x03\x02\x02" +
		"\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0382" +
		"\x077\x02\x02\u0382\x89\x03\x02\x02\x02\u0383\u0388\x05n8\x02\u0384\u0385" +
		"\x079\x02\x02\u0385\u0387\x05n8\x02\u0386\u0384\x03\x02\x02\x02\u0387" +
		"\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02" +
		"\x02\x02\u0389\x8B\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038B\u038F" +
		"\x076\x02\x02\u038C\u038E\x05\x06\x04\x02\u038D\u038C\x03\x02\x02\x02" +
		"\u038E\u0391\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u038F\u0390\x03" +
		"\x02\x02\x02\u0390\u0392\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0392" +
		"\u0393\x077\x02\x02\u0393\x8D\x03\x02\x02\x02\u0394\u0397\x05\x8CG\x02" +
		"\u0395\u0397\x05P)\x02\u0396\u0394\x03\x02\x02\x02\u0396\u0395\x03\x02" +
		"\x02\x02\u0397\x8F\x03\x02\x02\x02\u0398\u0399\t\b\x02\x02\u0399\x91\x03" +
		"\x02\x02\x02\x86\x95\xAC\xB1\xB7\xBA\xC2\xC7\xCB\xD0\xD3\xD6\xDC\xE2\xE8" +
		"\xF0\xF9\xFD\u0101\u0105\u0109\u0114\u0119\u011E\u012E\u0131\u0137\u013B" +
		"\u013F\u0142\u0148\u014C\u014F\u0154\u0158\u015B\u0160\u0164\u0166\u0169" +
		"\u016E\u0174\u0177\u017B\u017F\u0182\u0187\u018B\u018F\u0196\u019A\u01A0" +
		"\u01A6\u01AE\u01B1\u01B4\u01B9\u01BE\u01C1\u01C6\u01C9\u01CE\u01D2\u01D5" +
		"\u01D9\u01DE\u01E2\u01E5\u01EA\u01EF\u01F3\u01F6\u01FB\u0200\u0204\u0207" +
		"\u020D\u0210\u0216\u021D\u0222\u0226\u0229\u022F\u0232\u023B\u023F\u0251" +
		"\u0270\u0273\u027B\u027E\u028E\u0291\u0293\u029B\u029E\u02A5\u02AA\u02AD" +
		"\u02B4\u02B9\u02C6\u02C9\u02D8\u02F6\u02FF\u0301\u0305\u030D\u0310\u0314" +
		"\u0318\u031D\u0325\u032C\u0335\u0338\u0342\u0345\u0348\u0352\u0355\u035F" +
		"\u0362\u036C\u036F\u0379\u037C\u037F\u0388\u038F\u0396";
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
	public _body!: BlockOrExprContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public blockOrExpr(): BlockOrExprContext {
		return this.getRuleContext(0, BlockOrExprContext);
	}
	public binding_(): Binding_Context | undefined {
		return this.tryGetRuleContext(0, Binding_Context);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
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
	public queryDefn(): QueryDefnContext | undefined {
		return this.tryGetRuleContext(0, QueryDefnContext);
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



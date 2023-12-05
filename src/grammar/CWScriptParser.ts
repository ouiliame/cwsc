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
	public static readonly HashIdent = 87;
	public static readonly Ident = 88;
	public static readonly TypeVar = 89;
	public static readonly StringLiteral = 90;
	public static readonly IntLiteral = 91;
	public static readonly DecLiteral = 92;
	public static readonly BoolLiteral = 93;
	public static readonly CWSPEC_LINE_COMMENT = 94;
	public static readonly CWSPEC_BLOCK_COMMENT = 95;
	public static readonly LINE_COMMENT = 96;
	public static readonly BLOCK_COMMENT = 97;
	public static readonly WS = 98;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_importStmt = 2;
	public static readonly RULE_letStmt = 3;
	public static readonly RULE_binding_ = 4;
	public static readonly RULE_constStmt = 5;
	public static readonly RULE_assignStmt = 6;
	public static readonly RULE_memberAssignStmt = 7;
	public static readonly RULE_indexAssignStmt = 8;
	public static readonly RULE_returnStmt = 9;
	public static readonly RULE_failStmt = 10;
	public static readonly RULE_forStmt = 11;
	public static readonly RULE_execStmt = 12;
	public static readonly RULE_instantiateStmt = 13;
	public static readonly RULE_emitStmt = 14;
	public static readonly RULE_defn = 15;
	public static readonly RULE_contractDefn = 16;
	public static readonly RULE_interfaceDefn = 17;
	public static readonly RULE_structDefn = 18;
	public static readonly RULE_tupleDefn = 19;
	public static readonly RULE_unitDefn = 20;
	public static readonly RULE_enumDefn = 21;
	public static readonly RULE_enumVariantDefnList = 22;
	public static readonly RULE_enumVariantDefn = 23;
	public static readonly RULE_enumVariantStructDefn = 24;
	public static readonly RULE_enumVariantTupleDefn = 25;
	public static readonly RULE_enumVariantUnitDefn = 26;
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
	public static readonly RULE_expr = 38;
	public static readonly RULE_ifExpr_ = 39;
	public static readonly RULE_tryCatchElseExpr_ = 40;
	public static readonly RULE_catchClause = 41;
	public static readonly RULE_closureExpr_ = 42;
	public static readonly RULE_structExpr_ = 43;
	public static readonly RULE_tupleExpr_ = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_stringLit = 46;
	public static readonly RULE_intLit = 47;
	public static readonly RULE_decLit = 48;
	public static readonly RULE_boolLit = 49;
	public static readonly RULE_noneLit = 50;
	public static readonly RULE_typeExpr = 51;
	public static readonly RULE_typeVar = 52;
	public static readonly RULE_ident = 53;
	public static readonly RULE_param = 54;
	public static readonly RULE_field = 55;
	public static readonly RULE_namedArg = 56;
	public static readonly RULE_arg = 57;
	public static readonly RULE_identList = 58;
	public static readonly RULE_parenParamList = 59;
	public static readonly RULE_braceParamList = 60;
	public static readonly RULE_barParamList = 61;
	public static readonly RULE_brackTypeParamList = 62;
	public static readonly RULE_brackTypeExprList = 63;
	public static readonly RULE_braceFieldList = 64;
	public static readonly RULE_typeExprList = 65;
	public static readonly RULE_block = 66;
	public static readonly RULE_reservedKeyword = 67;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "stmt", "importStmt", "letStmt", "binding_", "constStmt", 
		"assignStmt", "memberAssignStmt", "indexAssignStmt", "returnStmt", "failStmt", 
		"forStmt", "execStmt", "instantiateStmt", "emitStmt", "defn", "contractDefn", 
		"interfaceDefn", "structDefn", "tupleDefn", "unitDefn", "enumDefn", "enumVariantDefnList", 
		"enumVariantDefn", "enumVariantStructDefn", "enumVariantTupleDefn", "enumVariantUnitDefn", 
		"typeAliasDefn", "fnDefn", "instantiateDefn", "execDefn", "queryDefn", 
		"errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", "stateItemDefn", 
		"stateMapDefn", "expr", "ifExpr_", "tryCatchElseExpr_", "catchClause", 
		"closureExpr_", "structExpr_", "tupleExpr_", "literal", "stringLit", "intLit", 
		"decLit", "boolLit", "noneLit", "typeExpr", "typeVar", "ident", "param", 
		"field", "namedArg", "arg", "identList", "parenParamList", "braceParamList", 
		"barParamList", "brackTypeParamList", "brackTypeExprList", "braceFieldList", 
		"typeExprList", "block", "reservedKeyword",
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
		"MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "HashIdent", "Ident", "TypeVar", 
		"StringLiteral", "IntLiteral", "DecLiteral", "BoolLiteral", "CWSPEC_LINE_COMMENT", 
		"CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", "WS",
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
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 136;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.letStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 146;
				this.constStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 147;
				this.assignStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 148;
				this.memberAssignStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 149;
				this.indexAssignStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 150;
				this.ifExpr_();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 151;
				this.tryCatchElseExpr_();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 152;
				this.forStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 153;
				this.execStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 154;
				this.instantiateStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 155;
				this.emitStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 156;
				this.failStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 157;
				this.returnStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 158;
				this.defn();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 159;
				this.expr(0);
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 160;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 163;
				this.typeExpr(0);
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
		this.enterRule(_localctx, 4, CWScriptParser.RULE_importStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(CWScriptParser.IMPORT);
			this.state = 167;
			this.match(CWScriptParser.LBRACE);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				this.state = 168;
				_localctx._items = this.identList();
				}
			}

			this.state = 171;
			this.match(CWScriptParser.RBRACE);
			this.state = 172;
			this.match(CWScriptParser.FROM);
			{
			this.state = 173;
			_localctx._src = this.stringLit();
			}
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 174;
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
		this.enterRule(_localctx, 6, CWScriptParser.RULE_letStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(CWScriptParser.LET);
			{
			this.state = 178;
			_localctx._binding = this.binding_();
			}
			{
			this.state = 179;
			this.match(CWScriptParser.EQ);
			this.state = 180;
			_localctx._value = this.expr(0);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 182;
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
		this.enterRule(_localctx, 8, CWScriptParser.RULE_binding_);
		let _la: number;
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
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
			case CWScriptParser.Ident:
				_localctx = new IdentBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 185;
				(_localctx as IdentBindingContext)._name = this.ident();
				}
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 186;
					this.match(CWScriptParser.COLON);
					this.state = 187;
					(_localctx as IdentBindingContext)._ty = this.typeExpr(0);
					}
				}

				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 190;
				this.match(CWScriptParser.LBRACK);
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
					{
					this.state = 191;
					(_localctx as TupleBindingContext)._names = this.identList();
					}
				}

				this.state = 194;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this.match(CWScriptParser.LBRACE);
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
					{
					this.state = 196;
					(_localctx as StructBindingContext)._names = this.identList();
					}
				}

				this.state = 199;
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
		this.enterRule(_localctx, 10, CWScriptParser.RULE_constStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(CWScriptParser.CONST);
			{
			this.state = 203;
			_localctx._name = this.ident();
			}
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 204;
				this.match(CWScriptParser.COLON);
				this.state = 205;
				_localctx._ty = this.typeExpr(0);
				}
			}

			{
			this.state = 208;
			this.match(CWScriptParser.EQ);
			this.state = 209;
			_localctx._value = this.expr(0);
			}
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 211;
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
		this.enterRule(_localctx, 12, CWScriptParser.RULE_assignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 214;
			_localctx._name = this.ident();
			}
			this.state = 215;
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
			this.state = 216;
			_localctx._value = this.expr(0);
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 217;
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
		this.enterRule(_localctx, 14, CWScriptParser.RULE_memberAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 220;
			_localctx._obj = this.expr(0);
			}
			this.state = 221;
			this.match(CWScriptParser.DOT);
			{
			this.state = 222;
			_localctx._memberName = this.ident();
			}
			this.state = 223;
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
			this.state = 224;
			_localctx._value = this.expr(0);
			}
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 225;
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
		this.enterRule(_localctx, 16, CWScriptParser.RULE_indexAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 228;
			_localctx._obj = this.expr(0);
			}
			this.state = 229;
			this.match(CWScriptParser.LBRACK);
			this.state = 230;
			_localctx._index = this.expr(0);
			this.state = 231;
			this.match(CWScriptParser.RBRACK);
			this.state = 232;
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
			this.state = 233;
			_localctx._value = this.expr(0);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 234;
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
		this.enterRule(_localctx, 18, CWScriptParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(CWScriptParser.RETURN);
			{
			this.state = 238;
			_localctx._value = this.expr(0);
			}
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 239;
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
		this.enterRule(_localctx, 20, CWScriptParser.RULE_failStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(CWScriptParser.FAIL);
			{
			this.state = 243;
			_localctx._value = this.expr(0);
			}
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 244;
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
		this.enterRule(_localctx, 22, CWScriptParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(CWScriptParser.FOR);
			{
			this.state = 248;
			_localctx._binding = this.binding_();
			}
			this.state = 249;
			this.match(CWScriptParser.IN);
			{
			this.state = 250;
			_localctx._iter = this.expr(0);
			}
			this.state = 251;
			_localctx._body = this.block();
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
		this.enterRule(_localctx, 24, CWScriptParser.RULE_execStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(CWScriptParser.EXEC_NOW);
			this.state = 254;
			_localctx._value = this.expr(0);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 255;
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
		this.enterRule(_localctx, 26, CWScriptParser.RULE_instantiateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(CWScriptParser.INSTANTIATE_NOW);
			this.state = 259;
			_localctx._value = this.expr(0);
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
	public emitStmt(): EmitStmtContext {
		let _localctx: EmitStmtContext = new EmitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_emitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(CWScriptParser.EMIT);
			this.state = 264;
			_localctx._value = this.expr(0);
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 265;
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
		this.enterRule(_localctx, 30, CWScriptParser.RULE_defn);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.contractDefn();
				}
				break;
			case CWScriptParser.INTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.interfaceDefn();
				}
				break;
			case CWScriptParser.STRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 270;
				this.structDefn();
				}
				break;
			case CWScriptParser.TUPLE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 271;
				this.tupleDefn();
				}
				break;
			case CWScriptParser.UNIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 272;
				this.unitDefn();
				}
				break;
			case CWScriptParser.ENUM:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 273;
				this.enumDefn();
				}
				break;
			case CWScriptParser.TYPE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 274;
				this.typeAliasDefn();
				}
				break;
			case CWScriptParser.FN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 275;
				this.fnDefn();
				}
				break;
			case CWScriptParser.H_INSTANTIATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 276;
				this.instantiateDefn();
				}
				break;
			case CWScriptParser.EXEC:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 277;
				this.execDefn();
				}
				break;
			case CWScriptParser.QUERY:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 278;
				this.queryDefn();
				}
				break;
			case CWScriptParser.ERROR:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 279;
				this.errorDefn();
				}
				break;
			case CWScriptParser.EVENT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 280;
				this.eventDefn();
				}
				break;
			case CWScriptParser.STATE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 281;
				this.stateBlockDefn();
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
	public contractDefn(): ContractDefnContext {
		let _localctx: ContractDefnContext = new ContractDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_contractDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 285;
			_localctx._name = this.ident();
			}
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 286;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 287;
				_localctx._base = this.typeExpr(0);
				}
				}
			}

			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 290;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 291;
				_localctx._interfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 294;
			_localctx._body = this.block();
			}
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 295;
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
		this.enterRule(_localctx, 34, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 299;
			_localctx._name = this.ident();
			}
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 300;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 301;
				_localctx._baseInterfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 304;
			_localctx._body = this.block();
			}
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 305;
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
		this.enterRule(_localctx, 36, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 308;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 309;
				(_localctx as StructDefnBraceContext)._name = this.ident();
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 310;
					(_localctx as StructDefnBraceContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 313;
				(_localctx as StructDefnBraceContext)._fields = this.braceParamList();
				}
				this.state = 315;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 314;
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
				this.state = 317;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 318;
				(_localctx as StructDefnParenContext)._name = this.ident();
				}
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 319;
					(_localctx as StructDefnParenContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 322;
				(_localctx as StructDefnParenContext)._fields = this.parenParamList();
				}
				this.state = 324;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 323;
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
		this.enterRule(_localctx, 38, CWScriptParser.RULE_tupleDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(CWScriptParser.TUPLE);
			{
			this.state = 329;
			_localctx._name = this.ident();
			}
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 330;
				_localctx._typeParams = this.brackTypeParamList();
				}
				break;
			}
			{
			this.state = 333;
			_localctx._elements = this.brackTypeExprList();
			}
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 334;
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
		this.enterRule(_localctx, 40, CWScriptParser.RULE_unitDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(CWScriptParser.UNIT);
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 338;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 341;
			_localctx._name = this.ident();
			}
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 342;
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
		this.enterRule(_localctx, 42, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 346;
			_localctx._name = this.ident();
			}
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 347;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 350;
			this.match(CWScriptParser.LBRACE);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				this.state = 351;
				_localctx._variants = this.enumVariantDefnList();
				}
			}

			this.state = 354;
			this.match(CWScriptParser.RBRACE);
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 355;
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
		this.enterRule(_localctx, 44, CWScriptParser.RULE_enumVariantDefnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 358;
			this.enumVariantDefn();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 359;
				this.match(CWScriptParser.COMMA);
				this.state = 360;
				this.enumVariantDefn();
				}
				}
				this.state = 365;
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
		this.enterRule(_localctx, 46, CWScriptParser.RULE_enumVariantDefn);
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 366;
				this.enumVariantStructDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 367;
				this.enumVariantTupleDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 368;
				this.enumVariantUnitDefn();
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
	public enumVariantStructDefn(): EnumVariantStructDefnContext {
		let _localctx: EnumVariantStructDefnContext = new EnumVariantStructDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_enumVariantStructDefn);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 371;
				(_localctx as EnumVariantStructDefnBraceContext)._name = this.ident();
				}
				{
				this.state = 372;
				(_localctx as EnumVariantStructDefnBraceContext)._fields = this.braceParamList();
				}
				}
				break;

			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 374;
				(_localctx as EnumVariantStructDefnParenContext)._name = this.ident();
				}
				{
				this.state = 375;
				(_localctx as EnumVariantStructDefnParenContext)._fields = this.parenParamList();
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
	public enumVariantTupleDefn(): EnumVariantTupleDefnContext {
		let _localctx: EnumVariantTupleDefnContext = new EnumVariantTupleDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CWScriptParser.RULE_enumVariantTupleDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 379;
			_localctx._name = this.ident();
			}
			{
			this.state = 380;
			_localctx._elements = this.brackTypeExprList();
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
	public enumVariantUnitDefn(): EnumVariantUnitDefnContext {
		let _localctx: EnumVariantUnitDefnContext = new EnumVariantUnitDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_enumVariantUnitDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 382;
			_localctx._name = this.ident();
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
	public typeAliasDefn(): TypeAliasDefnContext {
		let _localctx: TypeAliasDefnContext = new TypeAliasDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CWScriptParser.RULE_typeAliasDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 385;
			_localctx._name = this.ident();
			}
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 386;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 389;
			this.match(CWScriptParser.EQ);
			{
			this.state = 390;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 391;
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
			this.state = 394;
			this.match(CWScriptParser.FN);
			{
			this.state = 395;
			_localctx._name = this.ident();
			}
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 396;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 399;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 402;
			_localctx._params = this.parenParamList();
			}
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 403;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 404;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 407;
			_localctx._body = this.block();
			}
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 408;
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
			this.state = 411;
			this.match(CWScriptParser.H_INSTANTIATE);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 412;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 415;
			_localctx._params = this.parenParamList();
			}
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 416;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 417;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 420;
			_localctx._body = this.block();
			}
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 421;
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
			this.state = 424;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 425;
			_localctx._name = this.ident();
			}
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 426;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 429;
			_localctx._params = this.parenParamList();
			}
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 430;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 431;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 434;
			_localctx._body = this.block();
			}
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 435;
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
			this.state = 438;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 439;
			_localctx._name = this.ident();
			}
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 440;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 443;
			_localctx._params = this.parenParamList();
			}
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 444;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 445;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 448;
			_localctx._body = this.block();
			}
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 449;
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
			this.state = 452;
			this.match(CWScriptParser.ERROR);
			{
			this.state = 453;
			_localctx._name = this.ident();
			}
			{
			this.state = 454;
			_localctx._params = this.parenParamList();
			}
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 455;
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
			this.state = 458;
			this.match(CWScriptParser.EVENT);
			{
			this.state = 459;
			_localctx._name = this.ident();
			}
			{
			this.state = 460;
			_localctx._params = this.parenParamList();
			}
			this.state = 461;
			this.match(CWScriptParser.RPAREN);
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 462;
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
			this.state = 465;
			this.match(CWScriptParser.STATE);
			this.state = 466;
			this.match(CWScriptParser.LBRACE);
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 467;
				_localctx._stateDefn = this.stateDefn();
				_localctx._stateFields.push(_localctx._stateDefn);
				}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 473;
			this.match(CWScriptParser.RBRACE);
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 474;
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
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 477;
				this.stateItemDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 478;
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
			{
			this.state = 481;
			_localctx._name = this.ident();
			}
			this.state = 482;
			this.match(CWScriptParser.COLON);
			{
			this.state = 483;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 484;
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
			{
			this.state = 487;
			_localctx._name = this.ident();
			}
			this.state = 488;
			this.match(CWScriptParser.LBRACK);
			{
			this.state = 489;
			_localctx._indexTy = this.typeExpr(0);
			}
			this.state = 490;
			this.match(CWScriptParser.RBRACK);
			this.state = 491;
			this.match(CWScriptParser.COLON);
			{
			this.state = 492;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 493;
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
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 497;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 498;
				this.expr(15);
				}
				break;

			case 2:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 499;
				this.ifExpr_();
				}
				break;

			case 3:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 500;
				this.tryCatchElseExpr_();
				}
				break;

			case 4:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 501;
				this.closureExpr_();
				}
				break;

			case 5:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 502;
				this.structExpr_();
				}
				break;

			case 6:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 503;
				this.tupleExpr_();
				}
				break;

			case 7:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 504;
				this.literal();
				}
				break;

			case 8:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 505;
				this.ident();
				}
				break;

			case 9:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 506;
				this.match(CWScriptParser.LPAREN);
				this.state = 507;
				this.expr(0);
				this.state = 508;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 576;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 574;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 512;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						{
						this.state = 513;
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
						this.state = 514;
						this.expr(19);
						}
						break;

					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 515;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						{
						this.state = 516;
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
						this.state = 517;
						this.expr(18);
						}
						break;

					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 518;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						{
						this.state = 519;
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
						this.state = 520;
						this.expr(17);
						}
						break;

					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 521;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 522;
						this.match(CWScriptParser.D_QUEST);
						this.state = 523;
						this.expr(15);
						}
						break;

					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 524;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 525;
						this.match(CWScriptParser.IN);
						this.state = 526;
						this.expr(14);
						}
						break;

					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 527;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 528;
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
						this.state = 529;
						this.expr(12);
						}
						break;

					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 530;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 531;
						this.match(CWScriptParser.AND);
						this.state = 532;
						this.expr(11);
						}
						break;

					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 533;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 534;
						this.match(CWScriptParser.OR);
						this.state = 535;
						this.expr(10);
						}
						break;

					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 536;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 537;
						this.match(CWScriptParser.DOT);
						{
						this.state = 538;
						(_localctx as DotExprContext)._memberName = this.ident();
						}
						}
						break;

					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 539;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 541;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 540;
							(_localctx as CallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 544;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.LBRACK) {
							{
							this.state = 543;
							(_localctx as CallExprContext)._typeArgs = this.brackTypeExprList();
							}
						}

						this.state = 546;
						this.match(CWScriptParser.LPAREN);
						this.state = 555;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
							{
							{
							this.state = 547;
							(_localctx as CallExprContext)._arg = this.arg();
							(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
							}
							this.state = 552;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 548;
								this.match(CWScriptParser.COMMA);
								this.state = 549;
								(_localctx as CallExprContext)._arg = this.arg();
								(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
								}
								}
								this.state = 554;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 557;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 558;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 559;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 560;
						(_localctx as IndexExprContext)._index = this.expr(0);
						}
						this.state = 561;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 12:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 563;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 564;
						this.match(CWScriptParser.AS);
						{
						this.state = 565;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 566;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 567;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 14:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 568;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 569;
						this.match(CWScriptParser.IS);
						this.state = 571;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 570;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 573;
						(_localctx as IsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;
					}
					}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
		this.enterRule(_localctx, 78, CWScriptParser.RULE_ifExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(CWScriptParser.IF);
			{
			this.state = 580;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 581;
			_localctx._thenBody = this.block();
			}
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 582;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 583;
				_localctx._elseBody = this.block();
				}
				}
				break;
			}
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 586;
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
		this.enterRule(_localctx, 80, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.match(CWScriptParser.TRY);
			{
			this.state = 590;
			_localctx._body = this.block();
			}
			this.state = 594;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 591;
					_localctx._catchClause = this.catchClause();
					_localctx._catchClauses.push(_localctx._catchClause);
					}
					}
				}
				this.state = 596;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 597;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 598;
				_localctx._elseBody = this.block();
				}
				}
				break;
			}
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 601;
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
		this.enterRule(_localctx, 82, CWScriptParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(CWScriptParser.CATCH);
			{
			this.state = 605;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 606;
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
		this.enterRule(_localctx, 84, CWScriptParser.RULE_closureExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 608;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 611;
			_localctx._params = this.barParamList();
			}
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 612;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 613;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 616;
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
	public structExpr_(): StructExpr_Context {
		let _localctx: StructExpr_Context = new StructExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, CWScriptParser.RULE_structExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 618;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 619;
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
		this.enterRule(_localctx, 88, CWScriptParser.RULE_tupleExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(CWScriptParser.LBRACK);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 622;
				_localctx._expr = this.expr(0);
				_localctx._elements.push(_localctx._expr);
				}
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 623;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 624;
					_localctx._expr = this.expr(0);
					_localctx._elements.push(_localctx._expr);
					}
					}
					}
					this.state = 629;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 632;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_literal);
		try {
			this.state = 639;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.stringLit();
				}
				break;
			case CWScriptParser.IntLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.intLit();
				}
				break;
			case CWScriptParser.DecLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				this.decLit();
				}
				break;
			case CWScriptParser.BoolLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 637;
				this.boolLit();
				}
				break;
			case CWScriptParser.NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 638;
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
		this.enterRule(_localctx, 92, CWScriptParser.RULE_stringLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
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
		this.enterRule(_localctx, 94, CWScriptParser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
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
		this.enterRule(_localctx, 96, CWScriptParser.RULE_decLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
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
		this.enterRule(_localctx, 98, CWScriptParser.RULE_boolLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
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
		this.enterRule(_localctx, 100, CWScriptParser.RULE_noneLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
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
		let _startState: number = 102;
		this.enterRecursionRule(_localctx, 102, CWScriptParser.RULE_typeExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 652;
				this.match(CWScriptParser.LPAREN);
				this.state = 653;
				this.typeExpr(0);
				this.state = 654;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 656;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 657;
				(_localctx as ArrayTypeExprContext)._ty = this.typeExpr(0);
				}
				this.state = 658;
				this.match(CWScriptParser.SEMI);
				{
				this.state = 659;
				(_localctx as ArrayTypeExprContext)._size = this.intLit();
				}
				this.state = 660;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 3:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 662;
				this.structDefn();
				}
				break;

			case 4:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 663;
				this.tupleDefn();
				}
				break;

			case 5:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 664;
				this.unitDefn();
				}
				break;

			case 6:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 665;
				this.enumDefn();
				}
				break;

			case 7:
				{
				_localctx = new TypeVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 666;
				this.typeVar();
				}
				break;

			case 8:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 667;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 679;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 677;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 670;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						{
						this.state = 671;
						(_localctx as ParameterizedTypeExprContext)._typeArgs = this.brackTypeExprList();
						}
						}
						break;

					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 672;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 673;
						this.match(CWScriptParser.DOT);
						{
						this.state = 674;
						(_localctx as MemberTypeExprContext)._memberName = this.ident();
						}
						}
						break;

					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 675;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 676;
						this.match(CWScriptParser.QUEST);
						}
						break;
					}
					}
				}
				this.state = 681;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
		this.enterRule(_localctx, 104, CWScriptParser.RULE_typeVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
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
		this.enterRule(_localctx, 106, CWScriptParser.RULE_ident);
		try {
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.HashIdent:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.match(CWScriptParser.HashIdent);
				}
				break;
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
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
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 686;
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
		this.enterRule(_localctx, 108, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 689;
			_localctx._name = this.ident();
			}
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 690;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 693;
			this.match(CWScriptParser.COLON);
			{
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CWScriptParser.HashIdent - 87)) | (1 << (CWScriptParser.Ident - 87)) | (1 << (CWScriptParser.TypeVar - 87)))) !== 0)) {
				{
				this.state = 694;
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
		this.enterRule(_localctx, 110, CWScriptParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 697;
			_localctx._name = this.ident();
			}
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 698;
				this.match(CWScriptParser.COLON);
				{
				this.state = 699;
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
		this.enterRule(_localctx, 112, CWScriptParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 702;
			_localctx._name = this.ident();
			}
			this.state = 703;
			this.match(CWScriptParser.EQ);
			{
			this.state = 704;
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
		this.enterRule(_localctx, 114, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 706;
				this.expr(0);
				}
				break;

			case 2:
				{
				this.state = 707;
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
		this.enterRule(_localctx, 116, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 710;
			this.ident();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 711;
				this.match(CWScriptParser.COMMA);
				this.state = 712;
				this.ident();
				}
				}
				this.state = 717;
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
		this.enterRule(_localctx, 118, CWScriptParser.RULE_parenParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(CWScriptParser.LPAREN);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				this.state = 719;
				this.param();
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 720;
					this.match(CWScriptParser.COMMA);
					this.state = 721;
					this.param();
					}
					}
					this.state = 726;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 729;
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
		this.enterRule(_localctx, 120, CWScriptParser.RULE_braceParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(CWScriptParser.LBRACE);
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				this.state = 732;
				this.param();
				this.state = 737;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 733;
						this.match(CWScriptParser.COMMA);
						this.state = 734;
						this.param();
						}
						}
					}
					this.state = 739;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
				}
				}
			}

			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 742;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 745;
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
		this.enterRule(_localctx, 122, CWScriptParser.RULE_barParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(CWScriptParser.BAR);
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				this.state = 748;
				this.param();
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 749;
					this.match(CWScriptParser.COMMA);
					this.state = 750;
					this.param();
					}
					}
					this.state = 755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 758;
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
		this.enterRule(_localctx, 124, CWScriptParser.RULE_brackTypeParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(CWScriptParser.LBRACK);
			this.state = 769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.TypeVar) {
				{
				this.state = 761;
				this.typeVar();
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 762;
					this.match(CWScriptParser.COMMA);
					this.state = 763;
					this.typeVar();
					}
					}
					this.state = 768;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 771;
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
		this.enterRule(_localctx, 126, CWScriptParser.RULE_brackTypeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.match(CWScriptParser.LBRACK);
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CWScriptParser.HashIdent - 87)) | (1 << (CWScriptParser.Ident - 87)) | (1 << (CWScriptParser.TypeVar - 87)))) !== 0)) {
				{
				this.state = 774;
				this.typeExpr(0);
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 775;
					this.match(CWScriptParser.COMMA);
					this.state = 776;
					this.typeExpr(0);
					}
					}
					this.state = 781;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 784;
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
		this.enterRule(_localctx, 128, CWScriptParser.RULE_braceFieldList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(CWScriptParser.LBRACE);
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.HashIdent || _la === CWScriptParser.Ident) {
				{
				this.state = 787;
				this.field();
				this.state = 792;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 788;
						this.match(CWScriptParser.COMMA);
						this.state = 789;
						this.field();
						}
						}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
				}
				}
			}

			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 797;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 800;
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
		this.enterRule(_localctx, 130, CWScriptParser.RULE_typeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 802;
			this.typeExpr(0);
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 803;
				this.match(CWScriptParser.COMMA);
				this.state = 804;
				this.typeExpr(0);
				}
				}
				this.state = 809;
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
		this.enterRule(_localctx, 132, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(CWScriptParser.LBRACE);
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.HashIdent - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 811;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 817;
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
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
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
		case 38:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 51:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);

		case 1:
			return this.precpred(this._ctx, 17);

		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 23);

		case 9:
			return this.precpred(this._ctx, 22);

		case 10:
			return this.precpred(this._ctx, 21);

		case 11:
			return this.precpred(this._ctx, 20);

		case 12:
			return this.precpred(this._ctx, 19);

		case 13:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 10);

		case 15:
			return this.precpred(this._ctx, 9);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03d\u0338\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x03" +
		"\x02\x07\x02\x8C\n\x02\f\x02\x0E\x02\x8F\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA4\n" +
		"\x03\x03\x03\x05\x03\xA7\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\xAC\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xB2\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\xBA\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\xBF\n\x06\x03\x06\x03\x06\x05\x06\xC3\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xC8\n\x06\x03\x06\x05\x06\xCB\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\xD1\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xD7" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\xDD\n\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\xE5\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\xEE\n\n\x03\v\x03\v\x03\v\x05\v\xF3\n\v\x03\f\x03\f\x03\f\x05\f\xF8\n" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u0103\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0108\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u010D\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u011D\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0123\n\x12\x03" +
		"\x12\x03\x12\x05\x12\u0127\n\x12\x03\x12\x03\x12\x05\x12\u012B\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0131\n\x13\x03\x13\x03\x13\x05\x13" +
		"\u0135\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u013A\n\x14\x03\x14\x03\x14" +
		"\x05\x14\u013E\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0143\n\x14\x03\x14" +
		"\x03\x14\x05\x14\u0147\n\x14\x05\x14\u0149\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u014E\n\x15\x03\x15\x03\x15\x05\x15\u0152\n\x15\x03\x16\x03\x16" +
		"\x05\x16\u0156\n\x16\x03\x16\x03\x16\x05\x16\u015A\n\x16\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\u015F\n\x17\x03\x17\x03\x17\x05\x17\u0163\n\x17\x03\x17" +
		"\x03\x17\x05\x17\u0167\n\x17\x03\x18\x03\x18\x03\x18\x07\x18\u016C\n\x18" +
		"\f\x18\x0E\x18\u016F\v\x18\x03\x19\x03\x19\x03\x19\x05\x19\u0174\n\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u017C\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0186" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u018B\n\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0190\n\x1E\x03\x1E\x05\x1E\u0193\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0198\n\x1E\x03\x1E\x03\x1E\x05\x1E\u019C\n\x1E\x03\x1F\x03" +
		"\x1F\x05\x1F\u01A0\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01A5\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u01A9\n\x1F\x03 \x03 \x03 \x05 \u01AE\n \x03 \x03" +
		" \x03 \x05 \u01B3\n \x03 \x03 \x05 \u01B7\n \x03!\x03!\x03!\x05!\u01BC" +
		"\n!\x03!\x03!\x03!\x05!\u01C1\n!\x03!\x03!\x05!\u01C5\n!\x03\"\x03\"\x03" +
		"\"\x03\"\x05\"\u01CB\n\"\x03#\x03#\x03#\x03#\x03#\x05#\u01D2\n#\x03$\x03" +
		"$\x03$\x07$\u01D7\n$\f$\x0E$\u01DA\v$\x03$\x03$\x05$\u01DE\n$\x03%\x03" +
		"%\x05%\u01E2\n%\x03&\x03&\x03&\x03&\x05&\u01E8\n&\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x05\'\u01F1\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0201\n(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0220\n" +
		"(\x03(\x05(\u0223\n(\x03(\x03(\x03(\x03(\x07(\u0229\n(\f(\x0E(\u022C\v" +
		"(\x05(\u022E\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u023E\n(\x03(\x07(\u0241\n(\f(\x0E(\u0244\v(\x03" +
		")\x03)\x03)\x03)\x03)\x05)\u024B\n)\x03)\x05)\u024E\n)\x03*\x03*\x03*" +
		"\x07*\u0253\n*\f*\x0E*\u0256\v*\x03*\x03*\x05*\u025A\n*\x03*\x05*\u025D" +
		"\n*\x03+\x03+\x03+\x03+\x03,\x05,\u0264\n,\x03,\x03,\x03,\x05,\u0269\n" +
		",\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x07.\u0274\n.\f.\x0E.\u0277" +
		"\v.\x05.\u0279\n.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x05/\u0282\n/\x03" +
		"0\x030\x031\x031\x032\x032\x033\x033\x034\x034\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x055\u029F" +
		"\n5\x035\x035\x035\x035\x035\x035\x035\x075\u02A8\n5\f5\x0E5\u02AB\v5" +
		"\x036\x036\x037\x037\x037\x057\u02B2\n7\x038\x038\x058\u02B6\n8\x038\x03" +
		"8\x058\u02BA\n8\x039\x039\x039\x059\u02BF\n9\x03:\x03:\x03:\x03:\x03;" +
		"\x03;\x05;\u02C7\n;\x03<\x03<\x03<\x07<\u02CC\n<\f<\x0E<\u02CF\v<\x03" +
		"=\x03=\x03=\x03=\x07=\u02D5\n=\f=\x0E=\u02D8\v=\x05=\u02DA\n=\x03=\x03" +
		"=\x03>\x03>\x03>\x03>\x07>\u02E2\n>\f>\x0E>\u02E5\v>\x05>\u02E7\n>\x03" +
		">\x05>\u02EA\n>\x03>\x03>\x03?\x03?\x03?\x03?\x07?\u02F2\n?\f?\x0E?\u02F5" +
		"\v?\x05?\u02F7\n?\x03?\x03?\x03@\x03@\x03@\x03@\x07@\u02FF\n@\f@\x0E@" +
		"\u0302\v@\x05@\u0304\n@\x03@\x03@\x03A\x03A\x03A\x03A\x07A\u030C\nA\f" +
		"A\x0EA\u030F\vA\x05A\u0311\nA\x03A\x03A\x03B\x03B\x03B\x03B\x07B\u0319" +
		"\nB\fB\x0EB\u031C\vB\x05B\u031E\nB\x03B\x05B\u0321\nB\x03B\x03B\x03C\x03" +
		"C\x03C\x07C\u0328\nC\fC\x0EC\u032B\vC\x03D\x03D\x07D\u032F\nD\fD\x0ED" +
		"\u0332\vD\x03D\x03D\x03E\x03E\x03E\x02\x02\x04NhF\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x02\b\b\x02GGKKMMOOQQSS\x05\x02NNPPRR\x04\x02" +
		"JJLL\x03\x02TW\x03\x02HI\x07\x02\x04\n\x11\x19\x1D\x1D!&*/\x02\u0398\x02" +
		"\x8D\x03\x02\x02\x02\x04\xA6\x03\x02\x02\x02\x06\xA8\x03\x02\x02\x02\b" +
		"\xB3\x03\x02\x02\x02\n\xCA\x03\x02\x02\x02\f\xCC\x03\x02\x02\x02\x0E\xD8" +
		"\x03\x02\x02\x02\x10\xDE\x03\x02\x02\x02\x12\xE6\x03\x02\x02\x02\x14\xEF" +
		"\x03\x02\x02\x02\x16\xF4\x03\x02\x02\x02\x18\xF9\x03\x02\x02\x02\x1A\xFF" +
		"\x03\x02\x02\x02\x1C\u0104\x03\x02\x02\x02\x1E\u0109\x03\x02\x02\x02 " +
		"\u011C\x03\x02\x02\x02\"\u011E\x03\x02\x02\x02$\u012C\x03\x02\x02\x02" +
		"&\u0148\x03\x02\x02\x02(\u014A\x03\x02\x02\x02*\u0153\x03\x02\x02\x02" +
		",\u015B\x03\x02\x02\x02.\u0168\x03\x02\x02\x020\u0173\x03\x02\x02\x02" +
		"2\u017B\x03\x02\x02\x024\u017D\x03\x02\x02\x026\u0180\x03\x02\x02\x02" +
		"8\u0182\x03\x02\x02\x02:\u018C\x03\x02\x02\x02<\u019D\x03\x02\x02\x02" +
		">\u01AA\x03\x02\x02\x02@\u01B8\x03\x02\x02\x02B\u01C6\x03\x02\x02\x02" +
		"D\u01CC\x03\x02\x02\x02F\u01D3\x03\x02\x02\x02H\u01E1\x03\x02\x02\x02" +
		"J\u01E3\x03\x02\x02\x02L\u01E9\x03\x02\x02\x02N\u0200\x03\x02\x02\x02" +
		"P\u0245\x03\x02\x02\x02R\u024F\x03\x02\x02\x02T\u025E\x03\x02\x02\x02" +
		"V\u0263\x03\x02\x02\x02X\u026C\x03\x02\x02\x02Z\u026F\x03\x02\x02\x02" +
		"\\\u0281\x03\x02\x02\x02^\u0283\x03\x02\x02\x02`\u0285\x03\x02\x02\x02" +
		"b\u0287\x03\x02\x02\x02d\u0289\x03\x02\x02\x02f\u028B\x03\x02\x02\x02" +
		"h\u029E\x03\x02\x02\x02j\u02AC\x03\x02\x02\x02l\u02B1\x03\x02\x02\x02" +
		"n\u02B3\x03\x02\x02\x02p\u02BB\x03\x02\x02\x02r\u02C0\x03\x02\x02\x02" +
		"t\u02C6\x03\x02\x02\x02v\u02C8\x03\x02\x02\x02x\u02D0\x03\x02\x02\x02" +
		"z\u02DD\x03\x02\x02\x02|\u02ED\x03\x02\x02\x02~\u02FA\x03\x02\x02\x02" +
		"\x80\u0307\x03\x02\x02\x02\x82\u0314\x03\x02\x02\x02\x84\u0324\x03\x02" +
		"\x02\x02\x86\u032C\x03\x02\x02\x02\x88\u0335\x03\x02\x02\x02\x8A\x8C\x05" +
		"\x04\x03\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03" +
		"\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03" +
		"\x02\x02\x02\x90\x91\x07\x02\x02\x03\x91\x03\x03\x02\x02\x02\x92\xA7\x05" +
		"\x06\x04\x02\x93\xA7\x05\b\x05\x02\x94\xA7\x05\f\x07\x02\x95\xA7\x05\x0E" +
		"\b\x02\x96\xA7\x05\x10\t\x02\x97\xA7\x05\x12\n\x02\x98\xA7\x05P)\x02\x99" +
		"\xA7\x05R*\x02\x9A\xA7\x05\x18\r\x02\x9B\xA7\x05\x1A\x0E\x02\x9C\xA7\x05" +
		"\x1C\x0F\x02\x9D\xA7\x05\x1E\x10\x02\x9E\xA7\x05\x16\f\x02\x9F\xA7\x05" +
		"\x14\v\x02\xA0\xA7\x05 \x11\x02\xA1\xA3\x05N(\x02\xA2\xA4\x07=\x02\x02" +
		"\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02" +
		"\xA5\xA7\x05h5\x02\xA6\x92\x03\x02\x02\x02\xA6\x93\x03\x02\x02\x02\xA6" +
		"\x94\x03\x02\x02\x02\xA6\x95\x03\x02\x02\x02\xA6\x96\x03\x02\x02\x02\xA6" +
		"\x97\x03\x02\x02\x02\xA6\x98\x03\x02\x02\x02\xA6\x99\x03\x02\x02\x02\xA6" +
		"\x9A\x03\x02\x02\x02\xA6\x9B\x03\x02\x02\x02\xA6\x9C\x03\x02\x02\x02\xA6" +
		"\x9D\x03\x02\x02\x02\xA6\x9E\x03\x02\x02\x02\xA6\x9F\x03\x02\x02\x02\xA6" +
		"\xA0\x03\x02\x02\x02\xA6\xA1\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7" +
		"\x05\x03\x02\x02\x02\xA8\xA9\x07\x06\x02\x02\xA9\xAB\x076\x02\x02\xAA" +
		"\xAC\x05v<\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD" +
		"\x03\x02\x02\x02\xAD\xAE\x077\x02\x02\xAE\xAF\x07\x17\x02\x02\xAF\xB1" +
		"\x05^0\x02\xB0\xB2\x07=\x02\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02" +
		"\x02\x02\xB2\x07\x03\x02\x02\x02\xB3\xB4\x07&\x02\x02\xB4\xB5\x05\n\x06" +
		"\x02\xB5\xB6\x07G\x02\x02\xB6\xB7\x05N(\x02\xB7\xB9\x03\x02\x02\x02\xB8" +
		"\xBA\x07=\x02\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA" +
		"\t\x03\x02\x02\x02\xBB\xBE\x05l7\x02\xBC\xBD\x07>\x02\x02\xBD\xBF\x05" +
		"h5\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xCB\x03\x02" +
		"\x02\x02\xC0\xC2\x074\x02\x02\xC1\xC3\x05v<\x02\xC2\xC1\x03\x02\x02\x02" +
		"\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xCB\x075\x02\x02" +
		"\xC5\xC7\x076\x02\x02\xC6\xC8\x05v<\x02\xC7\xC6\x03\x02\x02\x02\xC7\xC8" +
		"\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x077\x02\x02\xCA\xBB" +
		"\x03\x02\x02\x02\xCA\xC0\x03\x02\x02\x02\xCA\xC5\x03\x02\x02\x02\xCB\v" +
		"\x03\x02\x02\x02\xCC\xCD\x07\'\x02\x02\xCD\xD0\x05l7\x02\xCE\xCF\x07>" +
		"\x02\x02\xCF\xD1\x05h5\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
		"\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x07G\x02\x02\xD3\xD4\x05N(\x02\xD4" +
		"\xD6\x03\x02\x02\x02\xD5\xD7\x07=\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6" +
		"\xD7\x03\x02\x02\x02\xD7\r\x03\x02\x02\x02\xD8\xD9\x05l7\x02\xD9\xDA\t" +
		"\x02\x02\x02\xDA\xDC\x05N(\x02\xDB\xDD\x07=\x02\x02\xDC\xDB\x03\x02\x02" +
		"\x02\xDC\xDD\x03\x02\x02\x02\xDD\x0F\x03\x02\x02\x02\xDE\xDF\x05N(\x02" +
		"\xDF\xE0\x078\x02\x02\xE0\xE1\x05l7\x02\xE1\xE2\t\x02\x02\x02\xE2\xE4" +
		"\x05N(\x02\xE3\xE5\x07=\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02" +
		"\x02\x02\xE5\x11\x03\x02\x02\x02\xE6\xE7\x05N(\x02\xE7\xE8\x074\x02\x02" +
		"\xE8\xE9\x05N(\x02\xE9\xEA\x075\x02\x02\xEA\xEB\t\x02\x02\x02\xEB\xED" +
		"\x05N(\x02\xEC\xEE\x07=\x02\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02" +
		"\x02\x02\xEE\x13\x03\x02\x02\x02\xEF\xF0\x07)\x02\x02\xF0\xF2\x05N(\x02" +
		"\xF1\xF3\x07=\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02" +
		"\xF3\x15\x03\x02\x02\x02\xF4\xF5\x07(\x02\x02\xF5\xF7\x05N(\x02\xF6\xF8" +
		"\x07=\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\x17" +
		"\x03\x02\x02\x02\xF9\xFA\x07\x15\x02\x02\xFA\xFB\x05\n\x06\x02\xFB\xFC" +
		"\x07\x16\x02\x02\xFC\xFD\x05N(\x02\xFD\xFE\x05\x86D\x02\xFE\x19\x03\x02" +
		"\x02\x02\xFF\u0100\x07\r\x02\x02\u0100\u0102\x05N(\x02\u0101\u0103\x07" +
		"=\x02\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
		"\x1B\x03\x02\x02\x02\u0104\u0105\x07\f\x02\x02\u0105\u0107\x05N(\x02\u0106" +
		"\u0108\x07=\x02\x02\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02" +
		"\x02\u0108\x1D\x03\x02\x02\x02\u0109\u010A\x07/\x02\x02\u010A\u010C\x05" +
		"N(\x02\u010B\u010D\x07=\x02\x02\u010C\u010B\x03\x02\x02\x02\u010C\u010D" +
		"\x03\x02\x02\x02\u010D\x1F\x03\x02\x02\x02\u010E\u011D\x05\"\x12\x02\u010F" +
		"\u011D\x05$\x13\x02\u0110\u011D\x05&\x14\x02\u0111\u011D\x05(\x15\x02" +
		"\u0112\u011D\x05*\x16\x02\u0113\u011D\x05,\x17\x02\u0114\u011D\x058\x1D" +
		"\x02\u0115\u011D\x05:\x1E\x02\u0116\u011D\x05<\x1F\x02\u0117\u011D\x05" +
		"> \x02\u0118\u011D\x05@!\x02\u0119\u011D\x05B\"\x02\u011A\u011D\x05D#" +
		"\x02\u011B\u011D\x05F$\x02\u011C\u010E\x03\x02\x02\x02\u011C\u010F\x03" +
		"\x02\x02\x02\u011C\u0110\x03\x02\x02\x02\u011C\u0111\x03\x02\x02\x02\u011C" +
		"\u0112\x03\x02\x02\x02\u011C\u0113\x03\x02\x02\x02\u011C\u0114\x03\x02" +
		"\x02\x02\u011C\u0115\x03\x02\x02\x02\u011C\u0116\x03\x02\x02\x02\u011C" +
		"\u0117\x03\x02\x02\x02\u011C\u0118\x03\x02\x02\x02\u011C\u0119\x03\x02" +
		"\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D" +
		"!\x03\x02\x02\x02\u011E\u011F\x07\x04\x02\x02\u011F\u0122\x05l7\x02\u0120" +
		"\u0121\x07\b\x02\x02\u0121\u0123\x05h5\x02\u0122\u0120\x03\x02\x02\x02" +
		"\u0122\u0123\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0125\x07" +
		"\x07\x02\x02\u0125\u0127\x05\x84C\x02\u0126\u0124\x03\x02\x02\x02\u0126" +
		"\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x05\x86" +
		"D\x02\u0129\u012B\x07=\x02\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B#\x03\x02\x02\x02\u012C\u012D\x07\x05\x02\x02\u012D" +
		"\u0130\x05l7\x02\u012E\u012F\x07\b\x02\x02\u012F\u0131\x05\x84C\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02" +
		"\x02\x02\u0132\u0134\x05\x86D\x02\u0133\u0135\x07=\x02\x02\u0134\u0133" +
		"\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135%\x03\x02\x02\x02\u0136" +
		"\u0137\x07*\x02\x02\u0137\u0139\x05l7\x02\u0138\u013A\x05~@\x02\u0139" +
		"\u0138\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\u013D\x05z>\x02\u013C\u013E\x07=\x02\x02\u013D\u013C\x03" +
		"\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0149\x03\x02\x02\x02\u013F" +
		"\u0140\x07*\x02\x02\u0140\u0142\x05l7\x02\u0141\u0143\x05~@\x02\u0142" +
		"\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02" +
		"\x02\x02\u0144\u0146\x05x=\x02\u0145\u0147\x07=\x02\x02\u0146\u0145\x03" +
		"\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148" +
		"\u0136\x03\x02\x02\x02\u0148\u013F\x03\x02\x02\x02\u0149\'\x03\x02\x02" +
		"\x02\u014A\u014B\x07+\x02\x02\u014B\u014D\x05l7\x02\u014C\u014E\x05~@" +
		"\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F" +
		"\x03\x02\x02\x02\u014F\u0151\x05\x80A\x02\u0150\u0152\x07=\x02\x02\u0151" +
		"\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152)\x03\x02\x02" +
		"\x02\u0153\u0155\x07,\x02\x02\u0154\u0156\x05~@\x02\u0155\u0154\x03\x02" +
		"\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
		"\u0159\x05l7\x02\u0158\u015A\x07=\x02\x02\u0159\u0158\x03\x02\x02\x02" +
		"\u0159\u015A\x03\x02\x02\x02\u015A+\x03\x02\x02\x02\u015B\u015C\x07-\x02" +
		"\x02\u015C\u015E\x05l7\x02\u015D\u015F\x05~@\x02\u015E\u015D\x03\x02\x02" +
		"\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162" +
		"\x076\x02\x02\u0161\u0163\x05.\x18\x02\u0162\u0161\x03\x02\x02\x02\u0162" +
		"\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x077\x02" +
		"\x02\u0165\u0167\x07=\x02\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167" +
		"\x03\x02\x02\x02\u0167-\x03\x02\x02\x02\u0168\u016D\x050\x19\x02\u0169" +
		"\u016A\x079\x02\x02\u016A\u016C\x050\x19\x02\u016B\u0169\x03\x02\x02\x02" +
		"\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03" +
		"\x02\x02\x02\u016E/\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170" +
		"\u0174\x052\x1A\x02\u0171\u0174\x054\x1B\x02\u0172\u0174\x056\x1C\x02" +
		"\u0173\u0170\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03" +
		"\x02\x02\x02\u01741\x03\x02\x02\x02\u0175\u0176\x05l7\x02\u0176\u0177" +
		"\x05z>\x02\u0177\u017C\x03\x02\x02\x02\u0178\u0179\x05l7\x02\u0179\u017A" +
		"\x05x=\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0175\x03\x02\x02\x02\u017B" +
		"\u0178\x03\x02\x02\x02\u017C3\x03\x02\x02\x02\u017D\u017E\x05l7\x02\u017E" +
		"\u017F\x05\x80A\x02\u017F5\x03\x02\x02\x02\u0180\u0181\x05l7\x02\u0181" +
		"7\x03\x02\x02\x02\u0182\u0183\x07.\x02\x02\u0183\u0185\x05l7\x02\u0184" +
		"\u0186\x05~@\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x07G\x02\x02\u0188\u018A\x05" +
		"h5\x02\u0189\u018B\x07=\x02\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B" +
		"\x03\x02\x02\x02\u018B9\x03\x02\x02\x02\u018C\u018D\x07%\x02\x02\u018D" +
		"\u018F\x05l7\x02\u018E\u0190\x07<\x02\x02\u018F\u018E\x03\x02\x02\x02" +
		"\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u0193\x05" +
		"~@\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194" +
		"\x03\x02\x02\x02\u0194\u0197\x05x=\x02\u0195\u0196\x07B\x02\x02\u0196" +
		"\u0198\x05h5\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02" +
		"\u0198\u0199\x03\x02\x02\x02\u0199\u019B\x05\x86D\x02\u019A\u019C\x07" +
		"=\x02\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C" +
		";\x03\x02\x02\x02\u019D\u019F\x07\x10\x02\x02\u019E\u01A0\x07<\x02\x02" +
		"\u019F\u019E\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A1\u01A4\x05x=\x02\u01A2\u01A3\x07B\x02\x02\u01A3\u01A5" +
		"\x05h5\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01A8\x05\x86D\x02\u01A7\u01A9\x07=\x02\x02" +
		"\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9=\x03\x02" +
		"\x02\x02\u01AA\u01AB\x07\x12\x02\x02\u01AB\u01AD\x05l7\x02\u01AC\u01AE" +
		"\x07<\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02" +
		"\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B2\x05x=\x02\u01B0\u01B1\x07B\x02" +
		"\x02\u01B1\u01B3\x05h5\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B6\x05\x86D\x02\u01B5" +
		"\u01B7\x07=\x02\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02" +
		"\x02\u01B7?\x03\x02\x02\x02\u01B8\u01B9\x07\x13\x02\x02\u01B9\u01BB\x05" +
		"l7\x02\u01BA\u01BC\x07<\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC" +
		"\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01C0\x05x=\x02\u01BE" +
		"\u01BF\x07B\x02\x02\u01BF\u01C1\x05h5\x02\u01C0\u01BE\x03\x02\x02\x02" +
		"\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x05" +
		"\x86D\x02\u01C3\u01C5\x07=\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C4\u01C5" +
		"\x03\x02\x02\x02\u01C5A\x03\x02\x02\x02\u01C6\u01C7\x07\t\x02\x02\u01C7" +
		"\u01C8\x05l7\x02\u01C8\u01CA\x05x=\x02\u01C9\u01CB\x07=\x02\x02\u01CA" +
		"\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CBC\x03\x02\x02" +
		"\x02\u01CC\u01CD\x07\n\x02\x02\u01CD\u01CE\x05l7\x02\u01CE\u01CF\x05x" +
		"=\x02\u01CF\u01D1\x073\x02\x02\u01D0\u01D2\x07=\x02\x02\u01D1\u01D0\x03" +
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2E\x03\x02\x02\x02\u01D3" +
		"\u01D4\x07\x18\x02\x02\u01D4\u01D8\x076\x02\x02\u01D5\u01D7\x05H%\x02" +
		"\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03" +
		"\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA" +
		"\u01D8\x03\x02\x02\x02\u01DB\u01DD\x077\x02\x02\u01DC\u01DE\x07=\x02\x02" +
		"\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DEG\x03\x02" +
		"\x02\x02\u01DF\u01E2\x05J&\x02\u01E0\u01E2\x05L\'\x02\u01E1\u01DF\x03" +
		"\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2I\x03\x02\x02\x02\u01E3" +
		"\u01E4\x05l7\x02\u01E4\u01E5\x07>\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01E5\u01E7\x05h5\x02\u01E6\u01E8\x07=\x02\x02\u01E7\u01E6\x03\x02" +
		"\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8K\x03\x02\x02\x02\u01E9\u01EA" +
		"\x05l7\x02\u01EA\u01EB\x074\x02\x02\u01EB\u01EC\x05h5\x02\u01EC\u01ED" +
		"\x075\x02\x02\u01ED\u01EE\x07>\x02\x02\u01EE\u01F0\x05h5\x02\u01EF\u01F1" +
		"\x07=\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02" +
		"\u01F1M\x03\x02\x02\x02\u01F2\u01F3\b(\x01\x02\u01F3\u01F4\x07\x0E\x02" +
		"\x02\u01F4\u0201\x05N(\x11\u01F5\u0201\x05P)\x02\u01F6\u0201\x05R*\x02" +
		"\u01F7\u0201\x05V,\x02\u01F8\u0201\x05X-\x02\u01F9\u0201\x05Z.\x02\u01FA" +
		"\u0201\x05\\/\x02\u01FB\u0201\x05l7\x02\u01FC\u01FD\x072\x02\x02\u01FD" +
		"\u01FE\x05N(\x02\u01FE\u01FF\x073\x02\x02\u01FF\u0201\x03\x02\x02\x02" +
		"\u0200\u01F2\x03\x02\x02\x02\u0200\u01F5\x03\x02\x02\x02\u0200\u01F6\x03" +
		"\x02\x02\x02\u0200\u01F7\x03\x02\x02\x02\u0200\u01F8\x03\x02\x02\x02\u0200" +
		"\u01F9\x03\x02\x02\x02\u0200\u01FA\x03\x02\x02\x02\u0200\u01FB\x03\x02" +
		"\x02\x02\u0200\u01FC\x03\x02\x02\x02\u0201\u0242\x03\x02\x02\x02\u0202" +
		"\u0203\f\x14\x02\x02\u0203\u0204\t\x03\x02\x02\u0204\u0241\x05N(\x15\u0205" +
		"\u0206\f\x13\x02\x02\u0206\u0207\t\x04\x02\x02\u0207\u0241\x05N(\x14\u0208" +
		"\u0209\f\x12\x02\x02\u0209\u020A\t\x05\x02\x02\u020A\u0241\x05N(\x13\u020B" +
		"\u020C\f\x10\x02\x02\u020C\u020D\x07:\x02\x02\u020D\u0241\x05N(\x11\u020E" +
		"\u020F\f\x0F\x02\x02\u020F\u0210\x07\x16\x02\x02\u0210\u0241\x05N(\x10" +
		"\u0211\u0212\f\r\x02\x02\u0212\u0213\t\x06\x02\x02\u0213\u0241\x05N(\x0E" +
		"\u0214\u0215\f\f\x02\x02\u0215\u0216\x07!\x02\x02\u0216\u0241\x05N(\r" +
		"\u0217\u0218\f\v\x02\x02\u0218\u0219\x07\"\x02\x02\u0219\u0241\x05N(\f" +
		"\u021A\u021B\f\x19\x02\x02\u021B\u021C\x078\x02\x02\u021C\u0241\x05l7" +
		"\x02\u021D\u021F\f\x18\x02\x02\u021E\u0220\x07<\x02\x02\u021F\u021E\x03" +
		"\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221" +
		"\u0223\x05\x80A\x02\u0222\u0221\x03\x02\x02\x02\u0222\u0223\x03\x02\x02" +
		"\x02\u0223\u0224\x03\x02\x02\x02\u0224\u022D\x072\x02\x02\u0225\u022A" +
		"\x05t;\x02\u0226\u0227\x079\x02\x02\u0227\u0229\x05t;\x02\u0228\u0226" +
		"\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02" +
		"\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03" +
		"\x02\x02\x02\u022D\u0225\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0241\x073\x02\x02\u0230\u0231\f\x17\x02" +
		"\x02\u0231\u0232\x074\x02\x02\u0232\u0233\x05N(\x02\u0233\u0234\x075\x02" +
		"\x02\u0234\u0241\x03\x02\x02\x02\u0235\u0236\f\x16\x02\x02\u0236\u0237" +
		"\x070\x02\x02\u0237\u0241\x05h5\x02\u0238\u0239\f\x15\x02\x02\u0239\u0241" +
		"\x07;\x02\x02\u023A\u023B\f\x0E\x02\x02\u023B\u023D\x07\x1A\x02\x02\u023C" +
		"\u023E\x07\x1E\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03\x02" +
		"\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0241\x05h5\x02\u0240\u0202" +
		"\x03\x02\x02\x02\u0240\u0205\x03\x02\x02\x02\u0240\u0208\x03\x02\x02\x02" +
		"\u0240\u020B\x03\x02\x02\x02\u0240\u020E\x03\x02\x02\x02\u0240\u0211\x03" +
		"\x02\x02\x02\u0240\u0214\x03\x02\x02\x02\u0240\u0217\x03\x02\x02\x02\u0240" +
		"\u021A\x03\x02\x02\x02\u0240\u021D\x03\x02\x02\x02\u0240\u0230\x03\x02" +
		"\x02\x02\u0240\u0235\x03\x02\x02\x02\u0240\u0238\x03\x02\x02\x02\u0240" +
		"\u023A\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02" +
		"\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243O\x03\x02\x02\x02\u0244\u0242" +
		"\x03\x02\x02\x02\u0245\u0246\x07\x19\x02\x02\u0246\u0247\x05N(\x02\u0247" +
		"\u024A\x05\x86D\x02\u0248\u0249\x07\x1D\x02\x02\u0249\u024B\x05\x86D\x02" +
		"\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x03" +
		"\x02\x02\x02\u024C\u024E\x07=\x02\x02\u024D\u024C\x03\x02\x02\x02\u024D" +
		"\u024E\x03\x02\x02\x02\u024EQ\x03\x02\x02\x02\u024F\u0250\x07\x1B\x02" +
		"\x02\u0250\u0254\x05\x86D\x02\u0251\u0253\x05T+\x02\u0252\u0251\x03\x02" +
		"\x02\x02\u0253\u0256\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0254" +
		"\u0255\x03\x02\x02\x02\u0255\u0259\x03\x02\x02\x02\u0256\u0254\x03\x02" +
		"\x02\x02\u0257\u0258\x07\x1D\x02\x02\u0258\u025A\x05\x86D\x02\u0259\u0257" +
		"\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02" +
		"\u025B\u025D\x07=\x02\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03" +
		"\x02\x02\x02\u025DS\x03\x02\x02\x02\u025E\u025F\x07\x1C\x02\x02\u025F" +
		"\u0260\x05h5\x02\u0260\u0261\x05\x86D\x02\u0261U\x03\x02\x02\x02\u0262" +
		"\u0264\x07<\x02\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02" +
		"\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x05|?\x02\u0266\u0267\x07" +
		"B\x02\x02\u0267\u0269\x05h5\x02\u0268\u0266\x03\x02\x02\x02\u0268\u0269" +
		"\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x05\x86D\x02" +
		"\u026BW\x03\x02\x02\x02\u026C\u026D\x05h5\x02\u026D\u026E\x05\x82B\x02" +
		"\u026EY\x03\x02\x02\x02\u026F\u0278\x074\x02\x02\u0270\u0275\x05N(\x02" +
		"\u0271\u0272\x079\x02\x02\u0272\u0274\x05N(\x02\u0273\u0271\x03\x02\x02" +
		"\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276" +
		"\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02" +
		"\u0278\u0270\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x03" +
		"\x02\x02\x02\u027A\u027B\x075\x02\x02\u027B[\x03\x02\x02\x02\u027C\u0282" +
		"\x05^0\x02\u027D\u0282\x05`1\x02\u027E\u0282\x05b2\x02\u027F\u0282\x05" +
		"d3\x02\u0280\u0282\x05f4\x02\u0281\u027C\x03\x02\x02\x02\u0281\u027D\x03" +
		"\x02\x02\x02\u0281\u027E\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281" +
		"\u0280\x03\x02\x02\x02\u0282]\x03\x02\x02\x02\u0283\u0284\x07\\\x02\x02" +
		"\u0284_\x03\x02\x02\x02\u0285\u0286\x07]\x02\x02\u0286a\x03\x02\x02\x02" +
		"\u0287\u0288\x07^\x02\x02\u0288c\x03\x02\x02\x02\u0289\u028A\x07_\x02" +
		"\x02\u028Ae\x03\x02\x02\x02\u028B\u028C\x07\x1F\x02\x02\u028Cg\x03\x02" +
		"\x02\x02\u028D\u028E\b5\x01\x02\u028E\u028F\x072\x02\x02\u028F\u0290\x05" +
		"h5\x02\u0290\u0291\x073\x02\x02\u0291\u029F\x03\x02\x02\x02\u0292\u0293" +
		"\x074\x02\x02\u0293\u0294\x05h5\x02\u0294\u0295\x07=\x02\x02\u0295\u0296" +
		"\x05`1\x02\u0296\u0297\x075\x02\x02\u0297\u029F\x03\x02\x02\x02\u0298" +
		"\u029F\x05&\x14\x02\u0299\u029F\x05(\x15\x02\u029A\u029F\x05*\x16\x02" +
		"\u029B\u029F\x05,\x17\x02\u029C\u029F\x05j6\x02\u029D\u029F\x05l7\x02" +
		"\u029E\u028D\x03\x02\x02\x02\u029E\u0292\x03\x02\x02\x02\u029E\u0298\x03" +
		"\x02\x02\x02\u029E\u0299\x03\x02\x02\x02\u029E\u029A\x03\x02\x02\x02\u029E" +
		"\u029B\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029D\x03\x02" +
		"\x02\x02\u029F\u02A9\x03\x02\x02\x02\u02A0\u02A1\f\f\x02\x02\u02A1\u02A8" +
		"\x05\x80A\x02\u02A2\u02A3\f\v\x02\x02\u02A3\u02A4\x078\x02\x02\u02A4\u02A8" +
		"\x05l7\x02\u02A5\u02A6\f\x05\x02\x02\u02A6\u02A8\x07;\x02\x02\u02A7\u02A0" +
		"\x03\x02\x02\x02\u02A7\u02A2\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02" +
		"\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03" +
		"\x02\x02\x02\u02AAi\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC" +
		"\u02AD\x07[\x02\x02\u02ADk\x03\x02\x02\x02\u02AE\u02B2\x07Y\x02\x02\u02AF" +
		"\u02B2\x07Z\x02\x02\u02B0\u02B2\x05\x88E\x02\u02B1\u02AE\x03\x02\x02\x02" +
		"\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2m\x03\x02" +
		"\x02\x02\u02B3\u02B5\x05l7\x02\u02B4\u02B6\x07;\x02\x02\u02B5\u02B4\x03" +
		"\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u02B9\x07>\x02\x02\u02B8\u02BA\x05h5\x02\u02B9\u02B8\x03\x02\x02\x02" +
		"\u02B9\u02BA\x03\x02\x02\x02\u02BAo\x03\x02\x02\x02\u02BB\u02BE\x05l7" +
		"\x02\u02BC\u02BD\x07>\x02\x02\u02BD\u02BF\x05N(\x02\u02BE\u02BC\x03\x02" +
		"\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BFq\x03\x02\x02\x02\u02C0\u02C1" +
		"\x05l7\x02\u02C1\u02C2\x07G\x02\x02\u02C2\u02C3\x05N(\x02\u02C3s\x03\x02" +
		"\x02\x02\u02C4\u02C7\x05N(\x02\u02C5\u02C7\x05r:\x02\u02C6\u02C4\x03\x02" +
		"\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7u\x03\x02\x02\x02\u02C8\u02CD" +
		"\x05l7\x02\u02C9\u02CA\x079\x02\x02\u02CA\u02CC\x05l7\x02\u02CB\u02C9" +
		"\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CEw\x03\x02\x02\x02\u02CF\u02CD\x03\x02" +
		"\x02\x02\u02D0\u02D9\x072\x02\x02\u02D1\u02D6\x05n8\x02\u02D2\u02D3\x07" +
		"9\x02\x02\u02D3\u02D5\x05n8\x02\u02D4\u02D2\x03\x02\x02\x02\u02D5\u02D8" +
		"\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02" +
		"\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02D1\x03" +
		"\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB" +
		"\u02DC\x073\x02\x02\u02DCy\x03\x02\x02\x02\u02DD\u02E6\x076\x02\x02\u02DE" +
		"\u02E3\x05n8\x02\u02DF\u02E0\x079\x02\x02\u02E0\u02E2\x05n8\x02\u02E1" +
		"\u02DF\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02" +
		"\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5" +
		"\u02E3\x03\x02\x02\x02\u02E6\u02DE\x03\x02\x02\x02\u02E6\u02E7\x03\x02" +
		"\x02\x02\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02EA\x079\x02\x02\u02E9\u02E8" +
		"\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02" +
		"\u02EB\u02EC\x077\x02\x02\u02EC{\x03\x02\x02\x02\u02ED\u02F6\x07D\x02" +
		"\x02\u02EE\u02F3\x05n8\x02\u02EF\u02F0\x079\x02\x02\u02F0\u02F2\x05n8" +
		"\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1" +
		"\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02" +
		"\u02F5\u02F3\x03\x02\x02\x02\u02F6\u02EE\x03\x02\x02\x02\u02F6\u02F7\x03" +
		"\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9\x07D\x02\x02\u02F9" +
		"}\x03\x02\x02\x02\u02FA\u0303\x074\x02\x02\u02FB\u0300\x05j6\x02\u02FC" +
		"\u02FD\x079\x02\x02\u02FD\u02FF\x05j6\x02\u02FE\u02FC\x03\x02\x02\x02" +
		"\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301\x03" +
		"\x02\x02\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0303" +
		"\u02FB\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0305\x03\x02" +
		"\x02\x02\u0305\u0306\x075\x02\x02\u0306\x7F\x03\x02\x02\x02\u0307\u0310" +
		"\x074\x02\x02\u0308\u030D\x05h5\x02\u0309\u030A\x079\x02\x02\u030A\u030C" +
		"\x05h5\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030F\x03\x02\x02\x02\u030D" +
		"\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u0311\x03\x02" +
		"\x02\x02\u030F\u030D\x03\x02\x02\x02\u0310\u0308\x03\x02\x02\x02\u0310" +
		"\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0313\x075\x02" +
		"\x02\u0313\x81\x03\x02\x02\x02\u0314\u031D\x076\x02\x02\u0315\u031A\x05" +
		"p9\x02\u0316\u0317\x079\x02\x02\u0317\u0319\x05p9\x02\u0318\u0316\x03" +
		"\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
		"\u031B\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02" +
		"\x02\x02\u031D\u0315\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E" +
		"\u0320\x03\x02\x02\x02\u031F\u0321\x079\x02\x02\u0320\u031F\x03\x02\x02" +
		"\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323" +
		"\x077\x02\x02\u0323\x83\x03\x02\x02\x02\u0324\u0329\x05h5\x02\u0325\u0326" +
		"\x079\x02\x02\u0326\u0328\x05h5\x02\u0327\u0325\x03\x02\x02\x02\u0328" +
		"\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02" +
		"\x02\x02\u032A\x85\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u0330" +
		"\x076\x02\x02\u032D\u032F\x05\x04\x03\x02\u032E\u032D\x03\x02\x02\x02" +
		"\u032F\u0332\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03" +
		"\x02\x02\x02\u0331\u0333\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333" +
		"\u0334\x077\x02\x02\u0334\x87\x03\x02\x02\x02\u0335\u0336\t\x07\x02\x02" +
		"\u0336\x89\x03\x02\x02\x02l\x8D\xA3\xA6\xAB\xB1\xB9\xBE\xC2\xC7\xCA\xD0" +
		"\xD6\xDC\xE4\xED\xF2\xF7\u0102\u0107\u010C\u011C\u0122\u0126\u012A\u0130" +
		"\u0134\u0139\u013D\u0142\u0146\u0148\u014D\u0151\u0155\u0159\u015E\u0162" +
		"\u0166\u016D\u0173\u017B\u0185\u018A\u018F\u0192\u0197\u019B\u019F\u01A4" +
		"\u01A8\u01AD\u01B2\u01B6\u01BB\u01C0\u01C4\u01CA\u01D1\u01D8\u01DD\u01E1" +
		"\u01E7\u01F0\u0200\u021F\u0222\u022A\u022D\u023D\u0240\u0242\u024A\u024D" +
		"\u0254\u0259\u025C\u0263\u0268\u0275\u0278\u0281\u029E\u02A7\u02A9\u02B1" +
		"\u02B5\u02B9\u02BE\u02C6\u02CD\u02D6\u02D9\u02E3\u02E6\u02E9\u02F3\u02F6" +
		"\u0300\u0303\u030D\u0310\u031A\u031D\u0320\u0329\u0330";
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


export class StmtContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
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
	public ifExpr_(): IfExpr_Context | undefined {
		return this.tryGetRuleContext(0, IfExpr_Context);
	}
	public tryCatchElseExpr_(): TryCatchElseExpr_Context | undefined {
		return this.tryGetRuleContext(0, TryCatchElseExpr_Context);
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
	public defn(): DefnContext | undefined {
		return this.tryGetRuleContext(0, DefnContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
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


export class ReturnStmtContext extends ParserRuleContext {
	public _value!: ExprContext;
	public RETURN(): TerminalNode { return this.getToken(CWScriptParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
	public _value!: ExprContext;
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _elements!: BrackTypeExprListContext;
	public TUPLE(): TerminalNode { return this.getToken(CWScriptParser.TUPLE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
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
	public _typeParams!: BrackTypeParamListContext;
	public _name!: IdentContext;
	public UNIT(): TerminalNode { return this.getToken(CWScriptParser.UNIT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
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
	public enumVariantStructDefn(): EnumVariantStructDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumVariantStructDefnContext);
	}
	public enumVariantTupleDefn(): EnumVariantTupleDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumVariantTupleDefnContext);
	}
	public enumVariantUnitDefn(): EnumVariantUnitDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumVariantUnitDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantDefn) {
			listener.enterEnumVariantDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantDefn) {
			listener.exitEnumVariantDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantDefn) {
			return visitor.visitEnumVariantDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantStructDefnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantStructDefn; }
	public copyFrom(ctx: EnumVariantStructDefnContext): void {
		super.copyFrom(ctx);
	}
}
export class EnumVariantStructDefnBraceContext extends EnumVariantStructDefnContext {
	public _name!: IdentContext;
	public _fields!: BraceParamListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public braceParamList(): BraceParamListContext | undefined {
		return this.tryGetRuleContext(0, BraceParamListContext);
	}
	constructor(ctx: EnumVariantStructDefnContext) {
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
export class EnumVariantStructDefnParenContext extends EnumVariantStructDefnContext {
	public _name!: IdentContext;
	public _fields!: ParenParamListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	constructor(ctx: EnumVariantStructDefnContext) {
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


export class EnumVariantTupleDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _elements!: BrackTypeExprListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public brackTypeExprList(): BrackTypeExprListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantTupleDefn; }
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


export class EnumVariantUnitDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantUnitDefn; }
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
	public _name!: IdentContext;
	public _params!: ParenParamListContext;
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
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
	public _thenBody!: BlockContext;
	public _elseBody!: BlockContext;
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
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
	public _body!: BlockContext;
	public barParamList(): BarParamListContext | undefined {
		return this.tryGetRuleContext(0, BarParamListContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
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
export class ArrayTypeExprContext extends TypeExprContext {
	public _ty!: TypeExprContext;
	public _size!: IntLitContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public SEMI(): TerminalNode { return this.getToken(CWScriptParser.SEMI, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
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
	public TypeVar(): TerminalNode { return this.getToken(CWScriptParser.TypeVar, 0); }
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
	public _name!: IdentContext;
	public _optional!: Token;
	public _ty!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
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


export class ReservedKeywordContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EVENT, 0); }
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
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



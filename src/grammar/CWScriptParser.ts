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
	public static readonly INSTANTIATE = 14;
	public static readonly EXEC = 15;
	public static readonly QUERY = 16;
	public static readonly REPLY = 17;
	public static readonly FOR = 18;
	public static readonly IN = 19;
	public static readonly FROM = 20;
	public static readonly STATE = 21;
	public static readonly IF = 22;
	public static readonly IS = 23;
	public static readonly TRY = 24;
	public static readonly CATCH = 25;
	public static readonly ELSE = 26;
	public static readonly NOT = 27;
	public static readonly NONE = 28;
	public static readonly MUT = 29;
	public static readonly AND = 30;
	public static readonly OR = 31;
	public static readonly TRUE = 32;
	public static readonly FALSE = 33;
	public static readonly FN = 34;
	public static readonly LET = 35;
	public static readonly CONST = 36;
	public static readonly FAIL = 37;
	public static readonly RETURN = 38;
	public static readonly STRUCT = 39;
	public static readonly TUPLE = 40;
	public static readonly UNIT = 41;
	public static readonly ENUM = 42;
	public static readonly TYPE = 43;
	public static readonly EMIT = 44;
	public static readonly AS = 45;
	public static readonly TILDE = 46;
	public static readonly LPAREN = 47;
	public static readonly RPAREN = 48;
	public static readonly LBRACK = 49;
	public static readonly RBRACK = 50;
	public static readonly LBRACE = 51;
	public static readonly RBRACE = 52;
	public static readonly DOT = 53;
	public static readonly COMMA = 54;
	public static readonly D_QUEST = 55;
	public static readonly QUEST = 56;
	public static readonly BANG = 57;
	public static readonly SEMI = 58;
	public static readonly COLON = 59;
	public static readonly D_COLON = 60;
	public static readonly HASH = 61;
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
	public static readonly Ident = 87;
	public static readonly TypeVar = 88;
	public static readonly StringLiteral = 89;
	public static readonly IntLiteral = 90;
	public static readonly DecLiteral = 91;
	public static readonly BoolLiteral = 92;
	public static readonly CWSPEC_LINE_COMMENT = 93;
	public static readonly CWSPEC_BLOCK_COMMENT = 94;
	public static readonly LINE_COMMENT = 95;
	public static readonly BLOCK_COMMENT = 96;
	public static readonly WS = 97;
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
	public static readonly RULE_enumVariantList = 22;
	public static readonly RULE_enumVariant = 23;
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
	public static readonly RULE_typeExpr = 46;
	public static readonly RULE_typeVar = 47;
	public static readonly RULE_typeVarList = 48;
	public static readonly RULE_ident = 49;
	public static readonly RULE_param = 50;
	public static readonly RULE_field = 51;
	public static readonly RULE_namedArg = 52;
	public static readonly RULE_arg = 53;
	public static readonly RULE_identList = 54;
	public static readonly RULE_paramList = 55;
	public static readonly RULE_typeExprList = 56;
	public static readonly RULE_fieldList = 57;
	public static readonly RULE_argList = 58;
	public static readonly RULE_reservedKeyword = 59;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "stmt", "importStmt", "letStmt", "binding_", "constStmt", 
		"assignStmt", "memberAssignStmt", "indexAssignStmt", "returnStmt", "failStmt", 
		"forStmt", "execStmt", "instantiateStmt", "emitStmt", "defn", "contractDefn", 
		"interfaceDefn", "structDefn", "tupleDefn", "unitDefn", "enumDefn", "enumVariantList", 
		"enumVariant", "enumVariantStructDefn", "enumVariantTupleDefn", "enumVariantUnitDefn", 
		"typeAliasDefn", "fnDefn", "instantiateDefn", "execDefn", "queryDefn", 
		"errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", "stateItemDefn", 
		"stateMapDefn", "expr", "ifExpr_", "tryCatchElseExpr_", "catchClause", 
		"closureExpr_", "structExpr_", "tupleExpr_", "literal", "typeExpr", "typeVar", 
		"typeVarList", "ident", "param", "field", "namedArg", "arg", "identList", 
		"paramList", "typeExprList", "fieldList", "argList", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
		"'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", "'exec!'", 
		"'query!'", "'delegate_exec!'", "'instantiate'", "'exec'", "'query'", 
		"'reply'", "'for'", "'in'", "'from'", "'state'", "'if'", "'is'", "'try'", 
		"'catch'", "'else'", "'not'", "'None'", "'mut'", "'and'", "'or'", "'true'", 
		"'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", "'struct'", 
		"'tuple'", "'unit'", "'enum'", "'type'", "'emit'", "'as'", "'~'", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'", "'?'", "'!'", 
		"';'", "':'", "'::'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", "'''", 
		"'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", 
		"'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
		"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
		"DELEGATE_EXEC", "INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", 
		"FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", 
		"AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", 
		"STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", "LPAREN", 
		"RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", 
		"QUEST", "BANG", "SEMI", "COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", 
		"FAT_ARROW", "BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", 
		"PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", 
		"MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "TypeVar", "StringLiteral", 
		"IntLiteral", "DecLiteral", "BoolLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
		"LINE_COMMENT", "BLOCK_COMMENT", "WS",
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
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 120;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
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
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.letStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 130;
				this.constStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 131;
				this.assignStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 132;
				this.memberAssignStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 133;
				this.indexAssignStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 134;
				this.ifExpr_();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 135;
				this.tryCatchElseExpr_();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 136;
				this.forStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 137;
				this.execStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 138;
				this.instantiateStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 139;
				this.emitStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 140;
				this.failStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 141;
				this.returnStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 142;
				this.defn();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 143;
				this.expr(0);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 144;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 147;
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
			this.state = 150;
			this.match(CWScriptParser.IMPORT);
			this.state = 151;
			this.match(CWScriptParser.LBRACE);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 152;
				_localctx._items = this.identList();
				}
			}

			this.state = 155;
			this.match(CWScriptParser.RBRACE);
			this.state = 156;
			this.match(CWScriptParser.FROM);
			{
			this.state = 157;
			_localctx._src = this.match(CWScriptParser.StringLiteral);
			}
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 158;
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
			this.state = 161;
			this.match(CWScriptParser.LET);
			{
			this.state = 162;
			_localctx._binding = this.binding_();
			}
			{
			this.state = 163;
			this.match(CWScriptParser.EQ);
			this.state = 164;
			_localctx._value = this.expr(0);
			}
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 166;
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
			this.state = 184;
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
			case CWScriptParser.Ident:
				_localctx = new IdentBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 169;
				(_localctx as IdentBindingContext)._name = this.ident();
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 170;
					this.match(CWScriptParser.COLON);
					this.state = 171;
					(_localctx as IdentBindingContext)._ty = this.typeExpr(0);
					}
				}

				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 174;
				this.match(CWScriptParser.LBRACK);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 175;
					(_localctx as TupleBindingContext)._names = this.identList();
					}
				}

				this.state = 178;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 179;
				this.match(CWScriptParser.LBRACE);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 180;
					(_localctx as StructBindingContext)._names = this.identList();
					}
				}

				this.state = 183;
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
			this.state = 186;
			this.match(CWScriptParser.CONST);
			{
			this.state = 187;
			_localctx._name = this.ident();
			}
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 188;
				this.match(CWScriptParser.COLON);
				this.state = 189;
				_localctx._ty = this.typeExpr(0);
				}
			}

			{
			this.state = 192;
			this.match(CWScriptParser.EQ);
			this.state = 193;
			_localctx._value = this.expr(0);
			}
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 195;
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
			this.state = 198;
			_localctx._name = this.ident();
			}
			this.state = 199;
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
			this.state = 200;
			_localctx._value = this.expr(0);
			}
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 201;
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
			this.state = 204;
			_localctx._obj = this.expr(0);
			}
			this.state = 205;
			this.match(CWScriptParser.DOT);
			{
			this.state = 206;
			_localctx._memberName = this.ident();
			}
			this.state = 207;
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
			this.state = 208;
			_localctx._value = this.expr(0);
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 209;
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
			this.state = 212;
			_localctx._obj = this.expr(0);
			}
			this.state = 213;
			this.match(CWScriptParser.LBRACK);
			this.state = 214;
			_localctx._index = this.expr(0);
			this.state = 215;
			this.match(CWScriptParser.RBRACK);
			this.state = 216;
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
			this.state = 217;
			_localctx._value = this.expr(0);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 218;
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
			this.state = 221;
			this.match(CWScriptParser.RETURN);
			{
			this.state = 222;
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
	public failStmt(): FailStmtContext {
		let _localctx: FailStmtContext = new FailStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_failStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(CWScriptParser.FAIL);
			{
			this.state = 227;
			_localctx._value = this.expr(0);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 228;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(CWScriptParser.FOR);
			{
			this.state = 232;
			_localctx._binding = this.binding_();
			}
			this.state = 233;
			this.match(CWScriptParser.IN);
			{
			this.state = 234;
			_localctx._iter = this.expr(0);
			}
			this.state = 235;
			this.match(CWScriptParser.LBRACE);
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 236;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 242;
			this.match(CWScriptParser.RBRACE);
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
	public execStmt(): ExecStmtContext {
		let _localctx: ExecStmtContext = new ExecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CWScriptParser.RULE_execStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(CWScriptParser.EXEC_NOW);
			this.state = 247;
			_localctx._value = this.expr(0);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 248;
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
			this.state = 251;
			this.match(CWScriptParser.INSTANTIATE_NOW);
			this.state = 252;
			_localctx._value = this.expr(0);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 253;
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
			this.state = 256;
			this.match(CWScriptParser.EMIT);
			this.state = 257;
			_localctx._value = this.expr(0);
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
	public defn(): DefnContext {
		let _localctx: DefnContext = new DefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_defn);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				this.contractDefn();
				}
				break;
			case CWScriptParser.INTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 262;
				this.interfaceDefn();
				}
				break;
			case CWScriptParser.STRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 263;
				this.structDefn();
				}
				break;
			case CWScriptParser.TUPLE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 264;
				this.tupleDefn();
				}
				break;
			case CWScriptParser.UNIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 265;
				this.unitDefn();
				}
				break;
			case CWScriptParser.ENUM:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 266;
				this.enumDefn();
				}
				break;
			case CWScriptParser.TYPE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 267;
				this.typeAliasDefn();
				}
				break;
			case CWScriptParser.FN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 268;
				this.fnDefn();
				}
				break;
			case CWScriptParser.INSTANTIATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 269;
				this.instantiateDefn();
				}
				break;
			case CWScriptParser.EXEC:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 270;
				this.execDefn();
				}
				break;
			case CWScriptParser.QUERY:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 271;
				this.queryDefn();
				}
				break;
			case CWScriptParser.ERROR:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 272;
				this.errorDefn();
				}
				break;
			case CWScriptParser.EVENT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 273;
				this.eventDefn();
				}
				break;
			case CWScriptParser.STATE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 274;
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
			this.state = 277;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 278;
			_localctx._name = this.ident();
			}
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 279;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 280;
				_localctx._base = this.ident();
				}
				}
			}

			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 283;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 284;
				_localctx._interfaces = this.typeExprList();
				}
				}
			}

			this.state = 287;
			this.match(CWScriptParser.LBRACE);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 288;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this.match(CWScriptParser.RBRACE);
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

			this.state = 304;
			this.match(CWScriptParser.LBRACE);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 305;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
			this.match(CWScriptParser.RBRACE);
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 312;
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
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 315;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 316;
				_localctx._name = this.ident();
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 317;
					this.match(CWScriptParser.LBRACK);
					this.state = 318;
					_localctx._typeVars = this.typeVarList();
					this.state = 319;
					this.match(CWScriptParser.RBRACK);
					}
				}

				this.state = 323;
				this.match(CWScriptParser.LBRACE);
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 324;
					_localctx._fields = this.paramList();
					}
				}

				this.state = 327;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 330;
				_localctx._name = this.ident();
				}
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 331;
					this.match(CWScriptParser.LBRACK);
					this.state = 332;
					_localctx._typeVars = this.typeVarList();
					this.state = 333;
					this.match(CWScriptParser.RBRACK);
					}
				}

				this.state = 337;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 338;
				_localctx._fields = this.paramList();
				}
				this.state = 339;
				this.match(CWScriptParser.RPAREN);
				this.state = 341;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 340;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(CWScriptParser.TUPLE);
			{
			this.state = 346;
			_localctx._name = this.ident();
			}
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 347;
				this.match(CWScriptParser.LBRACK);
				this.state = 348;
				_localctx._typeVars = this.typeVarList();
				this.state = 349;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			}
			this.state = 353;
			this.match(CWScriptParser.LBRACK);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident || _la === CWScriptParser.TypeVar) {
				{
				this.state = 354;
				_localctx._elements = this.typeExprList();
				}
			}

			this.state = 357;
			this.match(CWScriptParser.RPAREN);
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 358;
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
			this.state = 361;
			this.match(CWScriptParser.UNIT);
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 362;
				this.match(CWScriptParser.LBRACK);
				this.state = 363;
				_localctx._typeVars = this.typeVarList();
				this.state = 364;
				this.match(CWScriptParser.RBRACK);
				}
			}

			{
			this.state = 368;
			_localctx._name = this.ident();
			}
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
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
	public enumDefn(): EnumDefnContext {
		let _localctx: EnumDefnContext = new EnumDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 373;
			_localctx._name = this.ident();
			}
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 374;
				this.match(CWScriptParser.LBRACK);
				this.state = 375;
				_localctx._typeVars = this.typeVarList();
				this.state = 376;
				this.match(CWScriptParser.RBRACK);
				}
			}

			this.state = 380;
			this.match(CWScriptParser.LBRACE);
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 381;
				_localctx._variants = this.enumVariantList();
				}
			}

			this.state = 384;
			this.match(CWScriptParser.RBRACE);
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 385;
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
	public enumVariantList(): EnumVariantListContext {
		let _localctx: EnumVariantListContext = new EnumVariantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CWScriptParser.RULE_enumVariantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 388;
			this.enumVariant();
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 389;
				this.match(CWScriptParser.COMMA);
				this.state = 390;
				this.enumVariant();
				}
				}
				this.state = 395;
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
	public enumVariant(): EnumVariantContext {
		let _localctx: EnumVariantContext = new EnumVariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CWScriptParser.RULE_enumVariant);
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 396;
				this.enumVariantStructDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.enumVariantTupleDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 398;
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
		let _la: number;
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 401;
				_localctx._name = this.ident();
				}
				this.state = 402;
				this.match(CWScriptParser.LBRACE);
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 403;
					_localctx._fields = this.paramList();
					}
				}

				this.state = 406;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 408;
				_localctx._name = this.ident();
				}
				this.state = 409;
				this.match(CWScriptParser.LPAREN);
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 410;
					_localctx._fields = this.paramList();
					}
				}

				this.state = 413;
				this.match(CWScriptParser.RPAREN);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 417;
			_localctx._name = this.ident();
			}
			this.state = 418;
			this.match(CWScriptParser.LBRACK);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident || _la === CWScriptParser.TypeVar) {
				{
				this.state = 419;
				_localctx._elements = this.typeExprList();
				}
			}

			this.state = 422;
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
	public enumVariantUnitDefn(): EnumVariantUnitDefnContext {
		let _localctx: EnumVariantUnitDefnContext = new EnumVariantUnitDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_enumVariantUnitDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 424;
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
			this.state = 426;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 427;
			_localctx._name = this.ident();
			}
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 428;
				this.match(CWScriptParser.LBRACK);
				this.state = 429;
				_localctx._typeVars = this.typeVarList();
				this.state = 430;
				this.match(CWScriptParser.RBRACK);
				}
			}

			this.state = 434;
			this.match(CWScriptParser.EQ);
			{
			this.state = 435;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 436;
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
			this.state = 439;
			this.match(CWScriptParser.FN);
			{
			this.state = 440;
			_localctx._name = this.ident();
			}
			this.state = 441;
			this.match(CWScriptParser.LPAREN);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 442;
				_localctx._params = this.paramList();
				}
			}

			this.state = 445;
			this.match(CWScriptParser.RPAREN);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 446;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 447;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			this.state = 450;
			this.match(CWScriptParser.LBRACE);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 451;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 457;
			this.match(CWScriptParser.RBRACE);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 458;
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
			this.state = 461;
			this.match(CWScriptParser.INSTANTIATE);
			{
			this.state = 462;
			_localctx._name = this.ident();
			}
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 463;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 464;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			this.state = 467;
			this.match(CWScriptParser.LPAREN);
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 468;
				_localctx._params = this.paramList();
				}
			}

			this.state = 471;
			this.match(CWScriptParser.RPAREN);
			this.state = 472;
			this.match(CWScriptParser.LBRACE);
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 473;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 479;
			this.match(CWScriptParser.RBRACE);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 480;
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
			this.match(CWScriptParser.EXEC);
			{
			this.state = 484;
			_localctx._name = this.ident();
			}
			this.state = 485;
			this.match(CWScriptParser.LPAREN);
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 486;
				_localctx._params = this.paramList();
				}
			}

			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 489;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 490;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			this.state = 493;
			this.match(CWScriptParser.RPAREN);
			this.state = 494;
			this.match(CWScriptParser.LBRACE);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 495;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 501;
			this.match(CWScriptParser.RBRACE);
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 502;
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
			this.state = 505;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 506;
			_localctx._name = this.ident();
			}
			this.state = 507;
			this.match(CWScriptParser.LPAREN);
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 508;
				_localctx._params = this.paramList();
				}
			}

			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 511;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 512;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			this.state = 515;
			this.match(CWScriptParser.RPAREN);
			this.state = 516;
			this.match(CWScriptParser.LBRACE);
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 517;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 523;
			this.match(CWScriptParser.RBRACE);
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 524;
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
			this.state = 527;
			this.match(CWScriptParser.ERROR);
			{
			this.state = 528;
			_localctx._name = this.ident();
			}
			this.state = 529;
			this.match(CWScriptParser.LPAREN);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 530;
				_localctx._params = this.paramList();
				}
			}

			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 533;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 534;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			this.state = 537;
			this.match(CWScriptParser.LBRACE);
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 538;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 544;
			this.match(CWScriptParser.RBRACE);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 545;
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
			this.state = 548;
			this.match(CWScriptParser.EVENT);
			{
			this.state = 549;
			_localctx._name = this.ident();
			}
			this.state = 550;
			this.match(CWScriptParser.LPAREN);
			{
			this.state = 551;
			_localctx._params = this.paramList();
			}
			this.state = 552;
			this.match(CWScriptParser.RPAREN);
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 553;
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
			this.state = 556;
			this.match(CWScriptParser.STATE);
			this.state = 557;
			this.match(CWScriptParser.LBRACK);
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 558;
				_localctx._stateDefn = this.stateDefn();
				_localctx._stateVars.push(_localctx._stateDefn);
				}
				}
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 564;
			this.match(CWScriptParser.RBRACK);
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 565;
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
			this.state = 570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this.stateItemDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 569;
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
			this.state = 572;
			_localctx._name = this.ident();
			}
			this.state = 573;
			this.match(CWScriptParser.COLON);
			{
			this.state = 574;
			_localctx._ty = this.typeExpr(0);
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
	public stateMapDefn(): StateMapDefnContext {
		let _localctx: StateMapDefnContext = new StateMapDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CWScriptParser.RULE_stateMapDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 578;
			_localctx._name = this.ident();
			}
			this.state = 579;
			this.match(CWScriptParser.LBRACK);
			{
			this.state = 580;
			_localctx._indexTy = this.typeExpr(0);
			}
			this.state = 581;
			this.match(CWScriptParser.RBRACK);
			this.state = 582;
			this.match(CWScriptParser.COLON);
			{
			this.state = 583;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 584;
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 588;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 589;
				this.expr(15);
				}
				break;

			case 2:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 590;
				this.ifExpr_();
				}
				break;

			case 3:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 591;
				this.tryCatchElseExpr_();
				}
				break;

			case 4:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 592;
				this.closureExpr_();
				}
				break;

			case 5:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 593;
				this.structExpr_();
				}
				break;

			case 6:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 594;
				this.tupleExpr_();
				}
				break;

			case 7:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 595;
				this.literal();
				}
				break;

			case 8:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 596;
				this.ident();
				}
				break;

			case 9:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 597;
				this.match(CWScriptParser.LPAREN);
				this.state = 598;
				this.expr(0);
				this.state = 599;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 665;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 663;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 603;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 607;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case CWScriptParser.MUL:
							{
							this.state = 604;
							(_localctx as MulExprContext)._op = this.match(CWScriptParser.MUL);
							}
							break;
						case CWScriptParser.DIV:
							{
							this.state = 605;
							this.match(CWScriptParser.DIV);
							}
							break;
						case CWScriptParser.MOD:
							{
							this.state = 606;
							this.match(CWScriptParser.MOD);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 609;
						this.expr(19);
						}
						break;

					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 610;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 613;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case CWScriptParser.PLUS:
							{
							this.state = 611;
							(_localctx as AddExprContext)._addOp = this.match(CWScriptParser.PLUS);
							}
							break;
						case CWScriptParser.MINUS:
							{
							this.state = 612;
							this.match(CWScriptParser.MINUS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 615;
						this.expr(18);
						}
						break;

					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 616;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 621;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case CWScriptParser.LT:
							{
							this.state = 617;
							(_localctx as CompExprContext)._compOp = this.match(CWScriptParser.LT);
							}
							break;
						case CWScriptParser.GT:
							{
							this.state = 618;
							this.match(CWScriptParser.GT);
							}
							break;
						case CWScriptParser.LT_EQ:
							{
							this.state = 619;
							this.match(CWScriptParser.LT_EQ);
							}
							break;
						case CWScriptParser.GT_EQ:
							{
							this.state = 620;
							this.match(CWScriptParser.GT_EQ);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 623;
						this.expr(17);
						}
						break;

					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 624;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 625;
						this.match(CWScriptParser.D_QUEST);
						this.state = 626;
						this.expr(15);
						}
						break;

					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 627;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 628;
						this.match(CWScriptParser.IN);
						this.state = 629;
						this.expr(14);
						}
						break;

					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 630;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 633;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case CWScriptParser.EQ_EQ:
							{
							this.state = 631;
							(_localctx as EqExprContext)._eqOp = this.match(CWScriptParser.EQ_EQ);
							}
							break;
						case CWScriptParser.NEQ:
							{
							this.state = 632;
							this.match(CWScriptParser.NEQ);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 635;
						this.expr(12);
						}
						break;

					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 636;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 637;
						this.match(CWScriptParser.AND);
						this.state = 638;
						this.expr(11);
						}
						break;

					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 639;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 640;
						this.match(CWScriptParser.OR);
						this.state = 641;
						this.expr(10);
						}
						break;

					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 642;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 643;
						this.match(CWScriptParser.DOT);
						{
						this.state = 644;
						(_localctx as DotExprContext)._memberName = this.ident();
						}
						}
						break;

					case 10:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 645;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 646;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 647;
						(_localctx as IndexExprContext)._index = this.expr(0);
						}
						this.state = 648;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 11:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 650;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 651;
						this.match(CWScriptParser.LPAREN);
						{
						this.state = 652;
						(_localctx as CallExprContext)._args = this.argList();
						}
						this.state = 653;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 12:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 655;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 656;
						this.match(CWScriptParser.AS);
						{
						this.state = 657;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 658;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 659;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 14:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 660;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 661;
						this.match(CWScriptParser.IS);
						{
						this.state = 662;
						(_localctx as IsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;
					}
					}
				}
				this.state = 667;
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
	public ifExpr_(): IfExpr_Context {
		let _localctx: IfExpr_Context = new IfExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, CWScriptParser.RULE_ifExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.match(CWScriptParser.IF);
			{
			this.state = 669;
			_localctx._cond = this.expr(0);
			}
			this.state = 670;
			this.match(CWScriptParser.LBRACE);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 671;
				_localctx._stmt = this.stmt();
				_localctx._thenBody.push(_localctx._stmt);
				}
				}
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 677;
			this.match(CWScriptParser.RBRACE);
			this.state = 687;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 678;
				this.match(CWScriptParser.ELSE);
				this.state = 679;
				this.match(CWScriptParser.LBRACE);
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
					{
					{
					this.state = 680;
					_localctx._stmt = this.stmt();
					_localctx._elseBody.push(_localctx._stmt);
					}
					}
					this.state = 685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 686;
				this.match(CWScriptParser.RBRACE);
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(CWScriptParser.TRY);
			this.state = 690;
			this.match(CWScriptParser.LBRACE);
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 691;
				_localctx._stmt = this.stmt();
				_localctx._tryBody.push(_localctx._stmt);
				}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 697;
			this.match(CWScriptParser.RBRACE);
			this.state = 701;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 698;
					_localctx._catchClause = this.catchClause();
					_localctx._catchClauses.push(_localctx._catchClause);
					}
					}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			}
			this.state = 713;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 704;
				this.match(CWScriptParser.ELSE);
				this.state = 705;
				this.match(CWScriptParser.LBRACE);
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
					{
					{
					this.state = 706;
					_localctx._stmt = this.stmt();
					_localctx._elseBody.push(_localctx._stmt);
					}
					}
					this.state = 711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 712;
				this.match(CWScriptParser.RBRACE);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this.match(CWScriptParser.CATCH);
			{
			this.state = 716;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 717;
			this.match(CWScriptParser.LBRACE);
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 718;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 724;
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
	public closureExpr_(): ClosureExpr_Context {
		let _localctx: ClosureExpr_Context = new ClosureExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, CWScriptParser.RULE_closureExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 726;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 729;
			this.match(CWScriptParser.BAR);
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 730;
				_localctx._params = this.paramList();
				}
			}

			this.state = 733;
			this.match(CWScriptParser.BAR);
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 734;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 735;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 738;
			this.match(CWScriptParser.LBRACE);
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 739;
				_localctx._stmt = this.stmt();
				_localctx._body.push(_localctx._stmt);
				}
				}
				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 745;
			this.match(CWScriptParser.RBRACE);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 747;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 748;
			this.match(CWScriptParser.LBRACE);
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 749;
				_localctx._fields = this.fieldList();
				}
			}

			this.state = 752;
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
	public tupleExpr_(): TupleExpr_Context {
		let _localctx: TupleExpr_Context = new TupleExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_tupleExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(CWScriptParser.LBRACK);
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CWScriptParser.BAR - 66)) | (1 << (CWScriptParser.Ident - 66)) | (1 << (CWScriptParser.TypeVar - 66)) | (1 << (CWScriptParser.StringLiteral - 66)) | (1 << (CWScriptParser.IntLiteral - 66)) | (1 << (CWScriptParser.DecLiteral - 66)) | (1 << (CWScriptParser.BoolLiteral - 66)))) !== 0)) {
				{
				{
				this.state = 755;
				_localctx._expr = this.expr(0);
				_localctx._elements.push(_localctx._expr);
				}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 761;
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
			this.state = 768;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				_localctx = new StringLitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.match(CWScriptParser.StringLiteral);
				}
				break;
			case CWScriptParser.IntLiteral:
				_localctx = new IntLitContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.match(CWScriptParser.IntLiteral);
				}
				break;
			case CWScriptParser.DecLiteral:
				_localctx = new DecLitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 765;
				this.match(CWScriptParser.DecLiteral);
				}
				break;
			case CWScriptParser.BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 766;
				this.match(CWScriptParser.BoolLiteral);
				}
				break;
			case CWScriptParser.NONE:
				_localctx = new NoneLitContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 767;
				this.match(CWScriptParser.NONE);
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
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, CWScriptParser.RULE_typeExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 771;
				this.match(CWScriptParser.LPAREN);
				this.state = 772;
				this.typeExpr(0);
				this.state = 773;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 775;
				this.match(CWScriptParser.LBRACK);
				this.state = 776;
				(_localctx as ArrayTypeExprContext)._ty = this.typeExpr(0);
				this.state = 777;
				this.match(CWScriptParser.SEMI);
				this.state = 778;
				(_localctx as ArrayTypeExprContext)._size = this.match(CWScriptParser.IntLiteral);
				this.state = 779;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 3:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 781;
				this.structDefn();
				}
				break;

			case 4:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 782;
				this.tupleDefn();
				}
				break;

			case 5:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 783;
				this.unitDefn();
				}
				break;

			case 6:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 784;
				this.enumDefn();
				}
				break;

			case 7:
				{
				_localctx = new TypeVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 785;
				this.typeVar();
				}
				break;

			case 8:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 786;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 801;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 799;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
					case 1:
						{
						_localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 789;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 790;
						this.match(CWScriptParser.LBRACK);
						this.state = 791;
						(_localctx as ParamzdTypeExprContext)._typeArgs = this.typeExprList();
						this.state = 792;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 794;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 795;
						this.match(CWScriptParser.DOT);
						{
						this.state = 796;
						(_localctx as MemberTypeExprContext)._memberName = this.ident();
						}
						}
						break;

					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 797;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 798;
						this.match(CWScriptParser.QUEST);
						}
						break;
					}
					}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
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
		this.enterRule(_localctx, 94, CWScriptParser.RULE_typeVar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
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
	public typeVarList(): TypeVarListContext {
		let _localctx: TypeVarListContext = new TypeVarListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CWScriptParser.RULE_typeVarList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 806;
			this.typeVar();
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 807;
				this.match(CWScriptParser.COMMA);
				this.state = 808;
				this.typeVar();
				}
				}
				this.state = 813;
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
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CWScriptParser.RULE_ident);
		try {
			this.state = 816;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 814;
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 815;
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
		this.enterRule(_localctx, 100, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 818;
			_localctx._name = this.ident();
			}
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 819;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 822;
			this.match(CWScriptParser.COLON);
			{
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || _la === CWScriptParser.Ident || _la === CWScriptParser.TypeVar) {
				{
				this.state = 823;
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
		this.enterRule(_localctx, 102, CWScriptParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 826;
			_localctx._name = this.ident();
			}
			this.state = 827;
			this.match(CWScriptParser.COLON);
			{
			this.state = 828;
			_localctx._ty = this.typeExpr(0);
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
		this.enterRule(_localctx, 104, CWScriptParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 830;
			_localctx._name = this.ident();
			}
			this.state = 831;
			this.match(CWScriptParser.EQ);
			{
			this.state = 832;
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
		this.enterRule(_localctx, 106, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 834;
				this.expr(0);
				}
				break;

			case 2:
				{
				this.state = 835;
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
		this.enterRule(_localctx, 108, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 838;
			this.ident();
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 839;
				this.match(CWScriptParser.COMMA);
				this.state = 840;
				this.ident();
				}
				}
				this.state = 845;
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
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CWScriptParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 846;
			this.param();
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 847;
				this.match(CWScriptParser.COMMA);
				this.state = 848;
				this.param();
				}
				}
				this.state = 853;
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
	public typeExprList(): TypeExprListContext {
		let _localctx: TypeExprListContext = new TypeExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CWScriptParser.RULE_typeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 854;
			this.typeExpr(0);
			this.state = 859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 855;
				this.match(CWScriptParser.COMMA);
				this.state = 856;
				this.typeExpr(0);
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
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CWScriptParser.RULE_fieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 862;
			this.field();
			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 863;
				this.match(CWScriptParser.COMMA);
				this.state = 864;
				this.field();
				}
				}
				this.state = 869;
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
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CWScriptParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 870;
			this.arg();
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 871;
				this.match(CWScriptParser.COMMA);
				this.state = 872;
				this.arg();
				}
				}
				this.state = 877;
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
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 878;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
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

		case 46:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03c\u0373\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x03\x02\x07\x02|\n\x02\f\x02\x0E\x02\x7F\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x94" +
		"\n\x03\x03\x03\x05\x03\x97\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\x9C\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xA2\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xAA\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xAF\n\x06\x03\x06\x03\x06\x05\x06\xB3\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xB8\n\x06\x03\x06\x05\x06\xBB\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\xC1\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\xC7\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\xCD\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\xD5\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\xDE\n\n\x03\v\x03\v\x03\v\x05\v\xE3\n\v\x03\f\x03\f\x03\f\x05\f" +
		"\xE8\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xF0\n\r\f\r\x0E\r\xF3" +
		"\v\r\x03\r\x03\r\x05\r\xF7\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFC\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0101\n\x0F\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0106\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0116" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u011C\n\x12\x03\x12\x03" +
		"\x12\x05\x12\u0120\n\x12\x03\x12\x03\x12\x07\x12\u0124\n\x12\f\x12\x0E" +
		"\x12\u0127\v\x12\x03\x12\x03\x12\x05\x12\u012B\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0131\n\x13\x03\x13\x03\x13\x07\x13\u0135\n\x13\f" +
		"\x13\x0E\x13\u0138\v\x13\x03\x13\x03\x13\x05\x13\u013C\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0144\n\x14\x03\x14\x03\x14" +
		"\x05\x14\u0148\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u0152\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u0158\n\x14\x05\x14\u015A\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0162\n\x15\x03\x15\x03\x15\x05\x15\u0166\n\x15\x03\x15" +
		"\x03\x15\x05\x15\u016A\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0171\n\x16\x03\x16\x03\x16\x05\x16\u0175\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u017D\n\x17\x03\x17\x03\x17\x05\x17" +
		"\u0181\n\x17\x03\x17\x03\x17\x05\x17\u0185\n\x17\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u018A\n\x18\f\x18\x0E\x18\u018D\v\x18\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0192\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0197\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u019E\n\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u01A2\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01A7\n\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u01B3\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01B8\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u01BE\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u01C3\n\x1E\x03\x1E\x03\x1E\x07\x1E\u01C7\n\x1E\f\x1E\x0E\x1E\u01CA\v" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u01CE\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u01D4\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01D8\n\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x07\x1F\u01DD\n\x1F\f\x1F\x0E\x1F\u01E0\v\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u01E4\n\x1F\x03 \x03 \x03 \x03 \x05 \u01EA\n \x03 \x03 \x05 " +
		"\u01EE\n \x03 \x03 \x03 \x07 \u01F3\n \f \x0E \u01F6\v \x03 \x03 \x05" +
		" \u01FA\n \x03!\x03!\x03!\x03!\x05!\u0200\n!\x03!\x03!\x05!\u0204\n!\x03" +
		"!\x03!\x03!\x07!\u0209\n!\f!\x0E!\u020C\v!\x03!\x03!\x05!\u0210\n!\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u0216\n\"\x03\"\x03\"\x05\"\u021A\n\"\x03\"" +
		"\x03\"\x07\"\u021E\n\"\f\"\x0E\"\u0221\v\"\x03\"\x03\"\x05\"\u0225\n\"" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u022D\n#\x03$\x03$\x03$\x07$\u0232" +
		"\n$\f$\x0E$\u0235\v$\x03$\x03$\x05$\u0239\n$\x03%\x03%\x05%\u023D\n%\x03" +
		"&\x03&\x03&\x03&\x05&\u0243\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u024C\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u025C\n(\x03(\x03(\x03(\x03(\x05(\u0262\n(\x03(" +
		"\x03(\x03(\x03(\x05(\u0268\n(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0270" +
		"\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u027C\n(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07" +
		"(\u029A\n(\f(\x0E(\u029D\v(\x03)\x03)\x03)\x03)\x07)\u02A3\n)\f)\x0E)" +
		"\u02A6\v)\x03)\x03)\x03)\x03)\x07)\u02AC\n)\f)\x0E)\u02AF\v)\x03)\x05" +
		")\u02B2\n)\x03*\x03*\x03*\x07*\u02B7\n*\f*\x0E*\u02BA\v*\x03*\x03*\x07" +
		"*\u02BE\n*\f*\x0E*\u02C1\v*\x03*\x03*\x03*\x07*\u02C6\n*\f*\x0E*\u02C9" +
		"\v*\x03*\x05*\u02CC\n*\x03+\x03+\x03+\x03+\x07+\u02D2\n+\f+\x0E+\u02D5" +
		"\v+\x03+\x03+\x03,\x05,\u02DA\n,\x03,\x03,\x05,\u02DE\n,\x03,\x03,\x03" +
		",\x05,\u02E3\n,\x03,\x03,\x07,\u02E7\n,\f,\x0E,\u02EA\v,\x03,\x03,\x03" +
		"-\x03-\x03-\x05-\u02F1\n-\x03-\x03-\x03.\x03.\x07.\u02F7\n.\f.\x0E.\u02FA" +
		"\v.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x05/\u0303\n/\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x05" +
		"0\u0316\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x070\u0322" +
		"\n0\f0\x0E0\u0325\v0\x031\x031\x032\x032\x032\x072\u032C\n2\f2\x0E2\u032F" +
		"\v2\x033\x033\x053\u0333\n3\x034\x034\x054\u0337\n4\x034\x034\x054\u033B" +
		"\n4\x035\x035\x035\x035\x036\x036\x036\x036\x037\x037\x057\u0347\n7\x03" +
		"8\x038\x038\x078\u034C\n8\f8\x0E8\u034F\v8\x039\x039\x039\x079\u0354\n" +
		"9\f9\x0E9\u0357\v9\x03:\x03:\x03:\x07:\u035C\n:\f:\x0E:\u035F\v:\x03;" +
		"\x03;\x03;\x07;\u0364\n;\f;\x0E;\u0367\v;\x03<\x03<\x03<\x07<\u036C\n" +
		"<\f<\x0E<\u036F\v<\x03=\x03=\x03=\x02\x02\x04N^>\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02r\x02t\x02v\x02x\x02\x02\x04\b\x02GGKKMMOOQQSS\x07\x02" +
		"\x04\n\x10\x18\x1C\x1C %).\x02\u03E3\x02}\x03\x02\x02\x02\x04\x96\x03" +
		"\x02\x02\x02\x06\x98\x03\x02\x02\x02\b\xA3\x03\x02\x02\x02\n\xBA\x03\x02" +
		"\x02\x02\f\xBC\x03\x02\x02\x02\x0E\xC8\x03\x02\x02\x02\x10\xCE\x03\x02" +
		"\x02\x02\x12\xD6\x03\x02\x02\x02\x14\xDF\x03\x02\x02\x02\x16\xE4\x03\x02" +
		"\x02\x02\x18\xE9\x03\x02\x02\x02\x1A\xF8\x03\x02\x02\x02\x1C\xFD\x03\x02" +
		"\x02\x02\x1E\u0102\x03\x02\x02\x02 \u0115\x03\x02\x02\x02\"\u0117\x03" +
		"\x02\x02\x02$\u012C\x03\x02\x02\x02&\u0159\x03\x02\x02\x02(\u015B\x03" +
		"\x02\x02\x02*\u016B\x03\x02\x02\x02,\u0176\x03\x02\x02\x02.\u0186\x03" +
		"\x02\x02\x020\u0191\x03\x02\x02\x022\u01A1\x03\x02\x02\x024\u01A3\x03" +
		"\x02\x02\x026\u01AA\x03\x02\x02\x028\u01AC\x03\x02\x02\x02:\u01B9\x03" +
		"\x02\x02\x02<\u01CF\x03\x02\x02\x02>\u01E5\x03\x02\x02\x02@\u01FB\x03" +
		"\x02\x02\x02B\u0211\x03\x02\x02\x02D\u0226\x03\x02\x02\x02F\u022E\x03" +
		"\x02\x02\x02H\u023C\x03\x02\x02\x02J\u023E\x03\x02\x02\x02L\u0244\x03" +
		"\x02\x02\x02N\u025B\x03\x02\x02\x02P\u029E\x03\x02\x02\x02R\u02B3\x03" +
		"\x02\x02\x02T\u02CD\x03\x02\x02\x02V\u02D9\x03\x02\x02\x02X\u02ED\x03" +
		"\x02\x02\x02Z\u02F4\x03\x02\x02\x02\\\u0302\x03\x02\x02\x02^\u0315\x03" +
		"\x02\x02\x02`\u0326\x03\x02\x02\x02b\u0328\x03\x02\x02\x02d\u0332\x03" +
		"\x02\x02\x02f\u0334\x03\x02\x02\x02h\u033C\x03\x02\x02\x02j\u0340\x03" +
		"\x02\x02\x02l\u0346\x03\x02\x02\x02n\u0348\x03\x02\x02\x02p\u0350\x03" +
		"\x02\x02\x02r\u0358\x03\x02\x02\x02t\u0360\x03\x02\x02\x02v\u0368\x03" +
		"\x02\x02\x02x\u0370\x03\x02\x02\x02z|\x05\x04\x03\x02{z\x03\x02\x02\x02" +
		"|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x80\x03\x02" +
		"\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07\x02\x02\x03\x81\x03\x03\x02" +
		"\x02\x02\x82\x97\x05\x06\x04\x02\x83\x97\x05\b\x05\x02\x84\x97\x05\f\x07" +
		"\x02\x85\x97\x05\x0E\b\x02\x86\x97\x05\x10\t\x02\x87\x97\x05\x12\n\x02" +
		"\x88\x97\x05P)\x02\x89\x97\x05R*\x02\x8A\x97\x05\x18\r\x02\x8B\x97\x05" +
		"\x1A\x0E\x02\x8C\x97\x05\x1C\x0F\x02\x8D\x97\x05\x1E\x10\x02\x8E\x97\x05" +
		"\x16\f\x02\x8F\x97\x05\x14\v\x02\x90\x97\x05 \x11\x02\x91\x93\x05N(\x02" +
		"\x92\x94\x07<\x02\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\x97\x03\x02\x02\x02\x95\x97\x05^0\x02\x96\x82\x03\x02\x02\x02\x96" +
		"\x83\x03\x02\x02\x02\x96\x84\x03\x02\x02\x02\x96\x85\x03\x02\x02\x02\x96" +
		"\x86\x03\x02\x02\x02\x96\x87\x03\x02\x02\x02\x96\x88\x03\x02\x02\x02\x96" +
		"\x89\x03\x02\x02\x02\x96\x8A\x03\x02\x02\x02\x96\x8B\x03\x02\x02\x02\x96" +
		"\x8C\x03\x02\x02\x02\x96\x8D\x03\x02\x02\x02\x96\x8E\x03\x02\x02\x02\x96" +
		"\x8F\x03\x02\x02\x02\x96\x90\x03\x02\x02\x02\x96\x91\x03\x02\x02\x02\x96" +
		"\x95\x03\x02\x02\x02\x97\x05\x03\x02\x02\x02\x98\x99\x07\x06\x02\x02\x99" +
		"\x9B\x075\x02\x02\x9A\x9C\x05n8\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03" +
		"\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x076\x02\x02\x9E\x9F\x07" +
		"\x16\x02\x02\x9F\xA1\x07[\x02\x02\xA0\xA2\x07<\x02\x02\xA1\xA0\x03\x02" +
		"\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x07\x03\x02\x02\x02\xA3\xA4\x07%" +
		"\x02\x02\xA4\xA5\x05\n\x06\x02\xA5\xA6\x07G\x02\x02\xA6\xA7\x05N(\x02" +
		"\xA7\xA9\x03\x02\x02\x02\xA8\xAA\x07<\x02\x02\xA9\xA8\x03\x02\x02\x02" +
		"\xA9\xAA\x03\x02\x02\x02\xAA\t\x03\x02\x02\x02\xAB\xAE\x05d3\x02\xAC\xAD" +
		"\x07=\x02\x02\xAD\xAF\x05^0\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02" +
		"\x02\x02\xAF\xBB\x03\x02\x02\x02\xB0\xB2\x073\x02\x02\xB1\xB3\x05n8\x02" +
		"\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02" +
		"\xB4\xBB\x074\x02\x02\xB5\xB7\x075\x02\x02\xB6\xB8\x05n8\x02\xB7\xB6\x03" +
		"\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x07" +
		"6\x02\x02\xBA\xAB\x03\x02\x02\x02\xBA\xB0\x03\x02\x02\x02\xBA\xB5\x03" +
		"\x02\x02\x02\xBB\v\x03\x02\x02\x02\xBC\xBD\x07&\x02\x02\xBD\xC0\x05d3" +
		"\x02\xBE\xBF\x07=\x02\x02\xBF\xC1\x05^0\x02\xC0\xBE\x03\x02\x02\x02\xC0" +
		"\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x07G\x02\x02\xC3" +
		"\xC4\x05N(\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC7\x07<\x02\x02\xC6\xC5\x03" +
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\r\x03\x02\x02\x02\xC8\xC9\x05" +
		"d3\x02\xC9\xCA\t\x02\x02\x02\xCA\xCC\x05N(\x02\xCB\xCD\x07<\x02\x02\xCC" +
		"\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\x0F\x03\x02\x02\x02\xCE" +
		"\xCF\x05N(\x02\xCF\xD0\x077\x02\x02\xD0\xD1\x05d3\x02\xD1\xD2\t\x02\x02" +
		"\x02\xD2\xD4\x05N(\x02\xD3\xD5\x07<\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4" +
		"\xD5\x03\x02\x02\x02\xD5\x11\x03\x02\x02\x02\xD6\xD7\x05N(\x02\xD7\xD8" +
		"\x073\x02\x02\xD8\xD9\x05N(\x02\xD9\xDA\x074\x02\x02\xDA\xDB\t\x02\x02" +
		"\x02\xDB\xDD\x05N(\x02\xDC\xDE\x07<\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD" +
		"\xDE\x03\x02\x02\x02\xDE\x13\x03\x02\x02\x02\xDF\xE0\x07(\x02\x02\xE0" +
		"\xE2\x05N(\x02\xE1\xE3\x07<\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03" +
		"\x02\x02\x02\xE3\x15\x03\x02\x02\x02\xE4\xE5\x07\'\x02\x02\xE5\xE7\x05" +
		"N(\x02\xE6\xE8\x07<\x02\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE8\x17\x03\x02\x02\x02\xE9\xEA\x07\x14\x02\x02\xEA\xEB\x05\n\x06" +
		"\x02\xEB\xEC\x07\x15\x02\x02\xEC\xED\x05N(\x02\xED\xF1\x075\x02\x02\xEE" +
		"\xF0\x05\x04\x03\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1" +
		"\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3" +
		"\xF1\x03\x02\x02\x02\xF4\xF6\x076\x02\x02\xF5\xF7\x07<\x02\x02\xF6\xF5" +
		"\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\x19\x03\x02\x02\x02\xF8\xF9" +
		"\x07\r\x02\x02\xF9\xFB\x05N(\x02\xFA\xFC\x07<\x02\x02\xFB\xFA\x03\x02" +
		"\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x1B\x03\x02\x02\x02\xFD\xFE\x07\f" +
		"\x02\x02\xFE\u0100\x05N(\x02\xFF\u0101\x07<\x02\x02\u0100\xFF\x03\x02" +
		"\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\x1D\x03\x02\x02\x02\u0102\u0103" +
		"\x07.\x02\x02\u0103\u0105\x05N(\x02\u0104\u0106\x07<\x02\x02\u0105\u0104" +
		"\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\x1F\x03\x02\x02\x02" +
		"\u0107\u0116\x05\"\x12\x02\u0108\u0116\x05$\x13\x02\u0109\u0116\x05&\x14" +
		"\x02\u010A\u0116\x05(\x15\x02\u010B\u0116\x05*\x16\x02\u010C\u0116\x05" +
		",\x17\x02\u010D\u0116\x058\x1D\x02\u010E\u0116\x05:\x1E\x02\u010F\u0116" +
		"\x05<\x1F\x02\u0110\u0116\x05> \x02\u0111\u0116\x05@!\x02\u0112\u0116" +
		"\x05B\"\x02\u0113\u0116\x05D#\x02\u0114\u0116\x05F$\x02\u0115\u0107\x03" +
		"\x02\x02\x02\u0115\u0108\x03\x02\x02\x02\u0115\u0109\x03\x02\x02\x02\u0115" +
		"\u010A\x03\x02\x02\x02\u0115\u010B\x03\x02\x02\x02\u0115\u010C\x03\x02" +
		"\x02\x02\u0115\u010D\x03\x02\x02\x02\u0115\u010E\x03\x02\x02\x02\u0115" +
		"\u010F\x03\x02\x02\x02\u0115\u0110\x03\x02\x02\x02\u0115\u0111\x03\x02" +
		"\x02\x02\u0115\u0112\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115" +
		"\u0114\x03\x02\x02\x02\u0116!\x03\x02\x02\x02\u0117\u0118\x07\x04\x02" +
		"\x02\u0118\u011B\x05d3\x02\u0119\u011A\x07\b\x02\x02\u011A\u011C\x05d" +
		"3\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011F" +
		"\x03\x02\x02\x02\u011D\u011E\x07\x07\x02\x02\u011E\u0120\x05r:\x02\u011F" +
		"\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02" +
		"\x02\x02\u0121\u0125\x075\x02\x02\u0122\u0124\x05\x04\x03\x02\u0123\u0122" +
		"\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03" +
		"\x02\x02\x02\u0128\u012A\x076\x02\x02\u0129\u012B\x07<\x02\x02\u012A\u0129" +
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B#\x03\x02\x02\x02\u012C" +
		"\u012D\x07\x05\x02\x02\u012D\u0130\x05d3\x02\u012E\u012F\x07\b\x02\x02" +
		"\u012F\u0131\x05r:\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0136\x075\x02\x02\u0133\u0135" +
		"\x05\x04\x03\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02" +
		"\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139\x03" +
		"\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013B\x076\x02\x02\u013A" +
		"\u013C\x07<\x02\x02\u013B\u013A\x03\x02\x02\x02\u013B\u013C\x03\x02\x02" +
		"\x02\u013C%\x03\x02\x02\x02\u013D\u013E\x07)\x02\x02\u013E\u0143\x05d" +
		"3\x02\u013F\u0140\x073\x02\x02\u0140\u0141\x05b2\x02\u0141\u0142\x074" +
		"\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u013F\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x075\x02" +
		"\x02\u0146\u0148\x05p9\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03" +
		"\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x076\x02\x02\u014A" +
		"\u015A\x03\x02\x02\x02\u014B\u014C\x07)\x02\x02\u014C\u0151\x05d3\x02" +
		"\u014D\u014E\x073\x02\x02\u014E\u014F\x05b2\x02\u014F\u0150\x074\x02\x02" +
		"\u0150\u0152\x03\x02\x02\x02\u0151\u014D\x03\x02\x02\x02\u0151\u0152\x03" +
		"\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x071\x02\x02\u0154" +
		"\u0155\x05p9\x02\u0155\u0157\x072\x02\x02\u0156\u0158\x07<\x02\x02\u0157" +
		"\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02" +
		"\x02\x02\u0159\u013D\x03\x02\x02\x02\u0159\u014B\x03\x02\x02\x02\u015A" +
		"\'\x03\x02\x02\x02\u015B\u015C\x07*\x02\x02\u015C\u0161\x05d3\x02\u015D" +
		"\u015E\x073\x02\x02\u015E\u015F\x05b2\x02\u015F\u0160\x074\x02\x02\u0160" +
		"\u0162\x03\x02\x02\x02\u0161\u015D\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x073\x02\x02\u0164\u0166" +
		"\x05r:\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166" +
		"\u0167\x03\x02\x02\x02\u0167\u0169\x072\x02\x02\u0168\u016A\x07<\x02\x02" +
		"\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A)\x03\x02" +
		"\x02\x02\u016B\u0170\x07+\x02\x02\u016C\u016D\x073\x02\x02\u016D\u016E" +
		"\x05b2\x02\u016E\u016F\x074\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170" +
		"\u016C\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02" +
		"\x02\x02\u0172\u0174\x05d3\x02\u0173\u0175\x07<\x02\x02\u0174\u0173\x03" +
		"\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175+\x03\x02\x02\x02\u0176" +
		"\u0177\x07,\x02\x02\u0177\u017C\x05d3\x02\u0178\u0179\x073\x02\x02\u0179" +
		"\u017A\x05b2\x02\u017A\u017B\x074\x02\x02\u017B\u017D\x03\x02\x02\x02" +
		"\u017C\u0178\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03" +
		"\x02\x02\x02\u017E\u0180\x075\x02\x02\u017F\u0181\x05.\x18\x02\u0180\u017F" +
		"\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02" +
		"\u0182\u0184\x076\x02\x02\u0183\u0185\x07<\x02\x02\u0184\u0183\x03\x02" +
		"\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185-\x03\x02\x02\x02\u0186\u018B" +
		"\x050\x19\x02\u0187\u0188\x078\x02\x02\u0188\u018A\x050\x19\x02\u0189" +
		"\u0187\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02" +
		"\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C/\x03\x02\x02\x02\u018D\u018B" +
		"\x03\x02\x02\x02\u018E\u0192\x052\x1A\x02\u018F\u0192\x054\x1B\x02\u0190" +
		"\u0192\x056\x1C\x02\u0191\u018E\x03\x02\x02\x02\u0191\u018F\x03\x02\x02" +
		"\x02\u0191\u0190\x03\x02\x02\x02\u01921\x03\x02\x02\x02\u0193\u0194\x05" +
		"d3\x02\u0194\u0196\x075\x02\x02\u0195\u0197\x05p9\x02\u0196\u0195\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u0199\x076\x02\x02\u0199\u01A2\x03\x02\x02\x02\u019A\u019B\x05d3\x02" +
		"\u019B\u019D\x071\x02\x02\u019C\u019E\x05p9\x02\u019D\u019C\x03\x02\x02" +
		"\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0" +
		"\x072\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1\u0193\x03\x02\x02\x02" +
		"\u01A1\u019A\x03\x02\x02\x02\u01A23\x03\x02\x02\x02\u01A3\u01A4\x05d3" +
		"\x02\u01A4\u01A6\x073\x02\x02\u01A5\u01A7\x05r:\x02\u01A6\u01A5\x03\x02" +
		"\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
		"\u01A9\x072\x02\x02\u01A95\x03\x02\x02\x02\u01AA\u01AB\x05d3\x02\u01AB" +
		"7\x03\x02\x02\x02\u01AC\u01AD\x07-\x02\x02\u01AD\u01B2\x05d3\x02\u01AE" +
		"\u01AF\x073\x02\x02\u01AF\u01B0\x05b2\x02\u01B0\u01B1\x074\x02\x02\u01B1" +
		"\u01B3\x03\x02\x02\x02\u01B2\u01AE\x03\x02\x02\x02\u01B2\u01B3\x03\x02" +
		"\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B5\x07G\x02\x02\u01B5\u01B7" +
		"\x05^0\x02\u01B6\u01B8\x07<\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B89\x03\x02\x02\x02\u01B9\u01BA\x07$\x02\x02" +
		"\u01BA\u01BB\x05d3\x02\u01BB\u01BD\x071\x02\x02\u01BC\u01BE\x05p9\x02" +
		"\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03" +
		"\x02\x02\x02\u01BF\u01C2\x072\x02\x02\u01C0\u01C1\x07B\x02\x02\u01C1\u01C3" +
		"\x05^0\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3" +
		"\u01C4\x03\x02\x02\x02\u01C4\u01C8\x075\x02\x02\u01C5\u01C7\x05\x04\x03" +
		"\x02\u01C6\u01C5\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6" +
		"\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02" +
		"\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01CD\x076\x02\x02\u01CC\u01CE\x07" +
		"<\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		";\x03\x02\x02\x02\u01CF\u01D0\x07\x10\x02\x02\u01D0\u01D3\x05d3\x02\u01D1" +
		"\u01D2\x07B\x02\x02\u01D2\u01D4\x05^0";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5" +
		"\x03\x02\x02\x02\u01D5\u01D7\x071\x02\x02\u01D6\u01D8\x05p9\x02\u01D7" +
		"\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02" +
		"\x02\x02\u01D9\u01DA\x072\x02\x02\u01DA\u01DE\x075\x02\x02\u01DB\u01DD" +
		"\x05\x04\x03\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02" +
		"\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x03" +
		"\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E3\x076\x02\x02\u01E2" +
		"\u01E4\x07<\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02" +
		"\x02\u01E4=\x03\x02\x02\x02\u01E5\u01E6\x07\x11\x02\x02\u01E6\u01E7\x05" +
		"d3\x02\u01E7\u01E9\x071\x02\x02\u01E8\u01EA\x05p9\x02\u01E9\u01E8\x03" +
		"\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB" +
		"\u01EC\x07B\x02\x02\u01EC\u01EE\x05^0\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07" +
		"2\x02\x02\u01F0\u01F4\x075\x02\x02\u01F1\u01F3\x05\x04\x03\x02\u01F2\u01F1" +
		"\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01F4\x03" +
		"\x02\x02\x02\u01F7\u01F9\x076\x02\x02\u01F8\u01FA\x07<\x02\x02\u01F9\u01F8" +
		"\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA?\x03\x02\x02\x02\u01FB" +
		"\u01FC\x07\x12\x02\x02\u01FC\u01FD\x05d3\x02\u01FD\u01FF\x071\x02\x02" +
		"\u01FE\u0200\x05p9\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02" +
		"\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u0202\x07B\x02\x02\u0202\u0204" +
		"\x05^0\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0206\x072\x02\x02\u0206\u020A\x075\x02\x02" +
		"\u0207\u0209\x05\x04\x03\x02\u0208\u0207\x03\x02\x02\x02\u0209\u020C\x03" +
		"\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B" +
		"\u020D\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D\u020F\x076\x02" +
		"\x02\u020E\u0210\x07<\x02\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210" +
		"\x03\x02\x02\x02\u0210A\x03\x02\x02\x02\u0211\u0212\x07\t\x02\x02\u0212" +
		"\u0213\x05d3\x02\u0213\u0215\x071\x02\x02\u0214\u0216\x05p9\x02\u0215" +
		"\u0214\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0219\x03\x02" +
		"\x02\x02\u0217\u0218\x07B\x02\x02\u0218\u021A\x05^0\x02\u0219\u0217\x03" +
		"\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B" +
		"\u021F\x075\x02\x02\u021C\u021E\x05\x04\x03\x02\u021D\u021C\x03\x02\x02" +
		"\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220" +
		"\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02" +
		"\u0222\u0224\x076\x02\x02\u0223\u0225\x07<\x02\x02\u0224\u0223\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225C\x03\x02\x02\x02\u0226\u0227" +
		"\x07\n\x02\x02\u0227\u0228\x05d3\x02\u0228\u0229\x071\x02\x02\u0229\u022A" +
		"\x05p9\x02\u022A\u022C\x072\x02\x02\u022B\u022D\x07<\x02\x02\u022C\u022B" +
		"\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022DE\x03\x02\x02\x02\u022E" +
		"\u022F\x07\x17\x02\x02\u022F\u0233\x073\x02\x02\u0230\u0232\x05H%\x02" +
		"\u0231\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03" +
		"\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235" +
		"\u0233\x03\x02\x02\x02\u0236\u0238\x074\x02\x02\u0237\u0239\x07<\x02\x02" +
		"\u0238\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239G\x03\x02" +
		"\x02\x02\u023A\u023D\x05J&\x02\u023B\u023D\x05L\'\x02\u023C\u023A\x03" +
		"\x02\x02\x02\u023C\u023B\x03\x02\x02\x02\u023DI\x03\x02\x02\x02\u023E" +
		"\u023F\x05d3\x02\u023F\u0240\x07=\x02\x02\u0240\u0242\x05^0\x02\u0241" +
		"\u0243\x07<\x02\x02\u0242\u0241\x03\x02\x02\x02\u0242\u0243\x03\x02\x02" +
		"\x02\u0243K\x03\x02\x02\x02\u0244\u0245\x05d3\x02\u0245\u0246\x073\x02" +
		"\x02\u0246\u0247\x05^0\x02\u0247\u0248\x074\x02\x02\u0248\u0249\x07=\x02" +
		"\x02\u0249\u024B\x05^0\x02\u024A\u024C\x07<\x02\x02\u024B\u024A\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024CM\x03\x02\x02\x02\u024D\u024E" +
		"\b(\x01\x02\u024E\u024F\x07\x0E\x02\x02\u024F\u025C\x05N(\x11\u0250\u025C" +
		"\x05P)\x02\u0251\u025C\x05R*\x02\u0252\u025C\x05V,\x02\u0253\u025C\x05" +
		"X-\x02\u0254\u025C\x05Z.\x02\u0255\u025C\x05\\/\x02\u0256\u025C\x05d3" +
		"\x02\u0257\u0258\x071\x02\x02\u0258\u0259\x05N(\x02\u0259\u025A\x072\x02" +
		"\x02\u025A\u025C\x03\x02\x02\x02\u025B\u024D\x03\x02\x02\x02\u025B\u0250" +
		"\x03\x02\x02\x02\u025B\u0251\x03\x02\x02\x02\u025B\u0252\x03\x02\x02\x02" +
		"\u025B\u0253\x03\x02\x02\x02\u025B\u0254\x03\x02\x02\x02\u025B\u0255\x03" +
		"\x02\x02\x02\u025B\u0256\x03\x02\x02\x02\u025B\u0257\x03\x02\x02\x02\u025C" +
		"\u029B\x03\x02\x02\x02\u025D\u0261\f\x14\x02\x02\u025E\u0262\x07N\x02" +
		"\x02\u025F\u0262\x07P\x02\x02\u0260\u0262\x07R\x02\x02\u0261\u025E\x03" +
		"\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262" +
		"\u0263\x03\x02\x02\x02\u0263\u029A\x05N(\x15\u0264\u0267\f\x13\x02\x02" +
		"\u0265\u0268\x07J\x02\x02\u0266\u0268\x07L\x02\x02\u0267\u0265\x03\x02" +
		"\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269" +
		"\u029A\x05N(\x14\u026A\u026F\f\x12\x02\x02\u026B\u0270\x07T\x02\x02\u026C" +
		"\u0270\x07V\x02\x02\u026D\u0270\x07U\x02\x02\u026E\u0270\x07W\x02\x02" +
		"\u026F\u026B\x03\x02\x02\x02\u026F\u026C\x03\x02\x02\x02\u026F\u026D\x03" +
		"\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271" +
		"\u029A\x05N(\x13\u0272\u0273\f\x10\x02\x02\u0273\u0274\x079\x02\x02\u0274" +
		"\u029A\x05N(\x11\u0275\u0276\f\x0F\x02\x02\u0276\u0277\x07\x15\x02\x02" +
		"\u0277\u029A\x05N(\x10\u0278\u027B\f\r\x02\x02\u0279\u027C\x07H\x02\x02" +
		"\u027A\u027C\x07I\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027A\x03" +
		"\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u029A\x05N(\x0E\u027E\u027F" +
		"\f\f\x02\x02\u027F\u0280\x07 \x02\x02\u0280\u029A\x05N(\r\u0281\u0282" +
		"\f\v\x02\x02\u0282\u0283\x07!\x02\x02\u0283\u029A\x05N(\f\u0284\u0285" +
		"\f\x19\x02\x02\u0285\u0286\x077\x02\x02\u0286\u029A\x05d3\x02\u0287\u0288" +
		"\f\x18\x02\x02\u0288\u0289\x073\x02\x02\u0289\u028A\x05N(\x02\u028A\u028B" +
		"\x074\x02\x02\u028B\u029A\x03\x02\x02\x02\u028C\u028D\f\x17\x02\x02\u028D" +
		"\u028E\x071\x02\x02\u028E\u028F\x05v<\x02\u028F\u0290\x072\x02\x02\u0290" +
		"\u029A\x03\x02\x02\x02\u0291\u0292\f\x16\x02\x02\u0292\u0293\x07/\x02" +
		"\x02\u0293\u029A\x05^0\x02\u0294\u0295\f\x15\x02\x02\u0295\u029A\x07:" +
		"\x02\x02\u0296\u0297\f\x0E\x02\x02\u0297\u0298\x07\x19\x02\x02\u0298\u029A" +
		"\x05^0\x02\u0299\u025D\x03\x02\x02\x02\u0299\u0264\x03\x02\x02\x02\u0299" +
		"\u026A\x03\x02\x02\x02\u0299\u0272\x03\x02\x02\x02\u0299\u0275\x03\x02" +
		"\x02\x02\u0299\u0278\x03\x02\x02\x02\u0299\u027E\x03\x02\x02\x02\u0299" +
		"\u0281\x03\x02\x02\x02\u0299\u0284\x03\x02\x02\x02\u0299\u0287\x03\x02" +
		"\x02\x02\u0299\u028C\x03\x02\x02\x02\u0299\u0291\x03\x02\x02\x02\u0299" +
		"\u0294\x03\x02\x02\x02\u0299\u0296\x03\x02\x02\x02\u029A\u029D\x03\x02" +
		"\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C" +
		"O\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E\u029F\x07\x18\x02" +
		"\x02\u029F\u02A0\x05N(\x02\u02A0\u02A4\x075\x02\x02\u02A1\u02A3\x05\x04" +
		"\x03\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4" +
		"\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A7\x03\x02" +
		"\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02B1\x076\x02\x02\u02A8\u02A9" +
		"\x07\x1C\x02\x02\u02A9\u02AD\x075\x02\x02\u02AA\u02AC\x05\x04\x03\x02" +
		"\u02AB\u02AA\x03\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03" +
		"\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF" +
		"\u02AD\x03\x02\x02\x02\u02B0\u02B2\x076\x02\x02\u02B1\u02A8\x03\x02\x02" +
		"\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2Q\x03\x02\x02\x02\u02B3\u02B4\x07" +
		"\x1A\x02\x02\u02B4\u02B8\x075\x02\x02\u02B5\u02B7\x05\x04\x03\x02\u02B6" +
		"\u02B5\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02" +
		"\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA" +
		"\u02B8\x03\x02\x02\x02\u02BB\u02BF\x076\x02\x02\u02BC\u02BE\x05T+\x02" +
		"\u02BD\u02BC\x03\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03" +
		"\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02CB\x03\x02\x02\x02\u02C1" +
		"\u02BF\x03\x02\x02\x02\u02C2\u02C3\x07\x1C\x02\x02\u02C3\u02C7\x075\x02" +
		"\x02\u02C4\u02C6\x05\x04\x03\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\u02C9" +
		"\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02" +
		"\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CC\x07" +
		"6\x02\x02\u02CB\u02C2\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
		"S\x03\x02\x02\x02\u02CD\u02CE\x07\x1B\x02\x02\u02CE\u02CF\x05^0\x02\u02CF" +
		"\u02D3\x075\x02\x02\u02D0\u02D2\x05\x04\x03\x02\u02D1\u02D0\x03\x02\x02" +
		"\x02\u02D2\u02D5\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4" +
		"\x03\x02\x02\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02" +
		"\u02D6\u02D7\x076\x02\x02\u02D7U\x03\x02\x02\x02\u02D8\u02DA\x07;\x02" +
		"\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB" +
		"\x03\x02\x02\x02\u02DB\u02DD\x07D\x02\x02\u02DC\u02DE\x05p9\x02\u02DD" +
		"\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF\x03\x02" +
		"\x02\x02\u02DF\u02E2\x07D\x02\x02\u02E0\u02E1\x07B\x02\x02\u02E1\u02E3" +
		"\x05^0\x02\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3" +
		"\u02E4\x03\x02\x02\x02\u02E4\u02E8\x075\x02\x02\u02E5\u02E7\x05\x04\x03" +
		"\x02\u02E6\u02E5\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02\u02E8\u02E6" +
		"\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EB\x03\x02\x02\x02" +
		"\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x076\x02\x02\u02ECW\x03\x02\x02" +
		"\x02\u02ED\u02EE\x05^0\x02\u02EE\u02F0\x075\x02\x02\u02EF\u02F1\x05t;" +
		"\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2" +
		"\x03\x02\x02\x02\u02F2\u02F3\x076\x02\x02\u02F3Y\x03\x02\x02\x02\u02F4" +
		"\u02F8\x073\x02\x02\u02F5\u02F7\x05N(\x02\u02F6\u02F5\x03\x02\x02\x02" +
		"\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03" +
		"\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB" +
		"\u02FC\x074\x02\x02\u02FC[\x03\x02\x02\x02\u02FD\u0303\x07[\x02\x02\u02FE" +
		"\u0303\x07\\\x02\x02\u02FF\u0303\x07]\x02\x02\u0300\u0303\x07^\x02\x02" +
		"\u0301\u0303\x07\x1E\x02\x02\u0302\u02FD\x03\x02\x02\x02\u0302\u02FE\x03" +
		"\x02\x02\x02\u0302\u02FF\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302" +
		"\u0301\x03\x02\x02\x02\u0303]\x03\x02\x02\x02\u0304\u0305\b0\x01\x02\u0305" +
		"\u0306\x071\x02\x02\u0306\u0307\x05^0\x02\u0307\u0308\x072\x02\x02\u0308" +
		"\u0316\x03\x02\x02\x02\u0309\u030A\x073\x02\x02\u030A\u030B\x05^0\x02" +
		"\u030B\u030C\x07<\x02\x02\u030C\u030D\x07\\\x02\x02\u030D\u030E\x074\x02" +
		"\x02\u030E\u0316\x03\x02\x02\x02\u030F\u0316\x05&\x14\x02\u0310\u0316" +
		"\x05(\x15\x02\u0311\u0316\x05*\x16\x02\u0312\u0316\x05,\x17\x02\u0313" +
		"\u0316\x05`1\x02\u0314\u0316\x05d3\x02\u0315\u0304\x03\x02\x02\x02\u0315" +
		"\u0309\x03\x02\x02\x02\u0315\u030F\x03\x02\x02\x02\u0315\u0310\x03\x02" +
		"\x02\x02\u0315\u0311\x03\x02\x02\x02\u0315\u0312\x03\x02\x02\x02\u0315" +
		"\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0323\x03\x02" +
		"\x02\x02\u0317\u0318\f\f\x02\x02\u0318\u0319\x073\x02\x02\u0319\u031A" +
		"\x05r:\x02\u031A\u031B\x074\x02\x02\u031B\u0322\x03\x02\x02\x02\u031C" +
		"\u031D\f\v\x02\x02\u031D\u031E\x077\x02\x02\u031E\u0322\x05d3\x02\u031F" +
		"\u0320\f\x05\x02\x02\u0320\u0322\x07:\x02\x02\u0321\u0317\x03\x02\x02" +
		"\x02\u0321\u031C\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0322\u0325" +
		"\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02" +
		"\u0324_\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0327\x07Z\x02" +
		"\x02\u0327a\x03\x02\x02\x02\u0328\u032D\x05`1\x02\u0329\u032A\x078\x02" +
		"\x02\u032A\u032C\x05`1\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032F\x03" +
		"\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E" +
		"c\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u0330\u0333\x07Y\x02\x02" +
		"\u0331\u0333\x05x=\x02\u0332\u0330\x03\x02\x02\x02\u0332\u0331\x03\x02" +
		"\x02\x02\u0333e\x03\x02\x02\x02\u0334\u0336\x05d3\x02\u0335\u0337\x07" +
		":\x02\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337" +
		"\u0338\x03\x02\x02\x02\u0338\u033A\x07=\x02\x02\u0339\u033B\x05^0\x02" +
		"\u033A\u0339\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033Bg\x03\x02" +
		"\x02\x02\u033C\u033D\x05d3\x02\u033D\u033E\x07=\x02\x02\u033E\u033F\x05" +
		"^0\x02\u033Fi\x03\x02\x02\x02\u0340\u0341\x05d3\x02\u0341\u0342\x07G\x02" +
		"\x02\u0342\u0343\x05N(\x02\u0343k\x03\x02\x02\x02\u0344\u0347\x05N(\x02" +
		"\u0345\u0347\x05j6\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0345\x03\x02" +
		"\x02\x02\u0347m\x03\x02\x02\x02\u0348\u034D\x05d3\x02\u0349\u034A\x07" +
		"8\x02\x02\u034A\u034C\x05d3\x02\u034B\u0349\x03\x02\x02\x02\u034C\u034F" +
		"\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02" +
		"\u034Eo\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0355\x05f4" +
		"\x02\u0351\u0352\x078\x02\x02\u0352\u0354\x05f4\x02\u0353\u0351\x03\x02" +
		"\x02\x02\u0354\u0357\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355" +
		"\u0356\x03\x02\x02\x02\u0356q\x03\x02\x02\x02\u0357\u0355\x03\x02\x02" +
		"\x02\u0358\u035D\x05^0\x02\u0359\u035A\x078\x02\x02\u035A\u035C\x05^0" +
		"\x02\u035B\u0359\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D\u035B" +
		"\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035Es\x03\x02\x02\x02\u035F" +
		"\u035D\x03\x02\x02\x02\u0360\u0365\x05h5\x02\u0361\u0362\x078\x02\x02" +
		"\u0362\u0364\x05h5\x02\u0363\u0361\x03\x02\x02\x02\u0364\u0367\x03\x02" +
		"\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366" +
		"u\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036D\x05l7\x02\u0369" +
		"\u036A\x078\x02\x02\u036A\u036C\x05l7\x02\u036B\u0369\x03\x02\x02\x02" +
		"\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03" +
		"\x02\x02\x02\u036Ew\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370" +
		"\u0371\t\x03\x02\x02\u0371y\x03\x02\x02\x02r}\x93\x96\x9B\xA1\xA9\xAE" +
		"\xB2\xB7\xBA\xC0\xC6\xCC\xD4\xDD\xE2\xE7\xF1\xF6\xFB\u0100\u0105\u0115" +
		"\u011B\u011F\u0125\u012A\u0130\u0136\u013B\u0143\u0147\u0151\u0157\u0159" +
		"\u0161\u0165\u0169\u0170\u0174\u017C\u0180\u0184\u018B\u0191\u0196\u019D" +
		"\u01A1\u01A6\u01B2\u01B7\u01BD\u01C2\u01C8\u01CD\u01D3\u01D7\u01DE\u01E3" +
		"\u01E9\u01ED\u01F4\u01F9\u01FF\u0203\u020A\u020F\u0215\u0219\u021F\u0224" +
		"\u022C\u0233\u0238\u023C\u0242\u024B\u025B\u0261\u0267\u026F\u027B\u0299" +
		"\u029B\u02A4\u02AD\u02B1\u02B8\u02BF\u02C7\u02CB\u02D3\u02D9\u02DD\u02E2" +
		"\u02E8\u02F0\u02F8\u0302\u0315\u0321\u0323\u032D\u0332\u0336\u033A\u0346" +
		"\u034D\u0355\u035D\u0365\u036D";
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
	public _src!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
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
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public binding_(): Binding_Context | undefined {
		return this.tryGetRuleContext(0, Binding_Context);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
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
	public _base!: IdentContext;
	public _interfaces!: TypeExprListContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public CONTRACT(): TerminalNode { return this.getToken(CWScriptParser.CONTRACT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
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
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
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
	public _name!: IdentContext;
	public _typeVars!: TypeVarListContext;
	public _fields!: ParamListContext;
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public typeVarList(): TypeVarListContext | undefined {
		return this.tryGetRuleContext(0, TypeVarListContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefn) {
			listener.enterStructDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefn) {
			listener.exitStructDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefn) {
			return visitor.visitStructDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _typeVars!: TypeVarListContext;
	public _elements!: TypeExprListContext;
	public TUPLE(): TerminalNode { return this.getToken(CWScriptParser.TUPLE, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.LBRACK);
		} else {
			return this.getToken(CWScriptParser.LBRACK, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public typeVarList(): TypeVarListContext | undefined {
		return this.tryGetRuleContext(0, TypeVarListContext);
	}
	public typeExprList(): TypeExprListContext | undefined {
		return this.tryGetRuleContext(0, TypeExprListContext);
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
	public _typeVars!: TypeVarListContext;
	public _name!: IdentContext;
	public UNIT(): TerminalNode { return this.getToken(CWScriptParser.UNIT, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public typeVarList(): TypeVarListContext | undefined {
		return this.tryGetRuleContext(0, TypeVarListContext);
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
	public _typeVars!: TypeVarListContext;
	public _variants!: EnumVariantListContext;
	public ENUM(): TerminalNode { return this.getToken(CWScriptParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public typeVarList(): TypeVarListContext | undefined {
		return this.tryGetRuleContext(0, TypeVarListContext);
	}
	public enumVariantList(): EnumVariantListContext | undefined {
		return this.tryGetRuleContext(0, EnumVariantListContext);
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


export class EnumVariantListContext extends ParserRuleContext {
	public enumVariant(): EnumVariantContext[];
	public enumVariant(i: number): EnumVariantContext;
	public enumVariant(i?: number): EnumVariantContext | EnumVariantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumVariantContext);
		} else {
			return this.getRuleContext(i, EnumVariantContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantList) {
			listener.enterEnumVariantList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantList) {
			listener.exitEnumVariantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantList) {
			return visitor.visitEnumVariantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariant; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariant) {
			listener.enterEnumVariant(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariant) {
			listener.exitEnumVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariant) {
			return visitor.visitEnumVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantStructDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _fields!: ParamListContext;
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantStructDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantStructDefn) {
			listener.enterEnumVariantStructDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantStructDefn) {
			listener.exitEnumVariantStructDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantStructDefn) {
			return visitor.visitEnumVariantStructDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantTupleDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _elements!: TypeExprListContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExprList(): TypeExprListContext | undefined {
		return this.tryGetRuleContext(0, TypeExprListContext);
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
	public _typeVars!: TypeVarListContext;
	public _ty!: TypeExprContext;
	public TYPE(): TerminalNode { return this.getToken(CWScriptParser.TYPE, 0); }
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public typeVarList(): TypeVarListContext | undefined {
		return this.tryGetRuleContext(0, TypeVarListContext);
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
	public _params!: ParamListContext;
	public _returnTy!: TypeExprContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public FN(): TerminalNode { return this.getToken(CWScriptParser.FN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
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
	public _name!: IdentContext;
	public _returnTy!: TypeExprContext;
	public _params!: ParamListContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
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
	public _params!: ParamListContext;
	public _returnTy!: TypeExprContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
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
	public _params!: ParamListContext;
	public _returnTy!: TypeExprContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
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
	public _params!: ParamListContext;
	public _returnTy!: TypeExprContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
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
	public _name!: IdentContext;
	public _params!: ParamListContext;
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
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
	public _stateVars: StateDefnContext[] = [];
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
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
export class CallExprContext extends ExprContext {
	public _args!: ArgListContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
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
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
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
	public _addOp!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
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
	public _compOp!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT, 0); }
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
	public _ty!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS(): TerminalNode { return this.getToken(CWScriptParser.IS, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
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
	public _eqOp!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NEQ, 0); }
	public EQ_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ_EQ, 0); }
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
	public _cond!: ExprContext;
	public _stmt!: StmtContext;
	public _thenBody: StmtContext[] = [];
	public _elseBody: StmtContext[] = [];
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public LBRACE(): TerminalNode[];
	public LBRACE(i: number): TerminalNode;
	public LBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.LBRACE);
		} else {
			return this.getToken(CWScriptParser.LBRACE, i);
		}
	}
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.RBRACE);
		} else {
			return this.getToken(CWScriptParser.RBRACE, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
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
	public _stmt!: StmtContext;
	public _tryBody: StmtContext[] = [];
	public _catchClause!: CatchClauseContext;
	public _catchClauses: CatchClauseContext[] = [];
	public _elseBody: StmtContext[] = [];
	public TRY(): TerminalNode { return this.getToken(CWScriptParser.TRY, 0); }
	public LBRACE(): TerminalNode[];
	public LBRACE(i: number): TerminalNode;
	public LBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.LBRACE);
		} else {
			return this.getToken(CWScriptParser.LBRACE, i);
		}
	}
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.RBRACE);
		} else {
			return this.getToken(CWScriptParser.RBRACE, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
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
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public CATCH(): TerminalNode { return this.getToken(CWScriptParser.CATCH, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
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
	public _params!: ParamListContext;
	public _returnTy!: TypeExprContext;
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.BAR);
		} else {
			return this.getToken(CWScriptParser.BAR, i);
		}
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
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
	public _fields!: FieldListContext;
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class StringLitContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(CWScriptParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class IntLitContext extends LiteralContext {
	public IntLiteral(): TerminalNode { return this.getToken(CWScriptParser.IntLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DecLitContext extends LiteralContext {
	public DecLiteral(): TerminalNode { return this.getToken(CWScriptParser.DecLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class BoolLitContext extends LiteralContext {
	public BoolLiteral(): TerminalNode { return this.getToken(CWScriptParser.BoolLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class NoneLitContext extends LiteralContext {
	public NONE(): TerminalNode { return this.getToken(CWScriptParser.NONE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ParamzdTypeExprContext extends TypeExprContext {
	public _typeArgs!: TypeExprListContext;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeExprList(): TypeExprListContext {
		return this.getRuleContext(0, TypeExprListContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParamzdTypeExpr) {
			listener.enterParamzdTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParamzdTypeExpr) {
			listener.exitParamzdTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParamzdTypeExpr) {
			return visitor.visitParamzdTypeExpr(this);
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
	public _size!: Token;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public SEMI(): TerminalNode { return this.getToken(CWScriptParser.SEMI, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public IntLiteral(): TerminalNode { return this.getToken(CWScriptParser.IntLiteral, 0); }
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


export class TypeVarListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CWScriptParser.RULE_typeVarList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeVarList) {
			listener.enterTypeVarList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeVarList) {
			listener.exitTypeVarList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeVarList) {
			return visitor.visitTypeVarList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
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
	public _ty!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
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


export class ParamListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CWScriptParser.RULE_paramList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
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


export class FieldListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CWScriptParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFieldList) {
			return visitor.visitFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_argList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
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



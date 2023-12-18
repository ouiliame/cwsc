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
	public static readonly CONTRACT = 1;
	public static readonly INTERFACE = 2;
	public static readonly IMPORT = 3;
	public static readonly EXPORT = 4;
	public static readonly IMPLEMENTS = 5;
	public static readonly IMPL = 6;
	public static readonly EXTENDS = 7;
	public static readonly ERROR = 8;
	public static readonly EVENT = 9;
	public static readonly DEFER = 10;
	public static readonly INSTANTIATE_NOW = 11;
	public static readonly EXEC_NOW = 12;
	public static readonly QUERY_NOW = 13;
	public static readonly DELEGATE_EXEC = 14;
	public static readonly H_INSTANTIATE = 15;
	public static readonly INSTANTIATE = 16;
	public static readonly EXEC = 17;
	public static readonly QUERY = 18;
	public static readonly REPLY = 19;
	public static readonly FOR = 20;
	public static readonly IN = 21;
	public static readonly FROM = 22;
	public static readonly STATE = 23;
	public static readonly IF = 24;
	public static readonly IS = 25;
	public static readonly TRY = 26;
	public static readonly CATCH = 27;
	public static readonly ELSE = 28;
	public static readonly NOT = 29;
	public static readonly NONE = 30;
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
	public static readonly LPAREN = 47;
	public static readonly RPAREN = 48;
	public static readonly LBRACK = 49;
	public static readonly RBRACK = 50;
	public static readonly H_LBRACE = 51;
	public static readonly LBRACE = 52;
	public static readonly RBRACE = 53;
	public static readonly BAR = 54;
	public static readonly DOT = 55;
	public static readonly COMMA = 56;
	public static readonly D_QUEST = 57;
	public static readonly QUEST = 58;
	public static readonly BANG = 59;
	public static readonly SEMI = 60;
	public static readonly COLON = 61;
	public static readonly AT = 62;
	public static readonly AMP = 63;
	public static readonly ARROW = 64;
	public static readonly FAT_ARROW = 65;
	public static readonly S_QUOTE = 66;
	public static readonly D_QUOTE = 67;
	public static readonly F_DQUOTE = 68;
	public static readonly BACKTICK = 69;
	public static readonly EQ = 70;
	public static readonly D_EQ = 71;
	public static readonly NEQ = 72;
	public static readonly PLUS_EQ = 73;
	public static readonly PLUS = 74;
	public static readonly MINUS_EQ = 75;
	public static readonly MINUS = 76;
	public static readonly MUL_EQ = 77;
	public static readonly MUL = 78;
	public static readonly DIV_EQ = 79;
	public static readonly DIV = 80;
	public static readonly MOD_EQ = 81;
	public static readonly MOD = 82;
	public static readonly LT_EQ = 83;
	public static readonly LT = 84;
	public static readonly GT_EQ = 85;
	public static readonly GT = 86;
	public static readonly POW = 87;
	public static readonly BoolLiteral = 88;
	public static readonly HashIdent = 89;
	public static readonly DollarIdent = 90;
	public static readonly PercentIdent = 91;
	public static readonly EscapedIdent = 92;
	public static readonly Ident = 93;
	public static readonly StringLiteral = 94;
	public static readonly DoubleQuotedString = 95;
	public static readonly SingleQuotedString = 96;
	public static readonly DecLiteral = 97;
	public static readonly IntLiteral = 98;
	public static readonly DOC_LINE_COMMENT = 99;
	public static readonly DOC_BLOCK_COMMENT = 100;
	public static readonly LINE_COMMENT = 101;
	public static readonly BLOCK_COMMENT = 102;
	public static readonly WS = 103;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_docComment = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_importStmt = 3;
	public static readonly RULE_exportStmt = 4;
	public static readonly RULE_binding = 5;
	public static readonly RULE_bindingList = 6;
	public static readonly RULE_brackIdentList = 7;
	public static readonly RULE_braceBindingList = 8;
	public static readonly RULE_letStmt = 9;
	public static readonly RULE_constStmt = 10;
	public static readonly RULE_assignStmt = 11;
	public static readonly RULE_memberAssignStmt = 12;
	public static readonly RULE_indexAssignStmt = 13;
	public static readonly RULE_tryCatchElseStmt = 14;
	public static readonly RULE_ifStmt = 15;
	public static readonly RULE_returnStmt = 16;
	public static readonly RULE_failStmt = 17;
	public static readonly RULE_forStmt = 18;
	public static readonly RULE_execStmt = 19;
	public static readonly RULE_instantiateStmt = 20;
	public static readonly RULE_emitStmt = 21;
	public static readonly RULE_defn = 22;
	public static readonly RULE_contractDefn = 23;
	public static readonly RULE_interfaceDefn = 24;
	public static readonly RULE_structDefn = 25;
	public static readonly RULE_tupleDefn = 26;
	public static readonly RULE_unitDefn = 27;
	public static readonly RULE_enumDefn = 28;
	public static readonly RULE_enumVariantDefnList = 29;
	public static readonly RULE_enumVariantDefn = 30;
	public static readonly RULE_typeAliasDefn = 31;
	public static readonly RULE_fnDefn = 32;
	public static readonly RULE_instantiateDefn = 33;
	public static readonly RULE_execDefn = 34;
	public static readonly RULE_execTupleDefn = 35;
	public static readonly RULE_queryDefn = 36;
	public static readonly RULE_queryTupleDefn = 37;
	public static readonly RULE_errorDefn = 38;
	public static readonly RULE_eventDefn = 39;
	public static readonly RULE_stateBlockDefn = 40;
	public static readonly RULE_stateDefn = 41;
	public static readonly RULE_stateItemDefn = 42;
	public static readonly RULE_stateMapDefn = 43;
	public static readonly RULE_implDefn = 44;
	public static readonly RULE_exprStmt = 45;
	public static readonly RULE_expr = 46;
	public static readonly RULE_ifExpr_ = 47;
	public static readonly RULE_tryCatchElseExpr_ = 48;
	public static readonly RULE_catchClause = 49;
	public static readonly RULE_mapEntry = 50;
	public static readonly RULE_mapExpr_ = 51;
	public static readonly RULE_blockClosureExpr = 52;
	public static readonly RULE_exprClosureExpr = 53;
	public static readonly RULE_structExpr_ = 54;
	public static readonly RULE_tupleExpr_ = 55;
	public static readonly RULE_returnExpr_ = 56;
	public static readonly RULE_failExpr_ = 57;
	public static readonly RULE_literal = 58;
	public static readonly RULE_stringLit = 59;
	public static readonly RULE_intLit = 60;
	public static readonly RULE_decLit = 61;
	public static readonly RULE_boolLit = 62;
	public static readonly RULE_noneLit = 63;
	public static readonly RULE_typeExpr = 64;
	public static readonly RULE_typeVar = 65;
	public static readonly RULE_ident = 66;
	public static readonly RULE_param = 67;
	public static readonly RULE_field = 68;
	public static readonly RULE_namedArg = 69;
	public static readonly RULE_arg = 70;
	public static readonly RULE_identList = 71;
	public static readonly RULE_parenParamList = 72;
	public static readonly RULE_barsParamList = 73;
	public static readonly RULE_tupleParamList = 74;
	public static readonly RULE_braceParamList = 75;
	public static readonly RULE_brackTypeParamList = 76;
	public static readonly RULE_brackTypeExprList = 77;
	public static readonly RULE_braceFieldList = 78;
	public static readonly RULE_typeExprList = 79;
	public static readonly RULE_block = 80;
	public static readonly RULE_blockOrExpr = 81;
	public static readonly RULE_keywordIdent = 82;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "docComment", "stmt", "importStmt", "exportStmt", "binding", 
		"bindingList", "brackIdentList", "braceBindingList", "letStmt", "constStmt", 
		"assignStmt", "memberAssignStmt", "indexAssignStmt", "tryCatchElseStmt", 
		"ifStmt", "returnStmt", "failStmt", "forStmt", "execStmt", "instantiateStmt", 
		"emitStmt", "defn", "contractDefn", "interfaceDefn", "structDefn", "tupleDefn", 
		"unitDefn", "enumDefn", "enumVariantDefnList", "enumVariantDefn", "typeAliasDefn", 
		"fnDefn", "instantiateDefn", "execDefn", "execTupleDefn", "queryDefn", 
		"queryTupleDefn", "errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", 
		"stateItemDefn", "stateMapDefn", "implDefn", "exprStmt", "expr", "ifExpr_", 
		"tryCatchElseExpr_", "catchClause", "mapEntry", "mapExpr_", "blockClosureExpr", 
		"exprClosureExpr", "structExpr_", "tupleExpr_", "returnExpr_", "failExpr_", 
		"literal", "stringLit", "intLit", "decLit", "boolLit", "noneLit", "typeExpr", 
		"typeVar", "ident", "param", "field", "namedArg", "arg", "identList", 
		"parenParamList", "barsParamList", "tupleParamList", "braceParamList", 
		"brackTypeParamList", "brackTypeExprList", "braceFieldList", "typeExprList", 
		"block", "blockOrExpr", "keywordIdent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'interface'", "'import'", "'export'", "'implements'", 
		"'impl'", "'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", 
		"'exec!'", "'query!'", "'delegate_exec!'", "'#instantiate'", "'instantiate'", 
		"'exec'", "'query'", "'reply'", "'for'", "'in'", "'from'", "'state'", 
		"'if'", "'is'", "'try'", "'catch'", "'else'", "'not'", "'None'", "'and'", 
		"'or'", "'true'", "'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", 
		"'struct'", "'tuple'", "'unit'", "'enum'", "'type'", "'emit!'", "'as'", 
		"'('", "')'", "'['", "']'", "'#{'", "'{'", "'}'", "'|'", "'.'", "','", 
		"'??'", "'?'", "'!'", "';'", "':'", "'@'", "'&'", "'->'", "'=>'", "'''", 
		"'\"'", "'f\"'", "'`'", "'='", "'=='", "'!='", "'+='", "'+'", "'-='", 
		"'-'", "'*='", "'*'", "'/='", "'/'", "'%='", "'%'", "'<='", "'<'", "'>='", 
		"'>'", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONTRACT", "INTERFACE", "IMPORT", "EXPORT", "IMPLEMENTS", 
		"IMPL", "EXTENDS", "ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", 
		"QUERY_NOW", "DELEGATE_EXEC", "H_INSTANTIATE", "INSTANTIATE", "EXEC", 
		"QUERY", "REPLY", "FOR", "IN", "FROM", "STATE", "IF", "IS", "TRY", "CATCH", 
		"ELSE", "NOT", "NONE", "AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", 
		"FAIL", "RETURN", "STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", "AS", 
		"LPAREN", "RPAREN", "LBRACK", "RBRACK", "H_LBRACE", "LBRACE", "RBRACE", 
		"BAR", "DOT", "COMMA", "D_QUEST", "QUEST", "BANG", "SEMI", "COLON", "AT", 
		"AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "F_DQUOTE", "BACKTICK", 
		"EQ", "D_EQ", "NEQ", "PLUS_EQ", "PLUS", "MINUS_EQ", "MINUS", "MUL_EQ", 
		"MUL", "DIV_EQ", "DIV", "MOD_EQ", "MOD", "LT_EQ", "LT", "GT_EQ", "GT", 
		"POW", "BoolLiteral", "HashIdent", "DollarIdent", "PercentIdent", "EscapedIdent", 
		"Ident", "StringLiteral", "DoubleQuotedString", "SingleQuotedString", 
		"DecLiteral", "IntLiteral", "DOC_LINE_COMMENT", "DOC_BLOCK_COMMENT", "LINE_COMMENT", 
		"BLOCK_COMMENT", "WS",
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
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.H_LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.BoolLiteral - 88)) | (1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.PercentIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.StringLiteral - 88)) | (1 << (CWScriptParser.DecLiteral - 88)) | (1 << (CWScriptParser.IntLiteral - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				{
				this.state = 166;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
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
	public docComment(): DocCommentContext {
		let _localctx: DocCommentContext = new DocCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_docComment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			_la = this._input.LA(1);
			if (!(_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT)) {
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
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.exportStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 178;
				this.defn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 179;
				this.letStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 180;
				this.constStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 181;
				this.assignStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 182;
				this.memberAssignStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 183;
				this.indexAssignStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 184;
				this.ifStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 185;
				this.tryCatchElseStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 186;
				this.forStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 187;
				this.execStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 188;
				this.instantiateStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 189;
				this.emitStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 190;
				this.failStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 191;
				this.returnStmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 192;
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
			this.state = 195;
			this.match(CWScriptParser.IMPORT);
			{
			this.state = 196;
			_localctx._bindings = this.braceBindingList();
			}
			this.state = 197;
			this.match(CWScriptParser.FROM);
			{
			this.state = 198;
			_localctx._src = this.stringLit();
			}
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 199;
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
	public exportStmt(): ExportStmtContext {
		let _localctx: ExportStmtContext = new ExportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_exportStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(CWScriptParser.EXPORT);
			{
			this.state = 203;
			_localctx._fields = this.braceFieldList();
			}
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 204;
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
	public binding(): BindingContext {
		let _localctx: BindingContext = new BindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_binding);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 207;
			_localctx._name = this.ident();
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.AS) {
				{
				this.state = 208;
				this.match(CWScriptParser.AS);
				{
				this.state = 209;
				_localctx._alias = this.ident();
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
	public bindingList(): BindingListContext {
		let _localctx: BindingListContext = new BindingListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CWScriptParser.RULE_bindingList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 212;
			this.binding();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 213;
				this.match(CWScriptParser.COMMA);
				this.state = 214;
				this.binding();
				}
				}
				this.state = 219;
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
	public brackIdentList(): BrackIdentListContext {
		let _localctx: BrackIdentListContext = new BrackIdentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_brackIdentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(CWScriptParser.LBRACK);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)))) !== 0)) {
				{
				this.state = 221;
				this.ident();
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 222;
					this.match(CWScriptParser.COMMA);
					this.state = 223;
					this.ident();
					}
					}
					this.state = 228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 231;
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
	public braceBindingList(): BraceBindingListContext {
		let _localctx: BraceBindingListContext = new BraceBindingListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_braceBindingList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(CWScriptParser.LBRACE);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)))) !== 0)) {
				{
				this.state = 234;
				this.binding();
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 235;
						this.match(CWScriptParser.COMMA);
						this.state = 236;
						this.binding();
						}
						}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 244;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 247;
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
	public letStmt(): LetStmtContext {
		let _localctx: LetStmtContext = new LetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_letStmt);
		let _la: number;
		try {
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				_localctx = new LetIdentStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 249;
					(_localctx as LetIdentStmtContext)._doc = this.docComment();
					}
				}

				this.state = 252;
				this.match(CWScriptParser.LET);
				{
				this.state = 253;
				(_localctx as LetIdentStmtContext)._name = this.ident();
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 254;
					this.match(CWScriptParser.COLON);
					this.state = 255;
					(_localctx as LetIdentStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 258;
				this.match(CWScriptParser.EQ);
				this.state = 259;
				(_localctx as LetIdentStmtContext)._value = this.expr(0);
				}
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 261;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new LetTupleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 264;
					(_localctx as LetTupleStmtContext)._doc = this.docComment();
					}
				}

				this.state = 267;
				this.match(CWScriptParser.LET);
				{
				this.state = 268;
				(_localctx as LetTupleStmtContext)._names = this.brackIdentList();
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 269;
					this.match(CWScriptParser.COLON);
					this.state = 270;
					(_localctx as LetTupleStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 273;
				this.match(CWScriptParser.EQ);
				this.state = 274;
				(_localctx as LetTupleStmtContext)._value = this.expr(0);
				}
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
				break;

			case 3:
				_localctx = new LetStructStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 279;
					(_localctx as LetStructStmtContext)._doc = this.docComment();
					}
				}

				this.state = 282;
				this.match(CWScriptParser.LET);
				{
				this.state = 283;
				(_localctx as LetStructStmtContext)._bindings = this.braceBindingList();
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 284;
					this.match(CWScriptParser.COLON);
					this.state = 285;
					(_localctx as LetStructStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 288;
				this.match(CWScriptParser.EQ);
				this.state = 289;
				(_localctx as LetStructStmtContext)._value = this.expr(0);
				}
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
	public constStmt(): ConstStmtContext {
		let _localctx: ConstStmtContext = new ConstStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_constStmt);
		let _la: number;
		try {
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				_localctx = new ConstIdentStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 296;
					(_localctx as ConstIdentStmtContext)._doc = this.docComment();
					}
				}

				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 299;
					(_localctx as ConstIdentStmtContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 302;
				this.match(CWScriptParser.CONST);
				{
				this.state = 303;
				(_localctx as ConstIdentStmtContext)._name = this.ident();
				}
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 304;
					this.match(CWScriptParser.COLON);
					this.state = 305;
					(_localctx as ConstIdentStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 308;
				this.match(CWScriptParser.EQ);
				this.state = 309;
				(_localctx as ConstIdentStmtContext)._value = this.expr(0);
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 311;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new ConstTupleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 314;
					(_localctx as ConstTupleStmtContext)._doc = this.docComment();
					}
				}

				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 317;
					(_localctx as ConstTupleStmtContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 320;
				this.match(CWScriptParser.CONST);
				{
				this.state = 321;
				(_localctx as ConstTupleStmtContext)._names = this.brackIdentList();
				}
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 322;
					this.match(CWScriptParser.COLON);
					this.state = 323;
					(_localctx as ConstTupleStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 326;
				this.match(CWScriptParser.EQ);
				this.state = 327;
				(_localctx as ConstTupleStmtContext)._value = this.expr(0);
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
				break;

			case 3:
				_localctx = new ConstStructStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 332;
					(_localctx as ConstStructStmtContext)._doc = this.docComment();
					}
				}

				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 335;
					(_localctx as ConstStructStmtContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 338;
				this.match(CWScriptParser.CONST);
				{
				this.state = 339;
				(_localctx as ConstStructStmtContext)._bindings = this.braceBindingList();
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 340;
					this.match(CWScriptParser.COLON);
					this.state = 341;
					(_localctx as ConstStructStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 344;
				this.match(CWScriptParser.EQ);
				this.state = 345;
				(_localctx as ConstStructStmtContext)._value = this.expr(0);
				}
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 347;
					this.match(CWScriptParser.SEMI);
					}
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
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_assignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 352;
			_localctx._name = this.ident();
			}
			this.state = 353;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CWScriptParser.EQ - 70)) | (1 << (CWScriptParser.PLUS_EQ - 70)) | (1 << (CWScriptParser.MINUS_EQ - 70)) | (1 << (CWScriptParser.MUL_EQ - 70)) | (1 << (CWScriptParser.DIV_EQ - 70)) | (1 << (CWScriptParser.MOD_EQ - 70)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			{
			this.state = 354;
			_localctx._value = this.expr(0);
			}
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 355;
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
		this.enterRule(_localctx, 24, CWScriptParser.RULE_memberAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 358;
			_localctx._obj = this.expr(0);
			}
			this.state = 359;
			this.match(CWScriptParser.DOT);
			{
			this.state = 360;
			_localctx._memberName = this.ident();
			}
			this.state = 361;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CWScriptParser.EQ - 70)) | (1 << (CWScriptParser.PLUS_EQ - 70)) | (1 << (CWScriptParser.MINUS_EQ - 70)) | (1 << (CWScriptParser.MUL_EQ - 70)) | (1 << (CWScriptParser.DIV_EQ - 70)) | (1 << (CWScriptParser.MOD_EQ - 70)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			{
			this.state = 362;
			_localctx._value = this.expr(0);
			}
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 363;
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
		this.enterRule(_localctx, 26, CWScriptParser.RULE_indexAssignStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 366;
			_localctx._obj = this.expr(0);
			}
			this.state = 367;
			this.match(CWScriptParser.LBRACK);
			this.state = 368;
			_localctx._index = this.expr(0);
			this.state = 369;
			this.match(CWScriptParser.RBRACK);
			this.state = 370;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CWScriptParser.EQ - 70)) | (1 << (CWScriptParser.PLUS_EQ - 70)) | (1 << (CWScriptParser.MINUS_EQ - 70)) | (1 << (CWScriptParser.MUL_EQ - 70)) | (1 << (CWScriptParser.DIV_EQ - 70)) | (1 << (CWScriptParser.MOD_EQ - 70)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 371;
			_localctx._value = this.expr(0);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 372;
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
		this.enterRule(_localctx, 28, CWScriptParser.RULE_tryCatchElseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.tryCatchElseExpr_();
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 376;
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
		this.enterRule(_localctx, 30, CWScriptParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.ifExpr_();
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 380;
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
		this.enterRule(_localctx, 32, CWScriptParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.returnExpr_();
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 384;
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
		this.enterRule(_localctx, 34, CWScriptParser.RULE_failStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.failExpr_();
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 388;
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
		this.enterRule(_localctx, 36, CWScriptParser.RULE_forStmt);
		let _la: number;
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new ForIdentStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 391;
				this.match(CWScriptParser.FOR);
				{
				this.state = 392;
				(_localctx as ForIdentStmtContext)._name = this.ident();
				}
				this.state = 393;
				this.match(CWScriptParser.IN);
				{
				this.state = 394;
				(_localctx as ForIdentStmtContext)._iter = this.expr(0);
				}
				this.state = 395;
				(_localctx as ForIdentStmtContext)._body = this.block();
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 396;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new ForTupleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.match(CWScriptParser.FOR);
				{
				this.state = 400;
				(_localctx as ForTupleStmtContext)._names = this.brackIdentList();
				}
				{
				this.state = 401;
				(_localctx as ForTupleStmtContext)._iter = this.expr(0);
				}
				this.state = 402;
				(_localctx as ForTupleStmtContext)._body = this.block();
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 403;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 3:
				_localctx = new ForStructStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 406;
				this.match(CWScriptParser.FOR);
				{
				this.state = 407;
				(_localctx as ForStructStmtContext)._bindings = this.braceBindingList();
				}
				{
				this.state = 408;
				(_localctx as ForStructStmtContext)._iter = this.expr(0);
				}
				this.state = 409;
				(_localctx as ForStructStmtContext)._body = this.block();
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 410;
					this.match(CWScriptParser.SEMI);
					}
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
	public execStmt(): ExecStmtContext {
		let _localctx: ExecStmtContext = new ExecStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_execStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(CWScriptParser.EXEC_NOW);
			this.state = 416;
			_localctx._value = this.expr(0);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 417;
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
		this.enterRule(_localctx, 40, CWScriptParser.RULE_instantiateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(CWScriptParser.INSTANTIATE_NOW);
			this.state = 421;
			_localctx._value = this.expr(0);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 422;
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
		this.enterRule(_localctx, 42, CWScriptParser.RULE_emitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(CWScriptParser.EMIT);
			this.state = 426;
			_localctx._value = this.expr(0);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 427;
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
		this.enterRule(_localctx, 44, CWScriptParser.RULE_defn);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 430;
				this.contractDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 431;
				this.interfaceDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 432;
				this.structDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 433;
				this.tupleDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 434;
				this.unitDefn();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 435;
				this.enumDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 436;
				this.typeAliasDefn();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 437;
				this.fnDefn();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 438;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 439;
				this.execDefn();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 440;
				this.execTupleDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 441;
				this.queryDefn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 442;
				this.queryTupleDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 443;
				this.errorDefn();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 444;
				this.eventDefn();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 445;
				this.stateBlockDefn();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 446;
				this.implDefn();
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
		this.enterRule(_localctx, 46, CWScriptParser.RULE_contractDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 449;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 452;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 455;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 456;
			_localctx._name = this.ident();
			}
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 457;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 458;
				_localctx._base = this.typeExpr(0);
				}
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 461;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 462;
				_localctx._interfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 465;
			_localctx._body = this.block();
			}
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 466;
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
		this.enterRule(_localctx, 48, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 469;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 472;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 475;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 476;
			_localctx._name = this.ident();
			}
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 477;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 478;
				_localctx._baseInterfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 481;
			_localctx._body = this.block();
			}
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 482;
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
		this.enterRule(_localctx, 50, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 485;
					(_localctx as StructDefnBraceContext)._doc = this.docComment();
					}
				}

				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 488;
					(_localctx as StructDefnBraceContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 491;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 492;
				(_localctx as StructDefnBraceContext)._name = this.ident();
				}
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 493;
					(_localctx as StructDefnBraceContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 496;
				(_localctx as StructDefnBraceContext)._fields = this.braceParamList();
				}
				this.state = 498;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
				case 1:
					{
					this.state = 497;
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
				this.state = 501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 500;
					(_localctx as StructDefnParenContext)._doc = this.docComment();
					}
				}

				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 503;
					(_localctx as StructDefnParenContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 506;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 507;
				(_localctx as StructDefnParenContext)._name = this.ident();
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 508;
					(_localctx as StructDefnParenContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 511;
				(_localctx as StructDefnParenContext)._fields = this.parenParamList();
				}
				this.state = 513;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 512;
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
		this.enterRule(_localctx, 52, CWScriptParser.RULE_tupleDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 517;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 520;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 523;
			this.match(CWScriptParser.TUPLE);
			{
			this.state = 524;
			_localctx._name = this.ident();
			}
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 525;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 528;
			this.match(CWScriptParser.LPAREN);
			{
			this.state = 529;
			_localctx._elements = this.brackTypeExprList();
			}
			this.state = 530;
			this.match(CWScriptParser.RPAREN);
			this.state = 532;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 531;
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
		this.enterRule(_localctx, 54, CWScriptParser.RULE_unitDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 534;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 537;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 540;
			this.match(CWScriptParser.UNIT);
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 541;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 544;
			_localctx._name = this.ident();
			}
			this.state = 546;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 545;
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
		this.enterRule(_localctx, 56, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 548;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 551;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 554;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 555;
			_localctx._name = this.ident();
			}
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 556;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 559;
			this.match(CWScriptParser.LBRACE);
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				this.state = 560;
				_localctx._variants = this.enumVariantDefnList();
				}
			}

			this.state = 563;
			this.match(CWScriptParser.RBRACE);
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 564;
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
		this.enterRule(_localctx, 58, CWScriptParser.RULE_enumVariantDefnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 567;
			this.enumVariantDefn();
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 568;
				this.match(CWScriptParser.COMMA);
				this.state = 569;
				this.enumVariantDefn();
				}
				}
				this.state = 574;
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
		this.enterRule(_localctx, 60, CWScriptParser.RULE_enumVariantDefn);
		let _la: number;
		try {
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 575;
					(_localctx as EnumVariantStructDefnBraceContext)._doc = this.docComment();
					}
				}

				{
				this.state = 578;
				(_localctx as EnumVariantStructDefnBraceContext)._name = this.ident();
				}
				{
				this.state = 579;
				(_localctx as EnumVariantStructDefnBraceContext)._fields = this.braceParamList();
				}
				}
				break;

			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 581;
					(_localctx as EnumVariantStructDefnParenContext)._doc = this.docComment();
					}
				}

				{
				this.state = 584;
				(_localctx as EnumVariantStructDefnParenContext)._name = this.ident();
				}
				{
				this.state = 585;
				(_localctx as EnumVariantStructDefnParenContext)._fields = this.parenParamList();
				}
				}
				break;

			case 3:
				_localctx = new EnumVariantTupleDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 587;
					(_localctx as EnumVariantTupleDefnContext)._doc = this.docComment();
					}
				}

				{
				this.state = 590;
				(_localctx as EnumVariantTupleDefnContext)._name = this.ident();
				}
				this.state = 591;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 592;
				(_localctx as EnumVariantTupleDefnContext)._elements = this.brackTypeExprList();
				}
				this.state = 593;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				_localctx = new EnumVariantUnitDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 595;
					(_localctx as EnumVariantUnitDefnContext)._doc = this.docComment();
					}
				}

				{
				this.state = 598;
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
		this.enterRule(_localctx, 62, CWScriptParser.RULE_typeAliasDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 601;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 604;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 607;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 608;
			_localctx._name = this.ident();
			}
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 609;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 612;
			this.match(CWScriptParser.EQ);
			{
			this.state = 613;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 614;
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
		this.enterRule(_localctx, 64, CWScriptParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 617;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 620;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 623;
			this.match(CWScriptParser.FN);
			{
			this.state = 624;
			_localctx._name = this.ident();
			}
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 625;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 628;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 631;
			_localctx._params = this.parenParamList();
			}
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 632;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 633;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 636;
			_localctx._body = this.block();
			}
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 637;
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
		this.enterRule(_localctx, 66, CWScriptParser.RULE_instantiateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 640;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 643;
			this.match(CWScriptParser.H_INSTANTIATE);
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 644;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 647;
			_localctx._params = this.parenParamList();
			}
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 648;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 649;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 652;
			_localctx._body = this.block();
			}
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 653;
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
		this.enterRule(_localctx, 68, CWScriptParser.RULE_execDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 656;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 659;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 660;
			_localctx._name = this.ident();
			}
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 661;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 664;
			_localctx._params = this.parenParamList();
			}
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 665;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 666;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 669;
			_localctx._body = this.block();
			}
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 670;
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
		this.enterRule(_localctx, 70, CWScriptParser.RULE_execTupleDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 673;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 676;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 677;
			_localctx._name = this.ident();
			}
			this.state = 679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 678;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 681;
			_localctx._params = this.tupleParamList();
			}
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 682;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 683;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 686;
			_localctx._body = this.block();
			}
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 687;
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
		this.enterRule(_localctx, 72, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 690;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 693;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 694;
			_localctx._name = this.ident();
			}
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 695;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 698;
			_localctx._params = this.parenParamList();
			}
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 699;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 700;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 703;
			_localctx._body = this.block();
			}
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 704;
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
		this.enterRule(_localctx, 74, CWScriptParser.RULE_queryTupleDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 707;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 710;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 711;
			_localctx._name = this.ident();
			}
			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 712;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 715;
			_localctx._params = this.tupleParamList();
			}
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 716;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 717;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 720;
			_localctx._body = this.block();
			}
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 721;
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
		this.enterRule(_localctx, 76, CWScriptParser.RULE_errorDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 724;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 727;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 730;
			this.match(CWScriptParser.ERROR);
			{
			this.state = 731;
			_localctx._name = this.ident();
			}
			{
			this.state = 732;
			_localctx._params = this.parenParamList();
			}
			this.state = 734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 733;
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
		this.enterRule(_localctx, 78, CWScriptParser.RULE_eventDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 736;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 739;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 742;
			this.match(CWScriptParser.EVENT);
			{
			this.state = 743;
			_localctx._name = this.ident();
			}
			{
			this.state = 744;
			_localctx._params = this.parenParamList();
			}
			this.state = 746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 745;
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
		this.enterRule(_localctx, 80, CWScriptParser.RULE_stateBlockDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 748;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 751;
			this.match(CWScriptParser.STATE);
			this.state = 752;
			this.match(CWScriptParser.LBRACE);
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				{
				this.state = 753;
				_localctx._stateDefn = this.stateDefn();
				_localctx._stateFields.push(_localctx._stateDefn);
				}
				}
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 759;
			this.match(CWScriptParser.RBRACE);
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 760;
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
		this.enterRule(_localctx, 82, CWScriptParser.RULE_stateDefn);
		try {
			this.state = 765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.stateItemDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
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
		this.enterRule(_localctx, 84, CWScriptParser.RULE_stateItemDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 767;
				_localctx._doc = this.docComment();
				}
			}

			{
			this.state = 770;
			_localctx._name = this.ident();
			}
			this.state = 771;
			this.match(CWScriptParser.COLON);
			{
			this.state = 772;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 773;
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
		this.enterRule(_localctx, 86, CWScriptParser.RULE_stateMapDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 776;
				_localctx._doc = this.docComment();
				}
			}

			{
			this.state = 779;
			_localctx._name = this.ident();
			}
			this.state = 780;
			this.match(CWScriptParser.LBRACK);
			{
			this.state = 781;
			_localctx._indexTy = this.typeExpr(0);
			}
			this.state = 782;
			this.match(CWScriptParser.RBRACK);
			this.state = 783;
			this.match(CWScriptParser.COLON);
			{
			this.state = 784;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 785;
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
	public implDefn(): ImplDefnContext {
		let _localctx: ImplDefnContext = new ImplDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_implDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 788;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 791;
			this.match(CWScriptParser.IMPL);
			{
			this.state = 792;
			_localctx._name = this.ident();
			}
			{
			this.state = 793;
			_localctx._typeParams = this.brackTypeParamList();
			}
			{
			this.state = 794;
			_localctx._body = this.block();
			}
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 795;
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
		this.enterRule(_localctx, 90, CWScriptParser.RULE_exprStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.expr(0);
			this.state = 800;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 799;
				_localctx._semi = this.match(CWScriptParser.SEMI);
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
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 803;
				this.match(CWScriptParser.NOT);
				this.state = 804;
				this.expr(23);
				}
				break;

			case 2:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 805;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 806;
				this.expr(19);
				}
				break;

			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 807;
				this.ifExpr_();
				}
				break;

			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 808;
				this.tryCatchElseExpr_();
				}
				break;

			case 5:
				{
				_localctx = new MapExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 809;
				this.mapExpr_();
				}
				break;

			case 6:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 810;
				this.blockClosureExpr();
				}
				break;

			case 7:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 811;
				this.exprClosureExpr();
				}
				break;

			case 8:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 812;
				this.structExpr_();
				}
				break;

			case 9:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 813;
				this.tupleExpr_();
				}
				break;

			case 10:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 814;
				this.literal();
				}
				break;

			case 11:
				{
				_localctx = new ReturnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 815;
				this.returnExpr_();
				}
				break;

			case 12:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 816;
				this.failExpr_();
				}
				break;

			case 13:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 817;
				this.ident();
				}
				break;

			case 14:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 818;
				this.match(CWScriptParser.LPAREN);
				this.state = 819;
				this.expr(0);
				this.state = 820;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 888;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 886;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 824;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						{
						this.state = 825;
						(_localctx as MulExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CWScriptParser.MUL - 78)) | (1 << (CWScriptParser.DIV - 78)) | (1 << (CWScriptParser.MOD - 78)))) !== 0))) {
							(_localctx as MulExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 826;
						this.expr(23);
						}
						break;

					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 827;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						{
						this.state = 828;
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
						this.state = 829;
						this.expr(22);
						}
						break;

					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 830;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 831;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CWScriptParser.LT_EQ - 83)) | (1 << (CWScriptParser.LT - 83)) | (1 << (CWScriptParser.GT_EQ - 83)) | (1 << (CWScriptParser.GT - 83)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 832;
						this.expr(21);
						}
						break;

					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 833;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 834;
						this.match(CWScriptParser.D_QUEST);
						this.state = 835;
						this.expr(19);
						}
						break;

					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 836;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 838;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 837;
							(_localctx as InExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						this.state = 840;
						this.match(CWScriptParser.IN);
						this.state = 841;
						this.expr(18);
						}
						break;

					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 842;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						{
						this.state = 843;
						(_localctx as EqExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.D_EQ || _la === CWScriptParser.NEQ)) {
							(_localctx as EqExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 844;
						this.expr(16);
						}
						break;

					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 845;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 846;
						this.match(CWScriptParser.AND);
						this.state = 847;
						this.expr(15);
						}
						break;

					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 848;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 849;
						this.match(CWScriptParser.OR);
						this.state = 850;
						this.expr(14);
						}
						break;

					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 851;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 852;
						this.match(CWScriptParser.DOT);
						{
						this.state = 853;
						(_localctx as DotExprContext)._memberName = this.ident();
						}
						}
						break;

					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 854;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 856;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 855;
							(_localctx as CallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 859;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.LBRACK) {
							{
							this.state = 858;
							(_localctx as CallExprContext)._typeArgs = this.brackTypeExprList();
							}
						}

						this.state = 861;
						this.match(CWScriptParser.LPAREN);
						this.state = 870;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.H_LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.BoolLiteral - 88)) | (1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.PercentIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.StringLiteral - 88)) | (1 << (CWScriptParser.DecLiteral - 88)) | (1 << (CWScriptParser.IntLiteral - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
							{
							{
							this.state = 862;
							(_localctx as CallExprContext)._arg = this.arg();
							(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
							}
							this.state = 867;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 863;
								this.match(CWScriptParser.COMMA);
								this.state = 864;
								(_localctx as CallExprContext)._arg = this.arg();
								(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
								}
								}
								this.state = 869;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 872;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 873;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 874;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 875;
						(_localctx as IndexExprContext)._index = this.expr(0);
						}
						this.state = 876;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 12:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 878;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 879;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 13:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 880;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 881;
						this.match(CWScriptParser.IS);
						this.state = 883;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 882;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 885;
						(_localctx as IsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;
					}
					}
				}
				this.state = 890;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
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
		this.enterRule(_localctx, 94, CWScriptParser.RULE_ifExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.match(CWScriptParser.IF);
			{
			this.state = 892;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 893;
			_localctx._thenBody = this.blockOrExpr();
			}
			this.state = 896;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 894;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 895;
				_localctx._elseBody = this.blockOrExpr();
				}
				}
				break;
			}
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 898;
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
		this.enterRule(_localctx, 96, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 901;
			this.match(CWScriptParser.TRY);
			{
			this.state = 902;
			_localctx._body = this.block();
			}
			this.state = 906;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 903;
					_localctx._catchClause = this.catchClause();
					_localctx._catchClauses.push(_localctx._catchClause);
					}
					}
				}
				this.state = 908;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			this.state = 911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 909;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 910;
				_localctx._elseBody = this.block();
				}
				}
				break;
			}
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 913;
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
		this.enterRule(_localctx, 98, CWScriptParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this.match(CWScriptParser.CATCH);
			{
			this.state = 917;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 918;
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
	public mapEntry(): MapEntryContext {
		let _localctx: MapEntryContext = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CWScriptParser.RULE_mapEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 920;
			_localctx._key = this.expr(0);
			}
			this.state = 921;
			this.match(CWScriptParser.FAT_ARROW);
			{
			this.state = 922;
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
	public mapExpr_(): MapExpr_Context {
		let _localctx: MapExpr_Context = new MapExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 102, CWScriptParser.RULE_mapExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
			this.match(CWScriptParser.H_LBRACE);
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.H_LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.BoolLiteral - 88)) | (1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.PercentIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.StringLiteral - 88)) | (1 << (CWScriptParser.DecLiteral - 88)) | (1 << (CWScriptParser.IntLiteral - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 925;
				_localctx._mapEntry = this.mapEntry();
				_localctx._entries.push(_localctx._mapEntry);
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 926;
					this.match(CWScriptParser.COMMA);
					this.state = 927;
					_localctx._mapEntry = this.mapEntry();
					_localctx._entries.push(_localctx._mapEntry);
					}
					}
					this.state = 932;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 935;
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
	public blockClosureExpr(): BlockClosureExprContext {
		let _localctx: BlockClosureExprContext = new BlockClosureExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CWScriptParser.RULE_blockClosureExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 937;
			_localctx._params = this.barsParamList();
			}
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 938;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 941;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 942;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 945;
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
	public exprClosureExpr(): ExprClosureExprContext {
		let _localctx: ExprClosureExprContext = new ExprClosureExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CWScriptParser.RULE_exprClosureExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 947;
			_localctx._params = this.barsParamList();
			}
			this.state = 949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 948;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 951;
			_localctx._body = this.exprStmt();
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
		this.enterRule(_localctx, 108, CWScriptParser.RULE_structExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 953;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 954;
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
		this.enterRule(_localctx, 110, CWScriptParser.RULE_tupleExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.match(CWScriptParser.LBRACK);
			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.H_LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.BoolLiteral - 88)) | (1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.PercentIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.StringLiteral - 88)) | (1 << (CWScriptParser.DecLiteral - 88)) | (1 << (CWScriptParser.IntLiteral - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				{
				this.state = 957;
				_localctx._expr = this.expr(0);
				_localctx._elements.push(_localctx._expr);
				}
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 958;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 959;
					_localctx._expr = this.expr(0);
					_localctx._elements.push(_localctx._expr);
					}
					}
					}
					this.state = 964;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 967;
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
		this.enterRule(_localctx, 112, CWScriptParser.RULE_returnExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 969;
			this.match(CWScriptParser.RETURN);
			{
			this.state = 970;
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
		this.enterRule(_localctx, 114, CWScriptParser.RULE_failExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.match(CWScriptParser.FAIL);
			{
			this.state = 973;
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
		this.enterRule(_localctx, 116, CWScriptParser.RULE_literal);
		try {
			this.state = 980;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 975;
				this.stringLit();
				}
				break;
			case CWScriptParser.IntLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 976;
				this.intLit();
				}
				break;
			case CWScriptParser.DecLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 977;
				this.decLit();
				}
				break;
			case CWScriptParser.BoolLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 978;
				this.boolLit();
				}
				break;
			case CWScriptParser.NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 979;
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
		this.enterRule(_localctx, 118, CWScriptParser.RULE_stringLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
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
		this.enterRule(_localctx, 120, CWScriptParser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
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
		this.enterRule(_localctx, 122, CWScriptParser.RULE_decLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 986;
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
		this.enterRule(_localctx, 124, CWScriptParser.RULE_boolLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
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
		this.enterRule(_localctx, 126, CWScriptParser.RULE_noneLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
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
		let _startState: number = 128;
		this.enterRecursionRule(_localctx, 128, CWScriptParser.RULE_typeExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 993;
				this.match(CWScriptParser.LPAREN);
				this.state = 994;
				this.typeExpr(0);
				this.state = 995;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				{
				this.state = 997;
				(_localctx as TupleTypeExprContext)._elements = this.brackTypeExprList();
				}
				}
				break;

			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 998;
				this.match(CWScriptParser.LBRACK);
				this.state = 999;
				this.typeExpr(0);
				this.state = 1000;
				this.match(CWScriptParser.SEMI);
				{
				this.state = 1001;
				(_localctx as ArrayTypeExprContext)._size = this.intLit();
				}
				this.state = 1002;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 4:
				{
				_localctx = new MapTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1004;
				this.match(CWScriptParser.H_LBRACE);
				this.state = 1005;
				this.typeExpr(0);
				this.state = 1006;
				this.match(CWScriptParser.FAT_ARROW);
				this.state = 1007;
				this.typeExpr(0);
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 1008;
					this.match(CWScriptParser.EQ);
					this.state = 1009;
					(_localctx as MapTypeExprContext)._defaultExpr = this.expr(0);
					}
				}

				this.state = 1012;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 5:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1014;
				this.structDefn();
				}
				break;

			case 6:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1015;
				this.tupleDefn();
				}
				break;

			case 7:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1016;
				this.unitDefn();
				}
				break;

			case 8:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1017;
				this.enumDefn();
				}
				break;

			case 9:
				{
				_localctx = new TypeVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1018;
				this.typeVar();
				}
				break;

			case 10:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1019;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1031;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1029;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 1022;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						{
						this.state = 1023;
						(_localctx as ParameterizedTypeExprContext)._typeArgs = this.brackTypeExprList();
						}
						}
						break;

					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 1024;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1025;
						this.match(CWScriptParser.DOT);
						{
						this.state = 1026;
						(_localctx as MemberTypeExprContext)._memberName = this.ident();
						}
						}
						break;

					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 1027;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1028;
						this.match(CWScriptParser.QUEST);
						}
						break;
					}
					}
				}
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
		this.enterRule(_localctx, 130, CWScriptParser.RULE_typeVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 1034;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 1037;
			this.match(CWScriptParser.PercentIdent);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 132, CWScriptParser.RULE_ident);
		try {
			this.state = 1044;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.HashIdent:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.match(CWScriptParser.HashIdent);
				}
				break;
			case CWScriptParser.DollarIdent:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.match(CWScriptParser.DollarIdent);
				}
				break;
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1041;
				this.match(CWScriptParser.Ident);
				}
				break;
			case CWScriptParser.EscapedIdent:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1042;
				this.match(CWScriptParser.EscapedIdent);
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.EXPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.IMPL:
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
			case CWScriptParser.CONST:
			case CWScriptParser.STRUCT:
			case CWScriptParser.TUPLE:
			case CWScriptParser.UNIT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1043;
				this.keywordIdent();
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
		this.enterRule(_localctx, 134, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 1046;
				_localctx._doc = this.docComment();
				}
			}

			{
			this.state = 1049;
			_localctx._name = this.ident();
			}
			this.state = 1051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 1050;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 1053;
				this.match(CWScriptParser.COLON);
				{
				this.state = 1054;
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
		this.enterRule(_localctx, 136, CWScriptParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1057;
			_localctx._name = this.ident();
			}
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 1058;
				this.match(CWScriptParser.COLON);
				{
				this.state = 1059;
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
		this.enterRule(_localctx, 138, CWScriptParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1062;
			_localctx._name = this.ident();
			}
			this.state = 1063;
			this.match(CWScriptParser.EQ);
			{
			this.state = 1064;
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
		this.enterRule(_localctx, 140, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1066;
				this.expr(0);
				}
				break;

			case 2:
				{
				this.state = 1067;
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
		this.enterRule(_localctx, 142, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1070;
			this.ident();
			this.state = 1075;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1071;
				this.match(CWScriptParser.COMMA);
				this.state = 1072;
				this.ident();
				}
				}
				this.state = 1077;
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
		this.enterRule(_localctx, 144, CWScriptParser.RULE_parenParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.match(CWScriptParser.LPAREN);
			this.state = 1087;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				this.state = 1079;
				this.param();
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1080;
					this.match(CWScriptParser.COMMA);
					this.state = 1081;
					this.param();
					}
					}
					this.state = 1086;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1089;
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
	public barsParamList(): BarsParamListContext {
		let _localctx: BarsParamListContext = new BarsParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CWScriptParser.RULE_barsParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.match(CWScriptParser.BAR);
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				this.state = 1092;
				this.param();
				this.state = 1097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1093;
					this.match(CWScriptParser.COMMA);
					this.state = 1094;
					this.param();
					}
					}
					this.state = 1099;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1102;
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
	public tupleParamList(): TupleParamListContext {
		let _localctx: TupleParamListContext = new TupleParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CWScriptParser.RULE_tupleParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.match(CWScriptParser.LPAREN);
			this.state = 1105;
			this.match(CWScriptParser.LBRACK);
			this.state = 1114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				this.state = 1106;
				this.param();
				this.state = 1111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1107;
					this.match(CWScriptParser.COMMA);
					this.state = 1108;
					this.param();
					}
					}
					this.state = 1113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1116;
			this.match(CWScriptParser.RBRACK);
			this.state = 1117;
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
		this.enterRule(_localctx, 150, CWScriptParser.RULE_braceParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			this.match(CWScriptParser.LBRACE);
			this.state = 1128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				this.state = 1120;
				this.param();
				this.state = 1125;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1121;
						this.match(CWScriptParser.COMMA);
						this.state = 1122;
						this.param();
						}
						}
					}
					this.state = 1127;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				}
				}
			}

			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 1130;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 1133;
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
	public brackTypeParamList(): BrackTypeParamListContext {
		let _localctx: BrackTypeParamListContext = new BrackTypeParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CWScriptParser.RULE_brackTypeParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this.match(CWScriptParser.LBRACK);
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CWScriptParser.PercentIdent - 91)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 91)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 91)))) !== 0)) {
				{
				this.state = 1136;
				this.typeVar();
				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1137;
					this.match(CWScriptParser.COMMA);
					this.state = 1138;
					this.typeVar();
					}
					}
					this.state = 1143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1146;
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
		this.enterRule(_localctx, 154, CWScriptParser.RULE_brackTypeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1148;
			this.match(CWScriptParser.LBRACK);
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.H_LBRACE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.PercentIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 89)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 89)))) !== 0)) {
				{
				this.state = 1149;
				this.typeExpr(0);
				this.state = 1154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1150;
					this.match(CWScriptParser.COMMA);
					this.state = 1151;
					this.typeExpr(0);
					}
					}
					this.state = 1156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1159;
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
		this.enterRule(_localctx, 156, CWScriptParser.RULE_braceFieldList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1161;
			this.match(CWScriptParser.LBRACE);
			this.state = 1170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CWScriptParser.HashIdent - 89)) | (1 << (CWScriptParser.DollarIdent - 89)) | (1 << (CWScriptParser.EscapedIdent - 89)) | (1 << (CWScriptParser.Ident - 89)))) !== 0)) {
				{
				this.state = 1162;
				this.field();
				this.state = 1167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1163;
						this.match(CWScriptParser.COMMA);
						this.state = 1164;
						this.field();
						}
						}
					}
					this.state = 1169;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				}
				}
			}

			this.state = 1173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 1172;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 1175;
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
		this.enterRule(_localctx, 158, CWScriptParser.RULE_typeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1177;
			this.typeExpr(0);
			this.state = 1182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1178;
				this.match(CWScriptParser.COMMA);
				this.state = 1179;
				this.typeExpr(0);
				}
				}
				this.state = 1184;
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
		this.enterRule(_localctx, 160, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this.match(CWScriptParser.LBRACE);
			this.state = 1189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.H_LBRACE - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.BoolLiteral - 88)) | (1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.PercentIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.StringLiteral - 88)) | (1 << (CWScriptParser.DecLiteral - 88)) | (1 << (CWScriptParser.IntLiteral - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				{
				this.state = 1186;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1192;
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
		this.enterRule(_localctx, 162, CWScriptParser.RULE_blockOrExpr);
		try {
			this.state = 1196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1194;
				this.block();
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.EXPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.IMPL:
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
			case CWScriptParser.CONST:
			case CWScriptParser.FAIL:
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.TUPLE:
			case CWScriptParser.UNIT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.LPAREN:
			case CWScriptParser.LBRACK:
			case CWScriptParser.H_LBRACE:
			case CWScriptParser.BAR:
			case CWScriptParser.BoolLiteral:
			case CWScriptParser.HashIdent:
			case CWScriptParser.DollarIdent:
			case CWScriptParser.PercentIdent:
			case CWScriptParser.EscapedIdent:
			case CWScriptParser.Ident:
			case CWScriptParser.StringLiteral:
			case CWScriptParser.DecLiteral:
			case CWScriptParser.IntLiteral:
			case CWScriptParser.DOC_LINE_COMMENT:
			case CWScriptParser.DOC_BLOCK_COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1195;
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
	public keywordIdent(): KeywordIdentContext {
		let _localctx: KeywordIdentContext = new KeywordIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CWScriptParser.RULE_keywordIdent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1198;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0))) {
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
		case 46:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 64:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 22);

		case 1:
			return this.precpred(this._ctx, 21);

		case 2:
			return this.precpred(this._ctx, 20);

		case 3:
			return this.precpred(this._ctx, 18);

		case 4:
			return this.precpred(this._ctx, 17);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 27);

		case 9:
			return this.precpred(this._ctx, 26);

		case 10:
			return this.precpred(this._ctx, 25);

		case 11:
			return this.precpred(this._ctx, 24);

		case 12:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 12);

		case 14:
			return this.precpred(this._ctx, 11);

		case 15:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03i\u04B3\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x07\x02\xAA\n\x02" +
		"\f\x02\x0E\x02\xAD\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xC4\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xCB\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\xD0\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\xD5\n\x07\x03" +
		"\b\x03\b\x03\b\x07\b\xDA\n\b\f\b\x0E\b\xDD\v\b\x03\t\x03\t\x03\t\x03\t" +
		"\x07\t\xE3\n\t\f\t\x0E\t\xE6\v\t\x05\t\xE8\n\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x07\n\xF0\n\n\f\n\x0E\n\xF3\v\n\x05\n\xF5\n\n\x03\n\x05\n" +
		"\xF8\n\n\x03\n\x03\n\x03\v\x05\v\xFD\n\v\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\u0103\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0109\n\v\x03\v\x05\v\u010C\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0112\n\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u0118\n\v\x03\v\x05\v\u011B\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0121" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0127\n\v\x05\v\u0129\n\v\x03\f\x05" +
		"\f\u012C\n\f\x03\f\x05\f\u012F\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0135" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u013B\n\f\x03\f\x05\f\u013E\n\f\x03" +
		"\f\x05\f\u0141\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0147\n\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\u014D\n\f\x03\f\x05\f\u0150\n\f\x03\f\x05\f\u0153\n" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0159\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u015F\n\f\x05\f\u0161\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\u0167\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u016F\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0178\n\x0F\x03" +
		"\x10\x03\x10\x05\x10\u017C\n\x10\x03\x11\x03\x11\x05\x11\u0180\n\x11\x03" +
		"\x12\x03\x12\x05\x12\u0184\n\x12\x03\x13\x03\x13\x05\x13\u0188\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0190\n\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0197\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u019E\n\x14\x05\x14\u01A0\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u01A5\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01AA" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\u01AF\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01C2\n\x18\x03\x19" +
		"\x05\x19\u01C5\n\x19\x03\x19\x05\x19\u01C8\n\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u01CE\n\x19\x03\x19\x03\x19\x05\x19\u01D2\n\x19\x03\x19" +
		"\x03\x19\x05\x19\u01D6\n\x19\x03\x1A\x05\x1A\u01D9\n\x1A\x03\x1A\x05\x1A" +
		"\u01DC\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01E2\n\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u01E6\n\x1A\x03\x1B\x05\x1B\u01E9\n\x1B\x03\x1B\x05\x1B" +
		"\u01EC\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01F1\n\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u01F5\n\x1B\x03\x1B\x05\x1B\u01F8\n\x1B\x03\x1B\x05\x1B\u01FB" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0200\n\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u0204\n\x1B\x05\x1B\u0206\n\x1B\x03\x1C\x05\x1C\u0209\n\x1C\x03\x1C" +
		"\x05\x1C\u020C\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0211\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0217\n\x1C\x03\x1D\x05\x1D\u021A\n\x1D" +
		"\x03\x1D\x05\x1D\u021D\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0221\n\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u0225\n\x1D\x03\x1E\x05\x1E\u0228\n\x1E\x03\x1E\x05\x1E" +
		"\u022B\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0230\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u0234\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0238\n\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x07\x1F\u023D\n\x1F\f\x1F\x0E\x1F\u0240\v\x1F\x03 \x05 \u0243" +
		"\n \x03 \x03 \x03 \x03 \x05 \u0249\n \x03 \x03 \x03 \x03 \x05 \u024F\n" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0257\n \x03 \x05 \u025A\n \x03!" +
		"\x05!\u025D\n!\x03!\x05!\u0260\n!\x03!\x03!\x03!\x05!\u0265\n!\x03!\x03" +
		"!\x03!\x05!\u026A\n!\x03\"\x05\"\u026D\n\"\x03\"\x05\"\u0270\n\"\x03\"" +
		"\x03\"\x03\"\x05\"\u0275\n\"\x03\"\x05\"\u0278\n\"\x03\"\x03\"\x03\"\x05" +
		"\"\u027D\n\"\x03\"\x03\"\x05\"\u0281\n\"\x03#\x05#\u0284\n#\x03#\x03#" +
		"\x05#\u0288\n#\x03#\x03#\x03#\x05#\u028D\n#\x03#\x03#\x05#\u0291\n#\x03" +
		"$\x05$\u0294\n$\x03$\x03$\x03$\x05$\u0299\n$\x03$\x03$\x03$\x05$\u029E" +
		"\n$\x03$\x03$\x05$\u02A2\n$\x03%\x05%\u02A5\n%\x03%\x03%\x03%\x05%\u02AA" +
		"\n%\x03%\x03%\x03%\x05%\u02AF\n%\x03%\x03%\x05%\u02B3\n%\x03&\x05&\u02B6" +
		"\n&\x03&\x03&\x03&\x05&\u02BB\n&\x03&\x03&\x03&\x05&\u02C0\n&\x03&\x03" +
		"&\x05&\u02C4\n&\x03\'\x05\'\u02C7\n\'\x03\'\x03\'\x03\'\x05\'\u02CC\n" +
		"\'\x03\'\x03\'\x03\'\x05\'\u02D1\n\'\x03\'\x03\'\x05\'\u02D5\n\'\x03(" +
		"\x05(\u02D8\n(\x03(\x05(\u02DB\n(\x03(\x03(\x03(\x03(\x05(\u02E1\n(\x03" +
		")\x05)\u02E4\n)\x03)\x05)\u02E7\n)\x03)\x03)\x03)\x03)\x05)\u02ED\n)\x03" +
		"*\x05*\u02F0\n*\x03*\x03*\x03*\x07*\u02F5\n*\f*\x0E*\u02F8\v*\x03*\x03" +
		"*\x05*\u02FC\n*\x03+\x03+\x05+\u0300\n+\x03,\x05,\u0303\n,\x03,\x03,\x03" +
		",\x03,\x05,\u0309\n,\x03-\x05-\u030C\n-\x03-\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x05-\u0315\n-\x03.\x05.\u0318\n.\x03.\x03.\x03.\x03.\x03.\x05.\u031F" +
		"\n.\x03/\x03/\x05/\u0323\n/\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0339\n" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x050\u0349\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x050\u035B\n0\x030\x050\u035E\n0\x030\x030" +
		"\x030\x030\x070\u0364\n0\f0\x0E0\u0367\v0\x050\u0369\n0\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0376\n0\x030\x070\u0379" +
		"\n0\f0\x0E0\u037C\v0\x031\x031\x031\x031\x031\x051\u0383\n1\x031\x051" +
		"\u0386\n1\x032\x032\x032\x072\u038B\n2\f2\x0E2\u038E\v2\x032\x032\x05" +
		"2\u0392\n2\x032\x052\u0395\n2\x033\x033\x033\x033\x034\x034\x034\x034" +
		"\x035\x035\x035\x035\x075\u03A3\n5\f5\x0E5\u03A6\v5\x055\u03A8\n5\x03" +
		"5\x035\x036\x036\x056\u03AE\n6\x036\x036\x056\u03B2\n6\x036\x036\x037" +
		"\x037\x057\u03B8\n7\x037\x037\x038\x038\x038\x039\x039\x039\x039\x079" +
		"\u03C3\n9\f9\x0E9\u03C6\v9\x059\u03C8\n9\x039\x039\x03:\x03:\x03:\x03" +
		";\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x05<\u03D7\n<\x03=\x03=\x03>\x03" +
		">\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u03F5\nB\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u03FF\nB\x03B\x03B\x03B\x03" +
		"B\x03B\x03B\x03B\x07B\u0408\nB\fB\x0EB\u040B\vB\x03C\x05C\u040E\nC\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x03D\x05D\u0417\nD\x03E\x05E\u041A\nE\x03E" +
		"\x03E\x05E\u041E\nE\x03E\x03E\x05E\u0422\nE\x03F\x03F\x03F\x05F\u0427" +
		"\nF\x03G\x03G\x03G\x03G\x03H\x03H\x05H\u042F\nH\x03I\x03I\x03I\x07I\u0434" +
		"\nI\fI\x0EI\u0437\vI\x03J\x03J\x03J\x03J\x07J\u043D\nJ\fJ\x0EJ\u0440\v" +
		"J\x05J\u0442\nJ\x03J\x03J\x03K\x03K\x03K\x03K\x07K\u044A\nK\fK\x0EK\u044D" +
		"\vK\x05K\u044F\nK\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x07L\u0458\nL\fL" +
		"\x0EL\u045B\vL\x05L\u045D\nL\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x07M\u0466" +
		"\nM\fM\x0EM\u0469\vM\x05M\u046B\nM\x03M\x05M\u046E\nM\x03M\x03M\x03N\x03" +
		"N\x03N\x03N\x07N\u0476\nN\fN\x0EN\u0479\vN\x05N\u047B\nN\x03N\x03N\x03" +
		"O\x03O\x03O\x03O\x07O\u0483\nO\fO\x0EO\u0486\vO\x05O\u0488\nO\x03O\x03" +
		"O\x03P\x03P\x03P\x03P\x07P\u0490\nP\fP\x0EP\u0493\vP\x05P\u0495\nP\x03" +
		"P\x05P\u0498\nP\x03P\x03P\x03Q\x03Q\x03Q\x07Q\u049F\nQ\fQ\x0EQ\u04A2\v" +
		"Q\x03R\x03R\x07R\u04A6\nR\fR\x0ER\u04A9\vR\x03R\x03R\x03S\x03S\x05S\u04AF" +
		"\nS\x03T\x03T\x03T\x02\x02\x04^\x82U\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\x02\t\x03\x02" +
		"ef\b\x02HHKKMMOOQQSS\x05\x02PPRRTT\x04\x02LLNN\x03\x02UX\x03\x02IJ\x07" +
		"\x02\x03\v\x11\x1A\x1E\x1E \'*.\x02\u0562\x02\xAB\x03\x02\x02\x02\x04" +
		"\xB0\x03\x02\x02\x02\x06\xC3\x03\x02\x02\x02\b\xC5\x03\x02\x02\x02\n\xCC" +
		"\x03\x02\x02\x02\f\xD1\x03\x02\x02\x02\x0E\xD6\x03\x02\x02\x02\x10\xDE" +
		"\x03\x02\x02\x02\x12\xEB\x03\x02\x02\x02\x14\u0128\x03\x02\x02\x02\x16" +
		"\u0160\x03\x02\x02\x02\x18\u0162\x03\x02\x02\x02\x1A\u0168\x03\x02\x02" +
		"\x02\x1C\u0170\x03\x02\x02\x02\x1E\u0179\x03\x02\x02\x02 \u017D\x03\x02" +
		"\x02\x02\"\u0181\x03\x02\x02\x02$\u0185\x03\x02\x02\x02&\u019F\x03\x02" +
		"\x02\x02(\u01A1\x03\x02\x02\x02*\u01A6\x03\x02\x02\x02,\u01AB\x03\x02" +
		"\x02\x02.\u01C1\x03\x02\x02\x020\u01C4\x03\x02\x02\x022\u01D8\x03\x02" +
		"\x02\x024\u0205\x03\x02\x02\x026\u0208\x03\x02\x02\x028\u0219\x03\x02" +
		"\x02\x02:\u0227\x03\x02\x02\x02<\u0239\x03\x02\x02\x02>\u0259\x03\x02" +
		"\x02\x02@\u025C\x03\x02\x02\x02B\u026C\x03\x02\x02\x02D\u0283\x03\x02" +
		"\x02\x02F\u0293\x03\x02\x02\x02H\u02A4\x03\x02\x02\x02J\u02B5\x03\x02" +
		"\x02\x02L\u02C6\x03\x02\x02\x02N\u02D7\x03\x02\x02\x02P\u02E3\x03\x02" +
		"\x02\x02R\u02EF\x03\x02\x02\x02T\u02FF\x03\x02\x02\x02V\u0302\x03\x02" +
		"\x02\x02X\u030B\x03\x02\x02\x02Z\u0317\x03\x02\x02\x02\\\u0320\x03\x02" +
		"\x02\x02^\u0338\x03\x02\x02\x02`\u037D\x03\x02\x02\x02b\u0387\x03\x02" +
		"\x02\x02d\u0396\x03\x02\x02\x02f\u039A\x03\x02\x02\x02h\u039E\x03\x02" +
		"\x02\x02j\u03AB\x03\x02\x02\x02l\u03B5\x03\x02\x02\x02n\u03BB\x03\x02" +
		"\x02\x02p\u03BE\x03\x02\x02\x02r\u03CB\x03\x02\x02\x02t\u03CE\x03\x02" +
		"\x02\x02v\u03D6\x03\x02\x02\x02x\u03D8\x03\x02\x02\x02z\u03DA\x03\x02" +
		"\x02\x02|\u03DC\x03\x02\x02\x02~\u03DE\x03\x02\x02\x02\x80\u03E0\x03\x02" +
		"\x02\x02\x82\u03FE\x03\x02\x02\x02\x84\u040D\x03\x02\x02\x02\x86\u0416" +
		"\x03\x02\x02\x02\x88\u0419\x03\x02\x02\x02\x8A\u0423\x03\x02\x02\x02\x8C" +
		"\u0428\x03\x02\x02\x02\x8E\u042E\x03\x02\x02\x02\x90\u0430\x03\x02\x02" +
		"\x02\x92\u0438\x03\x02\x02\x02\x94\u0445\x03\x02\x02\x02\x96\u0452\x03" +
		"\x02\x02\x02\x98\u0461\x03\x02\x02\x02\x9A\u0471\x03\x02\x02\x02\x9C\u047E" +
		"\x03\x02\x02\x02\x9E\u048B\x03\x02\x02\x02\xA0\u049B\x03\x02\x02\x02\xA2" +
		"\u04A3\x03\x02\x02\x02\xA4\u04AE\x03\x02\x02\x02\xA6\u04B0\x03\x02\x02" +
		"\x02\xA8\xAA\x05\x06\x04\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03\x02\x02" +
		"\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02" +
		"\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x07\x02\x02\x03\xAF\x03\x03\x02\x02" +
		"\x02\xB0\xB1\t\x02\x02\x02\xB1\x05\x03\x02\x02\x02\xB2\xC4\x05\b\x05\x02" +
		"\xB3\xC4\x05\n\x06\x02\xB4\xC4\x05.\x18\x02\xB5\xC4\x05\x14\v\x02\xB6" +
		"\xC4\x05\x16\f\x02\xB7\xC4\x05\x18\r\x02\xB8\xC4\x05\x1A\x0E\x02\xB9\xC4" +
		"\x05\x1C\x0F\x02\xBA\xC4\x05 \x11\x02\xBB\xC4\x05\x1E\x10\x02\xBC\xC4" +
		"\x05&\x14\x02\xBD\xC4\x05(\x15\x02\xBE\xC4\x05*\x16\x02\xBF\xC4\x05,\x17" +
		"\x02\xC0\xC4\x05$\x13\x02\xC1\xC4\x05\"\x12\x02\xC2\xC4\x05\\/\x02\xC3" +
		"\xB2\x03\x02\x02\x02\xC3\xB3\x03\x02\x02\x02\xC3\xB4\x03\x02\x02\x02\xC3" +
		"\xB5\x03\x02\x02\x02\xC3\xB6\x03\x02\x02\x02\xC3\xB7\x03\x02\x02\x02\xC3" +
		"\xB8\x03\x02\x02\x02\xC3\xB9\x03\x02\x02\x02\xC3\xBA\x03\x02\x02\x02\xC3" +
		"\xBB\x03\x02\x02\x02\xC3\xBC\x03\x02\x02\x02\xC3\xBD\x03\x02\x02\x02\xC3" +
		"\xBE\x03\x02\x02\x02\xC3\xBF\x03\x02\x02\x02\xC3\xC0\x03\x02\x02\x02\xC3" +
		"\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4\x07\x03\x02\x02\x02\xC5" +
		"\xC6\x07\x05\x02\x02\xC6\xC7\x05\x12\n\x02\xC7\xC8\x07\x18\x02\x02\xC8" +
		"\xCA\x05x=\x02\xC9\xCB\x07>\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03" +
		"\x02\x02\x02\xCB\t\x03\x02\x02\x02\xCC\xCD\x07\x06\x02\x02\xCD\xCF\x05" +
		"\x9EP\x02\xCE\xD0\x07>\x02\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02" +
		"\x02\x02\xD0\v\x03\x02\x02\x02\xD1\xD4\x05\x86D\x02\xD2\xD3\x070\x02\x02" +
		"\xD3\xD5\x05\x86D\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02" +
		"\xD5\r\x03\x02\x02\x02\xD6\xDB\x05\f\x07\x02\xD7\xD8\x07:\x02\x02\xD8" +
		"\xDA\x05\f\x07\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x0F\x03\x02\x02\x02\xDD" +
		"\xDB\x03\x02\x02\x02\xDE\xE7\x073\x02\x02\xDF\xE4\x05\x86D\x02\xE0\xE1" +
		"\x07:\x02\x02\xE1\xE3\x05\x86D\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x03" +
		"\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE8\x03" +
		"\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE8\x03" +
		"\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x074\x02\x02\xEA\x11\x03" +
		"\x02\x02\x02\xEB\xF4\x076\x02\x02\xEC\xF1\x05\f\x07\x02\xED\xEE\x07:\x02" +
		"\x02\xEE\xF0\x05\f\x07\x02\xEF\xED\x03\x02\x02\x02\xF0\xF3\x03\x02\x02" +
		"\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF5\x03\x02\x02" +
		"\x02\xF3\xF1\x03\x02\x02\x02\xF4\xEC\x03\x02\x02\x02\xF4\xF5\x03\x02\x02" +
		"\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF8\x07:\x02\x02\xF7\xF6\x03\x02\x02" +
		"\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x077\x02" +
		"\x02\xFA\x13\x03\x02\x02\x02\xFB\xFD\x05\x04\x03\x02\xFC\xFB\x03\x02\x02" +
		"\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x07&\x02" +
		"\x02\xFF\u0102\x05\x86D\x02\u0100\u0101\x07?\x02\x02\u0101\u0103\x05\x82" +
		"B\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104" +
		"\x03\x02\x02\x02\u0104\u0105\x07H\x02\x02\u0105\u0106\x05^0\x02\u0106" +
		"\u0108\x03\x02\x02\x02\u0107\u0109\x07>\x02\x02\u0108\u0107\x03\x02\x02" +
		"\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0129\x03\x02\x02\x02\u010A\u010C" +
		"\x05\x04\x03\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02" +
		"\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x07&\x02\x02\u010E\u0111\x05" +
		"\x10\t\x02\u010F\u0110\x07?\x02\x02\u0110\u0112\x05\x82B\x02\u0111\u010F" +
		"\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02" +
		"\u0113\u0114\x07H\x02\x02\u0114\u0115\x05^0\x02\u0115\u0117\x03\x02\x02" +
		"\x02\u0116\u0118\x07>\x02\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118" +
		"\x03\x02\x02\x02\u0118\u0129\x03\x02\x02\x02\u0119\u011B\x05\x04\x03\x02" +
		"\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u011D\x07&\x02\x02\u011D\u0120\x05\x12\n\x02\u011E" +
		"\u011F\x07?\x02\x02\u011F\u0121\x05\x82B\x02\u0120\u011E\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x07" +
		"H\x02\x02\u0123\u0124\x05^0\x02\u0124\u0126\x03\x02\x02\x02\u0125\u0127" +
		"\x07>\x02\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02" +
		"\u0127\u0129\x03\x02\x02\x02\u0128\xFC\x03\x02\x02\x02\u0128\u010B\x03" +
		"\x02\x02\x02\u0128\u011A\x03\x02\x02\x02\u0129\x15\x03\x02\x02\x02\u012A" +
		"\u012C\x05\x04\x03\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u012F\x07\x06\x02\x02\u012E" +
		"\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x03\x02" +
		"\x02\x02\u0130\u0131\x07\'\x02\x02\u0131\u0134\x05\x86D\x02\u0132\u0133" +
		"\x07?\x02\x02\u0133\u0135\x05\x82B\x02\u0134\u0132\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07H\x02" +
		"\x02\u0137\u0138\x05^0\x02\u0138\u013A\x03\x02\x02\x02\u0139\u013B\x07" +
		">\x02\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"\u0161\x03\x02\x02\x02\u013C\u013E\x05\x04\x03\x02\u013D\u013C\x03\x02" +
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F" +
		"\u0141\x07\x06\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02" +
		"\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x07\'\x02\x02\u0143\u0146" +
		"\x05\x10\t\x02\u0144\u0145\x07?\x02\x02\u0145\u0147\x05\x82B\x02\u0146" +
		"\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u0149\x07H\x02\x02\u0149\u014A\x05^0\x02\u014A\u014C\x03" +
		"\x02\x02\x02\u014B\u014D\x07>\x02\x02\u014C\u014B\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D\u0161\x03\x02\x02\x02\u014E\u0150\x05\x04" +
		"\x03\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"\u0152\x03\x02\x02\x02\u0151\u0153\x07\x06\x02\x02\u0152\u0151\x03\x02" +
		"\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
		"\u0155\x07\'\x02\x02\u0155\u0158\x05\x12\n\x02\u0156\u0157\x07?\x02\x02" +
		"\u0157\u0159\x05\x82B\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03" +
		"\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x07H\x02\x02\u015B" +
		"\u015C\x05^0\x02\u015C\u015E\x03\x02\x02\x02\u015D\u015F\x07>\x02\x02" +
		"\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0161\x03" +
		"\x02\x02\x02\u0160\u012B\x03\x02\x02\x02\u0160\u013D\x03\x02\x02\x02\u0160" +
		"\u014F\x03\x02\x02\x02\u0161\x17\x03\x02\x02\x02\u0162\u0163\x05\x86D" +
		"\x02\u0163\u0164\t\x03\x02\x02\u0164\u0166\x05^0\x02\u0165\u0167\x07>" +
		"\x02\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167" +
		"\x19\x03\x02\x02\x02\u0168\u0169\x05^0\x02\u0169\u016A\x079\x02\x02\u016A" +
		"\u016B\x05\x86D\x02\u016B\u016C\t\x03\x02\x02\u016C\u016E\x05^0\x02\u016D" +
		"\u016F\x07>\x02\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02" +
		"\x02\u016F\x1B\x03\x02\x02\x02\u0170\u0171\x05^0\x02\u0171\u0172\x073" +
		"\x02\x02\u0172\u0173\x05^0\x02\u0173\u0174\x074\x02\x02\u0174\u0175\t" +
		"\x03\x02\x02\u0175\u0177\x05^0\x02\u0176\u0178\x07>\x02\x02\u0177\u0176" +
		"\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\x1D\x03\x02\x02\x02" +
		"\u0179\u017B\x05b2\x02\u017A\u017C\x07>\x02\x02\u017B\u017A\x03\x02\x02" +
		"\x02\u017B\u017C\x03\x02\x02\x02\u017C\x1F\x03\x02\x02\x02\u017D\u017F" +
		"\x05`1\x02\u017E\u0180\x07>\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F" +
		"\u0180\x03\x02\x02\x02\u0180!\x03\x02\x02\x02\u0181\u0183\x05r:\x02\u0182" +
		"\u0184\x07>\x02\x02\u0183\u0182\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184#\x03\x02\x02\x02\u0185\u0187" +
		"\x05t;\x02\u0186\u0188\x07>\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187" +
		"\u0188\x03\x02\x02\x02\u0188%\x03\x02\x02\x02\u0189\u018A\x07\x16\x02" +
		"\x02\u018A\u018B\x05\x86D\x02\u018B\u018C\x07\x17\x02\x02\u018C\u018D" +
		"\x05^0\x02\u018D\u018F\x05\xA2R\x02\u018E\u0190\x07>\x02\x02\u018F\u018E" +
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u01A0\x03\x02\x02\x02" +
		"\u0191\u0192\x07\x16\x02\x02\u0192\u0193\x05\x10\t\x02\u0193\u0194\x05" +
		"^0\x02\u0194\u0196\x05\xA2R\x02\u0195\u0197\x07>\x02\x02\u0196\u0195\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u01A0\x03\x02\x02\x02\u0198" +
		"\u0199\x07\x16\x02\x02\u0199\u019A\x05\x12\n\x02\u019A\u019B\x05^0\x02" +
		"\u019B\u019D\x05\xA2R\x02\u019C\u019E\x07>\x02\x02\u019D\u019C\x03\x02" +
		"\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A0\x03\x02\x02\x02\u019F" +
		"\u0189\x03\x02\x02\x02\u019F\u0191\x03\x02\x02\x02\u019F\u0198\x03\x02" +
		"\x02\x02\u01A0\'\x03\x02\x02\x02\u01A1\u01A2\x07\x0E\x02\x02\u01A2\u01A4" +
		"\x05^0\x02\u01A3\u01A5\x07>\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4" +
		"\u01A5\x03\x02\x02\x02\u01A5)\x03\x02\x02\x02\u01A6\u01A7\x07\r\x02\x02" +
		"\u01A7\u01A9\x05^0\x02\u01A8\u01AA\x07>\x02\x02\u01A9\u01A8\x03\x02\x02" +
		"\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA+\x03\x02\x02\x02\u01AB\u01AC\x07" +
		"/\x02\x02\u01AC\u01AE\x05^0\x02\u01AD\u01AF\x07>\x02\x02\u01AE\u01AD\x03" +
		"\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF-\x03\x02\x02\x02\u01B0" +
		"\u01C2\x050\x19\x02\u01B1\u01C2\x052\x1A\x02\u01B2\u01C2\x054\x1B\x02" +
		"\u01B3\u01C2\x056\x1C\x02\u01B4\u01C2\x058\x1D\x02\u01B5\u01C2\x05:\x1E" +
		"\x02\u01B6\u01C2\x05@!\x02\u01B7\u01C2\x05B\"\x02\u01B8\u01C2\x05D#\x02" +
		"\u01B9\u01C2\x05F$\x02\u01BA\u01C2\x05H%\x02\u01BB\u01C2\x05J&\x02\u01BC" +
		"\u01C2\x05L\'\x02\u01BD\u01C2\x05N(\x02\u01BE\u01C2\x05P)\x02\u01BF\u01C2" +
		"\x05R*\x02\u01C0\u01C2\x05Z.\x02\u01C1\u01B0\x03\x02\x02\x02\u01C1\u01B1" +
		"\x03\x02\x02\x02\u01C1\u01B2\x03\x02\x02\x02\u01C1\u01B3\x03\x02\x02\x02" +
		"\u01C1\u01B4\x03\x02\x02\x02\u01C1\u01B5\x03\x02\x02\x02\u01C1\u01B6\x03" +
		"\x02\x02\x02\u01C1\u01B7\x03\x02\x02\x02\u01C1\u01B8\x03\x02\x02\x02\u01C1" +
		"\u01B9\x03\x02\x02\x02\u01C1\u01BA\x03\x02\x02\x02\u01C1\u01BB\x03\x02" +
		"\x02\x02\u01C1\u01BC\x03\x02\x02\x02\u01C1\u01BD\x03\x02\x02\x02\u01C1" +
		"\u01BE\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C0\x03\x02" +
		"\x02\x02\u01C2/\x03\x02\x02\x02\u01C3\u01C5\x05\x04\x03\x02\u01C4\u01C3" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C7\x03\x02\x02\x02" +
		"\u01C6\u01C8\x07\x06\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03" +
		"\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07\x03\x02\x02\u01CA" +
		"\u01CD\x05\x86D\x02\u01CB\u01CC\x07\t\x02\x02\u01CC\u01CE\x05\x82B\x02" +
		"\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D1\x03" +
		"\x02\x02\x02\u01CF\u01D0\x07\x07\x02\x02\u01D0\u01D2\x05\xA0Q\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02" +
		"\x02\x02\u01D3\u01D5\x05\xA2R\x02\u01D4\u01D6\x07>\x02\x02\u01D5\u01D4" +
		"\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D61\x03\x02\x02\x02\u01D7" +
		"\u01D9\x05\x04\x03\x02\u01D8\u01D7\x03\x02\x02\x02\u01D8\u01D9\x03\x02" +
		"\x02\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01DC\x07\x06\x02\x02\u01DB" +
		"\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
		"\x02\x02\u01DD\u01DE\x07\x04\x02\x02\u01DE\u01E1\x05\x86D\x02\u01DF\u01E0" +
		"\x07\t\x02\x02\u01E0\u01E2\x05\xA0Q\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1" +
		"\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5\x05\xA2" +
		"R\x02\u01E4\u01E6\x07>\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6" +
		"\x03\x02\x02\x02\u01E63\x03\x02\x02\x02\u01E7\u01E9\x05\x04\x03\x02\u01E8" +
		"\u01E7\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EB\x03\x02" +
		"\x02\x02\u01EA\u01EC\x07\x06\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EB" +
		"\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x07*\x02" +
		"\x02\u01EE\u01F0\x05\x86D\x02\u01EF\u01F1\x05\x9AN\x02\u01F0\u01EF\x03" +
		"\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"\u01F4\x05\x98M\x02\u01F3\u01F5\x07>\x02\x02\u01F4\u01F3\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u0206\x03\x02\x02\x02\u01F6\u01F8\x05" +
		"\x04\x03\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
		"\u01FA\x03\x02\x02\x02\u01F9\u01FB\x07\x06\x02\x02\u01FA\u01F9\x03\x02" +
		"\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
		"\u01FD\x07*\x02\x02\u01FD\u01FF\x05\x86D\x02\u01FE\u0200\x05\x9AN\x02" +
		"\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0201\x03" +
		"\x02\x02\x02\u0201\u0203\x05\x92J\x02\u0202\u0204\x07>\x02\x02\u0203\u0202" +
		"\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0206\x03\x02\x02\x02" +
		"\u0205\u01E8\x03\x02\x02\x02\u0205\u01F7\x03\x02\x02\x02\u02065\x03\x02" +
		"\x02\x02\u0207\u0209\x05\x04\x03\x02\u0208\u0207\x03\x02\x02\x02\u0208" +
		"\u0209\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u020C\x07\x06" +
		"\x02\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C" +
		"\u020D\x03\x02\x02\x02\u020D\u020E\x07+\x02\x02\u020E\u0210\x05\x86D\x02" +
		"\u020F\u0211\x05\x9AN\x02\u0210\u020F\x03\x02\x02\x02\u0210\u0211\x03" +
		"\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x071\x02\x02\u0213" +
		"\u0214\x05\x9CO\x02\u0214\u0216\x072\x02\x02\u0215\u0217\x07>\x02\x02" +
		"\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u02177\x03\x02" +
		"\x02\x02\u0218\u021A\x05\x04\x03\x02\u0219\u0218\x03\x02\x02\x02\u0219" +
		"\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u021D\x07\x06" +
		"\x02\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
		"\u021E\x03\x02\x02\x02\u021E\u0220\x07,\x02\x02\u021F\u0221\x05\x9AN\x02" +
		"\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x03" +
		"\x02\x02\x02\u0222\u0224\x05\x86D\x02\u0223\u0225\x07>\x02\x02\u0224\u0223" +
		"\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u02259\x03\x02\x02\x02\u0226" +
		"\u0228\x05\x04\x03\x02\u0227\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02" +
		"\x02\x02\u0228\u022A\x03\x02\x02\x02\u0229\u022B\x07\x06\x02\x02\u022A" +
		"\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x03\x02" +
		"\x02\x02\u022C\u022D\x07-\x02\x02\u022D\u022F\x05\x86D\x02\u022E\u0230" +
		"\x05\x9AN\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
		"\u0230\u0231\x03\x02\x02\x02\u0231\u0233\x076\x02\x02\u0232\u0234\x05" +
		"<\x1F\x02\u0233\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234" +
		"\u0235\x03\x02\x02\x02\u0235\u0237\x077\x02\x02\u0236\u0238\x07>\x02\x02" +
		"\u0237\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238;\x03\x02" +
		"\x02\x02\u0239\u023E\x05> \x02\u023A\u023B\x07:\x02\x02\u023B\u023D\x05" +
		"> \x02\u023C\u023A\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C" +
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F=\x03\x02\x02\x02\u0240" +
		"\u023E\x03\x02\x02\x02\u0241\u0243\x05\x04\x03\x02\u0242\u0241\x03\x02" +
		"\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244" +
		"\u0245\x05\x86D\x02\u0245\u0246\x05\x98M\x02\u0246\u025A\x03\x02\x02\x02" +
		"\u0247\u0249\x05\x04\x03\x02\u0248\u0247\x03\x02\x02\x02\u0248\u0249\x03" +
		"\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x05\x86D\x02\u024B" +
		"\u024C\x05\x92J\x02\u024C\u025A\x03\x02\x02\x02\u024D\u024F\x05\x04\x03" +
		"\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250" +
		"\x03\x02\x02\x02\u0250\u0251\x05\x86D\x02\u0251\u0252\x071\x02\x02\u0252" +
		"\u0253\x05\x9CO\x02\u0253\u0254\x072\x02\x02\u0254\u025A\x03\x02\x02\x02" +
		"\u0255\u0257\x05\x04\x03\x02\u0256\u0255\x03\x02\x02\x02\u0256\u0257\x03" +
		"\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x05\x86D\x02\u0259" +
		"\u0242\x03\x02\x02\x02\u0259\u0248\x03\x02\x02\x02\u0259\u024E\x03\x02" +
		"\x02\x02\u0259\u0256\x03\x02\x02\x02\u025A?\x03\x02\x02\x02\u025B\u025D" +
		"\x05\x04\x03\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02" +
		"\u025D\u025F\x03\x02\x02\x02\u025E\u0260\x07\x06\x02\x02\u025F\u025E\x03" +
		"\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261" +
		"\u0262\x07.\x02\x02\u0262\u0264\x05\x86D\x02\u0263\u0265\x05\x9AN\x02" +
		"\u0264\u0263\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0266\x03" +
		"\x02\x02\x02\u0266\u0267\x07H\x02\x02\u0267\u0269\x05\x82B\x02\u0268\u026A" +
		"\x07>\x02\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02" +
		"\u026AA\x03\x02\x02\x02\u026B\u026D\x05\x04\x03\x02\u026C\u026B\x03\x02" +
		"\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E" +
		"\u0270\x07\x06\x02\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270\x03\x02" +
		"\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x07%\x02\x02\u0272\u0274" +
		"\x05\x86D\x02\u0273\u0275\x07=\x02\x02\u0274\u0273\x03\x02\x02\x02\u0274" +
		"\u0275\x03\x02\x02\x02\u0275\u0277\x03\x02\x02\x02\u0276\u0278\x05\x9A" +
		"N\x02\u0277\u0276\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u0279" +
		"\x03\x02\x02\x02\u0279\u027C\x05\x92J\x02\u027A\u027B\x07B\x02\x02\u027B" +
		"\u027D\x05\x82B\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02" +
		"\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x05\xA2R\x02\u027F\u0281" +
		"\x07>\x02\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
		"\u0281C\x03\x02\x02\x02\u0282\u0284\x05\x04\x03\x02\u0283\u0282\x03\x02" +
		"\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285" +
		"\u0287\x07\x11\x02\x02\u0286\u0288\x07=\x02\x02\u0287\u0286\x03\x02\x02" +
		"\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028C" +
		"\x05\x92J\x02\u028A\u028B\x07B\x02\x02\u028B\u028D\x05\x82B\x02\u028C" +
		"\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x03\x02" +
		"\x02\x02\u028E\u0290\x05\xA2R\x02\u028F\u0291\x07>\x02\x02\u0290\u028F" +
		"\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291E\x03\x02\x02\x02\u0292" +
		"\u0294\x05\x04\x03\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02" +
		"\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x07\x13\x02\x02\u0296" +
		"\u0298\x05\x86D\x02\u0297\u0299\x07=\x02\x02\u0298\u0297\x03\x02\x02\x02" +
		"\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029D\x05" +
		"\x92J\x02\u029B\u029C\x07B\x02\x02\u029C\u029E\x05\x82B\x02\u029D\u029B" +
		"\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02" +
		"\u029F\u02A1\x05\xA2R\x02\u02A0\u02A2\x07>\x02\x02\u02A1\u02A0\x03\x02" +
		"\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2G\x03\x02\x02\x02\u02A3\u02A5" +
		"\x05\x04\x03\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02" +
		"\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x07\x13\x02\x02\u02A7\u02A9\x05" +
		"\x86D\x02\u02A8\u02AA\x07=\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA" +
		"\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AE\x05\x96L\x02" +
		"\u02AC\u02AD\x07B\x02\x02\u02AD\u02AF\x05\x82B\x02\u02AE\u02AC\x03\x02" +
		"\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0" +
		"\u02B2\x05\xA2R\x02\u02B1\u02B3\x07>\x02\x02\u02B2\u02B1\x03\x02\x02\x02" +
		"\u02B2\u02B3\x03\x02\x02\x02\u02B3I\x03\x02\x02\x02\u02B4\u02B6\x05\x04" +
		"\x03\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
		"\u02B7\x03\x02\x02\x02\u02B7\u02B8\x07\x14\x02\x02\u02B8\u02BA\x05\x86" +
		"D\x02\u02B9\u02BB\x07=\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB" +
		"\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BF\x05\x92J\x02" +
		"\u02BD\u02BE\x07B\x02\x02\u02BE\u02C0\x05\x82B\x02\u02BF\u02BD\x03\x02" +
		"\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1" +
		"\u02C3\x05\xA2R\x02\u02C2\u02C4\x07>\x02\x02\u02C3\u02C2\x03\x02\x02\x02" +
		"\u02C3\u02C4\x03\x02\x02\x02\u02C4K\x03\x02\x02\x02\u02C5\u02C7\x05\x04" +
		"\x03\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7" +
		"\u02C8\x03\x02\x02\x02\u02C8\u02C9\x07\x14\x02\x02\u02C9\u02CB\x05\x86" +
		"D\x02\u02CA\u02CC\x07=\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC" +
		"\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02D0\x05\x96L\x02" +
		"\u02CE\u02CF\x07B\x02\x02\u02CF\u02D1\x05\x82B\x02\u02D0\u02CE\x03\x02" +
		"\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2" +
		"\u02D4\x05\xA2R\x02\u02D3\u02D5\x07>\x02\x02\u02D4\u02D3\x03\x02\x02\x02" +
		"\u02D4\u02D5\x03\x02\x02\x02\u02D5M\x03\x02\x02\x02\u02D6\u02D8\x05\x04" +
		"\x03\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8" +
		"\u02DA\x03\x02\x02\x02\u02D9\u02DB\x07\x06\x02\x02\u02DA\u02D9\x03\x02" +
		"\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC" +
		"\u02DD\x07\n\x02\x02\u02DD\u02DE\x05\x86D\x02\u02DE\u02E0\x05\x92J\x02" +
		"\u02DF\u02E1\x07>\x02\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03" +
		"\x02\x02\x02\u02E1O\x03\x02\x02\x02\u02E2\u02E4\x05\x04\x03\x02\u02E3" +
		"\u02E2\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02" +
		"\x02\x02\u02E5\u02E7\x07\x06\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E6" +
		"\u02E7\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02E9\x07\v\x02" +
		"\x02\u02E9\u02EA\x05\x86D\x02\u02EA\u02EC\x05\x92J\x02\u02EB\u02ED\x07" +
		">\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED" +
		"Q\x03\x02\x02\x02\u02EE\u02F0\x05\x04\x03\x02\u02EF\u02EE\x03\x02\x02" +
		"\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2" +
		"\x07\x19\x02\x02\u02F2\u02F6\x076\x02\x02\u02F3\u02F5\x05T+\x02\u02F4" +
		"\u02F3\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02" +
		"\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8" +
		"\u02F6\x03\x02\x02\x02\u02F9\u02FB\x077\x02\x02\u02FA\u02FC\x07>\x02\x02" +
		"\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FCS\x03\x02" +
		"\x02\x02\u02FD\u0300\x05V,\x02\u02FE\u0300\x05X-\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u02FF\u02FE\x03\x02\x02\x02\u0300U\x03\x02\x02\x02\u0301\u0303" +
		"\x05\x04\x03\x02\u0302\u0301\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02" +
		"\u0303\u0304\x03\x02\x02\x02\u0304\u0305\x05\x86D\x02\u0305\u0306\x07" +
		"?\x02\x02\u0306\u0308\x05\x82B\x02\u0307\u0309\x07>\x02\x02\u0308\u0307" +
		"\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309W\x03\x02\x02\x02\u030A" +
		"\u030C\x05\x04\x03\x02\u030B\u030A\x03\x02\x02\x02\u030B\u030C\x03\x02" +
		"\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030E\x05\x86D\x02\u030E\u030F" +
		"\x073\x02\x02\u030F\u0310\x05\x82B\x02\u0310\u0311\x074\x02\x02\u0311" +
		"\u0312\x07?\x02\x02\u0312\u0314\x05\x82B\x02\u0313\u0315\x07>\x02\x02" +
		"\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315Y\x03\x02" +
		"\x02\x02\u0316\u0318\x05\x04\x03\x02\u0317\u0316\x03\x02\x02\x02\u0317" +
		"\u0318\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031A\x07\b\x02" +
		"\x02\u031A\u031B\x05\x86D\x02\u031B\u031C\x05\x9AN\x02\u031C\u031E\x05" +
		"\xA2R\x02\u031D\u031F\x07>\x02\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F" +
		"\x03\x02\x02\x02\u031F[\x03\x02\x02\x02\u0320\u0322\x05^0\x02\u0321\u0323" +
		"\x07>\x02\x02\u0322\u0321\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02" +
		"\u0323]\x03\x02\x02\x02\u0324\u0325\b0\x01\x02\u0325\u0326\x07\x1F\x02" +
		"\x02\u0326\u0339\x05^0\x19\u0327\u0328\x07\x0F\x02\x02\u0328\u0339\x05" +
		"^0\x15\u0329\u0339\x05`1\x02\u032A\u0339\x05b2\x02\u032B\u0339\x05h5\x02" +
		"\u032C\u0339\x05j6\x02\u032D\u0339\x05l7\x02\u032E\u0339\x05n8\x02\u032F" +
		"\u0339\x05p9\x02\u0330\u0339\x05v<\x02\u0331\u0339\x05r:\x02\u0332\u0339" +
		"\x05t;\x02\u0333\u0339\x05\x86D\x02\u0334\u0335\x071\x02\x02\u0335\u0336" +
		"\x05^0\x02\u0336\u0337\x072\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338" +
		"\u0324\x03\x02\x02\x02\u0338\u0327\x03\x02\x02\x02\u0338\u0329\x03\x02" +
		"\x02\x02\u0338\u032A\x03\x02\x02\x02\u0338\u032B\x03\x02\x02\x02\u0338" +
		"\u032C\x03\x02\x02\x02\u0338\u032D\x03\x02\x02\x02\u0338\u032E\x03\x02" +
		"\x02\x02\u0338\u032F\x03\x02\x02\x02\u0338\u0330\x03\x02\x02\x02\u0338" +
		"\u0331\x03\x02\x02\x02\u0338\u0332\x03\x02\x02\x02\u0338\u0333\x03\x02" +
		"\x02\x02\u0338\u0334\x03\x02\x02\x02\u0339\u037A\x03\x02\x02\x02\u033A" +
		"\u033B\f\x18\x02\x02\u033B\u033C\t\x04\x02\x02\u033C\u0379\x05^0\x19\u033D" +
		"\u033E\f\x17\x02\x02\u033E\u033F\t\x05\x02\x02\u033F\u0379\x05^0\x18\u0340" +
		"\u0341\f\x16\x02\x02\u0341\u0342\t\x06\x02\x02\u0342\u0379\x05^0\x17\u0343" +
		"\u0344\f\x14\x02\x02\u0344\u0345\x07;\x02\x02\u0345\u0379\x05^0\x15\u0346" +
		"\u0348\f\x13\x02\x02\u0347\u0349\x07\x1F\x02\x02\u0348\u0347\x03\x02\x02" +
		"\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034B" +
		"\x07\x17\x02\x02\u034B\u0379\x05^0\x14\u034C\u034D\f\x11\x02\x02\u034D" +
		"\u034E\t\x07\x02\x02\u034E\u0379\x05^0\x12\u034F\u0350\f\x10\x02\x02\u0350" +
		"\u0351\x07!\x02\x02\u0351\u0379\x05^0\x11\u0352\u0353\f\x0F\x02\x02\u0353" +
		"\u0354\x07\"\x02\x02\u0354\u0379\x05^0\x10\u0355\u0356\f\x1D\x02\x02\u0356" +
		"\u0357\x079\x02\x02\u0357\u0379\x05\x86D\x02\u0358\u035A\f\x1C\x02\x02" +
		"\u0359\u035B\x07=\x02\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03" +
		"\x02\x02\x02\u035B\u035D\x03\x02\x02\x02\u035C\u035E\x05\x9CO\x02\u035D" +
		"\u035C\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x03\x02" +
		"\x02\x02\u035F\u0368\x071\x02\x02\u0360\u0365\x05\x8EH\x02\u0361\u0362" +
		"\x07:\x02\x02\u0362\u0364\x05\x8EH\x02\u0363\u0361\x03\x02\x02\x02\u0364" +
		"\u0367\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02" +
		"\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368" +
		"\u0360\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036A\x03\x02" +
		"\x02\x02\u036A\u0379\x072\x02\x02\u036B\u036C\f\x1B\x02\x02\u036C\u036D" +
		"\x073\x02\x02\u036D\u036E\x05^0\x02\u036E\u036F\x074\x02\x02\u036F\u0379" +
		"\x03\x02\x02\x02\u0370\u0371\f\x1A\x02\x02\u0371\u0379\x07<\x02\x02\u0372" +
		"\u0373\f\x12\x02\x02\u0373\u0375\x07\x1B\x02\x02\u0374\u0376\x07\x1F\x02" +
		"\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377" +
		"\x03\x02\x02\x02\u0377\u0379\x05\x82B\x02\u0378\u033A\x03\x02\x02\x02" +
		"\u0378\u033D\x03\x02\x02\x02\u0378\u0340\x03\x02\x02\x02\u0378\u0343\x03" +
		"\x02\x02\x02\u0378\u0346\x03\x02\x02\x02\u0378\u034C\x03\x02\x02\x02\u0378" +
		"\u034F\x03\x02\x02\x02\u0378\u0352\x03\x02\x02\x02\u0378\u0355\x03\x02" +
		"\x02\x02\u0378\u0358\x03\x02\x02\x02\u0378\u036B\x03\x02\x02\x02\u0378" +
		"\u0370\x03\x02\x02\x02\u0378\u0372\x03\x02\x02\x02\u0379\u037C\x03\x02" +
		"\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B" +
		"_\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037D\u037E\x07\x1A\x02" +
		"\x02\u037E\u037F\x05^0\x02\u037F\u0382\x05\xA4S\x02\u0380\u0381\x07\x1E" +
		"\x02\x02\u0381\u0383\x05\xA4S\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383" +
		"\x03\x02\x02\x02\u0383\u0385\x03\x02\x02\x02\u0384\u0386\x07>\x02\x02" +
		"\u0385\u0384\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386a\x03\x02" +
		"\x02\x02\u0387\u0388\x07\x1C\x02\x02\u0388\u038C\x05\xA2R\x02\u0389\u038B" +
		"\x05d3\x02\u038A\u0389\x03\x02\x02\x02\u038B\u038E\x03\x02\x02\x02\u038C" +
		"\u038A\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u0391\x03\x02" +
		"\x02\x02\u038E\u038C\x03\x02\x02\x02\u038F\u0390\x07\x1E\x02\x02\u0390" +
		"\u0392\x05\xA2R\x02\u0391\u038F\x03\x02\x02\x02\u0391\u0392\x03\x02\x02" +
		"\x02\u0392\u0394\x03\x02\x02\x02\u0393\u0395\x07>\x02\x02\u0394\u0393" +
		"\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395c\x03\x02\x02\x02\u0396" +
		"\u0397\x07\x1D\x02\x02\u0397\u0398\x05\x82B\x02\u0398\u0399\x05\xA2R\x02" +
		"\u0399e\x03\x02\x02\x02\u039A\u039B\x05^0\x02\u039B\u039C\x07C\x02\x02" +
		"\u039C\u039D\x05^0\x02\u039Dg\x03\x02\x02\x02\u039E\u03A7\x075\x02\x02" +
		"\u039F\u03A4\x05f4\x02\u03A0\u03A1\x07:\x02\x02\u03A1\u03A3\x05f4\x02" +
		"\u03A2\u03A0\x03\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03" +
		"\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A8\x03\x02\x02\x02\u03A6" +
		"\u03A4\x03\x02\x02\x02\u03A7\u039F\x03\x02\x02\x02\u03A7\u03A8\x03\x02" +
		"\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x077\x02\x02\u03AAi\x03" +
		"\x02\x02\x02\u03AB\u03AD\x05\x94K\x02\u03AC\u03AE\x07=\x02\x02\u03AD\u03AC" +
		"\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02" +
		"\u03AF\u03B0\x07B\x02\x02\u03B0\u03B2\x05\x82B\x02\u03B1\u03AF\x03\x02" +
		"\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\u03B4\x05\xA2R\x02\u03B4k\x03\x02\x02\x02\u03B5\u03B7\x05\x94K\x02\u03B6" +
		"\u03B8\x07=\x02\x02\u03B7\u03B6\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02" +
		"\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA\x05\\/\x02\u03BAm\x03\x02" +
		"\x02\x02\u03BB\u03BC\x05\x82B\x02\u03BC\u03BD\x05\x9EP\x02\u03BDo\x03" +
		"\x02\x02\x02\u03BE\u03C7\x073\x02\x02\u03BF\u03C4\x05^0\x02\u03C0\u03C1" +
		"\x07:\x02\x02\u03C1\u03C3\x05^0\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3" +
		"\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02" +
		"\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C7" +
		"\u03BF\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x03\x02" +
		"\x02\x02\u03C9\u03CA\x074\x02\x02\u03CAq\x03\x02\x02\x02\u03CB\u03CC\x07" +
		")\x02\x02\u03CC\u03CD\x05^0\x02\u03CDs\x03\x02\x02\x02\u03CE\u03CF\x07" +
		"(\x02\x02\u03CF\u03D0\x05^0\x02\u03D0u\x03\x02\x02\x02\u03D1\u03D7\x05" +
		"x=\x02\u03D2\u03D7\x05z>\x02\u03D3\u03D7\x05|?\x02\u03D4\u03D7\x05~@\x02" +
		"\u03D5\u03D7\x05\x80A\x02\u03D6\u03D1\x03\x02\x02\x02\u03D6\u03D2\x03" +
		"\x02\x02\x02\u03D6\u03D3\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6" +
		"\u03D5\x03\x02\x02\x02\u03D7w\x03\x02\x02\x02\u03D8\u03D9\x07`\x02\x02" +
		"\u03D9y\x03\x02\x02\x02\u03DA\u03DB\x07d\x02\x02\u03DB{\x03\x02\x02\x02" +
		"\u03DC\u03DD\x07c\x02\x02\u03DD}\x03\x02\x02\x02\u03DE\u03DF\x07Z\x02" +
		"\x02\u03DF\x7F\x03\x02\x02\x02\u03E0\u03E1\x07 \x02\x02\u03E1\x81\x03" +
		"\x02\x02\x02\u03E2\u03E3\bB\x01\x02\u03E3\u03E4\x071\x02\x02\u03E4\u03E5" +
		"\x05\x82B\x02\u03E5\u03E6\x072\x02\x02\u03E6\u03FF\x03\x02\x02\x02\u03E7" +
		"\u03FF\x05\x9CO\x02\u03E8\u03E9\x073\x02\x02\u03E9\u03EA\x05\x82B\x02" +
		"\u03EA\u03EB\x07>\x02\x02\u03EB\u03EC\x05z>\x02\u03EC\u03ED\x074\x02\x02" +
		"\u03ED\u03FF\x03\x02\x02\x02\u03EE\u03EF\x075\x02\x02\u03EF\u03F0\x05" +
		"\x82B\x02\u03F0\u03F1\x07C\x02\x02\u03F1\u03F4\x05\x82B\x02\u03F2\u03F3" +
		"\x07H\x02\x02\u03F3\u03F5\x05^0\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4" +
		"\u03F5\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F7\x077\x02" +
		"\x02\u03F7\u03FF\x03\x02\x02\x02\u03F8\u03FF\x054\x1B\x02\u03F9\u03FF" +
		"\x056\x1C\x02\u03FA\u03FF\x058\x1D\x02\u03FB\u03FF\x05:\x1E\x02\u03FC" +
		"\u03FF\x05\x84C\x02\u03FD\u03FF\x05\x86D\x02\u03FE\u03E2\x03\x02\x02\x02" +
		"\u03FE\u03E7\x03\x02\x02\x02\u03FE\u03E8\x03\x02\x02\x02\u03FE\u03EE\x03" +
		"\x02\x02\x02\u03FE\u03F8\x03\x02\x02\x02\u03FE\u03F9\x03\x02\x02\x02\u03FE" +
		"\u03FA\x03\x02\x02\x02\u03FE\u03FB\x03\x02\x02\x02\u03FE\u03FC\x03\x02" +
		"\x02\x02\u03FE\u03FD\x03\x02\x02\x02\u03FF\u0409\x03\x02\x02\x02\u0400" +
		"\u0401\f\x0E\x02\x02\u0401\u0408\x05\x9CO\x02\u0402\u0403\f\r\x02\x02" +
		"\u0403\u0404\x079\x02\x02\u0404\u0408\x05\x86D\x02\u0405\u0406\f\x05\x02" +
		"\x02\u0406\u0408\x07<\x02\x02\u0407\u0400\x03\x02\x02\x02\u0407\u0402" +
		"\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0408\u040B\x03\x02\x02\x02" +
		"\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\x83\x03" +
		"\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C\u040E\x05\x04\x03\x02\u040D" +
		"\u040C\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x03\x02" +
		"\x02\x02\u040F\u0410\x07]\x02\x02\u0410\x85\x03\x02\x02\x02\u0411\u0417" +
		"\x07[\x02\x02\u0412\u0417\x07\\\x02\x02\u0413\u0417\x07_\x02\x02\u0414" +
		"\u0417\x07^\x02\x02\u0415\u0417\x05\xA6T\x02\u0416\u0411\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0416\u0412\x03\x02\x02\x02\u0416\u0413\x03\x02\x02\x02\u0416\u0414\x03" +
		"\x02\x02\x02\u0416\u0415\x03\x02\x02\x02\u0417\x87\x03\x02\x02\x02\u0418" +
		"\u041A\x05\x04\x03\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A\x03\x02" +
		"\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041D\x05\x86D\x02\u041C\u041E" +
		"\x07<\x02\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02" +
		"\u041E\u0421\x03\x02\x02\x02\u041F\u0420\x07?\x02\x02\u0420\u0422\x05" +
		"\x82B\x02\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422" +
		"\x89\x03\x02\x02\x02\u0423\u0426\x05\x86D\x02\u0424\u0425\x07?\x02\x02" +
		"\u0425\u0427\x05^0\x02\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02" +
		"\x02\x02\u0427\x8B\x03\x02\x02\x02\u0428\u0429\x05\x86D\x02\u0429\u042A" +
		"\x07H\x02\x02\u042A\u042B\x05^0\x02\u042B\x8D\x03\x02\x02\x02\u042C\u042F" +
		"\x05^0\x02\u042D\u042F\x05\x8CG\x02\u042E\u042C\x03\x02\x02\x02\u042E" +
		"\u042D\x03\x02\x02\x02\u042F\x8F\x03\x02\x02\x02\u0430\u0435\x05\x86D" +
		"\x02\u0431\u0432\x07:\x02\x02\u0432\u0434\x05\x86D\x02\u0433\u0431\x03" +
		"\x02\x02\x02\u0434\u0437\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0435" +
		"\u0436\x03\x02\x02\x02\u0436\x91\x03\x02\x02\x02\u0437\u0435\x03\x02\x02" +
		"\x02\u0438\u0441\x071\x02\x02\u0439\u043E\x05\x88E\x02\u043A\u043B\x07" +
		":\x02\x02\u043B\u043D\x05\x88E\x02\u043C\u043A\x03\x02\x02\x02\u043D\u0440" +
		"\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02" +
		"\u043F\u0442\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0441\u0439\x03" +
		"\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443" +
		"\u0444\x072\x02\x02\u0444\x93\x03\x02\x02\x02\u0445\u044E\x078\x02\x02" +
		"\u0446\u044B\x05\x88E\x02\u0447\u0448\x07:\x02\x02\u0448\u044A\x05\x88" +
		"E\x02\u0449\u0447\x03\x02\x02\x02\u044A\u044D\x03\x02\x02\x02\u044B\u0449" +
		"\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044F\x03\x02\x02\x02" +
		"\u044D\u044B\x03\x02\x02\x02\u044E\u0446\x03\x02\x02\x02\u044E\u044F\x03" +
		"\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0451\x078\x02\x02\u0451" +
		"\x95\x03\x02\x02\x02\u0452\u0453\x071\x02\x02\u0453\u045C\x073\x02\x02" +
		"\u0454\u0459\x05\x88E\x02\u0455\u0456\x07:\x02\x02\u0456\u0458\x05\x88" +
		"E\x02\u0457\u0455\x03\x02\x02\x02\u0458\u045B\x03\x02\x02\x02\u0459\u0457" +
		"\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045D\x03\x02\x02\x02" +
		"\u045B\u0459\x03\x02\x02\x02\u045C\u0454\x03\x02\x02\x02\u045C\u045D\x03" +
		"\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045F\x074\x02\x02\u045F" +
		"\u0460\x072\x02\x02\u0460\x97\x03\x02\x02\x02\u0461\u046A\x076\x02\x02" +
		"\u0462\u0467\x05\x88E\x02\u0463\u0464\x07:\x02\x02\u0464\u0466\x05\x88" +
		"E\x02\u0465\u0463\x03\x02\x02\x02\u0466\u0469\x03\x02\x02\x02\u0467\u0465" +
		"\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u046B\x03\x02\x02\x02" +
		"\u0469\u0467\x03\x02\x02\x02\u046A\u0462\x03\x02\x02\x02\u046A\u046B\x03" +
		"\x02\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C\u046E\x07:\x02\x02\u046D" +
		"\u046C\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F\x03\x02" +
		"\x02\x02\u046F\u0470\x077\x02\x02\u0470\x99\x03\x02\x02\x02\u0471\u047A" +
		"\x073\x02\x02\u0472\u0477\x05\x84C\x02\u0473\u0474\x07:\x02\x02\u0474" +
		"\u0476\x05\x84C\x02\u0475\u0473\x03\x02\x02\x02\u0476\u0479\x03\x02\x02" +
		"\x02\u0477\u0475\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047B" +
		"\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u047A\u0472\x03\x02\x02\x02" +
		"\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047D\x07" +
		"4\x02\x02\u047D\x9B\x03\x02\x02\x02\u047E\u0487\x073\x02\x02\u047F\u0484" +
		"\x05\x82B\x02\u0480\u0481\x07:\x02\x02\u0481\u0483\x05\x82B\x02\u0482" +
		"\u0480\x03\x02\x02\x02\u0483\u0486\x03\x02\x02\x02\u0484\u0482\x03\x02" +
		"\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486" +
		"\u0484\x03\x02\x02\x02\u0487\u047F\x03\x02\x02\x02\u0487\u0488\x03\x02" +
		"\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u048A\x074\x02\x02\u048A\x9D" +
		"\x03\x02\x02\x02\u048B\u0494\x076\x02\x02\u048C\u0491\x05\x8AF\x02\u048D" +
		"\u048E\x07:\x02\x02\u048E\u0490\x05\x8AF\x02\u048F\u048D\x03\x02\x02\x02" +
		"\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491\u0492\x03" +
		"\x02\x02\x02\u0492\u0495\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0494" +
		"\u048C\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0497\x03\x02" +
		"\x02\x02\u0496\u0498\x07:\x02\x02\u0497\u0496\x03\x02\x02\x02\u0497\u0498" +
		"\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x077\x02\x02" +
		"\u049A\x9F\x03\x02\x02\x02\u049B\u04A0\x05\x82B\x02\u049C\u049D\x07:\x02" +
		"\x02\u049D\u049F\x05\x82B\x02\u049E\u049C\x03\x02\x02\x02\u049F\u04A2" +
		"\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02" +
		"\u04A1\xA1\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A3\u04A7\x07" +
		"6\x02\x02\u04A4\u04A6\x05\x06\x04\x02\u04A5\u04A4\x03\x02\x02\x02\u04A6" +
		"\u04A9\x03\x02\x02\x02\u04A7\u04A5\x03\x02\x02\x02\u04A7\u04A8\x03\x02" +
		"\x02\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04AA" +
		"\u04AB\x077\x02\x02\u04AB\xA3\x03\x02\x02\x02\u04AC\u04AF\x05\xA2R\x02" +
		"\u04AD\u04AF\x05^0\x02\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AD\x03\x02" +
		"\x02\x02\u04AF\xA5\x03\x02\x02\x02\u04B0\u04B1\t\b\x02\x02\u04B1\xA7\x03" +
		"\x02\x02\x02\xBC\xAB\xC3\xCA\xCF\xD4\xDB\xE4\xE7\xF1\xF4\xF7\xFC\u0102" +
		"\u0108\u010B\u0111\u0117\u011A\u0120\u0126\u0128\u012B\u012E\u0134\u013A" +
		"\u013D\u0140\u0146\u014C\u014F\u0152\u0158\u015E\u0160\u0166\u016E\u0177" +
		"\u017B\u017F\u0183\u0187\u018F\u0196\u019D\u019F\u01A4\u01A9\u01AE\u01C1" +
		"\u01C4\u01C7\u01CD\u01D1\u01D5\u01D8\u01DB\u01E1\u01E5\u01E8\u01EB\u01F0" +
		"\u01F4\u01F7\u01FA\u01FF\u0203\u0205\u0208\u020B\u0210\u0216\u0219\u021C" +
		"\u0220\u0224\u0227\u022A\u022F\u0233\u0237\u023E\u0242\u0248\u024E\u0256" +
		"\u0259\u025C\u025F\u0264\u0269\u026C\u026F\u0274\u0277\u027C\u0280\u0283" +
		"\u0287\u028C\u0290\u0293\u0298\u029D\u02A1\u02A4\u02A9\u02AE\u02B2\u02B5" +
		"\u02BA\u02BF\u02C3\u02C6\u02CB\u02D0\u02D4\u02D7\u02DA\u02E0\u02E3\u02E6" +
		"\u02EC\u02EF\u02F6\u02FB\u02FF\u0302\u0308\u030B\u0314\u0317\u031E\u0322" +
		"\u0338\u0348\u035A\u035D\u0365\u0368\u0375\u0378\u037A\u0382\u0385\u038C" +
		"\u0391\u0394\u03A4\u03A7\u03AD\u03B1\u03B7\u03C4\u03C7\u03D6\u03F4\u03FE" +
		"\u0407\u0409\u040D\u0416\u0419\u041D\u0421\u0426\u042E\u0435\u043E\u0441" +
		"\u044B\u044E\u0459\u045C\u0467\u046A\u046D\u0477\u047A\u0484\u0487\u0491" +
		"\u0494\u0497\u04A0\u04A7\u04AE";
	public static readonly _serializedATN: string = Utils.join(
		[
			CWScriptParser._serializedATNSegment0,
			CWScriptParser._serializedATNSegment1,
			CWScriptParser._serializedATNSegment2,
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


export class DocCommentContext extends ParserRuleContext {
	public DOC_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DOC_LINE_COMMENT, 0); }
	public DOC_BLOCK_COMMENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DOC_BLOCK_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_docComment; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDocComment) {
			listener.enterDocComment(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDocComment) {
			listener.exitDocComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDocComment) {
			return visitor.visitDocComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public exportStmt(): ExportStmtContext | undefined {
		return this.tryGetRuleContext(0, ExportStmtContext);
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
	public _bindings!: BraceBindingListContext;
	public _src!: StringLitContext;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public braceBindingList(): BraceBindingListContext | undefined {
		return this.tryGetRuleContext(0, BraceBindingListContext);
	}
	public stringLit(): StringLitContext | undefined {
		return this.tryGetRuleContext(0, StringLitContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
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


export class ExportStmtContext extends ParserRuleContext {
	public _fields!: BraceFieldListContext;
	public EXPORT(): TerminalNode { return this.getToken(CWScriptParser.EXPORT, 0); }
	public braceFieldList(): BraceFieldListContext | undefined {
		return this.tryGetRuleContext(0, BraceFieldListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_exportStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExportStmt) {
			listener.enterExportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExportStmt) {
			listener.exitExportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExportStmt) {
			return visitor.visitExportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindingContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _alias!: IdentContext;
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_binding; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBinding) {
			listener.enterBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBinding) {
			listener.exitBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBinding) {
			return visitor.visitBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindingListContext extends ParserRuleContext {
	public binding(): BindingContext[];
	public binding(i: number): BindingContext;
	public binding(i?: number): BindingContext | BindingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BindingContext);
		} else {
			return this.getRuleContext(i, BindingContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_bindingList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBindingList) {
			listener.enterBindingList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBindingList) {
			listener.exitBindingList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBindingList) {
			return visitor.visitBindingList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BrackIdentListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
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
	public get ruleIndex(): number { return CWScriptParser.RULE_brackIdentList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBrackIdentList) {
			listener.enterBrackIdentList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBrackIdentList) {
			listener.exitBrackIdentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBrackIdentList) {
			return visitor.visitBrackIdentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceBindingListContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public binding(): BindingContext[];
	public binding(i: number): BindingContext;
	public binding(i?: number): BindingContext | BindingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BindingContext);
		} else {
			return this.getRuleContext(i, BindingContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_braceBindingList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBraceBindingList) {
			listener.enterBraceBindingList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBraceBindingList) {
			listener.exitBraceBindingList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBraceBindingList) {
			return visitor.visitBraceBindingList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_letStmt; }
	public copyFrom(ctx: LetStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class LetIdentStmtContext extends LetStmtContext {
	public _doc!: DocCommentContext;
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public _value!: ExprContext;
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: LetStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetIdentStmt) {
			listener.enterLetIdentStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetIdentStmt) {
			listener.exitLetIdentStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetIdentStmt) {
			return visitor.visitLetIdentStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetTupleStmtContext extends LetStmtContext {
	public _doc!: DocCommentContext;
	public _names!: BrackIdentListContext;
	public _ty!: TypeExprContext;
	public _value!: ExprContext;
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public brackIdentList(): BrackIdentListContext | undefined {
		return this.tryGetRuleContext(0, BrackIdentListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: LetStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetTupleStmt) {
			listener.enterLetTupleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetTupleStmt) {
			listener.exitLetTupleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetTupleStmt) {
			return visitor.visitLetTupleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetStructStmtContext extends LetStmtContext {
	public _doc!: DocCommentContext;
	public _bindings!: BraceBindingListContext;
	public _ty!: TypeExprContext;
	public _value!: ExprContext;
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public braceBindingList(): BraceBindingListContext | undefined {
		return this.tryGetRuleContext(0, BraceBindingListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: LetStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStructStmt) {
			listener.enterLetStructStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStructStmt) {
			listener.exitLetStructStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStructStmt) {
			return visitor.visitLetStructStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_constStmt; }
	public copyFrom(ctx: ConstStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstIdentStmtContext extends ConstStmtContext {
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: ConstStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstIdentStmt) {
			listener.enterConstIdentStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstIdentStmt) {
			listener.exitConstIdentStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstIdentStmt) {
			return visitor.visitConstIdentStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstTupleStmtContext extends ConstStmtContext {
	public _doc!: DocCommentContext;
	public _exported!: Token;
	public _names!: BrackIdentListContext;
	public _ty!: TypeExprContext;
	public _value!: ExprContext;
	public CONST(): TerminalNode { return this.getToken(CWScriptParser.CONST, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public brackIdentList(): BrackIdentListContext | undefined {
		return this.tryGetRuleContext(0, BrackIdentListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: ConstStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstTupleStmt) {
			listener.enterConstTupleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstTupleStmt) {
			listener.exitConstTupleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstTupleStmt) {
			return visitor.visitConstTupleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstStructStmtContext extends ConstStmtContext {
	public _doc!: DocCommentContext;
	public _exported!: Token;
	public _bindings!: BraceBindingListContext;
	public _ty!: TypeExprContext;
	public _value!: ExprContext;
	public CONST(): TerminalNode { return this.getToken(CWScriptParser.CONST, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public braceBindingList(): BraceBindingListContext | undefined {
		return this.tryGetRuleContext(0, BraceBindingListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: ConstStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstStructStmt) {
			listener.enterConstStructStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstStructStmt) {
			listener.exitConstStructStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstStructStmt) {
			return visitor.visitConstStructStmt(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forStmt; }
	public copyFrom(ctx: ForStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class ForIdentStmtContext extends ForStmtContext {
	public _name!: IdentContext;
	public _iter!: ExprContext;
	public _body!: BlockContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: ForStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForIdentStmt) {
			listener.enterForIdentStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForIdentStmt) {
			listener.exitForIdentStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForIdentStmt) {
			return visitor.visitForIdentStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForTupleStmtContext extends ForStmtContext {
	public _names!: BrackIdentListContext;
	public _iter!: ExprContext;
	public _body!: BlockContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public brackIdentList(): BrackIdentListContext | undefined {
		return this.tryGetRuleContext(0, BrackIdentListContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: ForStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForTupleStmt) {
			listener.enterForTupleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForTupleStmt) {
			listener.exitForTupleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForTupleStmt) {
			return visitor.visitForTupleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStructStmtContext extends ForStmtContext {
	public _bindings!: BraceBindingListContext;
	public _iter!: ExprContext;
	public _body!: BlockContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public braceBindingList(): BraceBindingListContext | undefined {
		return this.tryGetRuleContext(0, BraceBindingListContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	constructor(ctx: ForStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStructStmt) {
			listener.enterForStructStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStructStmt) {
			listener.exitForStructStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStructStmt) {
			return visitor.visitForStructStmt(this);
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
	public implDefn(): ImplDefnContext | undefined {
		return this.tryGetRuleContext(0, ImplDefnContext);
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
	public _typeParams!: BrackTypeParamListContext;
	public _name!: IdentContext;
	public UNIT(): TerminalNode { return this.getToken(CWScriptParser.UNIT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _name!: IdentContext;
	public _fields!: BraceParamListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public braceParamList(): BraceParamListContext | undefined {
		return this.tryGetRuleContext(0, BraceParamListContext);
	}
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
	public _name!: IdentContext;
	public _fields!: ParenParamListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public parenParamList(): ParenParamListContext | undefined {
		return this.tryGetRuleContext(0, ParenParamListContext);
	}
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
	public _name!: IdentContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _exported!: Token;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
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
	public _doc!: DocCommentContext;
	public _stateDefn!: StateDefnContext;
	public _stateFields: StateDefnContext[] = [];
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public _doc!: DocCommentContext;
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
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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


export class ImplDefnContext extends ParserRuleContext {
	public _doc!: DocCommentContext;
	public _name!: IdentContext;
	public _typeParams!: BrackTypeParamListContext;
	public _body!: BlockContext;
	public IMPL(): TerminalNode { return this.getToken(CWScriptParser.IMPL, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public brackTypeParamList(): BrackTypeParamListContext | undefined {
		return this.tryGetRuleContext(0, BrackTypeParamListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SEMI, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_implDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImplDefn) {
			listener.enterImplDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImplDefn) {
			listener.exitImplDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImplDefn) {
			return visitor.visitImplDefn(this);
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
	public D_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.D_EQ, 0); }
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
export class MapExprContext extends ExprContext {
	public mapExpr_(): MapExpr_Context {
		return this.getRuleContext(0, MapExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapExpr) {
			listener.enterMapExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapExpr) {
			listener.exitMapExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapExpr) {
			return visitor.visitMapExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClosureExprContext extends ExprContext {
	public blockClosureExpr(): BlockClosureExprContext | undefined {
		return this.tryGetRuleContext(0, BlockClosureExprContext);
	}
	public exprClosureExpr(): ExprClosureExprContext | undefined {
		return this.tryGetRuleContext(0, ExprClosureExprContext);
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


export class MapEntryContext extends ParserRuleContext {
	public _key!: ExprContext;
	public _value!: ExprContext;
	public FAT_ARROW(): TerminalNode { return this.getToken(CWScriptParser.FAT_ARROW, 0); }
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
	public get ruleIndex(): number { return CWScriptParser.RULE_mapEntry; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapEntry) {
			listener.enterMapEntry(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapEntry) {
			listener.exitMapEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapEntry) {
			return visitor.visitMapEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapExpr_Context extends ParserRuleContext {
	public _mapEntry!: MapEntryContext;
	public _entries: MapEntryContext[] = [];
	public H_LBRACE(): TerminalNode { return this.getToken(CWScriptParser.H_LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public mapEntry(): MapEntryContext[];
	public mapEntry(i: number): MapEntryContext;
	public mapEntry(i?: number): MapEntryContext | MapEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapEntryContext);
		} else {
			return this.getRuleContext(i, MapEntryContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_mapExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapExpr_) {
			listener.enterMapExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapExpr_) {
			listener.exitMapExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapExpr_) {
			return visitor.visitMapExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockClosureExprContext extends ParserRuleContext {
	public _params!: BarsParamListContext;
	public _fallible!: Token;
	public _returnTy!: TypeExprContext;
	public _body!: BlockContext;
	public barsParamList(): BarsParamListContext | undefined {
		return this.tryGetRuleContext(0, BarsParamListContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_blockClosureExpr; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBlockClosureExpr) {
			listener.enterBlockClosureExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBlockClosureExpr) {
			listener.exitBlockClosureExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBlockClosureExpr) {
			return visitor.visitBlockClosureExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprClosureExprContext extends ParserRuleContext {
	public _params!: BarsParamListContext;
	public _fallible!: Token;
	public _body!: ExprStmtContext;
	public barsParamList(): BarsParamListContext | undefined {
		return this.tryGetRuleContext(0, BarsParamListContext);
	}
	public exprStmt(): ExprStmtContext | undefined {
		return this.tryGetRuleContext(0, ExprStmtContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_exprClosureExpr; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExprClosureExpr) {
			listener.enterExprClosureExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExprClosureExpr) {
			listener.exitExprClosureExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExprClosureExpr) {
			return visitor.visitExprClosureExpr(this);
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
export class MapTypeExprContext extends TypeExprContext {
	public _defaultExpr!: ExprContext;
	public H_LBRACE(): TerminalNode { return this.getToken(CWScriptParser.H_LBRACE, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public FAT_ARROW(): TerminalNode { return this.getToken(CWScriptParser.FAT_ARROW, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapTypeExpr) {
			listener.enterMapTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapTypeExpr) {
			listener.exitMapTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapTypeExpr) {
			return visitor.visitMapTypeExpr(this);
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
	public _doc!: DocCommentContext;
	public PercentIdent(): TerminalNode { return this.getToken(CWScriptParser.PercentIdent, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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
	public EscapedIdent(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EscapedIdent, 0); }
	public keywordIdent(): KeywordIdentContext | undefined {
		return this.tryGetRuleContext(0, KeywordIdentContext);
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
	public _doc!: DocCommentContext;
	public _name!: IdentContext;
	public _optional!: Token;
	public _ty!: TypeExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public docComment(): DocCommentContext | undefined {
		return this.tryGetRuleContext(0, DocCommentContext);
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


export class BarsParamListContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CWScriptParser.RULE_barsParamList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBarsParamList) {
			listener.enterBarsParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBarsParamList) {
			listener.exitBarsParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBarsParamList) {
			return visitor.visitBarsParamList(this);
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


export class KeywordIdentContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXPORT, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public IMPL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPL, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EVENT, 0); }
	public H_INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.H_INSTANTIATE, 0); }
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NONE, 0); }
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
	public CONST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONST, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
	public TUPLE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TUPLE, 0); }
	public UNIT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.UNIT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ENUM, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_keywordIdent; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterKeywordIdent) {
			listener.enterKeywordIdent(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitKeywordIdent) {
			listener.exitKeywordIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitKeywordIdent) {
			return visitor.visitKeywordIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



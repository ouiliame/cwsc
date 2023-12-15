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
	public static readonly LBRACE = 51;
	public static readonly RBRACE = 52;
	public static readonly BAR = 53;
	public static readonly DOT = 54;
	public static readonly COMMA = 55;
	public static readonly D_QUEST = 56;
	public static readonly QUEST = 57;
	public static readonly BANG = 58;
	public static readonly SEMI = 59;
	public static readonly COLON = 60;
	public static readonly AT = 61;
	public static readonly AMP = 62;
	public static readonly ARROW = 63;
	public static readonly FAT_ARROW = 64;
	public static readonly S_QUOTE = 65;
	public static readonly D_QUOTE = 66;
	public static readonly F_DQUOTE = 67;
	public static readonly BACKTICK = 68;
	public static readonly EQ = 69;
	public static readonly D_EQ = 70;
	public static readonly NEQ = 71;
	public static readonly PLUS_EQ = 72;
	public static readonly PLUS = 73;
	public static readonly MINUS_EQ = 74;
	public static readonly MINUS = 75;
	public static readonly MUL_EQ = 76;
	public static readonly MUL = 77;
	public static readonly DIV_EQ = 78;
	public static readonly DIV = 79;
	public static readonly MOD_EQ = 80;
	public static readonly MOD = 81;
	public static readonly LT_EQ = 82;
	public static readonly LT = 83;
	public static readonly GT_EQ = 84;
	public static readonly GT = 85;
	public static readonly POW = 86;
	public static readonly BoolLiteral = 87;
	public static readonly HashIdent = 88;
	public static readonly DollarIdent = 89;
	public static readonly PercentIdent = 90;
	public static readonly EscapedIdent = 91;
	public static readonly Ident = 92;
	public static readonly StringLiteral = 93;
	public static readonly DoubleQuotedString = 94;
	public static readonly SingleQuotedString = 95;
	public static readonly DecLiteral = 96;
	public static readonly IntLiteral = 97;
	public static readonly DOC_LINE_COMMENT = 98;
	public static readonly DOC_BLOCK_COMMENT = 99;
	public static readonly LINE_COMMENT = 100;
	public static readonly BLOCK_COMMENT = 101;
	public static readonly WS = 102;
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
	public static readonly RULE_blockClosureExpr = 50;
	public static readonly RULE_exprClosureExpr = 51;
	public static readonly RULE_structExpr_ = 52;
	public static readonly RULE_tupleExpr_ = 53;
	public static readonly RULE_returnExpr_ = 54;
	public static readonly RULE_failExpr_ = 55;
	public static readonly RULE_literal = 56;
	public static readonly RULE_stringLit = 57;
	public static readonly RULE_intLit = 58;
	public static readonly RULE_decLit = 59;
	public static readonly RULE_boolLit = 60;
	public static readonly RULE_noneLit = 61;
	public static readonly RULE_typeExpr = 62;
	public static readonly RULE_typeVar = 63;
	public static readonly RULE_ident = 64;
	public static readonly RULE_param = 65;
	public static readonly RULE_field = 66;
	public static readonly RULE_namedArg = 67;
	public static readonly RULE_arg = 68;
	public static readonly RULE_identList = 69;
	public static readonly RULE_parenParamList = 70;
	public static readonly RULE_barsParamList = 71;
	public static readonly RULE_tupleParamList = 72;
	public static readonly RULE_braceParamList = 73;
	public static readonly RULE_brackTypeParamList = 74;
	public static readonly RULE_brackTypeExprList = 75;
	public static readonly RULE_braceFieldList = 76;
	public static readonly RULE_typeExprList = 77;
	public static readonly RULE_block = 78;
	public static readonly RULE_blockOrExpr = 79;
	public static readonly RULE_keywordIdent = 80;
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
		"tryCatchElseExpr_", "catchClause", "blockClosureExpr", "exprClosureExpr", 
		"structExpr_", "tupleExpr_", "returnExpr_", "failExpr_", "literal", "stringLit", 
		"intLit", "decLit", "boolLit", "noneLit", "typeExpr", "typeVar", "ident", 
		"param", "field", "namedArg", "arg", "identList", "parenParamList", "barsParamList", 
		"tupleParamList", "braceParamList", "brackTypeParamList", "brackTypeExprList", 
		"braceFieldList", "typeExprList", "block", "blockOrExpr", "keywordIdent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'interface'", "'import'", "'export'", "'implements'", 
		"'impl'", "'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", 
		"'exec!'", "'query!'", "'delegate_exec!'", "'#instantiate'", "'instantiate'", 
		"'exec'", "'query'", "'reply'", "'for'", "'in'", "'from'", "'state'", 
		"'if'", "'is'", "'try'", "'catch'", "'else'", "'not'", "'None'", "'and'", 
		"'or'", "'true'", "'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", 
		"'struct'", "'tuple'", "'unit'", "'enum'", "'type'", "'emit!'", "'as'", 
		"'('", "')'", "'['", "']'", "'{'", "'}'", "'|'", "'.'", "','", "'??'", 
		"'?'", "'!'", "';'", "':'", "'@'", "'&'", "'->'", "'=>'", "'''", "'\"'", 
		"'f\"'", "'`'", "'='", "'=='", "'!='", "'+='", "'+'", "'-='", "'-'", "'*='", 
		"'*'", "'/='", "'/'", "'%='", "'%'", "'<='", "'<'", "'>='", "'>'", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONTRACT", "INTERFACE", "IMPORT", "EXPORT", "IMPLEMENTS", 
		"IMPL", "EXTENDS", "ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", 
		"QUERY_NOW", "DELEGATE_EXEC", "H_INSTANTIATE", "INSTANTIATE", "EXEC", 
		"QUERY", "REPLY", "FOR", "IN", "FROM", "STATE", "IF", "IS", "TRY", "CATCH", 
		"ELSE", "NOT", "NONE", "AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", 
		"FAIL", "RETURN", "STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", "AS", 
		"LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "BAR", "DOT", 
		"COMMA", "D_QUEST", "QUEST", "BANG", "SEMI", "COLON", "AT", "AMP", "ARROW", 
		"FAT_ARROW", "S_QUOTE", "D_QUOTE", "F_DQUOTE", "BACKTICK", "EQ", "D_EQ", 
		"NEQ", "PLUS_EQ", "PLUS", "MINUS_EQ", "MINUS", "MUL_EQ", "MUL", "DIV_EQ", 
		"DIV", "MOD_EQ", "MOD", "LT_EQ", "LT", "GT_EQ", "GT", "POW", "BoolLiteral", 
		"HashIdent", "DollarIdent", "PercentIdent", "EscapedIdent", "Ident", "StringLiteral", 
		"DoubleQuotedString", "SingleQuotedString", "DecLiteral", "IntLiteral", 
		"DOC_LINE_COMMENT", "DOC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", 
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
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CWScriptParser.BoolLiteral - 87)) | (1 << (CWScriptParser.HashIdent - 87)) | (1 << (CWScriptParser.DollarIdent - 87)) | (1 << (CWScriptParser.PercentIdent - 87)) | (1 << (CWScriptParser.EscapedIdent - 87)) | (1 << (CWScriptParser.Ident - 87)) | (1 << (CWScriptParser.StringLiteral - 87)) | (1 << (CWScriptParser.DecLiteral - 87)) | (1 << (CWScriptParser.IntLiteral - 87)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 87)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 87)))) !== 0)) {
				{
				{
				this.state = 162;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
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
			this.state = 170;
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
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
				this.exportStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 174;
				this.defn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 175;
				this.letStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 176;
				this.constStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 177;
				this.assignStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 178;
				this.memberAssignStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 179;
				this.indexAssignStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 180;
				this.ifStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 181;
				this.tryCatchElseStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 182;
				this.forStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 183;
				this.execStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 184;
				this.instantiateStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 185;
				this.emitStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 186;
				this.failStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 187;
				this.returnStmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 188;
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
			this.state = 191;
			this.match(CWScriptParser.IMPORT);
			{
			this.state = 192;
			_localctx._bindings = this.braceBindingList();
			}
			this.state = 193;
			this.match(CWScriptParser.FROM);
			{
			this.state = 194;
			_localctx._src = this.stringLit();
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
	public exportStmt(): ExportStmtContext {
		let _localctx: ExportStmtContext = new ExportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_exportStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(CWScriptParser.EXPORT);
			{
			this.state = 199;
			_localctx._fields = this.braceFieldList();
			}
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 200;
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
			this.state = 203;
			_localctx._name = this.ident();
			}
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.AS) {
				{
				this.state = 204;
				this.match(CWScriptParser.AS);
				{
				this.state = 205;
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
			this.state = 208;
			this.binding();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 209;
				this.match(CWScriptParser.COMMA);
				this.state = 210;
				this.binding();
				}
				}
				this.state = 215;
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
			this.state = 216;
			this.match(CWScriptParser.LBRACK);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 217;
				this.ident();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 218;
					this.match(CWScriptParser.COMMA);
					this.state = 219;
					this.ident();
					}
					}
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 227;
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
			this.state = 229;
			this.match(CWScriptParser.LBRACE);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 230;
				this.binding();
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 231;
						this.match(CWScriptParser.COMMA);
						this.state = 232;
						this.binding();
						}
						}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				}
			}

			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 240;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 243;
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
			this.state = 290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				_localctx = new LetIdentStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 245;
					(_localctx as LetIdentStmtContext)._doc = this.docComment();
					}
				}

				this.state = 248;
				this.match(CWScriptParser.LET);
				{
				this.state = 249;
				(_localctx as LetIdentStmtContext)._name = this.ident();
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 250;
					this.match(CWScriptParser.COLON);
					this.state = 251;
					(_localctx as LetIdentStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 254;
				this.match(CWScriptParser.EQ);
				this.state = 255;
				(_localctx as LetIdentStmtContext)._value = this.expr(0);
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 257;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new LetTupleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 260;
					(_localctx as LetTupleStmtContext)._doc = this.docComment();
					}
				}

				this.state = 263;
				this.match(CWScriptParser.LET);
				{
				this.state = 264;
				(_localctx as LetTupleStmtContext)._names = this.brackIdentList();
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 265;
					this.match(CWScriptParser.COLON);
					this.state = 266;
					(_localctx as LetTupleStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 269;
				this.match(CWScriptParser.EQ);
				this.state = 270;
				(_localctx as LetTupleStmtContext)._value = this.expr(0);
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 272;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 3:
				_localctx = new LetStructStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 275;
					(_localctx as LetStructStmtContext)._doc = this.docComment();
					}
				}

				this.state = 278;
				this.match(CWScriptParser.LET);
				{
				this.state = 279;
				(_localctx as LetStructStmtContext)._bindings = this.braceBindingList();
				}
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 280;
					this.match(CWScriptParser.COLON);
					this.state = 281;
					(_localctx as LetStructStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 284;
				this.match(CWScriptParser.EQ);
				this.state = 285;
				(_localctx as LetStructStmtContext)._value = this.expr(0);
				}
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 287;
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
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				_localctx = new ConstIdentStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 292;
					(_localctx as ConstIdentStmtContext)._doc = this.docComment();
					}
				}

				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 295;
					(_localctx as ConstIdentStmtContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 298;
				this.match(CWScriptParser.CONST);
				{
				this.state = 299;
				(_localctx as ConstIdentStmtContext)._name = this.ident();
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 300;
					this.match(CWScriptParser.COLON);
					this.state = 301;
					(_localctx as ConstIdentStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 304;
				this.match(CWScriptParser.EQ);
				this.state = 305;
				(_localctx as ConstIdentStmtContext)._value = this.expr(0);
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 307;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new ConstTupleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 310;
					(_localctx as ConstTupleStmtContext)._doc = this.docComment();
					}
				}

				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 313;
					(_localctx as ConstTupleStmtContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 316;
				this.match(CWScriptParser.CONST);
				{
				this.state = 317;
				(_localctx as ConstTupleStmtContext)._names = this.brackIdentList();
				}
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 318;
					this.match(CWScriptParser.COLON);
					this.state = 319;
					(_localctx as ConstTupleStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 322;
				this.match(CWScriptParser.EQ);
				this.state = 323;
				(_localctx as ConstTupleStmtContext)._value = this.expr(0);
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 325;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 3:
				_localctx = new ConstStructStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 328;
					(_localctx as ConstStructStmtContext)._doc = this.docComment();
					}
				}

				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 331;
					(_localctx as ConstStructStmtContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 334;
				this.match(CWScriptParser.CONST);
				{
				this.state = 335;
				(_localctx as ConstStructStmtContext)._bindings = this.braceBindingList();
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 336;
					this.match(CWScriptParser.COLON);
					this.state = 337;
					(_localctx as ConstStructStmtContext)._ty = this.typeExpr(0);
					}
				}

				{
				this.state = 340;
				this.match(CWScriptParser.EQ);
				this.state = 341;
				(_localctx as ConstStructStmtContext)._value = this.expr(0);
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 343;
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
			this.state = 348;
			_localctx._name = this.ident();
			}
			this.state = 349;
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
			this.state = 350;
			_localctx._value = this.expr(0);
			}
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 351;
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
			this.state = 354;
			_localctx._obj = this.expr(0);
			}
			this.state = 355;
			this.match(CWScriptParser.DOT);
			{
			this.state = 356;
			_localctx._memberName = this.ident();
			}
			this.state = 357;
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
			this.state = 358;
			_localctx._value = this.expr(0);
			}
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 359;
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
			this.state = 362;
			_localctx._obj = this.expr(0);
			}
			this.state = 363;
			this.match(CWScriptParser.LBRACK);
			this.state = 364;
			_localctx._index = this.expr(0);
			this.state = 365;
			this.match(CWScriptParser.RBRACK);
			this.state = 366;
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
			this.state = 367;
			_localctx._value = this.expr(0);
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 368;
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
			this.state = 371;
			this.tryCatchElseExpr_();
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
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.ifExpr_();
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.returnExpr_();
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
	public failStmt(): FailStmtContext {
		let _localctx: FailStmtContext = new FailStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_failStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.failExpr_();
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
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CWScriptParser.RULE_forStmt);
		let _la: number;
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new ForIdentStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.match(CWScriptParser.FOR);
				{
				this.state = 388;
				(_localctx as ForIdentStmtContext)._name = this.ident();
				}
				this.state = 389;
				this.match(CWScriptParser.IN);
				{
				this.state = 390;
				(_localctx as ForIdentStmtContext)._iter = this.expr(0);
				}
				this.state = 391;
				(_localctx as ForIdentStmtContext)._body = this.block();
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 392;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 2:
				_localctx = new ForTupleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 395;
				this.match(CWScriptParser.FOR);
				{
				this.state = 396;
				(_localctx as ForTupleStmtContext)._names = this.brackIdentList();
				}
				{
				this.state = 397;
				(_localctx as ForTupleStmtContext)._iter = this.expr(0);
				}
				this.state = 398;
				(_localctx as ForTupleStmtContext)._body = this.block();
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 399;
					this.match(CWScriptParser.SEMI);
					}
				}

				}
				break;

			case 3:
				_localctx = new ForStructStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 402;
				this.match(CWScriptParser.FOR);
				{
				this.state = 403;
				(_localctx as ForStructStmtContext)._bindings = this.braceBindingList();
				}
				{
				this.state = 404;
				(_localctx as ForStructStmtContext)._iter = this.expr(0);
				}
				this.state = 405;
				(_localctx as ForStructStmtContext)._body = this.block();
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SEMI) {
					{
					this.state = 406;
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
			this.state = 411;
			this.match(CWScriptParser.EXEC_NOW);
			this.state = 412;
			_localctx._value = this.expr(0);
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 413;
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
			this.state = 416;
			this.match(CWScriptParser.INSTANTIATE_NOW);
			this.state = 417;
			_localctx._value = this.expr(0);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 418;
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
			this.state = 421;
			this.match(CWScriptParser.EMIT);
			this.state = 422;
			_localctx._value = this.expr(0);
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 423;
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
			this.state = 443;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.contractDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.interfaceDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
				this.structDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 429;
				this.tupleDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 430;
				this.unitDefn();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 431;
				this.enumDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 432;
				this.typeAliasDefn();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 433;
				this.fnDefn();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 434;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 435;
				this.execDefn();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 436;
				this.execTupleDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 437;
				this.queryDefn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 438;
				this.queryTupleDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 439;
				this.errorDefn();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 440;
				this.eventDefn();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 441;
				this.stateBlockDefn();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 442;
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
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 445;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 448;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 451;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 452;
			_localctx._name = this.ident();
			}
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 453;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 454;
				_localctx._base = this.typeExpr(0);
				}
				}
			}

			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 457;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 458;
				_localctx._interfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 461;
			_localctx._body = this.block();
			}
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
	public interfaceDefn(): InterfaceDefnContext {
		let _localctx: InterfaceDefnContext = new InterfaceDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 465;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 468;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 471;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 472;
			_localctx._name = this.ident();
			}
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 473;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 474;
				_localctx._baseInterfaces = this.typeExprList();
				}
				}
			}

			{
			this.state = 477;
			_localctx._body = this.block();
			}
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 478;
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
			this.state = 511;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 481;
					(_localctx as StructDefnBraceContext)._doc = this.docComment();
					}
				}

				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 484;
					(_localctx as StructDefnBraceContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 487;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 488;
				(_localctx as StructDefnBraceContext)._name = this.ident();
				}
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 489;
					(_localctx as StructDefnBraceContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 492;
				(_localctx as StructDefnBraceContext)._fields = this.braceParamList();
				}
				this.state = 494;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
				case 1:
					{
					this.state = 493;
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
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 496;
					(_localctx as StructDefnParenContext)._doc = this.docComment();
					}
				}

				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EXPORT) {
					{
					this.state = 499;
					(_localctx as StructDefnParenContext)._exported = this.match(CWScriptParser.EXPORT);
					}
				}

				this.state = 502;
				this.match(CWScriptParser.STRUCT);
				{
				this.state = 503;
				(_localctx as StructDefnParenContext)._name = this.ident();
				}
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.LBRACK) {
					{
					this.state = 504;
					(_localctx as StructDefnParenContext)._typeParams = this.brackTypeParamList();
					}
				}

				{
				this.state = 507;
				(_localctx as StructDefnParenContext)._fields = this.parenParamList();
				}
				this.state = 509;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 508;
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
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 513;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 516;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 519;
			this.match(CWScriptParser.TUPLE);
			{
			this.state = 520;
			_localctx._name = this.ident();
			}
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 521;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 524;
			this.match(CWScriptParser.LPAREN);
			{
			this.state = 525;
			_localctx._elements = this.brackTypeExprList();
			}
			this.state = 526;
			this.match(CWScriptParser.RPAREN);
			this.state = 528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 527;
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
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 530;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 533;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 536;
			this.match(CWScriptParser.UNIT);
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 537;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 540;
			_localctx._name = this.ident();
			}
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 541;
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
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 544;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 547;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 550;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 551;
			_localctx._name = this.ident();
			}
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 552;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 555;
			this.match(CWScriptParser.LBRACE);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 556;
				_localctx._variants = this.enumVariantDefnList();
				}
			}

			this.state = 559;
			this.match(CWScriptParser.RBRACE);
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 560;
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
			this.state = 563;
			this.enumVariantDefn();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 564;
				this.match(CWScriptParser.COMMA);
				this.state = 565;
				this.enumVariantDefn();
				}
				}
				this.state = 570;
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
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 571;
					(_localctx as EnumVariantStructDefnBraceContext)._doc = this.docComment();
					}
				}

				{
				this.state = 574;
				(_localctx as EnumVariantStructDefnBraceContext)._name = this.ident();
				}
				{
				this.state = 575;
				(_localctx as EnumVariantStructDefnBraceContext)._fields = this.braceParamList();
				}
				}
				break;

			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 577;
					(_localctx as EnumVariantStructDefnParenContext)._doc = this.docComment();
					}
				}

				{
				this.state = 580;
				(_localctx as EnumVariantStructDefnParenContext)._name = this.ident();
				}
				{
				this.state = 581;
				(_localctx as EnumVariantStructDefnParenContext)._fields = this.parenParamList();
				}
				}
				break;

			case 3:
				_localctx = new EnumVariantTupleDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 583;
					(_localctx as EnumVariantTupleDefnContext)._doc = this.docComment();
					}
				}

				{
				this.state = 586;
				(_localctx as EnumVariantTupleDefnContext)._name = this.ident();
				}
				this.state = 587;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 588;
				(_localctx as EnumVariantTupleDefnContext)._elements = this.brackTypeExprList();
				}
				this.state = 589;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				_localctx = new EnumVariantUnitDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
					{
					this.state = 591;
					(_localctx as EnumVariantUnitDefnContext)._doc = this.docComment();
					}
				}

				{
				this.state = 594;
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
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 597;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 600;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 603;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 604;
			_localctx._name = this.ident();
			}
			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 605;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			this.state = 608;
			this.match(CWScriptParser.EQ);
			{
			this.state = 609;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 610;
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
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 613;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 616;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 619;
			this.match(CWScriptParser.FN);
			{
			this.state = 620;
			_localctx._name = this.ident();
			}
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 621;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 624;
				_localctx._typeParams = this.brackTypeParamList();
				}
			}

			{
			this.state = 627;
			_localctx._params = this.parenParamList();
			}
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 628;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 629;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 632;
			_localctx._body = this.block();
			}
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 633;
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
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 636;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 639;
			this.match(CWScriptParser.H_INSTANTIATE);
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 640;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 643;
			_localctx._params = this.parenParamList();
			}
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 644;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 645;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 648;
			_localctx._body = this.block();
			}
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 649;
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
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 652;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 655;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 656;
			_localctx._name = this.ident();
			}
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 657;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 660;
			_localctx._params = this.parenParamList();
			}
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 661;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 662;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 665;
			_localctx._body = this.block();
			}
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 666;
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
			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 669;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 672;
			this.match(CWScriptParser.EXEC);
			{
			this.state = 673;
			_localctx._name = this.ident();
			}
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 674;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 677;
			_localctx._params = this.tupleParamList();
			}
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 678;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 679;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 682;
			_localctx._body = this.block();
			}
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 683;
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
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 686;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 689;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 690;
			_localctx._name = this.ident();
			}
			this.state = 692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 691;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 694;
			_localctx._params = this.parenParamList();
			}
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 695;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 696;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 699;
			_localctx._body = this.block();
			}
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 700;
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
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 703;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 706;
			this.match(CWScriptParser.QUERY);
			{
			this.state = 707;
			_localctx._name = this.ident();
			}
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 708;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 711;
			_localctx._params = this.tupleParamList();
			}
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 712;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 713;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 716;
			_localctx._body = this.block();
			}
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 717;
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
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 720;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 723;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 726;
			this.match(CWScriptParser.ERROR);
			{
			this.state = 727;
			_localctx._name = this.ident();
			}
			{
			this.state = 728;
			_localctx._params = this.parenParamList();
			}
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 729;
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
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 732;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXPORT) {
				{
				this.state = 735;
				_localctx._exported = this.match(CWScriptParser.EXPORT);
				}
			}

			this.state = 738;
			this.match(CWScriptParser.EVENT);
			{
			this.state = 739;
			_localctx._name = this.ident();
			}
			{
			this.state = 740;
			_localctx._params = this.parenParamList();
			}
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 741;
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
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 744;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 747;
			this.match(CWScriptParser.STATE);
			this.state = 748;
			this.match(CWScriptParser.LBRACE);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				{
				this.state = 749;
				_localctx._stateDefn = this.stateDefn();
				_localctx._stateFields.push(_localctx._stateDefn);
				}
				}
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 755;
			this.match(CWScriptParser.RBRACE);
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 756;
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
			this.state = 761;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 759;
				this.stateItemDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 760;
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
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 763;
				_localctx._doc = this.docComment();
				}
			}

			{
			this.state = 766;
			_localctx._name = this.ident();
			}
			this.state = 767;
			this.match(CWScriptParser.COLON);
			{
			this.state = 768;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 769;
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
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 772;
				_localctx._doc = this.docComment();
				}
			}

			{
			this.state = 775;
			_localctx._name = this.ident();
			}
			this.state = 776;
			this.match(CWScriptParser.LBRACK);
			{
			this.state = 777;
			_localctx._indexTy = this.typeExpr(0);
			}
			this.state = 778;
			this.match(CWScriptParser.RBRACK);
			this.state = 779;
			this.match(CWScriptParser.COLON);
			{
			this.state = 780;
			_localctx._ty = this.typeExpr(0);
			}
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 781;
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
			this.state = 785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 784;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 787;
			this.match(CWScriptParser.IMPL);
			{
			this.state = 788;
			_localctx._name = this.ident();
			}
			{
			this.state = 789;
			_localctx._typeParams = this.brackTypeParamList();
			}
			{
			this.state = 790;
			_localctx._body = this.block();
			}
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SEMI) {
				{
				this.state = 791;
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
			this.state = 794;
			this.expr(0);
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 795;
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
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 799;
				this.match(CWScriptParser.NOT);
				this.state = 800;
				this.expr(22);
				}
				break;

			case 2:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 801;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 802;
				this.expr(18);
				}
				break;

			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 803;
				this.ifExpr_();
				}
				break;

			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 804;
				this.tryCatchElseExpr_();
				}
				break;

			case 5:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 805;
				this.blockClosureExpr();
				}
				break;

			case 6:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 806;
				this.exprClosureExpr();
				}
				break;

			case 7:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 807;
				this.structExpr_();
				}
				break;

			case 8:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 808;
				this.tupleExpr_();
				}
				break;

			case 9:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 809;
				this.literal();
				}
				break;

			case 10:
				{
				_localctx = new ReturnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 810;
				this.returnExpr_();
				}
				break;

			case 11:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 811;
				this.failExpr_();
				}
				break;

			case 12:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 812;
				this.ident();
				}
				break;

			case 13:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 813;
				this.match(CWScriptParser.LPAREN);
				this.state = 814;
				this.expr(0);
				this.state = 815;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 883;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 881;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 819;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						{
						this.state = 820;
						(_localctx as MulExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (CWScriptParser.MUL - 77)) | (1 << (CWScriptParser.DIV - 77)) | (1 << (CWScriptParser.MOD - 77)))) !== 0))) {
							(_localctx as MulExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 821;
						this.expr(22);
						}
						break;

					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 822;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 823;
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
						this.state = 824;
						this.expr(21);
						}
						break;

					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 825;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						{
						this.state = 826;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CWScriptParser.LT_EQ - 82)) | (1 << (CWScriptParser.LT - 82)) | (1 << (CWScriptParser.GT_EQ - 82)) | (1 << (CWScriptParser.GT - 82)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						this.state = 827;
						this.expr(20);
						}
						break;

					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 828;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 829;
						this.match(CWScriptParser.D_QUEST);
						this.state = 830;
						this.expr(18);
						}
						break;

					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 831;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 833;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 832;
							(_localctx as InExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						this.state = 835;
						this.match(CWScriptParser.IN);
						this.state = 836;
						this.expr(17);
						}
						break;

					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 837;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						{
						this.state = 838;
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
						this.state = 839;
						this.expr(15);
						}
						break;

					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 840;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 841;
						this.match(CWScriptParser.AND);
						this.state = 842;
						this.expr(14);
						}
						break;

					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 843;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 844;
						this.match(CWScriptParser.OR);
						this.state = 845;
						this.expr(13);
						}
						break;

					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 846;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 847;
						this.match(CWScriptParser.DOT);
						{
						this.state = 848;
						(_localctx as DotExprContext)._memberName = this.ident();
						}
						}
						break;

					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 849;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 851;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 850;
							(_localctx as CallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 854;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.LBRACK) {
							{
							this.state = 853;
							(_localctx as CallExprContext)._typeArgs = this.brackTypeExprList();
							}
						}

						this.state = 856;
						this.match(CWScriptParser.LPAREN);
						this.state = 865;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CWScriptParser.BoolLiteral - 87)) | (1 << (CWScriptParser.HashIdent - 87)) | (1 << (CWScriptParser.DollarIdent - 87)) | (1 << (CWScriptParser.PercentIdent - 87)) | (1 << (CWScriptParser.EscapedIdent - 87)) | (1 << (CWScriptParser.Ident - 87)) | (1 << (CWScriptParser.StringLiteral - 87)) | (1 << (CWScriptParser.DecLiteral - 87)) | (1 << (CWScriptParser.IntLiteral - 87)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 87)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 87)))) !== 0)) {
							{
							{
							this.state = 857;
							(_localctx as CallExprContext)._arg = this.arg();
							(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
							}
							this.state = 862;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 858;
								this.match(CWScriptParser.COMMA);
								this.state = 859;
								(_localctx as CallExprContext)._arg = this.arg();
								(_localctx as CallExprContext)._args.push((_localctx as CallExprContext)._arg);
								}
								}
								this.state = 864;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 867;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 868;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 869;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 870;
						(_localctx as IndexExprContext)._index = this.expr(0);
						}
						this.state = 871;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 12:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 873;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 874;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 13:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 875;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 876;
						this.match(CWScriptParser.IS);
						this.state = 878;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 877;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 880;
						(_localctx as IsExprContext)._ty = this.typeExpr(0);
						}
						}
						break;
					}
					}
				}
				this.state = 885;
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
			this.state = 886;
			this.match(CWScriptParser.IF);
			{
			this.state = 887;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 888;
			_localctx._thenBody = this.blockOrExpr();
			}
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 889;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 890;
				_localctx._elseBody = this.blockOrExpr();
				}
				}
				break;
			}
			this.state = 894;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 893;
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
			this.state = 896;
			this.match(CWScriptParser.TRY);
			{
			this.state = 897;
			_localctx._body = this.block();
			}
			this.state = 901;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 898;
					_localctx._catchClause = this.catchClause();
					_localctx._catchClauses.push(_localctx._catchClause);
					}
					}
				}
				this.state = 903;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 904;
				this.match(CWScriptParser.ELSE);
				{
				this.state = 905;
				_localctx._elseBody = this.block();
				}
				}
				break;
			}
			this.state = 909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 908;
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
			this.state = 911;
			this.match(CWScriptParser.CATCH);
			{
			this.state = 912;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 913;
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
	public blockClosureExpr(): BlockClosureExprContext {
		let _localctx: BlockClosureExprContext = new BlockClosureExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CWScriptParser.RULE_blockClosureExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 915;
			_localctx._params = this.barsParamList();
			}
			this.state = 917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 916;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 919;
				this.match(CWScriptParser.ARROW);
				{
				this.state = 920;
				_localctx._returnTy = this.typeExpr(0);
				}
				}
			}

			{
			this.state = 923;
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
		this.enterRule(_localctx, 102, CWScriptParser.RULE_exprClosureExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 925;
			_localctx._params = this.barsParamList();
			}
			this.state = 927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 926;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 929;
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
		this.enterRule(_localctx, 104, CWScriptParser.RULE_structExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 931;
			_localctx._ty = this.typeExpr(0);
			}
			{
			this.state = 932;
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
		this.enterRule(_localctx, 106, CWScriptParser.RULE_tupleExpr_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.match(CWScriptParser.LBRACK);
			this.state = 943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CWScriptParser.BoolLiteral - 87)) | (1 << (CWScriptParser.HashIdent - 87)) | (1 << (CWScriptParser.DollarIdent - 87)) | (1 << (CWScriptParser.PercentIdent - 87)) | (1 << (CWScriptParser.EscapedIdent - 87)) | (1 << (CWScriptParser.Ident - 87)) | (1 << (CWScriptParser.StringLiteral - 87)) | (1 << (CWScriptParser.DecLiteral - 87)) | (1 << (CWScriptParser.IntLiteral - 87)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 87)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 87)))) !== 0)) {
				{
				{
				this.state = 935;
				_localctx._expr = this.expr(0);
				_localctx._elements.push(_localctx._expr);
				}
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 936;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 937;
					_localctx._expr = this.expr(0);
					_localctx._elements.push(_localctx._expr);
					}
					}
					}
					this.state = 942;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 945;
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
		this.enterRule(_localctx, 108, CWScriptParser.RULE_returnExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(CWScriptParser.RETURN);
			{
			this.state = 948;
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
		this.enterRule(_localctx, 110, CWScriptParser.RULE_failExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.match(CWScriptParser.FAIL);
			{
			this.state = 951;
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
		this.enterRule(_localctx, 112, CWScriptParser.RULE_literal);
		try {
			this.state = 958;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 953;
				this.stringLit();
				}
				break;
			case CWScriptParser.IntLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 954;
				this.intLit();
				}
				break;
			case CWScriptParser.DecLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 955;
				this.decLit();
				}
				break;
			case CWScriptParser.BoolLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 956;
				this.boolLit();
				}
				break;
			case CWScriptParser.NONE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 957;
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
		this.enterRule(_localctx, 114, CWScriptParser.RULE_stringLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
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
		this.enterRule(_localctx, 116, CWScriptParser.RULE_intLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
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
		this.enterRule(_localctx, 118, CWScriptParser.RULE_decLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
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
		this.enterRule(_localctx, 120, CWScriptParser.RULE_boolLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
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
		this.enterRule(_localctx, 122, CWScriptParser.RULE_noneLit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
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
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, CWScriptParser.RULE_typeExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 971;
				this.match(CWScriptParser.LPAREN);
				this.state = 972;
				this.typeExpr(0);
				this.state = 973;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				{
				this.state = 975;
				(_localctx as TupleTypeExprContext)._elements = this.brackTypeExprList();
				}
				}
				break;

			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 976;
				this.match(CWScriptParser.LBRACK);
				this.state = 977;
				this.typeExpr(0);
				this.state = 978;
				this.match(CWScriptParser.SEMI);
				{
				this.state = 979;
				(_localctx as ArrayTypeExprContext)._size = this.intLit();
				}
				this.state = 980;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 4:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 982;
				this.structDefn();
				}
				break;

			case 5:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 983;
				this.tupleDefn();
				}
				break;

			case 6:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 984;
				this.unitDefn();
				}
				break;

			case 7:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 985;
				this.enumDefn();
				}
				break;

			case 8:
				{
				_localctx = new TypeVarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 986;
				this.typeVar();
				}
				break;

			case 9:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 987;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 999;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 997;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 990;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 991;
						(_localctx as ParameterizedTypeExprContext)._typeArgs = this.brackTypeExprList();
						}
						}
						break;

					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 992;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 993;
						this.match(CWScriptParser.DOT);
						{
						this.state = 994;
						(_localctx as MemberTypeExprContext)._memberName = this.ident();
						}
						}
						break;

					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 995;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 996;
						this.match(CWScriptParser.QUEST);
						}
						break;
					}
					}
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
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
		this.enterRule(_localctx, 126, CWScriptParser.RULE_typeVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 1002;
				_localctx._doc = this.docComment();
				}
			}

			this.state = 1005;
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
		this.enterRule(_localctx, 128, CWScriptParser.RULE_ident);
		try {
			this.state = 1012;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.HashIdent:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.match(CWScriptParser.HashIdent);
				}
				break;
			case CWScriptParser.DollarIdent:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1008;
				this.match(CWScriptParser.DollarIdent);
				}
				break;
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1009;
				this.match(CWScriptParser.Ident);
				}
				break;
			case CWScriptParser.EscapedIdent:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1010;
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
				this.state = 1011;
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
		this.enterRule(_localctx, 130, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOC_LINE_COMMENT || _la === CWScriptParser.DOC_BLOCK_COMMENT) {
				{
				this.state = 1014;
				_localctx._doc = this.docComment();
				}
			}

			{
			this.state = 1017;
			_localctx._name = this.ident();
			}
			this.state = 1019;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 1018;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 1023;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 1021;
				this.match(CWScriptParser.COLON);
				{
				this.state = 1022;
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
		this.enterRule(_localctx, 132, CWScriptParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1025;
			_localctx._name = this.ident();
			}
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 1026;
				this.match(CWScriptParser.COLON);
				{
				this.state = 1027;
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
		this.enterRule(_localctx, 134, CWScriptParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1030;
			_localctx._name = this.ident();
			}
			this.state = 1031;
			this.match(CWScriptParser.EQ);
			{
			this.state = 1032;
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
		this.enterRule(_localctx, 136, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1034;
				this.expr(0);
				}
				break;

			case 2:
				{
				this.state = 1035;
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
		this.enterRule(_localctx, 138, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1038;
			this.ident();
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1039;
				this.match(CWScriptParser.COMMA);
				this.state = 1040;
				this.ident();
				}
				}
				this.state = 1045;
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
		this.enterRule(_localctx, 140, CWScriptParser.RULE_parenParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.match(CWScriptParser.LPAREN);
			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 1047;
				this.param();
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1048;
					this.match(CWScriptParser.COMMA);
					this.state = 1049;
					this.param();
					}
					}
					this.state = 1054;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1057;
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
		this.enterRule(_localctx, 142, CWScriptParser.RULE_barsParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.match(CWScriptParser.BAR);
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 1060;
				this.param();
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1061;
					this.match(CWScriptParser.COMMA);
					this.state = 1062;
					this.param();
					}
					}
					this.state = 1067;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1070;
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
		this.enterRule(_localctx, 144, CWScriptParser.RULE_tupleParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.match(CWScriptParser.LPAREN);
			this.state = 1073;
			this.match(CWScriptParser.LBRACK);
			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 1074;
				this.param();
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1075;
					this.match(CWScriptParser.COMMA);
					this.state = 1076;
					this.param();
					}
					}
					this.state = 1081;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1084;
			this.match(CWScriptParser.RBRACK);
			this.state = 1085;
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
		this.enterRule(_localctx, 146, CWScriptParser.RULE_braceParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.match(CWScriptParser.LBRACE);
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 1088;
				this.param();
				this.state = 1093;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1089;
						this.match(CWScriptParser.COMMA);
						this.state = 1090;
						this.param();
						}
						}
					}
					this.state = 1095;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
				}
				}
			}

			this.state = 1099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 1098;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 1101;
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
		this.enterRule(_localctx, 148, CWScriptParser.RULE_brackTypeParamList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this.match(CWScriptParser.LBRACK);
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (CWScriptParser.PercentIdent - 90)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 90)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 90)))) !== 0)) {
				{
				this.state = 1104;
				this.typeVar();
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1105;
					this.match(CWScriptParser.COMMA);
					this.state = 1106;
					this.typeVar();
					}
					}
					this.state = 1111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1114;
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
		this.enterRule(_localctx, 150, CWScriptParser.RULE_brackTypeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			this.match(CWScriptParser.LBRACK);
			this.state = 1125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.PercentIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 88)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 88)))) !== 0)) {
				{
				this.state = 1117;
				this.typeExpr(0);
				this.state = 1122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 1118;
					this.match(CWScriptParser.COMMA);
					this.state = 1119;
					this.typeExpr(0);
					}
					}
					this.state = 1124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1127;
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
		this.enterRule(_localctx, 152, CWScriptParser.RULE_braceFieldList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			this.match(CWScriptParser.LBRACE);
			this.state = 1138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CWScriptParser.HashIdent - 88)) | (1 << (CWScriptParser.DollarIdent - 88)) | (1 << (CWScriptParser.EscapedIdent - 88)) | (1 << (CWScriptParser.Ident - 88)))) !== 0)) {
				{
				this.state = 1130;
				this.field();
				this.state = 1135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1131;
						this.match(CWScriptParser.COMMA);
						this.state = 1132;
						this.field();
						}
						}
					}
					this.state = 1137;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				}
				}
			}

			this.state = 1141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 1140;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 1143;
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
		this.enterRule(_localctx, 154, CWScriptParser.RULE_typeExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1145;
			this.typeExpr(0);
			this.state = 1150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1146;
				this.match(CWScriptParser.COMMA);
				this.state = 1147;
				this.typeExpr(0);
				}
				}
				this.state = 1152;
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
		this.enterRule(_localctx, 156, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.match(CWScriptParser.LBRACE);
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.EXPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.IMPL) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.H_INSTANTIATE) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.AND))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.OR - 32)) | (1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.TUPLE - 32)) | (1 << (CWScriptParser.UNIT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BAR - 32)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CWScriptParser.BoolLiteral - 87)) | (1 << (CWScriptParser.HashIdent - 87)) | (1 << (CWScriptParser.DollarIdent - 87)) | (1 << (CWScriptParser.PercentIdent - 87)) | (1 << (CWScriptParser.EscapedIdent - 87)) | (1 << (CWScriptParser.Ident - 87)) | (1 << (CWScriptParser.StringLiteral - 87)) | (1 << (CWScriptParser.DecLiteral - 87)) | (1 << (CWScriptParser.IntLiteral - 87)) | (1 << (CWScriptParser.DOC_LINE_COMMENT - 87)) | (1 << (CWScriptParser.DOC_BLOCK_COMMENT - 87)))) !== 0)) {
				{
				{
				this.state = 1154;
				_localctx._stmt = this.stmt();
				_localctx._stmts.push(_localctx._stmt);
				}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1160;
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
		this.enterRule(_localctx, 158, CWScriptParser.RULE_blockOrExpr);
		try {
			this.state = 1164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1162;
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
				this.state = 1163;
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
		this.enterRule(_localctx, 160, CWScriptParser.RULE_keywordIdent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
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

		case 62:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 21);

		case 1:
			return this.precpred(this._ctx, 20);

		case 2:
			return this.precpred(this._ctx, 19);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 26);

		case 9:
			return this.precpred(this._ctx, 25);

		case 10:
			return this.precpred(this._ctx, 24);

		case 11:
			return this.precpred(this._ctx, 23);

		case 12:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 11);

		case 14:
			return this.precpred(this._ctx, 10);

		case 15:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03h\u0493\x04\x02" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x03\x02\x07\x02\xA6\n\x02\f\x02\x0E\x02\xA9" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xC0\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\xC7\n\x05\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xCC\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\xD1\n\x07\x03\b\x03\b\x03\b" +
		"\x07\b\xD6\n\b\f\b\x0E\b\xD9\v\b\x03\t\x03\t\x03\t\x03\t\x07\t\xDF\n\t" +
		"\f\t\x0E\t\xE2\v\t\x05\t\xE4\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\xEC\n\n\f\n\x0E\n\xEF\v\n\x05\n\xF1\n\n\x03\n\x05\n\xF4\n\n\x03\n\x03" +
		"\n\x03\v\x05\v\xF9\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\xFF\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\u0105\n\v\x03\v\x05\v\u0108\n\v\x03\v\x03\v\x03\v" +
		"\x03\v\x05\v\u010E\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0114\n\v\x03\v\x05" +
		"\v\u0117\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u011D\n\v\x03\v\x03\v\x03\v" +
		"\x03\v\x05\v\u0123\n\v\x05\v\u0125\n\v\x03\f\x05\f\u0128\n\f\x03\f\x05" +
		"\f\u012B\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0131\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u0137\n\f\x03\f\x05\f\u013A\n\f\x03\f\x05\f\u013D\n\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\u0143\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0149" +
		"\n\f\x03\f\x05\f\u014C\n\f\x03\f\x05\f\u014F\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u0155\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u015B\n\f\x05\f\u015D" +
		"\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\u0163\n\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u016B\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0174\n\x0F\x03\x10\x03\x10\x05\x10\u0178" +
		"\n\x10\x03\x11\x03\x11\x05\x11\u017C\n\x11\x03\x12\x03\x12\x05\x12\u0180" +
		"\n\x12\x03\x13\x03\x13\x05\x13\u0184\n\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u018C\n\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u0193\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u019A\n\x14\x05\x14\u019C\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u01A1" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01A6\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u01AB\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u01BE\n\x18\x03\x19\x05\x19\u01C1\n\x19\x03\x19" +
		"\x05\x19\u01C4\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01CA\n\x19" +
		"\x03\x19\x03\x19\x05\x19\u01CE\n\x19\x03\x19\x03\x19\x05\x19\u01D2\n\x19" +
		"\x03\x1A\x05\x1A\u01D5\n\x1A\x03\x1A\x05\x1A\u01D8\n\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u01DE\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01E2\n\x1A" +
		"\x03\x1B\x05\x1B\u01E5\n\x1B\x03\x1B\x05\x1B\u01E8\n\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x05\x1B\u01ED\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01F1\n\x1B\x03\x1B" +
		"\x05\x1B\u01F4\n\x1B\x03\x1B\x05\x1B\u01F7\n\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x05\x1B\u01FC\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0200\n\x1B\x05\x1B\u0202" +
		"\n\x1B\x03\x1C\x05\x1C\u0205\n\x1C\x03\x1C\x05\x1C\u0208\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u020D\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u0213\n\x1C\x03\x1D\x05\x1D\u0216\n\x1D\x03\x1D\x05\x1D\u0219\n\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\u021D\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0221\n\x1D" +
		"\x03\x1E\x05\x1E\u0224\n\x1E\x03\x1E\x05\x1E\u0227\n\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u022C\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0230\n\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u0234\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0239\n\x1F" +
		"\f\x1F\x0E\x1F\u023C\v\x1F\x03 \x05 \u023F\n \x03 \x03 \x03 \x03 \x05" +
		" \u0245\n \x03 \x03 \x03 \x03 \x05 \u024B\n \x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x05 \u0253\n \x03 \x05 \u0256\n \x03!\x05!\u0259\n!\x03!\x05!\u025C" +
		"\n!\x03!\x03!\x03!\x05!\u0261\n!\x03!\x03!\x03!\x05!\u0266\n!\x03\"\x05" +
		"\"\u0269\n\"\x03\"\x05\"\u026C\n\"\x03\"\x03\"\x03\"\x05\"\u0271\n\"\x03" +
		"\"\x05\"\u0274\n\"\x03\"\x03\"\x03\"\x05\"\u0279\n\"\x03\"\x03\"\x05\"" +
		"\u027D\n\"\x03#\x05#\u0280\n#\x03#\x03#\x05#\u0284\n#\x03#\x03#\x03#\x05" +
		"#\u0289\n#\x03#\x03#\x05#\u028D\n#\x03$\x05$\u0290\n$\x03$\x03$\x03$\x05" +
		"$\u0295\n$\x03$\x03$\x03$\x05$\u029A\n$\x03$\x03$\x05$\u029E\n$\x03%\x05" +
		"%\u02A1\n%\x03%\x03%\x03%\x05%\u02A6\n%\x03%\x03%\x03%\x05%\u02AB\n%\x03" +
		"%\x03%\x05%\u02AF\n%\x03&\x05&\u02B2\n&\x03&\x03&\x03&\x05&\u02B7\n&\x03" +
		"&\x03&\x03&\x05&\u02BC\n&\x03&\x03&\x05&\u02C0\n&\x03\'\x05\'\u02C3\n" +
		"\'\x03\'\x03\'\x03\'\x05\'\u02C8\n\'\x03\'\x03\'\x03\'\x05\'\u02CD\n\'" +
		"\x03\'\x03\'\x05\'\u02D1\n\'\x03(\x05(\u02D4\n(\x03(\x05(\u02D7\n(\x03" +
		"(\x03(\x03(\x03(\x05(\u02DD\n(\x03)\x05)\u02E0\n)\x03)\x05)\u02E3\n)\x03" +
		")\x03)\x03)\x03)\x05)\u02E9\n)\x03*\x05*\u02EC\n*\x03*\x03*\x03*\x07*" +
		"\u02F1\n*\f*\x0E*\u02F4\v*\x03*\x03*\x05*\u02F8\n*\x03+\x03+\x05+\u02FC" +
		"\n+\x03,\x05,\u02FF\n,\x03,\x03,\x03,\x03,\x05,\u0305\n,\x03-\x05-\u0308" +
		"\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0311\n-\x03.\x05.\u0314\n" +
		".\x03.\x03.\x03.\x03.\x03.\x05.\u031B\n.\x03/\x03/\x05/\u031F\n/\x030" +
		"\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x050\u0334\n0\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x050\u0344\n0\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0356" +
		"\n0\x030\x050\u0359\n0\x030\x030\x030\x030\x070\u035F\n0\f0\x0E0\u0362" +
		"\v0\x050\u0364\n0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x050\u0371\n0\x030\x070\u0374\n0\f0\x0E0\u0377\v0\x031\x031\x031\x03" +
		"1\x031\x051\u037E\n1\x031\x051\u0381\n1\x032\x032\x032\x072\u0386\n2\f" +
		"2\x0E2\u0389\v2\x032\x032\x052\u038D\n2\x032\x052\u0390\n2\x033\x033\x03" +
		"3\x033\x034\x034\x054\u0398\n4\x034\x034\x054\u039C\n4\x034\x034\x035" +
		"\x035\x055\u03A2\n5\x035\x035\x036\x036\x036\x037\x037\x037\x037\x077" +
		"\u03AD\n7\f7\x0E7\u03B0\v7\x057\u03B2\n7\x037\x037\x038\x038\x038\x03" +
		"9\x039\x039\x03:\x03:\x03:\x03:\x03:\x05:\u03C1\n:\x03;\x03;\x03<\x03" +
		"<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03DF\n@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u03E8\n@\f@\x0E@\u03EB\v@\x03A\x05" +
		"A\u03EE\nA\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x05B\u03F7\nB\x03C\x05C" +
		"\u03FA\nC\x03C\x03C\x05C\u03FE\nC\x03C\x03C\x05C\u0402\nC\x03D\x03D\x03" +
		"D\x05D\u0407\nD\x03E\x03E\x03E\x03E\x03F\x03F\x05F\u040F\nF\x03G\x03G" +
		"\x03G\x07G\u0414\nG\fG\x0EG\u0417\vG\x03H\x03H\x03H\x03H\x07H\u041D\n" +
		"H\fH\x0EH\u0420\vH\x05H\u0422\nH\x03H\x03H\x03I\x03I\x03I\x03I\x07I\u042A" +
		"\nI\fI\x0EI\u042D\vI\x05I\u042F\nI\x03I\x03I\x03J\x03J\x03J\x03J\x03J" +
		"\x07J\u0438\nJ\fJ\x0EJ\u043B\vJ\x05J\u043D\nJ\x03J\x03J\x03J\x03K\x03" +
		"K\x03K\x03K\x07K\u0446\nK\fK\x0EK\u0449\vK\x05K\u044B\nK\x03K\x05K\u044E" +
		"\nK\x03K\x03K\x03L\x03L\x03L\x03L\x07L\u0456\nL\fL\x0EL\u0459\vL\x05L" +
		"\u045B\nL\x03L\x03L\x03M\x03M\x03M\x03M\x07M\u0463\nM\fM\x0EM\u0466\v" +
		"M\x05M\u0468\nM\x03M\x03M\x03N\x03N\x03N\x03N\x07N\u0470\nN\fN\x0EN\u0473" +
		"\vN\x05N\u0475\nN\x03N\x05N\u0478\nN\x03N\x03N\x03O\x03O\x03O\x07O\u047F" +
		"\nO\fO\x0EO\u0482\vO\x03P\x03P\x07P\u0486\nP\fP\x0EP\u0489\vP\x03P\x03" +
		"P\x03Q\x03Q\x05Q\u048F\nQ\x03R\x03R\x03R\x02\x02\x04^~S\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82" +
		"\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94" +
		"\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\x02\t\x03" +
		"\x02de\b\x02GGJJLLNNPPRR\x05\x02OOQQSS\x04\x02KKMM\x03\x02TW\x03\x02H" +
		"I\x07\x02\x03\v\x11\x1A\x1E\x1E \'*.\x02\u053F\x02\xA7\x03\x02\x02\x02" +
		"\x04\xAC\x03\x02\x02\x02\x06\xBF\x03\x02\x02\x02\b\xC1\x03\x02\x02\x02" +
		"\n\xC8\x03\x02\x02\x02\f\xCD\x03\x02\x02\x02\x0E\xD2\x03\x02\x02\x02\x10" +
		"\xDA\x03\x02\x02\x02\x12\xE7\x03\x02\x02\x02\x14\u0124\x03\x02\x02\x02" +
		"\x16\u015C\x03\x02\x02\x02\x18\u015E\x03\x02\x02\x02\x1A\u0164\x03\x02" +
		"\x02\x02\x1C\u016C\x03\x02\x02\x02\x1E\u0175\x03\x02\x02\x02 \u0179\x03" +
		"\x02\x02\x02\"\u017D\x03\x02\x02\x02$\u0181\x03\x02\x02\x02&\u019B\x03" +
		"\x02\x02\x02(\u019D\x03\x02\x02\x02*\u01A2\x03\x02\x02\x02,\u01A7\x03" +
		"\x02\x02\x02.\u01BD\x03\x02\x02\x020\u01C0\x03\x02\x02\x022\u01D4\x03" +
		"\x02\x02\x024\u0201\x03\x02\x02\x026\u0204\x03\x02\x02\x028\u0215\x03" +
		"\x02\x02\x02:\u0223\x03\x02\x02\x02<\u0235\x03\x02\x02\x02>\u0255\x03" +
		"\x02\x02\x02@\u0258\x03\x02\x02\x02B\u0268\x03\x02\x02\x02D\u027F\x03" +
		"\x02\x02\x02F\u028F\x03\x02\x02\x02H\u02A0\x03\x02\x02\x02J\u02B1\x03" +
		"\x02\x02\x02L\u02C2\x03\x02\x02\x02N\u02D3\x03\x02\x02\x02P\u02DF\x03" +
		"\x02\x02\x02R\u02EB\x03\x02\x02\x02T\u02FB\x03\x02\x02\x02V\u02FE\x03" +
		"\x02\x02\x02X\u0307\x03\x02\x02\x02Z\u0313\x03\x02\x02\x02\\\u031C\x03" +
		"\x02\x02\x02^\u0333\x03\x02\x02\x02`\u0378\x03\x02\x02\x02b\u0382\x03" +
		"\x02\x02\x02d\u0391\x03\x02\x02\x02f\u0395\x03\x02\x02\x02h\u039F\x03" +
		"\x02\x02\x02j\u03A5\x03\x02\x02\x02l\u03A8\x03\x02\x02\x02n\u03B5\x03" +
		"\x02\x02\x02p\u03B8\x03\x02\x02\x02r\u03C0\x03\x02\x02\x02t\u03C2\x03" +
		"\x02\x02\x02v\u03C4\x03\x02\x02\x02x\u03C6\x03\x02\x02\x02z\u03C8\x03" +
		"\x02\x02\x02|\u03CA\x03\x02\x02\x02~\u03DE\x03\x02\x02\x02\x80\u03ED\x03" +
		"\x02\x02\x02\x82\u03F6\x03\x02\x02\x02\x84\u03F9\x03\x02\x02\x02\x86\u0403" +
		"\x03\x02\x02\x02\x88\u0408\x03\x02\x02\x02\x8A\u040E\x03\x02\x02\x02\x8C" +
		"\u0410\x03\x02\x02\x02\x8E\u0418\x03\x02\x02\x02\x90\u0425\x03\x02\x02" +
		"\x02\x92\u0432\x03\x02\x02\x02\x94\u0441\x03\x02\x02\x02\x96\u0451\x03" +
		"\x02\x02\x02\x98\u045E\x03\x02\x02\x02\x9A\u046B\x03\x02\x02\x02\x9C\u047B" +
		"\x03\x02\x02\x02\x9E\u0483\x03\x02\x02\x02\xA0\u048E\x03\x02\x02\x02\xA2" +
		"\u0490\x03\x02\x02\x02\xA4\xA6\x05\x06\x04\x02\xA5\xA4\x03\x02\x02\x02" +
		"\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02" +
		"\xA8\xAA\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x07\x02\x02\x03" +
		"\xAB\x03\x03\x02\x02\x02\xAC\xAD\t\x02\x02\x02\xAD\x05\x03\x02\x02\x02" +
		"\xAE\xC0\x05\b\x05\x02\xAF\xC0\x05\n\x06\x02\xB0\xC0\x05.\x18\x02\xB1" +
		"\xC0\x05\x14\v\x02\xB2\xC0\x05\x16\f\x02\xB3\xC0\x05\x18\r\x02\xB4\xC0" +
		"\x05\x1A\x0E\x02\xB5\xC0\x05\x1C\x0F\x02\xB6\xC0\x05 \x11\x02\xB7\xC0" +
		"\x05\x1E\x10\x02\xB8\xC0\x05&\x14\x02\xB9\xC0\x05(\x15\x02\xBA\xC0\x05" +
		"*\x16\x02\xBB\xC0\x05,\x17\x02\xBC\xC0\x05$\x13\x02\xBD\xC0\x05\"\x12" +
		"\x02\xBE\xC0\x05\\/\x02\xBF\xAE\x03\x02\x02\x02\xBF\xAF\x03\x02\x02\x02" +
		"\xBF\xB0\x03\x02\x02\x02\xBF\xB1\x03\x02\x02\x02\xBF\xB2\x03\x02\x02\x02" +
		"\xBF\xB3\x03\x02\x02\x02\xBF\xB4\x03\x02\x02\x02\xBF\xB5\x03\x02\x02\x02" +
		"\xBF\xB6\x03\x02\x02\x02\xBF\xB7\x03\x02\x02\x02\xBF\xB8\x03\x02\x02\x02" +
		"\xBF\xB9\x03\x02\x02\x02\xBF\xBA\x03\x02\x02\x02\xBF\xBB\x03\x02\x02\x02" +
		"\xBF\xBC\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02\x02" +
		"\xC0\x07\x03\x02\x02\x02\xC1\xC2\x07\x05\x02\x02\xC2\xC3\x05\x12\n\x02" +
		"\xC3\xC4\x07\x18\x02\x02\xC4\xC6\x05t;\x02\xC5\xC7\x07=\x02\x02\xC6\xC5" +
		"\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\t\x03\x02\x02\x02\xC8\xC9" +
		"\x07\x06\x02\x02\xC9\xCB\x05\x9AN\x02\xCA\xCC\x07=\x02\x02\xCB\xCA\x03" +
		"\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\v\x03\x02\x02\x02\xCD\xD0\x05" +
		"\x82B\x02\xCE\xCF\x070\x02\x02\xCF\xD1\x05\x82B\x02\xD0\xCE\x03\x02\x02" +
		"\x02\xD0\xD1\x03\x02\x02\x02\xD1\r\x03\x02\x02\x02\xD2\xD7\x05\f\x07\x02" +
		"\xD3\xD4\x079\x02\x02\xD4\xD6\x05\f\x07\x02\xD5\xD3\x03\x02\x02\x02\xD6" +
		"\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\x0F\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xE3\x073\x02\x02\xDB" +
		"\xE0\x05\x82B\x02\xDC\xDD\x079\x02\x02\xDD\xDF\x05\x82B\x02\xDE\xDC\x03" +
		"\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xDB\x03" +
		"\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07" +
		"4\x02\x02\xE6\x11\x03\x02\x02\x02\xE7\xF0\x075\x02\x02\xE8\xED\x05\f\x07" +
		"\x02\xE9\xEA\x079\x02\x02\xEA\xEC\x05\f\x07\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xE8\x03\x02\x02\x02" +
		"\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF4\x079\x02\x02" +
		"\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02" +
		"\xF5\xF6\x076\x02\x02\xF6\x13\x03\x02\x02\x02\xF7\xF9\x05\x04\x03\x02" +
		"\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
		"\xFA\xFB\x07&\x02\x02\xFB\xFE\x05\x82B\x02\xFC\xFD\x07>\x02\x02\xFD\xFF" +
		"\x05~@\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03" +
		"\x02\x02\x02\u0100\u0101\x07G\x02\x02\u0101\u0102\x05^0\x02\u0102\u0104" +
		"\x03\x02\x02\x02\u0103\u0105\x07=\x02\x02\u0104\u0103\x03\x02\x02\x02" +
		"\u0104\u0105\x03\x02\x02\x02\u0105\u0125\x03\x02\x02\x02\u0106\u0108\x05" +
		"\x04\x03\x02\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
		"\u0109\x03\x02\x02\x02\u0109\u010A\x07&\x02\x02\u010A\u010D\x05\x10\t" +
		"\x02\u010B\u010C\x07>\x02\x02\u010C\u010E\x05~@\x02\u010D\u010B\x03\x02" +
		"\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0110\x07G\x02\x02\u0110\u0111\x05^0\x02\u0111\u0113\x03\x02\x02\x02" +
		"\u0112\u0114\x07=\x02\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03" +
		"\x02\x02\x02\u0114\u0125\x03\x02\x02\x02\u0115\u0117\x05\x04\x03\x02\u0116" +
		"\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02" +
		"\x02\x02\u0118\u0119\x07&\x02\x02\u0119\u011C\x05\x12\n\x02\u011A\u011B" +
		"\x07>\x02\x02\u011B\u011D\x05~@\x02\u011C\u011A\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x07G\x02" +
		"\x02\u011F\u0120\x05^0\x02\u0120\u0122\x03\x02\x02\x02\u0121\u0123\x07" +
		"=\x02\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123" +
		"\u0125\x03\x02\x02\x02\u0124\xF8\x03\x02\x02\x02\u0124\u0107\x03\x02\x02" +
		"\x02\u0124\u0116\x03\x02\x02\x02\u0125\x15\x03\x02\x02\x02\u0126\u0128" +
		"\x05\x04\x03\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02" +
		"\u0128\u012A\x03\x02\x02\x02\u0129\u012B\x07\x06\x02\x02\u012A\u0129\x03" +
		"\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012D\x07\'\x02\x02\u012D\u0130\x05\x82B\x02\u012E\u012F\x07>\x02\x02" +
		"\u012F\u0131\x05~@\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x07G\x02\x02\u0133\u0134" +
		"\x05^0\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0137\x07=\x02\x02\u0136" +
		"\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u015D\x03\x02" +
		"\x02\x02\u0138\u013A\x05\x04\x03\x02\u0139\u0138\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02\u013B\u013D\x07\x06" +
		"\x02\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D" +
		"\u013E\x03\x02\x02\x02\u013E\u013F\x07\'\x02\x02\u013F\u0142\x05\x10\t" +
		"\x02\u0140\u0141\x07>\x02\x02\u0141\u0143\x05~@\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144" +
		"\u0145\x07G\x02\x02\u0145\u0146\x05^0\x02\u0146\u0148\x03\x02\x02\x02" +
		"\u0147\u0149\x07=\x02\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03" +
		"\x02\x02\x02\u0149\u015D\x03\x02\x02\x02\u014A\u014C\x05\x04\x03\x02\u014B" +
		"\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02" +
		"\x02\x02\u014D\u014F\x07\x06\x02\x02\u014E\u014D\x03\x02\x02\x02\u014E" +
		"\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x07\'\x02" +
		"\x02\u0151\u0154\x05\x12\n\x02\u0152\u0153\x07>\x02\x02\u0153\u0155\x05" +
		"~@\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156" +
		"\x03\x02\x02\x02\u0156\u0157\x07G\x02\x02\u0157\u0158\x05^0\x02\u0158" +
		"\u015A\x03\x02\x02\x02\u0159\u015B\x07=\x02\x02\u015A\u0159\x03\x02\x02" +
		"\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C\u0127" +
		"\x03\x02\x02\x02\u015C\u0139\x03\x02\x02\x02\u015C\u014B\x03\x02\x02\x02" +
		"\u015D\x17\x03\x02\x02\x02\u015E\u015F\x05\x82B\x02\u015F\u0160\t\x03" +
		"\x02\x02\u0160\u0162\x05^0\x02\u0161\u0163\x07=\x02\x02\u0162\u0161\x03" +
		"\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\x19\x03\x02\x02\x02\u0164" +
		"\u0165\x05^0\x02\u0165\u0166\x078\x02\x02\u0166\u0167\x05\x82B\x02\u0167" +
		"\u0168\t\x03\x02\x02\u0168\u016A\x05^0\x02\u0169\u016B\x07=\x02\x02\u016A" +
		"\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\x1B\x03\x02\x02" +
		"\x02\u016C\u016D\x05^0\x02\u016D\u016E\x073\x02\x02\u016E\u016F\x05^0" +
		"\x02\u016F\u0170\x074\x02\x02\u0170\u0171\t\x03\x02\x02\u0171\u0173\x05" +
		"^0\x02\u0172\u0174\x07=\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174" +
		"\x03\x02\x02\x02\u0174\x1D\x03\x02\x02\x02\u0175\u0177\x05b2\x02\u0176" +
		"\u0178\x07=\x02\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02" +
		"\x02\u0178\x1F\x03\x02\x02\x02\u0179\u017B\x05`1\x02\u017A\u017C\x07=" +
		"\x02\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C" +
		"!\x03\x02\x02\x02\u017D\u017F\x05n8\x02\u017E\u0180\x07=\x02\x02\u017F" +
		"\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180#\x03\x02\x02" +
		"\x02\u0181\u0183\x05p9\x02\u0182\u0184\x07=\x02\x02\u0183\u0182\x03\x02" +
		"\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184%\x03\x02\x02\x02\u0185\u0186" +
		"\x07\x16\x02\x02\u0186\u0187\x05\x82B\x02\u0187\u0188\x07\x17\x02\x02" +
		"\u0188\u0189\x05^0\x02\u0189\u018B\x05\x9EP\x02\u018A\u018C\x07=\x02\x02" +
		"\u018B\u018A\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u019C\x03\x02\x02\x02\u018D" +
		"\u018E\x07\x16\x02\x02\u018E\u018F\x05\x10\t\x02\u018F\u0190\x05^0\x02" +
		"\u0190\u0192\x05\x9EP\x02\u0191\u0193\x07=\x02\x02\u0192\u0191\x03\x02" +
		"\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u019C\x03\x02\x02\x02\u0194" +
		"\u0195\x07\x16\x02\x02\u0195\u0196\x05\x12\n\x02\u0196\u0197\x05^0\x02" +
		"\u0197\u0199\x05\x9EP\x02\u0198\u019A\x07=\x02\x02\u0199\u0198\x03\x02" +
		"\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B" +
		"\u0185\x03\x02\x02\x02\u019B\u018D\x03\x02\x02\x02\u019B\u0194\x03\x02" +
		"\x02\x02\u019C\'\x03\x02\x02\x02\u019D\u019E\x07\x0E\x02\x02\u019E\u01A0" +
		"\x05^0\x02\u019F\u01A1\x07=\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A0" +
		"\u01A1\x03\x02\x02\x02\u01A1)\x03\x02\x02\x02\u01A2\u01A3\x07\r\x02\x02" +
		"\u01A3\u01A5\x05^0\x02\u01A4\u01A6\x07=\x02\x02\u01A5\u01A4\x03\x02\x02" +
		"\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6+\x03\x02\x02\x02\u01A7\u01A8\x07" +
		"/\x02\x02\u01A8\u01AA\x05^0\x02\u01A9\u01AB\x07=\x02\x02\u01AA\u01A9\x03" +
		"\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB-\x03\x02\x02\x02\u01AC" +
		"\u01BE\x050\x19\x02\u01AD\u01BE\x052\x1A\x02\u01AE\u01BE\x054\x1B\x02" +
		"\u01AF\u01BE\x056\x1C\x02\u01B0\u01BE\x058\x1D\x02\u01B1\u01BE\x05:\x1E" +
		"\x02\u01B2\u01BE\x05@!\x02\u01B3\u01BE\x05B\"\x02\u01B4\u01BE\x05D#\x02" +
		"\u01B5\u01BE\x05F$\x02\u01B6\u01BE\x05H%\x02\u01B7\u01BE\x05J&\x02\u01B8" +
		"\u01BE\x05L\'\x02\u01B9\u01BE\x05N(\x02\u01BA\u01BE\x05P)\x02\u01BB\u01BE" +
		"\x05R*\x02\u01BC\u01BE\x05Z.\x02\u01BD\u01AC\x03\x02\x02\x02\u01BD\u01AD" +
		"\x03\x02\x02\x02\u01BD\u01AE\x03\x02\x02\x02\u01BD\u01AF\x03\x02\x02\x02" +
		"\u01BD\u01B0\x03\x02\x02\x02\u01BD\u01B1\x03\x02\x02\x02\u01BD\u01B2\x03" +
		"\x02\x02\x02\u01BD\u01B3\x03\x02\x02\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD" +
		"\u01B5\x03\x02\x02\x02\u01BD\u01B6\x03\x02\x02\x02\u01BD\u01B7\x03\x02" +
		"\x02\x02\u01BD\u01B8\x03\x02\x02\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD" +
		"\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02" +
		"\x02\x02\u01BE/\x03\x02\x02\x02\u01BF\u01C1\x05\x04\x03\x02\u01C0\u01BF" +
		"\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02" +
		"\u01C2\u01C4\x07\x06\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03" +
		"\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07\x03\x02\x02\u01C6" +
		"\u01C9\x05\x82B\x02\u01C7\u01C8\x07\t\x02\x02\u01C8\u01CA\x05~@\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CD\x03\x02" +
		"\x02\x02\u01CB\u01CC\x07\x07\x02\x02\u01CC\u01CE\x05\x9CO\x02\u01CD\u01CB" +
		"\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02" +
		"\u01CF\u01D1\x05\x9EP\x02\u01D0\u01D2\x07=\x02\x02\u01D1\u01D0\x03\x02" +
		"\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D21\x03\x02\x02\x02\u01D3\u01D5" +
		"\x05\x04\x03\x02\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02" +
		"\u01D5\u01D7\x03\x02\x02\x02\u01D6\u01D8\x07\x06\x02\x02\u01D7\u01D6\x03" +
		"\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
		"\u01DA\x07\x04\x02\x02\u01DA\u01DD\x05\x82B\x02\u01DB\u01DC\x07\t\x02" +
		"\x02\u01DC\u01DE\x05\x9CO\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE" +
		"\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x05\x9EP\x02" +
		"\u01E0\u01E2\x07=\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03" +
		"\x02\x02\x02\u01E23\x03\x02\x02\x02\u01E3\u01E5\x05\x04\x03\x02\u01E4" +
		"\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x03\x02" +
		"\x02\x02\u01E6\u01E8\x07\x06\x02\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7" +
		"\u01E8\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07*\x02" +
		"\x02\u01EA\u01EC\x05\x82B\x02\u01EB\u01ED\x05\x96L\x02\u01EC\u01EB\x03" +
		"\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE" +
		"\u01F0\x05\x94K\x02\u01EF\u01F1\x07=\x02\x02\u01F0\u01EF\x03\x02\x02\x02" +
		"\u01F0\u01F1\x03\x02\x02\x02\u01F1\u0202\x03\x02\x02\x02\u01F2\u01F4\x05" +
		"\x04\x03\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"\u01F6\x03\x02\x02\x02\u01F5\u01F7\x07\x06\x02\x02\u01F6\u01F5\x03\x02" +
		"\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
		"\u01F9\x07*\x02\x02\u01F9\u01FB\x05\x82B\x02\u01FA\u01FC\x05\x96L\x02" +
		"\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x03" +
		"\x02\x02\x02\u01FD\u01FF\x05\x8EH\x02\u01FE\u0200\x07=\x02\x02\u01FF\u01FE" +
		"\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0202\x03\x02\x02\x02" +
		"\u0201\u01E4\x03\x02\x02\x02\u0201\u01F3\x03\x02\x02\x02\u02025\x03\x02" +
		"\x02\x02\u0203\u0205\x05\x04\x03\x02\u0204\u0203\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u0208\x07\x06" +
		"\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
		"\u0209\x03\x02\x02\x02\u0209\u020A\x07+\x02\x02\u020A\u020C\x05\x82B\x02" +
		"\u020B\u020D\x05\x96L\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03" +
		"\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x071\x02\x02\u020F" +
		"\u0210\x05\x98M\x02\u0210\u0212\x072\x02\x02\u0211\u0213\x07=\x02\x02" +
		"\u0212\u0211\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u02137\x03\x02" +
		"\x02\x02\u0214\u0216\x05\x04\x03\x02\u0215\u0214\x03\x02\x02\x02\u0215" +
		"\u0216\x03\x02\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0219\x07\x06" +
		"\x02\x02\u0218\u0217\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219" +
		"\u021A\x03\x02\x02\x02\u021A\u021C\x07,\x02\x02\u021B\u021D\x05\x96L\x02" +
		"\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03" +
		"\x02\x02\x02\u021E\u0220\x05\x82B\x02\u021F\u0221\x07=\x02\x02\u0220\u021F" +
		"\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u02219\x03\x02\x02\x02\u0222" +
		"\u0224\x05\x04\x03\x02\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02" +
		"\x02\x02\u0224\u0226\x03\x02\x02\x02\u0225\u0227\x07\x06\x02\x02\u0226" +
		"\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02" +
		"\x02\x02\u0228\u0229\x07-\x02\x02\u0229\u022B\x05\x82B\x02\u022A\u022C" +
		"\x05\x96L\x02\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02" +
		"\u022C\u022D\x03\x02\x02\x02\u022D\u022F\x075\x02\x02\u022E\u0230\x05" +
		"<\x1F\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0233\x076\x02\x02\u0232\u0234\x07=\x02\x02" +
		"\u0233\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234;\x03\x02" +
		"\x02\x02\u0235\u023A\x05> \x02\u0236\u0237\x079\x02\x02\u0237\u0239\x05" +
		"> \x02\u0238\u0236\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238" +
		"\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B=\x03\x02\x02\x02\u023C" +
		"\u023A\x03\x02\x02\x02\u023D\u023F\x05\x04\x03\x02\u023E\u023D\x03\x02" +
		"\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240" +
		"\u0241\x05\x82B\x02\u0241\u0242\x05\x94K\x02\u0242\u0256\x03\x02\x02\x02" +
		"\u0243\u0245\x05\x04\x03\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245\x03" +
		"\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x05\x82B\x02\u0247" +
		"\u0248\x05\x8EH\x02\u0248\u0256\x03\x02\x02\x02\u0249\u024B\x05\x04\x03" +
		"\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C" +
		"\x03\x02\x02\x02\u024C\u024D\x05\x82B\x02\u024D\u024E\x071\x02\x02\u024E" +
		"\u024F\x05\x98M\x02\u024F\u0250\x072\x02\x02\u0250\u0256\x03\x02\x02\x02" +
		"\u0251\u0253\x05\x04\x03\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03" +
		"\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x05\x82B\x02\u0255" +
		"\u023E\x03\x02\x02\x02\u0255\u0244\x03\x02\x02\x02\u0255\u024A\x03\x02" +
		"\x02\x02\u0255\u0252\x03\x02\x02\x02\u0256?\x03\x02\x02\x02\u0257\u0259" +
		"\x05\x04\x03\x02\u0258\u0257\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02" +
		"\u0259\u025B\x03\x02\x02\x02\u025A\u025C\x07\x06\x02\x02\u025B\u025A\x03" +
		"\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"\u025E\x07.\x02\x02\u025E\u0260\x05\x82B\x02\u025F\u0261\x05\x96L\x02" +
		"\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03" +
		"\x02\x02\x02\u0262\u0263\x07G\x02\x02\u0263\u0265\x05~@\x02\u0264\u0266" +
		"\x07=\x02\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02" +
		"\u0266A\x03\x02\x02\x02\u0267\u0269\x05\x04\x03\x02\u0268\u0267\x03\x02" +
		"\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A" +
		"\u026C\x07\x06\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02" +
		"\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026E\x07%\x02\x02\u026E\u0270" +
		"\x05\x82B\x02\u026F\u0271\x07<\x02\x02\u0270\u026F\x03\x02\x02\x02\u0270" +
		"\u0271\x03\x02\x02\x02\u0271\u0273\x03\x02\x02\x02\u0272\u0274\x05\x96" +
		"L\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275" +
		"\x03\x02\x02\x02\u0275\u0278\x05\x8EH\x02\u0276\u0277\x07A\x02\x02\u0277" +
		"\u0279\x05~@\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02" +
		"\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x05\x9EP\x02\u027B\u027D\x07" +
		"=\x02\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
		"C\x03\x02\x02\x02\u027E\u0280\x05\x04\x03\x02\u027F\u027E\x03\x02\x02" +
		"\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283" +
		"\x07\x11\x02\x02\u0282\u0284\x07<\x02\x02\u0283\u0282\x03\x02\x02\x02" +
		"\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0288\x05" +
		"\x8EH\x02\u0286\u0287\x07A\x02\x02\u0287\u0289\x05~@\x02\u0288\u0286\x03" +
		"\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A" +
		"\u028C\x05\x9EP\x02\u028B\u028D\x07=\x02\x02\u028C\u028B\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028DE\x03\x02\x02\x02\u028E\u0290\x05\x04" +
		"\x03\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290" +
		"\u0291\x03\x02\x02\x02\u0291\u0292\x07\x13\x02\x02\u0292\u0294\x05\x82" +
		"B\x02\u0293\u0295\x07<\x02\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295" +
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0299\x05\x8EH\x02" +
		"\u0297\u0298\x07A\x02\x02\u0298\u029A\x05~@\x02\u0299\u0297\x03\x02\x02" +
		"\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029D" +
		"\x05\x9EP\x02\u029C\u029E\x07=\x02\x02\u029D\u029C\x03\x02\x02\x02\u029D" +
		"\u029E\x03\x02\x02\x02\u029EG\x03\x02\x02\x02\u029F\u02A1\x05\x04\x03" +
		"\x02\u02A0\u029F\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2" +
		"\x03\x02\x02\x02\u02A2\u02A3\x07\x13\x02\x02\u02A3\u02A5\x05\x82B\x02" +
		"\u02A4\u02A6\x07<\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03" +
		"\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02AA\x05\x92J\x02\u02A8" +
		"\u02A9\x07A\x02\x02\u02A9\u02AB\x05~@\x02\u02AA\u02A8\x03\x02\x02\x02" +
		"\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AE\x05" +
		"\x9EP\x02\u02AD\u02AF\x07=\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AE\u02AF" +
		"\x03\x02\x02\x02\u02AFI\x03\x02\x02\x02\u02B0\u02B2\x05\x04\x03\x02\u02B1" +
		"\u02B0\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3\x03\x02" +
		"\x02\x02\u02B3\u02B4\x07\x14\x02\x02\u02B4\u02B6\x05\x82B\x02\u02B5\u02B7" +
		"\x07<\x02\x02\u02B6\u02B5\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02" +
		"\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BB\x05\x8EH\x02\u02B9\u02BA\x07" +
		"A\x02\x02\u02BA\u02BC\x05~@\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BC" +
		"\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BF\x05\x9EP\x02" +
		"\u02BE\u02C0\x07=\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03" +
		"\x02\x02\x02\u02C0K\x03\x02\x02\x02\u02C1\u02C3\x05\x04\x03\x02\u02C2" +
		"\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03\x02" +
		"\x02\x02\u02C4\u02C5\x07\x14\x02\x02\u02C5\u02C7\x05\x82B\x02\u02C6\u02C8" +
		"\x07<\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02" +
		"\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CC\x05\x92J\x02\u02CA\u02CB\x07" +
		"A\x02\x02\u02CB\u02CD\x05~@\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD" +
		"\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x05\x9EP\x02" +
		"\u02CF\u02D1\x07=\x02\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03" +
		"\x02\x02\x02\u02D1M\x03\x02\x02\x02\u02D2\u02D4\x05\x04\x03\x02\u02D3" +
		"\u02D2\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x03\x02" +
		"\x02\x02\u02D5\u02D7\x07\x06\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6" +
		"\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07\n\x02" +
		"\x02\u02D9\u02DA\x05\x82B\x02\u02DA\u02DC\x05\x8EH\x02\u02DB\u02DD\x07" +
		"=\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD" +
		"O\x03\x02\x02\x02\u02DE\u02E0\x05\x04\x03\x02\u02DF\u02DE\x03\x02\x02" +
		"\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E2\x03\x02\x02\x02\u02E1\u02E3" +
		"\x07\x06\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02" +
		"\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5\x07\v\x02\x02\u02E5\u02E6\x05" +
		"\x82B\x02\u02E6\u02E8\x05\x8EH\x02\u02E7\u02E9\x07=\x02\x02\u02E8\u02E7" +
		"\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9Q\x03\x02\x02\x02\u02EA" +
		"\u02EC\x05\x04\x03\x02\u02EB\u02EA\x03\x02\x02\x02\u02EB\u02EC\x03\x02" +
		"\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EE\x07\x19\x02\x02\u02EE" +
		"\u02F2\x075\x02\x02\u02EF\u02F1\x05T+\x02\u02F0\u02EF\x03\x02\x02\x02" +
		"\u02F1\u02F4\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03" +
		"\x02\x02\x02\u02F3\u02F5\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5" +
		"\u02F7\x076\x02\x02\u02F6\u02F8\x07=\x02\x02\u02F7\u02F6\x03\x02\x02\x02" +
		"\u02F7\u02F8\x03\x02\x02\x02\u02F8S\x03\x02\x02\x02\u02F9\u02FC\x05V," +
		"\x02\u02FA\u02FC\x05X-\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FA\x03" +
		"\x02\x02\x02\u02FCU\x03\x02\x02\x02\u02FD\u02FF\x05\x04\x03\x02\u02FE" +
		"\u02FD\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x03\x02" +
		"\x02\x02\u0300\u0301\x05\x82B\x02\u0301\u0302\x07>\x02\x02\u0302\u0304" +
		"\x05~@\x02\u0303\u0305\x07=\x02\x02\u0304\u0303\x03\x02\x02\x02\u0304" +
		"\u0305\x03\x02\x02\x02\u0305W\x03\x02\x02\x02\u0306\u0308\x05\x04\x03" +
		"\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309" +
		"\x03\x02\x02\x02\u0309\u030A\x05\x82B\x02\u030A\u030B\x073\x02\x02\u030B" +
		"\u030C\x05~@\x02\u030C\u030D\x074\x02\x02\u030D\u030E\x07>\x02\x02\u030E" +
		"\u0310\x05~@\x02\u030F\u0311\x07=\x02\x02\u0310\u030F\x03\x02\x02\x02" +
		"\u0310\u0311\x03\x02\x02\x02\u0311Y\x03\x02\x02\x02\u0312\u0314\x05\x04" +
		"\x03\x02\u0313\u0312\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314" +
		"\u0315\x03\x02\x02\x02\u0315\u0316\x07\b\x02\x02\u0316\u0317\x05\x82B" +
		"\x02\u0317\u0318\x05\x96L\x02\u0318\u031A\x05\x9EP\x02\u0319\u031B\x07" +
		"=\x02\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B" +
		"[\x03\x02\x02\x02\u031C\u031E\x05^0\x02\u031D\u031F\x07=\x02\x02\u031E" +
		"\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F]\x03\x02\x02" +
		"\x02\u0320\u0321\b0\x01\x02\u0321\u0322\x07\x1F\x02\x02\u0322\u0334\x05" +
		"^0\x18\u0323\u0324\x07\x0F\x02\x02\u0324\u0334\x05^0\x14\u0325\u0334\x05" +
		"`1\x02\u0326\u0334\x05b2\x02\u0327\u0334\x05f4\x02\u0328\u0334\x05h5\x02" +
		"\u0329\u0334\x05j6\x02\u032A\u0334\x05l7\x02\u032B\u0334\x05r:\x02\u032C" +
		"\u0334\x05n8\x02\u032D\u0334\x05p9\x02\u032E\u0334\x05\x82B\x02\u032F" +
		"\u0330\x071\x02\x02\u0330\u0331\x05^0\x02\u0331\u0332\x072\x02\x02\u0332" +
		"\u0334\x03\x02\x02\x02\u0333\u0320\x03\x02\x02\x02\u0333\u0323\x03\x02" +
		"\x02\x02\u0333\u0325\x03\x02\x02\x02\u0333\u0326\x03\x02\x02\x02\u0333" +
		"\u0327\x03\x02\x02\x02\u0333\u0328\x03\x02\x02\x02\u0333\u0329\x03\x02" +
		"\x02\x02\u0333\u032A\x03\x02\x02\x02\u0333\u032B\x03\x02\x02\x02\u0333" +
		"\u032C\x03\x02\x02\x02\u0333\u032D\x03\x02\x02\x02\u0333\u032E\x03\x02" +
		"\x02\x02\u0333\u032F\x03\x02\x02\x02\u0334\u0375\x03\x02\x02\x02\u0335" +
		"\u0336\f\x17\x02\x02\u0336\u0337\t\x04\x02\x02\u0337\u0374\x05^0\x18\u0338" +
		"\u0339\f\x16\x02\x02\u0339\u033A\t\x05\x02\x02\u033A\u0374\x05^0\x17\u033B" +
		"\u033C\f\x15\x02\x02\u033C\u033D\t\x06\x02\x02\u033D\u0374\x05^0\x16\u033E" +
		"\u033F\f\x13\x02\x02\u033F\u0340\x07:\x02\x02\u0340\u0374\x05^0\x14\u0341" +
		"\u0343\f\x12\x02\x02\u0342\u0344\x07\x1F\x02\x02\u0343\u0342\x03\x02\x02" +
		"\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0346" +
		"\x07\x17\x02\x02\u0346\u0374\x05^0\x13\u0347\u0348\f\x10\x02\x02\u0348" +
		"\u0349\t\x07\x02\x02\u0349\u0374\x05^0\x11\u034A\u034B\f\x0F\x02\x02\u034B" +
		"\u034C\x07!\x02\x02\u034C\u0374\x05^0\x10\u034D\u034E\f\x0E\x02\x02\u034E" +
		"\u034F\x07\"\x02\x02\u034F\u0374\x05^0\x0F\u0350\u0351\f\x1C\x02\x02\u0351" +
		"\u0352\x078\x02\x02\u0352\u0374\x05\x82B\x02\u0353\u0355\f\x1B\x02\x02" +
		"\u0354\u0356\x07<\x02\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03" +
		"\x02\x02\x02\u0356\u0358\x03\x02\x02\x02\u0357\u0359\x05\x98M\x02\u0358" +
		"\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02" +
		"\x02\x02\u035A\u0363\x071\x02\x02\u035B\u0360\x05\x8AF\x02\u035C\u035D" +
		"\x079\x02\x02\u035D\u035F\x05\x8AF\x02\u035E\u035C\x03\x02\x02\x02\u035F" +
		"\u0362\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02" +
		"\x02\x02\u0361\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363" +
		"\u035B\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02" +
		"\x02\x02\u0365\u0374\x072\x02\x02\u0366\u0367\f\x1A\x02\x02\u0367\u0368" +
		"\x073\x02\x02\u0368\u0369\x05^0\x02\u0369\u036A\x074\x02\x02\u036A\u0374" +
		"\x03\x02\x02\x02\u036B\u036C\f\x19\x02\x02\u036C\u0374\x07;\x02\x02\u036D" +
		"\u036E\f\x11\x02\x02\u036E\u0370\x07\x1B\x02\x02\u036F\u0371\x07\x1F\x02" +
		"\x02\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372" +
		"\x03\x02\x02\x02\u0372\u0374\x05~@\x02\u0373\u0335\x03\x02\x02\x02\u0373" +
		"\u0338\x03\x02\x02\x02\u0373\u033B\x03\x02\x02\x02\u0373\u033E\x03\x02" +
		"\x02\x02\u0373\u0341\x03\x02\x02\x02\u0373\u0347\x03\x02\x02\x02\u0373" +
		"\u034A\x03\x02\x02\x02\u0373\u034D\x03\x02\x02\x02\u0373\u0350\x03\x02" +
		"\x02\x02\u0373\u0353\x03\x02\x02\x02\u0373\u0366\x03\x02\x02\x02\u0373" +
		"\u036B\x03\x02\x02\x02\u0373\u036D\x03\x02\x02\x02\u0374\u0377\x03\x02" +
		"\x02\x02\u0375\u0373\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376" +
		"_\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0378\u0379\x07\x1A\x02" +
		"\x02\u0379\u037A\x05^0\x02\u037A\u037D\x05\xA0Q\x02\u037B\u037C\x07\x1E" +
		"\x02\x02\u037C\u037E\x05\xA0Q\x02\u037D\u037B\x03\x02\x02\x02\u037D\u037E" +
		"\x03\x02\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u0381\x07=\x02\x02" +
		"\u0380\u037F\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381a\x03\x02" +
		"\x02\x02\u0382\u0383\x07\x1C\x02\x02\u0383\u0387\x05\x9EP\x02\u0384\u0386" +
		"\x05d3\x02\u0385\u0384\x03\x02\x02\x02\u0386\u0389\x03\x02\x02\x02\u0387" +
		"\u0385\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u038C\x03\x02" +
		"\x02\x02\u0389\u0387\x03\x02\x02\x02\u038A\u038B\x07\x1E\x02\x02\u038B" +
		"\u038D\x05\x9EP\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D\x03\x02\x02" +
		"\x02\u038D\u038F\x03\x02\x02\x02\u038E\u0390\x07=\x02\x02\u038F\u038E" +
		"\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390c\x03\x02\x02\x02\u0391" +
		"\u0392\x07\x1D\x02\x02\u0392\u0393\x05~@\x02\u0393\u0394\x05\x9EP\x02" +
		"\u0394e\x03\x02\x02\x02\u0395\u0397\x05\x90I\x02\u0396\u0398\x07<\x02" +
		"\x02\u0397\u0396\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039B" +
		"\x03\x02\x02\x02\u0399\u039A\x07A\x02\x02\u039A\u039C\x05~@\x02\u039B" +
		"\u0399\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02" +
		"\x02\x02\u039D\u039E\x05\x9EP\x02\u039Eg\x03\x02\x02\x02\u039F\u03A1\x05" +
		"\x90I\x02\u03A0\u03A2\x07<\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A1\u03A2" +
		"\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x05\\/\x02\u03A4" +
		"i\x03\x02\x02\x02\u03A5\u03A6\x05~@\x02\u03A6\u03A7\x05\x9AN\x02\u03A7" +
		"k\x03\x02\x02\x02\u03A8\u03B1\x073\x02\x02\u03A9\u03AE\x05^0\x02\u03AA" +
		"\u03AB\x079\x02\x02\u03AB\u03AD\x05^0\x02\u03AC\u03AA\x03\x02\x02\x02" +
		"\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03" +
		"\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1" +
		"\u03A9\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02" +
		"\x02\x02\u03B3\u03B4\x074\x02\x02\u03B4m\x03\x02\x02\x02\u03B5\u03B6\x07" +
		")\x02\x02\u03B6\u03B7\x05^0\x02\u03B7o\x03\x02\x02\x02\u03B8\u03B9\x07" +
		"(\x02\x02\u03B9\u03BA\x05^0\x02\u03BAq\x03\x02\x02\x02\u03BB\u03C1\x05" +
		"t;\x02\u03BC\u03C1\x05v<\x02\u03BD\u03C1\x05x=\x02\u03BE\u03C1\x05z>\x02" +
		"\u03BF\u03C1\x05|?\x02\u03C0\u03BB\x03\x02\x02\x02\u03C0\u03BC\x03\x02" +
		"\x02\x02\u03C0\u03BD\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0" +
		"\u03BF\x03\x02\x02\x02\u03C1s\x03\x02\x02\x02\u03C2\u03C3\x07_\x02\x02" +
		"\u03C3u\x03\x02\x02\x02\u03C4\u03C5\x07c\x02\x02\u03C5w\x03\x02\x02\x02" +
		"\u03C6\u03C7\x07b\x02\x02\u03C7y\x03\x02\x02\x02\u03C8\u03C9\x07Y\x02" +
		"\x02\u03C9{\x03\x02\x02\x02\u03CA\u03CB\x07 \x02\x02\u03CB}\x03\x02\x02" +
		"\x02\u03CC\u03CD\b@\x01\x02\u03CD\u03CE\x071\x02\x02\u03CE\u03CF\x05~" +
		"@\x02\u03CF\u03D0\x072\x02\x02\u03D0\u03DF\x03\x02\x02\x02\u03D1\u03DF" +
		"\x05\x98M\x02\u03D2\u03D3\x073\x02\x02\u03D3\u03D4\x05~@\x02\u03D4\u03D5" +
		"\x07=\x02\x02\u03D5\u03D6\x05v<\x02\u03D6\u03D7\x074\x02\x02\u03D7\u03DF" +
		"\x03\x02\x02\x02\u03D8\u03DF\x054\x1B\x02\u03D9\u03DF\x056\x1C\x02\u03DA" +
		"\u03DF\x058\x1D\x02\u03DB\u03DF\x05:\x1E\x02\u03DC\u03DF\x05\x80A\x02" +
		"\u03DD\u03DF\x05\x82B\x02\u03DE\u03CC\x03\x02\x02\x02\u03DE\u03D1\x03" +
		"\x02\x02\x02\u03DE\u03D2\x03\x02\x02\x02\u03DE\u03D8\x03\x02\x02\x02\u03DE" +
		"\u03D9\x03\x02\x02\x02\u03DE\u03DA\x03\x02\x02\x02\u03DE\u03DB\x03\x02" +
		"\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DD\x03\x02\x02\x02\u03DF" +
		"\u03E9\x03\x02\x02\x02\u03E0\u03E1\f\r\x02\x02\u03E1\u03E8\x05\x98M\x02" +
		"\u03E2\u03E3\f\f\x02\x02\u03E3\u03E4\x078\x02\x02\u03E4\u03E8\x05\x82" +
		"B\x02\u03E5\u03E6\f\x05\x02\x02\u03E6\u03E8\x07;\x02\x02\u03E7\u03E0\x03" +
		"\x02\x02\x02\u03E7\u03E2\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8" +
		"\u03EB\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02" +
		"\x02\x02\u03EA\x7F\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC\u03EE" +
		"\x05\x04\x03\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02" +
		"\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x07\\\x02\x02\u03F0\x81\x03\x02" +
		"\x02\x02\u03F1\u03F7\x07Z\x02\x02\u03F2\u03F7\x07[\x02\x02\u03F3\u03F7" +
		"\x07^\x02\x02\u03F4\u03F7\x07]\x02\x02\u03F5\u03F7\x05\xA2R\x02\u03F6" +
		"\u03F1\x03\x02\x02\x02\u03F6\u03F2\x03\x02\x02\x02\u03F6\u03F3\x03\x02" +
		"\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6\u03F5\x03\x02\x02\x02\u03F7" +
		"\x83\x03\x02\x02\x02\u03F8\u03FA\x05\x04\x03\x02\u03F9\u03F8\x03\x02\x02" +
		"\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FD" +
		"\x05\x82B\x02\u03FC\u03FE\x07;\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FD" +
		"\u03FE\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02\x02\u03FF\u0400\x07>\x02" +
		"\x02\u0400\u0402\x05~@\x02\u0401\u03FF\x03\x02\x02\x02\u0401\u0402\x03" +
		"\x02\x02\x02\u0402\x85\x03\x02\x02\x02\u0403\u0406\x05\x82B\x02\u0404" +
		"\u0405\x07>\x02\x02\u0405\u0407\x05^0\x02\u0406\u0404\x03\x02\x02\x02" +
		"\u0406\u0407\x03\x02\x02\x02\u0407\x87\x03\x02\x02\x02\u0408\u0409\x05" +
		"\x82B\x02\u0409\u040A\x07G\x02\x02\u040A\u040B\x05^0\x02\u040B\x89\x03" +
		"\x02\x02\x02\u040C\u040F\x05^0\x02\u040D\u040F\x05\x88E\x02\u040E\u040C" +
		"\x03\x02\x02\x02\u040E\u040D\x03\x02\x02\x02\u040F\x8B\x03\x02\x02\x02" +
		"\u0410\u0415\x05\x82B\x02\u0411\u0412\x079\x02\x02\u0412\u0414\x05\x82" +
		"B\x02\u0413\u0411\x03\x02\x02\x02\u0414\u0417\x03\x02\x02\x02\u0415\u0413" +
		"\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\x8D\x03\x02\x02\x02" +
		"\u0417\u0415\x03\x02\x02\x02\u0418\u0421\x071\x02\x02\u0419\u041E\x05" +
		"\x84C\x02\u041A\u041B\x079\x02\x02\u041B\u041D\x05\x84C\x02";
	private static readonly _serializedATNSegment2: string =
		"\u041C\u041A\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E\u041C\x03" +
		"\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0422\x03\x02\x02\x02\u0420" +
		"\u041E\x03\x02\x02\x02\u0421\u0419\x03\x02\x02\x02\u0421\u0422\x03\x02" +
		"\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0424\x072\x02\x02\u0424\x8F" +
		"\x03\x02\x02\x02\u0425\u042E\x077\x02\x02\u0426\u042B\x05\x84C\x02\u0427" +
		"\u0428\x079\x02\x02\u0428\u042A\x05\x84C\x02\u0429\u0427\x03\x02\x02\x02" +
		"\u042A\u042D\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042B\u042C\x03" +
		"\x02\x02\x02\u042C\u042F\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042E" +
		"\u0426\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0430\x03\x02" +
		"\x02\x02\u0430\u0431\x077\x02\x02\u0431\x91\x03\x02\x02\x02\u0432\u0433" +
		"\x071\x02\x02\u0433\u043C\x073\x02\x02\u0434\u0439\x05\x84C\x02\u0435" +
		"\u0436\x079\x02\x02\u0436\u0438\x05\x84C\x02\u0437\u0435\x03\x02\x02\x02" +
		"\u0438\u043B\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03" +
		"\x02\x02\x02\u043A\u043D\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C" +
		"\u0434\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03\x02" +
		"\x02\x02\u043E\u043F\x074\x02\x02\u043F\u0440\x072\x02\x02\u0440\x93\x03" +
		"\x02\x02\x02\u0441\u044A\x075\x02\x02\u0442\u0447\x05\x84C\x02\u0443\u0444" +
		"\x079\x02\x02\u0444\u0446\x05\x84C\x02\u0445\u0443\x03\x02\x02\x02\u0446" +
		"\u0449\x03\x02\x02\x02\u0447\u0445\x03\x02\x02\x02\u0447\u0448\x03\x02" +
		"\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u044A" +
		"\u0442\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044D\x03\x02" +
		"\x02\x02\u044C\u044E\x079\x02\x02\u044D\u044C\x03\x02\x02\x02\u044D\u044E" +
		"\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0450\x076\x02\x02" +
		"\u0450\x95\x03\x02\x02\x02\u0451\u045A\x073\x02\x02\u0452\u0457\x05\x80" +
		"A\x02\u0453\u0454\x079\x02\x02\u0454\u0456\x05\x80A\x02\u0455\u0453\x03" +
		"\x02\x02\x02\u0456\u0459\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457" +
		"\u0458\x03\x02\x02\x02\u0458\u045B\x03\x02\x02\x02\u0459\u0457\x03\x02" +
		"\x02\x02\u045A\u0452\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B" +
		"\u045C\x03\x02\x02\x02\u045C\u045D\x074\x02\x02\u045D\x97\x03\x02\x02" +
		"\x02\u045E\u0467\x073\x02\x02\u045F\u0464\x05~@\x02\u0460\u0461\x079\x02" +
		"\x02\u0461\u0463\x05~@\x02\u0462\u0460\x03\x02\x02\x02\u0463\u0466\x03" +
		"\x02\x02\x02\u0464\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465" +
		"\u0468\x03\x02\x02\x02\u0466\u0464\x03\x02\x02\x02\u0467\u045F\x03\x02" +
		"\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469" +
		"\u046A\x074\x02\x02\u046A\x99\x03\x02\x02\x02\u046B\u0474\x075\x02\x02" +
		"\u046C\u0471\x05\x86D\x02\u046D\u046E\x079\x02\x02\u046E\u0470\x05\x86" +
		"D\x02\u046F\u046D\x03\x02\x02\x02\u0470\u0473\x03\x02\x02\x02\u0471\u046F" +
		"\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0475\x03\x02\x02\x02" +
		"\u0473\u0471\x03\x02\x02\x02\u0474\u046C\x03\x02\x02\x02\u0474\u0475\x03" +
		"\x02\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476\u0478\x079\x02\x02\u0477" +
		"\u0476\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u0479\x03\x02" +
		"\x02\x02\u0479\u047A\x076\x02\x02\u047A\x9B\x03\x02\x02\x02\u047B\u0480" +
		"\x05~@\x02\u047C\u047D\x079\x02\x02\u047D\u047F\x05~@\x02\u047E\u047C" +
		"\x03\x02\x02\x02\u047F\u0482\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02" +
		"\u0480\u0481\x03\x02\x02\x02\u0481\x9D\x03\x02\x02\x02\u0482\u0480\x03" +
		"\x02\x02\x02\u0483\u0487\x075\x02\x02\u0484\u0486\x05\x06\x04\x02\u0485" +
		"\u0484\x03\x02\x02\x02\u0486\u0489\x03\x02\x02\x02\u0487\u0485\x03\x02" +
		"\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048A\x03\x02\x02\x02\u0489" +
		"\u0487\x03\x02\x02\x02\u048A\u048B\x076\x02\x02\u048B\x9F\x03\x02\x02" +
		"\x02\u048C\u048F\x05\x9EP\x02\u048D\u048F\x05^0\x02\u048E\u048C\x03\x02" +
		"\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\xA1\x03\x02\x02\x02\u0490\u0491" +
		"\t\b\x02\x02\u0491\xA3\x03\x02\x02\x02\xB9\xA7\xBF\xC6\xCB\xD0\xD7\xE0" +
		"\xE3\xED\xF0\xF3\xF8\xFE\u0104\u0107\u010D\u0113\u0116\u011C\u0122\u0124" +
		"\u0127\u012A\u0130\u0136\u0139\u013C\u0142\u0148\u014B\u014E\u0154\u015A" +
		"\u015C\u0162\u016A\u0173\u0177\u017B\u017F\u0183\u018B\u0192\u0199\u019B" +
		"\u01A0\u01A5\u01AA\u01BD\u01C0\u01C3\u01C9\u01CD\u01D1\u01D4\u01D7\u01DD" +
		"\u01E1\u01E4\u01E7\u01EC\u01F0\u01F3\u01F6\u01FB\u01FF\u0201\u0204\u0207" +
		"\u020C\u0212\u0215\u0218\u021C\u0220\u0223\u0226\u022B\u022F\u0233\u023A" +
		"\u023E\u0244\u024A\u0252\u0255\u0258\u025B\u0260\u0265\u0268\u026B\u0270" +
		"\u0273\u0278\u027C\u027F\u0283\u0288\u028C\u028F\u0294\u0299\u029D\u02A0" +
		"\u02A5\u02AA\u02AE\u02B1\u02B6\u02BB\u02BF\u02C2\u02C7\u02CC\u02D0\u02D3" +
		"\u02D6\u02DC\u02DF\u02E2\u02E8\u02EB\u02F2\u02F7\u02FB\u02FE\u0304\u0307" +
		"\u0310\u0313\u031A\u031E\u0333\u0343\u0355\u0358\u0360\u0363\u0370\u0373" +
		"\u0375\u037D\u0380\u0387\u038C\u038F\u0397\u039B\u03A1\u03AE\u03B1\u03C0" +
		"\u03DE\u03E7\u03E9\u03ED\u03F6\u03F9\u03FD\u0401\u0406\u040E\u0415\u041E" +
		"\u0421\u042B\u042E\u0439\u043C\u0447\u044A\u044D\u0457\u045A\u0464\u0467" +
		"\u0471\u0474\u0477\u0480\u0487\u048E";
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



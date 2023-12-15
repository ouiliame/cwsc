// Generated from /Users/william/cwscript/cwsc-v1/grammar/CWScriptParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CWScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CONTRACT=1, INTERFACE=2, IMPORT=3, EXPORT=4, IMPLEMENTS=5, IMPL=6, EXTENDS=7, 
		ERROR=8, EVENT=9, DEFER=10, INSTANTIATE_NOW=11, EXEC_NOW=12, QUERY_NOW=13, 
		DELEGATE_EXEC=14, H_INSTANTIATE=15, INSTANTIATE=16, EXEC=17, QUERY=18, 
		REPLY=19, FOR=20, IN=21, FROM=22, STATE=23, IF=24, IS=25, TRY=26, CATCH=27, 
		ELSE=28, NOT=29, NONE=30, AND=31, OR=32, TRUE=33, FALSE=34, FN=35, LET=36, 
		CONST=37, FAIL=38, RETURN=39, STRUCT=40, TUPLE=41, UNIT=42, ENUM=43, TYPE=44, 
		EMIT=45, AS=46, LPAREN=47, RPAREN=48, LBRACK=49, RBRACK=50, LBRACE=51, 
		RBRACE=52, BAR=53, DOT=54, COMMA=55, D_QUEST=56, QUEST=57, BANG=58, SEMI=59, 
		COLON=60, AT=61, AMP=62, ARROW=63, FAT_ARROW=64, S_QUOTE=65, D_QUOTE=66, 
		F_DQUOTE=67, BACKTICK=68, EQ=69, D_EQ=70, NEQ=71, PLUS_EQ=72, PLUS=73, 
		MINUS_EQ=74, MINUS=75, MUL_EQ=76, MUL=77, DIV_EQ=78, DIV=79, MOD_EQ=80, 
		MOD=81, LT_EQ=82, LT=83, GT_EQ=84, GT=85, POW=86, BoolLiteral=87, HashIdent=88, 
		DollarIdent=89, PercentIdent=90, EscapedIdent=91, Ident=92, StringLiteral=93, 
		DoubleQuotedString=94, SingleQuotedString=95, DecLiteral=96, IntLiteral=97, 
		DOC_LINE_COMMENT=98, DOC_BLOCK_COMMENT=99, LINE_COMMENT=100, BLOCK_COMMENT=101, 
		WS=102;
	public static final int
		RULE_sourceFile = 0, RULE_docComment = 1, RULE_stmt = 2, RULE_importStmt = 3, 
		RULE_exportStmt = 4, RULE_binding = 5, RULE_bindingList = 6, RULE_brackIdentList = 7, 
		RULE_braceBindingList = 8, RULE_letStmt = 9, RULE_constStmt = 10, RULE_assignStmt = 11, 
		RULE_memberAssignStmt = 12, RULE_indexAssignStmt = 13, RULE_tryCatchElseStmt = 14, 
		RULE_ifStmt = 15, RULE_returnStmt = 16, RULE_failStmt = 17, RULE_forStmt = 18, 
		RULE_execStmt = 19, RULE_instantiateStmt = 20, RULE_emitStmt = 21, RULE_defn = 22, 
		RULE_contractDefn = 23, RULE_interfaceDefn = 24, RULE_structDefn = 25, 
		RULE_tupleDefn = 26, RULE_unitDefn = 27, RULE_enumDefn = 28, RULE_enumVariantDefnList = 29, 
		RULE_enumVariantDefn = 30, RULE_typeAliasDefn = 31, RULE_fnDefn = 32, 
		RULE_instantiateDefn = 33, RULE_execDefn = 34, RULE_execTupleDefn = 35, 
		RULE_queryDefn = 36, RULE_queryTupleDefn = 37, RULE_errorDefn = 38, RULE_eventDefn = 39, 
		RULE_stateBlockDefn = 40, RULE_stateDefn = 41, RULE_stateItemDefn = 42, 
		RULE_stateMapDefn = 43, RULE_implDefn = 44, RULE_exprStmt = 45, RULE_expr = 46, 
		RULE_ifExpr_ = 47, RULE_tryCatchElseExpr_ = 48, RULE_catchClause = 49, 
		RULE_blockClosureExpr = 50, RULE_exprClosureExpr = 51, RULE_structExpr_ = 52, 
		RULE_tupleExpr_ = 53, RULE_returnExpr_ = 54, RULE_failExpr_ = 55, RULE_literal = 56, 
		RULE_stringLit = 57, RULE_intLit = 58, RULE_decLit = 59, RULE_boolLit = 60, 
		RULE_noneLit = 61, RULE_typeExpr = 62, RULE_typeVar = 63, RULE_ident = 64, 
		RULE_param = 65, RULE_field = 66, RULE_namedArg = 67, RULE_arg = 68, RULE_identList = 69, 
		RULE_parenParamList = 70, RULE_barsParamList = 71, RULE_tupleParamList = 72, 
		RULE_braceParamList = 73, RULE_brackTypeParamList = 74, RULE_brackTypeExprList = 75, 
		RULE_braceFieldList = 76, RULE_typeExprList = 77, RULE_block = 78, RULE_blockOrExpr = 79, 
		RULE_keywordIdent = 80;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"braceFieldList", "typeExprList", "block", "blockOrExpr", "keywordIdent"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'contract'", "'interface'", "'import'", "'export'", "'implements'", 
			"'impl'", "'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", 
			"'exec!'", "'query!'", "'delegate_exec!'", "'#instantiate'", "'instantiate'", 
			"'exec'", "'query'", "'reply'", "'for'", "'in'", "'from'", "'state'", 
			"'if'", "'is'", "'try'", "'catch'", "'else'", "'not'", "'None'", "'and'", 
			"'or'", "'true'", "'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", 
			"'struct'", "'tuple'", "'unit'", "'enum'", "'type'", "'emit!'", "'as'", 
			"'('", "')'", "'['", "']'", "'{'", "'}'", "'|'", "'.'", "','", "'??'", 
			"'?'", "'!'", "';'", "':'", "'@'", "'&'", "'->'", "'=>'", "'''", "'\"'", 
			"'f\"'", "'`'", "'='", "'=='", "'!='", "'+='", "'+'", "'-='", "'-'", 
			"'*='", "'*'", "'/='", "'/'", "'%='", "'%'", "'<='", "'<'", "'>='", "'>'", 
			"'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CONTRACT", "INTERFACE", "IMPORT", "EXPORT", "IMPLEMENTS", "IMPL", 
			"EXTENDS", "ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", 
			"QUERY_NOW", "DELEGATE_EXEC", "H_INSTANTIATE", "INSTANTIATE", "EXEC", 
			"QUERY", "REPLY", "FOR", "IN", "FROM", "STATE", "IF", "IS", "TRY", "CATCH", 
			"ELSE", "NOT", "NONE", "AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", 
			"FAIL", "RETURN", "STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", 
			"AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "BAR", 
			"DOT", "COMMA", "D_QUEST", "QUEST", "BANG", "SEMI", "COLON", "AT", "AMP", 
			"ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "F_DQUOTE", "BACKTICK", "EQ", 
			"D_EQ", "NEQ", "PLUS_EQ", "PLUS", "MINUS_EQ", "MINUS", "MUL_EQ", "MUL", 
			"DIV_EQ", "DIV", "MOD_EQ", "MOD", "LT_EQ", "LT", "GT_EQ", "GT", "POW", 
			"BoolLiteral", "HashIdent", "DollarIdent", "PercentIdent", "EscapedIdent", 
			"Ident", "StringLiteral", "DoubleQuotedString", "SingleQuotedString", 
			"DecLiteral", "IntLiteral", "DOC_LINE_COMMENT", "DOC_BLOCK_COMMENT", 
			"LINE_COMMENT", "BLOCK_COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CWScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CWScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SourceFileContext extends ParserRuleContext {
		public StmtContext stmt;
		public List<StmtContext> stmts = new ArrayList<StmtContext>();
		public TerminalNode EOF() { return getToken(CWScriptParser.EOF, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public SourceFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceFile; }
	}

	public final SourceFileContext sourceFile() throws RecognitionException {
		SourceFileContext _localctx = new SourceFileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sourceFile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9781255272905726L) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & 7807L) != 0)) {
				{
				{
				setState(162);
				((SourceFileContext)_localctx).stmt = stmt();
				((SourceFileContext)_localctx).stmts.add(((SourceFileContext)_localctx).stmt);
				}
				}
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(168);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DocCommentContext extends ParserRuleContext {
		public TerminalNode DOC_LINE_COMMENT() { return getToken(CWScriptParser.DOC_LINE_COMMENT, 0); }
		public TerminalNode DOC_BLOCK_COMMENT() { return getToken(CWScriptParser.DOC_BLOCK_COMMENT, 0); }
		public DocCommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_docComment; }
	}

	public final DocCommentContext docComment() throws RecognitionException {
		DocCommentContext _localctx = new DocCommentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_docComment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			_la = _input.LA(1);
			if ( !(_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StmtContext extends ParserRuleContext {
		public ImportStmtContext importStmt() {
			return getRuleContext(ImportStmtContext.class,0);
		}
		public ExportStmtContext exportStmt() {
			return getRuleContext(ExportStmtContext.class,0);
		}
		public DefnContext defn() {
			return getRuleContext(DefnContext.class,0);
		}
		public LetStmtContext letStmt() {
			return getRuleContext(LetStmtContext.class,0);
		}
		public ConstStmtContext constStmt() {
			return getRuleContext(ConstStmtContext.class,0);
		}
		public AssignStmtContext assignStmt() {
			return getRuleContext(AssignStmtContext.class,0);
		}
		public MemberAssignStmtContext memberAssignStmt() {
			return getRuleContext(MemberAssignStmtContext.class,0);
		}
		public IndexAssignStmtContext indexAssignStmt() {
			return getRuleContext(IndexAssignStmtContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public TryCatchElseStmtContext tryCatchElseStmt() {
			return getRuleContext(TryCatchElseStmtContext.class,0);
		}
		public ForStmtContext forStmt() {
			return getRuleContext(ForStmtContext.class,0);
		}
		public ExecStmtContext execStmt() {
			return getRuleContext(ExecStmtContext.class,0);
		}
		public InstantiateStmtContext instantiateStmt() {
			return getRuleContext(InstantiateStmtContext.class,0);
		}
		public EmitStmtContext emitStmt() {
			return getRuleContext(EmitStmtContext.class,0);
		}
		public FailStmtContext failStmt() {
			return getRuleContext(FailStmtContext.class,0);
		}
		public ReturnStmtContext returnStmt() {
			return getRuleContext(ReturnStmtContext.class,0);
		}
		public ExprStmtContext exprStmt() {
			return getRuleContext(ExprStmtContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_stmt);
		try {
			setState(189);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				importStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(173);
				exportStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(174);
				defn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(175);
				letStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(176);
				constStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(177);
				assignStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(178);
				memberAssignStmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(179);
				indexAssignStmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(180);
				ifStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(181);
				tryCatchElseStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(182);
				forStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(183);
				execStmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(184);
				instantiateStmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(185);
				emitStmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(186);
				failStmt();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(187);
				returnStmt();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(188);
				exprStmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportStmtContext extends ParserRuleContext {
		public BraceBindingListContext bindings;
		public StringLitContext src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public BraceBindingListContext braceBindingList() {
			return getRuleContext(BraceBindingListContext.class,0);
		}
		public StringLitContext stringLit() {
			return getRuleContext(StringLitContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ImportStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStmt; }
	}

	public final ImportStmtContext importStmt() throws RecognitionException {
		ImportStmtContext _localctx = new ImportStmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_importStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(IMPORT);
			{
			setState(192);
			((ImportStmtContext)_localctx).bindings = braceBindingList();
			}
			setState(193);
			match(FROM);
			{
			setState(194);
			((ImportStmtContext)_localctx).src = stringLit();
			}
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(195);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExportStmtContext extends ParserRuleContext {
		public BraceFieldListContext fields;
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BraceFieldListContext braceFieldList() {
			return getRuleContext(BraceFieldListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ExportStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportStmt; }
	}

	public final ExportStmtContext exportStmt() throws RecognitionException {
		ExportStmtContext _localctx = new ExportStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_exportStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			match(EXPORT);
			{
			setState(199);
			((ExportStmtContext)_localctx).fields = braceFieldList();
			}
			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(200);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BindingContext extends ParserRuleContext {
		public IdentContext name;
		public IdentContext alias;
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public TerminalNode AS() { return getToken(CWScriptParser.AS, 0); }
		public BindingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binding; }
	}

	public final BindingContext binding() throws RecognitionException {
		BindingContext _localctx = new BindingContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_binding);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(203);
			((BindingContext)_localctx).name = ident();
			}
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(204);
				match(AS);
				{
				setState(205);
				((BindingContext)_localctx).alias = ident();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BindingListContext extends ParserRuleContext {
		public List<BindingContext> binding() {
			return getRuleContexts(BindingContext.class);
		}
		public BindingContext binding(int i) {
			return getRuleContext(BindingContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BindingListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bindingList; }
	}

	public final BindingListContext bindingList() throws RecognitionException {
		BindingListContext _localctx = new BindingListContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_bindingList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(208);
			binding();
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(209);
				match(COMMA);
				setState(210);
				binding();
				}
				}
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BrackIdentListContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BrackIdentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_brackIdentList; }
	}

	public final BrackIdentListContext brackIdentList() throws RecognitionException {
		BrackIdentListContext _localctx = new BrackIdentListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_brackIdentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(LBRACK);
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 27L) != 0)) {
				{
				setState(217);
				ident();
				setState(222);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(218);
					match(COMMA);
					setState(219);
					ident();
					}
					}
					setState(224);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(227);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BraceBindingListContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<BindingContext> binding() {
			return getRuleContexts(BindingContext.class);
		}
		public BindingContext binding(int i) {
			return getRuleContext(BindingContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BraceBindingListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceBindingList; }
	}

	public final BraceBindingListContext braceBindingList() throws RecognitionException {
		BraceBindingListContext _localctx = new BraceBindingListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_braceBindingList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(LBRACE);
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 27L) != 0)) {
				{
				setState(230);
				binding();
				setState(235);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(231);
						match(COMMA);
						setState(232);
						binding();
						}
						} 
					}
					setState(237);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
				}
				}
			}

			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(240);
				match(COMMA);
				}
			}

			setState(243);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LetStmtContext extends ParserRuleContext {
		public LetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt; }
	 
		public LetStmtContext() { }
		public void copyFrom(LetStmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LetStructStmtContext extends LetStmtContext {
		public DocCommentContext doc;
		public BraceBindingListContext bindings;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public BraceBindingListContext braceBindingList() {
			return getRuleContext(BraceBindingListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public LetStructStmtContext(LetStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LetIdentStmtContext extends LetStmtContext {
		public DocCommentContext doc;
		public IdentContext name;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public LetIdentStmtContext(LetStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LetTupleStmtContext extends LetStmtContext {
		public DocCommentContext doc;
		public BrackIdentListContext names;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public BrackIdentListContext brackIdentList() {
			return getRuleContext(BrackIdentListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public LetTupleStmtContext(LetStmtContext ctx) { copyFrom(ctx); }
	}

	public final LetStmtContext letStmt() throws RecognitionException {
		LetStmtContext _localctx = new LetStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_letStmt);
		int _la;
		try {
			setState(290);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				_localctx = new LetIdentStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(245);
					((LetIdentStmtContext)_localctx).doc = docComment();
					}
				}

				setState(248);
				match(LET);
				{
				setState(249);
				((LetIdentStmtContext)_localctx).name = ident();
				}
				setState(252);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(250);
					match(COLON);
					setState(251);
					((LetIdentStmtContext)_localctx).ty = typeExpr(0);
					}
				}

				{
				setState(254);
				match(EQ);
				setState(255);
				((LetIdentStmtContext)_localctx).value = expr(0);
				}
				setState(258);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(257);
					match(SEMI);
					}
				}

				}
				break;
			case 2:
				_localctx = new LetTupleStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(261);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(260);
					((LetTupleStmtContext)_localctx).doc = docComment();
					}
				}

				setState(263);
				match(LET);
				{
				setState(264);
				((LetTupleStmtContext)_localctx).names = brackIdentList();
				}
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(265);
					match(COLON);
					setState(266);
					((LetTupleStmtContext)_localctx).ty = typeExpr(0);
					}
				}

				{
				setState(269);
				match(EQ);
				setState(270);
				((LetTupleStmtContext)_localctx).value = expr(0);
				}
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(272);
					match(SEMI);
					}
				}

				}
				break;
			case 3:
				_localctx = new LetStructStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(276);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(275);
					((LetStructStmtContext)_localctx).doc = docComment();
					}
				}

				setState(278);
				match(LET);
				{
				setState(279);
				((LetStructStmtContext)_localctx).bindings = braceBindingList();
				}
				setState(282);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(280);
					match(COLON);
					setState(281);
					((LetStructStmtContext)_localctx).ty = typeExpr(0);
					}
				}

				{
				setState(284);
				match(EQ);
				setState(285);
				((LetStructStmtContext)_localctx).value = expr(0);
				}
				setState(288);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(287);
					match(SEMI);
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstStmtContext extends ParserRuleContext {
		public ConstStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constStmt; }
	 
		public ConstStmtContext() { }
		public void copyFrom(ConstStmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConstTupleStmtContext extends ConstStmtContext {
		public DocCommentContext doc;
		public Token exported;
		public BrackIdentListContext names;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public BrackIdentListContext brackIdentList() {
			return getRuleContext(BrackIdentListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ConstTupleStmtContext(ConstStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConstIdentStmtContext extends ConstStmtContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ConstIdentStmtContext(ConstStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConstStructStmtContext extends ConstStmtContext {
		public DocCommentContext doc;
		public Token exported;
		public BraceBindingListContext bindings;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public BraceBindingListContext braceBindingList() {
			return getRuleContext(BraceBindingListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ConstStructStmtContext(ConstStmtContext ctx) { copyFrom(ctx); }
	}

	public final ConstStmtContext constStmt() throws RecognitionException {
		ConstStmtContext _localctx = new ConstStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_constStmt);
		int _la;
		try {
			setState(346);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				_localctx = new ConstIdentStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(292);
					((ConstIdentStmtContext)_localctx).doc = docComment();
					}
				}

				setState(296);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXPORT) {
					{
					setState(295);
					((ConstIdentStmtContext)_localctx).exported = match(EXPORT);
					}
				}

				setState(298);
				match(CONST);
				{
				setState(299);
				((ConstIdentStmtContext)_localctx).name = ident();
				}
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(300);
					match(COLON);
					setState(301);
					((ConstIdentStmtContext)_localctx).ty = typeExpr(0);
					}
				}

				{
				setState(304);
				match(EQ);
				setState(305);
				((ConstIdentStmtContext)_localctx).value = expr(0);
				}
				setState(308);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(307);
					match(SEMI);
					}
				}

				}
				break;
			case 2:
				_localctx = new ConstTupleStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(311);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(310);
					((ConstTupleStmtContext)_localctx).doc = docComment();
					}
				}

				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXPORT) {
					{
					setState(313);
					((ConstTupleStmtContext)_localctx).exported = match(EXPORT);
					}
				}

				setState(316);
				match(CONST);
				{
				setState(317);
				((ConstTupleStmtContext)_localctx).names = brackIdentList();
				}
				setState(320);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(318);
					match(COLON);
					setState(319);
					((ConstTupleStmtContext)_localctx).ty = typeExpr(0);
					}
				}

				{
				setState(322);
				match(EQ);
				setState(323);
				((ConstTupleStmtContext)_localctx).value = expr(0);
				}
				setState(326);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(325);
					match(SEMI);
					}
				}

				}
				break;
			case 3:
				_localctx = new ConstStructStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(329);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(328);
					((ConstStructStmtContext)_localctx).doc = docComment();
					}
				}

				setState(332);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXPORT) {
					{
					setState(331);
					((ConstStructStmtContext)_localctx).exported = match(EXPORT);
					}
				}

				setState(334);
				match(CONST);
				{
				setState(335);
				((ConstStructStmtContext)_localctx).bindings = braceBindingList();
				}
				setState(338);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(336);
					match(COLON);
					setState(337);
					((ConstStructStmtContext)_localctx).ty = typeExpr(0);
					}
				}

				{
				setState(340);
				match(EQ);
				setState(341);
				((ConstStructStmtContext)_localctx).value = expr(0);
				}
				setState(344);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(343);
					match(SEMI);
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignStmtContext extends ParserRuleContext {
		public IdentContext name;
		public Token assignOp;
		public ExprContext value;
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public AssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt; }
	}

	public final AssignStmtContext assignStmt() throws RecognitionException {
		AssignStmtContext _localctx = new AssignStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_assignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(348);
			((AssignStmtContext)_localctx).name = ident();
			}
			setState(349);
			((AssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 2729L) != 0)) ) {
				((AssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			{
			setState(350);
			((AssignStmtContext)_localctx).value = expr(0);
			}
			setState(352);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(351);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MemberAssignStmtContext extends ParserRuleContext {
		public ExprContext obj;
		public IdentContext memberName;
		public Token assignOp;
		public ExprContext value;
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public MemberAssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberAssignStmt; }
	}

	public final MemberAssignStmtContext memberAssignStmt() throws RecognitionException {
		MemberAssignStmtContext _localctx = new MemberAssignStmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_memberAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(354);
			((MemberAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(355);
			match(DOT);
			{
			setState(356);
			((MemberAssignStmtContext)_localctx).memberName = ident();
			}
			setState(357);
			((MemberAssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 2729L) != 0)) ) {
				((MemberAssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			{
			setState(358);
			((MemberAssignStmtContext)_localctx).value = expr(0);
			}
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(359);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IndexAssignStmtContext extends ParserRuleContext {
		public ExprContext obj;
		public ExprContext index;
		public Token assignOp;
		public ExprContext value;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public IndexAssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexAssignStmt; }
	}

	public final IndexAssignStmtContext indexAssignStmt() throws RecognitionException {
		IndexAssignStmtContext _localctx = new IndexAssignStmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_indexAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(362);
			((IndexAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(363);
			match(LBRACK);
			setState(364);
			((IndexAssignStmtContext)_localctx).index = expr(0);
			setState(365);
			match(RBRACK);
			setState(366);
			((IndexAssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 2729L) != 0)) ) {
				((IndexAssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(367);
			((IndexAssignStmtContext)_localctx).value = expr(0);
			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(368);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TryCatchElseStmtContext extends ParserRuleContext {
		public TryCatchElseExpr_Context tryCatchElseExpr_() {
			return getRuleContext(TryCatchElseExpr_Context.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TryCatchElseStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryCatchElseStmt; }
	}

	public final TryCatchElseStmtContext tryCatchElseStmt() throws RecognitionException {
		TryCatchElseStmtContext _localctx = new TryCatchElseStmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_tryCatchElseStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			tryCatchElseExpr_();
			setState(373);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(372);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStmtContext extends ParserRuleContext {
		public IfExpr_Context ifExpr_() {
			return getRuleContext(IfExpr_Context.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(375);
			ifExpr_();
			setState(377);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(376);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStmtContext extends ParserRuleContext {
		public ReturnExpr_Context returnExpr_() {
			return getRuleContext(ReturnExpr_Context.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ReturnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStmt; }
	}

	public final ReturnStmtContext returnStmt() throws RecognitionException {
		ReturnStmtContext _localctx = new ReturnStmtContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_returnStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			returnExpr_();
			setState(381);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(380);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FailStmtContext extends ParserRuleContext {
		public FailExpr_Context failExpr_() {
			return getRuleContext(FailExpr_Context.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public FailStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failStmt; }
	}

	public final FailStmtContext failStmt() throws RecognitionException {
		FailStmtContext _localctx = new FailStmtContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_failStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			failExpr_();
			setState(385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(384);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForStmtContext extends ParserRuleContext {
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
	 
		public ForStmtContext() { }
		public void copyFrom(ForStmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForIdentStmtContext extends ForStmtContext {
		public IdentContext name;
		public ExprContext iter;
		public BlockContext body;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ForIdentStmtContext(ForStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForStructStmtContext extends ForStmtContext {
		public BraceBindingListContext bindings;
		public ExprContext iter;
		public BlockContext body;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public BraceBindingListContext braceBindingList() {
			return getRuleContext(BraceBindingListContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ForStructStmtContext(ForStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForTupleStmtContext extends ForStmtContext {
		public BrackIdentListContext names;
		public ExprContext iter;
		public BlockContext body;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public BrackIdentListContext brackIdentList() {
			return getRuleContext(BrackIdentListContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ForTupleStmtContext(ForStmtContext ctx) { copyFrom(ctx); }
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_forStmt);
		int _la;
		try {
			setState(409);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				_localctx = new ForIdentStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(387);
				match(FOR);
				{
				setState(388);
				((ForIdentStmtContext)_localctx).name = ident();
				}
				setState(389);
				match(IN);
				{
				setState(390);
				((ForIdentStmtContext)_localctx).iter = expr(0);
				}
				setState(391);
				((ForIdentStmtContext)_localctx).body = block();
				setState(393);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(392);
					match(SEMI);
					}
				}

				}
				break;
			case 2:
				_localctx = new ForTupleStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(395);
				match(FOR);
				{
				setState(396);
				((ForTupleStmtContext)_localctx).names = brackIdentList();
				}
				{
				setState(397);
				((ForTupleStmtContext)_localctx).iter = expr(0);
				}
				setState(398);
				((ForTupleStmtContext)_localctx).body = block();
				setState(400);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(399);
					match(SEMI);
					}
				}

				}
				break;
			case 3:
				_localctx = new ForStructStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(402);
				match(FOR);
				{
				setState(403);
				((ForStructStmtContext)_localctx).bindings = braceBindingList();
				}
				{
				setState(404);
				((ForStructStmtContext)_localctx).iter = expr(0);
				}
				setState(405);
				((ForStructStmtContext)_localctx).body = block();
				setState(407);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(406);
					match(SEMI);
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExecStmtContext extends ParserRuleContext {
		public ExprContext value;
		public TerminalNode EXEC_NOW() { return getToken(CWScriptParser.EXEC_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ExecStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execStmt; }
	}

	public final ExecStmtContext execStmt() throws RecognitionException {
		ExecStmtContext _localctx = new ExecStmtContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_execStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(411);
			match(EXEC_NOW);
			setState(412);
			((ExecStmtContext)_localctx).value = expr(0);
			setState(414);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(413);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstantiateStmtContext extends ParserRuleContext {
		public ExprContext value;
		public TerminalNode INSTANTIATE_NOW() { return getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public InstantiateStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateStmt; }
	}

	public final InstantiateStmtContext instantiateStmt() throws RecognitionException {
		InstantiateStmtContext _localctx = new InstantiateStmtContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_instantiateStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			match(INSTANTIATE_NOW);
			setState(417);
			((InstantiateStmtContext)_localctx).value = expr(0);
			setState(419);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(418);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EmitStmtContext extends ParserRuleContext {
		public ExprContext value;
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public EmitStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emitStmt; }
	}

	public final EmitStmtContext emitStmt() throws RecognitionException {
		EmitStmtContext _localctx = new EmitStmtContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_emitStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(421);
			match(EMIT);
			setState(422);
			((EmitStmtContext)_localctx).value = expr(0);
			setState(424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(423);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefnContext extends ParserRuleContext {
		public ContractDefnContext contractDefn() {
			return getRuleContext(ContractDefnContext.class,0);
		}
		public InterfaceDefnContext interfaceDefn() {
			return getRuleContext(InterfaceDefnContext.class,0);
		}
		public StructDefnContext structDefn() {
			return getRuleContext(StructDefnContext.class,0);
		}
		public TupleDefnContext tupleDefn() {
			return getRuleContext(TupleDefnContext.class,0);
		}
		public UnitDefnContext unitDefn() {
			return getRuleContext(UnitDefnContext.class,0);
		}
		public EnumDefnContext enumDefn() {
			return getRuleContext(EnumDefnContext.class,0);
		}
		public TypeAliasDefnContext typeAliasDefn() {
			return getRuleContext(TypeAliasDefnContext.class,0);
		}
		public FnDefnContext fnDefn() {
			return getRuleContext(FnDefnContext.class,0);
		}
		public InstantiateDefnContext instantiateDefn() {
			return getRuleContext(InstantiateDefnContext.class,0);
		}
		public ExecDefnContext execDefn() {
			return getRuleContext(ExecDefnContext.class,0);
		}
		public ExecTupleDefnContext execTupleDefn() {
			return getRuleContext(ExecTupleDefnContext.class,0);
		}
		public QueryDefnContext queryDefn() {
			return getRuleContext(QueryDefnContext.class,0);
		}
		public QueryTupleDefnContext queryTupleDefn() {
			return getRuleContext(QueryTupleDefnContext.class,0);
		}
		public ErrorDefnContext errorDefn() {
			return getRuleContext(ErrorDefnContext.class,0);
		}
		public EventDefnContext eventDefn() {
			return getRuleContext(EventDefnContext.class,0);
		}
		public StateBlockDefnContext stateBlockDefn() {
			return getRuleContext(StateBlockDefnContext.class,0);
		}
		public ImplDefnContext implDefn() {
			return getRuleContext(ImplDefnContext.class,0);
		}
		public DefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defn; }
	}

	public final DefnContext defn() throws RecognitionException {
		DefnContext _localctx = new DefnContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_defn);
		try {
			setState(443);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(426);
				contractDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(427);
				interfaceDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(428);
				structDefn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(429);
				tupleDefn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(430);
				unitDefn();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(431);
				enumDefn();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(432);
				typeAliasDefn();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(433);
				fnDefn();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(434);
				instantiateDefn();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(435);
				execDefn();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(436);
				execTupleDefn();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(437);
				queryDefn();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(438);
				queryTupleDefn();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(439);
				errorDefn();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(440);
				eventDefn();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(441);
				stateBlockDefn();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(442);
				implDefn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContractDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public TypeExprContext base;
		public TypeExprListContext interfaces;
		public BlockContext body;
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public ContractDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractDefn; }
	}

	public final ContractDefnContext contractDefn() throws RecognitionException {
		ContractDefnContext _localctx = new ContractDefnContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(445);
				((ContractDefnContext)_localctx).doc = docComment();
				}
			}

			setState(449);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(448);
				((ContractDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(451);
			match(CONTRACT);
			{
			setState(452);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(455);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(453);
				match(EXTENDS);
				{
				setState(454);
				((ContractDefnContext)_localctx).base = typeExpr(0);
				}
				}
			}

			setState(459);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(457);
				match(IMPLEMENTS);
				{
				setState(458);
				((ContractDefnContext)_localctx).interfaces = typeExprList();
				}
				}
			}

			{
			setState(461);
			((ContractDefnContext)_localctx).body = block();
			}
			setState(463);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(462);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InterfaceDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public TypeExprListContext baseInterfaces;
		public BlockContext body;
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public InterfaceDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDefn; }
	}

	public final InterfaceDefnContext interfaceDefn() throws RecognitionException {
		InterfaceDefnContext _localctx = new InterfaceDefnContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_interfaceDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(466);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(465);
				((InterfaceDefnContext)_localctx).doc = docComment();
				}
			}

			setState(469);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(468);
				((InterfaceDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(471);
			match(INTERFACE);
			{
			setState(472);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(473);
				match(EXTENDS);
				{
				setState(474);
				((InterfaceDefnContext)_localctx).baseInterfaces = typeExprList();
				}
				}
			}

			{
			setState(477);
			((InterfaceDefnContext)_localctx).body = block();
			}
			setState(479);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(478);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StructDefnContext extends ParserRuleContext {
		public StructDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn; }
	 
		public StructDefnContext() { }
		public void copyFrom(StructDefnContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructDefnParenContext extends StructDefnContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public BrackTypeParamListContext typeParams;
		public ParenParamListContext fields;
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public StructDefnParenContext(StructDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructDefnBraceContext extends StructDefnContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public BrackTypeParamListContext typeParams;
		public BraceParamListContext fields;
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BraceParamListContext braceParamList() {
			return getRuleContext(BraceParamListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public StructDefnBraceContext(StructDefnContext ctx) { copyFrom(ctx); }
	}

	public final StructDefnContext structDefn() throws RecognitionException {
		StructDefnContext _localctx = new StructDefnContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_structDefn);
		int _la;
		try {
			setState(511);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(482);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(481);
					((StructDefnBraceContext)_localctx).doc = docComment();
					}
				}

				setState(485);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXPORT) {
					{
					setState(484);
					((StructDefnBraceContext)_localctx).exported = match(EXPORT);
					}
				}

				setState(487);
				match(STRUCT);
				{
				setState(488);
				((StructDefnBraceContext)_localctx).name = ident();
				}
				setState(490);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(489);
					((StructDefnBraceContext)_localctx).typeParams = brackTypeParamList();
					}
				}

				{
				setState(492);
				((StructDefnBraceContext)_localctx).fields = braceParamList();
				}
				setState(494);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
				case 1:
					{
					setState(493);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 2:
				_localctx = new StructDefnParenContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(497);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(496);
					((StructDefnParenContext)_localctx).doc = docComment();
					}
				}

				setState(500);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXPORT) {
					{
					setState(499);
					((StructDefnParenContext)_localctx).exported = match(EXPORT);
					}
				}

				setState(502);
				match(STRUCT);
				{
				setState(503);
				((StructDefnParenContext)_localctx).name = ident();
				}
				setState(505);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(504);
					((StructDefnParenContext)_localctx).typeParams = brackTypeParamList();
					}
				}

				{
				setState(507);
				((StructDefnParenContext)_localctx).fields = parenParamList();
				}
				setState(509);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
				case 1:
					{
					setState(508);
					match(SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public BrackTypeParamListContext typeParams;
		public BrackTypeExprListContext elements;
		public TerminalNode TUPLE() { return getToken(CWScriptParser.TUPLE, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BrackTypeExprListContext brackTypeExprList() {
			return getRuleContext(BrackTypeExprListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public TupleDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleDefn; }
	}

	public final TupleDefnContext tupleDefn() throws RecognitionException {
		TupleDefnContext _localctx = new TupleDefnContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_tupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(514);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(513);
				((TupleDefnContext)_localctx).doc = docComment();
				}
			}

			setState(517);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(516);
				((TupleDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(519);
			match(TUPLE);
			{
			setState(520);
			((TupleDefnContext)_localctx).name = ident();
			}
			setState(522);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(521);
				((TupleDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			setState(524);
			match(LPAREN);
			{
			setState(525);
			((TupleDefnContext)_localctx).elements = brackTypeExprList();
			}
			setState(526);
			match(RPAREN);
			setState(528);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				{
				setState(527);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnitDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public BrackTypeParamListContext typeParams;
		public IdentContext name;
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public UnitDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitDefn; }
	}

	public final UnitDefnContext unitDefn() throws RecognitionException {
		UnitDefnContext _localctx = new UnitDefnContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_unitDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(531);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(530);
				((UnitDefnContext)_localctx).doc = docComment();
				}
			}

			setState(534);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(533);
				((UnitDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(536);
			match(UNIT);
			setState(538);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(537);
				((UnitDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			{
			setState(540);
			((UnitDefnContext)_localctx).name = ident();
			}
			setState(542);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(541);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public BrackTypeParamListContext typeParams;
		public EnumVariantDefnListContext variants;
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public EnumVariantDefnListContext enumVariantDefnList() {
			return getRuleContext(EnumVariantDefnListContext.class,0);
		}
		public EnumDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefn; }
	}

	public final EnumDefnContext enumDefn() throws RecognitionException {
		EnumDefnContext _localctx = new EnumDefnContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(544);
				((EnumDefnContext)_localctx).doc = docComment();
				}
			}

			setState(548);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(547);
				((EnumDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(550);
			match(ENUM);
			{
			setState(551);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(553);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(552);
				((EnumDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			setState(555);
			match(LBRACE);
			setState(557);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3099L) != 0)) {
				{
				setState(556);
				((EnumDefnContext)_localctx).variants = enumVariantDefnList();
				}
			}

			setState(559);
			match(RBRACE);
			setState(561);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				{
				setState(560);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantDefnListContext extends ParserRuleContext {
		public List<EnumVariantDefnContext> enumVariantDefn() {
			return getRuleContexts(EnumVariantDefnContext.class);
		}
		public EnumVariantDefnContext enumVariantDefn(int i) {
			return getRuleContext(EnumVariantDefnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EnumVariantDefnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantDefnList; }
	}

	public final EnumVariantDefnListContext enumVariantDefnList() throws RecognitionException {
		EnumVariantDefnListContext _localctx = new EnumVariantDefnListContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_enumVariantDefnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(563);
			enumVariantDefn();
			setState(568);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(564);
				match(COMMA);
				setState(565);
				enumVariantDefn();
				}
				}
				setState(570);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantDefnContext extends ParserRuleContext {
		public EnumVariantDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantDefn; }
	 
		public EnumVariantDefnContext() { }
		public void copyFrom(EnumVariantDefnContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantStructDefnParenContext extends EnumVariantDefnContext {
		public DocCommentContext doc;
		public IdentContext name;
		public ParenParamListContext fields;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public EnumVariantStructDefnParenContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantTupleDefnContext extends EnumVariantDefnContext {
		public DocCommentContext doc;
		public IdentContext name;
		public BrackTypeExprListContext elements;
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BrackTypeExprListContext brackTypeExprList() {
			return getRuleContext(BrackTypeExprListContext.class,0);
		}
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public EnumVariantTupleDefnContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantUnitDefnContext extends EnumVariantDefnContext {
		public DocCommentContext doc;
		public IdentContext name;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public EnumVariantUnitDefnContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantStructDefnBraceContext extends EnumVariantDefnContext {
		public DocCommentContext doc;
		public IdentContext name;
		public BraceParamListContext fields;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BraceParamListContext braceParamList() {
			return getRuleContext(BraceParamListContext.class,0);
		}
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public EnumVariantStructDefnBraceContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}

	public final EnumVariantDefnContext enumVariantDefn() throws RecognitionException {
		EnumVariantDefnContext _localctx = new EnumVariantDefnContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_enumVariantDefn);
		int _la;
		try {
			setState(595);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(572);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(571);
					((EnumVariantStructDefnBraceContext)_localctx).doc = docComment();
					}
				}

				{
				setState(574);
				((EnumVariantStructDefnBraceContext)_localctx).name = ident();
				}
				{
				setState(575);
				((EnumVariantStructDefnBraceContext)_localctx).fields = braceParamList();
				}
				}
				break;
			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(578);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(577);
					((EnumVariantStructDefnParenContext)_localctx).doc = docComment();
					}
				}

				{
				setState(580);
				((EnumVariantStructDefnParenContext)_localctx).name = ident();
				}
				{
				setState(581);
				((EnumVariantStructDefnParenContext)_localctx).fields = parenParamList();
				}
				}
				break;
			case 3:
				_localctx = new EnumVariantTupleDefnContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(584);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(583);
					((EnumVariantTupleDefnContext)_localctx).doc = docComment();
					}
				}

				{
				setState(586);
				((EnumVariantTupleDefnContext)_localctx).name = ident();
				}
				setState(587);
				match(LPAREN);
				{
				setState(588);
				((EnumVariantTupleDefnContext)_localctx).elements = brackTypeExprList();
				}
				setState(589);
				match(RPAREN);
				}
				break;
			case 4:
				_localctx = new EnumVariantUnitDefnContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(592);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
					{
					setState(591);
					((EnumVariantUnitDefnContext)_localctx).doc = docComment();
					}
				}

				{
				setState(594);
				((EnumVariantUnitDefnContext)_localctx).name = ident();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeAliasDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public BrackTypeParamListContext typeParams;
		public TypeExprContext ty;
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public TypeAliasDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasDefn; }
	}

	public final TypeAliasDefnContext typeAliasDefn() throws RecognitionException {
		TypeAliasDefnContext _localctx = new TypeAliasDefnContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_typeAliasDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(598);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(597);
				((TypeAliasDefnContext)_localctx).doc = docComment();
				}
			}

			setState(601);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(600);
				((TypeAliasDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(603);
			match(TYPE);
			{
			setState(604);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(606);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(605);
				((TypeAliasDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			setState(608);
			match(EQ);
			{
			setState(609);
			((TypeAliasDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(611);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(610);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FnDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public Token fallible;
		public BrackTypeParamListContext typeParams;
		public ParenParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public FnDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnDefn; }
	}

	public final FnDefnContext fnDefn() throws RecognitionException {
		FnDefnContext _localctx = new FnDefnContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(614);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(613);
				((FnDefnContext)_localctx).doc = docComment();
				}
			}

			setState(617);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(616);
				((FnDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(619);
			match(FN);
			{
			setState(620);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(622);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(621);
				((FnDefnContext)_localctx).fallible = match(BANG);
				}
			}

			setState(625);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(624);
				((FnDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			{
			setState(627);
			((FnDefnContext)_localctx).params = parenParamList();
			}
			setState(630);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(628);
				match(ARROW);
				{
				setState(629);
				((FnDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(632);
			((FnDefnContext)_localctx).body = block();
			}
			setState(634);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(633);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstantiateDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token fallible;
		public ParenParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode H_INSTANTIATE() { return getToken(CWScriptParser.H_INSTANTIATE, 0); }
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public InstantiateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDefn; }
	}

	public final InstantiateDefnContext instantiateDefn() throws RecognitionException {
		InstantiateDefnContext _localctx = new InstantiateDefnContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_instantiateDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(636);
				((InstantiateDefnContext)_localctx).doc = docComment();
				}
			}

			setState(639);
			match(H_INSTANTIATE);
			setState(641);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(640);
				((InstantiateDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(643);
			((InstantiateDefnContext)_localctx).params = parenParamList();
			}
			setState(646);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(644);
				match(ARROW);
				{
				setState(645);
				((InstantiateDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(648);
			((InstantiateDefnContext)_localctx).body = block();
			}
			setState(650);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(649);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExecDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public Token fallible;
		public ParenParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ExecDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDefn; }
	}

	public final ExecDefnContext execDefn() throws RecognitionException {
		ExecDefnContext _localctx = new ExecDefnContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_execDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(653);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(652);
				((ExecDefnContext)_localctx).doc = docComment();
				}
			}

			setState(655);
			match(EXEC);
			{
			setState(656);
			((ExecDefnContext)_localctx).name = ident();
			}
			setState(658);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(657);
				((ExecDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(660);
			((ExecDefnContext)_localctx).params = parenParamList();
			}
			setState(663);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(661);
				match(ARROW);
				{
				setState(662);
				((ExecDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(665);
			((ExecDefnContext)_localctx).body = block();
			}
			setState(667);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(666);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExecTupleDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public Token fallible;
		public TupleParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TupleParamListContext tupleParamList() {
			return getRuleContext(TupleParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ExecTupleDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execTupleDefn; }
	}

	public final ExecTupleDefnContext execTupleDefn() throws RecognitionException {
		ExecTupleDefnContext _localctx = new ExecTupleDefnContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_execTupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(670);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(669);
				((ExecTupleDefnContext)_localctx).doc = docComment();
				}
			}

			setState(672);
			match(EXEC);
			{
			setState(673);
			((ExecTupleDefnContext)_localctx).name = ident();
			}
			setState(675);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(674);
				((ExecTupleDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(677);
			((ExecTupleDefnContext)_localctx).params = tupleParamList();
			}
			setState(680);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(678);
				match(ARROW);
				{
				setState(679);
				((ExecTupleDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(682);
			((ExecTupleDefnContext)_localctx).body = block();
			}
			setState(684);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(683);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QueryDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public Token fallible;
		public ParenParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public QueryDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDefn; }
	}

	public final QueryDefnContext queryDefn() throws RecognitionException {
		QueryDefnContext _localctx = new QueryDefnContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_queryDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(687);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(686);
				((QueryDefnContext)_localctx).doc = docComment();
				}
			}

			setState(689);
			match(QUERY);
			{
			setState(690);
			((QueryDefnContext)_localctx).name = ident();
			}
			setState(692);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(691);
				((QueryDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(694);
			((QueryDefnContext)_localctx).params = parenParamList();
			}
			setState(697);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(695);
				match(ARROW);
				{
				setState(696);
				((QueryDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(699);
			((QueryDefnContext)_localctx).body = block();
			}
			setState(701);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(700);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QueryTupleDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public Token fallible;
		public TupleParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TupleParamListContext tupleParamList() {
			return getRuleContext(TupleParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public QueryTupleDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryTupleDefn; }
	}

	public final QueryTupleDefnContext queryTupleDefn() throws RecognitionException {
		QueryTupleDefnContext _localctx = new QueryTupleDefnContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_queryTupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(704);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(703);
				((QueryTupleDefnContext)_localctx).doc = docComment();
				}
			}

			setState(706);
			match(QUERY);
			{
			setState(707);
			((QueryTupleDefnContext)_localctx).name = ident();
			}
			setState(709);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(708);
				((QueryTupleDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(711);
			((QueryTupleDefnContext)_localctx).params = tupleParamList();
			}
			setState(714);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(712);
				match(ARROW);
				{
				setState(713);
				((QueryTupleDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(716);
			((QueryTupleDefnContext)_localctx).body = block();
			}
			setState(718);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(717);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ErrorDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public ParenParamListContext params;
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public ErrorDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefn; }
	}

	public final ErrorDefnContext errorDefn() throws RecognitionException {
		ErrorDefnContext _localctx = new ErrorDefnContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_errorDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(721);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(720);
				((ErrorDefnContext)_localctx).doc = docComment();
				}
			}

			setState(724);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(723);
				((ErrorDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(726);
			match(ERROR);
			{
			setState(727);
			((ErrorDefnContext)_localctx).name = ident();
			}
			{
			setState(728);
			((ErrorDefnContext)_localctx).params = parenParamList();
			}
			setState(730);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(729);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EventDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public Token exported;
		public IdentContext name;
		public ParenParamListContext params;
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public EventDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefn; }
	}

	public final EventDefnContext eventDefn() throws RecognitionException {
		EventDefnContext _localctx = new EventDefnContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_eventDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(732);
				((EventDefnContext)_localctx).doc = docComment();
				}
			}

			setState(736);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(735);
				((EventDefnContext)_localctx).exported = match(EXPORT);
				}
			}

			setState(738);
			match(EVENT);
			{
			setState(739);
			((EventDefnContext)_localctx).name = ident();
			}
			{
			setState(740);
			((EventDefnContext)_localctx).params = parenParamList();
			}
			setState(742);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(741);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateBlockDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public StateDefnContext stateDefn;
		public List<StateDefnContext> stateFields = new ArrayList<StateDefnContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public List<StateDefnContext> stateDefn() {
			return getRuleContexts(StateDefnContext.class);
		}
		public StateDefnContext stateDefn(int i) {
			return getRuleContext(StateDefnContext.class,i);
		}
		public StateBlockDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateBlockDefn; }
	}

	public final StateBlockDefnContext stateBlockDefn() throws RecognitionException {
		StateBlockDefnContext _localctx = new StateBlockDefnContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_stateBlockDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(745);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(744);
				((StateBlockDefnContext)_localctx).doc = docComment();
				}
			}

			setState(747);
			match(STATE);
			setState(748);
			match(LBRACE);
			setState(752);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3099L) != 0)) {
				{
				{
				setState(749);
				((StateBlockDefnContext)_localctx).stateDefn = stateDefn();
				((StateBlockDefnContext)_localctx).stateFields.add(((StateBlockDefnContext)_localctx).stateDefn);
				}
				}
				setState(754);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(755);
			match(RBRACE);
			setState(757);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(756);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateDefnContext extends ParserRuleContext {
		public StateItemDefnContext stateItemDefn() {
			return getRuleContext(StateItemDefnContext.class,0);
		}
		public StateMapDefnContext stateMapDefn() {
			return getRuleContext(StateMapDefnContext.class,0);
		}
		public StateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefn; }
	}

	public final StateDefnContext stateDefn() throws RecognitionException {
		StateDefnContext _localctx = new StateDefnContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_stateDefn);
		try {
			setState(761);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,125,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(759);
				stateItemDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(760);
				stateMapDefn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateItemDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public TypeExprContext ty;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public StateItemDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateItemDefn; }
	}

	public final StateItemDefnContext stateItemDefn() throws RecognitionException {
		StateItemDefnContext _localctx = new StateItemDefnContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_stateItemDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(763);
				((StateItemDefnContext)_localctx).doc = docComment();
				}
			}

			{
			setState(766);
			((StateItemDefnContext)_localctx).name = ident();
			}
			setState(767);
			match(COLON);
			{
			setState(768);
			((StateItemDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(770);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(769);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StateMapDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public TypeExprContext indexTy;
		public TypeExprContext ty;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public StateMapDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateMapDefn; }
	}

	public final StateMapDefnContext stateMapDefn() throws RecognitionException {
		StateMapDefnContext _localctx = new StateMapDefnContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_stateMapDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(773);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(772);
				((StateMapDefnContext)_localctx).doc = docComment();
				}
			}

			{
			setState(775);
			((StateMapDefnContext)_localctx).name = ident();
			}
			setState(776);
			match(LBRACK);
			{
			setState(777);
			((StateMapDefnContext)_localctx).indexTy = typeExpr(0);
			}
			setState(778);
			match(RBRACK);
			setState(779);
			match(COLON);
			{
			setState(780);
			((StateMapDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(782);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(781);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImplDefnContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public BrackTypeParamListContext typeParams;
		public BlockContext body;
		public TerminalNode IMPL() { return getToken(CWScriptParser.IMPL, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public ImplDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implDefn; }
	}

	public final ImplDefnContext implDefn() throws RecognitionException {
		ImplDefnContext _localctx = new ImplDefnContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_implDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(785);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(784);
				((ImplDefnContext)_localctx).doc = docComment();
				}
			}

			setState(787);
			match(IMPL);
			{
			setState(788);
			((ImplDefnContext)_localctx).name = ident();
			}
			{
			setState(789);
			((ImplDefnContext)_localctx).typeParams = brackTypeParamList();
			}
			{
			setState(790);
			((ImplDefnContext)_localctx).body = block();
			}
			setState(792);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(791);
				match(SEMI);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprStmtContext extends ParserRuleContext {
		public Token semi;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ExprStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprStmt; }
	}

	public final ExprStmtContext exprStmt() throws RecognitionException {
		ExprStmtContext _localctx = new ExprStmtContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_exprStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(794);
			expr(0);
			setState(796);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,132,_ctx) ) {
			case 1:
				{
				setState(795);
				((ExprStmtContext)_localctx).semi = match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CWScriptParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CWScriptParser.MOD, 0); }
		public MulExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AndExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(CWScriptParser.AND, 0); }
		public AndExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfExprContext extends ExprContext {
		public IfExpr_Context ifExpr_() {
			return getRuleContext(IfExpr_Context.class,0);
		}
		public IfExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class QueryExprContext extends ExprContext {
		public TerminalNode QUERY_NOW() { return getToken(CWScriptParser.QUERY_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public QueryExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CompExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public TerminalNode LT_EQ() { return getToken(CWScriptParser.LT_EQ, 0); }
		public TerminalNode GT_EQ() { return getToken(CWScriptParser.GT_EQ, 0); }
		public CompExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructExprContext extends ExprContext {
		public StructExpr_Context structExpr_() {
			return getRuleContext(StructExpr_Context.class,0);
		}
		public StructExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IndexExprContext extends ExprContext {
		public ExprContext index;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IndexExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IsExprContext extends ExprContext {
		public Token negative;
		public TypeExprContext ty;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode IS() { return getToken(CWScriptParser.IS, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode NOT() { return getToken(CWScriptParser.NOT, 0); }
		public IsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LiteralExprContext extends ExprContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnExprContext extends ExprContext {
		public ReturnExpr_Context returnExpr_() {
			return getRuleContext(ReturnExpr_Context.class,0);
		}
		public ReturnExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CallExprContext extends ExprContext {
		public Token fallible;
		public BrackTypeExprListContext typeArgs;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public BrackTypeExprListContext brackTypeExprList() {
			return getRuleContext(BrackTypeExprListContext.class,0);
		}
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public CallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NotExprContext extends ExprContext {
		public TerminalNode NOT() { return getToken(CWScriptParser.NOT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NotExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TryCatchElseExprContext extends ExprContext {
		public TryCatchElseExpr_Context tryCatchElseExpr_() {
			return getRuleContext(TryCatchElseExpr_Context.class,0);
		}
		public TryCatchElseExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class InExprContext extends ExprContext {
		public Token negative;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public TerminalNode NOT() { return getToken(CWScriptParser.NOT, 0); }
		public InExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FailExprContext extends ExprContext {
		public FailExpr_Context failExpr_() {
			return getRuleContext(FailExpr_Context.class,0);
		}
		public FailExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExistsExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public ExistsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentExprContext extends ExprContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CWScriptParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CWScriptParser.MINUS, 0); }
		public AddExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ClosureExprContext extends ExprContext {
		public BlockClosureExprContext blockClosureExpr() {
			return getRuleContext(BlockClosureExprContext.class,0);
		}
		public ExprClosureExprContext exprClosureExpr() {
			return getRuleContext(ExprClosureExprContext.class,0);
		}
		public ClosureExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DotExprContext extends ExprContext {
		public IdentContext memberName;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public DotExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ShortTryExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode D_QUEST() { return getToken(CWScriptParser.D_QUEST, 0); }
		public ShortTryExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleExprContext extends ExprContext {
		public TupleExpr_Context tupleExpr_() {
			return getRuleContext(TupleExpr_Context.class,0);
		}
		public TupleExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OR() { return getToken(CWScriptParser.OR, 0); }
		public OrExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EqExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode D_EQ() { return getToken(CWScriptParser.D_EQ, 0); }
		public TerminalNode NEQ() { return getToken(CWScriptParser.NEQ, 0); }
		public EqExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GroupedExprContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public GroupedExprContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 92;
		enterRecursionRule(_localctx, 92, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(817);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
			case 1:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(799);
				match(NOT);
				setState(800);
				expr(22);
				}
				break;
			case 2:
				{
				_localctx = new QueryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(801);
				match(QUERY_NOW);
				setState(802);
				expr(18);
				}
				break;
			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(803);
				ifExpr_();
				}
				break;
			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(804);
				tryCatchElseExpr_();
				}
				break;
			case 5:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(805);
				blockClosureExpr();
				}
				break;
			case 6:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(806);
				exprClosureExpr();
				}
				break;
			case 7:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(807);
				structExpr_();
				}
				break;
			case 8:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(808);
				tupleExpr_();
				}
				break;
			case 9:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(809);
				literal();
				}
				break;
			case 10:
				{
				_localctx = new ReturnExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(810);
				returnExpr_();
				}
				break;
			case 11:
				{
				_localctx = new FailExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(811);
				failExpr_();
				}
				break;
			case 12:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(812);
				ident();
				}
				break;
			case 13:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(813);
				match(LPAREN);
				setState(814);
				expr(0);
				setState(815);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(883);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,141,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(881);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,140,_ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(819);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						{
						setState(820);
						((MulExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 77)) & ~0x3f) == 0 && ((1L << (_la - 77)) & 21L) != 0)) ) {
							((MulExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(821);
						expr(22);
						}
						break;
					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(822);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						{
						setState(823);
						((AddExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((AddExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(824);
						expr(21);
						}
						break;
					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(825);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						{
						setState(826);
						((CompExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 82)) & ~0x3f) == 0 && ((1L << (_la - 82)) & 15L) != 0)) ) {
							((CompExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(827);
						expr(20);
						}
						break;
					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(828);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(829);
						match(D_QUEST);
						setState(830);
						expr(18);
						}
						break;
					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(831);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(833);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==NOT) {
							{
							setState(832);
							((InExprContext)_localctx).negative = match(NOT);
							}
						}

						setState(835);
						match(IN);
						setState(836);
						expr(17);
						}
						break;
					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(837);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						{
						setState(838);
						((EqExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==D_EQ || _la==NEQ) ) {
							((EqExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(839);
						expr(15);
						}
						break;
					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(840);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(841);
						match(AND);
						setState(842);
						expr(14);
						}
						break;
					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(843);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(844);
						match(OR);
						setState(845);
						expr(13);
						}
						break;
					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(846);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(847);
						match(DOT);
						{
						setState(848);
						((DotExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(849);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(851);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==BANG) {
							{
							setState(850);
							((CallExprContext)_localctx).fallible = match(BANG);
							}
						}

						setState(854);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==LBRACK) {
							{
							setState(853);
							((CallExprContext)_localctx).typeArgs = brackTypeExprList();
							}
						}

						setState(856);
						match(LPAREN);
						setState(865);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9746070900810750L) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & 7807L) != 0)) {
							{
							{
							setState(857);
							((CallExprContext)_localctx).arg = arg();
							((CallExprContext)_localctx).args.add(((CallExprContext)_localctx).arg);
							}
							setState(862);
							_errHandler.sync(this);
							_la = _input.LA(1);
							while (_la==COMMA) {
								{
								{
								setState(858);
								match(COMMA);
								setState(859);
								((CallExprContext)_localctx).arg = arg();
								((CallExprContext)_localctx).args.add(((CallExprContext)_localctx).arg);
								}
								}
								setState(864);
								_errHandler.sync(this);
								_la = _input.LA(1);
							}
							}
						}

						setState(867);
						match(RPAREN);
						}
						break;
					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(868);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(869);
						match(LBRACK);
						{
						setState(870);
						((IndexExprContext)_localctx).index = expr(0);
						}
						setState(871);
						match(RBRACK);
						}
						break;
					case 12:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(873);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(874);
						match(QUEST);
						}
						break;
					case 13:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(875);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(876);
						match(IS);
						setState(878);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==NOT) {
							{
							setState(877);
							((IsExprContext)_localctx).negative = match(NOT);
							}
						}

						{
						setState(880);
						((IsExprContext)_localctx).ty = typeExpr(0);
						}
						}
						break;
					}
					} 
				}
				setState(885);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,141,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfExpr_Context extends ParserRuleContext {
		public ExprContext pred;
		public BlockOrExprContext thenBody;
		public BlockOrExprContext elseBody;
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<BlockOrExprContext> blockOrExpr() {
			return getRuleContexts(BlockOrExprContext.class);
		}
		public BlockOrExprContext blockOrExpr(int i) {
			return getRuleContext(BlockOrExprContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public IfExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExpr_; }
	}

	public final IfExpr_Context ifExpr_() throws RecognitionException {
		IfExpr_Context _localctx = new IfExpr_Context(_ctx, getState());
		enterRule(_localctx, 94, RULE_ifExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(886);
			match(IF);
			{
			setState(887);
			((IfExpr_Context)_localctx).pred = expr(0);
			}
			{
			setState(888);
			((IfExpr_Context)_localctx).thenBody = blockOrExpr();
			}
			setState(891);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,142,_ctx) ) {
			case 1:
				{
				setState(889);
				match(ELSE);
				{
				setState(890);
				((IfExpr_Context)_localctx).elseBody = blockOrExpr();
				}
				}
				break;
			}
			setState(894);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
			case 1:
				{
				setState(893);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TryCatchElseExpr_Context extends ParserRuleContext {
		public BlockContext body;
		public CatchClauseContext catchClause;
		public List<CatchClauseContext> catchClauses = new ArrayList<CatchClauseContext>();
		public BlockContext elseBody;
		public TerminalNode TRY() { return getToken(CWScriptParser.TRY, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public TryCatchElseExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryCatchElseExpr_; }
	}

	public final TryCatchElseExpr_Context tryCatchElseExpr_() throws RecognitionException {
		TryCatchElseExpr_Context _localctx = new TryCatchElseExpr_Context(_ctx, getState());
		enterRule(_localctx, 96, RULE_tryCatchElseExpr_);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(896);
			match(TRY);
			{
			setState(897);
			((TryCatchElseExpr_Context)_localctx).body = block();
			}
			setState(901);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,144,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(898);
					((TryCatchElseExpr_Context)_localctx).catchClause = catchClause();
					((TryCatchElseExpr_Context)_localctx).catchClauses.add(((TryCatchElseExpr_Context)_localctx).catchClause);
					}
					} 
				}
				setState(903);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,144,_ctx);
			}
			setState(906);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				{
				setState(904);
				match(ELSE);
				{
				setState(905);
				((TryCatchElseExpr_Context)_localctx).elseBody = block();
				}
				}
				break;
			}
			setState(909);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
			case 1:
				{
				setState(908);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CatchClauseContext extends ParserRuleContext {
		public TypeExprContext ty;
		public BlockContext body;
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_catchClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(911);
			match(CATCH);
			{
			setState(912);
			((CatchClauseContext)_localctx).ty = typeExpr(0);
			}
			{
			setState(913);
			((CatchClauseContext)_localctx).body = block();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockClosureExprContext extends ParserRuleContext {
		public BarsParamListContext params;
		public Token fallible;
		public TypeExprContext returnTy;
		public BlockContext body;
		public BarsParamListContext barsParamList() {
			return getRuleContext(BarsParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BlockClosureExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockClosureExpr; }
	}

	public final BlockClosureExprContext blockClosureExpr() throws RecognitionException {
		BlockClosureExprContext _localctx = new BlockClosureExprContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_blockClosureExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(915);
			((BlockClosureExprContext)_localctx).params = barsParamList();
			}
			setState(917);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(916);
				((BlockClosureExprContext)_localctx).fallible = match(BANG);
				}
			}

			setState(921);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(919);
				match(ARROW);
				{
				setState(920);
				((BlockClosureExprContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(923);
			((BlockClosureExprContext)_localctx).body = block();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprClosureExprContext extends ParserRuleContext {
		public BarsParamListContext params;
		public Token fallible;
		public ExprStmtContext body;
		public BarsParamListContext barsParamList() {
			return getRuleContext(BarsParamListContext.class,0);
		}
		public ExprStmtContext exprStmt() {
			return getRuleContext(ExprStmtContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public ExprClosureExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprClosureExpr; }
	}

	public final ExprClosureExprContext exprClosureExpr() throws RecognitionException {
		ExprClosureExprContext _localctx = new ExprClosureExprContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_exprClosureExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(925);
			((ExprClosureExprContext)_localctx).params = barsParamList();
			}
			setState(927);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(926);
				((ExprClosureExprContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(929);
			((ExprClosureExprContext)_localctx).body = exprStmt();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StructExpr_Context extends ParserRuleContext {
		public TypeExprContext ty;
		public BraceFieldListContext fields;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BraceFieldListContext braceFieldList() {
			return getRuleContext(BraceFieldListContext.class,0);
		}
		public StructExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structExpr_; }
	}

	public final StructExpr_Context structExpr_() throws RecognitionException {
		StructExpr_Context _localctx = new StructExpr_Context(_ctx, getState());
		enterRule(_localctx, 104, RULE_structExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(931);
			((StructExpr_Context)_localctx).ty = typeExpr(0);
			}
			{
			setState(932);
			((StructExpr_Context)_localctx).fields = braceFieldList();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleExpr_Context extends ParserRuleContext {
		public ExprContext expr;
		public List<ExprContext> elements = new ArrayList<ExprContext>();
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleExpr_; }
	}

	public final TupleExpr_Context tupleExpr_() throws RecognitionException {
		TupleExpr_Context _localctx = new TupleExpr_Context(_ctx, getState());
		enterRule(_localctx, 106, RULE_tupleExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(934);
			match(LBRACK);
			setState(943);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9746070900810750L) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & 7807L) != 0)) {
				{
				{
				setState(935);
				((TupleExpr_Context)_localctx).expr = expr(0);
				((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
				}
				setState(940);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(936);
					match(COMMA);
					{
					setState(937);
					((TupleExpr_Context)_localctx).expr = expr(0);
					((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
					}
					}
					}
					setState(942);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(945);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnExpr_Context extends ParserRuleContext {
		public ExprContext value;
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnExpr_; }
	}

	public final ReturnExpr_Context returnExpr_() throws RecognitionException {
		ReturnExpr_Context _localctx = new ReturnExpr_Context(_ctx, getState());
		enterRule(_localctx, 108, RULE_returnExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(947);
			match(RETURN);
			{
			setState(948);
			((ReturnExpr_Context)_localctx).value = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FailExpr_Context extends ParserRuleContext {
		public ExprContext value;
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FailExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failExpr_; }
	}

	public final FailExpr_Context failExpr_() throws RecognitionException {
		FailExpr_Context _localctx = new FailExpr_Context(_ctx, getState());
		enterRule(_localctx, 110, RULE_failExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(950);
			match(FAIL);
			{
			setState(951);
			((FailExpr_Context)_localctx).value = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiteralContext extends ParserRuleContext {
		public StringLitContext stringLit() {
			return getRuleContext(StringLitContext.class,0);
		}
		public IntLitContext intLit() {
			return getRuleContext(IntLitContext.class,0);
		}
		public DecLitContext decLit() {
			return getRuleContext(DecLitContext.class,0);
		}
		public BoolLitContext boolLit() {
			return getRuleContext(BoolLitContext.class,0);
		}
		public NoneLitContext noneLit() {
			return getRuleContext(NoneLitContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_literal);
		try {
			setState(958);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(953);
				stringLit();
				}
				break;
			case IntLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(954);
				intLit();
				}
				break;
			case DecLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(955);
				decLit();
				}
				break;
			case BoolLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(956);
				boolLit();
				}
				break;
			case NONE:
				enterOuterAlt(_localctx, 5);
				{
				setState(957);
				noneLit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringLitContext extends ParserRuleContext {
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public StringLitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLit; }
	}

	public final StringLitContext stringLit() throws RecognitionException {
		StringLitContext _localctx = new StringLitContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_stringLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(960);
			match(StringLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntLitContext extends ParserRuleContext {
		public TerminalNode IntLiteral() { return getToken(CWScriptParser.IntLiteral, 0); }
		public IntLitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intLit; }
	}

	public final IntLitContext intLit() throws RecognitionException {
		IntLitContext _localctx = new IntLitContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_intLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			match(IntLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DecLitContext extends ParserRuleContext {
		public TerminalNode DecLiteral() { return getToken(CWScriptParser.DecLiteral, 0); }
		public DecLitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decLit; }
	}

	public final DecLitContext decLit() throws RecognitionException {
		DecLitContext _localctx = new DecLitContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_decLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(964);
			match(DecLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BoolLitContext extends ParserRuleContext {
		public TerminalNode BoolLiteral() { return getToken(CWScriptParser.BoolLiteral, 0); }
		public BoolLitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolLit; }
	}

	public final BoolLitContext boolLit() throws RecognitionException {
		BoolLitContext _localctx = new BoolLitContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_boolLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(966);
			match(BoolLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NoneLitContext extends ParserRuleContext {
		public TerminalNode NONE() { return getToken(CWScriptParser.NONE, 0); }
		public NoneLitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noneLit; }
	}

	public final NoneLitContext noneLit() throws RecognitionException {
		NoneLitContext _localctx = new NoneLitContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_noneLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(968);
			match(NONE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeExprContext extends ParserRuleContext {
		public TypeExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeExpr; }
	 
		public TypeExprContext() { }
		public void copyFrom(TypeExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ArrayTypeExprContext extends TypeExprContext {
		public IntLitContext size;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IntLitContext intLit() {
			return getRuleContext(IntLitContext.class,0);
		}
		public ArrayTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OptionTypeExprContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public OptionTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleDefnTypeExprContext extends TypeExprContext {
		public TupleDefnContext tupleDefn() {
			return getRuleContext(TupleDefnContext.class,0);
		}
		public TupleDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumDefnTypeExprContext extends TypeExprContext {
		public EnumDefnContext enumDefn() {
			return getRuleContext(EnumDefnContext.class,0);
		}
		public EnumDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructDefnTypeExprContext extends TypeExprContext {
		public StructDefnContext structDefn() {
			return getRuleContext(StructDefnContext.class,0);
		}
		public StructDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParameterizedTypeExprContext extends TypeExprContext {
		public BrackTypeExprListContext typeArgs;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BrackTypeExprListContext brackTypeExprList() {
			return getRuleContext(BrackTypeExprListContext.class,0);
		}
		public ParameterizedTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MemberTypeExprContext extends TypeExprContext {
		public IdentContext memberName;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MemberTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GroupedTypeExprContext extends TypeExprContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public GroupedTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnitDefnTypeExprContext extends TypeExprContext {
		public UnitDefnContext unitDefn() {
			return getRuleContext(UnitDefnContext.class,0);
		}
		public UnitDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleTypeExprContext extends TypeExprContext {
		public BrackTypeExprListContext elements;
		public BrackTypeExprListContext brackTypeExprList() {
			return getRuleContext(BrackTypeExprListContext.class,0);
		}
		public TupleTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TypeVarExprContext extends TypeExprContext {
		public TypeVarContext typeVar() {
			return getRuleContext(TypeVarContext.class,0);
		}
		public TypeVarExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentTypeExprContext extends TypeExprContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}

	public final TypeExprContext typeExpr() throws RecognitionException {
		return typeExpr(0);
	}

	private TypeExprContext typeExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeExprContext _localctx = new TypeExprContext(_ctx, _parentState);
		TypeExprContext _prevctx = _localctx;
		int _startState = 124;
		enterRecursionRule(_localctx, 124, RULE_typeExpr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(988);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(971);
				match(LPAREN);
				setState(972);
				typeExpr(0);
				setState(973);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				{
				setState(975);
				((TupleTypeExprContext)_localctx).elements = brackTypeExprList();
				}
				}
				break;
			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(976);
				match(LBRACK);
				setState(977);
				typeExpr(0);
				setState(978);
				match(SEMI);
				{
				setState(979);
				((ArrayTypeExprContext)_localctx).size = intLit();
				}
				setState(980);
				match(RBRACK);
				}
				break;
			case 4:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(982);
				structDefn();
				}
				break;
			case 5:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(983);
				tupleDefn();
				}
				break;
			case 6:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(984);
				unitDefn();
				}
				break;
			case 7:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(985);
				enumDefn();
				}
				break;
			case 8:
				{
				_localctx = new TypeVarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(986);
				typeVar();
				}
				break;
			case 9:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(987);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(999);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,155,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(997);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,154,_ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(990);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(991);
						((ParameterizedTypeExprContext)_localctx).typeArgs = brackTypeExprList();
						}
						}
						break;
					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(992);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(993);
						match(DOT);
						{
						setState(994);
						((MemberTypeExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(995);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(996);
						match(QUEST);
						}
						break;
					}
					} 
				}
				setState(1001);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,155,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeVarContext extends ParserRuleContext {
		public DocCommentContext doc;
		public TerminalNode PercentIdent() { return getToken(CWScriptParser.PercentIdent, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TypeVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeVar; }
	}

	public final TypeVarContext typeVar() throws RecognitionException {
		TypeVarContext _localctx = new TypeVarContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_typeVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1003);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(1002);
				((TypeVarContext)_localctx).doc = docComment();
				}
			}

			setState(1005);
			match(PercentIdent);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentContext extends ParserRuleContext {
		public TerminalNode HashIdent() { return getToken(CWScriptParser.HashIdent, 0); }
		public TerminalNode DollarIdent() { return getToken(CWScriptParser.DollarIdent, 0); }
		public TerminalNode Ident() { return getToken(CWScriptParser.Ident, 0); }
		public TerminalNode EscapedIdent() { return getToken(CWScriptParser.EscapedIdent, 0); }
		public KeywordIdentContext keywordIdent() {
			return getRuleContext(KeywordIdentContext.class,0);
		}
		public IdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ident; }
	}

	public final IdentContext ident() throws RecognitionException {
		IdentContext _localctx = new IdentContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_ident);
		try {
			setState(1012);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HashIdent:
				enterOuterAlt(_localctx, 1);
				{
				setState(1007);
				match(HashIdent);
				}
				break;
			case DollarIdent:
				enterOuterAlt(_localctx, 2);
				{
				setState(1008);
				match(DollarIdent);
				}
				break;
			case Ident:
				enterOuterAlt(_localctx, 3);
				{
				setState(1009);
				match(Ident);
				}
				break;
			case EscapedIdent:
				enterOuterAlt(_localctx, 4);
				{
				setState(1010);
				match(EscapedIdent);
				}
				break;
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case EXPORT:
			case IMPLEMENTS:
			case IMPL:
			case EXTENDS:
			case ERROR:
			case EVENT:
			case H_INSTANTIATE:
			case INSTANTIATE:
			case EXEC:
			case QUERY:
			case REPLY:
			case FOR:
			case IN:
			case FROM:
			case STATE:
			case IF:
			case ELSE:
			case NONE:
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case CONST:
			case STRUCT:
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
				enterOuterAlt(_localctx, 5);
				{
				setState(1011);
				keywordIdent();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamContext extends ParserRuleContext {
		public DocCommentContext doc;
		public IdentContext name;
		public Token optional;
		public TypeExprContext ty;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public DocCommentContext docComment() {
			return getRuleContext(DocCommentContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1015);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOC_LINE_COMMENT || _la==DOC_BLOCK_COMMENT) {
				{
				setState(1014);
				((ParamContext)_localctx).doc = docComment();
				}
			}

			{
			setState(1017);
			((ParamContext)_localctx).name = ident();
			}
			setState(1019);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(1018);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(1023);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(1021);
				match(COLON);
				{
				setState(1022);
				((ParamContext)_localctx).ty = typeExpr(0);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1025);
			((FieldContext)_localctx).name = ident();
			}
			setState(1028);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(1026);
				match(COLON);
				{
				setState(1027);
				((FieldContext)_localctx).value = expr(0);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NamedArgContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NamedArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedArg; }
	}

	public final NamedArgContext namedArg() throws RecognitionException {
		NamedArgContext _localctx = new NamedArgContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_namedArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1030);
			((NamedArgContext)_localctx).name = ident();
			}
			setState(1031);
			match(EQ);
			{
			setState(1032);
			((NamedArgContext)_localctx).value = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NamedArgContext namedArg() {
			return getRuleContext(NamedArgContext.class,0);
		}
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1036);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,162,_ctx) ) {
			case 1:
				{
				setState(1034);
				expr(0);
				}
				break;
			case 2:
				{
				setState(1035);
				namedArg();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentListContext extends ParserRuleContext {
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public IdentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identList; }
	}

	public final IdentListContext identList() throws RecognitionException {
		IdentListContext _localctx = new IdentListContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_identList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1038);
			ident();
			setState(1043);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1039);
				match(COMMA);
				setState(1040);
				ident();
				}
				}
				setState(1045);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParenParamListContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ParenParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenParamList; }
	}

	public final ParenParamListContext parenParamList() throws RecognitionException {
		ParenParamListContext _localctx = new ParenParamListContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_parenParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1046);
			match(LPAREN);
			setState(1055);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3099L) != 0)) {
				{
				setState(1047);
				param();
				setState(1052);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1048);
					match(COMMA);
					setState(1049);
					param();
					}
					}
					setState(1054);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1057);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BarsParamListContext extends ParserRuleContext {
		public List<TerminalNode> BAR() { return getTokens(CWScriptParser.BAR); }
		public TerminalNode BAR(int i) {
			return getToken(CWScriptParser.BAR, i);
		}
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BarsParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_barsParamList; }
	}

	public final BarsParamListContext barsParamList() throws RecognitionException {
		BarsParamListContext _localctx = new BarsParamListContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_barsParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1059);
			match(BAR);
			setState(1068);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3099L) != 0)) {
				{
				setState(1060);
				param();
				setState(1065);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1061);
					match(COMMA);
					setState(1062);
					param();
					}
					}
					setState(1067);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1070);
			match(BAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleParamListContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleParamList; }
	}

	public final TupleParamListContext tupleParamList() throws RecognitionException {
		TupleParamListContext _localctx = new TupleParamListContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_tupleParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1072);
			match(LPAREN);
			setState(1073);
			match(LBRACK);
			setState(1082);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3099L) != 0)) {
				{
				setState(1074);
				param();
				setState(1079);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1075);
					match(COMMA);
					setState(1076);
					param();
					}
					}
					setState(1081);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1084);
			match(RBRACK);
			setState(1085);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BraceParamListContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BraceParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceParamList; }
	}

	public final BraceParamListContext braceParamList() throws RecognitionException {
		BraceParamListContext _localctx = new BraceParamListContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_braceParamList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1087);
			match(LBRACE);
			setState(1096);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3099L) != 0)) {
				{
				setState(1088);
				param();
				setState(1093);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,170,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1089);
						match(COMMA);
						setState(1090);
						param();
						}
						} 
					}
					setState(1095);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,170,_ctx);
				}
				}
			}

			setState(1099);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1098);
				match(COMMA);
				}
			}

			setState(1101);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BrackTypeParamListContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<TypeVarContext> typeVar() {
			return getRuleContexts(TypeVarContext.class);
		}
		public TypeVarContext typeVar(int i) {
			return getRuleContext(TypeVarContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BrackTypeParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_brackTypeParamList; }
	}

	public final BrackTypeParamListContext brackTypeParamList() throws RecognitionException {
		BrackTypeParamListContext _localctx = new BrackTypeParamListContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_brackTypeParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1103);
			match(LBRACK);
			setState(1112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & 769L) != 0)) {
				{
				setState(1104);
				typeVar();
				setState(1109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1105);
					match(COMMA);
					setState(1106);
					typeVar();
					}
					}
					setState(1111);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1114);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BrackTypeExprListContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BrackTypeExprListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_brackTypeExprList; }
	}

	public final BrackTypeExprListContext brackTypeExprList() throws RecognitionException {
		BrackTypeExprListContext _localctx = new BrackTypeExprListContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_brackTypeExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1116);
			match(LBRACK);
			setState(1125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 738046408360958L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 3103L) != 0)) {
				{
				setState(1117);
				typeExpr(0);
				setState(1122);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1118);
					match(COMMA);
					setState(1119);
					typeExpr(0);
					}
					}
					setState(1124);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1127);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BraceFieldListContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public BraceFieldListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceFieldList; }
	}

	public final BraceFieldListContext braceFieldList() throws RecognitionException {
		BraceFieldListContext _localctx = new BraceFieldListContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_braceFieldList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1129);
			match(LBRACE);
			setState(1138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 27L) != 0)) {
				{
				setState(1130);
				field();
				setState(1135);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,177,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1131);
						match(COMMA);
						setState(1132);
						field();
						}
						} 
					}
					setState(1137);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,177,_ctx);
				}
				}
			}

			setState(1141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1140);
				match(COMMA);
				}
			}

			setState(1143);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeExprListContext extends ParserRuleContext {
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TypeExprListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeExprList; }
	}

	public final TypeExprListContext typeExprList() throws RecognitionException {
		TypeExprListContext _localctx = new TypeExprListContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_typeExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1145);
			typeExpr(0);
			setState(1150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1146);
				match(COMMA);
				setState(1147);
				typeExpr(0);
				}
				}
				setState(1152);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public StmtContext stmt;
		public List<StmtContext> stmts = new ArrayList<StmtContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1153);
			match(LBRACE);
			setState(1157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9781255272905726L) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & 7807L) != 0)) {
				{
				{
				setState(1154);
				((BlockContext)_localctx).stmt = stmt();
				((BlockContext)_localctx).stmts.add(((BlockContext)_localctx).stmt);
				}
				}
				setState(1159);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1160);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockOrExprContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockOrExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockOrExpr; }
	}

	public final BlockOrExprContext blockOrExpr() throws RecognitionException {
		BlockOrExprContext _localctx = new BlockOrExprContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_blockOrExpr);
		try {
			setState(1164);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1162);
				block();
				}
				break;
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case EXPORT:
			case IMPLEMENTS:
			case IMPL:
			case EXTENDS:
			case ERROR:
			case EVENT:
			case QUERY_NOW:
			case H_INSTANTIATE:
			case INSTANTIATE:
			case EXEC:
			case QUERY:
			case REPLY:
			case FOR:
			case IN:
			case FROM:
			case STATE:
			case IF:
			case TRY:
			case ELSE:
			case NOT:
			case NONE:
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case CONST:
			case FAIL:
			case RETURN:
			case STRUCT:
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
			case LPAREN:
			case LBRACK:
			case BAR:
			case BoolLiteral:
			case HashIdent:
			case DollarIdent:
			case PercentIdent:
			case EscapedIdent:
			case Ident:
			case StringLiteral:
			case DecLiteral:
			case IntLiteral:
			case DOC_LINE_COMMENT:
			case DOC_BLOCK_COMMENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1163);
				expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KeywordIdentContext extends ParserRuleContext {
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode EXPORT() { return getToken(CWScriptParser.EXPORT, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public TerminalNode IMPL() { return getToken(CWScriptParser.IMPL, 0); }
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode H_INSTANTIATE() { return getToken(CWScriptParser.H_INSTANTIATE, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode NONE() { return getToken(CWScriptParser.NONE, 0); }
		public TerminalNode REPLY() { return getToken(CWScriptParser.REPLY, 0); }
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public TerminalNode AND() { return getToken(CWScriptParser.AND, 0); }
		public TerminalNode OR() { return getToken(CWScriptParser.OR, 0); }
		public TerminalNode TRUE() { return getToken(CWScriptParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(CWScriptParser.FALSE, 0); }
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode TUPLE() { return getToken(CWScriptParser.TUPLE, 0); }
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public KeywordIdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keywordIdent; }
	}

	public final KeywordIdentContext keywordIdent() throws RecognitionException {
		KeywordIdentContext _localctx = new KeywordIdentContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_keywordIdent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1166);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 34358966584318L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 46:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 62:
			return typeExpr_sempred((TypeExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 21);
		case 1:
			return precpred(_ctx, 20);
		case 2:
			return precpred(_ctx, 19);
		case 3:
			return precpred(_ctx, 17);
		case 4:
			return precpred(_ctx, 16);
		case 5:
			return precpred(_ctx, 14);
		case 6:
			return precpred(_ctx, 13);
		case 7:
			return precpred(_ctx, 12);
		case 8:
			return precpred(_ctx, 26);
		case 9:
			return precpred(_ctx, 25);
		case 10:
			return precpred(_ctx, 24);
		case 11:
			return precpred(_ctx, 23);
		case 12:
			return precpred(_ctx, 15);
		}
		return true;
	}
	private boolean typeExpr_sempred(TypeExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return precpred(_ctx, 11);
		case 14:
			return precpred(_ctx, 10);
		case 15:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001f\u0491\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007E\u0002"+
		"F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007J\u0002"+
		"K\u0007K\u0002L\u0007L\u0002M\u0007M\u0002N\u0007N\u0002O\u0007O\u0002"+
		"P\u0007P\u0001\u0000\u0005\u0000\u00a4\b\u0000\n\u0000\f\u0000\u00a7\t"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u00be\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u00c5"+
		"\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004\u00ca\b\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00cf\b\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0005\u0006\u00d4\b\u0006\n\u0006\f\u0006\u00d7"+
		"\t\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u00dd"+
		"\b\u0007\n\u0007\f\u0007\u00e0\t\u0007\u0003\u0007\u00e2\b\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0005\b\u00ea\b\b\n"+
		"\b\f\b\u00ed\t\b\u0003\b\u00ef\b\b\u0001\b\u0003\b\u00f2\b\b\u0001\b\u0001"+
		"\b\u0001\t\u0003\t\u00f7\b\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t\u00fd"+
		"\b\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t\u0103\b\t\u0001\t\u0003\t"+
		"\u0106\b\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t\u010c\b\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0003\t\u0112\b\t\u0001\t\u0003\t\u0115\b\t\u0001\t"+
		"\u0001\t\u0001\t\u0001\t\u0003\t\u011b\b\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0003\t\u0121\b\t\u0003\t\u0123\b\t\u0001\n\u0003\n\u0126\b\n\u0001"+
		"\n\u0003\n\u0129\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u012f\b\n"+
		"\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0135\b\n\u0001\n\u0003\n\u0138"+
		"\b\n\u0001\n\u0003\n\u013b\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n"+
		"\u0141\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0147\b\n\u0001\n\u0003"+
		"\n\u014a\b\n\u0001\n\u0003\n\u014d\b\n\u0001\n\u0001\n\u0001\n\u0001\n"+
		"\u0003\n\u0153\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0159\b\n\u0003"+
		"\n\u015b\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b"+
		"\u0161\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f"+
		"\u0169\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003"+
		"\r\u0172\b\r\u0001\u000e\u0001\u000e\u0003\u000e\u0176\b\u000e\u0001\u000f"+
		"\u0001\u000f\u0003\u000f\u017a\b\u000f\u0001\u0010\u0001\u0010\u0003\u0010"+
		"\u017e\b\u0010\u0001\u0011\u0001\u0011\u0003\u0011\u0182\b\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003"+
		"\u0012\u018a\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0003\u0012\u0191\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0003\u0012\u0198\b\u0012\u0003\u0012\u019a\b\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u019f\b\u0013\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0003\u0014\u01a4\b\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0003\u0015\u01a9\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0003\u0016\u01bc\b\u0016\u0001\u0017\u0003\u0017"+
		"\u01bf\b\u0017\u0001\u0017\u0003\u0017\u01c2\b\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u01c8\b\u0017\u0001\u0017\u0001"+
		"\u0017\u0003\u0017\u01cc\b\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u01d0"+
		"\b\u0017\u0001\u0018\u0003\u0018\u01d3\b\u0018\u0001\u0018\u0003\u0018"+
		"\u01d6\b\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018"+
		"\u01dc\b\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u01e0\b\u0018\u0001"+
		"\u0019\u0003\u0019\u01e3\b\u0019\u0001\u0019\u0003\u0019\u01e6\b\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u01eb\b\u0019\u0001\u0019"+
		"\u0001\u0019\u0003\u0019\u01ef\b\u0019\u0001\u0019\u0003\u0019\u01f2\b"+
		"\u0019\u0001\u0019\u0003\u0019\u01f5\b\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0003\u0019\u01fa\b\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u01fe"+
		"\b\u0019\u0003\u0019\u0200\b\u0019\u0001\u001a\u0003\u001a\u0203\b\u001a"+
		"\u0001\u001a\u0003\u001a\u0206\b\u001a\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0003\u001a\u020b\b\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0003\u001a\u0211\b\u001a\u0001\u001b\u0003\u001b\u0214\b\u001b\u0001"+
		"\u001b\u0003\u001b\u0217\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u021b"+
		"\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u021f\b\u001b\u0001\u001c"+
		"\u0003\u001c\u0222\b\u001c\u0001\u001c\u0003\u001c\u0225\b\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u022a\b\u001c\u0001\u001c\u0001"+
		"\u001c\u0003\u001c\u022e\b\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u0232"+
		"\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0005\u001d\u0237\b\u001d"+
		"\n\u001d\f\u001d\u023a\t\u001d\u0001\u001e\u0003\u001e\u023d\b\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u0243\b\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u0249\b\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003"+
		"\u001e\u0251\b\u001e\u0001\u001e\u0003\u001e\u0254\b\u001e\u0001\u001f"+
		"\u0003\u001f\u0257\b\u001f\u0001\u001f\u0003\u001f\u025a\b\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u025f\b\u001f\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0003\u001f\u0264\b\u001f\u0001 \u0003 \u0267\b \u0001"+
		" \u0003 \u026a\b \u0001 \u0001 \u0001 \u0003 \u026f\b \u0001 \u0003 \u0272"+
		"\b \u0001 \u0001 \u0001 \u0003 \u0277\b \u0001 \u0001 \u0003 \u027b\b"+
		" \u0001!\u0003!\u027e\b!\u0001!\u0001!\u0003!\u0282\b!\u0001!\u0001!\u0001"+
		"!\u0003!\u0287\b!\u0001!\u0001!\u0003!\u028b\b!\u0001\"\u0003\"\u028e"+
		"\b\"\u0001\"\u0001\"\u0001\"\u0003\"\u0293\b\"\u0001\"\u0001\"\u0001\""+
		"\u0003\"\u0298\b\"\u0001\"\u0001\"\u0003\"\u029c\b\"\u0001#\u0003#\u029f"+
		"\b#\u0001#\u0001#\u0001#\u0003#\u02a4\b#\u0001#\u0001#\u0001#\u0003#\u02a9"+
		"\b#\u0001#\u0001#\u0003#\u02ad\b#\u0001$\u0003$\u02b0\b$\u0001$\u0001"+
		"$\u0001$\u0003$\u02b5\b$\u0001$\u0001$\u0001$\u0003$\u02ba\b$\u0001$\u0001"+
		"$\u0003$\u02be\b$\u0001%\u0003%\u02c1\b%\u0001%\u0001%\u0001%\u0003%\u02c6"+
		"\b%\u0001%\u0001%\u0001%\u0003%\u02cb\b%\u0001%\u0001%\u0003%\u02cf\b"+
		"%\u0001&\u0003&\u02d2\b&\u0001&\u0003&\u02d5\b&\u0001&\u0001&\u0001&\u0001"+
		"&\u0003&\u02db\b&\u0001\'\u0003\'\u02de\b\'\u0001\'\u0003\'\u02e1\b\'"+
		"\u0001\'\u0001\'\u0001\'\u0001\'\u0003\'\u02e7\b\'\u0001(\u0003(\u02ea"+
		"\b(\u0001(\u0001(\u0001(\u0005(\u02ef\b(\n(\f(\u02f2\t(\u0001(\u0001("+
		"\u0003(\u02f6\b(\u0001)\u0001)\u0003)\u02fa\b)\u0001*\u0003*\u02fd\b*"+
		"\u0001*\u0001*\u0001*\u0001*\u0003*\u0303\b*\u0001+\u0003+\u0306\b+\u0001"+
		"+\u0001+\u0001+\u0001+\u0001+\u0001+\u0001+\u0003+\u030f\b+\u0001,\u0003"+
		",\u0312\b,\u0001,\u0001,\u0001,\u0001,\u0001,\u0003,\u0319\b,\u0001-\u0001"+
		"-\u0003-\u031d\b-\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0003.\u0332\b.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0003.\u0342\b.\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001.\u0003.\u0354\b.\u0001.\u0003.\u0357"+
		"\b.\u0001.\u0001.\u0001.\u0001.\u0005.\u035d\b.\n.\f.\u0360\t.\u0003."+
		"\u0362\b.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0003.\u036f\b.\u0001.\u0005.\u0372\b.\n.\f.\u0375\t."+
		"\u0001/\u0001/\u0001/\u0001/\u0001/\u0003/\u037c\b/\u0001/\u0003/\u037f"+
		"\b/\u00010\u00010\u00010\u00050\u0384\b0\n0\f0\u0387\t0\u00010\u00010"+
		"\u00030\u038b\b0\u00010\u00030\u038e\b0\u00011\u00011\u00011\u00011\u0001"+
		"2\u00012\u00032\u0396\b2\u00012\u00012\u00032\u039a\b2\u00012\u00012\u0001"+
		"3\u00013\u00033\u03a0\b3\u00013\u00013\u00014\u00014\u00014\u00015\u0001"+
		"5\u00015\u00015\u00055\u03ab\b5\n5\f5\u03ae\t5\u00035\u03b0\b5\u00015"+
		"\u00015\u00016\u00016\u00016\u00017\u00017\u00017\u00018\u00018\u0001"+
		"8\u00018\u00018\u00038\u03bf\b8\u00019\u00019\u0001:\u0001:\u0001;\u0001"+
		";\u0001<\u0001<\u0001=\u0001=\u0001>\u0001>\u0001>\u0001>\u0001>\u0001"+
		">\u0001>\u0001>\u0001>\u0001>\u0001>\u0001>\u0001>\u0001>\u0001>\u0001"+
		">\u0001>\u0001>\u0003>\u03dd\b>\u0001>\u0001>\u0001>\u0001>\u0001>\u0001"+
		">\u0001>\u0005>\u03e6\b>\n>\f>\u03e9\t>\u0001?\u0003?\u03ec\b?\u0001?"+
		"\u0001?\u0001@\u0001@\u0001@\u0001@\u0001@\u0003@\u03f5\b@\u0001A\u0003"+
		"A\u03f8\bA\u0001A\u0001A\u0003A\u03fc\bA\u0001A\u0001A\u0003A\u0400\b"+
		"A\u0001B\u0001B\u0001B\u0003B\u0405\bB\u0001C\u0001C\u0001C\u0001C\u0001"+
		"D\u0001D\u0003D\u040d\bD\u0001E\u0001E\u0001E\u0005E\u0412\bE\nE\fE\u0415"+
		"\tE\u0001F\u0001F\u0001F\u0001F\u0005F\u041b\bF\nF\fF\u041e\tF\u0003F"+
		"\u0420\bF\u0001F\u0001F\u0001G\u0001G\u0001G\u0001G\u0005G\u0428\bG\n"+
		"G\fG\u042b\tG\u0003G\u042d\bG\u0001G\u0001G\u0001H\u0001H\u0001H\u0001"+
		"H\u0001H\u0005H\u0436\bH\nH\fH\u0439\tH\u0003H\u043b\bH\u0001H\u0001H"+
		"\u0001H\u0001I\u0001I\u0001I\u0001I\u0005I\u0444\bI\nI\fI\u0447\tI\u0003"+
		"I\u0449\bI\u0001I\u0003I\u044c\bI\u0001I\u0001I\u0001J\u0001J\u0001J\u0001"+
		"J\u0005J\u0454\bJ\nJ\fJ\u0457\tJ\u0003J\u0459\bJ\u0001J\u0001J\u0001K"+
		"\u0001K\u0001K\u0001K\u0005K\u0461\bK\nK\fK\u0464\tK\u0003K\u0466\bK\u0001"+
		"K\u0001K\u0001L\u0001L\u0001L\u0001L\u0005L\u046e\bL\nL\fL\u0471\tL\u0003"+
		"L\u0473\bL\u0001L\u0003L\u0476\bL\u0001L\u0001L\u0001M\u0001M\u0001M\u0005"+
		"M\u047d\bM\nM\fM\u0480\tM\u0001N\u0001N\u0005N\u0484\bN\nN\fN\u0487\t"+
		"N\u0001N\u0001N\u0001O\u0001O\u0003O\u048d\bO\u0001P\u0001P\u0001P\u0000"+
		"\u0002\\|Q\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprt"+
		"vxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094"+
		"\u0096\u0098\u009a\u009c\u009e\u00a0\u0000\u0007\u0001\u0000bc\u0006\u0000"+
		"EEHHJJLLNNPP\u0003\u0000MMOOQQ\u0002\u0000IIKK\u0001\u0000RU\u0001\u0000"+
		"FG\u0005\u0000\u0001\t\u000f\u0018\u001c\u001c\u001e%(,\u053d\u0000\u00a5"+
		"\u0001\u0000\u0000\u0000\u0002\u00aa\u0001\u0000\u0000\u0000\u0004\u00bd"+
		"\u0001\u0000\u0000\u0000\u0006\u00bf\u0001\u0000\u0000\u0000\b\u00c6\u0001"+
		"\u0000\u0000\u0000\n\u00cb\u0001\u0000\u0000\u0000\f\u00d0\u0001\u0000"+
		"\u0000\u0000\u000e\u00d8\u0001\u0000\u0000\u0000\u0010\u00e5\u0001\u0000"+
		"\u0000\u0000\u0012\u0122\u0001\u0000\u0000\u0000\u0014\u015a\u0001\u0000"+
		"\u0000\u0000\u0016\u015c\u0001\u0000\u0000\u0000\u0018\u0162\u0001\u0000"+
		"\u0000\u0000\u001a\u016a\u0001\u0000\u0000\u0000\u001c\u0173\u0001\u0000"+
		"\u0000\u0000\u001e\u0177\u0001\u0000\u0000\u0000 \u017b\u0001\u0000\u0000"+
		"\u0000\"\u017f\u0001\u0000\u0000\u0000$\u0199\u0001\u0000\u0000\u0000"+
		"&\u019b\u0001\u0000\u0000\u0000(\u01a0\u0001\u0000\u0000\u0000*\u01a5"+
		"\u0001\u0000\u0000\u0000,\u01bb\u0001\u0000\u0000\u0000.\u01be\u0001\u0000"+
		"\u0000\u00000\u01d2\u0001\u0000\u0000\u00002\u01ff\u0001\u0000\u0000\u0000"+
		"4\u0202\u0001\u0000\u0000\u00006\u0213\u0001\u0000\u0000\u00008\u0221"+
		"\u0001\u0000\u0000\u0000:\u0233\u0001\u0000\u0000\u0000<\u0253\u0001\u0000"+
		"\u0000\u0000>\u0256\u0001\u0000\u0000\u0000@\u0266\u0001\u0000\u0000\u0000"+
		"B\u027d\u0001\u0000\u0000\u0000D\u028d\u0001\u0000\u0000\u0000F\u029e"+
		"\u0001\u0000\u0000\u0000H\u02af\u0001\u0000\u0000\u0000J\u02c0\u0001\u0000"+
		"\u0000\u0000L\u02d1\u0001\u0000\u0000\u0000N\u02dd\u0001\u0000\u0000\u0000"+
		"P\u02e9\u0001\u0000\u0000\u0000R\u02f9\u0001\u0000\u0000\u0000T\u02fc"+
		"\u0001\u0000\u0000\u0000V\u0305\u0001\u0000\u0000\u0000X\u0311\u0001\u0000"+
		"\u0000\u0000Z\u031a\u0001\u0000\u0000\u0000\\\u0331\u0001\u0000\u0000"+
		"\u0000^\u0376\u0001\u0000\u0000\u0000`\u0380\u0001\u0000\u0000\u0000b"+
		"\u038f\u0001\u0000\u0000\u0000d\u0393\u0001\u0000\u0000\u0000f\u039d\u0001"+
		"\u0000\u0000\u0000h\u03a3\u0001\u0000\u0000\u0000j\u03a6\u0001\u0000\u0000"+
		"\u0000l\u03b3\u0001\u0000\u0000\u0000n\u03b6\u0001\u0000\u0000\u0000p"+
		"\u03be\u0001\u0000\u0000\u0000r\u03c0\u0001\u0000\u0000\u0000t\u03c2\u0001"+
		"\u0000\u0000\u0000v\u03c4\u0001\u0000\u0000\u0000x\u03c6\u0001\u0000\u0000"+
		"\u0000z\u03c8\u0001\u0000\u0000\u0000|\u03dc\u0001\u0000\u0000\u0000~"+
		"\u03eb\u0001\u0000\u0000\u0000\u0080\u03f4\u0001\u0000\u0000\u0000\u0082"+
		"\u03f7\u0001\u0000\u0000\u0000\u0084\u0401\u0001\u0000\u0000\u0000\u0086"+
		"\u0406\u0001\u0000\u0000\u0000\u0088\u040c\u0001\u0000\u0000\u0000\u008a"+
		"\u040e\u0001\u0000\u0000\u0000\u008c\u0416\u0001\u0000\u0000\u0000\u008e"+
		"\u0423\u0001\u0000\u0000\u0000\u0090\u0430\u0001\u0000\u0000\u0000\u0092"+
		"\u043f\u0001\u0000\u0000\u0000\u0094\u044f\u0001\u0000\u0000\u0000\u0096"+
		"\u045c\u0001\u0000\u0000\u0000\u0098\u0469\u0001\u0000\u0000\u0000\u009a"+
		"\u0479\u0001\u0000\u0000\u0000\u009c\u0481\u0001\u0000\u0000\u0000\u009e"+
		"\u048c\u0001\u0000\u0000\u0000\u00a0\u048e\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a4\u0003\u0004\u0002\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a7\u0001\u0000\u0000\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a5"+
		"\u00a6\u0001\u0000\u0000\u0000\u00a6\u00a8\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005\u0000\u0000\u0001\u00a9"+
		"\u0001\u0001\u0000\u0000\u0000\u00aa\u00ab\u0007\u0000\u0000\u0000\u00ab"+
		"\u0003\u0001\u0000\u0000\u0000\u00ac\u00be\u0003\u0006\u0003\u0000\u00ad"+
		"\u00be\u0003\b\u0004\u0000\u00ae\u00be\u0003,\u0016\u0000\u00af\u00be"+
		"\u0003\u0012\t\u0000\u00b0\u00be\u0003\u0014\n\u0000\u00b1\u00be\u0003"+
		"\u0016\u000b\u0000\u00b2\u00be\u0003\u0018\f\u0000\u00b3\u00be\u0003\u001a"+
		"\r\u0000\u00b4\u00be\u0003\u001e\u000f\u0000\u00b5\u00be\u0003\u001c\u000e"+
		"\u0000\u00b6\u00be\u0003$\u0012\u0000\u00b7\u00be\u0003&\u0013\u0000\u00b8"+
		"\u00be\u0003(\u0014\u0000\u00b9\u00be\u0003*\u0015\u0000\u00ba\u00be\u0003"+
		"\"\u0011\u0000\u00bb\u00be\u0003 \u0010\u0000\u00bc\u00be\u0003Z-\u0000"+
		"\u00bd\u00ac\u0001\u0000\u0000\u0000\u00bd\u00ad\u0001\u0000\u0000\u0000"+
		"\u00bd\u00ae\u0001\u0000\u0000\u0000\u00bd\u00af\u0001\u0000\u0000\u0000"+
		"\u00bd\u00b0\u0001\u0000\u0000\u0000\u00bd\u00b1\u0001\u0000\u0000\u0000"+
		"\u00bd\u00b2\u0001\u0000\u0000\u0000\u00bd\u00b3\u0001\u0000\u0000\u0000"+
		"\u00bd\u00b4\u0001\u0000\u0000\u0000\u00bd\u00b5\u0001\u0000\u0000\u0000"+
		"\u00bd\u00b6\u0001\u0000\u0000\u0000\u00bd\u00b7\u0001\u0000\u0000\u0000"+
		"\u00bd\u00b8\u0001\u0000\u0000\u0000\u00bd\u00b9\u0001\u0000\u0000\u0000"+
		"\u00bd\u00ba\u0001\u0000\u0000\u0000\u00bd\u00bb\u0001\u0000\u0000\u0000"+
		"\u00bd\u00bc\u0001\u0000\u0000\u0000\u00be\u0005\u0001\u0000\u0000\u0000"+
		"\u00bf\u00c0\u0005\u0003\u0000\u0000\u00c0\u00c1\u0003\u0010\b\u0000\u00c1"+
		"\u00c2\u0005\u0016\u0000\u0000\u00c2\u00c4\u0003r9\u0000\u00c3\u00c5\u0005"+
		";\u0000\u0000\u00c4\u00c3\u0001\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c5\u0007\u0001\u0000\u0000\u0000\u00c6\u00c7\u0005\u0004"+
		"\u0000\u0000\u00c7\u00c9\u0003\u0098L\u0000\u00c8\u00ca\u0005;\u0000\u0000"+
		"\u00c9\u00c8\u0001\u0000\u0000\u0000\u00c9\u00ca\u0001\u0000\u0000\u0000"+
		"\u00ca\t\u0001\u0000\u0000\u0000\u00cb\u00ce\u0003\u0080@\u0000\u00cc"+
		"\u00cd\u0005.\u0000\u0000\u00cd\u00cf\u0003\u0080@\u0000\u00ce\u00cc\u0001"+
		"\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000\u0000\u00cf\u000b\u0001"+
		"\u0000\u0000\u0000\u00d0\u00d5\u0003\n\u0005\u0000\u00d1\u00d2\u00057"+
		"\u0000\u0000\u00d2\u00d4\u0003\n\u0005\u0000\u00d3\u00d1\u0001\u0000\u0000"+
		"\u0000\u00d4\u00d7\u0001\u0000\u0000\u0000\u00d5\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d6\u0001\u0000\u0000\u0000\u00d6\r\u0001\u0000\u0000\u0000"+
		"\u00d7\u00d5\u0001\u0000\u0000\u0000\u00d8\u00e1\u00051\u0000\u0000\u00d9"+
		"\u00de\u0003\u0080@\u0000\u00da\u00db\u00057\u0000\u0000\u00db\u00dd\u0003"+
		"\u0080@\u0000\u00dc\u00da\u0001\u0000\u0000\u0000\u00dd\u00e0\u0001\u0000"+
		"\u0000\u0000\u00de\u00dc\u0001\u0000\u0000\u0000\u00de\u00df\u0001\u0000"+
		"\u0000\u0000\u00df\u00e2\u0001\u0000\u0000\u0000\u00e0\u00de\u0001\u0000"+
		"\u0000\u0000\u00e1\u00d9\u0001\u0000\u0000\u0000\u00e1\u00e2\u0001\u0000"+
		"\u0000\u0000\u00e2\u00e3\u0001\u0000\u0000\u0000\u00e3\u00e4\u00052\u0000"+
		"\u0000\u00e4\u000f\u0001\u0000\u0000\u0000\u00e5\u00ee\u00053\u0000\u0000"+
		"\u00e6\u00eb\u0003\n\u0005\u0000\u00e7\u00e8\u00057\u0000\u0000\u00e8"+
		"\u00ea\u0003\n\u0005\u0000\u00e9\u00e7\u0001\u0000\u0000\u0000\u00ea\u00ed"+
		"\u0001\u0000\u0000\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00eb\u00ec"+
		"\u0001\u0000\u0000\u0000\u00ec\u00ef\u0001\u0000\u0000\u0000\u00ed\u00eb"+
		"\u0001\u0000\u0000\u0000\u00ee\u00e6\u0001\u0000\u0000\u0000\u00ee\u00ef"+
		"\u0001\u0000\u0000\u0000\u00ef\u00f1\u0001\u0000\u0000\u0000\u00f0\u00f2"+
		"\u00057\u0000\u0000\u00f1\u00f0\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001"+
		"\u0000\u0000\u0000\u00f2\u00f3\u0001\u0000\u0000\u0000\u00f3\u00f4\u0005"+
		"4\u0000\u0000\u00f4\u0011\u0001\u0000\u0000\u0000\u00f5\u00f7\u0003\u0002"+
		"\u0001\u0000\u00f6\u00f5\u0001\u0000\u0000\u0000\u00f6\u00f7\u0001\u0000"+
		"\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000\u0000\u00f8\u00f9\u0005$\u0000"+
		"\u0000\u00f9\u00fc\u0003\u0080@\u0000\u00fa\u00fb\u0005<\u0000\u0000\u00fb"+
		"\u00fd\u0003|>\u0000\u00fc\u00fa\u0001\u0000\u0000\u0000\u00fc\u00fd\u0001"+
		"\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe\u00ff\u0005"+
		"E\u0000\u0000\u00ff\u0100\u0003\\.\u0000\u0100\u0102\u0001\u0000\u0000"+
		"\u0000\u0101\u0103\u0005;\u0000\u0000\u0102\u0101\u0001\u0000\u0000\u0000"+
		"\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0123\u0001\u0000\u0000\u0000"+
		"\u0104\u0106\u0003\u0002\u0001\u0000\u0105\u0104\u0001\u0000\u0000\u0000"+
		"\u0105\u0106\u0001\u0000\u0000\u0000\u0106\u0107\u0001\u0000\u0000\u0000"+
		"\u0107\u0108\u0005$\u0000\u0000\u0108\u010b\u0003\u000e\u0007\u0000\u0109"+
		"\u010a\u0005<\u0000\u0000\u010a\u010c\u0003|>\u0000\u010b\u0109\u0001"+
		"\u0000\u0000\u0000\u010b\u010c\u0001\u0000\u0000\u0000\u010c\u010d\u0001"+
		"\u0000\u0000\u0000\u010d\u010e\u0005E\u0000\u0000\u010e\u010f\u0003\\"+
		".\u0000\u010f\u0111\u0001\u0000\u0000\u0000\u0110\u0112\u0005;\u0000\u0000"+
		"\u0111\u0110\u0001\u0000\u0000\u0000\u0111\u0112\u0001\u0000\u0000\u0000"+
		"\u0112\u0123\u0001\u0000\u0000\u0000\u0113\u0115\u0003\u0002\u0001\u0000"+
		"\u0114\u0113\u0001\u0000\u0000\u0000\u0114\u0115\u0001\u0000\u0000\u0000"+
		"\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u0117\u0005$\u0000\u0000\u0117"+
		"\u011a\u0003\u0010\b\u0000\u0118\u0119\u0005<\u0000\u0000\u0119\u011b"+
		"\u0003|>\u0000\u011a\u0118\u0001\u0000\u0000\u0000\u011a\u011b\u0001\u0000"+
		"\u0000\u0000\u011b\u011c\u0001\u0000\u0000\u0000\u011c\u011d\u0005E\u0000"+
		"\u0000\u011d\u011e\u0003\\.\u0000\u011e\u0120\u0001\u0000\u0000\u0000"+
		"\u011f\u0121\u0005;\u0000\u0000\u0120\u011f\u0001\u0000\u0000\u0000\u0120"+
		"\u0121\u0001\u0000\u0000\u0000\u0121\u0123\u0001\u0000\u0000\u0000\u0122"+
		"\u00f6\u0001\u0000\u0000\u0000\u0122\u0105\u0001\u0000\u0000\u0000\u0122"+
		"\u0114\u0001\u0000\u0000\u0000\u0123\u0013\u0001\u0000\u0000\u0000\u0124"+
		"\u0126\u0003\u0002\u0001\u0000\u0125\u0124\u0001\u0000\u0000\u0000\u0125"+
		"\u0126\u0001\u0000\u0000\u0000\u0126\u0128\u0001\u0000\u0000\u0000\u0127"+
		"\u0129\u0005\u0004\u0000\u0000\u0128\u0127\u0001\u0000\u0000\u0000\u0128"+
		"\u0129\u0001\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a"+
		"\u012b\u0005%\u0000\u0000\u012b\u012e\u0003\u0080@\u0000\u012c\u012d\u0005"+
		"<\u0000\u0000\u012d\u012f\u0003|>\u0000\u012e\u012c\u0001\u0000\u0000"+
		"\u0000\u012e\u012f\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000\u0000"+
		"\u0000\u0130\u0131\u0005E\u0000\u0000\u0131\u0132\u0003\\.\u0000\u0132"+
		"\u0134\u0001\u0000\u0000\u0000\u0133\u0135\u0005;\u0000\u0000\u0134\u0133"+
		"\u0001\u0000\u0000\u0000\u0134\u0135\u0001\u0000\u0000\u0000\u0135\u015b"+
		"\u0001\u0000\u0000\u0000\u0136\u0138\u0003\u0002\u0001\u0000\u0137\u0136"+
		"\u0001\u0000\u0000\u0000\u0137\u0138\u0001\u0000\u0000\u0000\u0138\u013a"+
		"\u0001\u0000\u0000\u0000\u0139\u013b\u0005\u0004\u0000\u0000\u013a\u0139"+
		"\u0001\u0000\u0000\u0000\u013a\u013b\u0001\u0000\u0000\u0000\u013b\u013c"+
		"\u0001\u0000\u0000\u0000\u013c\u013d\u0005%\u0000\u0000\u013d\u0140\u0003"+
		"\u000e\u0007\u0000\u013e\u013f\u0005<\u0000\u0000\u013f\u0141\u0003|>"+
		"\u0000\u0140\u013e\u0001\u0000\u0000\u0000\u0140\u0141\u0001\u0000\u0000"+
		"\u0000\u0141\u0142\u0001\u0000\u0000\u0000\u0142\u0143\u0005E\u0000\u0000"+
		"\u0143\u0144\u0003\\.\u0000\u0144\u0146\u0001\u0000\u0000\u0000\u0145"+
		"\u0147\u0005;\u0000\u0000\u0146\u0145\u0001\u0000\u0000\u0000\u0146\u0147"+
		"\u0001\u0000\u0000\u0000\u0147\u015b\u0001\u0000\u0000\u0000\u0148\u014a"+
		"\u0003\u0002\u0001\u0000\u0149\u0148\u0001\u0000\u0000\u0000\u0149\u014a"+
		"\u0001\u0000\u0000\u0000\u014a\u014c\u0001\u0000\u0000\u0000\u014b\u014d"+
		"\u0005\u0004\u0000\u0000\u014c\u014b\u0001\u0000\u0000\u0000\u014c\u014d"+
		"\u0001\u0000\u0000\u0000\u014d\u014e\u0001\u0000\u0000\u0000\u014e\u014f"+
		"\u0005%\u0000\u0000\u014f\u0152\u0003\u0010\b\u0000\u0150\u0151\u0005"+
		"<\u0000\u0000\u0151\u0153\u0003|>\u0000\u0152\u0150\u0001\u0000\u0000"+
		"\u0000\u0152\u0153\u0001\u0000\u0000\u0000\u0153\u0154\u0001\u0000\u0000"+
		"\u0000\u0154\u0155\u0005E\u0000\u0000\u0155\u0156\u0003\\.\u0000\u0156"+
		"\u0158\u0001\u0000\u0000\u0000\u0157\u0159\u0005;\u0000\u0000\u0158\u0157"+
		"\u0001\u0000\u0000\u0000\u0158\u0159\u0001\u0000\u0000\u0000\u0159\u015b"+
		"\u0001\u0000\u0000\u0000\u015a\u0125\u0001\u0000\u0000\u0000\u015a\u0137"+
		"\u0001\u0000\u0000\u0000\u015a\u0149\u0001\u0000\u0000\u0000\u015b\u0015"+
		"\u0001\u0000\u0000\u0000\u015c\u015d\u0003\u0080@\u0000\u015d\u015e\u0007"+
		"\u0001\u0000\u0000\u015e\u0160\u0003\\.\u0000\u015f\u0161\u0005;\u0000"+
		"\u0000\u0160\u015f\u0001\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000"+
		"\u0000\u0161\u0017\u0001\u0000\u0000\u0000\u0162\u0163\u0003\\.\u0000"+
		"\u0163\u0164\u00056\u0000\u0000\u0164\u0165\u0003\u0080@\u0000\u0165\u0166"+
		"\u0007\u0001\u0000\u0000\u0166\u0168\u0003\\.\u0000\u0167\u0169\u0005"+
		";\u0000\u0000\u0168\u0167\u0001\u0000\u0000\u0000\u0168\u0169\u0001\u0000"+
		"\u0000\u0000\u0169\u0019\u0001\u0000\u0000\u0000\u016a\u016b\u0003\\."+
		"\u0000\u016b\u016c\u00051\u0000\u0000\u016c\u016d\u0003\\.\u0000\u016d"+
		"\u016e\u00052\u0000\u0000\u016e\u016f\u0007\u0001\u0000\u0000\u016f\u0171"+
		"\u0003\\.\u0000\u0170\u0172\u0005;\u0000\u0000\u0171\u0170\u0001\u0000"+
		"\u0000\u0000\u0171\u0172\u0001\u0000\u0000\u0000\u0172\u001b\u0001\u0000"+
		"\u0000\u0000\u0173\u0175\u0003`0\u0000\u0174\u0176\u0005;\u0000\u0000"+
		"\u0175\u0174\u0001\u0000\u0000\u0000\u0175\u0176\u0001\u0000\u0000\u0000"+
		"\u0176\u001d\u0001\u0000\u0000\u0000\u0177\u0179\u0003^/\u0000\u0178\u017a"+
		"\u0005;\u0000\u0000\u0179\u0178\u0001\u0000\u0000\u0000\u0179\u017a\u0001"+
		"\u0000\u0000\u0000\u017a\u001f\u0001\u0000\u0000\u0000\u017b\u017d\u0003"+
		"l6\u0000\u017c\u017e\u0005;\u0000\u0000\u017d\u017c\u0001\u0000\u0000"+
		"\u0000\u017d\u017e\u0001\u0000\u0000\u0000\u017e!\u0001\u0000\u0000\u0000"+
		"\u017f\u0181\u0003n7\u0000\u0180\u0182\u0005;\u0000\u0000\u0181\u0180"+
		"\u0001\u0000\u0000\u0000\u0181\u0182\u0001\u0000\u0000\u0000\u0182#\u0001"+
		"\u0000\u0000\u0000\u0183\u0184\u0005\u0014\u0000\u0000\u0184\u0185\u0003"+
		"\u0080@\u0000\u0185\u0186\u0005\u0015\u0000\u0000\u0186\u0187\u0003\\"+
		".\u0000\u0187\u0189\u0003\u009cN\u0000\u0188\u018a\u0005;\u0000\u0000"+
		"\u0189\u0188\u0001\u0000\u0000\u0000\u0189\u018a\u0001\u0000\u0000\u0000"+
		"\u018a\u019a\u0001\u0000\u0000\u0000\u018b\u018c\u0005\u0014\u0000\u0000"+
		"\u018c\u018d\u0003\u000e\u0007\u0000\u018d\u018e\u0003\\.\u0000\u018e"+
		"\u0190\u0003\u009cN\u0000\u018f\u0191\u0005;\u0000\u0000\u0190\u018f\u0001"+
		"\u0000\u0000\u0000\u0190\u0191\u0001\u0000\u0000\u0000\u0191\u019a\u0001"+
		"\u0000\u0000\u0000\u0192\u0193\u0005\u0014\u0000\u0000\u0193\u0194\u0003"+
		"\u0010\b\u0000\u0194\u0195\u0003\\.\u0000\u0195\u0197\u0003\u009cN\u0000"+
		"\u0196\u0198\u0005;\u0000\u0000\u0197\u0196\u0001\u0000\u0000\u0000\u0197"+
		"\u0198\u0001\u0000\u0000\u0000\u0198\u019a\u0001\u0000\u0000\u0000\u0199"+
		"\u0183\u0001\u0000\u0000\u0000\u0199\u018b\u0001\u0000\u0000\u0000\u0199"+
		"\u0192\u0001\u0000\u0000\u0000\u019a%\u0001\u0000\u0000\u0000\u019b\u019c"+
		"\u0005\f\u0000\u0000\u019c\u019e\u0003\\.\u0000\u019d\u019f\u0005;\u0000"+
		"\u0000\u019e\u019d\u0001\u0000\u0000\u0000\u019e\u019f\u0001\u0000\u0000"+
		"\u0000\u019f\'\u0001\u0000\u0000\u0000\u01a0\u01a1\u0005\u000b\u0000\u0000"+
		"\u01a1\u01a3\u0003\\.\u0000\u01a2\u01a4\u0005;\u0000\u0000\u01a3\u01a2"+
		"\u0001\u0000\u0000\u0000\u01a3\u01a4\u0001\u0000\u0000\u0000\u01a4)\u0001"+
		"\u0000\u0000\u0000\u01a5\u01a6\u0005-\u0000\u0000\u01a6\u01a8\u0003\\"+
		".\u0000\u01a7\u01a9\u0005;\u0000\u0000\u01a8\u01a7\u0001\u0000\u0000\u0000"+
		"\u01a8\u01a9\u0001\u0000\u0000\u0000\u01a9+\u0001\u0000\u0000\u0000\u01aa"+
		"\u01bc\u0003.\u0017\u0000\u01ab\u01bc\u00030\u0018\u0000\u01ac\u01bc\u0003"+
		"2\u0019\u0000\u01ad\u01bc\u00034\u001a\u0000\u01ae\u01bc\u00036\u001b"+
		"\u0000\u01af\u01bc\u00038\u001c\u0000\u01b0\u01bc\u0003>\u001f\u0000\u01b1"+
		"\u01bc\u0003@ \u0000\u01b2\u01bc\u0003B!\u0000\u01b3\u01bc\u0003D\"\u0000"+
		"\u01b4\u01bc\u0003F#\u0000\u01b5\u01bc\u0003H$\u0000\u01b6\u01bc\u0003"+
		"J%\u0000\u01b7\u01bc\u0003L&\u0000\u01b8\u01bc\u0003N\'\u0000\u01b9\u01bc"+
		"\u0003P(\u0000\u01ba\u01bc\u0003X,\u0000\u01bb\u01aa\u0001\u0000\u0000"+
		"\u0000\u01bb\u01ab\u0001\u0000\u0000\u0000\u01bb\u01ac\u0001\u0000\u0000"+
		"\u0000\u01bb\u01ad\u0001\u0000\u0000\u0000\u01bb\u01ae\u0001\u0000\u0000"+
		"\u0000\u01bb\u01af\u0001\u0000\u0000\u0000\u01bb\u01b0\u0001\u0000\u0000"+
		"\u0000\u01bb\u01b1\u0001\u0000\u0000\u0000\u01bb\u01b2\u0001\u0000\u0000"+
		"\u0000\u01bb\u01b3\u0001\u0000\u0000\u0000\u01bb\u01b4\u0001\u0000\u0000"+
		"\u0000\u01bb\u01b5\u0001\u0000\u0000\u0000\u01bb\u01b6\u0001\u0000\u0000"+
		"\u0000\u01bb\u01b7\u0001\u0000\u0000\u0000\u01bb\u01b8\u0001\u0000\u0000"+
		"\u0000\u01bb\u01b9\u0001\u0000\u0000\u0000\u01bb\u01ba\u0001\u0000\u0000"+
		"\u0000\u01bc-\u0001\u0000\u0000\u0000\u01bd\u01bf\u0003\u0002\u0001\u0000"+
		"\u01be\u01bd\u0001\u0000\u0000\u0000\u01be\u01bf\u0001\u0000\u0000\u0000"+
		"\u01bf\u01c1\u0001\u0000\u0000\u0000\u01c0\u01c2\u0005\u0004\u0000\u0000"+
		"\u01c1\u01c0\u0001\u0000\u0000\u0000\u01c1\u01c2\u0001\u0000\u0000\u0000"+
		"\u01c2\u01c3\u0001\u0000\u0000\u0000\u01c3\u01c4\u0005\u0001\u0000\u0000"+
		"\u01c4\u01c7\u0003\u0080@\u0000\u01c5\u01c6\u0005\u0007\u0000\u0000\u01c6"+
		"\u01c8\u0003|>\u0000\u01c7\u01c5\u0001\u0000\u0000\u0000\u01c7\u01c8\u0001"+
		"\u0000\u0000\u0000\u01c8\u01cb\u0001\u0000\u0000\u0000\u01c9\u01ca\u0005"+
		"\u0005\u0000\u0000\u01ca\u01cc\u0003\u009aM\u0000\u01cb\u01c9\u0001\u0000"+
		"\u0000\u0000\u01cb\u01cc\u0001\u0000\u0000\u0000\u01cc\u01cd\u0001\u0000"+
		"\u0000\u0000\u01cd\u01cf\u0003\u009cN\u0000\u01ce\u01d0\u0005;\u0000\u0000"+
		"\u01cf\u01ce\u0001\u0000\u0000\u0000\u01cf\u01d0\u0001\u0000\u0000\u0000"+
		"\u01d0/\u0001\u0000\u0000\u0000\u01d1\u01d3\u0003\u0002\u0001\u0000\u01d2"+
		"\u01d1\u0001\u0000\u0000\u0000\u01d2\u01d3\u0001\u0000\u0000\u0000\u01d3"+
		"\u01d5\u0001\u0000\u0000\u0000\u01d4\u01d6\u0005\u0004\u0000\u0000\u01d5"+
		"\u01d4\u0001\u0000\u0000\u0000\u01d5\u01d6\u0001\u0000\u0000\u0000\u01d6"+
		"\u01d7\u0001\u0000\u0000\u0000\u01d7\u01d8\u0005\u0002\u0000\u0000\u01d8"+
		"\u01db\u0003\u0080@\u0000\u01d9\u01da\u0005\u0007\u0000\u0000\u01da\u01dc"+
		"\u0003\u009aM\u0000\u01db\u01d9\u0001\u0000\u0000\u0000\u01db\u01dc\u0001"+
		"\u0000\u0000\u0000\u01dc\u01dd\u0001\u0000\u0000\u0000\u01dd\u01df\u0003"+
		"\u009cN\u0000\u01de\u01e0\u0005;\u0000\u0000\u01df\u01de\u0001\u0000\u0000"+
		"\u0000\u01df\u01e0\u0001\u0000\u0000\u0000\u01e01\u0001\u0000\u0000\u0000"+
		"\u01e1\u01e3\u0003\u0002\u0001\u0000\u01e2\u01e1\u0001\u0000\u0000\u0000"+
		"\u01e2\u01e3\u0001\u0000\u0000\u0000\u01e3\u01e5\u0001\u0000\u0000\u0000"+
		"\u01e4\u01e6\u0005\u0004\u0000\u0000\u01e5\u01e4\u0001\u0000\u0000\u0000"+
		"\u01e5\u01e6\u0001\u0000\u0000\u0000\u01e6\u01e7\u0001\u0000\u0000\u0000"+
		"\u01e7\u01e8\u0005(\u0000\u0000\u01e8\u01ea\u0003\u0080@\u0000\u01e9\u01eb"+
		"\u0003\u0094J\u0000\u01ea\u01e9\u0001\u0000\u0000\u0000\u01ea\u01eb\u0001"+
		"\u0000\u0000\u0000\u01eb\u01ec\u0001\u0000\u0000\u0000\u01ec\u01ee\u0003"+
		"\u0092I\u0000\u01ed\u01ef\u0005;\u0000\u0000\u01ee\u01ed\u0001\u0000\u0000"+
		"\u0000\u01ee\u01ef\u0001\u0000\u0000\u0000\u01ef\u0200\u0001\u0000\u0000"+
		"\u0000\u01f0\u01f2\u0003\u0002\u0001\u0000\u01f1\u01f0\u0001\u0000\u0000"+
		"\u0000\u01f1\u01f2\u0001\u0000\u0000\u0000\u01f2\u01f4\u0001\u0000\u0000"+
		"\u0000\u01f3\u01f5\u0005\u0004\u0000\u0000\u01f4\u01f3\u0001\u0000\u0000"+
		"\u0000\u01f4\u01f5\u0001\u0000\u0000\u0000\u01f5\u01f6\u0001\u0000\u0000"+
		"\u0000\u01f6\u01f7\u0005(\u0000\u0000\u01f7\u01f9\u0003\u0080@\u0000\u01f8"+
		"\u01fa\u0003\u0094J\u0000\u01f9\u01f8\u0001\u0000\u0000\u0000\u01f9\u01fa"+
		"\u0001\u0000\u0000\u0000\u01fa\u01fb\u0001\u0000\u0000\u0000\u01fb\u01fd"+
		"\u0003\u008cF\u0000\u01fc\u01fe\u0005;\u0000\u0000\u01fd\u01fc\u0001\u0000"+
		"\u0000\u0000\u01fd\u01fe\u0001\u0000\u0000\u0000\u01fe\u0200\u0001\u0000"+
		"\u0000\u0000\u01ff\u01e2\u0001\u0000\u0000\u0000\u01ff\u01f1\u0001\u0000"+
		"\u0000\u0000\u02003\u0001\u0000\u0000\u0000\u0201\u0203\u0003\u0002\u0001"+
		"\u0000\u0202\u0201\u0001\u0000\u0000\u0000\u0202\u0203\u0001\u0000\u0000"+
		"\u0000\u0203\u0205\u0001\u0000\u0000\u0000\u0204\u0206\u0005\u0004\u0000"+
		"\u0000\u0205\u0204\u0001\u0000\u0000\u0000\u0205\u0206\u0001\u0000\u0000"+
		"\u0000\u0206\u0207\u0001\u0000\u0000\u0000\u0207\u0208\u0005)\u0000\u0000"+
		"\u0208\u020a\u0003\u0080@\u0000\u0209\u020b\u0003\u0094J\u0000\u020a\u0209"+
		"\u0001\u0000\u0000\u0000\u020a\u020b\u0001\u0000\u0000\u0000\u020b\u020c"+
		"\u0001\u0000\u0000\u0000\u020c\u020d\u0005/\u0000\u0000\u020d\u020e\u0003"+
		"\u0096K\u0000\u020e\u0210\u00050\u0000\u0000\u020f\u0211\u0005;\u0000"+
		"\u0000\u0210\u020f\u0001\u0000\u0000\u0000\u0210\u0211\u0001\u0000\u0000"+
		"\u0000\u02115\u0001\u0000\u0000\u0000\u0212\u0214\u0003\u0002\u0001\u0000"+
		"\u0213\u0212\u0001\u0000\u0000\u0000\u0213\u0214\u0001\u0000\u0000\u0000"+
		"\u0214\u0216\u0001\u0000\u0000\u0000\u0215\u0217\u0005\u0004\u0000\u0000"+
		"\u0216\u0215\u0001\u0000\u0000\u0000\u0216\u0217\u0001\u0000\u0000\u0000"+
		"\u0217\u0218\u0001\u0000\u0000\u0000\u0218\u021a\u0005*\u0000\u0000\u0219"+
		"\u021b\u0003\u0094J\u0000\u021a\u0219\u0001\u0000\u0000\u0000\u021a\u021b"+
		"\u0001\u0000\u0000\u0000\u021b\u021c\u0001\u0000\u0000\u0000\u021c\u021e"+
		"\u0003\u0080@\u0000\u021d\u021f\u0005;\u0000\u0000\u021e\u021d\u0001\u0000"+
		"\u0000\u0000\u021e\u021f\u0001\u0000\u0000\u0000\u021f7\u0001\u0000\u0000"+
		"\u0000\u0220\u0222\u0003\u0002\u0001\u0000\u0221\u0220\u0001\u0000\u0000"+
		"\u0000\u0221\u0222\u0001\u0000\u0000\u0000\u0222\u0224\u0001\u0000\u0000"+
		"\u0000\u0223\u0225\u0005\u0004\u0000\u0000\u0224\u0223\u0001\u0000\u0000"+
		"\u0000\u0224\u0225\u0001\u0000\u0000\u0000\u0225\u0226\u0001\u0000\u0000"+
		"\u0000\u0226\u0227\u0005+\u0000\u0000\u0227\u0229\u0003\u0080@\u0000\u0228"+
		"\u022a\u0003\u0094J\u0000\u0229\u0228\u0001\u0000\u0000\u0000\u0229\u022a"+
		"\u0001\u0000\u0000\u0000\u022a\u022b\u0001\u0000\u0000\u0000\u022b\u022d"+
		"\u00053\u0000\u0000\u022c\u022e\u0003:\u001d\u0000\u022d\u022c\u0001\u0000"+
		"\u0000\u0000\u022d\u022e\u0001\u0000\u0000\u0000\u022e\u022f\u0001\u0000"+
		"\u0000\u0000\u022f\u0231\u00054\u0000\u0000\u0230\u0232\u0005;\u0000\u0000"+
		"\u0231\u0230\u0001\u0000\u0000\u0000\u0231\u0232\u0001\u0000\u0000\u0000"+
		"\u02329\u0001\u0000\u0000\u0000\u0233\u0238\u0003<\u001e\u0000\u0234\u0235"+
		"\u00057\u0000\u0000\u0235\u0237\u0003<\u001e\u0000\u0236\u0234\u0001\u0000"+
		"\u0000\u0000\u0237\u023a\u0001\u0000\u0000\u0000\u0238\u0236\u0001\u0000"+
		"\u0000\u0000\u0238\u0239\u0001\u0000\u0000\u0000\u0239;\u0001\u0000\u0000"+
		"\u0000\u023a\u0238\u0001\u0000\u0000\u0000\u023b\u023d\u0003\u0002\u0001"+
		"\u0000\u023c\u023b\u0001\u0000\u0000\u0000\u023c\u023d\u0001\u0000\u0000"+
		"\u0000\u023d\u023e\u0001\u0000\u0000\u0000\u023e\u023f\u0003\u0080@\u0000"+
		"\u023f\u0240\u0003\u0092I\u0000\u0240\u0254\u0001\u0000\u0000\u0000\u0241"+
		"\u0243\u0003\u0002\u0001\u0000\u0242\u0241\u0001\u0000\u0000\u0000\u0242"+
		"\u0243\u0001\u0000\u0000\u0000\u0243\u0244\u0001\u0000\u0000\u0000\u0244"+
		"\u0245\u0003\u0080@\u0000\u0245\u0246\u0003\u008cF\u0000\u0246\u0254\u0001"+
		"\u0000\u0000\u0000\u0247\u0249\u0003\u0002\u0001\u0000\u0248\u0247\u0001"+
		"\u0000\u0000\u0000\u0248\u0249\u0001\u0000\u0000\u0000\u0249\u024a\u0001"+
		"\u0000\u0000\u0000\u024a\u024b\u0003\u0080@\u0000\u024b\u024c\u0005/\u0000"+
		"\u0000\u024c\u024d\u0003\u0096K\u0000\u024d\u024e\u00050\u0000\u0000\u024e"+
		"\u0254\u0001\u0000\u0000\u0000\u024f\u0251\u0003\u0002\u0001\u0000\u0250"+
		"\u024f\u0001\u0000\u0000\u0000\u0250\u0251\u0001\u0000\u0000\u0000\u0251"+
		"\u0252\u0001\u0000\u0000\u0000\u0252\u0254\u0003\u0080@\u0000\u0253\u023c"+
		"\u0001\u0000\u0000\u0000\u0253\u0242\u0001\u0000\u0000\u0000\u0253\u0248"+
		"\u0001\u0000\u0000\u0000\u0253\u0250\u0001\u0000\u0000\u0000\u0254=\u0001"+
		"\u0000\u0000\u0000\u0255\u0257\u0003\u0002\u0001\u0000\u0256\u0255\u0001"+
		"\u0000\u0000\u0000\u0256\u0257\u0001\u0000\u0000\u0000\u0257\u0259\u0001"+
		"\u0000\u0000\u0000\u0258\u025a\u0005\u0004\u0000\u0000\u0259\u0258\u0001"+
		"\u0000\u0000\u0000\u0259\u025a\u0001\u0000\u0000\u0000\u025a\u025b\u0001"+
		"\u0000\u0000\u0000\u025b\u025c\u0005,\u0000\u0000\u025c\u025e\u0003\u0080"+
		"@\u0000\u025d\u025f\u0003\u0094J\u0000\u025e\u025d\u0001\u0000\u0000\u0000"+
		"\u025e\u025f\u0001\u0000\u0000\u0000\u025f\u0260\u0001\u0000\u0000\u0000"+
		"\u0260\u0261\u0005E\u0000\u0000\u0261\u0263\u0003|>\u0000\u0262\u0264"+
		"\u0005;\u0000\u0000\u0263\u0262\u0001\u0000\u0000\u0000\u0263\u0264\u0001"+
		"\u0000\u0000\u0000\u0264?\u0001\u0000\u0000\u0000\u0265\u0267\u0003\u0002"+
		"\u0001\u0000\u0266\u0265\u0001\u0000\u0000\u0000\u0266\u0267\u0001\u0000"+
		"\u0000\u0000\u0267\u0269\u0001\u0000\u0000\u0000\u0268\u026a\u0005\u0004"+
		"\u0000\u0000\u0269\u0268\u0001\u0000\u0000\u0000\u0269\u026a\u0001\u0000"+
		"\u0000\u0000\u026a\u026b\u0001\u0000\u0000\u0000\u026b\u026c\u0005#\u0000"+
		"\u0000\u026c\u026e\u0003\u0080@\u0000\u026d\u026f\u0005:\u0000\u0000\u026e"+
		"\u026d\u0001\u0000\u0000\u0000\u026e\u026f\u0001\u0000\u0000\u0000\u026f"+
		"\u0271\u0001\u0000\u0000\u0000\u0270\u0272\u0003\u0094J\u0000\u0271\u0270"+
		"\u0001\u0000\u0000\u0000\u0271\u0272\u0001\u0000\u0000\u0000\u0272\u0273"+
		"\u0001\u0000\u0000\u0000\u0273\u0276\u0003\u008cF\u0000\u0274\u0275\u0005"+
		"?\u0000\u0000\u0275\u0277\u0003|>\u0000\u0276\u0274\u0001\u0000\u0000"+
		"\u0000\u0276\u0277\u0001\u0000\u0000\u0000\u0277\u0278\u0001\u0000\u0000"+
		"\u0000\u0278\u027a\u0003\u009cN\u0000\u0279\u027b\u0005;\u0000\u0000\u027a"+
		"\u0279\u0001\u0000\u0000\u0000\u027a\u027b\u0001\u0000\u0000\u0000\u027b"+
		"A\u0001\u0000\u0000\u0000\u027c\u027e\u0003\u0002\u0001\u0000\u027d\u027c"+
		"\u0001\u0000\u0000\u0000\u027d\u027e\u0001\u0000\u0000\u0000\u027e\u027f"+
		"\u0001\u0000\u0000\u0000\u027f\u0281\u0005\u000f\u0000\u0000\u0280\u0282"+
		"\u0005:\u0000\u0000\u0281\u0280\u0001\u0000\u0000\u0000\u0281\u0282\u0001"+
		"\u0000\u0000\u0000\u0282\u0283\u0001\u0000\u0000\u0000\u0283\u0286\u0003"+
		"\u008cF\u0000\u0284\u0285\u0005?\u0000\u0000\u0285\u0287\u0003|>\u0000"+
		"\u0286\u0284\u0001\u0000\u0000\u0000\u0286\u0287\u0001\u0000\u0000\u0000"+
		"\u0287\u0288\u0001\u0000\u0000\u0000\u0288\u028a\u0003\u009cN\u0000\u0289"+
		"\u028b\u0005;\u0000\u0000\u028a\u0289\u0001\u0000\u0000\u0000\u028a\u028b"+
		"\u0001\u0000\u0000\u0000\u028bC\u0001\u0000\u0000\u0000\u028c\u028e\u0003"+
		"\u0002\u0001\u0000\u028d\u028c\u0001\u0000\u0000\u0000\u028d\u028e\u0001"+
		"\u0000\u0000\u0000\u028e\u028f\u0001\u0000\u0000\u0000\u028f\u0290\u0005"+
		"\u0011\u0000\u0000\u0290\u0292\u0003\u0080@\u0000\u0291\u0293\u0005:\u0000"+
		"\u0000\u0292\u0291\u0001\u0000\u0000\u0000\u0292\u0293\u0001\u0000\u0000"+
		"\u0000\u0293\u0294\u0001\u0000\u0000\u0000\u0294\u0297\u0003\u008cF\u0000"+
		"\u0295\u0296\u0005?\u0000\u0000\u0296\u0298\u0003|>\u0000\u0297\u0295"+
		"\u0001\u0000\u0000\u0000\u0297\u0298\u0001\u0000\u0000\u0000\u0298\u0299"+
		"\u0001\u0000\u0000\u0000\u0299\u029b\u0003\u009cN\u0000\u029a\u029c\u0005"+
		";\u0000\u0000\u029b\u029a\u0001\u0000\u0000\u0000\u029b\u029c\u0001\u0000"+
		"\u0000\u0000\u029cE\u0001\u0000\u0000\u0000\u029d\u029f\u0003\u0002\u0001"+
		"\u0000\u029e\u029d\u0001\u0000\u0000\u0000\u029e\u029f\u0001\u0000\u0000"+
		"\u0000\u029f\u02a0\u0001\u0000\u0000\u0000\u02a0\u02a1\u0005\u0011\u0000"+
		"\u0000\u02a1\u02a3\u0003\u0080@\u0000\u02a2\u02a4\u0005:\u0000\u0000\u02a3"+
		"\u02a2\u0001\u0000\u0000\u0000\u02a3\u02a4\u0001\u0000\u0000\u0000\u02a4"+
		"\u02a5\u0001\u0000\u0000\u0000\u02a5\u02a8\u0003\u0090H\u0000\u02a6\u02a7"+
		"\u0005?\u0000\u0000\u02a7\u02a9\u0003|>\u0000\u02a8\u02a6\u0001\u0000"+
		"\u0000\u0000\u02a8\u02a9\u0001\u0000\u0000\u0000\u02a9\u02aa\u0001\u0000"+
		"\u0000\u0000\u02aa\u02ac\u0003\u009cN\u0000\u02ab\u02ad\u0005;\u0000\u0000"+
		"\u02ac\u02ab\u0001\u0000\u0000\u0000\u02ac\u02ad\u0001\u0000\u0000\u0000"+
		"\u02adG\u0001\u0000\u0000\u0000\u02ae\u02b0\u0003\u0002\u0001\u0000\u02af"+
		"\u02ae\u0001\u0000\u0000\u0000\u02af\u02b0\u0001\u0000\u0000\u0000\u02b0"+
		"\u02b1\u0001\u0000\u0000\u0000\u02b1\u02b2\u0005\u0012\u0000\u0000\u02b2"+
		"\u02b4\u0003\u0080@\u0000\u02b3\u02b5\u0005:\u0000\u0000\u02b4\u02b3\u0001"+
		"\u0000\u0000\u0000\u02b4\u02b5\u0001\u0000\u0000\u0000\u02b5\u02b6\u0001"+
		"\u0000\u0000\u0000\u02b6\u02b9\u0003\u008cF\u0000\u02b7\u02b8\u0005?\u0000"+
		"\u0000\u02b8\u02ba\u0003|>\u0000\u02b9\u02b7\u0001\u0000\u0000\u0000\u02b9"+
		"\u02ba\u0001\u0000\u0000\u0000\u02ba\u02bb\u0001\u0000\u0000\u0000\u02bb"+
		"\u02bd\u0003\u009cN\u0000\u02bc\u02be\u0005;\u0000\u0000\u02bd\u02bc\u0001"+
		"\u0000\u0000\u0000\u02bd\u02be\u0001\u0000\u0000\u0000\u02beI\u0001\u0000"+
		"\u0000\u0000\u02bf\u02c1\u0003\u0002\u0001\u0000\u02c0\u02bf\u0001\u0000"+
		"\u0000\u0000\u02c0\u02c1\u0001\u0000\u0000\u0000\u02c1\u02c2\u0001\u0000"+
		"\u0000\u0000\u02c2\u02c3\u0005\u0012\u0000\u0000\u02c3\u02c5\u0003\u0080"+
		"@\u0000\u02c4\u02c6\u0005:\u0000\u0000\u02c5\u02c4\u0001\u0000\u0000\u0000"+
		"\u02c5\u02c6\u0001\u0000\u0000\u0000\u02c6\u02c7\u0001\u0000\u0000\u0000"+
		"\u02c7\u02ca\u0003\u0090H\u0000\u02c8\u02c9\u0005?\u0000\u0000\u02c9\u02cb"+
		"\u0003|>\u0000\u02ca\u02c8\u0001\u0000\u0000\u0000\u02ca\u02cb\u0001\u0000"+
		"\u0000\u0000\u02cb\u02cc\u0001\u0000\u0000\u0000\u02cc\u02ce\u0003\u009c"+
		"N\u0000\u02cd\u02cf\u0005;\u0000\u0000\u02ce\u02cd\u0001\u0000\u0000\u0000"+
		"\u02ce\u02cf\u0001\u0000\u0000\u0000\u02cfK\u0001\u0000\u0000\u0000\u02d0"+
		"\u02d2\u0003\u0002\u0001\u0000\u02d1\u02d0\u0001\u0000\u0000\u0000\u02d1"+
		"\u02d2\u0001\u0000\u0000\u0000\u02d2\u02d4\u0001\u0000\u0000\u0000\u02d3"+
		"\u02d5\u0005\u0004\u0000\u0000\u02d4\u02d3\u0001\u0000\u0000\u0000\u02d4"+
		"\u02d5\u0001\u0000\u0000\u0000\u02d5\u02d6\u0001\u0000\u0000\u0000\u02d6"+
		"\u02d7\u0005\b\u0000\u0000\u02d7\u02d8\u0003\u0080@\u0000\u02d8\u02da"+
		"\u0003\u008cF\u0000\u02d9\u02db\u0005;\u0000\u0000\u02da\u02d9\u0001\u0000"+
		"\u0000\u0000\u02da\u02db\u0001\u0000\u0000\u0000\u02dbM\u0001\u0000\u0000"+
		"\u0000\u02dc\u02de\u0003\u0002\u0001\u0000\u02dd\u02dc\u0001\u0000\u0000"+
		"\u0000\u02dd\u02de\u0001\u0000\u0000\u0000\u02de\u02e0\u0001\u0000\u0000"+
		"\u0000\u02df\u02e1\u0005\u0004\u0000\u0000\u02e0\u02df\u0001\u0000\u0000"+
		"\u0000\u02e0\u02e1\u0001\u0000\u0000\u0000\u02e1\u02e2\u0001\u0000\u0000"+
		"\u0000\u02e2\u02e3\u0005\t\u0000\u0000\u02e3\u02e4\u0003\u0080@\u0000"+
		"\u02e4\u02e6\u0003\u008cF\u0000\u02e5\u02e7\u0005;\u0000\u0000\u02e6\u02e5"+
		"\u0001\u0000\u0000\u0000\u02e6\u02e7\u0001\u0000\u0000\u0000\u02e7O\u0001"+
		"\u0000\u0000\u0000\u02e8\u02ea\u0003\u0002\u0001\u0000\u02e9\u02e8\u0001"+
		"\u0000\u0000\u0000\u02e9\u02ea\u0001\u0000\u0000\u0000\u02ea\u02eb\u0001"+
		"\u0000\u0000\u0000\u02eb\u02ec\u0005\u0017\u0000\u0000\u02ec\u02f0\u0005"+
		"3\u0000\u0000\u02ed\u02ef\u0003R)\u0000\u02ee\u02ed\u0001\u0000\u0000"+
		"\u0000\u02ef\u02f2\u0001\u0000\u0000\u0000\u02f0\u02ee\u0001\u0000\u0000"+
		"\u0000\u02f0\u02f1\u0001\u0000\u0000\u0000\u02f1\u02f3\u0001\u0000\u0000"+
		"\u0000\u02f2\u02f0\u0001\u0000\u0000\u0000\u02f3\u02f5\u00054\u0000\u0000"+
		"\u02f4\u02f6\u0005;\u0000\u0000\u02f5\u02f4\u0001\u0000\u0000\u0000\u02f5"+
		"\u02f6\u0001\u0000\u0000\u0000\u02f6Q\u0001\u0000\u0000\u0000\u02f7\u02fa"+
		"\u0003T*\u0000\u02f8\u02fa\u0003V+\u0000\u02f9\u02f7\u0001\u0000\u0000"+
		"\u0000\u02f9\u02f8\u0001\u0000\u0000\u0000\u02faS\u0001\u0000\u0000\u0000"+
		"\u02fb\u02fd\u0003\u0002\u0001\u0000\u02fc\u02fb\u0001\u0000\u0000\u0000"+
		"\u02fc\u02fd\u0001\u0000\u0000\u0000\u02fd\u02fe\u0001\u0000\u0000\u0000"+
		"\u02fe\u02ff\u0003\u0080@\u0000\u02ff\u0300\u0005<\u0000\u0000\u0300\u0302"+
		"\u0003|>\u0000\u0301\u0303\u0005;\u0000\u0000\u0302\u0301\u0001\u0000"+
		"\u0000\u0000\u0302\u0303\u0001\u0000\u0000\u0000\u0303U\u0001\u0000\u0000"+
		"\u0000\u0304\u0306\u0003\u0002\u0001\u0000\u0305\u0304\u0001\u0000\u0000"+
		"\u0000\u0305\u0306\u0001\u0000\u0000\u0000\u0306\u0307\u0001\u0000\u0000"+
		"\u0000\u0307\u0308\u0003\u0080@\u0000\u0308\u0309\u00051\u0000\u0000\u0309"+
		"\u030a\u0003|>\u0000\u030a\u030b\u00052\u0000\u0000\u030b\u030c\u0005"+
		"<\u0000\u0000\u030c\u030e\u0003|>\u0000\u030d\u030f\u0005;\u0000\u0000"+
		"\u030e\u030d\u0001\u0000\u0000\u0000\u030e\u030f\u0001\u0000\u0000\u0000"+
		"\u030fW\u0001\u0000\u0000\u0000\u0310\u0312\u0003\u0002\u0001\u0000\u0311"+
		"\u0310\u0001\u0000\u0000\u0000\u0311\u0312\u0001\u0000\u0000\u0000\u0312"+
		"\u0313\u0001\u0000\u0000\u0000\u0313\u0314\u0005\u0006\u0000\u0000\u0314"+
		"\u0315\u0003\u0080@\u0000\u0315\u0316\u0003\u0094J\u0000\u0316\u0318\u0003"+
		"\u009cN\u0000\u0317\u0319\u0005;\u0000\u0000\u0318\u0317\u0001\u0000\u0000"+
		"\u0000\u0318\u0319\u0001\u0000\u0000\u0000\u0319Y\u0001\u0000\u0000\u0000"+
		"\u031a\u031c\u0003\\.\u0000\u031b\u031d\u0005;\u0000\u0000\u031c\u031b"+
		"\u0001\u0000\u0000\u0000\u031c\u031d\u0001\u0000\u0000\u0000\u031d[\u0001"+
		"\u0000\u0000\u0000\u031e\u031f\u0006.\uffff\uffff\u0000\u031f\u0320\u0005"+
		"\u001d\u0000\u0000\u0320\u0332\u0003\\.\u0016\u0321\u0322\u0005\r\u0000"+
		"\u0000\u0322\u0332\u0003\\.\u0012\u0323\u0332\u0003^/\u0000\u0324\u0332"+
		"\u0003`0\u0000\u0325\u0332\u0003d2\u0000\u0326\u0332\u0003f3\u0000\u0327"+
		"\u0332\u0003h4\u0000\u0328\u0332\u0003j5\u0000\u0329\u0332\u0003p8\u0000"+
		"\u032a\u0332\u0003l6\u0000\u032b\u0332\u0003n7\u0000\u032c\u0332\u0003"+
		"\u0080@\u0000\u032d\u032e\u0005/\u0000\u0000\u032e\u032f\u0003\\.\u0000"+
		"\u032f\u0330\u00050\u0000\u0000\u0330\u0332\u0001\u0000\u0000\u0000\u0331"+
		"\u031e\u0001\u0000\u0000\u0000\u0331\u0321\u0001\u0000\u0000\u0000\u0331"+
		"\u0323\u0001\u0000\u0000\u0000\u0331\u0324\u0001\u0000\u0000\u0000\u0331"+
		"\u0325\u0001\u0000\u0000\u0000\u0331\u0326\u0001\u0000\u0000\u0000\u0331"+
		"\u0327\u0001\u0000\u0000\u0000\u0331\u0328\u0001\u0000\u0000\u0000\u0331"+
		"\u0329\u0001\u0000\u0000\u0000\u0331\u032a\u0001\u0000\u0000\u0000\u0331"+
		"\u032b\u0001\u0000\u0000\u0000\u0331\u032c\u0001\u0000\u0000\u0000\u0331"+
		"\u032d\u0001\u0000\u0000\u0000\u0332\u0373\u0001\u0000\u0000\u0000\u0333"+
		"\u0334\n\u0015\u0000\u0000\u0334\u0335\u0007\u0002\u0000\u0000\u0335\u0372"+
		"\u0003\\.\u0016\u0336\u0337\n\u0014\u0000\u0000\u0337\u0338\u0007\u0003"+
		"\u0000\u0000\u0338\u0372\u0003\\.\u0015\u0339\u033a\n\u0013\u0000\u0000"+
		"\u033a\u033b\u0007\u0004\u0000\u0000\u033b\u0372\u0003\\.\u0014\u033c"+
		"\u033d\n\u0011\u0000\u0000\u033d\u033e\u00058\u0000\u0000\u033e\u0372"+
		"\u0003\\.\u0012\u033f\u0341\n\u0010\u0000\u0000\u0340\u0342\u0005\u001d"+
		"\u0000\u0000\u0341\u0340\u0001\u0000\u0000\u0000\u0341\u0342\u0001\u0000"+
		"\u0000\u0000\u0342\u0343\u0001\u0000\u0000\u0000\u0343\u0344\u0005\u0015"+
		"\u0000\u0000\u0344\u0372\u0003\\.\u0011\u0345\u0346\n\u000e\u0000\u0000"+
		"\u0346\u0347\u0007\u0005\u0000\u0000\u0347\u0372\u0003\\.\u000f\u0348"+
		"\u0349\n\r\u0000\u0000\u0349\u034a\u0005\u001f\u0000\u0000\u034a\u0372"+
		"\u0003\\.\u000e\u034b\u034c\n\f\u0000\u0000\u034c\u034d\u0005 \u0000\u0000"+
		"\u034d\u0372\u0003\\.\r\u034e\u034f\n\u001a\u0000\u0000\u034f\u0350\u0005"+
		"6\u0000\u0000\u0350\u0372\u0003\u0080@\u0000\u0351\u0353\n\u0019\u0000"+
		"\u0000\u0352\u0354\u0005:\u0000\u0000\u0353\u0352\u0001\u0000\u0000\u0000"+
		"\u0353\u0354\u0001\u0000\u0000\u0000\u0354\u0356\u0001\u0000\u0000\u0000"+
		"\u0355\u0357\u0003\u0096K\u0000\u0356\u0355\u0001\u0000\u0000\u0000\u0356"+
		"\u0357\u0001\u0000\u0000\u0000\u0357\u0358\u0001\u0000\u0000\u0000\u0358"+
		"\u0361\u0005/\u0000\u0000\u0359\u035e\u0003\u0088D\u0000\u035a\u035b\u0005"+
		"7\u0000\u0000\u035b\u035d\u0003\u0088D\u0000\u035c\u035a\u0001\u0000\u0000"+
		"\u0000\u035d\u0360\u0001\u0000\u0000\u0000\u035e\u035c\u0001\u0000\u0000"+
		"\u0000\u035e\u035f\u0001\u0000\u0000\u0000\u035f\u0362\u0001\u0000\u0000"+
		"\u0000\u0360\u035e\u0001\u0000\u0000\u0000\u0361\u0359\u0001\u0000\u0000"+
		"\u0000\u0361\u0362\u0001\u0000\u0000\u0000\u0362\u0363\u0001\u0000\u0000"+
		"\u0000\u0363\u0372\u00050\u0000\u0000\u0364\u0365\n\u0018\u0000\u0000"+
		"\u0365\u0366\u00051\u0000\u0000\u0366\u0367\u0003\\.\u0000\u0367\u0368"+
		"\u00052\u0000\u0000\u0368\u0372\u0001\u0000\u0000\u0000\u0369\u036a\n"+
		"\u0017\u0000\u0000\u036a\u0372\u00059\u0000\u0000\u036b\u036c\n\u000f"+
		"\u0000\u0000\u036c\u036e\u0005\u0019\u0000\u0000\u036d\u036f\u0005\u001d"+
		"\u0000\u0000\u036e\u036d\u0001\u0000\u0000\u0000\u036e\u036f\u0001\u0000"+
		"\u0000\u0000\u036f\u0370\u0001\u0000\u0000\u0000\u0370\u0372\u0003|>\u0000"+
		"\u0371\u0333\u0001\u0000\u0000\u0000\u0371\u0336\u0001\u0000\u0000\u0000"+
		"\u0371\u0339\u0001\u0000\u0000\u0000\u0371\u033c\u0001\u0000\u0000\u0000"+
		"\u0371\u033f\u0001\u0000\u0000\u0000\u0371\u0345\u0001\u0000\u0000\u0000"+
		"\u0371\u0348\u0001\u0000\u0000\u0000\u0371\u034b\u0001\u0000\u0000\u0000"+
		"\u0371\u034e\u0001\u0000\u0000\u0000\u0371\u0351\u0001\u0000\u0000\u0000"+
		"\u0371\u0364\u0001\u0000\u0000\u0000\u0371\u0369\u0001\u0000\u0000\u0000"+
		"\u0371\u036b\u0001\u0000\u0000\u0000\u0372\u0375\u0001\u0000\u0000\u0000"+
		"\u0373\u0371\u0001\u0000\u0000\u0000\u0373\u0374\u0001\u0000\u0000\u0000"+
		"\u0374]\u0001\u0000\u0000\u0000\u0375\u0373\u0001\u0000\u0000\u0000\u0376"+
		"\u0377\u0005\u0018\u0000\u0000\u0377\u0378\u0003\\.\u0000\u0378\u037b"+
		"\u0003\u009eO\u0000\u0379\u037a\u0005\u001c\u0000\u0000\u037a\u037c\u0003"+
		"\u009eO\u0000\u037b\u0379\u0001\u0000\u0000\u0000\u037b\u037c\u0001\u0000"+
		"\u0000\u0000\u037c\u037e\u0001\u0000\u0000\u0000\u037d\u037f\u0005;\u0000"+
		"\u0000\u037e\u037d\u0001\u0000\u0000\u0000\u037e\u037f\u0001\u0000\u0000"+
		"\u0000\u037f_\u0001\u0000\u0000\u0000\u0380\u0381\u0005\u001a\u0000\u0000"+
		"\u0381\u0385\u0003\u009cN\u0000\u0382\u0384\u0003b1\u0000\u0383\u0382"+
		"\u0001\u0000\u0000\u0000\u0384\u0387\u0001\u0000\u0000\u0000\u0385\u0383"+
		"\u0001\u0000\u0000\u0000\u0385\u0386\u0001\u0000\u0000\u0000\u0386\u038a"+
		"\u0001\u0000\u0000\u0000\u0387\u0385\u0001\u0000\u0000\u0000\u0388\u0389"+
		"\u0005\u001c\u0000\u0000\u0389\u038b\u0003\u009cN\u0000\u038a\u0388\u0001"+
		"\u0000\u0000\u0000\u038a\u038b\u0001\u0000\u0000\u0000\u038b\u038d\u0001"+
		"\u0000\u0000\u0000\u038c\u038e\u0005;\u0000\u0000\u038d\u038c\u0001\u0000"+
		"\u0000\u0000\u038d\u038e\u0001\u0000\u0000\u0000\u038ea\u0001\u0000\u0000"+
		"\u0000\u038f\u0390\u0005\u001b\u0000\u0000\u0390\u0391\u0003|>\u0000\u0391"+
		"\u0392\u0003\u009cN\u0000\u0392c\u0001\u0000\u0000\u0000\u0393\u0395\u0003"+
		"\u008eG\u0000\u0394\u0396\u0005:\u0000\u0000\u0395\u0394\u0001\u0000\u0000"+
		"\u0000\u0395\u0396\u0001\u0000\u0000\u0000\u0396\u0399\u0001\u0000\u0000"+
		"\u0000\u0397\u0398\u0005?\u0000\u0000\u0398\u039a\u0003|>\u0000\u0399"+
		"\u0397\u0001\u0000\u0000\u0000\u0399\u039a\u0001\u0000\u0000\u0000\u039a"+
		"\u039b\u0001\u0000\u0000\u0000\u039b\u039c\u0003\u009cN\u0000\u039ce\u0001"+
		"\u0000\u0000\u0000\u039d\u039f\u0003\u008eG\u0000\u039e\u03a0\u0005:\u0000"+
		"\u0000\u039f\u039e\u0001\u0000\u0000\u0000\u039f\u03a0\u0001\u0000\u0000"+
		"\u0000\u03a0\u03a1\u0001\u0000\u0000\u0000\u03a1\u03a2\u0003Z-\u0000\u03a2"+
		"g\u0001\u0000\u0000\u0000\u03a3\u03a4\u0003|>\u0000\u03a4\u03a5\u0003"+
		"\u0098L\u0000\u03a5i\u0001\u0000\u0000\u0000\u03a6\u03af\u00051\u0000"+
		"\u0000\u03a7\u03ac\u0003\\.\u0000\u03a8\u03a9\u00057\u0000\u0000\u03a9"+
		"\u03ab\u0003\\.\u0000\u03aa\u03a8\u0001\u0000\u0000\u0000\u03ab\u03ae"+
		"\u0001\u0000\u0000\u0000\u03ac\u03aa\u0001\u0000\u0000\u0000\u03ac\u03ad"+
		"\u0001\u0000\u0000\u0000\u03ad\u03b0\u0001\u0000\u0000\u0000\u03ae\u03ac"+
		"\u0001\u0000\u0000\u0000\u03af\u03a7\u0001\u0000\u0000\u0000\u03af\u03b0"+
		"\u0001\u0000\u0000\u0000\u03b0\u03b1\u0001\u0000\u0000\u0000\u03b1\u03b2"+
		"\u00052\u0000\u0000\u03b2k\u0001\u0000\u0000\u0000\u03b3\u03b4\u0005\'"+
		"\u0000\u0000\u03b4\u03b5\u0003\\.\u0000\u03b5m\u0001\u0000\u0000\u0000"+
		"\u03b6\u03b7\u0005&\u0000\u0000\u03b7\u03b8\u0003\\.\u0000\u03b8o\u0001"+
		"\u0000\u0000\u0000\u03b9\u03bf\u0003r9\u0000\u03ba\u03bf\u0003t:\u0000"+
		"\u03bb\u03bf\u0003v;\u0000\u03bc\u03bf\u0003x<\u0000\u03bd\u03bf\u0003"+
		"z=\u0000\u03be\u03b9\u0001\u0000\u0000\u0000\u03be\u03ba\u0001\u0000\u0000"+
		"\u0000\u03be\u03bb\u0001\u0000\u0000\u0000\u03be\u03bc\u0001\u0000\u0000"+
		"\u0000\u03be\u03bd\u0001\u0000\u0000\u0000\u03bfq\u0001\u0000\u0000\u0000"+
		"\u03c0\u03c1\u0005]\u0000\u0000\u03c1s\u0001\u0000\u0000\u0000\u03c2\u03c3"+
		"\u0005a\u0000\u0000\u03c3u\u0001\u0000\u0000\u0000\u03c4\u03c5\u0005`"+
		"\u0000\u0000\u03c5w\u0001\u0000\u0000\u0000\u03c6\u03c7\u0005W\u0000\u0000"+
		"\u03c7y\u0001\u0000\u0000\u0000\u03c8\u03c9\u0005\u001e\u0000\u0000\u03c9"+
		"{\u0001\u0000\u0000\u0000\u03ca\u03cb\u0006>\uffff\uffff\u0000\u03cb\u03cc"+
		"\u0005/\u0000\u0000\u03cc\u03cd\u0003|>\u0000\u03cd\u03ce\u00050\u0000"+
		"\u0000\u03ce\u03dd\u0001\u0000\u0000\u0000\u03cf\u03dd\u0003\u0096K\u0000"+
		"\u03d0\u03d1\u00051\u0000\u0000\u03d1\u03d2\u0003|>\u0000\u03d2\u03d3"+
		"\u0005;\u0000\u0000\u03d3\u03d4\u0003t:\u0000\u03d4\u03d5\u00052\u0000"+
		"\u0000\u03d5\u03dd\u0001\u0000\u0000\u0000\u03d6\u03dd\u00032\u0019\u0000"+
		"\u03d7\u03dd\u00034\u001a\u0000\u03d8\u03dd\u00036\u001b\u0000\u03d9\u03dd"+
		"\u00038\u001c\u0000\u03da\u03dd\u0003~?\u0000\u03db\u03dd\u0003\u0080"+
		"@\u0000\u03dc\u03ca\u0001\u0000\u0000\u0000\u03dc\u03cf\u0001\u0000\u0000"+
		"\u0000\u03dc\u03d0\u0001\u0000\u0000\u0000\u03dc\u03d6\u0001\u0000\u0000"+
		"\u0000\u03dc\u03d7\u0001\u0000\u0000\u0000\u03dc\u03d8\u0001\u0000\u0000"+
		"\u0000\u03dc\u03d9\u0001\u0000\u0000\u0000\u03dc\u03da\u0001\u0000\u0000"+
		"\u0000\u03dc\u03db\u0001\u0000\u0000\u0000\u03dd\u03e7\u0001\u0000\u0000"+
		"\u0000\u03de\u03df\n\u000b\u0000\u0000\u03df\u03e6\u0003\u0096K\u0000"+
		"\u03e0\u03e1\n\n\u0000\u0000\u03e1\u03e2\u00056\u0000\u0000\u03e2\u03e6"+
		"\u0003\u0080@\u0000\u03e3\u03e4\n\u0003\u0000\u0000\u03e4\u03e6\u0005"+
		"9\u0000\u0000\u03e5\u03de\u0001\u0000\u0000\u0000\u03e5\u03e0\u0001\u0000"+
		"\u0000\u0000\u03e5\u03e3\u0001\u0000\u0000\u0000\u03e6\u03e9\u0001\u0000"+
		"\u0000\u0000\u03e7\u03e5\u0001\u0000\u0000\u0000\u03e7\u03e8\u0001\u0000"+
		"\u0000\u0000\u03e8}\u0001\u0000\u0000\u0000\u03e9\u03e7\u0001\u0000\u0000"+
		"\u0000\u03ea\u03ec\u0003\u0002\u0001\u0000\u03eb\u03ea\u0001\u0000\u0000"+
		"\u0000\u03eb\u03ec\u0001\u0000\u0000\u0000\u03ec\u03ed\u0001\u0000\u0000"+
		"\u0000\u03ed\u03ee\u0005Z\u0000\u0000\u03ee\u007f\u0001\u0000\u0000\u0000"+
		"\u03ef\u03f5\u0005X\u0000\u0000\u03f0\u03f5\u0005Y\u0000\u0000\u03f1\u03f5"+
		"\u0005\\\u0000\u0000\u03f2\u03f5\u0005[\u0000\u0000\u03f3\u03f5\u0003"+
		"\u00a0P\u0000\u03f4\u03ef\u0001\u0000\u0000\u0000\u03f4\u03f0\u0001\u0000"+
		"\u0000\u0000\u03f4\u03f1\u0001\u0000\u0000\u0000\u03f4\u03f2\u0001\u0000"+
		"\u0000\u0000\u03f4\u03f3\u0001\u0000\u0000\u0000\u03f5\u0081\u0001\u0000"+
		"\u0000\u0000\u03f6\u03f8\u0003\u0002\u0001\u0000\u03f7\u03f6\u0001\u0000"+
		"\u0000\u0000\u03f7\u03f8\u0001\u0000\u0000\u0000\u03f8\u03f9\u0001\u0000"+
		"\u0000\u0000\u03f9\u03fb\u0003\u0080@\u0000\u03fa\u03fc\u00059\u0000\u0000"+
		"\u03fb\u03fa\u0001\u0000\u0000\u0000\u03fb\u03fc\u0001\u0000\u0000\u0000"+
		"\u03fc\u03ff\u0001\u0000\u0000\u0000\u03fd\u03fe\u0005<\u0000\u0000\u03fe"+
		"\u0400\u0003|>\u0000\u03ff\u03fd\u0001\u0000\u0000\u0000\u03ff\u0400\u0001"+
		"\u0000\u0000\u0000\u0400\u0083\u0001\u0000\u0000\u0000\u0401\u0404\u0003"+
		"\u0080@\u0000\u0402\u0403\u0005<\u0000\u0000\u0403\u0405\u0003\\.\u0000"+
		"\u0404\u0402\u0001\u0000\u0000\u0000\u0404\u0405\u0001\u0000\u0000\u0000"+
		"\u0405\u0085\u0001\u0000\u0000\u0000\u0406\u0407\u0003\u0080@\u0000\u0407"+
		"\u0408\u0005E\u0000\u0000\u0408\u0409\u0003\\.\u0000\u0409\u0087\u0001"+
		"\u0000\u0000\u0000\u040a\u040d\u0003\\.\u0000\u040b\u040d\u0003\u0086"+
		"C\u0000\u040c\u040a\u0001\u0000\u0000\u0000\u040c\u040b\u0001\u0000\u0000"+
		"\u0000\u040d\u0089\u0001\u0000\u0000\u0000\u040e\u0413\u0003\u0080@\u0000"+
		"\u040f\u0410\u00057\u0000\u0000\u0410\u0412\u0003\u0080@\u0000\u0411\u040f"+
		"\u0001\u0000\u0000\u0000\u0412\u0415\u0001\u0000\u0000\u0000\u0413\u0411"+
		"\u0001\u0000\u0000\u0000\u0413\u0414\u0001\u0000\u0000\u0000\u0414\u008b"+
		"\u0001\u0000\u0000\u0000\u0415\u0413\u0001\u0000\u0000\u0000\u0416\u041f"+
		"\u0005/\u0000\u0000\u0417\u041c\u0003\u0082A\u0000\u0418\u0419\u00057"+
		"\u0000\u0000\u0419\u041b\u0003\u0082A\u0000\u041a\u0418\u0001\u0000\u0000"+
		"\u0000\u041b\u041e\u0001\u0000\u0000\u0000\u041c\u041a\u0001\u0000\u0000"+
		"\u0000\u041c\u041d\u0001\u0000\u0000\u0000\u041d\u0420\u0001\u0000\u0000"+
		"\u0000\u041e\u041c\u0001\u0000\u0000\u0000\u041f\u0417\u0001\u0000\u0000"+
		"\u0000\u041f\u0420\u0001\u0000\u0000\u0000\u0420\u0421\u0001\u0000\u0000"+
		"\u0000\u0421\u0422\u00050\u0000\u0000\u0422\u008d\u0001\u0000\u0000\u0000"+
		"\u0423\u042c\u00055\u0000\u0000\u0424\u0429\u0003\u0082A\u0000\u0425\u0426"+
		"\u00057\u0000\u0000\u0426\u0428\u0003\u0082A\u0000\u0427\u0425\u0001\u0000"+
		"\u0000\u0000\u0428\u042b\u0001\u0000\u0000\u0000\u0429\u0427\u0001\u0000"+
		"\u0000\u0000\u0429\u042a\u0001\u0000\u0000\u0000\u042a\u042d\u0001\u0000"+
		"\u0000\u0000\u042b\u0429\u0001\u0000\u0000\u0000\u042c\u0424\u0001\u0000"+
		"\u0000\u0000\u042c\u042d\u0001\u0000\u0000\u0000\u042d\u042e\u0001\u0000"+
		"\u0000\u0000\u042e\u042f\u00055\u0000\u0000\u042f\u008f\u0001\u0000\u0000"+
		"\u0000\u0430\u0431\u0005/\u0000\u0000\u0431\u043a\u00051\u0000\u0000\u0432"+
		"\u0437\u0003\u0082A\u0000\u0433\u0434\u00057\u0000\u0000\u0434\u0436\u0003"+
		"\u0082A\u0000\u0435\u0433\u0001\u0000\u0000\u0000\u0436\u0439\u0001\u0000"+
		"\u0000\u0000\u0437\u0435\u0001\u0000\u0000\u0000\u0437\u0438\u0001\u0000"+
		"\u0000\u0000\u0438\u043b\u0001\u0000\u0000\u0000\u0439\u0437\u0001\u0000"+
		"\u0000\u0000\u043a\u0432\u0001\u0000\u0000\u0000\u043a\u043b\u0001\u0000"+
		"\u0000\u0000\u043b\u043c\u0001\u0000\u0000\u0000\u043c\u043d\u00052\u0000"+
		"\u0000\u043d\u043e\u00050\u0000\u0000\u043e\u0091\u0001\u0000\u0000\u0000"+
		"\u043f\u0448\u00053\u0000\u0000\u0440\u0445\u0003\u0082A\u0000\u0441\u0442"+
		"\u00057\u0000\u0000\u0442\u0444\u0003\u0082A\u0000\u0443\u0441\u0001\u0000"+
		"\u0000\u0000\u0444\u0447\u0001\u0000\u0000\u0000\u0445\u0443\u0001\u0000"+
		"\u0000\u0000\u0445\u0446\u0001\u0000\u0000\u0000\u0446\u0449\u0001\u0000"+
		"\u0000\u0000\u0447\u0445\u0001\u0000\u0000\u0000\u0448\u0440\u0001\u0000"+
		"\u0000\u0000\u0448\u0449\u0001\u0000\u0000\u0000\u0449\u044b\u0001\u0000"+
		"\u0000\u0000\u044a\u044c\u00057\u0000\u0000\u044b\u044a\u0001\u0000\u0000"+
		"\u0000\u044b\u044c\u0001\u0000\u0000\u0000\u044c\u044d\u0001\u0000\u0000"+
		"\u0000\u044d\u044e\u00054\u0000\u0000\u044e\u0093\u0001\u0000\u0000\u0000"+
		"\u044f\u0458\u00051\u0000\u0000\u0450\u0455\u0003~?\u0000\u0451\u0452"+
		"\u00057\u0000\u0000\u0452\u0454\u0003~?\u0000\u0453\u0451\u0001\u0000"+
		"\u0000\u0000\u0454\u0457\u0001\u0000\u0000\u0000\u0455\u0453\u0001\u0000"+
		"\u0000\u0000\u0455\u0456\u0001\u0000\u0000\u0000\u0456\u0459\u0001\u0000"+
		"\u0000\u0000\u0457\u0455\u0001\u0000\u0000\u0000\u0458\u0450\u0001\u0000"+
		"\u0000\u0000\u0458\u0459\u0001\u0000\u0000\u0000\u0459\u045a\u0001\u0000"+
		"\u0000\u0000\u045a\u045b\u00052\u0000\u0000\u045b\u0095\u0001\u0000\u0000"+
		"\u0000\u045c\u0465\u00051\u0000\u0000\u045d\u0462\u0003|>\u0000\u045e"+
		"\u045f\u00057\u0000\u0000\u045f\u0461\u0003|>\u0000\u0460\u045e\u0001"+
		"\u0000\u0000\u0000\u0461\u0464\u0001\u0000\u0000\u0000\u0462\u0460\u0001"+
		"\u0000\u0000\u0000\u0462\u0463\u0001\u0000\u0000\u0000\u0463\u0466\u0001"+
		"\u0000\u0000\u0000\u0464\u0462\u0001\u0000\u0000\u0000\u0465\u045d\u0001"+
		"\u0000\u0000\u0000\u0465\u0466\u0001\u0000\u0000\u0000\u0466\u0467\u0001"+
		"\u0000\u0000\u0000\u0467\u0468\u00052\u0000\u0000\u0468\u0097\u0001\u0000"+
		"\u0000\u0000\u0469\u0472\u00053\u0000\u0000\u046a\u046f\u0003\u0084B\u0000"+
		"\u046b\u046c\u00057\u0000\u0000\u046c\u046e\u0003\u0084B\u0000\u046d\u046b"+
		"\u0001\u0000\u0000\u0000\u046e\u0471\u0001\u0000\u0000\u0000\u046f\u046d"+
		"\u0001\u0000\u0000\u0000\u046f\u0470\u0001\u0000\u0000\u0000\u0470\u0473"+
		"\u0001\u0000\u0000\u0000\u0471\u046f\u0001\u0000\u0000\u0000\u0472\u046a"+
		"\u0001\u0000\u0000\u0000\u0472\u0473\u0001\u0000\u0000\u0000\u0473\u0475"+
		"\u0001\u0000\u0000\u0000\u0474\u0476\u00057\u0000\u0000\u0475\u0474\u0001"+
		"\u0000\u0000\u0000\u0475\u0476\u0001\u0000\u0000\u0000\u0476\u0477\u0001"+
		"\u0000\u0000\u0000\u0477\u0478\u00054\u0000\u0000\u0478\u0099\u0001\u0000"+
		"\u0000\u0000\u0479\u047e\u0003|>\u0000\u047a\u047b\u00057\u0000\u0000"+
		"\u047b\u047d\u0003|>\u0000\u047c\u047a\u0001\u0000\u0000\u0000\u047d\u0480"+
		"\u0001\u0000\u0000\u0000\u047e\u047c\u0001\u0000\u0000\u0000\u047e\u047f"+
		"\u0001\u0000\u0000\u0000\u047f\u009b\u0001\u0000\u0000\u0000\u0480\u047e"+
		"\u0001\u0000\u0000\u0000\u0481\u0485\u00053\u0000\u0000\u0482\u0484\u0003"+
		"\u0004\u0002\u0000\u0483\u0482\u0001\u0000\u0000\u0000\u0484\u0487\u0001"+
		"\u0000\u0000\u0000\u0485\u0483\u0001\u0000\u0000\u0000\u0485\u0486\u0001"+
		"\u0000\u0000\u0000\u0486\u0488\u0001\u0000\u0000\u0000\u0487\u0485\u0001"+
		"\u0000\u0000\u0000\u0488\u0489\u00054\u0000\u0000\u0489\u009d\u0001\u0000"+
		"\u0000\u0000\u048a\u048d\u0003\u009cN\u0000\u048b\u048d\u0003\\.\u0000"+
		"\u048c\u048a\u0001\u0000\u0000\u0000\u048c\u048b\u0001\u0000\u0000\u0000"+
		"\u048d\u009f\u0001\u0000\u0000\u0000\u048e\u048f\u0007\u0006\u0000\u0000"+
		"\u048f\u00a1\u0001\u0000\u0000\u0000\u00b7\u00a5\u00bd\u00c4\u00c9\u00ce"+
		"\u00d5\u00de\u00e1\u00eb\u00ee\u00f1\u00f6\u00fc\u0102\u0105\u010b\u0111"+
		"\u0114\u011a\u0120\u0122\u0125\u0128\u012e\u0134\u0137\u013a\u0140\u0146"+
		"\u0149\u014c\u0152\u0158\u015a\u0160\u0168\u0171\u0175\u0179\u017d\u0181"+
		"\u0189\u0190\u0197\u0199\u019e\u01a3\u01a8\u01bb\u01be\u01c1\u01c7\u01cb"+
		"\u01cf\u01d2\u01d5\u01db\u01df\u01e2\u01e5\u01ea\u01ee\u01f1\u01f4\u01f9"+
		"\u01fd\u01ff\u0202\u0205\u020a\u0210\u0213\u0216\u021a\u021e\u0221\u0224"+
		"\u0229\u022d\u0231\u0238\u023c\u0242\u0248\u0250\u0253\u0256\u0259\u025e"+
		"\u0263\u0266\u0269\u026e\u0271\u0276\u027a\u027d\u0281\u0286\u028a\u028d"+
		"\u0292\u0297\u029b\u029e\u02a3\u02a8\u02ac\u02af\u02b4\u02b9\u02bd\u02c0"+
		"\u02c5\u02ca\u02ce\u02d1\u02d4\u02da\u02dd\u02e0\u02e6\u02e9\u02f0\u02f5"+
		"\u02f9\u02fc\u0302\u0305\u030e\u0311\u0318\u031c\u0331\u0341\u0353\u0356"+
		"\u035e\u0361\u036e\u0371\u0373\u037b\u037e\u0385\u038a\u038d\u0395\u0399"+
		"\u039f\u03ac\u03af\u03be\u03dc\u03e5\u03e7\u03eb\u03f4\u03f7\u03fb\u03ff"+
		"\u0404\u040c\u0413\u041c\u041f\u0429\u042c\u0437\u043a\u0445\u0448\u044b"+
		"\u0455\u0458\u0462\u0465\u046f\u0472\u0475\u047e\u0485\u048c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
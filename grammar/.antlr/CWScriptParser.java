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
		DEBUG=1, CONTRACT=2, INTERFACE=3, IMPORT=4, IMPLEMENTS=5, EXTENDS=6, ERROR=7, 
		EVENT=8, DEFER=9, INSTANTIATE_NOW=10, EXEC_NOW=11, QUERY_NOW=12, DELEGATE_EXEC=13, 
		INSTANTIATE=14, EXEC=15, QUERY=16, REPLY=17, FOR=18, IN=19, FROM=20, STATE=21, 
		IF=22, IS=23, TRY=24, CATCH=25, ELSE=26, NOT=27, NONE=28, MUT=29, AND=30, 
		OR=31, TRUE=32, FALSE=33, FN=34, LET=35, CONST=36, FAIL=37, RETURN=38, 
		STRUCT=39, ENUM=40, TYPE=41, EMIT=42, AS=43, TILDE=44, LPAREN=45, RPAREN=46, 
		LBRACK=47, RBRACK=48, LBRACE=49, RBRACE=50, DOT=51, COMMA=52, D_QUEST=53, 
		QUEST=54, BANG=55, SEMI=56, COLON=57, D_COLON=58, HASH=59, AT=60, AMP=61, 
		ARROW=62, FAT_ARROW=63, BAR=64, S_QUOTE=65, D_QUOTE=66, EQ=67, EQ_EQ=68, 
		NEQ=69, PLUS=70, PLUS_EQ=71, MINUS=72, MINUS_EQ=73, MUL=74, MUL_EQ=75, 
		DIV=76, DIV_EQ=77, MOD=78, MOD_EQ=79, LT=80, LT_EQ=81, GT=82, GT_EQ=83, 
		POW=84, Ident=85, StringLiteral=86, IntLiteral=87, DecLiteral=88, BoolLiteral=89, 
		CWSPEC_LINE_COMMENT=90, CWSPEC_BLOCK_COMMENT=91, LINE_COMMENT=92, BLOCK_COMMENT=93, 
		WS=94;
	public static final int
		RULE_sourceFile = 0, RULE_topLevelStmt = 1, RULE_contractDefn = 2, RULE_interfaceDefn = 3, 
		RULE_contractBlock = 4, RULE_importStmt = 5, RULE_contractItem = 6, RULE_param = 7, 
		RULE_paramList = 8, RULE_fnParams = 9, RULE_structDefn_fn = 10, RULE_errorDefn = 11, 
		RULE_errorDefnBlock = 12, RULE_eventDefn = 13, RULE_eventDefnBlock = 14, 
		RULE_stateDefnBlock = 15, RULE_stateDefn = 16, RULE_mapKeyDefn = 17, RULE_instantiateDefn = 18, 
		RULE_instantiateDecl = 19, RULE_execDefn = 20, RULE_execDecl = 21, RULE_queryDefn = 22, 
		RULE_queryDecl = 23, RULE_replyDefn = 24, RULE_enumDefn = 25, RULE_variant_ = 26, 
		RULE_variant_struct = 27, RULE_variant_unit = 28, RULE_typeExpr = 29, 
		RULE_typeArg = 30, RULE_fnType = 31, RULE_typeLens = 32, RULE_typePath = 33, 
		RULE_typeVariant = 34, RULE_typeDefn = 35, RULE_structDefn = 36, RULE_typeAliasDefn = 37, 
		RULE_fnDefn = 38, RULE_annot = 39, RULE_callOptions = 40, RULE_stmt = 41, 
		RULE_debugStmt_ = 42, RULE_letStmt_ = 43, RULE_constStmt_ = 44, RULE_identBinding_ = 45, 
		RULE_let_binding = 46, RULE_assignStmt_ = 47, RULE_assignLHS = 48, RULE_expr = 49, 
		RULE_closureParams = 50, RULE_closure = 51, RULE_block = 52, RULE_tryCatchElseExpr_ = 53, 
		RULE_catchClause = 54, RULE_arg = 55, RULE_memberVal = 56, RULE_literal = 57, 
		RULE_ifStmt_ = 58, RULE_elseClause = 59, RULE_forStmt_ = 60, RULE_ident = 61, 
		RULE_reservedKeyword = 62;
	private static String[] makeRuleNames() {
		return new String[] {
			"sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "contractBlock", 
			"importStmt", "contractItem", "param", "paramList", "fnParams", "structDefn_fn", 
			"errorDefn", "errorDefnBlock", "eventDefn", "eventDefnBlock", "stateDefnBlock", 
			"stateDefn", "mapKeyDefn", "instantiateDefn", "instantiateDecl", "execDefn", 
			"execDecl", "queryDefn", "queryDecl", "replyDefn", "enumDefn", "variant_", 
			"variant_struct", "variant_unit", "typeExpr", "typeArg", "fnType", "typeLens", 
			"typePath", "typeVariant", "typeDefn", "structDefn", "typeAliasDefn", 
			"fnDefn", "annot", "callOptions", "stmt", "debugStmt_", "letStmt_", "constStmt_", 
			"identBinding_", "let_binding", "assignStmt_", "assignLHS", "expr", "closureParams", 
			"closure", "block", "tryCatchElseExpr_", "catchClause", "arg", "memberVal", 
			"literal", "ifStmt_", "elseClause", "forStmt_", "ident", "reservedKeyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
			"'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", "'exec!'", 
			"'query!'", "'delegate_exec!'", "'instantiate'", "'exec'", "'query'", 
			"'reply'", "'for'", "'in'", "'from'", "'state'", "'if'", "'is'", "'try'", 
			"'catch'", "'else'", "'not'", "'None'", "'mut'", "'and'", "'or'", "'true'", 
			"'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", "'struct'", 
			"'enum'", "'type'", "'emit'", "'as'", "'~'", "'('", "')'", "'['", "']'", 
			"'{'", "'}'", "'.'", "','", "'??'", "'?'", "'!'", "';'", "':'", "'::'", 
			"'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", "'''", "'\"'", "'='", "'=='", 
			"'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", "'/'", "'/='", "'%'", 
			"'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
			"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
			"DELEGATE_EXEC", "INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", 
			"FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", 
			"AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", 
			"STRUCT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", "LPAREN", "RPAREN", 
			"LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", "QUEST", 
			"BANG", "SEMI", "COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", 
			"BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", "PLUS_EQ", 
			"MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", "MOD_EQ", 
			"LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "StringLiteral", "IntLiteral", 
			"DecLiteral", "BoolLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
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
		public TerminalNode EOF() { return getToken(CWScriptParser.EOF, 0); }
		public List<TopLevelStmtContext> topLevelStmt() {
			return getRuleContexts(TopLevelStmtContext.class);
		}
		public TopLevelStmtContext topLevelStmt(int i) {
			return getRuleContext(TopLevelStmtContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(CWScriptParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(CWScriptParser.SEMI, i);
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
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1261755563528683518L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65077249L) != 0)) {
				{
				setState(128);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DEBUG:
				case CONTRACT:
				case INTERFACE:
				case IMPORT:
				case IMPLEMENTS:
				case EXTENDS:
				case ERROR:
				case EVENT:
				case DEFER:
				case INSTANTIATE_NOW:
				case EXEC_NOW:
				case QUERY_NOW:
				case DELEGATE_EXEC:
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
				case MUT:
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
				case ENUM:
				case TYPE:
				case EMIT:
				case LPAREN:
				case LBRACK:
				case LBRACE:
				case BANG:
				case AT:
				case BAR:
				case LT:
				case Ident:
				case StringLiteral:
				case IntLiteral:
				case DecLiteral:
				case BoolLiteral:
					{
					setState(126);
					topLevelStmt();
					}
					break;
				case SEMI:
					{
					setState(127);
					match(SEMI);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(133);
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
	public static class TopLevelStmtContext extends ParserRuleContext {
		public ImportStmtContext importStmt() {
			return getRuleContext(ImportStmtContext.class,0);
		}
		public ContractDefnContext contractDefn() {
			return getRuleContext(ContractDefnContext.class,0);
		}
		public InterfaceDefnContext interfaceDefn() {
			return getRuleContext(InterfaceDefnContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public TopLevelStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_topLevelStmt; }
	}

	public final TopLevelStmtContext topLevelStmt() throws RecognitionException {
		TopLevelStmtContext _localctx = new TopLevelStmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_topLevelStmt);
		try {
			setState(139);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(135);
				importStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(136);
				contractDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(137);
				interfaceDefn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(138);
				stmt();
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
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public IdentContext name;
		public TypePathContext base;
		public TypePathContext typePath;
		public List<TypePathContext> interfaces = new ArrayList<TypePathContext>();
		public ContractBlockContext body;
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public ContractBlockContext contractBlock() {
			return getRuleContext(ContractBlockContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public List<TypePathContext> typePath() {
			return getRuleContexts(TypePathContext.class);
		}
		public TypePathContext typePath(int i) {
			return getRuleContext(TypePathContext.class,i);
		}
		public ContractDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractDefn; }
	}

	public final ContractDefnContext contractDefn() throws RecognitionException {
		ContractDefnContext _localctx = new ContractDefnContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT) {
				{
				{
				setState(141);
				((ContractDefnContext)_localctx).annot = annot();
				((ContractDefnContext)_localctx).ann.add(((ContractDefnContext)_localctx).annot);
				}
				}
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(147);
			match(CONTRACT);
			{
			setState(148);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(149);
				match(EXTENDS);
				{
				setState(150);
				((ContractDefnContext)_localctx).base = typePath();
				}
				}
			}

			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(153);
				match(IMPLEMENTS);
				{
				setState(154);
				((ContractDefnContext)_localctx).typePath = typePath();
				((ContractDefnContext)_localctx).interfaces.add(((ContractDefnContext)_localctx).typePath);
				}
				}
			}

			{
			setState(157);
			((ContractDefnContext)_localctx).body = contractBlock();
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
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public IdentContext name;
		public TypePathContext base;
		public ContractBlockContext body;
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public ContractBlockContext contractBlock() {
			return getRuleContext(ContractBlockContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public InterfaceDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDefn; }
	}

	public final InterfaceDefnContext interfaceDefn() throws RecognitionException {
		InterfaceDefnContext _localctx = new InterfaceDefnContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_interfaceDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT) {
				{
				{
				setState(159);
				((InterfaceDefnContext)_localctx).annot = annot();
				((InterfaceDefnContext)_localctx).ann.add(((InterfaceDefnContext)_localctx).annot);
				}
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(165);
			match(INTERFACE);
			{
			setState(166);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(167);
				match(EXTENDS);
				{
				setState(168);
				((InterfaceDefnContext)_localctx).base = typePath();
				}
				}
			}

			{
			setState(171);
			((InterfaceDefnContext)_localctx).body = contractBlock();
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
	public static class ContractBlockContext extends ParserRuleContext {
		public ContractItemContext contractItem;
		public List<ContractItemContext> body = new ArrayList<ContractItemContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ContractItemContext> contractItem() {
			return getRuleContexts(ContractItemContext.class);
		}
		public ContractItemContext contractItem(int i) {
			return getRuleContext(ContractItemContext.class,i);
		}
		public ContractBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractBlock; }
	}

	public final ContractBlockContext contractBlock() throws RecognitionException {
		ContractBlockContext _localctx = new ContractBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_contractBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(LBRACE);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 576464686495793536L) != 0)) {
				{
				{
				setState(174);
				((ContractBlockContext)_localctx).contractItem = contractItem();
				((ContractBlockContext)_localctx).body.add(((ContractBlockContext)_localctx).contractItem);
				}
				}
				setState(179);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(180);
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
	public static class ImportStmtContext extends ParserRuleContext {
		public ImportStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStmt; }
	 
		public ImportStmtContext() { }
		public void copyFrom(ImportStmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImportItemsStmtContext extends ImportStmtContext {
		public IdentContext ident;
		public List<IdentContext> items = new ArrayList<IdentContext>();
		public Token src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
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
		public ImportItemsStmtContext(ImportStmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImportAllStmtContext extends ImportStmtContext {
		public Token src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public ImportAllStmtContext(ImportStmtContext ctx) { copyFrom(ctx); }
	}

	public final ImportStmtContext importStmt() throws RecognitionException {
		ImportStmtContext _localctx = new ImportStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_importStmt);
		int _la;
		try {
			setState(201);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(182);
				match(IMPORT);
				setState(183);
				match(MUL);
				setState(184);
				match(FROM);
				{
				setState(185);
				((ImportAllStmtContext)_localctx).src = match(StringLiteral);
				}
				}
				break;
			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(186);
				match(IMPORT);
				{
				{
				setState(187);
				match(LBRACE);
				{
				setState(188);
				((ImportItemsStmtContext)_localctx).ident = ident();
				((ImportItemsStmtContext)_localctx).items.add(((ImportItemsStmtContext)_localctx).ident);
				}
				setState(193);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(189);
					match(COMMA);
					setState(190);
					((ImportItemsStmtContext)_localctx).ident = ident();
					((ImportItemsStmtContext)_localctx).items.add(((ImportItemsStmtContext)_localctx).ident);
					}
					}
					setState(195);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(196);
				match(RBRACE);
				}
				}
				setState(198);
				match(FROM);
				{
				setState(199);
				((ImportItemsStmtContext)_localctx).src = match(StringLiteral);
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
	public static class ContractItemContext extends ParserRuleContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public ConstStmt_Context constStmt_() {
			return getRuleContext(ConstStmt_Context.class,0);
		}
		public FnDefnContext fnDefn() {
			return getRuleContext(FnDefnContext.class,0);
		}
		public ErrorDefnContext errorDefn() {
			return getRuleContext(ErrorDefnContext.class,0);
		}
		public ErrorDefnBlockContext errorDefnBlock() {
			return getRuleContext(ErrorDefnBlockContext.class,0);
		}
		public EventDefnContext eventDefn() {
			return getRuleContext(EventDefnContext.class,0);
		}
		public EventDefnBlockContext eventDefnBlock() {
			return getRuleContext(EventDefnBlockContext.class,0);
		}
		public StateDefnBlockContext stateDefnBlock() {
			return getRuleContext(StateDefnBlockContext.class,0);
		}
		public InstantiateDefnContext instantiateDefn() {
			return getRuleContext(InstantiateDefnContext.class,0);
		}
		public InstantiateDeclContext instantiateDecl() {
			return getRuleContext(InstantiateDeclContext.class,0);
		}
		public ExecDefnContext execDefn() {
			return getRuleContext(ExecDefnContext.class,0);
		}
		public ExecDeclContext execDecl() {
			return getRuleContext(ExecDeclContext.class,0);
		}
		public QueryDefnContext queryDefn() {
			return getRuleContext(QueryDefnContext.class,0);
		}
		public QueryDeclContext queryDecl() {
			return getRuleContext(QueryDeclContext.class,0);
		}
		public ReplyDefnContext replyDefn() {
			return getRuleContext(ReplyDefnContext.class,0);
		}
		public ContractItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractItem; }
	}

	public final ContractItemContext contractItem() throws RecognitionException {
		ContractItemContext _localctx = new ContractItemContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_contractItem);
		try {
			setState(219);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(203);
				typeDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(204);
				constStmt_();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(205);
				fnDefn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(206);
				errorDefn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(207);
				errorDefnBlock();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(208);
				eventDefn();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(209);
				eventDefnBlock();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(210);
				stateDefnBlock();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(211);
				instantiateDefn();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(212);
				instantiateDecl();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(213);
				execDefn();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(214);
				execDecl();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(215);
				queryDefn();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(216);
				queryDefn();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(217);
				queryDecl();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(218);
				replyDefn();
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
	public static class ParamContext extends ParserRuleContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public IdentContext name;
		public Token optional;
		public TypeExprContext ty;
		public ExprContext default_;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AT) {
				{
				{
				setState(221);
				((ParamContext)_localctx).annot = annot();
				((ParamContext)_localctx).ann.add(((ParamContext)_localctx).annot);
				}
				}
				setState(226);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			{
			setState(227);
			((ParamContext)_localctx).name = ident();
			}
			setState(229);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(228);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(231);
				match(COLON);
				{
				setState(232);
				((ParamContext)_localctx).ty = typeExpr(0);
				}
				setState(235);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(233);
					match(EQ);
					setState(234);
					((ParamContext)_localctx).default_ = expr(0);
					}
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
	public static class ParamListContext extends ParserRuleContext {
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
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			param();
			setState(244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(240);
				match(COMMA);
				setState(241);
				param();
				}
				}
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
	public static class FnParamsContext extends ParserRuleContext {
		public ParamContext param;
		public List<ParamContext> params = new ArrayList<ParamContext>();
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
		public FnParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnParams; }
	}

	public final FnParamsContext fnParams() throws RecognitionException {
		FnParamsContext _localctx = new FnParamsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_fnParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(LPAREN);
			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1152929818665271804L) != 0) || _la==Ident) {
				{
				{
				setState(248);
				((FnParamsContext)_localctx).param = param();
				((FnParamsContext)_localctx).params.add(((FnParamsContext)_localctx).param);
				}
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(249);
					match(COMMA);
					setState(250);
					((FnParamsContext)_localctx).param = param();
					((FnParamsContext)_localctx).params.add(((FnParamsContext)_localctx).param);
					}
					}
					setState(255);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(258);
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
	public static class StructDefn_fnContext extends ParserRuleContext {
		public IdentContext name;
		public FnParamsContext params;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public StructDefn_fnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn_fn; }
	}

	public final StructDefn_fnContext structDefn_fn() throws RecognitionException {
		StructDefn_fnContext _localctx = new StructDefn_fnContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_structDefn_fn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(260);
			((StructDefn_fnContext)_localctx).name = ident();
			}
			{
			setState(261);
			((StructDefn_fnContext)_localctx).params = fnParams();
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
		public StructDefn_fnContext defn;
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public StructDefn_fnContext structDefn_fn() {
			return getRuleContext(StructDefn_fnContext.class,0);
		}
		public ErrorDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefn; }
	}

	public final ErrorDefnContext errorDefn() throws RecognitionException {
		ErrorDefnContext _localctx = new ErrorDefnContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_errorDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(263);
			match(ERROR);
			setState(264);
			((ErrorDefnContext)_localctx).defn = structDefn_fn();
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
	public static class ErrorDefnBlockContext extends ParserRuleContext {
		public StructDefn_fnContext structDefn_fn;
		public List<StructDefn_fnContext> defns = new ArrayList<StructDefn_fnContext>();
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StructDefn_fnContext> structDefn_fn() {
			return getRuleContexts(StructDefn_fnContext.class);
		}
		public StructDefn_fnContext structDefn_fn(int i) {
			return getRuleContext(StructDefn_fnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ErrorDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefnBlock; }
	}

	public final ErrorDefnBlockContext errorDefnBlock() throws RecognitionException {
		ErrorDefnBlockContext _localctx = new ErrorDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_errorDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(ERROR);
			setState(267);
			match(LBRACE);
			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
				{
				{
				setState(268);
				((ErrorDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
				((ErrorDefnBlockContext)_localctx).defns.add(((ErrorDefnBlockContext)_localctx).structDefn_fn);
				}
				setState(273);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(269);
						match(COMMA);
						setState(270);
						((ErrorDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
						((ErrorDefnBlockContext)_localctx).defns.add(((ErrorDefnBlockContext)_localctx).structDefn_fn);
						}
						} 
					}
					setState(275);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
				}
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(276);
					match(COMMA);
					}
				}

				}
			}

			setState(281);
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
	public static class EventDefnContext extends ParserRuleContext {
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public StructDefn_fnContext structDefn_fn() {
			return getRuleContext(StructDefn_fnContext.class,0);
		}
		public EventDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefn; }
	}

	public final EventDefnContext eventDefn() throws RecognitionException {
		EventDefnContext _localctx = new EventDefnContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_eventDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(EVENT);
			setState(284);
			structDefn_fn();
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
	public static class EventDefnBlockContext extends ParserRuleContext {
		public StructDefn_fnContext structDefn_fn;
		public List<StructDefn_fnContext> defns = new ArrayList<StructDefn_fnContext>();
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StructDefn_fnContext> structDefn_fn() {
			return getRuleContexts(StructDefn_fnContext.class);
		}
		public StructDefn_fnContext structDefn_fn(int i) {
			return getRuleContext(StructDefn_fnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EventDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefnBlock; }
	}

	public final EventDefnBlockContext eventDefnBlock() throws RecognitionException {
		EventDefnBlockContext _localctx = new EventDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_eventDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(EVENT);
			setState(287);
			match(LBRACE);
			setState(299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
				{
				{
				setState(288);
				((EventDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
				((EventDefnBlockContext)_localctx).defns.add(((EventDefnBlockContext)_localctx).structDefn_fn);
				}
				setState(293);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(289);
						match(COMMA);
						setState(290);
						((EventDefnBlockContext)_localctx).structDefn_fn = structDefn_fn();
						((EventDefnBlockContext)_localctx).defns.add(((EventDefnBlockContext)_localctx).structDefn_fn);
						}
						} 
					}
					setState(295);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				}
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(296);
					match(COMMA);
					}
				}

				}
			}

			setState(301);
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
	public static class StateDefnBlockContext extends ParserRuleContext {
		public StateDefnContext stateDefn;
		public List<StateDefnContext> defns = new ArrayList<StateDefnContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StateDefnContext> stateDefn() {
			return getRuleContexts(StateDefnContext.class);
		}
		public StateDefnContext stateDefn(int i) {
			return getRuleContext(StateDefnContext.class,i);
		}
		public StateDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefnBlock; }
	}

	public final StateDefnBlockContext stateDefnBlock() throws RecognitionException {
		StateDefnBlockContext _localctx = new StateDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_stateDefnBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(STATE);
			setState(304);
			match(LBRACE);
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
				{
				{
				setState(305);
				((StateDefnBlockContext)_localctx).stateDefn = stateDefn();
				((StateDefnBlockContext)_localctx).defns.add(((StateDefnBlockContext)_localctx).stateDefn);
				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(311);
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
	public static class StateDefnContext extends ParserRuleContext {
		public StateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefn; }
	 
		public StateDefnContext() { }
		public void copyFrom(StateDefnContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StateDefn_MapContext extends StateDefnContext {
		public IdentContext name;
		public MapKeyDefnContext mapKeyDefn;
		public List<MapKeyDefnContext> mapKeys = new ArrayList<MapKeyDefnContext>();
		public TypeExprContext ty;
		public ExprContext default_;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<MapKeyDefnContext> mapKeyDefn() {
			return getRuleContexts(MapKeyDefnContext.class);
		}
		public MapKeyDefnContext mapKeyDefn(int i) {
			return getRuleContext(MapKeyDefnContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StateDefn_MapContext(StateDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StateDefn_ItemContext extends StateDefnContext {
		public IdentContext name;
		public TypeExprContext ty;
		public ExprContext default_;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StateDefn_ItemContext(StateDefnContext ctx) { copyFrom(ctx); }
	}

	public final StateDefnContext stateDefn() throws RecognitionException {
		StateDefnContext _localctx = new StateDefnContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_stateDefn);
		int _la;
		try {
			setState(337);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				_localctx = new StateDefn_ItemContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(313);
				((StateDefn_ItemContext)_localctx).name = ident();
				}
				setState(314);
				match(COLON);
				{
				setState(315);
				((StateDefn_ItemContext)_localctx).ty = typeExpr(0);
				}
				setState(318);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(316);
					match(EQ);
					{
					setState(317);
					((StateDefn_ItemContext)_localctx).default_ = expr(0);
					}
					}
				}

				}
				break;
			case 2:
				_localctx = new StateDefn_MapContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(320);
				((StateDefn_MapContext)_localctx).name = ident();
				}
				setState(321);
				match(LBRACK);
				{
				setState(322);
				((StateDefn_MapContext)_localctx).mapKeyDefn = mapKeyDefn();
				((StateDefn_MapContext)_localctx).mapKeys.add(((StateDefn_MapContext)_localctx).mapKeyDefn);
				}
				setState(327);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(323);
					match(COMMA);
					{
					setState(324);
					((StateDefn_MapContext)_localctx).mapKeyDefn = mapKeyDefn();
					((StateDefn_MapContext)_localctx).mapKeys.add(((StateDefn_MapContext)_localctx).mapKeyDefn);
					}
					}
					}
					setState(329);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(330);
				match(RBRACK);
				setState(331);
				match(COLON);
				{
				setState(332);
				((StateDefn_MapContext)_localctx).ty = typeExpr(0);
				}
				setState(335);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQ) {
					{
					setState(333);
					match(EQ);
					{
					setState(334);
					((StateDefn_MapContext)_localctx).default_ = expr(0);
					}
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
	public static class MapKeyDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext ty;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MapKeyDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapKeyDefn; }
	}

	public final MapKeyDefnContext mapKeyDefn() throws RecognitionException {
		MapKeyDefnContext _localctx = new MapKeyDefnContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_mapKeyDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				{
				setState(339);
				((MapKeyDefnContext)_localctx).name = ident();
				}
				setState(340);
				match(COLON);
				}
				break;
			}
			{
			setState(344);
			((MapKeyDefnContext)_localctx).ty = typeExpr(0);
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
		public FnParamsContext params;
		public BlockContext body;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public InstantiateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDefn; }
	}

	public final InstantiateDefnContext instantiateDefn() throws RecognitionException {
		InstantiateDefnContext _localctx = new InstantiateDefnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_instantiateDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(HASH);
			setState(347);
			match(INSTANTIATE);
			setState(348);
			((InstantiateDefnContext)_localctx).params = fnParams();
			setState(349);
			((InstantiateDefnContext)_localctx).body = block();
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
	public static class InstantiateDeclContext extends ParserRuleContext {
		public FnParamsContext params;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public InstantiateDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDecl; }
	}

	public final InstantiateDeclContext instantiateDecl() throws RecognitionException {
		InstantiateDeclContext _localctx = new InstantiateDeclContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_instantiateDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(HASH);
			setState(352);
			match(INSTANTIATE);
			setState(353);
			((InstantiateDeclContext)_localctx).params = fnParams();
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
		public Token tup;
		public IdentContext name;
		public FnParamsContext params;
		public BlockContext body;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public ExecDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDefn; }
	}

	public final ExecDefnContext execDefn() throws RecognitionException {
		ExecDefnContext _localctx = new ExecDefnContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_execDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(EXEC);
			setState(357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUL) {
				{
				setState(356);
				((ExecDefnContext)_localctx).tup = match(MUL);
				}
			}

			setState(359);
			match(HASH);
			setState(360);
			((ExecDefnContext)_localctx).name = ident();
			setState(361);
			((ExecDefnContext)_localctx).params = fnParams();
			setState(362);
			((ExecDefnContext)_localctx).body = block();
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
	public static class ExecDeclContext extends ParserRuleContext {
		public Token tup;
		public IdentContext name;
		public FnParamsContext params;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public ExecDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDecl; }
	}

	public final ExecDeclContext execDecl() throws RecognitionException {
		ExecDeclContext _localctx = new ExecDeclContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_execDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(EXEC);
			setState(366);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUL) {
				{
				setState(365);
				((ExecDeclContext)_localctx).tup = match(MUL);
				}
			}

			setState(368);
			match(HASH);
			setState(369);
			((ExecDeclContext)_localctx).name = ident();
			setState(370);
			((ExecDeclContext)_localctx).params = fnParams();
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
		public IdentContext name;
		public FnParamsContext params;
		public TypeExprContext retTy;
		public BlockContext body;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
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
		enterRule(_localctx, 44, RULE_queryDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
			match(QUERY);
			setState(373);
			match(HASH);
			setState(374);
			((QueryDefnContext)_localctx).name = ident();
			setState(375);
			((QueryDefnContext)_localctx).params = fnParams();
			setState(378);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(376);
				match(ARROW);
				setState(377);
				((QueryDefnContext)_localctx).retTy = typeExpr(0);
				}
			}

			setState(380);
			((QueryDefnContext)_localctx).body = block();
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
	public static class QueryDeclContext extends ParserRuleContext {
		public IdentContext name;
		public FnParamsContext params;
		public TypeExprContext retTy;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public QueryDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDecl; }
	}

	public final QueryDeclContext queryDecl() throws RecognitionException {
		QueryDeclContext _localctx = new QueryDeclContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_queryDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
			match(QUERY);
			setState(383);
			match(HASH);
			setState(384);
			((QueryDeclContext)_localctx).name = ident();
			setState(385);
			((QueryDeclContext)_localctx).params = fnParams();
			setState(388);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(386);
				match(ARROW);
				setState(387);
				((QueryDeclContext)_localctx).retTy = typeExpr(0);
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
	public static class ReplyDefnContext extends ParserRuleContext {
		public IdentContext on;
		public IdentContext name;
		public FnParamsContext params;
		public BlockContext body;
		public TerminalNode REPLY() { return getToken(CWScriptParser.REPLY, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public ReplyDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_replyDefn; }
	}

	public final ReplyDefnContext replyDefn() throws RecognitionException {
		ReplyDefnContext _localctx = new ReplyDefnContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_replyDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			match(REPLY);
			setState(393);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(391);
				match(DOT);
				setState(392);
				((ReplyDefnContext)_localctx).on = ident();
				}
			}

			setState(395);
			((ReplyDefnContext)_localctx).name = ident();
			setState(396);
			((ReplyDefnContext)_localctx).params = fnParams();
			setState(397);
			((ReplyDefnContext)_localctx).body = block();
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
		public IdentContext name;
		public Variant_Context variant_;
		public List<Variant_Context> variants = new ArrayList<Variant_Context>();
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<Variant_Context> variant_() {
			return getRuleContexts(Variant_Context.class);
		}
		public Variant_Context variant_(int i) {
			return getRuleContext(Variant_Context.class,i);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EnumDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefn; }
	}

	public final EnumDefnContext enumDefn() throws RecognitionException {
		EnumDefnContext _localctx = new EnumDefnContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(399);
			match(ENUM);
			{
			setState(400);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(401);
			match(LBRACE);
			setState(402);
			((EnumDefnContext)_localctx).variant_ = variant_();
			((EnumDefnContext)_localctx).variants.add(((EnumDefnContext)_localctx).variant_);
			setState(409);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==HASH) {
				{
				{
				{
				setState(403);
				((EnumDefnContext)_localctx).variant_ = variant_();
				((EnumDefnContext)_localctx).variants.add(((EnumDefnContext)_localctx).variant_);
				}
				setState(405);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(404);
					match(COMMA);
					}
				}

				}
				}
				setState(411);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(412);
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
	public static class Variant_Context extends ParserRuleContext {
		public Variant_structContext variant_struct() {
			return getRuleContext(Variant_structContext.class,0);
		}
		public Variant_unitContext variant_unit() {
			return getRuleContext(Variant_unitContext.class,0);
		}
		public Variant_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_; }
	}

	public final Variant_Context variant_() throws RecognitionException {
		Variant_Context _localctx = new Variant_Context(_ctx, getState());
		enterRule(_localctx, 52, RULE_variant_);
		try {
			setState(416);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(414);
				variant_struct();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(415);
				variant_unit();
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
	public static class Variant_structContext extends ParserRuleContext {
		public IdentContext name;
		public ParamListContext members;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public Variant_structContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_struct; }
	}

	public final Variant_structContext variant_struct() throws RecognitionException {
		Variant_structContext _localctx = new Variant_structContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_variant_struct);
		int _la;
		try {
			setState(434);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(418);
				match(HASH);
				{
				setState(419);
				((Variant_structContext)_localctx).name = ident();
				}
				setState(420);
				match(LPAREN);
				setState(422);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1152929818665271804L) != 0) || _la==Ident) {
					{
					setState(421);
					((Variant_structContext)_localctx).members = paramList();
					}
				}

				setState(424);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(426);
				match(HASH);
				{
				setState(427);
				((Variant_structContext)_localctx).name = ident();
				}
				setState(428);
				match(LBRACE);
				setState(430);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1152929818665271804L) != 0) || _la==Ident) {
					{
					setState(429);
					((Variant_structContext)_localctx).members = paramList();
					}
				}

				setState(432);
				match(RBRACE);
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
	public static class Variant_unitContext extends ParserRuleContext {
		public IdentContext name;
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public Variant_unitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_unit; }
	}

	public final Variant_unitContext variant_unit() throws RecognitionException {
		Variant_unitContext _localctx = new Variant_unitContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_variant_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			match(HASH);
			{
			setState(437);
			((Variant_unitContext)_localctx).name = ident();
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
	public static class VariantTContext extends TypeExprContext {
		public TypeVariantContext typeVariant() {
			return getRuleContext(TypeVariantContext.class,0);
		}
		public VariantTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleTContext extends TypeExprContext {
		public TypeExprContext typeExpr;
		public List<TypeExprContext> items = new ArrayList<TypeExprContext>();
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
		public TupleTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParamzdTContext extends TypeExprContext {
		public TypeArgContext typeArg;
		public List<TypeArgContext> args = new ArrayList<TypeArgContext>();
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public List<TypeArgContext> typeArg() {
			return getRuleContexts(TypeArgContext.class);
		}
		public TypeArgContext typeArg(int i) {
			return getRuleContext(TypeArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ParamzdTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OptionTContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public OptionTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefnTContext extends TypeExprContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public DefnTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ListTContext extends TypeExprContext {
		public Token len;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode IntLiteral() { return getToken(CWScriptParser.IntLiteral, 0); }
		public ListTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LensTContext extends TypeExprContext {
		public TypeLensContext typeLens() {
			return getRuleContext(TypeLensContext.class,0);
		}
		public LensTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PathTContext extends TypeExprContext {
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public PathTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FnTContext extends TypeExprContext {
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public FnTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TypeAppTContext extends TypeExprContext {
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public TypeAppTContext(TypeExprContext ctx) { copyFrom(ctx); }
	}

	public final TypeExprContext typeExpr() throws RecognitionException {
		return typeExpr(0);
	}

	private TypeExprContext typeExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeExprContext _localctx = new TypeExprContext(_ctx, _parentState);
		TypeExprContext _prevctx = _localctx;
		int _startState = 58;
		enterRecursionRule(_localctx, 58, RULE_typeExpr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				_localctx = new TypeAppTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(440);
				match(LT);
				setState(441);
				typeExpr(0);
				setState(442);
				match(GT);
				}
				break;
			case 2:
				{
				_localctx = new PathTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(444);
				typePath();
				}
				break;
			case 3:
				{
				_localctx = new VariantTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(445);
				typeVariant();
				}
				break;
			case 4:
				{
				_localctx = new LensTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(446);
				typeLens();
				}
				break;
			case 5:
				{
				_localctx = new FnTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(447);
				fnType();
				}
				break;
			case 6:
				{
				_localctx = new TupleTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(448);
				match(LBRACK);
				setState(457);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 149052083651068L) != 0) || _la==LT || _la==Ident) {
					{
					setState(449);
					((TupleTContext)_localctx).typeExpr = typeExpr(0);
					((TupleTContext)_localctx).items.add(((TupleTContext)_localctx).typeExpr);
					setState(454);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(450);
						match(COMMA);
						setState(451);
						((TupleTContext)_localctx).typeExpr = typeExpr(0);
						((TupleTContext)_localctx).items.add(((TupleTContext)_localctx).typeExpr);
						}
						}
						setState(456);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(459);
				match(RBRACK);
				}
				break;
			case 7:
				{
				_localctx = new ParamzdTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(460);
				typePath();
				setState(461);
				match(LT);
				{
				setState(462);
				((ParamzdTContext)_localctx).typeArg = typeArg();
				((ParamzdTContext)_localctx).args.add(((ParamzdTContext)_localctx).typeArg);
				}
				setState(467);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(463);
					match(COMMA);
					setState(464);
					((ParamzdTContext)_localctx).typeArg = typeArg();
					((ParamzdTContext)_localctx).args.add(((ParamzdTContext)_localctx).typeArg);
					}
					}
					setState(469);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(470);
				match(GT);
				}
				break;
			case 8:
				{
				_localctx = new DefnTContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(472);
				typeDefn();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(485);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(483);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
					case 1:
						{
						_localctx = new OptionTContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(475);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(476);
						match(QUEST);
						}
						break;
					case 2:
						{
						_localctx = new ListTContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(477);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(478);
						match(LBRACK);
						setState(480);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==IntLiteral) {
							{
							setState(479);
							((ListTContext)_localctx).len = match(IntLiteral);
							}
						}

						setState(482);
						match(RBRACK);
						}
						break;
					}
					} 
				}
				setState(487);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
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
	public static class TypeArgContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext value;
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArg; }
	}

	public final TypeArgContext typeArg() throws RecognitionException {
		TypeArgContext _localctx = new TypeArgContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_typeArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				setState(488);
				((TypeArgContext)_localctx).name = ident();
				setState(489);
				match(EQ);
				}
				break;
			}
			{
			setState(493);
			((TypeArgContext)_localctx).value = typeExpr(0);
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
	public static class FnTypeContext extends ParserRuleContext {
		public Token fallible;
		public ParamListContext params;
		public TypeExprContext retTy;
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public FnTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnType; }
	}

	public final FnTypeContext fnType() throws RecognitionException {
		FnTypeContext _localctx = new FnTypeContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_fnType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			match(FN);
			setState(497);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(496);
				((FnTypeContext)_localctx).fallible = match(BANG);
				}
			}

			setState(499);
			match(LPAREN);
			setState(501);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1152929818665271804L) != 0) || _la==Ident) {
				{
				setState(500);
				((FnTypeContext)_localctx).params = paramList();
				}
			}

			setState(503);
			match(RPAREN);
			setState(504);
			match(ARROW);
			setState(505);
			((FnTypeContext)_localctx).retTy = typeExpr(0);
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
	public static class TypeLensContext extends ParserRuleContext {
		public Token scope;
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode MUT() { return getToken(CWScriptParser.MUT, 0); }
		public TypeLensContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeLens; }
	}

	public final TypeLensContext typeLens() throws RecognitionException {
		TypeLensContext _localctx = new TypeLensContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_typeLens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
			((TypeLensContext)_localctx).scope = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 536985600L) != 0)) ) {
				((TypeLensContext)_localctx).scope = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(508);
			typePath();
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
	public static class TypePathContext extends ParserRuleContext {
		public IdentContext ident;
		public List<IdentContext> segments = new ArrayList<IdentContext>();
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(CWScriptParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(CWScriptParser.DOT, i);
		}
		public TypePathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typePath; }
	}

	public final TypePathContext typePath() throws RecognitionException {
		TypePathContext _localctx = new TypePathContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_typePath);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(510);
			((TypePathContext)_localctx).ident = ident();
			((TypePathContext)_localctx).segments.add(((TypePathContext)_localctx).ident);
			}
			setState(515);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(511);
					match(DOT);
					setState(512);
					((TypePathContext)_localctx).ident = ident();
					((TypePathContext)_localctx).segments.add(((TypePathContext)_localctx).ident);
					}
					} 
				}
				setState(517);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
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
	public static class TypeVariantContext extends ParserRuleContext {
		public IdentContext variant;
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeVariantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeVariant; }
	}

	public final TypeVariantContext typeVariant() throws RecognitionException {
		TypeVariantContext _localctx = new TypeVariantContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_typeVariant);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(518);
			typePath();
			setState(523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(519);
				match(LPAREN);
				setState(520);
				expr(0);
				setState(521);
				match(RPAREN);
				}
			}

			{
			setState(525);
			match(DOT);
			setState(526);
			match(HASH);
			setState(527);
			((TypeVariantContext)_localctx).variant = ident();
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
	public static class TypeDefnContext extends ParserRuleContext {
		public StructDefnContext structDefn() {
			return getRuleContext(StructDefnContext.class,0);
		}
		public EnumDefnContext enumDefn() {
			return getRuleContext(EnumDefnContext.class,0);
		}
		public TypeAliasDefnContext typeAliasDefn() {
			return getRuleContext(TypeAliasDefnContext.class,0);
		}
		public TypeDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDefn; }
	}

	public final TypeDefnContext typeDefn() throws RecognitionException {
		TypeDefnContext _localctx = new TypeDefnContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_typeDefn);
		try {
			setState(532);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRUCT:
				enterOuterAlt(_localctx, 1);
				{
				setState(529);
				structDefn();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(530);
				enumDefn();
				}
				break;
			case TYPE:
				enterOuterAlt(_localctx, 3);
				{
				setState(531);
				typeAliasDefn();
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
	public static class StructDefnContext extends ParserRuleContext {
		public IdentContext name;
		public ParamContext param;
		public List<ParamContext> members = new ArrayList<ParamContext>();
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
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
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public StructDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn; }
	}

	public final StructDefnContext structDefn() throws RecognitionException {
		StructDefnContext _localctx = new StructDefnContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_structDefn);
		int _la;
		try {
			int _alt;
			setState(568);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(534);
				match(STRUCT);
				setState(536);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
					{
					setState(535);
					((StructDefnContext)_localctx).name = ident();
					}
				}

				setState(538);
				match(LPAREN);
				setState(547);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1152929818665271804L) != 0) || _la==Ident) {
					{
					{
					setState(539);
					((StructDefnContext)_localctx).param = param();
					((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
					}
					setState(544);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(540);
						match(COMMA);
						{
						setState(541);
						((StructDefnContext)_localctx).param = param();
						((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
						}
						}
						}
						setState(546);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(549);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(550);
				match(STRUCT);
				setState(552);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
					{
					setState(551);
					((StructDefnContext)_localctx).name = ident();
					}
				}

				setState(554);
				match(LBRACE);
				{
				{
				setState(555);
				((StructDefnContext)_localctx).param = param();
				((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
				}
				setState(560);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,59,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(556);
						match(COMMA);
						{
						setState(557);
						((StructDefnContext)_localctx).param = param();
						((StructDefnContext)_localctx).members.add(((StructDefnContext)_localctx).param);
						}
						}
						} 
					}
					setState(562);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,59,_ctx);
				}
				setState(564);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(563);
					match(COMMA);
					}
				}

				}
				setState(566);
				match(RBRACE);
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
		public IdentContext name;
		public TypeExprContext value;
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TypeAliasDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasDefn; }
	}

	public final TypeAliasDefnContext typeAliasDefn() throws RecognitionException {
		TypeAliasDefnContext _localctx = new TypeAliasDefnContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_typeAliasDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(570);
			match(TYPE);
			{
			setState(571);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(572);
			match(EQ);
			{
			setState(573);
			((TypeAliasDefnContext)_localctx).value = typeExpr(0);
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
		public IdentContext name;
		public Token fallible;
		public FnParamsContext params;
		public TypeExprContext retTy;
		public BlockContext body;
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public FnParamsContext fnParams() {
			return getRuleContext(FnParamsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
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
		enterRule(_localctx, 76, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(575);
			match(FN);
			{
			setState(576);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(578);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(577);
				((FnDefnContext)_localctx).fallible = match(BANG);
				}
			}

			setState(580);
			((FnDefnContext)_localctx).params = fnParams();
			setState(583);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(581);
				match(ARROW);
				setState(582);
				((FnDefnContext)_localctx).retTy = typeExpr(0);
				}
			}

			setState(585);
			((FnDefnContext)_localctx).body = block();
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
	public static class AnnotContext extends ParserRuleContext {
		public Token isTag;
		public TypePathContext path;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public List<TerminalNode> AT() { return getTokens(CWScriptParser.AT); }
		public TerminalNode AT(int i) {
			return getToken(CWScriptParser.AT, i);
		}
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public ArgContext arg() {
			return getRuleContext(ArgContext.class,0);
		}
		public AnnotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annot; }
	}

	public final AnnotContext annot() throws RecognitionException {
		AnnotContext _localctx = new AnnotContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_annot);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(587);
			match(AT);
			setState(589);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(588);
				((AnnotContext)_localctx).isTag = match(AT);
				}
			}

			{
			setState(591);
			((AnnotContext)_localctx).path = typePath();
			}
			setState(597);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				{
				setState(592);
				match(LPAREN);
				setState(594);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36776121286513148L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65077249L) != 0)) {
					{
					setState(593);
					((AnnotContext)_localctx).arg = arg();
					((AnnotContext)_localctx).args.add(((AnnotContext)_localctx).arg);
					}
				}

				setState(596);
				match(RPAREN);
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
	public static class CallOptionsContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<MemberValContext> memberVal() {
			return getRuleContexts(MemberValContext.class);
		}
		public MemberValContext memberVal(int i) {
			return getRuleContext(MemberValContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public CallOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callOptions; }
	}

	public final CallOptionsContext callOptions() throws RecognitionException {
		CallOptionsContext _localctx = new CallOptionsContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_callOptions);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(599);
			match(LBRACE);
			setState(611);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
				{
				{
				setState(600);
				memberVal();
				}
				setState(605);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(601);
						match(COMMA);
						setState(602);
						memberVal();
						}
						} 
					}
					setState(607);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
				}
				setState(609);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(608);
					match(COMMA);
					}
				}

				}
			}

			setState(613);
			match(RBRACE);
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
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	 
		public StmtContext() { }
		public void copyFrom(StmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class InstantiateStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public Token defer;
		public Token new_;
		public TerminalNode INSTANTIATE_NOW() { return getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TerminalNode DEFER() { return getToken(CWScriptParser.DEFER, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public InstantiateStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AssignStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public AssignStmt_Context assignStmt_() {
			return getRuleContext(AssignStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public AssignStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExecStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public Token defer;
		public TerminalNode EXEC_NOW() { return getToken(CWScriptParser.EXEC_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TerminalNode DEFER() { return getToken(CWScriptParser.DEFER, 0); }
		public ExecStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConstStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public ConstStmt_Context constStmt_() {
			return getRuleContext(ConstStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ConstStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FailStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public FailStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public IfStmt_Context ifStmt_() {
			return getRuleContext(IfStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public IfStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EmitStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public Token defer;
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TerminalNode DEFER() { return getToken(CWScriptParser.DEFER, 0); }
		public EmitStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ExprStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DelegateExecStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public Token defer;
		public TerminalNode DELEGATE_EXEC() { return getToken(CWScriptParser.DELEGATE_EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public TerminalNode DEFER() { return getToken(CWScriptParser.DEFER, 0); }
		public DelegateExecStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AnnotBlockStmtContext extends StmtContext {
		public AnnotContext annot() {
			return getRuleContext(AnnotContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public AnnotBlockStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DebugStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public DebugStmt_Context debugStmt_() {
			return getRuleContext(DebugStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public DebugStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public ForStmt_Context forStmt_() {
			return getRuleContext(ForStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ForStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public ReturnStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LetStmtContext extends StmtContext {
		public AnnotContext annot;
		public List<AnnotContext> ann = new ArrayList<AnnotContext>();
		public LetStmt_Context letStmt_() {
			return getRuleContext(LetStmt_Context.class,0);
		}
		public List<AnnotContext> annot() {
			return getRuleContexts(AnnotContext.class);
		}
		public AnnotContext annot(int i) {
			return getRuleContext(AnnotContext.class,i);
		}
		public LetStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_stmt);
		int _la;
		try {
			setState(731);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
			case 1:
				_localctx = new AnnotBlockStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(615);
				annot();
				setState(616);
				block();
				}
				break;
			case 2:
				_localctx = new DebugStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(621);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(618);
					((DebugStmtContext)_localctx).annot = annot();
					((DebugStmtContext)_localctx).ann.add(((DebugStmtContext)_localctx).annot);
					}
					}
					setState(623);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(624);
				debugStmt_();
				}
				break;
			case 3:
				_localctx = new LetStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(628);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(625);
					((LetStmtContext)_localctx).annot = annot();
					((LetStmtContext)_localctx).ann.add(((LetStmtContext)_localctx).annot);
					}
					}
					setState(630);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(631);
				letStmt_();
				}
				break;
			case 4:
				_localctx = new ConstStmtContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(635);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(632);
					((ConstStmtContext)_localctx).annot = annot();
					((ConstStmtContext)_localctx).ann.add(((ConstStmtContext)_localctx).annot);
					}
					}
					setState(637);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(638);
				constStmt_();
				}
				break;
			case 5:
				_localctx = new AssignStmtContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(642);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(639);
					((AssignStmtContext)_localctx).annot = annot();
					((AssignStmtContext)_localctx).ann.add(((AssignStmtContext)_localctx).annot);
					}
					}
					setState(644);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(645);
				assignStmt_();
				}
				break;
			case 6:
				_localctx = new IfStmtContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(649);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(646);
					((IfStmtContext)_localctx).annot = annot();
					((IfStmtContext)_localctx).ann.add(((IfStmtContext)_localctx).annot);
					}
					}
					setState(651);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(652);
				ifStmt_();
				}
				break;
			case 7:
				_localctx = new ForStmtContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(656);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(653);
					((ForStmtContext)_localctx).annot = annot();
					((ForStmtContext)_localctx).ann.add(((ForStmtContext)_localctx).annot);
					}
					}
					setState(658);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(659);
				forStmt_();
				}
				break;
			case 8:
				_localctx = new ExecStmtContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(663);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(660);
					((ExecStmtContext)_localctx).annot = annot();
					((ExecStmtContext)_localctx).ann.add(((ExecStmtContext)_localctx).annot);
					}
					}
					setState(665);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(667);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DEFER) {
					{
					setState(666);
					((ExecStmtContext)_localctx).defer = match(DEFER);
					}
				}

				setState(669);
				match(EXEC_NOW);
				setState(670);
				expr(0);
				}
				break;
			case 9:
				_localctx = new DelegateExecStmtContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(674);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(671);
					((DelegateExecStmtContext)_localctx).annot = annot();
					((DelegateExecStmtContext)_localctx).ann.add(((DelegateExecStmtContext)_localctx).annot);
					}
					}
					setState(676);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(678);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DEFER) {
					{
					setState(677);
					((DelegateExecStmtContext)_localctx).defer = match(DEFER);
					}
				}

				setState(680);
				match(DELEGATE_EXEC);
				setState(681);
				match(HASH);
				setState(682);
				expr(0);
				}
				break;
			case 10:
				_localctx = new InstantiateStmtContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(686);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(683);
					((InstantiateStmtContext)_localctx).annot = annot();
					((InstantiateStmtContext)_localctx).ann.add(((InstantiateStmtContext)_localctx).annot);
					}
					}
					setState(688);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(690);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DEFER) {
					{
					setState(689);
					((InstantiateStmtContext)_localctx).defer = match(DEFER);
					}
				}

				setState(692);
				match(INSTANTIATE_NOW);
				setState(694);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HASH) {
					{
					setState(693);
					((InstantiateStmtContext)_localctx).new_ = match(HASH);
					}
				}

				setState(696);
				expr(0);
				}
				break;
			case 11:
				_localctx = new EmitStmtContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(700);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(697);
					((EmitStmtContext)_localctx).annot = annot();
					((EmitStmtContext)_localctx).ann.add(((EmitStmtContext)_localctx).annot);
					}
					}
					setState(702);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(704);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DEFER) {
					{
					setState(703);
					((EmitStmtContext)_localctx).defer = match(DEFER);
					}
				}

				setState(706);
				match(EMIT);
				setState(707);
				expr(0);
				}
				break;
			case 12:
				_localctx = new ReturnStmtContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(711);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(708);
					((ReturnStmtContext)_localctx).annot = annot();
					((ReturnStmtContext)_localctx).ann.add(((ReturnStmtContext)_localctx).annot);
					}
					}
					setState(713);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(714);
				match(RETURN);
				setState(715);
				expr(0);
				}
				break;
			case 13:
				_localctx = new FailStmtContext(_localctx);
				enterOuterAlt(_localctx, 13);
				{
				setState(719);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(716);
					((FailStmtContext)_localctx).annot = annot();
					((FailStmtContext)_localctx).ann.add(((FailStmtContext)_localctx).annot);
					}
					}
					setState(721);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(722);
				match(FAIL);
				setState(723);
				expr(0);
				}
				break;
			case 14:
				_localctx = new ExprStmtContext(_localctx);
				enterOuterAlt(_localctx, 14);
				{
				setState(727);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AT) {
					{
					{
					setState(724);
					((ExprStmtContext)_localctx).annot = annot();
					((ExprStmtContext)_localctx).ann.add(((ExprStmtContext)_localctx).annot);
					}
					}
					setState(729);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(730);
				expr(0);
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
	public static class DebugStmt_Context extends ParserRuleContext {
		public TerminalNode DEBUG() { return getToken(CWScriptParser.DEBUG, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public DebugStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_debugStmt_; }
	}

	public final DebugStmt_Context debugStmt_() throws RecognitionException {
		DebugStmt_Context _localctx = new DebugStmt_Context(_ctx, getState());
		enterRule(_localctx, 84, RULE_debugStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(733);
			match(DEBUG);
			setState(736);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
			case 1:
				{
				setState(734);
				block();
				}
				break;
			case 2:
				{
				setState(735);
				stmt();
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
	public static class LetStmt_Context extends ParserRuleContext {
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public Let_bindingContext let_binding() {
			return getRuleContext(Let_bindingContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public LetStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt_; }
	}

	public final LetStmt_Context letStmt_() throws RecognitionException {
		LetStmt_Context _localctx = new LetStmt_Context(_ctx, getState());
		enterRule(_localctx, 86, RULE_letStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(738);
			match(LET);
			setState(739);
			let_binding();
			setState(742);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				{
				setState(740);
				match(EQ);
				setState(741);
				expr(0);
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
	public static class ConstStmt_Context extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ConstStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constStmt_; }
	}

	public final ConstStmt_Context constStmt_() throws RecognitionException {
		ConstStmt_Context _localctx = new ConstStmt_Context(_ctx, getState());
		enterRule(_localctx, 88, RULE_constStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(744);
			match(CONST);
			setState(745);
			ident();
			setState(746);
			match(EQ);
			setState(747);
			expr(0);
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
	public static class IdentBinding_Context extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext ty;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentBinding_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identBinding_; }
	}

	public final IdentBinding_Context identBinding_() throws RecognitionException {
		IdentBinding_Context _localctx = new IdentBinding_Context(_ctx, getState());
		enterRule(_localctx, 90, RULE_identBinding_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(749);
			((IdentBinding_Context)_localctx).name = ident();
			}
			setState(752);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				setState(750);
				match(COLON);
				setState(751);
				((IdentBinding_Context)_localctx).ty = typeExpr(0);
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
	public static class Let_bindingContext extends ParserRuleContext {
		public Let_bindingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_let_binding; }
	 
		public Let_bindingContext() { }
		public void copyFrom(Let_bindingContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleBindingContext extends Let_bindingContext {
		public IdentBinding_Context identBinding_;
		public List<IdentBinding_Context> bindings = new ArrayList<IdentBinding_Context>();
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<IdentBinding_Context> identBinding_() {
			return getRuleContexts(IdentBinding_Context.class);
		}
		public IdentBinding_Context identBinding_(int i) {
			return getRuleContext(IdentBinding_Context.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleBindingContext(Let_bindingContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructBindingContext extends Let_bindingContext {
		public IdentBinding_Context identBinding_;
		public List<IdentBinding_Context> bindings = new ArrayList<IdentBinding_Context>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentBinding_Context identBinding_() {
			return getRuleContext(IdentBinding_Context.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StructBindingContext(Let_bindingContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentBindingContext extends Let_bindingContext {
		public IdentBinding_Context identBinding_() {
			return getRuleContext(IdentBinding_Context.class,0);
		}
		public IdentBindingContext(Let_bindingContext ctx) { copyFrom(ctx); }
	}

	public final Let_bindingContext let_binding() throws RecognitionException {
		Let_bindingContext _localctx = new Let_bindingContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_let_binding);
		int _la;
		try {
			setState(776);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
			case EXTENDS:
			case ERROR:
			case EVENT:
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
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case STRUCT:
			case ENUM:
			case TYPE:
			case EMIT:
			case Ident:
				_localctx = new IdentBindingContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(754);
				identBinding_();
				}
				break;
			case LBRACE:
				_localctx = new StructBindingContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(755);
				match(LBRACE);
				{
				setState(756);
				((StructBindingContext)_localctx).identBinding_ = identBinding_();
				((StructBindingContext)_localctx).bindings.add(((StructBindingContext)_localctx).identBinding_);
				}
				setState(760);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(757);
					match(COMMA);
					}
					}
					setState(762);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(763);
				match(RBRACE);
				}
				break;
			case LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(765);
				match(LBRACK);
				{
				setState(766);
				((TupleBindingContext)_localctx).identBinding_ = identBinding_();
				((TupleBindingContext)_localctx).bindings.add(((TupleBindingContext)_localctx).identBinding_);
				}
				setState(771);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(767);
					match(COMMA);
					setState(768);
					((TupleBindingContext)_localctx).identBinding_ = identBinding_();
					((TupleBindingContext)_localctx).bindings.add(((TupleBindingContext)_localctx).identBinding_);
					}
					}
					setState(773);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(774);
				match(RBRACK);
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
	public static class AssignStmt_Context extends ParserRuleContext {
		public AssignLHSContext lhs;
		public Token assignOp;
		public ExprContext rhs;
		public AssignLHSContext assignLHS() {
			return getRuleContext(AssignLHSContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public AssignStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt_; }
	}

	public final AssignStmt_Context assignStmt_() throws RecognitionException {
		AssignStmt_Context _localctx = new AssignStmt_Context(_ctx, getState());
		enterRule(_localctx, 94, RULE_assignStmt_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(778);
			((AssignStmt_Context)_localctx).lhs = assignLHS();
			}
			{
			setState(779);
			((AssignStmt_Context)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 5457L) != 0)) ) {
				((AssignStmt_Context)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
			{
			setState(780);
			((AssignStmt_Context)_localctx).rhs = expr(0);
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
	public static class AssignLHSContext extends ParserRuleContext {
		public AssignLHSContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignLHS; }
	 
		public AssignLHSContext() { }
		public void copyFrom(AssignLHSContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentLHSContext extends AssignLHSContext {
		public IdentContext symbol;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DotLHSContext extends AssignLHSContext {
		public ExprContext obj;
		public IdentContext member;
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public DotLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IndexLHSContext extends AssignLHSContext {
		public ExprContext obj;
		public ExprContext expr;
		public List<ExprContext> args = new ArrayList<ExprContext>();
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
		public IndexLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}

	public final AssignLHSContext assignLHS() throws RecognitionException {
		AssignLHSContext _localctx = new AssignLHSContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_assignLHS);
		int _la;
		try {
			setState(799);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				_localctx = new IdentLHSContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(782);
				((IdentLHSContext)_localctx).symbol = ident();
				}
				break;
			case 2:
				_localctx = new DotLHSContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(783);
				((DotLHSContext)_localctx).obj = expr(0);
				}
				setState(784);
				match(DOT);
				{
				setState(785);
				((DotLHSContext)_localctx).member = ident();
				}
				}
				break;
			case 3:
				_localctx = new IndexLHSContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				{
				setState(787);
				((IndexLHSContext)_localctx).obj = expr(0);
				}
				setState(788);
				match(LBRACK);
				{
				setState(789);
				((IndexLHSContext)_localctx).expr = expr(0);
				((IndexLHSContext)_localctx).args.add(((IndexLHSContext)_localctx).expr);
				}
				setState(794);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(790);
					match(COMMA);
					setState(791);
					((IndexLHSContext)_localctx).expr = expr(0);
					((IndexLHSContext)_localctx).args.add(((IndexLHSContext)_localctx).expr);
					}
					}
					setState(796);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(797);
				match(RBRACK);
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
		public ExprContext rhs;
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
		public ExprContext rhs;
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
		public IfStmt_Context ifStmt_() {
			return getRuleContext(IfStmt_Context.class,0);
		}
		public IfExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnitVariantExprContext extends ExprContext {
		public TypeVariantContext typeVariant() {
			return getRuleContext(TypeVariantContext.class,0);
		}
		public UnitVariantExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TypeDColonExprContext extends ExprContext {
		public IdentContext member;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode D_COLON() { return getToken(CWScriptParser.D_COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeDColonExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsExprContext extends ExprContext {
		public TypeExprContext ty;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode AS() { return getToken(CWScriptParser.AS, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public AsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CompExprContext extends ExprContext {
		public Token op;
		public ExprContext rhs;
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
		public MemberValContext memberVal;
		public List<MemberValContext> members = new ArrayList<MemberValContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public List<MemberValContext> memberVal() {
			return getRuleContexts(MemberValContext.class);
		}
		public MemberValContext memberVal(int i) {
			return getRuleContext(MemberValContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StructExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IndexExprContext extends ExprContext {
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
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
		public IndexExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Grouped2ExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode TILDE() { return getToken(CWScriptParser.TILDE, 0); }
		public Grouped2ExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DColonExprContext extends ExprContext {
		public IdentContext member;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode D_COLON() { return getToken(CWScriptParser.D_COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public DColonExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IsExprContext extends ExprContext {
		public Token negative;
		public TypeExprContext rhs;
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
	public static class TryCatchElseExprContext extends ExprContext {
		public TryCatchElseExpr_Context tryCatchElseExpr_() {
			return getRuleContext(TryCatchElseExpr_Context.class,0);
		}
		public TryCatchElseExprContext(ExprContext ctx) { copyFrom(ctx); }
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
	public static class InExprContext extends ExprContext {
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public InExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FailExprContext extends ExprContext {
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FailExprContext(ExprContext ctx) { copyFrom(ctx); }
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
		public ExprContext rhs;
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
		public ClosureContext closure() {
			return getRuleContext(ClosureContext.class,0);
		}
		public ClosureExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DotExprContext extends ExprContext {
		public Token unwrap;
		public IdentContext member;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public DotExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ShortTryExprContext extends ExprContext {
		public ExprContext rhs;
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
		public ExprContext expr;
		public List<ExprContext> items = new ArrayList<ExprContext>();
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
		public TupleExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrExprContext extends ExprContext {
		public ExprContext rhs;
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
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EQ_EQ() { return getToken(CWScriptParser.EQ_EQ, 0); }
		public TerminalNode NEQ() { return getToken(CWScriptParser.NEQ, 0); }
		public EqExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TypeFnCallExprContext extends ExprContext {
		public Token fallible;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
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
		public TypeFnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class QueryNowExprContext extends ExprContext {
		public TerminalNode QUERY_NOW() { return getToken(CWScriptParser.QUERY_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public QueryNowExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NoneCheckExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public NoneCheckExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FnCallExprContext extends ExprContext {
		public Token fallible;
		public ArgContext arg;
		public List<ArgContext> args = new ArrayList<ArgContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
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
		public FnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
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
		int _startState = 98;
		enterRecursionRule(_localctx, 98, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(869);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(802);
				match(LPAREN);
				setState(803);
				expr(0);
				setState(804);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new TypeDColonExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(806);
				typeExpr(0);
				setState(807);
				match(D_COLON);
				{
				setState(808);
				((TypeDColonExprContext)_localctx).member = ident();
				}
				}
				break;
			case 3:
				{
				_localctx = new TypeFnCallExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(810);
				typeExpr(0);
				setState(812);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BANG) {
					{
					setState(811);
					((TypeFnCallExprContext)_localctx).fallible = match(BANG);
					}
				}

				setState(814);
				match(LPAREN);
				setState(823);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36776121286513148L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65077249L) != 0)) {
					{
					{
					setState(815);
					((TypeFnCallExprContext)_localctx).arg = arg();
					((TypeFnCallExprContext)_localctx).args.add(((TypeFnCallExprContext)_localctx).arg);
					}
					setState(820);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(816);
						match(COMMA);
						setState(817);
						((TypeFnCallExprContext)_localctx).arg = arg();
						((TypeFnCallExprContext)_localctx).args.add(((TypeFnCallExprContext)_localctx).arg);
						}
						}
						setState(822);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(825);
				match(RPAREN);
				}
				break;
			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(827);
				tryCatchElseExpr_();
				}
				break;
			case 5:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(828);
				match(NOT);
				setState(829);
				expr(13);
				}
				break;
			case 6:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(830);
				ifStmt_();
				}
				break;
			case 7:
				{
				_localctx = new QueryNowExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(831);
				match(QUERY_NOW);
				setState(832);
				expr(9);
				}
				break;
			case 8:
				{
				_localctx = new FailExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(833);
				match(FAIL);
				setState(834);
				expr(8);
				}
				break;
			case 9:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(835);
				closure();
				}
				break;
			case 10:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(836);
				match(LBRACK);
				setState(845);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36776121286513148L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65077249L) != 0)) {
					{
					{
					setState(837);
					((TupleExprContext)_localctx).expr = expr(0);
					((TupleExprContext)_localctx).items.add(((TupleExprContext)_localctx).expr);
					}
					setState(842);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(838);
						match(COMMA);
						{
						setState(839);
						((TupleExprContext)_localctx).expr = expr(0);
						((TupleExprContext)_localctx).items.add(((TupleExprContext)_localctx).expr);
						}
						}
						}
						setState(844);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(847);
				match(RBRACK);
				}
				break;
			case 11:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(849);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 149052083651068L) != 0) || _la==LT || _la==Ident) {
					{
					setState(848);
					typeExpr(0);
					}
				}

				setState(851);
				match(LBRACE);
				setState(863);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0) || _la==Ident) {
					{
					{
					setState(852);
					((StructExprContext)_localctx).memberVal = memberVal();
					((StructExprContext)_localctx).members.add(((StructExprContext)_localctx).memberVal);
					}
					setState(857);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,103,_ctx);
					while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
						if ( _alt==1 ) {
							{
							{
							setState(853);
							match(COMMA);
							setState(854);
							((StructExprContext)_localctx).memberVal = memberVal();
							((StructExprContext)_localctx).members.add(((StructExprContext)_localctx).memberVal);
							}
							} 
						}
						setState(859);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,103,_ctx);
					}
					setState(861);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==COMMA) {
						{
						setState(860);
						match(COMMA);
						}
					}

					}
				}

				setState(865);
				match(RBRACE);
				}
				break;
			case 12:
				{
				_localctx = new UnitVariantExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(866);
				typeVariant();
				}
				break;
			case 13:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(867);
				literal();
				}
				break;
			case 14:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(868);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(947);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,114,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(945);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(871);
						if (!(precpred(_ctx, 29))) throw new FailedPredicateException(this, "precpred(_ctx, 29)");
						setState(873);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==QUEST || _la==BANG) {
							{
							setState(872);
							((DotExprContext)_localctx).unwrap = _input.LT(1);
							_la = _input.LA(1);
							if ( !(_la==QUEST || _la==BANG) ) {
								((DotExprContext)_localctx).unwrap = (Token)_errHandler.recoverInline(this);
							}
							else {
								if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
								_errHandler.reportMatch(this);
								consume();
							}
							}
						}

						setState(875);
						match(DOT);
						{
						setState(876);
						((DotExprContext)_localctx).member = ident();
						}
						}
						break;
					case 2:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(877);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(878);
						match(AS);
						setState(879);
						((AsExprContext)_localctx).ty = typeExpr(0);
						}
						break;
					case 3:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(880);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(881);
						match(LBRACK);
						{
						setState(882);
						((IndexExprContext)_localctx).arg = arg();
						((IndexExprContext)_localctx).args.add(((IndexExprContext)_localctx).arg);
						}
						setState(887);
						_errHandler.sync(this);
						_la = _input.LA(1);
						while (_la==COMMA) {
							{
							{
							setState(883);
							match(COMMA);
							setState(884);
							((IndexExprContext)_localctx).arg = arg();
							((IndexExprContext)_localctx).args.add(((IndexExprContext)_localctx).arg);
							}
							}
							setState(889);
							_errHandler.sync(this);
							_la = _input.LA(1);
						}
						setState(890);
						match(RBRACK);
						}
						break;
					case 4:
						{
						_localctx = new DColonExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(892);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(893);
						match(D_COLON);
						{
						setState(894);
						((DColonExprContext)_localctx).member = ident();
						}
						}
						break;
					case 5:
						{
						_localctx = new FnCallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(895);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(897);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==BANG) {
							{
							setState(896);
							((FnCallExprContext)_localctx).fallible = match(BANG);
							}
						}

						setState(899);
						match(LPAREN);
						setState(908);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36776121286513148L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65077249L) != 0)) {
							{
							{
							setState(900);
							((FnCallExprContext)_localctx).arg = arg();
							((FnCallExprContext)_localctx).args.add(((FnCallExprContext)_localctx).arg);
							}
							setState(905);
							_errHandler.sync(this);
							_la = _input.LA(1);
							while (_la==COMMA) {
								{
								{
								setState(901);
								match(COMMA);
								setState(902);
								((FnCallExprContext)_localctx).arg = arg();
								((FnCallExprContext)_localctx).args.add(((FnCallExprContext)_localctx).arg);
								}
								}
								setState(907);
								_errHandler.sync(this);
								_la = _input.LA(1);
							}
							}
						}

						setState(910);
						match(RPAREN);
						}
						break;
					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(911);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						{
						setState(912);
						((MulExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & 21L) != 0)) ) {
							((MulExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(913);
						((MulExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(914);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						{
						setState(915);
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
						{
						setState(916);
						((AddExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(917);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						{
						setState(918);
						((CompExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 80)) & ~0x3f) == 0 && ((1L << (_la - 80)) & 15L) != 0)) ) {
							((CompExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(919);
						((CompExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(920);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						{
						setState(921);
						((EqExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==EQ_EQ || _la==NEQ) ) {
							((EqExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						{
						setState(922);
						((EqExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 10:
						{
						_localctx = new NoneCheckExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(923);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(924);
						match(QUEST);
						}
						break;
					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(925);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(926);
						match(IS);
						setState(928);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==NOT) {
							{
							setState(927);
							((IsExprContext)_localctx).negative = match(NOT);
							}
						}

						{
						setState(930);
						((IsExprContext)_localctx).rhs = typeExpr(0);
						}
						}
						break;
					case 12:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(931);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(932);
						match(IN);
						{
						setState(933);
						((InExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 13:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(934);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(935);
						match(D_QUEST);
						{
						setState(936);
						((ShortTryExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 14:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(937);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(938);
						match(AND);
						{
						setState(939);
						((AndExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 15:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(940);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(941);
						match(OR);
						{
						setState(942);
						((OrExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 16:
						{
						_localctx = new Grouped2ExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(943);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(944);
						match(TILDE);
						}
						break;
					}
					} 
				}
				setState(949);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,114,_ctx);
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
	public static class ClosureParamsContext extends ParserRuleContext {
		public ParamContext param;
		public List<ParamContext> params = new ArrayList<ParamContext>();
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
		public ClosureParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureParams; }
	}

	public final ClosureParamsContext closureParams() throws RecognitionException {
		ClosureParamsContext _localctx = new ClosureParamsContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_closureParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(950);
			match(BAR);
			setState(959);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1152929818665271804L) != 0) || _la==Ident) {
				{
				{
				setState(951);
				((ClosureParamsContext)_localctx).param = param();
				((ClosureParamsContext)_localctx).params.add(((ClosureParamsContext)_localctx).param);
				}
				setState(956);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(952);
					match(COMMA);
					{
					setState(953);
					((ClosureParamsContext)_localctx).param = param();
					((ClosureParamsContext)_localctx).params.add(((ClosureParamsContext)_localctx).param);
					}
					}
					}
					setState(958);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(961);
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
	public static class ClosureContext extends ParserRuleContext {
		public Token fallible;
		public ClosureParamsContext params;
		public TypeExprContext retTy;
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public ClosureParamsContext closureParams() {
			return getRuleContext(ClosureParamsContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ClosureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closure; }
	}

	public final ClosureContext closure() throws RecognitionException {
		ClosureContext _localctx = new ClosureContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_closure);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(964);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(963);
				((ClosureContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(966);
			((ClosureContext)_localctx).params = closureParams();
			}
			setState(973);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
			case 1:
				{
				{
				setState(969);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ARROW) {
					{
					setState(967);
					match(ARROW);
					setState(968);
					((ClosureContext)_localctx).retTy = typeExpr(0);
					}
				}

				setState(971);
				block();
				}
				}
				break;
			case 2:
				{
				setState(972);
				stmt();
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
	public static class BlockContext extends ParserRuleContext {
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<TerminalNode> SEMI() { return getTokens(CWScriptParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(CWScriptParser.SEMI, i);
		}
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
		enterRule(_localctx, 104, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(975);
			match(LBRACE);
			setState(980);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1261755563528683518L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65077249L) != 0)) {
				{
				setState(978);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DEBUG:
				case CONTRACT:
				case INTERFACE:
				case IMPORT:
				case IMPLEMENTS:
				case EXTENDS:
				case ERROR:
				case EVENT:
				case DEFER:
				case INSTANTIATE_NOW:
				case EXEC_NOW:
				case QUERY_NOW:
				case DELEGATE_EXEC:
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
				case MUT:
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
				case ENUM:
				case TYPE:
				case EMIT:
				case LPAREN:
				case LBRACK:
				case LBRACE:
				case BANG:
				case AT:
				case BAR:
				case LT:
				case Ident:
				case StringLiteral:
				case IntLiteral:
				case DecLiteral:
				case BoolLiteral:
					{
					{
					setState(976);
					((BlockContext)_localctx).stmt = stmt();
					((BlockContext)_localctx).body.add(((BlockContext)_localctx).stmt);
					}
					}
					break;
				case SEMI:
					{
					setState(977);
					match(SEMI);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(982);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(983);
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
	public static class TryCatchElseExpr_Context extends ParserRuleContext {
		public BlockContext body;
		public CatchClauseContext catchClause;
		public List<CatchClauseContext> catches = new ArrayList<CatchClauseContext>();
		public ElseClauseContext else_;
		public TerminalNode TRY() { return getToken(CWScriptParser.TRY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public TryCatchElseExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryCatchElseExpr_; }
	}

	public final TryCatchElseExpr_Context tryCatchElseExpr_() throws RecognitionException {
		TryCatchElseExpr_Context _localctx = new TryCatchElseExpr_Context(_ctx, getState());
		enterRule(_localctx, 106, RULE_tryCatchElseExpr_);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(985);
			match(TRY);
			{
			setState(986);
			((TryCatchElseExpr_Context)_localctx).body = block();
			}
			setState(990);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,122,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(987);
					((TryCatchElseExpr_Context)_localctx).catchClause = catchClause();
					((TryCatchElseExpr_Context)_localctx).catches.add(((TryCatchElseExpr_Context)_localctx).catchClause);
					}
					} 
				}
				setState(992);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,122,_ctx);
			}
			setState(994);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
			case 1:
				{
				setState(993);
				((TryCatchElseExpr_Context)_localctx).else_ = elseClause();
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
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	 
		public CatchClauseContext() { }
		public void copyFrom(CatchClauseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CatchContext extends CatchClauseContext {
		public TypeExprContext ty;
		public BlockContext body;
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchContext(CatchClauseContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CatchBindContext extends CatchClauseContext {
		public IdentContext name;
		public TypeExprContext ty;
		public BlockContext body;
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public CatchBindContext(CatchClauseContext ctx) { copyFrom(ctx); }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_catchClause);
		try {
			setState(1007);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
			case 1:
				_localctx = new CatchContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(996);
				match(CATCH);
				{
				setState(997);
				((CatchContext)_localctx).ty = typeExpr(0);
				}
				{
				setState(998);
				((CatchContext)_localctx).body = block();
				}
				}
				break;
			case 2:
				_localctx = new CatchBindContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1000);
				match(CATCH);
				{
				setState(1001);
				((CatchBindContext)_localctx).name = ident();
				}
				{
				setState(1002);
				match(COLON);
				{
				setState(1003);
				((CatchBindContext)_localctx).ty = typeExpr(0);
				}
				}
				{
				setState(1005);
				((CatchBindContext)_localctx).body = block();
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
	public static class ArgContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1012);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,125,_ctx) ) {
			case 1:
				{
				{
				setState(1009);
				((ArgContext)_localctx).name = ident();
				}
				setState(1010);
				match(EQ);
				}
				break;
			}
			{
			setState(1014);
			((ArgContext)_localctx).value = expr(0);
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
	public static class MemberValContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public MemberValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberVal; }
	}

	public final MemberValContext memberVal() throws RecognitionException {
		MemberValContext _localctx = new MemberValContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_memberVal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1016);
			((MemberValContext)_localctx).name = ident();
			}
			setState(1019);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(1017);
				match(COLON);
				{
				setState(1018);
				((MemberValContext)_localctx).value = expr(0);
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
	public static class LiteralContext extends ParserRuleContext {
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	 
		public LiteralContext() { }
		public void copyFrom(LiteralContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NoneLitContext extends LiteralContext {
		public TerminalNode NONE() { return getToken(CWScriptParser.NONE, 0); }
		public NoneLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecLitContext extends LiteralContext {
		public TerminalNode DecLiteral() { return getToken(CWScriptParser.DecLiteral, 0); }
		public DecLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntLitContext extends LiteralContext {
		public TerminalNode IntLiteral() { return getToken(CWScriptParser.IntLiteral, 0); }
		public IntLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BoolLitContext extends LiteralContext {
		public TerminalNode BoolLiteral() { return getToken(CWScriptParser.BoolLiteral, 0); }
		public BoolLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringLitContext extends LiteralContext {
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public StringLitContext(LiteralContext ctx) { copyFrom(ctx); }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_literal);
		try {
			setState(1026);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				_localctx = new StringLitContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1021);
				match(StringLiteral);
				}
				break;
			case IntLiteral:
				_localctx = new IntLitContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1022);
				match(IntLiteral);
				}
				break;
			case DecLiteral:
				_localctx = new DecLitContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1023);
				match(DecLiteral);
				}
				break;
			case BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(1024);
				match(BoolLiteral);
				}
				break;
			case NONE:
				_localctx = new NoneLitContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(1025);
				match(NONE);
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
	public static class IfStmt_Context extends ParserRuleContext {
		public ExprContext pred;
		public BlockContext body;
		public ElseClauseContext else_;
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public IfStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt_; }
	}

	public final IfStmt_Context ifStmt_() throws RecognitionException {
		IfStmt_Context _localctx = new IfStmt_Context(_ctx, getState());
		enterRule(_localctx, 116, RULE_ifStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1028);
			match(IF);
			{
			setState(1029);
			((IfStmt_Context)_localctx).pred = expr(0);
			}
			{
			setState(1030);
			((IfStmt_Context)_localctx).body = block();
			}
			setState(1032);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
			case 1:
				{
				setState(1031);
				((IfStmt_Context)_localctx).else_ = elseClause();
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
	public static class ElseClauseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public ElseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseClause; }
	}

	public final ElseClauseContext elseClause() throws RecognitionException {
		ElseClauseContext _localctx = new ElseClauseContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_elseClause);
		try {
			setState(1038);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1034);
				match(ELSE);
				setState(1035);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1036);
				match(ELSE);
				setState(1037);
				stmt();
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
	public static class ForStmt_Context extends ParserRuleContext {
		public Let_bindingContext binding;
		public ExprContext iter;
		public BlockContext body;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Let_bindingContext let_binding() {
			return getRuleContext(Let_bindingContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ForStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt_; }
	}

	public final ForStmt_Context forStmt_() throws RecognitionException {
		ForStmt_Context _localctx = new ForStmt_Context(_ctx, getState());
		enterRule(_localctx, 120, RULE_forStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1040);
			match(FOR);
			{
			setState(1041);
			((ForStmt_Context)_localctx).binding = let_binding();
			}
			setState(1042);
			match(IN);
			{
			setState(1043);
			((ForStmt_Context)_localctx).iter = expr(0);
			}
			setState(1044);
			((ForStmt_Context)_localctx).body = block();
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
		public TerminalNode Ident() { return getToken(CWScriptParser.Ident, 0); }
		public ReservedKeywordContext reservedKeyword() {
			return getRuleContext(ReservedKeywordContext.class,0);
		}
		public IdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ident; }
	}

	public final IdentContext ident() throws RecognitionException {
		IdentContext _localctx = new IdentContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1048);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ident:
				{
				setState(1046);
				match(Ident);
				}
				break;
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
			case EXTENDS:
			case ERROR:
			case EVENT:
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
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case STRUCT:
			case ENUM:
			case TYPE:
			case EMIT:
				{
				setState(1047);
				reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class ReservedKeywordContext extends ParserRuleContext {
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
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
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ReservedKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeyword; }
	}

	public final ReservedKeywordContext reservedKeyword() throws RecognitionException {
		ReservedKeywordContext _localctx = new ReservedKeywordContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1050);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8314058424828L) != 0)) ) {
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
		case 29:
			return typeExpr_sempred((TypeExprContext)_localctx, predIndex);
		case 49:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean typeExpr_sempred(TypeExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 29);
		case 3:
			return precpred(_ctx, 28);
		case 4:
			return precpred(_ctx, 27);
		case 5:
			return precpred(_ctx, 26);
		case 6:
			return precpred(_ctx, 24);
		case 7:
			return precpred(_ctx, 22);
		case 8:
			return precpred(_ctx, 21);
		case 9:
			return precpred(_ctx, 20);
		case 10:
			return precpred(_ctx, 19);
		case 11:
			return precpred(_ctx, 18);
		case 12:
			return precpred(_ctx, 17);
		case 13:
			return precpred(_ctx, 16);
		case 14:
			return precpred(_ctx, 15);
		case 15:
			return precpred(_ctx, 12);
		case 16:
			return precpred(_ctx, 11);
		case 17:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001^\u041d\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0001\u0000\u0001\u0000\u0005\u0000"+
		"\u0081\b\u0000\n\u0000\f\u0000\u0084\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u008c\b\u0001\u0001"+
		"\u0002\u0005\u0002\u008f\b\u0002\n\u0002\f\u0002\u0092\t\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u0098\b\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002\u009c\b\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0005\u0003\u00a1\b\u0003\n\u0003\f\u0003\u00a4\t\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u00aa\b\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0005\u0004\u00b0\b\u0004\n\u0004\f\u0004"+
		"\u00b3\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0005\u0005\u00c0\b\u0005\n\u0005\f\u0005\u00c3\t\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00ca\b\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u00dc\b\u0006\u0001"+
		"\u0007\u0005\u0007\u00df\b\u0007\n\u0007\f\u0007\u00e2\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0003\u0007\u00e6\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0003\u0007\u00ec\b\u0007\u0003\u0007\u00ee\b\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0005\b\u00f3\b\b\n\b\f\b\u00f6\t\b\u0001\t\u0001\t"+
		"\u0001\t\u0001\t\u0005\t\u00fc\b\t\n\t\f\t\u00ff\t\t\u0003\t\u0101\b\t"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u0110\b\f\n\f\f"+
		"\f\u0113\t\f\u0001\f\u0003\f\u0116\b\f\u0003\f\u0118\b\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0005\u000e\u0124\b\u000e\n\u000e\f\u000e\u0127\t\u000e\u0001"+
		"\u000e\u0003\u000e\u012a\b\u000e\u0003\u000e\u012c\b\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f\u0133\b\u000f"+
		"\n\u000f\f\u000f\u0136\t\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u013f\b\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u0146"+
		"\b\u0010\n\u0010\f\u0010\u0149\t\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0003\u0010\u0150\b\u0010\u0003\u0010\u0152\b"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0157\b\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0003\u0014\u0166\b\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0003\u0015\u016f\b\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u017b\b\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0003\u0017\u0185\b\u0017\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0003\u0018\u018a\b\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0003\u0019\u0196\b\u0019\u0005\u0019\u0198\b\u0019\n\u0019\f\u0019"+
		"\u019b\t\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0003\u001a"+
		"\u01a1\b\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0003\u001b"+
		"\u01a7\b\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u01af\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b"+
		"\u01b3\b\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0005\u001d"+
		"\u01c5\b\u001d\n\u001d\f\u001d\u01c8\t\u001d\u0003\u001d\u01ca\b\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0005\u001d\u01d2\b\u001d\n\u001d\f\u001d\u01d5\t\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0003\u001d\u01da\b\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u01e1\b\u001d\u0001\u001d\u0005"+
		"\u001d\u01e4\b\u001d\n\u001d\f\u001d\u01e7\t\u001d\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0003\u001e\u01ec\b\u001e\u0001\u001e\u0001\u001e\u0001\u001f"+
		"\u0001\u001f\u0003\u001f\u01f2\b\u001f\u0001\u001f\u0001\u001f\u0003\u001f"+
		"\u01f6\b\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001 "+
		"\u0001 \u0001 \u0001!\u0001!\u0001!\u0005!\u0202\b!\n!\f!\u0205\t!\u0001"+
		"\"\u0001\"\u0001\"\u0001\"\u0001\"\u0003\"\u020c\b\"\u0001\"\u0001\"\u0001"+
		"\"\u0001\"\u0001#\u0001#\u0001#\u0003#\u0215\b#\u0001$\u0001$\u0003$\u0219"+
		"\b$\u0001$\u0001$\u0001$\u0001$\u0005$\u021f\b$\n$\f$\u0222\t$\u0003$"+
		"\u0224\b$\u0001$\u0001$\u0001$\u0003$\u0229\b$\u0001$\u0001$\u0001$\u0001"+
		"$\u0005$\u022f\b$\n$\f$\u0232\t$\u0001$\u0003$\u0235\b$\u0001$\u0001$"+
		"\u0003$\u0239\b$\u0001%\u0001%\u0001%\u0001%\u0001%\u0001&\u0001&\u0001"+
		"&\u0003&\u0243\b&\u0001&\u0001&\u0001&\u0003&\u0248\b&\u0001&\u0001&\u0001"+
		"\'\u0001\'\u0003\'\u024e\b\'\u0001\'\u0001\'\u0001\'\u0003\'\u0253\b\'"+
		"\u0001\'\u0003\'\u0256\b\'\u0001(\u0001(\u0001(\u0001(\u0005(\u025c\b"+
		"(\n(\f(\u025f\t(\u0001(\u0003(\u0262\b(\u0003(\u0264\b(\u0001(\u0001("+
		"\u0001)\u0001)\u0001)\u0001)\u0005)\u026c\b)\n)\f)\u026f\t)\u0001)\u0001"+
		")\u0005)\u0273\b)\n)\f)\u0276\t)\u0001)\u0001)\u0005)\u027a\b)\n)\f)\u027d"+
		"\t)\u0001)\u0001)\u0005)\u0281\b)\n)\f)\u0284\t)\u0001)\u0001)\u0005)"+
		"\u0288\b)\n)\f)\u028b\t)\u0001)\u0001)\u0005)\u028f\b)\n)\f)\u0292\t)"+
		"\u0001)\u0001)\u0005)\u0296\b)\n)\f)\u0299\t)\u0001)\u0003)\u029c\b)\u0001"+
		")\u0001)\u0001)\u0005)\u02a1\b)\n)\f)\u02a4\t)\u0001)\u0003)\u02a7\b)"+
		"\u0001)\u0001)\u0001)\u0001)\u0005)\u02ad\b)\n)\f)\u02b0\t)\u0001)\u0003"+
		")\u02b3\b)\u0001)\u0001)\u0003)\u02b7\b)\u0001)\u0001)\u0005)\u02bb\b"+
		")\n)\f)\u02be\t)\u0001)\u0003)\u02c1\b)\u0001)\u0001)\u0001)\u0005)\u02c6"+
		"\b)\n)\f)\u02c9\t)\u0001)\u0001)\u0001)\u0005)\u02ce\b)\n)\f)\u02d1\t"+
		")\u0001)\u0001)\u0001)\u0005)\u02d6\b)\n)\f)\u02d9\t)\u0001)\u0003)\u02dc"+
		"\b)\u0001*\u0001*\u0001*\u0003*\u02e1\b*\u0001+\u0001+\u0001+\u0001+\u0003"+
		"+\u02e7\b+\u0001,\u0001,\u0001,\u0001,\u0001,\u0001-\u0001-\u0001-\u0003"+
		"-\u02f1\b-\u0001.\u0001.\u0001.\u0001.\u0005.\u02f7\b.\n.\f.\u02fa\t."+
		"\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0005.\u0302\b.\n.\f.\u0305"+
		"\t.\u0001.\u0001.\u0003.\u0309\b.\u0001/\u0001/\u0001/\u0001/\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00010\u00050\u0319"+
		"\b0\n0\f0\u031c\t0\u00010\u00010\u00030\u0320\b0\u00011\u00011\u00011"+
		"\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00031\u032d"+
		"\b1\u00011\u00011\u00011\u00011\u00051\u0333\b1\n1\f1\u0336\t1\u00031"+
		"\u0338\b1\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u0001"+
		"1\u00011\u00011\u00011\u00011\u00011\u00011\u00051\u0349\b1\n1\f1\u034c"+
		"\t1\u00031\u034e\b1\u00011\u00011\u00031\u0352\b1\u00011\u00011\u0001"+
		"1\u00011\u00051\u0358\b1\n1\f1\u035b\t1\u00011\u00031\u035e\b1\u00031"+
		"\u0360\b1\u00011\u00011\u00011\u00011\u00031\u0366\b1\u00011\u00011\u0003"+
		"1\u036a\b1\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u0001"+
		"1\u00011\u00051\u0376\b1\n1\f1\u0379\t1\u00011\u00011\u00011\u00011\u0001"+
		"1\u00011\u00011\u00031\u0382\b1\u00011\u00011\u00011\u00011\u00051\u0388"+
		"\b1\n1\f1\u038b\t1\u00031\u038d\b1\u00011\u00011\u00011\u00011\u00011"+
		"\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u0001"+
		"1\u00011\u00011\u00011\u00031\u03a1\b1\u00011\u00011\u00011\u00011\u0001"+
		"1\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u00011\u0001"+
		"1\u00051\u03b2\b1\n1\f1\u03b5\t1\u00012\u00012\u00012\u00012\u00052\u03bb"+
		"\b2\n2\f2\u03be\t2\u00032\u03c0\b2\u00012\u00012\u00013\u00033\u03c5\b"+
		"3\u00013\u00013\u00013\u00033\u03ca\b3\u00013\u00013\u00033\u03ce\b3\u0001"+
		"4\u00014\u00014\u00054\u03d3\b4\n4\f4\u03d6\t4\u00014\u00014\u00015\u0001"+
		"5\u00015\u00055\u03dd\b5\n5\f5\u03e0\t5\u00015\u00035\u03e3\b5\u00016"+
		"\u00016\u00016\u00016\u00016\u00016\u00016\u00016\u00016\u00016\u0001"+
		"6\u00036\u03f0\b6\u00017\u00017\u00017\u00037\u03f5\b7\u00017\u00017\u0001"+
		"8\u00018\u00018\u00038\u03fc\b8\u00019\u00019\u00019\u00019\u00019\u0003"+
		"9\u0403\b9\u0001:\u0001:\u0001:\u0001:\u0003:\u0409\b:\u0001;\u0001;\u0001"+
		";\u0001;\u0003;\u040f\b;\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0001"+
		"=\u0001=\u0003=\u0419\b=\u0001>\u0001>\u0001>\u0000\u0002:b?\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e"+
		" \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|\u0000\b\u0002\u0000"+
		"\u000e\u0010\u001d\u001d\u0006\u0000CCGGIIKKMMOO\u0001\u000067\u0003\u0000"+
		"JJLLNN\u0002\u0000FFHH\u0001\u0000PS\u0001\u0000DE\u0005\u0000\u0002\b"+
		"\u000e\u0016\u001a\u001a\u001e#\'*\u04a3\u0000\u0082\u0001\u0000\u0000"+
		"\u0000\u0002\u008b\u0001\u0000\u0000\u0000\u0004\u0090\u0001\u0000\u0000"+
		"\u0000\u0006\u00a2\u0001\u0000\u0000\u0000\b\u00ad\u0001\u0000\u0000\u0000"+
		"\n\u00c9\u0001\u0000\u0000\u0000\f\u00db\u0001\u0000\u0000\u0000\u000e"+
		"\u00e0\u0001\u0000\u0000\u0000\u0010\u00ef\u0001\u0000\u0000\u0000\u0012"+
		"\u00f7\u0001\u0000\u0000\u0000\u0014\u0104\u0001\u0000\u0000\u0000\u0016"+
		"\u0107\u0001\u0000\u0000\u0000\u0018\u010a\u0001\u0000\u0000\u0000\u001a"+
		"\u011b\u0001\u0000\u0000\u0000\u001c\u011e\u0001\u0000\u0000\u0000\u001e"+
		"\u012f\u0001\u0000\u0000\u0000 \u0151\u0001\u0000\u0000\u0000\"\u0156"+
		"\u0001\u0000\u0000\u0000$\u015a\u0001\u0000\u0000\u0000&\u015f\u0001\u0000"+
		"\u0000\u0000(\u0163\u0001\u0000\u0000\u0000*\u016c\u0001\u0000\u0000\u0000"+
		",\u0174\u0001\u0000\u0000\u0000.\u017e\u0001\u0000\u0000\u00000\u0186"+
		"\u0001\u0000\u0000\u00002\u018f\u0001\u0000\u0000\u00004\u01a0\u0001\u0000"+
		"\u0000\u00006\u01b2\u0001\u0000\u0000\u00008\u01b4\u0001\u0000\u0000\u0000"+
		":\u01d9\u0001\u0000\u0000\u0000<\u01eb\u0001\u0000\u0000\u0000>\u01ef"+
		"\u0001\u0000\u0000\u0000@\u01fb\u0001\u0000\u0000\u0000B\u01fe\u0001\u0000"+
		"\u0000\u0000D\u0206\u0001\u0000\u0000\u0000F\u0214\u0001\u0000\u0000\u0000"+
		"H\u0238\u0001\u0000\u0000\u0000J\u023a\u0001\u0000\u0000\u0000L\u023f"+
		"\u0001\u0000\u0000\u0000N\u024b\u0001\u0000\u0000\u0000P\u0257\u0001\u0000"+
		"\u0000\u0000R\u02db\u0001\u0000\u0000\u0000T\u02dd\u0001\u0000\u0000\u0000"+
		"V\u02e2\u0001\u0000\u0000\u0000X\u02e8\u0001\u0000\u0000\u0000Z\u02ed"+
		"\u0001\u0000\u0000\u0000\\\u0308\u0001\u0000\u0000\u0000^\u030a\u0001"+
		"\u0000\u0000\u0000`\u031f\u0001\u0000\u0000\u0000b\u0365\u0001\u0000\u0000"+
		"\u0000d\u03b6\u0001\u0000\u0000\u0000f\u03c4\u0001\u0000\u0000\u0000h"+
		"\u03cf\u0001\u0000\u0000\u0000j\u03d9\u0001\u0000\u0000\u0000l\u03ef\u0001"+
		"\u0000\u0000\u0000n\u03f4\u0001\u0000\u0000\u0000p\u03f8\u0001\u0000\u0000"+
		"\u0000r\u0402\u0001\u0000\u0000\u0000t\u0404\u0001\u0000\u0000\u0000v"+
		"\u040e\u0001\u0000\u0000\u0000x\u0410\u0001\u0000\u0000\u0000z\u0418\u0001"+
		"\u0000\u0000\u0000|\u041a\u0001\u0000\u0000\u0000~\u0081\u0003\u0002\u0001"+
		"\u0000\u007f\u0081\u00058\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080"+
		"\u007f\u0001\u0000\u0000\u0000\u0081\u0084\u0001\u0000\u0000\u0000\u0082"+
		"\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083"+
		"\u0085\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0085"+
		"\u0086\u0005\u0000\u0000\u0001\u0086\u0001\u0001\u0000\u0000\u0000\u0087"+
		"\u008c\u0003\n\u0005\u0000\u0088\u008c\u0003\u0004\u0002\u0000\u0089\u008c"+
		"\u0003\u0006\u0003\u0000\u008a\u008c\u0003R)\u0000\u008b\u0087\u0001\u0000"+
		"\u0000\u0000\u008b\u0088\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000"+
		"\u0000\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c\u0003\u0001\u0000"+
		"\u0000\u0000\u008d\u008f\u0003N\'\u0000\u008e\u008d\u0001\u0000\u0000"+
		"\u0000\u008f\u0092\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000"+
		"\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u0093\u0001\u0000\u0000"+
		"\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0093\u0094\u0005\u0002\u0000"+
		"\u0000\u0094\u0097\u0003z=\u0000\u0095\u0096\u0005\u0006\u0000\u0000\u0096"+
		"\u0098\u0003B!\u0000\u0097\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001"+
		"\u0000\u0000\u0000\u0098\u009b\u0001\u0000\u0000\u0000\u0099\u009a\u0005"+
		"\u0005\u0000\u0000\u009a\u009c\u0003B!\u0000\u009b\u0099\u0001\u0000\u0000"+
		"\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0003\b\u0004\u0000\u009e\u0005\u0001\u0000\u0000\u0000"+
		"\u009f\u00a1\u0003N\'\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a1"+
		"\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a5\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a2\u0001\u0000\u0000\u0000\u00a5\u00a6\u0005\u0003\u0000\u0000\u00a6"+
		"\u00a9\u0003z=\u0000\u00a7\u00a8\u0005\u0006\u0000\u0000\u00a8\u00aa\u0003"+
		"B!\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000"+
		"\u0000\u00aa\u00ab\u0001\u0000\u0000\u0000\u00ab\u00ac\u0003\b\u0004\u0000"+
		"\u00ac\u0007\u0001\u0000\u0000\u0000\u00ad\u00b1\u00051\u0000\u0000\u00ae"+
		"\u00b0\u0003\f\u0006\u0000\u00af\u00ae\u0001\u0000\u0000\u0000\u00b0\u00b3"+
		"\u0001\u0000\u0000\u0000\u00b1\u00af\u0001\u0000\u0000\u0000\u00b1\u00b2"+
		"\u0001\u0000\u0000\u0000\u00b2\u00b4\u0001\u0000\u0000\u0000\u00b3\u00b1"+
		"\u0001\u0000\u0000\u0000\u00b4\u00b5\u00052\u0000\u0000\u00b5\t\u0001"+
		"\u0000\u0000\u0000\u00b6\u00b7\u0005\u0004\u0000\u0000\u00b7\u00b8\u0005"+
		"J\u0000\u0000\u00b8\u00b9\u0005\u0014\u0000\u0000\u00b9\u00ca\u0005V\u0000"+
		"\u0000\u00ba\u00bb\u0005\u0004\u0000\u0000\u00bb\u00bc\u00051\u0000\u0000"+
		"\u00bc\u00c1\u0003z=\u0000\u00bd\u00be\u00054\u0000\u0000\u00be\u00c0"+
		"\u0003z=\u0000\u00bf\u00bd\u0001\u0000\u0000\u0000\u00c0\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c1\u00c2\u0001\u0000"+
		"\u0000\u0000\u00c2\u00c4\u0001\u0000\u0000\u0000\u00c3\u00c1\u0001\u0000"+
		"\u0000\u0000\u00c4\u00c5\u00052\u0000\u0000\u00c5\u00c6\u0001\u0000\u0000"+
		"\u0000\u00c6\u00c7\u0005\u0014\u0000\u0000\u00c7\u00c8\u0005V\u0000\u0000"+
		"\u00c8\u00ca\u0001\u0000\u0000\u0000\u00c9\u00b6\u0001\u0000\u0000\u0000"+
		"\u00c9\u00ba\u0001\u0000\u0000\u0000\u00ca\u000b\u0001\u0000\u0000\u0000"+
		"\u00cb\u00dc\u0003F#\u0000\u00cc\u00dc\u0003X,\u0000\u00cd\u00dc\u0003"+
		"L&\u0000\u00ce\u00dc\u0003\u0016\u000b\u0000\u00cf\u00dc\u0003\u0018\f"+
		"\u0000\u00d0\u00dc\u0003\u001a\r\u0000\u00d1\u00dc\u0003\u001c\u000e\u0000"+
		"\u00d2\u00dc\u0003\u001e\u000f\u0000\u00d3\u00dc\u0003$\u0012\u0000\u00d4"+
		"\u00dc\u0003&\u0013\u0000\u00d5\u00dc\u0003(\u0014\u0000\u00d6\u00dc\u0003"+
		"*\u0015\u0000\u00d7\u00dc\u0003,\u0016\u0000\u00d8\u00dc\u0003,\u0016"+
		"\u0000\u00d9\u00dc\u0003.\u0017\u0000\u00da\u00dc\u00030\u0018\u0000\u00db"+
		"\u00cb\u0001\u0000\u0000\u0000\u00db\u00cc\u0001\u0000\u0000\u0000\u00db"+
		"\u00cd\u0001\u0000\u0000\u0000\u00db\u00ce\u0001\u0000\u0000\u0000\u00db"+
		"\u00cf\u0001\u0000\u0000\u0000\u00db\u00d0\u0001\u0000\u0000\u0000\u00db"+
		"\u00d1\u0001\u0000\u0000\u0000\u00db\u00d2\u0001\u0000\u0000\u0000\u00db"+
		"\u00d3\u0001\u0000\u0000\u0000\u00db\u00d4\u0001\u0000\u0000\u0000\u00db"+
		"\u00d5\u0001\u0000\u0000\u0000\u00db\u00d6\u0001\u0000\u0000\u0000\u00db"+
		"\u00d7\u0001\u0000\u0000\u0000\u00db\u00d8\u0001\u0000\u0000\u0000\u00db"+
		"\u00d9\u0001\u0000\u0000\u0000\u00db\u00da\u0001\u0000\u0000\u0000\u00dc"+
		"\r\u0001\u0000\u0000\u0000\u00dd\u00df\u0003N\'\u0000\u00de\u00dd\u0001"+
		"\u0000\u0000\u0000\u00df\u00e2\u0001\u0000\u0000\u0000\u00e0\u00de\u0001"+
		"\u0000\u0000\u0000\u00e0\u00e1\u0001\u0000\u0000\u0000\u00e1\u00e3\u0001"+
		"\u0000\u0000\u0000\u00e2\u00e0\u0001\u0000\u0000\u0000\u00e3\u00e5\u0003"+
		"z=\u0000\u00e4\u00e6\u00056\u0000\u0000\u00e5\u00e4\u0001\u0000\u0000"+
		"\u0000\u00e5\u00e6\u0001\u0000\u0000\u0000\u00e6\u00ed\u0001\u0000\u0000"+
		"\u0000\u00e7\u00e8\u00059\u0000\u0000\u00e8\u00eb\u0003:\u001d\u0000\u00e9"+
		"\u00ea\u0005C\u0000\u0000\u00ea\u00ec\u0003b1\u0000\u00eb\u00e9\u0001"+
		"\u0000\u0000\u0000\u00eb\u00ec\u0001\u0000\u0000\u0000\u00ec\u00ee\u0001"+
		"\u0000\u0000\u0000\u00ed\u00e7\u0001\u0000\u0000\u0000\u00ed\u00ee\u0001"+
		"\u0000\u0000\u0000\u00ee\u000f\u0001\u0000\u0000\u0000\u00ef\u00f4\u0003"+
		"\u000e\u0007\u0000\u00f0\u00f1\u00054\u0000\u0000\u00f1\u00f3\u0003\u000e"+
		"\u0007\u0000\u00f2\u00f0\u0001\u0000\u0000\u0000\u00f3\u00f6\u0001\u0000"+
		"\u0000\u0000\u00f4\u00f2\u0001\u0000\u0000\u0000\u00f4\u00f5\u0001\u0000"+
		"\u0000\u0000\u00f5\u0011\u0001\u0000\u0000\u0000\u00f6\u00f4\u0001\u0000"+
		"\u0000\u0000\u00f7\u0100\u0005-\u0000\u0000\u00f8\u00fd\u0003\u000e\u0007"+
		"\u0000\u00f9\u00fa\u00054\u0000\u0000\u00fa\u00fc\u0003\u000e\u0007\u0000"+
		"\u00fb\u00f9\u0001\u0000\u0000\u0000\u00fc\u00ff\u0001\u0000\u0000\u0000"+
		"\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000"+
		"\u00fe\u0101\u0001\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000\u0000\u0000"+
		"\u0100\u00f8\u0001\u0000\u0000\u0000\u0100\u0101\u0001\u0000\u0000\u0000"+
		"\u0101\u0102\u0001\u0000\u0000\u0000\u0102\u0103\u0005.\u0000\u0000\u0103"+
		"\u0013\u0001\u0000\u0000\u0000\u0104\u0105\u0003z=\u0000\u0105\u0106\u0003"+
		"\u0012\t\u0000\u0106\u0015\u0001\u0000\u0000\u0000\u0107\u0108\u0005\u0007"+
		"\u0000\u0000\u0108\u0109\u0003\u0014\n\u0000\u0109\u0017\u0001\u0000\u0000"+
		"\u0000\u010a\u010b\u0005\u0007\u0000\u0000\u010b\u0117\u00051\u0000\u0000"+
		"\u010c\u0111\u0003\u0014\n\u0000\u010d\u010e\u00054\u0000\u0000\u010e"+
		"\u0110\u0003\u0014\n\u0000\u010f\u010d\u0001\u0000\u0000\u0000\u0110\u0113"+
		"\u0001\u0000\u0000\u0000\u0111\u010f\u0001\u0000\u0000\u0000\u0111\u0112"+
		"\u0001\u0000\u0000\u0000\u0112\u0115\u0001\u0000\u0000\u0000\u0113\u0111"+
		"\u0001\u0000\u0000\u0000\u0114\u0116\u00054\u0000\u0000\u0115\u0114\u0001"+
		"\u0000\u0000\u0000\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u0118\u0001"+
		"\u0000\u0000\u0000\u0117\u010c\u0001\u0000\u0000\u0000\u0117\u0118\u0001"+
		"\u0000\u0000\u0000\u0118\u0119\u0001\u0000\u0000\u0000\u0119\u011a\u0005"+
		"2\u0000\u0000\u011a\u0019\u0001\u0000\u0000\u0000\u011b\u011c\u0005\b"+
		"\u0000\u0000\u011c\u011d\u0003\u0014\n\u0000\u011d\u001b\u0001\u0000\u0000"+
		"\u0000\u011e\u011f\u0005\b\u0000\u0000\u011f\u012b\u00051\u0000\u0000"+
		"\u0120\u0125\u0003\u0014\n\u0000\u0121\u0122\u00054\u0000\u0000\u0122"+
		"\u0124\u0003\u0014\n\u0000\u0123\u0121\u0001\u0000\u0000\u0000\u0124\u0127"+
		"\u0001\u0000\u0000\u0000\u0125\u0123\u0001\u0000\u0000\u0000\u0125\u0126"+
		"\u0001\u0000\u0000\u0000\u0126\u0129\u0001\u0000\u0000\u0000\u0127\u0125"+
		"\u0001\u0000\u0000\u0000\u0128\u012a\u00054\u0000\u0000\u0129\u0128\u0001"+
		"\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a\u012c\u0001"+
		"\u0000\u0000\u0000\u012b\u0120\u0001\u0000\u0000\u0000\u012b\u012c\u0001"+
		"\u0000\u0000\u0000\u012c\u012d\u0001\u0000\u0000\u0000\u012d\u012e\u0005"+
		"2\u0000\u0000\u012e\u001d\u0001\u0000\u0000\u0000\u012f\u0130\u0005\u0015"+
		"\u0000\u0000\u0130\u0134\u00051\u0000\u0000\u0131\u0133\u0003 \u0010\u0000"+
		"\u0132\u0131\u0001\u0000\u0000\u0000\u0133\u0136\u0001\u0000\u0000\u0000"+
		"\u0134\u0132\u0001\u0000\u0000\u0000\u0134\u0135\u0001\u0000\u0000\u0000"+
		"\u0135\u0137\u0001\u0000\u0000\u0000\u0136\u0134\u0001\u0000\u0000\u0000"+
		"\u0137\u0138\u00052\u0000\u0000\u0138\u001f\u0001\u0000\u0000\u0000\u0139"+
		"\u013a\u0003z=\u0000\u013a\u013b\u00059\u0000\u0000\u013b\u013e\u0003"+
		":\u001d\u0000\u013c\u013d\u0005C\u0000\u0000\u013d\u013f\u0003b1\u0000"+
		"\u013e\u013c\u0001\u0000\u0000\u0000\u013e\u013f\u0001\u0000\u0000\u0000"+
		"\u013f\u0152\u0001\u0000\u0000\u0000\u0140\u0141\u0003z=\u0000\u0141\u0142"+
		"\u0005/\u0000\u0000\u0142\u0147\u0003\"\u0011\u0000\u0143\u0144\u0005"+
		"4\u0000\u0000\u0144\u0146\u0003\"\u0011\u0000\u0145\u0143\u0001\u0000"+
		"\u0000\u0000\u0146\u0149\u0001\u0000\u0000\u0000\u0147\u0145\u0001\u0000"+
		"\u0000\u0000\u0147\u0148\u0001\u0000\u0000\u0000\u0148\u014a\u0001\u0000"+
		"\u0000\u0000\u0149\u0147\u0001\u0000\u0000\u0000\u014a\u014b\u00050\u0000"+
		"\u0000\u014b\u014c\u00059\u0000\u0000\u014c\u014f\u0003:\u001d\u0000\u014d"+
		"\u014e\u0005C\u0000\u0000\u014e\u0150\u0003b1\u0000\u014f\u014d\u0001"+
		"\u0000\u0000\u0000\u014f\u0150\u0001\u0000\u0000\u0000\u0150\u0152\u0001"+
		"\u0000\u0000\u0000\u0151\u0139\u0001\u0000\u0000\u0000\u0151\u0140\u0001"+
		"\u0000\u0000\u0000\u0152!\u0001\u0000\u0000\u0000\u0153\u0154\u0003z="+
		"\u0000\u0154\u0155\u00059\u0000\u0000\u0155\u0157\u0001\u0000\u0000\u0000"+
		"\u0156\u0153\u0001\u0000\u0000\u0000\u0156\u0157\u0001\u0000\u0000\u0000"+
		"\u0157\u0158\u0001\u0000\u0000\u0000\u0158\u0159\u0003:\u001d\u0000\u0159"+
		"#\u0001\u0000\u0000\u0000\u015a\u015b\u0005;\u0000\u0000\u015b\u015c\u0005"+
		"\u000e\u0000\u0000\u015c\u015d\u0003\u0012\t\u0000\u015d\u015e\u0003h"+
		"4\u0000\u015e%\u0001\u0000\u0000\u0000\u015f\u0160\u0005;\u0000\u0000"+
		"\u0160\u0161\u0005\u000e\u0000\u0000\u0161\u0162\u0003\u0012\t\u0000\u0162"+
		"\'\u0001\u0000\u0000\u0000\u0163\u0165\u0005\u000f\u0000\u0000\u0164\u0166"+
		"\u0005J\u0000\u0000\u0165\u0164\u0001\u0000\u0000\u0000\u0165\u0166\u0001"+
		"\u0000\u0000\u0000\u0166\u0167\u0001\u0000\u0000\u0000\u0167\u0168\u0005"+
		";\u0000\u0000\u0168\u0169\u0003z=\u0000\u0169\u016a\u0003\u0012\t\u0000"+
		"\u016a\u016b\u0003h4\u0000\u016b)\u0001\u0000\u0000\u0000\u016c\u016e"+
		"\u0005\u000f\u0000\u0000\u016d\u016f\u0005J\u0000\u0000\u016e\u016d\u0001"+
		"\u0000\u0000\u0000\u016e\u016f\u0001\u0000\u0000\u0000\u016f\u0170\u0001"+
		"\u0000\u0000\u0000\u0170\u0171\u0005;\u0000\u0000\u0171\u0172\u0003z="+
		"\u0000\u0172\u0173\u0003\u0012\t\u0000\u0173+\u0001\u0000\u0000\u0000"+
		"\u0174\u0175\u0005\u0010\u0000\u0000\u0175\u0176\u0005;\u0000\u0000\u0176"+
		"\u0177\u0003z=\u0000\u0177\u017a\u0003\u0012\t\u0000\u0178\u0179\u0005"+
		">\u0000\u0000\u0179\u017b\u0003:\u001d\u0000\u017a\u0178\u0001\u0000\u0000"+
		"\u0000\u017a\u017b\u0001\u0000\u0000\u0000\u017b\u017c\u0001\u0000\u0000"+
		"\u0000\u017c\u017d\u0003h4\u0000\u017d-\u0001\u0000\u0000\u0000\u017e"+
		"\u017f\u0005\u0010\u0000\u0000\u017f\u0180\u0005;\u0000\u0000\u0180\u0181"+
		"\u0003z=\u0000\u0181\u0184\u0003\u0012\t\u0000\u0182\u0183\u0005>\u0000"+
		"\u0000\u0183\u0185\u0003:\u001d\u0000\u0184\u0182\u0001\u0000\u0000\u0000"+
		"\u0184\u0185\u0001\u0000\u0000\u0000\u0185/\u0001\u0000\u0000\u0000\u0186"+
		"\u0189\u0005\u0011\u0000\u0000\u0187\u0188\u00053\u0000\u0000\u0188\u018a"+
		"\u0003z=\u0000\u0189\u0187\u0001\u0000\u0000\u0000\u0189\u018a\u0001\u0000"+
		"\u0000\u0000\u018a\u018b\u0001\u0000\u0000\u0000\u018b\u018c\u0003z=\u0000"+
		"\u018c\u018d\u0003\u0012\t\u0000\u018d\u018e\u0003h4\u0000\u018e1\u0001"+
		"\u0000\u0000\u0000\u018f\u0190\u0005(\u0000\u0000\u0190\u0191\u0003z="+
		"\u0000\u0191\u0192\u00051\u0000\u0000\u0192\u0199\u00034\u001a\u0000\u0193"+
		"\u0195\u00034\u001a\u0000\u0194\u0196\u00054\u0000\u0000\u0195\u0194\u0001"+
		"\u0000\u0000\u0000\u0195\u0196\u0001\u0000\u0000\u0000\u0196\u0198\u0001"+
		"\u0000\u0000\u0000\u0197\u0193\u0001\u0000\u0000\u0000\u0198\u019b\u0001"+
		"\u0000\u0000\u0000\u0199\u0197\u0001\u0000\u0000\u0000\u0199\u019a\u0001"+
		"\u0000\u0000\u0000\u019a\u019c\u0001\u0000\u0000\u0000\u019b\u0199\u0001"+
		"\u0000\u0000\u0000\u019c\u019d\u00052\u0000\u0000\u019d3\u0001\u0000\u0000"+
		"\u0000\u019e\u01a1\u00036\u001b\u0000\u019f\u01a1\u00038\u001c\u0000\u01a0"+
		"\u019e\u0001\u0000\u0000\u0000\u01a0\u019f\u0001\u0000\u0000\u0000\u01a1"+
		"5\u0001\u0000\u0000\u0000\u01a2\u01a3\u0005;\u0000\u0000\u01a3\u01a4\u0003"+
		"z=\u0000\u01a4\u01a6\u0005-\u0000\u0000\u01a5\u01a7\u0003\u0010\b\u0000"+
		"\u01a6\u01a5\u0001\u0000\u0000\u0000\u01a6\u01a7\u0001\u0000\u0000\u0000"+
		"\u01a7\u01a8\u0001\u0000\u0000\u0000\u01a8\u01a9\u0005.\u0000\u0000\u01a9"+
		"\u01b3\u0001\u0000\u0000\u0000\u01aa\u01ab\u0005;\u0000\u0000\u01ab\u01ac"+
		"\u0003z=\u0000\u01ac\u01ae\u00051\u0000\u0000\u01ad\u01af\u0003\u0010"+
		"\b\u0000\u01ae\u01ad\u0001\u0000\u0000\u0000\u01ae\u01af\u0001\u0000\u0000"+
		"\u0000\u01af\u01b0\u0001\u0000\u0000\u0000\u01b0\u01b1\u00052\u0000\u0000"+
		"\u01b1\u01b3\u0001\u0000\u0000\u0000\u01b2\u01a2\u0001\u0000\u0000\u0000"+
		"\u01b2\u01aa\u0001\u0000\u0000\u0000\u01b37\u0001\u0000\u0000\u0000\u01b4"+
		"\u01b5\u0005;\u0000\u0000\u01b5\u01b6\u0003z=\u0000\u01b69\u0001\u0000"+
		"\u0000\u0000\u01b7\u01b8\u0006\u001d\uffff\uffff\u0000\u01b8\u01b9\u0005"+
		"P\u0000\u0000\u01b9\u01ba\u0003:\u001d\u0000\u01ba\u01bb\u0005R\u0000"+
		"\u0000\u01bb\u01da\u0001\u0000\u0000\u0000\u01bc\u01da\u0003B!\u0000\u01bd"+
		"\u01da\u0003D\"\u0000\u01be\u01da\u0003@ \u0000\u01bf\u01da\u0003>\u001f"+
		"\u0000\u01c0\u01c9\u0005/\u0000\u0000\u01c1\u01c6\u0003:\u001d\u0000\u01c2"+
		"\u01c3\u00054\u0000\u0000\u01c3\u01c5\u0003:\u001d\u0000\u01c4\u01c2\u0001"+
		"\u0000\u0000\u0000\u01c5\u01c8\u0001\u0000\u0000\u0000\u01c6\u01c4\u0001"+
		"\u0000\u0000\u0000\u01c6\u01c7\u0001\u0000\u0000\u0000\u01c7\u01ca\u0001"+
		"\u0000\u0000\u0000\u01c8\u01c6\u0001\u0000\u0000\u0000\u01c9\u01c1\u0001"+
		"\u0000\u0000\u0000\u01c9\u01ca\u0001\u0000\u0000\u0000\u01ca\u01cb\u0001"+
		"\u0000\u0000\u0000\u01cb\u01da\u00050\u0000\u0000\u01cc\u01cd\u0003B!"+
		"\u0000\u01cd\u01ce\u0005P\u0000\u0000\u01ce\u01d3\u0003<\u001e\u0000\u01cf"+
		"\u01d0\u00054\u0000\u0000\u01d0\u01d2\u0003<\u001e\u0000\u01d1\u01cf\u0001"+
		"\u0000\u0000\u0000\u01d2\u01d5\u0001\u0000\u0000\u0000\u01d3\u01d1\u0001"+
		"\u0000\u0000\u0000\u01d3\u01d4\u0001\u0000\u0000\u0000\u01d4\u01d6\u0001"+
		"\u0000\u0000\u0000\u01d5\u01d3\u0001\u0000\u0000\u0000\u01d6\u01d7\u0005"+
		"R\u0000\u0000\u01d7\u01da\u0001\u0000\u0000\u0000\u01d8\u01da\u0003F#"+
		"\u0000\u01d9\u01b7\u0001\u0000\u0000\u0000\u01d9\u01bc\u0001\u0000\u0000"+
		"\u0000\u01d9\u01bd\u0001\u0000\u0000\u0000\u01d9\u01be\u0001\u0000\u0000"+
		"\u0000\u01d9\u01bf\u0001\u0000\u0000\u0000\u01d9\u01c0\u0001\u0000\u0000"+
		"\u0000\u01d9\u01cc\u0001\u0000\u0000\u0000\u01d9\u01d8\u0001\u0000\u0000"+
		"\u0000\u01da\u01e5\u0001\u0000\u0000\u0000\u01db\u01dc\n\u0005\u0000\u0000"+
		"\u01dc\u01e4\u00056\u0000\u0000\u01dd\u01de\n\u0004\u0000\u0000\u01de"+
		"\u01e0\u0005/\u0000\u0000\u01df\u01e1\u0005W\u0000\u0000\u01e0\u01df\u0001"+
		"\u0000\u0000\u0000\u01e0\u01e1\u0001\u0000\u0000\u0000\u01e1\u01e2\u0001"+
		"\u0000\u0000\u0000\u01e2\u01e4\u00050\u0000\u0000\u01e3\u01db\u0001\u0000"+
		"\u0000\u0000\u01e3\u01dd\u0001\u0000\u0000\u0000\u01e4\u01e7\u0001\u0000"+
		"\u0000\u0000\u01e5\u01e3\u0001\u0000\u0000\u0000\u01e5\u01e6\u0001\u0000"+
		"\u0000\u0000\u01e6;\u0001\u0000\u0000\u0000\u01e7\u01e5\u0001\u0000\u0000"+
		"\u0000\u01e8\u01e9\u0003z=\u0000\u01e9\u01ea\u0005C\u0000\u0000\u01ea"+
		"\u01ec\u0001\u0000\u0000\u0000\u01eb\u01e8\u0001\u0000\u0000\u0000\u01eb"+
		"\u01ec\u0001\u0000\u0000\u0000\u01ec\u01ed\u0001\u0000\u0000\u0000\u01ed"+
		"\u01ee\u0003:\u001d\u0000\u01ee=\u0001\u0000\u0000\u0000\u01ef\u01f1\u0005"+
		"\"\u0000\u0000\u01f0\u01f2\u00057\u0000\u0000\u01f1\u01f0\u0001\u0000"+
		"\u0000\u0000\u01f1\u01f2\u0001\u0000\u0000\u0000\u01f2\u01f3\u0001\u0000"+
		"\u0000\u0000\u01f3\u01f5\u0005-\u0000\u0000\u01f4\u01f6\u0003\u0010\b"+
		"\u0000\u01f5\u01f4\u0001\u0000\u0000\u0000\u01f5\u01f6\u0001\u0000\u0000"+
		"\u0000\u01f6\u01f7\u0001\u0000\u0000\u0000\u01f7\u01f8\u0005.\u0000\u0000"+
		"\u01f8\u01f9\u0005>\u0000\u0000\u01f9\u01fa\u0003:\u001d\u0000\u01fa?"+
		"\u0001\u0000\u0000\u0000\u01fb\u01fc\u0007\u0000\u0000\u0000\u01fc\u01fd"+
		"\u0003B!\u0000\u01fdA\u0001\u0000\u0000\u0000\u01fe\u0203\u0003z=\u0000"+
		"\u01ff\u0200\u00053\u0000\u0000\u0200\u0202\u0003z=\u0000\u0201\u01ff"+
		"\u0001\u0000\u0000\u0000\u0202\u0205\u0001\u0000\u0000\u0000\u0203\u0201"+
		"\u0001\u0000\u0000\u0000\u0203\u0204\u0001\u0000\u0000\u0000\u0204C\u0001"+
		"\u0000\u0000\u0000\u0205\u0203\u0001\u0000\u0000\u0000\u0206\u020b\u0003"+
		"B!\u0000\u0207\u0208\u0005-\u0000\u0000\u0208\u0209\u0003b1\u0000\u0209"+
		"\u020a\u0005.\u0000\u0000\u020a\u020c\u0001\u0000\u0000\u0000\u020b\u0207"+
		"\u0001\u0000\u0000\u0000\u020b\u020c\u0001\u0000\u0000\u0000\u020c\u020d"+
		"\u0001\u0000\u0000\u0000\u020d\u020e\u00053\u0000\u0000\u020e\u020f\u0005"+
		";\u0000\u0000\u020f\u0210\u0003z=\u0000\u0210E\u0001\u0000\u0000\u0000"+
		"\u0211\u0215\u0003H$\u0000\u0212\u0215\u00032\u0019\u0000\u0213\u0215"+
		"\u0003J%\u0000\u0214\u0211\u0001\u0000\u0000\u0000\u0214\u0212\u0001\u0000"+
		"\u0000\u0000\u0214\u0213\u0001\u0000\u0000\u0000\u0215G\u0001\u0000\u0000"+
		"\u0000\u0216\u0218\u0005\'\u0000\u0000\u0217\u0219\u0003z=\u0000\u0218"+
		"\u0217\u0001\u0000\u0000\u0000\u0218\u0219\u0001\u0000\u0000\u0000\u0219"+
		"\u021a\u0001\u0000\u0000\u0000\u021a\u0223\u0005-\u0000\u0000\u021b\u0220"+
		"\u0003\u000e\u0007\u0000\u021c\u021d\u00054\u0000\u0000\u021d\u021f\u0003"+
		"\u000e\u0007\u0000\u021e\u021c\u0001\u0000\u0000\u0000\u021f\u0222\u0001"+
		"\u0000\u0000\u0000\u0220\u021e\u0001\u0000\u0000\u0000\u0220\u0221\u0001"+
		"\u0000\u0000\u0000\u0221\u0224\u0001\u0000\u0000\u0000\u0222\u0220\u0001"+
		"\u0000\u0000\u0000\u0223\u021b\u0001\u0000\u0000\u0000\u0223\u0224\u0001"+
		"\u0000\u0000\u0000\u0224\u0225\u0001\u0000\u0000\u0000\u0225\u0239\u0005"+
		".\u0000\u0000\u0226\u0228\u0005\'\u0000\u0000\u0227\u0229\u0003z=\u0000"+
		"\u0228\u0227\u0001\u0000\u0000\u0000\u0228\u0229\u0001\u0000\u0000\u0000"+
		"\u0229\u022a\u0001\u0000\u0000\u0000\u022a\u022b\u00051\u0000\u0000\u022b"+
		"\u0230\u0003\u000e\u0007\u0000\u022c\u022d\u00054\u0000\u0000\u022d\u022f"+
		"\u0003\u000e\u0007\u0000\u022e\u022c\u0001\u0000\u0000\u0000\u022f\u0232"+
		"\u0001\u0000\u0000\u0000\u0230\u022e\u0001\u0000\u0000\u0000\u0230\u0231"+
		"\u0001\u0000\u0000\u0000\u0231\u0234\u0001\u0000\u0000\u0000\u0232\u0230"+
		"\u0001\u0000\u0000\u0000\u0233\u0235\u00054\u0000\u0000\u0234\u0233\u0001"+
		"\u0000\u0000\u0000\u0234\u0235\u0001\u0000\u0000\u0000\u0235\u0236\u0001"+
		"\u0000\u0000\u0000\u0236\u0237\u00052\u0000\u0000\u0237\u0239\u0001\u0000"+
		"\u0000\u0000\u0238\u0216\u0001\u0000\u0000\u0000\u0238\u0226\u0001\u0000"+
		"\u0000\u0000\u0239I\u0001\u0000\u0000\u0000\u023a\u023b\u0005)\u0000\u0000"+
		"\u023b\u023c\u0003z=\u0000\u023c\u023d\u0005C\u0000\u0000\u023d\u023e"+
		"\u0003:\u001d\u0000\u023eK\u0001\u0000\u0000\u0000\u023f\u0240\u0005\""+
		"\u0000\u0000\u0240\u0242\u0003z=\u0000\u0241\u0243\u00057\u0000\u0000"+
		"\u0242\u0241\u0001\u0000\u0000\u0000\u0242\u0243\u0001\u0000\u0000\u0000"+
		"\u0243\u0244\u0001\u0000\u0000\u0000\u0244\u0247\u0003\u0012\t\u0000\u0245"+
		"\u0246\u0005>\u0000\u0000\u0246\u0248\u0003:\u001d\u0000\u0247\u0245\u0001"+
		"\u0000\u0000\u0000\u0247\u0248\u0001\u0000\u0000\u0000\u0248\u0249\u0001"+
		"\u0000\u0000\u0000\u0249\u024a\u0003h4\u0000\u024aM\u0001\u0000\u0000"+
		"\u0000\u024b\u024d\u0005<\u0000\u0000\u024c\u024e\u0005<\u0000\u0000\u024d"+
		"\u024c\u0001\u0000\u0000\u0000\u024d\u024e\u0001\u0000\u0000\u0000\u024e"+
		"\u024f\u0001\u0000\u0000\u0000\u024f\u0255\u0003B!\u0000\u0250\u0252\u0005"+
		"-\u0000\u0000\u0251\u0253\u0003n7\u0000\u0252\u0251\u0001\u0000\u0000"+
		"\u0000\u0252\u0253\u0001\u0000\u0000\u0000\u0253\u0254\u0001\u0000\u0000"+
		"\u0000\u0254\u0256\u0005.\u0000\u0000\u0255\u0250\u0001\u0000\u0000\u0000"+
		"\u0255\u0256\u0001\u0000\u0000\u0000\u0256O\u0001\u0000\u0000\u0000\u0257"+
		"\u0263\u00051\u0000\u0000\u0258\u025d\u0003p8\u0000\u0259\u025a\u0005"+
		"4\u0000\u0000\u025a\u025c\u0003p8\u0000\u025b\u0259\u0001\u0000\u0000"+
		"\u0000\u025c\u025f\u0001\u0000\u0000\u0000\u025d\u025b\u0001\u0000\u0000"+
		"\u0000\u025d\u025e\u0001\u0000\u0000\u0000\u025e\u0261\u0001\u0000\u0000"+
		"\u0000\u025f\u025d\u0001\u0000\u0000\u0000\u0260\u0262\u00054\u0000\u0000"+
		"\u0261\u0260\u0001\u0000\u0000\u0000\u0261\u0262\u0001\u0000\u0000\u0000"+
		"\u0262\u0264\u0001\u0000\u0000\u0000\u0263\u0258\u0001\u0000\u0000\u0000"+
		"\u0263\u0264\u0001\u0000\u0000\u0000\u0264\u0265\u0001\u0000\u0000\u0000"+
		"\u0265\u0266\u00052\u0000\u0000\u0266Q\u0001\u0000\u0000\u0000\u0267\u0268"+
		"\u0003N\'\u0000\u0268\u0269\u0003h4\u0000\u0269\u02dc\u0001\u0000\u0000"+
		"\u0000\u026a\u026c\u0003N\'\u0000\u026b\u026a\u0001\u0000\u0000\u0000"+
		"\u026c\u026f\u0001\u0000\u0000\u0000\u026d\u026b\u0001\u0000\u0000\u0000"+
		"\u026d\u026e\u0001\u0000\u0000\u0000\u026e\u0270\u0001\u0000\u0000\u0000"+
		"\u026f\u026d\u0001\u0000\u0000\u0000\u0270\u02dc\u0003T*\u0000\u0271\u0273"+
		"\u0003N\'\u0000\u0272\u0271\u0001\u0000\u0000\u0000\u0273\u0276\u0001"+
		"\u0000\u0000\u0000\u0274\u0272\u0001\u0000\u0000\u0000\u0274\u0275\u0001"+
		"\u0000\u0000\u0000\u0275\u0277\u0001\u0000\u0000\u0000\u0276\u0274\u0001"+
		"\u0000\u0000\u0000\u0277\u02dc\u0003V+\u0000\u0278\u027a\u0003N\'\u0000"+
		"\u0279\u0278\u0001\u0000\u0000\u0000\u027a\u027d\u0001\u0000\u0000\u0000"+
		"\u027b\u0279\u0001\u0000\u0000\u0000\u027b\u027c\u0001\u0000\u0000\u0000"+
		"\u027c\u027e\u0001\u0000\u0000\u0000\u027d\u027b\u0001\u0000\u0000\u0000"+
		"\u027e\u02dc\u0003X,\u0000\u027f\u0281\u0003N\'\u0000\u0280\u027f\u0001"+
		"\u0000\u0000\u0000\u0281\u0284\u0001\u0000\u0000\u0000\u0282\u0280\u0001"+
		"\u0000\u0000\u0000\u0282\u0283\u0001\u0000\u0000\u0000\u0283\u0285\u0001"+
		"\u0000\u0000\u0000\u0284\u0282\u0001\u0000\u0000\u0000\u0285\u02dc\u0003"+
		"^/\u0000\u0286\u0288\u0003N\'\u0000\u0287\u0286\u0001\u0000\u0000\u0000"+
		"\u0288\u028b\u0001\u0000\u0000\u0000\u0289\u0287\u0001\u0000\u0000\u0000"+
		"\u0289\u028a\u0001\u0000\u0000\u0000\u028a\u028c\u0001\u0000\u0000\u0000"+
		"\u028b\u0289\u0001\u0000\u0000\u0000\u028c\u02dc\u0003t:\u0000\u028d\u028f"+
		"\u0003N\'\u0000\u028e\u028d\u0001\u0000\u0000\u0000\u028f\u0292\u0001"+
		"\u0000\u0000\u0000\u0290\u028e\u0001\u0000\u0000\u0000\u0290\u0291\u0001"+
		"\u0000\u0000\u0000\u0291\u0293\u0001\u0000\u0000\u0000\u0292\u0290\u0001"+
		"\u0000\u0000\u0000\u0293\u02dc\u0003x<\u0000\u0294\u0296\u0003N\'\u0000"+
		"\u0295\u0294\u0001\u0000\u0000\u0000\u0296\u0299\u0001\u0000\u0000\u0000"+
		"\u0297\u0295\u0001\u0000\u0000\u0000\u0297\u0298\u0001\u0000\u0000\u0000"+
		"\u0298\u029b\u0001\u0000\u0000\u0000\u0299\u0297\u0001\u0000\u0000\u0000"+
		"\u029a\u029c\u0005\t\u0000\u0000\u029b\u029a\u0001\u0000\u0000\u0000\u029b"+
		"\u029c\u0001\u0000\u0000\u0000\u029c\u029d\u0001\u0000\u0000\u0000\u029d"+
		"\u029e\u0005\u000b\u0000\u0000\u029e\u02dc\u0003b1\u0000\u029f\u02a1\u0003"+
		"N\'\u0000\u02a0\u029f\u0001\u0000\u0000\u0000\u02a1\u02a4\u0001\u0000"+
		"\u0000\u0000\u02a2\u02a0\u0001\u0000\u0000\u0000\u02a2\u02a3\u0001\u0000"+
		"\u0000\u0000\u02a3\u02a6\u0001\u0000\u0000\u0000\u02a4\u02a2\u0001\u0000"+
		"\u0000\u0000\u02a5\u02a7\u0005\t\u0000\u0000\u02a6\u02a5\u0001\u0000\u0000"+
		"\u0000\u02a6\u02a7\u0001\u0000\u0000\u0000\u02a7\u02a8\u0001\u0000\u0000"+
		"\u0000\u02a8\u02a9\u0005\r\u0000\u0000\u02a9\u02aa\u0005;\u0000\u0000"+
		"\u02aa\u02dc\u0003b1\u0000\u02ab\u02ad\u0003N\'\u0000\u02ac\u02ab\u0001"+
		"\u0000\u0000\u0000\u02ad\u02b0\u0001\u0000\u0000\u0000\u02ae\u02ac\u0001"+
		"\u0000\u0000\u0000\u02ae\u02af\u0001\u0000\u0000\u0000\u02af\u02b2\u0001"+
		"\u0000\u0000\u0000\u02b0\u02ae\u0001\u0000\u0000\u0000\u02b1\u02b3\u0005"+
		"\t\u0000\u0000\u02b2\u02b1\u0001\u0000\u0000\u0000\u02b2\u02b3\u0001\u0000"+
		"\u0000\u0000\u02b3\u02b4\u0001\u0000\u0000\u0000\u02b4\u02b6\u0005\n\u0000"+
		"\u0000\u02b5\u02b7\u0005;\u0000\u0000\u02b6\u02b5\u0001\u0000\u0000\u0000"+
		"\u02b6\u02b7\u0001\u0000\u0000\u0000\u02b7\u02b8\u0001\u0000\u0000\u0000"+
		"\u02b8\u02dc\u0003b1\u0000\u02b9\u02bb\u0003N\'\u0000\u02ba\u02b9\u0001"+
		"\u0000\u0000\u0000\u02bb\u02be\u0001\u0000\u0000\u0000\u02bc\u02ba\u0001"+
		"\u0000\u0000\u0000\u02bc\u02bd\u0001\u0000\u0000\u0000\u02bd\u02c0\u0001"+
		"\u0000\u0000\u0000\u02be\u02bc\u0001\u0000\u0000\u0000\u02bf\u02c1\u0005"+
		"\t\u0000\u0000\u02c0\u02bf\u0001\u0000\u0000\u0000\u02c0\u02c1\u0001\u0000"+
		"\u0000\u0000\u02c1\u02c2\u0001\u0000\u0000\u0000\u02c2\u02c3\u0005*\u0000"+
		"\u0000\u02c3\u02dc\u0003b1\u0000\u02c4\u02c6\u0003N\'\u0000\u02c5\u02c4"+
		"\u0001\u0000\u0000\u0000\u02c6\u02c9\u0001\u0000\u0000\u0000\u02c7\u02c5"+
		"\u0001\u0000\u0000\u0000\u02c7\u02c8\u0001\u0000\u0000\u0000\u02c8\u02ca"+
		"\u0001\u0000\u0000\u0000\u02c9\u02c7\u0001\u0000\u0000\u0000\u02ca\u02cb"+
		"\u0005&\u0000\u0000\u02cb\u02dc\u0003b1\u0000\u02cc\u02ce\u0003N\'\u0000"+
		"\u02cd\u02cc\u0001\u0000\u0000\u0000\u02ce\u02d1\u0001\u0000\u0000\u0000"+
		"\u02cf\u02cd\u0001\u0000\u0000\u0000\u02cf\u02d0\u0001\u0000\u0000\u0000"+
		"\u02d0\u02d2\u0001\u0000\u0000\u0000\u02d1\u02cf\u0001\u0000\u0000\u0000"+
		"\u02d2\u02d3\u0005%\u0000\u0000\u02d3\u02dc\u0003b1\u0000\u02d4\u02d6"+
		"\u0003N\'\u0000\u02d5\u02d4\u0001\u0000\u0000\u0000\u02d6\u02d9\u0001"+
		"\u0000\u0000\u0000\u02d7\u02d5\u0001\u0000\u0000\u0000\u02d7\u02d8\u0001"+
		"\u0000\u0000\u0000\u02d8\u02da\u0001\u0000\u0000\u0000\u02d9\u02d7\u0001"+
		"\u0000\u0000\u0000\u02da\u02dc\u0003b1\u0000\u02db\u0267\u0001\u0000\u0000"+
		"\u0000\u02db\u026d\u0001\u0000\u0000\u0000\u02db\u0274\u0001\u0000\u0000"+
		"\u0000\u02db\u027b\u0001\u0000\u0000\u0000\u02db\u0282\u0001\u0000\u0000"+
		"\u0000\u02db\u0289\u0001\u0000\u0000\u0000\u02db\u0290\u0001\u0000\u0000"+
		"\u0000\u02db\u0297\u0001\u0000\u0000\u0000\u02db\u02a2\u0001\u0000\u0000"+
		"\u0000\u02db\u02ae\u0001\u0000\u0000\u0000\u02db\u02bc\u0001\u0000\u0000"+
		"\u0000\u02db\u02c7\u0001\u0000\u0000\u0000\u02db\u02cf\u0001\u0000\u0000"+
		"\u0000\u02db\u02d7\u0001\u0000\u0000\u0000\u02dcS\u0001\u0000\u0000\u0000"+
		"\u02dd\u02e0\u0005\u0001\u0000\u0000\u02de\u02e1\u0003h4\u0000\u02df\u02e1"+
		"\u0003R)\u0000\u02e0\u02de\u0001\u0000\u0000\u0000\u02e0\u02df\u0001\u0000"+
		"\u0000\u0000\u02e0\u02e1\u0001\u0000\u0000\u0000\u02e1U\u0001\u0000\u0000"+
		"\u0000\u02e2\u02e3\u0005#\u0000\u0000\u02e3\u02e6\u0003\\.\u0000\u02e4"+
		"\u02e5\u0005C\u0000\u0000\u02e5\u02e7\u0003b1\u0000\u02e6\u02e4\u0001"+
		"\u0000\u0000\u0000\u02e6\u02e7\u0001\u0000\u0000\u0000\u02e7W\u0001\u0000"+
		"\u0000\u0000\u02e8\u02e9\u0005$\u0000\u0000\u02e9\u02ea\u0003z=\u0000"+
		"\u02ea\u02eb\u0005C\u0000\u0000\u02eb\u02ec\u0003b1\u0000\u02ecY\u0001"+
		"\u0000\u0000\u0000\u02ed\u02f0\u0003z=\u0000\u02ee\u02ef\u00059\u0000"+
		"\u0000\u02ef\u02f1\u0003:\u001d\u0000\u02f0\u02ee\u0001\u0000\u0000\u0000"+
		"\u02f0\u02f1\u0001\u0000\u0000\u0000\u02f1[\u0001\u0000\u0000\u0000\u02f2"+
		"\u0309\u0003Z-\u0000\u02f3\u02f4\u00051\u0000\u0000\u02f4\u02f8\u0003"+
		"Z-\u0000\u02f5\u02f7\u00054\u0000\u0000\u02f6\u02f5\u0001\u0000\u0000"+
		"\u0000\u02f7\u02fa\u0001\u0000\u0000\u0000\u02f8\u02f6\u0001\u0000\u0000"+
		"\u0000\u02f8\u02f9\u0001\u0000\u0000\u0000\u02f9\u02fb\u0001\u0000\u0000"+
		"\u0000\u02fa\u02f8\u0001\u0000\u0000\u0000\u02fb\u02fc\u00052\u0000\u0000"+
		"\u02fc\u0309\u0001\u0000\u0000\u0000\u02fd\u02fe\u0005/\u0000\u0000\u02fe"+
		"\u0303\u0003Z-\u0000\u02ff\u0300\u00054\u0000\u0000\u0300\u0302\u0003"+
		"Z-\u0000\u0301\u02ff\u0001\u0000\u0000\u0000\u0302\u0305\u0001\u0000\u0000"+
		"\u0000\u0303\u0301\u0001\u0000\u0000\u0000\u0303\u0304\u0001\u0000\u0000"+
		"\u0000\u0304\u0306\u0001\u0000\u0000\u0000\u0305\u0303\u0001\u0000\u0000"+
		"\u0000\u0306\u0307\u00050\u0000\u0000\u0307\u0309\u0001\u0000\u0000\u0000"+
		"\u0308\u02f2\u0001\u0000\u0000\u0000\u0308\u02f3\u0001\u0000\u0000\u0000"+
		"\u0308\u02fd\u0001\u0000\u0000\u0000\u0309]\u0001\u0000\u0000\u0000\u030a"+
		"\u030b\u0003`0\u0000\u030b\u030c\u0007\u0001\u0000\u0000\u030c\u030d\u0003"+
		"b1\u0000\u030d_\u0001\u0000\u0000\u0000\u030e\u0320\u0003z=\u0000\u030f"+
		"\u0310\u0003b1\u0000\u0310\u0311\u00053\u0000\u0000\u0311\u0312\u0003"+
		"z=\u0000\u0312\u0320\u0001\u0000\u0000\u0000\u0313\u0314\u0003b1\u0000"+
		"\u0314\u0315\u0005/\u0000\u0000\u0315\u031a\u0003b1\u0000\u0316\u0317"+
		"\u00054\u0000\u0000\u0317\u0319\u0003b1\u0000\u0318\u0316\u0001\u0000"+
		"\u0000\u0000\u0319\u031c\u0001\u0000\u0000\u0000\u031a\u0318\u0001\u0000"+
		"\u0000\u0000\u031a\u031b\u0001\u0000\u0000\u0000\u031b\u031d\u0001\u0000"+
		"\u0000\u0000\u031c\u031a\u0001\u0000\u0000\u0000\u031d\u031e\u00050\u0000"+
		"\u0000\u031e\u0320\u0001\u0000\u0000\u0000\u031f\u030e\u0001\u0000\u0000"+
		"\u0000\u031f\u030f\u0001\u0000\u0000\u0000\u031f\u0313\u0001\u0000\u0000"+
		"\u0000\u0320a\u0001\u0000\u0000\u0000\u0321\u0322\u00061\uffff\uffff\u0000"+
		"\u0322\u0323\u0005-\u0000\u0000\u0323\u0324\u0003b1\u0000\u0324\u0325"+
		"\u0005.\u0000\u0000\u0325\u0366\u0001\u0000\u0000\u0000\u0326\u0327\u0003"+
		":\u001d\u0000\u0327\u0328\u0005:\u0000\u0000\u0328\u0329\u0003z=\u0000"+
		"\u0329\u0366\u0001\u0000\u0000\u0000\u032a\u032c\u0003:\u001d\u0000\u032b"+
		"\u032d\u00057\u0000\u0000\u032c\u032b\u0001\u0000\u0000\u0000\u032c\u032d"+
		"\u0001\u0000\u0000\u0000\u032d\u032e\u0001\u0000\u0000\u0000\u032e\u0337"+
		"\u0005-\u0000\u0000\u032f\u0334\u0003n7\u0000\u0330\u0331\u00054\u0000"+
		"\u0000\u0331\u0333\u0003n7\u0000\u0332\u0330\u0001\u0000\u0000\u0000\u0333"+
		"\u0336\u0001\u0000\u0000\u0000\u0334\u0332\u0001\u0000\u0000\u0000\u0334"+
		"\u0335\u0001\u0000\u0000\u0000\u0335\u0338\u0001\u0000\u0000\u0000\u0336"+
		"\u0334\u0001\u0000\u0000\u0000\u0337\u032f\u0001\u0000\u0000\u0000\u0337"+
		"\u0338\u0001\u0000\u0000\u0000\u0338\u0339\u0001\u0000\u0000\u0000\u0339"+
		"\u033a\u0005.\u0000\u0000\u033a\u0366\u0001\u0000\u0000\u0000\u033b\u0366"+
		"\u0003j5\u0000\u033c\u033d\u0005\u001b\u0000\u0000\u033d\u0366\u0003b"+
		"1\r\u033e\u0366\u0003t:\u0000\u033f\u0340\u0005\f\u0000\u0000\u0340\u0366"+
		"\u0003b1\t\u0341\u0342\u0005%\u0000\u0000\u0342\u0366\u0003b1\b\u0343"+
		"\u0366\u0003f3\u0000\u0344\u034d\u0005/\u0000\u0000\u0345\u034a\u0003"+
		"b1\u0000\u0346\u0347\u00054\u0000\u0000\u0347\u0349\u0003b1\u0000\u0348"+
		"\u0346\u0001\u0000\u0000\u0000\u0349\u034c\u0001\u0000\u0000\u0000\u034a"+
		"\u0348\u0001\u0000\u0000\u0000\u034a\u034b\u0001\u0000\u0000\u0000\u034b"+
		"\u034e\u0001\u0000\u0000\u0000\u034c\u034a\u0001\u0000\u0000\u0000\u034d"+
		"\u0345\u0001\u0000\u0000\u0000\u034d\u034e\u0001\u0000\u0000\u0000\u034e"+
		"\u034f\u0001\u0000\u0000\u0000\u034f\u0366\u00050\u0000\u0000\u0350\u0352"+
		"\u0003:\u001d\u0000\u0351\u0350\u0001\u0000\u0000\u0000\u0351\u0352\u0001"+
		"\u0000\u0000\u0000\u0352\u0353\u0001\u0000\u0000\u0000\u0353\u035f\u0005"+
		"1\u0000\u0000\u0354\u0359\u0003p8\u0000\u0355\u0356\u00054\u0000\u0000"+
		"\u0356\u0358\u0003p8\u0000\u0357\u0355\u0001\u0000\u0000\u0000\u0358\u035b"+
		"\u0001\u0000\u0000\u0000\u0359\u0357\u0001\u0000\u0000\u0000\u0359\u035a"+
		"\u0001\u0000\u0000\u0000\u035a\u035d\u0001\u0000\u0000\u0000\u035b\u0359"+
		"\u0001\u0000\u0000\u0000\u035c\u035e\u00054\u0000\u0000\u035d\u035c\u0001"+
		"\u0000\u0000\u0000\u035d\u035e\u0001\u0000\u0000\u0000\u035e\u0360\u0001"+
		"\u0000\u0000\u0000\u035f\u0354\u0001\u0000\u0000\u0000\u035f\u0360\u0001"+
		"\u0000\u0000\u0000\u0360\u0361\u0001\u0000\u0000\u0000\u0361\u0366\u0005"+
		"2\u0000\u0000\u0362\u0366\u0003D\"\u0000\u0363\u0366\u0003r9\u0000\u0364"+
		"\u0366\u0003z=\u0000\u0365\u0321\u0001\u0000\u0000\u0000\u0365\u0326\u0001"+
		"\u0000\u0000\u0000\u0365\u032a\u0001\u0000\u0000\u0000\u0365\u033b\u0001"+
		"\u0000\u0000\u0000\u0365\u033c\u0001\u0000\u0000\u0000\u0365\u033e\u0001"+
		"\u0000\u0000\u0000\u0365\u033f\u0001\u0000\u0000\u0000\u0365\u0341\u0001"+
		"\u0000\u0000\u0000\u0365\u0343\u0001\u0000\u0000\u0000\u0365\u0344\u0001"+
		"\u0000\u0000\u0000\u0365\u0351\u0001\u0000\u0000\u0000\u0365\u0362\u0001"+
		"\u0000\u0000\u0000\u0365\u0363\u0001\u0000\u0000\u0000\u0365\u0364\u0001"+
		"\u0000\u0000\u0000\u0366\u03b3\u0001\u0000\u0000\u0000\u0367\u0369\n\u001d"+
		"\u0000\u0000\u0368\u036a\u0007\u0002\u0000\u0000\u0369\u0368\u0001\u0000"+
		"\u0000\u0000\u0369\u036a\u0001\u0000\u0000\u0000\u036a\u036b\u0001\u0000"+
		"\u0000\u0000\u036b\u036c\u00053\u0000\u0000\u036c\u03b2\u0003z=\u0000"+
		"\u036d\u036e\n\u001c\u0000\u0000\u036e\u036f\u0005+\u0000\u0000\u036f"+
		"\u03b2\u0003:\u001d\u0000\u0370\u0371\n\u001b\u0000\u0000\u0371\u0372"+
		"\u0005/\u0000\u0000\u0372\u0377\u0003n7\u0000\u0373\u0374\u00054\u0000"+
		"\u0000\u0374\u0376\u0003n7\u0000\u0375\u0373\u0001\u0000\u0000\u0000\u0376"+
		"\u0379\u0001\u0000\u0000\u0000\u0377\u0375\u0001\u0000\u0000\u0000\u0377"+
		"\u0378\u0001\u0000\u0000\u0000\u0378\u037a\u0001\u0000\u0000\u0000\u0379"+
		"\u0377\u0001\u0000\u0000\u0000\u037a\u037b\u00050\u0000\u0000\u037b\u03b2"+
		"\u0001\u0000\u0000\u0000\u037c\u037d\n\u001a\u0000\u0000\u037d\u037e\u0005"+
		":\u0000\u0000\u037e\u03b2\u0003z=\u0000\u037f\u0381\n\u0018\u0000\u0000"+
		"\u0380\u0382\u00057\u0000\u0000\u0381\u0380\u0001\u0000\u0000\u0000\u0381"+
		"\u0382\u0001\u0000\u0000\u0000\u0382\u0383\u0001\u0000\u0000\u0000\u0383"+
		"\u038c\u0005-\u0000\u0000\u0384\u0389\u0003n7\u0000\u0385\u0386\u0005"+
		"4\u0000\u0000\u0386\u0388\u0003n7\u0000\u0387\u0385\u0001\u0000\u0000"+
		"\u0000\u0388\u038b\u0001\u0000\u0000\u0000\u0389\u0387\u0001\u0000\u0000"+
		"\u0000\u0389\u038a\u0001\u0000\u0000\u0000\u038a\u038d\u0001\u0000\u0000"+
		"\u0000\u038b\u0389\u0001\u0000\u0000\u0000\u038c\u0384\u0001\u0000\u0000"+
		"\u0000\u038c\u038d\u0001\u0000\u0000\u0000\u038d\u038e\u0001\u0000\u0000"+
		"\u0000\u038e\u03b2\u0005.\u0000\u0000\u038f\u0390\n\u0016\u0000\u0000"+
		"\u0390\u0391\u0007\u0003\u0000\u0000\u0391\u03b2\u0003b1\u0000\u0392\u0393"+
		"\n\u0015\u0000\u0000\u0393\u0394\u0007\u0004\u0000\u0000\u0394\u03b2\u0003"+
		"b1\u0000\u0395\u0396\n\u0014\u0000\u0000\u0396\u0397\u0007\u0005\u0000"+
		"\u0000\u0397\u03b2\u0003b1\u0000\u0398\u0399\n\u0013\u0000\u0000\u0399"+
		"\u039a\u0007\u0006\u0000\u0000\u039a\u03b2\u0003b1\u0000\u039b\u039c\n"+
		"\u0012\u0000\u0000\u039c\u03b2\u00056\u0000\u0000\u039d\u039e\n\u0011"+
		"\u0000\u0000\u039e\u03a0\u0005\u0017\u0000\u0000\u039f\u03a1\u0005\u001b"+
		"\u0000\u0000\u03a0\u039f\u0001\u0000\u0000\u0000\u03a0\u03a1\u0001\u0000"+
		"\u0000\u0000\u03a1\u03a2\u0001\u0000\u0000\u0000\u03a2\u03b2\u0003:\u001d"+
		"\u0000\u03a3\u03a4\n\u0010\u0000\u0000\u03a4\u03a5\u0005\u0013\u0000\u0000"+
		"\u03a5\u03b2\u0003b1\u0000\u03a6\u03a7\n\u000f\u0000\u0000\u03a7\u03a8"+
		"\u00055\u0000\u0000\u03a8\u03b2\u0003b1\u0000\u03a9\u03aa\n\f\u0000\u0000"+
		"\u03aa\u03ab\u0005\u001e\u0000\u0000\u03ab\u03b2\u0003b1\u0000\u03ac\u03ad"+
		"\n\u000b\u0000\u0000\u03ad\u03ae\u0005\u001f\u0000\u0000\u03ae\u03b2\u0003"+
		"b1\u0000\u03af\u03b0\n\u0001\u0000\u0000\u03b0\u03b2\u0005,\u0000\u0000"+
		"\u03b1\u0367\u0001\u0000\u0000\u0000\u03b1\u036d\u0001\u0000\u0000\u0000"+
		"\u03b1\u0370\u0001\u0000\u0000\u0000\u03b1\u037c\u0001\u0000\u0000\u0000"+
		"\u03b1\u037f\u0001\u0000\u0000\u0000\u03b1\u038f\u0001\u0000\u0000\u0000"+
		"\u03b1\u0392\u0001\u0000\u0000\u0000\u03b1\u0395\u0001\u0000\u0000\u0000"+
		"\u03b1\u0398\u0001\u0000\u0000\u0000\u03b1\u039b\u0001\u0000\u0000\u0000"+
		"\u03b1\u039d\u0001\u0000\u0000\u0000\u03b1\u03a3\u0001\u0000\u0000\u0000"+
		"\u03b1\u03a6\u0001\u0000\u0000\u0000\u03b1\u03a9\u0001\u0000\u0000\u0000"+
		"\u03b1\u03ac\u0001\u0000\u0000\u0000\u03b1\u03af\u0001\u0000\u0000\u0000"+
		"\u03b2\u03b5\u0001\u0000\u0000\u0000\u03b3\u03b1\u0001\u0000\u0000\u0000"+
		"\u03b3\u03b4\u0001\u0000\u0000\u0000\u03b4c\u0001\u0000\u0000\u0000\u03b5"+
		"\u03b3\u0001\u0000\u0000\u0000\u03b6\u03bf\u0005@\u0000\u0000\u03b7\u03bc"+
		"\u0003\u000e\u0007\u0000\u03b8\u03b9\u00054\u0000\u0000\u03b9\u03bb\u0003"+
		"\u000e\u0007\u0000\u03ba\u03b8\u0001\u0000\u0000\u0000\u03bb\u03be\u0001"+
		"\u0000\u0000\u0000\u03bc\u03ba\u0001\u0000\u0000\u0000\u03bc\u03bd\u0001"+
		"\u0000\u0000\u0000\u03bd\u03c0\u0001\u0000\u0000\u0000\u03be\u03bc\u0001"+
		"\u0000\u0000\u0000\u03bf\u03b7\u0001\u0000\u0000\u0000\u03bf\u03c0\u0001"+
		"\u0000\u0000\u0000\u03c0\u03c1\u0001\u0000\u0000\u0000\u03c1\u03c2\u0005"+
		"@\u0000\u0000\u03c2e\u0001\u0000\u0000\u0000\u03c3\u03c5\u00057\u0000"+
		"\u0000\u03c4\u03c3\u0001\u0000\u0000\u0000\u03c4\u03c5\u0001\u0000\u0000"+
		"\u0000\u03c5\u03c6\u0001\u0000\u0000\u0000\u03c6\u03cd\u0003d2\u0000\u03c7"+
		"\u03c8\u0005>\u0000\u0000\u03c8\u03ca\u0003:\u001d\u0000\u03c9\u03c7\u0001"+
		"\u0000\u0000\u0000\u03c9\u03ca\u0001\u0000\u0000\u0000\u03ca\u03cb\u0001"+
		"\u0000\u0000\u0000\u03cb\u03ce\u0003h4\u0000\u03cc\u03ce\u0003R)\u0000"+
		"\u03cd\u03c9\u0001\u0000\u0000\u0000\u03cd\u03cc\u0001\u0000\u0000\u0000"+
		"\u03ceg\u0001\u0000\u0000\u0000\u03cf\u03d4\u00051\u0000\u0000\u03d0\u03d3"+
		"\u0003R)\u0000\u03d1\u03d3\u00058\u0000\u0000\u03d2\u03d0\u0001\u0000"+
		"\u0000\u0000\u03d2\u03d1\u0001\u0000\u0000\u0000\u03d3\u03d6\u0001\u0000"+
		"\u0000\u0000\u03d4\u03d2\u0001\u0000\u0000\u0000\u03d4\u03d5\u0001\u0000"+
		"\u0000\u0000\u03d5\u03d7\u0001\u0000\u0000\u0000\u03d6\u03d4\u0001\u0000"+
		"\u0000\u0000\u03d7\u03d8\u00052\u0000\u0000\u03d8i\u0001\u0000\u0000\u0000"+
		"\u03d9\u03da\u0005\u0018\u0000\u0000\u03da\u03de\u0003h4\u0000\u03db\u03dd"+
		"\u0003l6\u0000\u03dc\u03db\u0001\u0000\u0000\u0000\u03dd\u03e0\u0001\u0000"+
		"\u0000\u0000\u03de\u03dc\u0001\u0000\u0000\u0000\u03de\u03df\u0001\u0000"+
		"\u0000\u0000\u03df\u03e2\u0001\u0000\u0000\u0000\u03e0\u03de\u0001\u0000"+
		"\u0000\u0000\u03e1\u03e3\u0003v;\u0000\u03e2\u03e1\u0001\u0000\u0000\u0000"+
		"\u03e2\u03e3\u0001\u0000\u0000\u0000\u03e3k\u0001\u0000\u0000\u0000\u03e4"+
		"\u03e5\u0005\u0019\u0000\u0000\u03e5\u03e6\u0003:\u001d\u0000\u03e6\u03e7"+
		"\u0003h4\u0000\u03e7\u03f0\u0001\u0000\u0000\u0000\u03e8\u03e9\u0005\u0019"+
		"\u0000\u0000\u03e9\u03ea\u0003z=\u0000\u03ea\u03eb\u00059\u0000\u0000"+
		"\u03eb\u03ec\u0003:\u001d\u0000\u03ec\u03ed\u0001\u0000\u0000\u0000\u03ed"+
		"\u03ee\u0003h4\u0000\u03ee\u03f0\u0001\u0000\u0000\u0000\u03ef\u03e4\u0001"+
		"\u0000\u0000\u0000\u03ef\u03e8\u0001\u0000\u0000\u0000\u03f0m\u0001\u0000"+
		"\u0000\u0000\u03f1\u03f2\u0003z=\u0000\u03f2\u03f3\u0005C\u0000\u0000"+
		"\u03f3\u03f5\u0001\u0000\u0000\u0000\u03f4\u03f1\u0001\u0000\u0000\u0000"+
		"\u03f4\u03f5\u0001\u0000\u0000\u0000\u03f5\u03f6\u0001\u0000\u0000\u0000"+
		"\u03f6\u03f7\u0003b1\u0000\u03f7o\u0001\u0000\u0000\u0000\u03f8\u03fb"+
		"\u0003z=\u0000\u03f9\u03fa\u00059\u0000\u0000\u03fa\u03fc\u0003b1\u0000"+
		"\u03fb\u03f9\u0001\u0000\u0000\u0000\u03fb\u03fc\u0001\u0000\u0000\u0000"+
		"\u03fcq\u0001\u0000\u0000\u0000\u03fd\u0403\u0005V\u0000\u0000\u03fe\u0403"+
		"\u0005W\u0000\u0000\u03ff\u0403\u0005X\u0000\u0000\u0400\u0403\u0005Y"+
		"\u0000\u0000\u0401\u0403\u0005\u001c\u0000\u0000\u0402\u03fd\u0001\u0000"+
		"\u0000\u0000\u0402\u03fe\u0001\u0000\u0000\u0000\u0402\u03ff\u0001\u0000"+
		"\u0000\u0000\u0402\u0400\u0001\u0000\u0000\u0000\u0402\u0401\u0001\u0000"+
		"\u0000\u0000\u0403s\u0001\u0000\u0000\u0000\u0404\u0405\u0005\u0016\u0000"+
		"\u0000\u0405\u0406\u0003b1\u0000\u0406\u0408\u0003h4\u0000\u0407\u0409"+
		"\u0003v;\u0000\u0408\u0407\u0001\u0000\u0000\u0000\u0408\u0409\u0001\u0000"+
		"\u0000\u0000\u0409u\u0001\u0000\u0000\u0000\u040a\u040b\u0005\u001a\u0000"+
		"\u0000\u040b\u040f\u0003h4\u0000\u040c\u040d\u0005\u001a\u0000\u0000\u040d"+
		"\u040f\u0003R)\u0000\u040e\u040a\u0001\u0000\u0000\u0000\u040e\u040c\u0001"+
		"\u0000\u0000\u0000\u040fw\u0001\u0000\u0000\u0000\u0410\u0411\u0005\u0012"+
		"\u0000\u0000\u0411\u0412\u0003\\.\u0000\u0412\u0413\u0005\u0013\u0000"+
		"\u0000\u0413\u0414\u0003b1\u0000\u0414\u0415\u0003h4\u0000\u0415y\u0001"+
		"\u0000\u0000\u0000\u0416\u0419\u0005U\u0000\u0000\u0417\u0419\u0003|>"+
		"\u0000\u0418\u0416\u0001\u0000\u0000\u0000\u0418\u0417\u0001\u0000\u0000"+
		"\u0000\u0419{\u0001\u0000\u0000\u0000\u041a\u041b\u0007\u0007\u0000\u0000"+
		"\u041b}\u0001\u0000\u0000\u0000\u0083\u0080\u0082\u008b\u0090\u0097\u009b"+
		"\u00a2\u00a9\u00b1\u00c1\u00c9\u00db\u00e0\u00e5\u00eb\u00ed\u00f4\u00fd"+
		"\u0100\u0111\u0115\u0117\u0125\u0129\u012b\u0134\u013e\u0147\u014f\u0151"+
		"\u0156\u0165\u016e\u017a\u0184\u0189\u0195\u0199\u01a0\u01a6\u01ae\u01b2"+
		"\u01c6\u01c9\u01d3\u01d9\u01e0\u01e3\u01e5\u01eb\u01f1\u01f5\u0203\u020b"+
		"\u0214\u0218\u0220\u0223\u0228\u0230\u0234\u0238\u0242\u0247\u024d\u0252"+
		"\u0255\u025d\u0261\u0263\u026d\u0274\u027b\u0282\u0289\u0290\u0297\u029b"+
		"\u02a2\u02a6\u02ae\u02b2\u02b6\u02bc\u02c0\u02c7\u02cf\u02d7\u02db\u02e0"+
		"\u02e6\u02f0\u02f8\u0303\u0308\u031a\u031f\u032c\u0334\u0337\u034a\u034d"+
		"\u0351\u0359\u035d\u035f\u0365\u0369\u0377\u0381\u0389\u038c\u03a0\u03b1"+
		"\u03b3\u03bc\u03bf\u03c4\u03c9\u03cd\u03d2\u03d4\u03de\u03e2\u03ef\u03f4"+
		"\u03fb\u0402\u0408\u040e\u0418";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
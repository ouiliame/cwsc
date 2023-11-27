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
		STRUCT=39, TUPLE=40, UNIT=41, ENUM=42, TYPE=43, EMIT=44, AS=45, TILDE=46, 
		LPAREN=47, RPAREN=48, LBRACK=49, RBRACK=50, LBRACE=51, RBRACE=52, DOT=53, 
		COMMA=54, D_QUEST=55, QUEST=56, BANG=57, SEMI=58, COLON=59, D_COLON=60, 
		HASH=61, AT=62, AMP=63, ARROW=64, FAT_ARROW=65, BAR=66, S_QUOTE=67, D_QUOTE=68, 
		EQ=69, EQ_EQ=70, NEQ=71, PLUS=72, PLUS_EQ=73, MINUS=74, MINUS_EQ=75, MUL=76, 
		MUL_EQ=77, DIV=78, DIV_EQ=79, MOD=80, MOD_EQ=81, LT=82, LT_EQ=83, GT=84, 
		GT_EQ=85, POW=86, Ident=87, TypeVar=88, StringLiteral=89, IntLiteral=90, 
		DecLiteral=91, BoolLiteral=92, CWSPEC_LINE_COMMENT=93, CWSPEC_BLOCK_COMMENT=94, 
		LINE_COMMENT=95, BLOCK_COMMENT=96, WS=97;
	public static final int
		RULE_sourceFile = 0, RULE_stmt = 1, RULE_importStmt = 2, RULE_letStmt = 3, 
		RULE_binding_ = 4, RULE_constStmt = 5, RULE_assignStmt = 6, RULE_memberAssignStmt = 7, 
		RULE_indexAssignStmt = 8, RULE_returnStmt = 9, RULE_failStmt = 10, RULE_forStmt = 11, 
		RULE_execStmt = 12, RULE_instantiateStmt = 13, RULE_emitStmt = 14, RULE_defn = 15, 
		RULE_contractDefn = 16, RULE_interfaceDefn = 17, RULE_structDefn = 18, 
		RULE_tupleDefn = 19, RULE_unitDefn = 20, RULE_enumDefn = 21, RULE_enumVariantList = 22, 
		RULE_enumVariant = 23, RULE_enumVariantStructDefn = 24, RULE_enumVariantTupleDefn = 25, 
		RULE_enumVariantUnitDefn = 26, RULE_typeAliasDefn = 27, RULE_fnDefn = 28, 
		RULE_instantiateDefn = 29, RULE_execDefn = 30, RULE_queryDefn = 31, RULE_errorDefn = 32, 
		RULE_eventDefn = 33, RULE_stateBlockDefn = 34, RULE_stateDefn = 35, RULE_stateItemDefn = 36, 
		RULE_stateMapDefn = 37, RULE_expr = 38, RULE_ifExpr_ = 39, RULE_tryCatchElseExpr_ = 40, 
		RULE_catchClause = 41, RULE_closureExpr_ = 42, RULE_structExpr_ = 43, 
		RULE_tupleExpr_ = 44, RULE_literal = 45, RULE_typeExpr = 46, RULE_typeVar = 47, 
		RULE_typeVarList = 48, RULE_ident = 49, RULE_param = 50, RULE_field = 51, 
		RULE_namedArg = 52, RULE_arg = 53, RULE_identList = 54, RULE_paramList = 55, 
		RULE_typeExprList = 56, RULE_fieldList = 57, RULE_argList = 58, RULE_reservedKeyword = 59;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"paramList", "typeExprList", "fieldList", "argList", "reservedKeyword"
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
			"'tuple'", "'unit'", "'enum'", "'type'", "'emit'", "'as'", "'~'", "'('", 
			"')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'", "'?'", "'!'", 
			"';'", "':'", "'::'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", "'''", 
			"'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", 
			"'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
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
			"STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", "LPAREN", 
			"RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", 
			"QUEST", "BANG", "SEMI", "COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", 
			"FAT_ARROW", "BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", 
			"PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", 
			"MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "TypeVar", "StringLiteral", 
			"IntLiteral", "DecLiteral", "BoolLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
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
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(120);
				((SourceFileContext)_localctx).stmt = stmt();
				((SourceFileContext)_localctx).stmts.add(((SourceFileContext)_localctx).stmt);
				}
				}
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(126);
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
	public static class StmtContext extends ParserRuleContext {
		public ImportStmtContext importStmt() {
			return getRuleContext(ImportStmtContext.class,0);
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
		public ForStmtContext forStmt() {
			return getRuleContext(ForStmtContext.class,0);
		}
		public ExecStmtContext execStmt() {
			return getRuleContext(ExecStmtContext.class,0);
		}
		public InstantiateStmtContext instantiateStmt() {
			return getRuleContext(InstantiateStmtContext.class,0);
		}
		public FailStmtContext failStmt() {
			return getRuleContext(FailStmtContext.class,0);
		}
		public ReturnStmtContext returnStmt() {
			return getRuleContext(ReturnStmtContext.class,0);
		}
		public DefnContext defn() {
			return getRuleContext(DefnContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(128);
				importStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(129);
				letStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(130);
				constStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(131);
				assignStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(132);
				memberAssignStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(133);
				indexAssignStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(134);
				forStmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(135);
				execStmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(136);
				instantiateStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(137);
				failStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(138);
				returnStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(139);
				defn();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(140);
				expr(0);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(141);
				typeExpr(0);
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
		public IdentListContext items;
		public Token src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public IdentListContext identList() {
			return getRuleContext(IdentListContext.class,0);
		}
		public ImportStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStmt; }
	}

	public final ImportStmtContext importStmt() throws RecognitionException {
		ImportStmtContext _localctx = new ImportStmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_importStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(IMPORT);
			setState(145);
			match(LBRACE);
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(146);
				((ImportStmtContext)_localctx).items = identList();
				}
			}

			setState(149);
			match(RBRACE);
			setState(150);
			match(FROM);
			{
			setState(151);
			((ImportStmtContext)_localctx).src = match(StringLiteral);
			}
			setState(152);
			match(SEMI);
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
		public Binding_Context binding;
		public ExprContext value;
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public Binding_Context binding_() {
			return getRuleContext(Binding_Context.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public LetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt; }
	}

	public final LetStmtContext letStmt() throws RecognitionException {
		LetStmtContext _localctx = new LetStmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_letStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(LET);
			{
			setState(155);
			((LetStmtContext)_localctx).binding = binding_();
			}
			{
			setState(156);
			match(EQ);
			setState(157);
			((LetStmtContext)_localctx).value = expr(0);
			}
			setState(159);
			match(SEMI);
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
	public static class Binding_Context extends ParserRuleContext {
		public Binding_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binding_; }
	 
		public Binding_Context() { }
		public void copyFrom(Binding_Context ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleBindingContext extends Binding_Context {
		public IdentListContext names;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IdentListContext identList() {
			return getRuleContext(IdentListContext.class,0);
		}
		public TupleBindingContext(Binding_Context ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructBindingContext extends Binding_Context {
		public IdentListContext names;
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentListContext identList() {
			return getRuleContext(IdentListContext.class,0);
		}
		public StructBindingContext(Binding_Context ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentBindingContext extends Binding_Context {
		public IdentContext name;
		public TypeExprContext ty;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentBindingContext(Binding_Context ctx) { copyFrom(ctx); }
	}

	public final Binding_Context binding_() throws RecognitionException {
		Binding_Context _localctx = new Binding_Context(_ctx, getState());
		enterRule(_localctx, 8, RULE_binding_);
		int _la;
		try {
			setState(174);
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
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
			case EMIT:
			case Ident:
				_localctx = new IdentBindingContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(161);
				((IdentBindingContext)_localctx).name = ident();
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(162);
					match(COLON);
					setState(163);
					((IdentBindingContext)_localctx).ty = typeExpr(0);
					}
				}

				}
				break;
			case LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(166);
				match(LBRACK);
				{
				setState(167);
				((TupleBindingContext)_localctx).names = identList();
				}
				setState(168);
				match(RBRACK);
				}
				break;
			case LBRACE:
				_localctx = new StructBindingContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(170);
				match(LBRACE);
				{
				setState(171);
				((StructBindingContext)_localctx).names = identList();
				}
				setState(172);
				match(RBRACE);
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
	public static class ConstStmtContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext ty;
		public ExprContext value;
		public TerminalNode CONST() { return getToken(CWScriptParser.CONST, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public List<TerminalNode> COLON() { return getTokens(CWScriptParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(CWScriptParser.COLON, i);
		}
		public ConstStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constStmt; }
	}

	public final ConstStmtContext constStmt() throws RecognitionException {
		ConstStmtContext _localctx = new ConstStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_constStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(CONST);
			{
			setState(177);
			((ConstStmtContext)_localctx).name = ident();
			}
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 577199142082691580L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(181);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COLON) {
					{
					{
					setState(178);
					match(COLON);
					}
					}
					setState(183);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(184);
				((ConstStmtContext)_localctx).ty = typeExpr(0);
				}
			}

			{
			setState(187);
			match(EQ);
			setState(188);
			((ConstStmtContext)_localctx).value = expr(0);
			}
			setState(190);
			match(SEMI);
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
		public AssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt; }
	}

	public final AssignStmtContext assignStmt() throws RecognitionException {
		AssignStmtContext _localctx = new AssignStmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_assignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(192);
			((AssignStmtContext)_localctx).name = ident();
			}
			setState(193);
			((AssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 5457L) != 0)) ) {
				((AssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			{
			setState(194);
			((AssignStmtContext)_localctx).value = expr(0);
			}
			setState(195);
			match(SEMI);
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
		public MemberAssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberAssignStmt; }
	}

	public final MemberAssignStmtContext memberAssignStmt() throws RecognitionException {
		MemberAssignStmtContext _localctx = new MemberAssignStmtContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_memberAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(197);
			((MemberAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(198);
			match(DOT);
			{
			setState(199);
			((MemberAssignStmtContext)_localctx).memberName = ident();
			}
			setState(200);
			((MemberAssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 5457L) != 0)) ) {
				((MemberAssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			{
			setState(201);
			((MemberAssignStmtContext)_localctx).value = expr(0);
			}
			setState(202);
			match(SEMI);
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
		public IndexAssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexAssignStmt; }
	}

	public final IndexAssignStmtContext indexAssignStmt() throws RecognitionException {
		IndexAssignStmtContext _localctx = new IndexAssignStmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_indexAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(204);
			((IndexAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(205);
			match(LBRACK);
			setState(206);
			((IndexAssignStmtContext)_localctx).index = expr(0);
			setState(207);
			match(RBRACK);
			setState(208);
			((IndexAssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & 5457L) != 0)) ) {
				((IndexAssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(209);
			((IndexAssignStmtContext)_localctx).value = expr(0);
			setState(210);
			match(SEMI);
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
		public ExprContext value;
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStmt; }
	}

	public final ReturnStmtContext returnStmt() throws RecognitionException {
		ReturnStmtContext _localctx = new ReturnStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_returnStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(RETURN);
			{
			setState(213);
			((ReturnStmtContext)_localctx).value = expr(0);
			}
			setState(214);
			match(SEMI);
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
		public ExprContext value;
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FailStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failStmt; }
	}

	public final FailStmtContext failStmt() throws RecognitionException {
		FailStmtContext _localctx = new FailStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_failStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(FAIL);
			{
			setState(217);
			((FailStmtContext)_localctx).value = expr(0);
			}
			setState(218);
			match(SEMI);
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
		public Binding_Context binding;
		public ExprContext iter;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public Binding_Context binding_() {
			return getRuleContext(Binding_Context.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_forStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			match(FOR);
			{
			setState(221);
			((ForStmtContext)_localctx).binding = binding_();
			}
			setState(222);
			match(IN);
			{
			setState(223);
			((ForStmtContext)_localctx).iter = expr(0);
			}
			setState(224);
			match(LBRACE);
			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(225);
				((ForStmtContext)_localctx).stmt = stmt();
				((ForStmtContext)_localctx).body.add(((ForStmtContext)_localctx).stmt);
				}
				}
				setState(230);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(231);
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
	public static class ExecStmtContext extends ParserRuleContext {
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
		enterRule(_localctx, 24, RULE_execStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(EXEC_NOW);
			setState(234);
			expr(0);
			setState(235);
			match(SEMI);
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
		enterRule(_localctx, 26, RULE_instantiateStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			match(INSTANTIATE_NOW);
			setState(238);
			expr(0);
			setState(239);
			match(SEMI);
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
		enterRule(_localctx, 28, RULE_emitStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(EMIT);
			setState(242);
			expr(0);
			setState(243);
			match(SEMI);
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
		public QueryDefnContext queryDefn() {
			return getRuleContext(QueryDefnContext.class,0);
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
		public DefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defn; }
	}

	public final DefnContext defn() throws RecognitionException {
		DefnContext _localctx = new DefnContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_defn);
		try {
			setState(259);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
				enterOuterAlt(_localctx, 1);
				{
				setState(245);
				contractDefn();
				}
				break;
			case INTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(246);
				interfaceDefn();
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(247);
				structDefn();
				}
				break;
			case TUPLE:
				enterOuterAlt(_localctx, 4);
				{
				setState(248);
				tupleDefn();
				}
				break;
			case UNIT:
				enterOuterAlt(_localctx, 5);
				{
				setState(249);
				unitDefn();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 6);
				{
				setState(250);
				enumDefn();
				}
				break;
			case TYPE:
				enterOuterAlt(_localctx, 7);
				{
				setState(251);
				typeAliasDefn();
				}
				break;
			case FN:
				enterOuterAlt(_localctx, 8);
				{
				setState(252);
				fnDefn();
				}
				break;
			case INSTANTIATE:
				enterOuterAlt(_localctx, 9);
				{
				setState(253);
				instantiateDefn();
				}
				break;
			case EXEC:
				enterOuterAlt(_localctx, 10);
				{
				setState(254);
				execDefn();
				}
				break;
			case QUERY:
				enterOuterAlt(_localctx, 11);
				{
				setState(255);
				queryDefn();
				}
				break;
			case ERROR:
				enterOuterAlt(_localctx, 12);
				{
				setState(256);
				errorDefn();
				}
				break;
			case EVENT:
				enterOuterAlt(_localctx, 13);
				{
				setState(257);
				eventDefn();
				}
				break;
			case STATE:
				enterOuterAlt(_localctx, 14);
				{
				setState(258);
				stateBlockDefn();
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
	public static class ContractDefnContext extends ParserRuleContext {
		public IdentContext name;
		public IdentContext base;
		public TypeExprListContext interfaces;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
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
		enterRule(_localctx, 32, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			match(CONTRACT);
			{
			setState(262);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(263);
				match(EXTENDS);
				{
				setState(264);
				((ContractDefnContext)_localctx).base = ident();
				}
				}
			}

			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(267);
				match(IMPLEMENTS);
				{
				setState(268);
				((ContractDefnContext)_localctx).interfaces = typeExprList();
				}
				}
			}

			setState(271);
			match(LBRACE);
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(272);
				((ContractDefnContext)_localctx).stmt = stmt();
				((ContractDefnContext)_localctx).body.add(((ContractDefnContext)_localctx).stmt);
				}
				}
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(278);
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
	public static class InterfaceDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprListContext baseInterfaces;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
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
		enterRule(_localctx, 34, RULE_interfaceDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(INTERFACE);
			{
			setState(281);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(284);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(282);
				match(EXTENDS);
				{
				setState(283);
				((InterfaceDefnContext)_localctx).baseInterfaces = typeExprList();
				}
				}
			}

			setState(286);
			match(LBRACE);
			setState(290);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(287);
				((InterfaceDefnContext)_localctx).stmt = stmt();
				((InterfaceDefnContext)_localctx).body.add(((InterfaceDefnContext)_localctx).stmt);
				}
				}
				setState(292);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(293);
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
	public static class StructDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeVarListContext typeVars;
		public ParamListContext fields;
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public StructDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn; }
	}

	public final StructDefnContext structDefn() throws RecognitionException {
		StructDefnContext _localctx = new StructDefnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_structDefn);
		int _la;
		try {
			setState(321);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(295);
				match(STRUCT);
				{
				setState(296);
				((StructDefnContext)_localctx).name = ident();
				}
				setState(301);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(297);
					match(LBRACK);
					setState(298);
					((StructDefnContext)_localctx).typeVars = typeVarList();
					setState(299);
					match(RBRACK);
					}
				}

				setState(303);
				match(LBRACE);
				{
				setState(304);
				((StructDefnContext)_localctx).fields = paramList();
				}
				setState(305);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(307);
				match(STRUCT);
				{
				setState(308);
				((StructDefnContext)_localctx).name = ident();
				}
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(309);
					match(LBRACK);
					setState(310);
					((StructDefnContext)_localctx).typeVars = typeVarList();
					setState(311);
					match(RBRACK);
					}
				}

				setState(315);
				match(LPAREN);
				{
				setState(316);
				((StructDefnContext)_localctx).fields = paramList();
				}
				setState(317);
				match(RPAREN);
				setState(319);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
				case 1:
					{
					setState(318);
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
		public IdentContext name;
		public TypeVarListContext typeVars;
		public TypeExprListContext elements;
		public TerminalNode TUPLE() { return getToken(CWScriptParser.TUPLE, 0); }
		public List<TerminalNode> LBRACK() { return getTokens(CWScriptParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(CWScriptParser.LBRACK, i);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public TupleDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleDefn; }
	}

	public final TupleDefnContext tupleDefn() throws RecognitionException {
		TupleDefnContext _localctx = new TupleDefnContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_tupleDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			match(TUPLE);
			{
			setState(324);
			((TupleDefnContext)_localctx).name = ident();
			}
			setState(329);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(325);
				match(LBRACK);
				setState(326);
				((TupleDefnContext)_localctx).typeVars = typeVarList();
				setState(327);
				match(RBRACK);
				}
				break;
			}
			setState(331);
			match(LBRACK);
			{
			setState(332);
			((TupleDefnContext)_localctx).elements = typeExprList();
			}
			setState(333);
			match(RPAREN);
			setState(334);
			match(SEMI);
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
		public TypeVarListContext typeVars;
		public IdentContext name;
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public UnitDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitDefn; }
	}

	public final UnitDefnContext unitDefn() throws RecognitionException {
		UnitDefnContext _localctx = new UnitDefnContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_unitDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			match(UNIT);
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(337);
				match(LBRACK);
				setState(338);
				((UnitDefnContext)_localctx).typeVars = typeVarList();
				setState(339);
				match(RBRACK);
				}
			}

			{
			setState(343);
			((UnitDefnContext)_localctx).name = ident();
			}
			setState(344);
			match(SEMI);
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
		public TypeVarListContext typeVars;
		public EnumVariantListContext variants;
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public EnumVariantListContext enumVariantList() {
			return getRuleContext(EnumVariantListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public EnumDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefn; }
	}

	public final EnumDefnContext enumDefn() throws RecognitionException {
		EnumDefnContext _localctx = new EnumDefnContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(ENUM);
			{
			setState(347);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(352);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(348);
				match(LBRACK);
				setState(349);
				((EnumDefnContext)_localctx).typeVars = typeVarList();
				setState(350);
				match(RBRACK);
				}
			}

			setState(354);
			match(LBRACE);
			{
			setState(355);
			((EnumDefnContext)_localctx).variants = enumVariantList();
			}
			setState(356);
			match(RBRACE);
			setState(358);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(357);
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
	public static class EnumVariantListContext extends ParserRuleContext {
		public List<EnumVariantContext> enumVariant() {
			return getRuleContexts(EnumVariantContext.class);
		}
		public EnumVariantContext enumVariant(int i) {
			return getRuleContext(EnumVariantContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EnumVariantListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantList; }
	}

	public final EnumVariantListContext enumVariantList() throws RecognitionException {
		EnumVariantListContext _localctx = new EnumVariantListContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_enumVariantList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(360);
			enumVariant();
			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(361);
				match(COMMA);
				setState(362);
				enumVariant();
				}
				}
				setState(367);
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
	public static class EnumVariantContext extends ParserRuleContext {
		public EnumVariantStructDefnContext enumVariantStructDefn() {
			return getRuleContext(EnumVariantStructDefnContext.class,0);
		}
		public EnumVariantTupleDefnContext enumVariantTupleDefn() {
			return getRuleContext(EnumVariantTupleDefnContext.class,0);
		}
		public EnumVariantUnitDefnContext enumVariantUnitDefn() {
			return getRuleContext(EnumVariantUnitDefnContext.class,0);
		}
		public EnumVariantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariant; }
	}

	public final EnumVariantContext enumVariant() throws RecognitionException {
		EnumVariantContext _localctx = new EnumVariantContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_enumVariant);
		try {
			setState(371);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(368);
				enumVariantStructDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(369);
				enumVariantTupleDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(370);
				enumVariantUnitDefn();
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
	public static class EnumVariantStructDefnContext extends ParserRuleContext {
		public IdentContext name;
		public ParamListContext fields;
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public EnumVariantStructDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantStructDefn; }
	}

	public final EnumVariantStructDefnContext enumVariantStructDefn() throws RecognitionException {
		EnumVariantStructDefnContext _localctx = new EnumVariantStructDefnContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_enumVariantStructDefn);
		try {
			setState(383);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(373);
				((EnumVariantStructDefnContext)_localctx).name = ident();
				}
				setState(374);
				match(LBRACE);
				{
				setState(375);
				((EnumVariantStructDefnContext)_localctx).fields = paramList();
				}
				setState(376);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(378);
				((EnumVariantStructDefnContext)_localctx).name = ident();
				}
				setState(379);
				match(LPAREN);
				{
				setState(380);
				((EnumVariantStructDefnContext)_localctx).fields = paramList();
				}
				setState(381);
				match(RPAREN);
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
	public static class EnumVariantTupleDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprListContext elements;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public EnumVariantTupleDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantTupleDefn; }
	}

	public final EnumVariantTupleDefnContext enumVariantTupleDefn() throws RecognitionException {
		EnumVariantTupleDefnContext _localctx = new EnumVariantTupleDefnContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_enumVariantTupleDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(385);
			((EnumVariantTupleDefnContext)_localctx).name = ident();
			}
			setState(386);
			match(LBRACK);
			{
			setState(387);
			((EnumVariantTupleDefnContext)_localctx).elements = typeExprList();
			}
			setState(388);
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
	public static class EnumVariantUnitDefnContext extends ParserRuleContext {
		public IdentContext name;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public EnumVariantUnitDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantUnitDefn; }
	}

	public final EnumVariantUnitDefnContext enumVariantUnitDefn() throws RecognitionException {
		EnumVariantUnitDefnContext _localctx = new EnumVariantUnitDefnContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_enumVariantUnitDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(390);
			((EnumVariantUnitDefnContext)_localctx).name = ident();
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
	public static class TypeAliasDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext ty;
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
		enterRule(_localctx, 54, RULE_typeAliasDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			match(TYPE);
			{
			setState(393);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(394);
			match(EQ);
			{
			setState(395);
			((TypeAliasDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(396);
			match(SEMI);
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
		public ParamListContext params;
		public TypeExprContext returnTy;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
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
		enterRule(_localctx, 56, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			match(FN);
			{
			setState(399);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(400);
			match(LPAREN);
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(401);
				((FnDefnContext)_localctx).params = paramList();
				}
			}

			setState(404);
			match(RPAREN);
			setState(407);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(405);
				match(ARROW);
				{
				setState(406);
				((FnDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(409);
			match(LBRACE);
			setState(413);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(410);
				((FnDefnContext)_localctx).stmt = stmt();
				((FnDefnContext)_localctx).body.add(((FnDefnContext)_localctx).stmt);
				}
				}
				setState(415);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(416);
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
	public static class InstantiateDefnContext extends ParserRuleContext {
		public IdentContext name;
		public TypeExprContext returnTy;
		public ParamListContext params;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
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
		enterRule(_localctx, 58, RULE_instantiateDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			match(INSTANTIATE);
			{
			setState(419);
			((InstantiateDefnContext)_localctx).name = ident();
			}
			setState(422);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(420);
				match(ARROW);
				{
				setState(421);
				((InstantiateDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(424);
			match(LPAREN);
			setState(426);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(425);
				((InstantiateDefnContext)_localctx).params = paramList();
				}
			}

			setState(428);
			match(RPAREN);
			setState(429);
			match(LBRACE);
			setState(433);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(430);
				((InstantiateDefnContext)_localctx).stmt = stmt();
				((InstantiateDefnContext)_localctx).body.add(((InstantiateDefnContext)_localctx).stmt);
				}
				}
				setState(435);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(436);
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
	public static class ExecDefnContext extends ParserRuleContext {
		public IdentContext name;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
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
		enterRule(_localctx, 60, RULE_execDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
			match(EXEC);
			{
			setState(439);
			((ExecDefnContext)_localctx).name = ident();
			}
			setState(440);
			match(LPAREN);
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(441);
				((ExecDefnContext)_localctx).params = paramList();
				}
			}

			setState(446);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(444);
				match(ARROW);
				{
				setState(445);
				((ExecDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(448);
			match(RPAREN);
			setState(449);
			match(LBRACE);
			setState(453);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(450);
				((ExecDefnContext)_localctx).stmt = stmt();
				((ExecDefnContext)_localctx).body.add(((ExecDefnContext)_localctx).stmt);
				}
				}
				setState(455);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(456);
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
	public static class QueryDefnContext extends ParserRuleContext {
		public IdentContext name;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
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
		enterRule(_localctx, 62, RULE_queryDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(458);
			match(QUERY);
			{
			setState(459);
			((QueryDefnContext)_localctx).name = ident();
			}
			setState(460);
			match(LPAREN);
			setState(462);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(461);
				((QueryDefnContext)_localctx).params = paramList();
				}
			}

			setState(466);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(464);
				match(ARROW);
				{
				setState(465);
				((QueryDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(468);
			match(RPAREN);
			setState(469);
			match(LBRACE);
			setState(473);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(470);
				((QueryDefnContext)_localctx).stmt = stmt();
				((QueryDefnContext)_localctx).body.add(((QueryDefnContext)_localctx).stmt);
				}
				}
				setState(475);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(476);
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
	public static class ErrorDefnContext extends ParserRuleContext {
		public IdentContext name;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ErrorDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefn; }
	}

	public final ErrorDefnContext errorDefn() throws RecognitionException {
		ErrorDefnContext _localctx = new ErrorDefnContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_errorDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(478);
			match(ERROR);
			{
			setState(479);
			((ErrorDefnContext)_localctx).name = ident();
			}
			setState(480);
			match(LPAREN);
			setState(482);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(481);
				((ErrorDefnContext)_localctx).params = paramList();
				}
			}

			setState(486);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(484);
				match(ARROW);
				{
				setState(485);
				((ErrorDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(488);
			match(LBRACE);
			setState(492);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(489);
				((ErrorDefnContext)_localctx).stmt = stmt();
				((ErrorDefnContext)_localctx).body.add(((ErrorDefnContext)_localctx).stmt);
				}
				}
				setState(494);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(495);
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
		public IdentContext name;
		public ParamListContext params;
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public EventDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefn; }
	}

	public final EventDefnContext eventDefn() throws RecognitionException {
		EventDefnContext _localctx = new EventDefnContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_eventDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(497);
			match(EVENT);
			{
			setState(498);
			((EventDefnContext)_localctx).name = ident();
			}
			setState(499);
			match(LPAREN);
			{
			setState(500);
			((EventDefnContext)_localctx).params = paramList();
			}
			setState(501);
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
	public static class StateBlockDefnContext extends ParserRuleContext {
		public StateDefnContext stateDefn;
		public List<StateDefnContext> stateVars = new ArrayList<StateDefnContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
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
		enterRule(_localctx, 68, RULE_stateBlockDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(503);
			match(STATE);
			setState(504);
			match(LBRACK);
			setState(508);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				{
				setState(505);
				((StateBlockDefnContext)_localctx).stateDefn = stateDefn();
				((StateBlockDefnContext)_localctx).stateVars.add(((StateBlockDefnContext)_localctx).stateDefn);
				}
				}
				setState(510);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(511);
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
		enterRule(_localctx, 70, RULE_stateDefn);
		try {
			setState(515);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(513);
				stateItemDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(514);
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
		public IdentContext name;
		public TypeExprContext ty;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public StateItemDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateItemDefn; }
	}

	public final StateItemDefnContext stateItemDefn() throws RecognitionException {
		StateItemDefnContext _localctx = new StateItemDefnContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_stateItemDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(517);
			((StateItemDefnContext)_localctx).name = ident();
			}
			setState(518);
			match(COLON);
			{
			setState(519);
			((StateItemDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(520);
			match(SEMI);
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
		public IdentContext name;
		public TypeExprContext indexTy;
		public TypeExprContext ty;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public StateMapDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateMapDefn; }
	}

	public final StateMapDefnContext stateMapDefn() throws RecognitionException {
		StateMapDefnContext _localctx = new StateMapDefnContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_stateMapDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(522);
			((StateMapDefnContext)_localctx).name = ident();
			}
			setState(523);
			match(LBRACK);
			{
			setState(524);
			((StateMapDefnContext)_localctx).indexTy = typeExpr(0);
			}
			setState(525);
			match(RBRACK);
			setState(526);
			match(COLON);
			{
			setState(527);
			((StateMapDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(528);
			match(SEMI);
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
		public TerminalNode DIV() { return getToken(CWScriptParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CWScriptParser.MOD, 0); }
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
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
		public IfExpr_Context ifExpr_() {
			return getRuleContext(IfExpr_Context.class,0);
		}
		public IfExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentExprContext extends ExprContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentExprContext(ExprContext ctx) { copyFrom(ctx); }
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
	public static class AsExprContext extends ExprContext {
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
	public static class AddExprContext extends ExprContext {
		public Token op;
		public ExprContext rhs;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MINUS() { return getToken(CWScriptParser.MINUS, 0); }
		public TerminalNode PLUS() { return getToken(CWScriptParser.PLUS, 0); }
		public AddExprContext(ExprContext ctx) { copyFrom(ctx); }
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
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public TerminalNode LT_EQ() { return getToken(CWScriptParser.LT_EQ, 0); }
		public TerminalNode GT_EQ() { return getToken(CWScriptParser.GT_EQ, 0); }
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public CompExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ClosureExprContext extends ExprContext {
		public ClosureExpr_Context closureExpr_() {
			return getRuleContext(ClosureExpr_Context.class,0);
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
	public static class StructExprContext extends ExprContext {
		public StructExpr_Context structExpr_() {
			return getRuleContext(StructExpr_Context.class,0);
		}
		public StructExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleExprContext extends ExprContext {
		public TupleExpr_Context tupleExpr_() {
			return getRuleContext(TupleExpr_Context.class,0);
		}
		public TupleExprContext(ExprContext ctx) { copyFrom(ctx); }
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
		public TerminalNode NEQ() { return getToken(CWScriptParser.NEQ, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public EqExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IsExprContext extends ExprContext {
		public TypeExprContext rhs;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode IS() { return getToken(CWScriptParser.IS, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
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
	public static class CallExprContext extends ExprContext {
		public ArgListContext args;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
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
	public static class GroupedExprContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public GroupedExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExistsExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public ExistsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 76;
		enterRecursionRule(_localctx, 76, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(546);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(531);
				match(LPAREN);
				setState(532);
				expr(0);
				setState(533);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(535);
				match(NOT);
				setState(536);
				expr(20);
				}
				break;
			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(537);
				ifExpr_();
				}
				break;
			case 4:
				{
				_localctx = new QueryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(538);
				match(QUERY_NOW);
				setState(539);
				expr(8);
				}
				break;
			case 5:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(540);
				tryCatchElseExpr_();
				}
				break;
			case 6:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(541);
				closureExpr_();
				}
				break;
			case 7:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(542);
				structExpr_();
				}
				break;
			case 8:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(543);
				tupleExpr_();
				}
				break;
			case 9:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(544);
				literal();
				}
				break;
			case 10:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(545);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(611);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(609);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(548);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(549);
						match(DOT);
						{
						setState(550);
						((DotExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 2:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(551);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(552);
						match(LBRACK);
						{
						setState(553);
						((IndexExprContext)_localctx).index = expr(0);
						}
						setState(554);
						match(RBRACK);
						}
						break;
					case 3:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(556);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(557);
						match(LPAREN);
						setState(559);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144853578274558460L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
							{
							setState(558);
							((CallExprContext)_localctx).args = argList();
							}
						}

						setState(561);
						match(RPAREN);
						}
						break;
					case 4:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(562);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(563);
						match(QUEST);
						}
						break;
					case 5:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(564);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(565);
						match(AS);
						setState(566);
						typeExpr(0);
						}
						break;
					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(567);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(571);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case MUL:
							{
							setState(568);
							((MulExprContext)_localctx).op = match(MUL);
							}
							break;
						case DIV:
							{
							setState(569);
							match(DIV);
							}
							break;
						case MOD:
							{
							setState(570);
							match(MOD);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(573);
						((MulExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(574);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(577);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case PLUS:
							{
							setState(575);
							((AddExprContext)_localctx).op = match(PLUS);
							}
							break;
						case MINUS:
							{
							setState(576);
							match(MINUS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(579);
						((AddExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(580);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(585);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case LT:
							{
							setState(581);
							((CompExprContext)_localctx).op = match(LT);
							}
							break;
						case GT:
							{
							setState(582);
							match(GT);
							}
							break;
						case LT_EQ:
							{
							setState(583);
							match(LT_EQ);
							}
							break;
						case GT_EQ:
							{
							setState(584);
							match(GT_EQ);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(587);
						((CompExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(588);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(591);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case EQ:
							{
							setState(589);
							((EqExprContext)_localctx).op = match(EQ);
							}
							break;
						case NEQ:
							{
							setState(590);
							match(NEQ);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(593);
						((EqExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 10:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(594);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(595);
						match(IN);
						{
						setState(596);
						((InExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(597);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(598);
						match(IS);
						{
						setState(599);
						((IsExprContext)_localctx).rhs = typeExpr(0);
						}
						}
						break;
					case 12:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(600);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(601);
						match(AND);
						{
						setState(602);
						((AndExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 13:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(603);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(604);
						match(OR);
						{
						setState(605);
						((OrExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 14:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(606);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(607);
						match(D_QUEST);
						{
						setState(608);
						((ShortTryExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					}
					} 
				}
				setState(613);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
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
		public ExprContext cond;
		public StmtContext stmt;
		public List<StmtContext> thenBody = new ArrayList<StmtContext>();
		public List<StmtContext> elseBody = new ArrayList<StmtContext>();
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public List<TerminalNode> LBRACE() { return getTokens(CWScriptParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(CWScriptParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(CWScriptParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(CWScriptParser.RBRACE, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public IfExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExpr_; }
	}

	public final IfExpr_Context ifExpr_() throws RecognitionException {
		IfExpr_Context _localctx = new IfExpr_Context(_ctx, getState());
		enterRule(_localctx, 78, RULE_ifExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(614);
			match(IF);
			{
			setState(615);
			((IfExpr_Context)_localctx).cond = expr(0);
			}
			setState(616);
			match(LBRACE);
			setState(620);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(617);
				((IfExpr_Context)_localctx).stmt = stmt();
				((IfExpr_Context)_localctx).thenBody.add(((IfExpr_Context)_localctx).stmt);
				}
				}
				setState(622);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(623);
			match(RBRACE);
			setState(633);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				{
				setState(624);
				match(ELSE);
				setState(625);
				match(LBRACE);
				setState(629);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
					{
					{
					setState(626);
					((IfExpr_Context)_localctx).stmt = stmt();
					((IfExpr_Context)_localctx).elseBody.add(((IfExpr_Context)_localctx).stmt);
					}
					}
					setState(631);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(632);
				match(RBRACE);
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
		public StmtContext stmt;
		public List<StmtContext> tryBody = new ArrayList<StmtContext>();
		public CatchClauseContext catchClause;
		public List<CatchClauseContext> catchClauses = new ArrayList<CatchClauseContext>();
		public List<StmtContext> elseBody = new ArrayList<StmtContext>();
		public TerminalNode TRY() { return getToken(CWScriptParser.TRY, 0); }
		public List<TerminalNode> LBRACE() { return getTokens(CWScriptParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(CWScriptParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(CWScriptParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(CWScriptParser.RBRACE, i);
		}
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
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
		enterRule(_localctx, 80, RULE_tryCatchElseExpr_);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(635);
			match(TRY);
			setState(636);
			match(LBRACE);
			setState(640);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(637);
				((TryCatchElseExpr_Context)_localctx).stmt = stmt();
				((TryCatchElseExpr_Context)_localctx).tryBody.add(((TryCatchElseExpr_Context)_localctx).stmt);
				}
				}
				setState(642);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(643);
			match(RBRACE);
			setState(647);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(644);
					((TryCatchElseExpr_Context)_localctx).catchClause = catchClause();
					((TryCatchElseExpr_Context)_localctx).catchClauses.add(((TryCatchElseExpr_Context)_localctx).catchClause);
					}
					} 
				}
				setState(649);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			}
			setState(659);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				{
				setState(650);
				match(ELSE);
				setState(651);
				match(LBRACE);
				setState(655);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
					{
					{
					setState(652);
					((TryCatchElseExpr_Context)_localctx).stmt = stmt();
					((TryCatchElseExpr_Context)_localctx).elseBody.add(((TryCatchElseExpr_Context)_localctx).stmt);
					}
					}
					setState(657);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(658);
				match(RBRACE);
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
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_catchClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(661);
			match(CATCH);
			{
			setState(662);
			((CatchClauseContext)_localctx).ty = typeExpr(0);
			}
			setState(663);
			match(LBRACE);
			setState(667);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(664);
				((CatchClauseContext)_localctx).stmt = stmt();
				((CatchClauseContext)_localctx).body.add(((CatchClauseContext)_localctx).stmt);
				}
				}
				setState(669);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(670);
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
	public static class ClosureExpr_Context extends ParserRuleContext {
		public Token fallible;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public StmtContext stmt;
		public List<StmtContext> body = new ArrayList<StmtContext>();
		public List<TerminalNode> BAR() { return getTokens(CWScriptParser.BAR); }
		public TerminalNode BAR(int i) {
			return getToken(CWScriptParser.BAR, i);
		}
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ClosureExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureExpr_; }
	}

	public final ClosureExpr_Context closureExpr_() throws RecognitionException {
		ClosureExpr_Context _localctx = new ClosureExpr_Context(_ctx, getState());
		enterRule(_localctx, 84, RULE_closureExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(673);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(672);
				((ClosureExpr_Context)_localctx).fallible = match(BANG);
				}
			}

			setState(675);
			match(BAR);
			setState(677);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(676);
				((ClosureExpr_Context)_localctx).params = paramList();
				}
			}

			setState(679);
			match(BAR);
			setState(682);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(680);
				match(ARROW);
				{
				setState(681);
				((ClosureExpr_Context)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(684);
			match(LBRACE);
			setState(688);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144854059310898684L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(685);
				((ClosureExpr_Context)_localctx).stmt = stmt();
				((ClosureExpr_Context)_localctx).body.add(((ClosureExpr_Context)_localctx).stmt);
				}
				}
				setState(690);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(691);
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
	public static class StructExpr_Context extends ParserRuleContext {
		public TypeExprContext ty;
		public FieldListContext fields;
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public FieldListContext fieldList() {
			return getRuleContext(FieldListContext.class,0);
		}
		public StructExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structExpr_; }
	}

	public final StructExpr_Context structExpr_() throws RecognitionException {
		StructExpr_Context _localctx = new StructExpr_Context(_ctx, getState());
		enterRule(_localctx, 86, RULE_structExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(693);
			((StructExpr_Context)_localctx).ty = typeExpr(0);
			}
			setState(694);
			match(LBRACE);
			setState(696);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0) || _la==Ident) {
				{
				setState(695);
				((StructExpr_Context)_localctx).fields = fieldList();
				}
			}

			setState(698);
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
		public TupleExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleExpr_; }
	}

	public final TupleExpr_Context tupleExpr_() throws RecognitionException {
		TupleExpr_Context _localctx = new TupleExpr_Context(_ctx, getState());
		enterRule(_localctx, 88, RULE_tupleExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(700);
			match(LBRACK);
			setState(704);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144853578274558460L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(701);
				((TupleExpr_Context)_localctx).expr = expr(0);
				((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
				}
				}
				setState(706);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(707);
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
		enterRule(_localctx, 90, RULE_literal);
		try {
			setState(714);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				_localctx = new StringLitContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(709);
				match(StringLiteral);
				}
				break;
			case IntLiteral:
				_localctx = new IntLitContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(710);
				match(IntLiteral);
				}
				break;
			case DecLiteral:
				_localctx = new DecLitContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(711);
				match(DecLiteral);
				}
				break;
			case BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(712);
				match(BoolLiteral);
				}
				break;
			case NONE:
				_localctx = new NoneLitContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(713);
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
		public TypeExprContext ty;
		public Token size;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode IntLiteral() { return getToken(CWScriptParser.IntLiteral, 0); }
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
	public static class ParamzdTypeExprContext extends TypeExprContext {
		public TypeExprListContext typeArgs;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public ParamzdTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
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
		int _startState = 92;
		enterRecursionRule(_localctx, 92, RULE_typeExpr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(733);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(717);
				match(LPAREN);
				setState(718);
				typeExpr(0);
				setState(719);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(721);
				match(LBRACK);
				setState(722);
				((ArrayTypeExprContext)_localctx).ty = typeExpr(0);
				setState(723);
				match(SEMI);
				setState(724);
				((ArrayTypeExprContext)_localctx).size = match(IntLiteral);
				setState(725);
				match(RBRACK);
				}
				break;
			case 3:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(727);
				structDefn();
				}
				break;
			case 4:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(728);
				tupleDefn();
				}
				break;
			case 5:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(729);
				unitDefn();
				}
				break;
			case 6:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(730);
				enumDefn();
				}
				break;
			case 7:
				{
				_localctx = new TypeVarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(731);
				typeVar();
				}
				break;
			case 8:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(732);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(747);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(745);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
					case 1:
						{
						_localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(735);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(736);
						match(LBRACK);
						setState(737);
						((ParamzdTypeExprContext)_localctx).typeArgs = typeExprList();
						setState(738);
						match(RBRACK);
						}
						break;
					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(740);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(741);
						match(DOT);
						{
						setState(742);
						((MemberTypeExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(743);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(744);
						match(QUEST);
						}
						break;
					}
					} 
				}
				setState(749);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
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
		public TerminalNode TypeVar() { return getToken(CWScriptParser.TypeVar, 0); }
		public TypeVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeVar; }
	}

	public final TypeVarContext typeVar() throws RecognitionException {
		TypeVarContext _localctx = new TypeVarContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_typeVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(750);
			match(TypeVar);
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
	public static class TypeVarListContext extends ParserRuleContext {
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
		public TypeVarListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeVarList; }
	}

	public final TypeVarListContext typeVarList() throws RecognitionException {
		TypeVarListContext _localctx = new TypeVarListContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_typeVarList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(752);
			typeVar();
			setState(757);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(753);
				match(COMMA);
				setState(754);
				typeVar();
				}
				}
				setState(759);
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
		enterRule(_localctx, 98, RULE_ident);
		try {
			setState(762);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ident:
				enterOuterAlt(_localctx, 1);
				{
				setState(760);
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
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
			case EMIT:
				enterOuterAlt(_localctx, 2);
				{
				setState(761);
				reservedKeyword();
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
		public IdentContext name;
		public Token optional;
		public TypeExprContext ty;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
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
		enterRule(_localctx, 100, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(764);
			((ParamContext)_localctx).name = ident();
			}
			setState(766);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(765);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(768);
			match(COLON);
			{
			setState(770);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 738389779268092L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(769);
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
		public TypeExprContext ty;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(772);
			((FieldContext)_localctx).name = ident();
			}
			setState(773);
			match(COLON);
			{
			setState(774);
			((FieldContext)_localctx).ty = typeExpr(0);
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
		enterRule(_localctx, 104, RULE_namedArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(776);
			((NamedArgContext)_localctx).name = ident();
			}
			setState(777);
			match(EQ);
			{
			setState(778);
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
		enterRule(_localctx, 106, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(782);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
			case 1:
				{
				setState(780);
				expr(0);
				}
				break;
			case 2:
				{
				setState(781);
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
		enterRule(_localctx, 108, RULE_identList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(784);
			ident();
			setState(789);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(785);
				match(COMMA);
				setState(786);
				ident();
				}
				}
				setState(791);
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
		enterRule(_localctx, 110, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(792);
			param();
			setState(797);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(793);
				match(COMMA);
				setState(794);
				param();
				}
				}
				setState(799);
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
		enterRule(_localctx, 112, RULE_typeExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(800);
			typeExpr(0);
			setState(805);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(801);
				match(COMMA);
				setState(802);
				typeExpr(0);
				}
				}
				setState(807);
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
	public static class FieldListContext extends ParserRuleContext {
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
		public FieldListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldList; }
	}

	public final FieldListContext fieldList() throws RecognitionException {
		FieldListContext _localctx = new FieldListContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_fieldList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(808);
			field();
			setState(813);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(809);
				match(COMMA);
				setState(810);
				field();
				}
				}
				setState(815);
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
	public static class ArgListContext extends ParserRuleContext {
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
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(816);
			arg();
			setState(821);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(817);
				match(COMMA);
				setState(818);
				arg();
				}
				}
				setState(823);
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
		public TerminalNode TUPLE() { return getToken(CWScriptParser.TUPLE, 0); }
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
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
		enterRule(_localctx, 118, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(824);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 34702337491452L) != 0)) ) {
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
		case 38:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 46:
			return typeExpr_sempred((TypeExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 23);
		case 1:
			return precpred(_ctx, 22);
		case 2:
			return precpred(_ctx, 21);
		case 3:
			return precpred(_ctx, 19);
		case 4:
			return precpred(_ctx, 18);
		case 5:
			return precpred(_ctx, 17);
		case 6:
			return precpred(_ctx, 16);
		case 7:
			return precpred(_ctx, 15);
		case 8:
			return precpred(_ctx, 14);
		case 9:
			return precpred(_ctx, 13);
		case 10:
			return precpred(_ctx, 12);
		case 11:
			return precpred(_ctx, 11);
		case 12:
			return precpred(_ctx, 10);
		case 13:
			return precpred(_ctx, 7);
		}
		return true;
	}
	private boolean typeExpr_sempred(TypeExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return precpred(_ctx, 10);
		case 15:
			return precpred(_ctx, 9);
		case 16:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001a\u033b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0001"+
		"\u0000\u0005\u0000z\b\u0000\n\u0000\f\u0000}\t\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u008f\b\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0003\u0002\u0094\b\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004\u00a5\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004\u00af"+
		"\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005\u00b4\b\u0005"+
		"\n\u0005\f\u0005\u00b7\t\u0005\u0001\u0005\u0003\u0005\u00ba\b\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00e3\b\u000b\n"+
		"\u000b\f\u000b\u00e6\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u0104\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u010a\b\u0010\u0001"+
		"\u0010\u0001\u0010\u0003\u0010\u010e\b\u0010\u0001\u0010\u0001\u0010\u0005"+
		"\u0010\u0112\b\u0010\n\u0010\f\u0010\u0115\t\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u011d\b\u0011"+
		"\u0001\u0011\u0001\u0011\u0005\u0011\u0121\b\u0011\n\u0011\f\u0011\u0124"+
		"\t\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u012e\b\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u013a\b\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0140\b\u0012\u0003\u0012\u0142"+
		"\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0003\u0013\u014a\b\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0003\u0014\u0156\b\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0003"+
		"\u0015\u0161\b\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0003"+
		"\u0015\u0167\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u016c"+
		"\b\u0016\n\u0016\f\u0016\u016f\t\u0016\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0003\u0017\u0174\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0003\u0018\u0180\b\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0003\u001c\u0193\b\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0003\u001c\u0198\b\u001c\u0001\u001c\u0001\u001c\u0005\u001c\u019c\b"+
		"\u001c\n\u001c\f\u001c\u019f\t\u001c\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u01a7\b\u001d\u0001\u001d"+
		"\u0001\u001d\u0003\u001d\u01ab\b\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0005\u001d\u01b0\b\u001d\n\u001d\f\u001d\u01b3\t\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u01bb"+
		"\b\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u01bf\b\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0005\u001e\u01c4\b\u001e\n\u001e\f\u001e\u01c7"+
		"\t\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0003\u001f\u01cf\b\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u01d3"+
		"\b\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0005\u001f\u01d8\b\u001f"+
		"\n\u001f\f\u001f\u01db\t\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001"+
		" \u0001 \u0003 \u01e3\b \u0001 \u0001 \u0003 \u01e7\b \u0001 \u0001 \u0005"+
		" \u01eb\b \n \f \u01ee\t \u0001 \u0001 \u0001!\u0001!\u0001!\u0001!\u0001"+
		"!\u0001!\u0001\"\u0001\"\u0001\"\u0005\"\u01fb\b\"\n\"\f\"\u01fe\t\"\u0001"+
		"\"\u0001\"\u0001#\u0001#\u0003#\u0204\b#\u0001$\u0001$\u0001$\u0001$\u0001"+
		"$\u0001%\u0001%\u0001%\u0001%\u0001%\u0001%\u0001%\u0001%\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0003&\u0223\b&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u0230\b&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003"+
		"&\u023c\b&\u0001&\u0001&\u0001&\u0001&\u0003&\u0242\b&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0003&\u024a\b&\u0001&\u0001&\u0001&\u0001&\u0003"+
		"&\u0250\b&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0005&\u0262\b&\n&"+
		"\f&\u0265\t&\u0001\'\u0001\'\u0001\'\u0001\'\u0005\'\u026b\b\'\n\'\f\'"+
		"\u026e\t\'\u0001\'\u0001\'\u0001\'\u0001\'\u0005\'\u0274\b\'\n\'\f\'\u0277"+
		"\t\'\u0001\'\u0003\'\u027a\b\'\u0001(\u0001(\u0001(\u0005(\u027f\b(\n"+
		"(\f(\u0282\t(\u0001(\u0001(\u0005(\u0286\b(\n(\f(\u0289\t(\u0001(\u0001"+
		"(\u0001(\u0005(\u028e\b(\n(\f(\u0291\t(\u0001(\u0003(\u0294\b(\u0001)"+
		"\u0001)\u0001)\u0001)\u0005)\u029a\b)\n)\f)\u029d\t)\u0001)\u0001)\u0001"+
		"*\u0003*\u02a2\b*\u0001*\u0001*\u0003*\u02a6\b*\u0001*\u0001*\u0001*\u0003"+
		"*\u02ab\b*\u0001*\u0001*\u0005*\u02af\b*\n*\f*\u02b2\t*\u0001*\u0001*"+
		"\u0001+\u0001+\u0001+\u0003+\u02b9\b+\u0001+\u0001+\u0001,\u0001,\u0005"+
		",\u02bf\b,\n,\f,\u02c2\t,\u0001,\u0001,\u0001-\u0001-\u0001-\u0001-\u0001"+
		"-\u0003-\u02cb\b-\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0003"+
		".\u02de\b.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0005.\u02ea\b.\n.\f.\u02ed\t.\u0001/\u0001/\u00010\u00010\u0001"+
		"0\u00050\u02f4\b0\n0\f0\u02f7\t0\u00011\u00011\u00031\u02fb\b1\u00012"+
		"\u00012\u00032\u02ff\b2\u00012\u00012\u00032\u0303\b2\u00013\u00013\u0001"+
		"3\u00013\u00014\u00014\u00014\u00014\u00015\u00015\u00035\u030f\b5\u0001"+
		"6\u00016\u00016\u00056\u0314\b6\n6\f6\u0317\t6\u00017\u00017\u00017\u0005"+
		"7\u031c\b7\n7\f7\u031f\t7\u00018\u00018\u00018\u00058\u0324\b8\n8\f8\u0327"+
		"\t8\u00019\u00019\u00019\u00059\u032c\b9\n9\f9\u032f\t9\u0001:\u0001:"+
		"\u0001:\u0005:\u0334\b:\n:\f:\u0337\t:\u0001;\u0001;\u0001;\u0000\u0002"+
		"L\\<\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv\u0000"+
		"\u0002\u0006\u0000EEIIKKMMOOQQ\u0005\u0000\u0002\b\u000e\u0016\u001a\u001a"+
		"\u001e#\',\u0387\u0000{\u0001\u0000\u0000\u0000\u0002\u008e\u0001\u0000"+
		"\u0000\u0000\u0004\u0090\u0001\u0000\u0000\u0000\u0006\u009a\u0001\u0000"+
		"\u0000\u0000\b\u00ae\u0001\u0000\u0000\u0000\n\u00b0\u0001\u0000\u0000"+
		"\u0000\f\u00c0\u0001\u0000\u0000\u0000\u000e\u00c5\u0001\u0000\u0000\u0000"+
		"\u0010\u00cc\u0001\u0000\u0000\u0000\u0012\u00d4\u0001\u0000\u0000\u0000"+
		"\u0014\u00d8\u0001\u0000\u0000\u0000\u0016\u00dc\u0001\u0000\u0000\u0000"+
		"\u0018\u00e9\u0001\u0000\u0000\u0000\u001a\u00ed\u0001\u0000\u0000\u0000"+
		"\u001c\u00f1\u0001\u0000\u0000\u0000\u001e\u0103\u0001\u0000\u0000\u0000"+
		" \u0105\u0001\u0000\u0000\u0000\"\u0118\u0001\u0000\u0000\u0000$\u0141"+
		"\u0001\u0000\u0000\u0000&\u0143\u0001\u0000\u0000\u0000(\u0150\u0001\u0000"+
		"\u0000\u0000*\u015a\u0001\u0000\u0000\u0000,\u0168\u0001\u0000\u0000\u0000"+
		".\u0173\u0001\u0000\u0000\u00000\u017f\u0001\u0000\u0000\u00002\u0181"+
		"\u0001\u0000\u0000\u00004\u0186\u0001\u0000\u0000\u00006\u0188\u0001\u0000"+
		"\u0000\u00008\u018e\u0001\u0000\u0000\u0000:\u01a2\u0001\u0000\u0000\u0000"+
		"<\u01b6\u0001\u0000\u0000\u0000>\u01ca\u0001\u0000\u0000\u0000@\u01de"+
		"\u0001\u0000\u0000\u0000B\u01f1\u0001\u0000\u0000\u0000D\u01f7\u0001\u0000"+
		"\u0000\u0000F\u0203\u0001\u0000\u0000\u0000H\u0205\u0001\u0000\u0000\u0000"+
		"J\u020a\u0001\u0000\u0000\u0000L\u0222\u0001\u0000\u0000\u0000N\u0266"+
		"\u0001\u0000\u0000\u0000P\u027b\u0001\u0000\u0000\u0000R\u0295\u0001\u0000"+
		"\u0000\u0000T\u02a1\u0001\u0000\u0000\u0000V\u02b5\u0001\u0000\u0000\u0000"+
		"X\u02bc\u0001\u0000\u0000\u0000Z\u02ca\u0001\u0000\u0000\u0000\\\u02dd"+
		"\u0001\u0000\u0000\u0000^\u02ee\u0001\u0000\u0000\u0000`\u02f0\u0001\u0000"+
		"\u0000\u0000b\u02fa\u0001\u0000\u0000\u0000d\u02fc\u0001\u0000\u0000\u0000"+
		"f\u0304\u0001\u0000\u0000\u0000h\u0308\u0001\u0000\u0000\u0000j\u030e"+
		"\u0001\u0000\u0000\u0000l\u0310\u0001\u0000\u0000\u0000n\u0318\u0001\u0000"+
		"\u0000\u0000p\u0320\u0001\u0000\u0000\u0000r\u0328\u0001\u0000\u0000\u0000"+
		"t\u0330\u0001\u0000\u0000\u0000v\u0338\u0001\u0000\u0000\u0000xz\u0003"+
		"\u0002\u0001\u0000yx\u0001\u0000\u0000\u0000z}\u0001\u0000\u0000\u0000"+
		"{y\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000|~\u0001\u0000\u0000"+
		"\u0000}{\u0001\u0000\u0000\u0000~\u007f\u0005\u0000\u0000\u0001\u007f"+
		"\u0001\u0001\u0000\u0000\u0000\u0080\u008f\u0003\u0004\u0002\u0000\u0081"+
		"\u008f\u0003\u0006\u0003\u0000\u0082\u008f\u0003\n\u0005\u0000\u0083\u008f"+
		"\u0003\f\u0006\u0000\u0084\u008f\u0003\u000e\u0007\u0000\u0085\u008f\u0003"+
		"\u0010\b\u0000\u0086\u008f\u0003\u0016\u000b\u0000\u0087\u008f\u0003\u0018"+
		"\f\u0000\u0088\u008f\u0003\u001a\r\u0000\u0089\u008f\u0003\u0014\n\u0000"+
		"\u008a\u008f\u0003\u0012\t\u0000\u008b\u008f\u0003\u001e\u000f\u0000\u008c"+
		"\u008f\u0003L&\u0000\u008d\u008f\u0003\\.\u0000\u008e\u0080\u0001\u0000"+
		"\u0000\u0000\u008e\u0081\u0001\u0000\u0000\u0000\u008e\u0082\u0001\u0000"+
		"\u0000\u0000\u008e\u0083\u0001\u0000\u0000\u0000\u008e\u0084\u0001\u0000"+
		"\u0000\u0000\u008e\u0085\u0001\u0000\u0000\u0000\u008e\u0086\u0001\u0000"+
		"\u0000\u0000\u008e\u0087\u0001\u0000\u0000\u0000\u008e\u0088\u0001\u0000"+
		"\u0000\u0000\u008e\u0089\u0001\u0000\u0000\u0000\u008e\u008a\u0001\u0000"+
		"\u0000\u0000\u008e\u008b\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000"+
		"\u0000\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008f\u0003\u0001\u0000"+
		"\u0000\u0000\u0090\u0091\u0005\u0004\u0000\u0000\u0091\u0093\u00053\u0000"+
		"\u0000\u0092\u0094\u0003l6\u0000\u0093\u0092\u0001\u0000\u0000\u0000\u0093"+
		"\u0094\u0001\u0000\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095"+
		"\u0096\u00054\u0000\u0000\u0096\u0097\u0005\u0014\u0000\u0000\u0097\u0098"+
		"\u0005Y\u0000\u0000\u0098\u0099\u0005:\u0000\u0000\u0099\u0005\u0001\u0000"+
		"\u0000\u0000\u009a\u009b\u0005#\u0000\u0000\u009b\u009c\u0003\b\u0004"+
		"\u0000\u009c\u009d\u0005E\u0000\u0000\u009d\u009e\u0003L&\u0000\u009e"+
		"\u009f\u0001\u0000\u0000\u0000\u009f\u00a0\u0005:\u0000\u0000\u00a0\u0007"+
		"\u0001\u0000\u0000\u0000\u00a1\u00a4\u0003b1\u0000\u00a2\u00a3\u0005;"+
		"\u0000\u0000\u00a3\u00a5\u0003\\.\u0000\u00a4\u00a2\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000\u00a5\u00af\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a7\u00051\u0000\u0000\u00a7\u00a8\u0003l6\u0000\u00a8"+
		"\u00a9\u00052\u0000\u0000\u00a9\u00af\u0001\u0000\u0000\u0000\u00aa\u00ab"+
		"\u00053\u0000\u0000\u00ab\u00ac\u0003l6\u0000\u00ac\u00ad\u00054\u0000"+
		"\u0000\u00ad\u00af\u0001\u0000\u0000\u0000\u00ae\u00a1\u0001\u0000\u0000"+
		"\u0000\u00ae\u00a6\u0001\u0000\u0000\u0000\u00ae\u00aa\u0001\u0000\u0000"+
		"\u0000\u00af\t\u0001\u0000\u0000\u0000\u00b0\u00b1\u0005$\u0000\u0000"+
		"\u00b1\u00b9\u0003b1\u0000\u00b2\u00b4\u0005;\u0000\u0000\u00b3\u00b2"+
		"\u0001\u0000\u0000\u0000\u00b4\u00b7\u0001\u0000\u0000\u0000\u00b5\u00b3"+
		"\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6\u00b8"+
		"\u0001\u0000\u0000\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b8\u00ba"+
		"\u0003\\.\u0000\u00b9\u00b5\u0001\u0000\u0000\u0000\u00b9\u00ba\u0001"+
		"\u0000\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb\u00bc\u0005"+
		"E\u0000\u0000\u00bc\u00bd\u0003L&\u0000\u00bd\u00be\u0001\u0000\u0000"+
		"\u0000\u00be\u00bf\u0005:\u0000\u0000\u00bf\u000b\u0001\u0000\u0000\u0000"+
		"\u00c0\u00c1\u0003b1\u0000\u00c1\u00c2\u0007\u0000\u0000\u0000\u00c2\u00c3"+
		"\u0003L&\u0000\u00c3\u00c4\u0005:\u0000\u0000\u00c4\r\u0001\u0000\u0000"+
		"\u0000\u00c5\u00c6\u0003L&\u0000\u00c6\u00c7\u00055\u0000\u0000\u00c7"+
		"\u00c8\u0003b1\u0000\u00c8\u00c9\u0007\u0000\u0000\u0000\u00c9\u00ca\u0003"+
		"L&\u0000\u00ca\u00cb\u0005:\u0000\u0000\u00cb\u000f\u0001\u0000\u0000"+
		"\u0000\u00cc\u00cd\u0003L&\u0000\u00cd\u00ce\u00051\u0000\u0000\u00ce"+
		"\u00cf\u0003L&\u0000\u00cf\u00d0\u00052\u0000\u0000\u00d0\u00d1\u0007"+
		"\u0000\u0000\u0000\u00d1\u00d2\u0003L&\u0000\u00d2\u00d3\u0005:\u0000"+
		"\u0000\u00d3\u0011\u0001\u0000\u0000\u0000\u00d4\u00d5\u0005&\u0000\u0000"+
		"\u00d5\u00d6\u0003L&\u0000\u00d6\u00d7\u0005:\u0000\u0000\u00d7\u0013"+
		"\u0001\u0000\u0000\u0000\u00d8\u00d9\u0005%\u0000\u0000\u00d9\u00da\u0003"+
		"L&\u0000\u00da\u00db\u0005:\u0000\u0000\u00db\u0015\u0001\u0000\u0000"+
		"\u0000\u00dc\u00dd\u0005\u0012\u0000\u0000\u00dd\u00de\u0003\b\u0004\u0000"+
		"\u00de\u00df\u0005\u0013\u0000\u0000\u00df\u00e0\u0003L&\u0000\u00e0\u00e4"+
		"\u00053\u0000\u0000\u00e1\u00e3\u0003\u0002\u0001\u0000\u00e2\u00e1\u0001"+
		"\u0000\u0000\u0000\u00e3\u00e6\u0001\u0000\u0000\u0000\u00e4\u00e2\u0001"+
		"\u0000\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000\u0000\u00e5\u00e7\u0001"+
		"\u0000\u0000\u0000\u00e6\u00e4\u0001\u0000\u0000\u0000\u00e7\u00e8\u0005"+
		"4\u0000\u0000\u00e8\u0017\u0001\u0000\u0000\u0000\u00e9\u00ea\u0005\u000b"+
		"\u0000\u0000\u00ea\u00eb\u0003L&\u0000\u00eb\u00ec\u0005:\u0000\u0000"+
		"\u00ec\u0019\u0001\u0000\u0000\u0000\u00ed\u00ee\u0005\n\u0000\u0000\u00ee"+
		"\u00ef\u0003L&\u0000\u00ef\u00f0\u0005:\u0000\u0000\u00f0\u001b\u0001"+
		"\u0000\u0000\u0000\u00f1\u00f2\u0005,\u0000\u0000\u00f2\u00f3\u0003L&"+
		"\u0000\u00f3\u00f4\u0005:\u0000\u0000\u00f4\u001d\u0001\u0000\u0000\u0000"+
		"\u00f5\u0104\u0003 \u0010\u0000\u00f6\u0104\u0003\"\u0011\u0000\u00f7"+
		"\u0104\u0003$\u0012\u0000\u00f8\u0104\u0003&\u0013\u0000\u00f9\u0104\u0003"+
		"(\u0014\u0000\u00fa\u0104\u0003*\u0015\u0000\u00fb\u0104\u00036\u001b"+
		"\u0000\u00fc\u0104\u00038\u001c\u0000\u00fd\u0104\u0003:\u001d\u0000\u00fe"+
		"\u0104\u0003<\u001e\u0000\u00ff\u0104\u0003>\u001f\u0000\u0100\u0104\u0003"+
		"@ \u0000\u0101\u0104\u0003B!\u0000\u0102\u0104\u0003D\"\u0000\u0103\u00f5"+
		"\u0001\u0000\u0000\u0000\u0103\u00f6\u0001\u0000\u0000\u0000\u0103\u00f7"+
		"\u0001\u0000\u0000\u0000\u0103\u00f8\u0001\u0000\u0000\u0000\u0103\u00f9"+
		"\u0001\u0000\u0000\u0000\u0103\u00fa\u0001\u0000\u0000\u0000\u0103\u00fb"+
		"\u0001\u0000\u0000\u0000\u0103\u00fc\u0001\u0000\u0000\u0000\u0103\u00fd"+
		"\u0001\u0000\u0000\u0000\u0103\u00fe\u0001\u0000\u0000\u0000\u0103\u00ff"+
		"\u0001\u0000\u0000\u0000\u0103\u0100\u0001\u0000\u0000\u0000\u0103\u0101"+
		"\u0001\u0000\u0000\u0000\u0103\u0102\u0001\u0000\u0000\u0000\u0104\u001f"+
		"\u0001\u0000\u0000\u0000\u0105\u0106\u0005\u0002\u0000\u0000\u0106\u0109"+
		"\u0003b1\u0000\u0107\u0108\u0005\u0006\u0000\u0000\u0108\u010a\u0003b"+
		"1\u0000\u0109\u0107\u0001\u0000\u0000\u0000\u0109\u010a\u0001\u0000\u0000"+
		"\u0000\u010a\u010d\u0001\u0000\u0000\u0000\u010b\u010c\u0005\u0005\u0000"+
		"\u0000\u010c\u010e\u0003p8\u0000\u010d\u010b\u0001\u0000\u0000\u0000\u010d"+
		"\u010e\u0001\u0000\u0000\u0000\u010e\u010f\u0001\u0000\u0000\u0000\u010f"+
		"\u0113\u00053\u0000\u0000\u0110\u0112\u0003\u0002\u0001\u0000\u0111\u0110"+
		"\u0001\u0000\u0000\u0000\u0112\u0115\u0001\u0000\u0000\u0000\u0113\u0111"+
		"\u0001\u0000\u0000\u0000\u0113\u0114\u0001\u0000\u0000\u0000\u0114\u0116"+
		"\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0116\u0117"+
		"\u00054\u0000\u0000\u0117!\u0001\u0000\u0000\u0000\u0118\u0119\u0005\u0003"+
		"\u0000\u0000\u0119\u011c\u0003b1\u0000\u011a\u011b\u0005\u0006\u0000\u0000"+
		"\u011b\u011d\u0003p8\u0000\u011c\u011a\u0001\u0000\u0000\u0000\u011c\u011d"+
		"\u0001\u0000\u0000\u0000\u011d\u011e\u0001\u0000\u0000\u0000\u011e\u0122"+
		"\u00053\u0000\u0000\u011f\u0121\u0003\u0002\u0001\u0000\u0120\u011f\u0001"+
		"\u0000\u0000\u0000\u0121\u0124\u0001\u0000\u0000\u0000\u0122\u0120\u0001"+
		"\u0000\u0000\u0000\u0122\u0123\u0001\u0000\u0000\u0000\u0123\u0125\u0001"+
		"\u0000\u0000\u0000\u0124\u0122\u0001\u0000\u0000\u0000\u0125\u0126\u0005"+
		"4\u0000\u0000\u0126#\u0001\u0000\u0000\u0000\u0127\u0128\u0005\'\u0000"+
		"\u0000\u0128\u012d\u0003b1\u0000\u0129\u012a\u00051\u0000\u0000\u012a"+
		"\u012b\u0003`0\u0000\u012b\u012c\u00052\u0000\u0000\u012c\u012e\u0001"+
		"\u0000\u0000\u0000\u012d\u0129\u0001\u0000\u0000\u0000\u012d\u012e\u0001"+
		"\u0000\u0000\u0000\u012e\u012f\u0001\u0000\u0000\u0000\u012f\u0130\u0005"+
		"3\u0000\u0000\u0130\u0131\u0003n7\u0000\u0131\u0132\u00054\u0000\u0000"+
		"\u0132\u0142\u0001\u0000\u0000\u0000\u0133\u0134\u0005\'\u0000\u0000\u0134"+
		"\u0139\u0003b1\u0000\u0135\u0136\u00051\u0000\u0000\u0136\u0137\u0003"+
		"`0\u0000\u0137\u0138\u00052\u0000\u0000\u0138\u013a\u0001\u0000\u0000"+
		"\u0000\u0139\u0135\u0001\u0000\u0000\u0000\u0139\u013a\u0001\u0000\u0000"+
		"\u0000\u013a\u013b\u0001\u0000\u0000\u0000\u013b\u013c\u0005/\u0000\u0000"+
		"\u013c\u013d\u0003n7\u0000\u013d\u013f\u00050\u0000\u0000\u013e\u0140"+
		"\u0005:\u0000\u0000\u013f\u013e\u0001\u0000\u0000\u0000\u013f\u0140\u0001"+
		"\u0000\u0000\u0000\u0140\u0142\u0001\u0000\u0000\u0000\u0141\u0127\u0001"+
		"\u0000\u0000\u0000\u0141\u0133\u0001\u0000\u0000\u0000\u0142%\u0001\u0000"+
		"\u0000\u0000\u0143\u0144\u0005(\u0000\u0000\u0144\u0149\u0003b1\u0000"+
		"\u0145\u0146\u00051\u0000\u0000\u0146\u0147\u0003`0\u0000\u0147\u0148"+
		"\u00052\u0000\u0000\u0148\u014a\u0001\u0000\u0000\u0000\u0149\u0145\u0001"+
		"\u0000\u0000\u0000\u0149\u014a\u0001\u0000\u0000\u0000\u014a\u014b\u0001"+
		"\u0000\u0000\u0000\u014b\u014c\u00051\u0000\u0000\u014c\u014d\u0003p8"+
		"\u0000\u014d\u014e\u00050\u0000\u0000\u014e\u014f\u0005:\u0000\u0000\u014f"+
		"\'\u0001\u0000\u0000\u0000\u0150\u0155\u0005)\u0000\u0000\u0151\u0152"+
		"\u00051\u0000\u0000\u0152\u0153\u0003`0\u0000\u0153\u0154\u00052\u0000"+
		"\u0000\u0154\u0156\u0001\u0000\u0000\u0000\u0155\u0151\u0001\u0000\u0000"+
		"\u0000\u0155\u0156\u0001\u0000\u0000\u0000\u0156\u0157\u0001\u0000\u0000"+
		"\u0000\u0157\u0158\u0003b1\u0000\u0158\u0159\u0005:\u0000\u0000\u0159"+
		")\u0001\u0000\u0000\u0000\u015a\u015b\u0005*\u0000\u0000\u015b\u0160\u0003"+
		"b1\u0000\u015c\u015d\u00051\u0000\u0000\u015d\u015e\u0003`0\u0000\u015e"+
		"\u015f\u00052\u0000\u0000\u015f\u0161\u0001\u0000\u0000\u0000\u0160\u015c"+
		"\u0001\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000\u0000\u0161\u0162"+
		"\u0001\u0000\u0000\u0000\u0162\u0163\u00053\u0000\u0000\u0163\u0164\u0003"+
		",\u0016\u0000\u0164\u0166\u00054\u0000\u0000\u0165\u0167\u0005:\u0000"+
		"\u0000\u0166\u0165\u0001\u0000\u0000\u0000\u0166\u0167\u0001\u0000\u0000"+
		"\u0000\u0167+\u0001\u0000\u0000\u0000\u0168\u016d\u0003.\u0017\u0000\u0169"+
		"\u016a\u00056\u0000\u0000\u016a\u016c\u0003.\u0017\u0000\u016b\u0169\u0001"+
		"\u0000\u0000\u0000\u016c\u016f\u0001\u0000\u0000\u0000\u016d\u016b\u0001"+
		"\u0000\u0000\u0000\u016d\u016e\u0001\u0000\u0000\u0000\u016e-\u0001\u0000"+
		"\u0000\u0000\u016f\u016d\u0001\u0000\u0000\u0000\u0170\u0174\u00030\u0018"+
		"\u0000\u0171\u0174\u00032\u0019\u0000\u0172\u0174\u00034\u001a\u0000\u0173"+
		"\u0170\u0001\u0000\u0000\u0000\u0173\u0171\u0001\u0000\u0000\u0000\u0173"+
		"\u0172\u0001\u0000\u0000\u0000\u0174/\u0001\u0000\u0000\u0000\u0175\u0176"+
		"\u0003b1\u0000\u0176\u0177\u00053\u0000\u0000\u0177\u0178\u0003n7\u0000"+
		"\u0178\u0179\u00054\u0000\u0000\u0179\u0180\u0001\u0000\u0000\u0000\u017a"+
		"\u017b\u0003b1\u0000\u017b\u017c\u0005/\u0000\u0000\u017c\u017d\u0003"+
		"n7\u0000\u017d\u017e\u00050\u0000\u0000\u017e\u0180\u0001\u0000\u0000"+
		"\u0000\u017f\u0175\u0001\u0000\u0000\u0000\u017f\u017a\u0001\u0000\u0000"+
		"\u0000\u01801\u0001\u0000\u0000\u0000\u0181\u0182\u0003b1\u0000\u0182"+
		"\u0183\u00051\u0000\u0000\u0183\u0184\u0003p8\u0000\u0184\u0185\u0005"+
		"0\u0000\u0000\u01853\u0001\u0000\u0000\u0000\u0186\u0187\u0003b1\u0000"+
		"\u01875\u0001\u0000\u0000\u0000\u0188\u0189\u0005+\u0000\u0000\u0189\u018a"+
		"\u0003b1\u0000\u018a\u018b\u0005E\u0000\u0000\u018b\u018c\u0003\\.\u0000"+
		"\u018c\u018d\u0005:\u0000\u0000\u018d7\u0001\u0000\u0000\u0000\u018e\u018f"+
		"\u0005\"\u0000\u0000\u018f\u0190\u0003b1\u0000\u0190\u0192\u0005/\u0000"+
		"\u0000\u0191\u0193\u0003n7\u0000\u0192\u0191\u0001\u0000\u0000\u0000\u0192"+
		"\u0193\u0001\u0000\u0000\u0000\u0193\u0194\u0001\u0000\u0000\u0000\u0194"+
		"\u0197\u00050\u0000\u0000\u0195\u0196\u0005@\u0000\u0000\u0196\u0198\u0003"+
		"\\.\u0000\u0197\u0195\u0001\u0000\u0000\u0000\u0197\u0198\u0001\u0000"+
		"\u0000\u0000\u0198\u0199\u0001\u0000\u0000\u0000\u0199\u019d\u00053\u0000"+
		"\u0000\u019a\u019c\u0003\u0002\u0001\u0000\u019b\u019a\u0001\u0000\u0000"+
		"\u0000\u019c\u019f\u0001\u0000\u0000\u0000\u019d\u019b\u0001\u0000\u0000"+
		"\u0000\u019d\u019e\u0001\u0000\u0000\u0000\u019e\u01a0\u0001\u0000\u0000"+
		"\u0000\u019f\u019d\u0001\u0000\u0000\u0000\u01a0\u01a1\u00054\u0000\u0000"+
		"\u01a19\u0001\u0000\u0000\u0000\u01a2\u01a3\u0005\u000e\u0000\u0000\u01a3"+
		"\u01a6\u0003b1\u0000\u01a4\u01a5\u0005@\u0000\u0000\u01a5\u01a7\u0003"+
		"\\.\u0000\u01a6\u01a4\u0001\u0000\u0000\u0000\u01a6\u01a7\u0001\u0000"+
		"\u0000\u0000\u01a7\u01a8\u0001\u0000\u0000\u0000\u01a8\u01aa\u0005/\u0000"+
		"\u0000\u01a9\u01ab\u0003n7\u0000\u01aa\u01a9\u0001\u0000\u0000\u0000\u01aa"+
		"\u01ab\u0001\u0000\u0000\u0000\u01ab\u01ac\u0001\u0000\u0000\u0000\u01ac"+
		"\u01ad\u00050\u0000\u0000\u01ad\u01b1\u00053\u0000\u0000\u01ae\u01b0\u0003"+
		"\u0002\u0001\u0000\u01af\u01ae\u0001\u0000\u0000\u0000\u01b0\u01b3\u0001"+
		"\u0000\u0000\u0000\u01b1\u01af\u0001\u0000\u0000\u0000\u01b1\u01b2\u0001"+
		"\u0000\u0000\u0000\u01b2\u01b4\u0001\u0000\u0000\u0000\u01b3\u01b1\u0001"+
		"\u0000\u0000\u0000\u01b4\u01b5\u00054\u0000\u0000\u01b5;\u0001\u0000\u0000"+
		"\u0000\u01b6\u01b7\u0005\u000f\u0000\u0000\u01b7\u01b8\u0003b1\u0000\u01b8"+
		"\u01ba\u0005/\u0000\u0000\u01b9\u01bb\u0003n7\u0000\u01ba\u01b9\u0001"+
		"\u0000\u0000\u0000\u01ba\u01bb\u0001\u0000\u0000\u0000\u01bb\u01be\u0001"+
		"\u0000\u0000\u0000\u01bc\u01bd\u0005@\u0000\u0000\u01bd\u01bf\u0003\\"+
		".\u0000\u01be\u01bc\u0001\u0000\u0000\u0000\u01be\u01bf\u0001\u0000\u0000"+
		"\u0000\u01bf\u01c0\u0001\u0000\u0000\u0000\u01c0\u01c1\u00050\u0000\u0000"+
		"\u01c1\u01c5\u00053\u0000\u0000\u01c2\u01c4\u0003\u0002\u0001\u0000\u01c3"+
		"\u01c2\u0001\u0000\u0000\u0000\u01c4\u01c7\u0001\u0000\u0000\u0000\u01c5"+
		"\u01c3\u0001\u0000\u0000\u0000\u01c5\u01c6\u0001\u0000\u0000\u0000\u01c6"+
		"\u01c8\u0001\u0000\u0000\u0000\u01c7\u01c5\u0001\u0000\u0000\u0000\u01c8"+
		"\u01c9\u00054\u0000\u0000\u01c9=\u0001\u0000\u0000\u0000\u01ca\u01cb\u0005"+
		"\u0010\u0000\u0000\u01cb\u01cc\u0003b1\u0000\u01cc\u01ce\u0005/\u0000"+
		"\u0000\u01cd\u01cf\u0003n7\u0000\u01ce\u01cd\u0001\u0000\u0000\u0000\u01ce"+
		"\u01cf\u0001\u0000\u0000\u0000\u01cf\u01d2\u0001\u0000\u0000\u0000\u01d0"+
		"\u01d1\u0005@\u0000\u0000\u01d1\u01d3\u0003\\.\u0000\u01d2\u01d0\u0001"+
		"\u0000\u0000\u0000\u01d2\u01d3\u0001\u0000\u0000\u0000\u01d3\u01d4\u0001"+
		"\u0000\u0000\u0000\u01d4\u01d5\u00050\u0000\u0000\u01d5\u01d9\u00053\u0000"+
		"\u0000\u01d6\u01d8\u0003\u0002\u0001\u0000\u01d7\u01d6\u0001\u0000\u0000"+
		"\u0000\u01d8\u01db\u0001\u0000\u0000\u0000\u01d9\u01d7\u0001\u0000\u0000"+
		"\u0000\u01d9\u01da\u0001\u0000\u0000\u0000\u01da\u01dc\u0001\u0000\u0000"+
		"\u0000\u01db\u01d9\u0001\u0000\u0000\u0000\u01dc\u01dd\u00054\u0000\u0000"+
		"\u01dd?\u0001\u0000\u0000\u0000\u01de\u01df\u0005\u0007\u0000\u0000\u01df"+
		"\u01e0\u0003b1\u0000\u01e0\u01e2\u0005/\u0000\u0000\u01e1\u01e3\u0003"+
		"n7\u0000\u01e2\u01e1\u0001\u0000\u0000\u0000\u01e2\u01e3\u0001\u0000\u0000"+
		"\u0000\u01e3\u01e6\u0001\u0000\u0000\u0000\u01e4\u01e5\u0005@\u0000\u0000"+
		"\u01e5\u01e7\u0003\\.\u0000\u01e6\u01e4\u0001\u0000\u0000\u0000\u01e6"+
		"\u01e7\u0001\u0000\u0000\u0000\u01e7\u01e8\u0001\u0000\u0000\u0000\u01e8"+
		"\u01ec\u00053\u0000\u0000\u01e9\u01eb\u0003\u0002\u0001\u0000\u01ea\u01e9"+
		"\u0001\u0000\u0000\u0000\u01eb\u01ee\u0001\u0000\u0000\u0000\u01ec\u01ea"+
		"\u0001\u0000\u0000\u0000\u01ec\u01ed\u0001\u0000\u0000\u0000\u01ed\u01ef"+
		"\u0001\u0000\u0000\u0000\u01ee\u01ec\u0001\u0000\u0000\u0000\u01ef\u01f0"+
		"\u00054\u0000\u0000\u01f0A\u0001\u0000\u0000\u0000\u01f1\u01f2\u0005\b"+
		"\u0000\u0000\u01f2\u01f3\u0003b1\u0000\u01f3\u01f4\u0005/\u0000\u0000"+
		"\u01f4\u01f5\u0003n7\u0000\u01f5\u01f6\u00050\u0000\u0000\u01f6C\u0001"+
		"\u0000\u0000\u0000\u01f7\u01f8\u0005\u0015\u0000\u0000\u01f8\u01fc\u0005"+
		"1\u0000\u0000\u01f9\u01fb\u0003F#\u0000\u01fa\u01f9\u0001\u0000\u0000"+
		"\u0000\u01fb\u01fe\u0001\u0000\u0000\u0000\u01fc\u01fa\u0001\u0000\u0000"+
		"\u0000\u01fc\u01fd\u0001\u0000\u0000\u0000\u01fd\u01ff\u0001\u0000\u0000"+
		"\u0000\u01fe\u01fc\u0001\u0000\u0000\u0000\u01ff\u0200\u00052\u0000\u0000"+
		"\u0200E\u0001\u0000\u0000\u0000\u0201\u0204\u0003H$\u0000\u0202\u0204"+
		"\u0003J%\u0000\u0203\u0201\u0001\u0000\u0000\u0000\u0203\u0202\u0001\u0000"+
		"\u0000\u0000\u0204G\u0001\u0000\u0000\u0000\u0205\u0206\u0003b1\u0000"+
		"\u0206\u0207\u0005;\u0000\u0000\u0207\u0208\u0003\\.\u0000\u0208\u0209"+
		"\u0005:\u0000\u0000\u0209I\u0001\u0000\u0000\u0000\u020a\u020b\u0003b"+
		"1\u0000\u020b\u020c\u00051\u0000\u0000\u020c\u020d\u0003\\.\u0000\u020d"+
		"\u020e\u00052\u0000\u0000\u020e\u020f\u0005;\u0000\u0000\u020f\u0210\u0003"+
		"\\.\u0000\u0210\u0211\u0005:\u0000\u0000\u0211K\u0001\u0000\u0000\u0000"+
		"\u0212\u0213\u0006&\uffff\uffff\u0000\u0213\u0214\u0005/\u0000\u0000\u0214"+
		"\u0215\u0003L&\u0000\u0215\u0216\u00050\u0000\u0000\u0216\u0223\u0001"+
		"\u0000\u0000\u0000\u0217\u0218\u0005\u001b\u0000\u0000\u0218\u0223\u0003"+
		"L&\u0014\u0219\u0223\u0003N\'\u0000\u021a\u021b\u0005\f\u0000\u0000\u021b"+
		"\u0223\u0003L&\b\u021c\u0223\u0003P(\u0000\u021d\u0223\u0003T*\u0000\u021e"+
		"\u0223\u0003V+\u0000\u021f\u0223\u0003X,\u0000\u0220\u0223\u0003Z-\u0000"+
		"\u0221\u0223\u0003b1\u0000\u0222\u0212\u0001\u0000\u0000\u0000\u0222\u0217"+
		"\u0001\u0000\u0000\u0000\u0222\u0219\u0001\u0000\u0000\u0000\u0222\u021a"+
		"\u0001\u0000\u0000\u0000\u0222\u021c\u0001\u0000\u0000\u0000\u0222\u021d"+
		"\u0001\u0000\u0000\u0000\u0222\u021e\u0001\u0000\u0000\u0000\u0222\u021f"+
		"\u0001\u0000\u0000\u0000\u0222\u0220\u0001\u0000\u0000\u0000\u0222\u0221"+
		"\u0001\u0000\u0000\u0000\u0223\u0263\u0001\u0000\u0000\u0000\u0224\u0225"+
		"\n\u0017\u0000\u0000\u0225\u0226\u00055\u0000\u0000\u0226\u0262\u0003"+
		"b1\u0000\u0227\u0228\n\u0016\u0000\u0000\u0228\u0229\u00051\u0000\u0000"+
		"\u0229\u022a\u0003L&\u0000\u022a\u022b\u00052\u0000\u0000\u022b\u0262"+
		"\u0001\u0000\u0000\u0000\u022c\u022d\n\u0015\u0000\u0000\u022d\u022f\u0005"+
		"/\u0000\u0000\u022e\u0230\u0003t:\u0000\u022f\u022e\u0001\u0000\u0000"+
		"\u0000\u022f\u0230\u0001\u0000\u0000\u0000\u0230\u0231\u0001\u0000\u0000"+
		"\u0000\u0231\u0262\u00050\u0000\u0000\u0232\u0233\n\u0013\u0000\u0000"+
		"\u0233\u0262\u00058\u0000\u0000\u0234\u0235\n\u0012\u0000\u0000\u0235"+
		"\u0236\u0005-\u0000\u0000\u0236\u0262\u0003\\.\u0000\u0237\u023b\n\u0011"+
		"\u0000\u0000\u0238\u023c\u0005L\u0000\u0000\u0239\u023c\u0005N\u0000\u0000"+
		"\u023a\u023c\u0005P\u0000\u0000\u023b\u0238\u0001\u0000\u0000\u0000\u023b"+
		"\u0239\u0001\u0000\u0000\u0000\u023b\u023a\u0001\u0000\u0000\u0000\u023c"+
		"\u023d\u0001\u0000\u0000\u0000\u023d\u0262\u0003L&\u0000\u023e\u0241\n"+
		"\u0010\u0000\u0000\u023f\u0242\u0005H\u0000\u0000\u0240\u0242\u0005J\u0000"+
		"\u0000\u0241\u023f\u0001\u0000\u0000\u0000\u0241\u0240\u0001\u0000\u0000"+
		"\u0000\u0242\u0243\u0001\u0000\u0000\u0000\u0243\u0262\u0003L&\u0000\u0244"+
		"\u0249\n\u000f\u0000\u0000\u0245\u024a\u0005R\u0000\u0000\u0246\u024a"+
		"\u0005T\u0000\u0000\u0247\u024a\u0005S\u0000\u0000\u0248\u024a\u0005U"+
		"\u0000\u0000\u0249\u0245\u0001\u0000\u0000\u0000\u0249\u0246\u0001\u0000"+
		"\u0000\u0000\u0249\u0247\u0001\u0000\u0000\u0000\u0249\u0248\u0001\u0000"+
		"\u0000\u0000\u024a\u024b\u0001\u0000\u0000\u0000\u024b\u0262\u0003L&\u0000"+
		"\u024c\u024f\n\u000e\u0000\u0000\u024d\u0250\u0005E\u0000\u0000\u024e"+
		"\u0250\u0005G\u0000\u0000\u024f\u024d\u0001\u0000\u0000\u0000\u024f\u024e"+
		"\u0001\u0000\u0000\u0000\u0250\u0251\u0001\u0000\u0000\u0000\u0251\u0262"+
		"\u0003L&\u0000\u0252\u0253\n\r\u0000\u0000\u0253\u0254\u0005\u0013\u0000"+
		"\u0000\u0254\u0262\u0003L&\u0000\u0255\u0256\n\f\u0000\u0000\u0256\u0257"+
		"\u0005\u0017\u0000\u0000\u0257\u0262\u0003\\.\u0000\u0258\u0259\n\u000b"+
		"\u0000\u0000\u0259\u025a\u0005\u001e\u0000\u0000\u025a\u0262\u0003L&\u0000"+
		"\u025b\u025c\n\n\u0000\u0000\u025c\u025d\u0005\u001f\u0000\u0000\u025d"+
		"\u0262\u0003L&\u0000\u025e\u025f\n\u0007\u0000\u0000\u025f\u0260\u0005"+
		"7\u0000\u0000\u0260\u0262\u0003L&\u0000\u0261\u0224\u0001\u0000\u0000"+
		"\u0000\u0261\u0227\u0001\u0000\u0000\u0000\u0261\u022c\u0001\u0000\u0000"+
		"\u0000\u0261\u0232\u0001\u0000\u0000\u0000\u0261\u0234\u0001\u0000\u0000"+
		"\u0000\u0261\u0237\u0001\u0000\u0000\u0000\u0261\u023e\u0001\u0000\u0000"+
		"\u0000\u0261\u0244\u0001\u0000\u0000\u0000\u0261\u024c\u0001\u0000\u0000"+
		"\u0000\u0261\u0252\u0001\u0000\u0000\u0000\u0261\u0255\u0001\u0000\u0000"+
		"\u0000\u0261\u0258\u0001\u0000\u0000\u0000\u0261\u025b\u0001\u0000\u0000"+
		"\u0000\u0261\u025e\u0001\u0000\u0000\u0000\u0262\u0265\u0001\u0000\u0000"+
		"\u0000\u0263\u0261\u0001\u0000\u0000\u0000\u0263\u0264\u0001\u0000\u0000"+
		"\u0000\u0264M\u0001\u0000\u0000\u0000\u0265\u0263\u0001\u0000\u0000\u0000"+
		"\u0266\u0267\u0005\u0016\u0000\u0000\u0267\u0268\u0003L&\u0000\u0268\u026c"+
		"\u00053\u0000\u0000\u0269\u026b\u0003\u0002\u0001\u0000\u026a\u0269\u0001"+
		"\u0000\u0000\u0000\u026b\u026e\u0001\u0000\u0000\u0000\u026c\u026a\u0001"+
		"\u0000\u0000\u0000\u026c\u026d\u0001\u0000\u0000\u0000\u026d\u026f\u0001"+
		"\u0000\u0000\u0000\u026e\u026c\u0001\u0000\u0000\u0000\u026f\u0279\u0005"+
		"4\u0000\u0000\u0270\u0271\u0005\u001a\u0000\u0000\u0271\u0275\u00053\u0000"+
		"\u0000\u0272\u0274\u0003\u0002\u0001\u0000\u0273\u0272\u0001\u0000\u0000"+
		"\u0000\u0274\u0277\u0001\u0000\u0000\u0000\u0275\u0273\u0001\u0000\u0000"+
		"\u0000\u0275\u0276\u0001\u0000\u0000\u0000\u0276\u0278\u0001\u0000\u0000"+
		"\u0000\u0277\u0275\u0001\u0000\u0000\u0000\u0278\u027a\u00054\u0000\u0000"+
		"\u0279\u0270\u0001\u0000\u0000\u0000\u0279\u027a\u0001\u0000\u0000\u0000"+
		"\u027aO\u0001\u0000\u0000\u0000\u027b\u027c\u0005\u0018\u0000\u0000\u027c"+
		"\u0280\u00053\u0000\u0000\u027d\u027f\u0003\u0002\u0001\u0000\u027e\u027d"+
		"\u0001\u0000\u0000\u0000\u027f\u0282\u0001\u0000\u0000\u0000\u0280\u027e"+
		"\u0001\u0000\u0000\u0000\u0280\u0281\u0001\u0000\u0000\u0000\u0281\u0283"+
		"\u0001\u0000\u0000\u0000\u0282\u0280\u0001\u0000\u0000\u0000\u0283\u0287"+
		"\u00054\u0000\u0000\u0284\u0286\u0003R)\u0000\u0285\u0284\u0001\u0000"+
		"\u0000\u0000\u0286\u0289\u0001\u0000\u0000\u0000\u0287\u0285\u0001\u0000"+
		"\u0000\u0000\u0287\u0288\u0001\u0000\u0000\u0000\u0288\u0293\u0001\u0000"+
		"\u0000\u0000\u0289\u0287\u0001\u0000\u0000\u0000\u028a\u028b\u0005\u001a"+
		"\u0000\u0000\u028b\u028f\u00053\u0000\u0000\u028c\u028e\u0003\u0002\u0001"+
		"\u0000\u028d\u028c\u0001\u0000\u0000\u0000\u028e\u0291\u0001\u0000\u0000"+
		"\u0000\u028f\u028d\u0001\u0000\u0000\u0000\u028f\u0290\u0001\u0000\u0000"+
		"\u0000\u0290\u0292\u0001\u0000\u0000\u0000\u0291\u028f\u0001\u0000\u0000"+
		"\u0000\u0292\u0294\u00054\u0000\u0000\u0293\u028a\u0001\u0000\u0000\u0000"+
		"\u0293\u0294\u0001\u0000\u0000\u0000\u0294Q\u0001\u0000\u0000\u0000\u0295"+
		"\u0296\u0005\u0019\u0000\u0000\u0296\u0297\u0003\\.\u0000\u0297\u029b"+
		"\u00053\u0000\u0000\u0298\u029a\u0003\u0002\u0001\u0000\u0299\u0298\u0001"+
		"\u0000\u0000\u0000\u029a\u029d\u0001\u0000\u0000\u0000\u029b\u0299\u0001"+
		"\u0000\u0000\u0000\u029b\u029c\u0001\u0000\u0000\u0000\u029c\u029e\u0001"+
		"\u0000\u0000\u0000\u029d\u029b\u0001\u0000\u0000\u0000\u029e\u029f\u0005"+
		"4\u0000\u0000\u029fS\u0001\u0000\u0000\u0000\u02a0\u02a2\u00059\u0000"+
		"\u0000\u02a1\u02a0\u0001\u0000\u0000\u0000\u02a1\u02a2\u0001\u0000\u0000"+
		"\u0000\u02a2\u02a3\u0001\u0000\u0000\u0000\u02a3\u02a5\u0005B\u0000\u0000"+
		"\u02a4\u02a6\u0003n7\u0000\u02a5\u02a4\u0001\u0000\u0000\u0000\u02a5\u02a6"+
		"\u0001\u0000\u0000\u0000\u02a6\u02a7\u0001\u0000\u0000\u0000\u02a7\u02aa"+
		"\u0005B\u0000\u0000\u02a8\u02a9\u0005@\u0000\u0000\u02a9\u02ab\u0003\\"+
		".\u0000\u02aa\u02a8\u0001\u0000\u0000\u0000\u02aa\u02ab\u0001\u0000\u0000"+
		"\u0000\u02ab\u02ac\u0001\u0000\u0000\u0000\u02ac\u02b0\u00053\u0000\u0000"+
		"\u02ad\u02af\u0003\u0002\u0001\u0000\u02ae\u02ad\u0001\u0000\u0000\u0000"+
		"\u02af\u02b2\u0001\u0000\u0000\u0000\u02b0\u02ae\u0001\u0000\u0000\u0000"+
		"\u02b0\u02b1\u0001\u0000\u0000\u0000\u02b1\u02b3\u0001\u0000\u0000\u0000"+
		"\u02b2\u02b0\u0001\u0000\u0000\u0000\u02b3\u02b4\u00054\u0000\u0000\u02b4"+
		"U\u0001\u0000\u0000\u0000\u02b5\u02b6\u0003\\.\u0000\u02b6\u02b8\u0005"+
		"3\u0000\u0000\u02b7\u02b9\u0003r9\u0000\u02b8\u02b7\u0001\u0000\u0000"+
		"\u0000\u02b8\u02b9\u0001\u0000\u0000\u0000\u02b9\u02ba\u0001\u0000\u0000"+
		"\u0000\u02ba\u02bb\u00054\u0000\u0000\u02bbW\u0001\u0000\u0000\u0000\u02bc"+
		"\u02c0\u00051\u0000\u0000\u02bd\u02bf\u0003L&\u0000\u02be\u02bd\u0001"+
		"\u0000\u0000\u0000\u02bf\u02c2\u0001\u0000\u0000\u0000\u02c0\u02be\u0001"+
		"\u0000\u0000\u0000\u02c0\u02c1\u0001\u0000\u0000\u0000\u02c1\u02c3\u0001"+
		"\u0000\u0000\u0000\u02c2\u02c0\u0001\u0000\u0000\u0000\u02c3\u02c4\u0005"+
		"2\u0000\u0000\u02c4Y\u0001\u0000\u0000\u0000\u02c5\u02cb\u0005Y\u0000"+
		"\u0000\u02c6\u02cb\u0005Z\u0000\u0000\u02c7\u02cb\u0005[\u0000\u0000\u02c8"+
		"\u02cb\u0005\\\u0000\u0000\u02c9\u02cb\u0005\u001c\u0000\u0000\u02ca\u02c5"+
		"\u0001\u0000\u0000\u0000\u02ca\u02c6\u0001\u0000\u0000\u0000\u02ca\u02c7"+
		"\u0001\u0000\u0000\u0000\u02ca\u02c8\u0001\u0000\u0000\u0000\u02ca\u02c9"+
		"\u0001\u0000\u0000\u0000\u02cb[\u0001\u0000\u0000\u0000\u02cc\u02cd\u0006"+
		".\uffff\uffff\u0000\u02cd\u02ce\u0005/\u0000\u0000\u02ce\u02cf\u0003\\"+
		".\u0000\u02cf\u02d0\u00050\u0000\u0000\u02d0\u02de\u0001\u0000\u0000\u0000"+
		"\u02d1\u02d2\u00051\u0000\u0000\u02d2\u02d3\u0003\\.\u0000\u02d3\u02d4"+
		"\u0005:\u0000\u0000\u02d4\u02d5\u0005Z\u0000\u0000\u02d5\u02d6\u00052"+
		"\u0000\u0000\u02d6\u02de\u0001\u0000\u0000\u0000\u02d7\u02de\u0003$\u0012"+
		"\u0000\u02d8\u02de\u0003&\u0013\u0000\u02d9\u02de\u0003(\u0014\u0000\u02da"+
		"\u02de\u0003*\u0015\u0000\u02db\u02de\u0003^/\u0000\u02dc\u02de\u0003"+
		"b1\u0000\u02dd\u02cc\u0001\u0000\u0000\u0000\u02dd\u02d1\u0001\u0000\u0000"+
		"\u0000\u02dd\u02d7\u0001\u0000\u0000\u0000\u02dd\u02d8\u0001\u0000\u0000"+
		"\u0000\u02dd\u02d9\u0001\u0000\u0000\u0000\u02dd\u02da\u0001\u0000\u0000"+
		"\u0000\u02dd\u02db\u0001\u0000\u0000\u0000\u02dd\u02dc\u0001\u0000\u0000"+
		"\u0000\u02de\u02eb\u0001\u0000\u0000\u0000\u02df\u02e0\n\n\u0000\u0000"+
		"\u02e0\u02e1\u00051\u0000\u0000\u02e1\u02e2\u0003p8\u0000\u02e2\u02e3"+
		"\u00052\u0000\u0000\u02e3\u02ea\u0001\u0000\u0000\u0000\u02e4\u02e5\n"+
		"\t\u0000\u0000\u02e5\u02e6\u00055\u0000\u0000\u02e6\u02ea\u0003b1\u0000"+
		"\u02e7\u02e8\n\u0003\u0000\u0000\u02e8\u02ea\u00058\u0000\u0000\u02e9"+
		"\u02df\u0001\u0000\u0000\u0000\u02e9\u02e4\u0001\u0000\u0000\u0000\u02e9"+
		"\u02e7\u0001\u0000\u0000\u0000\u02ea\u02ed\u0001\u0000\u0000\u0000\u02eb"+
		"\u02e9\u0001\u0000\u0000\u0000\u02eb\u02ec\u0001\u0000\u0000\u0000\u02ec"+
		"]\u0001\u0000\u0000\u0000\u02ed\u02eb\u0001\u0000\u0000\u0000\u02ee\u02ef"+
		"\u0005X\u0000\u0000\u02ef_\u0001\u0000\u0000\u0000\u02f0\u02f5\u0003^"+
		"/\u0000\u02f1\u02f2\u00056\u0000\u0000\u02f2\u02f4\u0003^/\u0000\u02f3"+
		"\u02f1\u0001\u0000\u0000\u0000\u02f4\u02f7\u0001\u0000\u0000\u0000\u02f5"+
		"\u02f3\u0001\u0000\u0000\u0000\u02f5\u02f6\u0001\u0000\u0000\u0000\u02f6"+
		"a\u0001\u0000\u0000\u0000\u02f7\u02f5\u0001\u0000\u0000\u0000\u02f8\u02fb"+
		"\u0005W\u0000\u0000\u02f9\u02fb\u0003v;\u0000\u02fa\u02f8\u0001\u0000"+
		"\u0000\u0000\u02fa\u02f9\u0001\u0000\u0000\u0000\u02fbc\u0001\u0000\u0000"+
		"\u0000\u02fc\u02fe\u0003b1\u0000\u02fd\u02ff\u00058\u0000\u0000\u02fe"+
		"\u02fd\u0001\u0000\u0000\u0000\u02fe\u02ff\u0001\u0000\u0000\u0000\u02ff"+
		"\u0300\u0001\u0000\u0000\u0000\u0300\u0302\u0005;\u0000\u0000\u0301\u0303"+
		"\u0003\\.\u0000\u0302\u0301\u0001\u0000\u0000\u0000\u0302\u0303\u0001"+
		"\u0000\u0000\u0000\u0303e\u0001\u0000\u0000\u0000\u0304\u0305\u0003b1"+
		"\u0000\u0305\u0306\u0005;\u0000\u0000\u0306\u0307\u0003\\.\u0000\u0307"+
		"g\u0001\u0000\u0000\u0000\u0308\u0309\u0003b1\u0000\u0309\u030a\u0005"+
		"E\u0000\u0000\u030a\u030b\u0003L&\u0000\u030bi\u0001\u0000\u0000\u0000"+
		"\u030c\u030f\u0003L&\u0000\u030d\u030f\u0003h4\u0000\u030e\u030c\u0001"+
		"\u0000\u0000\u0000\u030e\u030d\u0001\u0000\u0000\u0000\u030fk\u0001\u0000"+
		"\u0000\u0000\u0310\u0315\u0003b1\u0000\u0311\u0312\u00056\u0000\u0000"+
		"\u0312\u0314\u0003b1\u0000\u0313\u0311\u0001\u0000\u0000\u0000\u0314\u0317"+
		"\u0001\u0000\u0000\u0000\u0315\u0313\u0001\u0000\u0000\u0000\u0315\u0316"+
		"\u0001\u0000\u0000\u0000\u0316m\u0001\u0000\u0000\u0000\u0317\u0315\u0001"+
		"\u0000\u0000\u0000\u0318\u031d\u0003d2\u0000\u0319\u031a\u00056\u0000"+
		"\u0000\u031a\u031c\u0003d2\u0000\u031b\u0319\u0001\u0000\u0000\u0000\u031c"+
		"\u031f\u0001\u0000\u0000\u0000\u031d\u031b\u0001\u0000\u0000\u0000\u031d"+
		"\u031e\u0001\u0000\u0000\u0000\u031eo\u0001\u0000\u0000\u0000\u031f\u031d"+
		"\u0001\u0000\u0000\u0000\u0320\u0325\u0003\\.\u0000\u0321\u0322\u0005"+
		"6\u0000\u0000\u0322\u0324\u0003\\.\u0000\u0323\u0321\u0001\u0000\u0000"+
		"\u0000\u0324\u0327\u0001\u0000\u0000\u0000\u0325\u0323\u0001\u0000\u0000"+
		"\u0000\u0325\u0326\u0001\u0000\u0000\u0000\u0326q\u0001\u0000\u0000\u0000"+
		"\u0327\u0325\u0001\u0000\u0000\u0000\u0328\u032d\u0003f3\u0000\u0329\u032a"+
		"\u00056\u0000\u0000\u032a\u032c\u0003f3\u0000\u032b\u0329\u0001\u0000"+
		"\u0000\u0000\u032c\u032f\u0001\u0000\u0000\u0000\u032d\u032b\u0001\u0000"+
		"\u0000\u0000\u032d\u032e\u0001\u0000\u0000\u0000\u032es\u0001\u0000\u0000"+
		"\u0000\u032f\u032d\u0001\u0000\u0000\u0000\u0330\u0335\u0003j5\u0000\u0331"+
		"\u0332\u00056\u0000\u0000\u0332\u0334\u0003j5\u0000\u0333\u0331\u0001"+
		"\u0000\u0000\u0000\u0334\u0337\u0001\u0000\u0000\u0000\u0335\u0333\u0001"+
		"\u0000\u0000\u0000\u0335\u0336\u0001\u0000\u0000\u0000\u0336u\u0001\u0000"+
		"\u0000\u0000\u0337\u0335\u0001\u0000\u0000\u0000\u0338\u0339\u0007\u0001"+
		"\u0000\u0000\u0339w\u0001\u0000\u0000\u0000N{\u008e\u0093\u00a4\u00ae"+
		"\u00b5\u00b9\u00e4\u0103\u0109\u010d\u0113\u011c\u0122\u012d\u0139\u013f"+
		"\u0141\u0149\u0155\u0160\u0166\u016d\u0173\u017f\u0192\u0197\u019d\u01a6"+
		"\u01aa\u01b1\u01ba\u01be\u01c5\u01ce\u01d2\u01d9\u01e2\u01e6\u01ec\u01fc"+
		"\u0203\u0222\u022f\u023b\u0241\u0249\u024f\u0261\u0263\u026c\u0275\u0279"+
		"\u0280\u0287\u028f\u0293\u029b\u02a1\u02a5\u02aa\u02b0\u02b8\u02c0\u02ca"+
		"\u02dd\u02e9\u02eb\u02f5\u02fa\u02fe\u0302\u030e\u0315\u031d\u0325\u032d"+
		"\u0335";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
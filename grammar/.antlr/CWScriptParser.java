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
		RULE_closureExpr_ = 41, RULE_structExpr_ = 42, RULE_tupleExpr_ = 43, RULE_literal = 44, 
		RULE_typeExpr = 45, RULE_typeVar = 46, RULE_typeVarList = 47, RULE_ident = 48, 
		RULE_param = 49, RULE_field = 50, RULE_namedArg = 51, RULE_arg = 52, RULE_identList = 53, 
		RULE_paramList = 54, RULE_typeExprList = 55, RULE_fieldList = 56, RULE_argList = 57, 
		RULE_reservedKeyword = 58;
	private static String[] makeRuleNames() {
		return new String[] {
			"sourceFile", "stmt", "importStmt", "letStmt", "binding_", "constStmt", 
			"assignStmt", "memberAssignStmt", "indexAssignStmt", "returnStmt", "failStmt", 
			"forStmt", "execStmt", "instantiateStmt", "emitStmt", "defn", "contractDefn", 
			"interfaceDefn", "structDefn", "tupleDefn", "unitDefn", "enumDefn", "enumVariantList", 
			"enumVariant", "enumVariantStructDefn", "enumVariantTupleDefn", "enumVariantUnitDefn", 
			"typeAliasDefn", "fnDefn", "instantiateDefn", "execDefn", "queryDefn", 
			"errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", "stateItemDefn", 
			"stateMapDefn", "expr", "ifExpr_", "tryCatchElseExpr_", "closureExpr_", 
			"structExpr_", "tupleExpr_", "literal", "typeExpr", "typeVar", "typeVarList", 
			"ident", "param", "field", "namedArg", "arg", "identList", "paramList", 
			"typeExprList", "fieldList", "argList", "reservedKeyword"
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
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(118);
				((SourceFileContext)_localctx).stmt = stmt();
				((SourceFileContext)_localctx).stmts.add(((SourceFileContext)_localctx).stmt);
				}
				}
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(124);
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
		public DefnContext defn() {
			return getRuleContext(DefnContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
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
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(140);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
				defn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				typeExpr(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(128);
				expr(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(129);
				importStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(130);
				letStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(131);
				constStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(132);
				assignStmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(133);
				memberAssignStmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(134);
				indexAssignStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(135);
				forStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(136);
				execStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(137);
				instantiateStmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(138);
				failStmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(139);
				returnStmt();
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
			setState(142);
			match(IMPORT);
			setState(143);
			match(LBRACE);
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(144);
				((ImportStmtContext)_localctx).items = identList();
				}
			}

			setState(147);
			match(RBRACE);
			setState(148);
			match(FROM);
			{
			setState(149);
			((ImportStmtContext)_localctx).src = match(StringLiteral);
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
	public static class LetStmtContext extends ParserRuleContext {
		public Binding_Context binding;
		public ExprContext value;
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
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
			setState(151);
			match(LET);
			{
			setState(152);
			((LetStmtContext)_localctx).binding = binding_();
			}
			{
			setState(153);
			match(EQ);
			setState(154);
			((LetStmtContext)_localctx).value = expr(0);
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
			setState(169);
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
				{
				setState(156);
				((IdentBindingContext)_localctx).name = ident();
				}
				setState(159);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(157);
					match(COLON);
					setState(158);
					((IdentBindingContext)_localctx).ty = typeExpr(0);
					}
				}

				}
				break;
			case LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
				match(LBRACK);
				{
				setState(162);
				((TupleBindingContext)_localctx).names = identList();
				}
				setState(163);
				match(RBRACK);
				}
				break;
			case LBRACE:
				_localctx = new StructBindingContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(165);
				match(LBRACE);
				{
				setState(166);
				((StructBindingContext)_localctx).names = identList();
				}
				setState(167);
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
			setState(171);
			match(CONST);
			{
			setState(172);
			((ConstStmtContext)_localctx).name = ident();
			}
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 577128773338513916L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COLON) {
					{
					{
					setState(173);
					match(COLON);
					}
					}
					setState(178);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(179);
				((ConstStmtContext)_localctx).ty = typeExpr(0);
				}
			}

			{
			setState(182);
			match(EQ);
			setState(183);
			((ConstStmtContext)_localctx).value = expr(0);
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
	public static class AssignStmtContext extends ParserRuleContext {
		public IdentContext name;
		public Token assignOp;
		public ExprContext value;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
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
			setState(185);
			((AssignStmtContext)_localctx).name = ident();
			}
			setState(186);
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
			setState(187);
			((AssignStmtContext)_localctx).value = expr(0);
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
			setState(189);
			((MemberAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(190);
			match(DOT);
			{
			setState(191);
			((MemberAssignStmtContext)_localctx).memberName = ident();
			}
			setState(192);
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
			setState(193);
			((MemberAssignStmtContext)_localctx).value = expr(0);
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
			setState(195);
			((IndexAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(196);
			match(LBRACK);
			setState(197);
			((IndexAssignStmtContext)_localctx).index = expr(0);
			setState(198);
			match(RBRACK);
			setState(199);
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
			setState(200);
			((IndexAssignStmtContext)_localctx).value = expr(0);
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
			setState(202);
			match(RETURN);
			setState(204);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(203);
				((ReturnStmtContext)_localctx).value = expr(0);
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
	public static class FailStmtContext extends ParserRuleContext {
		public ExprContext value;
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
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
			setState(206);
			match(FAIL);
			setState(208);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(207);
				((FailStmtContext)_localctx).value = expr(0);
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
			setState(210);
			match(FOR);
			{
			setState(211);
			((ForStmtContext)_localctx).binding = binding_();
			}
			setState(212);
			match(IN);
			{
			setState(213);
			((ForStmtContext)_localctx).iter = expr(0);
			}
			setState(214);
			match(LBRACE);
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(215);
				((ForStmtContext)_localctx).stmt = stmt();
				((ForStmtContext)_localctx).body.add(((ForStmtContext)_localctx).stmt);
				}
				}
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(221);
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
			setState(223);
			match(EXEC_NOW);
			setState(224);
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
	public static class InstantiateStmtContext extends ParserRuleContext {
		public TerminalNode INSTANTIATE_NOW() { return getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
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
			setState(226);
			match(INSTANTIATE_NOW);
			setState(227);
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
	public static class EmitStmtContext extends ParserRuleContext {
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
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
			setState(229);
			match(EMIT);
			setState(230);
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
			setState(246);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				contractDefn();
				}
				break;
			case INTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(233);
				interfaceDefn();
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(234);
				structDefn();
				}
				break;
			case TUPLE:
				enterOuterAlt(_localctx, 4);
				{
				setState(235);
				tupleDefn();
				}
				break;
			case UNIT:
				enterOuterAlt(_localctx, 5);
				{
				setState(236);
				unitDefn();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 6);
				{
				setState(237);
				enumDefn();
				}
				break;
			case TYPE:
				enterOuterAlt(_localctx, 7);
				{
				setState(238);
				typeAliasDefn();
				}
				break;
			case FN:
				enterOuterAlt(_localctx, 8);
				{
				setState(239);
				fnDefn();
				}
				break;
			case INSTANTIATE:
				enterOuterAlt(_localctx, 9);
				{
				setState(240);
				instantiateDefn();
				}
				break;
			case EXEC:
				enterOuterAlt(_localctx, 10);
				{
				setState(241);
				execDefn();
				}
				break;
			case QUERY:
				enterOuterAlt(_localctx, 11);
				{
				setState(242);
				queryDefn();
				}
				break;
			case ERROR:
				enterOuterAlt(_localctx, 12);
				{
				setState(243);
				errorDefn();
				}
				break;
			case EVENT:
				enterOuterAlt(_localctx, 13);
				{
				setState(244);
				eventDefn();
				}
				break;
			case STATE:
				enterOuterAlt(_localctx, 14);
				{
				setState(245);
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
			setState(248);
			match(CONTRACT);
			{
			setState(249);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(250);
				match(EXTENDS);
				{
				setState(251);
				((ContractDefnContext)_localctx).base = ident();
				}
				}
			}

			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(254);
				match(IMPLEMENTS);
				{
				setState(255);
				((ContractDefnContext)_localctx).interfaces = typeExprList();
				}
				}
			}

			setState(258);
			match(LBRACE);
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(259);
				((ContractDefnContext)_localctx).stmt = stmt();
				((ContractDefnContext)_localctx).body.add(((ContractDefnContext)_localctx).stmt);
				}
				}
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(265);
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
			setState(267);
			match(INTERFACE);
			{
			setState(268);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(269);
				match(EXTENDS);
				{
				setState(270);
				((InterfaceDefnContext)_localctx).baseInterfaces = typeExprList();
				}
				}
			}

			setState(273);
			match(LBRACE);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(274);
				((InterfaceDefnContext)_localctx).stmt = stmt();
				((InterfaceDefnContext)_localctx).body.add(((InterfaceDefnContext)_localctx).stmt);
				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(280);
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
			setState(306);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(282);
				match(STRUCT);
				{
				setState(283);
				((StructDefnContext)_localctx).name = ident();
				}
				setState(288);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(284);
					match(LBRACK);
					setState(285);
					((StructDefnContext)_localctx).typeVars = typeVarList();
					setState(286);
					match(RBRACK);
					}
				}

				setState(290);
				match(LBRACE);
				{
				setState(291);
				((StructDefnContext)_localctx).fields = paramList();
				}
				setState(292);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(294);
				match(STRUCT);
				{
				setState(295);
				((StructDefnContext)_localctx).name = ident();
				}
				setState(300);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(296);
					match(LBRACK);
					setState(297);
					((StructDefnContext)_localctx).typeVars = typeVarList();
					setState(298);
					match(RBRACK);
					}
				}

				setState(302);
				match(LPAREN);
				{
				setState(303);
				((StructDefnContext)_localctx).fields = paramList();
				}
				setState(304);
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
			setState(308);
			match(TUPLE);
			{
			setState(309);
			((TupleDefnContext)_localctx).name = ident();
			}
			setState(314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(310);
				match(LBRACK);
				setState(311);
				((TupleDefnContext)_localctx).typeVars = typeVarList();
				setState(312);
				match(RBRACK);
				}
				break;
			}
			setState(316);
			match(LBRACK);
			{
			setState(317);
			((TupleDefnContext)_localctx).elements = typeExprList();
			}
			setState(318);
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
	public static class UnitDefnContext extends ParserRuleContext {
		public TypeVarListContext typeVars;
		public IdentContext name;
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
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
			setState(320);
			match(UNIT);
			setState(325);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(321);
				match(LBRACK);
				setState(322);
				((UnitDefnContext)_localctx).typeVars = typeVarList();
				setState(323);
				match(RBRACK);
				}
			}

			{
			setState(327);
			((UnitDefnContext)_localctx).name = ident();
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
			setState(329);
			match(ENUM);
			{
			setState(330);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(335);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(331);
				match(LBRACK);
				setState(332);
				((EnumDefnContext)_localctx).typeVars = typeVarList();
				setState(333);
				match(RBRACK);
				}
			}

			setState(337);
			match(LBRACE);
			{
			setState(338);
			((EnumDefnContext)_localctx).variants = enumVariantList();
			}
			setState(339);
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
			setState(341);
			enumVariant();
			setState(346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(342);
				match(COMMA);
				setState(343);
				enumVariant();
				}
				}
				setState(348);
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
			setState(352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(349);
				enumVariantStructDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(350);
				enumVariantTupleDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(351);
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
			setState(364);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(354);
				((EnumVariantStructDefnContext)_localctx).name = ident();
				}
				setState(355);
				match(LBRACE);
				{
				setState(356);
				((EnumVariantStructDefnContext)_localctx).fields = paramList();
				}
				setState(357);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(359);
				((EnumVariantStructDefnContext)_localctx).name = ident();
				}
				setState(360);
				match(LPAREN);
				{
				setState(361);
				((EnumVariantStructDefnContext)_localctx).fields = paramList();
				}
				setState(362);
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
			setState(366);
			((EnumVariantTupleDefnContext)_localctx).name = ident();
			}
			setState(367);
			match(LBRACK);
			{
			setState(368);
			((EnumVariantTupleDefnContext)_localctx).elements = typeExprList();
			}
			setState(369);
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
			setState(371);
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
			setState(373);
			match(TYPE);
			{
			setState(374);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(375);
			match(EQ);
			{
			setState(376);
			((TypeAliasDefnContext)_localctx).ty = typeExpr(0);
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
			setState(378);
			match(FN);
			{
			setState(379);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(380);
			match(LPAREN);
			setState(382);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(381);
				((FnDefnContext)_localctx).params = paramList();
				}
			}

			setState(384);
			match(RPAREN);
			setState(387);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(385);
				match(ARROW);
				{
				setState(386);
				((FnDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(389);
			match(LBRACE);
			setState(393);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(390);
				((FnDefnContext)_localctx).stmt = stmt();
				((FnDefnContext)_localctx).body.add(((FnDefnContext)_localctx).stmt);
				}
				}
				setState(395);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(396);
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
			setState(398);
			match(INSTANTIATE);
			{
			setState(399);
			((InstantiateDefnContext)_localctx).name = ident();
			}
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(400);
				match(ARROW);
				{
				setState(401);
				((InstantiateDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(404);
			match(LPAREN);
			setState(406);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(405);
				((InstantiateDefnContext)_localctx).params = paramList();
				}
			}

			setState(408);
			match(RPAREN);
			setState(409);
			match(LBRACE);
			setState(413);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(410);
				((InstantiateDefnContext)_localctx).stmt = stmt();
				((InstantiateDefnContext)_localctx).body.add(((InstantiateDefnContext)_localctx).stmt);
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
			setState(418);
			match(EXEC);
			{
			setState(419);
			((ExecDefnContext)_localctx).name = ident();
			}
			setState(420);
			match(LPAREN);
			setState(422);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(421);
				((ExecDefnContext)_localctx).params = paramList();
				}
			}

			setState(426);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(424);
				match(ARROW);
				{
				setState(425);
				((ExecDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(428);
			match(RPAREN);
			setState(429);
			match(LBRACE);
			setState(433);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(430);
				((ExecDefnContext)_localctx).stmt = stmt();
				((ExecDefnContext)_localctx).body.add(((ExecDefnContext)_localctx).stmt);
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
			setState(438);
			match(QUERY);
			{
			setState(439);
			((QueryDefnContext)_localctx).name = ident();
			}
			setState(440);
			match(LPAREN);
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(441);
				((QueryDefnContext)_localctx).params = paramList();
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
				((QueryDefnContext)_localctx).returnTy = typeExpr(0);
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(450);
				((QueryDefnContext)_localctx).stmt = stmt();
				((QueryDefnContext)_localctx).body.add(((QueryDefnContext)_localctx).stmt);
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
			setState(458);
			match(ERROR);
			{
			setState(459);
			((ErrorDefnContext)_localctx).name = ident();
			}
			setState(460);
			match(LPAREN);
			setState(462);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(461);
				((ErrorDefnContext)_localctx).params = paramList();
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
				((ErrorDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			setState(468);
			match(LBRACE);
			setState(472);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(469);
				((ErrorDefnContext)_localctx).stmt = stmt();
				((ErrorDefnContext)_localctx).body.add(((ErrorDefnContext)_localctx).stmt);
				}
				}
				setState(474);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(475);
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
			setState(477);
			match(EVENT);
			{
			setState(478);
			((EventDefnContext)_localctx).name = ident();
			}
			setState(479);
			match(LPAREN);
			{
			setState(480);
			((EventDefnContext)_localctx).params = paramList();
			}
			setState(481);
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
		public List<StateDefnContext> vars = new ArrayList<StateDefnContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public StateDefnContext stateDefn() {
			return getRuleContext(StateDefnContext.class,0);
		}
		public StateBlockDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateBlockDefn; }
	}

	public final StateBlockDefnContext stateBlockDefn() throws RecognitionException {
		StateBlockDefnContext _localctx = new StateBlockDefnContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_stateBlockDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(483);
			match(STATE);
			setState(484);
			match(LBRACK);
			{
			setState(485);
			((StateBlockDefnContext)_localctx).stateDefn = stateDefn();
			((StateBlockDefnContext)_localctx).vars.add(((StateBlockDefnContext)_localctx).stateDefn);
			}
			setState(486);
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
			setState(490);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(488);
				stateItemDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(489);
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
			setState(492);
			((StateItemDefnContext)_localctx).name = ident();
			}
			setState(493);
			match(COLON);
			{
			setState(494);
			((StateItemDefnContext)_localctx).ty = typeExpr(0);
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
			setState(496);
			((StateMapDefnContext)_localctx).name = ident();
			}
			setState(497);
			match(LBRACK);
			{
			setState(498);
			((StateMapDefnContext)_localctx).indexTy = typeExpr(0);
			}
			setState(499);
			match(RBRACK);
			setState(500);
			match(COLON);
			{
			setState(501);
			((StateMapDefnContext)_localctx).ty = typeExpr(0);
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
			setState(519);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(504);
				match(LPAREN);
				setState(505);
				expr(0);
				setState(506);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(508);
				match(NOT);
				setState(509);
				expr(20);
				}
				break;
			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(510);
				ifExpr_();
				}
				break;
			case 4:
				{
				_localctx = new QueryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(511);
				match(QUERY_NOW);
				setState(512);
				expr(8);
				}
				break;
			case 5:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(513);
				tryCatchElseExpr_();
				}
				break;
			case 6:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(514);
				closureExpr_();
				}
				break;
			case 7:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(515);
				structExpr_();
				}
				break;
			case 8:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(516);
				tupleExpr_();
				}
				break;
			case 9:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(517);
				literal();
				}
				break;
			case 10:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(518);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(584);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(582);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(521);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(522);
						match(DOT);
						{
						setState(523);
						((DotExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 2:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(524);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(525);
						match(LBRACK);
						{
						setState(526);
						((IndexExprContext)_localctx).index = expr(0);
						}
						setState(527);
						match(RBRACK);
						}
						break;
					case 3:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(529);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(530);
						match(LPAREN);
						setState(532);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144923947018736124L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
							{
							setState(531);
							((CallExprContext)_localctx).args = argList();
							}
						}

						setState(534);
						match(RPAREN);
						}
						break;
					case 4:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(535);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(536);
						match(QUEST);
						}
						break;
					case 5:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(537);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(538);
						match(AS);
						setState(539);
						typeExpr(0);
						}
						break;
					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(540);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(544);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case MUL:
							{
							setState(541);
							((MulExprContext)_localctx).op = match(MUL);
							}
							break;
						case DIV:
							{
							setState(542);
							match(DIV);
							}
							break;
						case MOD:
							{
							setState(543);
							match(MOD);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(546);
						((MulExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(547);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(550);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case PLUS:
							{
							setState(548);
							((AddExprContext)_localctx).op = match(PLUS);
							}
							break;
						case MINUS:
							{
							setState(549);
							match(MINUS);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(552);
						((AddExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(553);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(558);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case LT:
							{
							setState(554);
							((CompExprContext)_localctx).op = match(LT);
							}
							break;
						case GT:
							{
							setState(555);
							match(GT);
							}
							break;
						case LT_EQ:
							{
							setState(556);
							match(LT_EQ);
							}
							break;
						case GT_EQ:
							{
							setState(557);
							match(GT_EQ);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(560);
						((CompExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(561);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(564);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case EQ:
							{
							setState(562);
							((EqExprContext)_localctx).op = match(EQ);
							}
							break;
						case NEQ:
							{
							setState(563);
							match(NEQ);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						{
						setState(566);
						((EqExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 10:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(567);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(568);
						match(IN);
						{
						setState(569);
						((InExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(570);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(571);
						match(IS);
						{
						setState(572);
						((IsExprContext)_localctx).rhs = typeExpr(0);
						}
						}
						break;
					case 12:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(573);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(574);
						match(AND);
						{
						setState(575);
						((AndExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 13:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(576);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(577);
						match(OR);
						{
						setState(578);
						((OrExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					case 14:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(579);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(580);
						match(D_QUEST);
						{
						setState(581);
						((ShortTryExprContext)_localctx).rhs = expr(0);
						}
						}
						break;
					}
					} 
				}
				setState(586);
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
			setState(587);
			match(IF);
			{
			setState(588);
			((IfExpr_Context)_localctx).cond = expr(0);
			}
			setState(589);
			match(LBRACE);
			setState(593);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(590);
				((IfExpr_Context)_localctx).stmt = stmt();
				((IfExpr_Context)_localctx).thenBody.add(((IfExpr_Context)_localctx).stmt);
				}
				}
				setState(595);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(596);
			match(RBRACE);
			setState(606);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				{
				setState(597);
				match(ELSE);
				setState(598);
				match(LBRACE);
				setState(602);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
					{
					{
					setState(599);
					((IfExpr_Context)_localctx).stmt = stmt();
					((IfExpr_Context)_localctx).elseBody.add(((IfExpr_Context)_localctx).stmt);
					}
					}
					setState(604);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(605);
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
		public ParamContext catchParam;
		public List<StmtContext> catchBody = new ArrayList<StmtContext>();
		public TerminalNode TRY() { return getToken(CWScriptParser.TRY, 0); }
		public List<TerminalNode> LBRACE() { return getTokens(CWScriptParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(CWScriptParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(CWScriptParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(CWScriptParser.RBRACE, i);
		}
		public TerminalNode CATCH() { return getToken(CWScriptParser.CATCH, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ParamContext param() {
			return getRuleContext(ParamContext.class,0);
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
			enterOuterAlt(_localctx, 1);
			{
			setState(608);
			match(TRY);
			setState(609);
			match(LBRACE);
			setState(613);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(610);
				((TryCatchElseExpr_Context)_localctx).stmt = stmt();
				((TryCatchElseExpr_Context)_localctx).tryBody.add(((TryCatchElseExpr_Context)_localctx).stmt);
				}
				}
				setState(615);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(616);
			match(RBRACE);
			{
			setState(617);
			match(CATCH);
			setState(619);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(618);
				((TryCatchElseExpr_Context)_localctx).catchParam = param();
				}
			}

			setState(621);
			match(LBRACE);
			setState(625);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(622);
				((TryCatchElseExpr_Context)_localctx).stmt = stmt();
				((TryCatchElseExpr_Context)_localctx).catchBody.add(((TryCatchElseExpr_Context)_localctx).stmt);
				}
				}
				setState(627);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(628);
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
		enterRule(_localctx, 82, RULE_closureExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(631);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(630);
				((ClosureExpr_Context)_localctx).fallible = match(BANG);
				}
			}

			setState(633);
			match(BAR);
			setState(635);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(634);
				((ClosureExpr_Context)_localctx).params = paramList();
				}
			}

			setState(637);
			match(BAR);
			setState(640);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(638);
				match(ARROW);
				{
				setState(639);
				((ClosureExpr_Context)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(642);
			match(LBRACE);
			setState(646);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144924428055076348L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(643);
				((ClosureExpr_Context)_localctx).stmt = stmt();
				((ClosureExpr_Context)_localctx).body.add(((ClosureExpr_Context)_localctx).stmt);
				}
				}
				setState(648);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(649);
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
		enterRule(_localctx, 84, RULE_structExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(651);
			((StructExpr_Context)_localctx).ty = typeExpr(0);
			}
			setState(652);
			match(LBRACE);
			setState(654);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0) || _la==Ident) {
				{
				setState(653);
				((StructExpr_Context)_localctx).fields = fieldList();
				}
			}

			setState(656);
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
		enterRule(_localctx, 86, RULE_tupleExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(658);
			match(LBRACK);
			setState(662);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 144923947018736124L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 132120577L) != 0)) {
				{
				{
				setState(659);
				((TupleExpr_Context)_localctx).expr = expr(0);
				((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
				}
				}
				setState(664);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(665);
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
		enterRule(_localctx, 88, RULE_literal);
		try {
			setState(672);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				_localctx = new StringLitContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(667);
				match(StringLiteral);
				}
				break;
			case IntLiteral:
				_localctx = new IntLitContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(668);
				match(IntLiteral);
				}
				break;
			case DecLiteral:
				_localctx = new DecLitContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(669);
				match(DecLiteral);
				}
				break;
			case BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(670);
				match(BoolLiteral);
				}
				break;
			case NONE:
				_localctx = new NoneLitContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(671);
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
	public static class NegationTypeExprContext extends TypeExprContext {
		public TerminalNode TILDE() { return getToken(CWScriptParser.TILDE, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public NegationTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TupleDefnTypeExprContext extends TypeExprContext {
		public TupleDefnContext tupleDefn() {
			return getRuleContext(TupleDefnContext.class,0);
		}
		public TupleDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TypeAliasDefnTypeExprContext extends TypeExprContext {
		public TypeAliasDefnContext typeAliasDefn() {
			return getRuleContext(TypeAliasDefnContext.class,0);
		}
		public TypeAliasDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumDefnTypeExprContext extends TypeExprContext {
		public EnumDefnContext enumDefn() {
			return getRuleContext(EnumDefnContext.class,0);
		}
		public EnumDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntersectionTypeExprContext extends TypeExprContext {
		public TypeExprContext lhs;
		public TypeExprContext rhs;
		public TerminalNode AMP() { return getToken(CWScriptParser.AMP, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public IntersectionTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
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
	@SuppressWarnings("CheckReturnValue")
	public static class OptionTypeExprContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public OptionTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructDefnTypeExprContext extends TypeExprContext {
		public StructDefnContext structDefn() {
			return getRuleContext(StructDefnContext.class,0);
		}
		public StructDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnionTypeExprContext extends TypeExprContext {
		public TypeExprContext lhs;
		public TypeExprContext rhs;
		public TerminalNode BAR() { return getToken(CWScriptParser.BAR, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public UnionTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnitDefnTypeExprContext extends TypeExprContext {
		public UnitDefnContext unitDefn() {
			return getRuleContext(UnitDefnContext.class,0);
		}
		public UnitDefnTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}

	public final TypeExprContext typeExpr() throws RecognitionException {
		return typeExpr(0);
	}

	private TypeExprContext typeExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeExprContext _localctx = new TypeExprContext(_ctx, _parentState);
		TypeExprContext _prevctx = _localctx;
		int _startState = 90;
		enterRecursionRule(_localctx, 90, RULE_typeExpr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(690);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(675);
				ident();
				}
				break;
			case 2:
				{
				_localctx = new TypeVarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(676);
				typeVar();
				}
				break;
			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(677);
				match(LBRACK);
				setState(678);
				((ArrayTypeExprContext)_localctx).ty = typeExpr(0);
				setState(679);
				match(SEMI);
				setState(680);
				((ArrayTypeExprContext)_localctx).size = match(IntLiteral);
				setState(681);
				match(RBRACK);
				}
				break;
			case 4:
				{
				_localctx = new NegationTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(683);
				match(TILDE);
				setState(684);
				typeExpr(8);
				}
				break;
			case 5:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(685);
				structDefn();
				}
				break;
			case 6:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(686);
				tupleDefn();
				}
				break;
			case 7:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(687);
				unitDefn();
				}
				break;
			case 8:
				{
				_localctx = new TypeAliasDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(688);
				typeAliasDefn();
				}
				break;
			case 9:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(689);
				enumDefn();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(710);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(708);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						((IntersectionTypeExprContext)_localctx).lhs = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(692);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(693);
						match(AMP);
						setState(694);
						((IntersectionTypeExprContext)_localctx).rhs = typeExpr(8);
						}
						break;
					case 2:
						{
						_localctx = new UnionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						((UnionTypeExprContext)_localctx).lhs = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(695);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(696);
						match(BAR);
						setState(697);
						((UnionTypeExprContext)_localctx).rhs = typeExpr(7);
						}
						break;
					case 3:
						{
						_localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(698);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(699);
						match(LBRACK);
						setState(700);
						((ParamzdTypeExprContext)_localctx).typeArgs = typeExprList();
						setState(701);
						match(RBRACK);
						}
						break;
					case 4:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(703);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(704);
						match(DOT);
						{
						setState(705);
						((MemberTypeExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 5:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(706);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(707);
						match(QUEST);
						}
						break;
					}
					} 
				}
				setState(712);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
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
		enterRule(_localctx, 92, RULE_typeVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(713);
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
		enterRule(_localctx, 94, RULE_typeVarList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(715);
			typeVar();
			setState(720);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(716);
				match(COMMA);
				setState(717);
				typeVar();
				}
				}
				setState(722);
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
		enterRule(_localctx, 96, RULE_ident);
		try {
			setState(725);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ident:
				enterOuterAlt(_localctx, 1);
				{
				setState(723);
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
				enterOuterAlt(_localctx, 2);
				{
				setState(724);
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
		enterRule(_localctx, 98, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(727);
			((ParamContext)_localctx).name = ident();
			}
			setState(729);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(728);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(731);
			match(COLON);
			{
			setState(733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 668021035090428L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(732);
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
		enterRule(_localctx, 100, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(735);
			((FieldContext)_localctx).name = ident();
			}
			setState(736);
			match(COLON);
			{
			setState(737);
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
		enterRule(_localctx, 102, RULE_namedArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(739);
			((NamedArgContext)_localctx).name = ident();
			}
			setState(740);
			match(EQ);
			{
			setState(741);
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
		enterRule(_localctx, 104, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(745);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				{
				setState(743);
				expr(0);
				}
				break;
			case 2:
				{
				setState(744);
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
		enterRule(_localctx, 106, RULE_identList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(747);
			ident();
			setState(752);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(748);
				match(COMMA);
				setState(749);
				ident();
				}
				}
				setState(754);
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
		enterRule(_localctx, 108, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(755);
			param();
			setState(760);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(756);
				match(COMMA);
				setState(757);
				param();
				}
				}
				setState(762);
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
		enterRule(_localctx, 110, RULE_typeExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(763);
			typeExpr(0);
			setState(768);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(764);
				match(COMMA);
				setState(765);
				typeExpr(0);
				}
				}
				setState(770);
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
		enterRule(_localctx, 112, RULE_fieldList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(771);
			field();
			setState(776);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(772);
				match(COMMA);
				setState(773);
				field();
				}
				}
				setState(778);
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
		enterRule(_localctx, 114, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(779);
			arg();
			setState(784);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(780);
				match(COMMA);
				setState(781);
				arg();
				}
				}
				setState(786);
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
		enterRule(_localctx, 116, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(787);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 31403802608124L) != 0)) ) {
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
		case 45:
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
			return precpred(_ctx, 7);
		case 15:
			return precpred(_ctx, 6);
		case 16:
			return precpred(_ctx, 12);
		case 17:
			return precpred(_ctx, 11);
		case 18:
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001a\u0316\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0001\u0000\u0005\u0000"+
		"x\b\u0000\n\u0000\f\u0000{\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001\u008d\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002\u0092\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004\u00a0\b\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004\u00aa\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005"+
		"\u00af\b\u0005\n\u0005\f\u0005\u00b2\t\u0005\u0001\u0005\u0003\u0005\u00b5"+
		"\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0003\t\u00cd\b\t\u0001\n\u0001\n\u0003\n\u00d1\b\n"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0005\u000b\u00d9\b\u000b\n\u000b\f\u000b\u00dc\t\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00f7\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u00fd\b\u0010\u0001"+
		"\u0010\u0001\u0010\u0003\u0010\u0101\b\u0010\u0001\u0010\u0001\u0010\u0005"+
		"\u0010\u0105\b\u0010\n\u0010\f\u0010\u0108\t\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0110\b\u0011"+
		"\u0001\u0011\u0001\u0011\u0005\u0011\u0114\b\u0011\n\u0011\f\u0011\u0117"+
		"\t\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0121\b\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u012d\b\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0133\b\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u013b"+
		"\b\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u0146\b\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0003\u0015\u0150\b\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u0159"+
		"\b\u0016\n\u0016\f\u0016\u015c\t\u0016\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0003\u0017\u0161\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0003\u0018\u016d\b\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0003\u001c\u017f\b\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c"+
		"\u0184\b\u001c\u0001\u001c\u0001\u001c\u0005\u001c\u0188\b\u001c\n\u001c"+
		"\f\u001c\u018b\t\u001c\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0003\u001d\u0193\b\u001d\u0001\u001d\u0001\u001d"+
		"\u0003\u001d\u0197\b\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0005\u001d"+
		"\u019c\b\u001d\n\u001d\f\u001d\u019f\t\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u01a7\b\u001e\u0001"+
		"\u001e\u0001\u001e\u0003\u001e\u01ab\b\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0005\u001e\u01b0\b\u001e\n\u001e\f\u001e\u01b3\t\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f"+
		"\u01bb\b\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u01bf\b\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0005\u001f\u01c4\b\u001f\n\u001f\f\u001f"+
		"\u01c7\t\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001 \u0001 \u0003"+
		" \u01cf\b \u0001 \u0001 \u0003 \u01d3\b \u0001 \u0001 \u0005 \u01d7\b"+
		" \n \f \u01da\t \u0001 \u0001 \u0001!\u0001!\u0001!\u0001!\u0001!\u0001"+
		"!\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0001#\u0001#\u0003#\u01eb\b"+
		"#\u0001$\u0001$\u0001$\u0001$\u0001%\u0001%\u0001%\u0001%\u0001%\u0001"+
		"%\u0001%\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u0208\b&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0003&\u0215\b&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0003&\u0221\b&\u0001&\u0001&\u0001&\u0001&\u0003&\u0227"+
		"\b&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u022f\b&\u0001&\u0001"+
		"&\u0001&\u0001&\u0003&\u0235\b&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0005&\u0247\b&\n&\f&\u024a\t&\u0001\'\u0001\'\u0001\'\u0001\'\u0005"+
		"\'\u0250\b\'\n\'\f\'\u0253\t\'\u0001\'\u0001\'\u0001\'\u0001\'\u0005\'"+
		"\u0259\b\'\n\'\f\'\u025c\t\'\u0001\'\u0003\'\u025f\b\'\u0001(\u0001(\u0001"+
		"(\u0005(\u0264\b(\n(\f(\u0267\t(\u0001(\u0001(\u0001(\u0003(\u026c\b("+
		"\u0001(\u0001(\u0005(\u0270\b(\n(\f(\u0273\t(\u0001(\u0001(\u0001)\u0003"+
		")\u0278\b)\u0001)\u0001)\u0003)\u027c\b)\u0001)\u0001)\u0001)\u0003)\u0281"+
		"\b)\u0001)\u0001)\u0005)\u0285\b)\n)\f)\u0288\t)\u0001)\u0001)\u0001*"+
		"\u0001*\u0001*\u0003*\u028f\b*\u0001*\u0001*\u0001+\u0001+\u0005+\u0295"+
		"\b+\n+\f+\u0298\t+\u0001+\u0001+\u0001,\u0001,\u0001,\u0001,\u0001,\u0003"+
		",\u02a1\b,\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001"+
		"-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0003-\u02b3\b-\u0001"+
		"-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001"+
		"-\u0001-\u0001-\u0001-\u0001-\u0001-\u0005-\u02c5\b-\n-\f-\u02c8\t-\u0001"+
		".\u0001.\u0001/\u0001/\u0001/\u0005/\u02cf\b/\n/\f/\u02d2\t/\u00010\u0001"+
		"0\u00030\u02d6\b0\u00011\u00011\u00031\u02da\b1\u00011\u00011\u00031\u02de"+
		"\b1\u00012\u00012\u00012\u00012\u00013\u00013\u00013\u00013\u00014\u0001"+
		"4\u00034\u02ea\b4\u00015\u00015\u00015\u00055\u02ef\b5\n5\f5\u02f2\t5"+
		"\u00016\u00016\u00016\u00056\u02f7\b6\n6\f6\u02fa\t6\u00017\u00017\u0001"+
		"7\u00057\u02ff\b7\n7\f7\u0302\t7\u00018\u00018\u00018\u00058\u0307\b8"+
		"\n8\f8\u030a\t8\u00019\u00019\u00019\u00059\u030f\b9\n9\f9\u0312\t9\u0001"+
		":\u0001:\u0001:\u0000\u0002LZ;\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR"+
		"TVXZ\\^`bdfhjlnprt\u0000\u0002\u0006\u0000EEIIKKMMOOQQ\u0006\u0000\u0002"+
		"\b\u000e\u0016\u001a\u001a\u001e#\'\'*,\u0363\u0000y\u0001\u0000\u0000"+
		"\u0000\u0002\u008c\u0001\u0000\u0000\u0000\u0004\u008e\u0001\u0000\u0000"+
		"\u0000\u0006\u0097\u0001\u0000\u0000\u0000\b\u00a9\u0001\u0000\u0000\u0000"+
		"\n\u00ab\u0001\u0000\u0000\u0000\f\u00b9\u0001\u0000\u0000\u0000\u000e"+
		"\u00bd\u0001\u0000\u0000\u0000\u0010\u00c3\u0001\u0000\u0000\u0000\u0012"+
		"\u00ca\u0001\u0000\u0000\u0000\u0014\u00ce\u0001\u0000\u0000\u0000\u0016"+
		"\u00d2\u0001\u0000\u0000\u0000\u0018\u00df\u0001\u0000\u0000\u0000\u001a"+
		"\u00e2\u0001\u0000\u0000\u0000\u001c\u00e5\u0001\u0000\u0000\u0000\u001e"+
		"\u00f6\u0001\u0000\u0000\u0000 \u00f8\u0001\u0000\u0000\u0000\"\u010b"+
		"\u0001\u0000\u0000\u0000$\u0132\u0001\u0000\u0000\u0000&\u0134\u0001\u0000"+
		"\u0000\u0000(\u0140\u0001\u0000\u0000\u0000*\u0149\u0001\u0000\u0000\u0000"+
		",\u0155\u0001\u0000\u0000\u0000.\u0160\u0001\u0000\u0000\u00000\u016c"+
		"\u0001\u0000\u0000\u00002\u016e\u0001\u0000\u0000\u00004\u0173\u0001\u0000"+
		"\u0000\u00006\u0175\u0001\u0000\u0000\u00008\u017a\u0001\u0000\u0000\u0000"+
		":\u018e\u0001\u0000\u0000\u0000<\u01a2\u0001\u0000\u0000\u0000>\u01b6"+
		"\u0001\u0000\u0000\u0000@\u01ca\u0001\u0000\u0000\u0000B\u01dd\u0001\u0000"+
		"\u0000\u0000D\u01e3\u0001\u0000\u0000\u0000F\u01ea\u0001\u0000\u0000\u0000"+
		"H\u01ec\u0001\u0000\u0000\u0000J\u01f0\u0001\u0000\u0000\u0000L\u0207"+
		"\u0001\u0000\u0000\u0000N\u024b\u0001\u0000\u0000\u0000P\u0260\u0001\u0000"+
		"\u0000\u0000R\u0277\u0001\u0000\u0000\u0000T\u028b\u0001\u0000\u0000\u0000"+
		"V\u0292\u0001\u0000\u0000\u0000X\u02a0\u0001\u0000\u0000\u0000Z\u02b2"+
		"\u0001\u0000\u0000\u0000\\\u02c9\u0001\u0000\u0000\u0000^\u02cb\u0001"+
		"\u0000\u0000\u0000`\u02d5\u0001\u0000\u0000\u0000b\u02d7\u0001\u0000\u0000"+
		"\u0000d\u02df\u0001\u0000\u0000\u0000f\u02e3\u0001\u0000\u0000\u0000h"+
		"\u02e9\u0001\u0000\u0000\u0000j\u02eb\u0001\u0000\u0000\u0000l\u02f3\u0001"+
		"\u0000\u0000\u0000n\u02fb\u0001\u0000\u0000\u0000p\u0303\u0001\u0000\u0000"+
		"\u0000r\u030b\u0001\u0000\u0000\u0000t\u0313\u0001\u0000\u0000\u0000v"+
		"x\u0003\u0002\u0001\u0000wv\u0001\u0000\u0000\u0000x{\u0001\u0000\u0000"+
		"\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000z|\u0001\u0000"+
		"\u0000\u0000{y\u0001\u0000\u0000\u0000|}\u0005\u0000\u0000\u0001}\u0001"+
		"\u0001\u0000\u0000\u0000~\u008d\u0003\u001e\u000f\u0000\u007f\u008d\u0003"+
		"Z-\u0000\u0080\u008d\u0003L&\u0000\u0081\u008d\u0003\u0004\u0002\u0000"+
		"\u0082\u008d\u0003\u0006\u0003\u0000\u0083\u008d\u0003\n\u0005\u0000\u0084"+
		"\u008d\u0003\f\u0006\u0000\u0085\u008d\u0003\u000e\u0007\u0000\u0086\u008d"+
		"\u0003\u0010\b\u0000\u0087\u008d\u0003\u0016\u000b\u0000\u0088\u008d\u0003"+
		"\u0018\f\u0000\u0089\u008d\u0003\u001a\r\u0000\u008a\u008d\u0003\u0014"+
		"\n\u0000\u008b\u008d\u0003\u0012\t\u0000\u008c~\u0001\u0000\u0000\u0000"+
		"\u008c\u007f\u0001\u0000\u0000\u0000\u008c\u0080\u0001\u0000\u0000\u0000"+
		"\u008c\u0081\u0001\u0000\u0000\u0000\u008c\u0082\u0001\u0000\u0000\u0000"+
		"\u008c\u0083\u0001\u0000\u0000\u0000\u008c\u0084\u0001\u0000\u0000\u0000"+
		"\u008c\u0085\u0001\u0000\u0000\u0000\u008c\u0086\u0001\u0000\u0000\u0000"+
		"\u008c\u0087\u0001\u0000\u0000\u0000\u008c\u0088\u0001\u0000\u0000\u0000"+
		"\u008c\u0089\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000"+
		"\u008c\u008b\u0001\u0000\u0000\u0000\u008d\u0003\u0001\u0000\u0000\u0000"+
		"\u008e\u008f\u0005\u0004\u0000\u0000\u008f\u0091\u00053\u0000\u0000\u0090"+
		"\u0092\u0003j5\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0091\u0092\u0001"+
		"\u0000\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093\u0094\u0005"+
		"4\u0000\u0000\u0094\u0095\u0005\u0014\u0000\u0000\u0095\u0096\u0005Y\u0000"+
		"\u0000\u0096\u0005\u0001\u0000\u0000\u0000\u0097\u0098\u0005#\u0000\u0000"+
		"\u0098\u0099\u0003\b\u0004\u0000\u0099\u009a\u0005E\u0000\u0000\u009a"+
		"\u009b\u0003L&\u0000\u009b\u0007\u0001\u0000\u0000\u0000\u009c\u009f\u0003"+
		"`0\u0000\u009d\u009e\u0005;\u0000\u0000\u009e\u00a0\u0003Z-\u0000\u009f"+
		"\u009d\u0001\u0000\u0000\u0000\u009f\u00a0\u0001\u0000\u0000\u0000\u00a0"+
		"\u00aa\u0001\u0000\u0000\u0000\u00a1\u00a2\u00051\u0000\u0000\u00a2\u00a3"+
		"\u0003j5\u0000\u00a3\u00a4\u00052\u0000\u0000\u00a4\u00aa\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u00053\u0000\u0000\u00a6\u00a7\u0003j5\u0000"+
		"\u00a7\u00a8\u00054\u0000\u0000\u00a8\u00aa\u0001\u0000\u0000\u0000\u00a9"+
		"\u009c\u0001\u0000\u0000\u0000\u00a9\u00a1\u0001\u0000\u0000\u0000\u00a9"+
		"\u00a5\u0001\u0000\u0000\u0000\u00aa\t\u0001\u0000\u0000\u0000\u00ab\u00ac"+
		"\u0005$\u0000\u0000\u00ac\u00b4\u0003`0\u0000\u00ad\u00af\u0005;\u0000"+
		"\u0000\u00ae\u00ad\u0001\u0000\u0000\u0000\u00af\u00b2\u0001\u0000\u0000"+
		"\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b0\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b1\u00b3\u0001\u0000\u0000\u0000\u00b2\u00b0\u0001\u0000\u0000"+
		"\u0000\u00b3\u00b5\u0003Z-\u0000\u00b4\u00b0\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b5\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6"+
		"\u00b7\u0005E\u0000\u0000\u00b7\u00b8\u0003L&\u0000\u00b8\u000b\u0001"+
		"\u0000\u0000\u0000\u00b9\u00ba\u0003`0\u0000\u00ba\u00bb\u0007\u0000\u0000"+
		"\u0000\u00bb\u00bc\u0003L&\u0000\u00bc\r\u0001\u0000\u0000\u0000\u00bd"+
		"\u00be\u0003L&\u0000\u00be\u00bf\u00055\u0000\u0000\u00bf\u00c0\u0003"+
		"`0\u0000\u00c0\u00c1\u0007\u0000\u0000\u0000\u00c1\u00c2\u0003L&\u0000"+
		"\u00c2\u000f\u0001\u0000\u0000\u0000\u00c3\u00c4\u0003L&\u0000\u00c4\u00c5"+
		"\u00051\u0000\u0000\u00c5\u00c6\u0003L&\u0000\u00c6\u00c7\u00052\u0000"+
		"\u0000\u00c7\u00c8\u0007\u0000\u0000\u0000\u00c8\u00c9\u0003L&\u0000\u00c9"+
		"\u0011\u0001\u0000\u0000\u0000\u00ca\u00cc\u0005&\u0000\u0000\u00cb\u00cd"+
		"\u0003L&\u0000\u00cc\u00cb\u0001\u0000\u0000\u0000\u00cc\u00cd\u0001\u0000"+
		"\u0000\u0000\u00cd\u0013\u0001\u0000\u0000\u0000\u00ce\u00d0\u0005%\u0000"+
		"\u0000\u00cf\u00d1\u0003L&\u0000\u00d0\u00cf\u0001\u0000\u0000\u0000\u00d0"+
		"\u00d1\u0001\u0000\u0000\u0000\u00d1\u0015\u0001\u0000\u0000\u0000\u00d2"+
		"\u00d3\u0005\u0012\u0000\u0000\u00d3\u00d4\u0003\b\u0004\u0000\u00d4\u00d5"+
		"\u0005\u0013\u0000\u0000\u00d5\u00d6\u0003L&\u0000\u00d6\u00da\u00053"+
		"\u0000\u0000\u00d7\u00d9\u0003\u0002\u0001\u0000\u00d8\u00d7\u0001\u0000"+
		"\u0000\u0000\u00d9\u00dc\u0001\u0000\u0000\u0000\u00da\u00d8\u0001\u0000"+
		"\u0000\u0000\u00da\u00db\u0001\u0000\u0000\u0000\u00db\u00dd\u0001\u0000"+
		"\u0000\u0000\u00dc\u00da\u0001\u0000\u0000\u0000\u00dd\u00de\u00054\u0000"+
		"\u0000\u00de\u0017\u0001\u0000\u0000\u0000\u00df\u00e0\u0005\u000b\u0000"+
		"\u0000\u00e0\u00e1\u0003L&\u0000\u00e1\u0019\u0001\u0000\u0000\u0000\u00e2"+
		"\u00e3\u0005\n\u0000\u0000\u00e3\u00e4\u0003L&\u0000\u00e4\u001b\u0001"+
		"\u0000\u0000\u0000\u00e5\u00e6\u0005,\u0000\u0000\u00e6\u00e7\u0003L&"+
		"\u0000\u00e7\u001d\u0001\u0000\u0000\u0000\u00e8\u00f7\u0003 \u0010\u0000"+
		"\u00e9\u00f7\u0003\"\u0011\u0000\u00ea\u00f7\u0003$\u0012\u0000\u00eb"+
		"\u00f7\u0003&\u0013\u0000\u00ec\u00f7\u0003(\u0014\u0000\u00ed\u00f7\u0003"+
		"*\u0015\u0000\u00ee\u00f7\u00036\u001b\u0000\u00ef\u00f7\u00038\u001c"+
		"\u0000\u00f0\u00f7\u0003:\u001d\u0000\u00f1\u00f7\u0003<\u001e\u0000\u00f2"+
		"\u00f7\u0003>\u001f\u0000\u00f3\u00f7\u0003@ \u0000\u00f4\u00f7\u0003"+
		"B!\u0000\u00f5\u00f7\u0003D\"\u0000\u00f6\u00e8\u0001\u0000\u0000\u0000"+
		"\u00f6\u00e9\u0001\u0000\u0000\u0000\u00f6\u00ea\u0001\u0000\u0000\u0000"+
		"\u00f6\u00eb\u0001\u0000\u0000\u0000\u00f6\u00ec\u0001\u0000\u0000\u0000"+
		"\u00f6\u00ed\u0001\u0000\u0000\u0000\u00f6\u00ee\u0001\u0000\u0000\u0000"+
		"\u00f6\u00ef\u0001\u0000\u0000\u0000\u00f6\u00f0\u0001\u0000\u0000\u0000"+
		"\u00f6\u00f1\u0001\u0000\u0000\u0000\u00f6\u00f2\u0001\u0000\u0000\u0000"+
		"\u00f6\u00f3\u0001\u0000\u0000\u0000\u00f6\u00f4\u0001\u0000\u0000\u0000"+
		"\u00f6\u00f5\u0001\u0000\u0000\u0000\u00f7\u001f\u0001\u0000\u0000\u0000"+
		"\u00f8\u00f9\u0005\u0002\u0000\u0000\u00f9\u00fc\u0003`0\u0000\u00fa\u00fb"+
		"\u0005\u0006\u0000\u0000\u00fb\u00fd\u0003`0\u0000\u00fc\u00fa\u0001\u0000"+
		"\u0000\u0000\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u0100\u0001\u0000"+
		"\u0000\u0000\u00fe\u00ff\u0005\u0005\u0000\u0000\u00ff\u0101\u0003n7\u0000"+
		"\u0100\u00fe\u0001\u0000\u0000\u0000\u0100\u0101\u0001\u0000\u0000\u0000"+
		"\u0101\u0102\u0001\u0000\u0000\u0000\u0102\u0106\u00053\u0000\u0000\u0103"+
		"\u0105\u0003\u0002\u0001\u0000\u0104\u0103\u0001\u0000\u0000\u0000\u0105"+
		"\u0108\u0001\u0000\u0000\u0000\u0106\u0104\u0001\u0000\u0000\u0000\u0106"+
		"\u0107\u0001\u0000\u0000\u0000\u0107\u0109\u0001\u0000\u0000\u0000\u0108"+
		"\u0106\u0001\u0000\u0000\u0000\u0109\u010a\u00054\u0000\u0000\u010a!\u0001"+
		"\u0000\u0000\u0000\u010b\u010c\u0005\u0003\u0000\u0000\u010c\u010f\u0003"+
		"`0\u0000\u010d\u010e\u0005\u0006\u0000\u0000\u010e\u0110\u0003n7\u0000"+
		"\u010f\u010d\u0001\u0000\u0000\u0000\u010f\u0110\u0001\u0000\u0000\u0000"+
		"\u0110\u0111\u0001\u0000\u0000\u0000\u0111\u0115\u00053\u0000\u0000\u0112"+
		"\u0114\u0003\u0002\u0001\u0000\u0113\u0112\u0001\u0000\u0000\u0000\u0114"+
		"\u0117\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0115"+
		"\u0116\u0001\u0000\u0000\u0000\u0116\u0118\u0001\u0000\u0000\u0000\u0117"+
		"\u0115\u0001\u0000\u0000\u0000\u0118\u0119\u00054\u0000\u0000\u0119#\u0001"+
		"\u0000\u0000\u0000\u011a\u011b\u0005\'\u0000\u0000\u011b\u0120\u0003`"+
		"0\u0000\u011c\u011d\u00051\u0000\u0000\u011d\u011e\u0003^/\u0000\u011e"+
		"\u011f\u00052\u0000\u0000\u011f\u0121\u0001\u0000\u0000\u0000\u0120\u011c"+
		"\u0001\u0000\u0000\u0000\u0120\u0121\u0001\u0000\u0000\u0000\u0121\u0122"+
		"\u0001\u0000\u0000\u0000\u0122\u0123\u00053\u0000\u0000\u0123\u0124\u0003"+
		"l6\u0000\u0124\u0125\u00054\u0000\u0000\u0125\u0133\u0001\u0000\u0000"+
		"\u0000\u0126\u0127\u0005\'\u0000\u0000\u0127\u012c\u0003`0\u0000\u0128"+
		"\u0129\u00051\u0000\u0000\u0129\u012a\u0003^/\u0000\u012a\u012b\u0005"+
		"2\u0000\u0000\u012b\u012d\u0001\u0000\u0000\u0000\u012c\u0128\u0001\u0000"+
		"\u0000\u0000\u012c\u012d\u0001\u0000\u0000\u0000\u012d\u012e\u0001\u0000"+
		"\u0000\u0000\u012e\u012f\u0005/\u0000\u0000\u012f\u0130\u0003l6\u0000"+
		"\u0130\u0131\u00050\u0000\u0000\u0131\u0133\u0001\u0000\u0000\u0000\u0132"+
		"\u011a\u0001\u0000\u0000\u0000\u0132\u0126\u0001\u0000\u0000\u0000\u0133"+
		"%\u0001\u0000\u0000\u0000\u0134\u0135\u0005(\u0000\u0000\u0135\u013a\u0003"+
		"`0\u0000\u0136\u0137\u00051\u0000\u0000\u0137\u0138\u0003^/\u0000\u0138"+
		"\u0139\u00052\u0000\u0000\u0139\u013b\u0001\u0000\u0000\u0000\u013a\u0136"+
		"\u0001\u0000\u0000\u0000\u013a\u013b\u0001\u0000\u0000\u0000\u013b\u013c"+
		"\u0001\u0000\u0000\u0000\u013c\u013d\u00051\u0000\u0000\u013d\u013e\u0003"+
		"n7\u0000\u013e\u013f\u00050\u0000\u0000\u013f\'\u0001\u0000\u0000\u0000"+
		"\u0140\u0145\u0005)\u0000\u0000\u0141\u0142\u00051\u0000\u0000\u0142\u0143"+
		"\u0003^/\u0000\u0143\u0144\u00052\u0000\u0000\u0144\u0146\u0001\u0000"+
		"\u0000\u0000\u0145\u0141\u0001\u0000\u0000\u0000\u0145\u0146\u0001\u0000"+
		"\u0000\u0000\u0146\u0147\u0001\u0000\u0000\u0000\u0147\u0148\u0003`0\u0000"+
		"\u0148)\u0001\u0000\u0000\u0000\u0149\u014a\u0005*\u0000\u0000\u014a\u014f"+
		"\u0003`0\u0000\u014b\u014c\u00051\u0000\u0000\u014c\u014d\u0003^/\u0000"+
		"\u014d\u014e\u00052\u0000\u0000\u014e\u0150\u0001\u0000\u0000\u0000\u014f"+
		"\u014b\u0001\u0000\u0000\u0000\u014f\u0150\u0001\u0000\u0000\u0000\u0150"+
		"\u0151\u0001\u0000\u0000\u0000\u0151\u0152\u00053\u0000\u0000\u0152\u0153"+
		"\u0003,\u0016\u0000\u0153\u0154\u00054\u0000\u0000\u0154+\u0001\u0000"+
		"\u0000\u0000\u0155\u015a\u0003.\u0017\u0000\u0156\u0157\u00056\u0000\u0000"+
		"\u0157\u0159\u0003.\u0017\u0000\u0158\u0156\u0001\u0000\u0000\u0000\u0159"+
		"\u015c\u0001\u0000\u0000\u0000\u015a\u0158\u0001\u0000\u0000\u0000\u015a"+
		"\u015b\u0001\u0000\u0000\u0000\u015b-\u0001\u0000\u0000\u0000\u015c\u015a"+
		"\u0001\u0000\u0000\u0000\u015d\u0161\u00030\u0018\u0000\u015e\u0161\u0003"+
		"2\u0019\u0000\u015f\u0161\u00034\u001a\u0000\u0160\u015d\u0001\u0000\u0000"+
		"\u0000\u0160\u015e\u0001\u0000\u0000\u0000\u0160\u015f\u0001\u0000\u0000"+
		"\u0000\u0161/\u0001\u0000\u0000\u0000\u0162\u0163\u0003`0\u0000\u0163"+
		"\u0164\u00053\u0000\u0000\u0164\u0165\u0003l6\u0000\u0165\u0166\u0005"+
		"4\u0000\u0000\u0166\u016d\u0001\u0000\u0000\u0000\u0167\u0168\u0003`0"+
		"\u0000\u0168\u0169\u0005/\u0000\u0000\u0169\u016a\u0003l6\u0000\u016a"+
		"\u016b\u00050\u0000\u0000\u016b\u016d\u0001\u0000\u0000\u0000\u016c\u0162"+
		"\u0001\u0000\u0000\u0000\u016c\u0167\u0001\u0000\u0000\u0000\u016d1\u0001"+
		"\u0000\u0000\u0000\u016e\u016f\u0003`0\u0000\u016f\u0170\u00051\u0000"+
		"\u0000\u0170\u0171\u0003n7\u0000\u0171\u0172\u00050\u0000\u0000\u0172"+
		"3\u0001\u0000\u0000\u0000\u0173\u0174\u0003`0\u0000\u01745\u0001\u0000"+
		"\u0000\u0000\u0175\u0176\u0005+\u0000\u0000\u0176\u0177\u0003`0\u0000"+
		"\u0177\u0178\u0005E\u0000\u0000\u0178\u0179\u0003Z-\u0000\u01797\u0001"+
		"\u0000\u0000\u0000\u017a\u017b\u0005\"\u0000\u0000\u017b\u017c\u0003`"+
		"0\u0000\u017c\u017e\u0005/\u0000\u0000\u017d\u017f\u0003l6\u0000\u017e"+
		"\u017d\u0001\u0000\u0000\u0000\u017e\u017f\u0001\u0000\u0000\u0000\u017f"+
		"\u0180\u0001\u0000\u0000\u0000\u0180\u0183\u00050\u0000\u0000\u0181\u0182"+
		"\u0005@\u0000\u0000\u0182\u0184\u0003Z-\u0000\u0183\u0181\u0001\u0000"+
		"\u0000\u0000\u0183\u0184\u0001\u0000\u0000\u0000\u0184\u0185\u0001\u0000"+
		"\u0000\u0000\u0185\u0189\u00053\u0000\u0000\u0186\u0188\u0003\u0002\u0001"+
		"\u0000\u0187\u0186\u0001\u0000\u0000\u0000\u0188\u018b\u0001\u0000\u0000"+
		"\u0000\u0189\u0187\u0001\u0000\u0000\u0000\u0189\u018a\u0001\u0000\u0000"+
		"\u0000\u018a\u018c\u0001\u0000\u0000\u0000\u018b\u0189\u0001\u0000\u0000"+
		"\u0000\u018c\u018d\u00054\u0000\u0000\u018d9\u0001\u0000\u0000\u0000\u018e"+
		"\u018f\u0005\u000e\u0000\u0000\u018f\u0192\u0003`0\u0000\u0190\u0191\u0005"+
		"@\u0000\u0000\u0191\u0193\u0003Z-\u0000\u0192\u0190\u0001\u0000\u0000"+
		"\u0000\u0192\u0193\u0001\u0000\u0000\u0000\u0193\u0194\u0001\u0000\u0000"+
		"\u0000\u0194\u0196\u0005/\u0000\u0000\u0195\u0197\u0003l6\u0000\u0196"+
		"\u0195\u0001\u0000\u0000\u0000\u0196\u0197\u0001\u0000\u0000\u0000\u0197"+
		"\u0198\u0001\u0000\u0000\u0000\u0198\u0199\u00050\u0000\u0000\u0199\u019d"+
		"\u00053\u0000\u0000\u019a\u019c\u0003\u0002\u0001\u0000\u019b\u019a\u0001"+
		"\u0000\u0000\u0000\u019c\u019f\u0001\u0000\u0000\u0000\u019d\u019b\u0001"+
		"\u0000\u0000\u0000\u019d\u019e\u0001\u0000\u0000\u0000\u019e\u01a0\u0001"+
		"\u0000\u0000\u0000\u019f\u019d\u0001\u0000\u0000\u0000\u01a0\u01a1\u0005"+
		"4\u0000\u0000\u01a1;\u0001\u0000\u0000\u0000\u01a2\u01a3\u0005\u000f\u0000"+
		"\u0000\u01a3\u01a4\u0003`0\u0000\u01a4\u01a6\u0005/\u0000\u0000\u01a5"+
		"\u01a7\u0003l6\u0000\u01a6\u01a5\u0001\u0000\u0000\u0000\u01a6\u01a7\u0001"+
		"\u0000\u0000\u0000\u01a7\u01aa\u0001\u0000\u0000\u0000\u01a8\u01a9\u0005"+
		"@\u0000\u0000\u01a9\u01ab\u0003Z-\u0000\u01aa\u01a8\u0001\u0000\u0000"+
		"\u0000\u01aa\u01ab\u0001\u0000\u0000\u0000\u01ab\u01ac\u0001\u0000\u0000"+
		"\u0000\u01ac\u01ad\u00050\u0000\u0000\u01ad\u01b1\u00053\u0000\u0000\u01ae"+
		"\u01b0\u0003\u0002\u0001\u0000\u01af\u01ae\u0001\u0000\u0000\u0000\u01b0"+
		"\u01b3\u0001\u0000\u0000\u0000\u01b1\u01af\u0001\u0000\u0000\u0000\u01b1"+
		"\u01b2\u0001\u0000\u0000\u0000\u01b2\u01b4\u0001\u0000\u0000\u0000\u01b3"+
		"\u01b1\u0001\u0000\u0000\u0000\u01b4\u01b5\u00054\u0000\u0000\u01b5=\u0001"+
		"\u0000\u0000\u0000\u01b6\u01b7\u0005\u0010\u0000\u0000\u01b7\u01b8\u0003"+
		"`0\u0000\u01b8\u01ba\u0005/\u0000\u0000\u01b9\u01bb\u0003l6\u0000\u01ba"+
		"\u01b9\u0001\u0000\u0000\u0000\u01ba\u01bb\u0001\u0000\u0000\u0000\u01bb"+
		"\u01be\u0001\u0000\u0000\u0000\u01bc\u01bd\u0005@\u0000\u0000\u01bd\u01bf"+
		"\u0003Z-\u0000\u01be\u01bc\u0001\u0000\u0000\u0000\u01be\u01bf\u0001\u0000"+
		"\u0000\u0000\u01bf\u01c0\u0001\u0000\u0000\u0000\u01c0\u01c1\u00050\u0000"+
		"\u0000\u01c1\u01c5\u00053\u0000\u0000\u01c2\u01c4\u0003\u0002\u0001\u0000"+
		"\u01c3\u01c2\u0001\u0000\u0000\u0000\u01c4\u01c7\u0001\u0000\u0000\u0000"+
		"\u01c5\u01c3\u0001\u0000\u0000\u0000\u01c5\u01c6\u0001\u0000\u0000\u0000"+
		"\u01c6\u01c8\u0001\u0000\u0000\u0000\u01c7\u01c5\u0001\u0000\u0000\u0000"+
		"\u01c8\u01c9\u00054\u0000\u0000\u01c9?\u0001\u0000\u0000\u0000\u01ca\u01cb"+
		"\u0005\u0007\u0000\u0000\u01cb\u01cc\u0003`0\u0000\u01cc\u01ce\u0005/"+
		"\u0000\u0000\u01cd\u01cf\u0003l6\u0000\u01ce\u01cd\u0001\u0000\u0000\u0000"+
		"\u01ce\u01cf\u0001\u0000\u0000\u0000\u01cf\u01d2\u0001\u0000\u0000\u0000"+
		"\u01d0\u01d1\u0005@\u0000\u0000\u01d1\u01d3\u0003Z-\u0000\u01d2\u01d0"+
		"\u0001\u0000\u0000\u0000\u01d2\u01d3\u0001\u0000\u0000\u0000\u01d3\u01d4"+
		"\u0001\u0000\u0000\u0000\u01d4\u01d8\u00053\u0000\u0000\u01d5\u01d7\u0003"+
		"\u0002\u0001\u0000\u01d6\u01d5\u0001\u0000\u0000\u0000\u01d7\u01da\u0001"+
		"\u0000\u0000\u0000\u01d8\u01d6\u0001\u0000\u0000\u0000\u01d8\u01d9\u0001"+
		"\u0000\u0000\u0000\u01d9\u01db\u0001\u0000\u0000\u0000\u01da\u01d8\u0001"+
		"\u0000\u0000\u0000\u01db\u01dc\u00054\u0000\u0000\u01dcA\u0001\u0000\u0000"+
		"\u0000\u01dd\u01de\u0005\b\u0000\u0000\u01de\u01df\u0003`0\u0000\u01df"+
		"\u01e0\u0005/\u0000\u0000\u01e0\u01e1\u0003l6\u0000\u01e1\u01e2\u0005"+
		"0\u0000\u0000\u01e2C\u0001\u0000\u0000\u0000\u01e3\u01e4\u0005\u0015\u0000"+
		"\u0000\u01e4\u01e5\u00051\u0000\u0000\u01e5\u01e6\u0003F#\u0000\u01e6"+
		"\u01e7\u00052\u0000\u0000\u01e7E\u0001\u0000\u0000\u0000\u01e8\u01eb\u0003"+
		"H$\u0000\u01e9\u01eb\u0003J%\u0000\u01ea\u01e8\u0001\u0000\u0000\u0000"+
		"\u01ea\u01e9\u0001\u0000\u0000\u0000\u01ebG\u0001\u0000\u0000\u0000\u01ec"+
		"\u01ed\u0003`0\u0000\u01ed\u01ee\u0005;\u0000\u0000\u01ee\u01ef\u0003"+
		"Z-\u0000\u01efI\u0001\u0000\u0000\u0000\u01f0\u01f1\u0003`0\u0000\u01f1"+
		"\u01f2\u00051\u0000\u0000\u01f2\u01f3\u0003Z-\u0000\u01f3\u01f4\u0005"+
		"2\u0000\u0000\u01f4\u01f5\u0005;\u0000\u0000\u01f5\u01f6\u0003Z-\u0000"+
		"\u01f6K\u0001\u0000\u0000\u0000\u01f7\u01f8\u0006&\uffff\uffff\u0000\u01f8"+
		"\u01f9\u0005/\u0000\u0000\u01f9\u01fa\u0003L&\u0000\u01fa\u01fb\u0005"+
		"0\u0000\u0000\u01fb\u0208\u0001\u0000\u0000\u0000\u01fc\u01fd\u0005\u001b"+
		"\u0000\u0000\u01fd\u0208\u0003L&\u0014\u01fe\u0208\u0003N\'\u0000\u01ff"+
		"\u0200\u0005\f\u0000\u0000\u0200\u0208\u0003L&\b\u0201\u0208\u0003P(\u0000"+
		"\u0202\u0208\u0003R)\u0000\u0203\u0208\u0003T*\u0000\u0204\u0208\u0003"+
		"V+\u0000\u0205\u0208\u0003X,\u0000\u0206\u0208\u0003`0\u0000\u0207\u01f7"+
		"\u0001\u0000\u0000\u0000\u0207\u01fc\u0001\u0000\u0000\u0000\u0207\u01fe"+
		"\u0001\u0000\u0000\u0000\u0207\u01ff\u0001\u0000\u0000\u0000\u0207\u0201"+
		"\u0001\u0000\u0000\u0000\u0207\u0202\u0001\u0000\u0000\u0000\u0207\u0203"+
		"\u0001\u0000\u0000\u0000\u0207\u0204\u0001\u0000\u0000\u0000\u0207\u0205"+
		"\u0001\u0000\u0000\u0000\u0207\u0206\u0001\u0000\u0000\u0000\u0208\u0248"+
		"\u0001\u0000\u0000\u0000\u0209\u020a\n\u0017\u0000\u0000\u020a\u020b\u0005"+
		"5\u0000\u0000\u020b\u0247\u0003`0\u0000\u020c\u020d\n\u0016\u0000\u0000"+
		"\u020d\u020e\u00051\u0000\u0000\u020e\u020f\u0003L&\u0000\u020f\u0210"+
		"\u00052\u0000\u0000\u0210\u0247\u0001\u0000\u0000\u0000\u0211\u0212\n"+
		"\u0015\u0000\u0000\u0212\u0214\u0005/\u0000\u0000\u0213\u0215\u0003r9"+
		"\u0000\u0214\u0213\u0001\u0000\u0000\u0000\u0214\u0215\u0001\u0000\u0000"+
		"\u0000\u0215\u0216\u0001\u0000\u0000\u0000\u0216\u0247\u00050\u0000\u0000"+
		"\u0217\u0218\n\u0013\u0000\u0000\u0218\u0247\u00058\u0000\u0000\u0219"+
		"\u021a\n\u0012\u0000\u0000\u021a\u021b\u0005-\u0000\u0000\u021b\u0247"+
		"\u0003Z-\u0000\u021c\u0220\n\u0011\u0000\u0000\u021d\u0221\u0005L\u0000"+
		"\u0000\u021e\u0221\u0005N\u0000\u0000\u021f\u0221\u0005P\u0000\u0000\u0220"+
		"\u021d\u0001\u0000\u0000\u0000\u0220\u021e\u0001\u0000\u0000\u0000\u0220"+
		"\u021f\u0001\u0000\u0000\u0000\u0221\u0222\u0001\u0000\u0000\u0000\u0222"+
		"\u0247\u0003L&\u0000\u0223\u0226\n\u0010\u0000\u0000\u0224\u0227\u0005"+
		"H\u0000\u0000\u0225\u0227\u0005J\u0000\u0000\u0226\u0224\u0001\u0000\u0000"+
		"\u0000\u0226\u0225\u0001\u0000\u0000\u0000\u0227\u0228\u0001\u0000\u0000"+
		"\u0000\u0228\u0247\u0003L&\u0000\u0229\u022e\n\u000f\u0000\u0000\u022a"+
		"\u022f\u0005R\u0000\u0000\u022b\u022f\u0005T\u0000\u0000\u022c\u022f\u0005"+
		"S\u0000\u0000\u022d\u022f\u0005U\u0000\u0000\u022e\u022a\u0001\u0000\u0000"+
		"\u0000\u022e\u022b\u0001\u0000\u0000\u0000\u022e\u022c\u0001\u0000\u0000"+
		"\u0000\u022e\u022d\u0001\u0000\u0000\u0000\u022f\u0230\u0001\u0000\u0000"+
		"\u0000\u0230\u0247\u0003L&\u0000\u0231\u0234\n\u000e\u0000\u0000\u0232"+
		"\u0235\u0005E\u0000\u0000\u0233\u0235\u0005G\u0000\u0000\u0234\u0232\u0001"+
		"\u0000\u0000\u0000\u0234\u0233\u0001\u0000\u0000\u0000\u0235\u0236\u0001"+
		"\u0000\u0000\u0000\u0236\u0247\u0003L&\u0000\u0237\u0238\n\r\u0000\u0000"+
		"\u0238\u0239\u0005\u0013\u0000\u0000\u0239\u0247\u0003L&\u0000\u023a\u023b"+
		"\n\f\u0000\u0000\u023b\u023c\u0005\u0017\u0000\u0000\u023c\u0247\u0003"+
		"Z-\u0000\u023d\u023e\n\u000b\u0000\u0000\u023e\u023f\u0005\u001e\u0000"+
		"\u0000\u023f\u0247\u0003L&\u0000\u0240\u0241\n\n\u0000\u0000\u0241\u0242"+
		"\u0005\u001f\u0000\u0000\u0242\u0247\u0003L&\u0000\u0243\u0244\n\u0007"+
		"\u0000\u0000\u0244\u0245\u00057\u0000\u0000\u0245\u0247\u0003L&\u0000"+
		"\u0246\u0209\u0001\u0000\u0000\u0000\u0246\u020c\u0001\u0000\u0000\u0000"+
		"\u0246\u0211\u0001\u0000\u0000\u0000\u0246\u0217\u0001\u0000\u0000\u0000"+
		"\u0246\u0219\u0001\u0000\u0000\u0000\u0246\u021c\u0001\u0000\u0000\u0000"+
		"\u0246\u0223\u0001\u0000\u0000\u0000\u0246\u0229\u0001\u0000\u0000\u0000"+
		"\u0246\u0231\u0001\u0000\u0000\u0000\u0246\u0237\u0001\u0000\u0000\u0000"+
		"\u0246\u023a\u0001\u0000\u0000\u0000\u0246\u023d\u0001\u0000\u0000\u0000"+
		"\u0246\u0240\u0001\u0000\u0000\u0000\u0246\u0243\u0001\u0000\u0000\u0000"+
		"\u0247\u024a\u0001\u0000\u0000\u0000\u0248\u0246\u0001\u0000\u0000\u0000"+
		"\u0248\u0249\u0001\u0000\u0000\u0000\u0249M\u0001\u0000\u0000\u0000\u024a"+
		"\u0248\u0001\u0000\u0000\u0000\u024b\u024c\u0005\u0016\u0000\u0000\u024c"+
		"\u024d\u0003L&\u0000\u024d\u0251\u00053\u0000\u0000\u024e\u0250\u0003"+
		"\u0002\u0001\u0000\u024f\u024e\u0001\u0000\u0000\u0000\u0250\u0253\u0001"+
		"\u0000\u0000\u0000\u0251\u024f\u0001\u0000\u0000\u0000\u0251\u0252\u0001"+
		"\u0000\u0000\u0000\u0252\u0254\u0001\u0000\u0000\u0000\u0253\u0251\u0001"+
		"\u0000\u0000\u0000\u0254\u025e\u00054\u0000\u0000\u0255\u0256\u0005\u001a"+
		"\u0000\u0000\u0256\u025a\u00053\u0000\u0000\u0257\u0259\u0003\u0002\u0001"+
		"\u0000\u0258\u0257\u0001\u0000\u0000\u0000\u0259\u025c\u0001\u0000\u0000"+
		"\u0000\u025a\u0258\u0001\u0000\u0000\u0000\u025a\u025b\u0001\u0000\u0000"+
		"\u0000\u025b\u025d\u0001\u0000\u0000\u0000\u025c\u025a\u0001\u0000\u0000"+
		"\u0000\u025d\u025f\u00054\u0000\u0000\u025e\u0255\u0001\u0000\u0000\u0000"+
		"\u025e\u025f\u0001\u0000\u0000\u0000\u025fO\u0001\u0000\u0000\u0000\u0260"+
		"\u0261\u0005\u0018\u0000\u0000\u0261\u0265\u00053\u0000\u0000\u0262\u0264"+
		"\u0003\u0002\u0001\u0000\u0263\u0262\u0001\u0000\u0000\u0000\u0264\u0267"+
		"\u0001\u0000\u0000\u0000\u0265\u0263\u0001\u0000\u0000\u0000\u0265\u0266"+
		"\u0001\u0000\u0000\u0000\u0266\u0268\u0001\u0000\u0000\u0000\u0267\u0265"+
		"\u0001\u0000\u0000\u0000\u0268\u0269\u00054\u0000\u0000\u0269\u026b\u0005"+
		"\u0019\u0000\u0000\u026a\u026c\u0003b1\u0000\u026b\u026a\u0001\u0000\u0000"+
		"\u0000\u026b\u026c\u0001\u0000\u0000\u0000\u026c\u026d\u0001\u0000\u0000"+
		"\u0000\u026d\u0271\u00053\u0000\u0000\u026e\u0270\u0003\u0002\u0001\u0000"+
		"\u026f\u026e\u0001\u0000\u0000\u0000\u0270\u0273\u0001\u0000\u0000\u0000"+
		"\u0271\u026f\u0001\u0000\u0000\u0000\u0271\u0272\u0001\u0000\u0000\u0000"+
		"\u0272\u0274\u0001\u0000\u0000\u0000\u0273\u0271\u0001\u0000\u0000\u0000"+
		"\u0274\u0275\u00054\u0000\u0000\u0275Q\u0001\u0000\u0000\u0000\u0276\u0278"+
		"\u00059\u0000\u0000\u0277\u0276\u0001\u0000\u0000\u0000\u0277\u0278\u0001"+
		"\u0000\u0000\u0000\u0278\u0279\u0001\u0000\u0000\u0000\u0279\u027b\u0005"+
		"B\u0000\u0000\u027a\u027c\u0003l6\u0000\u027b\u027a\u0001\u0000\u0000"+
		"\u0000\u027b\u027c\u0001\u0000\u0000\u0000\u027c\u027d\u0001\u0000\u0000"+
		"\u0000\u027d\u0280\u0005B\u0000\u0000\u027e\u027f\u0005@\u0000\u0000\u027f"+
		"\u0281\u0003Z-\u0000\u0280\u027e\u0001\u0000\u0000\u0000\u0280\u0281\u0001"+
		"\u0000\u0000\u0000\u0281\u0282\u0001\u0000\u0000\u0000\u0282\u0286\u0005"+
		"3\u0000\u0000\u0283\u0285\u0003\u0002\u0001\u0000\u0284\u0283\u0001\u0000"+
		"\u0000\u0000\u0285\u0288\u0001\u0000\u0000\u0000\u0286\u0284\u0001\u0000"+
		"\u0000\u0000\u0286\u0287\u0001\u0000\u0000\u0000\u0287\u0289\u0001\u0000"+
		"\u0000\u0000\u0288\u0286\u0001\u0000\u0000\u0000\u0289\u028a\u00054\u0000"+
		"\u0000\u028aS\u0001\u0000\u0000\u0000\u028b\u028c\u0003Z-\u0000\u028c"+
		"\u028e\u00053\u0000\u0000\u028d\u028f\u0003p8\u0000\u028e\u028d\u0001"+
		"\u0000\u0000\u0000\u028e\u028f\u0001\u0000\u0000\u0000\u028f\u0290\u0001"+
		"\u0000\u0000\u0000\u0290\u0291\u00054\u0000\u0000\u0291U\u0001\u0000\u0000"+
		"\u0000\u0292\u0296\u00051\u0000\u0000\u0293\u0295\u0003L&\u0000\u0294"+
		"\u0293\u0001\u0000\u0000\u0000\u0295\u0298\u0001\u0000\u0000\u0000\u0296"+
		"\u0294\u0001\u0000\u0000\u0000\u0296\u0297\u0001\u0000\u0000\u0000\u0297"+
		"\u0299\u0001\u0000\u0000\u0000\u0298\u0296\u0001\u0000\u0000\u0000\u0299"+
		"\u029a\u00052\u0000\u0000\u029aW\u0001\u0000\u0000\u0000\u029b\u02a1\u0005"+
		"Y\u0000\u0000\u029c\u02a1\u0005Z\u0000\u0000\u029d\u02a1\u0005[\u0000"+
		"\u0000\u029e\u02a1\u0005\\\u0000\u0000\u029f\u02a1\u0005\u001c\u0000\u0000"+
		"\u02a0\u029b\u0001\u0000\u0000\u0000\u02a0\u029c\u0001\u0000\u0000\u0000"+
		"\u02a0\u029d\u0001\u0000\u0000\u0000\u02a0\u029e\u0001\u0000\u0000\u0000"+
		"\u02a0\u029f\u0001\u0000\u0000\u0000\u02a1Y\u0001\u0000\u0000\u0000\u02a2"+
		"\u02a3\u0006-\uffff\uffff\u0000\u02a3\u02b3\u0003`0\u0000\u02a4\u02b3"+
		"\u0003\\.\u0000\u02a5\u02a6\u00051\u0000\u0000\u02a6\u02a7\u0003Z-\u0000"+
		"\u02a7\u02a8\u0005:\u0000\u0000\u02a8\u02a9\u0005Z\u0000\u0000\u02a9\u02aa"+
		"\u00052\u0000\u0000\u02aa\u02b3\u0001\u0000\u0000\u0000\u02ab\u02ac\u0005"+
		".\u0000\u0000\u02ac\u02b3\u0003Z-\b\u02ad\u02b3\u0003$\u0012\u0000\u02ae"+
		"\u02b3\u0003&\u0013\u0000\u02af\u02b3\u0003(\u0014\u0000\u02b0\u02b3\u0003"+
		"6\u001b\u0000\u02b1\u02b3\u0003*\u0015\u0000\u02b2\u02a2\u0001\u0000\u0000"+
		"\u0000\u02b2\u02a4\u0001\u0000\u0000\u0000\u02b2\u02a5\u0001\u0000\u0000"+
		"\u0000\u02b2\u02ab\u0001\u0000\u0000\u0000\u02b2\u02ad\u0001\u0000\u0000"+
		"\u0000\u02b2\u02ae\u0001\u0000\u0000\u0000\u02b2\u02af\u0001\u0000\u0000"+
		"\u0000\u02b2\u02b0\u0001\u0000\u0000\u0000\u02b2\u02b1\u0001\u0000\u0000"+
		"\u0000\u02b3\u02c6\u0001\u0000\u0000\u0000\u02b4\u02b5\n\u0007\u0000\u0000"+
		"\u02b5\u02b6\u0005?\u0000\u0000\u02b6\u02c5\u0003Z-\b\u02b7\u02b8\n\u0006"+
		"\u0000\u0000\u02b8\u02b9\u0005B\u0000\u0000\u02b9\u02c5\u0003Z-\u0007"+
		"\u02ba\u02bb\n\f\u0000\u0000\u02bb\u02bc\u00051\u0000\u0000\u02bc\u02bd"+
		"\u0003n7\u0000\u02bd\u02be\u00052\u0000\u0000\u02be\u02c5\u0001\u0000"+
		"\u0000\u0000\u02bf\u02c0\n\u000b\u0000\u0000\u02c0\u02c1\u00055\u0000"+
		"\u0000\u02c1\u02c5\u0003`0\u0000\u02c2\u02c3\n\n\u0000\u0000\u02c3\u02c5"+
		"\u00058\u0000\u0000\u02c4\u02b4\u0001\u0000\u0000\u0000\u02c4\u02b7\u0001"+
		"\u0000\u0000\u0000\u02c4\u02ba\u0001\u0000\u0000\u0000\u02c4\u02bf\u0001"+
		"\u0000\u0000\u0000\u02c4\u02c2\u0001\u0000\u0000\u0000\u02c5\u02c8\u0001"+
		"\u0000\u0000\u0000\u02c6\u02c4\u0001\u0000\u0000\u0000\u02c6\u02c7\u0001"+
		"\u0000\u0000\u0000\u02c7[\u0001\u0000\u0000\u0000\u02c8\u02c6\u0001\u0000"+
		"\u0000\u0000\u02c9\u02ca\u0005X\u0000\u0000\u02ca]\u0001\u0000\u0000\u0000"+
		"\u02cb\u02d0\u0003\\.\u0000\u02cc\u02cd\u00056\u0000\u0000\u02cd\u02cf"+
		"\u0003\\.\u0000\u02ce\u02cc\u0001\u0000\u0000\u0000\u02cf\u02d2\u0001"+
		"\u0000\u0000\u0000\u02d0\u02ce\u0001\u0000\u0000\u0000\u02d0\u02d1\u0001"+
		"\u0000\u0000\u0000\u02d1_\u0001\u0000\u0000\u0000\u02d2\u02d0\u0001\u0000"+
		"\u0000\u0000\u02d3\u02d6\u0005W\u0000\u0000\u02d4\u02d6\u0003t:\u0000"+
		"\u02d5\u02d3\u0001\u0000\u0000\u0000\u02d5\u02d4\u0001\u0000\u0000\u0000"+
		"\u02d6a\u0001\u0000\u0000\u0000\u02d7\u02d9\u0003`0\u0000\u02d8\u02da"+
		"\u00058\u0000\u0000\u02d9\u02d8\u0001\u0000\u0000\u0000\u02d9\u02da\u0001"+
		"\u0000\u0000\u0000\u02da\u02db\u0001\u0000\u0000\u0000\u02db\u02dd\u0005"+
		";\u0000\u0000\u02dc\u02de\u0003Z-\u0000\u02dd\u02dc\u0001\u0000\u0000"+
		"\u0000\u02dd\u02de\u0001\u0000\u0000\u0000\u02dec\u0001\u0000\u0000\u0000"+
		"\u02df\u02e0\u0003`0\u0000\u02e0\u02e1\u0005;\u0000\u0000\u02e1\u02e2"+
		"\u0003Z-\u0000\u02e2e\u0001\u0000\u0000\u0000\u02e3\u02e4\u0003`0\u0000"+
		"\u02e4\u02e5\u0005E\u0000\u0000\u02e5\u02e6\u0003L&\u0000\u02e6g\u0001"+
		"\u0000\u0000\u0000\u02e7\u02ea\u0003L&\u0000\u02e8\u02ea\u0003f3\u0000"+
		"\u02e9\u02e7\u0001\u0000\u0000\u0000\u02e9\u02e8\u0001\u0000\u0000\u0000"+
		"\u02eai\u0001\u0000\u0000\u0000\u02eb\u02f0\u0003`0\u0000\u02ec\u02ed"+
		"\u00056\u0000\u0000\u02ed\u02ef\u0003`0\u0000\u02ee\u02ec\u0001\u0000"+
		"\u0000\u0000\u02ef\u02f2\u0001\u0000\u0000\u0000\u02f0\u02ee\u0001\u0000"+
		"\u0000\u0000\u02f0\u02f1\u0001\u0000\u0000\u0000\u02f1k\u0001\u0000\u0000"+
		"\u0000\u02f2\u02f0\u0001\u0000\u0000\u0000\u02f3\u02f8\u0003b1\u0000\u02f4"+
		"\u02f5\u00056\u0000\u0000\u02f5\u02f7\u0003b1\u0000\u02f6\u02f4\u0001"+
		"\u0000\u0000\u0000\u02f7\u02fa\u0001\u0000\u0000\u0000\u02f8\u02f6\u0001"+
		"\u0000\u0000\u0000\u02f8\u02f9\u0001\u0000\u0000\u0000\u02f9m\u0001\u0000"+
		"\u0000\u0000\u02fa\u02f8\u0001\u0000\u0000\u0000\u02fb\u0300\u0003Z-\u0000"+
		"\u02fc\u02fd\u00056\u0000\u0000\u02fd\u02ff\u0003Z-\u0000\u02fe\u02fc"+
		"\u0001\u0000\u0000\u0000\u02ff\u0302\u0001\u0000\u0000\u0000\u0300\u02fe"+
		"\u0001\u0000\u0000\u0000\u0300\u0301\u0001\u0000\u0000\u0000\u0301o\u0001"+
		"\u0000\u0000\u0000\u0302\u0300\u0001\u0000\u0000\u0000\u0303\u0308\u0003"+
		"d2\u0000\u0304\u0305\u00056\u0000\u0000\u0305\u0307\u0003d2\u0000\u0306"+
		"\u0304\u0001\u0000\u0000\u0000\u0307\u030a\u0001\u0000\u0000\u0000\u0308"+
		"\u0306\u0001\u0000\u0000\u0000\u0308\u0309\u0001\u0000\u0000\u0000\u0309"+
		"q\u0001\u0000\u0000\u0000\u030a\u0308\u0001\u0000\u0000\u0000\u030b\u0310"+
		"\u0003h4\u0000\u030c\u030d\u00056\u0000\u0000\u030d\u030f\u0003h4\u0000"+
		"\u030e\u030c\u0001\u0000\u0000\u0000\u030f\u0312\u0001\u0000\u0000\u0000"+
		"\u0310\u030e\u0001\u0000\u0000\u0000\u0310\u0311\u0001\u0000\u0000\u0000"+
		"\u0311s\u0001\u0000\u0000\u0000\u0312\u0310\u0001\u0000\u0000\u0000\u0313"+
		"\u0314\u0007\u0001\u0000\u0000\u0314u\u0001\u0000\u0000\u0000Ky\u008c"+
		"\u0091\u009f\u00a9\u00b0\u00b4\u00cc\u00d0\u00da\u00f6\u00fc\u0100\u0106"+
		"\u010f\u0115\u0120\u012c\u0132\u013a\u0145\u014f\u015a\u0160\u016c\u017e"+
		"\u0183\u0189\u0192\u0196\u019d\u01a6\u01aa\u01b1\u01ba\u01be\u01c5\u01ce"+
		"\u01d2\u01d8\u01ea\u0207\u0214\u0220\u0226\u022e\u0234\u0246\u0248\u0251"+
		"\u025a\u025e\u0265\u026b\u0271\u0277\u027b\u0280\u0286\u028e\u0296\u02a0"+
		"\u02b2\u02c4\u02c6\u02d0\u02d5\u02d9\u02dd\u02e9\u02f0\u02f8\u0300\u0308"+
		"\u0310";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
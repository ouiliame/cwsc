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
		H_INSTANTIATE=14, INSTANTIATE=15, EXEC=16, QUERY=17, REPLY=18, FOR=19, 
		IN=20, FROM=21, STATE=22, IF=23, IS=24, TRY=25, CATCH=26, ELSE=27, NOT=28, 
		NONE=29, MUT=30, AND=31, OR=32, TRUE=33, FALSE=34, FN=35, LET=36, CONST=37, 
		FAIL=38, RETURN=39, STRUCT=40, TUPLE=41, UNIT=42, ENUM=43, TYPE=44, EMIT=45, 
		AS=46, TILDE=47, LPAREN=48, RPAREN=49, LBRACK=50, RBRACK=51, LBRACE=52, 
		RBRACE=53, DOT=54, COMMA=55, D_QUEST=56, QUEST=57, BANG=58, SEMI=59, COLON=60, 
		D_COLON=61, HASH=62, AT=63, AMP=64, ARROW=65, FAT_ARROW=66, BAR=67, S_QUOTE=68, 
		D_QUOTE=69, EQ=70, EQ_EQ=71, NEQ=72, PLUS=73, PLUS_EQ=74, MINUS=75, MINUS_EQ=76, 
		MUL=77, MUL_EQ=78, DIV=79, DIV_EQ=80, MOD=81, MOD_EQ=82, LT=83, LT_EQ=84, 
		GT=85, GT_EQ=86, POW=87, Ident=88, TypeVar=89, StringLiteral=90, IntLiteral=91, 
		DecLiteral=92, BoolLiteral=93, CWSPEC_LINE_COMMENT=94, CWSPEC_BLOCK_COMMENT=95, 
		LINE_COMMENT=96, BLOCK_COMMENT=97, WS=98;
	public static final int
		RULE_sourceFile = 0, RULE_stmt = 1, RULE_importStmt = 2, RULE_letStmt = 3, 
		RULE_binding_ = 4, RULE_constStmt = 5, RULE_assignStmt = 6, RULE_memberAssignStmt = 7, 
		RULE_indexAssignStmt = 8, RULE_returnStmt = 9, RULE_failStmt = 10, RULE_forStmt = 11, 
		RULE_execStmt = 12, RULE_instantiateStmt = 13, RULE_emitStmt = 14, RULE_defn = 15, 
		RULE_contractDefn = 16, RULE_interfaceDefn = 17, RULE_structDefn = 18, 
		RULE_tupleDefn = 19, RULE_unitDefn = 20, RULE_enumDefn = 21, RULE_enumVariantDefnList = 22, 
		RULE_enumVariantDefn = 23, RULE_enumVariantStructDefn = 24, RULE_enumVariantTupleDefn = 25, 
		RULE_enumVariantUnitDefn = 26, RULE_typeAliasDefn = 27, RULE_fnDefn = 28, 
		RULE_instantiateDefn = 29, RULE_execDefn = 30, RULE_queryDefn = 31, RULE_errorDefn = 32, 
		RULE_eventDefn = 33, RULE_stateBlockDefn = 34, RULE_stateDefn = 35, RULE_stateItemDefn = 36, 
		RULE_stateMapDefn = 37, RULE_expr = 38, RULE_ifExpr_ = 39, RULE_tryCatchElseExpr_ = 40, 
		RULE_catchClause = 41, RULE_closureExpr_ = 42, RULE_structExpr_ = 43, 
		RULE_tupleExpr_ = 44, RULE_literal = 45, RULE_typeExpr = 46, RULE_typeVar = 47, 
		RULE_typeVarList = 48, RULE_ident = 49, RULE_param = 50, RULE_field = 51, 
		RULE_namedArg = 52, RULE_arg = 53, RULE_identList = 54, RULE_paramList = 55, 
		RULE_typeExprList = 56, RULE_fieldList = 57, RULE_argList = 58, RULE_block = 59, 
		RULE_reservedKeyword = 60;
	private static String[] makeRuleNames() {
		return new String[] {
			"sourceFile", "stmt", "importStmt", "letStmt", "binding_", "constStmt", 
			"assignStmt", "memberAssignStmt", "indexAssignStmt", "returnStmt", "failStmt", 
			"forStmt", "execStmt", "instantiateStmt", "emitStmt", "defn", "contractDefn", 
			"interfaceDefn", "structDefn", "tupleDefn", "unitDefn", "enumDefn", "enumVariantDefnList", 
			"enumVariantDefn", "enumVariantStructDefn", "enumVariantTupleDefn", "enumVariantUnitDefn", 
			"typeAliasDefn", "fnDefn", "instantiateDefn", "execDefn", "queryDefn", 
			"errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", "stateItemDefn", 
			"stateMapDefn", "expr", "ifExpr_", "tryCatchElseExpr_", "catchClause", 
			"closureExpr_", "structExpr_", "tupleExpr_", "literal", "typeExpr", "typeVar", 
			"typeVarList", "ident", "param", "field", "namedArg", "arg", "identList", 
			"paramList", "typeExprList", "fieldList", "argList", "block", "reservedKeyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
			"'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", "'exec!'", 
			"'query!'", "'delegate_exec!'", "'#instantiate'", "'instantiate'", "'exec'", 
			"'query'", "'reply'", "'for'", "'in'", "'from'", "'state'", "'if'", "'is'", 
			"'try'", "'catch'", "'else'", "'not'", "'None'", "'mut'", "'and'", "'or'", 
			"'true'", "'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", 
			"'struct'", "'tuple'", "'unit'", "'enum'", "'type'", "'emit'", "'as'", 
			"'~'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'??'", 
			"'?'", "'!'", "';'", "':'", "'::'", "'#'", "'@'", "'&'", "'->'", "'=>'", 
			"'|'", "'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", 
			"'*'", "'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", 
			"'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
			"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
			"DELEGATE_EXEC", "H_INSTANTIATE", "INSTANTIATE", "EXEC", "QUERY", "REPLY", 
			"FOR", "IN", "FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", 
			"NONE", "MUT", "AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", 
			"RETURN", "STRUCT", "TUPLE", "UNIT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", 
			"LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", 
			"D_QUEST", "QUEST", "BANG", "SEMI", "COLON", "D_COLON", "HASH", "AT", 
			"AMP", "ARROW", "FAT_ARROW", "BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", 
			"NEQ", "PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", 
			"DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", 
			"TypeVar", "StringLiteral", "IntLiteral", "DecLiteral", "BoolLiteral", 
			"CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", 
			"WS"
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
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289708118353370620L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 132120577L) != 0)) {
				{
				{
				setState(122);
				((SourceFileContext)_localctx).stmt = stmt();
				((SourceFileContext)_localctx).stmts.add(((SourceFileContext)_localctx).stmt);
				}
				}
				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(128);
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
		public IfExpr_Context ifExpr_() {
			return getRuleContext(IfExpr_Context.class,0);
		}
		public TryCatchElseExpr_Context tryCatchElseExpr_() {
			return getRuleContext(TryCatchElseExpr_Context.class,0);
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
		public DefnContext defn() {
			return getRuleContext(DefnContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
		int _la;
		try {
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				importStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(131);
				letStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(132);
				constStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(133);
				assignStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(134);
				memberAssignStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(135);
				indexAssignStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(136);
				ifExpr_();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(137);
				tryCatchElseExpr_();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(138);
				forStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(139);
				execStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(140);
				instantiateStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(141);
				emitStmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(142);
				failStmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(143);
				returnStmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(144);
				defn();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(145);
				expr(0);
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(146);
					match(SEMI);
					}
				}

				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(149);
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
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
			setState(152);
			match(IMPORT);
			setState(153);
			match(LBRACE);
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(154);
				((ImportStmtContext)_localctx).items = identList();
				}
			}

			setState(157);
			match(RBRACE);
			setState(158);
			match(FROM);
			{
			setState(159);
			((ImportStmtContext)_localctx).src = match(StringLiteral);
			}
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(160);
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public LetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt; }
	}

	public final LetStmtContext letStmt() throws RecognitionException {
		LetStmtContext _localctx = new LetStmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_letStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(LET);
			{
			setState(164);
			((LetStmtContext)_localctx).binding = binding_();
			}
			{
			setState(165);
			match(EQ);
			setState(166);
			((LetStmtContext)_localctx).value = expr(0);
			}
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(168);
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
			setState(186);
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
				setState(171);
				((IdentBindingContext)_localctx).name = ident();
				}
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(172);
					match(COLON);
					setState(173);
					((IdentBindingContext)_localctx).ty = typeExpr(0);
					}
				}

				}
				break;
			case LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(176);
				match(LBRACK);
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
					{
					setState(177);
					((TupleBindingContext)_localctx).names = identList();
					}
				}

				setState(180);
				match(RBRACK);
				}
				break;
			case LBRACE:
				_localctx = new StructBindingContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(181);
				match(LBRACE);
				setState(183);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
					{
					setState(182);
					((StructBindingContext)_localctx).names = identList();
					}
				}

				setState(185);
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
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
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
			setState(188);
			match(CONST);
			{
			setState(189);
			((ConstStmtContext)_localctx).name = ident();
			}
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(190);
				match(COLON);
				setState(191);
				((ConstStmtContext)_localctx).ty = typeExpr(0);
				}
			}

			{
			setState(194);
			match(EQ);
			setState(195);
			((ConstStmtContext)_localctx).value = expr(0);
			}
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(197);
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
		enterRule(_localctx, 12, RULE_assignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(200);
			((AssignStmtContext)_localctx).name = ident();
			}
			setState(201);
			((AssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & 5457L) != 0)) ) {
				((AssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			{
			setState(202);
			((AssignStmtContext)_localctx).value = expr(0);
			}
			setState(204);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(203);
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
		enterRule(_localctx, 14, RULE_memberAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(206);
			((MemberAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(207);
			match(DOT);
			{
			setState(208);
			((MemberAssignStmtContext)_localctx).memberName = ident();
			}
			setState(209);
			((MemberAssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & 5457L) != 0)) ) {
				((MemberAssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			{
			setState(210);
			((MemberAssignStmtContext)_localctx).value = expr(0);
			}
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(211);
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
		enterRule(_localctx, 16, RULE_indexAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(214);
			((IndexAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(215);
			match(LBRACK);
			setState(216);
			((IndexAssignStmtContext)_localctx).index = expr(0);
			setState(217);
			match(RBRACK);
			setState(218);
			((IndexAssignStmtContext)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & 5457L) != 0)) ) {
				((IndexAssignStmtContext)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(219);
			((IndexAssignStmtContext)_localctx).value = expr(0);
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(220);
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
		public ExprContext value;
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ReturnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStmt; }
	}

	public final ReturnStmtContext returnStmt() throws RecognitionException {
		ReturnStmtContext _localctx = new ReturnStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_returnStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(RETURN);
			{
			setState(224);
			((ReturnStmtContext)_localctx).value = expr(0);
			}
			setState(226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(225);
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
		public ExprContext value;
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public FailStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failStmt; }
	}

	public final FailStmtContext failStmt() throws RecognitionException {
		FailStmtContext _localctx = new FailStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_failStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			match(FAIL);
			{
			setState(229);
			((FailStmtContext)_localctx).value = expr(0);
			}
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(230);
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
		public Binding_Context binding;
		public ExprContext iter;
		public BlockContext body;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Binding_Context binding_() {
			return getRuleContext(Binding_Context.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_forStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(FOR);
			{
			setState(234);
			((ForStmtContext)_localctx).binding = binding_();
			}
			setState(235);
			match(IN);
			{
			setState(236);
			((ForStmtContext)_localctx).iter = expr(0);
			}
			setState(237);
			((ForStmtContext)_localctx).body = block();
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
		enterRule(_localctx, 24, RULE_execStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			match(EXEC_NOW);
			setState(240);
			((ExecStmtContext)_localctx).value = expr(0);
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(241);
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
		enterRule(_localctx, 26, RULE_instantiateStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(INSTANTIATE_NOW);
			setState(245);
			((InstantiateStmtContext)_localctx).value = expr(0);
			setState(247);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(246);
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
		enterRule(_localctx, 28, RULE_emitStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(EMIT);
			setState(250);
			((EmitStmtContext)_localctx).value = expr(0);
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(251);
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
			setState(268);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
				enterOuterAlt(_localctx, 1);
				{
				setState(254);
				contractDefn();
				}
				break;
			case INTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(255);
				interfaceDefn();
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(256);
				structDefn();
				}
				break;
			case TUPLE:
				enterOuterAlt(_localctx, 4);
				{
				setState(257);
				tupleDefn();
				}
				break;
			case UNIT:
				enterOuterAlt(_localctx, 5);
				{
				setState(258);
				unitDefn();
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 6);
				{
				setState(259);
				enumDefn();
				}
				break;
			case TYPE:
				enterOuterAlt(_localctx, 7);
				{
				setState(260);
				typeAliasDefn();
				}
				break;
			case FN:
				enterOuterAlt(_localctx, 8);
				{
				setState(261);
				fnDefn();
				}
				break;
			case H_INSTANTIATE:
				enterOuterAlt(_localctx, 9);
				{
				setState(262);
				instantiateDefn();
				}
				break;
			case EXEC:
				enterOuterAlt(_localctx, 10);
				{
				setState(263);
				execDefn();
				}
				break;
			case QUERY:
				enterOuterAlt(_localctx, 11);
				{
				setState(264);
				queryDefn();
				}
				break;
			case ERROR:
				enterOuterAlt(_localctx, 12);
				{
				setState(265);
				errorDefn();
				}
				break;
			case EVENT:
				enterOuterAlt(_localctx, 13);
				{
				setState(266);
				eventDefn();
				}
				break;
			case STATE:
				enterOuterAlt(_localctx, 14);
				{
				setState(267);
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
		enterRule(_localctx, 32, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			match(CONTRACT);
			{
			setState(271);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(274);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(272);
				match(EXTENDS);
				{
				setState(273);
				((ContractDefnContext)_localctx).base = typeExpr(0);
				}
				}
			}

			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(276);
				match(IMPLEMENTS);
				{
				setState(277);
				((ContractDefnContext)_localctx).interfaces = typeExprList();
				}
				}
			}

			{
			setState(280);
			((ContractDefnContext)_localctx).body = block();
			}
			setState(282);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(281);
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
			setState(284);
			match(INTERFACE);
			{
			setState(285);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(288);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(286);
				match(EXTENDS);
				{
				setState(287);
				((InterfaceDefnContext)_localctx).baseInterfaces = typeExprList();
				}
				}
			}

			{
			setState(290);
			((InterfaceDefnContext)_localctx).body = block();
			}
			setState(292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(291);
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
		public IdentContext name;
		public TypeVarListContext typeParams;
		public ParamListContext fields;
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
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
			setState(322);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
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
					((StructDefnContext)_localctx).typeParams = typeVarList();
					setState(298);
					match(RBRACK);
					}
				}

				setState(302);
				match(LBRACE);
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
					{
					setState(303);
					((StructDefnContext)_localctx).fields = paramList();
					}
				}

				setState(306);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(308);
				match(STRUCT);
				{
				setState(309);
				((StructDefnContext)_localctx).name = ident();
				}
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(310);
					match(LBRACK);
					setState(311);
					((StructDefnContext)_localctx).typeParams = typeVarList();
					setState(312);
					match(RBRACK);
					}
				}

				setState(316);
				match(LPAREN);
				{
				setState(317);
				((StructDefnContext)_localctx).fields = paramList();
				}
				setState(318);
				match(RPAREN);
				setState(320);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
				case 1:
					{
					setState(319);
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
		public TypeVarListContext typeParams;
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public TupleDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleDefn; }
	}

	public final TupleDefnContext tupleDefn() throws RecognitionException {
		TupleDefnContext _localctx = new TupleDefnContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_tupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(TUPLE);
			{
			setState(325);
			((TupleDefnContext)_localctx).name = ident();
			}
			setState(330);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(326);
				match(LBRACK);
				setState(327);
				((TupleDefnContext)_localctx).typeParams = typeVarList();
				setState(328);
				match(RBRACK);
				}
				break;
			}
			setState(332);
			match(LBRACK);
			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1476779558535676L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(333);
				((TupleDefnContext)_localctx).elements = typeExprList();
				}
			}

			setState(336);
			match(RPAREN);
			setState(338);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(337);
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
		public TypeVarListContext typeParams;
		public IdentContext name;
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
			setState(340);
			match(UNIT);
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(341);
				match(LBRACK);
				setState(342);
				((UnitDefnContext)_localctx).typeParams = typeVarList();
				setState(343);
				match(RBRACK);
				}
			}

			{
			setState(347);
			((UnitDefnContext)_localctx).name = ident();
			}
			setState(349);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				{
				setState(348);
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
		public IdentContext name;
		public TypeVarListContext typeParams;
		public EnumVariantDefnListContext variants;
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
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
		enterRule(_localctx, 42, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(ENUM);
			{
			setState(352);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(353);
				match(LBRACK);
				setState(354);
				((EnumDefnContext)_localctx).typeParams = typeVarList();
				setState(355);
				match(RBRACK);
				}
			}

			setState(359);
			match(LBRACE);
			setState(361);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(360);
				((EnumDefnContext)_localctx).variants = enumVariantDefnList();
				}
			}

			setState(363);
			match(RBRACE);
			setState(365);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				{
				setState(364);
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
		enterRule(_localctx, 44, RULE_enumVariantDefnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(367);
			enumVariantDefn();
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(368);
				match(COMMA);
				setState(369);
				enumVariantDefn();
				}
				}
				setState(374);
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
		public EnumVariantStructDefnContext enumVariantStructDefn() {
			return getRuleContext(EnumVariantStructDefnContext.class,0);
		}
		public EnumVariantTupleDefnContext enumVariantTupleDefn() {
			return getRuleContext(EnumVariantTupleDefnContext.class,0);
		}
		public EnumVariantUnitDefnContext enumVariantUnitDefn() {
			return getRuleContext(EnumVariantUnitDefnContext.class,0);
		}
		public EnumVariantDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantDefn; }
	}

	public final EnumVariantDefnContext enumVariantDefn() throws RecognitionException {
		EnumVariantDefnContext _localctx = new EnumVariantDefnContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_enumVariantDefn);
		try {
			setState(378);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(375);
				enumVariantStructDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(376);
				enumVariantTupleDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(377);
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
		int _la;
		try {
			setState(394);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(380);
				((EnumVariantStructDefnContext)_localctx).name = ident();
				}
				setState(381);
				match(LBRACE);
				setState(383);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
					{
					setState(382);
					((EnumVariantStructDefnContext)_localctx).fields = paramList();
					}
				}

				setState(385);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(387);
				((EnumVariantStructDefnContext)_localctx).name = ident();
				}
				setState(388);
				match(LPAREN);
				setState(390);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
					{
					setState(389);
					((EnumVariantStructDefnContext)_localctx).fields = paramList();
					}
				}

				setState(392);
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(396);
			((EnumVariantTupleDefnContext)_localctx).name = ident();
			}
			setState(397);
			match(LBRACK);
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1476779558535676L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(398);
				((EnumVariantTupleDefnContext)_localctx).elements = typeExprList();
				}
			}

			setState(401);
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
			setState(403);
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
		public TypeVarListContext typeParams;
		public TypeExprContext ty;
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public TypeAliasDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasDefn; }
	}

	public final TypeAliasDefnContext typeAliasDefn() throws RecognitionException {
		TypeAliasDefnContext _localctx = new TypeAliasDefnContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_typeAliasDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			match(TYPE);
			{
			setState(406);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(411);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(407);
				match(LBRACK);
				setState(408);
				((TypeAliasDefnContext)_localctx).typeParams = typeVarList();
				setState(409);
				match(RBRACK);
				}
			}

			setState(413);
			match(EQ);
			{
			setState(414);
			((TypeAliasDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(416);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(415);
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
		public IdentContext name;
		public TypeVarListContext typeParams;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public TypeVarListContext typeVarList() {
			return getRuleContext(TypeVarListContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
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
			setState(418);
			match(FN);
			{
			setState(419);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(420);
				match(LBRACK);
				setState(421);
				((FnDefnContext)_localctx).typeParams = typeVarList();
				setState(422);
				match(RBRACK);
				}
			}

			setState(426);
			match(LPAREN);
			setState(428);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(427);
				((FnDefnContext)_localctx).params = paramList();
				}
			}

			setState(430);
			match(RPAREN);
			setState(433);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(431);
				match(ARROW);
				{
				setState(432);
				((FnDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(435);
			((FnDefnContext)_localctx).body = block();
			}
			setState(437);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(436);
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
		public ParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode H_INSTANTIATE() { return getToken(CWScriptParser.H_INSTANTIATE, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
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
			setState(439);
			match(H_INSTANTIATE);
			setState(440);
			match(LPAREN);
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(441);
				((InstantiateDefnContext)_localctx).params = paramList();
				}
			}

			setState(444);
			match(RPAREN);
			setState(447);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(445);
				match(ARROW);
				{
				setState(446);
				((InstantiateDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(449);
			((InstantiateDefnContext)_localctx).body = block();
			}
			setState(451);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(450);
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
		public IdentContext name;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
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
			setState(453);
			match(EXEC);
			setState(454);
			match(HASH);
			{
			setState(455);
			((ExecDefnContext)_localctx).name = ident();
			}
			setState(456);
			match(LPAREN);
			setState(458);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(457);
				((ExecDefnContext)_localctx).params = paramList();
				}
			}

			setState(460);
			match(RPAREN);
			setState(463);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(461);
				match(ARROW);
				{
				setState(462);
				((ExecDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(465);
			((ExecDefnContext)_localctx).body = block();
			}
			setState(467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(466);
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
		public IdentContext name;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode HASH() { return getToken(CWScriptParser.HASH, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
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
			setState(469);
			match(QUERY);
			setState(470);
			match(HASH);
			{
			setState(471);
			((QueryDefnContext)_localctx).name = ident();
			}
			setState(472);
			match(LPAREN);
			setState(474);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(473);
				((QueryDefnContext)_localctx).params = paramList();
				}
			}

			setState(476);
			match(RPAREN);
			setState(479);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(477);
				match(ARROW);
				{
				setState(478);
				((QueryDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(481);
			((QueryDefnContext)_localctx).body = block();
			}
			setState(483);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(482);
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
		public IdentContext name;
		public ParamListContext params;
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
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
			setState(485);
			match(ERROR);
			{
			setState(486);
			((ErrorDefnContext)_localctx).name = ident();
			}
			setState(487);
			match(LPAREN);
			setState(489);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(488);
				((ErrorDefnContext)_localctx).params = paramList();
				}
			}

			setState(491);
			match(RPAREN);
			setState(493);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(492);
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
		public IdentContext name;
		public ParamListContext params;
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			match(EVENT);
			{
			setState(496);
			((EventDefnContext)_localctx).name = ident();
			}
			setState(497);
			match(LPAREN);
			setState(499);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(498);
				((EventDefnContext)_localctx).params = paramList();
				}
			}

			setState(501);
			match(RPAREN);
			setState(503);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(502);
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
		public StateDefnContext stateDefn;
		public List<StateDefnContext> stateFields = new ArrayList<StateDefnContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
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
			setState(505);
			match(STATE);
			setState(506);
			match(LBRACE);
			setState(510);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				{
				setState(507);
				((StateBlockDefnContext)_localctx).stateDefn = stateDefn();
				((StateBlockDefnContext)_localctx).stateFields.add(((StateBlockDefnContext)_localctx).stateDefn);
				}
				}
				setState(512);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(513);
			match(RBRACE);
			setState(515);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(514);
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
		enterRule(_localctx, 70, RULE_stateDefn);
		try {
			setState(519);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(517);
				stateItemDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(518);
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public StateItemDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateItemDefn; }
	}

	public final StateItemDefnContext stateItemDefn() throws RecognitionException {
		StateItemDefnContext _localctx = new StateItemDefnContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_stateItemDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(521);
			((StateItemDefnContext)_localctx).name = ident();
			}
			setState(522);
			match(COLON);
			{
			setState(523);
			((StateItemDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(525);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(524);
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
		public StateMapDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateMapDefn; }
	}

	public final StateMapDefnContext stateMapDefn() throws RecognitionException {
		StateMapDefnContext _localctx = new StateMapDefnContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_stateMapDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(527);
			((StateMapDefnContext)_localctx).name = ident();
			}
			setState(528);
			match(LBRACK);
			{
			setState(529);
			((StateMapDefnContext)_localctx).indexTy = typeExpr(0);
			}
			setState(530);
			match(RBRACK);
			setState(531);
			match(COLON);
			{
			setState(532);
			((StateMapDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(534);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(533);
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
	public static class EqExprContext extends ExprContext {
		public Token op;
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
	public static class IsExprContext extends ExprContext {
		public TypeExprContext ty;
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
		public TypeExprListContext typeArgs;
		public ArgListContext args;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
		}
		public CallExprContext(ExprContext ctx) { copyFrom(ctx); }
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
			setState(550);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				{
				_localctx = new QueryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(537);
				match(QUERY_NOW);
				setState(538);
				expr(15);
				}
				break;
			case 2:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(539);
				ifExpr_();
				}
				break;
			case 3:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(540);
				tryCatchElseExpr_();
				}
				break;
			case 4:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(541);
				closureExpr_();
				}
				break;
			case 5:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(542);
				structExpr_();
				}
				break;
			case 6:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(543);
				tupleExpr_();
				}
				break;
			case 7:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(544);
				literal();
				}
				break;
			case 8:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(545);
				ident();
				}
				break;
			case 9:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(546);
				match(LPAREN);
				setState(547);
				expr(0);
				setState(548);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(606);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(604);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(552);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						{
						setState(553);
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
						setState(554);
						expr(19);
						}
						break;
					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(555);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						{
						setState(556);
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
						setState(557);
						expr(18);
						}
						break;
					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(558);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						{
						setState(559);
						((CompExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 83)) & ~0x3f) == 0 && ((1L << (_la - 83)) & 15L) != 0)) ) {
							((CompExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(560);
						expr(17);
						}
						break;
					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(561);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(562);
						match(D_QUEST);
						setState(563);
						expr(15);
						}
						break;
					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(564);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(565);
						match(IN);
						setState(566);
						expr(14);
						}
						break;
					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(567);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(568);
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
						setState(569);
						expr(12);
						}
						break;
					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(570);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(571);
						match(AND);
						setState(572);
						expr(11);
						}
						break;
					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(573);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(574);
						match(OR);
						setState(575);
						expr(10);
						}
						break;
					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(576);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(577);
						match(DOT);
						{
						setState(578);
						((DotExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(579);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(584);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==LBRACK) {
							{
							setState(580);
							match(LBRACK);
							{
							setState(581);
							((CallExprContext)_localctx).typeArgs = typeExprList();
							}
							setState(582);
							match(RBRACK);
							}
						}

						setState(586);
						match(LPAREN);
						setState(588);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289707156280676860L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 132120577L) != 0)) {
							{
							setState(587);
							((CallExprContext)_localctx).args = argList();
							}
						}

						setState(590);
						match(RPAREN);
						}
						break;
					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(591);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(592);
						match(LBRACK);
						{
						setState(593);
						((IndexExprContext)_localctx).index = expr(0);
						}
						setState(594);
						match(RBRACK);
						}
						break;
					case 12:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(596);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(597);
						match(AS);
						{
						setState(598);
						((AsExprContext)_localctx).ty = typeExpr(0);
						}
						}
						break;
					case 13:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(599);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(600);
						match(QUEST);
						}
						break;
					case 14:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(601);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(602);
						match(IS);
						{
						setState(603);
						((IsExprContext)_localctx).ty = typeExpr(0);
						}
						}
						break;
					}
					} 
				}
				setState(608);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
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
		public BlockContext thenBody;
		public BlockContext elseBody;
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
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
		enterRule(_localctx, 78, RULE_ifExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(609);
			match(IF);
			{
			setState(610);
			((IfExpr_Context)_localctx).pred = expr(0);
			}
			{
			setState(611);
			((IfExpr_Context)_localctx).thenBody = block();
			}
			setState(614);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(612);
				match(ELSE);
				{
				setState(613);
				((IfExpr_Context)_localctx).elseBody = block();
				}
				}
				break;
			}
			setState(617);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				{
				setState(616);
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
		enterRule(_localctx, 80, RULE_tryCatchElseExpr_);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(619);
			match(TRY);
			{
			setState(620);
			((TryCatchElseExpr_Context)_localctx).body = block();
			}
			setState(624);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(621);
					((TryCatchElseExpr_Context)_localctx).catchClause = catchClause();
					((TryCatchElseExpr_Context)_localctx).catchClauses.add(((TryCatchElseExpr_Context)_localctx).catchClause);
					}
					} 
				}
				setState(626);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			}
			setState(629);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				{
				setState(627);
				match(ELSE);
				{
				setState(628);
				((TryCatchElseExpr_Context)_localctx).elseBody = block();
				}
				}
				break;
			}
			setState(632);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				{
				setState(631);
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
		enterRule(_localctx, 82, RULE_catchClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(634);
			match(CATCH);
			{
			setState(635);
			((CatchClauseContext)_localctx).ty = typeExpr(0);
			}
			{
			setState(636);
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
	public static class ClosureExpr_Context extends ParserRuleContext {
		public Token fallible;
		public ParamListContext params;
		public TypeExprContext returnTy;
		public BlockContext body;
		public List<TerminalNode> BAR() { return getTokens(CWScriptParser.BAR); }
		public TerminalNode BAR(int i) {
			return getToken(CWScriptParser.BAR, i);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
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
			setState(639);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(638);
				((ClosureExpr_Context)_localctx).fallible = match(BANG);
				}
			}

			setState(641);
			match(BAR);
			setState(643);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(642);
				((ClosureExpr_Context)_localctx).params = paramList();
				}
			}

			setState(645);
			match(BAR);
			setState(648);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(646);
				match(ARROW);
				{
				setState(647);
				((ClosureExpr_Context)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(650);
			((ClosureExpr_Context)_localctx).body = block();
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
			setState(652);
			((StructExpr_Context)_localctx).ty = typeExpr(0);
			}
			setState(653);
			match(LBRACE);
			setState(655);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0) || _la==Ident) {
				{
				setState(654);
				((StructExpr_Context)_localctx).fields = fieldList();
				}
			}

			setState(657);
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
			setState(659);
			match(LBRACK);
			setState(663);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289707156280676860L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 132120577L) != 0)) {
				{
				{
				setState(660);
				((TupleExpr_Context)_localctx).expr = expr(0);
				((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
				}
				}
				setState(665);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(666);
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
			setState(673);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				_localctx = new StringLitContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(668);
				match(StringLiteral);
				}
				break;
			case IntLiteral:
				_localctx = new IntLitContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(669);
				match(IntLiteral);
				}
				break;
			case DecLiteral:
				_localctx = new DecLitContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(670);
				match(DecLiteral);
				}
				break;
			case BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(671);
				match(BoolLiteral);
				}
				break;
			case NONE:
				_localctx = new NoneLitContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(672);
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
	public static class ParameterizedTypeExprContext extends TypeExprContext {
		public TypeExprListContext typeArgs;
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TypeExprListContext typeExprList() {
			return getRuleContext(TypeExprListContext.class,0);
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
			setState(692);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(676);
				match(LPAREN);
				setState(677);
				typeExpr(0);
				setState(678);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(680);
				match(LBRACK);
				setState(681);
				((ArrayTypeExprContext)_localctx).ty = typeExpr(0);
				setState(682);
				match(SEMI);
				setState(683);
				((ArrayTypeExprContext)_localctx).size = match(IntLiteral);
				setState(684);
				match(RBRACK);
				}
				break;
			case 3:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(686);
				structDefn();
				}
				break;
			case 4:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(687);
				tupleDefn();
				}
				break;
			case 5:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(688);
				unitDefn();
				}
				break;
			case 6:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(689);
				enumDefn();
				}
				break;
			case 7:
				{
				_localctx = new TypeVarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(690);
				typeVar();
				}
				break;
			case 8:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(691);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(706);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(704);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(694);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(695);
						match(LBRACK);
						setState(696);
						((ParameterizedTypeExprContext)_localctx).typeArgs = typeExprList();
						setState(697);
						match(RBRACK);
						}
						break;
					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(699);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(700);
						match(DOT);
						{
						setState(701);
						((MemberTypeExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(702);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(703);
						match(QUEST);
						}
						break;
					}
					} 
				}
				setState(708);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
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
			setState(709);
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
			setState(711);
			typeVar();
			setState(716);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(712);
				match(COMMA);
				setState(713);
				typeVar();
				}
				}
				setState(718);
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
			setState(721);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ident:
				enterOuterAlt(_localctx, 1);
				{
				setState(719);
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
				setState(720);
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
			setState(723);
			((ParamContext)_localctx).name = ident();
			}
			setState(725);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(724);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(727);
			match(COLON);
			{
			setState(729);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1476779558535676L) != 0) || _la==Ident || _la==TypeVar) {
				{
				setState(728);
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
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
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
		enterRule(_localctx, 102, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(731);
			((FieldContext)_localctx).name = ident();
			}
			setState(732);
			match(COLON);
			{
			setState(733);
			((FieldContext)_localctx).value = expr(0);
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
			setState(735);
			((NamedArgContext)_localctx).name = ident();
			}
			setState(736);
			match(EQ);
			{
			setState(737);
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
			setState(741);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				{
				setState(739);
				expr(0);
				}
				break;
			case 2:
				{
				setState(740);
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
			setState(743);
			ident();
			setState(748);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(744);
				match(COMMA);
				setState(745);
				ident();
				}
				}
				setState(750);
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
			setState(751);
			param();
			setState(756);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(752);
				match(COMMA);
				setState(753);
				param();
				}
				}
				setState(758);
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
			setState(759);
			typeExpr(0);
			setState(764);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(760);
				match(COMMA);
				setState(761);
				typeExpr(0);
				}
				}
				setState(766);
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
			setState(767);
			field();
			setState(772);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(768);
				match(COMMA);
				setState(769);
				field();
				}
				}
				setState(774);
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
			setState(775);
			arg();
			setState(780);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(776);
				match(COMMA);
				setState(777);
				arg();
				}
				}
				setState(782);
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
		enterRule(_localctx, 118, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(783);
			match(LBRACE);
			setState(787);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289708118353370620L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 132120577L) != 0)) {
				{
				{
				setState(784);
				((BlockContext)_localctx).stmt = stmt();
				((BlockContext)_localctx).stmts.add(((BlockContext)_localctx).stmt);
				}
				}
				setState(789);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(790);
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
		enterRule(_localctx, 120, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(792);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 69404674982396L) != 0)) ) {
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
			return precpred(_ctx, 18);
		case 1:
			return precpred(_ctx, 17);
		case 2:
			return precpred(_ctx, 16);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 13);
		case 5:
			return precpred(_ctx, 11);
		case 6:
			return precpred(_ctx, 10);
		case 7:
			return precpred(_ctx, 9);
		case 8:
			return precpred(_ctx, 23);
		case 9:
			return precpred(_ctx, 22);
		case 10:
			return precpred(_ctx, 21);
		case 11:
			return precpred(_ctx, 20);
		case 12:
			return precpred(_ctx, 19);
		case 13:
			return precpred(_ctx, 12);
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
		"\u0004\u0001b\u031b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"<\u0007<\u0001\u0000\u0005\u0000|\b\u0000\n\u0000\f\u0000\u007f\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001\u0094\b\u0001\u0001\u0001\u0003\u0001\u0097\b"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u009c\b\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u00a2\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003"+
		"\u0003\u00aa\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004\u00af"+
		"\b\u0004\u0001\u0004\u0001\u0004\u0003\u0004\u00b3\b\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004\u00b8\b\u0004\u0001\u0004\u0003\u0004"+
		"\u00bb\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"\u00c1\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"\u00c7\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006"+
		"\u00cd\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0003\u0007\u00d5\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0003\b\u00de\b\b\u0001\t\u0001\t\u0001\t\u0003"+
		"\t\u00e3\b\t\u0001\n\u0001\n\u0001\n\u0003\n\u00e8\b\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f"+
		"\u0001\f\u0003\f\u00f3\b\f\u0001\r\u0001\r\u0001\r\u0003\r\u00f8\b\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00fd\b\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0003\u000f\u010d\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0003\u0010\u0113\b\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u0117"+
		"\b\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u011b\b\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0121\b\u0011\u0001\u0011"+
		"\u0001\u0011\u0003\u0011\u0125\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u012d\b\u0012\u0001\u0012"+
		"\u0001\u0012\u0003\u0012\u0131\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012"+
		"\u013b\b\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012"+
		"\u0141\b\u0012\u0003\u0012\u0143\b\u0012\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u014b\b\u0013\u0001"+
		"\u0013\u0001\u0013\u0003\u0013\u014f\b\u0013\u0001\u0013\u0001\u0013\u0003"+
		"\u0013\u0153\b\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0003\u0014\u015a\b\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u015e"+
		"\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0003\u0015\u0166\b\u0015\u0001\u0015\u0001\u0015\u0003\u0015\u016a"+
		"\b\u0015\u0001\u0015\u0001\u0015\u0003\u0015\u016e\b\u0015\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0005\u0016\u0173\b\u0016\n\u0016\f\u0016\u0176"+
		"\t\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u017b\b\u0017"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u0180\b\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u0187\b\u0018"+
		"\u0001\u0018\u0001\u0018\u0003\u0018\u018b\b\u0018\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0003\u0019\u0190\b\u0019\u0001\u0019\u0001\u0019\u0001\u001a"+
		"\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u019c\b\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0003\u001b\u01a1\b\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0003\u001c\u01a9\b\u001c\u0001\u001c\u0001\u001c"+
		"\u0003\u001c\u01ad\b\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c"+
		"\u01b2\b\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u01b6\b\u001c\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u01bb\b\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0003\u001d\u01c0\b\u001d\u0001\u001d\u0001\u001d\u0003"+
		"\u001d\u01c4\b\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0003\u001e\u01cb\b\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003"+
		"\u001e\u01d0\b\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u01d4\b\u001e"+
		"\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f"+
		"\u01db\b\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u01e0\b"+
		"\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u01e4\b\u001f\u0001 \u0001"+
		" \u0001 \u0001 \u0003 \u01ea\b \u0001 \u0001 \u0003 \u01ee\b \u0001!\u0001"+
		"!\u0001!\u0001!\u0003!\u01f4\b!\u0001!\u0001!\u0003!\u01f8\b!\u0001\""+
		"\u0001\"\u0001\"\u0005\"\u01fd\b\"\n\"\f\"\u0200\t\"\u0001\"\u0001\"\u0003"+
		"\"\u0204\b\"\u0001#\u0001#\u0003#\u0208\b#\u0001$\u0001$\u0001$\u0001"+
		"$\u0003$\u020e\b$\u0001%\u0001%\u0001%\u0001%\u0001%\u0001%\u0001%\u0003"+
		"%\u0217\b%\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003&\u0227\b&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0003"+
		"&\u0249\b&\u0001&\u0001&\u0003&\u024d\b&\u0001&\u0001&\u0001&\u0001&\u0001"+
		"&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0005"+
		"&\u025d\b&\n&\f&\u0260\t&\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0003"+
		"\'\u0267\b\'\u0001\'\u0003\'\u026a\b\'\u0001(\u0001(\u0001(\u0005(\u026f"+
		"\b(\n(\f(\u0272\t(\u0001(\u0001(\u0003(\u0276\b(\u0001(\u0003(\u0279\b"+
		"(\u0001)\u0001)\u0001)\u0001)\u0001*\u0003*\u0280\b*\u0001*\u0001*\u0003"+
		"*\u0284\b*\u0001*\u0001*\u0001*\u0003*\u0289\b*\u0001*\u0001*\u0001+\u0001"+
		"+\u0001+\u0003+\u0290\b+\u0001+\u0001+\u0001,\u0001,\u0005,\u0296\b,\n"+
		",\f,\u0299\t,\u0001,\u0001,\u0001-\u0001-\u0001-\u0001-\u0001-\u0003-"+
		"\u02a2\b-\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0003.\u02b5"+
		"\b.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0005.\u02c1\b.\n.\f.\u02c4\t.\u0001/\u0001/\u00010\u00010\u00010\u0005"+
		"0\u02cb\b0\n0\f0\u02ce\t0\u00011\u00011\u00031\u02d2\b1\u00012\u00012"+
		"\u00032\u02d6\b2\u00012\u00012\u00032\u02da\b2\u00013\u00013\u00013\u0001"+
		"3\u00014\u00014\u00014\u00014\u00015\u00015\u00035\u02e6\b5\u00016\u0001"+
		"6\u00016\u00056\u02eb\b6\n6\f6\u02ee\t6\u00017\u00017\u00017\u00057\u02f3"+
		"\b7\n7\f7\u02f6\t7\u00018\u00018\u00018\u00058\u02fb\b8\n8\f8\u02fe\t"+
		"8\u00019\u00019\u00019\u00059\u0303\b9\n9\f9\u0306\t9\u0001:\u0001:\u0001"+
		":\u0005:\u030b\b:\n:\f:\u030e\t:\u0001;\u0001;\u0005;\u0312\b;\n;\f;\u0315"+
		"\t;\u0001;\u0001;\u0001<\u0001<\u0001<\u0000\u0002L\\=\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvx\u0000\u0006\u0006\u0000F"+
		"FJJLLNNPPRR\u0003\u0000MMOOQQ\u0002\u0000IIKK\u0001\u0000SV\u0001\u0000"+
		"GH\u0005\u0000\u0002\b\u000f\u0017\u001b\u001b\u001f$(-\u037a\u0000}\u0001"+
		"\u0000\u0000\u0000\u0002\u0096\u0001\u0000\u0000\u0000\u0004\u0098\u0001"+
		"\u0000\u0000\u0000\u0006\u00a3\u0001\u0000\u0000\u0000\b\u00ba\u0001\u0000"+
		"\u0000\u0000\n\u00bc\u0001\u0000\u0000\u0000\f\u00c8\u0001\u0000\u0000"+
		"\u0000\u000e\u00ce\u0001\u0000\u0000\u0000\u0010\u00d6\u0001\u0000\u0000"+
		"\u0000\u0012\u00df\u0001\u0000\u0000\u0000\u0014\u00e4\u0001\u0000\u0000"+
		"\u0000\u0016\u00e9\u0001\u0000\u0000\u0000\u0018\u00ef\u0001\u0000\u0000"+
		"\u0000\u001a\u00f4\u0001\u0000\u0000\u0000\u001c\u00f9\u0001\u0000\u0000"+
		"\u0000\u001e\u010c\u0001\u0000\u0000\u0000 \u010e\u0001\u0000\u0000\u0000"+
		"\"\u011c\u0001\u0000\u0000\u0000$\u0142\u0001\u0000\u0000\u0000&\u0144"+
		"\u0001\u0000\u0000\u0000(\u0154\u0001\u0000\u0000\u0000*\u015f\u0001\u0000"+
		"\u0000\u0000,\u016f\u0001\u0000\u0000\u0000.\u017a\u0001\u0000\u0000\u0000"+
		"0\u018a\u0001\u0000\u0000\u00002\u018c\u0001\u0000\u0000\u00004\u0193"+
		"\u0001\u0000\u0000\u00006\u0195\u0001\u0000\u0000\u00008\u01a2\u0001\u0000"+
		"\u0000\u0000:\u01b7\u0001\u0000\u0000\u0000<\u01c5\u0001\u0000\u0000\u0000"+
		">\u01d5\u0001\u0000\u0000\u0000@\u01e5\u0001\u0000\u0000\u0000B\u01ef"+
		"\u0001\u0000\u0000\u0000D\u01f9\u0001\u0000\u0000\u0000F\u0207\u0001\u0000"+
		"\u0000\u0000H\u0209\u0001\u0000\u0000\u0000J\u020f\u0001\u0000\u0000\u0000"+
		"L\u0226\u0001\u0000\u0000\u0000N\u0261\u0001\u0000\u0000\u0000P\u026b"+
		"\u0001\u0000\u0000\u0000R\u027a\u0001\u0000\u0000\u0000T\u027f\u0001\u0000"+
		"\u0000\u0000V\u028c\u0001\u0000\u0000\u0000X\u0293\u0001\u0000\u0000\u0000"+
		"Z\u02a1\u0001\u0000\u0000\u0000\\\u02b4\u0001\u0000\u0000\u0000^\u02c5"+
		"\u0001\u0000\u0000\u0000`\u02c7\u0001\u0000\u0000\u0000b\u02d1\u0001\u0000"+
		"\u0000\u0000d\u02d3\u0001\u0000\u0000\u0000f\u02db\u0001\u0000\u0000\u0000"+
		"h\u02df\u0001\u0000\u0000\u0000j\u02e5\u0001\u0000\u0000\u0000l\u02e7"+
		"\u0001\u0000\u0000\u0000n\u02ef\u0001\u0000\u0000\u0000p\u02f7\u0001\u0000"+
		"\u0000\u0000r\u02ff\u0001\u0000\u0000\u0000t\u0307\u0001\u0000\u0000\u0000"+
		"v\u030f\u0001\u0000\u0000\u0000x\u0318\u0001\u0000\u0000\u0000z|\u0003"+
		"\u0002\u0001\u0000{z\u0001\u0000\u0000\u0000|\u007f\u0001\u0000\u0000"+
		"\u0000}{\u0001\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~\u0080\u0001"+
		"\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u0080\u0081\u0005\u0000"+
		"\u0000\u0001\u0081\u0001\u0001\u0000\u0000\u0000\u0082\u0097\u0003\u0004"+
		"\u0002\u0000\u0083\u0097\u0003\u0006\u0003\u0000\u0084\u0097\u0003\n\u0005"+
		"\u0000\u0085\u0097\u0003\f\u0006\u0000\u0086\u0097\u0003\u000e\u0007\u0000"+
		"\u0087\u0097\u0003\u0010\b\u0000\u0088\u0097\u0003N\'\u0000\u0089\u0097"+
		"\u0003P(\u0000\u008a\u0097\u0003\u0016\u000b\u0000\u008b\u0097\u0003\u0018"+
		"\f\u0000\u008c\u0097\u0003\u001a\r\u0000\u008d\u0097\u0003\u001c\u000e"+
		"\u0000\u008e\u0097\u0003\u0014\n\u0000\u008f\u0097\u0003\u0012\t\u0000"+
		"\u0090\u0097\u0003\u001e\u000f\u0000\u0091\u0093\u0003L&\u0000\u0092\u0094"+
		"\u0005;\u0000\u0000\u0093\u0092\u0001\u0000\u0000\u0000\u0093\u0094\u0001"+
		"\u0000\u0000\u0000\u0094\u0097\u0001\u0000\u0000\u0000\u0095\u0097\u0003"+
		"\\.\u0000\u0096\u0082\u0001\u0000\u0000\u0000\u0096\u0083\u0001\u0000"+
		"\u0000\u0000\u0096\u0084\u0001\u0000\u0000\u0000\u0096\u0085\u0001\u0000"+
		"\u0000\u0000\u0096\u0086\u0001\u0000\u0000\u0000\u0096\u0087\u0001\u0000"+
		"\u0000\u0000\u0096\u0088\u0001\u0000\u0000\u0000\u0096\u0089\u0001\u0000"+
		"\u0000\u0000\u0096\u008a\u0001\u0000\u0000\u0000\u0096\u008b\u0001\u0000"+
		"\u0000\u0000\u0096\u008c\u0001\u0000\u0000\u0000\u0096\u008d\u0001\u0000"+
		"\u0000\u0000\u0096\u008e\u0001\u0000\u0000\u0000\u0096\u008f\u0001\u0000"+
		"\u0000\u0000\u0096\u0090\u0001\u0000\u0000\u0000\u0096\u0091\u0001\u0000"+
		"\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u0003\u0001\u0000"+
		"\u0000\u0000\u0098\u0099\u0005\u0004\u0000\u0000\u0099\u009b\u00054\u0000"+
		"\u0000\u009a\u009c\u0003l6\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009b"+
		"\u009c\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d"+
		"\u009e\u00055\u0000\u0000\u009e\u009f\u0005\u0015\u0000\u0000\u009f\u00a1"+
		"\u0005Z\u0000\u0000\u00a0\u00a2\u0005;\u0000\u0000\u00a1\u00a0\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u0005\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a4\u0005$\u0000\u0000\u00a4\u00a5\u0003\b\u0004"+
		"\u0000\u00a5\u00a6\u0005F\u0000\u0000\u00a6\u00a7\u0003L&\u0000\u00a7"+
		"\u00a9\u0001\u0000\u0000\u0000\u00a8\u00aa\u0005;\u0000\u0000\u00a9\u00a8"+
		"\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u0007"+
		"\u0001\u0000\u0000\u0000\u00ab\u00ae\u0003b1\u0000\u00ac\u00ad\u0005<"+
		"\u0000\u0000\u00ad\u00af\u0003\\.\u0000\u00ae\u00ac\u0001\u0000\u0000"+
		"\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00bb\u0001\u0000\u0000"+
		"\u0000\u00b0\u00b2\u00052\u0000\u0000\u00b1\u00b3\u0003l6\u0000\u00b2"+
		"\u00b1\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001\u0000\u0000\u0000\u00b3"+
		"\u00b4\u0001\u0000\u0000\u0000\u00b4\u00bb\u00053\u0000\u0000\u00b5\u00b7"+
		"\u00054\u0000\u0000\u00b6\u00b8\u0003l6\u0000\u00b7\u00b6\u0001\u0000"+
		"\u0000\u0000\u00b7\u00b8\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000"+
		"\u0000\u0000\u00b9\u00bb\u00055\u0000\u0000\u00ba\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ba\u00b0\u0001\u0000\u0000\u0000\u00ba\u00b5\u0001\u0000\u0000"+
		"\u0000\u00bb\t\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005%\u0000\u0000"+
		"\u00bd\u00c0\u0003b1\u0000\u00be\u00bf\u0005<\u0000\u0000\u00bf\u00c1"+
		"\u0003\\.\u0000\u00c0\u00be\u0001\u0000\u0000\u0000\u00c0\u00c1\u0001"+
		"\u0000\u0000\u0000\u00c1\u00c2\u0001\u0000\u0000\u0000\u00c2\u00c3\u0005"+
		"F\u0000\u0000\u00c3\u00c4\u0003L&\u0000\u00c4\u00c6\u0001\u0000\u0000"+
		"\u0000\u00c5\u00c7\u0005;\u0000\u0000\u00c6\u00c5\u0001\u0000\u0000\u0000"+
		"\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7\u000b\u0001\u0000\u0000\u0000"+
		"\u00c8\u00c9\u0003b1\u0000\u00c9\u00ca\u0007\u0000\u0000\u0000\u00ca\u00cc"+
		"\u0003L&\u0000\u00cb\u00cd\u0005;\u0000\u0000\u00cc\u00cb\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0001\u0000\u0000\u0000\u00cd\r\u0001\u0000\u0000"+
		"\u0000\u00ce\u00cf\u0003L&\u0000\u00cf\u00d0\u00056\u0000\u0000\u00d0"+
		"\u00d1\u0003b1\u0000\u00d1\u00d2\u0007\u0000\u0000\u0000\u00d2\u00d4\u0003"+
		"L&\u0000\u00d3\u00d5\u0005;\u0000\u0000\u00d4\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d4\u00d5\u0001\u0000\u0000\u0000\u00d5\u000f\u0001\u0000\u0000"+
		"\u0000\u00d6\u00d7\u0003L&\u0000\u00d7\u00d8\u00052\u0000\u0000\u00d8"+
		"\u00d9\u0003L&\u0000\u00d9\u00da\u00053\u0000\u0000\u00da\u00db\u0007"+
		"\u0000\u0000\u0000\u00db\u00dd\u0003L&\u0000\u00dc\u00de\u0005;\u0000"+
		"\u0000\u00dd\u00dc\u0001\u0000\u0000\u0000\u00dd\u00de\u0001\u0000\u0000"+
		"\u0000\u00de\u0011\u0001\u0000\u0000\u0000\u00df\u00e0\u0005\'\u0000\u0000"+
		"\u00e0\u00e2\u0003L&\u0000\u00e1\u00e3\u0005;\u0000\u0000\u00e2\u00e1"+
		"\u0001\u0000\u0000\u0000\u00e2\u00e3\u0001\u0000\u0000\u0000\u00e3\u0013"+
		"\u0001\u0000\u0000\u0000\u00e4\u00e5\u0005&\u0000\u0000\u00e5\u00e7\u0003"+
		"L&\u0000\u00e6\u00e8\u0005;\u0000\u0000\u00e7\u00e6\u0001\u0000\u0000"+
		"\u0000\u00e7\u00e8\u0001\u0000\u0000\u0000\u00e8\u0015\u0001\u0000\u0000"+
		"\u0000\u00e9\u00ea\u0005\u0013\u0000\u0000\u00ea\u00eb\u0003\b\u0004\u0000"+
		"\u00eb\u00ec\u0005\u0014\u0000\u0000\u00ec\u00ed\u0003L&\u0000\u00ed\u00ee"+
		"\u0003v;\u0000\u00ee\u0017\u0001\u0000\u0000\u0000\u00ef\u00f0\u0005\u000b"+
		"\u0000\u0000\u00f0\u00f2\u0003L&\u0000\u00f1\u00f3\u0005;\u0000\u0000"+
		"\u00f2\u00f1\u0001\u0000\u0000\u0000\u00f2\u00f3\u0001\u0000\u0000\u0000"+
		"\u00f3\u0019\u0001\u0000\u0000\u0000\u00f4\u00f5\u0005\n\u0000\u0000\u00f5"+
		"\u00f7\u0003L&\u0000\u00f6\u00f8\u0005;\u0000\u0000\u00f7\u00f6\u0001"+
		"\u0000\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000\u0000\u00f8\u001b\u0001"+
		"\u0000\u0000\u0000\u00f9\u00fa\u0005-\u0000\u0000\u00fa\u00fc\u0003L&"+
		"\u0000\u00fb\u00fd\u0005;\u0000\u0000\u00fc\u00fb\u0001\u0000\u0000\u0000"+
		"\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u001d\u0001\u0000\u0000\u0000"+
		"\u00fe\u010d\u0003 \u0010\u0000\u00ff\u010d\u0003\"\u0011\u0000\u0100"+
		"\u010d\u0003$\u0012\u0000\u0101\u010d\u0003&\u0013\u0000\u0102\u010d\u0003"+
		"(\u0014\u0000\u0103\u010d\u0003*\u0015\u0000\u0104\u010d\u00036\u001b"+
		"\u0000\u0105\u010d\u00038\u001c\u0000\u0106\u010d\u0003:\u001d\u0000\u0107"+
		"\u010d\u0003<\u001e\u0000\u0108\u010d\u0003>\u001f\u0000\u0109\u010d\u0003"+
		"@ \u0000\u010a\u010d\u0003B!\u0000\u010b\u010d\u0003D\"\u0000\u010c\u00fe"+
		"\u0001\u0000\u0000\u0000\u010c\u00ff\u0001\u0000\u0000\u0000\u010c\u0100"+
		"\u0001\u0000\u0000\u0000\u010c\u0101\u0001\u0000\u0000\u0000\u010c\u0102"+
		"\u0001\u0000\u0000\u0000\u010c\u0103\u0001\u0000\u0000\u0000\u010c\u0104"+
		"\u0001\u0000\u0000\u0000\u010c\u0105\u0001\u0000\u0000\u0000\u010c\u0106"+
		"\u0001\u0000\u0000\u0000\u010c\u0107\u0001\u0000\u0000\u0000\u010c\u0108"+
		"\u0001\u0000\u0000\u0000\u010c\u0109\u0001\u0000\u0000\u0000\u010c\u010a"+
		"\u0001\u0000\u0000\u0000\u010c\u010b\u0001\u0000\u0000\u0000\u010d\u001f"+
		"\u0001\u0000\u0000\u0000\u010e\u010f\u0005\u0002\u0000\u0000\u010f\u0112"+
		"\u0003b1\u0000\u0110\u0111\u0005\u0006\u0000\u0000\u0111\u0113\u0003\\"+
		".\u0000\u0112\u0110\u0001\u0000\u0000\u0000\u0112\u0113\u0001\u0000\u0000"+
		"\u0000\u0113\u0116\u0001\u0000\u0000\u0000\u0114\u0115\u0005\u0005\u0000"+
		"\u0000\u0115\u0117\u0003p8\u0000\u0116\u0114\u0001\u0000\u0000\u0000\u0116"+
		"\u0117\u0001\u0000\u0000\u0000\u0117\u0118\u0001\u0000\u0000\u0000\u0118"+
		"\u011a\u0003v;\u0000\u0119\u011b\u0005;\u0000\u0000\u011a\u0119\u0001"+
		"\u0000\u0000\u0000\u011a\u011b\u0001\u0000\u0000\u0000\u011b!\u0001\u0000"+
		"\u0000\u0000\u011c\u011d\u0005\u0003\u0000\u0000\u011d\u0120\u0003b1\u0000"+
		"\u011e\u011f\u0005\u0006\u0000\u0000\u011f\u0121\u0003p8\u0000\u0120\u011e"+
		"\u0001\u0000\u0000\u0000\u0120\u0121\u0001\u0000\u0000\u0000\u0121\u0122"+
		"\u0001\u0000\u0000\u0000\u0122\u0124\u0003v;\u0000\u0123\u0125\u0005;"+
		"\u0000\u0000\u0124\u0123\u0001\u0000\u0000\u0000\u0124\u0125\u0001\u0000"+
		"\u0000\u0000\u0125#\u0001\u0000\u0000\u0000\u0126\u0127\u0005(\u0000\u0000"+
		"\u0127\u012c\u0003b1\u0000\u0128\u0129\u00052\u0000\u0000\u0129\u012a"+
		"\u0003`0\u0000\u012a\u012b\u00053\u0000\u0000\u012b\u012d\u0001\u0000"+
		"\u0000\u0000\u012c\u0128\u0001\u0000\u0000\u0000\u012c\u012d\u0001\u0000"+
		"\u0000\u0000\u012d\u012e\u0001\u0000\u0000\u0000\u012e\u0130\u00054\u0000"+
		"\u0000\u012f\u0131\u0003n7\u0000\u0130\u012f\u0001\u0000\u0000\u0000\u0130"+
		"\u0131\u0001\u0000\u0000\u0000\u0131\u0132\u0001\u0000\u0000\u0000\u0132"+
		"\u0133\u00055\u0000\u0000\u0133\u0143\u0001\u0000\u0000\u0000\u0134\u0135"+
		"\u0005(\u0000\u0000\u0135\u013a\u0003b1\u0000\u0136\u0137\u00052\u0000"+
		"\u0000\u0137\u0138\u0003`0\u0000\u0138\u0139\u00053\u0000\u0000\u0139"+
		"\u013b\u0001\u0000\u0000\u0000\u013a\u0136\u0001\u0000\u0000\u0000\u013a"+
		"\u013b\u0001\u0000\u0000\u0000\u013b\u013c\u0001\u0000\u0000\u0000\u013c"+
		"\u013d\u00050\u0000\u0000\u013d\u013e\u0003n7\u0000\u013e\u0140\u0005"+
		"1\u0000\u0000\u013f\u0141\u0005;\u0000\u0000\u0140\u013f\u0001\u0000\u0000"+
		"\u0000\u0140\u0141\u0001\u0000\u0000\u0000\u0141\u0143\u0001\u0000\u0000"+
		"\u0000\u0142\u0126\u0001\u0000\u0000\u0000\u0142\u0134\u0001\u0000\u0000"+
		"\u0000\u0143%\u0001\u0000\u0000\u0000\u0144\u0145\u0005)\u0000\u0000\u0145"+
		"\u014a\u0003b1\u0000\u0146\u0147\u00052\u0000\u0000\u0147\u0148\u0003"+
		"`0\u0000\u0148\u0149\u00053\u0000\u0000\u0149\u014b\u0001\u0000\u0000"+
		"\u0000\u014a\u0146\u0001\u0000\u0000\u0000\u014a\u014b\u0001\u0000\u0000"+
		"\u0000\u014b\u014c\u0001\u0000\u0000\u0000\u014c\u014e\u00052\u0000\u0000"+
		"\u014d\u014f\u0003p8\u0000\u014e\u014d\u0001\u0000\u0000\u0000\u014e\u014f"+
		"\u0001\u0000\u0000\u0000\u014f\u0150\u0001\u0000\u0000\u0000\u0150\u0152"+
		"\u00051\u0000\u0000\u0151\u0153\u0005;\u0000\u0000\u0152\u0151\u0001\u0000"+
		"\u0000\u0000\u0152\u0153\u0001\u0000\u0000\u0000\u0153\'\u0001\u0000\u0000"+
		"\u0000\u0154\u0159\u0005*\u0000\u0000\u0155\u0156\u00052\u0000\u0000\u0156"+
		"\u0157\u0003`0\u0000\u0157\u0158\u00053\u0000\u0000\u0158\u015a\u0001"+
		"\u0000\u0000\u0000\u0159\u0155\u0001\u0000\u0000\u0000\u0159\u015a\u0001"+
		"\u0000\u0000\u0000\u015a\u015b\u0001\u0000\u0000\u0000\u015b\u015d\u0003"+
		"b1\u0000\u015c\u015e\u0005;\u0000\u0000\u015d\u015c\u0001\u0000\u0000"+
		"\u0000\u015d\u015e\u0001\u0000\u0000\u0000\u015e)\u0001\u0000\u0000\u0000"+
		"\u015f\u0160\u0005+\u0000\u0000\u0160\u0165\u0003b1\u0000\u0161\u0162"+
		"\u00052\u0000\u0000\u0162\u0163\u0003`0\u0000\u0163\u0164\u00053\u0000"+
		"\u0000\u0164\u0166\u0001\u0000\u0000\u0000\u0165\u0161\u0001\u0000\u0000"+
		"\u0000\u0165\u0166\u0001\u0000\u0000\u0000\u0166\u0167\u0001\u0000\u0000"+
		"\u0000\u0167\u0169\u00054\u0000\u0000\u0168\u016a\u0003,\u0016\u0000\u0169"+
		"\u0168\u0001\u0000\u0000\u0000\u0169\u016a\u0001\u0000\u0000\u0000\u016a"+
		"\u016b\u0001\u0000\u0000\u0000\u016b\u016d\u00055\u0000\u0000\u016c\u016e"+
		"\u0005;\u0000\u0000\u016d\u016c\u0001\u0000\u0000\u0000\u016d\u016e\u0001"+
		"\u0000\u0000\u0000\u016e+\u0001\u0000\u0000\u0000\u016f\u0174\u0003.\u0017"+
		"\u0000\u0170\u0171\u00057\u0000\u0000\u0171\u0173\u0003.\u0017\u0000\u0172"+
		"\u0170\u0001\u0000\u0000\u0000\u0173\u0176\u0001\u0000\u0000\u0000\u0174"+
		"\u0172\u0001\u0000\u0000\u0000\u0174\u0175\u0001\u0000\u0000\u0000\u0175"+
		"-\u0001\u0000\u0000\u0000\u0176\u0174\u0001\u0000\u0000\u0000\u0177\u017b"+
		"\u00030\u0018\u0000\u0178\u017b\u00032\u0019\u0000\u0179\u017b\u00034"+
		"\u001a\u0000\u017a\u0177\u0001\u0000\u0000\u0000\u017a\u0178\u0001\u0000"+
		"\u0000\u0000\u017a\u0179\u0001\u0000\u0000\u0000\u017b/\u0001\u0000\u0000"+
		"\u0000\u017c\u017d\u0003b1\u0000\u017d\u017f\u00054\u0000\u0000\u017e"+
		"\u0180\u0003n7\u0000\u017f\u017e\u0001\u0000\u0000\u0000\u017f\u0180\u0001"+
		"\u0000\u0000\u0000\u0180\u0181\u0001\u0000\u0000\u0000\u0181\u0182\u0005"+
		"5\u0000\u0000\u0182\u018b\u0001\u0000\u0000\u0000\u0183\u0184\u0003b1"+
		"\u0000\u0184\u0186\u00050\u0000\u0000\u0185\u0187\u0003n7\u0000\u0186"+
		"\u0185\u0001\u0000\u0000\u0000\u0186\u0187\u0001\u0000\u0000\u0000\u0187"+
		"\u0188\u0001\u0000\u0000\u0000\u0188\u0189\u00051\u0000\u0000\u0189\u018b"+
		"\u0001\u0000\u0000\u0000\u018a\u017c\u0001\u0000\u0000\u0000\u018a\u0183"+
		"\u0001\u0000\u0000\u0000\u018b1\u0001\u0000\u0000\u0000\u018c\u018d\u0003"+
		"b1\u0000\u018d\u018f\u00052\u0000\u0000\u018e\u0190\u0003p8\u0000\u018f"+
		"\u018e\u0001\u0000\u0000\u0000\u018f\u0190\u0001\u0000\u0000\u0000\u0190"+
		"\u0191\u0001\u0000\u0000\u0000\u0191\u0192\u00051\u0000\u0000\u01923\u0001"+
		"\u0000\u0000\u0000\u0193\u0194\u0003b1\u0000\u01945\u0001\u0000\u0000"+
		"\u0000\u0195\u0196\u0005,\u0000\u0000\u0196\u019b\u0003b1\u0000\u0197"+
		"\u0198\u00052\u0000\u0000\u0198\u0199\u0003`0\u0000\u0199\u019a\u0005"+
		"3\u0000\u0000\u019a\u019c\u0001\u0000\u0000\u0000\u019b\u0197\u0001\u0000"+
		"\u0000\u0000\u019b\u019c\u0001\u0000\u0000\u0000\u019c\u019d\u0001\u0000"+
		"\u0000\u0000\u019d\u019e\u0005F\u0000\u0000\u019e\u01a0\u0003\\.\u0000"+
		"\u019f\u01a1\u0005;\u0000\u0000\u01a0\u019f\u0001\u0000\u0000\u0000\u01a0"+
		"\u01a1\u0001\u0000\u0000\u0000\u01a17\u0001\u0000\u0000\u0000\u01a2\u01a3"+
		"\u0005#\u0000\u0000\u01a3\u01a8\u0003b1\u0000\u01a4\u01a5\u00052\u0000"+
		"\u0000\u01a5\u01a6\u0003`0\u0000\u01a6\u01a7\u00053\u0000\u0000\u01a7"+
		"\u01a9\u0001\u0000\u0000\u0000\u01a8\u01a4\u0001\u0000\u0000\u0000\u01a8"+
		"\u01a9\u0001\u0000\u0000\u0000\u01a9\u01aa\u0001\u0000\u0000\u0000\u01aa"+
		"\u01ac\u00050\u0000\u0000\u01ab\u01ad\u0003n7\u0000\u01ac\u01ab\u0001"+
		"\u0000\u0000\u0000\u01ac\u01ad\u0001\u0000\u0000\u0000\u01ad\u01ae\u0001"+
		"\u0000\u0000\u0000\u01ae\u01b1\u00051\u0000\u0000\u01af\u01b0\u0005A\u0000"+
		"\u0000\u01b0\u01b2\u0003\\.\u0000\u01b1\u01af\u0001\u0000\u0000\u0000"+
		"\u01b1\u01b2\u0001\u0000\u0000\u0000\u01b2\u01b3\u0001\u0000\u0000\u0000"+
		"\u01b3\u01b5\u0003v;\u0000\u01b4\u01b6\u0005;\u0000\u0000\u01b5\u01b4"+
		"\u0001\u0000\u0000\u0000\u01b5\u01b6\u0001\u0000\u0000\u0000\u01b69\u0001"+
		"\u0000\u0000\u0000\u01b7\u01b8\u0005\u000e\u0000\u0000\u01b8\u01ba\u0005"+
		"0\u0000\u0000\u01b9\u01bb\u0003n7\u0000\u01ba\u01b9\u0001\u0000\u0000"+
		"\u0000\u01ba\u01bb\u0001\u0000\u0000\u0000\u01bb\u01bc\u0001\u0000\u0000"+
		"\u0000\u01bc\u01bf\u00051\u0000\u0000\u01bd\u01be\u0005A\u0000\u0000\u01be"+
		"\u01c0\u0003\\.\u0000\u01bf\u01bd\u0001\u0000\u0000\u0000\u01bf\u01c0"+
		"\u0001\u0000\u0000\u0000\u01c0\u01c1\u0001\u0000\u0000\u0000\u01c1\u01c3"+
		"\u0003v;\u0000\u01c2\u01c4\u0005;\u0000\u0000\u01c3\u01c2\u0001\u0000"+
		"\u0000\u0000\u01c3\u01c4\u0001\u0000\u0000\u0000\u01c4;\u0001\u0000\u0000"+
		"\u0000\u01c5\u01c6\u0005\u0010\u0000\u0000\u01c6\u01c7\u0005>\u0000\u0000"+
		"\u01c7\u01c8\u0003b1\u0000\u01c8\u01ca\u00050\u0000\u0000\u01c9\u01cb"+
		"\u0003n7\u0000\u01ca\u01c9\u0001\u0000\u0000\u0000\u01ca\u01cb\u0001\u0000"+
		"\u0000\u0000\u01cb\u01cc\u0001\u0000\u0000\u0000\u01cc\u01cf\u00051\u0000"+
		"\u0000\u01cd\u01ce\u0005A\u0000\u0000\u01ce\u01d0\u0003\\.\u0000\u01cf"+
		"\u01cd\u0001\u0000\u0000\u0000\u01cf\u01d0\u0001\u0000\u0000\u0000\u01d0"+
		"\u01d1\u0001\u0000\u0000\u0000\u01d1\u01d3\u0003v;\u0000\u01d2\u01d4\u0005"+
		";\u0000\u0000\u01d3\u01d2\u0001\u0000\u0000\u0000\u01d3\u01d4\u0001\u0000"+
		"\u0000\u0000\u01d4=\u0001\u0000\u0000\u0000\u01d5\u01d6\u0005\u0011\u0000"+
		"\u0000\u01d6\u01d7\u0005>\u0000\u0000\u01d7\u01d8\u0003b1\u0000\u01d8"+
		"\u01da\u00050\u0000\u0000\u01d9\u01db\u0003n7\u0000\u01da\u01d9\u0001"+
		"\u0000\u0000\u0000\u01da\u01db\u0001\u0000\u0000\u0000\u01db\u01dc\u0001"+
		"\u0000\u0000\u0000\u01dc\u01df\u00051\u0000\u0000\u01dd\u01de\u0005A\u0000"+
		"\u0000\u01de\u01e0\u0003\\.\u0000\u01df\u01dd\u0001\u0000\u0000\u0000"+
		"\u01df\u01e0\u0001\u0000\u0000\u0000\u01e0\u01e1\u0001\u0000\u0000\u0000"+
		"\u01e1\u01e3\u0003v;\u0000\u01e2\u01e4\u0005;\u0000\u0000\u01e3\u01e2"+
		"\u0001\u0000\u0000\u0000\u01e3\u01e4\u0001\u0000\u0000\u0000\u01e4?\u0001"+
		"\u0000\u0000\u0000\u01e5\u01e6\u0005\u0007\u0000\u0000\u01e6\u01e7\u0003"+
		"b1\u0000\u01e7\u01e9\u00050\u0000\u0000\u01e8\u01ea\u0003n7\u0000\u01e9"+
		"\u01e8\u0001\u0000\u0000\u0000\u01e9\u01ea\u0001\u0000\u0000\u0000\u01ea"+
		"\u01eb\u0001\u0000\u0000\u0000\u01eb\u01ed\u00051\u0000\u0000\u01ec\u01ee"+
		"\u0005;\u0000\u0000\u01ed\u01ec\u0001\u0000\u0000\u0000\u01ed\u01ee\u0001"+
		"\u0000\u0000\u0000\u01eeA\u0001\u0000\u0000\u0000\u01ef\u01f0\u0005\b"+
		"\u0000\u0000\u01f0\u01f1\u0003b1\u0000\u01f1\u01f3\u00050\u0000\u0000"+
		"\u01f2\u01f4\u0003n7\u0000\u01f3\u01f2\u0001\u0000\u0000\u0000\u01f3\u01f4"+
		"\u0001\u0000\u0000\u0000\u01f4\u01f5\u0001\u0000\u0000\u0000\u01f5\u01f7"+
		"\u00051\u0000\u0000\u01f6\u01f8\u0005;\u0000\u0000\u01f7\u01f6\u0001\u0000"+
		"\u0000\u0000\u01f7\u01f8\u0001\u0000\u0000\u0000\u01f8C\u0001\u0000\u0000"+
		"\u0000\u01f9\u01fa\u0005\u0016\u0000\u0000\u01fa\u01fe\u00054\u0000\u0000"+
		"\u01fb\u01fd\u0003F#\u0000\u01fc\u01fb\u0001\u0000\u0000\u0000\u01fd\u0200"+
		"\u0001\u0000\u0000\u0000\u01fe\u01fc\u0001\u0000\u0000\u0000\u01fe\u01ff"+
		"\u0001\u0000\u0000\u0000\u01ff\u0201\u0001\u0000\u0000\u0000\u0200\u01fe"+
		"\u0001\u0000\u0000\u0000\u0201\u0203\u00055\u0000\u0000\u0202\u0204\u0005"+
		";\u0000\u0000\u0203\u0202\u0001\u0000\u0000\u0000\u0203\u0204\u0001\u0000"+
		"\u0000\u0000\u0204E\u0001\u0000\u0000\u0000\u0205\u0208\u0003H$\u0000"+
		"\u0206\u0208\u0003J%\u0000\u0207\u0205\u0001\u0000\u0000\u0000\u0207\u0206"+
		"\u0001\u0000\u0000\u0000\u0208G\u0001\u0000\u0000\u0000\u0209\u020a\u0003"+
		"b1\u0000\u020a\u020b\u0005<\u0000\u0000\u020b\u020d\u0003\\.\u0000\u020c"+
		"\u020e\u0005;\u0000\u0000\u020d\u020c\u0001\u0000\u0000\u0000\u020d\u020e"+
		"\u0001\u0000\u0000\u0000\u020eI\u0001\u0000\u0000\u0000\u020f\u0210\u0003"+
		"b1\u0000\u0210\u0211\u00052\u0000\u0000\u0211\u0212\u0003\\.\u0000\u0212"+
		"\u0213\u00053\u0000\u0000\u0213\u0214\u0005<\u0000\u0000\u0214\u0216\u0003"+
		"\\.\u0000\u0215\u0217\u0005;\u0000\u0000\u0216\u0215\u0001\u0000\u0000"+
		"\u0000\u0216\u0217\u0001\u0000\u0000\u0000\u0217K\u0001\u0000\u0000\u0000"+
		"\u0218\u0219\u0006&\uffff\uffff\u0000\u0219\u021a\u0005\f\u0000\u0000"+
		"\u021a\u0227\u0003L&\u000f\u021b\u0227\u0003N\'\u0000\u021c\u0227\u0003"+
		"P(\u0000\u021d\u0227\u0003T*\u0000\u021e\u0227\u0003V+\u0000\u021f\u0227"+
		"\u0003X,\u0000\u0220\u0227\u0003Z-\u0000\u0221\u0227\u0003b1\u0000\u0222"+
		"\u0223\u00050\u0000\u0000\u0223\u0224\u0003L&\u0000\u0224\u0225\u0005"+
		"1\u0000\u0000\u0225\u0227\u0001\u0000\u0000\u0000\u0226\u0218\u0001\u0000"+
		"\u0000\u0000\u0226\u021b\u0001\u0000\u0000\u0000\u0226\u021c\u0001\u0000"+
		"\u0000\u0000\u0226\u021d\u0001\u0000\u0000\u0000\u0226\u021e\u0001\u0000"+
		"\u0000\u0000\u0226\u021f\u0001\u0000\u0000\u0000\u0226\u0220\u0001\u0000"+
		"\u0000\u0000\u0226\u0221\u0001\u0000\u0000\u0000\u0226\u0222\u0001\u0000"+
		"\u0000\u0000\u0227\u025e\u0001\u0000\u0000\u0000\u0228\u0229\n\u0012\u0000"+
		"\u0000\u0229\u022a\u0007\u0001\u0000\u0000\u022a\u025d\u0003L&\u0013\u022b"+
		"\u022c\n\u0011\u0000\u0000\u022c\u022d\u0007\u0002\u0000\u0000\u022d\u025d"+
		"\u0003L&\u0012\u022e\u022f\n\u0010\u0000\u0000\u022f\u0230\u0007\u0003"+
		"\u0000\u0000\u0230\u025d\u0003L&\u0011\u0231\u0232\n\u000e\u0000\u0000"+
		"\u0232\u0233\u00058\u0000\u0000\u0233\u025d\u0003L&\u000f\u0234\u0235"+
		"\n\r\u0000\u0000\u0235\u0236\u0005\u0014\u0000\u0000\u0236\u025d\u0003"+
		"L&\u000e\u0237\u0238\n\u000b\u0000\u0000\u0238\u0239\u0007\u0004\u0000"+
		"\u0000\u0239\u025d\u0003L&\f\u023a\u023b\n\n\u0000\u0000\u023b\u023c\u0005"+
		"\u001f\u0000\u0000\u023c\u025d\u0003L&\u000b\u023d\u023e\n\t\u0000\u0000"+
		"\u023e\u023f\u0005 \u0000\u0000\u023f\u025d\u0003L&\n\u0240\u0241\n\u0017"+
		"\u0000\u0000\u0241\u0242\u00056\u0000\u0000\u0242\u025d\u0003b1\u0000"+
		"\u0243\u0248\n\u0016\u0000\u0000\u0244\u0245\u00052\u0000\u0000\u0245"+
		"\u0246\u0003p8\u0000\u0246\u0247\u00053\u0000\u0000\u0247\u0249\u0001"+
		"\u0000\u0000\u0000\u0248\u0244\u0001\u0000\u0000\u0000\u0248\u0249\u0001"+
		"\u0000\u0000\u0000\u0249\u024a\u0001\u0000\u0000\u0000\u024a\u024c\u0005"+
		"0\u0000\u0000\u024b\u024d\u0003t:\u0000\u024c\u024b\u0001\u0000\u0000"+
		"\u0000\u024c\u024d\u0001\u0000\u0000\u0000\u024d\u024e\u0001\u0000\u0000"+
		"\u0000\u024e\u025d\u00051\u0000\u0000\u024f\u0250\n\u0015\u0000\u0000"+
		"\u0250\u0251\u00052\u0000\u0000\u0251\u0252\u0003L&\u0000\u0252\u0253"+
		"\u00053\u0000\u0000\u0253\u025d\u0001\u0000\u0000\u0000\u0254\u0255\n"+
		"\u0014\u0000\u0000\u0255\u0256\u0005.\u0000\u0000\u0256\u025d\u0003\\"+
		".\u0000\u0257\u0258\n\u0013\u0000\u0000\u0258\u025d\u00059\u0000\u0000"+
		"\u0259\u025a\n\f\u0000\u0000\u025a\u025b\u0005\u0018\u0000\u0000\u025b"+
		"\u025d\u0003\\.\u0000\u025c\u0228\u0001\u0000\u0000\u0000\u025c\u022b"+
		"\u0001\u0000\u0000\u0000\u025c\u022e\u0001\u0000\u0000\u0000\u025c\u0231"+
		"\u0001\u0000\u0000\u0000\u025c\u0234\u0001\u0000\u0000\u0000\u025c\u0237"+
		"\u0001\u0000\u0000\u0000\u025c\u023a\u0001\u0000\u0000\u0000\u025c\u023d"+
		"\u0001\u0000\u0000\u0000\u025c\u0240\u0001\u0000\u0000\u0000\u025c\u0243"+
		"\u0001\u0000\u0000\u0000\u025c\u024f\u0001\u0000\u0000\u0000\u025c\u0254"+
		"\u0001\u0000\u0000\u0000\u025c\u0257\u0001\u0000\u0000\u0000\u025c\u0259"+
		"\u0001\u0000\u0000\u0000\u025d\u0260\u0001\u0000\u0000\u0000\u025e\u025c"+
		"\u0001\u0000\u0000\u0000\u025e\u025f\u0001\u0000\u0000\u0000\u025fM\u0001"+
		"\u0000\u0000\u0000\u0260\u025e\u0001\u0000\u0000\u0000\u0261\u0262\u0005"+
		"\u0017\u0000\u0000\u0262\u0263\u0003L&\u0000\u0263\u0266\u0003v;\u0000"+
		"\u0264\u0265\u0005\u001b\u0000\u0000\u0265\u0267\u0003v;\u0000\u0266\u0264"+
		"\u0001\u0000\u0000\u0000\u0266\u0267\u0001\u0000\u0000\u0000\u0267\u0269"+
		"\u0001\u0000\u0000\u0000\u0268\u026a\u0005;\u0000\u0000\u0269\u0268\u0001"+
		"\u0000\u0000\u0000\u0269\u026a\u0001\u0000\u0000\u0000\u026aO\u0001\u0000"+
		"\u0000\u0000\u026b\u026c\u0005\u0019\u0000\u0000\u026c\u0270\u0003v;\u0000"+
		"\u026d\u026f\u0003R)\u0000\u026e\u026d\u0001\u0000\u0000\u0000\u026f\u0272"+
		"\u0001\u0000\u0000\u0000\u0270\u026e\u0001\u0000\u0000\u0000\u0270\u0271"+
		"\u0001\u0000\u0000\u0000\u0271\u0275\u0001\u0000\u0000\u0000\u0272\u0270"+
		"\u0001\u0000\u0000\u0000\u0273\u0274\u0005\u001b\u0000\u0000\u0274\u0276"+
		"\u0003v;\u0000\u0275\u0273\u0001\u0000\u0000\u0000\u0275\u0276\u0001\u0000"+
		"\u0000\u0000\u0276\u0278\u0001\u0000\u0000\u0000\u0277\u0279\u0005;\u0000"+
		"\u0000\u0278\u0277\u0001\u0000\u0000\u0000\u0278\u0279\u0001\u0000\u0000"+
		"\u0000\u0279Q\u0001\u0000\u0000\u0000\u027a\u027b\u0005\u001a\u0000\u0000"+
		"\u027b\u027c\u0003\\.\u0000\u027c\u027d\u0003v;\u0000\u027dS\u0001\u0000"+
		"\u0000\u0000\u027e\u0280\u0005:\u0000\u0000\u027f\u027e\u0001\u0000\u0000"+
		"\u0000\u027f\u0280\u0001\u0000\u0000\u0000\u0280\u0281\u0001\u0000\u0000"+
		"\u0000\u0281\u0283\u0005C\u0000\u0000\u0282\u0284\u0003n7\u0000\u0283"+
		"\u0282\u0001\u0000\u0000\u0000\u0283\u0284\u0001\u0000\u0000\u0000\u0284"+
		"\u0285\u0001\u0000\u0000\u0000\u0285\u0288\u0005C\u0000\u0000\u0286\u0287"+
		"\u0005A\u0000\u0000\u0287\u0289\u0003\\.\u0000\u0288\u0286\u0001\u0000"+
		"\u0000\u0000\u0288\u0289\u0001\u0000\u0000\u0000\u0289\u028a\u0001\u0000"+
		"\u0000\u0000\u028a\u028b\u0003v;\u0000\u028bU\u0001\u0000\u0000\u0000"+
		"\u028c\u028d\u0003\\.\u0000\u028d\u028f\u00054\u0000\u0000\u028e\u0290"+
		"\u0003r9\u0000\u028f\u028e\u0001\u0000\u0000\u0000\u028f\u0290\u0001\u0000"+
		"\u0000\u0000\u0290\u0291\u0001\u0000\u0000\u0000\u0291\u0292\u00055\u0000"+
		"\u0000\u0292W\u0001\u0000\u0000\u0000\u0293\u0297\u00052\u0000\u0000\u0294"+
		"\u0296\u0003L&\u0000\u0295\u0294\u0001\u0000\u0000\u0000\u0296\u0299\u0001"+
		"\u0000\u0000\u0000\u0297\u0295\u0001\u0000\u0000\u0000\u0297\u0298\u0001"+
		"\u0000\u0000\u0000\u0298\u029a\u0001\u0000\u0000\u0000\u0299\u0297\u0001"+
		"\u0000\u0000\u0000\u029a\u029b\u00053\u0000\u0000\u029bY\u0001\u0000\u0000"+
		"\u0000\u029c\u02a2\u0005Z\u0000\u0000\u029d\u02a2\u0005[\u0000\u0000\u029e"+
		"\u02a2\u0005\\\u0000\u0000\u029f\u02a2\u0005]\u0000\u0000\u02a0\u02a2"+
		"\u0005\u001d\u0000\u0000\u02a1\u029c\u0001\u0000\u0000\u0000\u02a1\u029d"+
		"\u0001\u0000\u0000\u0000\u02a1\u029e\u0001\u0000\u0000\u0000\u02a1\u029f"+
		"\u0001\u0000\u0000\u0000\u02a1\u02a0\u0001\u0000\u0000\u0000\u02a2[\u0001"+
		"\u0000\u0000\u0000\u02a3\u02a4\u0006.\uffff\uffff\u0000\u02a4\u02a5\u0005"+
		"0\u0000\u0000\u02a5\u02a6\u0003\\.\u0000\u02a6\u02a7\u00051\u0000\u0000"+
		"\u02a7\u02b5\u0001\u0000\u0000\u0000\u02a8\u02a9\u00052\u0000\u0000\u02a9"+
		"\u02aa\u0003\\.\u0000\u02aa\u02ab\u0005;\u0000\u0000\u02ab\u02ac\u0005"+
		"[\u0000\u0000\u02ac\u02ad\u00053\u0000\u0000\u02ad\u02b5\u0001\u0000\u0000"+
		"\u0000\u02ae\u02b5\u0003$\u0012\u0000\u02af\u02b5\u0003&\u0013\u0000\u02b0"+
		"\u02b5\u0003(\u0014\u0000\u02b1\u02b5\u0003*\u0015\u0000\u02b2\u02b5\u0003"+
		"^/\u0000\u02b3\u02b5\u0003b1\u0000\u02b4\u02a3\u0001\u0000\u0000\u0000"+
		"\u02b4\u02a8\u0001\u0000\u0000\u0000\u02b4\u02ae\u0001\u0000\u0000\u0000"+
		"\u02b4\u02af\u0001\u0000\u0000\u0000\u02b4\u02b0\u0001\u0000\u0000\u0000"+
		"\u02b4\u02b1\u0001\u0000\u0000\u0000\u02b4\u02b2\u0001\u0000\u0000\u0000"+
		"\u02b4\u02b3\u0001\u0000\u0000\u0000\u02b5\u02c2\u0001\u0000\u0000\u0000"+
		"\u02b6\u02b7\n\n\u0000\u0000\u02b7\u02b8\u00052\u0000\u0000\u02b8\u02b9"+
		"\u0003p8\u0000\u02b9\u02ba\u00053\u0000\u0000\u02ba\u02c1\u0001\u0000"+
		"\u0000\u0000\u02bb\u02bc\n\t\u0000\u0000\u02bc\u02bd\u00056\u0000\u0000"+
		"\u02bd\u02c1\u0003b1\u0000\u02be\u02bf\n\u0003\u0000\u0000\u02bf\u02c1"+
		"\u00059\u0000\u0000\u02c0\u02b6\u0001\u0000\u0000\u0000\u02c0\u02bb\u0001"+
		"\u0000\u0000\u0000\u02c0\u02be\u0001\u0000\u0000\u0000\u02c1\u02c4\u0001"+
		"\u0000\u0000\u0000\u02c2\u02c0\u0001\u0000\u0000\u0000\u02c2\u02c3\u0001"+
		"\u0000\u0000\u0000\u02c3]\u0001\u0000\u0000\u0000\u02c4\u02c2\u0001\u0000"+
		"\u0000\u0000\u02c5\u02c6\u0005Y\u0000\u0000\u02c6_\u0001\u0000\u0000\u0000"+
		"\u02c7\u02cc\u0003^/\u0000\u02c8\u02c9\u00057\u0000\u0000\u02c9\u02cb"+
		"\u0003^/\u0000\u02ca\u02c8\u0001\u0000\u0000\u0000\u02cb\u02ce\u0001\u0000"+
		"\u0000\u0000\u02cc\u02ca\u0001\u0000\u0000\u0000\u02cc\u02cd\u0001\u0000"+
		"\u0000\u0000\u02cda\u0001\u0000\u0000\u0000\u02ce\u02cc\u0001\u0000\u0000"+
		"\u0000\u02cf\u02d2\u0005X\u0000\u0000\u02d0\u02d2\u0003x<\u0000\u02d1"+
		"\u02cf\u0001\u0000\u0000\u0000\u02d1\u02d0\u0001\u0000\u0000\u0000\u02d2"+
		"c\u0001\u0000\u0000\u0000\u02d3\u02d5\u0003b1\u0000\u02d4\u02d6\u0005"+
		"9\u0000\u0000\u02d5\u02d4\u0001\u0000\u0000\u0000\u02d5\u02d6\u0001\u0000"+
		"\u0000\u0000\u02d6\u02d7\u0001\u0000\u0000\u0000\u02d7\u02d9\u0005<\u0000"+
		"\u0000\u02d8\u02da\u0003\\.\u0000\u02d9\u02d8\u0001\u0000\u0000\u0000"+
		"\u02d9\u02da\u0001\u0000\u0000\u0000\u02dae\u0001\u0000\u0000\u0000\u02db"+
		"\u02dc\u0003b1\u0000\u02dc\u02dd\u0005<\u0000\u0000\u02dd\u02de\u0003"+
		"L&\u0000\u02deg\u0001\u0000\u0000\u0000\u02df\u02e0\u0003b1\u0000\u02e0"+
		"\u02e1\u0005F\u0000\u0000\u02e1\u02e2\u0003L&\u0000\u02e2i\u0001\u0000"+
		"\u0000\u0000\u02e3\u02e6\u0003L&\u0000\u02e4\u02e6\u0003h4\u0000\u02e5"+
		"\u02e3\u0001\u0000\u0000\u0000\u02e5\u02e4\u0001\u0000\u0000\u0000\u02e6"+
		"k\u0001\u0000\u0000\u0000\u02e7\u02ec\u0003b1\u0000\u02e8\u02e9\u0005"+
		"7\u0000\u0000\u02e9\u02eb\u0003b1\u0000\u02ea\u02e8\u0001\u0000\u0000"+
		"\u0000\u02eb\u02ee\u0001\u0000\u0000\u0000\u02ec\u02ea\u0001\u0000\u0000"+
		"\u0000\u02ec\u02ed\u0001\u0000\u0000\u0000\u02edm\u0001\u0000\u0000\u0000"+
		"\u02ee\u02ec\u0001\u0000\u0000\u0000\u02ef\u02f4\u0003d2\u0000\u02f0\u02f1"+
		"\u00057\u0000\u0000\u02f1\u02f3\u0003d2\u0000\u02f2\u02f0\u0001\u0000"+
		"\u0000\u0000\u02f3\u02f6\u0001\u0000\u0000\u0000\u02f4\u02f2\u0001\u0000"+
		"\u0000\u0000\u02f4\u02f5\u0001\u0000\u0000\u0000\u02f5o\u0001\u0000\u0000"+
		"\u0000\u02f6\u02f4\u0001\u0000\u0000\u0000\u02f7\u02fc\u0003\\.\u0000"+
		"\u02f8\u02f9\u00057\u0000\u0000\u02f9\u02fb\u0003\\.\u0000\u02fa\u02f8"+
		"\u0001\u0000\u0000\u0000\u02fb\u02fe\u0001\u0000\u0000\u0000\u02fc\u02fa"+
		"\u0001\u0000\u0000\u0000\u02fc\u02fd\u0001\u0000\u0000\u0000\u02fdq\u0001"+
		"\u0000\u0000\u0000\u02fe\u02fc\u0001\u0000\u0000\u0000\u02ff\u0304\u0003"+
		"f3\u0000\u0300\u0301\u00057\u0000\u0000\u0301\u0303\u0003f3\u0000\u0302"+
		"\u0300\u0001\u0000\u0000\u0000\u0303\u0306\u0001\u0000\u0000\u0000\u0304"+
		"\u0302\u0001\u0000\u0000\u0000\u0304\u0305\u0001\u0000\u0000\u0000\u0305"+
		"s\u0001\u0000\u0000\u0000\u0306\u0304\u0001\u0000\u0000\u0000\u0307\u030c"+
		"\u0003j5\u0000\u0308\u0309\u00057\u0000\u0000\u0309\u030b\u0003j5\u0000"+
		"\u030a\u0308\u0001\u0000\u0000\u0000\u030b\u030e\u0001\u0000\u0000\u0000"+
		"\u030c\u030a\u0001\u0000\u0000\u0000\u030c\u030d\u0001\u0000\u0000\u0000"+
		"\u030du\u0001\u0000\u0000\u0000\u030e\u030c\u0001\u0000\u0000\u0000\u030f"+
		"\u0313\u00054\u0000\u0000\u0310\u0312\u0003\u0002\u0001\u0000\u0311\u0310"+
		"\u0001\u0000\u0000\u0000\u0312\u0315\u0001\u0000\u0000\u0000\u0313\u0311"+
		"\u0001\u0000\u0000\u0000\u0313\u0314\u0001\u0000\u0000\u0000\u0314\u0316"+
		"\u0001\u0000\u0000\u0000\u0315\u0313\u0001\u0000\u0000\u0000\u0316\u0317"+
		"\u00055\u0000\u0000\u0317w\u0001\u0000\u0000\u0000\u0318\u0319\u0007\u0005"+
		"\u0000\u0000\u0319y\u0001\u0000\u0000\u0000c}\u0093\u0096\u009b\u00a1"+
		"\u00a9\u00ae\u00b2\u00b7\u00ba\u00c0\u00c6\u00cc\u00d4\u00dd\u00e2\u00e7"+
		"\u00f2\u00f7\u00fc\u010c\u0112\u0116\u011a\u0120\u0124\u012c\u0130\u013a"+
		"\u0140\u0142\u014a\u014e\u0152\u0159\u015d\u0165\u0169\u016d\u0174\u017a"+
		"\u017f\u0186\u018a\u018f\u019b\u01a0\u01a8\u01ac\u01b1\u01b5\u01ba\u01bf"+
		"\u01c3\u01ca\u01cf\u01d3\u01da\u01df\u01e3\u01e9\u01ed\u01f3\u01f7\u01fe"+
		"\u0203\u0207\u020d\u0216\u0226\u0248\u024c\u025c\u025e\u0266\u0269\u0270"+
		"\u0275\u0278\u027f\u0283\u0288\u028f\u0297\u02a1\u02b4\u02c0\u02c2\u02cc"+
		"\u02d1\u02d5\u02d9\u02e5\u02ec\u02f4\u02fc\u0304\u030c\u0313";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
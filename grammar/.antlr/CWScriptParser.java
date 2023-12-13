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
		D_COLON=61, AT=62, AMP=63, ARROW=64, FAT_ARROW=65, BAR=66, S_QUOTE=67, 
		D_QUOTE=68, EQ=69, EQ_EQ=70, NEQ=71, PLUS=72, PLUS_EQ=73, MINUS=74, MINUS_EQ=75, 
		MUL=76, MUL_EQ=77, DIV=78, DIV_EQ=79, MOD=80, MOD_EQ=81, LT=82, LT_EQ=83, 
		GT=84, GT_EQ=85, POW=86, BoolLiteral=87, HashIdent=88, DollarIdent=89, 
		Ident=90, TypeVar=91, StringLiteral=92, IntLiteral=93, DecLiteral=94, 
		CWSPEC_LINE_COMMENT=95, CWSPEC_BLOCK_COMMENT=96, LINE_COMMENT=97, BLOCK_COMMENT=98, 
		WS=99;
	public static final int
		RULE_sourceFile = 0, RULE_cwspec = 1, RULE_stmt = 2, RULE_importStmt = 3, 
		RULE_letStmt = 4, RULE_binding_ = 5, RULE_constStmt = 6, RULE_assignStmt = 7, 
		RULE_memberAssignStmt = 8, RULE_indexAssignStmt = 9, RULE_tryCatchElseStmt = 10, 
		RULE_ifStmt = 11, RULE_returnStmt = 12, RULE_failStmt = 13, RULE_forStmt = 14, 
		RULE_execStmt = 15, RULE_instantiateStmt = 16, RULE_emitStmt = 17, RULE_defn = 18, 
		RULE_contractDefn = 19, RULE_interfaceDefn = 20, RULE_structDefn = 21, 
		RULE_tupleDefn = 22, RULE_unitDefn = 23, RULE_enumDefn = 24, RULE_enumVariantDefnList = 25, 
		RULE_enumVariantDefn = 26, RULE_typeAliasDefn = 27, RULE_fnDefn = 28, 
		RULE_instantiateDefn = 29, RULE_execDefn = 30, RULE_execTupleDefn = 31, 
		RULE_queryDefn = 32, RULE_queryTupleDefn = 33, RULE_errorDefn = 34, RULE_eventDefn = 35, 
		RULE_stateBlockDefn = 36, RULE_stateDefn = 37, RULE_stateItemDefn = 38, 
		RULE_stateMapDefn = 39, RULE_exprStmt = 40, RULE_expr = 41, RULE_ifExpr_ = 42, 
		RULE_tryCatchElseExpr_ = 43, RULE_catchClause = 44, RULE_closureExpr_ = 45, 
		RULE_structExpr_ = 46, RULE_tupleExpr_ = 47, RULE_returnExpr_ = 48, RULE_failExpr_ = 49, 
		RULE_literal = 50, RULE_stringLit = 51, RULE_intLit = 52, RULE_decLit = 53, 
		RULE_boolLit = 54, RULE_noneLit = 55, RULE_typeExpr = 56, RULE_typeVar = 57, 
		RULE_ident = 58, RULE_param = 59, RULE_field = 60, RULE_namedArg = 61, 
		RULE_arg = 62, RULE_identList = 63, RULE_parenParamList = 64, RULE_tupleParamList = 65, 
		RULE_braceParamList = 66, RULE_barParamList = 67, RULE_brackTypeParamList = 68, 
		RULE_brackTypeExprList = 69, RULE_braceFieldList = 70, RULE_typeExprList = 71, 
		RULE_block = 72, RULE_blockOrExpr = 73, RULE_reservedKeyword = 74;
	private static String[] makeRuleNames() {
		return new String[] {
			"sourceFile", "cwspec", "stmt", "importStmt", "letStmt", "binding_", 
			"constStmt", "assignStmt", "memberAssignStmt", "indexAssignStmt", "tryCatchElseStmt", 
			"ifStmt", "returnStmt", "failStmt", "forStmt", "execStmt", "instantiateStmt", 
			"emitStmt", "defn", "contractDefn", "interfaceDefn", "structDefn", "tupleDefn", 
			"unitDefn", "enumDefn", "enumVariantDefnList", "enumVariantDefn", "typeAliasDefn", 
			"fnDefn", "instantiateDefn", "execDefn", "execTupleDefn", "queryDefn", 
			"queryTupleDefn", "errorDefn", "eventDefn", "stateBlockDefn", "stateDefn", 
			"stateItemDefn", "stateMapDefn", "exprStmt", "expr", "ifExpr_", "tryCatchElseExpr_", 
			"catchClause", "closureExpr_", "structExpr_", "tupleExpr_", "returnExpr_", 
			"failExpr_", "literal", "stringLit", "intLit", "decLit", "boolLit", "noneLit", 
			"typeExpr", "typeVar", "ident", "param", "field", "namedArg", "arg", 
			"identList", "parenParamList", "tupleParamList", "braceParamList", "barParamList", 
			"brackTypeParamList", "brackTypeExprList", "braceFieldList", "typeExprList", 
			"block", "blockOrExpr", "reservedKeyword"
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
			"'?'", "'!'", "';'", "':'", "'::'", "'@'", "'&'", "'->'", "'=>'", "'|'", 
			"'''", "'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", 
			"'*='", "'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
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
			"D_QUEST", "QUEST", "BANG", "SEMI", "COLON", "D_COLON", "AT", "AMP", 
			"ARROW", "FAT_ARROW", "BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", 
			"PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", 
			"MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "BoolLiteral", 
			"HashIdent", "DollarIdent", "Ident", "TypeVar", "StringLiteral", "IntLiteral", 
			"DecLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", 
			"BLOCK_COMMENT", "WS"
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
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289708118621806076L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 2145386497L) != 0)) {
				{
				{
				setState(150);
				((SourceFileContext)_localctx).stmt = stmt();
				((SourceFileContext)_localctx).stmts.add(((SourceFileContext)_localctx).stmt);
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(156);
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
	public static class CwspecContext extends ParserRuleContext {
		public TerminalNode CWSPEC_LINE_COMMENT() { return getToken(CWScriptParser.CWSPEC_LINE_COMMENT, 0); }
		public TerminalNode CWSPEC_BLOCK_COMMENT() { return getToken(CWScriptParser.CWSPEC_BLOCK_COMMENT, 0); }
		public CwspecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cwspec; }
	}

	public final CwspecContext cwspec() throws RecognitionException {
		CwspecContext _localctx = new CwspecContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_cwspec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			_la = _input.LA(1);
			if ( !(_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) ) {
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
			setState(176);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(160);
				importStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
				defn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(162);
				letStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(163);
				constStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(164);
				assignStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(165);
				memberAssignStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(166);
				indexAssignStmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(167);
				ifStmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(168);
				tryCatchElseStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(169);
				forStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(170);
				execStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(171);
				instantiateStmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(172);
				emitStmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(173);
				failStmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(174);
				returnStmt();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(175);
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
		public IdentListContext items;
		public StringLitContext src;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public StringLitContext stringLit() {
			return getRuleContext(StringLitContext.class,0);
		}
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
		enterRule(_localctx, 6, RULE_importStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(IMPORT);
			setState(179);
			match(LBRACE);
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 7L) != 0)) {
				{
				setState(180);
				((ImportStmtContext)_localctx).items = identList();
				}
			}

			setState(183);
			match(RBRACE);
			setState(184);
			match(FROM);
			{
			setState(185);
			((ImportStmtContext)_localctx).src = stringLit();
			}
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(186);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public LetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt; }
	}

	public final LetStmtContext letStmt() throws RecognitionException {
		LetStmtContext _localctx = new LetStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_letStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(189);
				((LetStmtContext)_localctx).spec = cwspec();
				}
			}

			setState(192);
			match(LET);
			{
			setState(193);
			((LetStmtContext)_localctx).binding = binding_();
			}
			{
			setState(194);
			match(EQ);
			setState(195);
			((LetStmtContext)_localctx).value = expr(0);
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
		enterRule(_localctx, 10, RULE_binding_);
		int _la;
		try {
			setState(215);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
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
			case STRUCT:
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
			case EMIT:
			case HashIdent:
			case DollarIdent:
			case Ident:
				_localctx = new IdentBindingContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(200);
				((IdentBindingContext)_localctx).name = ident();
				}
				setState(203);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(201);
					match(COLON);
					setState(202);
					((IdentBindingContext)_localctx).ty = typeExpr(0);
					}
				}

				}
				break;
			case LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(205);
				match(LBRACK);
				setState(207);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 7L) != 0)) {
					{
					setState(206);
					((TupleBindingContext)_localctx).names = identList();
					}
				}

				setState(209);
				match(RBRACK);
				}
				break;
			case LBRACE:
				_localctx = new StructBindingContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(210);
				match(LBRACE);
				setState(212);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 7L) != 0)) {
					{
					setState(211);
					((StructBindingContext)_localctx).names = identList();
					}
				}

				setState(214);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 12, RULE_constStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(217);
				((ConstStmtContext)_localctx).spec = cwspec();
				}
			}

			setState(220);
			match(CONST);
			{
			setState(221);
			((ConstStmtContext)_localctx).name = ident();
			}
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(222);
				match(COLON);
				setState(223);
				((ConstStmtContext)_localctx).ty = typeExpr(0);
				}
			}

			{
			setState(226);
			match(EQ);
			setState(227);
			((ConstStmtContext)_localctx).value = expr(0);
			}
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(229);
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
		enterRule(_localctx, 14, RULE_assignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(232);
			((AssignStmtContext)_localctx).name = ident();
			}
			setState(233);
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
			setState(234);
			((AssignStmtContext)_localctx).value = expr(0);
			}
			setState(236);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(235);
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
		enterRule(_localctx, 16, RULE_memberAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(238);
			((MemberAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(239);
			match(DOT);
			{
			setState(240);
			((MemberAssignStmtContext)_localctx).memberName = ident();
			}
			setState(241);
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
			setState(242);
			((MemberAssignStmtContext)_localctx).value = expr(0);
			}
			setState(244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(243);
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
		enterRule(_localctx, 18, RULE_indexAssignStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(246);
			((IndexAssignStmtContext)_localctx).obj = expr(0);
			}
			setState(247);
			match(LBRACK);
			setState(248);
			((IndexAssignStmtContext)_localctx).index = expr(0);
			setState(249);
			match(RBRACK);
			setState(250);
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
			setState(251);
			((IndexAssignStmtContext)_localctx).value = expr(0);
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(252);
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
		enterRule(_localctx, 20, RULE_tryCatchElseStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			tryCatchElseExpr_();
			setState(257);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(256);
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
		enterRule(_localctx, 22, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			ifExpr_();
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(260);
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
		enterRule(_localctx, 24, RULE_returnStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(263);
			returnExpr_();
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(264);
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
		enterRule(_localctx, 26, RULE_failStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			failExpr_();
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(268);
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
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_forStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(FOR);
			{
			setState(272);
			((ForStmtContext)_localctx).binding = binding_();
			}
			setState(273);
			match(IN);
			{
			setState(274);
			((ForStmtContext)_localctx).iter = expr(0);
			}
			setState(275);
			((ForStmtContext)_localctx).body = block();
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(276);
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
		enterRule(_localctx, 30, RULE_execStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(EXEC_NOW);
			setState(280);
			((ExecStmtContext)_localctx).value = expr(0);
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
		enterRule(_localctx, 32, RULE_instantiateStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			match(INSTANTIATE_NOW);
			setState(285);
			((InstantiateStmtContext)_localctx).value = expr(0);
			setState(287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(286);
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
		enterRule(_localctx, 34, RULE_emitStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(EMIT);
			setState(290);
			((EmitStmtContext)_localctx).value = expr(0);
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
		public DefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defn; }
	}

	public final DefnContext defn() throws RecognitionException {
		DefnContext _localctx = new DefnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_defn);
		try {
			setState(310);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(294);
				contractDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(295);
				interfaceDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(296);
				structDefn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(297);
				tupleDefn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(298);
				unitDefn();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(299);
				enumDefn();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(300);
				typeAliasDefn();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(301);
				fnDefn();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(302);
				instantiateDefn();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(303);
				execDefn();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(304);
				execTupleDefn();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(305);
				queryDefn();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(306);
				queryTupleDefn();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(307);
				errorDefn();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(308);
				eventDefn();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(309);
				stateBlockDefn();
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 38, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(312);
				((ContractDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(315);
			match(CONTRACT);
			{
			setState(316);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(319);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(317);
				match(EXTENDS);
				{
				setState(318);
				((ContractDefnContext)_localctx).base = typeExpr(0);
				}
				}
			}

			setState(323);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(321);
				match(IMPLEMENTS);
				{
				setState(322);
				((ContractDefnContext)_localctx).interfaces = typeExprList();
				}
				}
			}

			{
			setState(325);
			((ContractDefnContext)_localctx).body = block();
			}
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(326);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 40, RULE_interfaceDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(329);
				((InterfaceDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(332);
			match(INTERFACE);
			{
			setState(333);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(336);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(334);
				match(EXTENDS);
				{
				setState(335);
				((InterfaceDefnContext)_localctx).baseInterfaces = typeExprList();
				}
				}
			}

			{
			setState(338);
			((InterfaceDefnContext)_localctx).body = block();
			}
			setState(340);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(339);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public StructDefnParenContext(StructDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructDefnBraceContext extends StructDefnContext {
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public BrackTypeParamListContext brackTypeParamList() {
			return getRuleContext(BrackTypeParamListContext.class,0);
		}
		public StructDefnBraceContext(StructDefnContext ctx) { copyFrom(ctx); }
	}

	public final StructDefnContext structDefn() throws RecognitionException {
		StructDefnContext _localctx = new StructDefnContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_structDefn);
		int _la;
		try {
			setState(366);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				_localctx = new StructDefnBraceContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(342);
					((StructDefnBraceContext)_localctx).spec = cwspec();
					}
				}

				setState(345);
				match(STRUCT);
				{
				setState(346);
				((StructDefnBraceContext)_localctx).name = ident();
				}
				setState(348);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(347);
					((StructDefnBraceContext)_localctx).typeParams = brackTypeParamList();
					}
				}

				{
				setState(350);
				((StructDefnBraceContext)_localctx).fields = braceParamList();
				}
				setState(352);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
				case 1:
					{
					setState(351);
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
				setState(355);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(354);
					((StructDefnParenContext)_localctx).spec = cwspec();
					}
				}

				setState(357);
				match(STRUCT);
				{
				setState(358);
				((StructDefnParenContext)_localctx).name = ident();
				}
				setState(360);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACK) {
					{
					setState(359);
					((StructDefnParenContext)_localctx).typeParams = brackTypeParamList();
					}
				}

				{
				setState(362);
				((StructDefnParenContext)_localctx).fields = parenParamList();
				}
				setState(364);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(363);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 44, RULE_tupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(368);
				((TupleDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(371);
			match(TUPLE);
			{
			setState(372);
			((TupleDefnContext)_localctx).name = ident();
			}
			setState(374);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(373);
				((TupleDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			setState(376);
			match(LPAREN);
			{
			setState(377);
			((TupleDefnContext)_localctx).elements = brackTypeExprList();
			}
			setState(378);
			match(RPAREN);
			setState(380);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				{
				setState(379);
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
		public CwspecContext spec;
		public BrackTypeParamListContext typeParams;
		public IdentContext name;
		public TerminalNode UNIT() { return getToken(CWScriptParser.UNIT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CWScriptParser.SEMI, 0); }
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 46, RULE_unitDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(382);
				((UnitDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(385);
			match(UNIT);
			setState(387);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(386);
				((UnitDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			{
			setState(389);
			((UnitDefnContext)_localctx).name = ident();
			}
			setState(391);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				{
				setState(390);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 48, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(393);
				((EnumDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(396);
			match(ENUM);
			{
			setState(397);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(398);
				((EnumDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			setState(401);
			match(LBRACE);
			setState(403);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 391L) != 0)) {
				{
				setState(402);
				((EnumDefnContext)_localctx).variants = enumVariantDefnList();
				}
			}

			setState(405);
			match(RBRACE);
			setState(407);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				{
				setState(406);
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
		enterRule(_localctx, 50, RULE_enumVariantDefnList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(409);
			enumVariantDefn();
			setState(414);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(410);
				match(COMMA);
				setState(411);
				enumVariantDefn();
				}
				}
				setState(416);
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
		public CwspecContext spec;
		public IdentContext name;
		public ParenParamListContext fields;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ParenParamListContext parenParamList() {
			return getRuleContext(ParenParamListContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EnumVariantStructDefnParenContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantTupleDefnContext extends EnumVariantDefnContext {
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EnumVariantTupleDefnContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantUnitDefnContext extends EnumVariantDefnContext {
		public CwspecContext spec;
		public IdentContext name;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EnumVariantUnitDefnContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumVariantStructDefnBraceContext extends EnumVariantDefnContext {
		public CwspecContext spec;
		public IdentContext name;
		public BraceParamListContext fields;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public BraceParamListContext braceParamList() {
			return getRuleContext(BraceParamListContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EnumVariantStructDefnBraceContext(EnumVariantDefnContext ctx) { copyFrom(ctx); }
	}

	public final EnumVariantDefnContext enumVariantDefn() throws RecognitionException {
		EnumVariantDefnContext _localctx = new EnumVariantDefnContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_enumVariantDefn);
		int _la;
		try {
			setState(441);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				_localctx = new EnumVariantStructDefnBraceContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(418);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(417);
					((EnumVariantStructDefnBraceContext)_localctx).spec = cwspec();
					}
				}

				{
				setState(420);
				((EnumVariantStructDefnBraceContext)_localctx).name = ident();
				}
				{
				setState(421);
				((EnumVariantStructDefnBraceContext)_localctx).fields = braceParamList();
				}
				}
				break;
			case 2:
				_localctx = new EnumVariantStructDefnParenContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(424);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(423);
					((EnumVariantStructDefnParenContext)_localctx).spec = cwspec();
					}
				}

				{
				setState(426);
				((EnumVariantStructDefnParenContext)_localctx).name = ident();
				}
				{
				setState(427);
				((EnumVariantStructDefnParenContext)_localctx).fields = parenParamList();
				}
				}
				break;
			case 3:
				_localctx = new EnumVariantTupleDefnContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(430);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(429);
					((EnumVariantTupleDefnContext)_localctx).spec = cwspec();
					}
				}

				{
				setState(432);
				((EnumVariantTupleDefnContext)_localctx).name = ident();
				}
				setState(433);
				match(LPAREN);
				{
				setState(434);
				((EnumVariantTupleDefnContext)_localctx).elements = brackTypeExprList();
				}
				setState(435);
				match(RPAREN);
				}
				break;
			case 4:
				_localctx = new EnumVariantUnitDefnContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(438);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(437);
					((EnumVariantUnitDefnContext)_localctx).spec = cwspec();
					}
				}

				{
				setState(440);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 54, RULE_typeAliasDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(443);
				((TypeAliasDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(446);
			match(TYPE);
			{
			setState(447);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(449);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(448);
				((TypeAliasDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			setState(451);
			match(EQ);
			{
			setState(452);
			((TypeAliasDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(454);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(453);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
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
		enterRule(_localctx, 56, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(456);
				((FnDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(459);
			match(FN);
			{
			setState(460);
			((FnDefnContext)_localctx).name = ident();
			}
			setState(462);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(461);
				((FnDefnContext)_localctx).fallible = match(BANG);
				}
			}

			setState(465);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(464);
				((FnDefnContext)_localctx).typeParams = brackTypeParamList();
				}
			}

			{
			setState(467);
			((FnDefnContext)_localctx).params = parenParamList();
			}
			setState(470);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(468);
				match(ARROW);
				{
				setState(469);
				((FnDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(472);
			((FnDefnContext)_localctx).body = block();
			}
			setState(474);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(473);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 58, RULE_instantiateDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(476);
				((InstantiateDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(479);
			match(H_INSTANTIATE);
			setState(481);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(480);
				((InstantiateDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(483);
			((InstantiateDefnContext)_localctx).params = parenParamList();
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
				((InstantiateDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(488);
			((InstantiateDefnContext)_localctx).body = block();
			}
			setState(490);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(489);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 60, RULE_execDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(492);
				((ExecDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(495);
			match(EXEC);
			{
			setState(496);
			((ExecDefnContext)_localctx).name = ident();
			}
			setState(498);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(497);
				((ExecDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(500);
			((ExecDefnContext)_localctx).params = parenParamList();
			}
			setState(503);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(501);
				match(ARROW);
				{
				setState(502);
				((ExecDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(505);
			((ExecDefnContext)_localctx).body = block();
			}
			setState(507);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(506);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 62, RULE_execTupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(510);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(509);
				((ExecTupleDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(512);
			match(EXEC);
			{
			setState(513);
			((ExecTupleDefnContext)_localctx).name = ident();
			}
			setState(515);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(514);
				((ExecTupleDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(517);
			((ExecTupleDefnContext)_localctx).params = tupleParamList();
			}
			setState(520);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(518);
				match(ARROW);
				{
				setState(519);
				((ExecTupleDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(522);
			((ExecTupleDefnContext)_localctx).body = block();
			}
			setState(524);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(523);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 64, RULE_queryDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(527);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(526);
				((QueryDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(529);
			match(QUERY);
			{
			setState(530);
			((QueryDefnContext)_localctx).name = ident();
			}
			setState(532);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(531);
				((QueryDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(534);
			((QueryDefnContext)_localctx).params = parenParamList();
			}
			setState(537);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(535);
				match(ARROW);
				{
				setState(536);
				((QueryDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(539);
			((QueryDefnContext)_localctx).body = block();
			}
			setState(541);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(540);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 66, RULE_queryTupleDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(544);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(543);
				((QueryTupleDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(546);
			match(QUERY);
			{
			setState(547);
			((QueryTupleDefnContext)_localctx).name = ident();
			}
			setState(549);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(548);
				((QueryTupleDefnContext)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(551);
			((QueryTupleDefnContext)_localctx).params = tupleParamList();
			}
			setState(554);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(552);
				match(ARROW);
				{
				setState(553);
				((QueryTupleDefnContext)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(556);
			((QueryTupleDefnContext)_localctx).body = block();
			}
			setState(558);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(557);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ErrorDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefn; }
	}

	public final ErrorDefnContext errorDefn() throws RecognitionException {
		ErrorDefnContext _localctx = new ErrorDefnContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_errorDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(561);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(560);
				((ErrorDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(563);
			match(ERROR);
			{
			setState(564);
			((ErrorDefnContext)_localctx).name = ident();
			}
			{
			setState(565);
			((ErrorDefnContext)_localctx).params = parenParamList();
			}
			setState(567);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(566);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EventDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefn; }
	}

	public final EventDefnContext eventDefn() throws RecognitionException {
		EventDefnContext _localctx = new EventDefnContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_eventDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(569);
				((EventDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(572);
			match(EVENT);
			{
			setState(573);
			((EventDefnContext)_localctx).name = ident();
			}
			{
			setState(574);
			((EventDefnContext)_localctx).params = parenParamList();
			}
			setState(576);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(575);
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
		enterRule(_localctx, 72, RULE_stateBlockDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(578);
			match(STATE);
			setState(579);
			match(LBRACE);
			setState(583);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 391L) != 0)) {
				{
				{
				setState(580);
				((StateBlockDefnContext)_localctx).stateDefn = stateDefn();
				((StateBlockDefnContext)_localctx).stateFields.add(((StateBlockDefnContext)_localctx).stateDefn);
				}
				}
				setState(585);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(586);
			match(RBRACE);
			setState(588);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(587);
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
		enterRule(_localctx, 74, RULE_stateDefn);
		try {
			setState(592);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(590);
				stateItemDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(591);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StateItemDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateItemDefn; }
	}

	public final StateItemDefnContext stateItemDefn() throws RecognitionException {
		StateItemDefnContext _localctx = new StateItemDefnContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_stateItemDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(595);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(594);
				((StateItemDefnContext)_localctx).spec = cwspec();
				}
			}

			{
			setState(597);
			((StateItemDefnContext)_localctx).name = ident();
			}
			setState(598);
			match(COLON);
			{
			setState(599);
			((StateItemDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(601);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(600);
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
		public CwspecContext spec;
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
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StateMapDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateMapDefn; }
	}

	public final StateMapDefnContext stateMapDefn() throws RecognitionException {
		StateMapDefnContext _localctx = new StateMapDefnContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_stateMapDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(604);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(603);
				((StateMapDefnContext)_localctx).spec = cwspec();
				}
			}

			{
			setState(606);
			((StateMapDefnContext)_localctx).name = ident();
			}
			setState(607);
			match(LBRACK);
			{
			setState(608);
			((StateMapDefnContext)_localctx).indexTy = typeExpr(0);
			}
			setState(609);
			match(RBRACK);
			setState(610);
			match(COLON);
			{
			setState(611);
			((StateMapDefnContext)_localctx).ty = typeExpr(0);
			}
			setState(613);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(612);
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
		enterRule(_localctx, 80, RULE_exprStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(615);
			expr(0);
			setState(617);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(616);
				((ExprStmtContext)_localctx).semi = match(SEMI);
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
		public TerminalNode EQ_EQ() { return getToken(CWScriptParser.EQ_EQ, 0); }
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
		int _startState = 82;
		enterRecursionRule(_localctx, 82, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
			case 1:
				{
				_localctx = new NotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(620);
				match(NOT);
				setState(621);
				expr(21);
				}
				break;
			case 2:
				{
				_localctx = new QueryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(622);
				match(QUERY_NOW);
				setState(623);
				expr(17);
				}
				break;
			case 3:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(624);
				ifExpr_();
				}
				break;
			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(625);
				tryCatchElseExpr_();
				}
				break;
			case 5:
				{
				_localctx = new ClosureExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(626);
				closureExpr_();
				}
				break;
			case 6:
				{
				_localctx = new StructExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(627);
				structExpr_();
				}
				break;
			case 7:
				{
				_localctx = new TupleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(628);
				tupleExpr_();
				}
				break;
			case 8:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(629);
				literal();
				}
				break;
			case 9:
				{
				_localctx = new ReturnExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(630);
				returnExpr_();
				}
				break;
			case 10:
				{
				_localctx = new FailExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(631);
				failExpr_();
				}
				break;
			case 11:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(632);
				ident();
				}
				break;
			case 12:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(633);
				match(LPAREN);
				setState(634);
				expr(0);
				setState(635);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(706);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,103,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(704);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
					case 1:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(639);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						{
						setState(640);
						((MulExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 76)) & ~0x3f) == 0 && ((1L << (_la - 76)) & 21L) != 0)) ) {
							((MulExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(641);
						expr(21);
						}
						break;
					case 2:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(642);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						{
						setState(643);
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
						setState(644);
						expr(20);
						}
						break;
					case 3:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(645);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						{
						setState(646);
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
						setState(647);
						expr(19);
						}
						break;
					case 4:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(648);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(649);
						match(D_QUEST);
						setState(650);
						expr(17);
						}
						break;
					case 5:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(651);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(653);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==NOT) {
							{
							setState(652);
							((InExprContext)_localctx).negative = match(NOT);
							}
						}

						setState(655);
						match(IN);
						setState(656);
						expr(16);
						}
						break;
					case 6:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(657);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						{
						setState(658);
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
						setState(659);
						expr(14);
						}
						break;
					case 7:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(660);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(661);
						match(AND);
						setState(662);
						expr(13);
						}
						break;
					case 8:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(663);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(664);
						match(OR);
						setState(665);
						expr(12);
						}
						break;
					case 9:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(666);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(667);
						match(DOT);
						{
						setState(668);
						((DotExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 10:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(669);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(671);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==BANG) {
							{
							setState(670);
							((CallExprContext)_localctx).fallible = match(BANG);
							}
						}

						setState(674);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==LBRACK) {
							{
							setState(673);
							((CallExprContext)_localctx).typeArgs = brackTypeExprList();
							}
						}

						setState(676);
						match(LPAREN);
						setState(685);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289707981182849532L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 2145386497L) != 0)) {
							{
							{
							setState(677);
							((CallExprContext)_localctx).arg = arg();
							((CallExprContext)_localctx).args.add(((CallExprContext)_localctx).arg);
							}
							setState(682);
							_errHandler.sync(this);
							_la = _input.LA(1);
							while (_la==COMMA) {
								{
								{
								setState(678);
								match(COMMA);
								setState(679);
								((CallExprContext)_localctx).arg = arg();
								((CallExprContext)_localctx).args.add(((CallExprContext)_localctx).arg);
								}
								}
								setState(684);
								_errHandler.sync(this);
								_la = _input.LA(1);
							}
							}
						}

						setState(687);
						match(RPAREN);
						}
						break;
					case 11:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(688);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(689);
						match(LBRACK);
						{
						setState(690);
						((IndexExprContext)_localctx).index = expr(0);
						}
						setState(691);
						match(RBRACK);
						}
						break;
					case 12:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(693);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(694);
						match(AS);
						{
						setState(695);
						((AsExprContext)_localctx).ty = typeExpr(0);
						}
						}
						break;
					case 13:
						{
						_localctx = new ExistsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(696);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(697);
						match(QUEST);
						}
						break;
					case 14:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(698);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(699);
						match(IS);
						setState(701);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==NOT) {
							{
							setState(700);
							((IsExprContext)_localctx).negative = match(NOT);
							}
						}

						{
						setState(703);
						((IsExprContext)_localctx).ty = typeExpr(0);
						}
						}
						break;
					}
					} 
				}
				setState(708);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,103,_ctx);
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
		enterRule(_localctx, 84, RULE_ifExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(709);
			match(IF);
			{
			setState(710);
			((IfExpr_Context)_localctx).pred = expr(0);
			}
			{
			setState(711);
			((IfExpr_Context)_localctx).thenBody = blockOrExpr();
			}
			setState(714);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				{
				setState(712);
				match(ELSE);
				{
				setState(713);
				((IfExpr_Context)_localctx).elseBody = blockOrExpr();
				}
				}
				break;
			}
			setState(717);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
			case 1:
				{
				setState(716);
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
		enterRule(_localctx, 86, RULE_tryCatchElseExpr_);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(719);
			match(TRY);
			{
			setState(720);
			((TryCatchElseExpr_Context)_localctx).body = block();
			}
			setState(724);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,106,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(721);
					((TryCatchElseExpr_Context)_localctx).catchClause = catchClause();
					((TryCatchElseExpr_Context)_localctx).catchClauses.add(((TryCatchElseExpr_Context)_localctx).catchClause);
					}
					} 
				}
				setState(726);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,106,_ctx);
			}
			setState(729);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				{
				setState(727);
				match(ELSE);
				{
				setState(728);
				((TryCatchElseExpr_Context)_localctx).elseBody = block();
				}
				}
				break;
			}
			setState(732);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				{
				setState(731);
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
		enterRule(_localctx, 88, RULE_catchClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(734);
			match(CATCH);
			{
			setState(735);
			((CatchClauseContext)_localctx).ty = typeExpr(0);
			}
			{
			setState(736);
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
		public BarParamListContext params;
		public TypeExprContext returnTy;
		public BlockOrExprContext body;
		public BarParamListContext barParamList() {
			return getRuleContext(BarParamListContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public BlockOrExprContext blockOrExpr() {
			return getRuleContext(BlockOrExprContext.class,0);
		}
		public TerminalNode BANG() { return getToken(CWScriptParser.BANG, 0); }
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
		enterRule(_localctx, 90, RULE_closureExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(739);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BANG) {
				{
				setState(738);
				((ClosureExpr_Context)_localctx).fallible = match(BANG);
				}
			}

			{
			setState(741);
			((ClosureExpr_Context)_localctx).params = barParamList();
			}
			setState(744);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(742);
				match(ARROW);
				{
				setState(743);
				((ClosureExpr_Context)_localctx).returnTy = typeExpr(0);
				}
				}
			}

			{
			setState(746);
			((ClosureExpr_Context)_localctx).body = blockOrExpr();
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
		enterRule(_localctx, 92, RULE_structExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(748);
			((StructExpr_Context)_localctx).ty = typeExpr(0);
			}
			{
			setState(749);
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
		enterRule(_localctx, 94, RULE_tupleExpr_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(751);
			match(LBRACK);
			setState(760);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289707981182849532L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 2145386497L) != 0)) {
				{
				{
				setState(752);
				((TupleExpr_Context)_localctx).expr = expr(0);
				((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
				}
				setState(757);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(753);
					match(COMMA);
					{
					setState(754);
					((TupleExpr_Context)_localctx).expr = expr(0);
					((TupleExpr_Context)_localctx).elements.add(((TupleExpr_Context)_localctx).expr);
					}
					}
					}
					setState(759);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(762);
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
		enterRule(_localctx, 96, RULE_returnExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			match(RETURN);
			{
			setState(765);
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
		enterRule(_localctx, 98, RULE_failExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(767);
			match(FAIL);
			{
			setState(768);
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
		enterRule(_localctx, 100, RULE_literal);
		try {
			setState(775);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(770);
				stringLit();
				}
				break;
			case IntLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(771);
				intLit();
				}
				break;
			case DecLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(772);
				decLit();
				}
				break;
			case BoolLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(773);
				boolLit();
				}
				break;
			case NONE:
				enterOuterAlt(_localctx, 5);
				{
				setState(774);
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
		enterRule(_localctx, 102, RULE_stringLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(777);
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
		enterRule(_localctx, 104, RULE_intLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(779);
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
		enterRule(_localctx, 106, RULE_decLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(781);
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
		enterRule(_localctx, 108, RULE_boolLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(783);
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
		enterRule(_localctx, 110, RULE_noneLit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(785);
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
		int _startState = 112;
		enterRecursionRule(_localctx, 112, RULE_typeExpr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(805);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(788);
				match(LPAREN);
				setState(789);
				typeExpr(0);
				setState(790);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				{
				setState(792);
				((TupleTypeExprContext)_localctx).elements = brackTypeExprList();
				}
				}
				break;
			case 3:
				{
				_localctx = new ArrayTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(793);
				match(LBRACK);
				setState(794);
				typeExpr(0);
				setState(795);
				match(SEMI);
				{
				setState(796);
				((ArrayTypeExprContext)_localctx).size = intLit();
				}
				setState(797);
				match(RBRACK);
				}
				break;
			case 4:
				{
				_localctx = new StructDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(799);
				structDefn();
				}
				break;
			case 5:
				{
				_localctx = new TupleDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(800);
				tupleDefn();
				}
				break;
			case 6:
				{
				_localctx = new UnitDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(801);
				unitDefn();
				}
				break;
			case 7:
				{
				_localctx = new EnumDefnTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(802);
				enumDefn();
				}
				break;
			case 8:
				{
				_localctx = new TypeVarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(803);
				typeVar();
				}
				break;
			case 9:
				{
				_localctx = new IdentTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(804);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(816);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,116,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(814);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
					case 1:
						{
						_localctx = new ParameterizedTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(807);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(808);
						((ParameterizedTypeExprContext)_localctx).typeArgs = brackTypeExprList();
						}
						}
						break;
					case 2:
						{
						_localctx = new MemberTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(809);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(810);
						match(DOT);
						{
						setState(811);
						((MemberTypeExprContext)_localctx).memberName = ident();
						}
						}
						break;
					case 3:
						{
						_localctx = new OptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(812);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(813);
						match(QUEST);
						}
						break;
					}
					} 
				}
				setState(818);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,116,_ctx);
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
		public CwspecContext spec;
		public TerminalNode TypeVar() { return getToken(CWScriptParser.TypeVar, 0); }
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public TypeVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeVar; }
	}

	public final TypeVarContext typeVar() throws RecognitionException {
		TypeVarContext _localctx = new TypeVarContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_typeVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(820);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(819);
				((TypeVarContext)_localctx).spec = cwspec();
				}
			}

			setState(822);
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
	public static class IdentContext extends ParserRuleContext {
		public TerminalNode HashIdent() { return getToken(CWScriptParser.HashIdent, 0); }
		public TerminalNode DollarIdent() { return getToken(CWScriptParser.DollarIdent, 0); }
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
		enterRule(_localctx, 116, RULE_ident);
		try {
			setState(828);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HashIdent:
				enterOuterAlt(_localctx, 1);
				{
				setState(824);
				match(HashIdent);
				}
				break;
			case DollarIdent:
				enterOuterAlt(_localctx, 2);
				{
				setState(825);
				match(DollarIdent);
				}
				break;
			case Ident:
				enterOuterAlt(_localctx, 3);
				{
				setState(826);
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
			case STRUCT:
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
			case EMIT:
				enterOuterAlt(_localctx, 4);
				{
				setState(827);
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
		public CwspecContext spec;
		public IdentContext name;
		public Token optional;
		public TypeExprContext ty;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
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
		enterRule(_localctx, 118, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(831);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(830);
				((ParamContext)_localctx).spec = cwspec();
				}
			}

			{
			setState(833);
			((ParamContext)_localctx).name = ident();
			}
			setState(835);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(834);
				((ParamContext)_localctx).optional = match(QUEST);
				}
			}

			setState(839);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(837);
				match(COLON);
				{
				setState(838);
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
		enterRule(_localctx, 120, RULE_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(841);
			((FieldContext)_localctx).name = ident();
			}
			setState(844);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(842);
				match(COLON);
				{
				setState(843);
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
		enterRule(_localctx, 122, RULE_namedArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(846);
			((NamedArgContext)_localctx).name = ident();
			}
			setState(847);
			match(EQ);
			{
			setState(848);
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
		enterRule(_localctx, 124, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(852);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
			case 1:
				{
				setState(850);
				expr(0);
				}
				break;
			case 2:
				{
				setState(851);
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
		enterRule(_localctx, 126, RULE_identList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(854);
			ident();
			setState(859);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(855);
				match(COMMA);
				setState(856);
				ident();
				}
				}
				setState(861);
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
		enterRule(_localctx, 128, RULE_parenParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(862);
			match(LPAREN);
			setState(871);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 391L) != 0)) {
				{
				setState(863);
				param();
				setState(868);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(864);
					match(COMMA);
					setState(865);
					param();
					}
					}
					setState(870);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(873);
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
		enterRule(_localctx, 130, RULE_tupleParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(875);
			match(LPAREN);
			setState(876);
			match(LBRACK);
			setState(885);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 391L) != 0)) {
				{
				setState(877);
				param();
				setState(882);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(878);
					match(COMMA);
					setState(879);
					param();
					}
					}
					setState(884);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(887);
			match(RBRACK);
			setState(888);
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
		enterRule(_localctx, 132, RULE_braceParamList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(890);
			match(LBRACE);
			setState(899);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 391L) != 0)) {
				{
				setState(891);
				param();
				setState(896);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,129,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(892);
						match(COMMA);
						setState(893);
						param();
						}
						} 
					}
					setState(898);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,129,_ctx);
				}
				}
			}

			setState(902);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(901);
				match(COMMA);
				}
			}

			setState(904);
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
	public static class BarParamListContext extends ParserRuleContext {
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
		public BarParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_barParamList; }
	}

	public final BarParamListContext barParamList() throws RecognitionException {
		BarParamListContext _localctx = new BarParamListContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_barParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(906);
			match(BAR);
			setState(915);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 391L) != 0)) {
				{
				setState(907);
				param();
				setState(912);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(908);
					match(COMMA);
					setState(909);
					param();
					}
					}
					setState(914);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(917);
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
		enterRule(_localctx, 136, RULE_brackTypeParamList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(919);
			match(LBRACK);
			setState(928);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & 49L) != 0)) {
				{
				setState(920);
				typeVar();
				setState(925);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(921);
					match(COMMA);
					setState(922);
					typeVar();
					}
					}
					setState(927);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(930);
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
		enterRule(_localctx, 138, RULE_brackTypeExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(932);
			match(LBRACK);
			setState(941);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1476780095422972L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 399L) != 0)) {
				{
				setState(933);
				typeExpr(0);
				setState(938);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(934);
					match(COMMA);
					setState(935);
					typeExpr(0);
					}
					}
					setState(940);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(943);
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
		enterRule(_localctx, 140, RULE_braceFieldList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(945);
			match(LBRACE);
			setState(954);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 7L) != 0)) {
				{
				setState(946);
				field();
				setState(951);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,138,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(947);
						match(COMMA);
						setState(948);
						field();
						}
						} 
					}
					setState(953);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,138,_ctx);
				}
				}
			}

			setState(957);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(956);
				match(COMMA);
				}
			}

			setState(959);
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
		enterRule(_localctx, 142, RULE_typeExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(961);
			typeExpr(0);
			setState(966);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(962);
				match(COMMA);
				setState(963);
				typeExpr(0);
				}
				}
				setState(968);
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
		enterRule(_localctx, 144, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(969);
			match(LBRACE);
			setState(973);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 289708118621806076L) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & 2145386497L) != 0)) {
				{
				{
				setState(970);
				((BlockContext)_localctx).stmt = stmt();
				((BlockContext)_localctx).stmts.add(((BlockContext)_localctx).stmt);
				}
				}
				setState(975);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(976);
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
		enterRule(_localctx, 146, RULE_blockOrExpr);
		try {
			setState(980);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(978);
				block();
				}
				break;
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
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
			case FAIL:
			case RETURN:
			case STRUCT:
			case TUPLE:
			case UNIT:
			case ENUM:
			case TYPE:
			case EMIT:
			case LPAREN:
			case LBRACK:
			case BANG:
			case BAR:
			case BoolLiteral:
			case HashIdent:
			case DollarIdent:
			case Ident:
			case TypeVar:
			case StringLiteral:
			case IntLiteral:
			case DecLiteral:
			case CWSPEC_LINE_COMMENT:
			case CWSPEC_BLOCK_COMMENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(979);
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
	public static class ReservedKeywordContext extends ParserRuleContext {
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode H_INSTANTIATE() { return getToken(CWScriptParser.H_INSTANTIATE, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode NONE() { return getToken(CWScriptParser.NONE, 0); }
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
		enterRule(_localctx, 148, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(982);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 69405211869692L) != 0)) ) {
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
		case 41:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 56:
			return typeExpr_sempred((TypeExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 20);
		case 1:
			return precpred(_ctx, 19);
		case 2:
			return precpred(_ctx, 18);
		case 3:
			return precpred(_ctx, 16);
		case 4:
			return precpred(_ctx, 15);
		case 5:
			return precpred(_ctx, 13);
		case 6:
			return precpred(_ctx, 12);
		case 7:
			return precpred(_ctx, 11);
		case 8:
			return precpred(_ctx, 26);
		case 9:
			return precpred(_ctx, 25);
		case 10:
			return precpred(_ctx, 24);
		case 11:
			return precpred(_ctx, 23);
		case 12:
			return precpred(_ctx, 22);
		case 13:
			return precpred(_ctx, 14);
		}
		return true;
	}
	private boolean typeExpr_sempred(TypeExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return precpred(_ctx, 11);
		case 15:
			return precpred(_ctx, 10);
		case 16:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001c\u03d9\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007J\u0001"+
		"\u0000\u0005\u0000\u0098\b\u0000\n\u0000\f\u0000\u009b\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002\u00b1\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003\u00b6\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003\u00bc\b\u0003\u0001\u0004\u0003\u0004\u00bf\b\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003"+
		"\u0004\u00c7\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00cc"+
		"\b\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u00d0\b\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0003\u0005\u00d5\b\u0005\u0001\u0005\u0003\u0005"+
		"\u00d8\b\u0005\u0001\u0006\u0003\u0006\u00db\b\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u00e1\b\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u00e7\b\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u00ed\b\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u00f5\b\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t\u00fe\b\t\u0001\n\u0001\n\u0003"+
		"\n\u0102\b\n\u0001\u000b\u0001\u000b\u0003\u000b\u0106\b\u000b\u0001\f"+
		"\u0001\f\u0003\f\u010a\b\f\u0001\r\u0001\r\u0003\r\u010e\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e"+
		"\u0116\b\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u011b\b"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u0120\b\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0125\b\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0137\b\u0012\u0001\u0013\u0003"+
		"\u0013\u013a\b\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003"+
		"\u0013\u0140\b\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u0144\b\u0013"+
		"\u0001\u0013\u0001\u0013\u0003\u0013\u0148\b\u0013\u0001\u0014\u0003\u0014"+
		"\u014b\b\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014"+
		"\u0151\b\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u0155\b\u0014\u0001"+
		"\u0015\u0003\u0015\u0158\b\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0003"+
		"\u0015\u015d\b\u0015\u0001\u0015\u0001\u0015\u0003\u0015\u0161\b\u0015"+
		"\u0001\u0015\u0003\u0015\u0164\b\u0015\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0003\u0015\u0169\b\u0015\u0001\u0015\u0001\u0015\u0003\u0015\u016d\b"+
		"\u0015\u0003\u0015\u016f\b\u0015\u0001\u0016\u0003\u0016\u0172\b\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u0177\b\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u017d\b\u0016\u0001\u0017"+
		"\u0003\u0017\u0180\b\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u0184\b"+
		"\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u0188\b\u0017\u0001\u0018\u0003"+
		"\u0018\u018b\b\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u0190"+
		"\b\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u0194\b\u0018\u0001\u0018"+
		"\u0001\u0018\u0003\u0018\u0198\b\u0018\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0005\u0019\u019d\b\u0019\n\u0019\f\u0019\u01a0\t\u0019\u0001\u001a\u0003"+
		"\u001a\u01a3\b\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0003"+
		"\u001a\u01a9\b\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0003"+
		"\u001a\u01af\b\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0003\u001a\u01b7\b\u001a\u0001\u001a\u0003\u001a\u01ba"+
		"\b\u001a\u0001\u001b\u0003\u001b\u01bd\b\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u01c2\b\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0003\u001b\u01c7\b\u001b\u0001\u001c\u0003\u001c\u01ca\b\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u01cf\b\u001c\u0001\u001c\u0003"+
		"\u001c\u01d2\b\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u01d7"+
		"\b\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u01db\b\u001c\u0001\u001d"+
		"\u0003\u001d\u01de\b\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u01e2\b"+
		"\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u01e7\b\u001d\u0001"+
		"\u001d\u0001\u001d\u0003\u001d\u01eb\b\u001d\u0001\u001e\u0003\u001e\u01ee"+
		"\b\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u01f3\b\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u01f8\b\u001e\u0001\u001e"+
		"\u0001\u001e\u0003\u001e\u01fc\b\u001e\u0001\u001f\u0003\u001f\u01ff\b"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u0204\b\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u0209\b\u001f\u0001\u001f\u0001"+
		"\u001f\u0003\u001f\u020d\b\u001f\u0001 \u0003 \u0210\b \u0001 \u0001 "+
		"\u0001 \u0003 \u0215\b \u0001 \u0001 \u0001 \u0003 \u021a\b \u0001 \u0001"+
		" \u0003 \u021e\b \u0001!\u0003!\u0221\b!\u0001!\u0001!\u0001!\u0003!\u0226"+
		"\b!\u0001!\u0001!\u0001!\u0003!\u022b\b!\u0001!\u0001!\u0003!\u022f\b"+
		"!\u0001\"\u0003\"\u0232\b\"\u0001\"\u0001\"\u0001\"\u0001\"\u0003\"\u0238"+
		"\b\"\u0001#\u0003#\u023b\b#\u0001#\u0001#\u0001#\u0001#\u0003#\u0241\b"+
		"#\u0001$\u0001$\u0001$\u0005$\u0246\b$\n$\f$\u0249\t$\u0001$\u0001$\u0003"+
		"$\u024d\b$\u0001%\u0001%\u0003%\u0251\b%\u0001&\u0003&\u0254\b&\u0001"+
		"&\u0001&\u0001&\u0001&\u0003&\u025a\b&\u0001\'\u0003\'\u025d\b\'\u0001"+
		"\'\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0003\'\u0266\b\'\u0001"+
		"(\u0001(\u0003(\u026a\b(\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001)\u0003)\u027e\b)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0003)\u028e\b)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0003)\u02a0\b)\u0001)\u0003)\u02a3"+
		"\b)\u0001)\u0001)\u0001)\u0001)\u0005)\u02a9\b)\n)\f)\u02ac\t)\u0003)"+
		"\u02ae\b)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0003)\u02be\b)\u0001)\u0005)\u02c1"+
		"\b)\n)\f)\u02c4\t)\u0001*\u0001*\u0001*\u0001*\u0001*\u0003*\u02cb\b*"+
		"\u0001*\u0003*\u02ce\b*\u0001+\u0001+\u0001+\u0005+\u02d3\b+\n+\f+\u02d6"+
		"\t+\u0001+\u0001+\u0003+\u02da\b+\u0001+\u0003+\u02dd\b+\u0001,\u0001"+
		",\u0001,\u0001,\u0001-\u0003-\u02e4\b-\u0001-\u0001-\u0001-\u0003-\u02e9"+
		"\b-\u0001-\u0001-\u0001.\u0001.\u0001.\u0001/\u0001/\u0001/\u0001/\u0005"+
		"/\u02f4\b/\n/\f/\u02f7\t/\u0003/\u02f9\b/\u0001/\u0001/\u00010\u00010"+
		"\u00010\u00011\u00011\u00011\u00012\u00012\u00012\u00012\u00012\u0003"+
		"2\u0308\b2\u00013\u00013\u00014\u00014\u00015\u00015\u00016\u00016\u0001"+
		"7\u00017\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u0001"+
		"8\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u0003"+
		"8\u0326\b8\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00058\u032f"+
		"\b8\n8\f8\u0332\t8\u00019\u00039\u0335\b9\u00019\u00019\u0001:\u0001:"+
		"\u0001:\u0001:\u0003:\u033d\b:\u0001;\u0003;\u0340\b;\u0001;\u0001;\u0003"+
		";\u0344\b;\u0001;\u0001;\u0003;\u0348\b;\u0001<\u0001<\u0001<\u0003<\u034d"+
		"\b<\u0001=\u0001=\u0001=\u0001=\u0001>\u0001>\u0003>\u0355\b>\u0001?\u0001"+
		"?\u0001?\u0005?\u035a\b?\n?\f?\u035d\t?\u0001@\u0001@\u0001@\u0001@\u0005"+
		"@\u0363\b@\n@\f@\u0366\t@\u0003@\u0368\b@\u0001@\u0001@\u0001A\u0001A"+
		"\u0001A\u0001A\u0001A\u0005A\u0371\bA\nA\fA\u0374\tA\u0003A\u0376\bA\u0001"+
		"A\u0001A\u0001A\u0001B\u0001B\u0001B\u0001B\u0005B\u037f\bB\nB\fB\u0382"+
		"\tB\u0003B\u0384\bB\u0001B\u0003B\u0387\bB\u0001B\u0001B\u0001C\u0001"+
		"C\u0001C\u0001C\u0005C\u038f\bC\nC\fC\u0392\tC\u0003C\u0394\bC\u0001C"+
		"\u0001C\u0001D\u0001D\u0001D\u0001D\u0005D\u039c\bD\nD\fD\u039f\tD\u0003"+
		"D\u03a1\bD\u0001D\u0001D\u0001E\u0001E\u0001E\u0001E\u0005E\u03a9\bE\n"+
		"E\fE\u03ac\tE\u0003E\u03ae\bE\u0001E\u0001E\u0001F\u0001F\u0001F\u0001"+
		"F\u0005F\u03b6\bF\nF\fF\u03b9\tF\u0003F\u03bb\bF\u0001F\u0003F\u03be\b"+
		"F\u0001F\u0001F\u0001G\u0001G\u0001G\u0005G\u03c5\bG\nG\fG\u03c8\tG\u0001"+
		"H\u0001H\u0005H\u03cc\bH\nH\fH\u03cf\tH\u0001H\u0001H\u0001I\u0001I\u0003"+
		"I\u03d5\bI\u0001J\u0001J\u0001J\u0000\u0002RpK\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,."+
		"02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0000\u0007\u0001\u0000_`\u0006\u0000"+
		"EEIIKKMMOOQQ\u0003\u0000LLNNPP\u0002\u0000HHJJ\u0001\u0000RU\u0001\u0000"+
		"FG\u0006\u0000\u0002\b\u000e\u0017\u001b\u001b\u001d\u001d\u001f$(-\u045f"+
		"\u0000\u0099\u0001\u0000\u0000\u0000\u0002\u009e\u0001\u0000\u0000\u0000"+
		"\u0004\u00b0\u0001\u0000\u0000\u0000\u0006\u00b2\u0001\u0000\u0000\u0000"+
		"\b\u00be\u0001\u0000\u0000\u0000\n\u00d7\u0001\u0000\u0000\u0000\f\u00da"+
		"\u0001\u0000\u0000\u0000\u000e\u00e8\u0001\u0000\u0000\u0000\u0010\u00ee"+
		"\u0001\u0000\u0000\u0000\u0012\u00f6\u0001\u0000\u0000\u0000\u0014\u00ff"+
		"\u0001\u0000\u0000\u0000\u0016\u0103\u0001\u0000\u0000\u0000\u0018\u0107"+
		"\u0001\u0000\u0000\u0000\u001a\u010b\u0001\u0000\u0000\u0000\u001c\u010f"+
		"\u0001\u0000\u0000\u0000\u001e\u0117\u0001\u0000\u0000\u0000 \u011c\u0001"+
		"\u0000\u0000\u0000\"\u0121\u0001\u0000\u0000\u0000$\u0136\u0001\u0000"+
		"\u0000\u0000&\u0139\u0001\u0000\u0000\u0000(\u014a\u0001\u0000\u0000\u0000"+
		"*\u016e\u0001\u0000\u0000\u0000,\u0171\u0001\u0000\u0000\u0000.\u017f"+
		"\u0001\u0000\u0000\u00000\u018a\u0001\u0000\u0000\u00002\u0199\u0001\u0000"+
		"\u0000\u00004\u01b9\u0001\u0000\u0000\u00006\u01bc\u0001\u0000\u0000\u0000"+
		"8\u01c9\u0001\u0000\u0000\u0000:\u01dd\u0001\u0000\u0000\u0000<\u01ed"+
		"\u0001\u0000\u0000\u0000>\u01fe\u0001\u0000\u0000\u0000@\u020f\u0001\u0000"+
		"\u0000\u0000B\u0220\u0001\u0000\u0000\u0000D\u0231\u0001\u0000\u0000\u0000"+
		"F\u023a\u0001\u0000\u0000\u0000H\u0242\u0001\u0000\u0000\u0000J\u0250"+
		"\u0001\u0000\u0000\u0000L\u0253\u0001\u0000\u0000\u0000N\u025c\u0001\u0000"+
		"\u0000\u0000P\u0267\u0001\u0000\u0000\u0000R\u027d\u0001\u0000\u0000\u0000"+
		"T\u02c5\u0001\u0000\u0000\u0000V\u02cf\u0001\u0000\u0000\u0000X\u02de"+
		"\u0001\u0000\u0000\u0000Z\u02e3\u0001\u0000\u0000\u0000\\\u02ec\u0001"+
		"\u0000\u0000\u0000^\u02ef\u0001\u0000\u0000\u0000`\u02fc\u0001\u0000\u0000"+
		"\u0000b\u02ff\u0001\u0000\u0000\u0000d\u0307\u0001\u0000\u0000\u0000f"+
		"\u0309\u0001\u0000\u0000\u0000h\u030b\u0001\u0000\u0000\u0000j\u030d\u0001"+
		"\u0000\u0000\u0000l\u030f\u0001\u0000\u0000\u0000n\u0311\u0001\u0000\u0000"+
		"\u0000p\u0325\u0001\u0000\u0000\u0000r\u0334\u0001\u0000\u0000\u0000t"+
		"\u033c\u0001\u0000\u0000\u0000v\u033f\u0001\u0000\u0000\u0000x\u0349\u0001"+
		"\u0000\u0000\u0000z\u034e\u0001\u0000\u0000\u0000|\u0354\u0001\u0000\u0000"+
		"\u0000~\u0356\u0001\u0000\u0000\u0000\u0080\u035e\u0001\u0000\u0000\u0000"+
		"\u0082\u036b\u0001\u0000\u0000\u0000\u0084\u037a\u0001\u0000\u0000\u0000"+
		"\u0086\u038a\u0001\u0000\u0000\u0000\u0088\u0397\u0001\u0000\u0000\u0000"+
		"\u008a\u03a4\u0001\u0000\u0000\u0000\u008c\u03b1\u0001\u0000\u0000\u0000"+
		"\u008e\u03c1\u0001\u0000\u0000\u0000\u0090\u03c9\u0001\u0000\u0000\u0000"+
		"\u0092\u03d4\u0001\u0000\u0000\u0000\u0094\u03d6\u0001\u0000\u0000\u0000"+
		"\u0096\u0098\u0003\u0004\u0002\u0000\u0097\u0096\u0001\u0000\u0000\u0000"+
		"\u0098\u009b\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000\u0000"+
		"\u0099\u009a\u0001\u0000\u0000\u0000\u009a\u009c\u0001\u0000\u0000\u0000"+
		"\u009b\u0099\u0001\u0000\u0000\u0000\u009c\u009d\u0005\u0000\u0000\u0001"+
		"\u009d\u0001\u0001\u0000\u0000\u0000\u009e\u009f\u0007\u0000\u0000\u0000"+
		"\u009f\u0003\u0001\u0000\u0000\u0000\u00a0\u00b1\u0003\u0006\u0003\u0000"+
		"\u00a1\u00b1\u0003$\u0012\u0000\u00a2\u00b1\u0003\b\u0004\u0000\u00a3"+
		"\u00b1\u0003\f\u0006\u0000\u00a4\u00b1\u0003\u000e\u0007\u0000\u00a5\u00b1"+
		"\u0003\u0010\b\u0000\u00a6\u00b1\u0003\u0012\t\u0000\u00a7\u00b1\u0003"+
		"\u0016\u000b\u0000\u00a8\u00b1\u0003\u0014\n\u0000\u00a9\u00b1\u0003\u001c"+
		"\u000e\u0000\u00aa\u00b1\u0003\u001e\u000f\u0000\u00ab\u00b1\u0003 \u0010"+
		"\u0000\u00ac\u00b1\u0003\"\u0011\u0000\u00ad\u00b1\u0003\u001a\r\u0000"+
		"\u00ae\u00b1\u0003\u0018\f\u0000\u00af\u00b1\u0003P(\u0000\u00b0\u00a0"+
		"\u0001\u0000\u0000\u0000\u00b0\u00a1\u0001\u0000\u0000\u0000\u00b0\u00a2"+
		"\u0001\u0000\u0000\u0000\u00b0\u00a3\u0001\u0000\u0000\u0000\u00b0\u00a4"+
		"\u0001\u0000\u0000\u0000\u00b0\u00a5\u0001\u0000\u0000\u0000\u00b0\u00a6"+
		"\u0001\u0000\u0000\u0000\u00b0\u00a7\u0001\u0000\u0000\u0000\u00b0\u00a8"+
		"\u0001\u0000\u0000\u0000\u00b0\u00a9\u0001\u0000\u0000\u0000\u00b0\u00aa"+
		"\u0001\u0000\u0000\u0000\u00b0\u00ab\u0001\u0000\u0000\u0000\u00b0\u00ac"+
		"\u0001\u0000\u0000\u0000\u00b0\u00ad\u0001\u0000\u0000\u0000\u00b0\u00ae"+
		"\u0001\u0000\u0000\u0000\u00b0\u00af\u0001\u0000\u0000\u0000\u00b1\u0005"+
		"\u0001\u0000\u0000\u0000\u00b2\u00b3\u0005\u0004\u0000\u0000\u00b3\u00b5"+
		"\u00054\u0000\u0000\u00b4\u00b6\u0003~?\u0000\u00b5\u00b4\u0001\u0000"+
		"\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000"+
		"\u0000\u0000\u00b7\u00b8\u00055\u0000\u0000\u00b8\u00b9\u0005\u0015\u0000"+
		"\u0000\u00b9\u00bb\u0003f3\u0000\u00ba\u00bc\u0005;\u0000\u0000\u00bb"+
		"\u00ba\u0001\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000\u0000\u0000\u00bc"+
		"\u0007\u0001\u0000\u0000\u0000\u00bd\u00bf\u0003\u0002\u0001\u0000\u00be"+
		"\u00bd\u0001\u0000\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf"+
		"\u00c0\u0001\u0000\u0000\u0000\u00c0\u00c1\u0005$\u0000\u0000\u00c1\u00c2"+
		"\u0003\n\u0005\u0000\u00c2\u00c3\u0005E\u0000\u0000\u00c3\u00c4\u0003"+
		"R)\u0000\u00c4\u00c6\u0001\u0000\u0000\u0000\u00c5\u00c7\u0005;\u0000"+
		"\u0000\u00c6\u00c5\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000"+
		"\u0000\u00c7\t\u0001\u0000\u0000\u0000\u00c8\u00cb\u0003t:\u0000\u00c9"+
		"\u00ca\u0005<\u0000\u0000\u00ca\u00cc\u0003p8\u0000\u00cb\u00c9\u0001"+
		"\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000\u00cc\u00d8\u0001"+
		"\u0000\u0000\u0000\u00cd\u00cf\u00052\u0000\u0000\u00ce\u00d0\u0003~?"+
		"\u0000\u00cf\u00ce\u0001\u0000\u0000\u0000\u00cf\u00d0\u0001\u0000\u0000"+
		"\u0000\u00d0\u00d1\u0001\u0000\u0000\u0000\u00d1\u00d8\u00053\u0000\u0000"+
		"\u00d2\u00d4\u00054\u0000\u0000\u00d3\u00d5\u0003~?\u0000\u00d4\u00d3"+
		"\u0001\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000\u0000\u0000\u00d5\u00d6"+
		"\u0001\u0000\u0000\u0000\u00d6\u00d8\u00055\u0000\u0000\u00d7\u00c8\u0001"+
		"\u0000\u0000\u0000\u00d7\u00cd\u0001\u0000\u0000\u0000\u00d7\u00d2\u0001"+
		"\u0000\u0000\u0000\u00d8\u000b\u0001\u0000\u0000\u0000\u00d9\u00db\u0003"+
		"\u0002\u0001\u0000\u00da\u00d9\u0001\u0000\u0000\u0000\u00da\u00db\u0001"+
		"\u0000\u0000\u0000\u00db\u00dc\u0001\u0000\u0000\u0000\u00dc\u00dd\u0005"+
		"%\u0000\u0000\u00dd\u00e0\u0003t:\u0000\u00de\u00df\u0005<\u0000\u0000"+
		"\u00df\u00e1\u0003p8\u0000\u00e0\u00de\u0001\u0000\u0000\u0000\u00e0\u00e1"+
		"\u0001\u0000\u0000\u0000\u00e1\u00e2\u0001\u0000\u0000\u0000\u00e2\u00e3"+
		"\u0005E\u0000\u0000\u00e3\u00e4\u0003R)\u0000\u00e4\u00e6\u0001\u0000"+
		"\u0000\u0000\u00e5\u00e7\u0005;\u0000\u0000\u00e6\u00e5\u0001\u0000\u0000"+
		"\u0000\u00e6\u00e7\u0001\u0000\u0000\u0000\u00e7\r\u0001\u0000\u0000\u0000"+
		"\u00e8\u00e9\u0003t:\u0000\u00e9\u00ea\u0007\u0001\u0000\u0000\u00ea\u00ec"+
		"\u0003R)\u0000\u00eb\u00ed\u0005;\u0000\u0000\u00ec\u00eb\u0001\u0000"+
		"\u0000\u0000\u00ec\u00ed\u0001\u0000\u0000\u0000\u00ed\u000f\u0001\u0000"+
		"\u0000\u0000\u00ee\u00ef\u0003R)\u0000\u00ef\u00f0\u00056\u0000\u0000"+
		"\u00f0\u00f1\u0003t:\u0000\u00f1\u00f2\u0007\u0001\u0000\u0000\u00f2\u00f4"+
		"\u0003R)\u0000\u00f3\u00f5\u0005;\u0000\u0000\u00f4\u00f3\u0001\u0000"+
		"\u0000\u0000\u00f4\u00f5\u0001\u0000\u0000\u0000\u00f5\u0011\u0001\u0000"+
		"\u0000\u0000\u00f6\u00f7\u0003R)\u0000\u00f7\u00f8\u00052\u0000\u0000"+
		"\u00f8\u00f9\u0003R)\u0000\u00f9\u00fa\u00053\u0000\u0000\u00fa\u00fb"+
		"\u0007\u0001\u0000\u0000\u00fb\u00fd\u0003R)\u0000\u00fc\u00fe\u0005;"+
		"\u0000\u0000\u00fd\u00fc\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000"+
		"\u0000\u0000\u00fe\u0013\u0001\u0000\u0000\u0000\u00ff\u0101\u0003V+\u0000"+
		"\u0100\u0102\u0005;\u0000\u0000\u0101\u0100\u0001\u0000\u0000\u0000\u0101"+
		"\u0102\u0001\u0000\u0000\u0000\u0102\u0015\u0001\u0000\u0000\u0000\u0103"+
		"\u0105\u0003T*\u0000\u0104\u0106\u0005;\u0000\u0000\u0105\u0104\u0001"+
		"\u0000\u0000\u0000\u0105\u0106\u0001\u0000\u0000\u0000\u0106\u0017\u0001"+
		"\u0000\u0000\u0000\u0107\u0109\u0003`0\u0000\u0108\u010a\u0005;\u0000"+
		"\u0000\u0109\u0108\u0001\u0000\u0000\u0000\u0109\u010a\u0001\u0000\u0000"+
		"\u0000\u010a\u0019\u0001\u0000\u0000\u0000\u010b\u010d\u0003b1\u0000\u010c"+
		"\u010e\u0005;\u0000\u0000\u010d\u010c\u0001\u0000\u0000\u0000\u010d\u010e"+
		"\u0001\u0000\u0000\u0000\u010e\u001b\u0001\u0000\u0000\u0000\u010f\u0110"+
		"\u0005\u0013\u0000\u0000\u0110\u0111\u0003\n\u0005\u0000\u0111\u0112\u0005"+
		"\u0014\u0000\u0000\u0112\u0113\u0003R)\u0000\u0113\u0115\u0003\u0090H"+
		"\u0000\u0114\u0116\u0005;\u0000\u0000\u0115\u0114\u0001\u0000\u0000\u0000"+
		"\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u001d\u0001\u0000\u0000\u0000"+
		"\u0117\u0118\u0005\u000b\u0000\u0000\u0118\u011a\u0003R)\u0000\u0119\u011b"+
		"\u0005;\u0000\u0000\u011a\u0119\u0001\u0000\u0000\u0000\u011a\u011b\u0001"+
		"\u0000\u0000\u0000\u011b\u001f\u0001\u0000\u0000\u0000\u011c\u011d\u0005"+
		"\n\u0000\u0000\u011d\u011f\u0003R)\u0000\u011e\u0120\u0005;\u0000\u0000"+
		"\u011f\u011e\u0001\u0000\u0000\u0000\u011f\u0120\u0001\u0000\u0000\u0000"+
		"\u0120!\u0001\u0000\u0000\u0000\u0121\u0122\u0005-\u0000\u0000\u0122\u0124"+
		"\u0003R)\u0000\u0123\u0125\u0005;\u0000\u0000\u0124\u0123\u0001\u0000"+
		"\u0000\u0000\u0124\u0125\u0001\u0000\u0000\u0000\u0125#\u0001\u0000\u0000"+
		"\u0000\u0126\u0137\u0003&\u0013\u0000\u0127\u0137\u0003(\u0014\u0000\u0128"+
		"\u0137\u0003*\u0015\u0000\u0129\u0137\u0003,\u0016\u0000\u012a\u0137\u0003"+
		".\u0017\u0000\u012b\u0137\u00030\u0018\u0000\u012c\u0137\u00036\u001b"+
		"\u0000\u012d\u0137\u00038\u001c\u0000\u012e\u0137\u0003:\u001d\u0000\u012f"+
		"\u0137\u0003<\u001e\u0000\u0130\u0137\u0003>\u001f\u0000\u0131\u0137\u0003"+
		"@ \u0000\u0132\u0137\u0003B!\u0000\u0133\u0137\u0003D\"\u0000\u0134\u0137"+
		"\u0003F#\u0000\u0135\u0137\u0003H$\u0000\u0136\u0126\u0001\u0000\u0000"+
		"\u0000\u0136\u0127\u0001\u0000\u0000\u0000\u0136\u0128\u0001\u0000\u0000"+
		"\u0000\u0136\u0129\u0001\u0000\u0000\u0000\u0136\u012a\u0001\u0000\u0000"+
		"\u0000\u0136\u012b\u0001\u0000\u0000\u0000\u0136\u012c\u0001\u0000\u0000"+
		"\u0000\u0136\u012d\u0001\u0000\u0000\u0000\u0136\u012e\u0001\u0000\u0000"+
		"\u0000\u0136\u012f\u0001\u0000\u0000\u0000\u0136\u0130\u0001\u0000\u0000"+
		"\u0000\u0136\u0131\u0001\u0000\u0000\u0000\u0136\u0132\u0001\u0000\u0000"+
		"\u0000\u0136\u0133\u0001\u0000\u0000\u0000\u0136\u0134\u0001\u0000\u0000"+
		"\u0000\u0136\u0135\u0001\u0000\u0000\u0000\u0137%\u0001\u0000\u0000\u0000"+
		"\u0138\u013a\u0003\u0002\u0001\u0000\u0139\u0138\u0001\u0000\u0000\u0000"+
		"\u0139\u013a\u0001\u0000\u0000\u0000\u013a\u013b\u0001\u0000\u0000\u0000"+
		"\u013b\u013c\u0005\u0002\u0000\u0000\u013c\u013f\u0003t:\u0000\u013d\u013e"+
		"\u0005\u0006\u0000\u0000\u013e\u0140\u0003p8\u0000\u013f\u013d\u0001\u0000"+
		"\u0000\u0000\u013f\u0140\u0001\u0000\u0000\u0000\u0140\u0143\u0001\u0000"+
		"\u0000\u0000\u0141\u0142\u0005\u0005\u0000\u0000\u0142\u0144\u0003\u008e"+
		"G\u0000\u0143\u0141\u0001\u0000\u0000\u0000\u0143\u0144\u0001\u0000\u0000"+
		"\u0000\u0144\u0145\u0001\u0000\u0000\u0000\u0145\u0147\u0003\u0090H\u0000"+
		"\u0146\u0148\u0005;\u0000\u0000\u0147\u0146\u0001\u0000\u0000\u0000\u0147"+
		"\u0148\u0001\u0000\u0000\u0000\u0148\'\u0001\u0000\u0000\u0000\u0149\u014b"+
		"\u0003\u0002\u0001\u0000\u014a\u0149\u0001\u0000\u0000\u0000\u014a\u014b"+
		"\u0001\u0000\u0000\u0000\u014b\u014c\u0001\u0000\u0000\u0000\u014c\u014d"+
		"\u0005\u0003\u0000\u0000\u014d\u0150\u0003t:\u0000\u014e\u014f\u0005\u0006"+
		"\u0000\u0000\u014f\u0151\u0003\u008eG\u0000\u0150\u014e\u0001\u0000\u0000"+
		"\u0000\u0150\u0151\u0001\u0000\u0000\u0000\u0151\u0152\u0001\u0000\u0000"+
		"\u0000\u0152\u0154\u0003\u0090H\u0000\u0153\u0155\u0005;\u0000\u0000\u0154"+
		"\u0153\u0001\u0000\u0000\u0000\u0154\u0155\u0001\u0000\u0000\u0000\u0155"+
		")\u0001\u0000\u0000\u0000\u0156\u0158\u0003\u0002\u0001\u0000\u0157\u0156"+
		"\u0001\u0000\u0000\u0000\u0157\u0158\u0001\u0000\u0000\u0000\u0158\u0159"+
		"\u0001\u0000\u0000\u0000\u0159\u015a\u0005(\u0000\u0000\u015a\u015c\u0003"+
		"t:\u0000\u015b\u015d\u0003\u0088D\u0000\u015c\u015b\u0001\u0000\u0000"+
		"\u0000\u015c\u015d\u0001\u0000\u0000\u0000\u015d\u015e\u0001\u0000\u0000"+
		"\u0000\u015e\u0160\u0003\u0084B\u0000\u015f\u0161\u0005;\u0000\u0000\u0160"+
		"\u015f\u0001\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000\u0000\u0161"+
		"\u016f\u0001\u0000\u0000\u0000\u0162\u0164\u0003\u0002\u0001\u0000\u0163"+
		"\u0162\u0001\u0000\u0000\u0000\u0163\u0164\u0001\u0000\u0000\u0000\u0164"+
		"\u0165\u0001\u0000\u0000\u0000\u0165\u0166\u0005(\u0000\u0000\u0166\u0168"+
		"\u0003t:\u0000\u0167\u0169\u0003\u0088D\u0000\u0168\u0167\u0001\u0000"+
		"\u0000\u0000\u0168\u0169\u0001\u0000\u0000\u0000\u0169\u016a\u0001\u0000"+
		"\u0000\u0000\u016a\u016c\u0003\u0080@\u0000\u016b\u016d\u0005;\u0000\u0000"+
		"\u016c\u016b\u0001\u0000\u0000\u0000\u016c\u016d\u0001\u0000\u0000\u0000"+
		"\u016d\u016f\u0001\u0000\u0000\u0000\u016e\u0157\u0001\u0000\u0000\u0000"+
		"\u016e\u0163\u0001\u0000\u0000\u0000\u016f+\u0001\u0000\u0000\u0000\u0170"+
		"\u0172\u0003\u0002\u0001\u0000\u0171\u0170\u0001\u0000\u0000\u0000\u0171"+
		"\u0172\u0001\u0000\u0000\u0000\u0172\u0173\u0001\u0000\u0000\u0000\u0173"+
		"\u0174\u0005)\u0000\u0000\u0174\u0176\u0003t:\u0000\u0175\u0177\u0003"+
		"\u0088D\u0000\u0176\u0175\u0001\u0000\u0000\u0000\u0176\u0177\u0001\u0000"+
		"\u0000\u0000\u0177\u0178\u0001\u0000\u0000\u0000\u0178\u0179\u00050\u0000"+
		"\u0000\u0179\u017a\u0003\u008aE\u0000\u017a\u017c\u00051\u0000\u0000\u017b"+
		"\u017d\u0005;\u0000\u0000\u017c\u017b\u0001\u0000\u0000\u0000\u017c\u017d"+
		"\u0001\u0000\u0000\u0000\u017d-\u0001\u0000\u0000\u0000\u017e\u0180\u0003"+
		"\u0002\u0001\u0000\u017f\u017e\u0001\u0000\u0000\u0000\u017f\u0180\u0001"+
		"\u0000\u0000\u0000\u0180\u0181\u0001\u0000\u0000\u0000\u0181\u0183\u0005"+
		"*\u0000\u0000\u0182\u0184\u0003\u0088D\u0000\u0183\u0182\u0001\u0000\u0000"+
		"\u0000\u0183\u0184\u0001\u0000\u0000\u0000\u0184\u0185\u0001\u0000\u0000"+
		"\u0000\u0185\u0187\u0003t:\u0000\u0186\u0188\u0005;\u0000\u0000\u0187"+
		"\u0186\u0001\u0000\u0000\u0000\u0187\u0188\u0001\u0000\u0000\u0000\u0188"+
		"/\u0001\u0000\u0000\u0000\u0189\u018b\u0003\u0002\u0001\u0000\u018a\u0189"+
		"\u0001\u0000\u0000\u0000\u018a\u018b\u0001\u0000\u0000\u0000\u018b\u018c"+
		"\u0001\u0000\u0000\u0000\u018c\u018d\u0005+\u0000\u0000\u018d\u018f\u0003"+
		"t:\u0000\u018e\u0190\u0003\u0088D\u0000\u018f\u018e\u0001\u0000\u0000"+
		"\u0000\u018f\u0190\u0001\u0000\u0000\u0000\u0190\u0191\u0001\u0000\u0000"+
		"\u0000\u0191\u0193\u00054\u0000\u0000\u0192\u0194\u00032\u0019\u0000\u0193"+
		"\u0192\u0001\u0000\u0000\u0000\u0193\u0194\u0001\u0000\u0000\u0000\u0194"+
		"\u0195\u0001\u0000\u0000\u0000\u0195\u0197\u00055\u0000\u0000\u0196\u0198"+
		"\u0005;\u0000\u0000\u0197\u0196\u0001\u0000\u0000\u0000\u0197\u0198\u0001"+
		"\u0000\u0000\u0000\u01981\u0001\u0000\u0000\u0000\u0199\u019e\u00034\u001a"+
		"\u0000\u019a\u019b\u00057\u0000\u0000\u019b\u019d\u00034\u001a\u0000\u019c"+
		"\u019a\u0001\u0000\u0000\u0000\u019d\u01a0\u0001\u0000\u0000\u0000\u019e"+
		"\u019c\u0001\u0000\u0000\u0000\u019e\u019f\u0001\u0000\u0000\u0000\u019f"+
		"3\u0001\u0000\u0000\u0000\u01a0\u019e\u0001\u0000\u0000\u0000\u01a1\u01a3"+
		"\u0003\u0002\u0001\u0000\u01a2\u01a1\u0001\u0000\u0000\u0000\u01a2\u01a3"+
		"\u0001\u0000\u0000\u0000\u01a3\u01a4\u0001\u0000\u0000\u0000\u01a4\u01a5"+
		"\u0003t:\u0000\u01a5\u01a6\u0003\u0084B\u0000\u01a6\u01ba\u0001\u0000"+
		"\u0000\u0000\u01a7\u01a9\u0003\u0002\u0001\u0000\u01a8\u01a7\u0001\u0000"+
		"\u0000\u0000\u01a8\u01a9\u0001\u0000\u0000\u0000\u01a9\u01aa\u0001\u0000"+
		"\u0000\u0000\u01aa\u01ab\u0003t:\u0000\u01ab\u01ac\u0003\u0080@\u0000"+
		"\u01ac\u01ba\u0001\u0000\u0000\u0000\u01ad\u01af\u0003\u0002\u0001\u0000"+
		"\u01ae\u01ad\u0001\u0000\u0000\u0000\u01ae\u01af\u0001\u0000\u0000\u0000"+
		"\u01af\u01b0\u0001\u0000\u0000\u0000\u01b0\u01b1\u0003t:\u0000\u01b1\u01b2"+
		"\u00050\u0000\u0000\u01b2\u01b3\u0003\u008aE\u0000\u01b3\u01b4\u00051"+
		"\u0000\u0000\u01b4\u01ba\u0001\u0000\u0000\u0000\u01b5\u01b7\u0003\u0002"+
		"\u0001\u0000\u01b6\u01b5\u0001\u0000\u0000\u0000\u01b6\u01b7\u0001\u0000"+
		"\u0000\u0000\u01b7\u01b8\u0001\u0000\u0000\u0000\u01b8\u01ba\u0003t:\u0000"+
		"\u01b9\u01a2\u0001\u0000\u0000\u0000\u01b9\u01a8\u0001\u0000\u0000\u0000"+
		"\u01b9\u01ae\u0001\u0000\u0000\u0000\u01b9\u01b6\u0001\u0000\u0000\u0000"+
		"\u01ba5\u0001\u0000\u0000\u0000\u01bb\u01bd\u0003\u0002\u0001\u0000\u01bc"+
		"\u01bb\u0001\u0000\u0000\u0000\u01bc\u01bd\u0001\u0000\u0000\u0000\u01bd"+
		"\u01be\u0001\u0000\u0000\u0000\u01be\u01bf\u0005,\u0000\u0000\u01bf\u01c1"+
		"\u0003t:\u0000\u01c0\u01c2\u0003\u0088D\u0000\u01c1\u01c0\u0001\u0000"+
		"\u0000\u0000\u01c1\u01c2\u0001\u0000\u0000\u0000\u01c2\u01c3\u0001\u0000"+
		"\u0000\u0000\u01c3\u01c4\u0005E\u0000\u0000\u01c4\u01c6\u0003p8\u0000"+
		"\u01c5\u01c7\u0005;\u0000\u0000\u01c6\u01c5\u0001\u0000\u0000\u0000\u01c6"+
		"\u01c7\u0001\u0000\u0000\u0000\u01c77\u0001\u0000\u0000\u0000\u01c8\u01ca"+
		"\u0003\u0002\u0001\u0000\u01c9\u01c8\u0001\u0000\u0000\u0000\u01c9\u01ca"+
		"\u0001\u0000\u0000\u0000\u01ca\u01cb\u0001\u0000\u0000\u0000\u01cb\u01cc"+
		"\u0005#\u0000\u0000\u01cc\u01ce\u0003t:\u0000\u01cd\u01cf\u0005:\u0000"+
		"\u0000\u01ce\u01cd\u0001\u0000\u0000\u0000\u01ce\u01cf\u0001\u0000\u0000"+
		"\u0000\u01cf\u01d1\u0001\u0000\u0000\u0000\u01d0\u01d2\u0003\u0088D\u0000"+
		"\u01d1\u01d0\u0001\u0000\u0000\u0000\u01d1\u01d2\u0001\u0000\u0000\u0000"+
		"\u01d2\u01d3\u0001\u0000\u0000\u0000\u01d3\u01d6\u0003\u0080@\u0000\u01d4"+
		"\u01d5\u0005@\u0000\u0000\u01d5\u01d7\u0003p8\u0000\u01d6\u01d4\u0001"+
		"\u0000\u0000\u0000\u01d6\u01d7\u0001\u0000\u0000\u0000\u01d7\u01d8\u0001"+
		"\u0000\u0000\u0000\u01d8\u01da\u0003\u0090H\u0000\u01d9\u01db\u0005;\u0000"+
		"\u0000\u01da\u01d9\u0001\u0000\u0000\u0000\u01da\u01db\u0001\u0000\u0000"+
		"\u0000\u01db9\u0001\u0000\u0000\u0000\u01dc\u01de\u0003\u0002\u0001\u0000"+
		"\u01dd\u01dc\u0001\u0000\u0000\u0000\u01dd\u01de\u0001\u0000\u0000\u0000"+
		"\u01de\u01df\u0001\u0000\u0000\u0000\u01df\u01e1\u0005\u000e\u0000\u0000"+
		"\u01e0\u01e2\u0005:\u0000\u0000\u01e1\u01e0\u0001\u0000\u0000\u0000\u01e1"+
		"\u01e2\u0001\u0000\u0000\u0000\u01e2\u01e3\u0001\u0000\u0000\u0000\u01e3"+
		"\u01e6\u0003\u0080@\u0000\u01e4\u01e5\u0005@\u0000\u0000\u01e5\u01e7\u0003"+
		"p8\u0000\u01e6\u01e4\u0001\u0000\u0000\u0000\u01e6\u01e7\u0001\u0000\u0000"+
		"\u0000\u01e7\u01e8\u0001\u0000\u0000\u0000\u01e8\u01ea\u0003\u0090H\u0000"+
		"\u01e9\u01eb\u0005;\u0000\u0000\u01ea\u01e9\u0001\u0000\u0000\u0000\u01ea"+
		"\u01eb\u0001\u0000\u0000\u0000\u01eb;\u0001\u0000\u0000\u0000\u01ec\u01ee"+
		"\u0003\u0002\u0001\u0000\u01ed\u01ec\u0001\u0000\u0000\u0000\u01ed\u01ee"+
		"\u0001\u0000\u0000\u0000\u01ee\u01ef\u0001\u0000\u0000\u0000\u01ef\u01f0"+
		"\u0005\u0010\u0000\u0000\u01f0\u01f2\u0003t:\u0000\u01f1\u01f3\u0005:"+
		"\u0000\u0000\u01f2\u01f1\u0001\u0000\u0000\u0000\u01f2\u01f3\u0001\u0000"+
		"\u0000\u0000\u01f3\u01f4\u0001\u0000\u0000\u0000\u01f4\u01f7\u0003\u0080"+
		"@\u0000\u01f5\u01f6\u0005@\u0000\u0000\u01f6\u01f8\u0003p8\u0000\u01f7"+
		"\u01f5\u0001\u0000\u0000\u0000\u01f7\u01f8\u0001\u0000\u0000\u0000\u01f8"+
		"\u01f9\u0001\u0000\u0000\u0000\u01f9\u01fb\u0003\u0090H\u0000\u01fa\u01fc"+
		"\u0005;\u0000\u0000\u01fb\u01fa\u0001\u0000\u0000\u0000\u01fb\u01fc\u0001"+
		"\u0000\u0000\u0000\u01fc=\u0001\u0000\u0000\u0000\u01fd\u01ff\u0003\u0002"+
		"\u0001\u0000\u01fe\u01fd\u0001\u0000\u0000\u0000\u01fe\u01ff\u0001\u0000"+
		"\u0000\u0000\u01ff\u0200\u0001\u0000\u0000\u0000\u0200\u0201\u0005\u0010"+
		"\u0000\u0000\u0201\u0203\u0003t:\u0000\u0202\u0204\u0005:\u0000\u0000"+
		"\u0203\u0202\u0001\u0000\u0000\u0000\u0203\u0204\u0001\u0000\u0000\u0000"+
		"\u0204\u0205\u0001\u0000\u0000\u0000\u0205\u0208\u0003\u0082A\u0000\u0206"+
		"\u0207\u0005@\u0000\u0000\u0207\u0209\u0003p8\u0000\u0208\u0206\u0001"+
		"\u0000\u0000\u0000\u0208\u0209\u0001\u0000\u0000\u0000\u0209\u020a\u0001"+
		"\u0000\u0000\u0000\u020a\u020c\u0003\u0090H\u0000\u020b\u020d\u0005;\u0000"+
		"\u0000\u020c\u020b\u0001\u0000\u0000\u0000\u020c\u020d\u0001\u0000\u0000"+
		"\u0000\u020d?\u0001\u0000\u0000\u0000\u020e\u0210\u0003\u0002\u0001\u0000"+
		"\u020f\u020e\u0001\u0000\u0000\u0000\u020f\u0210\u0001\u0000\u0000\u0000"+
		"\u0210\u0211\u0001\u0000\u0000\u0000\u0211\u0212\u0005\u0011\u0000\u0000"+
		"\u0212\u0214\u0003t:\u0000\u0213\u0215\u0005:\u0000\u0000\u0214\u0213"+
		"\u0001\u0000\u0000\u0000\u0214\u0215\u0001\u0000\u0000\u0000\u0215\u0216"+
		"\u0001\u0000\u0000\u0000\u0216\u0219\u0003\u0080@\u0000\u0217\u0218\u0005"+
		"@\u0000\u0000\u0218\u021a\u0003p8\u0000\u0219\u0217\u0001\u0000\u0000"+
		"\u0000\u0219\u021a\u0001\u0000\u0000\u0000\u021a\u021b\u0001\u0000\u0000"+
		"\u0000\u021b\u021d\u0003\u0090H\u0000\u021c\u021e\u0005;\u0000\u0000\u021d"+
		"\u021c\u0001\u0000\u0000\u0000\u021d\u021e\u0001\u0000\u0000\u0000\u021e"+
		"A\u0001\u0000\u0000\u0000\u021f\u0221\u0003\u0002\u0001\u0000\u0220\u021f"+
		"\u0001\u0000\u0000\u0000\u0220\u0221\u0001\u0000\u0000\u0000\u0221\u0222"+
		"\u0001\u0000\u0000\u0000\u0222\u0223\u0005\u0011\u0000\u0000\u0223\u0225"+
		"\u0003t:\u0000\u0224\u0226\u0005:\u0000\u0000\u0225\u0224\u0001\u0000"+
		"\u0000\u0000\u0225\u0226\u0001\u0000\u0000\u0000\u0226\u0227\u0001\u0000"+
		"\u0000\u0000\u0227\u022a\u0003\u0082A\u0000\u0228\u0229\u0005@\u0000\u0000"+
		"\u0229\u022b\u0003p8\u0000\u022a\u0228\u0001\u0000\u0000\u0000\u022a\u022b"+
		"\u0001\u0000\u0000\u0000\u022b\u022c\u0001\u0000\u0000\u0000\u022c\u022e"+
		"\u0003\u0090H\u0000\u022d\u022f\u0005;\u0000\u0000\u022e\u022d\u0001\u0000"+
		"\u0000\u0000\u022e\u022f\u0001\u0000\u0000\u0000\u022fC\u0001\u0000\u0000"+
		"\u0000\u0230\u0232\u0003\u0002\u0001\u0000\u0231\u0230\u0001\u0000\u0000"+
		"\u0000\u0231\u0232\u0001\u0000\u0000\u0000\u0232\u0233\u0001\u0000\u0000"+
		"\u0000\u0233\u0234\u0005\u0007\u0000\u0000\u0234\u0235\u0003t:\u0000\u0235"+
		"\u0237\u0003\u0080@\u0000\u0236\u0238\u0005;\u0000\u0000\u0237\u0236\u0001"+
		"\u0000\u0000\u0000\u0237\u0238\u0001\u0000\u0000\u0000\u0238E\u0001\u0000"+
		"\u0000\u0000\u0239\u023b\u0003\u0002\u0001\u0000\u023a\u0239\u0001\u0000"+
		"\u0000\u0000\u023a\u023b\u0001\u0000\u0000\u0000\u023b\u023c\u0001\u0000"+
		"\u0000\u0000\u023c\u023d\u0005\b\u0000\u0000\u023d\u023e\u0003t:\u0000"+
		"\u023e\u0240\u0003\u0080@\u0000\u023f\u0241\u0005;\u0000\u0000\u0240\u023f"+
		"\u0001\u0000\u0000\u0000\u0240\u0241\u0001\u0000\u0000\u0000\u0241G\u0001"+
		"\u0000\u0000\u0000\u0242\u0243\u0005\u0016\u0000\u0000\u0243\u0247\u0005"+
		"4\u0000\u0000\u0244\u0246\u0003J%\u0000\u0245\u0244\u0001\u0000\u0000"+
		"\u0000\u0246\u0249\u0001\u0000\u0000\u0000\u0247\u0245\u0001\u0000\u0000"+
		"\u0000\u0247\u0248\u0001\u0000\u0000\u0000\u0248\u024a\u0001\u0000\u0000"+
		"\u0000\u0249\u0247\u0001\u0000\u0000\u0000\u024a\u024c\u00055\u0000\u0000"+
		"\u024b\u024d\u0005;\u0000\u0000\u024c\u024b\u0001\u0000\u0000\u0000\u024c"+
		"\u024d\u0001\u0000\u0000\u0000\u024dI\u0001\u0000\u0000\u0000\u024e\u0251"+
		"\u0003L&\u0000\u024f\u0251\u0003N\'\u0000\u0250\u024e\u0001\u0000\u0000"+
		"\u0000\u0250\u024f\u0001\u0000\u0000\u0000\u0251K\u0001\u0000\u0000\u0000"+
		"\u0252\u0254\u0003\u0002\u0001\u0000\u0253\u0252\u0001\u0000\u0000\u0000"+
		"\u0253\u0254\u0001\u0000\u0000\u0000\u0254\u0255\u0001\u0000\u0000\u0000"+
		"\u0255\u0256\u0003t:\u0000\u0256\u0257\u0005<\u0000\u0000\u0257\u0259"+
		"\u0003p8\u0000\u0258\u025a\u0005;\u0000\u0000\u0259\u0258\u0001\u0000"+
		"\u0000\u0000\u0259\u025a\u0001\u0000\u0000\u0000\u025aM\u0001\u0000\u0000"+
		"\u0000\u025b\u025d\u0003\u0002\u0001\u0000\u025c\u025b\u0001\u0000\u0000"+
		"\u0000\u025c\u025d\u0001\u0000\u0000\u0000\u025d\u025e\u0001\u0000\u0000"+
		"\u0000\u025e\u025f\u0003t:\u0000\u025f\u0260\u00052\u0000\u0000\u0260"+
		"\u0261\u0003p8\u0000\u0261\u0262\u00053\u0000\u0000\u0262\u0263\u0005"+
		"<\u0000\u0000\u0263\u0265\u0003p8\u0000\u0264\u0266\u0005;\u0000\u0000"+
		"\u0265\u0264\u0001\u0000\u0000\u0000\u0265\u0266\u0001\u0000\u0000\u0000"+
		"\u0266O\u0001\u0000\u0000\u0000\u0267\u0269\u0003R)\u0000\u0268\u026a"+
		"\u0005;\u0000\u0000\u0269\u0268\u0001\u0000\u0000\u0000\u0269\u026a\u0001"+
		"\u0000\u0000\u0000\u026aQ\u0001\u0000\u0000\u0000\u026b\u026c\u0006)\uffff"+
		"\uffff\u0000\u026c\u026d\u0005\u001c\u0000\u0000\u026d\u027e\u0003R)\u0015"+
		"\u026e\u026f\u0005\f\u0000\u0000\u026f\u027e\u0003R)\u0011\u0270\u027e"+
		"\u0003T*\u0000\u0271\u027e\u0003V+\u0000\u0272\u027e\u0003Z-\u0000\u0273"+
		"\u027e\u0003\\.\u0000\u0274\u027e\u0003^/\u0000\u0275\u027e\u0003d2\u0000"+
		"\u0276\u027e\u0003`0\u0000\u0277\u027e\u0003b1\u0000\u0278\u027e\u0003"+
		"t:\u0000\u0279\u027a\u00050\u0000\u0000\u027a\u027b\u0003R)\u0000\u027b"+
		"\u027c\u00051\u0000\u0000\u027c\u027e\u0001\u0000\u0000\u0000\u027d\u026b"+
		"\u0001\u0000\u0000\u0000\u027d\u026e\u0001\u0000\u0000\u0000\u027d\u0270"+
		"\u0001\u0000\u0000\u0000\u027d\u0271\u0001\u0000\u0000\u0000\u027d\u0272"+
		"\u0001\u0000\u0000\u0000\u027d\u0273\u0001\u0000\u0000\u0000\u027d\u0274"+
		"\u0001\u0000\u0000\u0000\u027d\u0275\u0001\u0000\u0000\u0000\u027d\u0276"+
		"\u0001\u0000\u0000\u0000\u027d\u0277\u0001\u0000\u0000\u0000\u027d\u0278"+
		"\u0001\u0000\u0000\u0000\u027d\u0279\u0001\u0000\u0000\u0000\u027e\u02c2"+
		"\u0001\u0000\u0000\u0000\u027f\u0280\n\u0014\u0000\u0000\u0280\u0281\u0007"+
		"\u0002\u0000\u0000\u0281\u02c1\u0003R)\u0015\u0282\u0283\n\u0013\u0000"+
		"\u0000\u0283\u0284\u0007\u0003\u0000\u0000\u0284\u02c1\u0003R)\u0014\u0285"+
		"\u0286\n\u0012\u0000\u0000\u0286\u0287\u0007\u0004\u0000\u0000\u0287\u02c1"+
		"\u0003R)\u0013\u0288\u0289\n\u0010\u0000\u0000\u0289\u028a\u00058\u0000"+
		"\u0000\u028a\u02c1\u0003R)\u0011\u028b\u028d\n\u000f\u0000\u0000\u028c"+
		"\u028e\u0005\u001c\u0000\u0000\u028d\u028c\u0001\u0000\u0000\u0000\u028d"+
		"\u028e\u0001\u0000\u0000\u0000\u028e\u028f\u0001\u0000\u0000\u0000\u028f"+
		"\u0290\u0005\u0014\u0000\u0000\u0290\u02c1\u0003R)\u0010\u0291\u0292\n"+
		"\r\u0000\u0000\u0292\u0293\u0007\u0005\u0000\u0000\u0293\u02c1\u0003R"+
		")\u000e\u0294\u0295\n\f\u0000\u0000\u0295\u0296\u0005\u001f\u0000\u0000"+
		"\u0296\u02c1\u0003R)\r\u0297\u0298\n\u000b\u0000\u0000\u0298\u0299\u0005"+
		" \u0000\u0000\u0299\u02c1\u0003R)\f\u029a\u029b\n\u001a\u0000\u0000\u029b"+
		"\u029c\u00056\u0000\u0000\u029c\u02c1\u0003t:\u0000\u029d\u029f\n\u0019"+
		"\u0000\u0000\u029e\u02a0\u0005:\u0000\u0000\u029f\u029e\u0001\u0000\u0000"+
		"\u0000\u029f\u02a0\u0001\u0000\u0000\u0000\u02a0\u02a2\u0001\u0000\u0000"+
		"\u0000\u02a1\u02a3\u0003\u008aE\u0000\u02a2\u02a1\u0001\u0000\u0000\u0000"+
		"\u02a2\u02a3\u0001\u0000\u0000\u0000\u02a3\u02a4\u0001\u0000\u0000\u0000"+
		"\u02a4\u02ad\u00050\u0000\u0000\u02a5\u02aa\u0003|>\u0000\u02a6\u02a7"+
		"\u00057\u0000\u0000\u02a7\u02a9\u0003|>\u0000\u02a8\u02a6\u0001\u0000"+
		"\u0000\u0000\u02a9\u02ac\u0001\u0000\u0000\u0000\u02aa\u02a8\u0001\u0000"+
		"\u0000\u0000\u02aa\u02ab\u0001\u0000\u0000\u0000\u02ab\u02ae\u0001\u0000"+
		"\u0000\u0000\u02ac\u02aa\u0001\u0000\u0000\u0000\u02ad\u02a5\u0001\u0000"+
		"\u0000\u0000\u02ad\u02ae\u0001\u0000\u0000\u0000\u02ae\u02af\u0001\u0000"+
		"\u0000\u0000\u02af\u02c1\u00051\u0000\u0000\u02b0\u02b1\n\u0018\u0000"+
		"\u0000\u02b1\u02b2\u00052\u0000\u0000\u02b2\u02b3\u0003R)\u0000\u02b3"+
		"\u02b4\u00053\u0000\u0000\u02b4\u02c1\u0001\u0000\u0000\u0000\u02b5\u02b6"+
		"\n\u0017\u0000\u0000\u02b6\u02b7\u0005.\u0000\u0000\u02b7\u02c1\u0003"+
		"p8\u0000\u02b8\u02b9\n\u0016\u0000\u0000\u02b9\u02c1\u00059\u0000\u0000"+
		"\u02ba\u02bb\n\u000e\u0000\u0000\u02bb\u02bd\u0005\u0018\u0000\u0000\u02bc"+
		"\u02be\u0005\u001c\u0000\u0000\u02bd\u02bc\u0001\u0000\u0000\u0000\u02bd"+
		"\u02be\u0001\u0000\u0000\u0000\u02be\u02bf\u0001\u0000\u0000\u0000\u02bf"+
		"\u02c1\u0003p8\u0000\u02c0\u027f\u0001\u0000\u0000\u0000\u02c0\u0282\u0001"+
		"\u0000\u0000\u0000\u02c0\u0285\u0001\u0000\u0000\u0000\u02c0\u0288\u0001"+
		"\u0000\u0000\u0000\u02c0\u028b\u0001\u0000\u0000\u0000\u02c0\u0291\u0001"+
		"\u0000\u0000\u0000\u02c0\u0294\u0001\u0000\u0000\u0000\u02c0\u0297\u0001"+
		"\u0000\u0000\u0000\u02c0\u029a\u0001\u0000\u0000\u0000\u02c0\u029d\u0001"+
		"\u0000\u0000\u0000\u02c0\u02b0\u0001\u0000\u0000\u0000\u02c0\u02b5\u0001"+
		"\u0000\u0000\u0000\u02c0\u02b8\u0001\u0000\u0000\u0000\u02c0\u02ba\u0001"+
		"\u0000\u0000\u0000\u02c1\u02c4\u0001\u0000\u0000\u0000\u02c2\u02c0\u0001"+
		"\u0000\u0000\u0000\u02c2\u02c3\u0001\u0000\u0000\u0000\u02c3S\u0001\u0000"+
		"\u0000\u0000\u02c4\u02c2\u0001\u0000\u0000\u0000\u02c5\u02c6\u0005\u0017"+
		"\u0000\u0000\u02c6\u02c7\u0003R)\u0000\u02c7\u02ca\u0003\u0092I\u0000"+
		"\u02c8\u02c9\u0005\u001b\u0000\u0000\u02c9\u02cb\u0003\u0092I\u0000\u02ca"+
		"\u02c8\u0001\u0000\u0000\u0000\u02ca\u02cb\u0001\u0000\u0000\u0000\u02cb"+
		"\u02cd\u0001\u0000\u0000\u0000\u02cc\u02ce\u0005;\u0000\u0000\u02cd\u02cc"+
		"\u0001\u0000\u0000\u0000\u02cd\u02ce\u0001\u0000\u0000\u0000\u02ceU\u0001"+
		"\u0000\u0000\u0000\u02cf\u02d0\u0005\u0019\u0000\u0000\u02d0\u02d4\u0003"+
		"\u0090H\u0000\u02d1\u02d3\u0003X,\u0000\u02d2\u02d1\u0001\u0000\u0000"+
		"\u0000\u02d3\u02d6\u0001\u0000\u0000\u0000\u02d4\u02d2\u0001\u0000\u0000"+
		"\u0000\u02d4\u02d5\u0001\u0000\u0000\u0000\u02d5\u02d9\u0001\u0000\u0000"+
		"\u0000\u02d6\u02d4\u0001\u0000\u0000\u0000\u02d7\u02d8\u0005\u001b\u0000"+
		"\u0000\u02d8\u02da\u0003\u0090H\u0000\u02d9\u02d7\u0001\u0000\u0000\u0000"+
		"\u02d9\u02da\u0001\u0000\u0000\u0000\u02da\u02dc\u0001\u0000\u0000\u0000"+
		"\u02db\u02dd\u0005;\u0000\u0000\u02dc\u02db\u0001\u0000\u0000\u0000\u02dc"+
		"\u02dd\u0001\u0000\u0000\u0000\u02ddW\u0001\u0000\u0000\u0000\u02de\u02df"+
		"\u0005\u001a\u0000\u0000\u02df\u02e0\u0003p8\u0000\u02e0\u02e1\u0003\u0090"+
		"H\u0000\u02e1Y\u0001\u0000\u0000\u0000\u02e2\u02e4\u0005:\u0000\u0000"+
		"\u02e3\u02e2\u0001\u0000\u0000\u0000\u02e3\u02e4\u0001\u0000\u0000\u0000"+
		"\u02e4\u02e5\u0001\u0000\u0000\u0000\u02e5\u02e8\u0003\u0086C\u0000\u02e6"+
		"\u02e7\u0005@\u0000\u0000\u02e7\u02e9\u0003p8\u0000\u02e8\u02e6\u0001"+
		"\u0000\u0000\u0000\u02e8\u02e9\u0001\u0000\u0000\u0000\u02e9\u02ea\u0001"+
		"\u0000\u0000\u0000\u02ea\u02eb\u0003\u0092I\u0000\u02eb[\u0001\u0000\u0000"+
		"\u0000\u02ec\u02ed\u0003p8\u0000\u02ed\u02ee\u0003\u008cF\u0000\u02ee"+
		"]\u0001\u0000\u0000\u0000\u02ef\u02f8\u00052\u0000\u0000\u02f0\u02f5\u0003"+
		"R)\u0000\u02f1\u02f2\u00057\u0000\u0000\u02f2\u02f4\u0003R)\u0000\u02f3"+
		"\u02f1\u0001\u0000\u0000\u0000\u02f4\u02f7\u0001\u0000\u0000\u0000\u02f5"+
		"\u02f3\u0001\u0000\u0000\u0000\u02f5\u02f6\u0001\u0000\u0000\u0000\u02f6"+
		"\u02f9\u0001\u0000\u0000\u0000\u02f7\u02f5\u0001\u0000\u0000\u0000\u02f8"+
		"\u02f0\u0001\u0000\u0000\u0000\u02f8\u02f9\u0001\u0000\u0000\u0000\u02f9"+
		"\u02fa\u0001\u0000\u0000\u0000\u02fa\u02fb\u00053\u0000\u0000\u02fb_\u0001"+
		"\u0000\u0000\u0000\u02fc\u02fd\u0005\'\u0000\u0000\u02fd\u02fe\u0003R"+
		")\u0000\u02fea\u0001\u0000\u0000\u0000\u02ff\u0300\u0005&\u0000\u0000"+
		"\u0300\u0301\u0003R)\u0000\u0301c\u0001\u0000\u0000\u0000\u0302\u0308"+
		"\u0003f3\u0000\u0303\u0308\u0003h4\u0000\u0304\u0308\u0003j5\u0000\u0305"+
		"\u0308\u0003l6\u0000\u0306\u0308\u0003n7\u0000\u0307\u0302\u0001\u0000"+
		"\u0000\u0000\u0307\u0303\u0001\u0000\u0000\u0000\u0307\u0304\u0001\u0000"+
		"\u0000\u0000\u0307\u0305\u0001\u0000\u0000\u0000\u0307\u0306\u0001\u0000"+
		"\u0000\u0000\u0308e\u0001\u0000\u0000\u0000\u0309\u030a\u0005\\\u0000"+
		"\u0000\u030ag\u0001\u0000\u0000\u0000\u030b\u030c\u0005]\u0000\u0000\u030c"+
		"i\u0001\u0000\u0000\u0000\u030d\u030e\u0005^\u0000\u0000\u030ek\u0001"+
		"\u0000\u0000\u0000\u030f\u0310\u0005W\u0000\u0000\u0310m\u0001\u0000\u0000"+
		"\u0000\u0311\u0312\u0005\u001d\u0000\u0000\u0312o\u0001\u0000\u0000\u0000"+
		"\u0313\u0314\u00068\uffff\uffff\u0000\u0314\u0315\u00050\u0000\u0000\u0315"+
		"\u0316\u0003p8\u0000\u0316\u0317\u00051\u0000\u0000\u0317\u0326\u0001"+
		"\u0000\u0000\u0000\u0318\u0326\u0003\u008aE\u0000\u0319\u031a\u00052\u0000"+
		"\u0000\u031a\u031b\u0003p8\u0000\u031b\u031c\u0005;\u0000\u0000\u031c"+
		"\u031d\u0003h4\u0000\u031d\u031e\u00053\u0000\u0000\u031e\u0326\u0001"+
		"\u0000\u0000\u0000\u031f\u0326\u0003*\u0015\u0000\u0320\u0326\u0003,\u0016"+
		"\u0000\u0321\u0326\u0003.\u0017\u0000\u0322\u0326\u00030\u0018\u0000\u0323"+
		"\u0326\u0003r9\u0000\u0324\u0326\u0003t:\u0000\u0325\u0313\u0001\u0000"+
		"\u0000\u0000\u0325\u0318\u0001\u0000\u0000\u0000\u0325\u0319\u0001\u0000"+
		"\u0000\u0000\u0325\u031f\u0001\u0000\u0000\u0000\u0325\u0320\u0001\u0000"+
		"\u0000\u0000\u0325\u0321\u0001\u0000\u0000\u0000\u0325\u0322\u0001\u0000"+
		"\u0000\u0000\u0325\u0323\u0001\u0000\u0000\u0000\u0325\u0324\u0001\u0000"+
		"\u0000\u0000\u0326\u0330\u0001\u0000\u0000\u0000\u0327\u0328\n\u000b\u0000"+
		"\u0000\u0328\u032f\u0003\u008aE\u0000\u0329\u032a\n\n\u0000\u0000\u032a"+
		"\u032b\u00056\u0000\u0000\u032b\u032f\u0003t:\u0000\u032c\u032d\n\u0003"+
		"\u0000\u0000\u032d\u032f\u00059\u0000\u0000\u032e\u0327\u0001\u0000\u0000"+
		"\u0000\u032e\u0329\u0001\u0000\u0000\u0000\u032e\u032c\u0001\u0000\u0000"+
		"\u0000\u032f\u0332\u0001\u0000\u0000\u0000\u0330\u032e\u0001\u0000\u0000"+
		"\u0000\u0330\u0331\u0001\u0000\u0000\u0000\u0331q\u0001\u0000\u0000\u0000"+
		"\u0332\u0330\u0001\u0000\u0000\u0000\u0333\u0335\u0003\u0002\u0001\u0000"+
		"\u0334\u0333\u0001\u0000\u0000\u0000\u0334\u0335\u0001\u0000\u0000\u0000"+
		"\u0335\u0336\u0001\u0000\u0000\u0000\u0336\u0337\u0005[\u0000\u0000\u0337"+
		"s\u0001\u0000\u0000\u0000\u0338\u033d\u0005X\u0000\u0000\u0339\u033d\u0005"+
		"Y\u0000\u0000\u033a\u033d\u0005Z\u0000\u0000\u033b\u033d\u0003\u0094J"+
		"\u0000\u033c\u0338\u0001\u0000\u0000\u0000\u033c\u0339\u0001\u0000\u0000"+
		"\u0000\u033c\u033a\u0001\u0000\u0000\u0000\u033c\u033b\u0001\u0000\u0000"+
		"\u0000\u033du\u0001\u0000\u0000\u0000\u033e\u0340\u0003\u0002\u0001\u0000"+
		"\u033f\u033e\u0001\u0000\u0000\u0000\u033f\u0340\u0001\u0000\u0000\u0000"+
		"\u0340\u0341\u0001\u0000\u0000\u0000\u0341\u0343\u0003t:\u0000\u0342\u0344"+
		"\u00059\u0000\u0000\u0343\u0342\u0001\u0000\u0000\u0000\u0343\u0344\u0001"+
		"\u0000\u0000\u0000\u0344\u0347\u0001\u0000\u0000\u0000\u0345\u0346\u0005"+
		"<\u0000\u0000\u0346\u0348\u0003p8\u0000\u0347\u0345\u0001\u0000\u0000"+
		"\u0000\u0347\u0348\u0001\u0000\u0000\u0000\u0348w\u0001\u0000\u0000\u0000"+
		"\u0349\u034c\u0003t:\u0000\u034a\u034b\u0005<\u0000\u0000\u034b\u034d"+
		"\u0003R)\u0000\u034c\u034a\u0001\u0000\u0000\u0000\u034c\u034d\u0001\u0000"+
		"\u0000\u0000\u034dy\u0001\u0000\u0000\u0000\u034e\u034f\u0003t:\u0000"+
		"\u034f\u0350\u0005E\u0000\u0000\u0350\u0351\u0003R)\u0000\u0351{\u0001"+
		"\u0000\u0000\u0000\u0352\u0355\u0003R)\u0000\u0353\u0355\u0003z=\u0000"+
		"\u0354\u0352\u0001\u0000\u0000\u0000\u0354\u0353\u0001\u0000\u0000\u0000"+
		"\u0355}\u0001\u0000\u0000\u0000\u0356\u035b\u0003t:\u0000\u0357\u0358"+
		"\u00057\u0000\u0000\u0358\u035a\u0003t:\u0000\u0359\u0357\u0001\u0000"+
		"\u0000\u0000\u035a\u035d\u0001\u0000\u0000\u0000\u035b\u0359\u0001\u0000"+
		"\u0000\u0000\u035b\u035c\u0001\u0000\u0000\u0000\u035c\u007f\u0001\u0000"+
		"\u0000\u0000\u035d\u035b\u0001\u0000\u0000\u0000\u035e\u0367\u00050\u0000"+
		"\u0000\u035f\u0364\u0003v;\u0000\u0360\u0361\u00057\u0000\u0000\u0361"+
		"\u0363\u0003v;\u0000\u0362\u0360\u0001\u0000\u0000\u0000\u0363\u0366\u0001"+
		"\u0000\u0000\u0000\u0364\u0362\u0001\u0000\u0000\u0000\u0364\u0365\u0001"+
		"\u0000\u0000\u0000\u0365\u0368\u0001\u0000\u0000\u0000\u0366\u0364\u0001"+
		"\u0000\u0000\u0000\u0367\u035f\u0001\u0000\u0000\u0000\u0367\u0368\u0001"+
		"\u0000\u0000\u0000\u0368\u0369\u0001\u0000\u0000\u0000\u0369\u036a\u0005"+
		"1\u0000\u0000\u036a\u0081\u0001\u0000\u0000\u0000\u036b\u036c\u00050\u0000"+
		"\u0000\u036c\u0375\u00052\u0000\u0000\u036d\u0372\u0003v;\u0000\u036e"+
		"\u036f\u00057\u0000\u0000\u036f\u0371\u0003v;\u0000\u0370\u036e\u0001"+
		"\u0000\u0000\u0000\u0371\u0374\u0001\u0000\u0000\u0000\u0372\u0370\u0001"+
		"\u0000\u0000\u0000\u0372\u0373\u0001\u0000\u0000\u0000\u0373\u0376\u0001"+
		"\u0000\u0000\u0000\u0374\u0372\u0001\u0000\u0000\u0000\u0375\u036d\u0001"+
		"\u0000\u0000\u0000\u0375\u0376\u0001\u0000\u0000\u0000\u0376\u0377\u0001"+
		"\u0000\u0000\u0000\u0377\u0378\u00053\u0000\u0000\u0378\u0379\u00051\u0000"+
		"\u0000\u0379\u0083\u0001\u0000\u0000\u0000\u037a\u0383\u00054\u0000\u0000"+
		"\u037b\u0380\u0003v;\u0000\u037c\u037d\u00057\u0000\u0000\u037d\u037f"+
		"\u0003v;\u0000\u037e\u037c\u0001\u0000\u0000\u0000\u037f\u0382\u0001\u0000"+
		"\u0000\u0000\u0380\u037e\u0001\u0000\u0000\u0000\u0380\u0381\u0001\u0000"+
		"\u0000\u0000\u0381\u0384\u0001\u0000\u0000\u0000\u0382\u0380\u0001\u0000"+
		"\u0000\u0000\u0383\u037b\u0001\u0000\u0000\u0000\u0383\u0384\u0001\u0000"+
		"\u0000\u0000\u0384\u0386\u0001\u0000\u0000\u0000\u0385\u0387\u00057\u0000"+
		"\u0000\u0386\u0385\u0001\u0000\u0000\u0000\u0386\u0387\u0001\u0000\u0000"+
		"\u0000\u0387\u0388\u0001\u0000\u0000\u0000\u0388\u0389\u00055\u0000\u0000"+
		"\u0389\u0085\u0001\u0000\u0000\u0000\u038a\u0393\u0005B\u0000\u0000\u038b"+
		"\u0390\u0003v;\u0000\u038c\u038d\u00057\u0000\u0000\u038d\u038f\u0003"+
		"v;\u0000\u038e\u038c\u0001\u0000\u0000\u0000\u038f\u0392\u0001\u0000\u0000"+
		"\u0000\u0390\u038e\u0001\u0000\u0000\u0000\u0390\u0391\u0001\u0000\u0000"+
		"\u0000\u0391\u0394\u0001\u0000\u0000\u0000\u0392\u0390\u0001\u0000\u0000"+
		"\u0000\u0393\u038b\u0001\u0000\u0000\u0000\u0393\u0394\u0001\u0000\u0000"+
		"\u0000\u0394\u0395\u0001\u0000\u0000\u0000\u0395\u0396\u0005B\u0000\u0000"+
		"\u0396\u0087\u0001\u0000\u0000\u0000\u0397\u03a0\u00052\u0000\u0000\u0398"+
		"\u039d\u0003r9\u0000\u0399\u039a\u00057\u0000\u0000\u039a\u039c\u0003"+
		"r9\u0000\u039b\u0399\u0001\u0000\u0000\u0000\u039c\u039f\u0001\u0000\u0000"+
		"\u0000\u039d\u039b\u0001\u0000\u0000\u0000\u039d\u039e\u0001\u0000\u0000"+
		"\u0000\u039e\u03a1\u0001\u0000\u0000\u0000\u039f\u039d\u0001\u0000\u0000"+
		"\u0000\u03a0\u0398\u0001\u0000\u0000\u0000\u03a0\u03a1\u0001\u0000\u0000"+
		"\u0000\u03a1\u03a2\u0001\u0000\u0000\u0000\u03a2\u03a3\u00053\u0000\u0000"+
		"\u03a3\u0089\u0001\u0000\u0000\u0000\u03a4\u03ad\u00052\u0000\u0000\u03a5"+
		"\u03aa\u0003p8\u0000\u03a6\u03a7\u00057\u0000\u0000\u03a7\u03a9\u0003"+
		"p8\u0000\u03a8\u03a6\u0001\u0000\u0000\u0000\u03a9\u03ac\u0001\u0000\u0000"+
		"\u0000\u03aa\u03a8\u0001\u0000\u0000\u0000\u03aa\u03ab\u0001\u0000\u0000"+
		"\u0000\u03ab\u03ae\u0001\u0000\u0000\u0000\u03ac\u03aa\u0001\u0000\u0000"+
		"\u0000\u03ad\u03a5\u0001\u0000\u0000\u0000\u03ad\u03ae\u0001\u0000\u0000"+
		"\u0000\u03ae\u03af\u0001\u0000\u0000\u0000\u03af\u03b0\u00053\u0000\u0000"+
		"\u03b0\u008b\u0001\u0000\u0000\u0000\u03b1\u03ba\u00054\u0000\u0000\u03b2"+
		"\u03b7\u0003x<\u0000\u03b3\u03b4\u00057\u0000\u0000\u03b4\u03b6\u0003"+
		"x<\u0000\u03b5\u03b3\u0001\u0000\u0000\u0000\u03b6\u03b9\u0001\u0000\u0000"+
		"\u0000\u03b7\u03b5\u0001\u0000\u0000\u0000\u03b7\u03b8\u0001\u0000\u0000"+
		"\u0000\u03b8\u03bb\u0001\u0000\u0000\u0000\u03b9\u03b7\u0001\u0000\u0000"+
		"\u0000\u03ba\u03b2\u0001\u0000\u0000\u0000\u03ba\u03bb\u0001\u0000\u0000"+
		"\u0000\u03bb\u03bd\u0001\u0000\u0000\u0000\u03bc\u03be\u00057\u0000\u0000"+
		"\u03bd\u03bc\u0001\u0000\u0000\u0000\u03bd\u03be\u0001\u0000\u0000\u0000"+
		"\u03be\u03bf\u0001\u0000\u0000\u0000\u03bf\u03c0\u00055\u0000\u0000\u03c0"+
		"\u008d\u0001\u0000\u0000\u0000\u03c1\u03c6\u0003p8\u0000\u03c2\u03c3\u0005"+
		"7\u0000\u0000\u03c3\u03c5\u0003p8\u0000\u03c4\u03c2\u0001\u0000\u0000"+
		"\u0000\u03c5\u03c8\u0001\u0000\u0000\u0000\u03c6\u03c4\u0001\u0000\u0000"+
		"\u0000\u03c6\u03c7\u0001\u0000\u0000\u0000\u03c7\u008f\u0001\u0000\u0000"+
		"\u0000\u03c8\u03c6\u0001\u0000\u0000\u0000\u03c9\u03cd\u00054\u0000\u0000"+
		"\u03ca\u03cc\u0003\u0004\u0002\u0000\u03cb\u03ca\u0001\u0000\u0000\u0000"+
		"\u03cc\u03cf\u0001\u0000\u0000\u0000\u03cd\u03cb\u0001\u0000\u0000\u0000"+
		"\u03cd\u03ce\u0001\u0000\u0000\u0000\u03ce\u03d0\u0001\u0000\u0000\u0000"+
		"\u03cf\u03cd\u0001\u0000\u0000\u0000\u03d0\u03d1\u00055\u0000\u0000\u03d1"+
		"\u0091\u0001\u0000\u0000\u0000\u03d2\u03d5\u0003\u0090H\u0000\u03d3\u03d5"+
		"\u0003R)\u0000\u03d4\u03d2\u0001\u0000\u0000\u0000\u03d4\u03d3\u0001\u0000"+
		"\u0000\u0000\u03d5\u0093\u0001\u0000\u0000\u0000\u03d6\u03d7\u0007\u0006"+
		"\u0000\u0000\u03d7\u0095\u0001\u0000\u0000\u0000\u0090\u0099\u00b0\u00b5"+
		"\u00bb\u00be\u00c6\u00cb\u00cf\u00d4\u00d7\u00da\u00e0\u00e6\u00ec\u00f4"+
		"\u00fd\u0101\u0105\u0109\u010d\u0115\u011a\u011f\u0124\u0136\u0139\u013f"+
		"\u0143\u0147\u014a\u0150\u0154\u0157\u015c\u0160\u0163\u0168\u016c\u016e"+
		"\u0171\u0176\u017c\u017f\u0183\u0187\u018a\u018f\u0193\u0197\u019e\u01a2"+
		"\u01a8\u01ae\u01b6\u01b9\u01bc\u01c1\u01c6\u01c9\u01ce\u01d1\u01d6\u01da"+
		"\u01dd\u01e1\u01e6\u01ea\u01ed\u01f2\u01f7\u01fb\u01fe\u0203\u0208\u020c"+
		"\u020f\u0214\u0219\u021d\u0220\u0225\u022a\u022e\u0231\u0237\u023a\u0240"+
		"\u0247\u024c\u0250\u0253\u0259\u025c\u0265\u0269\u027d\u028d\u029f\u02a2"+
		"\u02aa\u02ad\u02bd\u02c0\u02c2\u02ca\u02cd\u02d4\u02d9\u02dc\u02e3\u02e8"+
		"\u02f5\u02f8\u0307\u0325\u032e\u0330\u0334\u033c\u033f\u0343\u0347\u034c"+
		"\u0354\u035b\u0364\u0367\u0372\u0375\u0380\u0383\u0386\u0390\u0393\u039d"+
		"\u03a0\u03aa\u03ad\u03b7\u03ba\u03bd\u03c6\u03cd\u03d4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
parser grammar CWScriptParser;

options {
	tokenVocab = CWScriptLexer;
}

sourceFile: (stmts += stmt)* EOF;

cwspec: CWSPEC_LINE_COMMENT | CWSPEC_BLOCK_COMMENT;

// STATEMENTS
stmt:
	importStmt
	| exportStmt
	| defn
	| letStmt
	| constStmt
	| assignStmt
	| memberAssignStmt
	| indexAssignStmt
	| ifStmt
	| tryCatchElseStmt
	| forStmt
	| execStmt
	| instantiateStmt
	| emitStmt
	| failStmt
	| returnStmt
	| exprStmt;

importStmt:
	IMPORT (bindings = braceBindingList) FROM (src = stringLit) SEMI?;

exportStmt: EXPORT (fields = braceFieldList) SEMI?;

binding: (name = ident) (AS (alias = ident))?;
bindingList: (binding (COMMA binding)*);
brackIdentList: LBRACK (ident (COMMA ident)*)? RBRACK;
braceBindingList:
	LBRACE (binding (COMMA binding)*)? COMMA? RBRACE;

letStmt:
	(spec = cwspec)? LET (name = ident) (COLON ty = typeExpr)? (
		EQ value = expr
	) SEMI? # LetIdentStmt
	| (spec = cwspec)? LET (names = brackIdentList) (
		COLON ty = typeExpr
	)? (EQ value = expr) SEMI? # LetTupleStmt
	| (spec = cwspec)? LET (bindings = braceBindingList) (
		COLON ty = typeExpr
	)? (EQ value = expr) SEMI? # LetStructStmt;

constStmt:
	(spec = cwspec)? (export = EXPORT)? CONST (name = ident) (
		COLON ty = typeExpr
	)? (EQ value = expr) SEMI?;

assignStmt:
	(name = ident) assignOp = (
		EQ
		| PLUS_EQ
		| MINUS_EQ
		| MUL_EQ
		| DIV_EQ
		| MOD_EQ
	) (value = expr) SEMI?;

memberAssignStmt:
	(obj = expr) DOT (memberName = ident) assignOp = (
		EQ
		| PLUS_EQ
		| MINUS_EQ
		| MUL_EQ
		| DIV_EQ
		| MOD_EQ
	) (value = expr) SEMI?;

indexAssignStmt:
	(obj = expr) LBRACK index = expr RBRACK assignOp = (
		EQ
		| PLUS_EQ
		| MINUS_EQ
		| MUL_EQ
		| DIV_EQ
		| MOD_EQ
	) value = expr SEMI?;

tryCatchElseStmt: tryCatchElseExpr_ SEMI?;

ifStmt: ifExpr_ SEMI?;
returnStmt: returnExpr_ SEMI?;
failStmt: failExpr_ SEMI?;

forStmt:
	FOR (name = ident) IN (iter = expr) body = block SEMI?					# ForIdentStmt
	| FOR (names = brackIdentList) (iter = expr) body = block SEMI?			# ForTupleStmt
	| FOR (bindings = braceBindingList) (iter = expr) body = block SEMI?	# ForStructStmt;

execStmt: EXEC_NOW value = expr SEMI?;
instantiateStmt: INSTANTIATE_NOW value = expr SEMI?;
emitStmt: EMIT value = expr SEMI?;

// END STATEMENTS

// DEFINITIONS
defn:
	contractDefn
	| interfaceDefn
	| structDefn
	| tupleDefn
	| unitDefn
	| enumDefn
	| typeAliasDefn
	| fnDefn
	| instantiateDefn
	| execDefn
	| execTupleDefn
	| queryDefn
	| queryTupleDefn
	| errorDefn
	| eventDefn
	| stateBlockDefn
	| implDefn;

contractDefn:
	(spec = cwspec)? (export = EXPORT)? CONTRACT (name = ident) (
		EXTENDS (base = typeExpr)
	)? (IMPLEMENTS (interfaces = typeExprList))? (body = block) SEMI?;

interfaceDefn:
	(spec = cwspec)? (export = EXPORT)? INTERFACE (name = ident) (
		EXTENDS (baseInterfaces = typeExprList)
	)? (body = block) SEMI?;

structDefn:
	(spec = cwspec)? (export = EXPORT)? STRUCT (name = ident) (
		typeParams = brackTypeParamList
	)? (fields = braceParamList) SEMI? # StructDefnBrace
	| (spec = cwspec)? STRUCT (name = ident) (
		typeParams = brackTypeParamList
	)? (fields = parenParamList) SEMI? # StructDefnParen;

tupleDefn:
	(spec = cwspec)? (export = EXPORT)? TUPLE (name = ident) (
		typeParams = brackTypeParamList
	)? LPAREN (elements = brackTypeExprList) RPAREN SEMI?;

unitDefn:
	(spec = cwspec)? (export = EXPORT)? UNIT (
		typeParams = brackTypeParamList
	)? (name = ident) SEMI?;

enumDefn:
	(spec = cwspec)? (export = EXPORT)? ENUM (name = ident) (
		typeParams = brackTypeParamList
	)? LBRACE (variants = enumVariantDefnList)? RBRACE SEMI?;

enumVariantDefnList: (enumVariantDefn (COMMA enumVariantDefn)*);

enumVariantDefn:
	(spec = cwspec)? (name = ident) (fields = braceParamList)	# EnumVariantStructDefnBrace
	| (spec = cwspec)? (name = ident) (fields = parenParamList)	# EnumVariantStructDefnParen
	| (spec = cwspec)? (name = ident) LPAREN (
		elements = brackTypeExprList
	) RPAREN							# EnumVariantTupleDefn
	| (spec = cwspec)? (name = ident)	# EnumVariantUnitDefn;

typeAliasDefn:
	(spec = cwspec)? (export = EXPORT)? TYPE (name = ident) (
		typeParams = brackTypeParamList
	)? EQ (ty = typeExpr) SEMI?;

fnDefn:
	(spec = cwspec)? (export = EXPORT)? FN (name = ident) (
		fallible = BANG
	)? (typeParams = brackTypeParamList)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

instantiateDefn:
	(spec = cwspec)? H_INSTANTIATE (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

execDefn:
	(spec = cwspec)? EXEC (name = ident) (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

execTupleDefn:
	(spec = cwspec)? EXEC (name = ident) (fallible = BANG)? (
		params = tupleParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

queryDefn:
	(spec = cwspec)? QUERY (name = ident) (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

queryTupleDefn:
	(spec = cwspec)? QUERY (name = ident) (fallible = BANG)? (
		params = tupleParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

errorDefn: (spec = cwspec)? (export = EXPORT)? ERROR (
		name = ident
	) (params = parenParamList) SEMI?;

eventDefn: (spec = cwspec)? (export = EXPORT)? EVENT (
		name = ident
	) (params = parenParamList) SEMI?;

stateBlockDefn:
	STATE LBRACE (stateFields += stateDefn)* RBRACE SEMI?;

stateDefn: stateItemDefn | stateMapDefn;

stateItemDefn: (spec = cwspec)? (name = ident) COLON (
		ty = typeExpr
	) SEMI?;

stateMapDefn:
	(spec = cwspec)? (name = ident) LBRACK (indexTy = typeExpr) RBRACK COLON (
		ty = typeExpr
	) SEMI?;

implDefn:
	(spec = cwspec)? IMPL (name = ident) (
		typeParams = brackTypeParamList
	) (body = block) SEMI?;

// Expression Statement
exprStmt: expr (semi = SEMI)?;

// END DEFINITIONS

expr:
	/* f[A, B]() */
	// f[T](x) //I:s it parameterized function call or call to the closure stored in the array?
	expr DOT (memberName = ident) # DotExpr
	| expr (fallible = BANG)? (typeArgs = brackTypeExprList)? LPAREN (
		(args += arg) (COMMA args += arg)*
	)? RPAREN										# CallExpr
	| expr LBRACK (index = expr) RBRACK				# IndexExpr
	| expr QUEST									# ExistsExpr
	| NOT expr										# NotExpr
	| expr (op = (MUL | DIV | MOD)) expr			# MulExpr
	| expr (op = (PLUS | MINUS)) expr				# AddExpr
	| expr (op = (LT | GT | LT_EQ | GT_EQ)) expr	# CompExpr
	| QUERY_NOW expr								# QueryExpr
	| expr D_QUEST expr								# ShortTryExpr
	| expr (negative = NOT)? IN expr				# InExpr
	| expr IS (negative = NOT)? (ty = typeExpr)		# IsExpr
	| expr (op = (D_EQ | NEQ)) expr					# EqExpr
	| expr AND expr									# AndExpr
	| expr OR expr									# OrExpr
	| ifExpr_										# IfExpr
	| tryCatchElseExpr_								# TryCatchElseExpr
	| blockClosureExpr								# ClosureExpr
	| exprClosureExpr								# ClosureExpr
	| structExpr_									# StructExpr
	| tupleExpr_									# TupleExpr
	| literal										# LiteralExpr
	| returnExpr_									# ReturnExpr
	| failExpr_										# FailExpr
	| ident											# IdentExpr
	| LPAREN expr RPAREN							# GroupedExpr;

ifExpr_:
	IF (pred = expr) (thenBody = blockOrExpr) (
		ELSE (elseBody = blockOrExpr)
	)? SEMI?;

tryCatchElseExpr_:
	TRY (body = block) (catchClauses += catchClause)* (
		ELSE (elseBody = block)
	)? SEMI?;

catchClause: CATCH (ty = typeExpr) (body = block);

/*
 Unlike Rust, CWS closures have params outside braces.
 
 Rust: { |x, y| -> Ty stmt* }
 
 CWS (block style): |x, y|! -> Ty { stmt* }
 
 CWS (expr style): |x: Ty, y?: Ty|! expr
 */
blockClosureExpr:
	(params = barsParamList) (fallible = BANG)? (
		ARROW (returnTy = typeExpr)
	)? (body = block);

// can't do return type
exprClosureExpr:
	(params = barsParamList) (fallible = BANG)? (body = exprStmt);

structExpr_: (ty = typeExpr) (fields = braceFieldList);
tupleExpr_:
	LBRACK ((elements += expr) (COMMA (elements += expr))*)? RBRACK;

returnExpr_: RETURN (value = expr);
failExpr_: FAIL (value = expr);
// END EXPRESSIONS

// LITERALS
literal: stringLit | intLit | decLit | boolLit | noneLit;

stringLit: StringLiteral;
intLit: IntLiteral;
decLit: DecLiteral;
boolLit: BoolLiteral;
noneLit: NONE;

// END LITERALS

// TYPE EXPRESSIONS
typeExpr:
	LPAREN typeExpr RPAREN							# GroupedTypeExpr
	| typeExpr (typeArgs = brackTypeExprList)		# ParameterizedTypeExpr
	| typeExpr DOT (memberName = ident)				# MemberTypeExpr
	| (elements = brackTypeExprList)				# TupleTypeExpr
	| LBRACK typeExpr SEMI (size = intLit) RBRACK	# ArrayTypeExpr
	| structDefn									# StructDefnTypeExpr
	| tupleDefn										# TupleDefnTypeExpr
	| unitDefn										# UnitDefnTypeExpr
	| enumDefn										# EnumDefnTypeExpr
	| typeExpr QUEST								# OptionTypeExpr
	| typeVar										# TypeVarExpr
	| ident											# IdentTypeExpr;

typeVar: (spec = cwspec)? PercentIdent;

// END TYPE EXPRESSIONS

// COMMON ELEMENTS

ident:
	HashIdent
	| DollarIdent
	| Ident
	| EscapedIdent
	| keywordIdent;
param: (spec = cwspec)? (name = ident) (optional = QUEST)? (
		COLON (ty = typeExpr)
	)?;
field: (name = ident) (COLON (value = expr))?;
namedArg: (name = ident) EQ (value = expr);
arg: (expr | namedArg);

identList: (ident (COMMA ident)*);
parenParamList: LPAREN (param (COMMA param)*)? RPAREN;
barsParamList: BAR (param (COMMA param)*)? BAR;
tupleParamList:
	LPAREN LBRACK (param (COMMA param)*)? RBRACK RPAREN;
braceParamList: LBRACE (param (COMMA param)*)? COMMA? RBRACE;
brackTypeParamList: LBRACK (typeVar (COMMA typeVar)*)? RBRACK;
brackTypeExprList: LBRACK (typeExpr (COMMA typeExpr)*)? RBRACK;
braceFieldList: LBRACE (field (COMMA field)*)? COMMA? RBRACE;

typeExprList: (typeExpr (COMMA typeExpr)*);
block: LBRACE (stmts += stmt)* RBRACE;
blockOrExpr: block | expr;

// Keywords which may be used as identifiers
keywordIdent:
	CONTRACT
	| INTERFACE
	| IMPORT
	| EXPORT
	| IMPLEMENTS
	| IMPL
	| EXTENDS
	| ERROR
	| EVENT
	| H_INSTANTIATE
	| INSTANTIATE
	| EXEC
	| QUERY
	| NONE
	| REPLY
	| FOR
	| IN
	| FROM
	| STATE
	| IF
	| FN
	| ELSE
	| AND
	| OR
	| TRUE
	| FALSE
	| LET
	| CONST
	| STRUCT
	| TUPLE
	| UNIT
	| ENUM
	| TYPE;

// END COMMON ELEMENTS
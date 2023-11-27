parser grammar CWScriptParser;

options {
	tokenVocab = CWScriptLexer;
}

sourceFile: (stmts += stmt)* EOF;

// STATEMENTS

stmt:
	importStmt
	| letStmt
	| constStmt
	| assignStmt
	| memberAssignStmt
	| indexAssignStmt
	| ifExpr_
	| tryCatchElseExpr_
	| forStmt
	| execStmt
	| instantiateStmt
	| emitStmt
	| failStmt
	| returnStmt
	| defn
	| expr SEMI?
	| typeExpr;

importStmt:
	IMPORT LBRACE (items = identList)? RBRACE FROM (
		src = StringLiteral
	) SEMI?;

letStmt: LET (binding = binding_) (EQ value = expr) SEMI?;

binding_:
	(name = ident) (COLON ty = typeExpr)?	# IdentBinding
	| LBRACK (names = identList)? RBRACK	# TupleBinding
	| LBRACE (names = identList)? RBRACE	# StructBinding;

constStmt:
	CONST (name = ident) (COLON ty = typeExpr)? (EQ value = expr) SEMI?;

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

returnStmt: RETURN (value = expr) SEMI?;
failStmt: FAIL (value = expr) SEMI?;

forStmt: FOR (binding = binding_) IN (iter = expr) body = block;

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
	| queryDefn
	| errorDefn
	| eventDefn
	| stateBlockDefn;

contractDefn:
	CONTRACT (name = ident) (EXTENDS (base = typeExpr))? (
		IMPLEMENTS (interfaces = typeExprList)
	)? (body = block) SEMI?;

interfaceDefn:
	INTERFACE (name = ident) (
		EXTENDS (baseInterfaces = typeExprList)
	)? (body = block) SEMI?;

structDefn:
	STRUCT (name = ident) (
		LBRACK typeParams = typeVarList RBRACK
	)? LBRACE (fields = paramList)? RBRACE
	| STRUCT (name = ident) (
		LBRACK typeParams = typeVarList RBRACK
	)? LPAREN (fields = paramList) RPAREN SEMI?;

tupleDefn:
	TUPLE (name = ident) (LBRACK typeParams = typeVarList RBRACK)? LBRACK (
		elements = typeExprList
	)? RPAREN SEMI?;

unitDefn:
	UNIT (LBRACK typeParams = typeVarList RBRACK)? (name = ident) SEMI?;

enumDefn:
	ENUM (name = ident) (LBRACK typeParams = typeVarList RBRACK)? LBRACE (
		variants = enumVariantDefnList
	)? RBRACE SEMI?;

enumVariantDefnList: (enumVariantDefn (COMMA enumVariantDefn)*);

enumVariantDefn:
	enumVariantStructDefn
	| enumVariantTupleDefn
	| enumVariantUnitDefn;

enumVariantStructDefn:
	(name = ident) LBRACE (fields = paramList)? RBRACE
	| (name = ident) LPAREN (fields = paramList)? RPAREN;

enumVariantTupleDefn: (name = ident) LBRACK (
		elements = typeExprList
	)? RPAREN;

enumVariantUnitDefn: (name = ident);

typeAliasDefn:
	TYPE (name = ident) (LBRACK typeParams = typeVarList RBRACK)? EQ (
		ty = typeExpr
	) SEMI?;

fnDefn:
	FN (name = ident) (LBRACK typeParams = typeVarList RBRACK)? LPAREN (
		params = paramList
	)? RPAREN (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

instantiateDefn:
	INSTANTIATE (name = ident) (ARROW (returnTy = typeExpr))? LPAREN (
		params = paramList
	)? RPAREN (body = block) SEMI?;

execDefn:
	EXEC (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? RPAREN (body = block) SEMI?;

queryDefn:
	QUERY (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? RPAREN (body = block) SEMI?;

errorDefn:
	ERROR (name = ident) LPAREN (params = paramList)? RPAREN SEMI?;

eventDefn:
	EVENT (name = ident) LPAREN (params = paramList) RPAREN SEMI?;

stateBlockDefn:
	STATE LBRACE (stateFields += stateDefn)* RBRACE SEMI?;

stateDefn: stateItemDefn | stateMapDefn;

stateItemDefn: (name = ident) COLON (ty = typeExpr) SEMI?;

stateMapDefn:
	(name = ident) LBRACK (indexTy = typeExpr) RBRACK COLON (
		ty = typeExpr
	) SEMI?;

// END DEFINITIONS

expr:
	/* f[A, B]() */
	// f[T](x) //I:s it parameterized function call or call to the closure stored in the array?
	expr DOT (memberName = ident) # DotExpr
	| expr (LBRACK (typeArgs = typeExprList) RBRACK)? LPAREN (
		args = argList
	)? RPAREN									# CallExpr
	| expr LBRACK (index = expr) RBRACK			# IndexExpr
	| expr AS (ty = typeExpr)					# AsExpr
	| expr QUEST								# ExistsExpr
	| expr (op = MUL | DIV | MOD) expr			# MulExpr
	| expr (op = PLUS | MINUS) expr				# AddExpr
	| expr (op = LT | GT | LT_EQ | GT_EQ) expr	# CompExpr
	| QUERY_NOW expr							# QueryExpr
	| expr D_QUEST expr							# ShortTryExpr
	| expr IN expr								# InExpr
	| expr IS (ty = typeExpr)					# IsExpr
	| expr (op = EQ_EQ | NEQ) expr				# EqExpr
	| expr AND expr								# AndExpr
	| expr OR expr								# OrExpr
	| ifExpr_									# IfExpr
	| tryCatchElseExpr_							# TryCatchElseExpr
	| closureExpr_								# ClosureExpr
	| structExpr_								# StructExpr
	| tupleExpr_								# TupleExpr
	| literal									# LiteralExpr
	| ident										# IdentExpr
	| LPAREN expr RPAREN						# GroupedExpr;

ifExpr_:
	IF (pred = expr) (thenBody = block) (ELSE (elseBody = block))? SEMI?;

tryCatchElseExpr_:
	TRY (body = block) (catchClauses += catchClause)* (
		ELSE (elseBody = block)
	)? SEMI?;

catchClause: CATCH (ty = typeExpr) (body = block);

closureExpr_:
	(fallible = BANG)? BAR (params = paramList)? BAR (
		ARROW (returnTy = typeExpr)
	)? (body = block);

structExpr_: (ty = typeExpr) LBRACE (fields = fieldList)? RBRACE;
tupleExpr_: LBRACK (elements += expr)* RBRACK;
// END EXPRESSIONS

// LITERALS
literal:
	StringLiteral	# StringLit
	| IntLiteral	# IntLit
	| DecLiteral	# DecLit
	| BoolLiteral	# BoolLit
	| NONE			# NoneLit;

// END LITERALS

// TYPE EXPRESSIONS
typeExpr:
	LPAREN typeExpr RPAREN									# GroupedTypeExpr
	| typeExpr LBRACK typeArgs = typeExprList RBRACK		# ParameterizedTypeExpr
	| typeExpr DOT (memberName = ident)						# MemberTypeExpr
	| LBRACK ty = typeExpr SEMI size = IntLiteral RBRACK	# ArrayTypeExpr
	| structDefn											# StructDefnTypeExpr
	| tupleDefn												# TupleDefnTypeExpr
	| unitDefn												# UnitDefnTypeExpr
	| enumDefn												# EnumDefnTypeExpr
	| typeExpr QUEST										# OptionTypeExpr
	| typeVar												# TypeVarExpr
	| ident													# IdentTypeExpr;

typeVar: TypeVar;
typeVarList: (typeVar (COMMA typeVar)*);

// END TYPE EXPRESSIONS

// COMMON ELEMENTS

ident: Ident | reservedKeyword;
param: (name = ident) (optional = QUEST)? COLON (
		(ty = typeExpr)?
	);
field: (name = ident) COLON (value = expr);
namedArg: (name = ident) EQ (value = expr);
arg: (expr | namedArg);

identList: (ident (COMMA ident)*);
paramList: (param (COMMA param)*);
typeExprList: (typeExpr (COMMA typeExpr)*);
fieldList: (field (COMMA field)*);
argList: (arg (COMMA arg)*);
block: LBRACE (stmts += stmt)* RBRACE;

reservedKeyword:
	CONTRACT
	| INTERFACE
	| IMPORT
	| IMPLEMENTS
	| EXTENDS
	| ERROR
	| EVENT
	| INSTANTIATE
	| EXEC
	| QUERY
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
	| STRUCT
	| TUPLE
	| UNIT
	| ENUM
	| TYPE
	| EMIT;

// END COMMON ELEMENTS
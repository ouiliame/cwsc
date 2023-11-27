parser grammar CWScriptParser;

options {
	tokenVocab = CWScriptLexer;
}

sourceFile: (stmts += stmt)* EOF;

// STATEMENTS

stmt:
	defn
	| typeExpr
	| expr
	| importStmt
	| letStmt
	| constStmt
	| assignStmt
	| memberAssignStmt
	| indexAssignStmt
	| forStmt
	| execStmt
	| instantiateStmt
	| failStmt
	| returnStmt;

importStmt:
	IMPORT LBRACE (items = identList)? RBRACE FROM (
		src = StringLiteral
	);

letStmt: LET (binding = binding_) (EQ value = expr);

binding_:
	(name = ident) (COLON ty = typeExpr)?	# IdentBinding
	| LBRACK (names = identList) RBRACK		# TupleBinding
	| LBRACE (names = identList) RBRACE		# StructBinding;

constStmt:
	CONST (name = ident) (COLON* ty = typeExpr)? (
		EQ value = expr
	);

assignStmt:
	(name = ident) assignOp = (
		EQ
		| PLUS_EQ
		| MINUS_EQ
		| MUL_EQ
		| DIV_EQ
		| MOD_EQ
	) value = expr;

memberAssignStmt:
	(obj = expr) DOT (memberName = ident) assignOp = (
		EQ
		| PLUS_EQ
		| MINUS_EQ
		| MUL_EQ
		| DIV_EQ
		| MOD_EQ
	) value = expr;

indexAssignStmt:
	(obj = expr) LBRACK index = expr RBRACK assignOp = (
		EQ
		| PLUS_EQ
		| MINUS_EQ
		| MUL_EQ
		| DIV_EQ
		| MOD_EQ
	) value = expr;

returnStmt: RETURN (value = expr)?;
failStmt: FAIL (value = expr)?;

forStmt:
	FOR (binding = binding_) IN (iter = expr) LBRACE (
		body += stmt
	)* RBRACE;

execStmt: EXEC_NOW expr;
instantiateStmt: INSTANTIATE_NOW expr;
emitStmt: EMIT expr;

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
	CONTRACT (name = ident) (EXTENDS (base = ident))? (
		IMPLEMENTS (interfaces = typeExprList)
	)? LBRACE (body += stmt)* RBRACE;

interfaceDefn:
	INTERFACE (name = ident) (
		EXTENDS (baseInterfaces = typeExprList)
	)? LBRACE (body += stmt)* RBRACE;

structDefn:
	STRUCT (name = ident) (LBRACK typeVars = typeVarList RBRACK)? LBRACE (
		fields = paramList
	) RBRACE
	| STRUCT (name = ident) (
		LBRACK typeVars = typeVarList RBRACK
	)? LPAREN (fields = paramList) RPAREN;

tupleDefn:
	TUPLE (name = ident) (LBRACK typeVars = typeVarList RBRACK)? LBRACK (
		elements = typeExprList
	) RPAREN;

unitDefn:
	UNIT (LBRACK typeVars = typeVarList RBRACK)? (name = ident);

enumDefn:
	ENUM (name = ident) (LBRACK typeVars = typeVarList RBRACK)? LBRACE (
		variants = enumVariantList
	) RBRACE;

enumVariantList: (enumVariant (COMMA enumVariant)*);

enumVariant:
	enumVariantStructDefn
	| enumVariantTupleDefn
	| enumVariantUnitDefn;

enumVariantStructDefn:
	(name = ident) LBRACE (fields = paramList) RBRACE
	| (name = ident) LPAREN (fields = paramList) RPAREN;

enumVariantTupleDefn:
	(name = ident) LBRACK (elements = typeExprList) RPAREN;

enumVariantUnitDefn: (name = ident);

typeAliasDefn: TYPE (name = ident) EQ (ty = typeExpr);

fnDefn:
	FN (name = ident) LPAREN (params = paramList)? RPAREN (
		ARROW (returnTy = typeExpr)
	)? LBRACE (body += stmt)* RBRACE;

instantiateDefn:
	INSTANTIATE (name = ident) (ARROW (returnTy = typeExpr))? LPAREN (
		params = paramList
	)? RPAREN LBRACE (body += stmt)* RBRACE;

execDefn:
	EXEC (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? RPAREN LBRACE (body += stmt)* RBRACE;

queryDefn:
	QUERY (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? RPAREN LBRACE (body += stmt)* RBRACE;

errorDefn:
	ERROR (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? LBRACE (body += stmt)* RBRACE;

eventDefn:
	EVENT (name = ident) LPAREN (params = paramList) RPAREN;

stateBlockDefn: STATE LBRACK (vars += stateDefn) RBRACK;

stateDefn: stateItemDefn | stateMapDefn;

stateItemDefn: (name = ident) COLON (ty = typeExpr);

stateMapDefn:
	(name = ident) LBRACK (indexTy = typeExpr) RBRACK COLON (
		ty = typeExpr
	);

// END DEFINITIONS

// EXPRESSIONS
expr:
	LPAREN expr RPAREN									# GroupedExpr
	| expr DOT (memberName = ident)						# DotExpr
	| expr LBRACK (index = expr) RBRACK					# IndexExpr
	| expr LPAREN (args = argList)? RPAREN				# CallExpr
	| NOT expr											# NotExpr
	| expr QUEST										# ExistsExpr
	| expr AS typeExpr									# AsExpr
	| expr (op = MUL | DIV | MOD) (rhs = expr)			# MulExpr
	| expr (op = PLUS | MINUS) (rhs = expr)				# AddExpr
	| expr (op = LT | GT | LT_EQ | GT_EQ) (rhs = expr)	# CompExpr
	| expr (op = EQ | NEQ) (rhs = expr)					# EqExpr
	| expr IN (rhs = expr)								# InExpr
	| expr IS (rhs = typeExpr)							# IsExpr
	| expr AND (rhs = expr)								# AndExpr
	| expr OR (rhs = expr)								# OrExpr
	| ifExpr_											# IfExpr
	| QUERY_NOW expr									# QueryExpr
	| expr D_QUEST (rhs = expr)							# ShortTryExpr
	| tryCatchElseExpr_									# TryCatchElseExpr
	| closureExpr_										# ClosureExpr
	| structExpr_										# StructExpr
	| tupleExpr_										# TupleExpr
	| literal											# LiteralExpr
	| ident												# IdentExpr;

ifExpr_:
	IF (cond = expr) LBRACE (thenBody += stmt)* RBRACE (
		ELSE LBRACE (elseBody += stmt)* RBRACE
	)?;

tryCatchElseExpr_:
	TRY LBRACE (tryBody += stmt)* RBRACE (
		catchClauses += catchClause
	)* (ELSE LBRACE (elseBody += stmt)* RBRACE)?;

catchClause:
	CATCH (ty = typeExpr) LBRACE (body += stmt)* RBRACE;

closureExpr_:
	(fallible = BANG)? BAR (params = paramList)? BAR (
		ARROW (returnTy = typeExpr)
	)? (LBRACE ( body += stmt)* RBRACE);

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
	| typeExpr LBRACK typeArgs = typeExprList RBRACK		# ParamzdTypeExpr
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
field: (name = ident) COLON (ty = typeExpr);
namedArg: (name = ident) EQ (value = expr);
arg: (expr | namedArg);

identList: (ident (COMMA ident)*);
paramList: (param (COMMA param)*);
typeExprList: (typeExpr (COMMA typeExpr)*);
fieldList: (field (COMMA field)*);
argList: (arg (COMMA arg)*);

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
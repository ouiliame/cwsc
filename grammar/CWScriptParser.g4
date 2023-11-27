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

forStmt:
	FOR (binding = binding_) IN (iter = expr) LBRACE (
		body += stmt
	)* RBRACE SEMI?;

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
	CONTRACT (name = ident) (EXTENDS (base = ident))? (
		IMPLEMENTS (interfaces = typeExprList)
	)? LBRACE (body += stmt)* RBRACE SEMI?;

interfaceDefn:
	INTERFACE (name = ident) (
		EXTENDS (baseInterfaces = typeExprList)
	)? LBRACE (body += stmt)* RBRACE SEMI?;

structDefn:
	STRUCT (name = ident) (LBRACK typeVars = typeVarList RBRACK)? LBRACE (
		fields = paramList
	)? RBRACE
	| STRUCT (name = ident) (
		LBRACK typeVars = typeVarList RBRACK
	)? LPAREN (fields = paramList) RPAREN SEMI?;

tupleDefn:
	TUPLE (name = ident) (LBRACK typeVars = typeVarList RBRACK)? LBRACK (
		elements = typeExprList
	)? RPAREN SEMI?;

unitDefn:
	UNIT (LBRACK typeVars = typeVarList RBRACK)? (name = ident) SEMI?;

enumDefn:
	ENUM (name = ident) (LBRACK typeVars = typeVarList RBRACK)? LBRACE (
		variants = enumVariantList
	)? RBRACE SEMI?;

enumVariantList: (enumVariant (COMMA enumVariant)*);

enumVariant:
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
	TYPE (name = ident) (LBRACK typeVars = typeVarList RBRACK)? EQ (
		ty = typeExpr
	) SEMI?;

fnDefn:
	FN (name = ident) LPAREN (params = paramList)? RPAREN (
		ARROW (returnTy = typeExpr)
	)? LBRACE (body += stmt)* RBRACE SEMI?;

instantiateDefn:
	INSTANTIATE (name = ident) (ARROW (returnTy = typeExpr))? LPAREN (
		params = paramList
	)? RPAREN LBRACE (body += stmt)* RBRACE SEMI?;

execDefn:
	EXEC (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? RPAREN LBRACE (body += stmt)* RBRACE SEMI?;

queryDefn:
	QUERY (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? RPAREN LBRACE (body += stmt)* RBRACE SEMI?;

errorDefn:
	ERROR (name = ident) LPAREN (params = paramList)? (
		ARROW (returnTy = typeExpr)
	)? LBRACE (body += stmt)* RBRACE SEMI?;

eventDefn:
	EVENT (name = ident) LPAREN (params = paramList) RPAREN SEMI?;

stateBlockDefn:
	STATE LBRACK (stateVars += stateDefn)* RBRACK SEMI?;

stateDefn: stateItemDefn | stateMapDefn;

stateItemDefn: (name = ident) COLON (ty = typeExpr) SEMI?;

stateMapDefn:
	(name = ident) LBRACK (indexTy = typeExpr) RBRACK COLON (
		ty = typeExpr
	) SEMI?;

// END DEFINITIONS

expr:
	expr DOT (memberName = ident)					# DotExpr
	| expr LBRACK (index = expr) RBRACK				# IndexExpr
	| expr LPAREN (args = argList) RPAREN			# CallExpr
	| expr AS (ty = typeExpr)						# AsExpr
	| expr QUEST									# ExistsExpr
	| expr (op = MUL | DIV | MOD) expr				# MulExpr
	| expr (addOp = PLUS | MINUS) expr				# AddExpr
	| expr (compOp = LT | GT | LT_EQ | GT_EQ) expr	# CompExpr
	| QUERY_NOW expr								# QueryExpr
	| expr D_QUEST expr								# ShortTryExpr
	| expr IN expr									# InExpr
	| expr IS (ty = typeExpr)						# IsExpr
	| expr (eqOp = EQ_EQ | NEQ) expr				# EqExpr
	| expr AND expr									# AndExpr
	| expr OR expr									# OrExpr
	| ifExpr_										# IfExpr
	| tryCatchElseExpr_								# TryCatchElseExpr
	| closureExpr_									# ClosureExpr
	| structExpr_									# StructExpr
	| tupleExpr_									# TupleExpr
	| literal										# LiteralExpr
	| ident											# IdentExpr
	| LPAREN expr RPAREN							# GroupedExpr;

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
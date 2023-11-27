parser grammar CWScriptParser;

options {
	tokenVocab = CWScriptLexer;
}

sourceFile: (stmts += stmt)* EOF;

// STATEMENTS

stmt: importStmt;

// END STATEMENTS

// DEFINITIONS

contractDefn:
	CONTRACT (name = ident) (EXTENDS (base = ident))? (
		IMPLEMENTS (interfaces = typeExprList)
	)? LBRACE (body += stmt)* RBRACE;

interfaceDefn:
	INTERFACE (name = ident) (
		EXTENDS (baseInterfaces = typeExprList)
	)? LBRACE (body += stmt)* RBRACE;

structDefn:
	STRUCT (name = ident) LBRACE (fields = paramList) RBRACE
	| STRUCT (name = ident) LPAREN (fields = paramList) RPAREN;

tupleDefn:
	TUPLE (name = ident) LBRACK (elements = typeExprList) RPAREN;

unitDefn: UNIT (name = ident);

enumDefn:
	ENUM (name = ident) LBRACE (variants = enumVariantList) RBRACE;

enumVariantList: (enumVariant (COMMA enumVariant)*);

enumVariant:
	enumVariantStructDefn
	| enumVariantTupleDefn
	| enumVariantUnitDefn;

enumVariantStructDefn:
	(name = ident) LBRACE (fields = paramList) RBRACE
	| (name = ident) LPAREN (fields = paramList) RPAREN;

enumVariantTupleDefn:
	(name = ident) LBRACK (elements = typeExprList) RRPAREN;

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
	| expr DOT (name = ident)							# DotExpr
	| expr LBRACK expr RBRACK							# IndexExpr
	| expr LPAREN (args = argsList)? RPAREN				# CallExpr
	| NOT expr											# NotExpr
	| expr QUEST										# ExistsExpr
	| expr AS typeExpr									# AsExpr
	| expr (op = MUL | DIV | MOD) (rhs = expr)			# MulExpr
	| expr (op = ADD | SUB) (rhs = expr)				# AddExpr
	| expr (op = LT | GT | LT_EQ | GT_EQ) (rhs = expr)	# CompExpr
	| expr (op = EQ | NOT_EQ) (rhs = expr)				# EqExpr
	| expr IN (rhs = expr)								# InExpr
	| expr IS (rhs = expr)								# IsExpr
	| expr AND (rhs = expr)								# AndExpr
	| expr OR (rhs = expr)								# OrExpr
	| ifExpr_											# IfExpr
	| closureExpr_										# ClosureExpr
	| structExpr_										# StructExpr
	| tupleExpr_										# TupleExpr
	| literal											# LiteralExpr
	| ident												# IdentExpr;

ifExpr_:
	IF (cond = expr) LBRACE (thenBody += stmt)* RBRACE (
		ELSE LBRACE (elseBody += stmt)* RBRACE
	)?;

closureExpr_:
	BAR (params = paramList)? BAR (ARROW (returnTy = typeExpr))? (
		LBRACE ( body += stmt)* RBRACE
	);

// END EXPRESSIONS

// TYPE EXPRESSIONS
typeExpr: paramzdTypeExpr | ident;
paramzdTypeExpr: typeExpr LBRACK args = typeExprList RBRACK;

// END TYPE EXPRESSIONS

// COMMON ELEMENTS

ident: Ident;
param: (name = ident) (optional = QUEST)? COLON (
		(ty = typeExpr)?
	);
identList: (ident (COMMA ident)*);
paramList: (param (COMMA param)*);
typeExprList: (typeExpr (COMMA typeExpr)*);

// END COMMON ELEMENTS
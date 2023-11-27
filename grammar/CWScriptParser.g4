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

// END DEFINITIONS

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
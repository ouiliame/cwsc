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
	CONTRACT (name = ident) (EXTENDS (base = path))? (
		IMPLEMENTS (interfaces = pathList)
	)? LBRACE (body += stmt)* RBRACE;

interfaceDefn:
	INTERFACE (name = ident) (EXTENDS (bases = pathList))? LBRACE (
		body += stmt
	)* RBRACE;

structDefn:
	STRUCT (name = ident) LBRACE (fields = paramList) RBRACE
	| STRUCT (name = ident) LPAREN (fields = paramList) RPAREN;

tupleDefn:
	TUPLE (name = ident) LBRACK (elements = typeExprList) RPAREN;

unitDefn: UNIT (name = ident);

enumDefn:
	ENUM (name = ident) LBRACE (variants = enumVariantList) RBRACE;

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

// END DEFINITIONS
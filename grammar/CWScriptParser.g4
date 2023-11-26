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

// END DEFINITIONS
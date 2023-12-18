parser grammar CWScriptParser;

options {
	tokenVocab = CWScriptLexer;
}

sourceFile: (stmts += stmt)* EOF;

docComment: (DOC_LINE_COMMENT | DOC_BLOCK_COMMENT);

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
	(doc = docComment)? LET (name = ident) (COLON ty = typeExpr)? (
		EQ value = expr
	) SEMI? # LetIdentStmt
	| (doc = docComment)? LET (names = brackIdentList) (
		COLON ty = typeExpr
	)? (EQ value = expr) SEMI? # LetTupleStmt
	| (doc = docComment)? LET (bindings = braceBindingList) (
		COLON ty = typeExpr
	)? (EQ value = expr) SEMI? # LetStructStmt;

constStmt:
	(doc = docComment)? (exported = EXPORT)? CONST (name = ident) (
		COLON ty = typeExpr
	)? (EQ value = expr) SEMI? # ConstIdentStmt
	| (doc = docComment)? (exported = EXPORT)? CONST (
		names = brackIdentList
	) (COLON ty = typeExpr)? (EQ value = expr) SEMI? # ConstTupleStmt
	| (doc = docComment)? (exported = EXPORT)? CONST (
		bindings = braceBindingList
	) (COLON ty = typeExpr)? (EQ value = expr) SEMI? # ConstStructStmt;

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
	(doc = docComment)? (exported = EXPORT)? CONTRACT (
		name = ident
	) (EXTENDS (base = typeExpr))? (
		IMPLEMENTS (interfaces = typeExprList)
	)? (body = block) SEMI?;

interfaceDefn:
	(doc = docComment)? (exported = EXPORT)? INTERFACE (
		name = ident
	) (EXTENDS (baseInterfaces = typeExprList))? (body = block) SEMI?;

structDefn:
	(doc = docComment)? (exported = EXPORT)? STRUCT (
		name = ident
	) (typeParams = brackTypeParamList)? (
		fields = braceParamList
	) SEMI? # StructDefnBrace
	| (doc = docComment)? (exported = EXPORT)? STRUCT (
		name = ident
	) (typeParams = brackTypeParamList)? (
		fields = parenParamList
	) SEMI? # StructDefnParen;

tupleDefn:
	(doc = docComment)? (exported = EXPORT)? TUPLE (name = ident) (
		typeParams = brackTypeParamList
	)? LPAREN (elements = brackTypeExprList) RPAREN SEMI?;

unitDefn:
	(doc = docComment)? (exported = EXPORT)? UNIT (
		typeParams = brackTypeParamList
	)? (name = ident) SEMI?;

enumDefn:
	(doc = docComment)? (exported = EXPORT)? ENUM (name = ident) (
		typeParams = brackTypeParamList
	)? LBRACE (variants = enumVariantDefnList)? RBRACE SEMI?;

enumVariantDefnList: (enumVariantDefn (COMMA enumVariantDefn)*);

enumVariantDefn:
	(doc = docComment)? (name = ident) (fields = braceParamList) # EnumVariantStructDefnBrace
	| (doc = docComment)? (name = ident) (
		fields = parenParamList
	) # EnumVariantStructDefnParen
	| (doc = docComment)? (name = ident) LPAREN (
		elements = brackTypeExprList
	) RPAREN								# EnumVariantTupleDefn
	| (doc = docComment)? (name = ident)	# EnumVariantUnitDefn;

typeAliasDefn:
	(doc = docComment)? (exported = EXPORT)? TYPE (name = ident) (
		typeParams = brackTypeParamList
	)? EQ (ty = typeExpr) SEMI?;

fnDefn:
	(doc = docComment)? (exported = EXPORT)? FN (name = ident) (
		fallible = BANG
	)? (typeParams = brackTypeParamList)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

instantiateDefn:
	(doc = docComment)? H_INSTANTIATE (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

execDefn:
	(doc = docComment)? EXEC (name = ident) (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

execTupleDefn:
	(doc = docComment)? EXEC (name = ident) (fallible = BANG)? (
		params = tupleParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

queryDefn:
	(doc = docComment)? QUERY (name = ident) (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

queryTupleDefn:
	(doc = docComment)? QUERY (name = ident) (fallible = BANG)? (
		params = tupleParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

errorDefn: (doc = docComment)? (exported = EXPORT)? ERROR (
		name = ident
	) (params = parenParamList) SEMI?;

eventDefn: (doc = docComment)? (exported = EXPORT)? EVENT (
		name = ident
	) (params = parenParamList) SEMI?;

stateBlockDefn:
	(doc = docComment)? STATE LBRACE (stateFields += stateDefn)* RBRACE SEMI?;

stateDefn: stateItemDefn | stateMapDefn;

stateItemDefn: (doc = docComment)? (name = ident) COLON (
		ty = typeExpr
	) SEMI?;

stateMapDefn:
	(doc = docComment)? (name = ident) LBRACK (
		indexTy = typeExpr
	) RBRACK COLON (ty = typeExpr) SEMI?;

implDefn:
	(doc = docComment)? IMPL (name = ident) (
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
	| mapExpr_										# MapExpr
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

// mapExpr = #{ 0 => 1 }[0] == 1
mapEntry: (key = expr) FAT_ARROW (value = expr);
mapExpr_:
	H_LBRACE (entries += mapEntry (COMMA entries += mapEntry)*)? RBRACE;

/*
 Unlike Rust, CWS closures have params outside braces.
 
 Rust: { |x, y| -> Ty stmt* }
 
 CWS (block style): |x, y|! -> Ty { stmt* }
 
 CWS (expr style): |x: Ty, y?: Ty|! expr NOTE: unlike fn aaa!(), the fallible '!' comes after the
 param list
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
	| H_LBRACE typeExpr FAT_ARROW typeExpr (
		EQ defaultExpr = expr
	)? RBRACE			# MapTypeExpr
	| structDefn		# StructDefnTypeExpr
	| tupleDefn			# TupleDefnTypeExpr
	| unitDefn			# UnitDefnTypeExpr
	| enumDefn			# EnumDefnTypeExpr
	| typeExpr QUEST	# OptionTypeExpr
	| typeVar			# TypeVarExpr
	| ident				# IdentTypeExpr;

typeVar: (doc = docComment)? PercentIdent;

// END TYPE EXPRESSIONS

// COMMON ELEMENTS

ident:
	HashIdent
	| DollarIdent
	| Ident
	| EscapedIdent
	| keywordIdent;
param: (doc = docComment)? (name = ident) (optional = QUEST)? (
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
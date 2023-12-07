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
		src = stringLit
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
	STRUCT (name = ident) (typeParams = brackTypeParamList)? (
		fields = braceParamList
	) SEMI? # StructDefnBrace
	| STRUCT (name = ident) (typeParams = brackTypeParamList)? (
		fields = parenParamList
	) SEMI? # StructDefnParen;

tupleDefn:
	TUPLE (name = ident) (typeParams = brackTypeParamList)? (
		elements = brackTypeExprList
	) SEMI?;

unitDefn:
	UNIT (typeParams = brackTypeParamList)? (name = ident) SEMI?;

enumDefn:
	ENUM (name = ident) (typeParams = brackTypeParamList)? LBRACE (
		variants = enumVariantDefnList
	)? RBRACE SEMI?;

enumVariantDefnList: (enumVariantDefn (COMMA enumVariantDefn)*);

enumVariantDefn:
	(name = ident) (fields = braceParamList)		# EnumVariantStructDefnBrace
	| (name = ident) (fields = parenParamList)		# EnumVariantStructDefnParen
	| (name = ident) (elements = brackTypeExprList)	# EnumVariantTupleDefn
	| (name = ident)								# EnumVariantUnitDefn;

typeAliasDefn:
	TYPE (name = ident) (typeParams = brackTypeParamList)? EQ (
		ty = typeExpr
	) SEMI?;

fnDefn:
	FN (name = ident) (fallible = BANG)? (
		typeParams = brackTypeParamList
	)? (params = parenParamList) (ARROW (returnTy = typeExpr))? (
		body = block
	) SEMI?;

instantiateDefn:
	H_INSTANTIATE (fallible = BANG)? (params = parenParamList) (
		ARROW (returnTy = typeExpr)
	)? (body = block) SEMI?;

execDefn:
	EXEC (name = ident) (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

queryDefn:
	QUERY (name = ident) (fallible = BANG)? (
		params = parenParamList
	) (ARROW (returnTy = typeExpr))? (body = block) SEMI?;

errorDefn: ERROR (name = ident) (params = parenParamList) SEMI?;

eventDefn:
	EVENT (name = ident) (params = parenParamList) RPAREN SEMI?;

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
	| expr (fallible = BANG)? (typeArgs = brackTypeExprList)? LPAREN (
		(args += arg) (COMMA args += arg)*
	)? RPAREN										# CallExpr
	| expr LBRACK (index = expr) RBRACK				# IndexExpr
	| expr AS (ty = typeExpr)						# AsExpr
	| expr QUEST									# ExistsExpr
	| expr (op = (MUL | DIV | MOD)) expr			# MulExpr
	| expr (op = (PLUS | MINUS)) expr				# AddExpr
	| expr (op = (LT | GT | LT_EQ | GT_EQ)) expr	# CompExpr
	| QUERY_NOW expr								# QueryExpr
	| expr D_QUEST expr								# ShortTryExpr
	| expr IN expr									# InExpr
	| expr IS (negative = NOT)? (ty = typeExpr)		# IsExpr
	| expr (op = (EQ_EQ | NEQ)) expr				# EqExpr
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
	IF (pred = expr) (thenBody = block) (ELSE (elseBody = block))? SEMI?;

tryCatchElseExpr_:
	TRY (body = block) (catchClauses += catchClause)* (
		ELSE (elseBody = block)
	)? SEMI?;

catchClause: CATCH (ty = typeExpr) (body = block);

closureExpr_:
	(fallible = BANG)? (params = barParamList) (
		ARROW (returnTy = typeExpr)
	)? (body = block);

structExpr_: (ty = typeExpr) (fields = braceFieldList);
tupleExpr_:
	LBRACK ((elements += expr) (COMMA (elements += expr))*)? RBRACK;
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
	LPAREN typeExpr RPAREN									# GroupedTypeExpr
	| typeExpr (typeArgs = brackTypeExprList)				# ParameterizedTypeExpr
	| typeExpr DOT (memberName = ident)						# MemberTypeExpr
	| LBRACK (ty = typeExpr) SEMI (size = intLit) RBRACK	# ArrayTypeExpr
	| structDefn											# StructDefnTypeExpr
	| tupleDefn												# TupleDefnTypeExpr
	| unitDefn												# UnitDefnTypeExpr
	| enumDefn												# EnumDefnTypeExpr
	| typeExpr QUEST										# OptionTypeExpr
	| typeVar												# TypeVarExpr
	| ident													# IdentTypeExpr;

typeVar: TypeVar;

// END TYPE EXPRESSIONS

// COMMON ELEMENTS

ident: HashIdent | Ident | reservedKeyword;
param: (name = ident) (optional = QUEST)? COLON (
		(ty = typeExpr)?
	);
field: (name = ident) (COLON (value = expr))?;
namedArg: (name = ident) EQ (value = expr);
arg: (expr | namedArg);

identList: (ident (COMMA ident)*);
parenParamList: LPAREN (param (COMMA param)*)? RPAREN;
braceParamList: LBRACE (param (COMMA param)*)? COMMA? RBRACE;
barParamList: BAR (param (COMMA param)*)? BAR;
brackTypeParamList: LBRACK (typeVar (COMMA typeVar)*)? RBRACK;
brackTypeExprList: LBRACK (typeExpr (COMMA typeExpr)*)? RBRACK;
braceFieldList: LBRACE (field (COMMA field)*)? COMMA? RBRACE;

typeExprList: (typeExpr (COMMA typeExpr)*);
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
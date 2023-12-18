lexer grammar CWScriptLexer;

// KEYWORDS
CONTRACT: 'contract';
INTERFACE: 'interface';
IMPORT: 'import';
EXPORT: 'export';
IMPLEMENTS: 'implements';
IMPL: 'impl';
EXTENDS: 'extends';
ERROR: 'error';
EVENT: 'event';
DEFER: 'defer';
INSTANTIATE_NOW: 'instantiate!';
EXEC_NOW: 'exec!';
QUERY_NOW: 'query!';
DELEGATE_EXEC: 'delegate_exec!';
H_INSTANTIATE: '#instantiate';
INSTANTIATE: 'instantiate';
EXEC: 'exec';
QUERY: 'query';
REPLY: 'reply';
FOR: 'for';
IN: 'in';
FROM: 'from';
STATE: 'state';
IF: 'if';
IS: 'is';
TRY: 'try';
CATCH: 'catch';
ELSE: 'else';
NOT: 'not';
NONE: 'None';
AND: 'and';
OR: 'or';
TRUE: 'true';
FALSE: 'false';
FN: 'fn';
LET: 'let';
CONST: 'const';
FAIL: 'fail!';
RETURN: 'return';
STRUCT: 'struct';
TUPLE: 'tuple';
UNIT: 'unit';
ENUM: 'enum';
TYPE: 'type';
EMIT: 'emit!';
AS: 'as';

// PUNCTUATION
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
H_LBRACE: '#{';
LBRACE: '{';
RBRACE: '}';
BAR: '|';
DOT: '.';
COMMA: ',';
D_QUEST: '??';
QUEST: '?';
BANG: '!';
SEMI: ';';
COLON: ':';
AT: '@';
AMP: '&';
ARROW: '->';
FAT_ARROW: '=>';
S_QUOTE: '\'';
D_QUOTE: '"';
F_DQUOTE: 'f"';
BACKTICK: '`';
EQ: '='; // OPS
D_EQ: '==';
NEQ: '!=';
PLUS_EQ: '+=';
PLUS: '+';
MINUS_EQ: '-=';
MINUS: '-';
MUL_EQ: '*=';
MUL: '*';
DIV_EQ: '/=';
DIV: '/';
MOD_EQ: '%=';
MOD: '%';
LT_EQ: '<=';
LT: '<';
GT_EQ: '>=';
GT: '>';
POW: '**';

// Bool
BoolLiteral: TRUE | FALSE;

// Identifiers
HashIdent: '#' [_a-zA-Z][_a-zA-Z0-9]*;
DollarIdent: '$' [_a-zA-Z0-9]*;
PercentIdent: '%' [_a-zA-Z][_a-zA-Z0-9]*;
EscapedIdent: '`' [^`]+ '`';
Ident: [_a-zA-Z][_a-zA-Z0-9]*;

// Strings
StringLiteral: DoubleQuotedString | SingleQuotedString;
DoubleQuotedString:
	(D_QUOTE | F_DQUOTE) DoubleQuotedStringCharacter* D_QUOTE;
SingleQuotedString:
	S_QUOTE SingleQuotedStringCharacter* S_QUOTE;
fragment DoubleQuotedStringCharacter: ~["\r\n\\] | ('\\' .);
fragment SingleQuotedStringCharacter: ~['\r\n\\] | ('\\' .);

// Numbers
DecLiteral: (DecimalDigits DOT DecimalDigits);
IntLiteral: DecimalDigits;
fragment DecimalDigits: [0-9] ( '_'? [0-9])*;

// Comments
DOC_LINE_COMMENT: ('///' .*? [\r\n])+;
DOC_BLOCK_COMMENT: '/**' .*? '*/';

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

// Whitespace
WS: [\r\n\t ] -> channel(HIDDEN);
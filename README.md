# CWScript

CWScript is a domain-specific language for writing CosmWasm smart contracts. It compiles `.cws` source files to Rust, targeting the CosmWasm framework. The goal: capture the essential semantics of CosmWasm while removing the noise of Rust ownership, lifetimes, traits, and Result combinators.

```cws
contract Counter {
  state {
    count: U32
    owner: Addr
  }

  error Unauthorized()

  #instantiate(count: U32?, owner: Addr?) {
    $state.count = count ?? 0
    $state.owner = owner ?? $info.sender
  }

  exec #increment() {
    $state.count += 1
  }

  exec #reset(count: U32?) {
    if $info.sender != $state.owner {
      fail! Unauthorized()
    }
    $state.count = count ?? 0
  }

  query #count() -> U32 {
    return $state.count
  }
}
```

## Status

Early-stage compiler. The parser handles most syntax, and end-to-end compilation works for simple contracts (Counter, AtomicSwap). Complex contracts (TerraSwap) have known parser issues.

What works:
- Parsing via ANTLR4 (TypeScript target)
- AST construction, static analysis
- Code generation to Rust/CosmWasm that passes `cargo check`
- State (items and maps), errors, events, structs, enums, type aliases
- Instantiate, execute, and query handlers
- `emit!`, `exec! Bank.#send`, `fail!`, `$state` access, struct construction
- Top-level constants, inline struct state definitions

What doesn't (yet):
- Reply handlers
- `query!` cross-contract queries
- Generic type parameters (`%T`)
- Imports / multi-file projects
- `rustfmt` post-processing (output is valid but unformatted)

## Quick Start

```bash
bun install

# Compile the Counter example
bun run e2e -- counter Counter

# Compile the AtomicSwap example
bun run e2e -- atomic-swap AtomicSwap

# Check the generated Rust compiles
cd examples/counter/build/counter && cargo check --lib
```

### Project Structure

```
grammar/              ANTLR4 grammar files (source of truth for syntax)
src/grammar/          Generated ANTLR TypeScript (DO NOT EDIT)
src/parser/           Parser wrapper, AST builder, syntax validator
src/ast/              AST node definitions, base class, visitors
src/e2e-helpers/      Code generation: CG model, contract-to-cg, block-to-cg
src/rust/             Rust syntax AST with render() methods, crate output
src/semantics/        Static analysis visitor, symbol table (stub)
examples/             Example contracts (counter, atomic-swap, kitchen-sink, terraswap)
```

### Compilation Pipeline

```
.cws source
  -> ANTLR Lexer/Parser -> Parse Tree
  -> AstBuilderVisitor -> AST
  -> StaticAnalysisVisitor -> Diagnostics
  -> contractAstToCg() -> CG Model
  -> CgContractCrate.build() -> RustCrate
  -> writeToDisk() -> Cargo.toml + src/lib.rs
```

### Scripts

| Command | Description |
|---------|-------------|
| `bun run e2e` | End-to-end compilation (default: counter) |
| `bun run e2e -- <project> <Contract>` | Compile a specific example |
| `bun run antlr` | Regenerate ANTLR parser from grammar |
| `bun run test` | Run jest tests |

---

## Language Reference

### Source Files

CWScript source files use the `.cws` extension. Projects use a `cwsproject.json`:

```json
{
  "name": "my-project",
  "version": "0.0.1",
  "sourceDir": "src",
  "buildDir": "build"
}
```

### Identifier Prefixes

CWScript uses prefix characters to visually distinguish identifier categories:

| Prefix | Meaning | Examples |
|--------|---------|---------|
| (none) | Regular identifiers | `count`, `owner`, `Asset` |
| `#` | Enum variants, handler names | `#Token`, `#increment` |
| `$` | Context variables | `$state`, `$info`, `$env` |
| `%` | Type parameters (generics) | `%T`, `%U` |

### Context Variables

`$`-prefixed identifiers provide implicit access to the contract execution context:

| Variable | `#instantiate` | `exec` | `query` | `reply` |
|----------|:-:|:-:|:-:|:-:|
| `$state` | yes | yes | yes | yes |
| `$info`  | yes | yes | - | - |
| `$env`   | yes | yes | yes | yes |
| `$data`  | - | - | - | success only |
| `$error` | - | - | - | error only |

- **`$state`** -- persistent storage. `$state.field` reads, `$state.field = x` writes.
- **`$info`** -- `MessageInfo`: `.sender` (who sent the message), `.funds` (attached coins).
- **`$env`** -- `Env`: `.contract.address`, `.block.time`, `.block.height`.

---

## Grammar (EBNF)

The canonical grammar is defined in two ANTLR4 files: `grammar/CWScriptLexer.g4` (tokens) and `grammar/CWScriptParser.g4` (rules). Below is the complete grammar in EBNF notation.

### Lexical Grammar

```ebnf
(* === Keywords === *)
CONTRACT       = "contract" ;
INTERFACE      = "interface" ;
IMPORT         = "import" ;
EXPORT         = "export" ;
IMPLEMENTS     = "implements" ;
IMPL           = "impl" ;
EXTENDS        = "extends" ;
ERROR          = "error" ;
EVENT          = "event" ;
DEFER          = "defer" ;
INSTANTIATE_NOW = "instantiate!" ;
EXEC_NOW       = "exec!" ;
QUERY_NOW      = "query!" ;
DELEGATE_EXEC  = "delegate_exec!" ;
H_INSTANTIATE  = "#instantiate" ;
INSTANTIATE    = "instantiate" ;
EXEC           = "exec" ;
QUERY          = "query" ;
REPLY          = "reply" ;
FOR            = "for" ;
IN             = "in" ;
FROM           = "from" ;
STATE          = "state" ;
IF             = "if" ;
IS             = "is" ;
TRY            = "try" ;
CATCH          = "catch" ;
ELSE           = "else" ;
NOT            = "not" ;
NONE           = "None" ;
AND            = "and" ;
OR             = "or" ;
TRUE           = "true" ;
FALSE          = "false" ;
FN             = "fn" ;
LET            = "let" ;
CONST          = "const" ;
FAIL           = "fail!" ;
RETURN         = "return" ;
STRUCT         = "struct" ;
TUPLE          = "tuple" ;
UNIT           = "unit" ;
ENUM           = "enum" ;
TYPE           = "type" ;
EMIT           = "emit!" ;
AS             = "as" ;

(* === Punctuation & Operators === *)
LPAREN   = "(" ;    RPAREN   = ")" ;
LBRACK   = "[" ;    RBRACK   = "]" ;
H_LBRACE = "#{" ;   LBRACE   = "{" ;    RBRACE = "}" ;
BAR      = "|" ;    DOT      = "." ;    COMMA  = "," ;
D_QUEST  = "??" ;   QUEST    = "?" ;    BANG   = "!" ;
SEMI     = ";" ;    COLON    = ":" ;    AT     = "@" ;
AMP      = "&" ;    ARROW    = "->" ;   FAT_ARROW = "=>" ;
EQ       = "=" ;    D_EQ     = "==" ;   NEQ    = "!=" ;
PLUS_EQ  = "+=" ;   PLUS     = "+" ;
MINUS_EQ = "-=" ;   MINUS    = "-" ;
MUL_EQ   = "*=" ;   MUL      = "*" ;
DIV_EQ   = "/=" ;   DIV      = "/" ;
MOD_EQ   = "%=" ;   MOD      = "%" ;
LT_EQ    = "<=" ;   LT       = "<" ;
GT_EQ    = ">=" ;   GT       = ">" ;
POW      = "**" ;

(* === Identifiers === *)
HashIdent    = "#" , letter_or_us , { letter_or_us | digit } ;
DollarIdent  = "$" , { letter_or_us | digit } ;
PercentIdent = "%" , letter_or_us , { letter_or_us | digit } ;
EscapedIdent = "`" , { any_char - "`" } , "`" ;
Ident        = letter_or_us , { letter_or_us | digit } ;

letter_or_us = "a"-"z" | "A"-"Z" | "_" ;
digit        = "0"-"9" ;

(* === Literals === *)
StringLiteral      = DoubleQuotedString | SingleQuotedString ;
DoubleQuotedString = ( '"' | 'f"' ) , { string_char } , '"' ;
SingleQuotedString = "'" , { string_char } , "'" ;
DecLiteral         = digits , "." , digits ;
IntLiteral         = digits ;
digits             = digit , { [ "_" ] , digit } ;
BoolLiteral        = "true" | "false" ;

(* === Comments === *)
DOC_LINE_COMMENT  = ( "///" , { any - newline } , newline )+ ;
DOC_BLOCK_COMMENT = "/**" , { any } , "*/" ;
LINE_COMMENT      = "//" , { any - newline } ;          (* hidden *)
BLOCK_COMMENT     = "/*" , { any } , "*/" ;             (* hidden *)

(* === Whitespace (hidden) === *)
WS = ( " " | "\t" | "\r" | "\n" )+ ;
```

### Parser Grammar

```ebnf
(* ================================================================ *)
(*  Top Level                                                       *)
(* ================================================================ *)

sourceFile = { stmt } , EOF ;

(* ================================================================ *)
(*  Statements                                                      *)
(* ================================================================ *)

stmt = importStmt
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
     | exprStmt ;

importStmt = IMPORT , braceBindingList , FROM , stringLit , [ SEMI ] ;
exportStmt = EXPORT , braceFieldList , [ SEMI ] ;

(* --- Let Bindings --- *)
letStmt = letIdentStmt | letTupleStmt | letStructStmt ;

letIdentStmt  = [ docComment ] , LET , ident , [ COLON , typeExpr ] ,
                EQ , expr , [ SEMI ] ;
letTupleStmt  = [ docComment ] , LET , brackIdentList ,
                [ COLON , typeExpr ] , EQ , expr , [ SEMI ] ;
letStructStmt = [ docComment ] , LET , braceBindingList ,
                [ COLON , typeExpr ] , EQ , expr , [ SEMI ] ;

(* --- Const Bindings --- *)
constStmt = constIdentStmt | constTupleStmt | constStructStmt ;

constIdentStmt  = [ docComment ] , [ EXPORT ] , CONST , ident ,
                  [ COLON , typeExpr ] , EQ , expr , [ SEMI ] ;
constTupleStmt  = [ docComment ] , [ EXPORT ] , CONST , brackIdentList ,
                  [ COLON , typeExpr ] , EQ , expr , [ SEMI ] ;
constStructStmt = [ docComment ] , [ EXPORT ] , CONST , braceBindingList ,
                  [ COLON , typeExpr ] , EQ , expr , [ SEMI ] ;

(* --- Assignment --- *)
assignOp = EQ | PLUS_EQ | MINUS_EQ | MUL_EQ | DIV_EQ | MOD_EQ ;

assignStmt       = ident , assignOp , expr , [ SEMI ] ;
memberAssignStmt = expr , DOT , ident , assignOp , expr , [ SEMI ] ;
indexAssignStmt  = expr , LBRACK , expr , RBRACK , assignOp ,
                   expr , [ SEMI ] ;

(* --- Control Flow --- *)
ifStmt           = ifExpr , [ SEMI ] ;
tryCatchElseStmt = tryCatchElseExpr , [ SEMI ] ;
returnStmt       = returnExpr , [ SEMI ] ;
failStmt         = failExpr , [ SEMI ] ;

forStmt = FOR , ident , IN , expr , block , [ SEMI ]
        | FOR , brackIdentList , IN , expr , block , [ SEMI ]
        | FOR , braceBindingList , IN , expr , block , [ SEMI ] ;

(* --- Action Statements --- *)
execStmt        = EXEC_NOW , expr , [ SEMI ] ;
instantiateStmt = INSTANTIATE_NOW , expr , [ SEMI ] ;
emitStmt        = EMIT , expr , [ SEMI ] ;

(* --- Expression Statement --- *)
exprStmt = expr , [ SEMI ] ;

(* ================================================================ *)
(*  Definitions                                                     *)
(* ================================================================ *)

defn = contractDefn | interfaceDefn
     | structDefn | tupleDefn | unitDefn | enumDefn | typeAliasDefn
     | fnDefn
     | instantiateDefn | execDefn | execTupleDefn
     | queryDefn | queryTupleDefn
     | errorDefn | eventDefn
     | stateBlockDefn | implDefn ;

(* --- Contract & Interface --- *)
contractDefn  = [ docComment ] , [ EXPORT ] , CONTRACT , ident ,
                [ EXTENDS , typeExpr ] ,
                [ IMPLEMENTS , typeExprList ] , block , [ SEMI ] ;
interfaceDefn = [ docComment ] , [ EXPORT ] , INTERFACE , ident ,
                [ EXTENDS , typeExprList ] , block , [ SEMI ] ;

(* --- Type Definitions --- *)
structDefn = [ docComment ] , [ EXPORT ] , STRUCT , ident ,
             [ brackTypeParamList ] ,
             ( braceParamList | parenParamList ) , [ SEMI ] ;

tupleDefn  = [ docComment ] , [ EXPORT ] , TUPLE , ident ,
             [ brackTypeParamList ] ,
             LPAREN , brackTypeExprList , RPAREN , [ SEMI ] ;

unitDefn   = [ docComment ] , [ EXPORT ] , UNIT ,
             [ brackTypeParamList ] , ident , [ SEMI ] ;

enumDefn   = [ docComment ] , [ EXPORT ] , ENUM , ident ,
             [ brackTypeParamList ] ,
             LBRACE , [ enumVariantDefnList ] , RBRACE , [ SEMI ] ;

enumVariantDefnList = enumVariantDefn , { COMMA , enumVariantDefn } ;

enumVariantDefn = [ docComment ] , ident , braceParamList
               | [ docComment ] , ident , parenParamList
               | [ docComment ] , ident , LPAREN ,
                 brackTypeExprList , RPAREN
               | [ docComment ] , ident ;

typeAliasDefn = [ docComment ] , [ EXPORT ] , TYPE , ident ,
                [ brackTypeParamList ] , EQ , typeExpr , [ SEMI ] ;

(* --- Functions --- *)
fnDefn = [ docComment ] , [ EXPORT ] , FN , ident , [ BANG ] ,
         [ brackTypeParamList ] , parenParamList ,
         [ ARROW , typeExpr ] , block , [ SEMI ] ;

(* --- Entry Points --- *)
instantiateDefn = [ docComment ] , H_INSTANTIATE , [ BANG ] ,
                  parenParamList ,
                  [ ARROW , typeExpr ] , block , [ SEMI ] ;

execDefn      = [ docComment ] , EXEC , ident , [ BANG ] ,
                parenParamList ,
                [ ARROW , typeExpr ] , block , [ SEMI ] ;
execTupleDefn = [ docComment ] , EXEC , ident , [ BANG ] ,
                tupleParamList ,
                [ ARROW , typeExpr ] , block , [ SEMI ] ;

queryDefn      = [ docComment ] , QUERY , ident , [ BANG ] ,
                 parenParamList ,
                 [ ARROW , typeExpr ] , block , [ SEMI ] ;
queryTupleDefn = [ docComment ] , QUERY , ident , [ BANG ] ,
                 tupleParamList ,
                 [ ARROW , typeExpr ] , block , [ SEMI ] ;

errorDefn = [ docComment ] , [ EXPORT ] , ERROR , ident ,
            parenParamList , [ SEMI ] ;
eventDefn = [ docComment ] , [ EXPORT ] , EVENT , ident ,
            parenParamList , [ SEMI ] ;

(* --- State --- *)
stateBlockDefn = [ docComment ] , STATE ,
                 LBRACE , { stateDefn } , RBRACE , [ SEMI ] ;
stateDefn      = stateItemDefn | stateMapDefn ;
stateItemDefn  = [ docComment ] , ident , COLON , typeExpr , [ SEMI ] ;
stateMapDefn   = [ docComment ] , ident , LBRACK , typeExpr , RBRACK ,
                 COLON , typeExpr , [ SEMI ] ;

(* --- Impl --- *)
implDefn = [ docComment ] , IMPL , ident , brackTypeParamList ,
           block , [ SEMI ] ;

(* ================================================================ *)
(*  Expressions                                                     *)
(* ================================================================ *)

expr = expr , DOT , ident                                   (* member access *)
     | expr , [ BANG ] , [ brackTypeExprList ] ,
       LPAREN , [ argList ] , RPAREN                        (* function call *)
     | expr , LBRACK , expr , RBRACK                        (* index *)
     | expr , QUEST                                         (* exists check *)
     | NOT , expr                                           (* logical not *)
     | expr , ( MUL | DIV | MOD ) , expr                    (* multiply *)
     | expr , ( PLUS | MINUS ) , expr                       (* add *)
     | expr , ( LT | GT | LT_EQ | GT_EQ ) , expr           (* compare *)
     | QUERY_NOW , expr                                     (* query! *)
     | expr , D_QUEST , expr                                (* try-else ?? *)
     | expr , [ NOT ] , IN , expr                           (* membership *)
     | expr , IS , [ NOT ] , typeExpr                       (* type check *)
     | expr , ( D_EQ | NEQ ) , expr                         (* equality *)
     | expr , AND , expr                                    (* logical and *)
     | expr , OR , expr                                     (* logical or *)
     | ifExpr
     | tryCatchElseExpr
     | mapExpr
     | closureExpr
     | structExpr
     | tupleExpr
     | literal
     | returnExpr
     | failExpr
     | ident
     | LPAREN , expr , RPAREN ;                             (* grouping *)

ifExpr           = IF , expr , blockOrExpr ,
                   [ ELSE , blockOrExpr ] , [ SEMI ] ;
tryCatchElseExpr = TRY , block , { catchClause } ,
                   [ ELSE , block ] , [ SEMI ] ;
catchClause      = CATCH , typeExpr , block ;
returnExpr       = RETURN , expr ;
failExpr         = FAIL , expr ;

mapExpr  = H_LBRACE , [ mapEntry , { COMMA , mapEntry } ] , RBRACE ;
mapEntry = expr , FAT_ARROW , expr ;

closureExpr = barsParamList , [ BANG ] ,
              [ ARROW , typeExpr ] , block                  (* block closure *)
            | barsParamList , [ BANG ] , exprStmt ;         (* expr closure *)

structExpr = typeExpr , braceFieldList ;
tupleExpr  = LBRACK , [ expr , { COMMA , expr } ] , RBRACK ;

(* --- Literals --- *)
literal   = stringLit | intLit | decLit | boolLit | noneLit ;
stringLit = StringLiteral ;
intLit    = IntLiteral ;
decLit    = DecLiteral ;
boolLit   = BoolLiteral ;
noneLit   = NONE ;

(* ================================================================ *)
(*  Type Expressions                                                *)
(* ================================================================ *)

typeExpr = LPAREN , typeExpr , RPAREN                       (* grouped *)
         | typeExpr , brackTypeExprList                     (* parameterized *)
         | typeExpr , DOT , ident                           (* member type *)
         | brackTypeExprList                                (* tuple type *)
         | LBRACK , typeExpr , SEMI , intLit , RBRACK       (* array type *)
         | H_LBRACE , typeExpr , FAT_ARROW , typeExpr ,
           [ EQ , expr ] , RBRACE                           (* map type *)
         | structDefn                                       (* inline struct *)
         | tupleDefn                                        (* inline tuple *)
         | unitDefn                                         (* inline unit *)
         | enumDefn                                         (* inline enum *)
         | typeExpr , QUEST                                 (* option type *)
         | typeVar                                          (* type variable *)
         | ident ;                                          (* named type *)

typeVar = [ docComment ] , PercentIdent ;

(* ================================================================ *)
(*  Common Elements                                                 *)
(* ================================================================ *)

ident = HashIdent | DollarIdent | Ident | EscapedIdent | keywordIdent ;

keywordIdent = CONTRACT | INTERFACE | IMPORT | EXPORT | IMPLEMENTS
             | IMPL | EXTENDS | ERROR | EVENT | H_INSTANTIATE
             | INSTANTIATE | EXEC | QUERY | NONE | REPLY | FOR | IN
             | FROM | STATE | IF | FN | ELSE | AND | OR | TRUE
             | FALSE | LET | CONST | STRUCT | TUPLE | UNIT
             | ENUM | TYPE ;

param    = [ docComment ] , ident , [ QUEST ] , [ COLON , typeExpr ] ;
field    = ident , [ COLON , expr ] ;
namedArg = ident , EQ , expr ;
arg      = expr | namedArg ;
argList  = arg , { COMMA , arg } ;

binding     = ident , [ AS , ident ] ;
bindingList = binding , { COMMA , binding } ;

(* --- Delimited Lists --- *)
parenParamList     = LPAREN , [ param , { COMMA , param } ] , RPAREN ;
barsParamList      = BAR , [ param , { COMMA , param } ] , BAR ;
tupleParamList     = LPAREN , LBRACK , [ param , { COMMA , param } ] ,
                     RBRACK , RPAREN ;
braceParamList     = LBRACE , [ param , { COMMA , param } ] ,
                     [ COMMA ] , RBRACE ;
brackIdentList     = LBRACK , [ ident , { COMMA , ident } ] , RBRACK ;
braceBindingList   = LBRACE , [ binding , { COMMA , binding } ] ,
                     [ COMMA ] , RBRACE ;
brackTypeParamList = LBRACK , [ typeVar , { COMMA , typeVar } ] , RBRACK ;
brackTypeExprList  = LBRACK , [ typeExpr , { COMMA , typeExpr } ] , RBRACK ;
braceFieldList     = LBRACE , [ field , { COMMA , field } ] ,
                     [ COMMA ] , RBRACE ;
typeExprList       = typeExpr , { COMMA , typeExpr } ;

block       = LBRACE , { stmt } , RBRACE ;
blockOrExpr = block | expr ;
docComment  = DOC_LINE_COMMENT | DOC_BLOCK_COMMENT ;
```

---

## Type System

### Primitives

| CWScript | Rust | Description |
|----------|------|-------------|
| `U8`, `U16`, `U32`, `U64` | `u8`, `u16`, `u32`, `u64` | Unsigned integers |
| `U128` | `Uint128` | CosmWasm 128-bit unsigned |
| `U256` | `Uint256` | CosmWasm 256-bit unsigned |
| `Int` | `i64` | Signed integer |
| `String` | `String` | UTF-8 string |
| `Bool` | `bool` | Boolean |
| `Addr` / `Address` | `Addr` | CosmWasm address |
| `Dec` / `Decimal` | `Decimal` | CosmWasm decimal |
| `Binary` | `Binary` | Raw bytes |
| `Coin` | `Coin` | Denom + amount |
| `None` | `None` | Absence of value |

### Composite Types

| CWScript | Rust | Example |
|----------|------|---------|
| `T?` | `Option<T>` | `owner: Addr?` |
| `[T; N]` | `[T; N]` | `[AssetInfo; 2]` |
| `List[T]` | `Vec<T>` | `List[Coin]` |
| `#{K => V}` | `HashMap<K, V>` | `#{String => U128}` |
| `(T1, T2)` | `(T1, T2)` | `(String, U128)` |

### Type Definitions

```cws
struct Point { x: Int, y: Int }           // Named-field struct
struct Coin(amount: U128, denom: String)   // Paren-style struct

tuple Pair([Int, String])                  // Tuple struct
unit Empty                                 // Unit struct

enum AssetInfo {
  #Token(contract_addr: String),
  #NativeToken(denom: String)
}

type Amount = U128                         // Type alias
```

---

## Contract Anatomy

```cws
const CONTRACT_NAME = "crates.io:my-contract"
const CONTRACT_VERSION = "0.0.1"

contract MyContract {
  // Persistent storage
  state {
    config: struct Config { owner: Addr, name: String }
    balances[Addr]: U128                // Map storage
  }

  // Error types
  error Unauthorized()
  error InsufficientFunds(required: U128, available: U128)

  // Event types
  event Transfer(from: Addr, to: Addr, amount: U128)

  // Constructor
  #instantiate(name: String) {
    $state.config = Config { owner: $info.sender, name }
    emit! event(method="instantiate", owner=$info.sender)
  }

  // State-mutating handlers
  exec #transfer(to: Addr, amount: U128) {
    let { config } = $state
    if $info.sender != config.owner {
      fail! Unauthorized()
    }
    exec! Bank.#send(to, [Coin(amount, "utoken")])
    emit! Transfer(from=$info.sender, to=to, amount=amount)
  }

  // Read-only handlers (no $info, no writes)
  query #config() -> Config {
    return $state.config
  }

  // Helper functions
  fn validate_amount!(amount: U128) {
    if amount == 0 {
      fail! "Amount must be positive"
    }
  }
}
```

### State Access

```cws
$state.count = 10                      // Write item
let x = $state.count                   // Read item
let { config, cache } = $state         // Destructure multiple items
$state.balances[$info.sender] += 100   // Map write
let bal = $state.balances[addr]        // Map read
```

### Error Handling

```cws
fail! Unauthorized()                   // Fail with typed error
fail! "something went wrong"           // Fail with string message

let x = risky() ?? default_value       // Null coalescing / try-else
let y = result ?? fail! "no value"     // Try or fail

try {
  risky_operation!()
} catch ErrorType {
  handle()
} else {
  fallback
}
```

### Cross-Contract Calls

```cws
exec! Bank.#send(to_addr, coins)                  // Send tokens
exec! Wasm.#execute(contract, msg, funds)          // Execute another contract

let result = query! Bank.#balance(addr, denom)     // Query balance
let info = query! CW20(addr).#token_info()         // Query CW20 contract
```

### Emit Events

```cws
emit! event(method="swap", sender=$info.sender)          // Anonymous event
emit! Transfer(from=$info.sender, to=addr, amount=x)     // Named event
```

---

## Examples

### Counter

The simplest contract. See [`examples/counter/src/Counter.cws`](examples/counter/src/Counter.cws).

```bash
bun run e2e -- counter Counter
cd examples/counter/build/counter && cargo check --lib
```

### AtomicSwap

Exercises inline struct state, `emit!` (anonymous + named), `exec! Bank.#send`, `fail!`, destructuring, and top-level constants. See [`examples/atomic-swap/src/AtomicSwap.cws`](examples/atomic-swap/src/AtomicSwap.cws).

```bash
bun run e2e -- atomic-swap AtomicSwap
cd examples/atomic-swap/build/atomic-swap && cargo check --lib
```

---

## Further Documentation

- [`DOCS/language.md`](DOCS/language.md) -- Full language specification with examples
- [`DOCS/design.md`](DOCS/design.md) -- Design philosophy and rationale
- [`DOCS/architecture.md`](DOCS/architecture.md) -- Compiler pipeline details
- [`DOCS/codebase.md`](DOCS/codebase.md) -- File-by-file reference
- [`DOCS/roadmap.md`](DOCS/roadmap.md) -- Known issues and implementation plan
- [`DOCS/type-mapping.md`](DOCS/type-mapping.md) -- CWScript to Rust type correspondence

## License

MIT

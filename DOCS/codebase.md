# Codebase Reference

File-by-file reference for the cwsc-v1 compiler.

## Directory Structure

```
cwsc-v1/
├── grammar/                  ANTLR grammar files (source of truth)
├── src/
│   ├── grammar/              Generated ANTLR TypeScript (DO NOT EDIT)
│   ├── parser/               Parser wrapper, AST builder, syntax validator
│   ├── ast/                  AST node definitions, base class, visitors
│   ├── ir/                   Intermediate representation (stub)
│   ├── rust/                 Rust syntax AST, crate output, formatter
│   ├── semantics/            Static analysis, symbol tables, IR builder
│   ├── e2e-helpers/          Code generation model and transformations
│   ├── util/                 Diagnostics, filesystem, string utils
│   ├── e2e.ts                End-to-end compilation entry point
│   ├── pipelines.ts          Pipeline framework
│   ├── projects.ts           CWScript project configuration
│   └── print-diagnostics.ts  Diagnostic pretty-printer
├── examples/
│   ├── counter/              Simple counter contract
│   ├── kitchen-sink/         Multi-feature showcase + TerraswapPair
│   └── terraswap/            Real-world TerraSwap contracts
├── DOCS/                     Documentation
├── CLAUDE.md                 AI agent instructions
├── package.json              Project config (bun/jest/antlr scripts)
├── tsconfig.json             TypeScript config
└── jest.config.ts            Jest test config (ts-jest)
```

## Grammar Files

### `grammar/CWScriptLexer.g4` (~126 lines)
ANTLR lexer grammar. Defines all tokens: keywords, operators, identifier types (regular, `$dollar`, `#hash`, `%percent`), string literals, comments, whitespace.

### `grammar/CWScriptParser.g4` (~426 lines)
ANTLR parser grammar. Defines the full CWScript syntax as production rules. Key rules: `sourceFile`, `contractDefn`, `interfaceDefn`, `stateBlock`, `instantiateDefn`, `execDefn`, `queryDefn`, `fnDefn`, `replyDefn`, `migrateDefn`, `expr`, `typeExpr`, `structDefn`, `enumDefn`.

## `src/grammar/` — Generated ANTLR

**DO NOT EDIT** — regenerate with `bun run antlr`.

Contains generated TypeScript files: lexer, parser, visitor interfaces, listener interfaces. Generated from the `.g4` grammar files using `antlr4ts-cli`.

## `src/parser/`

### `CWScriptParser.ts`
Parser wrapper providing a clean API. Entry point: `CWScriptParser.parse(source, filename)` returns `CWScriptParseResult` with `{ ast, diagnostics }`.

### `ast-builder.ts` (~918 lines)
**`AstBuilderVisitor`** — The most critical file. Walks the ANTLR parse tree and constructs a typed AST by visiting each grammar rule and returning the corresponding AST node.

Key methods:
- `visitSourceFile` → `Ast.SourceFile`
- `visitContractDefn` → `Ast.ContractDefn`
- `visitStateBlock` → state field nodes
- `visitInstantiateDefn` → `Ast.InstantiateDefn`
- `visitExecDefn` → `Ast.ExecDefn`
- `visitQueryDefn` → `Ast.QueryDefn`
- `visitCallExpr` → `Ast.CallExpr` (**BUG at line 572**: `ctx._args` can contain undefined)
- `visitArg` → `Ast.Arg` (crashes when passed undefined from visitCallExpr)
- `expr(ctx)` → dispatches expression types
- Many `visit*` methods for types, expressions, statements

### `syntax-validator.ts`
**`SyntaxValidatorVisitor`** — Post-parse structural validation. Checks rules that can't be expressed in the grammar alone.

## `src/ast/`

### `abstract-node.ts` (~190 lines)
**`AstNode<K>`** — Abstract base class for all AST nodes. Properties:
- `$kind` — discriminator string (e.g., "ContractDefn")
- `$parent` — parent node reference
- `$antlrParseRuleCtx` — link to ANTLR parse tree context
- `$(ctx)` — method to set parse context and wire parent references

Tree traversal: `children`, `descendants`, `ancestors`, `walkDescendants()`, `walkDescendantsBFS()`, `walkDescendantsLF()`, `descendantsOfType()`, `nearestAncestorOfType()`.

### `nodes.ts`
All concrete AST node classes. Each extends `AstNode` with a specific `$kind` string. Key nodes:
- **Top-level**: `SourceFile`, `ContractDefn`, `InterfaceDefn`, `ImportStmt`
- **State**: `StateItemDefn`, `StateMapDefn`
- **Handlers**: `InstantiateDefn`, `ExecDefn`, `QueryDefn`, `FnDefn`, `MigrateDefn`, `ReplyDefn`
- **Types**: `StructDefn`, `EnumDefn`, `TupleDefn`, `UnitDefn`, `TypeAliasDefn`
- **Enum variants**: `EnumVariantStructDefn`, `EnumVariantTupleDefn`, `EnumVariantUnitDefn`
- **Errors/Events**: `ErrorDefn`, `EventDefn`
- **Expressions**: `CallExpr`, `IdentExpr`, `MemberExpr`, `BinaryExpr`, `IfExpr`, `StringLit`, `IntLit`, `BoolLit`, etc.
- **Statements**: `LetIdentStmt`, `LetTupleStmt`, `AssignStmt`, `ReturnStmt`, `FailStmt`, `EmitStmt`, `ForStmt`, `Block`
- **Helpers**: `Ident`, `Param`, `Arg`, `List`

### `visitors.ts`
**`AstVisitor<R>`** — Generic visitor base class that dispatches `visit(node)` to `visit${node.$kind}(node)`. Default fallback via `defaultVisit(node)`. All visitors (static analysis, block codegen, etc.) extend this.

### `index.ts`
Re-exports everything from `abstract-node.ts`, `nodes.ts`, and `visitors.ts`.

## `src/ir/` — Intermediate Representation (Stub)

A more structured intermediate layer between AST and code generation. **Not yet connected** to the main pipeline.

### `types.ts`
IR type definitions.

### `values.ts`
IR value representations.

### `expressions.ts`
IR expression nodes.

### `statements.ts`
IR statement nodes.

## `src/rust/`

### `syntax.ts` (~609 lines)
Mini-Rust AST. Every node implements `RustSyntax { render(): string }`. Includes:
- Definition nodes: `ModuleDefn`, `StructDefn`, `EnumDefn`, `FunctionDefn`, `TypeAliasDefn`, `TupleStructDefn`, `UnitStructDefn`, `ConstStmt`, `UseStmt`
- Enum variants: `EnumVariantStruct`, `EnumVariantTuple`, `EnumVariantUnit`
- Expression nodes: `StructExpr`, `FnCallExpr`, `IdentifierExpr`, `LiteralExpr`, `MatchExpr`, `IfExpr`, `BinaryExpr`, `TryExpr`, `RefExpr`, `MethodCallExpr`, `ReturnStmt`
- Helpers: `StructField`, `FunctionParam`, `StructFieldAssignment`, `MatchArm`, `Block`, `Annotated<T>`, `Raw`
- Comment nodes: `LineComment`, `BlockComment`, `LineDocComment`, `BlockDocComment`
- Factory functions: `rs.mod()`, `rs.structDefn()`, `rs.enumDefn()`, `rs.fnDefn()`, `rs.use()`, `rs.ann()`, `rs.letStmt()`, `rs.fnCallExpr()`, `rs.identExpr()`, `rs.matchExpr()`, `rs.arm()`, etc.

### `crate.ts` (~179 lines)
**`RustCrate`** — Represents a Cargo crate. Holds `CargoToml` config and file contents map. `writeToDisk(dir)` writes all files, formatting `.rs` files.

**`DEFAULT_CARGO_TOML`** — Default Cargo.toml with CosmWasm dependencies (cosmwasm-std 1.5.0, cw-storage-plus 1.1.0, serde, thiserror, etc.) and release profile optimized for Wasm.

**`DOTCARGO_CONFIG`** — `.cargo/config` with aliases: `wasm`, `unit-test`, `schema`.

### `format.ts`
`formatRust(code)` — Rust code formatter. Called during `writeToDisk()` for `.rs` files.

### `index.ts`
Re-exports from `syntax.ts` and `crate.ts`.

## `src/semantics/`

### `static-analysis-visitor.ts`
**`StaticAnalysisVisitor`** — Walks the AST and produces LSP `Diagnostic[]`. Checks for semantic errors that the parser can't catch.

### `symbol-table-visitor.ts`
Stub for building a symbol table mapping identifiers to their declarations. Not yet fully implemented.

### `ir-builder-visitor.ts`
Stub for transforming AST to IR. Not connected.

## `src/e2e-helpers/`

### `cg.ts` (~614 lines)
**The CG (Code Generation) model** — Intermediate representation between AST and Rust syntax.

**Interfaces**: `CgStruct`, `CgParam`, `CgStateField`, `CgStateFieldItem`, `CgStateFieldMap`, `CgInstantiateMsg`, `CgExecMsg`, `CgExecFn`, `CgQueryMsg`, `CgQueryFn`, `CgEnum`, `CgEnumVariant*`, `CgTuple`, `CgUnit`, `CgTypeAlias`.

**Builder classes** (each has a `build()` method returning a Rust module):
- `CgStateMod` — state constants (Item/Map)
- `CgErrorMod` — ContractError enum with thiserror
- `CgMsgMod` — InstantiateMsg, ExecuteMsg, QueryMsg
- `CgContractMod` — Entry point dispatcher functions
- `CgImplentationMod` — Handler implementation functions
- `CgTypesMod` — All custom types, errors, events
- `CWS_MOD` (constant) — Runtime context structs

**`CgContractCrate`** — Top-level assembler. Combines all modules, builds `RustCrate`.

### `contract-to-cg.ts` (~371 lines)
**`contractAstToCg(ast)`** — Main transformation from AST to CG model. Also exports:
- `indexContractNodes(ast)` — categorizes AST descendants
- `TYPE(x?)` — placeholder type function (returns `String` for everything)

### `block-to-cg.ts` (~63 lines)
**`CgBlockVisitor`** / **`blockToCg(node)`** — Translates AST blocks to Rust code strings. Mostly stubs returning TODO comments.

## `src/util/`

### `filesystem.ts`
`readFile(path)`, `writeFile(path, content)` — async file I/O with directory creation.

### `strings.ts`
String case conversion: `pascalToSnake()`, `pascalToKebab()`, `snakeToPascal()`.

### `position.ts`
`TextIndices` interface and position utilities for source mapping.

## `src/e2e.ts` (~89 lines)

End-to-end compilation script. Creates `CWScriptProject`, `CWScriptCompiler`, parses all sources, runs static analysis, extracts first contract, transforms to CG, builds Rust crate, writes to disk.

Currently targets `examples/kitchen-sink/src/TerraswapPair.cws`.

## `src/pipelines.ts` (~27 lines)

Generic pipeline framework. `Pipeline` abstract class with `stages` array and `run()` method. `BuildPipeline` has empty stages array.

## `src/projects.ts`

**`CWScriptProject`** — Loads `cwsproject.json`, validates with Zod schema, resolves source files.

- `fromProjectRoot(dir)` — factory method
- `getSourceFiles()` — glob for `.cws` files in source directory

## `src/print-diagnostics.ts`

**`DiagnosticsPrinter`** — Pretty-prints LSP diagnostics with source context.

## Examples

### `examples/counter/`
```
examples/counter/
├── cwsproject.json    { name: "counter", sourceDir: "src", buildDir: "build" }
└── src/
    └── Counter.cws    Simple counter contract (~30 lines)
```
**Best target for initial e2e testing.** Has state, instantiate, exec, query.

### `examples/kitchen-sink/`
```
examples/kitchen-sink/
├── cwsproject.json
└── src/
    ├── KitchenSink.cws      Feature showcase: structs, tuples, units, enums,
    │                         type aliases, events, errors, functions (~100 lines)
    └── TerraswapPair.cws    Complex real-world contract: cross-contract calls,
                              reply handlers, closures, assertions (~470 lines)
```

### `examples/terraswap/`
Real-world TerraSwap contract examples.

## Configuration Files

### `package.json`
Scripts:
- `test` → `jest`
- `e2e` → `bun src/e2e.ts`
- `e2e-build` → `bun src/e2e.ts && cd build/terraswap-pair && cargo wasm`
- `antlr` → regenerate both lexer and parser
- `antlr-lexer` → regenerate lexer only
- `antlr-parser` → regenerate parser only

Dependencies: `antlr4ts` ^0.5.0-alpha.4, `@iarna/toml`, `zod`, `vscode-languageserver`, `vscode-languageserver-textdocument`

DevDependencies: `jest` 29.7.0, `ts-jest`, `antlr4ts-cli` (ANTLR 4.9.0-SNAPSHOT with antlr4ts TypeScript target)

### `tsconfig.json`
TypeScript compiler config targeting ES2022 with module resolution for bundlers.

### `jest.config.ts`
Jest configuration using ts-jest transformer. Currently no test files exist.

# Compiler Architecture

## Pipeline Overview

```
.cws source
  → ANTLR Lexer (CWScriptLexer.g4)
  → ANTLR Parser (CWScriptParser.g4)
  → Parse Tree (ANTLR CST)
  → AstBuilderVisitor
  → AST (abstract syntax tree)
  → StaticAnalysisVisitor → Diagnostics
  → contractAstToCg() + indexContractNodes()
  → CG Model (code generation intermediate)
  → CgContractCrate.build()
  → RustCrate (Rust syntax AST)
  → writeToDisk()
  → Cargo.toml + src/lib.rs
```

## Phase 1: Parsing

**Source of truth**: `grammar/CWScriptLexer.g4` and `grammar/CWScriptParser.g4`

The parser uses ANTLR4 (via `antlr4ts` TypeScript binding, version 0.5.0-alpha.4) to generate a lexer and parser in TypeScript. The generated files live in `src/grammar/` and must **never** be hand-edited.

### Lexer Highlights

The lexer (`CWScriptLexer.g4`, ~126 lines) defines tokens including:
- **`DollarIdent`** — `$state`, `$info`, `$env` (dollar-prefixed context variables)
- **`HashIdent`** — `#increment`, `#Token` (hash-prefixed variant/handler names)
- **`PercentIdent`** — `%T`, `%U` (percent-prefixed type parameters)
- **`Ident`** — regular identifiers
- String literals (both `'single'` and `"double"` quoted)
- Keywords: `contract`, `interface`, `state`, `exec`, `query`, `fn`, `let`, `if`, `else`, `for`, `in`, `return`, `fail`, `try`, `catch`, `emit`, `import`, `export`, `extends`, `implements`, `struct`, `enum`, `type`, `error`, `event`, `reply`, `migrate`, `send`, `query`, `exec`, `true`, `false`, `None`, `and`, `or`, `not`, `is`, `mut`

### Parser Highlights

The parser (`CWScriptParser.g4`, ~426 lines) defines grammar rules for:
- Top-level: `sourceFile`, `contractDefn`, `interfaceDefn`, `importStmt`
- Contract body: `stateBlock`, `instantiateDefn`, `execDefn`, `queryDefn`, `fnDefn`, `migrateDefn`, `replyDefn`
- Type system: `typeExpr`, `structDefn`, `enumDefn`, `tupleDefn`, `unitDefn`, `typeAliasDefn`
- Expressions: `expr` with precedence climbing, `callExpr`, `memberExpr`, `ifExpr`, `forStmt`, `letStmt`
- Error/Event: `errorDefn`, `eventDefn`

### Parser Wrapper

`src/parser/CWScriptParser.ts` provides a clean API:

```typescript
CWScriptParser.parse(source: string, filename: string): CWScriptParseResult
```

Returns `{ ast, diagnostics }` where `ast` is the root AST node.

## Phase 2: AST Building

**Key file**: `src/parser/ast-builder.ts` (~918 lines)

The `AstBuilderVisitor` walks the ANTLR parse tree and constructs a typed AST. It extends the ANTLR-generated visitor base class.

### AST Node System

**Base class**: `src/ast/abstract-node.ts`

```typescript
abstract class AstNode<K extends string> {
  abstract readonly $kind: K;          // Discriminator (e.g., "ContractDefn", "ExecDefn")
  $parent: AstNode | null;             // Parent reference
  $antlrParseRuleCtx: ParserRuleContext | null;  // Link to parse tree

  $(ctx: ParserRuleContext): this;     // Set parse context + parent refs
  get children(): AstNode[];           // Direct children
  get descendants(): AstNode[];        // All descendants (depth-first)
  descendantsOfType<X>(type): X[];     // Filter descendants by type
  walkAncestors(): Iterator;           // Walk up the tree
  isVirtual(): boolean;                // True if no parse context (synthetic node)
}
```

**Node definitions**: `src/ast/nodes.ts`

All concrete AST nodes are defined here, including:
- `SourceFile`, `ContractDefn`, `InterfaceDefn`
- `StateItemDefn`, `StateMapDefn`
- `InstantiateDefn`, `ExecDefn`, `QueryDefn`, `FnDefn`, `MigrateDefn`, `ReplyDefn`
- `StructDefn`, `EnumDefn`, `TupleDefn`, `UnitDefn`, `TypeAliasDefn`
- `ErrorDefn`, `EventDefn`
- `EnumVariantStructDefn`, `EnumVariantTupleDefn`, `EnumVariantUnitDefn`
- Expression nodes: `CallExpr`, `IdentExpr`, `MemberExpr`, `BinaryExpr`, `IfExpr`, etc.
- Statement nodes: `LetIdentStmt`, `LetTupleStmt`, `AssignStmt`, `ReturnStmt`, etc.
- `Ident`, `Param`, `Arg`, `Block`, `List`

### Visitor Base Classes

`src/ast/visitors.ts` defines `AstVisitor<R>` — a visitor base class with a `visit(node)` method that dispatches to `visitXxx(node)` methods based on `$kind`. Uses `defaultVisit(node)` as fallback.

## Phase 3: Validation

### Syntax Validator

`src/parser/syntax-validator.ts` — `SyntaxValidatorVisitor`

Validates structural rules after AST construction (e.g., ensuring contracts have required elements).

### Static Analysis

`src/semantics/static-analysis-visitor.ts` — `StaticAnalysisVisitor`

Performs semantic checks and produces `Diagnostic[]` (using the LSP diagnostic format from `vscode-languageserver`). Currently a partial implementation.

### Symbol Table

`src/semantics/symbol-table-visitor.ts`

Stub for building a symbol table that maps identifiers to their declarations. Not yet fully implemented.

## Phase 4: AST → CG Model

**Key file**: `src/e2e-helpers/contract-to-cg.ts` (~371 lines)

### `indexContractNodes(ast: ContractDefn): ContractNodes`

Walks all descendants of a contract AST node and categorizes them into:
- `stateDefns` — `StateItemDefn | StateMapDefn`
- `instantiateDefn` — single `InstantiateDefn`
- `execDefns` — list of `ExecDefn`
- `queryDefns` — list of `QueryDefn`
- `structDefns`, `tupleDefns`, `unitDefns`, `enumDefns`, `typeAliasDefns`
- `errorDefns`, `eventDefns`, `fnDefns`

### `contractAstToCg(ast: ContractDefn): CgContractCrate`

Transforms indexed AST nodes into the CG model:
1. **State** → `CgStateMod` (state fields as `CgStateFieldItem` or `CgStateFieldMap`)
2. **Errors** → `CgErrorMod` (error enum variants)
3. **Messages** → `CgMsgMod` (InstantiateMsg, ExecuteMsg, QueryMsg structs/enums)
4. **Entry points** → `CgContractMod` (dispatcher functions)
5. **Implementation** → `CgImplentationMod` (impl functions with bodies)
6. **Types** → `CgTypesMod` (all struct/enum/tuple/unit/alias/error/event definitions)

Each handler's body is translated via `blockToCg()`.

### Type Placeholder

Currently, the `TYPE()` function returns a placeholder:

```typescript
export const TYPE = (x?: any) => {
  if (x) {
    return `String /* ${x.$antlrParseRuleCtx!.text} */`;
  } else {
    return `String`;
  }
};
```

This needs to be replaced with real CWScript-to-Rust type mapping (see `DOCS/type-mapping.md`).

## Phase 5: Block Code Generation

**Key file**: `src/e2e-helpers/block-to-cg.ts` (~63 lines)

`CgBlockVisitor` extends `AstVisitor<any>` and translates AST statement/expression nodes to Rust code strings. Currently mostly stubs:

**Implemented:**
- `visitBlock` — maps over statements
- `visitLetIdentStmt` — `let mut name = value;` (partially)
- `visitLetTupleStmt` — `let (a, b) = value;`
- `visitCallExpr` — `fn_name(args)`
- `visitIdentExpr` — identifier name

**Not implemented (returns TODO comment):**
- All other AST node types: assignments, if-else, for loops, return, fail, emit, exec!, query!, member access, binary expressions, etc.

## Phase 6: CG Model

**Key file**: `src/e2e-helpers/cg.ts` (~614 lines)

The CG (Code Generation) model is an intermediate representation between AST and Rust syntax. It organizes the contract into Rust module structure.

### CG Types

| Type | Purpose |
|------|---------|
| `CgStruct` | Struct with named fields |
| `CgParam` | Named parameter (name + type string) |
| `CgStateField` | State field (item or map) |
| `CgInstantiateMsg` | InstantiateMsg struct fields |
| `CgExecMsg` / `CgExecFn` | ExecuteMsg enum + handler functions |
| `CgQueryMsg` / `CgQueryFn` | QueryMsg enum + handler functions |
| `CgEnum`, `CgEnumVariant*` | Enum definitions with struct/tuple/unit variants |
| `CgTuple`, `CgUnit`, `CgTypeAlias` | Other type definitions |

### CG Modules (Builder Classes)

| Class | Rust Module | Contents |
|-------|-------------|----------|
| `CgStateMod` | `mod state` | cw-storage-plus `Item`/`Map` constants |
| `CgErrorMod` | `mod error` | `ContractError` enum with thiserror |
| `CgMsgMod` | `mod msg` | `InstantiateMsg`, `ExecuteMsg`, `QueryMsg` |
| `CgContractMod` | `mod contract` | Entry point functions (instantiate, execute, query) |
| `CgImplentationMod` | `mod implementation` | `*_impl` handler functions |
| `CgTypesMod` | `mod types` | All type definitions, events, errors |
| `CWS_MOD` (const) | `mod cws` | Runtime structs: `InstantiateCtx`, `ExecuteCtx`, `QueryCtx`, `CWSQueryResponse` |

### `CgContractCrate`

Top-level class that assembles all modules and builds a `RustCrate`:

```typescript
class CgContractCrate {
  name: string;           // Contract name (PascalCase)
  rsCrateName: string;    // kebab-case for Cargo.toml
  rsModName: string;      // snake_case for Rust module

  build(): RustCrate;     // Assemble all modules into a crate
}
```

## Phase 7: Rust Syntax AST

**Key file**: `src/rust/syntax.ts` (~609 lines)

A mini-Rust AST where every node implements `RustSyntax { render(): string }`. Factory functions (`rs.*`) create nodes:

### Definition Nodes
- `rs.mod(name, body)` → `pub mod name { ... }`
- `rs.structDefn(name, fields)` → `pub struct Name { ... }`
- `rs.enumDefn(name, variants)` → `pub enum Name { ... }`
- `rs.fnDefn(name, params, returnType, body)` → `pub fn name(...) -> T { ... }`
- `rs.typeAliasDefn(name, ty)` → `pub type Name = T;`
- `rs.tupleStructDefn(name, fields)` → `pub struct Name(pub T);`
- `rs.unitStructDefn(name)` → `pub struct Name;`
- `rs.konst(name, ty, value)` → `pub const NAME: T = value;`
- `rs.use(path)` → `use path;`

### Enum Variant Nodes
- `rs.variantStruct(name, fields)` → `Name { field: Type, ... }`
- `rs.variantTuple(name, fields)` → `Name(Type, ...)`
- `rs.variantUnit(name)` → `Name`

### Expression Nodes
- `rs.structExpr(ty, fields)` → `Type { field: value, ... }`
- `rs.fnCallExpr(fn, args)` → `fn(args)`
- `rs.identExpr(name)` → `name`
- `rs.litExpr(value)` → literal value
- `rs.matchExpr(expr, arms)` → `match expr { ... }`
- `rs.ifExpr(cond, then, else)` → `if cond { ... } else { ... }`
- `rs.binExpr(left, op, right)` → `left op right`
- `rs.tryExpr(expr)` → `expr?`
- `rs.refExpr(expr)` → `&expr`
- `rs.returnStmt(expr)` → `return expr;`

### Annotation Wrapper
- `rs.ann(annotation, target)` → `#[annotation] target`

## Phase 8: Crate Output

**Key file**: `src/rust/crate.ts` (~179 lines)

### `RustCrate`

```typescript
class RustCrate {
  config: CargoToml;                    // Cargo.toml configuration
  files: { [path: string]: string };    // File contents

  writeToDisk(parentDir: string);       // Write all files, format .rs files
}
```

### Default Cargo.toml

The generated `Cargo.toml` includes:
- `cosmwasm-std` 1.5.0 (with `cosmwasm_1_3` feature)
- `cosmwasm-schema` 1.5.0
- `cw-storage-plus` 1.1.0
- `cw2` 1.1.1
- `schemars` 0.8.15
- `serde` 1.0.189 (with `derive` feature)
- `thiserror` 1.0.49
- `cw-multi-test` 0.17.0 (dev)
- Release profile optimized for Wasm (`opt-level = 3`, `lto = true`, `panic = "abort"`)

### Generated Rust Module Structure

```rust
pub mod contract_name {
    pub mod state { ... }           // cw-storage-plus Items/Maps
    pub mod error { ... }           // ContractError enum
    pub mod msg { ... }             // InstantiateMsg, ExecuteMsg, QueryMsg
    pub mod contract { ... }        // Entry point dispatchers
    pub mod implementation { ... }  // Handler impl functions
    pub mod types { ... }           // Custom types, events, type aliases
    pub mod cws { ... }             // Runtime context structs
}
```

## E2E Entry Point

**Key file**: `src/e2e.ts` (~89 lines)

The end-to-end compilation flow:

```typescript
async function main() {
  const project = await CWScriptProject.fromProjectRoot('examples/kitchen-sink');
  const compiler = new CWScriptCompiler(project);
  const ctx = await compiler.build();
  // Get the contract from parsed source
  const { parseResult, diagnostics } = ctx.sourceFiles[contractFile];
  let contract = parseResult!.ast.descendantsOfType(Ast.ContractDefn)[0];
  // Print diagnostics
  new DiagnosticsPrinter(file, diagnostics).print();
  // Transform to CG model
  let cg = contractAstToCg(contract);
  // Build Rust crate
  let crate = cg.build();
  // Write to disk
  await crate.writeToDisk(project.buildDir);
}
```

## Pipeline System

**Key file**: `src/pipelines.ts` (~27 lines)

A generic pipeline framework with `PipelineStage` and `Pipeline` abstract classes supporting `beforeAll`, `afterAll`, `beforeEach`, `afterEach` hooks. The `BuildPipeline` in `src/e2e.ts` currently has an **empty stages array** — the pipeline architecture exists but no stages are registered.

## IR System (Stub)

`src/ir/` contains an intermediate representation layer that is **not yet connected** to the pipeline:

- `types.ts` — IR type definitions
- `values.ts` — IR value representations
- `expressions.ts` — IR expression nodes
- `statements.ts` — IR statement nodes

This was intended as a more structured intermediate step between AST and code generation, but the current e2e path bypasses it entirely, going AST → CG directly.

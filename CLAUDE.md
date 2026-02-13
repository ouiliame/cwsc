# CWScript Compiler (cwsc-v1) — AI Agent Instructions

## Quick Start

```bash
bun install          # Install dependencies
bun run e2e          # Run end-to-end compilation (currently broken)
bun run test         # Run jest tests (currently no test files)
bun run antlr        # Regenerate ANTLR parser from grammar
bun run antlr-lexer  # Regenerate lexer only
bun run antlr-parser # Regenerate parser only
```

## What This Project Is

CWScript is a domain-specific language for writing CosmWasm smart contracts. This compiler (`cwsc-v1`) transpiles `.cws` source files to Rust/CosmWasm contracts. It's implemented in TypeScript using ANTLR4 for parsing.

## Project Structure

```
grammar/              .g4 ANTLR grammar files (source of truth for syntax)
src/grammar/          Generated ANTLR TypeScript (DO NOT EDIT — regenerate with bun run antlr)
src/parser/           Parser wrapper, AST builder (parse tree → AST), syntax validator
src/ast/              AST node definitions (nodes.ts), base class (abstract-node.ts), visitors
src/ir/               Intermediate representation — types, values, expressions, statements
src/rust/             Rust syntax AST (syntax.ts) with render() methods, crate output (crate.ts)
src/semantics/        Static analysis visitor, symbol table visitor, IR builder (stub)
src/e2e-helpers/      Code generation model: cg.ts (CG types), contract-to-cg.ts, block-to-cg.ts
src/util/             Diagnostics printer, filesystem helpers, string utils
src/projects.ts       CWScript project configuration (cwsproject.json schema)
src/pipelines.ts      Pipeline framework (stages array currently empty)
src/e2e.ts            End-to-end compilation script (entry point)
examples/counter/     Simplest example contract — best target for initial work
examples/kitchen-sink/ Complex example with many language features
examples/terraswap/   Real-world TerraSwap contracts
```

## Compilation Pipeline

```
.cws source → ANTLR Lexer/Parser → Parse Tree → AstBuilderVisitor → AST
    → StaticAnalysisVisitor → Diagnostics
    → contractAstToCg() → CG Model → CgContractCrate.build() → RustCrate
    → writeToDisk() → Cargo.toml + src/lib.rs
```

## Current Status

- **Parser:** Works for most syntax, but crashes on some complex expressions
- **AST Builder:** Functional but has a bug in `visitCallExpr` (line 572 of ast-builder.ts)
- **Code Generation:** Structural scaffolding works, but TYPE() returns placeholder "String" for all types
- **Block Codegen:** `blockToCg()` returns TODO comments for most statements
- **Tests:** Jest configured with ts-jest, but all test files were deleted
- **E2E:** Crashes with `TypeError: undefined is not an object (evaluating 'tree.accept')`

## Known Bugs

1. `src/parser/ast-builder.ts:572` — `ctx._args` can contain undefined elements, causing crash in `visitArg`. Fix: filter nulls before mapping.
2. `src/e2e-helpers/contract-to-cg.ts:28` — `TYPE()` returns `String` placeholder instead of real types.
3. `src/e2e-helpers/block-to-cg.ts` — Most visitor methods return TODO comments.
4. `src/e2e-helpers/cg.ts:73` — Map state fields not implemented (has TODO comment).

## Key Files by Compiler Phase

| Phase | Key File | Entry Function |
|-------|----------|----------------|
| Parse | `src/parser/CWScriptParser.ts` | `CWScriptParser.parse(source, filename)` |
| AST Build | `src/parser/ast-builder.ts` | `AstBuilderVisitor` (visitor class) |
| Validation | `src/parser/syntax-validator.ts` | `SyntaxValidatorVisitor` |
| Static Analysis | `src/semantics/static-analysis-visitor.ts` | `StaticAnalysisVisitor` |
| AST → CG | `src/e2e-helpers/contract-to-cg.ts` | `contractAstToCg(ast)` |
| Block → Rust | `src/e2e-helpers/block-to-cg.ts` | `blockToCg(node)` |
| CG → Rust | `src/e2e-helpers/cg.ts` | `CgContractCrate.build()` |
| Rust Syntax | `src/rust/syntax.ts` | Various `rs.*` factory functions |
| Crate Output | `src/rust/crate.ts` | `RustCrate.writeToDisk(dir)` |

## Conventions

- ANTLR grammar files in `grammar/` are the source of truth; generated files in `src/grammar/` must not be hand-edited
- Visitor pattern used throughout: AST builder, syntax validator, static analysis, block codegen
- CG (Code Generation) model is an intermediate layer between AST and Rust syntax
- AST nodes use `$kind` discriminator, `$parent` references, and `$(ctx)` for linking to parse context
- Identifier prefixes: `#` = enum variants/handlers, `$` = context variables, `%` = type parameters

## Recommended Development Order

1. Fix parser crash (ast-builder.ts:572 null filter)
2. Get Counter.cws compiling end-to-end (simplest contract)
3. Implement real type mapping (replace TYPE() placeholder)
4. Implement statement codegen in blockToCg
5. Get KitchenSink.cws compiling
6. Get TerraswapPair.cws compiling

## Documentation

See `DOCS/` for comprehensive documentation:
- `DOCS/language.md` — CWScript language specification (syntax, types, examples)
- `DOCS/design.md` — Design philosophy and rationale (why `$`, why `#`, why try-catch, etc.)
- `DOCS/architecture.md` — Compiler architecture details (pipeline phases, AST, CG model)
- `DOCS/codebase.md` — File-by-file reference for the entire project
- `DOCS/roadmap.md` — Known issues and implementation roadmap
- `DOCS/type-mapping.md` — CWScript to Rust type correspondence

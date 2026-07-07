# CWScript Compiler (cwsc-v1) — AI Agent Instructions

## Quick Start

```bash
bun install                     # Install dependencies
bun src/e2e.ts <proj> <Contract> # Compile one contract, e.g. `bun src/e2e.ts counter Counter`
scripts/spec-runner.sh          # Acceptance harness: e2e + cargo check every example (must be all-pass)
bun run antlr                   # Regenerate ANTLR parser from grammar (needs the JVM — see Gotchas)
bun run antlr-lexer             # Regenerate lexer only
bun run antlr-parser            # Regenerate parser only
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

The compiler is end-to-end functional across the full language spec. `scripts/spec-runner.sh`
is the acceptance harness: it e2e-compiles every `.cws` under `examples/**` and runs
`cargo check` on every generated crate. As of the last full pass it is **fully green** —
all 36 example contracts + the 22-file `examples/lang-features/` spec-coverage suite compile
to real Rust that passes `cargo check`.

- **Parser / AST Builder:** Robust — no crashes on any example. Optional/error-recovered
  grammar children go through placeholder helpers in `ast-builder.ts` rather than crashing.
- **Grammar:** Covers the entire spec, including reply handler defns, `@annotations`,
  `delegate_exec!`, `migrate()`, `mut` params/args, `**`, paren tuple types, body-less
  interface signatures, anonymous inline struct return types, and the inline `send…reply` form.
- **Code Generation:** Real type mapping, generics (`%T`→`<T>`), enum accessors, try/catch/else,
  `??` chains, cross-contract `exec!`/`query!`/`delegate_exec!`, reply/migrate entry points,
  impl-block operator overloads, string interpolation, and CW2/Addr/Dec utilities all generate
  genuine Rust. `todo!()` appears only for genuinely unresolvable externals (e.g. `injective/*`
  module imports).
- **Verification:** `cargo` is available via rustup; the harness caches builds in
  `.cargo-target/` (git-ignored).

## Spec-coverage suite

`examples/lang-features/src/*.cws` has one contract per spec section (Structs, Enums, Replies,
CrossContract, ControlFlow, ErrorHandling, Interfaces, ImplBlocks, …). It is the regression
gate — when adding a language feature, add/extend its coverage contract there and keep
`scripts/spec-runner.sh` green.

## Gotchas

- **Regenerating the parser needs a JVM.** `bun run antlr` shells out to the ANTLR jar, which
  needs Java. Install once with `brew install openjdk` and put `/opt/homebrew/opt/openjdk/bin`
  on `PATH` before running `bun run antlr`. Never hand-edit `src/grammar/**` — regenerate.
- `RustCrate.writeToDisk` wipes the target crate dir before writing, so stale files from a
  previous build can never leak into a fresh crate.
- `src/e2e-helpers/ir/*` is an unused stub with pre-existing `tsc` errors; it is not on the
  live pipeline. Ignore those errors when checking `bunx tsc --noEmit`.

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

## Working on the compiler

The core language is implemented; work is now incremental. To add or fix a feature:

1. Add/extend a coverage contract in `examples/lang-features/src/` that exercises it.
2. If it is new syntax, extend `grammar/*.g4`, run `bun run antlr` (needs the JVM — see Gotchas),
   then add the AST node (`src/ast/nodes.ts`), visitor method (`src/parser/ast-builder.ts`),
   and any validator rule (`src/parser/syntax-validator.ts`).
3. Implement codegen in `src/e2e-helpers/{contract-to-cg,block-to-cg,cg}.ts`.
4. Run `scripts/spec-runner.sh` (optionally with a project-name filter, e.g.
   `scripts/spec-runner.sh lang-features`) until every line reports `pass`.

## Documentation

See `DOCS/` for comprehensive documentation:
- `DOCS/language.md` — CWScript language specification (syntax, types, examples)
- `DOCS/design.md` — Design philosophy and rationale (why `$`, why `#`, why try-catch, etc.)
- `DOCS/architecture.md` — Compiler architecture details (pipeline phases, AST, CG model)
- `DOCS/codebase.md` — File-by-file reference for the entire project
- `DOCS/roadmap.md` — Known issues and implementation roadmap
- `DOCS/type-mapping.md` — CWScript to Rust type correspondence

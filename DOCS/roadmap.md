# Known Issues & Implementation Roadmap

## Current Status Summary

| Component | Status |
|-----------|--------|
| ANTLR Grammar | Working for most syntax |
| Parser / AST Builder | Works but crashes on some complex expressions |
| Syntax Validator | Partial implementation |
| Static Analysis | Partial implementation |
| Symbol Table | Stub |
| IR System | Stub (not connected) |
| Type Mapping | Placeholder — returns "String" for all types |
| Block Code Generation | Mostly TODO stubs |
| State Code Generation | Item works; Map not implemented |
| Rust Syntax AST | Functional |
| Crate Output | Functional |
| Tests | Jest configured, but all test files deleted |
| E2E Pipeline | Crashes due to parser bug |
| Pipeline Framework | Framework exists, stages array empty |

## Known Bugs

### Bug 1: Parser Crash in `visitCallExpr`

**File**: `src/parser/ast-builder.ts:572`
**Severity**: Blocking (crashes e2e)

```typescript
// BUGGY: ctx._args can contain undefined elements
const args = new Ast.List(ctx._args.map((a) => this.visitArg(a))).$(ctx);
```

When the ANTLR parser recovers from syntax errors, `ctx._args` array can contain `undefined`/`null` elements. These get passed to `visitArg()` (line 842) which tries to call `.namedArg()` on `undefined`, causing a crash.

**Fix**: Filter nulls before mapping:
```typescript
const args = new Ast.List(ctx._args.filter(a => a != null).map((a) => this.visitArg(a))).$(ctx);
```

### Bug 2: E2E Targets Wrong File

**File**: `src/e2e.ts:72`

The e2e script targets `TerraswapPair.cws` (the most complex example) instead of `Counter.cws` (the simplest). For initial development, it should target Counter.

**Fix**: Change to `examples/counter/src/Counter.cws` or make the target configurable.

### Bug 3: State Type Hardcoded

**File**: `src/e2e-helpers/contract-to-cg.ts:118`

State item fields are hardcoded to `Item<String>`:
```typescript
ty: 'Item<String>', // TODO: fix type
```

Should use the actual CWScript type mapped to its Rust equivalent.

## Implementation Gaps

### Gap 1: TYPE() Placeholder

**File**: `src/e2e-helpers/contract-to-cg.ts:28-34`

The `TYPE()` function returns `String` for all types, with the original text in a comment:

```typescript
export const TYPE = (x?: any) => {
  if (x) {
    return `String /* ${x.$antlrParseRuleCtx!.text} */`;
  } else {
    return `String`;
  }
};
```

**Impact**: All generated Rust code uses `String` instead of proper types (`u32`, `Addr`, `Uint128`, etc.). See `DOCS/type-mapping.md` for the correct mappings.

**Used in**: Every handler parameter, state field type, struct field type, enum variant field type, return type, and type alias throughout `contract-to-cg.ts`.

### Gap 2: Block Code Generation Stubs

**File**: `src/e2e-helpers/block-to-cg.ts`

The `CgBlockVisitor` has a `defaultVisit` that returns `/* TODO: Untranslated <kind> */` for most AST nodes. Only these are implemented:

- `visitBlock` — iterates statements
- `visitLetIdentStmt` — partial (calls `cgLetMut` but then returns defaultVisit anyway)
- `visitLetTupleStmt` — tuple destructuring
- `visitCallExpr` — function calls
- `visitIdentExpr` — identifiers

**Missing**: assignments (`$state.count = x`), if-else, for loops, return statements, fail!, emit, exec!, query!, member access (`$info.sender`), binary operators, closures, destructuring, type checks (`is`), try-catch-else, and all other expression/statement types.

### Gap 3: Map State Fields

**File**: `src/e2e-helpers/cg.ts:72-74`

```typescript
} else if (x.$type === 'map') {
  // TODO: make map
}
```

State map fields (`balances[Addr]: U128`) generate no code at all. Should generate:
```rust
pub const BALANCES: Map<Addr, Uint128> = Map::new("balances");
```

### Gap 4: No Test Files

Jest is configured with ts-jest but all test files have been deleted. Need to create:
- Parser tests (does it parse various .cws files without crashing?)
- AST builder tests (does it produce correct AST from parse trees?)
- CG model tests (does contractAstToCg produce correct CG structures?)
- Rust syntax tests (does render() produce valid Rust?)
- Integration tests (does the full pipeline produce expected output?)

### Gap 5: Pipeline Stages Empty

**File**: `src/e2e.ts:28-30`

```typescript
public get stages(): PipelineStage[] {
  return [];
}
```

The `BuildPipeline` has no registered stages. The pipeline architecture exists but isn't used — the e2e flow manually calls each step.

### Gap 6: IR Builder Not Connected

**File**: `src/semantics/ir-builder-visitor.ts`

The IR system (`src/ir/`) and its builder visitor are stubs. The current compilation path goes AST → CG directly, bypassing IR entirely.

### Gap 7: Implementation Functions Ignore Body

**File**: `src/e2e-helpers/cg.ts:359-367`

Exec implementation functions ignore the body and just return `Ok(Response::new())`:

```typescript
public buildExecImplFns(): rs.FunctionDefn[] {
  return this.execImplFns.map((x) => {
    const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
    return rs.fnDefn(
      `exec_${x.fnName}_impl`,
      [rs.fnParam('ctx', 'ExecuteCtx'), ...params],
      'Result<Response, ContractError>',
      [rs.fnCallExpr('Ok', [rs.fnCallExpr('Response::new', [])])]  // Body ignored!
    );
  });
}
```

The `body` field exists on `CgExecImplFn` but isn't used. Similarly for query impl functions.

### Gap 8: Instantiate Body Partially Implemented

**File**: `src/e2e-helpers/cg.ts:346-357`

The instantiate impl function does pass the body through as `rs.raw(x)`, but the body comes from `blockToCg()` which mostly returns TODO comments. The function always appends `Ok(Response::new())` at the end.

### Gap 9: Query Response Type

**File**: `src/e2e-helpers/cg.ts:371-385`

Query implementation functions return `CWSQueryResponse<T>` wrapping a hardcoded `String::from("TODO")` instead of the actual query result.

### Gap 10: Contract Inheritance Not Implemented

The CG model doesn't handle `extends` or `implements`. Only standalone contracts work.

### Gap 11: Import Resolution Not Implemented

The parser can parse `import` statements but there's no module resolution — each file is parsed independently.

### Gap 12: Rust Code Formatter

`src/rust/format.ts` — The Rust formatter is basic. Complex generated code may not be well-formatted.

## Recommended Development Order

### Phase 1: Fix Parser & Get Counter Compiling

1. **Fix parser crash** — `ast-builder.ts:572` null filter
2. **Switch e2e target** to `Counter.cws`
3. **Implement real type mapping** — Replace `TYPE()` with proper CWScript→Rust type map
4. **Implement basic statement codegen** in `blockToCg()`:
   - `$state.x = value` → state save
   - `let x = $state.y` → state load
   - `if ... { ... }` → if expression
   - `fail!` → return Err(...)
   - `return value` → return value
5. **Fix state type generation** — Use mapped types instead of `Item<String>`
6. **Wire up impl function bodies** — Use blockToCg() output instead of ignoring it
7. **Verify Counter compiles** end-to-end to valid Rust

### Phase 2: Expand Statement Codegen

8. Implement remaining `blockToCg()` visitors:
   - Assignments (regular and compound: `+=`, `-=`)
   - For loops
   - Binary expressions
   - Member access (`$info.sender`, `asset.amount`)
   - Type checks (`is`)
   - Closures
   - Destructuring (`let { a, b } = ...`, `let [x, y] = ...`)
9. Implement Map state field generation
10. Get `KitchenSink.cws` compiling

### Phase 3: Cross-Contract & Advanced Features

11. Implement `exec!` / `query!` / `emit` code generation
12. Implement reply handler generation
13. Implement annotation processing
14. Get `TerraswapPair.cws` compiling

### Phase 4: Testing & Polish

15. Write parser tests for all .cws examples
16. Write CG model unit tests
17. Write integration tests comparing generated Rust to expected output
18. Implement pipeline stages (formalize the build process)
19. Wire up IR builder (optional — may not be needed if CG model is sufficient)
20. Implement import resolution for multi-file projects
21. Implement contract inheritance (`extends` / `implements`)

# CWScript Design Philosophy

This document captures the motivations, tradeoffs, and reasoning behind CWScript's language design decisions.

## Mission

CWScript is designed to be **the pseudocode that most closely resembles what people see in their minds when envisioning how their contracts will work**. It captures the essential operations and semantics of CosmWasm while removing complexity from irrelevant Rust artifacts — memory ownership, lifetimes, traits, Result combinators, Option wrapping, etc.

### Design Metrics (in order of importance)

1. **Safety** — Universal Error and Option types; all errors must be handled
2. **Fidelity** — Faithful to CosmWasm's paradigm and semantics
3. **Clarity** — Easy to visually parse and understand
4. **Performance** — Efficient generated code (small sacrifice acceptable)

CWScript is intended primarily as a **prototyping and design language** before transitioning to Rust for production, though the generated Rust should be production-quality.

## Understanding CosmWasm

CWScript is built around CosmWasm's core concepts:

- **Contract definition** vs **contract instance**: Code is uploaded to the blockchain; instances are deployed with unique addresses, state, and funds.
- **Entrypoints**: Special functions triggered by on-chain messages:
  - `instantiate` — new contract instance creation (`wasm/MsgInstantiateContract`)
  - `execute` — state-mutating operations (`wasm/MsgExecuteContract`)
  - `query` — read-only operations (no transaction)
  - `reply` — callback after submessage execution (success or error)
  - `migrate` — contract upgrade (`MsgMigrateContract`)

## Special Context Variable `$`

### The Problem

In CosmWasm Rust, every entrypoint must declare the same lengthy signatures:

```rust
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> { ... }
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> { ... }
```

These parameters (`deps`, `env`, `info`) are passed around to every helper function, creating noise.

### The Solution

`$` is associated mentally with "special context." It acts like `this` in JavaScript — an implicit reference to the contract's execution context:

- `$info` — not available in queries or replies
- `$env` — block time, contract address, etc.
- `$state` — contract storage access
- `$res` — manual response manipulation (`$res.data`, `$res.events`, `$res.attributes`, `$res.msgs`)
- `$error` — only in `reply.error`
- `$events` / `$data` — only in `reply.success`

### Why `$`?

- **Compact**: Most concise symbol that permits usage
- **No conflicts**: Doesn't clash with any parameter names
- **Context-aware**: When `$` changes (different handler type), so do the available variables
- **Groups naturally**: `$env`, `$info`, `$state` are clearly related
- **Avoids Rust/Python pain**: No repetitive `self` / `Self` first parameter on every method
- Since all entrypoints are implicitly "methods" of the contract, `self` would pollute the contract/interface with unnecessary info

### Context Passing to Functions

Functions inside a contract can request context explicitly:

```cws
fn r_operation($state) { ... }           // Read-only state
fn rw_operation(mut $state) { ... }      // Mutable state
fn full_context($) { ... }              // Full context bundle
fn full_mutable(mut $) { ... }          // Full mutable context
```

The contexts around `$` are nearly always the same — no need to repeat lengthy function signatures.

## Enum Variant Notation `A.#B`

### The Design

```cws
let a = AssetInfo.#Token { contract_addr: "..." };
let b = AssetInfo.#Token("...");  // Shorthand
```

### Why `#` for Variants?

- **Visual parallel**: `exec #mint()` (entrypoint variant) and `AssetInfo.#Token` (enum variant) both look like they are accessing a "variant" or "member"
- **Distinction from namespace**: Since CWScript only uses `.` for member access, `#` distinguishes between the parent type/namespace and its variant
- **Consistent notation**: `exec CW20.#mint()` and `AssetInfo.#Token(...)` both follow `Parent.#Variant` pattern

## Struct Constructors as Functions

### The Design

```cws
struct Coin(amount: U128, denom: String)

// Both representations are equivalent:
struct Item(a: Int, b: Int)
struct Item { a: Int, b: Int }

// Construction:
let c = Coin(100, "uusd");          // Positional (like a function call)
let c = Coin(amount=100, denom="uusd");  // Named arguments
let c = Coin { amount: 100, denom: "uusd" };  // Brace syntax
```

### Why?

- **Less verbose**: Clears up visual clutter for the common case
- **Already common practice**: In Rust, developers often create helper functions to construct structs with positional arguments
- **Like Python dataclasses**: No `new` keyword necessary
- Every CWScript struct can be called like a function

## Entrypoint Keywords `exec` / `exec!`

### The Problem

In CosmWasm, dealing with entrypoints is confusing because they exist both as:
- A **message** (data structure)
- A **handler implementation** (logic)

### The Solution

CWScript unifies both into one construct:

```cws
// As a handler definition:
exec #do_something() { ... }

// As a cross-contract call:
exec! CW20(addr).#transfer(recipient, amount);

// As a delegate call:
delegate_exec! #something_else(1);
```

The `exec` keyword in different contexts makes it cognitively easier to understand what's going on. The compiler generates both the message struct and the handler function.

## Error Handling: `try-catch-else` over Monadic Combinators

### The Problem with Rust's Result

- **Syntactic noise**: `?` operator everywhere, difference between missing and present `?` is subtle
- **Boilerplate**: Error type conversion between different `Result<T, E>` types
- **Redux syndrome**: Elegant in theory, painful in practice due to required boilerplate

### CWScript's Approach

1. **Most entrypoints return Result by default** — similar to TypeScript's async functions implicitly returning Promise
2. **Universal error type** — no need to convert between error types
3. **`None` inside Result auto-translates** — `Option<T>` becomes `Result<T, None>`
4. **`try-catch-else`** — familiar pattern from Python/Java, better suited for contracts:

```cws
// try-catch-else
try {
  risky_operation!()
} catch ErrorType {
  handle_error()
} else {
  fallback_value
}

// ?? operator (short-try / null coalescing)
divide!(5, 0) ?? divide!(3, 0) ?? 0

// Translates to:
try divide!(5, 0) else try divide!(3, 0) else 0
```

### Why try-catch is better for contracts:

- Limited number of well-known places where errors occur
- More explicit — acts as syntactic "salt" for security
- Compatible with manual monadic approach when needed
- Widely understood across programming languages

## Universal Result and Option

### The Problem

In Rust:
```rust
fn do_something() -> Result<String, SomeErrorType> {
    (Err(AnotherErrorType))?  // FAILS - error types incompatible
}
```

Converting between different error types is a headache that pollutes code.

### CWScript's Solution

- **Single Result type**: One universal error type under the hood
- **Single Option type**: Avoids `Some(Some(...))` — `None` is idempotent
- **Option-Result unification**: Returning `None` in a Result context auto-translates to an error

```cws
fn example() -> Int {
  let a = ok(5)
  a!          // unwrap and propagate error
  a?          // check if not error/none
  a?.b        // null coalescing chain
}
```

## Fallible Functions `might_error!()`

The `!` suffix marks functions that can fail:

```cws
fn might_fail!() { ... }        // Declaration
let result = might_fail!();      // Call site - must use !
```

The `fail!` keyword halts execution and bubbles up an error. The `!` at the call site is syntactic salt — it forces the developer to acknowledge the function can fail.

## String Interpolation

Double-quoted strings automatically interpolate expressions within `{...}`:

```cws
fail! "Market with id: {market_id} not found"
fail! "Deposit: {message_deposit} below min_deposit: {min_deposit}"
```

This is a deliberate ergonomic choice — contract authors rarely need literal `{` `}` in strings. Single-quoted strings are raw (no interpolation).

## Annotations / Decorators `@`

Similar look and feel to Python decorators, but with a key difference: **annotations don't do anything at the CWScript level** — all functionality is implemented by custom compiler middleware.

```cws
@gas_limit(5000000)
@reply.on_success(handle_reply)
exec! SomeContract.#do_thing();
```

This opens the door for community extensions to enable various programming styles (e.g., resource-oriented programming) without changes to the core language.

## Structural Fidelity

CWScript provides a **constrained framework** for smart contract development rather than the open-ended freedom of Rust. This is intentional:

- **Canonical view**: All aspects of a contract (state, handlers, types, errors, events) are co-located in one definition
- **No code organization paralysis**: Rust allows infinite arrangements; CWScript provides clear structure
- **Composability**: `extends` and `implements` provide contract inheritance patterns
- **Unified context**: No need to figure out how to organize code across modules

### Inside a Contract Definition

A contract definition contains:
- `state { ... }` — persistent storage
- `#instantiate(...)` — creation handler
- `exec #name(...)` — execute handlers
- `query #name(...)` — query handlers
- `reply.success name()` / `reply.error name()` — reply handlers
- `migrate()` — migration handler
- `fn name(...)` — helper functions
- `error Name(...)` — error definitions
- `event Name(...)` — event definitions
- Struct, enum, tuple, unit, type alias definitions

## Translation to Rust

### Key Questions

- How does CWScript interface with Rust code?
- What runtime is necessary for translation?
- What are the abstraction differences?
- How to handle lifetimes, ownership, references, borrowing?
- What programming patterns are preserved?

### Translation Strategy

CWScript compiles to standard CosmWasm Rust. The generated code structure:

1. **Message structs** generated from entrypoint parameters (InstantiateMsg, ExecuteMsg, QueryMsg)
2. **Entry point functions** with standard CosmWasm signatures, dispatching to implementation functions
3. **Implementation functions** receiving context structs (InstantiateCtx, ExecuteCtx, QueryCtx)
4. **State storage** using cw-storage-plus `Item` and `Map`
5. **Error types** using thiserror
6. **Type definitions** for structs, enums, tuples, etc.

### Statement Translation Example

```cws
// CWScript:
let total_supply = create_accounts!(initial_balances)
```

```rust
// Generated Rust:
let total_supply = create_accounts(ctx, initial_balances)?;
```

The compiler translates each AST node and composes them, handling:
- `!` calls → `?` operator in Rust
- `$state.x` → storage load/save calls
- `$info.sender` → `info.sender` field access
- `fail!` → `return Err(ContractError::...)`
- `emit` → Response attribute/event additions

## Ergonomics for Smart Contract Authors

Understanding the target audience informed several tradeoffs:

- **Auto-interpolated strings**: `"hello {name}"` instead of requiring format macros
- **Auto-derived traits**: All data types automatically implement standard traits (Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)
- **Infallible map loading**: Loading from maps must never fail (except external errors like out-of-gas)
- **Universal Error/None**: All errors must be handled — no silent failures
- **No memory management**: Lifetimes and ownership are automatically handled by the compiler

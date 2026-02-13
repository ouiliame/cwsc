# CWScript to Rust Type Mapping

This document defines how CWScript types map to Rust/CosmWasm types in the generated code.

## Primitive Types

| CWScript | Rust / CosmWasm | Notes |
|----------|-----------------|-------|
| `U8` | `u8` | |
| `U16` | `u16` | |
| `U32` | `u32` | |
| `U64` | `u64` | |
| `U128` | `cosmwasm_std::Uint128` | CosmWasm big integer |
| `U256` | `cosmwasm_std::Uint256` | CosmWasm 256-bit integer |
| `Int` | `i64` or `i128` | Signed integer (context-dependent) |
| `String` | `String` | |
| `Bool` | `bool` | |
| `Addr` | `cosmwasm_std::Addr` | Validated address |
| `Address` | `cosmwasm_std::Addr` | Alias for `Addr` |
| `Dec` | `cosmwasm_std::Decimal` | Decimal number |
| `Binary` | `cosmwasm_std::Binary` | Raw binary data |
| `Coin` | `cosmwasm_std::Coin` | Amount + denom |
| `None` | `None` (in Option context) | Absence of value |

## Composite Types

| CWScript | Rust | Example |
|----------|------|---------|
| `T?` | `Option<T>` | `U128?` → `Option<Uint128>` |
| `[T; N]` | `[T; N]` | `[AssetInfo; 2]` → `[AssetInfo; 2]` |
| `List[T]` | `Vec<T>` | `List[Asset]` → `Vec<Asset>` |
| `#{K => V}` | `std::collections::HashMap<K, V>` | `#{String => U128}` → `HashMap<String, Uint128>` |
| `(T1, T2)` | `(T1, T2)` | `(String, U128)` → `(String, Uint128)` |

## State Storage Types

State fields map to `cw-storage-plus` storage types:

| CWScript State | Rust Storage | Example |
|----------------|-------------|---------|
| `name: T` (item) | `Item<T>` | `count: U32` → `pub const COUNT: Item<u32> = Item::new("count");` |
| `name[K]: V` (map) | `Map<K, V>` | `balances[Addr]: U128` → `pub const BALANCES: Map<Addr, Uint128> = Map::new("balances");` |

### State Access Translation

| CWScript | Rust |
|----------|------|
| `$state.count` (read) | `COUNT.load(deps.storage)?` |
| `$state.count = x` (write) | `COUNT.save(deps.storage, &x)?` |
| `$state.count += 1` | `COUNT.update(deps.storage, \|c\| Ok(c + 1))?` |
| `$state.balances[addr]` (map read) | `BALANCES.load(deps.storage, &addr)?` |
| `$state.balances[addr] = x` (map write) | `BALANCES.save(deps.storage, &addr, &x)?` |

## Context Variable Mapping

| CWScript | Rust | Type |
|----------|------|------|
| `$info` | `info` | `cosmwasm_std::MessageInfo` |
| `$info.sender` | `info.sender` | `Addr` |
| `$info.funds` | `info.funds` | `Vec<Coin>` |
| `$env` | `env` | `cosmwasm_std::Env` |
| `$env.contract.address` | `env.contract.address` | `Addr` |
| `$env.block.time` | `env.block.time` | `Timestamp` |
| `$env.block.height` | `env.block.height` | `u64` |
| `$data` | `msg.data` (in Reply) | `Option<Binary>` |
| `$events` | `msg.events` (in Reply) | `Vec<Event>` |
| `$error` | `msg` (in Reply error) | `String` |

## Message Type Generation

### InstantiateMsg

```cws
#instantiate(count: U32?, owner: Addr?) { ... }
```

Generates:
```rust
#[cw_serde]
pub struct InstantiateMsg {
    pub count: Option<u32>,
    pub owner: Option<Addr>,
}
```

### ExecuteMsg

```cws
exec #increment() { ... }
exec #reset(count: U32?) { ... }
```

Generates:
```rust
#[cw_serde]
pub enum ExecuteMsg {
    Increment {},
    Reset { count: Option<u32> },
}
```

Handler name conversion: `#increment` → `Increment` (snake_case → PascalCase, strip `#`).

### QueryMsg

```cws
query #count() -> U32 { ... }
query #owner() -> Addr { ... }
```

Generates:
```rust
#[cw_serde]
pub enum QueryMsg {
    Count {},
    Owner {},
}
```

## Custom Type Generation

### Structs

```cws
struct Point { x: Int, y: Int }
```

Generates:
```rust
#[cw_serde]
pub struct Point {
    pub x: i64,
    pub y: i64,
}
```

All CWScript structs automatically derive: `Serialize`, `Deserialize`, `Clone`, `Debug`, `PartialEq`, `JsonSchema` (via `#[cw_serde]`).

### Enums

```cws
enum AssetInfo {
  #Token(contract_addr: String),
  #NativeToken(denom: String)
}
```

Generates:
```rust
#[cw_serde]
pub enum AssetInfo {
    Token { contract_addr: String },
    NativeToken { denom: String },
}
```

Variant name conversion: `#Token` → `Token` (strip `#`).

### Tuple Structs

```cws
tuple Pair([Int, String]);
```

Generates:
```rust
#[cw_serde]
pub struct Pair(pub i64, pub String);
```

### Unit Structs

```cws
unit Empty;
```

Generates:
```rust
pub struct Empty;
```

### Type Aliases

```cws
type Amount = U128;
```

Generates:
```rust
pub type Amount = Uint128;
```

## Error Type Generation

```cws
error Unauthorized()
error InsufficientFunds(required: U128, available: U128)
```

Generates:
```rust
#[derive(Error, Debug)]
pub enum ContractError {
    #[error("StdError")]
    StdError(#[from] StdError),

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("InsufficientFunds")]
    InsufficientFunds {
        required: Uint128,
        available: Uint128,
    },
}
```

## Event Type Generation

```cws
event Transfer(from: Addr, to: Addr, amount: U128)
```

Generates:
```rust
pub enum ContractEvent {
    Transfer { from: Addr, to: Addr, amount: Uint128 },
}
```

## Cross-Contract Call Types

| CWScript | Rust |
|----------|------|
| `exec! Bank.#send(...)` | `BankMsg::Send { ... }` as `CosmosMsg` |
| `exec! Wasm.#instantiate(...)` | `WasmMsg::Instantiate { ... }` as `CosmosMsg` |
| `exec! Wasm.#execute(...)` | `WasmMsg::Execute { ... }` as `CosmosMsg` |
| `exec! Cw20(addr).#transfer(...)` | `WasmMsg::Execute` with CW20 transfer msg |
| `query! Bank.#balance(...)` | `BankQuery::Balance { ... }` via `QuerierWrapper` |
| `query! CW20(addr).#token_info()` | `WasmQuery::Smart` with CW20 query msg |

## CosmWasm Special Types

| CWScript Usage | Rust Type |
|---------------|-----------|
| `Response` (implicit return) | `cosmwasm_std::Response` |
| `SubMsg` | `cosmwasm_std::SubMsg` |
| `Reply` | `cosmwasm_std::Reply` |
| `Event` | `cosmwasm_std::Event` |
| `Attribute` | `cosmwasm_std::Attribute` |
| `DepsMut` / `Deps` | `cosmwasm_std::DepsMut` / `Deps` |
| `Env` | `cosmwasm_std::Env` |
| `MessageInfo` | `cosmwasm_std::MessageInfo` |

## Decimal Utilities

| CWScript | Rust |
|----------|------|
| `Dec.one()` | `Decimal::one()` |
| `Dec.zero()` | `Decimal::zero()` |
| `Dec.permille(n)` | `Decimal::permille(n)` |
| `Dec.ratio(a, b)` | `Decimal::from_ratio(a, b)` |

## Address Utilities

| CWScript | Rust |
|----------|------|
| `Addr.validate!(s)` | `deps.api.addr_validate(&s)?` |
| `Addr.unchecked(s)` | `Addr::unchecked(s)` |
| `Addr.canonicalize!(s)` | `deps.api.addr_canonicalize(&s)?` |
| `Addr.humanize!(s)` | `deps.api.addr_humanize(&s)?` |
| `Addr.empty()` | `Addr::unchecked("")` |

## Current Implementation Status

The `TYPE()` function in `src/e2e-helpers/contract-to-cg.ts` currently returns `String` (as a placeholder) for ALL types. To implement real type mapping, replace `TYPE()` with a function that:

1. Takes an AST type node
2. Reads the parse tree text to determine the CWScript type
3. Maps it using the tables above
4. Handles composite types recursively (e.g., `List[Asset]` → `Vec<Asset>`)
5. Handles `?` suffix for Option wrapping
6. Handles generic type parameters (`%T` → generic `T`)

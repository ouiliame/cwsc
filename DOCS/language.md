# CWScript Language Specification

CWScript is a domain-specific language for writing CosmWasm smart contracts. It compiles to Rust and targets the CosmWasm framework.

## Source Files

CWScript source files have the `.cws` extension. A lone `.cws` file is implicitly its own project. For multi-file projects, a `cwsproject.json` must exist (analogous to `Cargo.toml` or `package.json`).

```json
{
  "name": "my-project",
  "version": "0.0.1",
  "sourceDir": "src",
  "buildDir": "build"
}
```

## Imports

```cws
import { Cw20, MinterData } from "./cw20.cws";
import { Asset as MyAsset } from "./lib.cws";
import { Exchange } from "injective/modules";
import { SubaccountId, MarketId } from "injective/types";
import { FPDecimal } from "injective/math";
import { CW2 } from "cosmwasm/stds";
```

Import paths can reference local `.cws` files or external modules. Aliasing with `as` is supported.

## Constants

Top-level constants are declared with `const`:

```cws
const CONTRACT_NAME = "crates.io:atomic-order-example"
const CONTRACT_VERSION = "0.0.1"
const COMMISSION_RATE = 3  // 3 permille
```

## Contracts

A contract combines state and logic, similar to a class in OOP. It is the primary organizational unit in CWScript. Importantly, there is a distinction between a **contract definition** (its code) and a **contract instance** (a deployed instance on-chain with its own address and state).

```cws
contract Counter {
  state { ... }
  #instantiate(...) { ... }
  exec #increment() { ... }
  query #count() -> U32 { ... }
}
```

Contracts support single inheritance and multiple interface implementation:

```cws
contract Child extends Parent implements Interface1, Interface2 {
  // ...
}

contract AtomicOrderExample extends CW2 {
  // Inherits CW2 functionality (set_contract_version, etc.)
}
```

The `export` modifier makes a contract visible to importers:

```cws
export contract TerraswapPair { ... }
```

## Interfaces

Interfaces declare the shape of a contract without providing implementation. They define entrypoint signatures, types, and can include namespaced type definitions.

```cws
interface Cw20 {
  #instantiate(
    name: String,
    symbol: String,
    decimals: U8,
    initial_balances: List[Cw20.Coin],
    mint: struct MinterResponse {
      minter: String,
      cap?: U128
    }
  )

  exec #transfer(recipient: String, amount: Int)
  exec #burn(amount: Int)
  exec #mint(recipient: String, amount: Int)
  exec #send(contract: String, amount: Int, msg: Binary)

  query #balance(address: String) -> struct { balance: Int }
  query #token_info() -> struct {
    name: String,
    symbol: String,
    decimals: U8,
    total_supply: Int,
  }
  query #minter() -> Cw20.MinterResponse?

  // Namespaced struct
  struct Coin {
    address: String,
    amount: U128
  }
}
```

A contract implementing an interface must provide all declared entrypoints with matching parameter names and types:

```cws
contract TerraswapToken implements CW20 {
  // Must implement all CW20 entrypoints
}
```

Interfaces support inheritance:

```cws
interface IChild extends IParent1, IParent2 {}
```

## State Blocks

State declares the contract's persistent storage. There are two storage types:

```cws
state {
  count: U32;              // Item storage (single value)
  owner: Addr;             // Item storage
  balances[Addr]: U128;    // Map storage (key: Addr, value: U128)
}
```

Inline struct definitions are allowed within state blocks:

```cws
state {
  config: struct ContractConfigState {
    market_id: MarketId,
    owner: Address,
    contract_subaccount_id: SubaccountId,
    base_denom: String,
    quote_denom: String
  }

  cache: struct SwapCacheState {
    sender_address: String,
    deposited_amount: Coin
  }

  pair_info: struct PairInfo {
    asset_infos: [AssetInfo; 2],
    contract_addr: String,
    liquidity_token: String,
    asset_decimals: [U8; 2],
  }
}
```

State is accessed via the `$state` context variable:

```cws
$state.count = 10;                    // Write
let x = $state.count;                 // Read
let { config } = $state;              // Destructure
$state.balances[$info.sender] += 100; // Map access
```

## Entry Points (Message Handlers)

### Instantiate

Called when a new instance of the contract is created via `wasm/MsgInstantiateContract`. Has access to `$info`, `$env`, and `$state`.

```cws
#instantiate(count: U32?, owner: Addr?) {
  $state.count = count ?? 0;
  $state.owner = owner ?? $info.sender;
}
```

Parameters with doc comments:

```cws
#instantiate(
  /// Asset infos
  asset_info: [AssetInfo; 2],
  /// Token contract code ID for initialization
  token_code_id: U64,
  asset_decimals: [U8; 2]
) {
  // ...
}
```

### Execute Handlers

Called against an existing contract instance via `wasm/MsgExecuteContract`. Has access to `$info` (sender, funds), `$env`, and `$state`. May emit events and trigger submessages.

```cws
exec #increment() {
  $state.count += 1;
}

exec #reset(count: U32?) {
  if $info.sender != $state.owner {
    fail! Unauthorized();
  }
  $state.count = count ?? 0;
}

exec #swap_spot(quantity: FPDecimal, price: FPDecimal) {
  let { config } = $state;
  let contract = $env.contract.address;
  let subaccount_id = config.contract_subaccount_id;
  let min_deposit = price * quantity;

  if $info.funds.is_empty() {
    fail! "No funds deposited!";
  }

  let message_deposit = FPDecimal!($info.funds[0].amount);

  if message_deposit < min_deposit {
    fail! "Deposit: {message_deposit} below min_deposit: {min_deposit}";
  }

  // ... construct order and execute
}
```

### Query Handlers

Called against an existing contract instance. **Read-only** — no transaction, no `$info` (no sender or funds). Has access to `$env` and `$state`.

```cws
query #count() -> U32 {
  return $state.count;
}

query #pair() {
  return $state.pair_info;
}

query #pool() {
  let { pair_info } = $state;
  let { contract_addr } = pair_info;
  let assets = $.query_pools!(pair_info, contract_addr);
  let { total_share } = query! CW20(contract_addr).#token_info();
  return PoolResponse { assets, total_share };
}
```

### Tuple Parameter Syntax

Execute/query handlers can use tuple-style parameters (destructured from the message):

```cws
exec #receive([msg: Cw20ReceiveMsg]) {
  let contract_addr = $info.sender;
  let inner = deserialize![Cw20HookMsg](msg.msg);
  // ...
}
```

### Migrate Handler

Called during contract migration (`MsgMigrateContract`). Similar to instantiate but for upgrading a contract:

```cws
migrate() {
  // migration logic
}
```

### Reply Handlers

Reply handlers implement the CosmWasm reply mechanism — callbacks triggered after submessage execution. They enable the contract to respond to the success or failure of a submessage.

**Success replies** have access to `$env`, `$state`, `$data` (Binary response), and `$events`:

```cws
reply.success handle_atomic_order() {
  let dec_scale_factor = FPDecimal(1000000000000000000);
  let order_response = Exchange.#create_spot_market_order.parse_response!($data);
  let trade_data = order_response.results ?? fail! "No trade data in order response";
  let quantity = FPDecimal!(trade_data.quantity);
  let price = FPDecimal!(trade_data.price);
  let fee = FPDecimal!(trade_data.fee);

  let { config, cache } = $state;
  let contract_address = $env.contract.address;
  // ...
  exec! Bank.#send(cache.sender_address, [purchased_coins, leftover_coins]);
}
```

**Error replies** have access to `$env`, `$state`, and `$error`:

```cws
reply.error handle_failed_order() {
  // $error contains the error string
  // handle failure...
}
```

Reply handlers are connected to submessages via annotations or the `.reply_on_success()` method:

```cws
// Method chaining style
exec! Wasm.#instantiate(...).reply_on_success(gas_limit=None, id=REPLY_ID);

// Annotation style
@reply.success(handle_atomic_order)
exec! Exchange.#create_spot_market_order(contract, order);
```

## Special Context Variables (`$`)

CWScript uses `$`-prefixed identifiers for implicit context. The `$` symbol represents "special context" — it acts like `this` in JavaScript but is an implicit reference to the contract's execution context. This avoids the repetitive `self` parameter noise found in Rust/Python.

### Availability by Handler Type

| Variable | `#instantiate` | `exec` | `query` | `reply.success` | `reply.error` |
|----------|:-:|:-:|:-:|:-:|:-:|
| `$state` | yes | yes | yes | yes | yes |
| `$info`  | yes | yes | - | - | - |
| `$env`   | yes | yes | yes | yes | yes |
| `$data`  | - | - | - | yes | - |
| `$events`| - | - | - | yes | - |
| `$error` | - | - | - | - | yes |
| `$res`   | yes | yes | yes | yes | yes |

### What Each Variable Provides

- **`$state`** — Access to the contract's persistent storage. Read or write state fields.
- **`$info`** — The `MessageInfo` from CosmWasm: `.sender` (who sent the message) and `.funds` (coins attached). Not available in queries (no transaction) or replies (different context).
- **`$env`** — The `Env` from CosmWasm: `.contract.address`, `.block.time`, `.block.height`, etc.
- **`$data`** — In `reply.success` handlers, contains the Binary response data from the submessage.
- **`$events`** — In `reply.success` handlers, contains the events emitted by the submessage.
- **`$error`** — In `reply.error` handlers, contains the error string from the failed submessage.
- **`$res`** — Manual response manipulation: `$res.data`, `$res.events`, `$res.attributes`, `$res.msgs`. For a more "traditional" flow when needed.

### Design Rationale

The `$` prefix:
- Does not clash with any exec/query/instantiate parameter names
- Is the most compact symbol that permits usage
- When `$` changes (different handler context), so do the available `$`-prefixed variables
- The contexts around `$` are nearly always the same — no need to repeat lengthy function signatures
- Mentally groups `$` with various keywords like `$env`, `$info`, `$state`

### Passing Context to Functions

Functions within a contract can explicitly request context via the `$` parameter. Functions that reside inside a contract will infer that `$` refers to the surrounding contract.

```cws
// Full context — gets $info, $env, $state (mutable)
fn query_pools!($, pair_info: PairInfo, addr: Address) { ... }

// Read-only state access
fn read_only_fn($state) { ... }

// Mutable state access
fn mutable_fn(mut $state) { ... }

// Calling from within a handler:
$.query_pools!(pair_info, $env.contract.address);
$.assert_deadline!($env.block.time.seconds(), deadline);
```

The `$` or `mut $` parameter passes the context bundle. `$state` gives only state access. `mut $state` gives mutable state access. This is analogous to how `self` works in Rust, but more concise.

## Functions

Regular functions within a contract:

```cws
fn hello() { }                          // Simple function
fn add(a: Int, b: Int) -> Int { ... }   // With return type
fn might_fail!() { ... }                // Fallible (can fail!)
fn generic[%T](x: %T) { ... }          // Generic function
fn fallible_generic![%T](x: %T) { ... } // Both
```

Functions that take context:

```cws
fn compute_swap!(offer_pool: U128, ask_pool: U128, offer_amount: U128) -> [U128; 3] {
  // pure computation — no $ needed
}

fn assert_max_spread!(
  belief_price: Dec?,
  max_spread: Dec?,
  offer_asset: Asset,
  return_asset: U128,
  spread_amount: U128,
  offer_decimal: U8,
  return_decimal: U8
) {
  // validation logic
}
```

## Type System

### Primitive Types

| CWScript | Description |
|----------|-------------|
| `U8`, `U16`, `U32`, `U64` | Unsigned integers |
| `U128`, `U256` | Large unsigned integers |
| `Int` | Signed integer |
| `String` | UTF-8 string |
| `Bool` | Boolean (true/false) |
| `Addr` / `Address` | CosmWasm address |
| `Dec` | Decimal number |
| `Binary` | Raw binary data |
| `Coin` | CosmWasm coin (amount + denom) |
| `None` | Absence of value |

### Composite Types

```cws
T?                  // Option type (Some(T) or None)
[T; N]              // Fixed-size array
List[T]             // Dynamic list (Vec)
#{K => V}           // Map type
(T1, T2)            // Tuple type
```

### Struct Definitions

CWScript supports two struct syntaxes. Both are interchangeable — every struct can be called like a function (positional constructor):

```cws
// Named fields (brace syntax)
struct Point { x: Int, y: Int }

// Positional fields (paren syntax)
struct Coin(amount: U128, denom: String)

// Generic struct
struct Pair[%T, %U] { first: %T, second: %U }
```

All structs are callable as constructors (no `new` keyword needed, like Python dataclasses):

```cws
let p = Point { x: 1, y: 2 };              // Brace syntax
let c = Coin(100, "uusd");                  // Positional constructor
let c = Coin(amount=100, denom="uusd");     // Named arguments

// Shorthand field initialization (like JS)
let config = ContractConfigState {
  market_id,                                // same as market_id: market_id
  base_denom: market.base_denom,
  owner: $info.sender,
};
```

### Tuple Definitions

```cws
tuple Pair([Int, String]);
tuple Triple[%T]([%T, Int, %T]);
```

### Unit Definitions

```cws
unit Empty;
```

### Enum Definitions

Enum variants are prefixed with `#`. This creates a visual parallel with entrypoint handlers (`exec #name`) and cross-contract calls (`Contract.#method`), reinforcing that `#` denotes a "variant" or "member" of a namespace.

```cws
enum AssetInfo {
  #Token(contract_addr: String),
  #NativeToken(denom: String)
}

enum Fruit {
  #Apple { x: String, b: Bool },  // Struct variant
  #Orange(peel: Int),              // Tuple variant
  #Banana                          // Unit variant
}

// Hybrid representations are allowed
enum OrderType {
  #BuyAtomic,
  #SellAtomic,
  #Limit { price: Dec, quantity: Dec }
}
```

Creating enum values uses `EnumType.#Variant` notation:

```cws
let a = AssetInfo.#Token { contract_addr: "..." };
let b = AssetInfo.#Token("...");    // Shorthand positional
let o = OrderType.#BuyAtomic;      // Unit variant
```

### Type Aliases

```cws
type Amount = U128;
type Pair[%T] = struct InlinePair { a: %T, b: %T };
```

### Type Conversion with `!`

Types can be used as fallible conversion functions:

```cws
let x = U128!(some_value);     // Convert to U128 (may fail)
let y = FPDecimal!(trade_data.quantity);
let z = String!(msg.asset_infos[0]);
```

## Error and Event Definitions

```cws
error Unauthorized()
error InsufficientFunds(required: U128, available: U128)
error MaxSpreadAssertion()
error InvalidZeroAmount()

event Transfer(from: Addr, to: Addr, amount: U128)
event Swap(sender: String, offer: Asset, return_amount: U128)
event ProvideLiquidity(
  sender: String,
  receiver: String,
  assets: [Asset; 2],
  share: String,
  refund_assets: [Asset; 2]
)
```

## Expressions

### Literals

```cws
42                    // Integer
1_000_000             // Integer with separators
3.14                  // Decimal
"hello {name}"        // Interpolated string (double quotes auto-format)
'raw string'          // Raw string (single quotes, no interpolation)
true / false          // Boolean
None                  // None literal
```

Double-quoted strings automatically interpolate expressions within `{...}`, like Python f-strings. This is a deliberate ergonomic choice — contract authors rarely need literal `{` `}` in strings.

### Operators

```cws
// Arithmetic
a + b    a - b    a * b    a / b    a % b    a ** b

// Comparison
a == b   a != b   a < b    a > b    a <= b   a >= b

// Logical
a and b    a or b    not a

// Assignment
a = b    a += b    a -= b    a *= b    a /= b

// Special
a ?? b              // Null coalescing / try-else
a?                  // Exists check (is not None/Error)
fn_call!(args)      // Fallible function call (can propagate errors)
```

### Type Checks

```cws
if asset_info is AssetInfo.#Token { ... }
if value is SomeType { ... }
if inner is Cw20HookMsg.#Swap { ... }
```

### Destructuring

```cws
let { belief_price, max_spread, to, deadline } = inner;
let { pair_info } = $state;
let { contract_addr } = pair_info;
let { config, cache } = $state;
let [return_amount, spread_amount, commission_amount] = compute_swap!(...);
```

### Control Flow

```cws
// If-else (expression or statement)
let x = if cond { a } else { b };

// Multi-branch if
let spread_amount = if before_spread_deduction > before_commission_deduction {
  before_commission_deduction - before_commission_deduction
} else {
  U256(0)
};

// For loops
for item in items { ... }
for [x, y] in pairs { ... }
for [i, pool] in pools.enumerate() { ... }
for { name as alias } in structs { ... }
for min_asset in min_assets { ... }

// Closures
items.map(|x| x + 1)
items.filter(|x| x > 0)
items.find(|asset| asset.info == min_asset.info)
items.map!(|x| { return compute!(x); })  // Fallible closure
pair_info.asset_infos.map!(|ai| {
  return Asset(ai, query_pool!(ai, addr));
})
```

### Error Handling

CWScript uses `try-catch-else` instead of Rust's monadic Result combinators, because:
- There is a limited number of well-known places where errors occur in contracts
- It is more explicit, acting as syntactic "salt" for better security
- It is widely understood (Python, Java, etc.)

```cws
// Fail (halt execution with error)
fail! Unauthorized();
fail! "error message";
fail! "Deposit: {message_deposit} below min_deposit: {min_deposit}";

// Try-catch-else
try {
  risky_operation!()
} catch ErrorType {
  handle_error()
} else {
  fallback_value
}

// Try-else (short form)
let market = try {
  query! Exchange.#market(market_id)
} else fail! "Market with id: {market_id} not found"

// Null coalescing / short-try operator (??)
divide!(5, 0) ?? divide!(3, 0) ?? 0
let trade_data = order_response.results ?? fail! "No trade data"

// Translates to:
try divide!(5, 0) else try divide!(3, 0) else 0
```

### Universal Result and Option

CWScript has a single unified error type — no need to convert between different error types:
- All `Result` types use a universal error type under the hood
- `Option<T>` is treated as `Result<T, None>` — returning `None` inside a Result-typed function auto-translates
- Avoids `Some(Some(...))` nesting — `None` is idempotent

## Cross-Contract Calls

### Module Contracts

CWScript provides built-in module contracts for common CosmWasm/chain operations:

- **`Wasm`** — `#instantiate`, `#execute`, `#migrate`
- **`Bank`** — `#send`, `#balance`
- **`Exchange`** — Chain-specific (e.g., Injective): `#market`, `#create_spot_market_order`, `#deposit`, `#withdraw`

### Execute (`exec!`)

```cws
exec! Wasm.#instantiate(admin=None, code_id=id, msg=..., funds=[], label="lp");
exec! Cw20(token_addr).#transfer(recipient=addr, amount=100);
exec! Bank.#send(to_address=addr, amount=[Coin(100, "uusd")]);
exec! Exchange.#deposit(contract, subaccount_id, coins);
```

### Delegate Execute (`delegate_exec!`)

Calls the contract's own handlers as submessages:

```cws
delegate_exec! #something_else(1);
```

### Query (`query!`)

```cws
let result = query! Bank.#balance(addr, denom);
let info = query! CW20(addr).#token_info();
let market = query! Exchange.#market(market_id);
```

### With Reply Handlers

```cws
// Method chaining
exec! Wasm.#instantiate(...).reply_on_success(gas_limit=None, id=REPLY_ID);

// Annotation style
@reply.success(handle_atomic_order)
exec! Exchange.#create_spot_market_order(contract, order);

// Inline reply
send Wasm::Instantiate { ... } reply(env, events, data) on success {
  // handle reply
}
```

### CW2 Version Management

```cws
CW2.set_contract_version!(mut $, CONTRACT_NAME, CONTRACT_VERSION);
```

### Deserialization

```cws
let inner = deserialize![Cw20HookMsg](msg.msg);
```

### Parse Submessage Response

```cws
let order_response = Exchange.#create_spot_market_order.parse_response!($data);
```

### Emit Events

```cws
// Named event (uses a defined event type)
emit Transfer(from=$info.sender, to=recipient, amount=amount);
emit ProvideLiquidity($info.sender, receiver, assets[0], assets[1], share);

// Anonymous event (ad-hoc key-value pairs)
emit event(method="instantiate", owner=$info.sender);
```

### Log Attributes

```cws
log {
  action: "transfer",
  from: $info.sender,
  to: recipient,
  amount
}
```

## Annotations

Annotations tag AST nodes for compiler middleware extensions. They look and feel like Python decorators but are not implemented within CWScript — all functionality is in custom compiler middleware passes.

```cws
@gas_limit(5000000)
@reply.on_success(handle_reply)
exec! SomeContract.#do_thing();

@reply.success(handle_atomic_order)
exec! Exchange.#create_spot_market_order(contract, order);
```

This opens the door for community extensions enabling various programming styles (e.g., resource-oriented programming).

## Impl Blocks

```cws
impl Point {
  fn __add__(self, other: Point) -> Point {
    return Point(self.x + other.x, self.y + other.y);
  }
}
```

## Address Utilities

```cws
Addr.validate!(to.to_addr)          // Validate address string
Addr.unchecked(msg.sender)          // Create unchecked address
Addr.canonicalize!($info.sender)    // Canonicalize address
Addr.humanize!(pair_info.liquidity_token)  // Humanize canonical address
Addr.empty()                        // Empty address placeholder
SubaccountId.default($env.contract.address, 0)  // Default subaccount
```

## Decimal Utilities

```cws
Dec.one()                    // 1.0
Dec.zero()                   // 0.0
Dec.permille(COMMISSION_RATE)  // Rate in permille (parts per thousand)
Dec.ratio(a, b)              // a / b as decimal
Dec.ratio!(a, b)             // Fallible decimal ratio
```

## Identifier Prefixes

CWScript uses prefix characters to visually distinguish identifier categories:

| Prefix | Meaning | Examples |
|--------|---------|---------|
| (none) | Regular identifiers | `count`, `owner`, `Asset` |
| `#` | Enum variants, handler names | `#Token`, `#increment`, `#swap` |
| `$` | Special context variables | `$state`, `$info`, `$env` |
| `%` | Type parameters (generics) | `%T`, `%U`, `%Key` |

## Design Principles

1. **Safety first:** Universal Error and Option types; all errors must be handled
2. **Structural fidelity:** CWScript captures the essence of CosmWasm semantics — contracts, entrypoints, state, messages
3. **Ergonomics:** Double-quoted strings auto-interpolate; no `self` parameter noise; `$` context is compact; structs are callable as constructors
4. **Extensibility:** Annotations + AST middleware pipeline let the community extend the language
5. **Clarity over complexity:** `try-catch-else` instead of monadic Result combinators; `fail!` instead of error propagation chains
6. **Prototyping first:** CWScript is designed as a prototyping and design language that can later transition to Rust for production

## Complete Examples

### Counter Contract (Simple)

```cws
contract Counter {
  state {
    count: U32,
    owner: Addr
  }

  error Unauthorized()
  error CountIsZeroError()

  #instantiate(count: U32?, owner: Addr?) {
    $state.count = count ?? 0;
    $state.owner = owner ?? $info.sender;
  }

  exec #increment() {
    $state.count += 1;
  }

  exec #decrement() {
    if $state.count == 0 {
      fail! CountIsZeroError();
    }
    $state.count -= 1;
  }

  exec #reset(count: U32?) {
    if $info.sender != $state.owner {
      fail! Unauthorized();
    }
    $state.count = count ?? 0;
  }

  query #count() -> U32 {
    return $state.count;
  }

  query #owner() -> Addr {
    return $state.owner;
  }
}
```

### AtomicOrderExample (Injective DEX Integration)

```cws
import { Exchange } from "injective/modules"
import { SubaccountId, MarketId } from "injective/types"
import { FPDecimal } from "injective/math"
import { CW2 } from "cosmwasm/stds"

const CONTRACT_NAME = "crates.io:atomic-order-example"
const CONTRACT_VERSION = "0.0.1"

contract AtomicOrderExample extends CW2 {

  state {
    config: struct ContractConfigState {
      market_id: MarketId,
      owner: Address,
      contract_subaccount_id: SubaccountId,
      base_denom: String,
      quote_denom: String
    }

    cache: struct SwapCacheState {
      sender_address: String,
      deposited_amount: Coin
    }
  }

  #instantiate(market_id: MarketId) {
    let market = try {
      query! Exchange.#market(market_id)
    } else fail! "Market with id: {market_id} not found"

    let config = ContractConfigState {
      market_id,
      base_denom: market.base_denom,
      quote_denom: market.quote_denom,
      owner: $info.sender,
      contract_subaccount_id: SubaccountId.default($env.contract.address, 0),
    }

    CW2.set_contract_version!(mut $, CONTRACT_NAME, CONTRACT_VERSION)
    $state.config = config
    emit event(method="instantiate", owner=$info.sender)
  }

  reply.success handle_atomic_order() {
    let dec_scale_factor = FPDecimal(1000000000000000000)
    let order_response = Exchange.#create_spot_market_order.parse_response!($data)
    let trade_data = order_response.results ?? fail! "No trade data in order response"
    let quantity = FPDecimal!(trade_data.quantity)
    let price = FPDecimal!(trade_data.price)
    let fee = FPDecimal!(trade_data.fee)

    let { config, cache } = $state
    let contract_address = $env.contract.address
    let subaccount_id = config.contract_subaccount_id
    let purchased_coins = coin(quantity, config.base_denom)
    let paid = quantity * price + fee
    let leftover = cache.deposited_amount.amount - paid
    let leftover_coins = Coin(leftover, config.quote_denom)

    exec! Exchange.#withdraw(contract_address, subaccount_id, purchased_coins)
    exec! Exchange.#withdraw(contract_address, subaccount_id, leftover_coins)
    exec! Bank.#send(cache.sender_address, [purchased_coins, leftover_coins])
  }

  exec #swap_spot(quantity: FPDecimal, price: FPDecimal) {
    let { config } = $state
    let contract = $env.contract.address
    let subaccount_id = config.contract_subaccount_id
    let min_deposit = price * quantity

    if $info.funds.is_empty() {
      fail! "No funds deposited!"
    }

    let message_deposit = FPDecimal!($info.funds[0].amount)

    if message_deposit < min_deposit {
      fail! "Deposit: {message_deposit} below min_deposit: {min_deposit}"
    }

    let order = SpotOrder(
      price, quantity, OrderType.#BuyAtomic, config.market_id, subaccount_id, contract
    )

    let coins = $info.funds[0]
    $state.cache = SwapCacheState($info.sender, coins)

    exec! Exchange.#deposit(contract, subaccount_id, coins)

    @reply.success(handle_atomic_order)
    exec! Exchange.#create_spot_market_order(contract, order)
  }
}
```

pub mod terraswap_pair {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const PAIR_INFO: Item<PairInfo> = Item::new("pair_info");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("MaxSpreadAssertion")] MaxSpreadAssertion {
      
    },
#[error("ExpiredDeadline")] ExpiredDeadline {
      
    },
#[error("MinAmountAssertion")] MinAmountAssertion {
      min_asset: String,
asset: String
    },
#[error("MinAmountAssetion")] MinAmountAssetion {
      min_asset: String,
asset: String
    },
#[error("Unauthorized")] Unauthorized {
      
    },
#[error("InvalidZeroAmount")] InvalidZeroAmount {
      
    },
#[error("MaxSlippageAssertion")] MaxSlippageAssertion {
      
    },
#[error("AssetMismatch")] AssetMismatch {
      
    },
#[error("MinimumLiquidityAmountError")] MinimumLiquidityAmountError {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      pub asset_info: [AssetInfo; 2],
pub token_code_id: u64,
pub asset_decimals: [u8; 2]
    }
#[cw_serde] pub enum ExecuteMsg {
      Receive {
      msg: Cw20ReceiveMsg
    },
ProvideLiquidity {
      assets: [Asset; 2],
receiver: Option<String>,
deadline: Option<u64>,
slippage_tolerance: Option<Decimal>
    },
Swap {
      offer_asset: Asset,
belief_price: Option<Decimal>,
max_spread: Option<Decimal>,
to: Option<Addr>,
deadline: Option<u64>
    },
WithdrawLiquidity {
      sender: Addr,
amount: Uint128,
min_assets: Option<[Asset; 2]>,
deadline: Option<u64>
    }
    }
#[cw_serde] pub enum QueryMsg {
      Pair {
      
    },
Pool {
      
    },
Simulation {
      offer_asset: Asset
    },
ReverseSimulation {
      ask_asset: Asset
    }
    }
    }
pub mod contract {
      use super::cws::*;
use super::error::*;
use super::msg::*;
use super::implementation::*;
use cosmwasm_std::*;
#[cfg_attr(not(feature = "library"), entry_point)] pub fn instantiate(deps: DepsMut, env: Env, info: MessageInfo, msg: InstantiateMsg) -> Result<Response, ContractError> {
      let ctx: InstantiateCtx = InstantiateCtx {
      deps: deps,
env: env,
info: info
    };
instantiate_impl(ctx, msg.asset_info, msg.token_code_id, msg.asset_decimals)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Receive { msg } => exec_receive_impl(ctx, msg),
ExecuteMsg::ProvideLiquidity { assets, receiver, deadline, slippage_tolerance } => exec_provide_liquidity_impl(ctx, assets, receiver, deadline, slippage_tolerance),
ExecuteMsg::Swap { offer_asset, belief_price, max_spread, to, deadline } => exec_swap_impl(ctx, offer_asset, belief_price, max_spread, to, deadline),
ExecuteMsg::WithdrawLiquidity { sender, amount, min_assets, deadline } => exec_withdraw_liquidity_impl(ctx, sender, amount, min_assets, deadline)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::Pair {  } => query_pair_impl(ctx),
QueryMsg::Pool {  } => query_pool_impl(ctx),
QueryMsg::Simulation { offer_asset } => query_simulation_impl(ctx, offer_asset),
QueryMsg::ReverseSimulation { ask_asset } => query_reverse_simulation_impl(ctx, ask_asset)
    }
    }
    }
pub mod implementation {
      use super::cws::*;
use super::error::*;
use super::msg::*;
use super::state::*;
use super::types::*;
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
pub const INSTANTIATE_REPLY_ID: u64 = 1;
pub const COMMISSION_RATE: u64 = 3;
pub const U256: u64 = 0;
pub const U64: u64 = 0;
pub const U128: u64 = 0;
pub const MINIMUM_LIQUIDITY_AMOUNT: Uint128 = Uint128::new(1000);
pub const CW20: u64 = 0;
pub fn instantiate_impl(ctx: InstantiateCtx, asset_info: [AssetInfo; 2], token_code_id: u64, asset_decimals: [u8; 2]) -> Result<Response, ContractError> {
      PAIR_INFO.save(ctx.deps.storage, &(PairInfo { contract_addr: ctx.env.contract.address, liquidity_token: Addr::unchecked(""), asset_infos: [String::from(asset_info[0]), String::from(asset_info[1])], asset_decimals: asset_decimals }))?;
todo!("exec");
Ok(Response::new())
    }
pub fn exec_receive_impl(ctx: ExecuteCtx, msg: Cw20ReceiveMsg) -> Result<Response, ContractError> {
      let contract_addr = ctx.info.sender.clone();
let inner = cosmwasm_std::from_json::<Cw20HookMsg>(&msg.msg).unwrap();
if matches!(inner, Cw20HookMsg::Swap { .. }) {
let belief_price = inner.belief_price.clone();
let max_spread = inner.max_spread.clone();
let to = inner.to.clone();
let deadline = inner.deadline.clone();
let authorized = false;
let config = PAIR_INFO.load(ctx.deps.storage)?;
let pools = query_pools(config, ctx.env.contract.address);
for pool in pools {
if matches!(pool.info, AssetInfo::Token { .. }) && pool.info.contract_addr == ctx.info.sender.clone() {
authorized = true;
}
}
if !authorized {
return Err(ContractError::Unauthorized {});
}
let to_addr = if to.is_some() { let to = to.unwrap();
Addr::unchecked(to.to_addr) } else { None };
let asset = Asset { info: AssetInfo::Token { contract_addr }, amount: msg.amount };
todo!("call swap");
} else {
if matches!(inner, Cw20HookMsg::WithdrawLiquidity { .. }) { let min_assets = inner.min_assets.clone();
let deadline = inner.deadline.clone();
let config = PAIR_INFO.load(ctx.deps.storage)?;
if Addr::unchecked(ctx.info.sender.clone()) != config.liquidity_token {
return Err(ContractError::Unauthorized {});
}
let sender_addr = Addr::unchecked(msg.sender);
todo!("call withdraw_liquidity"); }
}
Ok(Response::new())
    }
pub fn exec_provide_liquidity_impl(ctx: ExecuteCtx, assets: [Asset; 2], receiver: Option<String>, deadline: Option<u64>, slippage_tolerance: Option<Decimal>) -> Result<Response, ContractError> {
      assert_deadline(ctx.env.block.time.seconds(), deadline);
for asset in assets {
assert_sent_native_token_balance(asset, ctx.info.funds.clone());
}
let pair_info = PAIR_INFO.load(ctx.deps.storage)?;
let pools = query_pools(pair_info, ctx.env.contract.address);
let deposits = [assets.iter().find(|a| { a.info == pools[0].info }).map(|a| { a.amount }).ok_or_else(|| ContractError::StdError(StdError::generic_err("wrong asset info is given")))?, assets.iter().find(|a| { a.info == pools[1].info }).map(|a| { a.amount }).ok_or_else(|| ContractError::StdError(StdError::generic_err("wrong asset info is given")))?];
for (i, pool) in pools.iter().enumerate() {
if pool.is_native_token() {
pool.amount -= deposits[i];
}
}
let liquidity_token = pair_info.liquidity_token.clone();
let total_share = todo!("total_share");
let share = if total_share == 0 { let deposit0 = Uint128::try_from(deposits[0]).unwrap();
let deposit1 = Uint128::try_from(deposits[1]).unwrap();
let share = Uint256::from(Decimal::from_ratio(deposits[0] * deposit1, Uint256::from(1)).sqrt() * Uint256::from(1));
todo!("exec");
share.sub(MINIMUM_LIQUIDITY_AMOUNT).ok_or_else(|| ContractError::MinimumLiquidityAmountError {})?; } else { std::cmp::min(deposits[0].multiply_ratio(total_share, pools[0].amount), deposits[1].multiply_ratio(total_share, pools[1].amount)) };
if share == 0 {
return Err(ContractError::InvalidZeroAmount {});
}
let refund_assets = vec![];
for (i, pool) in pools.iter().enumerate() {
let desired_amount = if total_share == 0 { deposits[i] } else { let desired_amount = pool.amount.multiply_ratio(share, total_share);
if desired_amount.multiply_ratio(total_share, share) != pool.amount {
desired_amount += 1;
}
desired_amount };
let remain_amount = deposits[i] - desired_amount;
if slippage_tolerance.is_some() && remain_amount > deposits[i] * slippage_tolerance {
let slippage_tolerance = slippage_tolerance.unwrap();
return Err(ContractError::MaxSlippageAssertion {});
}
refund_assets.push(Asset { info: pool.info, amount: remain_amount });
if matches!(pool.info, AssetInfo::NativeToken { .. }) {
if !remain_amount.is_zero() {
todo!("exec");
}
} else {
if matches!(pool.info, AssetInfo::Token { .. }) { todo!("exec"); }
}
}
let receiver = receiver.unwrap_or(ctx.info.sender.clone());
todo!("exec");
/* emit! ProvideLiquidity(ctx.info.sender.clone(), receiver, assets[0], assets[1], share) */
Ok(Response::new())
    }
pub fn exec_swap_impl(ctx: ExecuteCtx, offer_asset: Asset, belief_price: Option<Decimal>, max_spread: Option<Decimal>, to: Option<Addr>, deadline: Option<u64>) -> Result<Response, ContractError> {
      assert_sent_native_token_balance(offer_asset, ctx.info.funds.clone());
let pair_info = PAIR_INFO.load(ctx.deps.storage)?;
let pools = query_pools(pair_info, ctx.env.contract.address);
let [offer_pool, ask_pool] = if offer_asset.info == pools[0].info { [Asset { info: pools[0].info, amount: pools[0].amount - offer_asset.amount }, pools[1]] } else { if offer_asset.info == pools[1].info { [Asset { info: pools[1].info, amount: pools[1].amount - offer_asset.amount }, pools[0]] } else { return Err(ContractError::AssetMismatch {}); } };
let [offer_decimal, ask_decimal] = if offer_asset.info == pools[0].info { [pair_info.asset_decimals[0], pair_info.asset_decimals[1]] } else { [pair_info.asset_decimals[1], pair_info.asset_decimals[0]] };
let offer_amount = offer_asset.amount;
let [return_amount, spread_amount, commission_amount] = compute_swap(offer_pool.amount, ask_pool.amount, offer_amount);
let return_asset = Asset { info: ask_pool.info, amount: return_amount };
assert_max_spread(belief_price, max_spread, offer_asset, return_asset, spread_amount, offer_decimal, ask_decimal);
let receiver = to.unwrap_or(ctx.info.sender.clone());
if return_amount != 0 {
if matches!(return_asset.info, AssetInfo::Token { .. }) {
todo!("exec");
} else {
todo!("exec");
}
}
/* emit! Swap(sender, receiver, offer_asset.info, ask_pool.info, offer_amount, spread_amount, commission_amount) */
Ok(Response::new())
    }
pub fn exec_withdraw_liquidity_impl(ctx: ExecuteCtx, sender: Addr, amount: Uint128, min_assets: Option<[Asset; 2]>, deadline: Option<u64>) -> Result<Response, ContractError> {
      assert_deadline(ctx.env.block.time.seconds(), deadline)?;
let pair_info = PAIR_INFO.load(ctx.deps.storage)?;
let liquidity_addr = Addr::unchecked(pair_info.liquidity_token);
let pools = query_pools(pair_info, ctx.env.contract.address);
let total_share = todo!("total_share");
let share_ratio = Decimal::from_ratio(amount, total_share);
let refund_assets = pools.iter().map(|a| { Asset { info: a.info, amount: a.amount * share_ratio } }).collect::<Vec<_>>();
assert_minimum_assets(refund_assets, min_assets);
todo!("exec");
/* emit! WithdrawLiquidity { sender: sender, withdrawn_share: amount, refund_assets } */
Ok(Response::new())
    }
pub fn query_pair_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(PAIR_INFO.load(ctx.deps.storage)?))?);
    }
pub fn query_pool_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      let pair_info = PAIR_INFO.load(ctx.deps.storage)?;
let contract_addr = pair_info.contract_addr.clone();
let assets = query_pools(pair_info, contract_addr);
let total_share = todo!("total_share");
return Ok(to_json_binary(&(PoolResponse { assets, total_share }))?);
    }
pub fn query_simulation_impl(ctx: QueryCtx, offer_asset: Asset) -> Result<Binary, ContractError> {
      let pair_info = PAIR_INFO.load(ctx.deps.storage)?;
let contract_addr = pair_info.contract_addr.clone();
let pools = query_pools(pair_info, contract_addr);
let [offer_pool, ask_pool] = if offer_asset.info == pools[0].info { [pools[0], pools[1]] } else { if offer_asset.info == pools[1].info { [pools[1], pools[0]] } else { return Err(ContractError::AssetMismatch {}); } };
let [return_amount, spread_amount, commission_amount] = compute_swap(offer_pool.amount, ask_pool.amount, offer_asset.amount);
return Ok(to_json_binary(&(SimulationResponse { return_amount, spread_amount, commission_amount }))?);
    }
pub fn query_reverse_simulation_impl(ctx: QueryCtx, ask_asset: Asset) -> Result<Binary, ContractError> {
      let pair_info = PAIR_INFO.load(ctx.deps.storage)?;
let contract_addr = pair_info.contract_addr.clone();
let pools = query_pools(pair_info, contract_addr);
let [ask_pool, offer_pool] = if ask_asset.info == pools[0].info { [pools[0], pools[1]] } else { if ask_asset.info == pools[1].info { [pools[1], pools[0]] } else { return Err(ContractError::AssetMismatch {}); } };
let [offer_amount, spread_amount, commission_amount] = compute_offer_amount(offer_pool.amount, ask_pool.amount, ask_asset.amount);
return Ok(to_json_binary(&(ReverseSimulationResponse { offer_amount, spread_amount, commission_amount }))?);
    }
pub fn query_pools(pair_info: PairInfo, addr: Addr) -> Vec<Asset> {
      pair_info.asset_infos.iter().map(|ai| { return Asset { info: ai, amount: query_pool(ai, addr) }; }).collect::<Vec<_>>()
    }
pub fn query_pool(asset_info: AssetInfo, addr: Addr) -> Uint128 {
      if matches!(asset_info, AssetInfo::Token { .. }) {
let res = /* query! Bank.balance(asset_info.contract_addr, BALANCE.load(ctx.deps.storage, &(addr))?) */ todo!("query");
return res.balance;
} else {
if matches!(asset_info, AssetInfo::NativeToken { .. }) { let res = /* query! Bank.balance(addr, asset_info.denom) */ todo!("query");
return res.amount.amount; } else { return 0; }
}
    }
pub fn compute_offer_amount(offer_pool: Uint128, ask_pool: Uint128, ask_amount: Uint128) -> [Uint128; 3] {
      let commission_rate = Decimal::permille(COMMISSION_RATE);
let cp = offer_pool * ask_pool;
let one_minus_commission = Decimal::one() - commission_rate;
let inv_one_minus_commission = Decimal::one() / one_minus_commission;
let before_commission_deduction = ask_amount * inv_one_minus_commission;
if before_commission_deduction * one_minus_commission != ask_amount {
before_commission_deduction += Uint256::from(1);
}
let after_ask_pool = ask_pool - before_commission_deduction;
let after_offer_pool = Uint256::from(1).multiply_ratio(cp, after_ask_pool);
if after_offer_pool * (ask_pool - before_commission_deduction) != cp {
after_offer_pool += Uint256::from(1);
}
let offer_amount = after_offer_pool - offer_pool;
let before_spread_deduction = offer_amount * Decimal::from_ratio(ask_pool, offer_pool);
let spread_amount = if before_spread_deduction > before_commission_deduction { before_commission_deduction - before_commission_deduction } else { Uint256::from(0) };
let commission_amount = before_commission_deduction - ask_amount;
return [Uint256::from(offer_amount), Uint256::from(spread_amount), Uint256::from(commission_amount)];
    }
pub fn assert_max_spread(belief_price: Option<Decimal>, max_spread: Option<Decimal>, offer_asset: Asset, return_asset: Asset, spread_amount: Uint128, offer_decimal: u8, return_decimal: u8) -> Result<(), ContractError> {
      let [offer_amount, return_amount, spread_amount] = if offer_decimal > return_decimal { let diff_decimal = u64::from(10).pow((offer_decimal - return_decimal) as u32);
[offer_asset.amount, return_asset.amount * Uint128::try_from(diff_decimal).unwrap(), spread_amount * Uint128::try_from(diff_decimal).unwrap()] } else { if offer_decimal < return_decimal { let diff_decimal = u64::from(10).pow((return_decimal - offer_decimal) as u32);
[offer_asset.amount * Uint128::try_from(diff_decimal).unwrap(), return_asset.amount, spread_amount] } else { if offer_decimal == return_decimal { [offer_asset.amount, return_asset.amount, spread_amount] } } };
if max_spread.is_some() && belief_price.is_some() {
let max_spread = max_spread.unwrap();
let belief_price = belief_price.unwrap();
let expected_return = offer_amount * (Decimal::one() / belief_price);
let spread_amount = if expected_return > return_amount { expected_return - return_amount } else { Uint256::zero() };
if return_amount < expected_return && Decimal::from_ratio(spread_amount, expected_return) > max_spread {
return Err(ContractError::MaxSpreadAssertion {});
}
} else {
if max_spread.is_some() { let max_spread = max_spread.unwrap();
if Decimal::from_ratio(spread_amount, return_amount + spread_amount) > max_spread {
return Err(ContractError::MaxSpreadAssertion {});
} }
}
Ok(())
    }
pub fn assert_deadline(blocktime: u64, deadline: Option<u64>) -> Result<(), ContractError> {
      if deadline.is_some() {
let deadline = deadline.unwrap();
return Err(ContractError::ExpiredDeadline {});
}
Ok(())
    }
pub fn assert_minimum_assets(assets: Vec<Asset>, min_assets: Option<[Asset; 2]>) -> Result<(), ContractError> {
      if min_assets.is_some() {
let min_assets = min_assets.unwrap();
for min_asset in min_assets {
let asset = assets.iter().find(|asset| { asset.info == min_asset.info });
if asset.is_some() {
let asset = asset.unwrap();
if asset.amount < min_asset.amount {
return Err(ContractError::MinAmountAssertion { min_asset: format!("{:?}", min_asset), asset: format!("{:?}", asset) });
}
} else {
return Err(ContractError::MinAmountAssetion { min_asset: format!("{:?}", min_asset), asset: format!("{:?}", Asset { info: min_asset.info, amount: 0 }) });
}
}
}
Ok(())
    }
pub fn assert_sent_native_token_balance(asset: Asset, funds: Vec<Coin>) -> Result<(), ContractError> {
      if matches!(asset.info, AssetInfo::NativeToken { .. }) {
let coin = funds.iter().find(|x| { x.denom == asset.info.denom });
if coin.is_some() {
let coin = coin.unwrap();
if asset.amount != coin.amount {
return Err(ContractError::StdError(StdError::generic_err("Native token balance mismatch between the argument and the transferred")));
}
}
} else {
if asset.amount != 0 { return Err(ContractError::StdError(StdError::generic_err("Native token balance mismatch between the argument and the transferred"))); }
}
Ok(())
    }
pub fn compute_swap(offer_pool: Uint128, ask_pool: Uint128, offer_amount: Uint128) -> [Uint128; 3] {
      let offer_pool = Uint256::from(offer_pool);
let ask_pool = Uint256::from(ask_pool);
let offer_amount = Uint256::from(offer_amount);
let commission_rate = Decimal::permille(COMMISSION_RATE);
let return_amount = (ask_pool * offer_amount) / (offer_pool + offer_amount);
let spread_amount = ((offer_amount * Decimal::from_ratio(ask_pool, offer_pool)) - return_amount);
let commission_amount = return_amount * commission_rate;
if return_amount != (commission_amount * (Decimal::one() / commission_rate)) {
commission_amount += Uint256::from(128);
}
return_amount -= commission_amount;
return [Uint128::try_from(return_amount).unwrap(), Uint128::try_from(spread_amount).unwrap(), Uint128::try_from(commission_amount).unwrap()];
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
#[cw_serde] pub struct PairInfo {
      pub asset_infos: [AssetInfo; 2],
pub contract_addr: String,
pub liquidity_token: String,
pub asset_decimals: [u8; 2]
    }
#[cw_serde] pub struct Asset {
      pub info: AssetInfo,
pub amount: Uint128
    }
#[cw_serde] pub enum AssetInfo {
      Token {
      contract_addr: String
    },
NativeToken {
      denom: String
    }
    }
pub enum ContractEvent {
      ProvideLiquidity {
      sender: String,
receiver: String,
assets: [Asset; 2],
share: String,
refund_assets: [Asset; 2]
    },
WithdrawLiquidity {
      sender: String,
withdrawn_share: String,
refund_assets: [Asset; 2]
    }
    }
#[cw_serde]
pub enum Cw20HookMsg {
  Swap { belief_price: Option<Decimal>, max_spread: Option<Decimal>, to: Option<String>, deadline: Option<u64> },
  WithdrawLiquidity { min_assets: Option<[Asset; 2]>, deadline: u64 },
}
#[cw_serde]
pub struct PoolResponse { pub assets: Vec<Asset>, pub total_share: Uint128 }
#[cw_serde]
pub struct SimulationResponse { pub return_amount: Uint128, pub spread_amount: Uint128, pub commission_amount: Uint128 }
#[cw_serde]
pub struct ReverseSimulationResponse { pub offer_amount: Uint128, pub spread_amount: Uint128, pub commission_amount: Uint128 }
#[cw_serde]
pub struct MinterResponse { pub minter: Addr, pub cap: Option<Uint128> }
    }
pub mod cws {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
pub struct InstantiateCtx<'a> {
      pub deps: DepsMut<'a>,
pub env: Env,
pub info: MessageInfo
    }
pub struct ExecuteCtx<'a> {
      pub deps: DepsMut<'a>,
pub env: Env,
pub info: MessageInfo
    }
pub struct QueryCtx<'a> {
      pub deps: Deps<'a>,
pub env: Env
    }
#[cw_serde] pub struct CWSQueryResponse<T>(pub T);
    }
    }
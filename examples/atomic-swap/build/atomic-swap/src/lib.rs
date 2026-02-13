pub mod atomic_swap {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const CONFIG: Item<SwapConfig> = Item::new("config");
pub const CACHE: Item<SwapCache> = Item::new("cache");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("NotEnoughFunds")] NotEnoughFunds {
      
    },
#[error("Unauthorized")] Unauthorized {
      
    },
#[error("InvalidDenom")] InvalidDenom {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      pub allowed_denom: String
    }
#[cw_serde] pub enum ExecuteMsg {
      Deposit {
      
    },
Withdraw {
      
    }
    }
#[cw_serde] pub enum QueryMsg {
      Config {
      
    },
Cache {
      
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
instantiate_impl(ctx, msg.allowed_denom)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Deposit {  } => exec_deposit_impl(ctx),
ExecuteMsg::Withdraw {  } => exec_withdraw_impl(ctx)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::Config {  } => query_config_impl(ctx),
QueryMsg::Cache {  } => query_cache_impl(ctx)
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
pub const CONTRACT_NAME: &str = "crates.io:atomic-swap";
pub const CONTRACT_VERSION: &str = "0.0.1";
pub fn instantiate_impl(ctx: InstantiateCtx, allowed_denom: String) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = SwapConfig { owner: ctx.info.sender.clone(), allowed_denom: allowed_denom.clone() };
CONFIG.save(ctx.deps.storage, &(config))?;
_response = _response.add_attribute("method", format!("{}", String::from("instantiate")));
_response = _response.add_attribute("owner", format!("{}", ctx.info.sender.clone()));
Ok(_response)
    }
pub fn exec_deposit_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = CONFIG.load(ctx.deps.storage)?;
if ctx.info.funds.clone().is_empty() {
return Err(ContractError::NotEnoughFunds {});
}
let deposit = ctx.info.funds.clone()[0 as usize].clone();
CACHE.save(ctx.deps.storage, &(SwapCache { sender_address: ctx.info.sender.clone(), deposited_amount: deposit.clone() }))?;
_response = _response.add_event(Event::new("swap_initiated").add_attribute("sender", format!("{}", ctx.info.sender.clone())).add_attribute("amount", format!("{}", deposit.amount)));
Ok(_response)
    }
pub fn exec_withdraw_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = CONFIG.load(ctx.deps.storage)?;
let cache = CACHE.load(ctx.deps.storage)?;
if ctx.info.sender.clone() != config.owner {
return Err(ContractError::Unauthorized {});
}
_response = _response.add_message(CosmosMsg::Bank(BankMsg::Send { to_address: (cache.sender_address).to_string(), amount: [cache.deposited_amount].to_vec() }));
Ok(_response)
    }
pub fn query_config_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(CONFIG.load(ctx.deps.storage)?))?);
    }
pub fn query_cache_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(CACHE.load(ctx.deps.storage)?))?);
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
#[cw_serde] pub struct SwapConfig {
      pub owner: Addr,
pub allowed_denom: String
    }
#[cw_serde] pub struct SwapCache {
      pub sender_address: Addr,
pub deposited_amount: Coin
    }
pub enum ContractEvent {
      SwapInitiated {
      sender: String,
amount: String
    }
    }
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
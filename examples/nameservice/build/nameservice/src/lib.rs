pub mod nameservice {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const CONFIG: Item<NameserviceConfig> = Item::new("config");
pub const NAMES: Map<String, NameRecord> = Map::new("names");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("NameTaken")] NameTaken {
      
    },
#[error("Unauthorized")] Unauthorized {
      
    },
#[error("InsufficientFunds")] InsufficientFunds {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      pub purchase_price: Coin,
pub transfer_price: Coin
    }
#[cw_serde] pub enum ExecuteMsg {
      Register {
      name: String
    },
Transfer {
      name: String,
recipient: Addr
    }
    }
#[cw_serde] pub enum QueryMsg {
      Resolve {
      name: String
    },
Config {
      
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
instantiate_impl(ctx, msg.purchase_price, msg.transfer_price)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Register { name } => exec_register_impl(ctx, name),
ExecuteMsg::Transfer { name, recipient } => exec_transfer_impl(ctx, name, recipient)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::Resolve { name } => query_resolve_impl(ctx, name),
QueryMsg::Config {  } => query_config_impl(ctx)
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
pub const CONTRACT_NAME: &str = "crates.io:nameservice";
pub const CONTRACT_VERSION: &str = "0.0.1";
pub fn instantiate_impl(ctx: InstantiateCtx, purchase_price: Coin, transfer_price: Coin) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = NameserviceConfig { purchase_price: purchase_price.clone(), transfer_price: transfer_price.clone() };
CONFIG.save(ctx.deps.storage, &(config))?;
Ok(_response)
    }
pub fn exec_register_impl(ctx: ExecuteCtx, name: String) -> Result<Response, ContractError> {
      let mut _response = Response::new();
if ctx.info.funds.clone().is_empty() {
return Err(ContractError::InsufficientFunds {});
}
let record = NameRecord { owner: ctx.info.sender.clone() };
NAMES.save(ctx.deps.storage, (name).clone(), &(record))?;
_response = _response.add_event(Event::new("register").add_attribute("name", format!("{}", name)).add_attribute("owner", format!("{}", ctx.info.sender.clone())));
Ok(_response)
    }
pub fn exec_transfer_impl(ctx: ExecuteCtx, name: String, recipient: Addr) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let record = NAMES.load(ctx.deps.storage, (name).clone())?;
if ctx.info.sender.clone() != record.owner {
return Err(ContractError::Unauthorized {});
}
NAMES.save(ctx.deps.storage, (name).clone(), &(NameRecord { owner: recipient.clone() }))?;
_response = _response.add_event(Event::new("transfer_name").add_attribute("name", format!("{}", name)).add_attribute("sender", format!("{}", ctx.info.sender.clone())).add_attribute("recipient", format!("{}", recipient)));
Ok(_response)
    }
pub fn query_resolve_impl(ctx: QueryCtx, name: String) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(NAMES.load(ctx.deps.storage, (name).clone())?))?);
    }
pub fn query_config_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(CONFIG.load(ctx.deps.storage)?))?);
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
#[cw_serde] pub struct NameserviceConfig {
      pub purchase_price: Coin,
pub transfer_price: Coin
    }
#[cw_serde] pub struct NameRecord {
      pub owner: Addr
    }
pub enum ContractEvent {
      Register {
      name: String,
owner: String
    },
TransferName {
      name: String,
sender: String,
recipient: String
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
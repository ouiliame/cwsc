pub mod c_w20_token {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");
pub const BALANCES: Map<Addr, u64> = Map::new("balances");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("Unauthorized")] Unauthorized {
      
    },
#[error("InsufficientFunds")] InsufficientFunds {
      
    },
#[error("InvalidZeroAmount")] InvalidZeroAmount {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      pub name: String,
pub symbol: String,
pub decimals: u8,
pub initial_amount: u64
    }
#[cw_serde] pub enum ExecuteMsg {
      Transfer {
      recipient: Addr,
amount: u64
    },
Burn {
      amount: u64
    },
Mint {
      recipient: Addr,
amount: u64
    }
    }
#[cw_serde] pub enum QueryMsg {
      Balance {
      address: Addr
    },
TokenInfo {
      
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
instantiate_impl(ctx, msg.name, msg.symbol, msg.decimals, msg.initial_amount)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Transfer { recipient, amount } => exec_transfer_impl(ctx, recipient, amount),
ExecuteMsg::Burn { amount } => exec_burn_impl(ctx, amount),
ExecuteMsg::Mint { recipient, amount } => exec_mint_impl(ctx, recipient, amount)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::Balance { address } => query_balance_impl(ctx, address),
QueryMsg::TokenInfo {  } => query_token_info_impl(ctx)
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
pub const CONTRACT_NAME: &str = "crates.io:cw20-token";
pub const CONTRACT_VERSION: &str = "0.0.1";
pub fn instantiate_impl(ctx: InstantiateCtx, name: String, symbol: String, decimals: u8, initial_amount: u64) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let token = TokenInfo { name: name.clone(), symbol: symbol.clone(), decimals: decimals.clone(), total_supply: initial_amount.clone() };
TOKEN_INFO.save(ctx.deps.storage, &(token))?;
BALANCES.save(ctx.deps.storage, (ctx.info.sender.clone()).clone(), &(initial_amount))?;
Ok(_response)
    }
pub fn exec_transfer_impl(ctx: ExecuteCtx, recipient: Addr, amount: u64) -> Result<Response, ContractError> {
      let mut _response = Response::new();
if amount == 0 {
return Err(ContractError::InvalidZeroAmount {});
}
let sender_bal = BALANCES.load(ctx.deps.storage, (ctx.info.sender.clone()).clone())?;
if sender_bal < amount {
return Err(ContractError::InsufficientFunds {});
}
BALANCES.save(ctx.deps.storage, (ctx.info.sender.clone()).clone(), &(sender_bal - amount))?;
BALANCES.save(ctx.deps.storage, (recipient).clone(), &(amount))?;
_response = _response.add_event(Event::new("transfer").add_attribute("sender", format!("{}", ctx.info.sender.clone())).add_attribute("recipient", format!("{}", recipient)).add_attribute("amount", format!("{}", amount)));
Ok(_response)
    }
pub fn exec_burn_impl(ctx: ExecuteCtx, amount: u64) -> Result<Response, ContractError> {
      let mut _response = Response::new();
if amount == 0 {
return Err(ContractError::InvalidZeroAmount {});
}
let sender_bal = BALANCES.load(ctx.deps.storage, (ctx.info.sender.clone()).clone())?;
if sender_bal < amount {
return Err(ContractError::InsufficientFunds {});
}
BALANCES.save(ctx.deps.storage, (ctx.info.sender.clone()).clone(), &(sender_bal - amount))?;
_response = _response.add_event(Event::new("burn").add_attribute("sender", format!("{}", ctx.info.sender.clone())).add_attribute("amount", format!("{}", amount)));
Ok(_response)
    }
pub fn exec_mint_impl(ctx: ExecuteCtx, recipient: Addr, amount: u64) -> Result<Response, ContractError> {
      let mut _response = Response::new();
if amount == 0 {
return Err(ContractError::InvalidZeroAmount {});
}
BALANCES.save(ctx.deps.storage, (recipient).clone(), &(amount))?;
_response = _response.add_event(Event::new("mint").add_attribute("recipient", format!("{}", recipient)).add_attribute("amount", format!("{}", amount)));
Ok(_response)
    }
pub fn query_balance_impl(ctx: QueryCtx, address: Addr) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(BALANCES.load(ctx.deps.storage, (address).clone())?))?);
    }
pub fn query_token_info_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(TOKEN_INFO.load(ctx.deps.storage)?))?);
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
#[cw_serde] pub struct TokenInfo {
      pub name: String,
pub symbol: String,
pub decimals: u8,
pub total_supply: u64
    }
pub enum ContractEvent {
      Transfer {
      sender: String,
recipient: String,
amount: String
    },
Burn {
      sender: String,
amount: String
    },
Mint {
      recipient: String,
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
pub mod counter {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const COUNT: Item<u32> = Item::new("count");
pub const OWNER: Item<Addr> = Item::new("owner");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("CountIsZeroError")] CountIsZeroError {
      
    },
#[error("Unauthorized")] Unauthorized {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      pub count: Option<u32>,
pub owner: Option<Addr>
    }
#[cw_serde] pub enum ExecuteMsg {
      Increment {
      
    },
Decrement {
      
    },
Reset {
      count: Option<u32>
    }
    }
#[cw_serde] pub enum QueryMsg {
      Count {
      
    },
Owner {
      
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
instantiate_impl(ctx, msg.count, msg.owner)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Increment {  } => exec_increment_impl(ctx),
ExecuteMsg::Decrement {  } => exec_decrement_impl(ctx),
ExecuteMsg::Reset { count } => exec_reset_impl(ctx, count)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::Count {  } => query_count_impl(ctx),
QueryMsg::Owner {  } => query_owner_impl(ctx)
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
pub fn instantiate_impl(ctx: InstantiateCtx, count: Option<u32>, owner: Option<Addr>) -> Result<Response, ContractError> {
      COUNT.save(ctx.deps.storage, &(count.unwrap_or(0)))?;
OWNER.save(ctx.deps.storage, &(owner.unwrap_or(ctx.info.sender.clone())))?;
Ok(Response::new())
    }
pub fn exec_increment_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
      COUNT.update(ctx.deps.storage, |mut c| -> StdResult<_> { c += 1; Ok(c) })?;
Ok(Response::new())
    }
pub fn exec_decrement_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
      let current_count = COUNT.load(ctx.deps.storage)?;
if current_count == 0 {
return Err(ContractError::CountIsZeroError {});
}
Ok(Response::new())
    }
pub fn exec_reset_impl(ctx: ExecuteCtx, count: Option<u32>) -> Result<Response, ContractError> {
      if ctx.info.sender.clone() != OWNER.load(ctx.deps.storage)? {
return Err(ContractError::Unauthorized {});
}
COUNT.save(ctx.deps.storage, &(count.unwrap_or(0)))?;
Ok(Response::new())
    }
pub fn query_count_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(COUNT.load(ctx.deps.storage)?))?);
    }
pub fn query_owner_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(OWNER.load(ctx.deps.storage)?))?);
    }
pub fn hello() -> String {
      
todo!("helper fn")
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
pub enum ContractEvent {
      
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
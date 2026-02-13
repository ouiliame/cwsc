pub mod c_w1_whitelist {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const ADMIN_CONFIG: Item<AdminConfig> = Item::new("admin_config");
pub const ADMINS: Map<Addr, bool> = Map::new("admins");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("Unauthorized")] Unauthorized {
      
    },
#[error("ContractFrozen")] ContractFrozen {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      
    }
#[cw_serde] pub enum ExecuteMsg {
      Freeze {
      
    },
AddAdmin {
      admin: Addr
    },
RemoveAdmin {
      admin: Addr
    }
    }
#[cw_serde] pub enum QueryMsg {
      AdminConfig {
      
    },
IsAdmin {
      address: Addr
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
instantiate_impl(ctx)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Freeze {  } => exec_freeze_impl(ctx),
ExecuteMsg::AddAdmin { admin } => exec_add_admin_impl(ctx, admin),
ExecuteMsg::RemoveAdmin { admin } => exec_remove_admin_impl(ctx, admin)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::AdminConfig {  } => query_admin_config_impl(ctx),
QueryMsg::IsAdmin { address } => query_is_admin_impl(ctx, address)
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
pub const CONTRACT_NAME: &str = "crates.io:cw1-whitelist";
pub const CONTRACT_VERSION: &str = "0.0.1";
pub fn instantiate_impl(ctx: InstantiateCtx) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = AdminConfig { owner: ctx.info.sender.clone(), frozen: false.clone() };
ADMIN_CONFIG.save(ctx.deps.storage, &(config))?;
ADMINS.save(ctx.deps.storage, (ctx.info.sender.clone()).clone(), &(true))?;
Ok(_response)
    }
pub fn exec_freeze_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = ADMIN_CONFIG.load(ctx.deps.storage)?;
if ctx.info.sender.clone() != config.owner {
return Err(ContractError::Unauthorized {});
}
if config.frozen {
return Err(ContractError::ContractFrozen {});
}
ADMIN_CONFIG.save(ctx.deps.storage, &(AdminConfig { owner: config.owner, frozen: true.clone() }))?;
_response = _response.add_event(Event::new("freeze").add_attribute("sender", format!("{}", ctx.info.sender.clone())));
Ok(_response)
    }
pub fn exec_add_admin_impl(ctx: ExecuteCtx, admin: Addr) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = ADMIN_CONFIG.load(ctx.deps.storage)?;
if ctx.info.sender.clone() != config.owner {
return Err(ContractError::Unauthorized {});
}
if config.frozen {
return Err(ContractError::ContractFrozen {});
}
ADMINS.save(ctx.deps.storage, (admin).clone(), &(true))?;
_response = _response.add_event(Event::new("admin_added").add_attribute("admin", format!("{}", admin)));
Ok(_response)
    }
pub fn exec_remove_admin_impl(ctx: ExecuteCtx, admin: Addr) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let config = ADMIN_CONFIG.load(ctx.deps.storage)?;
if ctx.info.sender.clone() != config.owner {
return Err(ContractError::Unauthorized {});
}
if config.frozen {
return Err(ContractError::ContractFrozen {});
}
ADMINS.save(ctx.deps.storage, (admin).clone(), &(false))?;
_response = _response.add_event(Event::new("admin_removed").add_attribute("admin", format!("{}", admin)));
Ok(_response)
    }
pub fn query_admin_config_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(ADMIN_CONFIG.load(ctx.deps.storage)?))?);
    }
pub fn query_is_admin_impl(ctx: QueryCtx, address: Addr) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(ADMINS.load(ctx.deps.storage, (address).clone())?))?);
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
#[cw_serde] pub struct AdminConfig {
      pub owner: Addr,
pub frozen: bool
    }
pub enum ContractEvent {
      Freeze {
      sender: String
    },
AdminAdded {
      admin: String
    },
AdminRemoved {
      admin: String
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
#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod inheritance {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const EXTRA: Item<u32> = Item::new("extra");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
    }
  }
  pub mod msg {
    use cosmwasm_schema::{ cw_serde, QueryResponses };
    use cosmwasm_std::*;
    use cw20::Cw20ReceiveMsg;
    use std::collections::HashMap;
    use super::types::*;
    #[cw_serde]
    pub struct InstantiateMsg {}
    #[cw_serde]
    pub enum ExecuteMsg {
      Ping {},
      Pong {},
    }
    #[cw_serde]
    pub enum QueryMsg {
      Extra {},
    }
  }
  pub mod contract {
    use super::cws::*;
    use super::error::*;
    use super::msg::*;
    use super::implementation::*;
    use cosmwasm_std::*;
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn instantiate(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: InstantiateMsg
    ) -> Result<Response, ContractError> {
      let ctx: InstantiateCtx = InstantiateCtx {
        deps: deps,
        env: env,
        info: info,
      };
      instantiate_impl(ctx)
    }
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn execute(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: ExecuteMsg
    ) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
        deps: deps,
        env: env,
        info: info,
      };
      match msg {
        ExecuteMsg::Ping {} => exec_ping_impl(ctx),
        ExecuteMsg::Pong {} => exec_pong_impl(ctx),
      }
    }
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn query(
      deps: Deps,
      env: Env,
      msg: QueryMsg
    ) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
        deps: deps,
        env: env,
      };
      match msg {
        QueryMsg::Extra {} => query_extra_impl(ctx),
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
    use std::collections::HashMap;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      EXTRA.save(ctx.deps.storage, &0)?;
      Ok(_response)
    }
    pub fn exec_ping_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      EXTRA.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c += 1;
          Ok(c)
        }
      )?;
      Ok(_response)
    }
    pub fn exec_pong_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      EXTRA.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c -= 1;
          Ok(c)
        }
      )?;
      Ok(_response)
    }
    pub fn query_extra_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&EXTRA.load(ctx.deps.storage)?)?);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    pub enum ContractEvent {}
  }
  pub mod cws {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    pub struct ExecuteCtx<'a> {
      pub deps: DepsMut<'a>,
      pub env: Env,
      pub info: MessageInfo,
    }
    pub type InstantiateCtx<'a> = ExecuteCtx<'a>;
    pub struct QueryCtx<'a> {
      pub deps: Deps<'a>,
      pub env: Env,
    }
    pub struct ReplyCtx<'a> {
      pub deps: DepsMut<'a>,
      pub env: Env,
    }
    pub type MigrateCtx<'a> = ReplyCtx<'a>;
    #[cw_serde]
    pub struct CWSQueryResponse<T>(pub T);
  }
}

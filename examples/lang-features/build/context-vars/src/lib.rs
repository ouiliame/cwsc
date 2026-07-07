#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod context_vars {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const COUNT: Item<u32> = Item::new("count");
    pub const OWNER: Item<Addr> = Item::new("owner");
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
      Spend {},
    }
    #[cw_serde]
    pub enum QueryMsg {
      Count {},
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
        ExecuteMsg::Spend {} => exec_spend_impl(ctx),
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
        QueryMsg::Count {} => query_count_impl(ctx),
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
      let mut who = ctx.info.sender.clone();
      let mut funds = ctx.info.funds.clone();
      let mut addr = ctx.env.contract.address.clone();
      let mut time = ctx.env.block.time.clone();
      let mut height = ctx.env.block.height.clone();
      let mut secs = ctx.env.block.time.seconds();
      COUNT.save(ctx.deps.storage, &0)?;
      OWNER.save(ctx.deps.storage, &who)?;
      Ok(_response)
    }
    pub fn exec_spend_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if ctx.info.funds.clone().is_empty() {
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("No funds deposited!"))
          )
        );
      }
      let mut first_amount = ctx.info.funds.clone()[0 as usize].clone().amount;
      bump(1, &mut ctx)?;
      assert_deadline(
        ctx.env.block.time.seconds(),
        100,
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      _response.data = None;
      let mut evs = _response.events.clone();
      let mut attrs = _response.attributes.clone();
      let mut msgs = _response.messages.clone();
      Ok(_response)
    }
    pub fn query_count_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      let mut h = ctx.env.block.height.clone();
      return Ok(to_json_binary(&COUNT.load(ctx.deps.storage)?)?);
    }
    pub fn bump(by: u32, ctx: &mut ExecuteCtx) -> Result<(), ContractError> {
      COUNT.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c += by;
          Ok(c)
        }
      )?;
      Ok(())
    }
    pub fn current(ctx: &QueryCtx) -> Result<u32, ContractError> {
      return Ok(COUNT.load(ctx.deps.storage)?);
    }
    pub fn assert_deadline(
      now: u64,
      deadline: u64,
      ctx: &QueryCtx
    ) -> Result<(), ContractError> {
      if now > deadline {
        return Err(
          ContractError::StdError(
            StdError::generic_err(
              format!("deadline {} exceeded at {}", deadline, now)
            )
          )
        );
      }
      Ok(())
    }
    pub fn mutable_fn(ctx: &mut ExecuteCtx) -> Result<(), ContractError> {
      COUNT.save(ctx.deps.storage, &1)?;
      Ok(())
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

#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod utilities {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const OWNER: Item<Addr> = Item::new("owner");
    pub const RATE: Item<Decimal> = Item::new("rate");
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
    pub struct InstantiateMsg {
      pub to_addr: String,
      pub liquidity_token: String,
    }
    #[cw_serde]
    pub enum ExecuteMsg {}
    #[cw_serde]
    pub enum QueryMsg {
      Rate {},
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
      instantiate_impl(ctx, msg.to_addr, msg.liquidity_token)
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
        QueryMsg::Rate {} => query_rate_impl(ctx),
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
    pub const UT_COMMISSION_RATE: u64 = 3;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx,
      to_addr: String,
      liquidity_token: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut validated = ctx.deps.api.addr_validate(to_addr.as_str())?;
      let mut unchecked = Addr::unchecked(to_addr.clone());
      let mut canonical = ctx.deps.api.addr_canonicalize(
        ctx.info.sender.clone().as_str()
      )?;
      let mut human = ctx.deps.api.addr_humanize(&canonical)?;
      let mut empty = Addr::unchecked("");
      let mut sub = todo!("references undefined: SubaccountId");
      let mut one = Decimal::one();
      let mut zero = Decimal::zero();
      let mut permille = Decimal::permille(UT_COMMISSION_RATE.clone());
      let mut ratio = Decimal::from_ratio(1u128, 3u128);
      let mut ratio_f = Decimal::checked_from_ratio(1u128, 3u128).map_err(|e|
        StdError::generic_err(e.to_string())
      )?;
      OWNER.save(ctx.deps.storage, &validated)?;
      RATE.save(ctx.deps.storage, &permille)?;
      Ok(_response)
    }
    pub fn query_rate_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&RATE.load(ctx.deps.storage)?)?);
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

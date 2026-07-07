#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod state_blocks {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const COUNT: Item<u32> = Item::new("count");
    pub const OWNER: Item<Addr> = Item::new("owner");
    pub const BALANCES: Map<Addr, Uint128> = Map::new("balances");
    pub const NAMES: Map<String, Addr> = Map::new("names");
    pub const CONFIG: Item<StateBlocksConfig> = Item::new("config");
    pub const CACHE: Item<StateBlocksCache> = Item::new("cache");
    pub const PAIR_INFO: Item<StateBlocksPairInfo> = Item::new("pair_info");
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
      pub market_id: String,
      pub base_denom: String,
      pub quote_denom: String,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Touch {},
    }
    #[cw_serde]
    pub enum QueryMsg {
      Count {},
      Pair {},
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
      instantiate_impl(ctx, msg.market_id, msg.base_denom, msg.quote_denom)
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
        ExecuteMsg::Touch {} => exec_touch_impl(ctx),
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
        QueryMsg::Pair {} => query_pair_impl(ctx),
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
      mut ctx: InstantiateCtx,
      market_id: String,
      base_denom: String,
      quote_denom: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      COUNT.save(ctx.deps.storage, &10)?;
      OWNER.save(ctx.deps.storage, &ctx.info.sender.clone())?;
      CONFIG.save(
        ctx.deps.storage,
        &(StateBlocksConfig {
          market_id: market_id.clone(),
          owner: ctx.info.sender.clone(),
          base_denom: base_denom.clone(),
          quote_denom: quote_denom.clone(),
        })
      )?;
      BALANCES.save(
        ctx.deps.storage,
        ctx.info.sender.clone().clone(),
        &Uint128::new(0u128)
      )?;
      BALANCES.update(
        ctx.deps.storage,
        ctx.info.sender.clone().clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c += Uint128::new(100u128);
          Ok(c)
        }
      )?;
      NAMES.save(
        ctx.deps.storage,
        String::from("genesis").clone(),
        &ctx.info.sender.clone()
      )?;
      Ok(_response)
    }
    pub fn exec_touch_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut x = COUNT.load(ctx.deps.storage)?;
      COUNT.save(ctx.deps.storage, &(x + 1))?;
      let mut config = CONFIG.load(ctx.deps.storage)?;
      let mut cfg = CONFIG.load(ctx.deps.storage)?;
      let mut cache = CACHE.load(ctx.deps.storage)?;
      let mut denom = config.base_denom;
      let mut who = cache.sender_address;
      let mut bal = BALANCES.load(
        ctx.deps.storage,
        ctx.info.sender.clone().clone()
      )?;
      BALANCES.update(
        ctx.deps.storage,
        ctx.info.sender.clone().clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c -= Uint128::new(1u128);
          Ok(c)
        }
      )?;
      Ok(_response)
    }
    pub fn query_count_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&COUNT.load(ctx.deps.storage)?)?);
    }
    pub fn query_pair_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&PAIR_INFO.load(ctx.deps.storage)?)?);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct StateBlocksConfig {
      pub market_id: String,
      pub owner: Addr,
      pub base_denom: String,
      pub quote_denom: String,
    }
    #[cw_serde]
    pub struct StateBlocksCache {
      pub sender_address: String,
      pub deposited_amount: Coin,
    }
    #[cw_serde]
    pub struct StateBlocksPairInfo {
      pub asset_names: [String; 2],
      pub contract_addr: String,
      pub liquidity_token: String,
      pub asset_decimals: [u8; 2],
    }
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

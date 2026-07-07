#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod functions {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const RESULT: Item<Uint128> = Item::new("result");
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
    pub enum ExecuteMsg {}
    #[cw_serde]
    pub enum QueryMsg {}
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
      RESULT.save(ctx.deps.storage, &Uint128::new(0u128))?;
      hello();
      let mut s = add(1, 2);
      let mut m = might_fail()?;
      let mut arr = compute_swap(
        Uint128::new(10u128),
        Uint128::new(20u128),
        Uint128::new(5u128)
      )?;
      let [mut ret, mut spread, mut commission] = compute_swap(
        Uint128::new(10u128),
        Uint128::new(20u128),
        Uint128::new(5u128)
      )?;
      generic(42);
      let mut fg = fallible_generic(String::from("x"))?;
      Ok(_response)
    }
    pub fn hello() -> () {}
    pub fn add(a: i64, b: i64) -> i64 {
      return a + b;
    }
    pub fn might_fail() -> Result<Uint128, ContractError> {
      return Err(
        ContractError::StdError(
          StdError::generic_err(String::from("always fails"))
        )
      );
    }
    pub fn generic<T>(x: T) -> () {}
    pub fn pair_up<T, U>(a: T, b: U) -> () {}
    pub fn fallible_generic<T>(x: T) -> Result<T, ContractError> {
      return Ok(x);
    }
    pub fn compute_swap(
      offer_pool: Uint128,
      ask_pool: Uint128,
      offer_amount: Uint128
    ) -> Result<[Uint128; 3], ContractError> {
      return Ok([offer_amount, offer_pool, ask_pool]);
    }
    pub fn assert_max_spread(
      belief_price: Option<Decimal>,
      max_spread: Option<Decimal>,
      return_amount: Uint128,
      spread_amount: Uint128
    ) -> Result<(), ContractError> {
      if max_spread.is_some() {
        let max_spread = max_spread.clone().unwrap();
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("MaxSpreadAssertion"))
          )
        );
      }
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

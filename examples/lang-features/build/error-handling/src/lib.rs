#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod error_handling {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const VALUE: Item<Uint128> = Item::new("value");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("EhUnauthorized")] EhUnauthorized {},
      #[error("EhDivideByZero")] EhDivideByZero {},
      #[error("EhOverflow")] EhOverflow {
        limit: Uint128,
      },
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
      Run {
        amount: Option<Uint128>,
        market_id: String,
      },
    }
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
        ExecuteMsg::Run { amount, market_id } =>
          exec_run_impl(ctx, amount, market_id),
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
      VALUE.save(ctx.deps.storage, &Uint128::new(0u128))?;
      Ok(_response)
    }
    pub fn exec_run_impl(
      mut ctx: ExecuteCtx,
      amount: Option<Uint128>,
      market_id: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if ctx.info.sender.clone() != ctx.info.sender.clone() {
        return Err(ContractError::EhUnauthorized {});
      }
      if market_id == String::from("") {
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("error message"))
          )
        );
      }
      let mut min_deposit = 100;
      let mut message_deposit = 50;
      if message_deposit < min_deposit {
        return Err(
          ContractError::StdError(
            StdError::generic_err(
              format!("Deposit: {} below min_deposit: {}", message_deposit, min_deposit)
            )
          )
        );
      }
      match divide(Uint128::new(10u128), Uint128::new(2u128)) {
        Err(ContractError::EhDivideByZero { .. }) => {
          VALUE.save(ctx.deps.storage, &Uint128::new(0u128))?;
        }
        Err(__e) => {
          return Err(__e);
        }
        Ok(_) => {
          VALUE.save(ctx.deps.storage, &Uint128::new(1u128))?;
        }
      }
      match divide(Uint128::new(10u128), Uint128::new(0u128)) {
        Err(ContractError::EhDivideByZero { .. }) => {
          VALUE.save(ctx.deps.storage, &Uint128::new(2u128))?;
        }
        Err(ContractError::EhOverflow { .. }) => {
          VALUE.save(ctx.deps.storage, &Uint128::new(3u128))?;
        }
        Err(__e) => {
          return Err(__e);
        }
        Ok(_) => {}
      }
      let mut market = match lookup(market_id.clone()) {
        Ok(__v) => __v,
        Err(_) => {
          return Err(
            ContractError::StdError(
              StdError::generic_err(
                format!("Market with id: {} not found", market_id)
              )
            )
          );
        }
      };
      let mut result = divide(Uint128::new(5u128), Uint128::new(0u128))
        .ok()
        .or(divide(Uint128::new(3u128), Uint128::new(0u128)).ok())
        .unwrap_or(Uint128::new(0u128));
      let mut trade_data = amount
        .clone()
        .ok_or_else(||
          ContractError::StdError(
            StdError::generic_err(String::from("No trade data"))
          )
        )?;
      VALUE.save(ctx.deps.storage, &trade_data)?;
      Ok(_response)
    }
    pub fn divide(a: Uint128, b: Uint128) -> Result<Uint128, ContractError> {
      if b == Uint128::new(0u128) {
        return Err(ContractError::EhDivideByZero {});
      }
      if a > Uint128::new(1000u128) {
        return Err(ContractError::EhOverflow { limit: Uint128::new(1000u128) });
      }
      return Ok(a / b);
    }
    pub fn lookup(id: String) -> Result<Uint128, ContractError> {
      if id == String::from("missing") {
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("not found"))
          )
        );
      }
      return Ok(Uint128::new(7u128));
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

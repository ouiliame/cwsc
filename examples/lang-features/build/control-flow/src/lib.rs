#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod control_flow {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const ACC: Item<Uint128> = Item::new("acc");
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
      Branches {
        cond: bool,
        x: Uint128,
      },
      Loops {},
      Closures {},
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
        ExecuteMsg::Branches { cond, x } => exec_branches_impl(ctx, cond, x),
        ExecuteMsg::Loops {} => exec_loops_impl(ctx),
        ExecuteMsg::Closures {} => exec_closures_impl(ctx),
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
      ACC.save(ctx.deps.storage, &Uint128::new(0u128))?;
      Ok(_response)
    }
    pub fn exec_branches_impl(
      mut ctx: ExecuteCtx,
      cond: bool,
      x: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if cond {
        ACC.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += Uint128::new(1u128);
            Ok(c)
          }
        )?;
      }
      if x > Uint128::new(100u128) {
        ACC.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += Uint128::new(2u128);
            Ok(c)
          }
        )?;
      } else {
        if x > Uint128::new(10u128) {
          ACC.update(
            ctx.deps.storage,
            |mut c| -> StdResult<_> {
              c += Uint128::new(1u128);
              Ok(c)
            }
          )?;
        } else {
          ACC.save(ctx.deps.storage, &Uint128::new(0u128))?;
        }
      }
      let mut y = if cond { 1 } else { 2 };
      let mut z = if cond { 10 } else { 20 };
      let mut spread_amount = if x > Uint128::new(50u128) {
        x - Uint128::new(50u128)
      } else {
        if x > Uint128::new(25u128) {
          x - Uint128::new(25u128)
        } else {
          Uint128::new(0u128)
        }
      };
      ACC.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c += spread_amount;
          Ok(c)
        }
      )?;
      Ok(_response)
    }
    pub fn exec_loops_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut items = [1, 2, 3];
      let mut pairs = [
        [1, 2],
        [3, 4],
      ];
      let mut assets = [
        CfAsset { name: String::from("a"), amount: Uint128::new(1u128) },
        CfAsset { name: String::from("b"), amount: Uint128::new(2u128) },
      ];
      for mut item in items.clone() {
        ACC.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += Uint128::new(item as u128);
            Ok(c)
          }
        )?;
      }
      for [x, y] in pairs {
        ACC.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += Uint128::new(x as u128) + Uint128::new(y as u128);
            Ok(c)
          }
        )?;
      }
      for (i, pool) in items.clone().into_iter().enumerate() {
        ACC.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += Uint128::new(pool as u128);
            Ok(c)
          }
        )?;
      }
      for __item in assets.clone() {
        let mut asset_name = __item.name.clone();
        let mut amount = __item.amount.clone();
        ACC.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += amount;
            Ok(c)
          }
        )?;
      }
      Ok(_response)
    }
    pub fn exec_closures_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut items = [1, 2, 3];
      let mut bumped = items
        .clone()
        .into_iter()
        .map(|x| {
          let x = x.clone();
          x + 1
        })
        .collect::<Vec<_>>();
      let mut positive = items
        .clone()
        .into_iter()
        .filter(|x| {
          let x = x.clone();
          x > 0
        })
        .collect::<Vec<_>>();
      let mut found = items
        .clone()
        .into_iter()
        .find(|x| {
          let x = x.clone();
          x == 2
        });
      let mut doubled = items
        .clone()
        .into_iter()
        .map(|x| {
          let x = x.clone();
          x * 2
        })
        .collect::<Vec<_>>();
      let mut checked = items
        .clone()
        .into_iter()
        .map(|x| {
          let x = x.clone();
          return check(Uint128::new(x as u128)).unwrap();
        })
        .collect::<Vec<_>>();
      let mut verbose = items
        .clone()
        .into_iter()
        .map(|x| {
          let x = x.clone();
          return x + 10;
        })
        .collect::<Vec<_>>();
      let mut thunk = || {
        42;
      };
      Ok(_response)
    }
    pub fn check(x: Uint128) -> Result<Uint128, ContractError> {
      if x == Uint128::new(0u128) {
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("zero not allowed"))
          )
        );
      }
      return Ok(x);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct CfAsset {
      pub name: String,
      pub amount: Uint128,
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

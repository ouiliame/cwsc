#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod annotations {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const MARKET_ID: Item<String> = Item::new("market_id");
    pub const FILLED: Item<bool> = Item::new("filled");
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
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      DoThing {
        contract: Addr,
        order: Binary,
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
      instantiate_impl(ctx, msg.market_id)
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
        ExecuteMsg::DoThing { contract, order } =>
          exec_do_thing_impl(ctx, contract, order),
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
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn reply(
      deps: DepsMut,
      env: Env,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let ctx = ReplyCtx { deps, env };
      match msg.id {
        1u64 => reply_handle_atomic_order_impl(ctx, msg),
        2u64 => reply_handle_reply_impl(ctx, msg),
        _ =>
          Err(
            ContractError::StdError(
              StdError::generic_err(format!("unknown reply id: {}", msg.id))
            )
          ),
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
      market_id: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      MARKET_ID.save(ctx.deps.storage, &market_id)?;
      FILLED.save(ctx.deps.storage, &false)?;
      Ok(_response)
    }
    pub fn exec_do_thing_impl(
      mut ctx: ExecuteCtx,
      contract: Addr,
      order: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      _response = _response.add_submessage(SubMsg {
        id: 1 as u64,
        msg: todo!("exec! Exchange.#create_spot_market_order(contr"),
        gas_limit: None,
        reply_on: ReplyOn::Success,
      });
      _response = _response.add_submessage(SubMsg {
        id: 2 as u64,
        msg: todo!("exec! SomeContract.#do_thing()"),
        gas_limit: Some(5000000 as u64),
        reply_on: ReplyOn::Success,
      });
      Ok(_response)
    }
    pub fn reply_handle_atomic_order_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut order_response = todo!("references undefined: Exchange");
      FILLED.save(ctx.deps.storage, &true)?;
      Ok(_response)
    }
    pub fn reply_handle_reply_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      FILLED.save(ctx.deps.storage, &true)?;
      Ok(_response)
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

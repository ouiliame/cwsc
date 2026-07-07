#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod replies {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const TOKEN_CODE_ID: Item<u64> = Item::new("token_code_id");
    pub const LIQUIDITY_TOKEN: Item<String> = Item::new("liquidity_token");
    pub const LAST_ERROR: Item<String> = Item::new("last_error");
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
      pub token_code_id: u64,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      CreatePair {
        init_msg: Binary,
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
      instantiate_impl(ctx, msg.token_code_id)
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
        ExecuteMsg::CreatePair { init_msg } =>
          exec_create_pair_impl(ctx, init_msg),
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
        1u64 => reply_post_instantiate_impl(ctx, msg),
        2u64 => reply_handle_failed_order_impl(ctx, msg),
        3u64 => reply_inline_3_impl(ctx, msg),
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
    pub const REPLY_ID: u64 = 1;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx,
      token_code_id: u64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      TOKEN_CODE_ID.save(ctx.deps.storage, &token_code_id)?;
      LIQUIDITY_TOKEN.save(ctx.deps.storage, &String::from(""))?;
      LAST_ERROR.save(ctx.deps.storage, &String::from(""))?;
      Ok(_response)
    }
    pub fn exec_create_pair_impl(
      mut ctx: ExecuteCtx,
      init_msg: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      _response = _response.add_submessage(SubMsg {
        id: REPLY_ID as u64,
        msg: CosmosMsg::Wasm(WasmMsg::Instantiate {
          admin: None,
          code_id: TOKEN_CODE_ID.load(ctx.deps.storage)?,
          msg: init_msg.clone(),
          funds: vec![],
          label: String::from("lp").to_string(),
        }),
        gas_limit: None,
        reply_on: ReplyOn::Success,
      });
      _response = _response.add_submessage(SubMsg {
        id: 1 as u64,
        msg: CosmosMsg::Wasm(WasmMsg::Instantiate {
          admin: None,
          code_id: TOKEN_CODE_ID.load(ctx.deps.storage)?,
          msg: init_msg.clone(),
          funds: vec![],
          label: String::from("lp2").to_string(),
        }),
        gas_limit: None,
        reply_on: ReplyOn::Success,
      });
      _response = _response.add_submessage(SubMsg {
        id: 3 as u64,
        msg: CosmosMsg::Wasm(WasmMsg::Instantiate {
          admin: None,
          code_id: TOKEN_CODE_ID.load(ctx.deps.storage)?,
          msg: Binary::default(),
          funds: vec![],
          label: String::from("lp3").to_string(),
        }),
        gas_limit: None,
        reply_on: ReplyOn::Success,
      });
      Ok(_response)
    }
    pub fn reply_post_instantiate_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut res = cw_utils
        ::parse_reply_instantiate_data(msg.clone())
        .map_err(|e| StdError::generic_err(e.to_string()))?;
      let mut evs = msg.result.clone().unwrap().events;
      let mut addr = ctx.env.contract.address.clone();
      LIQUIDITY_TOKEN.save(ctx.deps.storage, &res.contract_address)?;
      Ok(_response)
    }
    pub fn reply_handle_failed_order_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      LAST_ERROR.save(ctx.deps.storage, &msg.result.clone().unwrap_err())?;
      Ok(_response)
    }
    pub fn reply_inline_3_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      LIQUIDITY_TOKEN.save(ctx.deps.storage, &String::from("pending"))?;
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

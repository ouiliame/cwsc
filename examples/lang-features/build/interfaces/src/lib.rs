#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod interfaces {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const TOTAL: Item<Uint128> = Item::new("total");
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
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub initial_balances: Vec<IfCw20::Coin>,
      pub mint: IfMinterData,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Transfer {
        recipient: String,
        amount: i64,
      },
      Burn {
        amount: i64,
      },
      Mint {
        recipient: String,
        amount: i64,
      },
      Send {
        contract: String,
        amount: i64,
        msg: Binary,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Balance {
        address: String,
      },
      TokenInfo {},
      Minter {},
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
      instantiate_impl(
        ctx,
        msg.name,
        msg.symbol,
        msg.decimals,
        msg.initial_balances,
        msg.mint
      )
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
        ExecuteMsg::Transfer { recipient, amount } =>
          exec_transfer_impl(ctx, recipient, amount),
        ExecuteMsg::Burn { amount } => exec_burn_impl(ctx, amount),
        ExecuteMsg::Mint { recipient, amount } =>
          exec_mint_impl(ctx, recipient, amount),
        ExecuteMsg::Send { contract, amount, msg } =>
          exec_send_impl(ctx, contract, amount, msg),
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
        QueryMsg::Balance { address } => query_balance_impl(ctx, address),
        QueryMsg::TokenInfo {} => query_token_info_impl(ctx),
        QueryMsg::Minter {} => query_minter_impl(ctx),
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
      name: String,
      symbol: String,
      decimals: u8,
      initial_balances: Vec<IfCw20::Coin>,
      mint: IfMinterData
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      TOTAL.save(ctx.deps.storage, &Uint128::new(0u128))?;
      Ok(_response)
    }
    pub fn exec_transfer_impl(
      mut ctx: ExecuteCtx,
      recipient: String,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn exec_burn_impl(
      mut ctx: ExecuteCtx,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn exec_mint_impl(
      mut ctx: ExecuteCtx,
      recipient: String,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn exec_send_impl(
      mut ctx: ExecuteCtx,
      contract: String,
      amount: i64,
      msg: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn query_balance_impl(
      mut ctx: QueryCtx,
      address: String
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(IfBalanceResponse { balance: 0 }))?);
    }
    pub fn query_token_info_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(
        to_json_binary(
          &(IfTokenInfoResponse {
            name: String::from("n"),
            symbol: String::from("s"),
            decimals: 6,
            total_supply: 0,
          })
        )?
      );
    }
    pub fn query_minter_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&None::<IfCw20::MinterResponse>)?);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct Coin {
      pub address: String,
      pub amount: Uint128,
    }
    #[cw_serde]
    pub struct MinterResponse {
      pub minter: String,
      pub cap: Option<Uint128>,
    }
    #[cw_serde]
    pub struct IfMinterData {
      pub minter: String,
      pub cap: Option<Uint128>,
    }
    #[cw_serde]
    pub struct IfBalanceResponse {
      pub balance: i64,
    }
    #[cw_serde]
    pub struct IfTokenInfoResponse {
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub total_supply: i64,
    }
    #[cw_serde]
    pub struct IfMinterResponseSig {
      pub minter: String,
      pub cap: Option<Uint128>,
    }
    #[cw_serde]
    pub struct BalanceResponse {
      pub balance: i64,
    }
    #[cw_serde]
    pub struct TokenInfoResponse {
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub total_supply: i64,
    }
    pub enum ContractEvent {}
    /// Opaque stub for unresolved external module `IfCw20`
    pub mod IfCw20 {
      pub type Coin = cosmwasm_std::Binary;
      pub type MinterResponse = cosmwasm_std::Binary;
    }
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

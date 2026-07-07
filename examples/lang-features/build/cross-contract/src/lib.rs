#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod cross_contract {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const TOKEN_ADDR: Item<String> = Item::new("token_addr");
    pub const MARKET_ID: Item<String> = Item::new("market_id");
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
      pub token_addr: String,
      pub market_id: String,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Spawn {
        code_id: u64,
        init_msg: Binary,
      },
      Payout {
        recipient: Addr,
        amount: Uint128,
      },
      SomethingElse {
        x: Uint128,
      },
      Receive {
        msg: CcReceiveMsg,
      },
      Settle {
        data: Binary,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Balances {
        addr: Addr,
        denom: String,
      },
      Decimals {
        denom: String,
      },
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
      instantiate_impl(ctx, msg.token_addr, msg.market_id)
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
        ExecuteMsg::Spawn { code_id, init_msg } =>
          exec_spawn_impl(ctx, code_id, init_msg),
        ExecuteMsg::Payout { recipient, amount } =>
          exec_payout_impl(ctx, recipient, amount),
        ExecuteMsg::SomethingElse { x } => exec_something_else_impl(ctx, x),
        ExecuteMsg::Receive { msg } => exec_receive_impl(ctx, msg),
        ExecuteMsg::Settle { data } => exec_settle_impl(ctx, data),
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
        QueryMsg::Balances { addr, denom } =>
          query_balances_impl(ctx, addr, denom),
        QueryMsg::Decimals { denom } => query_decimals_impl(ctx, denom),
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
    pub const CC_NAME: &str = "crates.io:lang-features-cross-contract";
    pub const CC_VERSION: &str = "0.0.1";
    pub const CW2: u64 = 0;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx,
      token_addr: String,
      market_id: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      TOKEN_ADDR.save(ctx.deps.storage, &token_addr)?;
      MARKET_ID.save(ctx.deps.storage, &market_id)?;
      cw2::set_contract_version(ctx.deps.storage, CC_NAME, CC_VERSION)?;
      _response = _response.add_attribute(
        "method",
        format!("{:?}", String::from("instantiate"))
      );
      _response = _response.add_attribute(
        "owner",
        format!("{:?}", ctx.info.sender.clone())
      );
      _response = _response.add_attribute(
        "method",
        format!("{:?}", String::from("instantiate_legacy"))
      );
      _response = _response.add_attribute(
        "owner",
        format!("{:?}", ctx.info.sender.clone())
      );
      Ok(_response)
    }
    pub fn exec_spawn_impl(
      mut ctx: ExecuteCtx,
      code_id: u64,
      init_msg: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      _response = _response.add_message(
        CosmosMsg::Wasm(WasmMsg::Instantiate {
          admin: None,
          code_id: code_id,
          msg: init_msg.clone(),
          funds: vec![],
          label: String::from("lp").to_string(),
        })
      );
      _response = _response.add_message(
        CosmosMsg::Wasm(WasmMsg::Execute {
          contract_addr: TOKEN_ADDR.load(ctx.deps.storage)?.to_string(),
          msg: init_msg.clone(),
          funds: vec![],
        })
      );
      Ok(_response)
    }
    pub fn exec_payout_impl(
      mut ctx: ExecuteCtx,
      recipient: Addr,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      _response = _response.add_message(
        CosmosMsg::Bank(BankMsg::Send {
          to_address: recipient.to_string(),
          amount: [
            Coin { amount: amount.clone(), denom: String::from("uusd") },
          ].to_vec(),
        })
      );
      _response = _response.add_message(
        CosmosMsg::Wasm(WasmMsg::Execute {
          contract_addr: TOKEN_ADDR.load(ctx.deps.storage)?.to_string(),
          msg: to_json_binary(
            &(cw20::Cw20ExecuteMsg::Transfer {
              recipient: recipient.to_string().to_string(),
              amount: amount,
            })
          )?,
          funds: vec![],
        })
      );
      todo!("exec! Exchange.#deposit($env.contract.address,");
      _response = _response.add_message(
        CosmosMsg::Wasm(WasmMsg::Execute {
          contract_addr: ctx.env.contract.address.to_string(),
          msg: to_json_binary(
            &(ExecuteMsg::SomethingElse { x: Uint128::new(1u128) })
          )?,
          funds: vec![],
        })
      );
      _response = _response.add_event(
        Event::new("cc_payout")
          .add_attribute("recipient", format!("{:?}", recipient))
          .add_attribute("amount", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_something_else_impl(
      mut ctx: ExecuteCtx,
      x: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn exec_receive_impl(
      mut ctx: ExecuteCtx,
      msg: CcReceiveMsg
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut contract_addr = ctx.info.sender.clone();
      let mut inner = cosmwasm_std::from_json::<CcHookMsg>(&msg.msg)?;
      if matches!(inner, CcHookMsg::WithdrawLiquidity { .. }) {
        _response = _response.add_message(
          CosmosMsg::Wasm(WasmMsg::Execute {
            contract_addr: TOKEN_ADDR.load(ctx.deps.storage)?.to_string(),
            msg: to_json_binary(
              &(cw20::Cw20ExecuteMsg::Burn { amount: msg.amount })
            )?,
            funds: vec![],
          })
        );
      }
      Ok(_response)
    }
    pub fn exec_settle_impl(
      mut ctx: ExecuteCtx,
      data: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut order_response = todo!("references undefined: Exchange");
      let mut results = todo!("?? on placeholder");
      Ok(_response)
    }
    pub fn query_balances_impl(
      mut ctx: QueryCtx,
      addr: Addr,
      denom: String
    ) -> Result<Binary, ContractError> {
      let mut bank_balance = ctx.deps.querier.query_balance(addr, denom)?;
      let mut info =
        ctx.deps.querier.query_wasm_smart::<cw20::TokenInfoResponse>(
          TOKEN_ADDR.load(ctx.deps.storage)?.clone(),
          &(cw20::Cw20QueryMsg::TokenInfo {})
        )?;
      let mut total_supply = ctx.deps.querier
        .query_wasm_smart::<cw20::TokenInfoResponse>(
          TOKEN_ADDR.load(ctx.deps.storage)?.clone(),
          &(cw20::Cw20QueryMsg::TokenInfo {})
        )?
        .total_supply.clone();
      let mut market = todo!("references undefined: Exchange");
      let mut own = from_json::<u8>(
        &query_decimals_impl(
          QueryCtx { deps: ctx.deps, env: ctx.env.clone() },
          denom.clone()
        )?
      )?;
      return Ok(to_json_binary(&bank_balance)?);
    }
    pub fn query_decimals_impl(
      mut ctx: QueryCtx,
      denom: String
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&6)?);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct CcReceiveMsg {
      pub sender: String,
      pub amount: Uint128,
      pub msg: Binary,
    }
    #[cw_serde]
    pub enum CcHookMsg {
      Swap {
        belief_price: Option<Decimal>,
        to: Option<Addr>,
      },
      WithdrawLiquidity,
    }
    impl CcHookMsg {
      pub fn belief_price(&self) -> Option<Decimal> {
        match self {
          CcHookMsg::Swap { belief_price, .. } => belief_price.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field belief_price on this variant of CcHookMsg"),
        }
      }
      pub fn to(&self) -> Option<Addr> {
        match self {
          CcHookMsg::Swap { to, .. } => to.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field to on this variant of CcHookMsg"),
        }
      }
    }
    pub enum ContractEvent {
      CcPayout {
        recipient: Addr,
        amount: Uint128,
      },
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

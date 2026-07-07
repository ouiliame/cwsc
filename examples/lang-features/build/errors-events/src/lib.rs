#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod errors_events {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const OWNER: Item<Addr> = Item::new("owner");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("EeMaxSpreadAssertion")] EeMaxSpreadAssertion {},
      #[error("EeInvalidZeroAmount")] EeInvalidZeroAmount {},
      #[error("EeUnauthorized")] EeUnauthorized {},
      #[error("EeInsufficientFunds")] EeInsufficientFunds {
        required: Uint128,
        available: Uint128,
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
      Transfer {
        recipient: Addr,
        amount: Uint128,
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
        ExecuteMsg::Transfer { recipient, amount } =>
          exec_transfer_impl(ctx, recipient, amount),
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
      OWNER.save(ctx.deps.storage, &ctx.info.sender.clone())?;
      _response = _response.add_attribute(
        "method",
        format!("{:?}", String::from("instantiate"))
      );
      _response = _response.add_attribute(
        "owner",
        format!("{:?}", ctx.info.sender.clone())
      );
      Ok(_response)
    }
    pub fn exec_transfer_impl(
      mut ctx: ExecuteCtx,
      recipient: Addr,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == Uint128::new(0u128) {
        return Err(ContractError::EeInvalidZeroAmount {});
      }
      if ctx.info.sender.clone() != OWNER.load(ctx.deps.storage)? {
        return Err(ContractError::EeUnauthorized {});
      }
      if amount > Uint128::new(100u128) {
        return Err(ContractError::EeInsufficientFunds {
          required: amount,
          available: Uint128::new(100u128),
        });
      }
      _response = _response.add_event(
        Event::new("ee_transfer")
          .add_attribute("from", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("to", format!("{:?}", recipient))
          .add_attribute("amount", format!("{:?}", amount))
      );
      _response = _response.add_event(
        Event::new("ee_swap")
          .add_attribute("value", format!("{:?}", String::from("sender")))
          .add_attribute("value", format!("{:?}", String::from("uusd")))
          .add_attribute("value", format!("{:?}", amount))
      );
      _response = _response.add_attribute(
        "action",
        format!("{:?}", String::from("transfer"))
      );
      _response = _response.add_attribute(
        "from",
        format!("{:?}", ctx.info.sender.clone())
      );
      _response = _response.add_attribute("to", format!("{:?}", recipient));
      _response = _response.add_attribute("amount", format!("{:?}", amount));
      Ok(_response)
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    pub enum ContractEvent {
      EeSwap {
        sender: String,
        offer: String,
        return_amount: Uint128,
      },
      EeTransfer {
        from: Addr,
        to: Addr,
        amount: Uint128,
      },
      EeProvideLiquidity {
        sender: String,
        receiver: String,
        share: String,
        refund_assets: [String; 2],
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

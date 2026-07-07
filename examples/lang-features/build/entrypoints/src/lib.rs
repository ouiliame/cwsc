#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod entrypoints {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const COUNT: Item<u32> = Item::new("count");
    pub const OWNER: Item<Addr> = Item::new("owner");
    pub const LAST_MEMO: Item<String> = Item::new("last_memo");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("Unauthorized")] Unauthorized {},
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
      pub count: Option<u32>,
      pub owner: Option<Addr>,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Increment {},
      Reset {
        count: Option<u32>,
      },
      Configure {
        memo: String,
        new_owner: Addr,
      },
      Receive {
        msg: EpReceiveMsg,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Count {},
      Memo {},
      Summary {
        verbose: bool,
      },
      Probe {
        msg: EpReceiveMsg,
      },
    }
    #[cw_serde]
    pub struct MigrateMsg {}
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
      instantiate_impl(ctx, msg.count, msg.owner)
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
        ExecuteMsg::Increment {} => exec_increment_impl(ctx),
        ExecuteMsg::Reset { count } => exec_reset_impl(ctx, count),
        ExecuteMsg::Configure { memo, new_owner } =>
          exec_configure_impl(ctx, memo, new_owner),
        ExecuteMsg::Receive { msg } => exec_receive_impl(ctx, msg),
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
        QueryMsg::Memo {} => query_memo_impl(ctx),
        QueryMsg::Summary { verbose } => query_summary_impl(ctx, verbose),
        QueryMsg::Probe { msg } => query_probe_impl(ctx, msg),
      }
    }
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn migrate(
      deps: DepsMut,
      env: Env,
      msg: MigrateMsg
    ) -> Result<Response, ContractError> {
      let ctx = MigrateCtx { deps, env };
      migrate_impl(ctx)
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
      count: Option<u32>,
      owner: Option<Addr>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      COUNT.save(ctx.deps.storage, &count.clone().unwrap_or(0))?;
      OWNER.save(
        ctx.deps.storage,
        &owner.clone().unwrap_or(ctx.info.sender.clone())
      )?;
      LAST_MEMO.save(ctx.deps.storage, &String::from("init"))?;
      Ok(_response)
    }
    pub fn exec_increment_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      COUNT.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c += 1;
          Ok(c)
        }
      )?;
      Ok(_response)
    }
    pub fn exec_reset_impl(
      mut ctx: ExecuteCtx,
      count: Option<u32>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if ctx.info.sender.clone() != OWNER.load(ctx.deps.storage)? {
        return Err(ContractError::Unauthorized {});
      }
      COUNT.save(ctx.deps.storage, &count.clone().unwrap_or(0))?;
      Ok(_response)
    }
    pub fn exec_configure_impl(
      mut ctx: ExecuteCtx,
      memo: String,
      new_owner: Addr
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      LAST_MEMO.save(ctx.deps.storage, &memo)?;
      OWNER.save(ctx.deps.storage, &new_owner)?;
      Ok(_response)
    }
    pub fn exec_receive_impl(
      mut ctx: ExecuteCtx,
      msg: EpReceiveMsg
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut contract_addr = ctx.info.sender.clone();
      let mut inner = cosmwasm_std::from_json::<EpHookMsg>(&msg.msg)?;
      if matches!(inner, EpHookMsg::Deposit { .. }) {
        COUNT.update(
          ctx.deps.storage,
          |mut c| -> StdResult<_> {
            c += 1;
            Ok(c)
          }
        )?;
      }
      Ok(_response)
    }
    pub fn query_count_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&COUNT.load(ctx.deps.storage)?)?);
    }
    pub fn query_memo_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&LAST_MEMO.load(ctx.deps.storage)?)?);
    }
    pub fn query_summary_impl(
      mut ctx: QueryCtx,
      verbose: bool
    ) -> Result<Binary, ContractError> {
      return Ok(
        to_json_binary(
          &(EpSummary {
            count: COUNT.load(ctx.deps.storage)?.clone(),
            memo: LAST_MEMO.load(ctx.deps.storage)?.clone(),
          })
        )?
      );
    }
    pub fn query_probe_impl(
      mut ctx: QueryCtx,
      msg: EpReceiveMsg
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&msg.amount)?);
    }
    pub fn migrate_impl(
      mut ctx: MigrateCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      LAST_MEMO.save(ctx.deps.storage, &String::from("migrated"))?;
      Ok(_response)
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct EpReceiveMsg {
      pub sender: String,
      pub amount: Uint128,
      pub msg: Binary,
    }
    #[cw_serde]
    pub struct EpSummary {
      pub count: u32,
      pub memo: String,
    }
    #[cw_serde]
    pub enum EpHookMsg {
      Deposit,
      Withdraw {
        amount: Uint128,
      },
    }
    impl EpHookMsg {
      pub fn amount(&self) -> Uint128 {
        match self {
          EpHookMsg::Withdraw { amount, .. } => amount.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field amount on this variant of EpHookMsg"),
        }
      }
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

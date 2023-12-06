pub mod kitchen_sink {
  pub mod state {
    use schemars::JsonSchema;
    use serde::{ Serialize, Deserialize };
    use cw_storage_plus::{ Item, Map };
    pub const A: Item<Int> = Item::new("a");
    pub const B: Item<String> = Item::new("b");
  }
  pub mod error {
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("ErrA")] ErrA {},
      #[error("ErrB")] ErrB {
        a: Int,
        b: String,
      },
    }
  }
  pub mod msg {
    use cosmwasm_schema::{ cw_serde, QueryResponses };
    use cosmwasm_std::*;
    #[cw_serde]
    pub struct InstantiateMsg {
      pub a: Int,
      pub b: String,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      execA {},
      execB {
        a: Int,
        b: String,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      queryA {},
      queryB {
        a: Int,
        b: String,
      },
    }
  }
  pub mod contract {
    use super::cws::*;
    use super::error::*;
    use super::msg::*;
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
      instantiate_impl(ctx, msg.a, msg.b)
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
        ExecuteMsg::execA {} => exec_execA_impl(ctx),
        ExecuteMsg::execB { a, b } => exec_execB_impl(ctx, msg.a, msg.b),
      }
    }
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      let ctx: QueryCtx = QueryCtx {
        deps: deps,
        env: env,
      };
      match msg {
        QueryMsg::queryA {} => to_json_binary(&query_queryA_impl(ctx)?),
        QueryMsg::queryB { a, b } =>
          to_json_binary(&query_queryB_impl(ctx, msg.a, msg.b)?),
      }
    }
  }
}

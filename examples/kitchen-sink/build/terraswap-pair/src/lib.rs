pub mod terraswap_pair {
  pub mod state {
    use schemars::JsonSchema;
    use serde::{ Serialize, Deserialize };
    use cw_storage_plus::{ Item, Map };
    pub const PAIR_INFO: Item<String> = Item::new("pair_info");
  }
  pub mod error {
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
    #[cw_serde]
    pub struct InstantiateMsg {
      pub name: String,
    }
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
      instantiate_impl(ctx, msg.name)
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
    pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
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
    use cosmwasm_std::*;
    pub fn instantiate_impl(
      ctx: InstantiateCtx,
      name: String
    ) -> Result<Response, ContractError> {
      /* TODO: Untranslated StringLit 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated Empty 

 */
      Ok(Response::new())
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    pub struct PairInfo {
      pub asset_infos: String /* [AssetInfo;2] */,
      pub contract_addr: String /* String */,
      pub liquidity_token: String /* String */,
      pub asset_decimals: String /* [U8;2] */,
    }
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
    }
    pub enum ContractEvent {
      ProvideLiquidity {
        sender: String /* String */,
        receiver: String /* String */,
        assets: String /* [Asset;2] */,
        share: String /* String */,
        refund_assets: String /* [Asset;2] */,
      },
      WithdrawLiquidity {
        sender: String /* String */,
        withdrawn_share: String /* String */,
        refund_assets: String /* [Asset;2] */,
      },
    }
  }
  pub mod cws {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    pub struct InstantiateCtx<'a> {
      pub deps: DepsMut<'a>,
      pub env: Env,
      pub info: MessageInfo,
    }
    pub struct ExecuteCtx<'a> {
      pub deps: DepsMut<'a>,
      pub env: Env,
      pub info: MessageInfo,
    }
    pub struct QueryCtx<'a> {
      pub deps: Deps<'a>,
      pub env: Env,
    }
    #[cw_serde]
    pub struct CWSQueryResponse<T>(pub T);
  }
}

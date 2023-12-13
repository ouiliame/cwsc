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
      pub asset_info: String /* [AssetInfo;2] */,
      pub token_code_id: String /* U64 */,
      pub asset_decimals: String /* [U8;2] */,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Receive {
        msg: String /* Cw20ReceiveMsg */,
      },
      ProvideLiquidity {
        assets: String /* [Asset;2] */,
        receiver: String /* String */,
        deadline: String /* U64 */,
        slippage_tolerance: String /* Dec */,
      },
      Swap {
        offer_asset: String /* Asset */,
        belief_price: String /* Dec */,
        max_spread: String /* Dec */,
        to: String /* Addr */,
        deadline: String /* U64 */,
      },
      WithdrawLiquidity {
        sender: String /* Addr */,
        amount: String /* U128 */,
        min_assets: String /* [Asset;2]? */,
        deadline: String /* U64 */,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Pair {},
      Pool {},
      Simulation {
        offer_asset: String /* Asset */,
      },
      ReverseSimulation {
        ask_asset: String /* Asset */,
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
      instantiate_impl(
        ctx,
        msg.asset_info,
        msg.token_code_id,
        msg.asset_decimals
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
        ExecuteMsg::Receive { msg } => exec_receive_impl(ctx, msg),
        ExecuteMsg::ProvideLiquidity {
          assets,
          receiver,
          deadline,
          slippage_tolerance,
        } =>
          exec_provide_liquidity_impl(
            ctx,
            assets,
            receiver,
            deadline,
            slippage_tolerance
          ),
        ExecuteMsg::Swap {
          offer_asset,
          belief_price,
          max_spread,
          to,
          deadline,
        } =>
          exec_swap_impl(
            ctx,
            offer_asset,
            belief_price,
            max_spread,
            to,
            deadline
          ),
        ExecuteMsg::WithdrawLiquidity {
          sender,
          amount,
          min_assets,
          deadline,
        } =>
          exec_withdraw_liquidity_impl(
            ctx,
            sender,
            amount,
            min_assets,
            deadline
          ),
      }
    }
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      let ctx: QueryCtx = QueryCtx {
        deps: deps,
        env: env,
      };
      match msg {
        QueryMsg::Pair {} => to_json_binary(&query_pair_impl(ctx)?),
        QueryMsg::Pool {} => to_json_binary(&query_pool_impl(ctx)?),
        QueryMsg::Simulation { offer_asset } =>
          to_json_binary(&query_simulation_impl(ctx, offer_asset)?),
        QueryMsg::ReverseSimulation { ask_asset } =>
          to_json_binary(&query_reverse_simulation_impl(ctx, ask_asset)?),
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
      asset_info: String /* [AssetInfo;2] */,
      token_code_id: String /* U64 */,
      asset_decimals: String /* [U8;2] */
    ) -> Result<Response, ContractError> {
      /* TODO: Untranslated MemberAssignStmt 

 */
      /* TODO: Untranslated ExecStmt 

 */
      Ok(Response::new())
    }
    pub fn exec_receive_impl(
      ctx: ExecuteCtx,
      msg: String /* Cw20ReceiveMsg */
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn exec_provide_liquidity_impl(
      ctx: ExecuteCtx,
      assets: String /* [Asset;2] */,
      receiver: String /* String */,
      deadline: String /* U64 */,
      slippage_tolerance: String /* Dec */
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn exec_swap_impl(
      ctx: ExecuteCtx,
      offer_asset: String /* Asset */,
      belief_price: String /* Dec */,
      max_spread: String /* Dec */,
      to: String /* Addr */,
      deadline: String /* U64 */
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn exec_withdraw_liquidity_impl(
      ctx: ExecuteCtx,
      sender: String /* Addr */,
      amount: String /* U128 */,
      min_assets: String /* [Asset;2]? */,
      deadline: String /* U64 */
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn query_pair_impl(
      ctx: QueryCtx
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
    pub fn query_pool_impl(
      ctx: QueryCtx
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
    pub fn query_simulation_impl(
      ctx: QueryCtx,
      offer_asset: String /* Asset */
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
    pub fn query_reverse_simulation_impl(
      ctx: QueryCtx,
      ask_asset: String /* Asset */
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
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

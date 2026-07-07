#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod terraswap_pair {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const PAIR_INFO: Item<PairInfo> = Item::new("pair_info");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("Unauthorized")] Unauthorized {},
      #[error("InvalidZeroAmount")] InvalidZeroAmount {},
      #[error("AssetMismatch")] AssetMismatch {},
      #[error("ConversionError")] ConversionError {},
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
      pub asset_infos: [AssetInfo; 2],
      pub token_code_id: u64,
      pub asset_decimals: [u8; 2],
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Receive {
        msg: CW20::receive,
      },
      ProvideLiquidity {
        assets: [Asset; 2],
        slippage_tolerance: Option<Decimal>,
        receiver: Option<String>,
      },
      Swap {
        sender: Addr,
        offer_asset: Asset,
        belief_price: Option<Decimal>,
        max_spread: Option<Decimal>,
        to: Option<Addr>,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Pair {},
      Pool {},
      Simulation {
        offer_asset: Asset,
      },
      ReverseSimulation {
        ask_asset: Asset,
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
        msg.asset_infos,
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
        ExecuteMsg::ProvideLiquidity { assets, slippage_tolerance, receiver } =>
          exec_provide_liquidity_impl(
            ctx,
            assets,
            slippage_tolerance,
            receiver
          ),
        ExecuteMsg::Swap {
          sender,
          offer_asset,
          belief_price,
          max_spread,
          to,
        } =>
          exec_swap_impl(
            ctx,
            sender,
            offer_asset,
            belief_price,
            max_spread,
            to
          ),
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
        QueryMsg::Pair {} => query_pair_impl(ctx),
        QueryMsg::Pool {} => query_pool_impl(ctx),
        QueryMsg::Simulation { offer_asset } =>
          query_simulation_impl(ctx, offer_asset),
        QueryMsg::ReverseSimulation { ask_asset } =>
          query_reverse_simulation_impl(ctx, ask_asset),
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
        1u64 => reply_register_pair_impl(ctx, msg),
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
    pub const CW20: u64 = 0;
    pub const U256: u64 = 0;
    pub const U128: u64 = 0;
    pub const COMMISSION_RATE: u64 = 3;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx,
      asset_infos: [AssetInfo; 2],
      token_code_id: u64,
      asset_decimals: [u8; 2]
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      todo!("state value for pair_info unavailable");
      /* TODO: InstantiateStmt */ Ok(_response)
    }
    pub fn exec_receive_impl(
      mut ctx: ExecuteCtx,
      msg: CW20::receive
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut msgbody = todo!("field msg on stub type CW20::receive");
      if todo!("type check against unresolved type CW20") {
        let mut belief_price = todo!("field msg on stub type CW20::receive");
        let mut authorized = false;
        let mut config = PAIR_INFO.load(ctx.deps.storage)?;
        todo!("for-iterable references undefined: pools");
        if !authorized {
          return Err(ContractError::Unauthorized {});
        }
        let mut to_addr: Option<String> = None::<String>;
        todo!("if-predicate references undefined: to");
        todo!("delegate_exec! references undefined: AssetInfo, contract_addr, max_spread");
      } else {
        todo!("references undefined: sender");
      }
      Ok(_response)
    }
    pub fn exec_provide_liquidity_impl(
      mut ctx: ExecuteCtx,
      assets: [Asset; 2],
      slippage_tolerance: Option<Decimal>,
      receiver: Option<String>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      assert_sent_native_token_balance(&mut ctx)?;
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut pools = query_pools(
        pair_info.clone(),
        ctx.env.contract.address.clone(),
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      let mut deposits = [
        todo!("?? on placeholder"),
        todo!("?? on placeholder"),
      ];
      todo!("iterate over unresolved value of type ()");
      let liquidity_token = todo!("destructure stub PairInfo");
      let mut total_share: u128 = todo!("references undefined: $.token_info");
      let mut share: Uint128 = Uint128::new(0u128);
      if total_share == 0 {
        let mut deposit0 = todo!("numeric conversion of placeholder");
        let mut deposit1 = todo!("numeric conversion of placeholder");
        todo!("assignment value for share unavailable");
      } else {
        todo!("assignment value for share unavailable");
      }
      if share == Uint128::new(0u128) {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut receiver = receiver
        .clone()
        .unwrap_or(ctx.info.sender.clone().to_string());
      todo!("emit! references undefined: ProvideLiquidity");
      todo!("exec! CW20(pair_info.liquidity_token).#mint(re");
      Ok(_response)
    }
    pub fn exec_swap_impl(
      mut ctx: ExecuteCtx,
      sender: Addr,
      offer_asset: Asset,
      belief_price: Option<Decimal>,
      max_spread: Option<Decimal>,
      to: Option<Addr>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      assert_sent_native_token_balance(&mut ctx)?;
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut pools = todo!("references undefined: $.env");
      let mut offer_pool: Option<Asset> = None::<Asset>;
      let mut ask_pool: Option<Asset> = None::<Asset>;
      let mut offer_decimal: u8 = 0;
      let mut ask_decimal: u8 = 0;
      if todo!("binop on placeholder") {
        todo!("assignment value for offer_pool unavailable");
        todo!("assignment value for ask_pool unavailable");
        let offer_decimal = todo!("offer_decimal");
        let ask_decimal = todo!("ask_decimal");
      }
      if todo!("type check against unresolved type AssetInfo") {
        return Err(ContractError::Unauthorized {});
      } else {
        if todo!("binop on placeholder") {
          todo!("assignment value for offer_pool unavailable");
          todo!("assignment value for ask_pool unavailable");
          let offer_decimal = todo!("offer_decimal");
          let ask_decimal = todo!("ask_decimal");
        } else {
          return Err(ContractError::AssetMismatch {});
        }
      }
      let mut offer_amount = todo!("field amount on stub type Asset");
      let return_amount = todo!("return_amount");
      let spread_amount = todo!("spread_amount");
      let commission_amount = todo!("commission_amount");
      let mut return_asset = todo!("construct stub type Asset");
      todo!("references undefined: $.assert_max_spread");
      let mut receiver = to.clone().unwrap_or(sender);
      if todo!("binop on placeholder") {
        if todo!("type check against unresolved type AssetInfo") {
          todo!("exec! references undefined: recipient, amount");
        } else {
          todo!("exec! Wasm.#send(to_address,Coin(amount,denom)");
        }
      }
      todo!("emit! references undefined: Swap");
      Ok(_response)
    }
    pub fn query_pair_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&PAIR_INFO.load(ctx.deps.storage)?)?);
    }
    pub fn query_pool_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let contract_addr = todo!("destructure stub PairInfo");
      let mut assets = query_pools(
        pair_info.clone(),
        todo!("placeholder contract_addr"),
        &(QueryCtx { deps: ctx.deps, env: ctx.env.clone() })
      )?;
      let total_share: u128 = todo!("total_share");
      return Ok(
        to_json_binary(
          &(PoolResponse {
            assets: todo!(),
            total_share: Uint128::new(total_share as u128),
          })
        )?
      );
    }
    pub fn query_simulation_impl(
      mut ctx: QueryCtx,
      offer_asset: Asset
    ) -> Result<Binary, ContractError> {
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let contract_addr = todo!("destructure stub PairInfo");
      let mut pools = query_pools(
        pair_info.clone(),
        todo!("placeholder contract_addr"),
        &(QueryCtx { deps: ctx.deps, env: ctx.env.clone() })
      )?;
      let mut offer_pool: Option<Asset> = None::<Asset>;
      let mut ask_pool: Option<Asset> = None::<Asset>;
      if todo!("binop on placeholder") {
        let offer_pool = todo!("offer_pool");
        let ask_pool = todo!("ask_pool");
      } else {
        if todo!("binop on placeholder") {
          let offer_pool = todo!("offer_pool");
          let ask_pool = todo!("ask_pool");
        } else {
          return Err(ContractError::AssetMismatch {});
        }
      }
      let return_amount = todo!("return_amount");
      let spread_amount = todo!("spread_amount");
      let commission_amount = todo!("commission_amount");
      return Ok(
        to_json_binary(
          &(SimulationResponse {
            return_amount: todo!(),
            spread_amount: todo!(),
            commission_amount: todo!(),
          })
        )?
      );
    }
    pub fn query_reverse_simulation_impl(
      mut ctx: QueryCtx,
      ask_asset: Asset
    ) -> Result<Binary, ContractError> {
      let contract_addr = todo!("destructure stub PairInfo");
      let mut pools = query_pools(
        PAIR_INFO.load(ctx.deps.storage)?,
        todo!("placeholder contract_addr"),
        &(QueryCtx { deps: ctx.deps, env: ctx.env.clone() })
      )?;
      let mut offer_pool: Option<Asset> = None::<Asset>;
      let mut ask_pool: Option<Asset> = None::<Asset>;
      if todo!("binop on placeholder") {
        let ask_pool = todo!("ask_pool");
        let offer_pool = todo!("offer_pool");
      } else {
        if todo!("binop on placeholder") {
          let ask_pool = todo!("ask_pool");
          let offer_pool = todo!("offer_pool");
        } else {
          return Err(ContractError::AssetMismatch {});
        }
      }
      let offer_amount = todo!("offer_amount");
      let spread_amount = todo!("spread_amount");
      let commission_amount = todo!("commission_amount");
      return Ok(
        to_json_binary(
          &(ReverseSimulationResponse {
            offer_amount: todo!(),
            spread_amount: todo!(),
            commission_amount: todo!(),
          })
        )?
      );
    }
    pub fn reply_register_pair_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let tmp_pair_info = todo!("undeclared state field tmp_pair_info");
      let mut response = todo!("references undefined: parse_response");
      /* TODO: InstantiateStmt */ let mut pair_contract = todo!("address");
      let mut pair_info = todo!("references undefined: TerraswapPair");
      todo!("references undefined: PairInfo");
      Ok(_response)
    }
    pub fn query_pools(
      pair_info: PairInfo,
      addr: Addr,
      ctx: &QueryCtx
    ) -> Result<(), ContractError> {
      todo!("call on placeholder");
      Ok(())
    }
    pub fn query_pool(
      asset_info: AssetInfo,
      addr: Addr,
      ctx: &QueryCtx
    ) -> Result<Uint128, ContractError> {
      if todo!("type check against unresolved type AssetInfo") {
        let mut res = todo!("query! Bank.#balance(asset_info.contract_addr,$");
        todo!("balance");
      } else {
        if todo!("type check against unresolved type AssetInfo") {
          let mut res = todo!("query! Bank.#balance(addr,asset_info.denom)");
          todo!("amount");
        } else {
          0;
        }
      }
      todo!("helper fn")
    }
    pub fn assert_sent_native_token_balance(
      ctx: &mut ExecuteCtx
    ) -> Result<(), ContractError> {
      todo!("for-iterable references undefined: assets");
      Ok(())
    }
    pub fn compute_swap(
      offer_pool: Uint128,
      ask_pool: Uint128,
      offer_amount: Uint128
    ) -> Result<[Uint128; 3], ContractError> {
      let mut offer_pool = offer_pool;
      let mut ask_pool = ask_pool;
      let mut offer_amount = offer_amount;
      let mut commission_rate = COMMISSION_RATE.to_string()
        .parse::<Decimal>()
        .map_err(|e| StdError::generic_err(e.to_string()))?;
      let mut cp = offer_pool
        .checked_mul(ask_pool)
        .map_err(|e| StdError::generic_err(e.to_string()))?;
      let mut return_amount =
        Decimal::checked_from_ratio(ask_pool, 1u128).map_err(|e|
          StdError::generic_err(e.to_string())
        )? -
        Decimal::from_ratio(
          Decimal::checked_from_ratio(cp, offer_pool + offer_amount).map_err(|e|
            StdError::generic_err(e.to_string())
          )? * Uint128::new(1u128),
          1u128
        );
      let mut spread_amount =
        Decimal::from_ratio(
          offer_amount *
            Decimal::checked_from_ratio(ask_pool, offer_pool).map_err(|e|
              StdError::generic_err(e.to_string())
            )?,
          1u128
        ) - return_amount;
      let mut commission_amount = return_amount * commission_rate;
      let mut return_amount = return_amount - commission_amount;
      return Ok([
        return_amount.to_uint_floor(),
        spread_amount.to_uint_floor(),
        commission_amount.to_uint_floor(),
      ]);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    pub enum ContractEvent {}
    #[cw_serde]
    pub struct PoolResponse {
      pub assets: Vec<Asset>,
      pub total_share: Uint128,
    }
    #[cw_serde]
    pub struct SimulationResponse {
      pub return_amount: Uint128,
      pub spread_amount: Uint128,
      pub commission_amount: Uint128,
    }
    #[cw_serde]
    pub struct ReverseSimulationResponse {
      pub offer_amount: Uint128,
      pub spread_amount: Uint128,
      pub commission_amount: Uint128,
    }
    #[cw_serde]
    pub struct MinterResponse {
      pub minter: Addr,
      pub cap: Option<Uint128>,
    }
    /// Opaque stub for unresolved external type `AssetInfo`
    pub type AssetInfo = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external type `Asset`
    pub type Asset = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external type `PairInfo`
    pub type PairInfo = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external module `CW20`
    pub mod CW20 {
      pub type receive = cosmwasm_std::Binary;
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

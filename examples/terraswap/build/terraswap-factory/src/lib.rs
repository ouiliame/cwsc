#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod terraswap_factory {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const CONFIG: Item<Config> = Item::new("config");
    pub const TMP_PAIR_INFO: Item<TmpPairInfo> = Item::new("tmp_pair_info");
    pub const PAIRS: Map<String, Option<PairInfo>> = Map::new("pairs");
    pub const ALLOW_NATIVE_TOKENS: Map<String, Option<u8>> = Map::new(
      "allow_native_tokens"
    );
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
      pub pair_code_id: u64,
      pub token_code_id: u64,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      UpdateConfig {
        owner: Option<String>,
        token_code_id: Option<u64>,
        pair_code_id: Option<u64>,
      },
      CreatePair {
        asset_infos: [AssetInfo; 2],
      },
      AddNativeTokenDecimals {
        denom: String,
        decimals: u8,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Config {},
      Pair {
        asset_infos: [AssetInfo; 2],
      },
      NativeTokenDecimal {
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
      instantiate_impl(ctx, msg.pair_code_id, msg.token_code_id)
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
        ExecuteMsg::UpdateConfig { owner, token_code_id, pair_code_id } =>
          exec_update_config_impl(ctx, owner, token_code_id, pair_code_id),
        ExecuteMsg::CreatePair { asset_infos } =>
          exec_create_pair_impl(ctx, asset_infos),
        ExecuteMsg::AddNativeTokenDecimals { denom, decimals } =>
          exec_add_native_token_decimals_impl(ctx, denom, decimals),
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
        QueryMsg::Config {} => query_config_impl(ctx),
        QueryMsg::Pair { asset_infos } => query_pair_impl(ctx, asset_infos),
        QueryMsg::NativeTokenDecimal { denom } =>
          query_native_token_decimal_impl(ctx, denom),
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
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx,
      pair_code_id: u64,
      token_code_id: u64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      todo!("references undefined: Config");
      Ok(_response)
    }
    pub fn exec_update_config_impl(
      mut ctx: ExecuteCtx,
      owner: Option<String>,
      token_code_id: Option<u64>,
      pair_code_id: Option<u64>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if todo!("binop on placeholder") {
        return Err(ContractError::Unauthorized {});
      }
      if owner.is_some() {
        let owner = owner.clone().unwrap();
        todo!("field owner on stub state type Config");
      }
      if token_code_id.is_some() {
        let token_code_id = token_code_id.clone().unwrap();
        todo!("undeclared state field token_code_id");
      }
      if pair_code_id.is_some() {
        let pair_code_id = pair_code_id.clone().unwrap();
        todo!("undeclared state field pair_code_id");
      }
      _response = _response.add_event(Event::new("update_config"));
      Ok(_response)
    }
    pub fn exec_create_pair_impl(
      mut ctx: ExecuteCtx,
      asset_infos: [AssetInfo; 2]
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if asset_infos[0 as usize].clone() == asset_infos[1 as usize].clone() {
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("same asset"))
          )
        );
      }
      let mut asset_1_decimal = query_decimals(
        ctx.env.contract.address.clone(),
        asset_infos[0 as usize].clone()
      )?;
      let mut asset_2_decimal = query_decimals(
        ctx.env.contract.address.clone(),
        asset_infos[1 as usize].clone()
      )?;
      let mut asset_decimals = [asset_1_decimal, asset_2_decimal];
      let mut pair_key =
        format!("{}{}", (asset_infos[0 as usize].clone()).to_string(), (asset_infos[1 as usize].clone()).to_string());
      if todo!("in-check on placeholder") {
        return Err(
          ContractError::StdError(
            StdError::generic_err(String::from("Pair already exists"))
          )
        );
      }
      todo!("state value for tmp_pair_info unavailable");
      todo!("emit! references undefined: CreatePair");
      /* TODO: InstantiateStmt */ Ok(_response)
    }
    pub fn exec_add_native_token_decimals_impl(
      mut ctx: ExecuteCtx,
      denom: String,
      decimals: u8
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if todo!("binop on placeholder") {
        return Err(ContractError::Unauthorized {});
      }
      let mut balance = ctx.deps.querier.query_balance(
        ctx.env.contract.address.clone(),
        denom
      )?;
      if balance.amount == Uint128::new(0u128) {
        return Err(
          ContractError::StdError(
            StdError::generic_err(
              String::from(
                "A balance greater than zero is required by the factory for verification"
              )
            )
          )
        );
      }
      ALLOW_NATIVE_TOKENS.save(
        ctx.deps.storage,
        denom.clone(),
        &Some(decimals)
      )?;
      todo!("emit! references undefined: AddAllowNativeToken");
      Ok(_response)
    }
    pub fn query_config_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&CONFIG.load(ctx.deps.storage)?)?);
    }
    pub fn query_pair_impl(
      mut ctx: QueryCtx,
      asset_infos: [AssetInfo; 2]
    ) -> Result<Binary, ContractError> {
      let mut pairs = todo!("map key type mismatch for pairs");
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_native_token_decimal_impl(
      mut ctx: QueryCtx,
      denom: String
    ) -> Result<Binary, ContractError> {
      let mut decimals = ALLOW_NATIVE_TOKENS.load(
        ctx.deps.storage,
        denom.clone()
      )?.unwrap();
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn reply_post_instantiate_impl(
      mut ctx: ReplyCtx,
      msg: Reply
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut tmp_pair_info = TMP_PAIR_INFO.load(ctx.deps.storage)?;
      let mut response = todo!("parse_response! Wasm.Instantiate");
      let mut pair_contract = todo!("address");
      let mut pair_info = todo!("references undefined: TerraswapPair");
      todo!("references undefined: PairInfo");
      todo!("emit! references undefined: PostInstantiate");
      Ok(_response)
    }
    pub fn query_decimals(
      account_addr: Addr,
      asset_info: AssetInfo
    ) -> Result<u8, ContractError> {
      if todo!("type check against unresolved type AssetInfo") {
        let contract_addr = todo!("destructure stub AssetInfo");
        let mut token_info = todo!("query! CW20(asset_info).#token_info()");
        todo!("placeholder-return");
      } else {
        let mut res = todo!("references undefined: $.native_token_decimals");
        todo!("placeholder-return");
      }
      todo!("helper fn")
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    pub enum ContractEvent {
      UpdateConfig {},
    }
    /// Opaque stub for unresolved external type `AssetInfo`
    pub type AssetInfo = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external type `Config`
    pub type Config = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external type `TmpPairInfo`
    pub type TmpPairInfo = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external type `PairInfo`
    pub type PairInfo = cosmwasm_std::Binary;
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

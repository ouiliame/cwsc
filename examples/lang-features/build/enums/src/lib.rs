#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod enums {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const ASSET: Item<EnAssetInfo> = Item::new("asset");
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
    pub struct InstantiateMsg {}
    #[cw_serde]
    pub enum ExecuteMsg {}
    #[cw_serde]
    pub enum QueryMsg {
      Asset {},
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
        QueryMsg::Asset {} => query_asset_impl(ctx),
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
      let mut a = EnAssetInfo::Token {
        contract_addr: String::from("terra1abc"),
      };
      let mut b = EnAssetInfo::Token {
        contract_addr: String::from("terra1abc"),
      };
      let mut c = EnAssetInfo::NativeToken { denom: String::from("uusd") };
      let mut o = EnOrderType::BuyAtomic;
      let mut l = EnOrderType::Limit {
        price: "1.5".parse::<Decimal>().unwrap(),
        quantity: "2.0".parse::<Decimal>().unwrap(),
      };
      let mut f = EnFruit::Apple { x: String::from("red"), b: true.clone() };
      let mut g = EnFruit::Orange { peel: 3 };
      let mut j = EnMaybe::Just { value: 42 };
      if matches!(a, EnAssetInfo::Token { .. }) {
        ASSET.save(ctx.deps.storage, &a)?;
      }
      if matches!(o, EnOrderType::BuyAtomic { .. }) {
        ASSET.save(ctx.deps.storage, &b)?;
      }
      if !matches!(a, EnAssetInfo::NativeToken { .. }) {
        ASSET.save(ctx.deps.storage, &a)?;
      }
      Ok(_response)
    }
    pub fn query_asset_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&ASSET.load(ctx.deps.storage)?)?);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub enum EnFruit {
      Apple {
        x: String,
        b: bool,
      },
      Orange {
        peel: i64,
      },
      Banana,
    }
    #[cw_serde]
    pub enum EnOrderType {
      BuyAtomic,
      SellAtomic,
      Limit {
        price: Decimal,
        quantity: Decimal,
      },
    }
    #[cw_serde]
    pub enum EnShapes {
      StructEmpty {},
      ParenEmpty {},
      TupleVariant(i64, String),
      TupleEmpty(),
      Unit,
    }
    #[cw_serde]
    pub enum EnMaybe<T> {
      Just {
        value: T,
      },
      Nothing,
    }
    #[cw_serde]
    pub enum EnAssetInfo {
      Token {
        contract_addr: String,
      },
      NativeToken {
        denom: String,
      },
    }
    impl EnFruit {
      pub fn x(&self) -> String {
        match self {
          EnFruit::Apple { x, .. } => x.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field x on this variant of EnFruit"),
        }
      }
      pub fn b(&self) -> bool {
        match self {
          EnFruit::Apple { b, .. } => b.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field b on this variant of EnFruit"),
        }
      }
      pub fn peel(&self) -> i64 {
        match self {
          EnFruit::Orange { peel, .. } => peel.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field peel on this variant of EnFruit"),
        }
      }
    }
    impl EnOrderType {
      pub fn price(&self) -> Decimal {
        match self {
          EnOrderType::Limit { price, .. } => price.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field price on this variant of EnOrderType"),
        }
      }
      pub fn quantity(&self) -> Decimal {
        match self {
          EnOrderType::Limit { quantity, .. } => quantity.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field quantity on this variant of EnOrderType"),
        }
      }
    }
    impl<T: Clone> EnMaybe<T> {
      pub fn value(&self) -> T {
        match self {
          EnMaybe::Just { value, .. } => value.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field value on this variant of EnMaybe"),
        }
      }
    }
    impl EnAssetInfo {
      pub fn contract_addr(&self) -> String {
        match self {
          EnAssetInfo::Token { contract_addr, .. } => contract_addr.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field contract_addr on this variant of EnAssetInfo"),
        }
      }
      pub fn denom(&self) -> String {
        match self {
          EnAssetInfo::NativeToken { denom, .. } => denom.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field denom on this variant of EnAssetInfo"),
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

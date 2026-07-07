#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod types {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const P_U8: Item<u8> = Item::new("p_u8");
    pub const P_U16: Item<u16> = Item::new("p_u16");
    pub const P_U32: Item<u32> = Item::new("p_u32");
    pub const P_U64: Item<u64> = Item::new("p_u64");
    pub const P_U128: Item<Uint128> = Item::new("p_u128");
    pub const P_U256: Item<Uint256> = Item::new("p_u256");
    pub const P_INT: Item<i64> = Item::new("p_int");
    pub const P_STRING: Item<String> = Item::new("p_string");
    pub const P_BOOL: Item<bool> = Item::new("p_bool");
    pub const P_ADDR: Item<Addr> = Item::new("p_addr");
    pub const P_ADDRESS: Item<Addr> = Item::new("p_address");
    pub const P_DEC: Item<Decimal> = Item::new("p_dec");
    pub const P_BINARY: Item<Binary> = Item::new("p_binary");
    pub const P_COIN: Item<Coin> = Item::new("p_coin");
    pub const OPT: Item<Option<u32>> = Item::new("opt");
    pub const ARR: Item<[u8; 2]> = Item::new("arr");
    pub const LST: Item<Vec<Uint128>> = Item::new("lst");
    pub const TBL: Item<HashMap<String, Uint128>> = Item::new("tbl");
    pub const NESTED: Item<HashMap<Addr, HashMap<String, Uint128>>> = Item::new(
      "nested"
    );
    pub const TUP: Item<(u32, String)> = Item::new("tup");
    pub const TUP_BRACK: Item<(u32, String)> = Item::new("tup_brack");
    pub const ALIASED: Item<TypesAmount> = Item::new("aliased");
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
      Optional {},
      Listed {},
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
        QueryMsg::Optional {} => query_optional_impl(ctx),
        QueryMsg::Listed {} => query_listed_impl(ctx),
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
    pub const U128: u64 = 0;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      P_U32.save(ctx.deps.storage, &1)?;
      OPT.save(ctx.deps.storage, &None::<u32>)?;
      P_STRING.save(ctx.deps.storage, &String::from("hello"))?;
      P_BOOL.save(ctx.deps.storage, &true)?;
      let mut maybe: Option<u32> = None::<u32>;
      let mut fixed: [u8; 2] = [1, 2];
      let mut both: (u32, String) = (7, String::from("seven"));
      let mut both_brack: (u32, String) = (7, String::from("seven"));
      let mut x = String::from("100")
        .parse::<Uint128>()
        .map_err(|e| StdError::generic_err(e.to_string()))?;
      let mut y = Decimal::from_ratio(1u128, 1u128);
      let mut z = (42).to_string();
      let mut a = ctx.deps.api.addr_validate(
        String::from("terra1...").as_str()
      )?;
      let mut p = TypesInlinePair { a: 1, b: 2 };
      Ok(_response)
    }
    pub fn query_optional_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&OPT.load(ctx.deps.storage)?)?);
    }
    pub fn query_listed_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&LST.load(ctx.deps.storage)?)?);
    }
    pub fn takes_alias(v: TypesAmount, s: Slot) -> TypesAmount {
      return v;
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct TypesInlinePair<T> {
      pub a: T,
      pub b: T,
    }
    pub enum ContractEvent {}
    pub type Slot = u16;
    pub type TypesAmount = Uint128;
    pub type TypesPair<T> = TypesInlinePair<T>;
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

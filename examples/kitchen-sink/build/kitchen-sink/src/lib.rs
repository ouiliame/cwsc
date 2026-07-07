#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod kitchen_sink {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const A: Item<i64> = Item::new("a");
    pub const B: Item<String> = Item::new("b");
    pub const C: Item<InlineA> = Item::new("c");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("ErrA")] ErrA {},
      #[error("ErrB")] ErrB {
        a: i64,
        b: String,
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
    pub struct InstantiateMsg {
      pub a: i64,
      pub b: String,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      ExecA {},
      ExecB {
        a: i64,
        b: String,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      QueryA {},
      QueryB {
        a: i64,
        b: String,
      },
      Bob {
        a: String,
        b: String,
        c: String,
      },
      Dan {
        a: String,
        b: InlineC,
        c: String,
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
        ExecuteMsg::ExecA {} => exec_exec_a_impl(ctx),
        ExecuteMsg::ExecB { a, b } => exec_exec_b_impl(ctx, a, b),
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
        QueryMsg::QueryA {} => query_query_a_impl(ctx),
        QueryMsg::QueryB { a, b } => query_query_b_impl(ctx, a, b),
        QueryMsg::Bob { a, b, c } => query_bob_impl(ctx, a, b, c),
        QueryMsg::Dan { a, b, c } => query_dan_impl(ctx, a, b, c),
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
      mut ctx: InstantiateCtx,
      a: i64,
      b: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut var1 = true;
      let mut var2 = StructB { a: 1, b: String::from("") };
      var1 = false;
      var2.b = String::from("b");
      todo!("undeclared state field map_a");
      if var1 {
        var2;
      } else {
        String::from("Will");
      }
      return Err(ContractError::StdError(StdError::generic_err("None")));
      return Ok(_response);
      todo!("exec! $.#exec_a()");
      /* TODO: InstantiateStmt */ _response = _response.add_event(
        Event::new("event_a")
      );
      Ok(_response)
    }
    pub fn exec_exec_a_impl(
      mut ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn exec_exec_b_impl(
      mut ctx: ExecuteCtx,
      a: i64,
      b: String
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();

      Ok(_response)
    }
    pub fn query_query_a_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_query_b_impl(
      mut ctx: QueryCtx,
      a: i64,
      b: String
    ) -> Result<Binary, ContractError> {
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_bob_impl(
      mut ctx: QueryCtx,
      a: String,
      b: String,
      c: String
    ) -> Result<Binary, ContractError> {
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_dan_impl(
      mut ctx: QueryCtx,
      a: String,
      b: InlineC,
      c: String
    ) -> Result<Binary, ContractError> {
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn fn_a() -> () {}
    pub fn fn_b(a: i64, b: String) -> () {}
    pub fn fn_c() -> Result<(), ContractError> {
      Ok(())
    }
    pub fn fn_d(a: i64, b: String) -> Result<(), ContractError> {
      Ok(())
    }
    pub fn fn_e() -> () {}
    pub fn fn_f<T>(x: T) -> () {}
    pub fn fn_g() -> Result<(), ContractError> {
      Ok(())
    }
    pub fn fn_h<T>(x: T) -> Result<(), ContractError> {
      Ok(())
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct InlineA {}
    #[cw_serde]
    pub struct StructA {}
    #[cw_serde]
    pub struct StructB {
      pub a: i64,
      pub b: String,
    }
    #[cw_serde]
    pub struct StructC {}
    #[cw_serde]
    pub struct StructD {
      pub a: i64,
      pub b: String,
    }
    #[cw_serde]
    pub struct StructE<T, U> {
      pub a: T,
      pub b: U,
    }
    #[cw_serde]
    pub struct InlineB<T> {
      pub a: T,
    }
    #[cw_serde]
    pub struct InlineC {}
    #[cw_serde]
    pub struct TupA();
    #[cw_serde]
    pub struct TupB(pub i64, pub String);
    #[cw_serde]
    pub struct TupC<T>(pub T, pub i64, pub T);
    #[cw_serde]
    pub struct UnitA;
    #[cw_serde]
    pub struct UnitB;
    #[cw_serde]
    pub enum EnumA {
      StructVariantA {},
      StructVariantB {
        a: i64,
        b: String,
      },
      StructVariantC {},
      StructVariantD {
        a: i64,
        b: String,
      },
      TupleVariantA(),
      TupleVariantB(i64, String),
      UnitVariantA,
      UnitVariantB,
    }
    impl EnumA {
      pub fn a(&self) -> i64 {
        match self {
          EnumA::StructVariantB { a, .. } => a.clone(),
          EnumA::StructVariantD { a, .. } => a.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field a on this variant of EnumA"),
        }
      }
      pub fn b(&self) -> String {
        match self {
          EnumA::StructVariantB { b, .. } => b.clone(),
          EnumA::StructVariantD { b, .. } => b.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field b on this variant of EnumA"),
        }
      }
    }
    pub enum ContractEvent {
      EventA {},
      EventB {
        a: i64,
        b: String,
      },
    }
    pub type TypeAliasA = ();
    pub type TypeAliasB<T> = InlineB<T>;
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

pub mod kitchen_sink {
  pub mod state {
    use schemars::JsonSchema;
    use serde::{ Serialize, Deserialize };
    use cw_storage_plus::{ Item, Map };
    pub const A: Item<Todo> = Item::new("a");
    pub const B: Item<Todo> = Item::new("b");
    pub const C: Item<Todo> = Item::new("c");
  }
  pub mod error {
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("ErrA")] ErrA {},
      #[error("ErrB")] ErrB {
        a: TODO,
        b: TODO,
      },
    }
  }
  pub mod msg {
    use cosmwasm_schema::{ cw_serde, QueryResponses };
    use cosmwasm_std::*;
    #[cw_serde]
    pub struct InstantiateMsg {
      pub a: TODO,
      pub b: TODO,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      ExecA {},
      ExecB {
        a: TODO,
        b: TODO,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      QueryA {},
      QueryB {
        a: TODO,
        b: TODO,
      },
      Bob {
        a: TODO,
        b: TODO,
        c: TODO,
      },
      Dan {
        a: TODO,
        b: TODO,
        c: TODO,
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
        ExecuteMsg::ExecA {} => exec_ExecA_impl(ctx),
        ExecuteMsg::ExecB { a, b } => exec_ExecB_impl(ctx, msg.a, msg.b),
      }
    }
    #[cfg_attr(not(feature = "library"), entry_point)]
    pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      let ctx: QueryCtx = QueryCtx {
        deps: deps,
        env: env,
      };
      match msg {
        QueryMsg::QueryA {} => to_json_binary(&query_query_a_impl(ctx)?),
        QueryMsg::QueryB { a, b } =>
          to_json_binary(&query_query_b_impl(ctx, msg.a, msg.b)?),
        QueryMsg::Bob { a, b, c } =>
          to_json_binary(&query_bob_impl(ctx, msg.a, msg.b, msg.c)?),
        QueryMsg::Dan { a, b, c } =>
          to_json_binary(&query_dan_impl(ctx, msg.a, msg.b, msg.c)?),
      }
    }
  }
  pub mod implementation {
    use super::cws::*;
    use super::error::*;
    use super::msg::*;
    use super::state::*;
    pub fn instantiate_impl(
      ctx: InstantiateCtx,
      a: TODO,
      b: TODO
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn exec_exec_a_impl(
      ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn exec_exec_b_impl(
      ctx: ExecuteCtx,
      a: TODO,
      b: TODO
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn query_query_a_impl(ctx: QueryCtx) -> StdResult<Binary> {
      Ok(to_binary(msg))
    }
    pub fn query_query_b_impl(
      ctx: QueryCtx,
      a: TODO,
      b: TODO
    ) -> StdResult<Binary> {
      Ok(to_binary(msg))
    }
    pub fn query_bob_impl(
      ctx: QueryCtx,
      a: TODO,
      b: TODO,
      c: TODO
    ) -> StdResult<Binary> {
      Ok(to_binary(msg))
    }
    pub fn query_dan_impl(
      ctx: QueryCtx,
      a: TODO,
      b: TODO,
      c: TODO
    ) -> StdResult<Binary> {
      Ok(to_binary(msg))
    }
  }
  pub mod types {
    pub struct InlineA {}
    pub struct InlineC {}
    pub struct StructA {}
    pub struct StructB {
      pub a: TODO,
      pub b: TODO,
    }
    pub struct StructC {}
    pub struct StructD {
      pub a: TODO,
      pub b: TODO,
    }
    pub struct StructE {
      pub a: TODO,
      pub b: TODO,
    }
    pub struct TupA();
    pub struct TupB(pub TODO, pub TODO);
    pub struct TupC(pub TODO, pub TODO, pub TODO);
    pub struct UnitA;
    pub struct UnitB;
    pub struct InlineB {
      pub a: TODO,
    }
    pub enum EnumA {
      StructVariantA {},
      StructVariantB {
        a: TODO,
        b: TODO,
      },
      StructVariantC {},
      StructVariantD {
        a: TODO,
        b: TODO,
      },
      TupleVariantA(),
      TupleVariantB(TODO, TODO),
      UnitVariantA,
      UnitVariantB,
    }
    pub type TypeAliasA = TODO;
    pub type TypeAliasB = TODO;
    #[cw_serde]
    pub struct InstantiateMsg {
      pub a: TODO,
      pub b: TODO,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      ExecA {},
      ExecB {
        a: TODO,
        b: TODO,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      QueryA {},
      QueryB {
        a: TODO,
        b: TODO,
      },
      Bob {
        a: TODO,
        b: TODO,
        c: TODO,
      },
      Dan {
        a: TODO,
        b: TODO,
        c: TODO,
      },
    }
    pub enum ContractError {
      ErrA {},
      ErrB {
        a: TODO,
        b: TODO,
      },
    }
    pub enum ContractEvent {
      EventA {},
      EventB {
        a: TODO,
        b: TODO,
      },
    }
  }
  pub mod functions {
    pub fn fn_a() -> TODO {}
    pub fn fn_b() -> TODO {}
    pub fn fn_c() -> TODO {}
    pub fn fn_d() -> TODO {}
    pub fn fn_e() -> TODO {}
    pub fn fn_f() -> TODO {}
    pub fn fn_g() -> TODO {}
    pub fn fn_h() -> TODO {}
  }
}

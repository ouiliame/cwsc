pub mod kitchen_sink {
  pub mod state {
    use schemars::JsonSchema;
    use serde::{ Serialize, Deserialize };
    use cw_storage_plus::{ Item, Map };
    pub const A: Item<String> = Item::new("a");
    pub const B: Item<String> = Item::new("b");
    pub const C: Item<String> = Item::new("c");
  }
  pub mod error {
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("ErrA")] ErrA {},
      #[error("ErrB")] ErrB {
        a: String /* Int */,
        b: String /* String */,
      },
    }
  }
  pub mod msg {
    use cosmwasm_schema::{ cw_serde, QueryResponses };
    use cosmwasm_std::*;
    #[cw_serde]
    pub struct InstantiateMsg {
      pub a: String /* Int */,
      pub b: String /* String */,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      ExecA {},
      ExecB {
        a: String /* Int */,
        b: String /* String */,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      QueryA {},
      QueryB {
        a: String /* Int */,
        b: String /* String */,
      },
      Bob {
        a: String /* String */,
        b: String /* String */,
        c: String /* String */,
      },
      Dan {
        a: String /* String */,
        b: String /* structInlineC{} */,
        c: String /* String */,
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
    pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      let ctx: QueryCtx = QueryCtx {
        deps: deps,
        env: env,
      };
      match msg {
        QueryMsg::QueryA {} => to_json_binary(&query_query_a_impl(ctx)?),
        QueryMsg::QueryB { a, b } =>
          to_json_binary(&query_query_b_impl(ctx, a, b)?),
        QueryMsg::Bob { a, b, c } =>
          to_json_binary(&query_bob_impl(ctx, a, b, c)?),
        QueryMsg::Dan { a, b, c } =>
          to_json_binary(&query_dan_impl(ctx, a, b, c)?),
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
      a: String /* Int */,
      b: String /* String */
    ) -> Result<Response, ContractError> {
      /* TODO: Untranslated LetStmt 

 */
      /* TODO: Untranslated LetStmt 

 */
      /* TODO: Untranslated ConstStmt 

 */
      /* TODO: Untranslated AssignStmt 

 */
      /* TODO: Untranslated MemberAssignStmt 

 */
      /* TODO: Untranslated IndexAssignStmt 

 */
      /* TODO: Untranslated IfExpr 

 */
      /* TODO: Untranslated FailStmt 

 */
      /* TODO: Untranslated ReturnStmt 

 */
      /* TODO: Untranslated ExecStmt 

 */
      /* TODO: Untranslated InstantiateStmt 

 */
      /* TODO: Untranslated EmitStmt 

 */
      Ok(Response::new())
    }
    pub fn exec_exec_a_impl(
      ctx: ExecuteCtx
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn exec_exec_b_impl(
      ctx: ExecuteCtx,
      a: String /* Int */,
      b: String /* String */
    ) -> Result<Response, ContractError> {
      Ok(Response::new())
    }
    pub fn query_query_a_impl(
      ctx: QueryCtx
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
    pub fn query_query_b_impl(
      ctx: QueryCtx,
      a: String /* Int */,
      b: String /* String */
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
    pub fn query_bob_impl(
      ctx: QueryCtx,
      a: String /* String */,
      b: String /* String */,
      c: String /* String */
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
    pub fn query_dan_impl(
      ctx: QueryCtx,
      a: String /* String */,
      b: String /* structInlineC{} */,
      c: String /* String */
    ) -> StdResult<CWSQueryResponse<String>> {
      Ok(CWSQueryResponse(String::from("TODO")))
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    pub struct InlineA {}
    pub struct InlineC {}
    pub struct StructA {}
    pub struct StructB {
      pub a: String /* Int */,
      pub b: String /* String */,
    }
    pub struct StructC {}
    pub struct StructD {
      pub a: String /* Int */,
      pub b: String /* String */,
    }
    pub struct StructE {
      pub a: String /* %T */,
      pub b: String /* %U */,
    }
    pub struct InlineB {
      pub a: String /* %T */,
    }
    pub struct TupA();
    pub struct TupB(pub String /* Int */, pub String /* String */);
    pub struct TupC(
      pub String /* %T */,
      pub String /* Int */,
      pub String /* %T */,
    );
    pub struct UnitA;
    pub struct UnitB;
    pub enum EnumA {
      StructVariantA {},
      StructVariantB {
        a: String /* Int */,
        b: String /* String */,
      },
      StructVariantC {},
      StructVariantD {
        a: String /* Int */,
        b: String /* String */,
      },
      TupleVariantA(),
      TupleVariantB(String /* Int */, String /* String */),
      UnitVariantA,
      UnitVariantB,
    }
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("ErrA")] ErrA {},
      #[error("ErrB")] ErrB {
        a: String /* Int */,
        b: String /* String */,
      },
    }
    pub enum ContractEvent {
      EventA {},
      EventB {
        a: String /* Int */,
        b: String /* String */,
      },
    }
    pub type TypeAliasA = String /* None */;
    pub type TypeAliasB = String /* structInlineB{a:%T}; */;
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

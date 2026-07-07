#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod expressions {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const TOTAL: Item<Uint128> = Item::new("total");
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
    pub struct InstantiateMsg {
      pub name: Option<String>,
    }
    #[cw_serde]
    pub enum ExecuteMsg {}
    #[cw_serde]
    pub enum QueryMsg {
      Total {},
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
        QueryMsg::Total {} => query_total_impl(ctx),
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
      name: Option<String>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut int_lit = 42;
      let mut separated = 1_000_000;
      let mut dec_lit = "3.14".parse::<Decimal>().unwrap();
      let mut t = true;
      let mut f = false;
      let mut nothing: Option<Binary> = None;
      let mut plain = String::from("hello");
      let mut interp = format!("hello {}", plain);
      let mut nested_interp = format!("sum is {}", int_lit + 1);
      let mut raw = String::from("raw string {not interpolated}");
      let mut sum = 1 + 2;
      let mut diff = 5 - 3;
      let mut prod = 4 * 6;
      let mut quot = 8 / 2;
      let mut rem = 9 % 4;
      let mut powed = (2u64).pow(10 as u32);
      let mut pow_chain = (2u64).pow((3u64).pow(2 as u32) as u32);
      let mut pow_prec = 2 * (3u64).pow(2 as u32) + 1;
      let mut grouped = (1 + 2) * 3;
      let mut eq = sum == 3;
      let mut neq = sum != 4;
      let mut lt = 1 < 2;
      let mut gt = 2 > 1;
      let mut lte = 1 <= 1;
      let mut gte = 2 >= 2;
      let mut both = eq && neq;
      let mut either = eq || f;
      let mut negated = !f;
      let mut mixed = (eq && !f) || lt;
      let mut a = 10;
      a = 5;
      a += 1;
      a -= 1;
      a *= 2;
      a /= 2;
      TOTAL.save(ctx.deps.storage, &Uint128::new(0u128))?;
      TOTAL.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c += Uint128::new(10u128);
          Ok(c)
        }
      )?;
      let mut arr = [1, 2, 3];
      arr[0 as usize] = 9;
      arr[1 as usize] += 1;
      let mut coalesced = name.clone().unwrap_or(String::from("anonymous"));
      let mut has_name = name.is_some();
      if name.is_some() {
        let name = name.clone().unwrap();
        let mut n = name;
      }
      let mut found = arr.contains(&2);
      let mut missing = !arr.contains(&7);
      let mut k = ExKind::Nice { level: 3 };
      if matches!(k, ExKind::Nice { .. }) {
        a += 1;
      }
      if !matches!(k, ExKind::Naughty { .. }) {
        a += 1;
      }
      let mut p = ExPoint { x: 1, y: 2 };
      if matches!(p, ExPoint { .. }) {
        a += 1;
      }
      let mut px = p.x;
      let mut first = arr[0 as usize].clone();
      let mut x = p.x.clone();
      let mut y = p.y.clone();
      let mut ex_x = p.x.clone();
      let [mut m, mut n, mut o] = arr;
      Ok(_response)
    }
    pub fn query_total_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&TOTAL.load(ctx.deps.storage)?)?);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct ExPoint {
      pub x: i64,
      pub y: i64,
    }
    #[cw_serde]
    pub enum ExKind {
      Nice {
        level: i64,
      },
      Naughty,
    }
    impl ExKind {
      pub fn level(&self) -> i64 {
        match self {
          ExKind::Nice { level, .. } => level.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field level on this variant of ExKind"),
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

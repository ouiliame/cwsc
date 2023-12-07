mod cws;
pub mod counter {
    pub mod state {
        use cw_storage_plus::Item;
        use schemars::JsonSchema;
        use serde::{Deserialize, Serialize};
        pub const COUNT: Item<u32> = Item::new("count");
        pub const OWNER: Item<String> = Item::new("owner");
    }
    pub mod error {
        use cosmwasm_std::StdError;
        use thiserror::Error;
        #[derive(Error, Debug)]
        pub enum ContractError {
            #[error("StdError")]
            StdError(#[from] StdError),
            #[error("Unauthorized")]
            Unauthorized {},
            #[error("CountIsZeroError")]
            CountIsZeroError {},
        }
    }
    pub mod msg {
        use cosmwasm_schema::{cw_serde, QueryResponses};
        use cosmwasm_std::*;
        #[cw_serde]
        pub struct InstantiateMsg {
            pub count: Option<u32>,
            pub owner: Option<String>,
        }
        #[cw_serde]
        pub enum ExecuteMsg {
            Increment {},
            Decrement {},
            Reset { count: Option<u32> },
        }
        #[cw_serde]
        pub enum QueryMsg {
            Count {},
            Owner {},
        }
        #[cw_serde]
        pub struct CWSQueryResponse<T>(pub T);
    }

    pub mod implementation {
        use crate::cws::*;
        use super::error::*;
        use super::msg::*;
        use super::state::*;
        use cosmwasm_std::*;
        pub fn instantiate_impl(
            ctx: InstantiateCtx,
            count: Option<u32>,
            owner: Option<String>,
        ) -> Result<Response, ContractError> {
            let count: u32 = count.unwrap_or(0);
            let owner: String = ctx.info.sender.to_string();
            COUNT.save(ctx.deps.storage, &count)?;
            OWNER.save(ctx.deps.storage, &owner)?;
            Ok(Response::new())
        }
        pub fn exec_increment_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
            let mut count: u32 = COUNT.load(ctx.deps.storage)?;
            let mut count: u32 = count + 1;
            COUNT.save(ctx.deps.storage, &count)?;
            Ok(Response::new())
        }
        pub fn exec_decrement_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
            let mut count: u32 = COUNT.load(ctx.deps.storage)?;
            if count == 0 {
                {
                    return Err(ContractError::CountIsZeroError {});
                }
            }
            let mut count: u32 = count - 1;
            COUNT.save(ctx.deps.storage, &count)?;
            Ok(Response::new())
        }
        pub fn exec_reset_impl(
            ctx: ExecuteCtx,
            count: Option<u32>,
        ) -> Result<Response, ContractError> {
            let mut owner: String = OWNER.load(ctx.deps.storage)?;
            let mut count: u32 = COUNT.load(ctx.deps.storage)?;
            if owner != ctx.info.sender.to_string() {
                {
                    return Err(ContractError::Unauthorized {});
                }
            }
            COUNT.save(ctx.deps.storage, &count)?;
            Ok(Response::new())
        }
        pub fn query_count_impl(ctx: QueryCtx) -> StdResult<CWSQueryResponse<u32>> {
            let count: u32 = COUNT.load(ctx.deps.storage)?;
            Ok(CWSQueryResponse(count))
        }
        pub fn query_owner_impl(ctx: QueryCtx) -> StdResult<CWSQueryResponse<String>> {
            let owner: String = OWNER.load(ctx.deps.storage)?;
            Ok(CWSQueryResponse(owner))
        }
    }
    pub mod contract {
        use crate::cws::*;
        use super::error::*;
        use super::implementation::*;
        use super::msg::*;
        use cosmwasm_std::*;
        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn instantiate(
            deps: DepsMut,
            env: Env,
            info: MessageInfo,
            msg: InstantiateMsg,
        ) -> Result<Response, ContractError> {
            let ctx: InstantiateCtx = InstantiateCtx {
                deps: deps,
                env: env,
                info: info,
            };
            instantiate_impl(ctx, msg.count, msg.owner)
        }
        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn execute(
            deps: DepsMut,
            env: Env,
            info: MessageInfo,
            msg: ExecuteMsg,
        ) -> Result<Response, ContractError> {
            let ctx: ExecuteCtx = ExecuteCtx {
                deps: deps,
                env: env,
                info: info,
            };
            match msg {
                ExecuteMsg::Increment {} => exec_increment_impl(ctx),
                ExecuteMsg::Decrement {} => exec_decrement_impl(ctx),
                ExecuteMsg::Reset { count } => exec_reset_impl(ctx, count),
            }
        }
        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
            let ctx: QueryCtx = QueryCtx {
                deps: deps,
                env: env,
            };
            match msg {
                QueryMsg::Count {} => to_json_binary(&query_count_impl(ctx)?),
                QueryMsg::Owner {} => to_json_binary(&query_owner_impl(ctx)?),
            }
        }
    }
}

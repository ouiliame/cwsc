pub mod counter {
    pub mod state {
        use schemars::JsonSchema;
        use serde::{Deserialize, Serialize};

        use cw_storage_plus::Item;

        pub const COUNT: Item<u32> = Item::new("state");
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
            // GetCount returns the current count as a json-encoded number
            Count {},
            Owner {},
        }

        #[cw_serde]
        pub struct CWSQueryResponse<T>(pub T);
    }

    // TODO: to be added to stdlib or runtime
    pub mod cws {
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
    }

    pub mod implementation {
        use super::cws::*;
        use super::error::*;
        use super::msg::*;
        use super::state::*;
        use cosmwasm_std::*;

        pub fn instantiate_impl(
            ctx: InstantiateCtx,
            count: Option<u32>,
            owner: Option<String>,
        ) -> Result<Response, ContractError> {
            let count = count.unwrap_or(0);
            let owner = ctx.info.sender.to_string();
            COUNT.save(ctx.deps.storage, &count)?;
            OWNER.save(ctx.deps.storage, &owner)?;
            Ok(Response::new())
        }

        pub fn exec_reset_impl(
            ctx: ExecuteCtx,
            count: Option<u32>,
        ) -> Result<Response, ContractError> {
            let mut owner = OWNER.load(ctx.deps.storage)?;
            let mut count = COUNT.load(ctx.deps.storage)?;
            if owner != ctx.info.sender {
                return Err(ContractError::Unauthorized {});
            }
            COUNT.save(ctx.deps.storage, &count)?;
            Ok(Response::new())
        }

        pub fn exec_increment_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
            let mut count = COUNT.load(ctx.deps.storage)?;
            count += 1;
            COUNT.save(ctx.deps.storage, &count)?;
            Ok(Response::new())
        }

        pub fn exec_decrement_impl(ctx: ExecuteCtx) -> Result<Response, ContractError> {
            let mut count = COUNT.load(ctx.deps.storage)?;
            if count == 0 {
                return Err(ContractError::CountIsZeroError {});
            }
            count -= 1;
            COUNT.save(ctx.deps.storage, &count)?;
            Ok(Response::new())
        }

        pub fn query_count_impl(ctx: QueryCtx) -> StdResult<CWSQueryResponse<u32>> {
            let count = COUNT.load(ctx.deps.storage)?;
            Ok(CWSQueryResponse(count))
        }

        pub fn query_owner_impl(ctx: QueryCtx) -> StdResult<CWSQueryResponse<String>> {
            let owner = OWNER.load(ctx.deps.storage)?;
            Ok(CWSQueryResponse(owner))
        }
    }

    pub mod contract {
        // want to build a context
        use super::cws::*;
        use super::error::ContractError;
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
            // build a instantiate ctx
            let ctx = InstantiateCtx { deps, env, info };
            instantiate_impl(ctx, msg.count, msg.owner)
        }

        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn execute(
            deps: DepsMut,
            env: Env,
            info: MessageInfo,
            msg: ExecuteMsg,
        ) -> Result<Response, ContractError> {
            // build a execute ctx
            let ctx = ExecuteCtx { deps, env, info };
            match msg {
                ExecuteMsg::Increment {} => exec_increment_impl(ctx),
                ExecuteMsg::Decrement {} => exec_decrement_impl(ctx),
                ExecuteMsg::Reset { count } => exec_reset_impl(ctx, count),
            }
        }

        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
            let ctx = QueryCtx { deps, env };
            match msg {
                QueryMsg::Count {} => to_json_binary(&query_count_impl(ctx)?),
                QueryMsg::Owner {} => to_json_binary(&query_owner_impl(ctx)?),
            }
        }
    }
}

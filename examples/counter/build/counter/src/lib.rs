pub mod counter {
    pub mod state {
        use schemars::JsonSchema;
        use serde::{Deserialize, Serialize};

        use cosmwasm_std::Addr;
        use cw_storage_plus::Item;

        pub const COUNT: Item<Uint32> = Item::new("state");
        pub const OWNER: Item<Addr> = Item::new("owner");
    }

    pub mod error {
        use cosmwasm_std::StdError;
        use thiserror::Error;

        #[derive(Error, Debug)]
        pub enum ContractError {
            #[error("Unauthorized")]
            Unauthorized {},
            #[error("CountIsZeroError")]
            CountIsZeroError {},
        }
    }

    pub mod msg {
        use cosmwasm_schema::{cw_serde, QueryResponses};

        #[cw_serde]
        pub struct InstantiateMsg {
            pub count: Option<Uint32>,
            pub owner: Option<Addr>,
        }

        #[cw_serde]
        pub enum ExecuteMsg {
            Increment {},
            Decrement {},
            Reset { count: Option<Uint32> },
        }

        #[cw_serde]
        #[derive(QueryResponses)]
        pub enum QueryMsg {
            // GetCount returns the current count as a json-encoded number
            #[returns(CountResponse)]
            Count {},
            #[returns(OwnerResponse)]
            Owner {},
        }

        // We define a custom struct for each query response
        #[cw_serde]
        pub struct CountResponse {
            pub count: Uint32, // u32 and Uint32
        }

        #[cw_serde]
        pub struct OwnerResponse {
            pub owner: Addr,
        }
    }

    // TODO: to be added to stdlib or runtime
    pub mod cws {
        pub struct InstantiateCtx(DepsMut, Env, MessageInfo);
        pub struct ExecuteCtx(DepsMut, Env, MessageInfo);
        pub struct QueryCtx(Deps, Env);
    }

    pub mod implementation {
        pub fn instantiate_impl(
            ctx: InstantiateCtx,
            count: Option<Uint32>,
            owner: Option<Addr>,
        ) -> Result<Response, ContractError> {
            let count = count.unwrap_or(0);
            let owner = owner.unwrap_or(ctx.env.message.sender);
            let state = State { count, owner };
            state::COUNT.save(ctx.storage, &state.count)?;
            state::OWNER.save(ctx.storage, &state.owner)?;
            Ok(Response::new())
        }
    }

    pub mod contract {
        // want to build a context
        use super::cws::*;
        use super::error::ContractError;
        use super::implementation::*;

        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn instantiate(
            deps: DepsMut,
            env: Env,
            info: MessageInfo,
            msg: InstantiateMsg,
        ) -> Result<Response, ContractError> {
            // build a instantiate ctx
            let ctx = InstantiateCtx(deps, env, info);
            instantiate_impl(ctx, msg.count, msg.owner);
        }

        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn execute(
            deps: DepsMut,
            env: Env,
            info: MessageInfo,
            msg: ExecuteMsg,
        ) -> Result<Response, ContractError> {
            // build a execute ctx
            match msg {
                ExecuteMsg::Increment {} => execute::increment(deps),
                ExecuteMsg::Decrement {} => execute::decrement(deps),
                ExecuteMsg::Reset { count } => execute::reset(deps, info, count),
            }
        }

        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
            match msg {
                QueryMsg::Count {} => to_json_binary(&query::count(deps)?),
                QueryMsg::Owner {} => to_json_binary(&query::owner(deps)?),
            }
        }
    }
}

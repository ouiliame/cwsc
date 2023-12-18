pub mod terraswap_pair {
    pub mod state {
        use super::types::*;
        use cw_storage_plus::{Item, Map};
        use schemars::JsonSchema;
        use serde::{Deserialize, Serialize};

        pub const PAIR_INFO: Item<PairInfo> = Item::new("pair_info");
    }
    pub mod error {
        use cosmwasm_std::StdError;
        use thiserror::Error;
        #[derive(Error, Debug)]
        pub enum ContractError {
            #[error("StdError")]
            StdError(#[from] StdError),
        }
    }
    pub mod msg {
        use cosmwasm_schema::{cw_serde, QueryResponses};
        use cosmwasm_std::*;
        #[cw_serde]
        pub struct InstantiateMsg {
            pub asset_info: String,     /* [AssetInfo;2] */
            pub token_code_id: String,  /* U64 */
            pub asset_decimals: String, /* [U8;2] */
        }
        #[cw_serde]
        pub enum ExecuteMsg {
            Receive {
                msg: String, /* Cw20ReceiveMsg */
            },
            ProvideLiquidity {
                assets: String,             /* [Asset;2] */
                receiver: String,           /* String */
                deadline: String,           /* U64 */
                slippage_tolerance: String, /* Dec */
            },
        }
        #[cw_serde]
        pub enum QueryMsg {}
    }
    pub mod contract {
        use super::cws::*;
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
            instantiate_impl(ctx, msg.asset_info, msg.token_code_id, msg.asset_decimals)
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
                ExecuteMsg::Receive { msg } => exec_receive_impl(ctx, msg),
                ExecuteMsg::ProvideLiquidity {
                    assets,
                    receiver,
                    deadline,
                    slippage_tolerance,
                } => {
                    exec_provide_liquidity_impl(ctx, assets, receiver, deadline, slippage_tolerance)
                }
            }
        }
        #[cfg_attr(not(feature = "library"), entry_point)]
        pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
            let ctx: QueryCtx = QueryCtx {
                deps: deps,
                env: env,
            };
            match msg {}
        }
    }
    pub mod implementation {
        use super::cws::*;
        use super::error::*;
        use super::msg::*;
        use super::state::*;
        use super::types::*;
        use cosmwasm_std::*;
        pub fn instantiate_impl(
            ctx: InstantiateCtx,
            asset_info: [AssetInfo; 2], /* [AssetInfo;2] */
            token_code_id: Uint64,      /* U64 */
            asset_decimals: [u8; 2],    /* [U8;2] */
        ) -> Result<Response, ContractError> {
            let pair_info = PairInfo::make(
                asset_info,
                ctx.info.sender.to_string(),
                "".to_string(),
                asset_decimals,
            );

            PAIR_INFO.save(ctx.deps.storage, &pair_info)?;

            /* TODO: Untranslated MemberAssignStmt

            */
            /* TODO: Untranslated ExecStmt

            */
            Ok(Response::new())
        }
        pub fn exec_receive_impl(
            ctx: ExecuteCtx,
            msg: String, /* Cw20ReceiveMsg */
        ) -> Result<Response, ContractError> {
            Ok(Response::new())
        }
        pub fn exec_provide_liquidity_impl(
            ctx: ExecuteCtx,
            assets: String,             /* [Asset;2] */
            receiver: String,           /* String */
            deadline: String,           /* U64 */
            slippage_tolerance: String, /* Dec */
        ) -> Result<Response, ContractError> {
            Ok(Response::new())
        }
    }
    pub mod types {
        use cosmwasm_schema::cw_serde;
        use cosmwasm_std::*;
        use cwscript_macro::CwsType;
        use cwscript_runtime::*;
        use thiserror::Error;

        #[derive(CwsType)]
        pub struct Asset {
            info: AssetInfo,
            amount: Uint128,
        }

        pub enum AssetInfo {
            Token { contract_addr: String },
            NativeToken { denom: String },
        }

        #[cw_serde]
        pub struct PairInfo {
            pub asset_infos: CwsArray<AssetInfo, 2>, /* [AssetInfo;2] */
            pub contract_addr: CwsString,            /* String */
            pub liquidity_token: CwsString,          /* String */
            pub asset_decimals: CwsArray<u8, 2>,     /* [U8;2] */
        }

        impl PairInfo {
            // from Rust-native param types into CWS struct
            pub fn make<A1, A2, A3, A4>(
                asset_infos: A1,     /* [AssetInfo;2] */
                contract_addr: A2,   /* String */
                liquidity_token: A3, /* String */
                asset_decimals: A4,  /* [U8;2] */
            ) -> Self
            where
                A1: Into<CwsArray<AssetInfo, 2>>,
                A2: Into<CwsString>,
                A3: Into<CwsString>,
                A4: Into<CwsArray<u8, 2>>,
            {
                Self {
                    asset_infos: asset_infos.into(),
                    contract_addr: contract_addr.into(),
                    liquidity_token: liquidity_token.into(),
                    asset_decimals: asset_decimals.into(),
                }
            }
        }

        #[derive(Error, Debug)]
        pub enum ContractError {
            #[error("StdError")]
            StdError(#[from] StdError),
        }
        pub enum ContractEvent {
            ProvideLiquidity {
                sender: String,        /* String */
                receiver: String,      /* String */
                assets: String,        /* [Asset;2] */
                share: String,         /* String */
                refund_assets: String, /* [Asset;2] */
            },
            WithdrawLiquidity {
                sender: String,          /* String */
                withdrawn_share: String, /* String */
                refund_assets: String,   /* [Asset;2] */
            },
        }
    }
}

use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Deps, DepsMut, Env, MessageInfo};

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

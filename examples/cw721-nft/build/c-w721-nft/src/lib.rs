pub mod c_w721_nft {
      pub mod state {
      use cosmwasm_std::*;
use cw_storage_plus::{Item, Map};
use super::types::*;
pub const COLLECTION: Item<CollectionInfo> = Item::new("collection");
pub const NUM_TOKENS: Item<u64> = Item::new("num_tokens");
pub const MINTER: Item<Addr> = Item::new("minter");
pub const TOKENS: Map<String, NftToken> = Map::new("tokens");
    }
pub mod error {
      use cosmwasm_std::StdError;
use thiserror::Error;
#[derive(Error, Debug)] pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
#[error("Unauthorized")] Unauthorized {
      
    },
#[error("TokenNotFound")] TokenNotFound {
      
    }
    }
    }
pub mod msg {
      use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::*;
use cw20::Cw20ReceiveMsg;
use super::types::*;
#[cw_serde] pub struct InstantiateMsg {
      pub name: String,
pub symbol: String
    }
#[cw_serde] pub enum ExecuteMsg {
      Mint {
      token_id: String,
owner: Addr,
token_uri: String
    },
TransferNft {
      recipient: Addr,
token_id: String
    },
Burn {
      token_id: String
    }
    }
#[cw_serde] pub enum QueryMsg {
      OwnerOf {
      token_id: String
    },
NumTokens {
      
    },
CollectionInfo {
      
    }
    }
    }
pub mod contract {
      use super::cws::*;
use super::error::*;
use super::msg::*;
use super::implementation::*;
use cosmwasm_std::*;
#[cfg_attr(not(feature = "library"), entry_point)] pub fn instantiate(deps: DepsMut, env: Env, info: MessageInfo, msg: InstantiateMsg) -> Result<Response, ContractError> {
      let ctx: InstantiateCtx = InstantiateCtx {
      deps: deps,
env: env,
info: info
    };
instantiate_impl(ctx, msg.name, msg.symbol)
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> Result<Response, ContractError> {
      let ctx: ExecuteCtx = ExecuteCtx {
      deps: deps,
env: env,
info: info
    };
match msg {
      ExecuteMsg::Mint { token_id, owner, token_uri } => exec_mint_impl(ctx, token_id, owner, token_uri),
ExecuteMsg::TransferNft { recipient, token_id } => exec_transfer_nft_impl(ctx, recipient, token_id),
ExecuteMsg::Burn { token_id } => exec_burn_impl(ctx, token_id)
    }
    }
#[cfg_attr(not(feature = "library"), entry_point)] pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> Result<Binary, ContractError> {
      let ctx: QueryCtx = QueryCtx {
      deps: deps,
env: env
    };
match msg {
      QueryMsg::OwnerOf { token_id } => query_owner_of_impl(ctx, token_id),
QueryMsg::NumTokens {  } => query_num_tokens_impl(ctx),
QueryMsg::CollectionInfo {  } => query_collection_info_impl(ctx)
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
pub const CONTRACT_NAME: &str = "crates.io:cw721-nft";
pub const CONTRACT_VERSION: &str = "0.0.1";
pub fn instantiate_impl(ctx: InstantiateCtx, name: String, symbol: String) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let collection = CollectionInfo { name: name.clone(), symbol: symbol.clone() };
COLLECTION.save(ctx.deps.storage, &(collection))?;
NUM_TOKENS.save(ctx.deps.storage, &(0))?;
MINTER.save(ctx.deps.storage, &(ctx.info.sender.clone()))?;
Ok(_response)
    }
pub fn exec_mint_impl(ctx: ExecuteCtx, token_id: String, owner: Addr, token_uri: String) -> Result<Response, ContractError> {
      let mut _response = Response::new();
if ctx.info.sender.clone() != MINTER.load(ctx.deps.storage)? {
return Err(ContractError::Unauthorized {});
}
let token = NftToken { owner: owner.clone(), token_uri: token_uri.clone() };
TOKENS.save(ctx.deps.storage, (token_id).clone(), &(token))?;
NUM_TOKENS.update(ctx.deps.storage, |mut c| -> StdResult<_> { c += 1; Ok(c) })?;
_response = _response.add_event(Event::new("mint").add_attribute("token_id", format!("{}", token_id)).add_attribute("owner", format!("{}", owner)));
Ok(_response)
    }
pub fn exec_transfer_nft_impl(ctx: ExecuteCtx, recipient: Addr, token_id: String) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let token = TOKENS.load(ctx.deps.storage, (token_id).clone())?;
if ctx.info.sender.clone() != token.owner {
return Err(ContractError::Unauthorized {});
}
TOKENS.save(ctx.deps.storage, (token_id).clone(), &(NftToken { owner: recipient.clone(), token_uri: token.token_uri }))?;
_response = _response.add_event(Event::new("transfer").add_attribute("token_id", format!("{}", token_id)).add_attribute("sender", format!("{}", ctx.info.sender.clone())).add_attribute("recipient", format!("{}", recipient)));
Ok(_response)
    }
pub fn exec_burn_impl(ctx: ExecuteCtx, token_id: String) -> Result<Response, ContractError> {
      let mut _response = Response::new();
let token = TOKENS.load(ctx.deps.storage, (token_id).clone())?;
if ctx.info.sender.clone() != token.owner {
return Err(ContractError::Unauthorized {});
}
_response = _response.add_event(Event::new("burn").add_attribute("token_id", format!("{}", token_id)));
Ok(_response)
    }
pub fn query_owner_of_impl(ctx: QueryCtx, token_id: String) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(TOKENS.load(ctx.deps.storage, (token_id).clone())?))?);
    }
pub fn query_num_tokens_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(NUM_TOKENS.load(ctx.deps.storage)?))?);
    }
pub fn query_collection_info_impl(ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&(COLLECTION.load(ctx.deps.storage)?))?);
    }
    }
pub mod types {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
use thiserror::Error;
#[cw_serde] pub struct CollectionInfo {
      pub name: String,
pub symbol: String
    }
#[cw_serde] pub struct NftToken {
      pub owner: Addr,
pub token_uri: String
    }
pub enum ContractEvent {
      Mint {
      token_id: String,
owner: String
    },
Transfer {
      token_id: String,
sender: String,
recipient: String
    },
Burn {
      token_id: String
    }
    }
    }
pub mod cws {
      use cosmwasm_schema::cw_serde;
use cosmwasm_std::*;
pub struct InstantiateCtx<'a> {
      pub deps: DepsMut<'a>,
pub env: Env,
pub info: MessageInfo
    }
pub struct ExecuteCtx<'a> {
      pub deps: DepsMut<'a>,
pub env: Env,
pub info: MessageInfo
    }
pub struct QueryCtx<'a> {
      pub deps: Deps<'a>,
pub env: Env
    }
#[cw_serde] pub struct CWSQueryResponse<T>(pub T);
    }
    }
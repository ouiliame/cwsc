#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod cw20_base {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("DuplicateInitialBalanceAddress")] DuplicateInitialBalanceAddress {},
      #[error("InvalidZeroAmount")] InvalidZeroAmount {},
      #[error("CannotSetOwnAccount")] CannotSetOwnAccount {},
      #[error("Expired")] Expired {},
      #[error("NoAllowance")] NoAllowance {},
      #[error("Unauthorized")] Unauthorized {},
      #[error("CannotExceedCap")] CannotExceedCap {},
      #[error("NotFound")] NotFound {},
    }
  }
  pub mod msg {
    use cosmwasm_schema::{ cw_serde, QueryResponses };
    use cosmwasm_std::*;
    use cw20::Cw20ReceiveMsg;
    use std::collections::HashMap;
    use super::types::*;
    #[cw_serde]
    pub struct InstantiateMsg {}
    #[cw_serde]
    pub enum ExecuteMsg {
      Transfer {
        recipient: String,
        amount: Uint128,
      },
      Burn {
        amount: Uint128,
      },
      Send {
        contract: String,
        amount: Uint128,
        msg: Wasm::ExecMsg,
      },
      IncreaseAllowance {
        spender: String,
        amount: Uint128,
        expires: Option<Expiration>,
      },
      DecreaseAllowance {
        spender: String,
        amount: Uint128,
        expires: Option<Expiration>,
      },
      TransferFrom {
        owner: Addr,
        recipient: Addr,
        amount: Uint128,
      },
      BurnFrom {
        owner: Addr,
        amount: Uint128,
      },
      SendFrom {
        contract: Addr,
        amount: Uint128,
        msg: Wasm::ExecMsg,
      },
      Mint {
        recipient: Addr,
        amount: Uint128,
      },
      UpdateMarketing {
        project: Option<String>,
        description: Option<String>,
        marketing: Option<Addr>,
      },
      UploadLogo {
        logo: Logo,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Balance {
        address: Addr,
      },
      TokenInfo {},
      Minter {},
      Allowance {
        owner: Addr,
        spender: Addr,
      },
      AllAllowances {
        owner: Addr,
        start_after: Option<String>,
        limit: Option<u32>,
      },
      AllAccounts {
        start_after: Option<String>,
        limit: Option<u32>,
      },
      MarketingInfo {},
      DownloadLogo {},
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
      instantiate_impl(ctx)
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
        ExecuteMsg::Transfer { recipient, amount } =>
          exec_transfer_impl(ctx, recipient, amount),
        ExecuteMsg::Burn { amount } => exec_burn_impl(ctx, amount),
        ExecuteMsg::Send { contract, amount, msg } =>
          exec_send_impl(ctx, contract, amount, msg),
        ExecuteMsg::IncreaseAllowance { spender, amount, expires } =>
          exec_increase_allowance_impl(ctx, spender, amount, expires),
        ExecuteMsg::DecreaseAllowance { spender, amount, expires } =>
          exec_decrease_allowance_impl(ctx, spender, amount, expires),
        ExecuteMsg::TransferFrom { owner, recipient, amount } =>
          exec_transfer_from_impl(ctx, owner, recipient, amount),
        ExecuteMsg::BurnFrom { owner, amount } =>
          exec_burn_from_impl(ctx, owner, amount),
        ExecuteMsg::SendFrom { contract, amount, msg } =>
          exec_send_from_impl(ctx, contract, amount, msg),
        ExecuteMsg::Mint { recipient, amount } =>
          exec_mint_impl(ctx, recipient, amount),
        ExecuteMsg::UpdateMarketing { project, description, marketing } =>
          exec_update_marketing_impl(ctx, project, description, marketing),
        ExecuteMsg::UploadLogo { logo } => exec_upload_logo_impl(ctx, logo),
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
        QueryMsg::Balance { address } => query_balance_impl(ctx, address),
        QueryMsg::TokenInfo {} => query_token_info_impl(ctx),
        QueryMsg::Minter {} => query_minter_impl(ctx),
        QueryMsg::Allowance { owner, spender } =>
          query_allowance_impl(ctx, owner, spender),
        QueryMsg::AllAllowances { owner, start_after, limit } =>
          query_all_allowances_impl(ctx, owner, start_after, limit),
        QueryMsg::AllAccounts { start_after, limit } =>
          query_all_accounts_impl(ctx, start_after, limit),
        QueryMsg::MarketingInfo {} => query_marketing_info_impl(ctx),
        QueryMsg::DownloadLogo {} => query_download_logo_impl(ctx),
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
    pub const DEFAULT_LIMIT: u32 = 10;
    pub const MAX_LIMIT: u32 = 30;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      Ok(_response)
    }
    pub fn exec_transfer_impl(
      mut ctx: ExecuteCtx,
      recipient: String,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == Uint128::new(0u128) {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut rcpt_addr = ctx.deps.api.addr_validate(recipient.as_str())?;
      todo!("undeclared state field balances");
      todo!("undeclared state field balances");
      _response = _response.add_event(
        Event::new("transfer")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", rcpt_addr))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_burn_impl(
      mut ctx: ExecuteCtx,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == Uint128::new(0u128) {
        return Err(ContractError::InvalidZeroAmount {});
      }
      todo!("undeclared state field balances");
      todo!("assign to placeholder member total_supply");
      _response = _response.add_event(
        Event::new("burn")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_send_impl(
      mut ctx: ExecuteCtx,
      contract: String,
      amount: Uint128,
      msg: Wasm::ExecMsg
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == Uint128::new(0u128) {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut rcpt_addr = ctx.deps.api.addr_validate(contract.as_str())?;
      todo!("undeclared state field balances");
      todo!("undeclared state field balances");
      todo!("exec! Wasm.#execute(contract=contract,msg=Cw20");
      _response = _response.add_event(
        Event::new("send")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", contract))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_increase_allowance_impl(
      mut ctx: ExecuteCtx,
      spender: String,
      amount: Uint128,
      expires: Option<Expiration>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut spender_addr = ctx.deps.api.addr_validate(spender.as_str())?;
      todo!("if-predicate references undefined: info");
      todo!("call on placeholder");
      _response = _response.add_event(
        Event::new("increase_allowance")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", spender_addr))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_decrease_allowance_impl(
      mut ctx: ExecuteCtx,
      spender: String,
      amount: Uint128,
      expires: Option<Expiration>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut spender_addr = ctx.deps.api.addr_validate(spender.as_str())?;
      if spender_addr == ctx.info.sender.clone() {
        return Err(ContractError::CannotSetOwnAccount {});
      }
      let get_allow = todo!("get_allow");
      let set_allow = todo!("set_allow");
      let del_allow = todo!("del_allow");
      let mut allowance = todo!("call on placeholder");
      if todo!("binop on placeholder") {
        todo!("call on placeholder");
      } else {
        todo!("call on placeholder");
      }
      _response = _response.add_event(
        Event::new("decrease_allowance")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", spender_addr))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_transfer_from_impl(
      mut ctx: ExecuteCtx,
      owner: Addr,
      recipient: Addr,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == Uint128::new(0u128) {
        return Err(ContractError::InvalidZeroAmount {});
      }
      deduct_allowance(
        owner.clone(),
        ctx.info.sender.clone(),
        ctx.env.block.clone(),
        amount.clone(),
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      todo!("undeclared state field balances");
      todo!("undeclared state field balances");
      todo!("emit! references undefined: TransferFrom");
      Ok(_response)
    }
    pub fn exec_burn_from_impl(
      mut ctx: ExecuteCtx,
      owner: Addr,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      todo!("references undefined: block");
      todo!("undeclared state field balances");
      todo!("assign to placeholder member total_supply");
      todo!("emit! references undefined: BurnFrom");
      Ok(_response)
    }
    pub fn exec_send_from_impl(
      mut ctx: ExecuteCtx,
      contract: Addr,
      amount: Uint128,
      msg: Wasm::ExecMsg
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      deduct_allowance(
        contract.clone(),
        ctx.info.sender.clone(),
        ctx.env.block.clone(),
        amount.clone(),
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      todo!("references undefined: owner");
      todo!("undeclared state field balances");
      todo!("exec! Wasm.#execute(contract=contract,msg=Cw20");
      todo!("emit! references undefined: SendFrom, owner");
      Ok(_response)
    }
    pub fn exec_mint_impl(
      mut ctx: ExecuteCtx,
      recipient: Addr,
      amount: Uint128
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == Uint128::new(0u128) {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let config = todo!("undeclared state field token_info");
      if !todo!("exists on placeholder") || todo!("binop on placeholder") {
        return Err(ContractError::Unauthorized {});
      }
      todo!("assign to placeholder config");
      if todo!("exists on placeholder") {
        if todo!("binop on placeholder") {
          return Err(ContractError::CannotExceedCap {});
        }
      }
      todo!("undeclared state field token_info");
      todo!("undeclared state field balances");
      todo!("emit! references undefined: Mint");
      Ok(_response)
    }
    pub fn exec_update_marketing_impl(
      mut ctx: ExecuteCtx,
      project: Option<String>,
      description: Option<String>,
      marketing: Option<Addr>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let marketing_info = todo!("undeclared state field marketing_info");
      if todo!("binop on placeholder") {
        return Err(ContractError::Unauthorized {});
      }
      if project.is_some() {
        let project = project.clone().unwrap();
        if project.as_str().trim().is_empty() {
          todo!("assign to placeholder member project");
        } else {
          todo!("assign to placeholder member project");
        }
      }
      if description.is_some() {
        let description = description.clone().unwrap();
        if description.as_str().trim().is_empty() {
          todo!("assign to placeholder member description");
        } else {
          todo!("assign to placeholder member description");
        }
      }
      if marketing.is_some() {
        let marketing = marketing.clone().unwrap();
        if marketing.as_str().trim().is_empty() {
          todo!("assign to placeholder member marketing");
        } else {
          todo!("assign to placeholder member marketing");
        }
      }
      if
        !todo!("exists on placeholder") &&
        !todo!("exists on placeholder") &&
        !todo!("exists on placeholder") &&
        !todo!("exists on placeholder")
      {
        todo!("undeclared state field marketing_info");
      } else {
        todo!("undeclared state field marketing_info");
      }
      todo!("emit! references undefined: UpdateMarketing");
      Ok(_response)
    }
    pub fn exec_upload_logo_impl(
      mut ctx: ExecuteCtx,
      logo: Logo
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let marketing_info = todo!("undeclared state field marketing_info");
      if todo!("binop on placeholder") {
        return Err(ContractError::Unauthorized {});
      }
      todo!("references undefined: $.verify_logo");
      todo!("undeclared state field logo");
      todo!("assign to placeholder member logo");
      todo!("emit! references undefined: UploadLogo");
      Ok(_response)
    }
    pub fn query_balance_impl(
      mut ctx: QueryCtx,
      address: Addr
    ) -> Result<Binary, ContractError> {
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_token_info_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_minter_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      let mut meta = todo!("undeclared state field token_info");
      if todo!("exists on placeholder") {
        todo!("returns-undefined: m");
      }
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_allowance_impl(
      mut ctx: QueryCtx,
      owner: Addr,
      spender: Addr
    ) -> Result<Binary, ContractError> {
      let mut allowance = todo!("undeclared state field allowances");
      todo!("returns-undefined: AllowanceResponse");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_all_allowances_impl(
      mut ctx: QueryCtx,
      owner: Addr,
      start_after: Option<String>,
      limit: Option<u32>
    ) -> Result<Binary, ContractError> {
      let mut limit = std::cmp::min(
        limit.clone().unwrap_or(DEFAULT_LIMIT),
        MAX_LIMIT
      );
      let mut start = todo!("references undefined: Bytes");
      let mut allowance = todo!("references undefined: Order");
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_all_accounts_impl(
      mut ctx: QueryCtx,
      start_after: Option<String>,
      limit: Option<u32>
    ) -> Result<Binary, ContractError> {
      let mut limit = std::cmp::min(
        limit.clone().unwrap_or(DEFAULT_LIMIT),
        MAX_LIMIT
      );
      let mut start = todo!("references undefined: Bytes");
      let mut accounts = todo!("references undefined: Order");
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_marketing_info_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_download_logo_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      let logo = todo!("undeclared state field logo");
      if todo!("type check on placeholder") {
        todo!("placeholder-return");
      } else {
        if todo!("type check on placeholder") {
          todo!("placeholder-return");
        } else {
          if todo!("type check on placeholder") {
            return Err(ContractError::NotFound {});
          } else {
            todo!("missing else branch")
          }
        }
      }
    }
    pub fn deduct_allowance(
      owner: Addr,
      spender: Addr,
      block: BlockInfo,
      amount: Uint128,
      ctx: &QueryCtx
    ) -> Result<String, ContractError> {
      todo!("references undefined: a");
      todo!("helper fn")
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub enum Logo {
      EmbeddedSvg(Bytes),
      EmbeddedPng(Bytes),
      Url(String),
    }
    pub enum ContractEvent {
      Transfer {
        from: Addr,
        to: Addr,
        amount: Uint128,
      },
      Burn {
        from: Addr,
        amount: Uint128,
      },
      Send {
        from: Addr,
        to: Addr,
        amount: Uint128,
      },
      IncreaseAllowance {
        owner: Addr,
        spender: Addr,
        amount: Uint128,
      },
      DecreaseAllowance {
        owner: Addr,
        spender: Addr,
        amount: Uint128,
      },
    }
    #[cw_serde]
    pub struct MinterResponse {
      pub minter: Addr,
      pub cap: Option<Uint128>,
    }
    /// Opaque stub for unresolved external type `Expiration`
    pub type Expiration = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external type `Bytes`
    pub type Bytes = cosmwasm_std::Binary;
    /// Opaque stub for unresolved external module `Wasm`
    pub mod Wasm {
      pub type ExecMsg = cosmwasm_std::Binary;
    }
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

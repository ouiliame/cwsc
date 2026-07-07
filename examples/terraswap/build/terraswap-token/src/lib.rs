#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod terraswap_token {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");
    pub const BALANCES: Map<Addr, i64> = Map::new("balances");
    pub const ALLOWANCES: Map<
      (Addr, Addr),
      Option<AllowanceResponse>
    > = Map::new("allowances");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("InvalidZeroAmount")] InvalidZeroAmount {},
      #[error("Unauthorized")] Unauthorized {},
      #[error("DuplicateInitialBalanceAddress")] DuplicateInitialBalanceAddress {},
      #[error("CannotExceedCap")] CannotExceedCap {},
      #[error("CannotSetOwnAccount")] CannotSetOwnAccount {},
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
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub initial_balances: Vec<CW20::Coin>,
      pub mint: Option<MinterData>,
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Transfer {
        recipient: String,
        amount: i64,
      },
      Burn {
        amount: i64,
      },
      Mint {
        recipient: String,
        amount: i64,
      },
      Send {
        contract: String,
        amount: i64,
        msg: Binary,
      },
      IncreaseAllowance {
        spender: String,
        amount: i64,
        expires: Option<Expiration>,
      },
      DecreaseAllowance {
        spender: String,
        amount: i64,
        expires: Option<Expiration>,
      },
      TransferFrom {
        owner: String,
        recipient: String,
        amount: i64,
      },
      BurnFrom {
        owner: String,
        amount: i64,
      },
      SendFrom {
        owner: String,
        contract: String,
        amount: i64,
        msg: Binary,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Balance {
        address: String,
      },
      TokenInfo {},
      Minter {},
      Allowance {
        owner: String,
        spender: String,
      },
      AllAllowances {
        owner: String,
        start_after: Option<String>,
        limit: Option<i64>,
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
      instantiate_impl(
        ctx,
        msg.name,
        msg.symbol,
        msg.decimals,
        msg.initial_balances,
        msg.mint
      )
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
        ExecuteMsg::Burn { amount } => exec_Burn_impl(ctx, amount),
        ExecuteMsg::Mint { recipient, amount } =>
          exec_Mint_impl(ctx, recipient, amount),
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
        ExecuteMsg::SendFrom { owner, contract, amount, msg } =>
          exec_send_from_impl(ctx, owner, contract, amount, msg),
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
      mut ctx: InstantiateCtx,
      name: String,
      symbol: String,
      decimals: u8,
      initial_balances: Vec<CW20::Coin>,
      mint: Option<MinterData>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      validate_accounts(initial_balances.clone())?;
      let mut total_supply = create_accounts(
        initial_balances.clone(),
        &mut ctx
      )?;
      if
        todo!("exists on placeholder") &&
        Uint128::new(total_supply as u128) >
          mint.clone().unwrap().cap.clone().unwrap()
      {
        return Err(
          ContractError::StdError(
            StdError::generic_err(
              String::from("Initial supply greater than cap")
            )
          )
        );
      }
      if mint.is_some() {
        let mint = mint.clone().unwrap();
        let mut mint = MinterData {
          minter: ctx.deps.api.addr_validate(mint.minter.as_str())?,
          cap: mint.cap.clone(),
        };
      }
      TOKEN_INFO.save(
        ctx.deps.storage,
        &(TokenInfo {
          name: name.clone(),
          symbol: symbol.clone(),
          decimals: decimals.clone(),
          total_supply: Uint128::new(total_supply as u128),
          mint: mint.clone(),
        })
      )?;
      Ok(_response)
    }
    pub fn exec_transfer_impl(
      mut ctx: ExecuteCtx,
      recipient: String,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == 0 {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut rcpt_addr = ctx.deps.api.addr_validate(recipient.as_str())?;
      BALANCES.update(
        ctx.deps.storage,
        ctx.info.sender.clone().clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c -= amount;
          Ok(c)
        }
      )?;
      BALANCES.update(
        ctx.deps.storage,
        rcpt_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c += amount;
          Ok(c)
        }
      )?;
      _response = _response.add_event(
        Event::new("transfer")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute(
            "value",
            format!("{:?}", ctx.deps.api.addr_validate((recipient).as_str())?)
          )
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_Burn_impl(
      mut ctx: ExecuteCtx,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == 0 {
        return Err(ContractError::InvalidZeroAmount {});
      }
      todo!("references undefined: info");
      TOKEN_INFO.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c.total_supply -= Uint128::new(amount as u128);
          Ok(c)
        }
      )?;
      _response = _response.add_event(
        Event::new("burn")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_Mint_impl(
      mut ctx: ExecuteCtx,
      recipient: String,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == 0 {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut config = todo!("undeclared state field config");
      if todo!("binop on placeholder") {
        return Err(ContractError::Unauthorized {});
      }
      todo!("assign to placeholder config");
      let mut limit = todo!("cap");
      if todo!("exists on placeholder") && todo!("binop on placeholder") {
        return Err(ContractError::CannotExceedCap {});
      }
      todo!("state value for token_info unavailable");
      let mut rcpt_addr = ctx.deps.api.addr_validate(recipient.as_str())?;
      BALANCES.update(
        ctx.deps.storage,
        rcpt_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c += amount;
          Ok(c)
        }
      )?;
      _response = _response.add_event(
        Event::new("mint")
          .add_attribute("value", format!("{:?}", recipient))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_send_impl(
      mut ctx: ExecuteCtx,
      contract: String,
      amount: i64,
      msg: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      if amount == 0 {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut rcpt_addr = ctx.deps.api.addr_validate(contract.as_str())?;
      BALANCES.update(
        ctx.deps.storage,
        ctx.info.sender.clone().clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c -= amount;
          Ok(c)
        }
      )?;
      BALANCES.update(
        ctx.deps.storage,
        rcpt_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c += amount;
          Ok(c)
        }
      )?;
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
      amount: i64,
      expires: Option<Expiration>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut spender_addr = ctx.deps.api.addr_validate(spender.as_str())?;
      if spender_addr == ctx.info.sender.clone() {
        return Err(ContractError::CannotSetOwnAccount {});
      }
      let mut allow = ALLOWANCES.load(ctx.deps.storage, (
        ctx.info.sender.clone().clone(),
        spender_addr.clone(),
      ))?.unwrap();
      if expires.is_some() {
        let expires = expires.clone().unwrap();
        allow.expires = expires;
      }
      allow.allowance += Uint128::new(amount as u128);
      todo!("undeclared state field allowance");
      _response = _response.add_event(
        Event::new("increase_allowance")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", spender))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_decrease_allowance_impl(
      mut ctx: ExecuteCtx,
      spender: String,
      amount: i64,
      expires: Option<Expiration>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut spender_addr = ctx.deps.api.addr_validate(spender.as_str())?;
      if spender_addr == ctx.info.sender.clone() {
        return Err(ContractError::CannotSetOwnAccount {});
      }
      let mut allowance = ALLOWANCES.load(ctx.deps.storage, (
        ctx.info.sender.clone().clone(),
        spender_addr.clone(),
      ))?.unwrap();
      if Uint128::new(amount as u128) < allowance.allowance {
        allowance.allowance -= Uint128::new(amount as u128);
        if expires.is_some() {
          let expires = expires.clone().unwrap();
          allowance.expires = expires;
        }
        ALLOWANCES.save(
          ctx.deps.storage,
          (ctx.info.sender.clone().clone(), spender_addr.clone()),
          &Some(allowance)
        )?;
      } else {
        ALLOWANCES.remove(ctx.deps.storage, (
          ctx.info.sender.clone().clone(),
          spender_addr.clone(),
        ));
      }
      _response = _response.add_event(
        Event::new("decrease_allowance")
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", spender))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_transfer_from_impl(
      mut ctx: ExecuteCtx,
      owner: String,
      recipient: String,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut rcpt_addr = ctx.deps.api.addr_validate(recipient.as_str())?;
      let mut owner_addr = ctx.deps.api.addr_validate(owner.as_str())?;
      todo!("references undefined: deduct_allowance");
      BALANCES.update(
        ctx.deps.storage,
        owner_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c -= amount;
          Ok(c)
        }
      )?;
      BALANCES.update(
        ctx.deps.storage,
        rcpt_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c += amount;
          Ok(c)
        }
      )?;
      _response = _response.add_event(
        Event::new("transfer_from")
          .add_attribute("value", format!("{:?}", owner))
          .add_attribute("value", format!("{:?}", recipient))
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_burn_from_impl(
      mut ctx: ExecuteCtx,
      owner: String,
      amount: i64
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut owner_addr = ctx.deps.api.addr_validate(owner.as_str())?;
      todo!("references undefined: deduct_allowance");
      BALANCES.update(
        ctx.deps.storage,
        owner_addr.clone(),
        |s| -> StdResult<_> {
          let mut s = s.unwrap_or_default();
          Ok({ s.checked_sub(amount).unwrap() })
        }
      )?;
      TOKEN_INFO.update(
        ctx.deps.storage,
        |mut c| -> StdResult<_> {
          c.total_supply -= Uint128::new(amount as u128);
          Ok(c)
        }
      )?;
      _response = _response.add_event(
        Event::new("burn_from")
          .add_attribute("value", format!("{:?}", owner))
          .add_attribute("value", format!("{:?}", ctx.info.sender.clone()))
          .add_attribute("value", format!("{:?}", amount))
      );
      Ok(_response)
    }
    pub fn exec_send_from_impl(
      mut ctx: ExecuteCtx,
      owner: String,
      contract: String,
      amount: i64,
      msg: Binary
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut rcpt_addr = ctx.deps.api.addr_validate(contract.as_str())?;
      let mut owner_addr = ctx.deps.api.addr_validate(owner.as_str())?;
      todo!("references undefined: deduct_allowance");
      BALANCES.update(
        ctx.deps.storage,
        owner_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c -= amount;
          Ok(c)
        }
      )?;
      BALANCES.update(
        ctx.deps.storage,
        rcpt_addr.clone(),
        |v| -> StdResult<_> {
          let mut c = v.unwrap_or_default();
          c += amount;
          Ok(c)
        }
      )?;
      todo!("emit! references undefined: SendFrom");
      todo!("exec! $.#send_from(sender,amount,msg)");
      Ok(_response)
    }
    pub fn query_balance_impl(
      mut ctx: QueryCtx,
      address: String
    ) -> Result<Binary, ContractError> {
      let mut address = ctx.deps.api.addr_validate(address.as_str())?;
      let mut balance = todo!("references undefined: state");
      return Ok(
        to_json_binary(&(super::types::BalanceResponse { balance: todo!() }))?
      );
    }
    pub fn query_token_info_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      todo!("returns-undefined: state");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_minter_impl(
      mut ctx: QueryCtx
    ) -> Result<Binary, ContractError> {
      todo!("returns-undefined: state");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn query_allowance_impl(
      mut ctx: QueryCtx,
      owner: String,
      spender: String
    ) -> Result<Binary, ContractError> {
      let mut owner_addr = ctx.deps.api.addr_validate(owner.as_str())?;
      let mut spender_addr = ctx.deps.api.addr_validate(spender.as_str())?;
      return Ok(
        to_json_binary(
          &ALLOWANCES.load(ctx.deps.storage, (
            owner_addr.clone(),
            spender_addr.clone(),
          ))?.unwrap()
        )?
      );
    }
    pub fn query_all_allowances_impl(
      mut ctx: QueryCtx,
      owner: String,
      start_after: Option<String>,
      limit: Option<i64>
    ) -> Result<Binary, ContractError> {
      let mut limit = limit
        .clone()
        .unwrap_or(DEFAULT_LIMIT as i64)
        .min(MAX_LIMIT as i64);
      let mut allowances = todo!("references undefined: owner_addr, start");
      todo!("placeholder-return");
      Ok(to_json_binary(&"TODO")?)
    }
    pub fn validate_accounts(
      accounts: Vec<CW20::Coin>
    ) -> Result<(), ContractError> {
      let mut addresses = Vec::new();
      for __item in accounts.clone() {
        let address = todo!("field address on stub element");
        if todo!("in-check on placeholder") {
          return Err(ContractError::DuplicateInitialBalanceAddress {});
        }
        addresses.push(todo!("placeholder address"));
      }
      Ok(())
    }
    pub fn create_accounts(
      accounts: Vec<CW20::Coin>,
      ctx: &mut ExecuteCtx
    ) -> Result<i64, ContractError> {
      let mut total_supply = 0;
      for mut row in accounts.clone() {
        let mut addr = todo!("address of placeholder");
        todo!("map value for balances unavailable");
        todo!("assignment value for total_supply unavailable");
      }
      return Ok(total_supply);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct Timestamp {
      pub value: u64,
    }
    #[cw_serde]
    pub struct MinterData {
      pub minter: Addr,
      pub cap: Option<Uint128>,
    }
    #[cw_serde]
    pub struct TokenInfo {
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub total_supply: Uint128,
      pub mint: Option<MinterData>,
    }
    #[cw_serde]
    pub struct AllowanceResponse {
      pub allowance: Uint128,
      pub expires: Expiration,
    }
    #[cw_serde]
    pub struct Coin {
      pub address: String,
      pub amount: Uint128,
    }
    #[cw_serde]
    pub struct MinterResponse {
      pub minter: String,
      pub cap: Option<Uint128>,
    }
    #[cw_serde]
    pub struct BalanceResponse {
      pub balance: i64,
    }
    #[cw_serde]
    pub enum Expiration {
      Never,
      AtTime {
        at: u64,
      },
      AtHeight {
        at: Timestamp,
      },
    }
    impl Expiration {
      pub fn at(&self) -> u64 {
        match self {
          Expiration::AtTime { at, .. } => at.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field at on this variant of Expiration"),
        }
      }
    }
    pub enum ContractEvent {
      Transfer {
        from: Addr,
        to: Addr,
        amount: i64,
      },
      Burn {
        from: Addr,
        amount: i64,
      },
      Mint {
        to: Addr,
        amount: i64,
      },
      Send {
        from: Addr,
        to: Addr,
        amount: i64,
      },
      IncreaseAllowance {
        owner: Addr,
        spender: Addr,
        amount: i64,
      },
      DecreaseAllowance {
        owner: Addr,
        spender: Addr,
        amount: i64,
      },
      TransferFrom {
        from: Addr,
        to: Addr,
        by: Addr,
        amount: i64,
      },
      BurnFrom {
        from: Addr,
        by: Addr,
        amount: i64,
      },
      Log {
        from: Addr,
        to: Addr,
        by: Addr,
        amount: i64,
      },
    }
    /// Opaque stub for unresolved external module `CW20`
    pub mod CW20 {
      pub type Coin = cosmwasm_std::Binary;
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

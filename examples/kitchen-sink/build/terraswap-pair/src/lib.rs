#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, unused_parens, dead_code, unreachable_code, unreachable_patterns, path_statements, non_camel_case_types, non_snake_case, clippy::all)]

pub mod terraswap_pair {
  pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{ Item, Map };
    use std::collections::HashMap;
    use super::types::*;
    pub const PAIR_INFO: Item<PairInfo> = Item::new("pair_info");
  }
  pub mod error {
    use cosmwasm_std::*;
    use cosmwasm_std::StdError;
    use thiserror::Error;
    #[derive(Error, Debug)]
    pub enum ContractError {
      #[error("StdError")] StdError(#[from] StdError),
      #[error("MaxSpreadAssertion")] MaxSpreadAssertion {},
      #[error("ExpiredDeadline")] ExpiredDeadline {},
      #[error("MinAmountAssertion")] MinAmountAssertion {
        min_asset: String,
        asset: String,
      },
      #[error("MinAmountAssetion")] MinAmountAssetion {
        min_asset: String,
        asset: String,
      },
      #[error("Unauthorized")] Unauthorized {},
      #[error("InvalidZeroAmount")] InvalidZeroAmount {},
      #[error("MaxSlippageAssertion")] MaxSlippageAssertion {},
      #[error("AssetMismatch")] AssetMismatch {},
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
      pub asset_info: [AssetInfo; 2],
      pub token_code_id: u64,
      pub asset_decimals: [u8; 2],
    }
    #[cw_serde]
    pub enum ExecuteMsg {
      Receive {
        msg: Cw20ReceiveMsg,
      },
      ProvideLiquidity {
        assets: [Asset; 2],
        receiver: Option<String>,
        deadline: Option<u64>,
        slippage_tolerance: Option<Decimal>,
      },
      Swap {
        offer_asset: Asset,
        belief_price: Option<Decimal>,
        max_spread: Option<Decimal>,
        to: Option<Addr>,
        deadline: Option<u64>,
      },
      WithdrawLiquidity {
        sender: Addr,
        amount: Uint128,
        min_assets: Option<[Asset; 2]>,
        deadline: Option<u64>,
      },
    }
    #[cw_serde]
    pub enum QueryMsg {
      Pair {},
      Pool {},
      Simulation {
        offer_asset: Asset,
      },
      ReverseSimulation {
        ask_asset: Asset,
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
        msg.asset_info,
        msg.token_code_id,
        msg.asset_decimals
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
        ExecuteMsg::Receive { msg } => exec_receive_impl(ctx, msg),
        ExecuteMsg::ProvideLiquidity {
          assets,
          receiver,
          deadline,
          slippage_tolerance,
        } =>
          exec_provide_liquidity_impl(
            ctx,
            assets,
            receiver,
            deadline,
            slippage_tolerance
          ),
        ExecuteMsg::Swap {
          offer_asset,
          belief_price,
          max_spread,
          to,
          deadline,
        } =>
          exec_swap_impl(
            ctx,
            offer_asset,
            belief_price,
            max_spread,
            to,
            deadline
          ),
        ExecuteMsg::WithdrawLiquidity {
          sender,
          amount,
          min_assets,
          deadline,
        } =>
          exec_withdraw_liquidity_impl(
            ctx,
            sender,
            amount,
            min_assets,
            deadline
          ),
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
        QueryMsg::Pair {} => query_pair_impl(ctx),
        QueryMsg::Pool {} => query_pool_impl(ctx),
        QueryMsg::Simulation { offer_asset } =>
          query_simulation_impl(ctx, offer_asset),
        QueryMsg::ReverseSimulation { ask_asset } =>
          query_reverse_simulation_impl(ctx, ask_asset),
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
    pub const INSTANTIATE_REPLY_ID: u64 = 1;
    pub const U128: u64 = 0;
    pub const U256: u64 = 0;
    pub const COMMISSION_RATE: u64 = 3;
    pub const U64: u64 = 0;
    pub const MINIMUM_LIQUIDITY_AMOUNT: Uint128 = Uint128::new(1000);
    pub const CW20: u64 = 0;
    pub fn instantiate_impl(
      mut ctx: InstantiateCtx,
      asset_info: [AssetInfo; 2],
      token_code_id: u64,
      asset_decimals: [u8; 2]
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      PAIR_INFO.save(
        ctx.deps.storage,
        &(PairInfo {
          contract_addr: ctx.env.contract.address.to_string(),
          liquidity_token: String::from(""),
          asset_infos: asset_info.clone(),
          asset_decimals: asset_decimals.clone(),
        })
      )?;
      _response = _response.add_submessage(SubMsg {
        id: INSTANTIATE_REPLY_ID as u64,
        msg: CosmosMsg::Wasm(WasmMsg::Instantiate {
          admin: None,
          code_id: token_code_id,
          msg: to_json_binary(
            &(Cw20InstantiateMsg {
              name: String::from("terraswap liquidity token").to_string(),
              symbol: String::from("uLP").to_string(),
              decimals: 6 as u8,
              initial_balances: vec![],
              mint: Some(cw20::MinterResponse {
                minter: ctx.env.contract.address.clone().to_string(),
                cap: None,
              }),
            })
          )?.clone(),
          funds: vec![],
          label: String::from("lp").to_string(),
        }),
        gas_limit: None,
        reply_on: ReplyOn::Success,
      });
      Ok(_response)
    }
    pub fn exec_receive_impl(
      mut ctx: ExecuteCtx,
      msg: Cw20ReceiveMsg
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      let mut contract_addr = ctx.info.sender.clone().to_string();
      let mut inner = cosmwasm_std::from_json::<Cw20HookMsg>(&msg.msg)?;
      if
        let Cw20HookMsg::Swap { belief_price, max_spread, to, deadline, .. } =
          inner
      {
        let mut authorized = false;
        let mut config = PAIR_INFO.load(ctx.deps.storage)?;
        let mut pools = query_pools(
          config.clone(),
          ctx.env.contract.address.clone(),
          &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
        )?;
        for mut pool in pools.clone() {
          if let AssetInfo::Token { contract_addr, .. } = pool.info {
            if contract_addr == ctx.info.sender.clone().to_string() {
              authorized = true;
            }
          }
        }
        if !authorized {
          return Err(ContractError::Unauthorized {});
        }
        let mut to_addr = if to.is_some() {
          let to = to.clone().unwrap();
          Some(ctx.deps.api.addr_validate(to.as_str())?)
        } else {
          None
        };
        let mut asset = Asset {
          info: AssetInfo::Token { contract_addr: contract_addr.clone() },
          amount: msg.amount.clone(),
        };
        todo!("call swap");
      } else {
        if
          let Cw20HookMsg::WithdrawLiquidity { min_assets, deadline, .. } =
            inner
        {
          let mut config = PAIR_INFO.load(ctx.deps.storage)?;
          if ctx.info.sender.clone().to_string() != config.liquidity_token {
            return Err(ContractError::Unauthorized {});
          }
          let mut sender_addr = ctx.deps.api.addr_validate(
            msg.sender.as_str()
          )?;
          todo!("call withdraw_liquidity");
        } else {
          todo!("missing else branch");
        }
      }
      Ok(_response)
    }
    pub fn exec_provide_liquidity_impl(
      mut ctx: ExecuteCtx,
      assets: [Asset; 2],
      receiver: Option<String>,
      deadline: Option<u64>,
      slippage_tolerance: Option<Decimal>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      assert_deadline(ctx.env.block.time.seconds(), deadline.clone())?;
      for mut asset in assets.clone() {
        assert_sent_native_token_balance(
          asset.clone(),
          ctx.info.funds.clone()
        )?;
      }
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut pools = query_pools(
        pair_info.clone(),
        ctx.env.contract.address.clone(),
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      let mut deposits = [
        assets
          .clone()
          .into_iter()
          .find(|a| {
            let a = a.clone();
            a.info == pools[0 as usize].clone().info
          })
          .map(|a| {
            let a = a.clone();
            a.amount
          })
          .ok_or_else(||
            ContractError::StdError(
              StdError::generic_err(String::from("wrong asset info is given"))
            )
          )?,
        assets
          .clone()
          .into_iter()
          .find(|a| {
            let a = a.clone();
            a.info == pools[1 as usize].clone().info
          })
          .map(|a| {
            let a = a.clone();
            a.amount
          })
          .ok_or_else(||
            ContractError::StdError(
              StdError::generic_err(String::from("wrong asset info is given"))
            )
          )?,
      ];
      for (i, pool) in pools.iter_mut().enumerate() {
        if matches!(pool.info, AssetInfo::NativeToken { .. }) {
          pool.amount -= deposits[i as usize].clone();
        }
      }
      let mut liquidity_token = pair_info.liquidity_token.clone();
      let total_share: u128 = todo!("total_share");
      let mut share: Uint128 = if total_share == 0 {
        let mut deposit0 = Uint128::try_from(
          deposits[0 as usize].clone()
        ).unwrap();
        let mut deposit1 = Uint128::try_from(
          deposits[1 as usize].clone()
        ).unwrap();
        let mut share =
          Decimal::from_ratio(
            deposits[0 as usize].clone() * deposit1,
            Uint128::new(1u128)
          ).sqrt() * Uint128::new(1u128);
        _response = _response.add_message(
          CosmosMsg::Wasm(WasmMsg::Execute {
            contract_addr: liquidity_token.to_string(),
            msg: to_json_binary(
              &(cw20::Cw20ExecuteMsg::Mint {
                recipient: ctx.env.contract.address.clone().to_string(),
                amount: MINIMUM_LIQUIDITY_AMOUNT,
              })
            )?,
            funds: vec![],
          })
        );
        share - MINIMUM_LIQUIDITY_AMOUNT
      } else {
        std::cmp::min(
          deposits[0 as usize]
            .clone()
            .multiply_ratio(total_share, pools[0 as usize].clone().amount),
          deposits[1 as usize]
            .clone()
            .multiply_ratio(total_share, pools[1 as usize].clone().amount)
        )
      };
      if share == Uint128::zero() {
        return Err(ContractError::InvalidZeroAmount {});
      }
      let mut refund_assets = vec![];
      for (i, pool) in pools.clone().into_iter().enumerate() {
        let mut desired_amount = if total_share == 0 {
          deposits[i as usize].clone()
        } else {
          let mut desired_amount = pool.amount.multiply_ratio(
            share,
            total_share
          );
          if desired_amount.multiply_ratio(total_share, share) != pool.amount {
            desired_amount += Uint128::one();
          }
          desired_amount
        };
        let mut remain_amount = deposits[i as usize].clone() - desired_amount;
        if slippage_tolerance.is_some() {
          let slippage_tolerance = slippage_tolerance.clone().unwrap();
          if remain_amount > deposits[i as usize].clone() * slippage_tolerance {
            return Err(ContractError::MaxSlippageAssertion {});
          }
        }
        refund_assets.push(Asset {
          info: pool.info.clone(),
          amount: remain_amount.clone(),
        });
        if matches!(pool.info, AssetInfo::NativeToken { .. }) {
          if !remain_amount.is_zero() {
            _response = _response.add_message(
              CosmosMsg::Bank(BankMsg::Send {
                to_address: ctx.info.sender.clone().to_string(),
                amount: [
                  Coin {
                    amount: remain_amount.clone(),
                    denom: pool.info.denom(),
                  },
                ].to_vec(),
              })
            );
          }
        } else {
          if matches!(pool.info, AssetInfo::Token { .. }) {
            _response = _response.add_message(
              CosmosMsg::Wasm(WasmMsg::Execute {
                contract_addr: pool.info.contract_addr().to_string(),
                msg: to_json_binary(
                  &(cw20::Cw20ExecuteMsg::TransferFrom {
                    owner: ctx.info.sender.clone().to_string().to_string(),
                    recipient: ctx.env.contract.address.clone().to_string(),
                    amount: desired_amount,
                  })
                )?,
                funds: vec![],
              })
            );
          } else {
            todo!("missing else branch");
          }
        }
      }
      let mut receiver = receiver
        .clone()
        .unwrap_or(ctx.info.sender.clone().to_string());
      _response = _response.add_message(
        CosmosMsg::Wasm(WasmMsg::Execute {
          contract_addr: pair_info.liquidity_token.to_string(),
          msg: to_json_binary(
            &(cw20::Cw20ExecuteMsg::Mint {
              recipient: receiver.to_string(),
              amount: share,
            })
          )?,
          funds: vec![],
        })
      );
      _response = _response.add_event(
        Event::new("provide_liquidity")
          .add_attribute(
            "value",
            format!("{:?}", ctx.info.sender.clone().to_string())
          )
          .add_attribute("value", format!("{:?}", receiver))
          .add_attribute("value", format!("{:?}", assets[0 as usize].clone()))
          .add_attribute("value", format!("{:?}", assets[1 as usize].clone()))
          .add_attribute("value", format!("{:?}", share))
      );
      Ok(_response)
    }
    pub fn exec_swap_impl(
      mut ctx: ExecuteCtx,
      offer_asset: Asset,
      belief_price: Option<Decimal>,
      max_spread: Option<Decimal>,
      to: Option<Addr>,
      deadline: Option<u64>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      assert_sent_native_token_balance(
        offer_asset.clone(),
        ctx.info.funds.clone()
      )?;
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut pools = query_pools(
        pair_info.clone(),
        ctx.env.contract.address.clone(),
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      let [mut offer_pool, mut ask_pool] = if
        offer_asset.info == pools[0 as usize].clone().info
      {
        [
          Asset {
            info: pools[0 as usize].clone().info.clone(),
            amount: pools[0 as usize].clone().amount - offer_asset.amount,
          },
          pools[1 as usize].clone(),
        ]
      } else {
        if offer_asset.info == pools[1 as usize].clone().info {
          [
            Asset {
              info: pools[1 as usize].clone().info.clone(),
              amount: pools[1 as usize].clone().amount - offer_asset.amount,
            },
            pools[0 as usize].clone(),
          ]
        } else {
          return Err(ContractError::AssetMismatch {});
        }
      };
      let [mut offer_decimal, mut ask_decimal] = if
        offer_asset.info == pools[0 as usize].clone().info
      {
        [
          pair_info.asset_decimals[0 as usize].clone(),
          pair_info.asset_decimals[1 as usize].clone(),
        ]
      } else {
        [
          pair_info.asset_decimals[1 as usize].clone(),
          pair_info.asset_decimals[0 as usize].clone(),
        ]
      };
      let mut offer_amount = offer_asset.amount;
      let [mut return_amount, mut spread_amount, mut commission_amount] =
        compute_swap(offer_pool.amount, ask_pool.amount, offer_amount.clone())?;
      let mut return_asset = Asset {
        info: ask_pool.info.clone(),
        amount: return_amount.clone(),
      };
      assert_max_spread(
        belief_price.clone(),
        max_spread.clone(),
        offer_asset.clone(),
        return_asset.clone(),
        spread_amount.clone(),
        offer_decimal.clone(),
        ask_decimal.clone()
      )?;
      let mut receiver = to.clone().unwrap_or(ctx.info.sender.clone());
      if return_amount != Uint128::zero() {
        if matches!(return_asset.info, AssetInfo::Token { .. }) {
          todo!("exec! references undefined: recipient, amount");
        } else {
          todo!("exec! references undefined: to_address, amount, denom");
        }
      }
      todo!("emit! references undefined: Swap, sender");
      Ok(_response)
    }
    pub fn exec_withdraw_liquidity_impl(
      mut ctx: ExecuteCtx,
      sender: Addr,
      amount: Uint128,
      min_assets: Option<[Asset; 2]>,
      deadline: Option<u64>
    ) -> Result<Response, ContractError> {
      let mut _response = Response::new();
      assert_deadline(ctx.env.block.time.seconds(), deadline.clone())?;
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut liquidity_addr = Addr::unchecked(
        pair_info.liquidity_token.to_string()
      );
      let mut pools = query_pools(
        pair_info.clone(),
        ctx.env.contract.address.clone(),
        &(QueryCtx { deps: ctx.deps.as_ref(), env: ctx.env.clone() })
      )?;
      let total_share: u128 = todo!("total_share");
      let mut share_ratio = Decimal::from_ratio(amount, total_share);
      let mut refund_assets = pools
        .clone()
        .into_iter()
        .map(|a| {
          let a = a.clone();
          Asset { info: a.info.clone(), amount: a.amount * share_ratio }
        })
        .collect::<Vec<_>>();
      assert_minimum_assets(refund_assets.clone(), min_assets.clone())?;
      _response = _response.add_message(
        CosmosMsg::Wasm(WasmMsg::Execute {
          contract_addr: pair_info.liquidity_token.to_string(),
          msg: to_json_binary(
            &(cw20::Cw20ExecuteMsg::Burn { amount: amount })
          )?,
          funds: vec![],
        })
      );
      _response = _response.add_event(
        Event::new("withdraw_liquidity")
          .add_attribute("sender", format!("{:?}", sender))
          .add_attribute("withdrawn_share", format!("{:?}", amount))
          .add_attribute("value", format!("{:?}", refund_assets))
      );
      Ok(_response)
    }
    pub fn query_pair_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      return Ok(to_json_binary(&PAIR_INFO.load(ctx.deps.storage)?)?);
    }
    pub fn query_pool_impl(mut ctx: QueryCtx) -> Result<Binary, ContractError> {
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut contract_addr = pair_info.contract_addr.clone();
      let mut assets = query_pools(
        pair_info.clone(),
        Addr::unchecked(contract_addr.clone()),
        &(QueryCtx { deps: ctx.deps, env: ctx.env.clone() })
      )?;
      let total_share: u128 = todo!("total_share");
      return Ok(
        to_json_binary(
          &(PoolResponse {
            assets: assets.clone(),
            total_share: Uint128::new(total_share as u128),
          })
        )?
      );
    }
    pub fn query_simulation_impl(
      mut ctx: QueryCtx,
      offer_asset: Asset
    ) -> Result<Binary, ContractError> {
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut contract_addr = pair_info.contract_addr.clone();
      let mut pools = query_pools(
        pair_info.clone(),
        Addr::unchecked(contract_addr.clone()),
        &(QueryCtx { deps: ctx.deps, env: ctx.env.clone() })
      )?;
      let [mut offer_pool, mut ask_pool] = if
        offer_asset.info == pools[0 as usize].clone().info
      {
        [pools[0 as usize].clone(), pools[1 as usize].clone()]
      } else {
        if offer_asset.info == pools[1 as usize].clone().info {
          [pools[1 as usize].clone(), pools[0 as usize].clone()]
        } else {
          return Err(ContractError::AssetMismatch {});
        }
      };
      let [mut return_amount, mut spread_amount, mut commission_amount] =
        compute_swap(offer_pool.amount, ask_pool.amount, offer_asset.amount)?;
      return Ok(
        to_json_binary(
          &(SimulationResponse {
            return_amount: return_amount.clone(),
            spread_amount: spread_amount.clone(),
            commission_amount: commission_amount.clone(),
          })
        )?
      );
    }
    pub fn query_reverse_simulation_impl(
      mut ctx: QueryCtx,
      ask_asset: Asset
    ) -> Result<Binary, ContractError> {
      let mut pair_info = PAIR_INFO.load(ctx.deps.storage)?;
      let mut contract_addr = pair_info.contract_addr.clone();
      let mut pools = query_pools(
        pair_info.clone(),
        Addr::unchecked(contract_addr.clone()),
        &(QueryCtx { deps: ctx.deps, env: ctx.env.clone() })
      )?;
      let [mut ask_pool, mut offer_pool] = if
        ask_asset.info == pools[0 as usize].clone().info
      {
        [pools[0 as usize].clone(), pools[1 as usize].clone()]
      } else {
        if ask_asset.info == pools[1 as usize].clone().info {
          [pools[1 as usize].clone(), pools[0 as usize].clone()]
        } else {
          return Err(ContractError::AssetMismatch {});
        }
      };
      let [mut offer_amount, mut spread_amount, mut commission_amount] =
        compute_offer_amount(
          offer_pool.amount,
          ask_pool.amount,
          ask_asset.amount
        )?;
      return Ok(
        to_json_binary(
          &(ReverseSimulationResponse {
            offer_amount: offer_amount.clone(),
            spread_amount: spread_amount.clone(),
            commission_amount: commission_amount.clone(),
          })
        )?
      );
    }
    pub fn query_pools(
      pair_info: PairInfo,
      addr: Addr,
      ctx: &QueryCtx
    ) -> Result<Vec<Asset>, ContractError> {
      return Ok(
        pair_info.asset_infos
          .clone()
          .into_iter()
          .map(|ai| {
            let ai = ai.clone();
            return Asset {
              info: ai.clone(),
              amount: query_pool(ai.clone(), addr.clone(), ctx).unwrap(),
            };
          })
          .collect::<Vec<_>>()
      );
    }
    pub fn query_pool(
      asset_info: AssetInfo,
      addr: Addr,
      ctx: &QueryCtx
    ) -> Result<Uint128, ContractError> {
      if matches!(asset_info, AssetInfo::Token { .. }) {
        let mut res = todo!("query! Bank.#balance(asset_info.contract_addr,$");
        todo!("placeholder-return");
      } else {
        if matches!(asset_info, AssetInfo::NativeToken { .. }) {
          let mut res = ctx.deps.querier.query_balance(
            addr,
            asset_info.denom()
          )?;
          todo!("placeholder-return");
        } else {
          return Ok(Uint128::zero());
        }
      }
    }
    pub fn compute_offer_amount(
      offer_pool: Uint128,
      ask_pool: Uint128,
      ask_amount: Uint128
    ) -> Result<[Uint128; 3], ContractError> {
      let mut offer_pool = offer_pool;
      let mut ask_pool = ask_pool;
      let mut ask_amount = ask_amount;
      let mut commission_rate = Decimal::permille(COMMISSION_RATE.clone());
      let mut cp = offer_pool * ask_pool;
      let mut one_minus_commission = Decimal::one() - commission_rate;
      let mut inv_one_minus_commission = Decimal::one() / one_minus_commission;
      let mut before_commission_deduction =
        ask_amount * inv_one_minus_commission;
      if before_commission_deduction * one_minus_commission != ask_amount {
        before_commission_deduction += Uint128::new(1u128);
      }
      let mut after_ask_pool = ask_pool - before_commission_deduction;
      let mut after_offer_pool = Uint128::new(1u128).multiply_ratio(
        cp,
        after_ask_pool
      );
      if after_offer_pool * (ask_pool - before_commission_deduction) != cp {
        after_offer_pool += Uint128::new(1u128);
      }
      let mut offer_amount = after_offer_pool - offer_pool;
      let mut before_spread_deduction =
        offer_amount * Decimal::from_ratio(ask_pool, offer_pool);
      let mut spread_amount = if
        before_spread_deduction > before_commission_deduction
      {
        before_commission_deduction - before_commission_deduction
      } else {
        Uint128::new(0u128)
      };
      let mut commission_amount = before_commission_deduction - ask_amount;
      return Ok([offer_amount, spread_amount, commission_amount]);
    }
    pub fn assert_max_spread(
      belief_price: Option<Decimal>,
      max_spread: Option<Decimal>,
      offer_asset: Asset,
      return_asset: Asset,
      spread_amount: Uint128,
      offer_decimal: u8,
      return_decimal: u8
    ) -> Result<(), ContractError> {
      let [mut offer_amount, mut return_amount, mut spread_amount] = if
        offer_decimal > return_decimal
      {
        let mut diff_decimal = (10 as u64).pow(
          (offer_decimal - return_decimal) as u32
        );
        [
          offer_asset.amount,
          return_asset.amount * Uint128::try_from(diff_decimal).unwrap(),
          spread_amount * Uint128::try_from(diff_decimal).unwrap(),
        ]
      } else {
        if offer_decimal < return_decimal {
          let mut diff_decimal = (10 as u64).pow(
            (return_decimal - offer_decimal) as u32
          );
          [
            offer_asset.amount * Uint128::try_from(diff_decimal).unwrap(),
            return_asset.amount,
            spread_amount,
          ]
        } else {
          [offer_asset.amount, return_asset.amount, spread_amount]
        }
      };
      if max_spread.is_some() && belief_price.is_some() {
        let max_spread = max_spread.clone().unwrap();
        let belief_price = belief_price.clone().unwrap();
        let mut expected_return =
          offer_amount * (Decimal::one() / belief_price);
        let mut spread_amount = if expected_return > return_amount {
          expected_return - return_amount
        } else {
          Uint128::zero()
        };
        if
          return_amount < expected_return &&
          Decimal::from_ratio(spread_amount, expected_return) > max_spread
        {
          return Err(ContractError::MaxSpreadAssertion {});
        }
      } else {
        if max_spread.is_some() {
          let max_spread = max_spread.clone().unwrap();
          if
            Decimal::from_ratio(spread_amount, return_amount + spread_amount) >
            max_spread
          {
            return Err(ContractError::MaxSpreadAssertion {});
          }
        } else {
          todo!("missing else branch");
        }
      }
      Ok(())
    }
    pub fn assert_deadline(
      blocktime: u64,
      deadline: Option<u64>
    ) -> Result<(), ContractError> {
      if deadline.is_some() {
        let deadline = deadline.clone().unwrap();
        return Err(ContractError::ExpiredDeadline {});
      }
      Ok(())
    }
    pub fn assert_minimum_assets(
      assets: Vec<Asset>,
      min_assets: Option<[Asset; 2]>
    ) -> Result<(), ContractError> {
      if min_assets.is_some() {
        let min_assets = min_assets.clone().unwrap();
        for mut min_asset in min_assets.clone() {
          let mut asset = assets
            .clone()
            .into_iter()
            .find(|asset| {
              let asset = asset.clone();
              asset.info == min_asset.info
            });
          if asset.is_some() {
            let asset = asset.clone().unwrap();
            if asset.amount < min_asset.amount {
              return Err(ContractError::MinAmountAssertion {
                min_asset: format!("{:?}", min_asset),
                asset: format!("{:?}", asset),
              });
            }
          } else {
            return Err(ContractError::MinAmountAssetion {
              min_asset: format!("{:?}", min_asset),
              asset: format!("{:?}", Asset { info: min_asset.info.clone(), amount: Uint128::zero() }),
            });
          }
        }
      }
      Ok(())
    }
    pub fn assert_sent_native_token_balance(
      asset: Asset,
      funds: Vec<Coin>
    ) -> Result<(), ContractError> {
      if matches!(asset.info, AssetInfo::NativeToken { .. }) {
        let mut coin = funds
          .clone()
          .into_iter()
          .find(|x| {
            let x = x.clone();
            x.denom == asset.info.denom()
          });
        if coin.is_some() {
          let coin = coin.clone().unwrap();
          if asset.amount != coin.amount {
            return Err(
              ContractError::StdError(
                StdError::generic_err(
                  String::from(
                    "Native token balance mismatch between the argument and the transferred"
                  )
                )
              )
            );
          }
        }
      } else {
        if asset.amount != Uint128::zero() {
          return Err(
            ContractError::StdError(
              StdError::generic_err(
                String::from(
                  "Native token balance mismatch between the argument and the transferred"
                )
              )
            )
          );
        } else {
          todo!("missing else branch");
        }
      }
      Ok(())
    }
    pub fn compute_swap(
      offer_pool: Uint128,
      ask_pool: Uint128,
      offer_amount: Uint128
    ) -> Result<[Uint128; 3], ContractError> {
      let mut offer_pool = offer_pool;
      let mut ask_pool = ask_pool;
      let mut offer_amount = offer_amount;
      let mut commission_rate = Decimal::permille(COMMISSION_RATE.clone());
      let mut return_amount =
        (ask_pool * offer_amount) / (offer_pool + offer_amount);
      let mut spread_amount =
        offer_amount * Decimal::from_ratio(ask_pool, offer_pool) -
        return_amount;
      let mut commission_amount = return_amount * commission_rate;
      if
        return_amount != commission_amount * (Decimal::one() / commission_rate)
      {
        commission_amount += Uint128::new(128u128);
      }
      return_amount -= commission_amount;
      return Ok([return_amount, spread_amount, commission_amount]);
    }
  }
  pub mod types {
    use cosmwasm_schema::cw_serde;
    use cosmwasm_std::*;
    use thiserror::Error;
    use std::collections::HashMap;
    #[cw_serde]
    pub struct PairInfo {
      pub asset_infos: [AssetInfo; 2],
      pub contract_addr: String,
      pub liquidity_token: String,
      pub asset_decimals: [u8; 2],
    }
    #[cw_serde]
    pub struct Asset {
      pub info: AssetInfo,
      pub amount: Uint128,
    }
    #[cw_serde]
    pub enum AssetInfo {
      Token {
        contract_addr: String,
      },
      NativeToken {
        denom: String,
      },
    }
    impl AssetInfo {
      pub fn contract_addr(&self) -> String {
        match self {
          AssetInfo::Token { contract_addr, .. } => contract_addr.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field contract_addr on this variant of AssetInfo"),
        }
      }
      pub fn denom(&self) -> String {
        match self {
          AssetInfo::NativeToken { denom, .. } => denom.clone(),
          #[allow(unreachable_patterns)]
          _ => panic!("no field denom on this variant of AssetInfo"),
        }
      }
    }
    pub enum ContractEvent {
      ProvideLiquidity {
        sender: String,
        receiver: String,
        assets: [Asset; 2],
        share: String,
        refund_assets: [Asset; 2],
      },
      WithdrawLiquidity {
        sender: String,
        withdrawn_share: String,
        refund_assets: [Asset; 2],
      },
    }
    /// Serialization-compatible stand-in for cw20-base's InstantiateMsg
    #[cw_serde]
    pub struct Cw20InstantiateMsg {
      pub name: String,
      pub symbol: String,
      pub decimals: u8,
      pub initial_balances: Vec<cw20::Cw20Coin>,
      pub mint: Option<cw20::MinterResponse>,
    }
    #[cw_serde]
    pub enum Cw20HookMsg {
      Swap {
        belief_price: Option<Decimal>,
        max_spread: Option<Decimal>,
        to: Option<String>,
        deadline: Option<u64>,
      },
      WithdrawLiquidity {
        min_assets: Option<[Asset; 2]>,
        deadline: u64,
      },
    }
    #[cw_serde]
    pub struct PoolResponse {
      pub assets: Vec<Asset>,
      pub total_share: Uint128,
    }
    #[cw_serde]
    pub struct SimulationResponse {
      pub return_amount: Uint128,
      pub spread_amount: Uint128,
      pub commission_amount: Uint128,
    }
    #[cw_serde]
    pub struct ReverseSimulationResponse {
      pub offer_amount: Uint128,
      pub spread_amount: Uint128,
      pub commission_amount: Uint128,
    }
    #[cw_serde]
    pub struct MinterResponse {
      pub minter: Addr,
      pub cap: Option<Uint128>,
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

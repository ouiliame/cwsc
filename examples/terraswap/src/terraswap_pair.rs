fn instantiate_impl(
  ctx: InstantiateCtx,
  asset_infos: CwsArray<AssetInfo, 2>,
  token_code_id: U64,
  asset_decimals: CwsArray<U8, 2>
) -> Result<Response, ContractError> {
/* (MemberAssignStmt)
    $state.pair_info = PairInfo {
      contract_addr: $env.contract.address,
      liquidity_token: Address.empty(),
      asset_infos: [
        String!(msg.asset_infos[0]),
        String!(msg.asset_infos[1])
      ]
    }
*/
  // $state.pair_info --> SHIR -- StateItem
  // MemberAssignStmt translation -> StateItem->set

  let value = PairInfo {
    contract_addr: ctx.env.contract.address,
    liquidity_token: CwsAddr::empty(),
    asset_infos: CwsList::new(vec![
      CwsString::from(asset_infos[0]),
      CwsString::from(asset_infos[1])
    ])
  }
  PAIR_INFO.set(&value);
)

fn query_pools(pair_info: PairInfo, addr: Address) {
  pair_info.asset_infos.map!(|ai| Asset { info: ai, amount: query_pool__f(ai, addr)? }) 
}

fn query_pool__f(asset_info: AssetInfo, addr: Addr) -> CwsResult<U128> {
  let balance = BALANCE.get(&addr)?;
  if let AssetInfo::Token { contract_addr } = asset_info {
    let msg = BankQuery::Balance {
      address: asset_info.contract_addr,
      balance: balance
    }
    // DO QUERY
    return res.balance
  } else if let AssetInfo::NativeToken { asset_info } {
    let msg = BankQuery::Balance {
      address: addr,
      denom: asset_info.denom
    }
    // DO QUERY
    return res.amount.amount
  } else {
    return 0
  }
}

fn exec_provide_liquidity_impl(ctx: ExecuteCtx, assets: CwsArray<Asset, 2>, #[optional] slippage_tolerance: CwsOption<CwsDec>, #[optional] receiver: CwsOption<CwsString>) {
  assert_sent_native_token_balance(ctx)?;
  let pair_info = PAIR_INFO.get()?;
  let pools = query_pools(pair_info, ctx.env.contract.address)?;

  let _1 = assets.find(|a| a.info == pools[0].info).map(|a| a.amount);
  let deposits = CwsList<Asset>::new(
    assets.find(|a| a.info == pools[0].info).map(|a| a.amount).
  )
}
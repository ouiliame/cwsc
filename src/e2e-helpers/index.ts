import * as AST from '../ast';
import {
  ann,
  fnDefn,
  fnParam,
  letStmt,
  structExpr,
  fnCallExpr,
  identExpr,
  FunctionDefn,
  structFieldAssn,
  matchExpr,
  arm,
  refExpr,
  tryExpr,
} from '../rust';

export const entryPoint = (fn: FunctionDefn) =>
  ann(`#[cfg_attr(not(feature = "library"), entry_point)]`, fn);

export function buildInstantiateEntrypoint(instDefn: AST.InstantiateDefn) {
  const instantiateImplCall = fnCallExpr('instantiate_impl', [
    identExpr('ctx'),
    ...instDefn.params.map((x) => identExpr(`msg.${x.name.value}`)),
  ]);

  return entryPoint(
    fnDefn(
      'instantiate',
      [
        fnParam('deps', 'DepsMut'),
        fnParam('env', 'Env'),
        fnParam('info', 'MessageInfo'),
        fnParam('msg', 'InstantiateMsg'),
      ],
      'Result<Response, ContractError>',
      [
        letStmt(
          'ctx',
          false,
          'InstantiateCtx',
          structExpr('InstantiateCtx', [
            structFieldAssn('deps', identExpr('deps')),
            structFieldAssn('env', identExpr('env')),
            structFieldAssn('info', identExpr('info')),
          ])
        ),
        instantiateImplCall,
      ]
    )
  );
}

export function buildExecEntrypoint(execDefns: AST.ExecDefn[]) {
  const arms = execDefns.map((x) => {
    const name = x.name.value.substring(1);
    const params = x.params.map((p) => p.name.value);
    const call = fnCallExpr(`exec_${name}_impl`, [
      identExpr('ctx'),
      ...params.map((p) => identExpr(`msg.${p}`)),
    ]);
    return arm(`ExecuteMsg::${name} { ${params.join(', ')} }`, call);
  });

  return entryPoint(
    fnDefn(
      'execute',
      [
        fnParam('deps', 'DepsMut'),
        fnParam('env', 'Env'),
        fnParam('info', 'MessageInfo'),
        fnParam('msg', 'ExecuteMsg'),
      ],
      'Result<Response, ContractError>',
      [
        letStmt(
          'ctx',
          false,
          'ExecuteCtx',
          structExpr('ExecuteCtx', [
            structFieldAssn('deps', identExpr('deps')),
            structFieldAssn('env', identExpr('env')),
            structFieldAssn('info', identExpr('info')),
          ])
        ),
        matchExpr(identExpr('msg'), arms),
      ]
    )
  );
}

export function buildQueryEntrypoint(queryDefns: AST.QueryDefn[]) {
  const arms = queryDefns.map((x) => {
    const name = x.name.value.substring(1);
    const params = x.params.map((p) => p.name.value);
    let call = fnCallExpr(`query_${name}_impl`, [
      identExpr('ctx'),
      ...params.map((p) => identExpr(`msg.${p}`)),
    ]);
    call = fnCallExpr('to_json_binary', [tryExpr(refExpr(call))]);
    return arm(`QueryMsg::${name} { ${params.join(', ')} }`, call);
  });

  return entryPoint(
    fnDefn(
      'query',
      [
        fnParam('deps', 'Deps'),
        fnParam('env', 'Env'),
        fnParam('msg', 'QueryMsg'),
      ],
      'StdResult<Binary>',
      [
        letStmt(
          'ctx',
          false,
          'QueryCtx',
          structExpr('QueryCtx', [
            structFieldAssn('deps', identExpr('deps')),
            structFieldAssn('env', identExpr('env')),
          ])
        ),
        matchExpr(identExpr('msg'), arms),
      ]
    )
  );
}

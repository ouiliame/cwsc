import * as Ast from '../ast';
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
import { snakeToPascal } from '../util/strings';

export const entryPoint = (fn: FunctionDefn) =>
  ann(`#[cfg_attr(not(feature = "library"), entry_point)]`, fn);

export function buildInstantiateEntrypoint(instDefn: Ast.InstantiateDefn) {
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

export function buildExecEntrypoint(execDefns: Ast.ExecDefn[]) {
  const arms = execDefns.map((x) => {
    const name = snakeToPascal(x.name.value.substring(1));
    const msgName = snakeToPascal(x.name.value.substring(1));
    const params = x.params.map((p) => p.name.value);
    const call = fnCallExpr(`exec_${name}_impl`, [
      identExpr('ctx'),
      ...params.map((p) => identExpr(`msg.${p}`)),
    ]);
    return arm(`ExecuteMsg::${msgName} { ${params.join(', ')} }`, call);
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

export function buildQueryEntrypoint(queryDefns: Ast.QueryDefn[]) {
  const arms = queryDefns.map((x) => {
    const name = x.name.value.substring(1);
    const msgName = snakeToPascal(name);
    const params = x.params.map((p) => p.name.value);
    let call = fnCallExpr(`query_${name}_impl`, [
      identExpr('ctx'),
      ...params.map((p) => identExpr(`msg.${p}`)),
    ]);
    call = fnCallExpr('to_json_binary', [tryExpr(refExpr(call))]);
    return arm(`QueryMsg::${msgName} { ${params.join(', ')} }`, call);
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

export function buildInstantiateImplFn(instDefn: Ast.InstantiateDefn) {
  const params = instDefn.params.map((p) => fnParam(p.name.value, 'TODO'));
  return fnDefn(
    'instantiate_impl',
    [fnParam('ctx', 'InstantiateCtx'), ...params],
    'Result<Response, ContractError>',
    [fnCallExpr('Ok', [fnCallExpr('Response::new', [])])]
  );
}

export function buildExecImplFn(execDefn: Ast.ExecDefn) {
  const name = execDefn.name.value.substring(1);
  const params = execDefn.params.map((p) => fnParam(p.name.value, 'TODO'));
  return fnDefn(
    `exec_${name}_impl`,
    [fnParam('ctx', 'ExecuteCtx'), ...params],
    'Result<Response, ContractError>',
    [fnCallExpr('Ok', [fnCallExpr('Response::new', [])])]
  );
}

export function buildQueryImplFn(queryDefn: Ast.QueryDefn) {
  const name = queryDefn.name.value.substring(1);
  const params = queryDefn.params.map((p) => fnParam(p.name.value, 'TODO'));
  return fnDefn(
    `query_${name}_impl`,
    [fnParam('ctx', 'QueryCtx'), ...params],
    'StdResult<Binary>',
    [fnCallExpr('Ok', [fnCallExpr('to_binary', [identExpr('msg')])])]
  );
}

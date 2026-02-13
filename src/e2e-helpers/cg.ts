import { pascalToKebab, pascalToSnake } from '../util/strings';
import { DEFAULT_CARGO_TOML, DOTCARGO_CONFIG, RustCrate } from '../rust';
import * as rs from '../rust/syntax';

export interface CgStruct {
  name: string;
  fields: CgParam[];
}

export interface CgParam {
  name: string;
  ty: string;
}

export class CgErrorMod {
  constructor(public variants: CgStruct[]) {}

  public buildVariant(x: CgStruct): rs.Annotated<rs.EnumVariantStruct> {
    const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
    return rs.ann(`#[error("${x.name}")]`, rs.variantStruct(x.name, fields));
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('cosmwasm_std::StdError'),
      rs.use('thiserror::Error'),
    ];

    const stdError = rs.ann(
      '#[error("StdError")]',
      rs.variantTuple('StdError', [rs.ann('#[from]', rs.raw('StdError'))])
    );

    const contractErrors = this.variants.map((x) => this.buildVariant(x));

    const errorEnum = rs.ann(
      '#[derive(Error, Debug)]',
      rs.enumDefn('ContractError', [stdError, ...contractErrors])
    );

    items.push(errorEnum);

    return rs.mod('error', items);
  }
}

export type CgStateField = CgStateFieldItem | CgStateFieldMap;

export interface CgStateFieldItem {
  $type: 'item';
  name: string;
  ty: string;
}

export interface CgStateFieldMap {
  $type: 'map';
  name: string;
  idxTy: string;
  ty: string;
}

export class CgStateMod {
  constructor(public stateFields: CgStateField[]) {}

  public buildStateFields(): rs.RustSyntax[] {
    const items: rs.RustSyntax[] = [];
    this.stateFields.forEach((x) => {
      if (x.$type === 'item') {
        items.push(
          rs.konst(x.name.toUpperCase(), x.ty, rs.raw(`Item::new("${x.name}")`))
        );
      } else if (x.$type === 'map') {
        items.push(
          rs.konst(
            x.name.toUpperCase(),
            `Map<${x.idxTy}, ${x.ty}>`,
            rs.raw(`Map::new("${x.name}")`)
          )
        );
      }
    });
    return items;
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('cosmwasm_std::*'),
      rs.use('cw_storage_plus::{Item, Map}'),
      rs.use('super::types::*'),
    ];

    const stateFields = this.buildStateFields();
    items.push(...stateFields);

    return rs.mod('state', items);
  }
}

export interface CgInstantiateMsg {
  params: CgParam[];
}

export interface CgExecMsg {
  variants: CgExecFn[];
}

export interface CgQueryMsg {
  variants: CgQueryFn[];
}

export class CgMsgMod {
  constructor(
    public instantiateMsg: CgInstantiateMsg,
    public execMsg: CgExecMsg,
    public queryMsg: CgQueryMsg
  ) {}

  public buildInstantiateMsg(): rs.Annotated<rs.StructDefn> {
    return rs.ann(
      '#[cw_serde]',
      rs.structDefn(
        'InstantiateMsg',
        this.instantiateMsg.params.map((x) => rs.structField(x.name, x.ty))
      )
    );
  }

  public buildExecMsg(): rs.Annotated<rs.EnumDefn> {
    const execVariants = this.execMsg.variants.map((x) => {
      const fields = x.params.map((x) => rs.structField(x.name, x.ty));
      return rs.variantStruct(x.msgName, fields);
    });
    return rs.ann('#[cw_serde]', rs.enumDefn('ExecuteMsg', execVariants));
  }

  public buildQueryMsg(): rs.Annotated<rs.EnumDefn> {
    const queryVariants = this.queryMsg.variants.map((x) => {
      const fields = x.params.map((x) => rs.structField(x.name, x.ty));
      return rs.variantStruct(x.msgName, fields);
    });
    return rs.ann('#[cw_serde]', rs.enumDefn('QueryMsg', queryVariants));
  }

  public build() {
    const items: rs.RustSyntax[] = [
      rs.use('cosmwasm_schema::{cw_serde, QueryResponses}'),
      rs.use('cosmwasm_std::*'),
      rs.use('cw20::Cw20ReceiveMsg'),
      rs.use('super::types::*'),
    ];

    items.push(
      this.buildInstantiateMsg(),
      this.buildExecMsg(),
      this.buildQueryMsg()
    );

    return rs.mod('msg', items);
  }
}

export interface CgInstantiateEntrypoint {
  params: CgParam[];
}

export interface CgExecFn {
  fnName: string;
  msgName: string;
  params: CgParam[];
}

export interface CgExecEntrypoint {
  variants: CgExecFn[];
}

export interface CgQueryFn {
  fnName: string;
  msgName: string;
  params: CgParam[];
  resType: string;
}

export interface CgQueryEntrypoint {
  variants: CgQueryFn[];
}

export class CgContractMod {
  constructor(
    public instantiateEntrypoint: CgInstantiateEntrypoint,
    public execEntrypoint: CgExecEntrypoint,
    public queryEntrypoint: CgQueryEntrypoint
  ) {}

  public buildInstantiateEntrypoint(): rs.Annotated<rs.FunctionDefn> {
    const instantiateImplCall = rs.fnCallExpr('instantiate_impl', [
      rs.identExpr('ctx'),
      ...this.instantiateEntrypoint.params.map((x) =>
        rs.identExpr(`msg.${x.name}`)
      ),
    ]);

    return this.entryPoint(
      rs.fnDefn(
        'instantiate',
        [
          rs.fnParam('deps', 'DepsMut'),
          rs.fnParam('env', 'Env'),
          rs.fnParam('info', 'MessageInfo'),
          rs.fnParam('msg', 'InstantiateMsg'),
        ],
        'Result<Response, ContractError>',
        [
          rs.letStmt(
            'ctx',
            false,
            'InstantiateCtx',
            rs.structExpr('InstantiateCtx', [
              rs.structFieldAssn('deps', rs.identExpr('deps')),
              rs.structFieldAssn('env', rs.identExpr('env')),
              rs.structFieldAssn('info', rs.identExpr('info')),
            ])
          ),
          instantiateImplCall,
        ]
      )
    );
  }

  public buildExecEntrypoint(): rs.Annotated<rs.FunctionDefn> {
    const arms = this.execEntrypoint.variants.map((x) => {
      let call = rs.fnCallExpr(`exec_${x.fnName}_impl`, [
        rs.identExpr('ctx'),
        ...x.params.map((p) => rs.identExpr(p.name)),
      ]);
      let paramNames = x.params.map((p) => p.name);
      return rs.arm(
        `ExecuteMsg::${x.msgName} { ${paramNames.join(', ')} }`,
        call
      );
    });

    return this.entryPoint(
      rs.fnDefn(
        'execute',
        [
          rs.fnParam('deps', 'DepsMut'),
          rs.fnParam('env', 'Env'),
          rs.fnParam('info', 'MessageInfo'),
          rs.fnParam('msg', 'ExecuteMsg'),
        ],
        'Result<Response, ContractError>',
        [
          rs.letStmt(
            'ctx',
            false,
            'ExecuteCtx',
            rs.structExpr('ExecuteCtx', [
              rs.structFieldAssn('deps', rs.identExpr('deps')),
              rs.structFieldAssn('env', rs.identExpr('env')),
              rs.structFieldAssn('info', rs.identExpr('info')),
            ])
          ),
          rs.matchExpr(rs.identExpr('msg'), arms),
        ]
      )
    );
  }

  public entryPoint(fn: rs.FunctionDefn): rs.Annotated<rs.FunctionDefn> {
    return rs.ann('#[cfg_attr(not(feature = "library"), entry_point)]', fn);
  }

  public buildQueryEntrypoint(): rs.Annotated<rs.FunctionDefn> {
    const arms = this.queryEntrypoint.variants.map((x) => {
      let call = rs.fnCallExpr(`query_${x.fnName}_impl`, [
        rs.identExpr('ctx'),
        ...x.params.map((p) => rs.identExpr(p.name)),
      ]);
      let paramNames = x.params.map((p) => p.name);
      // Impl fn already returns Result<Binary, ContractError>, so just call it directly
      return rs.arm(
        `QueryMsg::${x.msgName} { ${paramNames.join(', ')} }`,
        call
      );
    });

    return this.entryPoint(
      rs.fnDefn(
        'query',
        [
          rs.fnParam('deps', 'Deps'),
          rs.fnParam('env', 'Env'),
          rs.fnParam('msg', 'QueryMsg'),
        ],
        'Result<Binary, ContractError>',
        [
          rs.letStmt(
            'ctx',
            false,
            'QueryCtx',
            rs.structExpr('QueryCtx', [
              rs.structFieldAssn('deps', rs.identExpr('deps')),
              rs.structFieldAssn('env', rs.identExpr('env')),
            ])
          ),
          rs.matchExpr(rs.identExpr('msg'), arms),
        ]
      )
    );
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('super::cws::*'),
      rs.use('super::error::*'),
      rs.use('super::msg::*'),
      rs.use('super::implementation::*'),
      rs.use('cosmwasm_std::*'),
      this.buildInstantiateEntrypoint(),
      this.buildExecEntrypoint(),
      this.buildQueryEntrypoint(),
    ];
    return rs.mod('contract', items);
  }
}

export interface CgInstantiateImplFn {
  params: CgParam[];
  body: any[];
}

export interface CgExecImplFn {
  fnName: string;
  msgName: string;
  params: CgParam[];
  body: any[];
}

export interface CgQueryImplFn {
  fnName: string;
  msgName: string;
  params: CgParam[];
  resType: string;
  body: any[];
}

export interface CgHelperFn {
  name: string;
  params: CgParam[];
  returnType: string;
  body: string[];
  needsCtx: boolean;
}

export class CgImplentationMod {
  public extraRawItems: string[] = [];

  public constructor(
    public instantiateImplFn: CgInstantiateImplFn,
    public execImplFns: CgExecImplFn[],
    public queryImplFns: CgQueryImplFn[],
    public helperFns: CgHelperFn[] = []
  ) {}

  public buildInstantiateImplFn(): rs.FunctionDefn {
    const params = this.instantiateImplFn.params.map((x) =>
      rs.fnParam(x.name, x.ty)
    );
    const body = this.instantiateImplFn.body.map((x) => rs.raw(x));
    return rs.fnDefn(
      'instantiate_impl',
      [rs.fnParam('ctx', 'InstantiateCtx'), ...params],
      'Result<Response, ContractError>',
      [rs.raw('let mut _response = Response::new();'), ...body, rs.raw('Ok(_response)')]
    );
  }

  public buildExecImplFns(): rs.FunctionDefn[] {
    return this.execImplFns.map((x) => {
      const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
      const body = x.body.map((b) => rs.raw(b));
      return rs.fnDefn(
        `exec_${x.fnName}_impl`,
        [rs.fnParam('ctx', 'ExecuteCtx'), ...params],
        'Result<Response, ContractError>',
        [rs.raw('let mut _response = Response::new();'), ...body, rs.raw('Ok(_response)')]
      );
    });
  }

  public buildQueryImplFns(): rs.FunctionDefn[] {
    return this.queryImplFns.map((x) => {
      const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
      const body = x.body.map((b) => rs.raw(b));
      const bodyStr = x.body.join('\n');
      const hasReturn = bodyStr.includes('return ');
      const fallback = hasReturn
        ? []
        : [rs.raw(`Ok(to_json_binary(&"TODO")?)`)];
      return rs.fnDefn(
        `query_${x.fnName}_impl`,
        [rs.fnParam('ctx', 'QueryCtx'), ...params],
        `Result<Binary, ContractError>`,
        [...body, ...fallback]
      );
    });
  }

  public buildHelperFns(): rs.FunctionDefn[] {
    return this.helperFns.map((x) => {
      const params = x.params.map((p) => rs.fnParam(p.name, p.ty));
      // Don't inject deps/env/info — the $ param just means the function
      // accesses contract context, which is handled by the block visitor.
      // Injecting extra params causes arg-count mismatches at call sites.
      const body = x.body.map((b) => rs.raw(b));
      const retType = x.returnType || 'Result<Response, ContractError>';
      // Add appropriate fallback based on return type
      const bodyStr = x.body.join('\n');
      const hasReturn = bodyStr.includes('return ');
      let fallback: rs.RustSyntax[];
      if (retType === 'Result<(), ContractError>' || retType === 'StdResult<()>') {
        // Always add Ok(()) for Result<()> functions — return Err(...) is for error
        // paths, but the success path needs Ok(()) at the end
        fallback = [rs.raw('Ok(())')];
      } else if (hasReturn) {
        fallback = [];
      } else {
        fallback = [rs.raw('todo!("helper fn")')];
      }
      return rs.fnDefn(x.name, params, retType, [...body, ...fallback]);
    });
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('super::cws::*'),
      rs.use('super::error::*'),
      rs.use('super::msg::*'),
      rs.use('super::state::*'),
      rs.use('super::types::*'),
      rs.use('cosmwasm_std::*'),
      rs.use('cw20::Cw20ReceiveMsg'),
    ];

    const instImplFn = this.buildInstantiateImplFn();
    const execImplFns = this.buildExecImplFns();
    const queryImplFns = this.buildQueryImplFns();
    const helperFns = this.buildHelperFns();

    items.push(
      ...this.extraRawItems.map((r) => rs.raw(r)),
      instImplFn,
      ...execImplFns,
      ...queryImplFns,
      ...helperFns
    );

    return rs.mod('implementation', items);
  }
}

export interface CgTuple {
  name: string;
  elements: string[];
}

export interface CgEnumVariantStruct {
  $type: 'struct';
  name: string;
  fields: CgParam[];
}

export interface CgEnumVariantTuple {
  $type: 'tuple';
  name: string;
  elements: string[];
}

export interface CgEnumVariantUnit {
  $type: 'unit';
  name: string;
}

export interface CgTypeAlias {
  name: string;
  ty: string;
}

export type CgEnumVariant =
  | CgEnumVariantStruct
  | CgEnumVariantTuple
  | CgEnumVariantUnit;

export interface CgEnum {
  name: string;
  variants: CgEnumVariant[];
}

export interface CgUnit {
  name: string;
}

export type CgType = CgStruct | CgTuple | CgUnit | CgEnum | CgTypeAlias;

export class CgTypesMod {
  public extraRawItems: string[] = [];

  constructor(
    public structs: CgStruct[],
    public tuples: CgTuple[],
    public units: CgUnit[],
    public enums: CgEnum[],
    public aliases: CgTypeAlias[],
    public errors: CgStruct[],
    public events: CgStruct[]
  ) {}

  public buildStructs(): rs.Annotated<rs.StructDefn>[] {
    return this.structs.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
      return rs.ann('#[cw_serde]', rs.structDefn(x.name, fields));
    });
  }

  public buildTuples(): rs.Annotated<rs.TupleStructDefn>[] {
    return this.tuples.map((x) => rs.ann('#[cw_serde]', rs.tupleStructDefn(x.name, x.elements)));
  }

  public buildUnits(): rs.Annotated<rs.UnitStructDefn>[] {
    return this.units.map((x) => rs.ann('#[cw_serde]', rs.unitStructDefn(x.name)));
  }

  public buildEnums(): rs.Annotated<rs.EnumDefn>[] {
    return this.enums.map((x) => {
      const variants = x.variants.map((x) => {
        if (x.$type === 'struct') {
          const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
          return rs.variantStruct(x.name, fields);
        } else if (x.$type === 'tuple') {
          return rs.variantTuple(
            x.name,
            x.elements.map((t) => rs.raw(t)) // TODO: fix
          );
        } else {
          return rs.variantUnit(x.name);
        }
      });
      return rs.ann('#[cw_serde]', rs.enumDefn(x.name, variants));
    });
  }

  public buildErrors(): rs.Annotated<rs.EnumDefn> {
    const stdError = rs.ann(
      '#[error("StdError")]',
      rs.variantTuple('StdError', [rs.ann('#[from]', rs.raw('StdError'))])
    );

    const contractErrors = this.errors.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
      return rs.ann(`#[error("${x.name}")]`, rs.variantStruct(x.name, fields));
    });

    const errorEnum = rs.ann(
      '#[derive(Error, Debug)]',
      rs.enumDefn('ContractError', [stdError, ...contractErrors])
    );
    return errorEnum;
  }

  public buildEvents(): rs.EnumDefn {
    const contractEvents = this.events.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
      return rs.variantStruct(x.name, fields);
    });
    const eventEnum = rs.enumDefn('ContractEvent', contractEvents);
    return eventEnum;
  }

  public buildAliases(): rs.TypeAliasDefn[] {
    return this.aliases.map((x) => rs.typeAliasDefn(x.name, x.ty));
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('cosmwasm_schema::cw_serde'),
      rs.use('cosmwasm_std::*'),
      rs.use('thiserror::Error'),
    ];
    const structs = this.buildStructs();
    const tuples = this.buildTuples();
    const units = this.buildUnits();
    const enums = this.buildEnums();
    // Don't generate ContractError here - it's in the error module
    // const errors = this.buildErrors();
    const events = this.buildEvents();
    const aliases = this.buildAliases();
    items.push(
      ...structs,
      ...tuples,
      ...units,
      ...enums,
      events,
      ...aliases,
      ...this.extraRawItems.map((r) => rs.raw(r))
    );
    return rs.mod('types', items);
  }
}

export const CWS_MOD = rs.mod('cws', [
  rs.use('cosmwasm_schema::cw_serde'),
  rs.use('cosmwasm_std::*'),
  rs.structDefn("InstantiateCtx<'a>", [
    rs.structField('deps', "DepsMut<'a>"),
    rs.structField('env', 'Env'),
    rs.structField('info', 'MessageInfo'),
  ]),
  rs.structDefn("ExecuteCtx<'a>", [
    rs.structField('deps', "DepsMut<'a>"),
    rs.structField('env', 'Env'),
    rs.structField('info', 'MessageInfo'),
  ]),
  rs.structDefn("QueryCtx<'a>", [
    rs.structField('deps', "Deps<'a>"),
    rs.structField('env', 'Env'),
  ]),
  rs.ann('#[cw_serde]', rs.tupleStructDefn('CWSQueryResponse<T>', ['T'])),
]);

export class CgContractCrate {
  public constructor(
    public name: string,
    public stateMod: CgStateMod,
    public errorMod: CgErrorMod,
    public msgMod: CgMsgMod,
    public contractMod: CgContractMod,
    public implMod: CgImplentationMod,
    public typesMod: CgTypesMod,
    public functionsMod: any
  ) {}

  public get cwsName(): string {
    return this.name;
  }

  public get rsCrateName(): string {
    return pascalToKebab(this.name);
  }

  public get rsModName(): string {
    return pascalToSnake(this.name);
  }

  public build(): RustCrate {
    let cargoToml = DEFAULT_CARGO_TOML;
    cargoToml.package.name = this.rsCrateName;
    cargoToml.package.version = '0.0.1';
    const crate = new RustCrate(cargoToml);
    crate.setFile('.cargo/config', DOTCARGO_CONFIG);
    const mod = rs.mod(this.rsModName, [
      this.stateMod.build(),
      this.errorMod.build(),
      this.msgMod.build(),
      this.contractMod.build(),
      this.implMod.build(),
      this.typesMod.build(),
      CWS_MOD, // TODO: runtime should be a separate crate
    ]);
    const code = mod.render();
    crate.setFile('src/lib.rs', code);
    return crate;
  }
}

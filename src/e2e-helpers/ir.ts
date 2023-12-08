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
        // TODO: make map
      }
    });
    return items;
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('schemars::JsonSchema'),
      rs.use('serde::{Serialize, Deserialize}'),
      rs.use('cw_storage_plus::{Item, Map}'),
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
  variants: CgStruct[];
}

export interface CgQueryMsg {
  variants: CgStruct[];
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
        this.instantiateMsg.params.map((x) => rs.structField(x.name, 'TODO'))
      )
    );
  }

  public buildExecMsg(): rs.Annotated<rs.EnumDefn> {
    const execVariants = this.execMsg.variants.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, 'TODO'));
      return rs.variantStruct(x.name, fields);
    });
    return rs.ann('#[cw_serde]', rs.enumDefn('ExecuteMsg', execVariants));
  }

  public buildQueryMsg(): rs.Annotated<rs.EnumDefn> {
    const queryVariants = this.queryMsg.variants.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, 'TODO'));
      return rs.variantStruct(x.name, fields);
    });
    return rs.ann('#[cw_serde]', rs.enumDefn('QueryMsg', queryVariants));
  }

  public build() {
    const items: rs.RustSyntax[] = [
      rs.use('cosmwasm_schema::{cw_serde, QueryResponses}'),
      rs.use('cosmwasm_std::*'),
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
        ...x.params.map((p) => rs.identExpr(`msg.${p.name}`)),
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
          rs.fnParam('deps', 'Deps'),
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
        ...x.params.map((p) => rs.identExpr(`msg.${p.name}`)),
      ]);
      let paramNames = x.params.map((p) => p.name);
      call = rs.fnCallExpr('to_json_binary', [rs.tryExpr(rs.refExpr(call))]);
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
        'StdResult<Binary>',
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
}

export interface CgExecImplFn {
  fnName: string;
  msgName: string;
  params: CgParam[];
  body: rs.RustSyntax[];
}

export interface CgQueryImplFn {
  fnName: string;
  msgName: string;
  params: CgParam[];
  resType: string;
  body: rs.RustSyntax[];
}

export class CgImplentationMod {
  public constructor(
    public instantiateImplFn: CgInstantiateImplFn,
    public execImplFns: CgExecImplFn[],
    public queryImplFns: CgQueryImplFn[]
  ) {}

  public buildInstantiateImplFn(): rs.FunctionDefn {
    const params = this.instantiateImplFn.params.map((x) =>
      rs.fnParam(x.name, x.ty)
    );
    return rs.fnDefn(
      'instantiate_impl',
      [rs.fnParam('ctx', 'InstantiateCtx'), ...params],
      'Result<Response, ContractError>',
      [rs.fnCallExpr('Ok', [rs.fnCallExpr('Response::new', [])])]
    );
  }

  public buildExecImplFns(): rs.FunctionDefn[] {
    return this.execImplFns.map((x) => {
      const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
      return rs.fnDefn(
        `exec_${x.fnName}_impl`,
        [rs.fnParam('ctx', 'ExecuteCtx'), ...params],
        'Result<Response, ContractError>',
        [rs.fnCallExpr('Ok', [rs.fnCallExpr('Response::new', [])])]
      );
    });
  }

  public buildQueryImplFns(): rs.FunctionDefn[] {
    return this.queryImplFns.map((x) => {
      const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
      return rs.fnDefn(
        `query_${x.fnName}_impl`,
        [rs.fnParam('ctx', 'QueryCtx'), ...params],
        'StdResult<Binary>',
        [
          rs.fnCallExpr('Ok', [
            rs.fnCallExpr('to_binary', [rs.identExpr('msg')]),
          ]),
        ]
      );
    });
  }

  public build(): rs.ModuleDefn {
    const items: rs.RustSyntax[] = [
      rs.use('super::cws::*'),
      rs.use('super::error::*'),
      rs.use('super::msg::*'),
      rs.use('super::state::*'),
    ];

    const instImplFn = this.buildInstantiateImplFn();
    const execImplFns = this.buildExecImplFns();
    const queryImplFns = this.buildQueryImplFns();

    items.push(instImplFn, ...execImplFns, ...queryImplFns);

    return rs.mod('implementation', items);
  }
}

interface CgTuple {
  name: string;
  elements: string[];
}

interface CgEnumVariantStruct {
  $type: 'struct';
  name: string;
  fields: CgParam[];
}

interface CgEnumVariantTuple {
  $type: 'tuple';
  name: string;
  elements: string[];
}

interface CgEnumVariantUnit {
  $type: 'unit';
  name: string;
}

interface CgTypeAlias {
  name: string;
  ty: string;
}

type CgEnumVariant =
  | CgEnumVariantStruct
  | CgEnumVariantTuple
  | CgEnumVariantUnit;

interface CgEnum {
  name: string;
  variants: CgEnumVariant[];
}

interface CgUnit {
  name: string;
}

export type CgType = CgStruct | CgTuple | CgUnit | CgEnum | CgTypeAlias;

export class CgTypesMod {
  constructor(
    public structs: CgStruct[],
    public tuples: CgTuple[],
    public units: CgUnit[],
    public enums: CgEnum[],
    public aliases: CgTypeAlias[],
    public errors: CgStruct[],
    public events: CgStruct[]
  ) {}

  public buildStructs(): rs.StructDefn[] {
    return this.structs.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
      return rs.structDefn(x.name, fields);
    });
  }

  public buildTuples(): rs.TupleStructDefn[] {
    return this.tuples.map((x) => rs.tupleStructDefn(x.name, x.elements));
  }

  public buildUnits(): rs.UnitStructDefn[] {
    return this.units.map((x) => rs.unitStructDefn(x.name));
  }

  public buildEnums(): rs.EnumDefn[] {
    return this.enums.map((x) => {
      const variants = x.variants.map((x) => {
        if (x.$type === 'struct') {
          const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
          return rs.variantStruct(x.name, fields);
        } else if (x.$type === 'tuple') {
          return rs.variantTuple(
            x.name,
            x.elements.map((x) => rs.raw('TODO'))
          );
        } else {
          return rs.variantUnit(x.name);
        }
      });
      return rs.enumDefn(x.name, variants);
    });
  }

  public buildErrors(): rs.Annotated<rs.EnumDefn> {
    const stdError = rs.ann(
      '#[error("StdError")]',
      rs.variantTuple('StdError', [rs.ann('#[from]', rs.raw('StdError'))])
    );

    const contractErrors = this.errors.map((x) => {
      const fields = x.fields.map((x) => rs.structField(x.name, x.ty));
      return rs.variantStruct(x.name, fields);
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
    const items: rs.RustSyntax[] = [];
    const structs = this.buildStructs();
    const tuples = this.buildTuples();
    const units = this.buildUnits();
    const enums = this.buildEnums();
    const errors = this.buildErrors();
    const events = this.buildEvents();
    const aliases = this.buildAliases();
    items.push(
      ...structs,
      ...tuples,
      ...units,
      ...enums,
      errors,
      events,
      ...aliases
    );
    return rs.mod('types', items);
  }
}

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
      this.stateMod,
      this.errorMod,
      this.msgMod,
      this.contractMod,
      this.implMod,
      this.typesMod,
      this.functionsMod,
    ]);
    const code = mod.render();
    crate.setFile('src/lib.rs', code);
    return crate;
  }
}

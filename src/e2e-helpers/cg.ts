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
      rs.use('cosmwasm_std::*'),
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
      rs.use('std::collections::HashMap'),
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
    public queryMsg: CgQueryMsg,
    /** null → no migrate() handler in the contract */
    public migrateMsg: CgInstantiateMsg | null = null
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
      rs.use('std::collections::HashMap'),
      rs.use('super::types::*'),
    ];

    items.push(
      this.buildInstantiateMsg(),
      this.buildExecMsg(),
      this.buildQueryMsg()
    );
    if (this.migrateMsg) {
      items.push(
        rs.ann(
          '#[cw_serde]',
          rs.structDefn(
            'MigrateMsg',
            this.migrateMsg.params.map((x) => rs.structField(x.name, x.ty))
          )
        )
      );
    }

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

export interface CgReplyHandler {
  name: string;
  id: number;
  kind: string; // 'success' | 'error' | 'always'
}

export class CgContractMod {
  constructor(
    public instantiateEntrypoint: CgInstantiateEntrypoint,
    public execEntrypoint: CgExecEntrypoint,
    public queryEntrypoint: CgQueryEntrypoint,
    public replyHandlers: CgReplyHandler[] = [],
    /** null → no migrate() handler */
    public migrateParams: CgParam[] | null = null
  ) {}

  public buildReplyEntrypoint(): rs.Annotated<rs.FunctionDefn> {
    const arms = this.replyHandlers.map((r) =>
      rs.arm(`${r.id}u64`, rs.identExpr(`reply_${r.name}_impl(ctx, msg)`))
    );
    arms.push(
      rs.arm(
        '_',
        rs.identExpr(
          'Err(ContractError::StdError(StdError::generic_err(format!("unknown reply id: {}", msg.id))))'
        )
      )
    );
    return this.entryPoint(
      rs.fnDefn(
        'reply',
        [
          rs.fnParam('deps', 'DepsMut'),
          rs.fnParam('env', 'Env'),
          rs.fnParam('msg', 'Reply'),
        ],
        'Result<Response, ContractError>',
        [
          rs.raw('let ctx = ReplyCtx { deps, env };'),
          rs.matchExpr(rs.identExpr('msg.id'), arms),
        ]
      )
    );
  }

  public buildMigrateEntrypoint(): rs.Annotated<rs.FunctionDefn> {
    const args = (this.migrateParams || [])
      .map((p) => `, msg.${p.name}`)
      .join('');
    return this.entryPoint(
      rs.fnDefn(
        'migrate',
        [
          rs.fnParam('deps', 'DepsMut'),
          rs.fnParam('env', 'Env'),
          rs.fnParam('msg', 'MigrateMsg'),
        ],
        'Result<Response, ContractError>',
        [
          rs.raw('let ctx = MigrateCtx { deps, env };'),
          rs.raw(`migrate_impl(ctx${args})`),
        ]
      )
    );
  }

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
    if (this.replyHandlers.length > 0) {
      items.push(this.buildReplyEntrypoint());
    }
    if (this.migrateParams) {
      items.push(this.buildMigrateEntrypoint());
    }
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

export interface CgReplyImplFn {
  name: string;
  id: number;
  kind: string; // 'success' | 'error' | 'always'
  body: string[];
}

export interface CgMigrateImplFn {
  params: CgParam[];
  body: string[];
}

export class CgImplentationMod {
  public extraRawItems: string[] = [];

  public constructor(
    public instantiateImplFn: CgInstantiateImplFn,
    public execImplFns: CgExecImplFn[],
    public queryImplFns: CgQueryImplFn[],
    public helperFns: CgHelperFn[] = [],
    public replyImplFns: CgReplyImplFn[] = [],
    public migrateImplFn: CgMigrateImplFn | null = null
  ) {}

  public buildReplyImplFns(): rs.FunctionDefn[] {
    return this.replyImplFns.map((x) => {
      const body = CgImplentationMod.terminateBody(x.body).map((b) => rs.raw(b));
      return rs.fnDefn(
        `reply_${x.name}_impl`,
        [rs.fnParam('mut ctx', 'ReplyCtx'), rs.fnParam('msg', 'Reply')],
        'Result<Response, ContractError>',
        [
          rs.raw('let mut _response = Response::new();'),
          ...body,
          rs.raw('Ok(_response)'),
        ]
      );
    });
  }

  public buildMigrateImplFn(): rs.FunctionDefn | null {
    if (!this.migrateImplFn) return null;
    const params = this.migrateImplFn.params.map((p) => rs.fnParam(p.name, p.ty));
    const body = CgImplentationMod.terminateBody(this.migrateImplFn.body).map(
      (b) => rs.raw(b)
    );
    return rs.fnDefn(
      'migrate_impl',
      [rs.fnParam('mut ctx', 'MigrateCtx'), ...params],
      'Result<Response, ContractError>',
      [
        rs.raw('let mut _response = Response::new();'),
        ...body,
        rs.raw('Ok(_response)'),
      ]
    );
  }

  /**
   * When a fallback expression (e.g. `Ok(_response)`) is appended after the
   * body, the body's trailing statement must be terminated — otherwise a
   * trailing block expression would be syntactically glued to the fallback.
   */
  private static terminateBody(body: string[]): string[] {
    if (body.length === 0) return body;
    const out = [...body];
    const last = out[out.length - 1].trimEnd();
    if (last.length > 0 && !last.endsWith(';') && !last.endsWith('}')) {
      out[out.length - 1] = `${last};`;
    }
    return out;
  }

  public buildInstantiateImplFn(): rs.FunctionDefn {
    const params = this.instantiateImplFn.params.map((x) =>
      rs.fnParam(x.name, x.ty)
    );
    const body = CgImplentationMod.terminateBody(this.instantiateImplFn.body).map((x) => rs.raw(x));
    return rs.fnDefn(
      'instantiate_impl',
      [rs.fnParam('mut ctx', 'InstantiateCtx'), ...params],
      'Result<Response, ContractError>',
      [rs.raw('let mut _response = Response::new();'), ...body, rs.raw('Ok(_response)')]
    );
  }

  public buildExecImplFns(): rs.FunctionDefn[] {
    return this.execImplFns.map((x) => {
      const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
      const body = CgImplentationMod.terminateBody(x.body).map((b) => rs.raw(b));
      return rs.fnDefn(
        `exec_${x.fnName}_impl`,
        [rs.fnParam('mut ctx', 'ExecuteCtx'), ...params],
        'Result<Response, ContractError>',
        [rs.raw('let mut _response = Response::new();'), ...body, rs.raw('Ok(_response)')]
      );
    });
  }

  public buildQueryImplFns(): rs.FunctionDefn[] {
    return this.queryImplFns.map((x) => {
      const params = x.params.map((x) => rs.fnParam(x.name, x.ty));
      const bodyStr = x.body.join('\n');
      const hasReturn = bodyStr.includes('return ');
      const fallback = hasReturn
        ? []
        : [rs.raw(`Ok(to_json_binary(&"TODO")?)`)];
      const bodyLines = hasReturn ? x.body : CgImplentationMod.terminateBody(x.body);
      const body = bodyLines.map((b) => rs.raw(b));
      return rs.fnDefn(
        `query_${x.fnName}_impl`,
        [rs.fnParam('mut ctx', 'QueryCtx'), ...params],
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
      const retType = x.returnType || 'Result<Response, ContractError>';
      // Add appropriate fallback based on return type
      const bodyStr = x.body.join('\n');
      const hasReturn = bodyStr.includes('return ');
      let fallback: rs.RustSyntax[];
      if (retType === 'Result<(), ContractError>' || retType === 'StdResult<()>') {
        // Always add Ok(()) for Result<()> functions — return Err(...) is for error
        // paths, but the success path needs Ok(()) at the end
        fallback = [rs.raw('Ok(())')];
      } else if (retType === '()') {
        fallback = [];
      } else if (hasReturn) {
        fallback = [];
      } else {
        fallback = [rs.raw('todo!("helper fn")')];
      }
      const bodyLines =
        fallback.length > 0 || retType === '()'
          ? CgImplentationMod.terminateBody(x.body)
          : x.body;
      const body = bodyLines.map((b) => rs.raw(b));
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
      rs.use('std::collections::HashMap'),
    ];

    const instImplFn = this.buildInstantiateImplFn();
    const execImplFns = this.buildExecImplFns();
    const queryImplFns = this.buildQueryImplFns();
    const helperFns = this.buildHelperFns();
    const replyImplFns = this.buildReplyImplFns();
    const migrateImplFn = this.buildMigrateImplFn();

    items.push(
      ...this.extraRawItems.map((r) => rs.raw(r)),
      instImplFn,
      ...execImplFns,
      ...queryImplFns,
      ...(migrateImplFn ? [migrateImplFn] : []),
      ...replyImplFns,
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

  /**
   * Generate accessor methods for enum struct-variant fields, so that
   * CWScript member access on enum values (e.g. `asset_info.denom`) can be
   * rendered as a method call (`asset_info.denom()`). Panics at runtime when
   * called on a variant without the field — mirrors CWScript's dynamic
   * variant-field access.
   */
  public buildEnumAccessors(): rs.RustSyntax[] {
    const impls: rs.RustSyntax[] = [];
    for (const e of this.enums) {
      // field name → { variant name → field type }
      const fieldVariants: Record<string, { variant: string; ty: string }[]> = {};
      for (const v of e.variants) {
        if (v.$type !== 'struct') continue;
        for (const f of v.fields) {
          (fieldVariants[f.name] ||= []).push({ variant: v.name, ty: f.ty });
        }
      }
      const methods: string[] = [];
      for (const [field, occurrences] of Object.entries(fieldVariants)) {
        const ty = occurrences[0].ty;
        const bareName = e.name.replace(/<.*>$/, '');
        // Variants whose same-named field has a different type can't share
        // the accessor's return type — they fall into the panic arm.
        const arms = occurrences
          .filter((o) => o.ty === ty)
          .map((o) => `${bareName}::${o.variant} { ${field}, .. } => ${field}.clone()`)
          .join(',\n');
        methods.push(
          `pub fn ${field}(&self) -> ${ty} {\nmatch self {\n${arms},\n#[allow(unreachable_patterns)] _ => panic!("no field ${field} on this variant of ${bareName}")\n}\n}`
        );
      }
      if (methods.length > 0) {
        // Generic enums (name like `Foo<T>`) need generics on the impl too;
        // accessor bodies clone fields, so bound the params by Clone.
        const m = e.name.match(/^([A-Za-z0-9_]+)<(.+)>$/);
        const implHead = m
          ? `impl<${m[2]
              .split(',')
              .map((g) => `${g.trim()}: Clone`)
              .join(', ')}> ${e.name}`
          : `impl ${e.name}`;
        impls.push(rs.raw(`${implHead} {\n${methods.join('\n')}\n}`));
      }
    }
    return impls;
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
      rs.use('std::collections::HashMap'),
    ];
    const structs = this.buildStructs();
    const tuples = this.buildTuples();
    const units = this.buildUnits();
    const enums = this.buildEnums();
    const enumAccessors = this.buildEnumAccessors();
    // Don't generate ContractError here - it's in the error module
    // const errors = this.buildErrors();
    const events = this.buildEvents();
    const aliases = this.buildAliases();
    items.push(
      ...structs,
      ...tuples,
      ...units,
      ...enums,
      ...enumAccessors,
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
  rs.structDefn("ExecuteCtx<'a>", [
    rs.structField('deps', "DepsMut<'a>"),
    rs.structField('env', 'Env'),
    rs.structField('info', 'MessageInfo'),
  ]),
  // Instantiate shares the execute context shape so helpers taking
  // `&mut ExecuteCtx` can be called from both entrypoints.
  rs.typeAliasDefn("InstantiateCtx<'a>", "ExecuteCtx<'a>"),
  rs.structDefn("QueryCtx<'a>", [
    rs.structField('deps', "Deps<'a>"),
    rs.structField('env', 'Env'),
  ]),
  rs.structDefn("ReplyCtx<'a>", [
    rs.structField('deps', "DepsMut<'a>"),
    rs.structField('env', 'Env'),
  ]),
  rs.typeAliasDefn("MigrateCtx<'a>", "ReplyCtx<'a>"),
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
    // Crate-level lint allowances: generated code prioritizes correctness
    // over lint cleanliness.
    const allows =
      '#![allow(unused_imports, unused_variables, unused_mut, unused_assignments, ' +
      'unused_parens, dead_code, unreachable_code, unreachable_patterns, ' +
      'path_statements, non_camel_case_types, non_snake_case, clippy::all)]\n\n';
    const code = allows + mod.render();
    crate.setFile('src/lib.rs', code);
    return crate;
  }
}

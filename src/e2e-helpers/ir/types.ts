export interface HasMembers {
  getMember(name: string): any;
  hasMember(name: string): boolean;
}

export interface ICwsType extends HasMembers {
  get name(): string;
}

export interface CwsValue {
  get ty(): CwsType;
}

/**
 * Represents the context (environment) for evaluateuating statements and expressions.
 * Note that CwsEvalCtx differs from 'members' for namespaces, because the evaluateuation
 * context is meant to be dynamic and contain fully resolved CwsValues, whereas the
 * namespace members
 */

export type CtxEntry = CwsValue | CwsType | CwsFunction;
export class CwsEvalCtx {
  public entries: Map<string, CtxEntry>;

  static root(): CwsEvalCtx {
    return new CwsEvalCtx();
  }

  sub(entries: Record<string, any> | CwsEvalCtx): CwsEvalCtx {
    if (entries instanceof CwsEvalCtx) {
      return new CwsEvalCtx(this, entries.entries);
    } else {
      let newEntries = new Map<string, CtxEntry>();
      for (let [k, v] of Object.entries(entries)) {
        newEntries.set(k, v);
      }
      return new CwsEvalCtx(this, newEntries);
    }
  }

  constructor(
    public parent: CwsEvalCtx | null = null,
    entries: Map<string, CtxEntry> = new Map()
  ) {
    this.entries = entries;
  }

  mustGet<T extends CtxEntry = CtxEntry>(name: string): T {
    if (!this.has(name)) {
      throw new Error(`Entry ${name} not found`);
    }
    return this.get<T>(name)!;
  }

  mustGetTy(name: string): CwsType {
    let res = this.mustGet(name);
    if (!(res instanceof CwsType)) {
      throw new Error(`Entry ${name} is not a type`);
    }
    return res;
  }

  mustGetFn(name: string): CwsFunction {
    let res = this.mustGet(name);
    if (!(res instanceof CwsFunction)) {
      throw new Error(`Entry ${name} is not a function`);
    }
    return res;
  }

  mustGetValue(name: string): CwsValue {
    let res = this.mustGet(name);
    if (!(res instanceof CwsValue)) {
      throw new Error(`Entry ${name} is not a value`);
    }
    return res;
  }

  getTy(name: string): CwsType | null {
    let res = this.get(name);
    if (!res) {
      return null;
    }
    if (!(res instanceof CwsType)) {
      throw new Error(`Entry ${name} is not a type`);
    }
    return res;
  }

  getFn(name: string): CwsFunction | null {
    let res = this.get(name);
    if (!res) {
      return null;
    }
    if (!(res instanceof CwsFunction)) {
      throw new Error(`Entry ${name} is not a function`);
    }
    return res;
  }

  getValue(name: string): CwsValue {
    let res = this.get(name);
    if (!res) {
      throw new Error(`Entry ${name} not found`);
    }
    if (!(res instanceof CwsValue)) {
      throw new Error(`Entry ${name} is not a value`);
    }
    return res;
  }

  get<T extends CtxEntry = CtxEntry>(name: string): T | null {
    if (this.entries.has(name)) {
      return this.entries.get(name)! as T;
    } else if (this.parent) {
      return this.parent.get(name);
    } else {
      return null;
    }
  }

  getOwn<T extends CtxEntry = CtxEntry>(name: string): T | null {
    if (this.entries.has(name)) {
      return this.entries.get(name)! as T;
    } else {
      return null;
    }
  }

  has(name: string): boolean {
    if (this.entries.has(name)) {
      return true;
    } else if (this.parent) {
      return this.parent.has(name);
    } else {
      return false;
    }
  }

  hasOwn(name: string): boolean {
    return this.entries.has(name);
  }

  set(name: string, value: CtxEntry): void {
    this.entries.set(name, value);
  }

  delete(name: string): void {
    this.entries.delete(name);
  }
}

export enum ExecStatus {
  Ok,
  Return,
  Fail,
}

export interface ExecResult<T = CtxEntry> {
  status: ExecStatus;
  value: T;
}

export abstract class CwsExpr {
  abstract evaluate(ctx: CwsEvalCtx): ExecResult;
}

export class CwsNativeAddExpr extends CwsExpr {
  constructor(public lhs: CwsExpr, public rhs: CwsExpr) {
    super();
  }

  public evaluate(ctx: CwsEvalCtx): ExecResult {
    let lhs = this.lhs.evaluate(ctx);
    if (lhs.status === ExecStatus.Fail) {
      return lhs;
    }
    let rhs = this.rhs.evaluate(ctx);
    if (rhs.status === ExecStatus.Fail) {
      return rhs;
    }
    return {
      status: ExecStatus.Ok,
      value: new CwsValue(lhs.value.ty, lhs.value.value + rhs.value.value),
    };
  }
}

export class CwsNativeSubExpr extends CwsExpr {
  constructor(public lhs: CwsExpr, public rhs: CwsExpr) {
    super();
  }

  public evaluate(ctx: CwsEvalCtx): ExecResult {
    let lhs = this.lhs.evaluate(ctx);
    if (lhs.status === ExecStatus.Fail) {
      return lhs;
    }
    let rhs = this.rhs.evaluate(ctx);
    if (rhs.status === ExecStatus.Fail) {
      return rhs;
    }
    return {
      status: ExecStatus.Ok,
      value: new CwsValue(lhs.value.ty, lhs.value.value - rhs.value.value),
    };
  }
}

export class CwsLoadExpr extends CwsExpr {
  constructor(public name: string) {
    super();
  }

  public evaluate(ctx: CwsEvalCtx): ExecResult<CtxEntry> {
    if (!ctx.has(this.name)) {
      return { status: ExecStatus.Fail, value: CwsNoneValue };
    }
    return { status: ExecStatus.Ok, value: ctx.get(this.name)! };
  }
}

export abstract class CwsStmt {
  abstract evaluate(ctx: CwsEvalCtx): ExecResult;
}

export class CwsReturnStmt extends CwsStmt {
  constructor(public expr: CwsExpr) {
    super();
  }

  evaluate(ctx: CwsEvalCtx): ExecResult {
    let res = this.expr.evaluate(ctx);
    return {
      status:
        res.status === ExecStatus.Fail ? ExecStatus.Fail : ExecStatus.Return,
      value: res.value,
    };
  }
}

export class CwsArg {
  constructor(public name: string | undefined, public value: CwsValue) {}
}

export class CwsBlock extends CwsExpr {
  constructor(public stmts: CwsStmt[]) {
    super();
  }

  public evaluate(ctx: CwsEvalCtx): ExecResult {
    let res: ExecResult = { status: ExecStatus.Ok, value: CwsNoneValue };
    for (let stmt of this.stmts) {
      res = stmt.evaluate(ctx);
      if (res.status === ExecStatus.Return) {
        return res;
      } else if (res.status === ExecStatus.Fail) {
        return res;
      }
    }
    return { status: ExecStatus.Ok, value: res.value };
  }
}

export class CwsFunction {
  constructor(
    public name: string,
    public fallible: boolean,
    public params: CwsParam[],
    public returnTy: CwsType,
    public body: CwsBlock
  ) {}

  evaluate(ctx: CwsEvalCtx): ExecResult<CwsFunction> {
    return { status: ExecStatus.Ok, value: this };
  }

  call(ctx: CwsEvalCtx, args: CwsArg[]): CwsCallExpr {
    // first check that we have the right number of args
    // the required params are the first n params that are not optional
    let argVals: any = {};
    for (let i = 0; i < args.length; i++) {
      if (i >= this.params.length) {
        throw new Error(
          `Arg at index ${i + 1} is not expected by ${this.name}`
        );
      }
      if (args[i].name) {
        let param = this.params.find((p) => p.name === args[i].name);
        if (!param) {
          throw new Error(
            `Named arg ${args[i].name} is not expected by ${this.name}`
          );
        } else {
          argVals[param.name] = args[i].value.evaluate(ctx).value;
        }
      } else {
        // positional arg
        let param = this.params[i];
        argVals[param.name] = args[i].value.evaluate(ctx).value;
      }
    }
    if (this.params.some((p) => !p.optional && !(p.name in argVals))) {
      throw new Error(`Missing required arg for ${this.name}`);
    }

    return this.body.evaluate(ctx.sub(argVals)).value;
  }
}

export class CwsType implements ICwsType {
  public members: Map<string, any>;
  constructor(public name: string, members: Record<string, any> = {}) {
    this.members = new Map<string, any>();
    for (let [k, v] of Object.entries(members)) {
      this.members.set(k, v);
    }
  }

  public getMember(name: string): any {
    return this.members.get(name) || null;
  }

  public hasMember(name: string): boolean {
    return this.members.has(name);
  }

  public static isMethod(fn: any): fn is CwsFunction {
    let res: boolean = false;
    if (fn instanceof CwsFunction && fn.params[0] instanceof CwsSelfParam) {
      res = true;
    }
    return res;
  }
}

export abstract class CwsTypeExpr extends CwsType {
  abstract evaluate(ctx: CwsEvalCtx): ExecResult<CwsType>;
}

export class CwsTypeFunction extends CwsType {
  constructor(
    name: string,
    public typeParams: CwsTypeParam[],
    public body: CwsTypeExpr
  ) {
    super(name);
  }

  public evaluate(ctx: CwsEvalCtx): ExecResult<CwsType> {
    let typeParamsCtx: Record<string, CwsType> = {};
    for (let param of this.typeParams) {
      let p = new CwsLoadExpr(param.name).evaluate(ctx).value;
      if (!(p instanceof CwsType)) {
        throw new Error(`Type param ${param.name} is not a type`);
      }
      typeParamsCtx[param.name] = p;
    }
    return this.body.evaluate(ctx.sub(typeParamsCtx));
  }

  public call(ctx: CwsEvalCtx, typeArgs: CwsTypeExpr[]): CwsType {
    let typeArgsCtx: Record<string, CwsType> = {};
    for (let i = 0; i < typeArgs.length; i++) {
      if (i >= this.typeParams.length) {
        throw new Error(
          `Type arg at index ${i + 1} is not expected by ${this.name}`
        );
      }
      let param = this.typeParams[i];
      typeArgsCtx[param.name] = typeArgs[i].evaluate(ctx).value;
    }
    return this.evaluate(ctx.sub(typeArgsCtx)).value;
  }
}

export class CwsTypeBounds {
  // TODO: write this
}

export class CwsTypeParam {
  constructor(public name: string, public bounds?: CwsTypeBounds) {}
}

export class CwsNormalParam {
  constructor(
    public name: string,
    public ty: CwsType,
    public optional: boolean
  ) {}
}

export class CwsSelfParam {
  public get name(): string {
    return 'self';
  }

  public get optional(): boolean {
    return false;
  }

  constructor(public mutable: boolean, public ty: CwsType) {}
}

export type CwsParam = CwsNormalParam | CwsSelfParam;

function makeCwsType(
  name: string,
  setupFn: (x: CwsType) => Record<string, any>
): CwsType {
  const ty = new CwsType(name);
  ty.members = new Map<string, any>();
  let membersObj = setupFn(ty);
  for (let [k, v] of Object.entries(membersObj)) {
    ty.members.set(k, v);
  }
  return ty;
}

const CwsIntType = makeCwsType('Int', (t) => {
  const __add__ = new CwsFunction(
    '__add__',
    false,
    [new CwsSelfParam(false, t), new CwsNormalParam('rhs', t, false)],
    t,
    new CwsBlock([
      new CwsReturnStmt(
        new CwsNativeAddExpr(new CwsLoadExpr('self'), new CwsLoadExpr('rhs'))
      ),
    ])
  );

  const __sub__ = new CwsFunction(
    '__sub__',
    false,
    [new CwsSelfParam(false, t), new CwsNormalParam('rhs', t, false)],
    t,
    new CwsBlock([
      new CwsReturnStmt(
        new CwsNativeSubExpr(new CwsLoadExpr('self'), new CwsLoadExpr('rhs'))
      ),
    ])
  );
  return {
    __add__,
    __sub__,
  };
});

export class CwsValue extends CwsExpr {
  constructor(public ty: CwsType, public value: any) {
    super();
  }

  public evaluate(ctx: CwsEvalCtx): ExecResult {
    return { status: ExecStatus.Ok, value: this };
  }

  public getMethod(
    ctx: CwsEvalCtx,
    name: string,
    fallible: boolean = false
  ): CwsFunction {
    // get from type
    const fn = this.ty.getMember(name);
    if (!CwsType.isMethod(fn)) {
      throw new Error(`Member ${name} is not a method`);
    }
    if (fallible !== fn.fallible) {
      throw new Error(
        `Member ${name} is ${fn.fallible ? 'fallible' : 'not fallible'}`
      );
    }
    return fn;
  }

  public callMethod(
    ctx: CwsEvalCtx,
    name: string,
    args: CwsArg[],
    fallible: boolean = false
  ): CwsValue | null {
    const fn = this.getMethod(ctx, name, fallible);
    return fn.call(ctx, [new CwsArg(undefined, this), ...args]);
  }
}

const CwsNoneType = makeCwsType('None', (t) => {
  return {};
});
const CwsNoneValue = new CwsValue(CwsNoneType, null);

const ctx = CwsEvalCtx.root().sub({
  Int: CwsIntType,
  None: CwsNoneType,
  none: CwsNoneValue,
});
const a = new CwsValue(CwsIntType, 1);
const b = new CwsValue(CwsIntType, 2);
const c = a.callMethod(ctx, '__sub__', [new CwsArg('rhs', b)]);
console.log(c?.value);

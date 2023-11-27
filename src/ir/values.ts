import { SymbolTable } from '../symbol-table';
import {
  CWSType,
  CWSValue,
  CWSExpr,
  IR,
  Param,
  Arg,
  ValueMember,
  TypeMember,
} from './ir-base';
import * as Type from './types';
import * as Stmt from './stmts';
import * as Expr from './exprs';

export type StateItem = {
  item: {
    ty: CWSType;
  };
};

export type StateMap = {
  map: {
    indexTy: CWSType;
    ty: CWSType;
  };
};

export type ContractState = {
  [k: string]: StateItem | StateMap;
};

export class Contract extends CWSValue {
  public get ty(): CWSType {
    return new Type.CWSContractType(this.name);
  }

  constructor(
    public name: string,
    public state: ContractState = {},
    public instantiate: InstantiateFn = new InstantiateFn(),
    public exec: ExecFn[] = [],
    public query: QueryFn[] = [],
    public events: Type.CWSEventType[] = [],
    public errors: Type.CWSErrorType[] = [],
    public typedefs: CWSType[] = []
  ) {
    super();
  }
}

export class Fn extends CWSValue {
  constructor(
    public name: string,
    public typeParams: Type.CWSTypeParam[],
    public params: Param[],
    public returnTy: CWSType,
    public body: IR[] = []
  ) {
    super();
  }

  public get ty(): Type.CWSFnType {
    return new Type.CWSFnType(
      this.fallible,
      this.params.map((x) => x.ty),
      this.returnTy
    );
  }

  public get isGeneric(): boolean {
    return this.typeParams.length > 0;
  }

  public get isMethod(): boolean {
    return this.params.length > 0 && this.params[0].name === 'self';
  }

  public get fallible(): boolean {
    return this.name.endsWith('!');
  }

  public call(
    symbols: SymbolTable,
    typeArgs: CWSType[],
    args: Arg[]
  ): CWSValue | CWSType | CWSExpr {
    const scope = new SymbolTable(symbols);
    // args must be in canonical order -- positional first, then named
    // if a named arg follows a positional arg, it is invalid

    // resolve type arguments
    const typeArgMap = new Map<string, CWSType>();
    this.typeParams.forEach((param, i) => {
      typeArgMap.set(param.name, typeArgs[i]);
    });

    const orderIsValid = args.every((arg, i) => {
      if (arg.name) {
        return args.slice(i + 1).every((x) => !x.name);
      } else {
        return true;
      }
    });
    if (!orderIsValid) {
      throw new Error(
        'Invalid argument order -- positional arguments must come before named arguments'
      );
    }

    const posArgs = args.filter((x) => !x.name);
    const namedArgs = args.filter((x) => x.name);

    // go through positional arguments first
    posArgs.forEach((arg, i) => {
      // make sure we have enough positional arguments
      if (i >= this.params.length) {
        throw new Error('Too many arguments');
      }
      scope.set(this.params[i].name, {
        type: 'value',
        value: arg.value.eval(symbols) as CWSValue,
      });
    });

    // go thru named arguments
    namedArgs.forEach((arg) => {
      // find the param with the same name
      const param = this.params.find((x) => x.name === arg.name);
      if (!param) {
        throw new Error('Invalid argument name: ' + arg.name);
      }
      scope.set(arg.name!, {
        type: 'value',
        value: arg.value.eval(symbols) as CWSValue,
      });
    });

    // evaluate the body
    let result: CWSValue | CWSExpr | CWSType = NoneValue;
    for (const stmt of this.body) {
      if (stmt instanceof Stmt.Return) {
        return stmt.expr.eval(scope) as CWSValue;
      }
      result = stmt.eval(scope);
    }
    return result;
  }
}

export class InstantiateFn extends Fn {
  public get ty() {
    return new Type.CWSInstantiateFnType(this.params);
  }

  constructor(
    public params: Param[] = [],
    public body: IR[] = []
  ) {
    super('#instantiate', [], params, new Type.CWSMessageType());
  }
}

export class ExecFn extends Fn {
  public get ty() {
    return new Type.CWSExecFnType(this.name, this.params);
  }

  constructor(
    public name: string,
    public params: Param[] = [],
    public body: IR[] = []
  ) {
    super('exec #' + name, [], params, new Type.CWSMessageType());
  }
}

export class QueryFn extends Fn {
  public get ty() {
    return new Type.CWSQueryFnType(this.name, this.params);
  }

  constructor(
    public name: string,
    public params: Param[] = [],
    public body: IR[] = []
  ) {
    super('query #' + name, [], params, new Type.CWSMessageType());
  }
}

export class Struct extends CWSValue {
  public get ty(): CWSType {
    return this.structTy;
  }

  public get members(): (ValueMember | TypeMember)[] {
    return [...super.members, ...this.fields];
  }

  constructor(
    public structTy: CWSType,
    public fields: { name: string; value: CWSExpr | CWSValue }[] = []
  ) {
    super();
  }
}

export class Tuple extends CWSValue {
  constructor(
    public ty: CWSType,
    public elements: CWSValue[] = []
  ) {
    super();
  }
}

export class Unit extends CWSValue {
  constructor(public ty: CWSType) {
    super();
  }
}

export class List extends CWSValue {
  public get ty(): CWSType {
    return new Type.CWSListType(this.elementTy);
  }

  constructor(
    public elementTy: CWSType,
    public elements: CWSValue[] = []
  ) {
    super();
  }
}

export class String extends CWSValue {
  public get ty(): CWSType {
    return Type.CWSStringType;
  }

  constructor(public value: string) {
    super();
  }
}

export class Int extends CWSValue {
  public get ty(): CWSType {
    return Type.CWSIntType;
  }

  constructor(public value: string) {
    super();
  }
}

export class Dec extends CWSValue {
  public get ty(): CWSType {
    return Type.CWSDecType;
  }

  constructor(public value: string) {
    super();
  }
}

export class Bool extends CWSValue {
  public get ty(): CWSType {
    return Type.CWSBoolType;
  }

  constructor(public value: boolean) {
    super();
  }
}

export class None extends CWSValue {
  public get ty(): CWSType {
    return Type.CWSNoneType;
  }
}

export class CWSError extends Struct {
  public get ty(): CWSType {
    const ty = super.ty as Type.CWSStructType;
    return new Type.CWSErrorType(ty.name, ty.fields);
  }
}

export class Event extends Struct {
  public get ty(): CWSType {
    const ty = super.ty as Type.CWSStructType;
    return new Type.CWSEventType(ty.name, ty.fields);
  }
}

export const NoneValue = new None();

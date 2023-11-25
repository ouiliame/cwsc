import { SymbolTable } from '../symbol-table';
import { IR, Param, Arg, ValueMember, TypeMember } from './ir-base';
import * as Type from './types';
import * as Stmt from './stmts';

export abstract class CWSValue extends IR {
  public isType(): this is Type.CWSType {
    return false;
  }
  abstract get ty(): Type.CWSType;
  public eval(symbols: SymbolTable): CWSValue {
    return this;
  }

  public get members(): (ValueMember | TypeMember)[] {
    return [
      {
        name: 'Type',
        ty: this.ty,
      },
    ];
  }

  public getMember(name: string): CWSValue | Type.CWSType | undefined {
    // if the member doesn't exist on this value, check the type
    const member = super.getMember(name);
    if (member === undefined) {
      return this.ty.getMember(name);
    } else {
      return member;
    }
  }
}

export type StateItem = {
  item: {
    ty: Type.CWSType;
  };
};

export type StateMap = {
  map: {
    indexTy: Type.CWSType;
    ty: Type.CWSType;
  };
};

export type ContractState = {
  [k: string]: StateItem | StateMap;
};

export class Contract extends CWSValue {
  public get ty(): Type.CWSType {
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
    public typedefs: Type.CWSType[] = []
  ) {
    super();
  }
}

export class Fn extends CWSValue {
  constructor(
    public name: string,
    public params: Param[],
    public returnTy: Type.CWSType,
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

  public get isMethod(): boolean {
    return this.params.length > 0 && this.params[0].name === 'self';
  }

  public get fallible(): boolean {
    return this.name.endsWith('!');
  }

  public call(symbols: SymbolTable, args: Arg[]): CWSValue | Type.CWSType {
    const scope = new SymbolTable(symbols);
    // args must be in canonical order -- positional first, then named
    // if a named arg follows a positional arg, it is invalid

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
    let result: CWSValue | Type.CWSType = NoneValue;
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
    super('#instantiate', params, new Type.CWSMessageType());
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
    super('exec #' + name, params, new Type.CWSMessageType());
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
    super('query #' + name, params, new Type.CWSMessageType());
  }
}

export class Struct extends CWSValue {
  public get ty(): Type.CWSStructType {
    return this.structTy;
  }

  public get members(): (ValueMember | TypeMember)[] {
    let fields = Object.keys(this.fields).map((x) => {
      return {
        name: x,
        value: this.fields[x],
      };
    });
    return [...super.members, ...fields];
  }
  constructor(
    public structTy: Type.CWSStructType,
    public fields: { [name: string]: CWSValue } = {}
  ) {
    super();
  }
}

export class Tuple extends CWSValue {
  constructor(
    public ty: Type.CWSTupleType,
    public elements: CWSValue[] = []
  ) {
    super();
  }
}

export class Unit extends CWSValue {
  constructor(public ty: Type.CWSType) {
    super();
  }
}

export class List extends CWSValue {
  public get ty(): Type.CWSType {
    return new Type.CWSListType(this.elementTy);
  }

  constructor(
    public elementTy: Type.CWSType,
    public elements: CWSValue[] = []
  ) {
    super();
  }
}

export class String extends CWSValue {
  public get ty(): Type.CWSType {
    return Type.CWSStringType;
  }

  constructor(public value: string) {
    super();
  }
}

export class Int extends CWSValue {
  public get ty(): Type.CWSType {
    return Type.CWSIntType;
  }

  constructor(public value: string) {
    super();
  }
}

export class Bool extends CWSValue {
  public get ty(): Type.CWSType {
    return Type.CWSBoolType;
  }

  constructor(public value: boolean) {
    super();
  }
}

export class None extends CWSValue {
  public get ty(): Type.CWSType {
    return Type.CWSNoneType;
  }
}

export class CWSError extends Struct {
  public get ty(): Type.CWSErrorType {
    return new Type.CWSErrorType(super.ty.name, super.ty.fields);
  }
}

export class Event extends Struct {
  public get ty(): Type.CWSEventType {
    return new Type.CWSEventType(super.ty.name, super.ty.fields);
  }
}

export const NoneValue = new None();

import { IR, Param } from './ir-base';
import * as Type from './types';

export abstract class CWSValue extends IR {
  public isType = false;
  abstract get ty(): Type.CWSType;
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
    public events: Event[] = [],
    public errors: Error[] = [],
    public typedefs: Type.CWSType[] = []
  ) {
    super();
  }
}

export class Fn extends CWSValue {
  public get ty(): Type.CWSFnType {
    return new Type.CWSFnType(
      this.fallible,
      this.params.map((x) => x.ty),
      this.returnTy
    );
  }

  public get fallible(): boolean {
    return this.name.endsWith('!');
  }

  constructor(
    public name: string,
    public params: Param[],
    public returnTy: Type.CWSType,
    public body: IR[] = []
  ) {
    super();
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
  constructor(
    public ty: Type.CWSStructType,
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

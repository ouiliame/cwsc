import { IR, CWSExpr, CWSType, CWSValue } from './ir-base';
import * as Value from './values';
import * as Expr from './exprs';
import * as Type from './types';

import { SymbolTable } from '../symbolic/symbol-table';

export class Stmt extends IR {
  public isType(): this is CWSType {
    return false;
  }
  public eval(symbols: SymbolTable): CWSValue {
    return Value.NoneValue;
  }
}

export class Import extends Stmt {
  constructor(public items: string[], public src: string) {
    super();
  }
}

export class Return extends Stmt {
  constructor(public expr: CWSExpr | CWSValue) {
    super();
  }
}

export class Exec extends Stmt {
  constructor(public expr: CWSExpr | CWSValue, public options?: any) {
    super();
  }
}

export class DelegateExec extends Stmt {
  constructor(public expr: CWSExpr | CWSValue, public options?: any) {
    super();
  }
}

export class Instantiate extends Stmt {
  constructor(public expr: CWSExpr | CWSValue, public options?: any) {
    super();
  }
}

export class Emit extends Stmt {
  constructor(public expr: CWSExpr | CWSValue) {
    super();
  }
}

export class Fail extends Stmt {
  constructor(public expr: CWSExpr | CWSValue) {
    super();
  }
}

export interface IdentBinding {
  ident: {
    name: string;
    ty: CWSType;
  };
}

export type TupleBinding = {
  tuple: {
    name: string;
    ty: CWSType;
  }[];
};

export type StructBinding = {
  struct: {
    name: string;
    ty: CWSType;
  }[];
};
export class Let extends Stmt {
  constructor(
    public binding: IdentBinding | TupleBinding | StructBinding,
    public value: CWSExpr | CWSValue
  ) {
    super();
  }
}

export class Const extends Stmt {
  constructor(
    public name: string,
    public type: CWSType,
    public value: CWSExpr | CWSValue
  ) {
    super();
  }
}

export class If extends Stmt {
  constructor(
    public cond: CWSExpr | CWSValue,
    public then: IR[],
    public else_: IR[] | null
  ) {
    super();
  }
}

export class Assign extends Stmt {
  constructor(
    public name: string,
    public op: string,
    public value: CWSExpr | CWSValue
  ) {
    super();
  }
}

export class AssignMember extends Stmt {
  constructor(
    public obj: CWSExpr | CWSValue,
    public memberName: string,
    public op: string,
    public value: CWSExpr | CWSValue
  ) {
    super();
  }
}

export class AssignIndex extends Stmt {
  constructor(
    public obj: CWSExpr | CWSValue,
    public index: CWSExpr | CWSValue,
    public op: string,
    public value: CWSExpr | CWSValue
  ) {
    super();
  }
}

export class For extends Stmt {
  constructor(
    public bindings: IdentBinding | TupleBinding | StructBinding,
    public iterable: CWSExpr | CWSValue,
    public body: IR[]
  ) {
    super();
  }
}

export class While extends Stmt {
  constructor(public cond: CWSExpr | CWSValue, public body: IR[]) {
    super();
  }
}

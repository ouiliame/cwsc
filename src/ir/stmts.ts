import { IR } from './ir-base';
import * as Value from './values';
import * as Expr from './exprs';
import * as Type from './types';

import { SymbolTable } from '../symbol-table';

export class Stmt extends IR {
  public isType(): this is Type.CWSType {
    return false;
  }
  public eval(symbols: SymbolTable): Value.CWSValue {
    return Value.NoneValue;
  }
}

export class ImportItems extends Stmt {
  constructor(
    public items: string[],
    public src: string
  ) {
    super();
  }
}

export class ImportAll extends Stmt {
  constructor(public src: string) {
    super();
  }
}

export class Return extends Stmt {
  constructor(public expr: Expr.CWSExpr | Value.CWSValue) {
    super();
  }
}

export class Exec extends Stmt {
  constructor(
    public expr: Expr.CWSExpr | Value.CWSValue,
    public options?: any
  ) {
    super();
  }
}

export class DelegateExec extends Stmt {
  constructor(
    public expr: Expr.CWSExpr | Value.CWSValue,
    public options?: any
  ) {
    super();
  }
}

export class Instantiate extends Stmt {
  constructor(
    public expr: Expr.CWSExpr | Value.CWSValue,
    public options?: any
  ) {
    super();
  }
}

export class Emit extends Stmt {
  constructor(public expr: Expr.CWSExpr | Value.CWSValue) {
    super();
  }
}

export class Fail extends Stmt {
  constructor(public expr: Expr.CWSExpr | Value.CWSValue) {
    super();
  }
}

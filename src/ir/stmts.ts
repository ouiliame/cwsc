import { IR } from './ir-base';
import * as Value from './values';
import * as Type from './types';
import * as Expr from './exprs';

import { SymbolTable } from '../symbol-table';

export class Stmt extends IR {
  public isType = false;
  public eval(symbols: SymbolTable): Value.CWSValue {
    return Value.NoneValue;
  }
}

export class Return extends Stmt {
  constructor(public expr: Expr.Expr | Value.CWSValue) {
    super();
  }
}

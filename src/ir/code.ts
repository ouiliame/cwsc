import { SymbolTable } from '../symbol-table';
import { IR } from './ir-base';
import * as Type from './types';
import * as Value from './values';

export class SourceFile extends IR {
  constructor(public children: IR[] = []) {
    super();
  }

  public isType(): this is Type.CWSType {
    return false;
  }

  eval(symbols: SymbolTable): Value.CWSValue | Type.CWSType {
    return Value.NoneValue;
  }
}

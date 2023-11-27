import { SymbolTable } from '../symbol-table';
import { IR, CWSType, CWSValue, CWSExpr } from './ir-base';
import * as Type from './types';
import * as Value from './values';

export class SourceFile extends IR {
  constructor(public children: IR[] = []) {
    super();
  }

  public isType(): this is CWSType {
    return false;
  }

  eval(symbols: SymbolTable): CWSValue | CWSType {
    return Value.NoneValue;
  }

  public get contracts(): Value.Contract[] {
    return this.children.filter(
      (child) => child instanceof Value.Contract
    ) as Value.Contract[];
  }

  public get interfaces(): Type.CWSInterfaceType[] {
    return this.children.filter(
      (child) => child instanceof Type.CWSInterfaceType
    ) as Type.CWSInterfaceType[];
  }

  public get typedefs(): CWSType[] {
    return this.children.filter(
      (child) =>
        child instanceof Type.CWSStructType ||
        child instanceof Type.CWSEnumType ||
        child instanceof Type.CWSTypeAliasType
    ) as CWSType[];
  }

  public get fns(): Value.Fn[] {
    return this.children.filter(
      (child) => child instanceof Value.Fn
    ) as Value.Fn[];
  }
}

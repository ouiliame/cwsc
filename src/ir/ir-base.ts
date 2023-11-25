import type * as Type from './types';
import type * as Value from './values';
import type * as Expr from './exprs';
import { SymbolTable } from '../symbol-table';

export abstract class IR {
  public isType(): this is Type.CWSType {
    return false;
  }
  public get members(): (ValueMember | TypeMember)[] {
    return [];
  }

  public getMember(name: string): Value.CWSValue | Type.CWSType | undefined {
    const candidates = this.members.filter((x) => x.name === name);
    if (candidates.length === 0) {
      return undefined;
    }
    let result = candidates[0];
    if ('value' in result) {
      return result.value;
    } else {
      return result.ty;
    }
  }

  public getIndex(index: Value.CWSValue): Value.CWSValue {
    throw new Error('Cannot index into non-indexable value');
  }

  abstract eval(symbols: SymbolTable): Value.CWSValue | Type.CWSType;
}
export interface Param {
  name: string;
  ty: Type.CWSType;
  optional?: boolean;
}

export interface Arg {
  name?: string;
  value: Expr.CWSExpr;
}

export interface ValueMember {
  name: string;
  value: Value.CWSValue;
}

export interface TypeMember {
  name: string;
  ty: Type.CWSType;
}

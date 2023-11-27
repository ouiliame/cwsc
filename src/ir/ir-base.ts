import * as Type from './types';
import * as Value from './values';
import * as Expr from './exprs';
import { SymbolTable } from '../symbol-table';

export abstract class IR {
  public isType(): this is Type.CWSType {
    return false;
  }
  public get members(): (ValueMember | TypeMember)[] {
    return [];
  }

  public getMember(
    name: string
  ): Value.CWSValue | Type.CWSType | Expr.CWSExpr | undefined {
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

  /** Function for resolving complex forms into simpler ones, validations, type inference. */
  abstract eval(
    symbols: SymbolTable
  ): Value.CWSValue | Type.CWSType | Expr.CWSExpr;

  public evalValue(symbols: SymbolTable): Value.CWSValue {
    const val = this.eval(symbols);
    if (val instanceof Value.CWSValue) {
      return val;
    } else {
      throw new Error('Expected value, got type');
    }
  }

  public evalType(symbols: SymbolTable): Type.CWSType {
    const ty = this.eval(symbols);
    if (ty.isType()) {
      return ty;
    } else {
      throw new Error('Expected type, got value');
    }
  }
}
export interface Param {
  name: string;
  ty: Type.CWSType;
  optional?: boolean;
}

export interface Arg {
  name: string;
  value: Value.CWSValue | Expr.CWSExpr;
}

export interface ValueMember {
  name: string;
  value: Value.CWSValue | Expr.CWSExpr;
}

export interface TypeMember {
  name: string;
  ty: Type.CWSType;
}

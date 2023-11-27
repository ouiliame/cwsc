import * as Type from './types';
import * as Value from './values';
import * as Expr from './exprs';

import { SymbolTable } from '../symbol-table';
export abstract class IR {
  public isType(): this is CWSType {
    return false;
  }
  public get members(): (ValueMember | TypeMember)[] {
    return [];
  }

  public getMember(name: string): CWSValue | CWSType | CWSExpr | undefined {
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

  public getIndex(index: CWSValue): CWSValue {
    throw new Error('Cannot index into non-indexable value');
  }

  /** Function for resolving complex forms into simpler ones, validations, type inference. */
  abstract eval(symbols: SymbolTable): CWSValue | CWSType | CWSExpr;
}

export interface Param {
  name: string;
  ty: CWSType;
  optional?: boolean;
}

export interface Arg {
  name: string;
  value: CWSValue | CWSExpr;
}

export interface ValueMember {
  name: string;
  value: CWSValue | CWSExpr;
}

export interface TypeMember {
  name: string;
  ty: CWSType;
}

export class CWSType extends IR {
  public isType(): this is CWSType {
    return true;
  }

  constructor(
    public name: string,
    public supertypes: CWSType[] = []
  ) {
    super();
  }

  public eval(symbols: SymbolTable): CWSType {
    return this;
  }

  public isEqualTo(other: CWSType): boolean {
    return this.name === other.name;
  }

  public isSubtypeOf(other: CWSType): boolean {
    return (
      this.isEqualTo(other) || this.supertypes.some((x) => x.isSubtypeOf(other))
    );
  }
}

export abstract class CWSValue extends IR {
  public isType(): this is CWSType {
    return false;
  }
  abstract get ty(): CWSType;
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

  public getMember(name: string): CWSValue | CWSType | CWSExpr | undefined {
    // if the member doesn't exist on this value, check the type
    const member = super.getMember(name);
    if (member === undefined) {
      return this.ty.getMember(name);
    } else {
      return member;
    }
  }
}
export class CWSExpr extends IR {
  public isType(): this is CWSType {
    return false;
  }

  public eval(symbols: SymbolTable): CWSExpr | CWSValue | CWSType {
    throw new Error('Not implemented');
  }
}

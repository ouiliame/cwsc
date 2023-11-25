import { SymbolTable } from '../symbol-table';
import { IR, Arg } from './ir-base';
import * as Type from './types';
import * as Value from './values';

export abstract class Expr extends IR {
  public isType = false;

  abstract eval(symbols: SymbolTable): Value.CWSValue | Type.CWSType;
}

export class Dot extends Expr {
  constructor(
    public expr: Expr | Value.CWSValue,
    public memberName: string
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const obj = this.expr.eval(symbols);
    const member = obj.getMember(this.memberName);
    if (member === undefined) {
      throw new Error(`Member ${this.memberName} not found`);
    }
    return member;
  }
}

export class Index extends Expr {
  constructor(
    public expr: Expr | Value.CWSValue,
    public index: Expr | Value.CWSValue
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const obj = this.expr.eval(symbols);
    const index = this.index.eval(symbols);
    if (index instanceof Type.CWSType) {
      throw new Error('Tried to index using a type');
    }

    return obj.getIndex(index);
  }
}

export class Call extends Expr {
  constructor(
    public fn: Expr,
    public args: Arg[]
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const fn = this.fn.eval(symbols);
    if (fn instanceof Value.Fn) {
      // evaluate arguments
      const args = this.args.map((x) => ({
        name: x.name,
        value: x.value.eval(symbols),
      }));
      return fn.call(symbols, this.args);
    } else {
      throw new Error('Tried to call non-function');
    }
  }
}

export class As extends Expr {
  constructor(
    public expr: Expr,
    public ty: Type.CWSType
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return this.ty;
  }
}

export class Exists extends Expr {
  constructor(public expr: Expr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const expr = this.expr.eval(symbols);
    if (expr instanceof Value.CWSValue) {
      if (expr instanceof Value.None) {
        return new Value.Bool(false);
      } else {
        return new Value.Bool(true);
      }
    }
    throw new Error('Cannot check existence of a type');
  }
}

export class Not extends Expr {
  constructor(public expr: Expr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const expr = this.expr.eval(symbols);
    if (expr instanceof Value.Bool) {
      return new Value.Bool(!expr.value);
    }
    throw new Error('Cannot negate non-boolean');
  }
}

export class Query extends Expr {
  constructor(public expr: Expr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class QueryNow extends Expr {
  constructor(public expr: Expr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class Fail extends Expr {
  constructor(public expr: Expr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class Tuple extends Expr {
  constructor(
    public tupleTy: Type.CWSTupleType,
    public elements: Expr[] = []
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    return new Value.Tuple(
      this.tupleTy,
      this.elements.map((x) => x.eval(symbols) as Value.CWSValue)
    );
  }
}

export class Ident extends Expr {
  constructor(public name: string) {
    super();
  }

  public eval(symbols: SymbolTable) {
    let res = symbols.lookup(this.name);
    if (res === null) {
      throw new Error('Identifier not found: ' + this.name);
    } else {
      if ('value' in res) {
        return res.value!;
      } else if ('ty' in res) {
        return res.ty!;
      } else {
        throw new Error('Invalid symbol table entry');
      }
    }
  }
}

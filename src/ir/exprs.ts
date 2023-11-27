import { SymbolTable } from '../symbol-table';
import { IR, Arg } from './ir-base';
import * as Type from './types';
import * as Value from './values';
import type { Op } from '../ast';

export abstract class CWSExpr extends IR {
  public isType(): this is Type.CWSType {
    return false;
  }

  abstract eval(symbols: SymbolTable): Value.CWSValue | Type.CWSType;
}

export class Dot extends CWSExpr {
  constructor(
    public expr: CWSExpr | Value.CWSValue,
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

export class Index extends CWSExpr {
  constructor(
    public expr: CWSExpr | Value.CWSValue,
    public index: Arg
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const obj = this.expr.evalValue(symbols);
    const index = this.index.value.evalValue(symbols);
    return obj.getIndex(index);
  }
}

export class Call extends CWSExpr {
  constructor(
    public fn: CWSExpr,
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
    } else if (fn instanceof Type.CWSStructType) {
      // evaluate arguments
      const args = this.args.map((x) => ({
        name: x.name,
        value: x.value.eval(symbols),
      }));

      fn.structFn.call(symbols, this.args);
    }
  }
}

export class As extends CWSExpr {
  constructor(
    public expr: CWSExpr,
    public ty: Type.CWSType
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return this.ty;
  }
}

export class In extends CWSExpr {
  constructor(
    public lhs: CWSExpr,
    public rhs: CWSExpr
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class Is extends CWSExpr {
  constructor(
    public negative: boolean,
    public lhs: CWSExpr,
    public rhs: Type.CWSType
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class TryCatchElse extends CWSExpr {
  constructor(
    public body: IR[],
    public catch_: CatchClause[],
    public else_: IR[] | null
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class CatchClause {
  constructor(
    public matchErr: Type.CWSType,
    public body: IR[]
  ) {}
}

export class Exists extends CWSExpr {
  constructor(public expr: CWSExpr) {
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

export class BinOp extends CWSExpr {
  constructor(
    public lhs: CWSExpr,
    public op: Op,
    public rhs: CWSExpr
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const lhs = this.lhs.eval(symbols);
    const rhs = this.rhs.eval(symbols);
    return lhs;
    throw new Error('Not implemented');
  }
}

export class Not extends CWSExpr {
  constructor(public expr: CWSExpr) {
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

export class And extends CWSExpr {
  constructor(
    public lhs: CWSExpr,
    public rhs: CWSExpr
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const lhs = this.lhs.eval(symbols);
    const rhs = this.rhs.eval(symbols);
    if (lhs instanceof Value.Bool && rhs instanceof Value.Bool) {
      return new Value.Bool(lhs.value && rhs.value);
    }
    throw new Error('Cannot AND non-booleans');
  }
}

export class Or extends CWSExpr {
  constructor(
    public lhs: CWSExpr,
    public rhs: CWSExpr
  ) {
    super();
  }

  public eval(symbols: SymbolTable) {
    const lhs = this.lhs.eval(symbols);
    const rhs = this.rhs.eval(symbols);
    if (lhs instanceof Value.Bool && rhs instanceof Value.Bool) {
      return new Value.Bool(lhs.value || rhs.value);
    }
    throw new Error('Cannot OR non-booleans');
  }
}

export class Query extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class QueryNow extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class Fail extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }

  public eval(symbols: SymbolTable) {
    throw new Error('Not implemented');
    return new Value.None();
  }
}

export class Tuple extends CWSExpr {
  constructor(
    public tupleTy: Type.CWSType,
    public elements: CWSExpr[] = []
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

export class Ident extends CWSExpr {
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

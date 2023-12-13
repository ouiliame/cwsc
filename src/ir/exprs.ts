import { IR, Arg, CWSExpr, CWSType, CWSValue } from './ir-base';
import * as Type from './types';
import * as Value from './values';
import type { Op } from '../ast';

export class Dot extends CWSExpr {
  constructor(public expr: CWSExpr | CWSValue, public memberName: string) {
    super();
  }
}

export class Index extends CWSExpr {
  constructor(
    public expr: CWSExpr | CWSValue,
    public index: CWSExpr | CWSValue
  ) {
    super();
  }
}

export class Call extends CWSExpr {
  constructor(
    public fn: CWSExpr,
    public typeArgs: CWSType[],
    public args: Arg[]
  ) {
    super();
  }
  /*
  public eval(symbols: SymbolTable) {
    const fn = this.fn.eval(symbols);
    if (fn instanceof Value.Fn) {
      // evaluate arguments
      const args = this.args.map((x) => ({
        name: x.name,
        value: x.value.eval(symbols),
      }));
      return fn.call(symbols, [], this.args);
    } else if (fn instanceof Type.CWSStructType) {
      // evaluate arguments
      const args = this.args.map((x) => ({
        name: x.name,
        value: x.value.eval(symbols),
      }));

      return fn.structFn.call(symbols, [], this.args);
    } else {
      throw new Error('Cannot call non-function');
    }
  }*/
}

export class As extends CWSExpr {
  constructor(public expr: CWSExpr, public ty: CWSType) {
    super();
  }
}

export class In extends CWSExpr {
  constructor(public lhs: CWSExpr, public rhs: CWSExpr) {
    super();
  }
}

export class Is extends CWSExpr {
  constructor(
    public negative: boolean,
    public lhs: CWSExpr,
    public rhs: CWSType
  ) {
    super();
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
}

export class CatchClause {
  constructor(public matchErr: CWSType, public body: IR[]) {}
}

export class Exists extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }
}

export class BinOp extends CWSExpr {
  constructor(public lhs: CWSExpr, public op: Op, public rhs: CWSExpr) {
    super();
  }
}

export class Not extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }
}

export class And extends CWSExpr {
  constructor(public lhs: CWSExpr, public rhs: CWSExpr) {
    super();
  }
}

export class Or extends CWSExpr {
  constructor(public lhs: CWSExpr, public rhs: CWSExpr) {
    super();
  }
}

export class Query extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }
}

export class QueryNow extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }
}

export class Fail extends CWSExpr {
  constructor(public expr: CWSExpr) {
    super();
  }
}

export class Tuple extends CWSExpr {
  constructor(public tupleTy: CWSType, public elements: CWSExpr[] = []) {
    super();
  }
}

export class Ident extends CWSExpr {
  constructor(public name: string) {
    super();
  }
}

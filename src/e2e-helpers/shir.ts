export abstract class CwsType {
  abstract get name(): string;
}

export class GenericType extends CwsType {
  constructor(public name: string) {
    super();
  }
}

export class ReturnExit extends CwsType {
  public get name(): string {
    return `ReturnExit[${this.type.name}]`;
  }

  constructor(public type: CwsType) {
    super();
  }
}

export class FailExit extends CwsType {
  public get name(): string {
    return `FailExit[${this.type.name}]`;
  }
  constructor(public type: CwsType) {
    super();
  }
}

export class TypeUnion extends CwsType {
  public alts: CwsType[];
  public get name(): string {
    return `Union[${this.alts.map((x) => x.name).join(', ')}]`;
  }

  constructor(...alts: CwsType[]) {
    super();
    this.alts = alts;
    this.simplify();
  }

  static fromTypes(...alts: CwsType[]): TypeUnion {
    // TODO: expand unions; dedup; return single type if only one
    return new TypeUnion(...alts);
  }

  includes(type: CwsType): boolean {
    return this.alts.some((x) => x.name === type.name);
  }

  filter(fn: (type: CwsType) => boolean): TypeUnion {
    return new TypeUnion(...this.alts.filter(fn));
  }

  merge(other: CwsType): TypeUnion {
    if (other instanceof TypeUnion) {
      return new TypeUnion(...this.alts, ...other.alts);
    }
    return new TypeUnion(...this.alts, other);
  }

  simplify(): this {
    let types = this.alts;
    // expand unions and dedup
    types = types.flatMap((x) => (x instanceof TypeUnion ? x.alts : [x]));
    types = types.filter((x, i) => types.indexOf(x) === i);
    // group return/fail exits
    const returnTypes = types
      .filter((x) => x instanceof ReturnExit)
      .map((x) => (x as ReturnExit).type);
    const failsTypes = types
      .filter((x) => x instanceof FailExit)
      .map((x) => (x as FailExit).type);
    // replace return/fail exits with simplified unions
    const returnExit =
      returnTypes.length > 0
        ? new ReturnExit(TypeUnion.fromTypes(...returnTypes))
        : undefined;
    const failExit =
      failsTypes.length > 0
        ? new FailExit(TypeUnion.fromTypes(...failsTypes))
        : undefined;
    // get simplified union
    types = types.filter(
      (x) => !(x instanceof ReturnExit || x instanceof FailExit)
    );
    // add return/fail exits if any
    if (returnExit) {
      types.push(returnExit);
    }
    if (failExit) {
      types.push(failExit);
    }
    // set types
    this.alts = types;
    return this;
  }
}

export abstract class Stmt {
  abstract get ty(): CwsType;
}

export abstract class Expr extends Stmt {
  abstract get ty(): CwsType;
}

export class Value extends Expr {
  constructor(public ty: CwsType) {
    super();
  }
}

export class If extends Stmt {
  constructor(public cond: Expr, public then: Block, public else_?: Block) {
    super();
  }

  public get ty(): CwsType {
    return new TypeUnion(this.then.ty, this.else_?.ty ?? NoneT);
  }
}

export class CatchClause extends Stmt {
  constructor(public onTy: CwsType, public body: Block) {
    super();
  }

  public get ty(): CwsType {
    return this.body.ty;
  }
}

export class Try extends Stmt {
  constructor(
    public body: Block,
    public catch_: CatchClause[] = [],
    public else_?: Block
  ) {
    super();
  }

  public get ty(): CwsType {
    let ty = TypeUnion.fromTypes(this.body.ty); // start with body
    // get fail exits from body

    let getFailExists = () => ty.filter((x) => x instanceof FailExit);
    let failExits = getFailExists();
    // separate out fail exits from body
    ty = ty.filter((x) => !(x instanceof FailExit));

    // go through catch clauses in order
    for (const catch_ of this.catch_) {
      // if catch clause catches any of the fail exits from body
      if (failExits.includes(catch_.onTy)) {
        // remove the caught fail exit
        failExits = failExits.filter((x) => x.name !== catch_.onTy.name);
        // add the catch clause's body type to the union, but separate out fail exits
        ty = ty.merge(catch_.ty).filter((x) => !(x instanceof FailExit));
        // add catch clause's fail exit
        failExits = failExits
          .merge(catch_.ty)
          .filter((x) => x instanceof FailExit);
      }
    }

    // the else case is the catch-all, so disregard fail exits from catch clauses
    if (this.else_) {
      return ty.merge(this.else_.ty);
    } else {
      return ty.merge(failExits);
    }
  }
}

export class Return extends Stmt {
  get ty(): CwsType {
    return new ReturnExit(this.expr?.ty ?? NoneT);
  }

  constructor(public expr?: Expr) {
    super();
  }
}

export class Fail extends Stmt {
  get ty(): CwsType {
    return new FailExit(this.expr?.ty ?? NoneT);
  }

  constructor(public expr?: Expr) {
    super();
  }
}

export class Block extends Expr {
  constructor(public stmts: Stmt[]) {
    super();
  }

  public get ty(): TypeUnion {
    // walk over stmts and get the last one
    let ty: TypeUnion = TypeUnion.fromTypes(NoneT);
    for (const stmt of this.stmts) {
      if (stmt instanceof Return || stmt instanceof Fail) {
        ty = ty.merge(stmt.ty);
      }
    }
    // merge last stmt's type
    ty = ty.merge(this.stmts[this.stmts.length - 1].ty);
    // if there is no type beside return/fail exits, return None
    if (
      ty.filter((x) => !(x instanceof ReturnExit || x instanceof FailExit)).alts
        .length === 0
    ) {
      return ty.merge(NoneT);
    }
    return ty;
  }
}

export function $block(...stmts: Stmt[]): Block {
  return new Block(stmts);
}

export function $if(cond: Expr, then: Block, else_?: Block): If {
  return new If(cond, then, else_);
}

export function $val(type: CwsType) {
  return new Value(type);
}

export function $return(expr: Expr): Return {
  return new Return(expr);
}

const BoolT = new GenericType('Bool');
const StrT = new GenericType('String');
const IntT = new GenericType('Int');
const NoneT = new GenericType('None');
const Err1T = new GenericType('Err1');
const Err2T = new GenericType('Err2');

/*
{
  if (a) {
    return a;    
  } else if (b) {
    return b;
  } else if (c) {

  } else {

  }
}
*/

export function $try(
  body: Block,
  catch_: CatchClause[] = [],
  else_?: Block
): Try {
  return new Try(body, catch_, else_);
}

export function $catch(onTy: CwsType, body: Block): CatchClause {
  return new CatchClause(onTy, body);
}

export function $fail(val: Expr): Stmt {
  return new Fail(val);
}

const x = $block(
  $if($val(BoolT), $block($return($val(StrT))), $block($return($val(BoolT))))
);
/*
try {
  fail Err1
  fail Err2
  return Bool
} catch Err1 {
  fail Err2
  return Int
} catch Err2 {
  return None
} else {
  return StrT
}
*/
const y = $try(
  $block($fail($val(Err1T)), $fail($val(Err2T)), $return($val(BoolT))),
  [
    $catch(Err1T, $block($fail($val(Err2T)), $return($val(IntT)))),
    $catch(Err2T, $block($return($val(NoneT)))),
  ],
  $block($return($val(StrT)))
);

console.dir(y.ty, { depth: null });

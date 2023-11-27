import { IR, Param } from './ir-base';
import * as Value from './values';
import * as Expr from './exprs';
import * as Stmt from './stmts';

import { SymbolTable } from '../symbol-table';

// #region Types
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

  public option(): CWSOptionType<this> {
    return new CWSOptionType(this);
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

export class CWSTypeParam {
  constructor(
    public name: string,
    public bound?: CWSType
  ) {}
}

export class CWSTypeFn {
  constructor(
    public name: string,
    public typeParams: CWSTypeParam[],
    public body: (typeArgs: { [k: string]: CWSType }) => CWSType
  ) {}

  call(typeArgsList: CWSType[]): CWSType {
    let typeArgs: { [k: string]: CWSType } = {};
    for (let i = 0; i < this.typeParams.length; i++) {
      typeArgs[this.typeParams[i].name] = typeArgsList[i];
    }
    return this.body(typeArgs);
  }
}

export class CWSOptionType<T extends CWSType = CWSType> extends CWSType {
  constructor(public ty: T) {
    super(`${ty.name}?`);
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSOptionType) {
      return this.ty.isEqualTo(other.ty);
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // Option[U] <: Option[T] if U <: T // if U is assignable to T, then Option[U] is assignable to Option[T
    // U <: Option[T] if U <: T // if U is assignable to T, then U is assignable to Option[T]
    if (other instanceof CWSOptionType) {
      return this.ty.isSubtypeOf(other.ty);
    } else {
      return false;
    }
  }
}

export class CWSArrayType<T extends CWSType = CWSType> extends CWSType {
  constructor(
    public ty: T,
    public size: number
  ) {
    super(`Array[${ty.name}, ${size.toFixed()}]`);
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSArrayType) {
      return this.ty.isEqualTo(other.ty) && this.size === other.size;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // Array[U, N] <: Array[T, M] if U <: T and N == M
    if (other instanceof CWSArrayType) {
      return this.ty.isSubtypeOf(other.ty) && this.size === other.size;
    } else {
      return false;
    }
  }
}

export class CWSStructType extends CWSType {
  constructor(
    public name: string,
    public fields: Param[]
  ) {
    super(name);
  }

  public get structFn(): Value.Fn {
    return new Value.Fn(this.name, [], this.fields, this, [
      new Stmt.Return(
        new Value.Struct(
          this,
          this.fields.map((x) => {
            return {
              name: x.name,
              value: new Expr.Ident(x.name),
            };
          })
        )
      ),
    ]);
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSStructType) {
      if (this.name !== other.name) {
        return false;
      }
      if (this.fields.length !== other.fields.length) {
        return false;
      }
      for (let i = 0; i < this.fields.length; i++) {
        if (
          this.fields[i].name !== other.fields[i].name ||
          !this.fields[i].ty.isEqualTo(other.fields[i].ty)
        ) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // S <: T if S and T are struct types with the same name and each field in S is a subtype of the corresponding field in T
    if (other instanceof CWSStructType) {
      // if (this.name !== other.name) {
      //   return false; TODO: check if the name is different but it extends
      // }
      if (this.fields.length !== other.fields.length) {
        return false;
      }
      for (let i = 0; i < this.fields.length; i++) {
        if (
          this.fields[i].name !== other.fields[i].name ||
          // We assume all the custom struct type will only have covariant fields.
          // Functions and Map will have contravariant fields, and embedded as primitive types.
          !this.fields[i].ty.isSubtypeOf(other.fields[i].ty)
        ) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  public field(fieldName: string): Param {
    let fd = this.fields.find((x) => x.name === fieldName);
    if (fd === undefined) {
      throw new Error(
        `Struct type '${this.name}' has no field named '${fieldName}'`
      );
    }
    return fd;
  }
}

export class CWSTupleType extends CWSType {
  constructor(
    public name: string,
    public elementTys: CWSType[]
  ) {
    super(name);
  }
}

export class CWSEnumType extends CWSType {
  constructor(
    public name: string,
    public variants: CWSEnumVariant[]
  ) {
    super(name);
  }
}

export class CWSEnumVariantStructType extends CWSStructType {}

export class CWSEnumVariantTupleType extends CWSTupleType {}

export class CWSEnumVariantUnitType extends CWSType {}

export type CWSEnumVariant = CWSEnumVariantStructType | CWSEnumVariantUnitType;

export class CWSErrorType extends CWSStructType {}

export class CWSEventType extends CWSStructType {}

export class CWSTypeAliasType extends CWSType {
  constructor(
    public name: string,
    public value: CWSType
  ) {
    super(name);
  }
}

export class CWSTypePathType extends CWSType {
  constructor(public segments: string[]) {
    super(segments.join('.'));
  }

  public eval(symbols: SymbolTable): CWSType {
    let initial = symbols.lookup(this.segments[0]);
    if (!initial) {
      throw new Error(`Type '${this.name}' not found`);
    }
    let result = initial.ty ?? initial.value;
    if (result === undefined) {
      throw new Error(`TODO: SHOULD NOT HAPPEN`);
    } else {
      for (let i = 1; i < this.segments.length; i++) {
        result = result.getMember(this.segments[i]);
        if (result === undefined) {
          throw new Error(`Type '${this.name}' not found`);
        }
      }
      if (result.isType()) {
        return result;
      } else {
        throw new Error(`Type '${this.name}' not found`);
      }
    }
  }
}

export class CWSMessageType extends CWSType {
  constructor() {
    super('Message');
  }
}

export class CWSFnType extends CWSType {
  constructor(
    public fallible: boolean,
    public paramTys: CWSType[],
    public returnTy: CWSType
  ) {
    super(
      `${fallible ? 'Fallible' : ''}Fn[[${paramTys
        .map((x) => x.name)
        .join(', ')}], ${returnTy.name}]`
    );
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSFnType) {
      if (
        this.fallible !== other.fallible ||
        this.paramTys.length !== other.paramTys.length ||
        !this.returnTy.isEqualTo(other.returnTy)
      ) {
        return false;
      }
      for (let i = 0; i < this.paramTys.length; i++) {
        if (!this.paramTys[i].isEqualTo(other.paramTys[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // (U1, ..., Un) -> V <: (T1, ..., Tm) -> W if n == m and Ui <: Ti for all i and V <: W
    if (other instanceof CWSFnType) {
      if (
        this.fallible !== other.fallible ||
        this.paramTys.length !== other.paramTys.length ||
        !this.returnTy.isSubtypeOf(other.returnTy)
      ) {
        return false;
      }
      for (let i = 0; i < this.paramTys.length; i++) {
        if (!other.paramTys[i].isSubtypeOf(this.paramTys[i])) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

export class CWSContractResponseType extends CWSType {
  constructor() {
    super('ContractResponse');
  }
}

export class CWSInstantiateFnType extends CWSFnType {
  constructor(public params: Param[]) {
    super(
      true,
      params.map((x) => x.ty),
      new CWSContractResponseType()
    );
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSInstantiateFnType) {
      if (this.params.length !== other.params.length) {
        return false;
      }
      for (let i = 0; i < this.params.length; i++) {
        if (!this.params[i].ty.isEqualTo(other.params[i].ty)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // (U1, ..., Un) -> ContractResponse <: (T1, ..., Tm) -> ContractResponse if n == m and Ui <: Ti for all i
    if (other instanceof CWSInstantiateFnType) {
      if (this.params.length !== other.params.length) {
        return false;
      }
      for (let i = 0; i < this.params.length; i++) {
        if (!other.params[i].ty.isSubtypeOf(this.params[i].ty)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

export class CWSExecFnType extends CWSFnType {
  constructor(
    public execName: string,
    public params: Param[]
  ) {
    super(
      true,
      params.map((x) => x.ty),
      new CWSContractResponseType()
    );
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSExecFnType) {
      if (this.params.length !== other.params.length) {
        return false;
      }
      for (let i = 0; i < this.params.length; i++) {
        if (!this.params[i].ty.isEqualTo(other.params[i].ty)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // (U1, ..., Un) -> ContractResponse <: (T1, ..., Tm) -> ContractResponse if n == m and Ui <: Ti for all i
    if (other instanceof CWSExecFnType) {
      if (this.execName !== other.execName) {
        return false;
      }
      if (this.params.length !== other.params.length) {
        return false;
      }
      for (let i = 0; i < this.params.length; i++) {
        if (!other.params[i].ty.isSubtypeOf(this.params[i].ty)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

export class CWSQueryFnType extends CWSFnType {
  constructor(
    public queryName: string,
    public params: Param[]
  ) {
    super(
      true,
      params.map((x) => x.ty),
      new CWSContractResponseType()
    );
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSQueryFnType) {
      if (this.queryName !== other.queryName) {
        return false;
      }
      if (this.params.length !== other.params.length) {
        return false;
      }
      for (let i = 0; i < this.params.length; i++) {
        if (!this.params[i].ty.isEqualTo(other.params[i].ty)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // (U1, ..., Un) -> ContractResponse <: (T1, ..., Tm) -> ContractResponse if n == m and Ui <: Ti for all i
    if (other instanceof CWSQueryFnType) {
      if (this.queryName !== other.queryName) {
        return false;
      }
      if (this.params.length !== other.params.length) {
        return false;
      }
      for (let i = 0; i < this.params.length; i++) {
        if (!other.params[i].ty.isSubtypeOf(this.params[i].ty)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

export class CWSInterfaceType extends CWSType {
  constructor(
    name: string,
    public handlerFnTys: (
      | CWSInstantiateFnType
      | CWSExecFnType
      | CWSQueryFnType
    )[]
  ) {
    super('interface ${name}');
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSInterfaceType) {
      if (this.name !== other.name) {
        return false;
      }
      if (this.handlerFnTys.length !== other.handlerFnTys.length) {
        return false;
      }
      for (let i = 0; i < this.handlerFnTys.length; i++) {
        if (!this.handlerFnTys[i].isEqualTo(other.handlerFnTys[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // I <: J if I and J are interfaces with the same name and each handler function in I is a subtype of the corresponding handler function in J
    if (other instanceof CWSInterfaceType) {
      const thisInstantiate = this.handlerFnTys.filter(
        (x) => x instanceof CWSInstantiateFnType
      );
      const otherInstantiate = other.handlerFnTys.filter(
        (x) => x instanceof CWSInstantiateFnType
      );
      const thisExecs = this.handlerFnTys.filter(
        (x) => x instanceof CWSExecFnType
      );
      const otherExecs = other.handlerFnTys.filter(
        (x) => x instanceof CWSExecFnType
      );
      const thisQueries = this.handlerFnTys.filter(
        (x) => x instanceof CWSQueryFnType
      );
      const otherQueries = other.handlerFnTys.filter(
        (x) => x instanceof CWSQueryFnType
      );

      // check instantiate
      if (thisInstantiate.length !== 1 && otherInstantiate.length !== 1) {
        throw 'should not happen';
      }
      if (!thisInstantiate[0].isSubtypeOf(otherInstantiate[0])) {
        return false;
      }

      for (const exec of thisExecs) {
        const other = otherExecs.find((x) => x.name === exec.name);
        if (other === undefined) {
          return false;
        }
        if (!exec.isSubtypeOf(other)) {
          return false;
        }
      }

      for (const query of thisQueries) {
        const other = otherQueries.find((x) => x.name === query.name);
        if (other === undefined) {
          return false;
        }
        if (!query.isSubtypeOf(other)) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }
}

export class CWSListType<T extends CWSType = CWSType> extends CWSType {
  constructor(public ty: T) {
    super(`List[${ty.name}]`);
  }

  public isEqualTo(other: CWSType): boolean {
    if (other instanceof CWSListType) {
      return this.ty.isEqualTo(other.ty);
    }
    return false;
  }

  public isSubtypeOf(other: CWSType): boolean {
    // List[U] <: List[T] if U <: T
    if (other instanceof CWSListType) {
      return this.ty.isSubtypeOf(other.ty);
    } else {
      return false;
    }
  }
}

export const Infer = new CWSType('Infer');

export const CWSBoolType = new CWSType('Bool');
export const CWSIntType = new CWSType('Int');
export const CWSDecType = new CWSType('Dec');
export const CWSStringType = new CWSType('String');
export const CWSNoneType = new CWSType('None');
export class CWSContractType extends CWSType {
  constructor(name: string) {
    super('contract ${name}');
  }
}

// #endregion

// #region Helper Functions

export function structTy(
  name: string,
  fields: { [k: string]: CWSType }
): CWSStructType {
  let fieldsArr: Param[] = [];
  for (let k in fields) {
    fieldsArr.push({
      name: k,
      ty: fields[k],
    });
  }
  return new CWSStructType(name, fieldsArr);
}

export function tp(name: string, bound?: CWSType): CWSTypeParam {
  return new CWSTypeParam(name, bound);
}

export function fnTy(
  fallible: boolean,
  paramTys: CWSType[],
  returnTy: CWSType
): CWSFnType {
  return new CWSFnType(fallible, paramTys, returnTy);
}

// #endregion

const intTy = new CWSType('Int');
const uintTy = new CWSType('Uint', [intTy]);

const addFnTy = fnTy(false, [intTy, intTy], intTy);
const divFnTy = fnTy(true, [intTy, intTy], intTy);

const opt = new CWSTypeFn('Option', [tp('T')], ({ T }) => T.option());

/*
struct Map[%K, %V] {
  key: K,
  value: V
}
*/

// console.log(addFnTy.isEqualTo(divFnTy));

// // let x: Int = 1: Int;
// console.log(intTy.isSubtypeOf(intTy));

// // let f1: (Int, Int) -> Int
// // let f2: (Uint, Uint) -> Uint
// const f1 = fnTy(false, [intTy, intTy], intTy);
// const f2 = fnTy(false, [uintTy, uintTy], uintTy);
// console.log(f1.isSubtypeOf(f2));
// console.log(f2.isSubtypeOf(f1));

// // let f3: (Int, Int) -> Uint
// // let f4: (Uint, Uint) -> Int
// const f3 = fnTy(false, [intTy, intTy], uintTy);
// const f4 = fnTy(false, [uintTy, uintTy], intTy);
// console.log(f3.isSubtypeOf(f4));
// console.log(f4.isSubtypeOf(f3));

// let f5: (T, T) -> U
// let f6: (U, U) -> T
const T = tp('T');
const U = tp('U');
const f5 = new CWSTypeFn('f5', [T, U], ({ T, U }) =>
  fnTy(false, [T, T], U)
).call([intTy, uintTy]);
const f6 = new CWSTypeFn('f6', [T, U], ({ T, U }) =>
  fnTy(false, [U, U], T)
).call([intTy, uintTy]);

console.log(f5.isSubtypeOf(f6));
console.log(f6.isSubtypeOf(f5));

/*
struct Map[%K, %V] {
  key: K,
  value: V
}

let a: Map[Uint, Uint]
let b: Map[Uint, Int]
let c: Map[Int, Uint]
let d: Map[Int, Int]
*/

const mapStructTy = new CWSTypeFn('Map', [tp('K'), tp('V')], ({ K, V }) =>
  structTy(`Map[${K.name}, ${V.name}]`, { key: K, value: V })
);

// let mapvar: Map[Int, Uint] = new Map[Uint, Uint]()

let tyA = mapStructTy.call([uintTy, uintTy]);
let tyB = mapStructTy.call([uintTy, intTy]);
let tyC = mapStructTy.call([intTy, uintTy]);
let tyD = mapStructTy.call([intTy, intTy]);

// headers(vertical) = [tyA.name, tyB.name, tyC.name, tyD.name]
// headers(horizontal) = [tyA.name, tyB.name, tyC.name, tyD.name]
// table = grid
console.table([
  [null, tyA.name, tyB.name, tyC.name, tyD.name],
  [
    tyA.name,
    tyA.isSubtypeOf(tyA),
    tyA.isSubtypeOf(tyB),
    tyA.isSubtypeOf(tyC),
    tyA.isSubtypeOf(tyD),
  ],
  [
    tyB.name,
    tyB.isSubtypeOf(tyA),
    tyB.isSubtypeOf(tyB),
    tyB.isSubtypeOf(tyC),
    tyB.isSubtypeOf(tyD),
  ],
  [
    tyC.name,
    tyC.isSubtypeOf(tyA),
    tyC.isSubtypeOf(tyB),
    tyC.isSubtypeOf(tyC),
    tyC.isSubtypeOf(tyD),
  ],
  [
    tyD.name,
    tyD.isSubtypeOf(tyA),
    tyD.isSubtypeOf(tyB),
    tyD.isSubtypeOf(tyC),
    tyD.isSubtypeOf(tyD),
  ],
]);

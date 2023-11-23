export class CWSType {
  constructor(public name: string) {}

  public option(): CWSOptionType<this> {
    return new CWSOptionType(this);
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

export class CWSOptionType<T extends CWSType> extends CWSType {
  constructor(public ty: T) {
    super(`${ty.name}?`);
  }
}

export class CWSArrayType<T extends CWSType = CWSType> extends CWSType {
  constructor(
    public ty: T,
    public size: number
  ) {
    super(`Array[${ty.name}, ${size.toFixed()}]`);
  }
}

export class CWSStructType extends CWSType {
  constructor(
    public name: string,
    public fields: CWSStructField[]
  ) {
    super(name);
  }

  field(fieldName: string): CWSStructField {
    let fd = this.fields.find((x) => x.name === fieldName);
    if (fd === undefined) {
      throw new Error(
        `Struct type '${this.name}' has no field named '${fieldName}'`
      );
    }
    return fd;
  }
}

export class CWSStructField {
  constructor(
    public name: string,
    public ty: CWSType
  ) {}
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
}

export class CWSFnParam {
  constructor(
    public name: string,
    public ty: CWSType,
    public optional: boolean = false
  ) {}
}

// #region Helper Functions

export function structTy(
  name: string,
  fields: { [k: string]: CWSType }
): CWSStructType {
  let fieldsArr: CWSStructField[] = [];
  for (let k in fields) {
    fieldsArr.push(new CWSStructField(k, fields[k]));
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

const addFnTy = fnTy(false, [intTy, intTy], intTy);
const divFnTy = fnTy(true, [intTy, intTy], intTy);

const opt = new CWSTypeFn('Option', [tp('T')], ({ T }) => T.option());

const mapStructTy = new CWSTypeFn('Map', [tp('K'), tp('V')], ({ K, V }) =>
  structTy('Map', { key: K, value: V })
);

console.log(opt.call([addFnTy]).name);

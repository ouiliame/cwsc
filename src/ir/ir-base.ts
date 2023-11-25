import type * as Type from './ir';

export abstract class IR {
  abstract get isType(): boolean;
}
export interface Param {
  name: string;
  ty: Type.CWSType;
  optional?: boolean;
}

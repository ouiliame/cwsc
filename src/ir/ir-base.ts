import type { CWSType } from '../ir';

export abstract class IR {
  abstract get isType(): boolean;
}

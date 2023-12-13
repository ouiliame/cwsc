import type { TextView, Range } from '../util/position';
import { AstNode } from './abstract-node';
import { List, Stmt } from './nodes';
export class SourceFile {
  constructor(
    public file: string,
    public sourceText: TextView,
    public ast: List<Stmt>
  ) {
    ast.$sourceFile = this;
    ast.descendants.forEach((node) => {
      node.$sourceFile = this;
    });
  }

  public rangeOfNode(node: AstNode): Range | undefined {
    if (!node.$ctx) {
      return undefined;
    }
    return this.sourceText.rangeOfNode(node) ?? undefined;
  }
}

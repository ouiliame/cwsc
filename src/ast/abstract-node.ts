import { ParserRuleContext } from 'antlr4ts';
import type { Range } from 'vscode-languageserver';
import { SourceFile } from './source-file';
import { TextIndices } from '../util/position';

export type AstJson = AstJsonNode | AstJsonNodeList;
export interface AstJsonNode {
  $kind: string;
  $range?: Range;
  $indices?: TextIndices;
  $fields: {
    [key: string]: AstJson | string | number | boolean | null;
  };
}

export interface AstJsonNodeList {
  $list: AstJsonNode[];
  $indices?: TextIndices;
  $range?: Range;
}

function getIndices(ctx: ParserRuleContext): TextIndices {
  let start = ctx.start.startIndex;
  let end = ctx.stop?.stopIndex || ctx.start.stopIndex;
  let length = end - start + 1;

  return {
    start,
    end: start + length,
  };
}

export abstract class AstNode<K extends string = string> {
  abstract readonly $kind: K;

  public $ctx: ParserRuleContext | null = null;
  public $sourceFile: SourceFile | null = null;

  public get $indices(): TextIndices | null {
    if (!this.$ctx) {
      return null;
    }
    return getIndices(this.$ctx);
  }

  public get $range(): Range | null {
    if (!this.$ctx) {
      return null;
    }
    return this.$sourceFile?.rangeOfNode(this) ?? null;
  }

  constructor(public $parent: AstNode | null = null) {}

  static isNode(x: any): x is AstNode {
    return x instanceof AstNode;
  }

  public setParent<PK extends string>(parent: AstNode<PK> | null): void {
    this.$parent = parent;
  }

  public $(ctx: ParserRuleContext): this {
    this.$ctx = ctx;
    this.setParentForChildren();
    return this;
  }

  public get children(): AstNode[] {
    return Object.entries(this)
      .filter(
        ([key, value]) =>
          AstNode.isNode(value) && key !== '$parent' && key !== '$ctx'
      )
      .map(([_, value]) => value);
  }

  public get ancestors(): AstNode[] {
    const result = [];
    for (const ancestor of this.walkAncestors()) {
      result.push(ancestor);
    }
    return result;
  }

  public get ancestorsAndSelf(): AstNode[] {
    const result = [];
    for (const ancestor of this.walkAncestors(true)) {
      result.push(ancestor);
    }
    return result;
  }

  public *walkAncestors(
    includeSelf: boolean = false
  ): IterableIterator<AstNode> {
    let parent = this.$parent;
    while (parent !== null) {
      yield parent;
      parent = parent.$parent;
    }
  }

  public get nearestNodeCtx(): ParserRuleContext {
    for (const ancestor of this.ancestorsAndSelf) {
      if (ancestor.$ctx !== null) {
        return ancestor.$ctx;
      }
    }
    // not possible
    throw new Error('No ancestor has a context');
  }

  public nearestAncestorWhere(
    predicate: (x: AstNode) => boolean
  ): AstNode | undefined {
    for (const ancestor of this.walkAncestors()) {
      if (predicate(ancestor)) {
        return ancestor;
      }
    }
    return undefined;
  }

  public nearestAncestorOfType<X extends AstNode>(
    astType: new (...args: any) => X
  ): X | undefined {
    return this.nearestAncestorWhere(
      (x) => x.constructor.name === astType.name
    ) as X | undefined;
  }

  /// Breadth-first traversal of descendant nodes.
  public *walkDescendantsBFS(): IterableIterator<AstNode> {
    yield* this.children;
    for (const child of this.children) {
      yield* child.walkDescendantsBFS();
    }
  }

  /// Depth-first traversal of descendant nodes.
  public *walkDescendants(): IterableIterator<AstNode> {
    for (const child of this.children) {
      yield child;
      yield* child.walkDescendants();
    }
  }

  // Leaves-first traversal of descendant nodes.
  public *walkDescendantsLF(): IterableIterator<AstNode> {
    for (const child of this.children) {
      yield* child.walkDescendantsLF();
    }
    yield* this.children;
  }

  public get descendants(): AstNode[] {
    return Array.from(this.walkDescendants());
  }

  public descendantsOfType<X extends AstNode>(astType: {
    new (...args: any[]): X;
  }): X[] {
    return this.descendants
      .filter((x) => x instanceof astType)
      .map((x) => x as X);
  }

  /**
   * Returns true if this node is a "virtual" node, i.e. a node that does not
   * correspond to a node in the Ast. This is because we go over the Ast in
   * multiple passes of simplification and transformation. The final Ast prior
   * to code generation passes will be the semantically richest representation of the
   * original source code.
   *
   * We only drop context after it is no longer needed for further passes,
   * i.e. after all of the validation passes have been run. The context is mainly
   * used to provide diagnostics and error messages -- The Ast is traversible
   * without the context.
   *
   * @returns {boolean}
   */
  public isVirtual(): boolean {
    return this.$ctx === null;
  }

  public json(): AstJson {
    let res: AstJson = { $kind: this.$kind, $fields: {} };
    for (const key of Object.keys(this)) {
      //@ts-ignore
      if (
        key === '$parent' ||
        key === '$ctx' ||
        key === '$kind' ||
        key === '$sourceFile'
      ) {
        continue;
      }

      // @ts-ignore
      if (AstNode.isNode(this[key])) {
        // @ts-ignore
        res.$fields[key] = this[key].json();
      } else {
        // @ts-ignore
        res.$fields[key] = this[key];
      }
    }
    let { $range, $indices } = this;
    if ($range !== null) {
      res.$range = $range;
    }
    if ($indices !== null) {
      res.$indices = $indices;
    }
    return res;
  }

  protected setParentForChildren(): void {
    for (const key in this) {
      if (AstNode.isNode(this[key])) {
        // @ts-ignore
        this[key].setParent(this);
      }
    }
  }
}

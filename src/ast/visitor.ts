import { AstNode } from './abstract-node';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { TextView, Range } from '../util/position';

/* TODO: Generate visitor functions from AstNode nodes

type ModuleType = typeof AstNodes;
type ModuleEntries = {
  [K in keyof ModuleType]: ModuleType[K];
};
type ConstString<T> = T extends string ? (string extends T ? never : T) : T;
type NodeHasKind<T> = T extends typeof AstNode<infer K extends string>
  ? ConstString<K> extends string
    ? T
    : never
  : never;

type ModuleNodes = {
  [K in keyof ModuleEntries]: NodeHasKind<ModuleEntries[K]>;
};

type NeverKeys<T, K extends keyof T = keyof T> = {
  [P in K]: T[P] extends never ? P : never;
}[K];

type ExcludeNeverValues<T> = {
  [K in keyof T as Exclude<K, NeverKeys<T>>]: T[K];
};

type NodeClasses = ExcludeNeverValues<ModuleNodes>;

type VisitorFunctions<T> = {
  [K in keyof NodeClasses as `visit${K}`]?: (
    node: InstanceType<NodeClasses[K]>
  ) => any;
};

interface VisitorFns<T> extends VisitorFunctions<T> {
  babel: (node: AstNode) => T;
}

*/

export abstract class AstVisitor<T> {
  protected getVisitor(node: AstNode): ((node: AstNode) => T) | undefined {
    // @ts-ignore
    return this[`visit${node.constructor.name}`];
  }

  defaultVisit(node: AstNode): T {
    throw new Error(`No visitor for ${node.constructor.name}`);
  }

  collect(values: T[]): T {
    throw new Error('Not implemented');
  }

  visitChildren(node: AstNode): T[] {
    return node.children.map((child) => this.visit(child));
  }

  visit(node: AstNode): T {
    let visitorFn = this.getVisitor(node);
    if (visitorFn !== undefined) {
      return visitorFn.call(this, node);
    } else {
      return this.defaultVisit(node);
    }
  }
}

export abstract class AstValidatorVisitor extends AstVisitor<Diagnostic[]> {
  abstract get SOURCE(): string;

  public readonly sourceText: TextView;
  constructor(
    sourceText: string | TextView,
    public readonly sourceFile: string | null = null
  ) {
    super();
    if (typeof sourceText === 'string') {
      this.sourceText = new TextView(sourceText);
    } else {
      this.sourceText = sourceText;
    }
  }

  makeError(node: AstNode, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Error,
      source: this.SOURCE,
    };
  }

  makeWarning(node: AstNode, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Warning,
      source: this.SOURCE,
    };
  }

  makeInfo(node: AstNode, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Information,
      source: this.SOURCE,
    };
  }

  makeHint(node: AstNode, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Hint,
      source: this.SOURCE,
    };
  }

  rangeOfNode(node: AstNode): Range {
    if (!node.$ctx) {
      throw new Error('Cannot get range for node without context');
    }
    return this.sourceText.rangeOfNode(node)!;
  }

  collect(values: Diagnostic[][]): Diagnostic[] {
    return values.flat();
  }

  defaultVisit(node: AstNode): Diagnostic[] {
    return this.collect(this.visitChildren(node));
  }
}

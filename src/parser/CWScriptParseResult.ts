import type { TextView, Range, TextIndices } from '../util/position';
import { AstNode, AstJson } from '../ast/abstract-node';
import { SourceFile } from '../ast/nodes';
import type { Diagnostic } from 'vscode-languageserver';

export class CWScriptParseResult {
  constructor(
    public file: string,
    public sourceText: TextView,
    public ast: SourceFile,
    public diagnostics: Diagnostic[]
  ) {}

  public rangeOfNode(node: AstNode): Range | null {
    return this.sourceText.rangeOfNode(node);
  }

  public astToJson(node: AstNode = this.ast): AstJson {
    let res: AstJson = { $kind: node.$kind, $fields: {} };
    for (const key of Object.keys(node)) {
      //@ts-ignore
      if (
        key === '$parent' ||
        key === '$antlrParseRuleCtx' ||
        key === '$kind'
      ) {
        continue;
      }
      // @ts-ignore
      if (AstNode.isNode(node[key])) {
        // @ts-ignore
        res.$fields[key] = this.astToJson(node[key]);
      } else {
        // @ts-ignore
        res.$fields[key] = node[key];
      }
    }
    let { $indices } = node;
    let $range = this.rangeOfNode(node);
    if ($indices !== null) {
      res.$indices = $indices;
    }
    if ($range !== null) {
      res.$range = $range;
    }
    return res;
  }
}

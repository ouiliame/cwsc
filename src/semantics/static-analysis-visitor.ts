import * as AST from '../ast';
import type { Diagnostic } from 'vscode-languageserver';

export class StaticAnalysisVisitor extends AST.ASTValidatorVisitor {
  public SOURCE = 'cwscript/semantics/static-analysis';

  visitFnDefn(node: AST.FnDefn): Diagnostic[] {
    console.log('visitFnDefn', node.name.value);
    return [];
  }
}

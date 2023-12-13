import * as Ast from '../ast';
import type { Diagnostic } from 'vscode-languageserver';

export class StaticAnalysisVisitor extends Ast.AstValidatorVisitor {
  public SOURCE = 'cwscript/semantics/static-analysis';

  visitFnDefn(node: Ast.FnDefn): Diagnostic[] {
    return [];
  }
}

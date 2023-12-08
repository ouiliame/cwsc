import * as Ast from '../ast';
/*

*/
export class IRBuilderVisitor extends Ast.AstVisitor<any> {
  visitSourceFile(node: Ast.SourceFile): any {
    return this.visitChildren(node);
  }
}

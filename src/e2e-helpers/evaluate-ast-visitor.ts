import * as Ast from '../ast';
import * as Ir from '../ir';
export class EvaluateAstVisitor extends Ast.AstVisitor<any> {
  constructor(public ctx: any) {
    super();
  }

  visitSourceFile(node: Ast.SourceFile) {
    return node.descendants.map((x) => this.visit(x));
  }

  visitLetStmt(node: Ast.LetStmt) {
    const value = this.visit(node.value);
    if (node.binding.$kind === 'IdentBinding') {
      const name = node.binding.name.value;
      this.ctx[name] = value;
    } else if (node.binding.$kind === 'TupleBinding') {
      const names = node.binding.names.map((x) => x.value);
      if (value instanceof Ir.Value.Tuple) {
        for (let i = 0; i < names.length; i++) {
          this.ctx[names[i]] = value.values[i];
        }
      }
    }
  }

  visitContractDefn(node: Ast.ContractDefn) {
    const name = node.name.value;
    return new Ir.Value.Contract(name);
  }

  visitInstantiateDefn(node: Ast.InstantiateDefn) {
    const params = node.params.map((p) => this.visit(p));
    const body = this.visitBlock(node.body);
    return new Ir.Value.InstantiateFn(params, body);
  }

  visitBlock(node: Ast.Block): Ir.IR[] {
    // A block should actually
    return node.stmts.map((x) => this.visit(x));
  }
}

// need to have some sort of evaluating context

import * as Ast from '../ast';

export class CgValue {
  constructor(public value: string) {}
}

// export function literalToCg(node: Ast.Literal) {
//   switch (node.$kind) {
//     case 'BoolLit':
//       return { $type: 'boolLit', value: node.value ? 'true' : 'false' };
//   }
// }

// I'll make functions for codegen forms

function cgLetMut(name: string, type: string | null, value: string) {
  if (type) {
    return `let mut ${name}: ${type} = ${value};`;
  } else {
    return `let mut ${name} = ${value};`;
  }
}

export class CgBlockVisitor extends Ast.AstVisitor<any> {
  defaultVisit(node: Ast.AstNode<string>) {
    return '/* TODO: Untranslated ' + node.$kind + ' \n\n */';
  }

  visitBlock(node: Ast.Block) {
    return node.stmts.map((x) => this.visit(x));
  }

  visitLetStmt(node: Ast.LetStmt) {
    if (node.binding.$kind === 'IdentBinding') {
      const name = node.binding.name.value;
      const value = this.visit(node.value);
      cgLetMut(name, null, value);
    }
    // TODO: handle other kinds of bindings
    return this.defaultVisit(node);
  }

  visitCallExpr(node: Ast.CallExpr) {
    const fnName = this.visit(node.fn);
    const args = node.args.map((x) => this.visit(x));
    return `${fnName}(${args.join(', ')})`;
  }

  visitIdentExpr(node: Ast.IdentExpr) {
    return node.ident.value;
  }
}

export function blockToCg(node: Ast.Block): string[] {
  const blockVisitor = new CgBlockVisitor();
  return blockVisitor.visit(node);
}

import * as Ast from './ast';
import * as IR from './ir';
import { SymbolTable } from './symbolic/symbol-table';
import { CWScriptProject } from './projects';

export class AstEvaluator extends Ast.AstVisitor<any> {
  constructor(
    public project: CWScriptProject,
    public path: string,
    public symbols: SymbolTable = new SymbolTable()
  ) {
    super();
  }

  pushScope() {
    this.symbols = new SymbolTable(this.symbols);
  }

  popScope(): SymbolTable {
    if (!this.symbols.parent) {
      throw new Error('Tried to pop the global scope');
    }
    let prevScope = this.symbols;
    this.symbols = this.symbols.parent;
    return prevScope;
  }

  visitSourceFile(node: Ast.SourceFile) {
    this.visitChildren(node);
  }

  visitImportStmt(node: Ast.ImportStmt) {
    node.items?.forEach((item) => {
      this.symbols.set(item.value, {
        type: 'import',
        ast: item,
        value: undefined,
      });
    });
  }

  visitContractDefn(node: Ast.ContractDefn) {
    this.pushScope();
    node.body.forEach((stmt) => this.visit(stmt));
    this.popScope();
  }

  visitConstStmt(node: Ast.ConstStmt) {
    this.symbols.set(node.name.value, {
      type: 'const',
      ast: node,
      value: this.visit(node.value),
    });
  }

  visitBinOpExpr(node: Ast.BinOpExpr) {
    const lhs = this.visit(node.lhs);
    const rhs = this.visit(node.rhs);
    console.log('+', lhs, rhs);
  }

  visitIdentExpr(node: Ast.IdentExpr) {
    const symbol = this.symbols.get(node.ident.value);
    if (!symbol) {
      throw new Error(`Undefined symbol ${node.ident.value}`);
    }
    return symbol.value;
  }

  visitIfExpr(node: Ast.IfExpr) {
    const pred = this.visit(node.pred);
    if (pred.type !== 'bool') {
      throw new Error('Predicate must be a boolean');
    }
  }
}

import * as Ast from '../ast';
import type { Diagnostic } from 'vscode-languageserver';

export class SymbolTable<T = any> {
  constructor(
    public parent: SymbolTable | null = null,
    public entries: T[] = []
  ) {}
}

export class SymbolTableVisitor extends Ast.AstVisitor<SymbolTable> {
  defaultVisit(node: Ast.AstNode): SymbolTable {
    return this.collect(this.visitChildren(node));
  }

  visitContractDefn(node: Ast.ContractDefn): SymbolTable {
    const symbols = new SymbolTable();
    // any types defined within the contract fall under the contract's namespace
    return symbols;
  }
}

import * as fs from 'fs';
import * as path from 'path';
import * as AST from './ast';
import { CWScriptParser } from './parser';

let examplePath = path.resolve('./examples/counter/src/Counter.cws');
let exampleSource = fs.readFileSync(examplePath, 'utf8');
let parser = new CWScriptParser(exampleSource);

let srcFile = parser.parse();

export type Symbols = Map<string, any>;

export class SymbolTableVisitor extends AST.ASTVisitor<Symbols> {
  collect(values: Symbols[]): Symbols {
    let symbols = new Map<string, any>();
    values.forEach((value) => {
      value.forEach((value, key) => {
        symbols.set(key, value);
      });
    });
    return symbols;
  }

  visitContractDefn(node: AST.ContractDefn): Symbols {
    let childSymbols = this.collect(this.visitChildren(node));
    let symbols = new Map<string, any>();
    symbols.set(node.name.value, childSymbols);
    return symbols;
  }

  defaultVisit(node: AST.AST): Symbols {
    return this.collect(this.visitChildren(node));
  }
}

let visitor = new SymbolTableVisitor();
let symbols = visitor.visit(srcFile);
console.log(symbols);

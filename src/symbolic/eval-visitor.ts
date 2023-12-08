import * as Ast from '../ast';
import * as Eval from './eval';
import { SymbolEntry, SymbolKind, SymbolTable } from '../symbol-table';
import { TextView } from '../util/position';

export class SymbolicEvalVisitor extends Ast.AstVisitor<any> {
  public scopes: Eval.LexicalSymbolTable[] = [];

  constructor(
    public sourceText: TextView,
    public sourceFile: string | null = null
  ) {
    super();
  }

  visitSourceFile(node: Ast.SourceFile): SymbolEntry {
    node.descendantsOfType(Ast.ContractDefn).forEach((contract) => {
      contract.symbols = new SymbolTable(node.symbols, []);
      this.visit(contract);
    });

    return undefined; // TODO
  }

  visitContractDefn(node: Ast.ContractDefn): SymbolEntry {
    // Initial iteration over the statements to gather all declarations
    node.body.forEach((defn) => {
      defn.symbols = new SymbolTable(node.symbols, []);
      // Values
      if (defn instanceof Ast.FnDefn) {
        node.symbols.addFunction(defn.name.value);
      }
      if (defn instanceof Ast.ConstStmt) {
        node.symbols.addVariable(defn.name.value);
      }
      // Types
      if (defn instanceof Ast.StructDefn) {
        node.symbols.addStruct(defn.name.value);
      }
      if (defn instanceof Ast.TupleDefn) {
        node.symbols.addTuple(defn.name.value);
      }
      if (defn instanceof Ast.UnitDefn) {
        node.symbols.addUnit(defn.name.value);
      }
      if (defn instanceof Ast.EnumDefn) {
        node.symbols.addEnum(defn.name.value);
      }
      if (defn instanceof Ast.InterfaceDefn) {
        node.symbols.addInterface(defn.name.value);
      }
      if (defn instanceof Ast.TypeAliasDefn) {
        node.symbols.addTypeAlias(defn.name.value);
      }
    });

    // Second iteration to resolve types
    node.body.forEach((x) => this.visit(x));
  }

  visitFnDefn(node: Ast.FnDefn): SymbolEntry {
    node.params.forEach((param) => {
      node.symbols.addParam(param.name.value);
      this.visit(node.body);
    });
  }

  visitConstStmt(node: Ast.ConstStmt): SymbolEntry {
    node.symbols.addVariable(node.name.value);
    // this.visit(node.value)
  }

  visitStructDefn(node: Ast.StructDefn): SymbolEntry {
    node.fields.forEach((field) => {
      // TODO: resolve types
    });

    return { kind: SymbolKind.Struct, name: node.name.value, defn: node };
  }

  visitTupleDefn(node: Ast.TupleDefn): SymbolEntry {
    node.elements.forEach((field) => {
      // TODO: resolve types
    });

    return { kind: SymbolKind.Tuple, name: node.name.value, defn: node };
  }

  visitUnitDefn(node: Ast.UnitDefn): SymbolEntry {
    // noop

    return { kind: SymbolKind.Unit, name: node.name.value, defn: node };
  }

  visitEnumDefn(node: Ast.EnumDefn): SymbolEntry {
    node.variants.forEach((variant) => {
      // TODO: resolve types
    });

    return { kind: SymbolKind.Enum, name: node.name.value, defn: node };
  }

  visitInterfaceDefn(node: Ast.InterfaceDefn): SymbolEntry {
    node.body.forEach((defn) => {
      // TODO: resolve types
    });

    return { kind: SymbolKind.Interface, name: node.name.value, defn: node };
  }

  visitTypeAliasDefn(node: Ast.TypeAliasDefn): SymbolEntry {
    // TODO: resolve types

    return { kind: SymbolKind.TypeAlias, name: node.name.value, defn: node };
  }
}

/*
SourceFile -> SymbolTable
  - ContractDefn -> SymbolTable
  - StructDefn
  - ConstStmt

SymbolTable:
  parent?: SymbolTable
  symbols: SymbolEntry[]

  get instantiate {
    symbols.filter()
  }

  getError(name: string) {
  }

SymbolEntry:
  { type: string, name: string, ast: AstNode }
*/

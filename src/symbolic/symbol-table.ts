import * as Ast from '../ast';
import * as IR from '../ir';

export interface SymbolTableEntry {
  type: string;
  ast?: Ast.Ast;
  value?: IR.CWSValue | IR.CWSExpr;
  ty?: IR.CWSType;
}

export class SymbolTable {
  constructor(
    public parent: SymbolTable | null = null,
    public symbols: Map<string, SymbolTableEntry> = new Map()
  ) {}

  public lookup(name: string): SymbolTableEntry | null {
    let entry = this.symbols.get(name);
    if (entry) {
      return entry;
    } else if (this.parent) {
      return this.parent.lookup(name);
    } else {
      return null;
    }
  }

  public set(name: string, entry: SymbolTableEntry) {
    this.symbols.set(name, entry);
  }

  public get(name: string): SymbolTableEntry | null {
    return this.symbols.get(name) || null;
  }

  public static fromAst(node: Ast.Ast): SymbolTable {
    let table = new SymbolTable();
    node.descendants.forEach((node: Ast.Ast) => {
      // find all declarations
      if (node instanceof Ast.TypeAliasDefn) {
        table.set(node.name.value, {
          type: 'type',
          ast: node,
        });
      }

      if (node instanceof Ast.FnDefn) {
        table.set(node.name.value, {
          type: 'function',
          ast: node,
        });
      }

      if (node instanceof Ast.ContractDefn) {
        table.set(node.name.value, {
          type: 'contract',
          ast: node,
        });
      }

      if (node instanceof Ast.InterfaceDefn) {
        table.set(node.name.value, {
          type: 'interface',
          ast: node,
        });
      }

      if (node instanceof Ast.EnumDefn) {
        table.set(node.name.value, {
          type: 'enum',
          ast: node,
        });
      }

      if (node instanceof Ast.StructDefn) {
        if (node.name) {
          table.set(node.name.value, {
            type: 'struct',
            ast: node,
          });
        }
      }

      if (node instanceof Ast.ConstStmt) {
        table.set(node.name.value, {
          type: 'const',
          ast: node,
        });
      }

      if (node instanceof Ast.InstantiateDefn) {
        table.set('#instantiate', {
          type: 'instantiate',
          ast: node,
        });
      }

      if (node instanceof Ast.ExecDefn) {
        table.set('exec #' + node.name.value, {
          type: 'exec',
          ast: node,
        });
      }

      if (node instanceof Ast.QueryDefn) {
        table.set('query #' + node.name.value, {
          type: 'query',
          ast: node,
        });
      }

      if (node instanceof Ast.EventDefn) {
        table.set(node.name!.value, {
          type: 'event',
          ast: node,
        });
      }

      if (node instanceof Ast.ErrorDefn) {
        table.set(node.name!.value, {
          type: 'error',
          ast: node,
        });
      }
    });

    return table;
  }
}

export interface SymbolIndexEntry {
  file: string;
  name: string;
  type: string;
  ast: Ast.Ast;
}

export class SymbolIndex {
  public entries: Array<SymbolIndexEntry> = [];

  public add(entry: SymbolIndexEntry) {
    this.entries.push(entry);
  }

  public merge(other: SymbolIndex) {
    this.entries.push(...other.entries);
  }

  public filter(
    filterFn: (entry: SymbolIndexEntry) => boolean
  ): SymbolIndexEntry[] {
    return this.entries.filter(filterFn);
  }

  public static fromFile(file: string, ast: Ast.SourceFile): SymbolIndex {
    let res = new SymbolIndex();
    ast.descendants.forEach((node: Ast.Ast) => {
      if ('name' in node) {
        let name: string;
        if (typeof node.name === 'string') {
          name = node.name;
        } else if (node.name instanceof Ast.Ident) {
          name = node.name.value;
        } else {
          return;
        }
        res.add({
          file,
          name,
          type: node.constructor.name,
          ast: node,
        });
      }
    });
    return res;
  }
}

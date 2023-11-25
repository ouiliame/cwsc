import * as AST from './ast';
import * as IR from './ir';

export interface SymbolTableEntry {
  type: string;
  ast?: AST.AST;
  value?: IR.Value.CWSValue;
  ty?: IR.Type.CWSType;
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

  public static fromAST(node: AST.AST): SymbolTable {
    let table = new SymbolTable();
    node.descendants.forEach((node) => {
      // find all declarations
      if (node instanceof AST.TypeAliasDefn) {
        table.set(node.name.value, {
          type: 'type',
          ast: node,
        });
      }

      if (node instanceof AST.FnDefn) {
        table.set(node.name.value, {
          type: 'function',
          ast: node,
        });
      }

      if (node instanceof AST.ContractDefn) {
        table.set(node.name.value, {
          type: 'contract',
          ast: node,
        });
      }

      if (node instanceof AST.InterfaceDefn) {
        table.set(node.name.value, {
          type: 'interface',
          ast: node,
        });
      }

      if (node instanceof AST.EnumDefn) {
        table.set(node.name.value, {
          type: 'enum',
          ast: node,
        });
      }

      if (node instanceof AST.StructDefn) {
        if (node.name) {
          table.set(node.name.value, {
            type: 'struct',
            ast: node,
          });
        }
      }

      if (node instanceof AST.ConstStmt) {
        table.set(node.name.value, {
          type: 'const',
          ast: node,
        });
      }

      if (node instanceof AST.InstantiateDefn) {
        table.set('#instantiate', {
          type: 'instantiate',
          ast: node,
        });
      }

      if (node instanceof AST.ExecDefn) {
        table.set('exec #' + node.name.value, {
          type: 'exec',
          ast: node,
        });
      }

      if (node instanceof AST.QueryDefn) {
        table.set('query #' + node.name.value, {
          type: 'query',
          ast: node,
        });
      }

      if (node instanceof AST.EventDefn) {
        table.set(node.name!.value, {
          type: 'event',
          ast: node,
        });
      }

      if (node instanceof AST.ErrorDefn) {
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
  ast: AST.AST;
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

  public static fromFile(file: string, ast: AST.SourceFile): SymbolIndex {
    let res = new SymbolIndex();
    ast.descendants.forEach((node) => {
      if ('name' in node) {
        let name: string;
        if (typeof node.name === 'string') {
          name = node.name;
        } else if (node.name instanceof AST.Ident) {
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

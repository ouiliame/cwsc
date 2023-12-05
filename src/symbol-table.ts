import type * as AST from './ast';
import type * as IR from './ir';

export enum SymbolKind {
  Variable,
  Function,
  Contract,
  Interface,
  Struct,
  Tuple,
  Unit,
  Enum,
  EnumVariantStruct,
  EnumVariantTuple,
  EnumVariantUnit,
  TypeAlias,
  Param,
}

export interface VariableEntry {
  kind: SymbolKind.Variable;
  name: string;
  defn: AST.AST;
  ty: IR.CWSType;
}

export interface FunctionEntry {
  kind: SymbolKind.Function;
  name: string;
  defn: AST.FnDefn;
  ty: IR.CWSType;
}

export interface ContractEntry {
  kind: SymbolKind.Contract;
  name: string;
  defn: AST.ContractDefn;
  ty: IR.CWSType;
}

export interface InterfaceEntry {
  kind: SymbolKind.Interface;
  name: string;
  defn: AST.InterfaceDefn;
  ty: IR.CWSType;
}

export interface StructEntry {
  kind: SymbolKind.Struct;
  name: string;
  defn: AST.StructDefn;
  ty: IR.CWSType;
}

export interface TupleEntry {
  kind: SymbolKind.Tuple;
  name: string;
  defn: AST.TupleDefn;
  ty: IR.CWSType;
}

export interface UnitEntry {
  kind: SymbolKind.Unit;
  name: string;
  defn: AST.UnitDefn;
  ty: IR.CWSType;
}

export interface EnumEntry {
  kind: SymbolKind.Enum;
  name: string;
  defn: AST.EnumDefn;
  ty: IR.CWSType;
}

export interface EnumVariantStructEntry {
  kind: SymbolKind.EnumVariantStruct;
  name: string;
  defn: AST.EnumVariantStructDefn;
  ty: IR.CWSType;
}

export interface EnumVariantTupleEntry {
  kind: SymbolKind.EnumVariantTuple;
  name: string;
  defn: AST.EnumVariantTupleDefn;
  ty: IR.CWSType;
}

export interface EnumVariantUnitEntry {
  kind: SymbolKind.EnumVariantUnit;
  name: string;
  defn: AST.EnumVariantUnitDefn;
  ty: IR.CWSType;
}

export interface TypeAliasEntry {
  kind: SymbolKind.TypeAlias;
  name: string;
  defn: AST.TypeAliasDefn;
  ty: IR.CWSType;
}

export interface ParamEntry {
  kind: SymbolKind.Param;
  name: string;
  defn: AST.Param;
  ty: IR.CWSType;
}

/*
  - asts get parsed
  - eval-visitor walks AST and builds symbol table, attached to each AST node
    - conversion of AST to semantic IR
    - type checking
    - building hierarchical symbol table
  - now we have AST + symbol table
  - codegen:
    - for each source file, get contracts from symbol table
    - for each contract, create an AIR contract model
      - create AIR 
*/


export type SymbolEntry = 
  | VariableEntry
  | FunctionEntry
  | ContractEntry
  | InterfaceEntry
  | StructEntry
  | TupleEntry
  | UnitEntry
  | EnumEntry
  | EnumVariantStructEntry
  | EnumVariantTupleEntry
  | EnumVariantUnitEntry
  | TypeAliasEntry
  | ParamEntry;

export type SymbolTableFilter = (symbol: SymbolEntry) => boolean;

export class SymbolTable {
  constructor(
    public parent: SymbolTable | null,
    public symbols: SymbolEntry[]
  ) {}

  lookup(name: string, filter?: SymbolTableFilter): SymbolEntry | null {
    for (let i = 0; i < this.symbols.length; i++) {
      const symbol = this.symbols[i];
      if (symbol.name === name && (!filter || filter(symbol))) {
        return symbol;
      }
    }
    return this.parent?.lookup(name, filter) ?? null;
  }

  lookupOwn(name: string, filter?: SymbolTableFilter): SymbolEntry | null {
    for (let i = 0; i < this.symbols.length; i++) {
      const symbol = this.symbols[i];
      if (symbol.name === name && (!filter || filter(symbol))) {
        return symbol;
      }
    }
    return null;
  }

  get variables(): VariableEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Variable) as VariableEntry[];
  }

  get functions(): FunctionEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Function) as FunctionEntry[];
  }

  get contracts(): ContractEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Contract) as ContractEntry[];
  }

  get interfaces(): InterfaceEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Interface) as InterfaceEntry[];
  }

  get structs(): StructEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Struct) as StructEntry[];
  }

  get tuples(): TupleEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Tuple) as TupleEntry[];
  }

  get units(): UnitEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Unit) as UnitEntry[];
  }

  get enums(): EnumEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Enum) as EnumEntry[];
  }

  get typeAliases(): TypeAliasEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.TypeAlias) as TypeAliasEntry[];
  }

  get params(): ParamEntry[] {
    return this.symbols.filter(s => s.kind === SymbolKind.Param) as ParamEntry[];
  }

  addVariable(name: string): void {
    this.symbols.push({ kind: SymbolKind.Variable, name });
  }

  addFunction(name: string): void {
    this.symbols.push({ kind: SymbolKind.Function, name });
  }

  addContract(name: string): void {
    this.symbols.push({ kind: SymbolKind.Contract, name });
  }

  addInterface(name: string): void {
    this.symbols.push({ kind: SymbolKind.Interface, name });
  }

  addStruct(name: string): void {
    this.symbols.push({ kind: SymbolKind.Struct, name });
  }

  addTuple(name: string): void {
    this.symbols.push({ kind: SymbolKind.Tuple, name });
  }

  addUnit(name: string): void {
    this.symbols.push({ kind: SymbolKind.Unit, name });
  }

  addEnum(name: string): void {
    this.symbols.push({ kind: SymbolKind.Enum, name });
  }

  addEnumVariantStruct(name: string): void {
    this.symbols.push({ kind: SymbolKind.EnumVariantStruct, name });
  }

  addEnumVariantTuple(name: string): void {
    this.symbols.push({ kind: SymbolKind.EnumVariantTuple, name });
  }

  addEnumVariantUnit(name: string): void {
    this.symbols.push({ kind: SymbolKind.EnumVariantUnit, name });
  }

  addTypeAlias(name: string): void {
    this.symbols.push({ kind: SymbolKind.TypeAlias, name });
  }

  addParam(name: string): void {
    this.symbols.push({ kind: SymbolKind.Param, name });
  }
}
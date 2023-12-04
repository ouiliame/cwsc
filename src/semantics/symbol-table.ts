export class SymbolTable {
  public constructor(public projects: ProjectEntry[]) {}
}

export class ProjectEntry {
  constructor(public name: string, public path: string, public sourceFiles: SourceFileEntry[]) {}
}

export class SourceFileEntry {
  constructor(public path: string, public symbols: SymbolEntry[]) {}
}

export class SymbolEntry {
  constructor(public name: string, public value: any) {}
}

const example = {
  projects: {
    counter: {
      path: 'examples/counter',
      sourceFiles: [
        {
          path: 'examples/src/Counter.cws',
          symbols: {
            Counter: {}
          }
        }
      ]
    }
  }
};

// Symbol types:
// - files
// - packages
// - events / errors
// - types

{
  "src/Counter.cws": {
    "Counter": {
      "CountIsZeroError": {},
    }
  }
}

/*
- SymbolTable
----------------
root -- pervasives, global scope
package
file
*/

/*
src/Counter.cws
  - Counter: Contract
    - CountIsZeroError: Error
    - Unauthorized: Error
    - #instantiate: InstantiateFn
    - exec #increment: ExecFn
    - exec #decrement: ExecFn
    - exec #reset: ExecFn
    - query #count: QueryFn
    - query #owner: QueryFn
*/

import { CWScriptParser } from './parser';
import { SymbolIndex, SymbolTable } from './symbol-table';
import { RustCodegen } from './codegen';
import { CWScriptProject } from './projects';
import * as AST from './ast';
import * as IR from './ir';

import * as fs from 'fs';

export class CWScriptCompiler {
  constructor(public project: CWScriptProject) {}

  public build() {
    // create new context for the build
    const ctx: any = { sources: {} };
    // gather source files
    const { sourceFiles } = this.project;

    // go through and read each source file, parse
    sourceFiles.forEach((sourceFile) => {
      const text = fs.readFileSync(sourceFile, 'utf8');
      const ast = CWScriptParser.parse(text, sourceFile);
      ctx.sources[sourceFile] = {
        text,
        ast,
      };
    });

    return ctx;
  }
}

const project = CWScriptProject.fromProjectRoot('examples/counter');
const compiler = new CWScriptCompiler(project);
const ctx = compiler.build();
const counterFile =
  '/Users/william/cwscript/cwsc-v1/examples/counter/src/Counter.cws';
const ast = ctx.sources[counterFile].ast;

/*
fn function() {
  3 + 4;
}

=> 

{
  type: 'function',
  name: 'function',
  body: [
    {
      type: 'expression',
      value: {
        type: 'binary',
        operator: '+',
        left: {
          type: 'number',
          value: 3
        },
        right: {
          type: 'number',
          value: 4
        }
      }
    }
  ]
}

*/

function printAST(ast: AST.AST, indent = 0) {
  console.log(' '.repeat(indent) + ast.constructor.name);
  ast.children.forEach((child) => {
    printAST(child, indent + 1);
  });
}

printAST(ast);

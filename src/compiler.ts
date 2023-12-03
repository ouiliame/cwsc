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

    console.log(ctx.sources);
  }
}

const project = CWScriptProject.fromProjectRoot('examples/counter');
const compiler = new CWScriptCompiler(project);
compiler.build();

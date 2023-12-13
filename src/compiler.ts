import { CWScriptParser } from './parser';
import { CWScriptProject } from './projects';
import { Pipeline, PipelineStage } from './pipelines';

import * as Ast from './ast';
import * as path from 'path';
import { Diagnostic } from 'vscode-languageserver';
import { readFile } from './util/filesystem';
import { StaticAnalysisVisitor } from './semantics/static-analysis-visitor';

export interface BuildContext {
  sourceFiles: {
    [k: string]: {
      text?: string;
      sourceFile?: Ast.SourceFile;
      diagnostics: Diagnostic[];
    };
  };
}

export class BuildPipeline extends Pipeline {
  constructor(public ctx: BuildContext) {
    super(ctx);
  }

  public get stages(): PipelineStage[] {
    return [];
  }
}

export class CWScriptCompiler {
  constructor(public project: CWScriptProject) {}

  public async build() {
    // create new context for the build
    const ctx: BuildContext = { sourceFiles: {} };
    // gather source files
    const sourceFiles = await this.project.getSourceFiles();

    // read each file's contents and parse into Ast
    for (let file of sourceFiles) {
      const text = await readFile(file);
      const { sourceFile, diagnostics } = CWScriptParser.parse(text, file);
      if (!sourceFile) {
        continue;
      }

      const staticAnalysisVisitor = new StaticAnalysisVisitor(text, file);
      diagnostics.push(...staticAnalysisVisitor.visit(sourceFile.ast));

      ctx.sourceFiles[file] = {
        text,
        sourceFile,
        diagnostics,
      };
    }
    // eval pipeline
    // 1. new eval.SourceFile(ast)
    // 2. gather all contract definitions in the source file
    // 3. for each contract definition:
    //    - gather all type definitions
    //    - gather all function definitions
    //    - gather all instantiate, exec, query definitions
    // x. Build the Rust model -> Rust syntax

    /*
    type checking:

    - fndefn (example)
      - for each param, check that the type is defined
      - for return type, check that the type is defined
      - walk thru body statements
      - typecheck each statement
      - check that the body returns a value of return type
    */

    return ctx;
  }
}

async function main() {
  const project = await CWScriptProject.fromProjectRoot('examples/counter');
  const compiler = new CWScriptCompiler(project);
  const ctx = await compiler.build();
  const counterFile = path.resolve('examples/counter/src/Counter.cws');
  const { sourceFile, diagnostics } = ctx.sourceFiles[counterFile];
  console.dir(diagnostics);
}

main();

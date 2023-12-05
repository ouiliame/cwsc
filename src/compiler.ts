import { CWScriptParser } from './parser';
import { CWScriptProject } from './projects';
import { Pipeline, PipelineStage } from './pipelines';

import * as AST from './ast';

import * as fs from 'fs';
import { Diagnostic } from 'vscode-languageserver';
import { readFile } from './util/filesystem';

export interface BuildContext {
  sourceFiles: {
    [k: string]: {
      text?: string;
      ast?: AST.SourceFile;
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

    // read each file's contents and parse into AST
    for (let sourceFile of sourceFiles) {
      const text = await readFile(sourceFile);
      const { ast, diagnostics } = CWScriptParser.parse(text, sourceFile);
      ctx.sourceFiles[sourceFile] = {
        text,
        ast,
        diagnostics,
      };
    }

    return ctx;
  }
}

async function main() {
  const project = await CWScriptProject.fromProjectRoot('examples/counter');
  const compiler = new CWScriptCompiler(project);
  const ctx = await compiler.build();
  const counterFile =
    '/Users/william/cwscript/cwsc-v1/examples/counter/src/Counter.cws';
  const { ast, diagnostics } = ctx.sourceFiles[counterFile];
  console.dir(diagnostics);
}

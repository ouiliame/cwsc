import { CWScriptParser } from './parser';
import { CWScriptProject } from './projects';
import { Pipeline, PipelineStage } from './pipelines';
import * as AST from './ast';

import * as fs from 'fs';

export interface BuildContext {
  sourceFiles: {
    [k: string]: {
      text?: string;
      ast?: AST.SourceFile;
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

  public build() {
    // create new context for the build
    const ctx: BuildContext = { sourceFiles: {} };
    // gather source files
    const { sourceFiles } = this.project;

    // read each file's contents and parse into AST
    sourceFiles.forEach((sourceFile) => {
      const text = fs.readFileSync(sourceFile, 'utf8');
      const ast = CWScriptParser.parse(text, sourceFile) as AST.SourceFile;
      ctx.sourceFiles[sourceFile] = {
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
const ast = ctx.sourceFiles[counterFile].ast;

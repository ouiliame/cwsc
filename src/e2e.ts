import * as Ast from './ast';
import * as path from 'path';
import { CWScriptParser } from './parser';
import { CWScriptProject } from './projects';
import { Pipeline, PipelineStage } from './pipelines';
import { readFile } from './util/filesystem';
import { StaticAnalysisVisitor } from './semantics/static-analysis-visitor';

import type { Diagnostic } from 'vscode-languageserver';
import { contractAstToCg } from './e2e-helpers/contract-to-cg';
import { CwsfmtVisitor } from './cwsfmt';

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
      const { sourceFile, diagnostics } = CWScriptParser.parse(
        text,
        file.toString()
      );
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

    return ctx;
  }
}

async function main() {
  const project = await CWScriptProject.fromProjectRoot(
    'examples/kitchen-sink'
  );
  const compiler = new CWScriptCompiler(project);
  const ctx = await compiler.build();
  const contractFile = path.resolve(
    'examples/kitchen-sink/src/TerraswapPair.cws'
  );
  const { sourceFile, diagnostics } = ctx.sourceFiles[contractFile];
  // get contract
  let contract = sourceFile!.ast.descendantsOfType(Ast.ContractDefn)[0];

  // make cg model
  let cg = contractAstToCg(contract);
  // make rust crate
  let crate = cg.build();

  await crate.writeToDisk(project.buildDir);
}

main();

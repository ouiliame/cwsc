import * as Ast from './ast';
import * as path from 'path';
import * as rs from './rust';
import { CWScriptParser } from './parser';
import { CWScriptProject } from './projects';
import { DEFAULT_CARGO_TOML, DOTCARGO_CONFIG, RustCrate } from './rust';
import {
  buildInstantiateEntrypoint,
  buildExecEntrypoint,
  buildQueryEntrypoint,
  buildInstantiateImplFn,
  buildExecImplFn,
  buildQueryImplFn,
} from './e2e-helpers/builders';
import { pascalToSnake, snakeToPascal } from './util/strings';
import { Pipeline, PipelineStage } from './pipelines';
import { readFile } from './util/filesystem';
import { StaticAnalysisVisitor } from './semantics/static-analysis-visitor';

import type { Diagnostic } from 'vscode-languageserver';
import { contractAstToCg } from './e2e-helpers/ast-to-cg';

export interface BuildContext {
  sourceFiles: {
    [k: string]: {
      text?: string;
      ast?: Ast.SourceFile;
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
    for (let sourceFile of sourceFiles) {
      const text = await readFile(sourceFile);
      const { ast, diagnostics } = CWScriptParser.parse(text, sourceFile);
      if (!ast) {
        continue;
      }

      const staticAnalysisVisitor = new StaticAnalysisVisitor(text, sourceFile);
      diagnostics.push(...staticAnalysisVisitor.visit(ast));

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
  const project = await CWScriptProject.fromProjectRoot(
    'examples/kitchen-sink'
  );
  const compiler = new CWScriptCompiler(project);
  const ctx = await compiler.build();
  const contractFile = path.resolve(
    'examples/kitchen-sink/src/KitchenSink.cws'
  );
  const { ast, diagnostics } = ctx.sourceFiles[contractFile];
  // get contract
  let contract = ast!.descendantsOfType(Ast.ContractDefn)[0];
  // make cg model
  let cg = contractAstToCg(contract);
  // make rust crate
  let crate = cg.build();

  await crate.writeToDisk(project.buildDir);
}

main();

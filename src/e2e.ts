import * as Ast from './ast';
import * as path from 'path';
import { CWScriptParser, CWScriptParseResult } from './parser';
import { CWScriptProject } from './projects';
import { Pipeline, PipelineStage } from './pipelines';
import { readFile } from './util/filesystem';
import { StaticAnalysisVisitor } from './semantics/static-analysis-visitor';

import type { Diagnostic } from 'vscode-languageserver';
import { contractAstToCg } from './e2e-helpers/contract-to-cg';
import { DiagnosticsPrinter } from './print-diagnostics';

export interface BuildContext {
  sourceFiles: {
    [k: string]: {
      text?: string;
      parseResult?: CWScriptParseResult;
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
      const parseResult = CWScriptParser.parse(text, file.toString());
      if (!parseResult.ast) {
        continue;
      }
      const { diagnostics, ast } = parseResult;

      const staticAnalysisVisitor = new StaticAnalysisVisitor(text, file);
      diagnostics.push(...staticAnalysisVisitor.visit(ast));

      ctx.sourceFiles[file] = {
        text,
        parseResult,
        diagnostics,
      };
    }

    return ctx;
  }
}

async function main() {
  const targetProject = process.argv[2] || 'counter';
  const targetContract = process.argv[3] || 'Counter';
  const project = await CWScriptProject.fromProjectRoot(
    `examples/${targetProject}`
  );
  const compiler = new CWScriptCompiler(project);
  const ctx = await compiler.build();
  const contractFile = path.resolve(
    `examples/${targetProject}/src/${targetContract}.cws`
  );
  const { parseResult, diagnostics } = ctx.sourceFiles[contractFile];
  // get contract
  let contract = parseResult!.ast.descendantsOfType(Ast.ContractDefn)[0];
  let file = path.relative('.', contractFile);
  let diagnosticsPrinter = new DiagnosticsPrinter(file, diagnostics);
  diagnosticsPrinter.print();

  // collect top-level (module-scope) struct/enum definitions
  let topLevelStructs = parseResult!.ast.descendantsOfType(Ast.StructDefn)
    .filter((s: any) => !(s.$parent instanceof Ast.ContractDefn || s.$parent?.$parent instanceof Ast.ContractDefn));
  let topLevelEnums = parseResult!.ast.descendantsOfType(Ast.EnumDefn)
    .filter((e: any) => !(e.$parent instanceof Ast.ContractDefn || e.$parent?.$parent instanceof Ast.ContractDefn));

  // collect top-level const declarations
  let topLevelConsts = parseResult!.ast.descendantsOfType(Ast.ConstIdentStmt)
    .filter((c: any) => !(c.$parent instanceof Ast.ContractDefn || c.$parent?.$parent instanceof Ast.ContractDefn));

  // make cg model
  let cg = contractAstToCg(contract, { topLevelStructs, topLevelEnums, topLevelConsts });
  // make rust crate
  let crate = cg.build();

  await crate.writeToDisk(project.buildDir);
}

main();

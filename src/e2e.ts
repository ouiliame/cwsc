import * as Ast from './ast';
import * as path from 'path';
import { CWScriptParser, CWScriptParseResult } from './parser';
import { CWScriptProject } from './projects';
import { Pipeline, PipelineStage } from './pipelines';
import { readFile } from './util/filesystem';
import { StaticAnalysisVisitor } from './semantics/static-analysis-visitor';

import type { Diagnostic } from 'vscode-languageserver';
import { contractAstToCg, synthesizeAnonStructNames } from './e2e-helpers/contract-to-cg';
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

  if (!contract) {
    console.log(
      `note: ${file} contains no contract definition (library file); nothing to build.`
    );
    return;
  }

  // Collect top-level (module-scope) struct/enum/const definitions.
  // Start with the target file's own definitions, then resolve `import { X }`
  // bindings against the other source files in the project (by name), so
  // locally-imported .cws types generate as real types instead of stubs.
  const isTopLevel = (n: any) =>
    !(n.$parent instanceof Ast.ContractDefn || n.$parent?.$parent instanceof Ast.ContractDefn);

  // name in the importing file → name as defined in the source file
  const importedNames = new Map<string, string>();
  for (const imp of parseResult!.ast.descendantsOfType(Ast.ImportStmt)) {
    for (const b of imp.bindings.toArray()) {
      importedNames.set((b.alias ?? b.name).value, b.name.value);
    }
  }

  const orderedFiles = [
    contractFile,
    ...Object.keys(ctx.sourceFiles).filter((f) => f !== contractFile),
  ];
  let topLevelStructs: Ast.StructDefn[] = [];
  let topLevelEnums: Ast.EnumDefn[] = [];
  let topLevelConsts: Ast.ConstIdentStmt[] = [];
  let topLevelTuples: Ast.TupleDefn[] = [];
  let topLevelUnits: Ast.UnitDefn[] = [];
  let topLevelImpls: Ast.ImplDefn[] = [];
  let topLevelAliases: Ast.TypeAliasDefn[] = [];
  let topLevelErrors: Ast.ErrorDefn[] = [];
  let topLevelEvents: Ast.EventDefn[] = [];
  const seenNames = new Set<string>();
  for (const f of orderedFiles) {
    const pr = ctx.sourceFiles[f]?.parseResult;
    if (!pr?.ast) continue;
    // give anonymous inline structs deterministic names before extraction
    synthesizeAnonStructNames(pr.ast);
    const fromTarget = f === contractFile;
    // From other files, only pull in definitions the target file imports;
    // rename to the local alias when `import { X as Y }` was used.
    const localName = (defnName: string): string | null => {
      if (fromTarget) return defnName;
      for (const [local, src] of importedNames) {
        if (src === defnName) return local;
      }
      return null;
    };
    const collect = <T extends { name: Ast.Ident | null }>(
      nodes: T[],
      out: T[],
      keyPrefix = ''
    ) => {
      for (const node of nodes) {
        const orig = node.name?.value;
        if (!orig) continue;
        const n = localName(orig);
        if (n && !seenNames.has(keyPrefix + n)) {
          seenNames.add(keyPrefix + n);
          if (orig !== n) node.name = new Ast.Ident(n);
          out.push(node);
        }
      }
    };
    collect(pr.ast.descendantsOfType(Ast.StructDefn).filter(isTopLevel), topLevelStructs);
    collect(pr.ast.descendantsOfType(Ast.EnumDefn).filter(isTopLevel), topLevelEnums);
    collect(pr.ast.descendantsOfType(Ast.TupleDefn).filter(isTopLevel), topLevelTuples);
    collect(pr.ast.descendantsOfType(Ast.UnitDefn).filter(isTopLevel), topLevelUnits);
    collect(pr.ast.descendantsOfType(Ast.TypeAliasDefn).filter(isTopLevel), topLevelAliases);
    collect(pr.ast.descendantsOfType(Ast.ConstIdentStmt).filter(isTopLevel), topLevelConsts, 'const:');
    collect(pr.ast.descendantsOfType(Ast.ErrorDefn).filter(isTopLevel), topLevelErrors, 'error:');
    collect(pr.ast.descendantsOfType(Ast.EventDefn).filter(isTopLevel), topLevelEvents, 'event:');
    // impl blocks travel with their type: include the target file's own and
    // any whose implemented type has been collected via imports
    for (const im of pr.ast.descendantsOfType(Ast.ImplDefn).filter(isTopLevel)) {
      if (fromTarget || seenNames.has(im.name.value)) {
        topLevelImpls.push(im);
      }
    }
  }

  // make cg model
  let cg = contractAstToCg(contract, {
    topLevelStructs,
    topLevelEnums,
    topLevelConsts,
    topLevelTuples,
    topLevelUnits,
    topLevelImpls,
    topLevelAliases,
    topLevelErrors,
    topLevelEvents,
  });
  // make rust crate
  let crate = cg.build();

  await crate.writeToDisk(project.buildDir);
}

main();

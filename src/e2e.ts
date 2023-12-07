import * as AST from './ast';
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
} from './e2e-helpers';
import { pascalToSnake, snakeToPascal } from './util/strings';
import { Pipeline, PipelineStage } from './pipelines';
import { readFile } from './util/filesystem';
import { StaticAnalysisVisitor } from './semantics/static-analysis-visitor';

import type { Diagnostic } from 'vscode-languageserver';

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

function buildStateMod(contract: AST.ContractDefn): rs.ModuleDefn {
  const items: rs.RustSyntax[] = [
    rs.use('schemars::JsonSchema'),
    rs.use('serde::{Serialize, Deserialize}'),
    rs.use('cw_storage_plus::{Item, Map}'),
  ];
  // get state field defns
  contract.descendantsOfType(AST.StateItemDefn).forEach((x) => {
    const name = x.name.value;
    const ty = `Item<${x.ty.$ctx!.text}>`;
    const k = rs.konst(name.toUpperCase(), ty, rs.raw(`Item::new("${name}")`));
    items.push(k);
  });

  return rs.mod('state', items);
}

function buildErrorMod(contract: AST.ContractDefn): rs.ModuleDefn {
  const items: rs.RustSyntax[] = [
    rs.use('cosmwasm_std::StdError'),
    rs.use('thiserror::Error'),
  ];

  const stdError = rs.ann(
    '#[error("StdError")]',
    rs.variantTuple('StdError', [rs.ann('#[from]', rs.raw('StdError'))])
  );

  const contractErrors = contract.descendantsOfType(AST.ErrorDefn).map((x) => {
    const name = x.name.value;
    const fields = x.fields.map((f) =>
      rs.structField(f.name.value, f.ty!.$ctx!.text)
    );
    return rs.ann(`#[error("${name}")]`, rs.variantStruct(name, fields));
  });

  const errorEnum = rs.ann(
    '#[derive(Error, Debug)]',
    rs.enumDefn('ContractError', [stdError, ...contractErrors])
  );

  items.push(errorEnum);

  return rs.mod('error', items);
}

function buildMsgMod(contract: AST.ContractDefn): rs.ModuleDefn {
  const items: rs.RustSyntax[] = [
    rs.use('cosmwasm_schema::{cw_serde, QueryResponses}'),
    rs.use('cosmwasm_std::*'),
  ];

  let instDefn: AST.InstantiateDefn | undefined;
  contract.descendantsOfType(AST.InstantiateDefn).forEach((x) => {
    instDefn = x;
  });
  if (instDefn) {
    const instMsg = rs.ann(
      '#[cw_serde]',
      rs.structDefn(
        'InstantiateMsg',
        instDefn.params.map((x) =>
          rs.structField(x.name.value, x.ty!.$ctx!.text)
        )
      )
    );
    items.push(instMsg);
  } else {
    // default instantiate msg
    const instMsg = rs.ann('#[cw_serde]', rs.structDefn('InstantiateMsg', []));
    items.push(instMsg);
  }

  const execVariants: rs.EnumVariantStruct[] = [];
  contract.descendantsOfType(AST.ExecDefn).forEach((x) => {
    const name = snakeToPascal(x.name.value.substring(1));
    const fields = x.params.map((f) =>
      rs.structField(f.name.value, f.ty!.$ctx!.text)
    );
    execVariants.push(rs.variantStruct(name, fields));
  });
  const execMsg = rs.ann(
    '#[cw_serde]',
    rs.enumDefn('ExecuteMsg', execVariants)
  );
  items.push(execMsg);

  const queryVariants: rs.EnumVariantStruct[] = [];
  contract.descendantsOfType(AST.QueryDefn).forEach((x) => {
    const name = snakeToPascal(x.name.value.substring(1));
    const fields = x.params.map((f) =>
      rs.structField(f.name.value, f.ty!.$ctx!.text)
    );
    queryVariants.push(rs.variantStruct(name, fields));
  });
  const queryMsg = rs.ann(
    '#[cw_serde]',
    rs.enumDefn('QueryMsg', queryVariants)
  );
  items.push(queryMsg);

  return rs.mod('msg', items);
}

function buildContractMod(contract: AST.ContractDefn): rs.ModuleDefn {
  const items: rs.RustSyntax[] = [
    rs.use('super::cws::*'),
    rs.use('super::error::*'),
    rs.use('super::msg::*'),
    rs.use('cosmwasm_std::*'),
    buildInstantiateEntrypoint(
      contract.descendantsOfType(AST.InstantiateDefn)[0]
    ),
    buildExecEntrypoint(contract.descendantsOfType(AST.ExecDefn)),
    buildQueryEntrypoint(contract.descendantsOfType(AST.QueryDefn)),
  ];
  return rs.mod('contract', items);
}

function buildImplMod(contract: AST.ContractDefn): rs.ModuleDefn {
  const items: rs.RustSyntax[] = [
    rs.use('super::cws::*'),
    rs.use('super::error::*'),
    rs.use('super::msg::*'),
    rs.use('super::state::*'),
  ];

  const instDefn = contract.descendantsOfType(AST.InstantiateDefn)[0];
  const execDefns = contract.descendantsOfType(AST.ExecDefn);
  const queryDefns = contract.descendantsOfType(AST.QueryDefn);

  const instImplFn = buildInstantiateImplFn(instDefn);
  const execImplFns = execDefns.map((x) => buildExecImplFn(x));
  const queryImplFns = queryDefns.map((x) => buildQueryImplFn(x));

  items.push(instImplFn, ...execImplFns, ...queryImplFns);

  return rs.mod('implementation', items);
}

function buildContract(crate: RustCrate, contract: AST.ContractDefn) {
  const stateMod = buildStateMod(contract);
  const errorMod = buildErrorMod(contract);
  const msgMod = buildMsgMod(contract);
  const contractMod = buildContractMod(contract);
  const implMod = buildImplMod(contract);
  const mod = rs.mod(pascalToSnake(contract.name.value), [
    stateMod,
    errorMod,
    msgMod,
    contractMod,
    implMod,
  ]);
  crate.setFile('src/lib.rs', mod.render());
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
  // make new crate
  let cargoToml = DEFAULT_CARGO_TOML;
  cargoToml.package.name = 'kitchen_sink';
  cargoToml.package.version = '0.0.1';
  const crate = new RustCrate(cargoToml);
  crate.setFile('.cargo/config', DOTCARGO_CONFIG);

  // get contract
  let contract = ast!.descendantsOfType(AST.ContractDefn)[0];
  buildContract(crate, contract);

  await crate.writeToDisk(project.buildDir);
}

main();

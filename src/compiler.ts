import { CWScriptParser } from './parser';
import { SymbolIndex, SymbolTable } from './symbolic/symbol-table';
import * as AST from './ast';
import * as IR from './ir';
import { RustCodegen } from './codegen';

import * as fs from 'fs';
export interface CompilerExtensionConfig {
  name: string;
}

export type BoolOrWarning = boolean | 'warning';

export interface CompilerValidationConfig {
  pascalCase?: {
    datatypes?: BoolOrWarning;
    contracts?: BoolOrWarning;
  };
  snakeCase?: {
    variables?: BoolOrWarning;
    params?: BoolOrWarning;
    functions?: BoolOrWarning;
    structFields?: BoolOrWarning;
    contractMsgs?: BoolOrWarning;
  };
}

export interface CompilerConfig {
  debug?: boolean;
  extensions?: CompilerExtensionConfig[];
  validations?: CompilerValidationConfig;
}

export interface BuildTarget {}
export interface BuildConfig {
  sources: string[];
  targets: BuildTarget[];
}

const cfg: CompilerConfig = {
  validations: {
    pascalCase: {
      datatypes: true,
      contracts: true,
    },
    snakeCase: {
      variables: true,
      params: true,
      functions: true,
      structFields: true,
      contractMsgs: true,
    },
  },
};

export class BuildContext<I> {
  public sources: Entries<I> = {};
  public symbolIndex: SymbolIndex = new SymbolIndex();

  constructor(public config: BuildConfig) {}

  public static Empty(config: BuildConfig): BuildContext<{}> {
    let ctx = new BuildContext<{}>(config);
    for (let source of config.sources) {
      ctx.sources[source] = {};
    }
    return ctx;
  }

  update<T>(path: string, info: T) {
    let source = this.sources[path];
    this.into<I & T>().sources[path] = { ...source, ...info };
  }

  into<O>(): BuildContext<O> {
    return this as any;
  }

  updateSources<O>(fn: (path: string, source: I) => O) {
    Object.keys(this.sources).map((path) => {
      this.update(path, fn(path, this.sources[path]));
    });
    return this.into<I & O>();
  }
}

export abstract class CompilerStage<I = any, O = any> {
  abstract run(ctx: BuildContext<I>): BuildContext<O>;
}

function stage<I, O>(fn: (ctx: BuildContext<I>) => BuildContext<O>) {
  const cls = class extends CompilerStage {
    run(ctx: BuildContext<I>): BuildContext<O> {
      fn(ctx);
      return ctx.into<O>();
    }
  };
  return new cls();
}

export type CompilerStages<I, O> =
  | [CompilerStage<I>, ...CompilerStage[], CompilerStage<any, O>]
  | []
  | [CompilerStage<I, O>];
export class BuildPipeline<
  I,
  O,
  S extends CompilerStages<I, O> = CompilerStages<I, O>,
> {
  constructor(public stages: S) {}

  public run(ctx: BuildContext<I>): BuildContext<O> {
    let res: BuildContext<any> = ctx;
    this.stages.forEach((stage) => {
      res = stage.run(res);
    });
    return res;
  }

  public static from<I, O>(
    ...stages: CompilerStages<I, O>
  ): BuildPipeline<I, O> {
    return new BuildPipeline(stages);
  }
}

export interface LoadCtx {
  content: string;
}

export type ParseCtx = LoadCtx & {
  ast: AST.SourceFile;
};

export type SymbolsCtx = ParseCtx & {
  symbols: any;
};

export type Entries<T> = { [key: string]: T };

export class CWScriptCompiler {
  constructor(public project: CWScriptProject) {}

  public get loadSourcesStage() {
    return stage((ctx: BuildContext<{}>) =>
      ctx.updateSources((path) => ({ content: fs.readFileSync(path, 'utf8') }))
    );
  }

  public get parseStage() {
    return stage((ctx: BuildContext<LoadCtx>) =>
      ctx.updateSources((path, src) => ({
        ast: CWScriptParser.parse(src.content),
      }))
    );
  }

  public get indexSymbolsStage() {
    return stage((ctx: BuildContext<ParseCtx>) => {
      return ctx.updateSources((path, src) => {
        let symbolIndex = SymbolIndex.fromFile(path, src.ast);
        ctx.symbolIndex.merge(symbolIndex);
        return { symbolIndex };
      });
    });
  }

  public get irStage() {
    return stage((ctx: BuildContext<SymbolsCtx>) => {
      return ctx.updateSources((path, src) => {
        let builder = new IRBuilder(this.project, path);
        let ir = builder.visitSourceFile(src.ast);
        console.log(JSON.stringify(ir, null, 2));
        return { ir };
      });
    });
  }

  public get codegenStage() {
    return stage((ctx: BuildContext<any>) => {
      return ctx.updateSources((path, src) => {
        let cg = new RustCodegen(this.project);
        src.ir.contracts.forEach((contract: IR.Value.Contract) => {
          cg.buildContract(contract);
        });
        cg.env.writeToDisk(this.project.buildDir);
        return {
          code: cg.env,
        };
      });
    });
  }

  public get pipeline() {
    return BuildPipeline.from(
      this.loadSourcesStage,
      this.parseStage,
      this.indexSymbolsStage,
      this.irStage,
      this.codegenStage
    );
  }

  public build(config: BuildConfig) {
    let ctx = BuildContext.Empty(config);
    return this.pipeline.run(ctx);
  }
}

// enter project root

import { CWScriptProject } from './projects';
import { IRBuilder } from './ir-builder';

let projectRoot = './examples/terraswap';
let project = CWScriptProject.fromProjectRoot(projectRoot);
let compiler = new CWScriptCompiler(project);
let buildCfg: BuildConfig = {
  sources: project.sourceFiles,
  targets: [],
};
let tree = compiler.build(buildCfg);

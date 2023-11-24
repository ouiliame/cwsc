import * as fs from 'fs';
import { FsProjectManager } from './projects';
import { CWScriptParser } from './parser';

/**
 * The CWScript compiler.
 */

export type CompilationCtx = {
  projectRoot: string;
  sources: {
    [sourceFile: string]: {
      ast: any;
      text: string;
      diagnostics: any[];
    };
  };
};

export class CWScriptCompiler {
  constructor(public projectManager: FsProjectManager) {}

  /**
   * Builds all compilation targets within the project.
   */
  public build() {
    // 1. Create a fresh compilation context
    const ctx = this.createCtx({
      project: this.projectManager.project,
    });

    // 2. Populate context with project config, compiler options, build options
    ctx.project = this.projectManager.project;

    // 3. Get the list of source files and read file contents
    const sourceFiles = this.projectManager.sourceFiles;

    sourceFiles.forEach((sourceFile) => {
      // read file contents
      const sourceText = fs.readFileSync(sourceFile, 'utf8');
      ctx.sources[sourceFile].text = sourceText;
    });

    // 4. Parse each source file into AST (SourceFile)
    ctx.sources.forEach((sourceFile) => {
      ctx.sources[sourceFile].ast = this.parse(sourceFile);
    });

    // 5. Create symbol table for this compilation context
    ctx.createSymbolTable();

    // 6. Convert AST to ISR
    ctx.convertAstToIr();

    // 7. Perform semantic analysis passes
    ctx.performSemanticPasses();
  
    // 9. For each build target, generate code
    ctx.buildTargets();

}

const pm = new FsProjectManager('./examples/counter');
const compiler = new CWScriptCompiler(pm);
compiler.build();

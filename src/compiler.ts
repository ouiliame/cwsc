import * as fs from 'fs';
import { FsProjectManager } from './projects';
import { CWScriptParser } from './parser';

/**
 * The CWScript compiler.
 */

export type CompilationCtx = {
  projectRoot: string;
  start: number;
  end?: number;
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
    // Create new compilation context
    let ctx: CompilationCtx = {
      projectRoot: this.projectManager.projectRoot,
      start: Date.now(),
      sources: {},
    };

    // Parse project source files
    this.projectManager.sourceFiles.forEach((sourceFile) => {
      const sourceText = fs.readFileSync(sourceFile, 'utf8');
      const parser = new CWScriptParser(sourceText, sourceFile);
      const ast = parser.parse();
      ctx.sources[sourceFile] = {
        ast,
        text: sourceText,
        diagnostics: [],
      };
    });
  }
}

import type { Diagnostic } from 'vscode-languageserver';

export class DiagnosticsPrinter {
  constructor(public file: string, public diagnostics: Diagnostic[]) {}

  public print() {
    for (let diagnostic of this.diagnostics) {
      let rangeUri = `${this.file}:${diagnostic.range.start.line + 1}:${
        diagnostic.range.start.character + 1
      }`;
      if (diagnostic.severity === 1) {
        console.log(
          `${rangeUri}\n\t ${diagnostic.message} (${diagnostic.source})`
        );
      } else if (diagnostic.severity === 2) {
        console.error(
          `${rangeUri}\n\t ${diagnostic.message} (${diagnostic.source})`
        );
      } else {
        console.log(
          `${rangeUri}\n\t ${diagnostic.message} (${diagnostic.source})`
        );
      }
    }
  }
}

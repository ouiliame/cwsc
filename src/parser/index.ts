// @ts-nocheck
import { ANTLRErrorListener, CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { CWSASTBuilderVisitor } from './visitor';
import * as AST from '../ast';
import { TextView } from '../util/position';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import path from 'path';
import { RecognitionException } from 'antlr4ts/RecognitionException';

export class CWSSyntaxErrorListener implements ANTLRErrorListener<any> {
  public diagnostics: Diagnostic[] = [];

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    this.diagnostics.push({
      severity: DiagnosticSeverity.Error,
      message: 'SyntaxError: ' + msg,
      range: {
        start: { line: line - 1, character: charPositionInLine },
        end: { line: line - 1, character: charPositionInLine + 1 },
      },
    });
  }
}

export class CWScriptParser {
  constructor(
    public sourceInput: string,
    sourceFile: string | null = null
  ) {
    this.sourceText = new TextView(sourceInput);
    this.sourceFile = sourceFile ? path.resolve(sourceFile) : null;
  }

  /**
   * This is the public-facing interface for parsing a source file.
   */
  public parse(): AST.SourceFile {
    let parseTree = this.antlrParse();
    let visitor = new CWSASTBuilderVisitor();
    return visitor.visitSourceFile(parseTree);
  }

  protected antlrParse(): SourceFileContext {
    let syntaxErrorListener = new CWSSyntaxErrorListener();
    let antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(this.sourceInput)
    );
    antlrLexer.removeErrorListeners();
    antlrLexer.addErrorListener(syntaxErrorListener);
    let antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );
    antlrParser.removeErrorListeners();
    antlrParser.addErrorListener(syntaxErrorListener);

    let tree = antlrParser.sourceFile();
    let errors = syntaxErrorListener.diagnostics.filter(
      (d) => d.severity === DiagnosticSeverity.Error
    );
    if (errors.length > 0) {
      console.table(errors[0]);
      throw new Error('Syntax error occurred while parsing.');
    }
    return tree;
  }
}

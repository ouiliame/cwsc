// @ts-nocheck
import * as fs from 'fs';
import {
  ANTLRErrorListener,
  CharStreams,
  CommonTokenStream,
  DefaultErrorStrategy,
  Parser,
} from 'antlr4ts';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import path from 'path';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import * as AST from '../ast';
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { TextView } from '../util/position';
import { ASTBuilderVisitor } from './ast-builder';

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
      source: 'cwscript/parser',
    });
  }
}

export class CWSErrorStrategy extends DefaultErrorStrategy {
  protected getErrorRecoverySet(recognizer: Parser): IntervalSet {
    let recoverySet = super.getErrorRecoverySet(recognizer);
    recoverySet.add(ANTLRCWScriptParser.SEMI);
    return recoverySet;
  }

  recover(recognizer: Parser, e: RecognitionException): void {
    for (
      let t = recognizer.inputStream.LA(1);
      t !== Parser.EOF;
      t = recognizer.inputStream.LA(1)
    ) {
      if (t === ANTLRCWScriptParser.SEMI) {
        recognizer.consume();
        break;
      }
      recognizer.consume(); // consume until we hit a semicolon
    }

    this.endErrorCondition(recognizer);
  }
}

export class CWScriptParser {
  constructor(public sourceInput: string, sourceFile: string | null = null) {
    this.sourceText = new TextView(sourceInput);
    this.sourceFile = sourceFile ? path.resolve(sourceFile) : null;
  }

  public static parse(
    sourceInput: string,
    sourceFile: string | null = null
  ): AST.AST {
    let parser = new CWScriptParser(sourceInput, sourceFile);
    return parser.parse();
  }

  public static parseFile(sourceFile: string): AST.SourceFile {
    // read the file
    let sourceInput = fs.readFileSync(sourceFile, 'utf8');
    let parser = new CWScriptParser(sourceInput, sourceFile);
    return parser.parse();
  }

  /**
   * This is the public-facing interface for parsing a source file.
   */
  public parse(): AST.SourceFile {
    let parseTree = this.antlrParse();
    let astBuilder = new ASTBuilderVisitor(this.sourceText);
    return astBuilder.visitSourceFile(parseTree);
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
    antlrParser.errorHandler = new CWSErrorStrategy();

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

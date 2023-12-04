// @ts-nocheck
import {
  ANTLRErrorListener,
  CharStreams,
  CommonTokenStream,
  DefaultErrorStrategy,
  Parser,
  IntervalSet,
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
import { ASTValidatorVisitor } from './ast-validator';
import { readFile } from '../util/filesystem';

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
      source: 'cwscript/parser/antlr',
    });
  }
}

export interface ParseResult {
  ast?: AST.SourceFile;
  diagnostics: Diagnostic[];
}

export class CWScriptParser {
  public sourceFile: string | null;
  constructor(public sourceInput: string, sourceFile: string | null = null) {
    this.sourceText = new TextView(sourceInput);
    this.sourceFile = sourceFile ? path.resolve(sourceFile) : null;
  }

  public static parse(
    sourceInput: string,
    sourceFile: string | null = null
  ): ParseResult {
    const parser = new CWScriptParser(sourceInput, sourceFile);
    return parser.parse();
  }

  public static async parseFile(sourceFile: string): Promise<ParseResult> {
    // read the file
    let sourceInput = await readFile(sourceFile, 'utf8');
    let parser = new CWScriptParser(sourceInput, sourceFile);
    return parser.parse();
  }

  /**
   * This is the public-facing interface for parsing a source file.
   */
  public parse(): ParseResult {
    const { parseTree, diagnostics } = this.antlrParse();
    const astBuilder = new ASTBuilderVisitor(this.sourceText);
    const ast = astBuilder.visitSourceFile(parseTree);
    const astValidator = new ASTValidatorVisitor(
      this.sourceText,
      this.sourceFile
    );
    diagnostics.push(...astValidator.visit(ast));
    return { ast, diagnostics };
  }

  protected antlrParse(): {
    parseTree: SourceFileContext;
    diagnostics: Diagnostic[];
  } {
    const syntaxErrorListener = new CWSSyntaxErrorListener();
    const antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(this.sourceInput)
    );
    antlrLexer.removeErrorListeners();
    antlrLexer.addErrorListener(syntaxErrorListener);
    const antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );
    antlrParser.removeErrorListeners();
    antlrParser.addErrorListener(syntaxErrorListener);

    const parseTree = antlrParser.sourceFile();
    return { parseTree, diagnostics: syntaxErrorListener.diagnostics };
  }
}

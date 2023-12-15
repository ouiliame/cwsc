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
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { TextView } from '../util/position';
import { AstBuilderVisitor } from './ast-builder';
import { SyntaxValidatorVisitor } from './syntax-validator';
import { readFile } from '../util/filesystem';
import { CWScriptParseResult } from './CWScriptParseResult';

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

export class CWScriptParser {
  constructor(
    public readonly sourceInput: string,
    public file: string | null = null
  ) {
    this.sourceText = new TextView(sourceInput);
  }

  public static parse(
    sourceInput: string,
    file: string | null = null
  ): CWScriptParseResult {
    const parser = new CWScriptParser(sourceInput, file);
    return parser.parse();
  }

  public static async parseFile(file: string): Promise<CWScriptParseResult> {
    // read the file
    let sourceInput = await readFile(path.resolve(file), 'utf8');
    let parser = new CWScriptParser(sourceInput, file);
    return parser.parse();
  }

  /**
   * This is the public-facing interface for parsing a source file.
   */
  public parse(): CWScriptParseResult {
    const { parseTree, diagnostics } = this.antlrParse();
    const astBuilder = new AstBuilderVisitor();
    const ast = astBuilder.visitSourceFile(parseTree);
    const syntaxValidator = new SyntaxValidatorVisitor(
      this.sourceText,
      this.file
    );
    diagnostics.push(...syntaxValidator.visit(ast));
    const res = new CWScriptParseResult(
      this.file ?? '',
      this.sourceText,
      ast,
      diagnostics
    );
    return res;
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

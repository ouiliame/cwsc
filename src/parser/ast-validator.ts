import * as AST from '../ast';
import { TextView } from '../util/position';
import { Diagnostic, DiagnosticSeverity, Range } from 'vscode-languageserver';
import { isSnakeCase, isPascalCase, isCapitalSnake } from '../util/strings';

const RESERVED_KEYWORDS = [
  'and',
  'as',
  'const',
  'contract',
  'else',
  'emit',
  'enum',
  'error',
  'event',
  'exec',
  'false',
  'fn',
  'for',
  'from',
  'if',
  'impl',
  'implements',
  'import',
  'in',
  'instantiate',
  'interface',
  'let',
  'or',
  'query',
  'reply',
  'state',
  'struct',
  'true',
  'tuple',
  'type',
  'unit',
];

export class ASTValidatorVisitor extends AST.ASTVisitor<Diagnostic[]> {
  constructor(public sourceText: TextView) {
    super();
  }

  makeError(node: AST.AST, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Error,
      source: 'cwscript/ast-validator',
    };
  }

  makeWarning(node: AST.AST, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Warning,
      source: 'cwscript/ast-validator',
    };
  }

  makeInfo(node: AST.AST, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Information,
      source: 'cwscript/ast-validator',
    };
  }

  makeHint(node: AST.AST, message: string): Diagnostic {
    return {
      message,
      range: this.rangeOfNode(node),
      severity: DiagnosticSeverity.Hint,
      source: 'cwscript/ast-validator',
    };
  }

  rangeOfNode(node: AST.AST): Range {
    if (!node.$ctx) {
      throw new Error('Cannot get range for node without context');
    }
    return this.sourceText.rangeOfNode(node.$ctx)!;
  }

  rangeOfToken(node: AST.AST, token: string): Range {
    if (!node.$ctx) {
      throw new Error('Cannot get range for node without context');
    }
    return this.sourceText.rangeOfToken(node.$ctx, token)!;
  }

  collect(values: Diagnostic[][]): Diagnostic[] {
    return values.flat();
  }

  defaultVisit(node: AST.AST): Diagnostic[] {
    return this.collect(this.visitChildren(node));
  }

  // SKIP: SourceFile

  visitImportStmt(node: AST.ImportStmt): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    if (!node.items || node.items.length === 0) {
      diagnostics.push(
        this.makeError(node, 'Import statement must import at least one item')
      );
    }
    return diagnostics;
  }

  // SKIP: LetStmt
  visitIdentBinding(node: AST.IdentBinding): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    // check that variables use snake_case
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node, 'Variable names should be snake_case')
      );
    }
    if (!node.ty) {
      diagnostics.push(this.makeWarning(node, 'Missing type annotation'));
    }
    return diagnostics;
  }

  visitTupleBinding(node: AST.TupleBinding): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    if (!node.names || node.names.length === 0) {
      diagnostics.push(
        this.makeError(node, 'Tuple binding must have at least one name')
      );
    }
    node.names.forEach((name) => {
      if (!isSnakeCase(name.value)) {
        diagnostics.push(
          this.makeWarning(name, 'Variable names should be snake_case')
        );
      }
    });
    return diagnostics;
  }

  visitStructBinding(node: AST.StructBinding): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    if (!node.names || node.names.length === 0) {
      diagnostics.push(
        this.makeError(node, 'Struct binding must have at least one name')
      );
    }
    node.names.forEach((name) => {
      if (!isSnakeCase(name.value)) {
        diagnostics.push(
          this.makeWarning(name, 'Variable names should be snake_case')
        );
      }
    });
    return diagnostics;
  }

  visitConstStmt(node: AST.ConstStmt): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    if (!isCapitalSnake(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Constant names should be CAPITAL_SNAKE')
      );
    }
    if (!node.ty) {
      diagnostics.push(this.makeWarning(node, 'Missing type annotation'));
    }
    diagnostics.push(...this.defaultVisit(node));
    return diagnostics;
  }

  // SKIP: AssignStmt
  // SKIP: MemberAssignStmt
  // SKIP: IndexAssignStmt
  // SKIP: ReturnStmt
  // SKIP: ExecStmt
  // SKIP: InstantiateStmt
  // SKIP: EmitStmt

  visitContractDefn(node: AST.ContractDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Contract names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitInterfaceDefn(node: AST.InterfaceDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Interface names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitStructDefn(node: AST.StructDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Struct names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitTupleDefn(node: AST.TupleDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Tuple names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitUnitDefn(node: AST.UnitDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Unit names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEnumDefn(node: AST.EnumDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum names should be PascalCase')
      );
    }
    if (!node.variants || node.variants.length === 0) {
      diagnostics.push(
        this.makeError(node, 'Enum definition must have at least one variant')
      );
    }
    return diagnostics;
  }

  visitEnumVariantStructDefn(node: AST.EnumVariantStructDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);

    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum variant names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEnumVariantTupleDefn(node: AST.EnumVariantTupleDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);

    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum variant names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEnumVariantUnitDefn(node: AST.EnumVariantUnitDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);

    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum variant names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitTypeAliasDefn(node: AST.TypeAliasDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Type alias names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitFnDefn(node: AST.FnDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Function names should be snake_case')
      );
    }
    if (!node.returnTy) {
      diagnostics.push(this.makeWarning(node, 'Missing return type'));
    }
    return diagnostics;
  }

  visitInstantiateDefn(node: AST.InstantiateDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.returnTy) {
      diagnostics.push(
        this.makeHint(node, '#instantiate return type can be omitted')
      );
    }
    return diagnostics;
  }

  visitExecDefn(node: AST.ExecDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.returnTy) {
      diagnostics.push(
        this.makeHint(node, 'exec #fn return type can be omitted')
      );
    }
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Exec names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitQueryDefn(node: AST.QueryDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Query names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitErrorDefn(node: AST.ErrorDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Error names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEventDefn(node: AST.EventDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Event names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitStateItemDefn(node: AST.StateItemDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'State item names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitStateMapDefn(node: AST.StateMapDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'State map names should be snake_case')
      );
    }
    return diagnostics;
  }

  // SKIP: DotExpr
  // TODO: CallExpr
  // Skip: IndexExpr
  // SKIP: AsExpr
  // SKIP: ExistsExpr
  // SKIP: BinOpExpr
  // SKIP: QueryExpr
  // SKIP: ShortTryExpr
  // SKIP: InExpr
  // SKIP: IsExpr
  // SKIP: EqExpr
  // SKIP: AndExpr
  // SKIP: OrExpr
  // SKIP: IfExpr
  // SKIP: TryCatchElseExpr
  // SKIP: ClosureExpr
  // SKIP: StructExpr
  // SKIP: TupleExpr
  // SKIP: LiteralExpr
  // SKIP: IdentExpr
  // SKIP: GroupedExpr

  // SKIP: GroupedTypeExpr
  // SKIP: ParameterizedTypeExpr
  visitMemberTypeExpr(node: AST.MemberTypeExpr): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.memberName.value)) {
      diagnostics.push(
        this.makeWarning(node.memberName, 'Type names should be PascalCase')
      );
    }
    return diagnostics;
  }
  // SKIP: ArrayTypeExpr
  // SKIP: StructDefnTypeExpr
  // SKIP: TupleDefnTypeExpr
  // SKIP: UnitDefnTypeExpr
  // SKIP: EnumDefnTypeExpr
  // SKIP: OptionTypeExpr
  // SKIP: TypeVarExpr
  // SKIP: IdentTypeExpr

  visitTypeVar(node: AST.TypeVar): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.value)) {
      diagnostics.push(
        this.makeWarning(node, 'Type variable names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitIdent(node: AST.Ident): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    // warn if using reserved keyword
    if (node.value in RESERVED_KEYWORDS) {
      diagnostics.push(
        this.makeWarning(node, `Using reserved keyword '${node.value}'`)
      );
    }
    return diagnostics;
  }

  visitParam(node: AST.Param): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Parameter names should be snake_case')
      );
    }
    if (!node.ty) {
      diagnostics.push(this.makeWarning(node, 'Missing type annotation'));
    }
    return diagnostics;
  }

  visitField(node: AST.Field): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Field names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitParamList(node: AST.List<AST.Param>): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    // make sure all optional parameters are at the end
    let seenOptional = false;
    node.forEach((param) => {
      if (param.optional) {
        seenOptional = true;
      } else if (seenOptional) {
        diagnostics.push(
          this.makeError(param, 'Optional parameters must be at the end')
        );
      }
    });
    // warn about double optional parameters
    node.forEach((param) => {
      if (param.optional && param.ty instanceof AST.OptionTypeExpr) {
        diagnostics.push(
          this.makeWarning(param, 'Redundant optional parameter')
        );
      }
    });
    return diagnostics;
  }
}

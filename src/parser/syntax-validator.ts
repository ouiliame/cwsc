import * as Ast from '../ast';
import type { Diagnostic } from 'vscode-languageserver';
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

export class SyntaxValidatorVisitor extends Ast.AstValidatorVisitor {
  public readonly SOURCE = 'cwscript/parser/syntax-validator';
  // SKIP: SourceFile

  visitImportStmt(node: Ast.ImportStmt): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);

    node.descendantsOfType(Ast.Ident).map((x) => {
      x;
    });

    if (node.bindings.length === 0) {
      diagnostics.push(
        this.makeError(node, 'Import statement must import at least one item')
      );
    }
    return diagnostics;
  }

  visitLetIdentStmt(node: Ast.LetIdentStmt): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    // check that variables use snake_case
    if (node.name.value[0] === '#') {
      diagnostics.push(
        this.makeWarning(node.name, 'Variable names should not start with a #')
      );
    }

    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node, 'Variable names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitLetTupleStmt(node: Ast.LetTupleStmt): Diagnostic[] {
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

  visitLetStructStmt(node: Ast.LetStructStmt): Diagnostic[] {
    const diagnostics = this.defaultVisit(node);
    if (node.bindings.length === 0) {
      diagnostics.push(
        this.makeError(node, 'Struct binding must have at least one name')
      );
    }
    node.bindings.forEach((binding) => {
      if (binding.alias && !isSnakeCase(binding.alias.value)) {
        diagnostics.push(
          this.makeWarning(binding.alias, 'Variable names should be snake_case')
        );
      }
    });
    return diagnostics;
  }

  visitConstStmt(node: Ast.ConstStmt): Diagnostic[] {
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

  visitContractDefn(node: Ast.ContractDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Contract names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitInterfaceDefn(node: Ast.InterfaceDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Interface names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitStructDefn(node: Ast.StructDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Struct names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitTupleDefn(node: Ast.TupleDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Tuple names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitUnitDefn(node: Ast.UnitDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Unit names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEnumDefn(node: Ast.EnumDefn): Diagnostic[] {
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

  visitEnumVariantStructDefn(node: Ast.EnumVariantStructDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);

    if (node.name.value[0] !== '#') {
      diagnostics.push(
        this.makeError(node.name, 'Enum variant names must with #')
      );
    }
    if (!isPascalCase(node.name.value.substring(1))) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum variant names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEnumVariantTupleDefn(node: Ast.EnumVariantTupleDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);

    if (!node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Enum variant names must with #')
      );
    }

    if (isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum variant names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEnumVariantUnitDefn(node: Ast.EnumVariantUnitDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);

    if (!node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Enum variant names must with #')
      );
    }

    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Enum variant names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitTypeAliasDefn(node: Ast.TypeAliasDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Type alias names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Type alias names cannot start with $')
      );
    }

    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Type alias names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitFnDefn(node: Ast.FnDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Function names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Function names cannot start with $')
      );
    }
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

  visitInstantiateDefn(node: Ast.InstantiateDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.returnTy) {
      diagnostics.push(
        this.makeHint(node, '#instantiate return type can be omitted')
      );
    }
    return diagnostics;
  }

  visitExecDefn(node: Ast.ExecDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.returnTy) {
      diagnostics.push(
        this.makeHint(node, 'exec #fn return type can be omitted')
      );
    }
    if (!node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Exec names must start with #')
      );
    }
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Exec names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitQueryDefn(node: Ast.QueryDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Query names must start with #')
      );
    }
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Query names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitErrorDefn(node: Ast.ErrorDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Error names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Error names cannot start with $')
      );
    }
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Error names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitEventDefn(node: Ast.EventDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Event names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Event names cannot start with $')
      );
    }
    if (!isPascalCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'Event names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitStateItemDefn(node: Ast.StateItemDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'State item names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'State item names cannot start with $')
      );
    }
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'State item names should be snake_case')
      );
    }
    return diagnostics;
  }

  visitStateMapDefn(node: Ast.StateMapDefn): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'State map names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'State map names cannot start with $')
      );
    }
    if (!isSnakeCase(node.name.value)) {
      diagnostics.push(
        this.makeWarning(node.name, 'State map names should be snake_case')
      );
    }
    return diagnostics;
  }

  // SKIP: DotExpr

  public visitCallExpr(node: Ast.CallExpr): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    // argument list - named arguments must come after positional arguments
    if (node.args) {
      let seenNamed = false;
      node.args.forEach((arg) => {
        if (arg.name) {
          seenNamed = true;
        } else if (seenNamed) {
          diagnostics.push(
            this.makeError(
              arg,
              'Positional arguments must precede named arguments'
            )
          );
        }
      });
    }
    return diagnostics;
  }

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
  visitMemberTypeExpr(node: Ast.MemberTypeExpr): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    return diagnostics;
  }
  // SKIP: ArrayTypeExpr
  // SKIP: StructDefnTypeExpr
  // SKIP: TupleDefnTypeExpr
  // SKIP: UnitDefnTypeExpr
  // SKIP: EnumDefnTypeExpr
  visitOptionTypeExpr(node: Ast.OptionTypeExpr): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.ty instanceof Ast.OptionTypeExpr) {
      diagnostics.push(this.makeWarning(node, 'Redundant optional type'));
    }
    return diagnostics;
  }
  // SKIP: TypeVarExpr
  // SKIP: IdentTypeExpr

  visitTypeVar(node: Ast.TypeVar): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (!isPascalCase(node.value)) {
      diagnostics.push(
        this.makeWarning(node, 'Type variable names should be PascalCase')
      );
    }
    return diagnostics;
  }

  visitIdent(node: Ast.Ident): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    // warn if using reserved keyword
    if (node.value in RESERVED_KEYWORDS) {
      diagnostics.push(
        this.makeWarning(node, `Using reserved keyword '${node.value}'`)
      );
    }
    return diagnostics;
  }

  visitParam(node: Ast.Param): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    if (node.name.isHashIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Parameter names cannot start with #')
      );
    }
    if (node.name.isDollarIdent) {
      diagnostics.push(
        this.makeError(node.name, 'Parameter names cannot start with $')
      );
    }
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

  visitParamList(node: Ast.List<Ast.Param>): Diagnostic[] {
    let diagnostics = this.defaultVisit(node);
    // make sure all optional parameters are at the end
    let seenOptional = false;
    node.forEach((param) => {
      if (param.optional) {
        seenOptional = true;
      } else if (seenOptional) {
        diagnostics.push(
          this.makeError(param, 'Optional parameters must follow required ones')
        );
      }
    });
    // warn about double optional parameters
    node.forEach((param) => {
      if (param.optional && param.ty instanceof Ast.OptionTypeExpr) {
        diagnostics.push(
          this.makeWarning(param, 'Redundant optional parameter')
        );
      }
    });
    return diagnostics;
  }
}

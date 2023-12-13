import * as Ast from './ast';

export class Seq {
  public items: string[] = [];
  constructor(items: (string | Seq)[]) {
    this.items = items.flatMap((item) => {
      if (typeof item === 'string') {
        return item;
      } else {
        return new Seq(item.items).items;
      }
    });
  }

  append(item: string | Seq | null | undefined): Seq {
    if (item) {
      if (typeof item === 'string') {
        return new Seq([...this.items, item]);
      } else {
        return new Seq([...this.items, ...item.items]);
      }
    }
    return this;
  }

  join(separator: string): Seq {
    return new Seq(this.items.flatMap((item) => [separator, item]).slice(1));
  }

  public toString() {
    return this.items.join('');
  }
}

function seq(...items: (string | Seq)[]) {
  return new Seq(items);
}
function spaced(...items: (string | Seq)[]) {
  return new Seq(items.flatMap((item) => [' ', item]).slice(1));
}

export class CwsfmtVisitor extends Ast.AstVisitor<Seq> {
  constructor(public indentLevel: number = 0) {
    super();
  }

  public defaultVisit(node: Ast.AstNode<string>): Seq {
    return this.collect(this.visitChildren(node));
  }

  public collect(items: Seq[]): Seq {
    return new Seq(items.flatMap((item) => item.items));
  }

  public get NL(): string {
    return '\n' + '  '.repeat(this.indentLevel);
  }

  public get INDENT(): string {
    this.indentLevel += 1;
    return '';
  }

  public get DEDENT(): string {
    this.indentLevel -= 1;
    return '';
  }

  visitContractDefn(node: Ast.ContractDefn) {
    return seq(
      'contract ',
      this.visitIdent(node.name),
      ' {',
      this.INDENT,
      this.NL,
      ...node.body.stmts.map((stmt) => this.visit(stmt)).join(this.NL),
      this.DEDENT,
      this.NL,
      '}'
    );
  }

  visitEventDefn(node: Ast.EventDefn) {
    return seq(
      'event ',
      this.visitIdent(node.name),
      '(',
      node.fields.map((param) => this.visit(param)).join(', '),
      ');'
    );
  }

  visitErrorDefn(node: Ast.ErrorDefn) {
    return seq(
      'error ',
      this.visitIdent(node.name),
      '(',
      node.fields.map((param) => this.visit(param)).join(', '),
      ');'
    );
  }

  visitInstantiateDefn(node: Ast.InstantiateDefn) {
    return seq(
      '#instantiate ',
      '(',
      this.INDENT,
      this.NL,
      seq(
        node.params.map((param) => this.visit(param)).join(',' + this.NL)
      ).join(this.NL),
      this.DEDENT,
      this.NL,
      ') {',
      this.INDENT,
      this.NL,
      ...node.body.stmts.map((stmt) => this.visit(stmt)).join(this.NL),
      this.DEDENT,
      this.NL,
      '}'
    );
  }

  visitStateBlockDefn(node: Ast.StateBlockDefn) {
    return seq(
      'state {',
      this.INDENT,
      this.NL,
      ...node.stateFields.map((field) => this.visit(field)).join(this.NL),
      this.DEDENT,
      this.NL,
      '}'
    );
  }

  visitStateItemDefn(node: Ast.StateItemDefn) {
    return seq(this.visitIdent(node.name)).append(
      node.ty ? seq(': ', this.visit(node.ty)) : null
    );
  }

  visitStateMapDefn(node: Ast.StateMapDefn) {
    return seq(
      this.visitIdent(node.name),
      '[',
      this.visit(node.indexTy),
      ']:',
      this.visit(node.ty),
      ';'
    );
  }

  visitStructDefn(node: Ast.StructDefn) {
    return seq(
      'struct ',
      this.visitIdent(node.name),
      ' {',
      this.INDENT,
      this.NL,
      ...node.fields.map((field) => this.visit(field)).join(this.NL),
      this.DEDENT,
      this.NL,
      '}'
    );
  }

  visitParam(node: Ast.Param) {
    return this.visitIdent(node.name)
      .append(node.optional ? '?' : null)
      .append(node.ty ? seq(': ', this.visit(node.ty)) : null);
  }

  visitIdent(node: Ast.Ident) {
    return seq(node.value);
  }
}

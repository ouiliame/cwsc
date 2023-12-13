import * as Ast from '../ast';
import * as Immutable from 'immutable';

export class CfgNode {
  constructor(
    public parent: CfgNode | null,
    public next: CfgNode | null,
    public name: string,
    public env: Immutable.Map<string, any> = Immutable.Map()
  ) {}

  public makeNext(
    name: string,
    env: Immutable.Map<string, any> = this.env
  ): CfgNode {
    const n = new CfgNode(this, null, name, env);
    this.next = n;
    return n;
  }
}

export class CfgVisitor extends Ast.AstVisitor<any> {
  public cursor: CfgNode;

  defaultVisit(node: Ast.AstNode<string>) {
    return this.cursor;
  }

  constructor(public root: CfgNode = new CfgNode(null, null, 'root')) {
    super();
    this.cursor = root;
  }

  public visitContractDefn(node: Ast.ContractDefn) {
    return this.visitBlock(node.body);
  }

  public visitInstantiateDefn(node: Ast.InstantiateDefn) {
    return this.visitBlock(node.body);
  }

  public visitLetStmt(node: Ast.LetStmt) {
    if (node.binding.$kind === 'IdentBinding') {
      const name = node.binding.name.value;
      const value = node.value;
      this.cursor = this.cursor.makeNext(
        'let stmt',
        this.cursor.env.set(name, value)
      );
      return this.cursor;
    }
    throw new Error('TODO: handle other kinds of bindings');
  }

  public visitBlock(node: Ast.Block) {
    let blockCursor = this.cursor.makeNext('block');
    node.stmts.forEach((stmt) => {
      this.visit(stmt);
    });
    return blockCursor;
  }
}

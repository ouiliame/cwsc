import * as Ast from '../ast';
import * as Ir from '../ir';
import * as rs from '../rust/syntax';

export class EvalContext {
  constructor(
    public parent: EvalContext | null,
    public items: Map<string, any> = new Map()
  ) {}

  public get(name: string): any {
    if (this.items.has(name)) {
      return this.items.get(name);
    } else if (this.parent) {
      return this.parent.get(name);
    } else {
      throw new Error(`Unknown symbol: ${name}`);
    }
  }

  public set(name: string, value: any): void {
    this.items.set(name, value);
  }

  public has(name: string): boolean {
    return this.items.has(name) || !!(this.parent && this.parent.has(name));
  }

  public subctx(): EvalContext {
    return new EvalContext(this);
  }
}

interface SymIR {
  toRust(): rs.RustSyntax;
  ty?: SymIR;
}

export class LetStmt implements SymIR {
  constructor(
    public name: string,
    public type: SymIR | null,
    public value: SymIR
  ) {}

  toRust(): rs.RustSyntax {
    return rs.letStmt(
      this.name,
      true,
      this.type!.toRust().render(),
      this.value.toRust()
    );
  }
}

export class EvaluateAstVisitor extends Ast.AstVisitor<Ir.IR> {
  constructor(public ctx: EvalContext = new EvalContext(null)) {
    super();
  }

  visitSourceFile(node: Ast.SourceFile) {
    return node.descendants.map((x) => this.visit(x));
  }

  visitLetStmt(node: Ast.LetStmt): Ir.Stmt.Let {
    const value = this.visit(node.value) as Ir.CWSValue;
    const { binding } = node;
    if (binding.$kind === 'IdentBinding') {
      const name = binding.name.value;
      let ty = binding.ty ? (this.visit(binding.ty) as Ir.CWSType) : value.ty;
      this.ctx.set(name, value); // for tracking
      return new Ir.Stmt.Let({ ident: { name, ty } }, value);
    } else if (node.binding.$kind === 'TupleBinding') {
      throw new Error('TODO: handle tuple bindings');
    } else {
      throw new Error('TODO: handle other kinds of bindings');
    }
  }

  visitAssignStmt(node: Ast.AssignStmt) {
    const name = node.name.value;
    if (!this.ctx.has(name)) {
      throw new Error(`Unknown symbol: ${name}`);
    }
    const value = this.visit(node.value);
    this.ctx.set(name, value);
  }

  visitMemberAssignStmt(node: Ast.MemberAssignStmt) {
    const obj = this.visit(node.obj);
    const memberName = node.memberName.value;
    const value = this.visit(node.value);
    this.ctx.set(obj.toString() + '.' + memberName, value);
  }

  visitIndexAssignStmt(node: Ast.IndexAssignStmt) {
    const obj = this.visit(node.obj);
    const index = this.visit(node.index);
    const value = this.visit(node.value);
    this.ctx.set(obj.toString() + '[' + index.toString() + ']', value);
  }
  visitContractDefn(node: Ast.ContractDefn) {
    const name = node.name.value;
    this.ctx.set(name, this.visitBlock(node.body));
    return new Ir.Value.Contract(name);
  }

  visitInstantiateDefn(node: Ast.InstantiateDefn) {
    const params = node.params.map((p) => this.visit(p));
    const body = this.visitBlock(node.body);
    const instFn = new Ir.Value.InstantiateFn(params, body);
    this.ctx.set('#instantiate', instFn);
    return instFn;
  }

  visitBlock(node: Ast.Block): IR[] {
    // A block should actually
    return node.stmts.map((x) => this.visit(x));
  }
}

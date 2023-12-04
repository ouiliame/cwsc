import * as AST from './ast';
import * as IR from './ir';
import { SymbolTable } from './symbolic/symbol-table';
import { CWSTupleType, CWSType } from './ir/types';
import { CWScriptProject } from './projects';

export class IRBuilder extends AST.ASTVisitor<IR.IR> {
  constructor(
    public project: CWScriptProject,
    public path: string,
    public symbols: SymbolTable = new SymbolTable()
  ) {
    super();
  }

  visitSourceFile(node: AST.SourceFile): IR.SourceFile {
    // visit children
    let children = node.children.map((x) => this.visit(x));
    children.forEach((x) => x.eval(this.symbols));
    return new IR.SourceFile(children);
  }

  visitImportStmt(node: AST.ImportStmt): IR.Stmt.Import {
    if (!node.items) {
      throw new Error('No items in import statement');
    }
    return new IR.Stmt.Import(
      node.items.map((x) => x.value),
      node.src
    );
  }

  visitContractDefn(node: AST.ContractDefn): IR.Value.Contract {
    const name = node.name.value;
    const state: IR.Value.ContractState = {};

    node.descendants.forEach((node) => {
      if (node instanceof AST.StateDefnItem) {
        const ty = this.visit(node.ty);
        if (!ty.isType()) {
          throw new Error('State item must be a type');
        }

        state[node.name.value] = {
          item: {
            ty,
          },
        };
      }
    });

    let instantiateFns = node.descendantsOfType(AST.InstantiateDefn);
    if (instantiateFns.length > 1) {
      throw new Error('Only one instantiate function allowed');
    }
    const instantiateFn = this.visitInstantiateDefn(instantiateFns[0]);
    const execFns = node
      .descendantsOfType(AST.ExecDefn)
      .map((x) => this.visitExecDefn(x));
    const queryFns = node
      .descendantsOfType(AST.QueryDefn)
      .map((x) => this.visitQueryDefn(x));
    const events = node
      .descendantsOfType(AST.EventDefn)
      .map((x) => this.visitEventDefn(x));
    const errors = node
      .descendantsOfType(AST.ErrorDefn)
      .map((x) => this.visitErrorDefn(x));

    const typedefs = [
      ...node.descendantsOfType(AST.StructDefn),
      ...node.descendantsOfType(AST.EnumDefn),
      ...node.descendantsOfType(AST.TypeAliasDefn),
    ].map((x) => this.visit(x) as IR.CWSType);

    return new IR.Value.Contract(
      name,
      state,
      instantiateFn,
      execFns,
      queryFns,
      events,
      errors,
      typedefs
    );
  }

  public visitInterfaceDefn(node: AST.InterfaceDefn): IR.Type.CWSInterfaceType {
    return new IR.Type.CWSInterfaceType(node.name.value, []);
  }

  public visitBlock(node: AST.Block): IR.IR[] {
    return node.children.map((x) => this.visit(x));
  }

  public visitParam(node: AST.Param): IR.Param {
    return {
      name: node.name.value,
      optional: node.optional,
      ty: node.ty ? this.visitTypeExpr(node.ty) : IR.Type.Infer,
    };
  }

  public visitTypeExpr(node: AST.TypeExpr): IR.CWSType {
    let res = this.visit(node);
    if (!res.isType()) {
      throw new Error('Expected a type');
    }
    return res;
  }

  public visitFnDefn(node: AST.FnDefn): IR.Value.Fn {
    const name = node.name.value;
    const params = node.params.map((x) => this.visitParam(x));
    const body = this.visitBlock(node.body);
    let returnTy = IR.Type.Infer;
    if (node.retTy !== null) {
      returnTy = this.visitTypeExpr(node.retTy);
    }
    return new IR.Value.Fn(name, params, returnTy, body);
  }

  public visitInstantiateDefn(
    node: AST.InstantiateDefn
  ): IR.Value.InstantiateFn {
    const params = node.params.map((x) => this.visitParam(x));
    const body = this.visitBlock(node.body);
    return new IR.Value.InstantiateFn(params, body);
  }

  public visitExecDefn(node: AST.ExecDefn): IR.Value.ExecFn {
    const params = node.params.map((x) => this.visitParam(x));
    const body = this.visitBlock(node.body);
    return new IR.Value.ExecFn(node.name.value, params, body);
  }

  public visitQueryDefn(node: AST.QueryDefn): IR.Value.QueryFn {
    const params = node.params.map((x) => this.visitParam(x));
    const body = this.visitBlock(node.body);
    return new IR.Value.QueryFn(node.name.value, params, body);
  }

  public visitErrorDefn(node: AST.ErrorDefn): IR.Type.CWSErrorType {
    return new IR.Type.CWSErrorType(
      node.name!.value,
      node.params.map((x) => this.visitParam(x))
    );
  }

  public visitEventDefn(node: AST.EventDefn): IR.Type.CWSEventType {
    return new IR.Type.CWSEventType(
      node.name!.value,
      node.params.map((x) => this.visitParam(x))
    );
  }

  public visitTypeAliasDefn(node: AST.TypeAliasDefn): IR.CWSType {
    return new IR.CWSTypeAliasType(
      node.name.value,
      this.visitTypeExpr(node.value)
    );
  }

  public visitStructDefn(node: AST.StructDefn): IR.Type.CWSStructType {
    return new IR.Type.CWSStructType(
      node.name?.value || 'anon',
      node.params.map((x) => this.visitParam(x))
    );
  }

  public visitEnumDefn(node: AST.EnumDefn): IR.Type.CWSEnumType {
    return new IR.Type.CWSEnumType(
      node.name.value,
      node.variants.map((x) => this.visitEnumVariant(x))
    );
  }

  public visitEnumVariant(
    node: AST.EnumVariantStruct | AST.EnumVariantUnit
  ): IR.Type.CWSEnumVariant {
    if (node instanceof AST.EnumVariantStruct) {
      return this.visitEnumVariantStruct(node);
    } else {
      return this.visitEnumVariantUnit(node);
    }
  }

  public visitEnumVariantStruct(
    node: AST.EnumVariantStruct
  ): IR.Type.CWSEnumVariantStructType {
    return new IR.Type.CWSEnumVariantStructType(
      node.name.value,
      node.params.map((x) => this.visitParam(x))
    );
  }

  public visitEnumVariantUnit(
    node: AST.EnumVariantUnit
  ): IR.Type.CWSEnumVariantUnitType {
    return new IR.Type.CWSEnumVariantUnitType(node.name.value);
  }

  public visitTypePath(node: AST.TypePath): IR.CWSTypePathType {
    return new IR.CWSTypePathType(node.segments.map((x) => x.value));
  }

  public visitExpr(node: AST.Expr): IR.CWSExpr | IR.CWSValue {
    console.log(`${node.constructor.name} -- ${node.$ctx!.text}`);
    let expr = this.visit(node);
    console.log(expr);
    if (!(expr instanceof IR.CWSExpr) && !(expr instanceof IR.CWSValue)) {
      throw new Error(
        'Expected an expression or value, got ' + expr.constructor.name
      );
    }
    return expr;
  }

  public visitStructExpr(node: AST.StructExpr): IR.Value.Struct {
    // turn args to object of fields
    let fields: { [name: string]: IR.CWSValue } = {};
    node.args.map((x) => {
      // TODO: this needs to eval
      fields[x.name.value] = x.value
        ? (this.visitExpr(x.value) as IR.CWSValue)
        : IR.Value.NoneValue;
    });

    return new IR.Value.Struct(
      node.ty ? this.visitTypeExpr(node.ty) : IR.Type.Infer,
      fields
    );
  }

  public visitTupleExpr(node: AST.TupleExpr): IR.Value.Tuple {
    const elements = node.exprs.map((x) => this.visitExpr(x) as IR.CWSValue);

    return new IR.Value.Tuple(IR.Type.Infer, elements);
  }

  public visitClosure(node: AST.Closure): IR.Value.Fn {
    const params = node.params.map((x) => this.visitParam(x));
    const fallible = node.fallible;
    const returnTy = node.retTy
      ? this.visitTypeExpr(node.retTy)
      : IR.Type.Infer;
    const body = this.visitBlock(node.body);
    return new IR.Value.Fn(
      `<closure>${fallible ? '!' : ''}`,
      params,
      returnTy,
      body
    );
  }

  public visitDotExpr(node: AST.DotExpr): IR.Expr.Dot {
    console.log(node.$ctx!.text);
    return new IR.Expr.Dot(this.visitExpr(node.obj), node.member.value);
  }

  public visitIndexExpr(node: AST.IndexExpr): IR.Expr.Index {
    console.log(node.$ctx!.text);
    return new IR.Expr.Index(
      this.visitExpr(node.obj),
      this.visitArg(node.args.at(0)!)
    );
  }

  public visitArg(node: AST.Arg): IR.Arg {
    return {
      name: node.name?.value,
      value: this.visitExpr(node.expr),
    };
  }

  public visitFnCallExpr(node: AST.FnCallExpr): IR.Expr.Call {
    const args = node.args.map((x) => this.visitArg(x));
    if (node.func instanceof AST.Expr) {
      const expr = this.visitExpr(node.func);
      return new IR.Expr.Call(expr, args);
    } else {
      const typeExpr = this.visitTypeExpr(node.func);
      console.log(typeExpr);
      throw new Error('TODO: type call');
    }
  }

  public visitNoneCheckExpr(node: AST.NoneCheckExpr): IR.Expr.Exists {
    return new IR.Expr.Exists(this.visitExpr(node.expr));
  }

  public visitInExpr(node: AST.InExpr): IR.Expr.In {
    return new IR.Expr.In(this.visitExpr(node.lhs), this.visitExpr(node.rhs));
  }

  public visitIsExpr(node: AST.IsExpr): IR.Expr.Is {
    return new IR.Expr.Is(
      node.negative,
      this.visitExpr(node.lhs),
      this.visitTypeExpr(node.rhs)
    );
  }

  public visitShortTryExpr(node: AST.ShortTryExpr): IR.Expr.Try {
    return new IR.Expr.Try(this.visitExpr(node.expr));
  }

  public visitNotExpr(node: AST.NotExpr): IR.Expr.Not {
    return new IR.Expr.Not(this.visitExpr(node.expr));
  }

  public visitQueryExpr(node: AST.QueryExpr): IR.Expr.Query {
    return new IR.Expr.Query(this.visitExpr(node.expr));
  }

  public visitQueryNowExpr(node: AST.QueryNowExpr): IR.Expr.QueryNow {
    return new IR.Expr.QueryNow(this.visitExpr(node.expr));
  }

  public visitFailExpr(node: AST.FailExpr): IR.Expr.Fail {
    return new IR.Expr.Fail(this.visitExpr(node.expr));
  }

  public visitUnitVariantExpr(node: AST.UnitVariantExpr): IR.Value.Unit {
    return new IR.Value.Unit(this.visitTypeExpr(node.ty));
  }

  public visitIdentExpr(node: AST.IdentExpr): IR.Expr.Ident {
    return new IR.Expr.Ident(node.symbol.value);
  }

  public visitGroupedExpr(node: AST.GroupedExpr): IR.CWSExpr | IR.CWSValue {
    return this.visitExpr(node.expr);
  }

  public visitGrouped2Expr(node: AST.Grouped2Expr): IR.CWSExpr | IR.CWSValue {
    return this.visitExpr(node.expr);
  }

  public visitStringLit(node: AST.StringLit): IR.Value.String {
    return new IR.Value.String(node.value);
  }

  public visitIntLit(node: AST.IntLit): IR.Value.Int {
    return new IR.Value.Int(node.value);
  }

  public visitBoolLit(node: AST.BoolLit): IR.Value.Bool {
    return new IR.Value.Bool(node.value === 'true');
  }

  public visitNoneLit(node: AST.NoneLit): IR.Value.None {
    return IR.Value.NoneValue;
  }

  public visitOptionT(node: AST.OptionT): IR.Type.CWSOptionType {
    return new IR.Type.CWSOptionType(this.visitTypeExpr(node.ty));
  }

  public visitListT(node: AST.ListT): IR.Type.CWSListType {
    return new IR.Type.CWSListType(this.visitTypeExpr(node.ty));
  }

  public visitBinOpExpr(node: AST.BinOpExpr): IR.Expr.BinOp {
    return new IR.Expr.BinOp(
      this.visitExpr(node.lhs),
      node.op,
      this.visitExpr(node.rhs)
    );
  }

  public visitAndExpr(node: AST.AndExpr): IR.Expr.And {
    return new IR.Expr.And(this.visitExpr(node.lhs), this.visitExpr(node.rhs));
  }

  public visitOrExpr(node: AST.OrExpr): IR.Expr.Or {
    return new IR.Expr.Or(this.visitExpr(node.lhs), this.visitExpr(node.rhs));
  }

  public visitTryCatchElseExpr(
    node: AST.TryCatchElseExpr
  ): IR.Expr.TryCatchElse {
    return new IR.Expr.TryCatchElse(
      this.visitBlock(node.body),
      node.catch_.map((x) => this.visitCatchClause(x)),
      node.else_ ? this.visitBlock(node.else_) : null
    );
  }

  public visitCatchClause(node: AST.CatchClause): IR.Expr.CatchClause {
    return new IR.Expr.CatchClause(
      this.visitTypeExpr(node.ty),
      node.name ? node.name.value : null,
      this.visitBlock(node.body)
    );
  }

  public visitLetStmt(node: AST.LetStmt): IR.Stmt.Let {
    if (node.binding instanceof AST.IdentBinding) {
      return new IR.Stmt.Let(
        {
          ident: {
            name: node.binding.name.value,
            ty: node.binding.ty
              ? this.visitTypeExpr(node.binding.ty)
              : IR.Type.Infer,
          },
        },
        node.expr ? this.visitExpr(node.expr) : IR.Value.NoneValue
      );
    } else if (node.binding instanceof AST.TupleBinding) {
      return new IR.Stmt.Let(
        {
          tuple: node.binding.bindings.map((x) => ({
            name: x.name.value,
            ty: x.ty ? this.visitTypeExpr(x.ty) : IR.Type.Infer,
          })),
        },
        node.expr ? this.visitExpr(node.expr) : IR.Value.NoneValue
      );
    } else if (node.binding instanceof AST.StructBinding) {
      return new IR.Stmt.Let(
        {
          struct: node.binding.bindings.map((x) => ({
            name: x.name.value,
            ty: x.ty ? this.visitTypeExpr(x.ty) : IR.Type.Infer,
          })),
        },
        node.expr ? this.visitExpr(node.expr) : IR.Value.NoneValue
      );
    } else {
      throw new Error('TODO: pattern let');
    }
  }

  public visitIfStmt(node: AST.IfStmt): IR.Stmt.If {
    return new IR.Stmt.If(
      this.visitExpr(node.pred),
      this.visitBlock(node.then),
      node.else_ ? this.visitBlock(node.else_) : null
    );
  }

  public visitForStmt(node: AST.ForStmt): IR.Stmt.For {
    const binding = node.binding;
    if (binding instanceof AST.IdentBinding) {
      return new IR.Stmt.For(
        {
          ident: {
            name: binding.name.value,
            ty: binding.ty ? this.visitTypeExpr(binding.ty) : IR.Type.Infer,
          },
        },
        this.visitExpr(node.iter),
        this.visitBlock(node.body)
      );
    } else if (binding instanceof AST.TupleBinding) {
      return new IR.Stmt.For(
        {
          tuple: binding.bindings.map((x) => ({
            name: x.name.value,
            ty: x.ty ? this.visitTypeExpr(x.ty) : IR.Type.Infer,
          })),
        },
        this.visitExpr(node.iter),
        this.visitBlock(node.body)
      );
    } else if (binding instanceof AST.StructBinding) {
      return new IR.Stmt.For(
        {
          struct: binding.bindings.map((x) => ({
            name: x.name.value,
            ty: x.ty ? this.visitTypeExpr(x.ty) : IR.Type.Infer,
          })),
        },
        this.visitExpr(node.iter),
        this.visitBlock(node.body)
      );
    } else {
      throw new Error('TODO: pattern for');
    }
  }

  public visitAssignStmt(
    node: AST.AssignStmt
  ): IR.Stmt.Assign | IR.Stmt.AssignMember | IR.Stmt.AssignIndex {
    let { lhs, rhs } = node;
    let expr = this.visitExpr(rhs);
    if (lhs instanceof AST.IdentLHS) {
      return new IR.Stmt.Assign(lhs.symbol.value, expr);
    } else if (lhs instanceof AST.DotLHS) {
      return new IR.Stmt.AssignMember(
        this.visitExpr(lhs.obj),
        lhs.member.value,
        expr
      );
    } else if (lhs instanceof AST.IndexLHS) {
      return new IR.Stmt.AssignIndex(
        this.visitExpr(lhs.obj),
        this.visitExpr(lhs.args.at(0)!),
        expr
      );
    } else {
      throw new Error('TODO: pattern assign');
    }
  }

  public visitExecStmt(node: AST.ExecStmt): IR.Stmt.Exec {
    return new IR.Stmt.Exec(this.visitExpr(node.expr));
  }

  public visitDelegateExecStmt(
    node: AST.DelegateExecStmt
  ): IR.Stmt.DelegateExec {
    return new IR.Stmt.DelegateExec(this.visitExpr(node.expr));
  }

  public visitInstantiateStmt(node: AST.InstantiateStmt): IR.Stmt.Instantiate {
    return new IR.Stmt.Instantiate(this.visitExpr(node.expr));
  }

  public visitEmitStmt(node: AST.EmitStmt): IR.Stmt.Emit {
    return new IR.Stmt.Emit(this.visitExpr(node.expr));
  }

  public visitReturnStmt(node: AST.ReturnStmt): IR.Stmt.Return {
    return new IR.Stmt.Return(this.visitExpr(node.expr));
  }

  public visitFailStmt(node: AST.FailStmt): IR.Stmt.Fail {
    return new IR.Stmt.Fail(this.visitExpr(node.expr));
  }
}

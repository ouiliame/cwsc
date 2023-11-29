import { AndExpr, AsExpr, AssignStmt, BinOpExpr, Block, CallExpr, ClosureExpr, ConstStmt, DotExpr, EmitStmt, ExecStmt, ExistsExpr, Expr, FailExpr, FailStmt, ForStmt, GroupedExpr, IdentExpr, IfExpr, IfStmt, ImportStmt, InExpr, IndexAssignStmt, IndexExpr, InstantiateStmt, IsExpr, LetStmt, MemberAssignStmt, NotExpr, OrExpr, QueryExpr, QueryNowExpr, ReturnStmt, ShortTryExpr, Stmt, StructExpr, TryCatchElseExpr, TupleExpr, UnitExpr } from "../ast";

// Evaluator iterates over the AST and yields the result of each node
export class Evaluator {
    bindings: Map<string, any>[] = []

    //#region binding
    setBinding(name: string, value: any) {
        this.bindings[this.bindings.length - 1].set(name, value)
    }

    getBinding(name: string): any {
        for (let i = this.bindings.length - 1; i >= 0; i--) {
            const scope = this.bindings[i];
            if (scope.has(name)) {
                return scope.get(name);
            }
        }

        throw new Error(`Undefined variable ${name}`);
    }

    enterScope() {
        this.bindings.push(new Map<string, any>())
    }

    exitScope() {
        this.bindings.pop()
    }
    //#endregion binding

    //#region Statements
    evalBlock(block: Block): any {
        this.bindings.push(new Map<string, any>())
        block.stmts.forEach(stmt => this.evalStmt(stmt))
        this.bindings.pop()
    }

    evalStmt(stmt: Stmt): any {
        if (stmt instanceof ImportStmt) {
            return this.evalImportStmt(stmt)
        }

        if (stmt instanceof LetStmt) {
            return this.evalLetStmt(stmt)
        }

        if (stmt instanceof ConstStmt) {
            return this.evalConstStmt(stmt)
        }
        
        if (stmt instanceof AssignStmt) {
            return this.evalAssignStmt(stmt)
        }

        if (stmt instanceof MemberAssignStmt) {
            return this.evalMemberAssignStmt(stmt)
        }

        if (stmt instanceof IndexAssignStmt) {
            return this.evalIndexAssignStmt(stmt)
        }

        if (stmt instanceof IfStmt) {
            return this.evalIfStmt(stmt)
        }

        if (stmt instanceof ForStmt) {
            return this.evalForStmt(stmt)
        }

        if (stmt instanceof ExecStmt) {
            return this.evalExecStmt(stmt)
        }

        if (stmt instanceof InstantiateStmt) {
            return this.evalInstantiateStmt(stmt)
        }

        if (stmt instanceof EmitStmt) {
            return this.evalEmitStmt(stmt)
        }

        if (stmt instanceof FailStmt) {
            return this.evalFailStmt(stmt)
        }

        if (stmt instanceof ReturnStmt) {
            return this.evalReturnStmt(stmt)
        }
    }

    evalImportStmt(stmt: ImportStmt): any {
        throw new Error("Method not implemented.");
    }

    evalLetStmt(stmt: LetStmt): any {
        this.bindings[this.bindings.length - 1].set(stmt.ident.value, this.evalExpr(stmt.expr))
    }
    //#endregion Statements

    //#region Expressions
    evalExpr(expr: Expr): any {
        if (expr instanceof TupleExpr) {
            return this.evalTupleExpr(expr)
        }

        if (expr instanceof StructExpr) {
            return this.evalStructExpr(expr)
        }

        if (expr instanceof GroupedExpr) {
            return this.evalGroupedExpr(expr)
        }

        if (expr instanceof DotExpr) {
            return this.evalDotExpr(expr)
        }

        if (expr instanceof AsExpr) {
            return this.evalAsExpr(expr)
        }

        if (expr instanceof IndexExpr) {
            return this.evalIndexExpr(expr)
        }

        if (expr instanceof CallExpr) {
            return this.evalCallExpr(expr)
        }

        if (expr instanceof ExistsExpr) {
            return this.evalExistsExpr(expr)
        }

        if (expr instanceof IfExpr) {
            return this.evalIfExpr(expr)
        }

        if (expr instanceof BinOpExpr) {
            return this.evalBinOpExpr(expr)
        }

        if (expr instanceof AndExpr) {
            return this.evalAndExpr(expr)
        }

        if (expr instanceof OrExpr) {
            return this.evalOrExpr(expr)
        }

        if (expr instanceof IsExpr) {
            return this.evalIsExpr(expr)
        }

        if (expr instanceof InExpr) {
            return this.evalInExpr(expr)
        }

        if (expr instanceof ShortTryExpr) {
            return this.evalShortTryExpr(expr)
        }

        if (expr instanceof TryCatchElseExpr) {
            return this.evalTryCatchElseExpr(expr)
        }

        if (expr instanceof ClosureExpr) {
            return this.evalClosureExpr(expr)
        }

        if (expr instanceof NotExpr) {
            return this.evalNotExpr(expr)
        }

        if (expr instanceof QueryExpr) {
            return this.evalQueryExpr(expr)
        }

        if (expr instanceof QueryNowExpr) {
            return this.evalQueryNowExpr(expr)
        }
        
        if (expr instanceof FailExpr) {
            return this.evalFailExpr(expr)
        }

        if (expr instanceof UnitExpr) {
            return this.evalUnitExpr(expr)
        }

        if (expr instanceof IdentExpr) {
            return this.evalIdentExpr(expr)
        }
    }

    evalTupleExpr(expr: TupleExpr): any {
        return expr.exprs.map(expr => this.evalExpr(expr))
    }

    evalStructExpr(expr: StructExpr): any {
        return expr.fields.map(field => this.evalField(field))
    }

    evalGroupedExpr(expr: GroupedExpr): any {
        return this.evalExpr(expr.expr)
    }

    evalDotExpr(expr: DotExpr): any {
        return this.evalExpr(expr.obj)[expr.memberName]
    }

    evalAsExpr(expr: AsExpr): any {
        // TODO: typecheck
        return this.evalExpr(expr.expr)
    }

    evalIndexExpr(expr: IndexExpr): any {
        return this.evalExpr(expr.obj)[this.evalExpr(expr.index)]
    }

    evalCallExpr(expr: CallExpr): any {
        // TODO: type args
        return this.evalExpr(expr.fn)((expr.args ?? []).map(arg => this.evalExpr(arg)))
    }

    evalExistsExpr(expr: ExistsExpr): any {
        throw new Error("Method not implemented.");
    }

    evalIfExpr(expr: IfExpr): any {
        return this.evalExpr(expr.pred) ? this.evalBlock(expr.thenBody) : (expr.elseBody ? this.evalBlock(expr.elseBody) : undefined)
    }

    evalBinOpExpr(expr: BinOpExpr): any {
        const left = this.evalExpr(expr.lhs)
        const right = this.evalExpr(expr.rhs)

        switch (expr.op) {
            case '+': return left + right
            case '-': return left - right
            case '*': return left * right
            case '/': return left / right
            case '%': return left % right
            case '==': return left == right
            case '!=': return left != right
            case '<': return left < right
            case '<=': return left <= right
            case '>': return left > right
            case '>=': return left >= right
        }
    }

    evalAndExpr(expr: AndExpr): any {
        return this.evalExpr(expr.lhs) && this.evalExpr(expr.rhs)
    }

    evalOrExpr(expr: OrExpr): any {
        return this.evalExpr(expr.lhs) || this.evalExpr(expr.rhs)
    }

    evalIsExpr(expr: IsExpr): any {
        throw new Error("Method not implemented.");
    }

    evalInExpr(expr: InExpr): any {
        throw new Error("Method not implemented.");
    }

    evalShortTryExpr(expr: ShortTryExpr): any {
        throw new Error("Method not implemented.");
    }

    evalTryCatchElseExpr(expr: TryCatchElseExpr): any {
        throw new Error("Method not implemented.");
    }

    evalClosureExpr(expr: ClosureExpr): any {
        return (args) => {
            const scope = new Map<string, any>()
            for (let i = 0; i < expr.args.length; i++) {
                const arg = expr.args[i];
                scope.set(arg.ident.value, args[i])
            }

            this.bindings.push(scope)
            const result = this.evalBlock(expr.body)
            this.bindings.pop()

            return result
        }
    }

    evalNotExpr(expr: NotExpr): any {
        return !this.evalExpr(expr.expr)
    }

    evalQueryExpr(expr: QueryExpr): any {
        throw new Error("Method not implemented.");
    }

    evalQueryNowExpr(expr: QueryNowExpr): any {
        throw new Error("Method not implemented.");
    }

    evalFailExpr(expr: FailExpr): any {
        throw new Error(this.evalExpr(expr.expr));
    }

    evalUnitExpr(expr: UnitExpr): any {
        return [] // TODO: type
    }

    evalIdentExpr(expr: IdentExpr): any {
        for (let i = this.bindings.length - 1; i >= 0; i--) {
            const scope = this.bindings[i];
            if (scope.has(expr.ident.value)) {
                return scope.get(expr.ident.value);
            }
        }

        throw new Error(`Undefined variable ${expr.ident.value}`);
    }


    //#endregion Expressions
}
import { AndExpr, AsExpr, AssignOp, AssignStmt, BinOpExpr, Binding, Block, CallExpr, ClosureExpr, ConstStmt, ContractDefn, Defn, DotExpr, EmitStmt, EnumDefn, ExecStmt, ExistsExpr, Expr, FailExpr, FailStmt, FnDefn, ForStmt, GroupedExpr, IdentBinding, IdentExpr, IfExpr, IfStmt, ImportStmt, InExpr, IndexAssignStmt, IndexExpr, InstantiateDefn, InstantiateStmt, InterfaceDefn, IsExpr, LetStmt, MemberAssignStmt, NotExpr, OrExpr, QueryExpr, QueryNowExpr, ReturnStmt, ShortTryExpr, Stmt, StructBinding, StructDefn, StructExpr, TryCatchElseExpr, TupleBinding, TupleDefn, TupleExpr, TypeAliasDefn, UnitDefn, UnitExpr } from "../ast";
import { CWSExecFnType, CWSQueryFnType } from "../ir/types";
import { variantStruct } from "../rust-syntax";

type Type = InterfaceType | StructType | TupleType | EnumType | UnitType | FnType | AliasType

interface InterfaceType {
    $type: "interface"
    name: string
    members: [string, Type][]
}

interface StructType {
    $type: "struct"
    name: string
    members: [string, Type][]
}

interface AnonymousStructType {
    $type: "anonymous-struct"
}

interface EnumType {
    $type: "enum"
    variants: [string, Type][]
}

interface EnumValue {
    $type: EnumType,
    variant: string,
    value: any,
}

interface StructValue {
    $type: StructType | AnonymousStructType,
}

interface TupleType {
    $type: "tuple"
    name: string
    members: Type[]
}

interface AnonymousTupleType {
    $type: "anonymous-tuple"
}
interface TupleValue {
    $type: TupleType | AnonymousTupleType, 
    [key: number]: any
    length: number
}

interface UnitType {
    $type: "unit"
    name: string
}

interface UnitValue {
    $type: UnitType
}

interface FnType {
    $type: "fn"
    name: string
    params: [string, Type][]
    returnType: Type
    fn: (args: any[]) => any
}

interface AliasType {
    $type: "alias"
    name: string
}

// Mockup "contract" with top level definitions and state
export class EvaluatorContract {
    name: string = ""
    base: EvaluatorContract | null = null
    instantiate: () => any = () => undefined,
    execs: Map<string, () => any> = new Map()
    queries: Map<string, () => any> = new Map()
    types: Map<string, Type> = new Map()
    events: Map<string, () => any> = new Map()
    errors: Map<string, () => any> = new Map()
    state: Map<string, any> = new Map()

    //#region Definitions
    evalDefn(defn: Defn): Type {
        if (defn instanceof ContractDefn) {
            throw new Error("nested contracts not allowed")
        }

        if (defn instanceof InterfaceDefn) {
            return this.evalInterfaceDefn(defn);
        }

        if (defn instanceof StructDefn) {
            return this.evalStructDefn(defn);
        }

        if (defn instanceof TupleDefn) {
            return this.evalTupleDefn(defn);
        }

        if (defn instanceof UnitDefn) {
            return this.evalUnitDefn(defn);
        }

        if (defn instanceof EnumDefn) {
            return this.evalEnumDefn(defn);
        }

        if (defn instanceof TypeAliasDefn) {
            return this.evalTypeAliasDefn(defn);
        }

        if (defn instanceof FnDefn) {
            return this.evalFnDefn(defn);
        }

        if (defn instanceof InstantiateDefn) {
            return this.evalInstantiateDefn(defn);
        }

        if (defn instanceof ExecDefn) {
            return this.evalExecDefn(defn);
        }

        if (defn instanceof QueryDefn) {
            return this.evalQueryDefn(defn);
        }

        if (defn instanceof ErrorDefn) {
            return this.evalErrorDefn(defn);
        }

        if (defn instanceof EventDefn) {
            return this.evalEventDefn(defn);
        }

        if (defn instanceof StateBlockDefn) {
            return this.evalStateBlockDefn(defn);
        }

        if (defn instanceof StateItemDefn) {
            return this.evalStateItemDefn(defn);
        }

        if (defn instanceof StateMapDefn) {
            return this.evalStateMapDefn(defn);
        }

        throw new Error("Method not implemented.");
    }

    constructor(defn: ContractDefn) {
        this.evalContractDefn(defn)
    }

    evalContractDefn(defn: ContractDefn) {
        if (this.name) {
            throw new Error("Contract already defined");
        }
        this.name = defn.name.value;

        if (defn.base) {
            this.base = this.evalType(defn.base);
        }
        
        if (defn.interfaces) {
            defn.interfaces.map(iface => {
                const typ = this.evalType(iface)
                this.types.set(typ.name, typ)
            })
        }

        defn.body.forEach(defn => this.evalDefn(defn))

        return this
    }

    evalInterfaceDefn(defn: InterfaceDefn): InterfaceType {
        throw new Error("Method not implemented.");
    }

    evalStructDefn(defn: StructDefn): StructType {
        const fields = defn.fields.map(field => this.evalField(field))

        const typ: StructType = {
            $type: "struct",
            name: defn.name.value,
            members: fields,
        }

        return typ
    }

    evalTupleDefn(defn: TupleDefn): TupleType {
        const members = defn.elements.map(member => this.evalType(member))
        const typ: TupleType = {
            $type: "tuple",
            name: defn.name.value,
            members: members,
        }

        return typ
    }

    evalUnitDefn(defn: UnitDefn): UnitType {
        const typ: UnitType = {
            $type: "unit",
            name: defn.name.value,
        }

        return typ
    }

    evalEnumDefn(defn: EnumDefn): Type {
        const typ: EnumType = {
            $type: "enum",
            variants: defn.variants.map(variant => this.evalVariant(variant)),
        }
    }

    evalTypeAliasDefn(defn: TypeAliasDefn): Type {
        return {
            $type: "alias",
            name: defn.name.value,
        }
    }
    evalFnDefn(defn: FnDefn): Type {
        const fn = (args) => {
            
        }

        return {
            $type: "fn",
            name: defn.name.value,
            params: defn.params.map(param => this.evalParam(param)),
            returnType: this.evalType(defn.returnType),
            fn: fn,
        }
    }
    //#endregion Definitions
}

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

    evalImportStmt(stmt: ImportStmt) {
        throw new Error("Method not implemented.");
    }

    bindValue(binding: Binding, expr: Expr): [string, any][] {
        const value = this.evalExpr(expr)
        const queue: [string, any][] = []

        if (binding instanceof IdentBinding) {
            queue.push([binding.name.value, value])
        }

        if (binding instanceof TupleBinding) {
            for (let i = 0; i < binding.names.length; i++) {
                queue.push([binding.names.children[i].value, value[i]])
            }
        }

        if (binding instanceof StructBinding) {
            for (let i = 0; i < binding.names.length; i++) {
                const name = binding.names.children[i].value
                queue.push([name, value[name]])
            }
        }

        return queue
    }

    evalLetStmt(stmt: LetStmt) {
        const queue = this.bindValue(stmt.binding, stmt.value)
        queue.forEach(([name, value]) => this.setBinding(name, value))
    }

    evalConstStmt(stmt: ConstStmt) {
        // TODO: typecheck, constant
        this.setBinding(stmt.name.value, this.evalExpr(stmt.value))
    }

    evalAssignStmt(stmt: AssignStmt) {
        // TODO: check const

        switch (stmt.assignOp) {
            case AssignOp.EQ:
                this.setBinding(stmt.name.value, this.evalExpr(stmt.value));
                return;
            case AssignOp.PLUS_EQ:
                this.setBinding(stmt.name.value, this.getBinding(stmt.name.value) + this.evalExpr(stmt.value));
                return;
            case AssignOp.MINUS_EQ:
                this.setBinding(stmt.name.value, this.getBinding(stmt.name.value) - this.evalExpr(stmt.value));
                return;
            case AssignOp.MUL_EQ:
                this.setBinding(stmt.name.value, this.getBinding(stmt.name.value) * this.evalExpr(stmt.value));
                return;
            case AssignOp.DIV_EQ:
                this.setBinding(stmt.name.value, this.getBinding(stmt.name.value) / this.evalExpr(stmt.value));
                return;
            case AssignOp.MOD_EQ:
                this.setBinding(stmt.name.value, this.getBinding(stmt.name.value) % this.evalExpr(stmt.value));
                return;
            default:
                throw new Error("Invalid assignment operator");
        }
    }

    evalMemberAssignStmt(stmt: MemberAssignStmt) {
        const obj = this.evalExpr(stmt.obj)
        const value = this.evalExpr(stmt.value)

        switch (stmt.assignOp) {
            case AssignOp.EQ:
                obj[stmt.memberName.value] = value
                return;
            case AssignOp.PLUS_EQ:
                obj[stmt.memberName.value] += value
                return;
            case AssignOp.MINUS_EQ:
                obj[stmt.memberName.value] -= value
                return;
            case AssignOp.MUL_EQ:
                obj[stmt.memberName.value] *= value
                return;
            case AssignOp.DIV_EQ:
                obj[stmt.memberName.value] /= value
                return;
            case AssignOp.MOD_EQ:
                obj[stmt.memberName.value] %= value
                return;
            default:
                throw new Error("Invalid assignment operator");
        }
    }

    evalIndexAssignStmt(stmt: IndexAssignStmt) {
        const obj = this.evalExpr(stmt.obj)
        const index = this.evalExpr(stmt.index)
        const value = this.evalExpr(stmt.value)

        switch (stmt.assignOp) {
            case AssignOp.EQ:
                obj[index] = value
                return;
            case AssignOp.PLUS_EQ:
                obj[index] += value
                return;
            case AssignOp.MINUS_EQ:
                obj[index] -= value
                return;
            case AssignOp.MUL_EQ:
                obj[index] *= value
                return;
            case AssignOp.DIV_EQ:
                obj[index] /= value
                return;
            case AssignOp.MOD_EQ:
                obj[index] %= value
                return;
            default:
                throw new Error("Invalid assignment operator");
        }
    }

    evalIfStmt(stmt: IfStmt) {
        if (this.evalExpr(stmt.pred)) {
            this.evalBlock(stmt.thenBody)
        } else if (stmt.elseBody) {
            this.evalBlock(stmt.elseBody)
        }
    }

    evalForStmt(stmt: ForStmt) {
        throw new Error("Method not implemented.");
    }

    evalEmitStmt(stmt: EmitStmt) {
        throw new Error("Method not implemented.");
    }

    evalFailStmt(stmt: FailStmt) {
        throw new FailError(this.evalExpr(stmt.value));
    }

    evalReturnStmt(stmt: ReturnStmt) {

    }

    // ENTRYPOINTS
    evalExecStmt(stmt: ExecStmt) {

    }

    evalInstantiateStmt(stmt: InstantiateStmt) {
        throw new Error("Method not implemented.");
    }

    evalQueryStmt(stmt: QueryExpr) {
        throw new Error("Method not implemented.");
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
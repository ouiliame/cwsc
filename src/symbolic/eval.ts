import { AST, AndExpr, ArrayTypeExpr, AsExpr, AssignOp, AssignStmt, BinOpExpr, Binding, CallExpr, ClosureExpr, ConstStmt, ContractDefn, Defn, DotExpr, EmitStmt, EnumDefn, EnumDefnTypeExpr, EnumVariantStructDefn, EnumVariantTupleDefn, EnumVariantUnitDefn, ErrorDefn, EventDefn, ExecDefn, ExecStmt, ExistsExpr, Expr, FailExpr, FailStmt, FnDefn, ForStmt, GroupedExpr, GroupedTypeExpr, Ident, IdentBinding, IdentExpr, IdentTypeExpr, IfExpr, IfStmt, ImportStmt, InExpr, IndexAssignStmt, IndexExpr, InstantiateDefn, InstantiateStmt, InterfaceDefn, IsExpr, LetStmt, MemberAssignStmt, MemberTypeExpr, NotExpr, OptionTypeExpr, OrExpr, Param, ParamzdTypeExpr, QueryDefn, QueryExpr, QueryNowExpr, ReturnStmt, ShortTryExpr, StateBlockDefn, StateItemDefn, StateMapDefn, Stmt, StructBinding, StructDefn, StructDefnTypeExpr, StructExpr, TryCatchElseExpr, TupleBinding, TupleDefn, TupleDefnTypeExpr, TupleExpr, TypeAliasDefn, TypeExpr, TypeVarExpr, UnitDefn, UnitDefnTypeExpr, UnitExpr, Block, List } from "../ast";


import { ArrayTypeExprContext } from "../grammar/CWScriptParser";
import { CWSExpr, CWSType, CWSValue, IR } from "../ir";
import { CWSAnyType, CWSArrayType, CWSBoolType, CWSContractType, CWSEnumType, CWSEnumVariant, CWSEnumVariantStructType, CWSEnumVariantTupleType, CWSErrorType, CWSEventType, CWSExecFnType, CWSFnType, CWSInstantiateFnType, CWSIntType, CWSInterfaceType, CWSMapType, CWSOptionType, CWSPlaceholderType, CWSQueryFnType, CWSStructType, CWSTupleType, CWSTypeAliasType, CWSVoidType, Placeholder } from "../ir/types";
import { variantStruct } from "../rust-syntax";

// LexicalSymbolTable is used to look up a symbol within a context of a specific contract.
// Each block scope has its own LexicalSymbolTable, which may be nested.
export interface SymbolTable {
    // InstantiateStmt lookup
    instantiate(): CWSInstantiateFnType | undefined;
    // ExecStmt lookup
    exec(name: string): CWSExecFnType | undefined;
    // QueryStmt lookup
    query(name: string): CWSQueryFnType | undefined;
    // Interface assertion lookup
    interface(name: string): CWSInterfaceType | undefined;

    // FailStmt lookup
    error(name: string): CWSErrorType | undefined;
    // EmitStmt lookup
    event(name: string): CWSEventType | undefined;

    // Type lookup
    type(name: string): CWSType | undefined;

    // $state, top level functions, and top level variables
    variable(name: string): CWSType | undefined;
}

export interface ProjectSymbolTable {
    file(name: string): FileSymbolTable | undefined;
}

export interface FileSymbolTable {
    contract(name: string): ContractSymbolTable | undefined;
}



export interface LexicalSymbolTable {
    contract: ContractSymbolTable;

    parent?: LexicalSymbolTable | undefined;

    // Lexical variable lookup
    variable(name: string): CWSType | undefined;

    // Return type
    get returnType(): CWSType | undefined;
    set returnType(ty: CWSType | undefined);
}

export class Contract extends ContractDefn implements ContractSymbolTable, LexicalSymbolTable {
    public contract = this
    public parent = undefined

    get returnType(): CWSType | undefined {
        throw new Error("unreachable")
    }

    set returnType(ty: CWSType | undefined) {
        throw new Error("unreachable")
    }

    // The constructor takes a ContractDefn and constructs an lexical symbol table enriched ContractDefn.
    // It first iterates over the top level definitions, including types, functions, and state variables.
    // They will be stored inside of the corresponding maps, with temporary values.
    // Second, it iterates over the definitions again, this time evaluating the definitions.
    // This will fill in the temporary types with the actual types.
    constructor(defn: ContractDefn) {
        super(defn.name, defn.base, defn.interfaces, defn.body);

        defn.body.forEach(defn => this.evalToplevelDefn(defn))
        // defn.body.forEach(defn => this.evalDefn(defn))
    }

    _instantiate?: Placeholder<CWSInstantiateFnType>
    instantiate(): CWSInstantiateFnType | undefined {
        if (this._instantiate instanceof CWSPlaceholderType) {
            return this._instantiate.resolve()
        }
        return this._instantiate
    }

    _exec: Map<string, Placeholder<CWSExecFnType>> = new Map();
    exec(name: string): CWSExecFnType | undefined {
        let ty = this._exec.get(name);
        if (ty instanceof CWSPlaceholderType) {
            return ty.resolve()
        }
        return ty
    }

    _query: Map<string, Placeholder<CWSQueryFnType>> = new Map();
    query(name: string): CWSQueryFnType | undefined {
        let ty = this._query.get(name);
        if (ty instanceof CWSPlaceholderType) {
            return ty.resolve()
        }
        return ty
    }

    _error: Map<string, Placeholder<CWSErrorType>> = new Map();
    error(name: string): CWSErrorType | undefined {
        let ty = this._error.get(name);
        if (ty instanceof CWSPlaceholderType) {
            return ty.resolve()
        }
        return ty
    }

    _event: Map<string, Placeholder<CWSEventType>> = new Map();
    event(name: string): CWSEventType | undefined {
        let ty = this._event.get(name);
        if (ty instanceof CWSPlaceholderType) {
            return ty.resolve()
        }
        return ty
    }

    _interface: Map<string, Placeholder<CWSInterfaceType>> = new Map();
    interface(name: string): CWSInterfaceType | undefined {
        let ty = this._interface.get(name);
        if (ty instanceof CWSPlaceholderType) {
            return ty.resolve()
        }
        return ty
    }

    _struct: Map<string, Placeholder<CWSStructType>> = new Map();
    _enum: Map<string, Placeholder<CWSEnumType>> = new Map();
    _tuple: Map<string, Placeholder<CWSTupleType>> = new Map();
    toplevelType(name: string): CWSType {
        return this._struct.get(name) ?? this._enum.get(name) ?? this._tuple.get(name) ?? (() => { throw new Error("Type not found") })();
    }
    type(name: string): CWSType | undefined {
        if (name === "Int") {
            return new CWSPlaceholderType(() => CWSIntType)
        }

        const sty = this._struct.get(name)
        if (sty instanceof CWSPlaceholderType) {
            return sty.resolve()
        }
        if (sty) {
            return sty
        }

        const ety = this._enum.get(name)
        if (ety instanceof CWSPlaceholderType) {
            return ety.resolve()
        }
        if (ety) {
            return ety
        }

        const tty = this._tuple.get(name)
        if (tty instanceof CWSPlaceholderType) {
            return tty.resolve()
        }
        if (tty) {
            return tty
        }

        return undefined
    }

    _fn: Map<string, Placeholder<CWSFnType>> = new Map();
    _state: CWSStructType | undefined = undefined;
    variable(name: string): CWSType | undefined {
        if (name == '$state') {
            return this._state;
        }
        return this._fn.get(name);
    }
    //#region TypeExpr
    
    //#endregion TypeExpr


    //#region Definitions
    
    // skims through the top level definitions and creates a symbol table
    // does not evaluate the internal types
    evalToplevelDefn(defn: Defn) {
        if (defn instanceof InterfaceDefn) {
            throw new Error("TODO");
            /*
            if (this.interface(defn.name.value)) {
                throw new Error("type already defined")
            }
            this._interface.set(defn.name.value, new CWSPlaceholderType(defn.name.value))
            return
            */
        }

        if (defn instanceof StructDefn) {
            if (this.type(defn.name.value)) {
                throw new Error("type already defined")
            }
            this._struct.set(defn.name.value, new CWSPlaceholderType(() => new CWSStructType(defn.name.value, defn.fields.map(x => evalParam(this, x)))))
            return
        }

        if (defn instanceof TupleDefn) {
            if (this.type(defn.name.value)) {
                throw new Error("type already defined")
            }
            this._tuple.set(defn.name.value, new CWSPlaceholderType(() => new CWSTupleType(defn.name.value, defn.elements.map(x => evalType(this, x)))))
        }

        if (defn instanceof UnitDefn) {
            
        }
    
        if (defn instanceof EnumDefn) {
            if (this.type(defn.name.value)) {
                throw new Error("type already defined")
            }
            
            return new CWSPlaceholderType(() => evalEnum(this, defn))
        }

        if (defn instanceof FnDefn) {
            if (this._fn.has(defn.name.value)) {
                throw new Error("function already defined")
            }
            this._fn.set(defn.name.value, new CWSPlaceholderType(() => new CWSFnType(defn.fallible, (defn.params ?? []).map(x => evalParam(this, x)), defn.returnTy ? evalType(this, defn.returnTy) : new CWSVoidType)))
            return
        }

        if (defn instanceof InstantiateDefn) {
            if (this._instantiate) {
                throw new Error("instantiate already defined")
            }
            if (this._instantiate) {
                throw new Error("instantiate already defined")
            }
            this._instantiate = new CWSPlaceholderType(() => new CWSInstantiateFnType((defn.params ?? []).map(x => evalParam(this, x))))
            return
        }
        
        if (defn instanceof ExecDefn) {
            if (this.exec(defn.name.value)) {
                throw new Error("exec already defined")
            }
            this._exec.set(defn.name.value, new CWSPlaceholderType(() => new CWSExecFnType(defn.name.value, (defn.params ?? []).map(x => evalParam(this, x)))))
            return
        }

        if (defn instanceof QueryDefn) {
            if (this.query(defn.name.value)) {
                throw new Error("query already defined")
            }
            this._query.set(defn.name.value, new CWSPlaceholderType(() => new CWSQueryFnType(defn.name.value, (defn.params ?? []).map(x => evalParam(this, x)))))
            return
        }

        if (defn instanceof ErrorDefn) {
            if (this.error(defn.name.value)) {
                throw new Error("error already defined")
            }
            this._error.set(defn.name.value, new CWSPlaceholderType(() => new CWSErrorType(defn.name.value, (defn.fields ?? []).map(x => evalParam(this, x)))))
            return
        }

        if (defn instanceof EventDefn) {
            if (this.event(defn.name.value)) {
                throw new Error("event already defined")
            }
            this._event.set(defn.name.value, new CWSPlaceholderType(() =>  new CWSEventType(defn.name.value, (defn.fields ?? []).map(x => evalParam(this, x)))))
            return
        }

        if (defn instanceof StateBlockDefn) {
            if (this._state) {
                throw new Error("state already defined")
            }
            
            this._state = new CWSStructType('$state', [])
            defn.stateFields.forEach(field => {
                if (field instanceof StateItemDefn) {
                    this._state!.fields.push({ name: field.name.value, ty: new CWSPlaceholderType(() => evalType(this, field.ty)) })
                }
                if (field instanceof StateMapDefn) {
                    this._state!.fields.push({ name: field.name.value, ty: new CWSPlaceholderType(() => evalType(this, field.ty)) })
                }
            })

            return
        }

        throw new Error(`Method not implemented: ${defn.constructor.name}`);
    }
    //#endregion Definitions
}

export class BlockScope extends Block implements LexicalSymbolTable {
    _variable: Map<string, CWSType> = new Map()
    variable(name: string): CWSType | undefined {
        return this._variable.get(name)
    }

    get returnType(): CWSType | undefined {
        return this.parent.returnType
    }

    set returnType(ty: CWSType | undefined) {
        this.parent.returnType = ty
    }

    constructor(stmts: List<Stmt>, public contract: ContractSymbolTable, public parent: LexicalSymbolTable) {
        super(stmts.children)
    }

    evalStmt(stmt: Stmt) {
        // we only care about declarations to create the symbol table
        if (stmt instanceof LetStmt) {
            if (stmt.binding instanceof IdentBinding) {
                this._variable.set(stmt.binding.name.value, evalExpr(this, stmt.value))
            }
            if (stmt.binding instanceof TupleBinding) {
                let valueTy = evalExpr(this, stmt.value)
                if (!(valueTy instanceof CWSTupleType)) {
                    throw new Error("Invalid tuple type")
                }
                for (let i = 0; i < stmt.binding.names.length; i++) {
                    this._variable.set(stmt.binding.names.children[i].value, valueTy.elementTys[i])
                }
            }
            if (stmt.binding instanceof StructBinding) {
                let valueTy = evalExpr(this, stmt.value)
                if (!(valueTy instanceof CWSStructType)) {
                    throw new Error("Invalid struct type")
                }
                for (let i = 0; i < stmt.binding.names.length; i++) {
                    this._variable.set(stmt.binding.names.children[i].value, valueTy.fields[i].ty)
                }
            }
        }

        if (stmt instanceof ConstStmt) {
            this._variable.set(stmt.name.value, evalExpr(this, stmt.value))
        }

        if (stmt instanceof ReturnStmt) {
            // we want to register the return type of the function
            // so that we can check if the return type is compatible with the function type

            let retunType = evalExpr(this, stmt.value)

            if (this.returnType) {
                if (this.returnType != retunType) {
                    throw new Error("Invalid return type")
                }
            }

            this.returnType = retunType
        }

        // Ignore other statements that does not introduce a new variable
        // TODO: do the type inference for all the statements
        return
    }
}

// Fn acts similarly to BlockScope, but it also has parameters
export class Fn extends FnDefn implements LexicalSymbolTable {
    block: BlockScope

    _variable: Map<string, CWSType> = new Map()
    variable(name: string): CWSType | undefined {
        return this._variable.get(name)
    }

    _returnType: CWSType | undefined = undefined
    get returnType(): CWSType | undefined {
        return this._returnType
    }

    set returnType(ty: CWSType | undefined) {
        this._returnType = ty
    }

    constructor(defn: FnDefn, public contract: ContractSymbolTable, public parent?: LexicalSymbolTable) {
        super(defn.name, defn.fallible, List.empty(), defn.params, defn.returnTy, defn.body);

        this.block = new BlockScope(defn.body, contract, this);

        (defn.params ?? []).forEach(param => this._variable.set(param.name.value, evalType(contract, param.ty ? param.ty : undefined)))
        
        defn.body.forEach(stmt => this.block.evalStmt(stmt))

        if (defn.returnTy) {
            if (this.returnType != evalType(contract, defn.returnTy)) {
                throw new Error("Invalid return type")
            }
        }
    }
}
/*
export class Statement {
    constructor(public parent: LexicalSymbolTable) { }

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
}
*/
// Type evaluator for expression nodes. Uses the symbol table to look up types of each identifier.

//#region Expressions
function evalType(scope: ContractSymbolTable, ty?: TypeExpr | null | undefined): CWSType {
    if (!ty) {
        throw new Error("Type is null")
    }

    if (ty instanceof GroupedTypeExpr) {
        return evalType(scope, ty.ty)
    }

    if (ty instanceof ParamzdTypeExpr) {
        throw new Error("Method not implemented.");
    }

    if (ty instanceof MemberTypeExpr) {
        throw new Error("Method not implemented.");
    }

    if (ty instanceof ArrayTypeExpr) {
        let inner = evalType(scope, ty.ty)
        if (!inner) {
            throw new Error("Invalid array type")
        }
        return new CWSArrayType(inner, parseInt(ty.size.value))
    }

    if (ty instanceof StructDefnTypeExpr) {
        return new CWSStructType(ty.structDefn.name.value, ty.structDefn.fields.map(x => evalParam(scope, x)))
    }

    if (ty instanceof TupleDefnTypeExpr) {
        return new CWSTupleType(ty.tupleDefn.name.value, ty.tupleDefn.elements.map(x => evalType(scope, x)))
    }

    if (ty instanceof UnitDefnTypeExpr) {
        return new CWSTupleType(ty.unitDefn.name.value, [])
    }

    if (ty instanceof EnumDefnTypeExpr) {
        return evalEnum(scope, ty.enumDefn)   
    }

    if (ty instanceof OptionTypeExpr) {
        let inner = evalType(scope, ty.ty)
        if (!inner) {
            throw new Error("Invalid option type")
        }
        return new CWSOptionType(inner)
    }
    
    if (ty instanceof TypeVarExpr) {
        throw new Error("Method not implemented.");
    }

    if (ty instanceof IdentTypeExpr) {
        let inner = scope.type(ty.ident.value)
        if (!inner) {
            throw new Error(`Type not found: ${ty.ident.value}`)
        }
        return inner
    }

    throw new Error(`Invalid type expression: ${ty.constructor.name}`)
}

function evalParam(scope: ContractSymbolTable, param: Param) {
    if (!param.ty) {
        throw new Error("Type is null")
    }

    return {
        name: param.name.value,
        ty: evalType(scope, param.ty),
        optional: param.optional,
    }
}

function evalEnum(scope: ContractSymbolTable, enm: EnumDefn) {
    return new CWSEnumType(enm.name.value, enm.variants.map(variant => {
        if (variant instanceof EnumVariantTupleDefn) {
            return new CWSEnumVariantTupleType(variant.name.value, (variant.fields ?? []).map(x => evalType(scope, x)))
        }
        if (variant instanceof EnumVariantStructDefn) {
            return new CWSEnumVariantStructType(variant.name.value, variant.fields.map(x => evalParam(scope, x)))
        }
        if (variant instanceof EnumVariantUnitDefn) {
            throw new Error("TODO");
        }
        throw new Error("Invalid enum variant");
    }))
}

// evalBlock evaluates a block of statements in a new scope.
// it evaluates to the type of the last statement.
// TODO: additionally check any return statements
function evalBlock(scope: LexicalSymbolTable, block: Block): CWSType {
    let newScope = new BlockScope(block, scope.contract, scope)
    block.forEach(stmt => newScope.evalStmt(stmt))
    return evalExpr(newScope, block.children[block.length - 1])
}

function evalFn(scope: LexicalSymbolTable, defn: FnDefn): CWSFnType {
    let fn = new Fn(defn, scope.contract, scope)
    let returnType: CWSType = fn.returnType ?? new CWSVoidType
    return new CWSFnType(false/*TODO*/, (fn.params ?? []).map(x => evalParam(scope.contract, x)), returnType)
}

function evalExpr(scope: LexicalSymbolTable, expr: Expr): CWSType {
    if (expr instanceof TupleExpr) {
        return evalTupleExpr(scope, expr)
    }

    if (expr instanceof StructExpr) {
        return evalStructExpr(scope, expr)
    }

    if (expr instanceof GroupedExpr) {
        return evalGroupedExpr(scope, expr)
    }

    if (expr instanceof DotExpr) {
        return evalDotExpr(scope, expr)
    }

    if (expr instanceof AsExpr) {
        return evalAsExpr(scope, expr)
    }

    if (expr instanceof IndexExpr) {
        return evalIndexExpr(scope, expr)
    }

    if (expr instanceof CallExpr) {
        return evalCallExpr(scope, expr)
    }

    if (expr instanceof ExistsExpr) {
        return evalExistsExpr(scope, expr)
    }

    if (expr instanceof IfExpr) {
        return evalIfExpr(scope, expr)
    }

    if (expr instanceof BinOpExpr) {
        return evalBinOpExpr(scope, expr)
    }

    if (expr instanceof AndExpr) {
        return evalAndExpr(scope, expr)
    }

    if (expr instanceof OrExpr) {
        return evalOrExpr(scope, expr)
    }

    if (expr instanceof IsExpr) {
        return evalIsExpr(scope, expr)
    }

    if (expr instanceof InExpr) {
        return evalInExpr(scope, expr)
    }

    if (expr instanceof ShortTryExpr) {
        return evalShortTryExpr(scope, expr)
    }

    if (expr instanceof TryCatchElseExpr) {
        return evalTryCatchElseExpr(scope, expr)
    }

    if (expr instanceof ClosureExpr) {
        return evalClosureExpr(scope, expr)
    }

    if (expr instanceof NotExpr) {
        return evalNotExpr(scope, expr)
    }

    if (expr instanceof QueryExpr) {
        return evalQueryExpr(scope, expr)
    }

    if (expr instanceof QueryNowExpr) {
        return evalQueryNowExpr(scope, expr)
    }
    
    if (expr instanceof FailExpr) {
        return evalFailExpr(scope, expr)
    }

    if (expr instanceof UnitExpr) {
        return evalUnitExpr(scope, expr)
    }

    if (expr instanceof IdentExpr) {
        return evalIdentExpr(scope, expr)
    }

    throw new Error("Invalid expression")
}

function evalTupleExpr(scope: LexicalSymbolTable, expr: TupleExpr): CWSType {
    return new CWSTupleType('__Anonymous', (expr.exprs ?? []).map(expr => evalExpr(scope, expr)))
}

function evalStructExpr(scope: LexicalSymbolTable, expr: StructExpr): CWSType {
    return new CWSStructType('__Anonymous', (expr.fields??[]).map(field => {
        if (!field.value) {
            // Is this shorthand expression? If so,
            // return { name: field.name.value, ty: scope.variable(field.name.value) }
            throw new Error("Invalid struct expression")
        }
        return { name: field.name.value, ty: evalExpr(scope, field.value) }
    }))
}

function evalGroupedExpr(scope: LexicalSymbolTable, expr: GroupedExpr): CWSType {
    return evalExpr(scope, expr.expr)
}

function evalDotExpr(scope: LexicalSymbolTable, expr: DotExpr): CWSType {
    let objty = evalExpr(scope, expr.obj)
    if (!(objty instanceof CWSStructType)) {
        throw new Error("Invalid dot expression")
    }
    let ty = objty.fields.find(field => field.name == expr.memberName.value)
    if (!ty) {
        throw new Error("Invalid dot expression")
    }
    return ty.ty
}

function evalAsExpr(scope: LexicalSymbolTable, expr: AsExpr): CWSType {
    let exprty = evalExpr(scope, expr.expr)
    let ty = evalType(scope.contract, expr.ty)
    if (exprty.isSubtypeOf(ty)) {
        return ty
    }
    throw new Error("Invalid as expression")
}

function evalIndexExpr(scope: LexicalSymbolTable, expr: IndexExpr): CWSType {
    let objty = evalExpr(scope, expr.obj)
    if (!(objty instanceof CWSArrayType)) {
        throw new Error("Invalid index expression")
    }
    return objty.ty
}

function evalCallExpr(scope: LexicalSymbolTable, expr: CallExpr): CWSType {
    let fnty = evalExpr(scope, expr.fn)
    if (!(fnty instanceof CWSFnType)) {
        throw new Error("Invalid call expression")
    }
    return fnty.returnTy // TODO: check args, check typeparams
}

function evalExistsExpr(scope: LexicalSymbolTable, expr: ExistsExpr): CWSType {
    let ty = evalExpr(scope, expr.expr)
    if (ty instanceof CWSOptionType) {
        return ty.ty
    }
    return ty // TODO: check if its right
}

function evalIfExpr(scope: LexicalSymbolTable, expr: IfExpr): CWSType {
    // Ignore the conditional expression
    let thenty = evalBlock(scope, expr.thenBody)

    if (expr.elseBody) {
        let elsety = evalBlock(scope, expr.elseBody)
        if (thenty == elsety) {
            return thenty
        }
        throw new Error("Invalid if expression: incompatible types")
    }

    return new CWSOptionType(thenty)
}

function evalArithmeticBinOpExpr(scope: LexicalSymbolTable, expr: BinOpExpr): CWSType {
    const left = evalExpr(scope, expr.lhs)
    const right = evalExpr(scope, expr.rhs)

    // fast path, find out if both have the same type
    if (left == right) {
        return left
    }
    
    throw new Error("Invalid binary operator") // TODO: subtyping
}

function evalEqualityBinOpExpr(scope: LexicalSymbolTable, expr: BinOpExpr): CWSType {
    const left = evalExpr(scope, expr.lhs)
    const right = evalExpr(scope, expr.rhs)

    // fast path, find out if both have the same type
    if (left == right) {
        return CWSBoolType
    }
    
    throw new Error("Invalid binary operator") // TODO: subtyping
}

function evalBinOpExpr(scope: LexicalSymbolTable, expr: BinOpExpr): CWSType {
    const left = evalExpr(scope, expr.lhs)
    const right = evalExpr(scope, expr.rhs)

    switch (expr.op) {
        case '+': 
        case '-': 
        case '*': 
        case '/': 
        case '%': 
        case '<': 
        case '<=': 
        case '>': 
        case '>=': 
            return evalArithmeticBinOpExpr(scope, expr)
        case '==':
        case '!=':
            return evalEqualityBinOpExpr(scope, expr)
        default:
            throw new Error("Invalid binary operator")
    }
}

function evalAndExpr(scope: LexicalSymbolTable, expr: AndExpr): CWSType {
    const left = evalExpr(scope, expr.lhs)
    const right = evalExpr(scope, expr.rhs)

    if (left == CWSBoolType && right == CWSBoolType) {
        return CWSBoolType
    }

    throw new Error("Invalid binary operator")
}

function evalOrExpr(scope: LexicalSymbolTable, expr: OrExpr): CWSType {
    const left = evalExpr(scope, expr.lhs)
    const right = evalExpr(scope, expr.rhs)

    if (left == CWSBoolType && right == CWSBoolType) {
        return CWSBoolType
    }

    throw new Error("Invalid binary operator")
}

function evalIsExpr(scope: LexicalSymbolTable, expr: IsExpr): CWSType {
    return CWSBoolType
}

function evalInExpr(scope: LexicalSymbolTable, expr: InExpr): CWSType {
    throw new Error("Method not implemented.");
}

function evalShortTryExpr(scope: LexicalSymbolTable, expr: ShortTryExpr): CWSType {
    const left = evalExpr(scope, expr.lhs)
    const right = evalExpr(scope, expr.rhs)

    if (left == right) {
        return left
    }

    throw new Error("Invalid binary operator") // TODO: subtyping
}

function evalTryCatchElseExpr(scope: LexicalSymbolTable, expr: TryCatchElseExpr): CWSType {
    throw new Error("Method not implemented.");
}

function evalClosureExpr(scope: LexicalSymbolTable, expr: ClosureExpr): CWSType {
    throw new Error("Method not implemented.");
}

function evalNotExpr(scope: LexicalSymbolTable, expr: NotExpr): CWSType {
    const ty = evalExpr(scope, expr.expr)
    if (ty == CWSBoolType) {
        return CWSBoolType
    }

    throw new Error("Invalid unary operator")
}

function evalQueryExpr(scope: LexicalSymbolTable, expr: QueryExpr): CWSType {
    throw new Error("Method not implemented.");
}

function evalQueryNowExpr(scope: LexicalSymbolTable, expr: QueryNowExpr): any {
    throw new Error("Method not implemented.");
}

function evalFailExpr(scope: LexicalSymbolTable, expr: FailExpr): CWSType {
    return new CWSAnyType // so that it can be used in any context
}

function evalUnitExpr(scope: LexicalSymbolTable, expr: UnitExpr): CWSType {
    return evalType(scope.contract, expr.ty)
}

function evalIdentExpr(scope: LexicalSymbolTable, expr: IdentExpr): CWSType {
    let ty = scope.variable(expr.ident.value)
    if (!ty) {
        throw new Error("Invalid identifier")
    }
    return ty
}
//#endregion Expressions

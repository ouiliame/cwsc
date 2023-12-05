import assert, { equal } from "assert"
import { ContractDefn } from "../ast"
import { CWScriptParser } from "../parser"
import { Contract } from "./eval"
import { CWSFnType, CWSIntType, CWSStructType } from "../ir/types"

test('contract type evaluation', () => {
    const parser = new CWScriptParser(
`contract MyContract {
    state {
        item: MyStruct
    }

    error MyError(v: MyStruct)

    fn myFunction(v: MyStruct) {}

    #instantiate(v: MyStruct) {}

    exec #myExec(v: MyStruct) {}

    query #myQuery(v: MyStruct) {}

    struct MyStruct {
        field: Int
    }

    fn complexFunction(a: Int, b: Int) -> Int {
        a + b
    }
}`, null
    )
    const result = parser.parse()
    const defn = result.ast!.children[0]
    if (!(defn instanceof ContractDefn)) {
        throw new Error('Expected ContractDefn')
    }

    console.log(defn.body.map(x => x.toJSON()))

    const table = new Contract(defn)

    //console.log(table.variable('$state'))
    //console.log(table.error('MyError'))
    console.log(table.variable('myFunction'))
    //console.log(table.instantiate())
    //console.log(table.exec('#myExec'))
    //console.log(table.query('#myQuery'))
    //console.log(table.type('MyStruct'))

    equal((table.variable('$state')!.resolve() as CWSStructType).fields[0].ty.resolve().name, 'MyStruct')

    equal((table.variable('myFunction')!.resolve() as CWSFnType).paramTys[0].ty.resolve().name, 'MyStruct')

    equal((table.variable('complexFunction')!.resolve() as CWSFnType).returnTy.resolve().name, 'Int')

    // let table = new Contract(defn)
})
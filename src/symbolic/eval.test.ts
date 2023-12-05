import { ContractDefn } from "../ast"
import { CWScriptParser } from "../parser"
import { Contract } from "./eval"

test('contract type evaluation', () => {
    const parser = new CWScriptParser(
`contract MyContract {
    fn myFunction() {}

    #instantiate() {}

    exec #myExec() {}

    query #myQuery() {}

    struct MyStruct {
        field: MyStruct
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

    console.log(table.variable('myFunction'))
    console.log(table.instantiate())
    console.log(table.exec('#myExec'))
    console.log(table.query('#myQuery'))
    console.log(table.type('MyStruct'))

    // let table = new Contract(defn)
})
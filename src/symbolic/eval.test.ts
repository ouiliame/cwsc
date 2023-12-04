import { ContractDefn } from "../ast"
import { CWScriptParser } from "../parser"
import { Contract } from "./eval"

test('contract type evaluation', () => {
    const parser = new CWScriptParser(
`contract MyContract {
    state {
        myState: U32
    }

    fn myFunction() {}
    error MyError()

    #instantiate() {}

    exec #myExec() {}

    query #myQuery() {}
}`, null
    )
    const ast = parser.parse()
    const defn = ast.children[0]
    if (!(defn instanceof ContractDefn)) {
        throw new Error('Expected ContractDefn')
    }
    console.log(defn)
    // let table = new Contract(defn)
})
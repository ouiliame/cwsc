import { pascalToSnake, snakeToPascal } from 'src/util/strings';
import * as Ast from '../ast';
import {
  CgContractCrate,
  CgContractMod,
  CgErrorMod,
  CgExecEntrypoint,
  CgImplentationMod,
  CgInstantiateEntrypoint,
  CgMsgMod,
  CgQueryEntrypoint,
  CgStateField,
  CgStateFieldItem,
  CgStateMod,
  CgStruct,
  CgTypesMod,
} from './ir';

export interface ContractNodes {
  stateDefns: (Ast.StateItemDefn | Ast.StateMapDefn)[];
  instantiateDefn: Ast.InstantiateDefn | undefined;
  execDefns: Ast.ExecDefn[];
  queryDefns: Ast.QueryDefn[];
  structDefns: Ast.StructDefn[];
  tupleDefns: Ast.TupleDefn[];
  unitDefns: Ast.UnitDefn[];
  enumDefns: Ast.EnumDefn[];
  typeAliasDefns: Ast.TypeAliasDefn[];
  errorDefns: Ast.ErrorDefn[];
  eventDefns: Ast.EventDefn[];
  fnDefns: Ast.FnDefn[];
}

export function indexContractNodes(ast: Ast.ContractDefn): ContractNodes {
  let contract: ContractNodes = {
    stateDefns: [],
    instantiateDefn: undefined,
    execDefns: [],
    queryDefns: [],
    structDefns: [],
    tupleDefns: [],
    unitDefns: [],
    enumDefns: [],
    typeAliasDefns: [],
    errorDefns: [],
    eventDefns: [],
    fnDefns: [],
  };
  ast.descendants.forEach((x) => {
    if (x instanceof Ast.StateItemDefn || x instanceof Ast.StateMapDefn) {
      contract.stateDefns.push(x);
    } else if (x instanceof Ast.ErrorDefn) {
      contract.errorDefns.push(x);
    } else if (x instanceof Ast.InstantiateDefn) {
      contract.instantiateFn = x;
    } else if (x instanceof Ast.ExecDefn) {
      contract.execFns.push(x);
    } else if (x instanceof Ast.QueryDefn) {
      contract.queryFns.push(x);
    } else if (x instanceof Ast.StructDefn) {
      contract.structDefns.push(x);
    } else if (x instanceof Ast.TupleDefn) {
      contract.tupleDefns.push(x);
    } else if (x instanceof Ast.UnitDefn) {
      contract.unitDefns.push(x);
    } else if (x instanceof Ast.EnumDefn) {
      contract.enumDefns.push(x);
    } else if (x instanceof Ast.TypeAliasDefn) {
      contract.typeAliasDefns.push(x);
    } else if (x instanceof Ast.EventDefn) {
      contract.eventDefns.push(x);
    } else if (x instanceof Ast.FnDefn) {
      contract.fnDefns.push(x);
    }
  });
  return contract;
}
export function contractAstToCg(ast: Ast.ContractDefn): CgContractCrate {
  const name = ast.name.value;
  const {
    stateDefns,
    instantiateDefn,
    execDefns,
    queryDefns,
    structDefns,
    tupleDefns,
    unitDefns,
    enumDefns,
    typeAliasDefns,
    errorDefns,
    eventDefns,
    fnDefns,
  } = indexContractNodes(ast);

  // state mod
  const stateFields = stateDefns.map((x) => {
    if (x instanceof Ast.StateItemDefn) {
      return {
        $type: 'item' as const,
        name: x.name.value,
        ty: 'TODO',
      };
    } else {
      return {
        $type: 'map' as const,
        name: x.name.value,
        idxTy: 'TODO',
        ty: 'TODO',
      };
    }
  });
  const stateMod = new CgStateMod(stateFields);

  // error mod
  let errorVariants = errorDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: 'TODO',
        };
      }),
    };
  });
  const errorMod = new CgErrorMod(errorVariants);

  // msg mod
  if (!instantiateDefn) {
    throw new Error('TODO');
  }
  let instantiateMsg = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: 'TODO',
    })),
  };
  let execVariants: CgStruct[] = execDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.params.map((y) => {
        return {
          name: y.name.value,
          ty: 'TODO',
        };
      }),
    };
  });
  let queryVariants: CgStruct[] = queryDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.params.map((y) => {
        return {
          name: y.name.value,
          ty: 'TODO',
        };
      }),
    };
  });
  const msgMod = new CgMsgMod(
    instantiateMsg,
    { variants: execVariants },
    { variants: queryVariants }
  );

  // contract mod
  let instantiateEntrypoint: CgInstantiateEntrypoint = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: 'TODO',
    })),
  };
  let execEntrypoint: CgExecEntrypoint = {
    variants: execDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: 'TODO',
          };
        }),
      };
    }),
  };
  let queryEntrypoint: CgQueryEntrypoint = {
    variants: queryDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: 'TODO',
          };
        }),
        resType: 'TODO',
      };
    }),
  };
  let contractMod = new CgContractMod(
    instantiateEntrypoint,
    execEntrypoint,
    queryEntrypoint
  );

  // impl mod
  let implMod = new CgImplentationMod();

  // types mod
  let typesMod = new CgTypesMod();

  ast.descendantsOfType;
}

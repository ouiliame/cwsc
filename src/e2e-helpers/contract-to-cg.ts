import { pascalToSnake, snakeToPascal } from '../util/strings';
import * as Ast from '../ast';
import {
  CgContractCrate,
  CgContractMod,
  CgEnum,
  CgErrorMod,
  CgExecEntrypoint,
  CgExecImplFn,
  CgExecMsg,
  CgImplentationMod,
  CgInstantiateEntrypoint,
  CgInstantiateImplFn,
  CgMsgMod,
  CgQueryEntrypoint,
  CgQueryImplFn,
  CgQueryMsg,
  CgStateMod,
  CgStruct,
  CgTuple,
  CgTypeAlias,
  CgTypesMod,
  CgUnit,
} from './cg';

import { blockToCg } from './block-to-cg';

export const TYPE = (x?: any) => {
  if (x) {
    return `String /* ${x.$antlrParseRuleCtx!.text} */`;
  } else {
    return `String`;
  }
};

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
      contract.instantiateDefn = x;
    } else if (x instanceof Ast.ExecDefn) {
      contract.execDefns.push(x);
    } else if (x instanceof Ast.QueryDefn) {
      contract.queryDefns.push(x);
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
        ty: 'Item<String>', // TODO: fix type
      };
    } else {
      return {
        $type: 'map' as const,
        name: x.name.value,
        idxTy: TYPE(),
        ty: TYPE(),
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
          ty: TYPE(y.ty),
        };
      }),
    };
  });
  const errorMod = new CgErrorMod(errorVariants);

  // msg mod
  if (!instantiateDefn) {
    throw new Error(TYPE());
  }
  let instantiateMsg = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: TYPE(x.ty),
    })),
  };
  let execMsg: CgExecMsg = {
    variants: execDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: TYPE(y.ty),
          };
        }),
      };
    }),
  };
  let queryMsg: CgQueryMsg = {
    variants: queryDefns.map((x) => {
      return {
        fnName: x.name.value.substring(1),
        msgName: snakeToPascal(x.name.value.substring(1)),
        params: x.params.map((y) => {
          return {
            name: y.name.value,
            ty: TYPE(y.ty),
          };
        }),
        resType: TYPE(x.returnTy),
      };
    }),
  };
  const msgMod = new CgMsgMod(instantiateMsg, execMsg, queryMsg);

  // contract mod
  let instantiateEntrypoint: CgInstantiateEntrypoint = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: TYPE(x.ty),
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
            ty: TYPE(y.ty),
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
            ty: TYPE(y.ty),
          };
        }),
        resType: TYPE(x.returnTy),
      };
    }),
  };
  const contractMod = new CgContractMod(
    instantiateEntrypoint,
    execEntrypoint,
    queryEntrypoint
  );

  // impl mod
  const instantiateImplFn: CgInstantiateImplFn = {
    params: instantiateDefn.params.map((x) => ({
      name: x.name.value,
      ty: TYPE(x.ty),
    })),
    body: blockToCg(instantiateDefn.body),
  };
  const execImplFns: CgExecImplFn[] = execDefns.map((x) => {
    return {
      fnName: x.name.value.substring(1),
      msgName: snakeToPascal(x.name.value.substring(1)),
      params: x.params.map((y) => {
        return {
          name: y.name.value,
          ty: TYPE(y.ty),
        };
      }),
      body: blockToCg(x.body),
    };
  });
  const queryImplFns: CgQueryImplFn[] = queryDefns.map((x) => {
    return {
      fnName: x.name.value.substring(1),
      msgName: snakeToPascal(x.name.value.substring(1)),
      params: x.params.map((y) => {
        return {
          name: y.name.value,
          ty: TYPE(y.ty),
        };
      }),
      resType: TYPE(x.returnTy),
      body: blockToCg(x.body),
    };
  });
  const implMod = new CgImplentationMod(
    instantiateImplFn,
    execImplFns,
    queryImplFns
  );

  // types mod
  const structs: CgStruct[] = structDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: TYPE(y.ty),
        };
      }),
    };
  });
  const tuples: CgTuple[] = tupleDefns.map((x) => {
    return {
      name: x.name.value,
      elements: x.elements.map((y) => TYPE(y)),
    };
  });
  const units: CgUnit[] = unitDefns.map((x) => {
    return {
      name: x.name.value,
    };
  });
  const enums: CgEnum[] = enumDefns.map((x) => {
    const variants = x.variants.map((y) => {
      if (y instanceof Ast.EnumVariantStructDefn) {
        return {
          $type: 'struct' as const,
          name: y.name.value.substring(1),
          fields: y.fields.map((z) => {
            return {
              name: z.name.value,
              ty: TYPE(z.ty),
            };
          }),
        };
      } else if (y instanceof Ast.EnumVariantTupleDefn) {
        return {
          $type: 'tuple' as const,
          name: y.name.value.substring(1),
          elements: y.elements.map((z) => TYPE(z)),
        };
      } else {
        return {
          $type: 'unit' as const,
          name: y.name.value.substring(1),
        };
      }
    });
    return {
      name: x.name.value,
      variants,
    };
  });
  const aliases: CgTypeAlias[] = typeAliasDefns.map((x) => {
    return {
      name: x.name.value,
      ty: TYPE(x.ty),
    };
  });
  const errors: CgStruct[] = errorDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: TYPE(y.ty),
        };
      }),
    };
  });
  const events: CgStruct[] = eventDefns.map((x) => {
    return {
      name: x.name.value,
      fields: x.fields.map((y) => {
        return {
          name: y.name.value,
          ty: TYPE(y.ty),
        };
      }),
    };
  });
  const typesMod = new CgTypesMod(
    structs,
    tuples,
    units,
    enums,
    aliases,
    errors,
    events
  );
  return new CgContractCrate(
    name,
    stateMod,
    errorMod,
    msgMod,
    contractMod,
    implMod,
    typesMod,
    null
  );
}

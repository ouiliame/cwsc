import { ExpressionStructure } from './ExpressionStructure';

export interface StatementStructure {
  expression?: ExpressionStructure | undefined;
  localBinding?: LocalBindingStructure | undefined;
}

export function ExpressionStatementStructure(
  expression: ExpressionStructure
): StatementStructure {
  return { expression };
}
export function LocalBindingStatementStructure(
  name: string,
  mutable: boolean,
  type: string,
  expr: ExpressionStructue
): StatementStructure {
  return {
    localBinding: {
      name,
      mutable,
      type,
      expr,
    },
  };
}

export interface LocalBindingStructure {
  name: string;
  mutable: boolean;
  type: string;
  expr: ExpressionStructure;
}

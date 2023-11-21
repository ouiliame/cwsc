import { StatementStructure } from './StatementStructure';

export interface ModuleStructure {
  name: string;
  statements: StatementStructure[];
}

export function ModuleStructure(
  name: string,
  statements: StatementStructure[]
): ModuleStructure {
  return {
    name,
    statements,
  };
}

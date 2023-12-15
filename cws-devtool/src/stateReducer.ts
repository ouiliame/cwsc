import { CWScriptParser, type Ast } from 'cwsc';

export type AppState = {
  sourceText: string;
  astJson?: Ast.AstJson;
};

export type AppAction = SetSourceTextAction | SetAstJsonAction | ParseAction;

export interface SetSourceTextAction {
  type: 'setSourceText';
  sourceText: string;
}

export interface SetAstJsonAction {
  type: 'setAstJson';
  astJson: Ast.AstJson;
}

export interface ParseAction {
  type: 'parse';
}

export namespace Actions {
  export function setSourceText(sourceText: string): AppAction {
    return { type: 'setSourceText', sourceText };
  }

  export function setAstJson(astJson: Ast.AstJson): AppAction {
    return { type: 'setAstJson', astJson };
  }
}

export function initialState(): AppState {
  return {
    sourceText: '',
  };
}

export default function stateReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case 'setSourceText':
      console.log('setSourceText', action.sourceText);
      return { ...state, sourceText: action.sourceText };
    case 'setAstJson':
      console.log('setAst', action.astJson);
      return { ...state, astJson: action.astJson };
    case 'parse':
      console.log('parse', action);
      // get text
      const parser = new CWScriptParser(state.sourceText, 'playground.cws');
      const { sourceFile, diagnostics } = parser.parse();
      return { ...state, astJson: sourceFile?.ast.json() };
    default:
      return state;
  }
}

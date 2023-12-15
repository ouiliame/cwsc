import CodeMirror from 'codemirror';
import { CWScriptParser, type Ast } from 'cwsc';

export type AppState = {
  sourceText: string;
  astJson?: Ast.AstJson;
  selection?: {
    start: number;
    end: number;
  };
};

export type AppAction =
  | SetSourceTextAction
  | SetAstJsonAction
  | ParseAction
  | SetSelectionAction;

export interface SetSourceTextAction {
  type: 'setSourceText';
  sourceText: string;
}

export interface SetAstJsonAction {
  type: 'setAstJson';
  astJson: Ast.AstJson;
}

export interface SetSelectionAction {
  type: 'setSelection';
  selection: {
    start: number;
    end: number;
  };
}

export interface ParseAction {
  type: 'parse';
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
    case 'setSelection':
      console.log('setSelection', action.selection);
      return { ...state, selection: action.selection };
    case 'parse':
      console.log('parse', action);
      // get text
      const parser = new CWScriptParser(state.sourceText, 'playground.cws');
      const res = parser.parse();
      return { ...state, astJson: res.astToJson() };
    default:
      return state;
  }
}

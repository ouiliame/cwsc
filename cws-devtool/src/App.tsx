import React, { useContext, useReducer } from 'react';

import { CWScriptParser, Ast } from 'cwsc';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { TreeView } from '@mui/x-tree-view/TreeView';
import './App.css';
import { AppContext } from './AppContext';
import CWScriptEditor from './components/CWScriptEditor';
import AstViz from './components/AstViz';
import stateReducer, { initialState } from './stateReducer';

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState());

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div id="primary">
          <div id="editor">
            <CWScriptEditor />
          </div>
          <div id="inspector">
            <button onClick={() => dispatch({ type: 'parse' })}>
              Parse AST
            </button>
            <AstViz />
          </div>
        </div>
        <div id="diagnostics">
          <table>
            <thead>
              <tr>
                <th>Severity</th>
                <th>Message</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>{/* TODO: fill */}</tbody>
          </table>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

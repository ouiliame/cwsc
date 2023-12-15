import React, { useContext, useReducer } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import CWScriptEditor from './components/CWScriptEditor';
import stateReducer, { initialState } from './stateReducer';
import Inspector from './components/Inspector';

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState());

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div id="primary">
          <div id="editor">
            <CWScriptEditor />
          </div>
          <Inspector />
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

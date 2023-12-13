import React, { useState, useEffect } from 'react';
import './App.css';

import { CWScriptParser } from 'cwsc';
import * as Ast from 'cwsc/dist/ast';

import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

function nodeToTreeItem(
  id: string,
  fieldName: string | undefined,
  node: Ast.AstJson | string | number | boolean | null
): any {
  const editor = document.getElementById('editor') as HTMLTextAreaElement;
  const children: any[] = [];
  let label = fieldName ? fieldName + ': ' : '';
  if (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    node === null
  ) {
    label += node?.toString() ?? 'null';
    return <TreeItem nodeId={id} label={label} />;
  }

  if ('$list' in node) {
    node.$list.forEach((x, i) => {
      children.push(nodeToTreeItem(`${id}__list[${i}]`, i.toFixed(), x));
    });
    label += 'List';
    return (
      <TreeItem
        nodeId={id}
        label={label}
        onMouseEnter={(e) => {
          if (node.$indices) {
            editor.focus();
            editor.setSelectionRange(node.$indices.start, node.$indices.end);
          }
        }}
      >
        {children}
      </TreeItem>
    );
  } else {
    label += node.$kind;
    for (const [key, value] of Object.entries(node.$fields)) {
      children.push(nodeToTreeItem(`${id}__${key}`, key, value));
    }

    return (
      <TreeItem
        nodeId={id}
        label={label}
        onMouseEnter={(e) => {
          if (node.$indices) {
            editor.focus();
            editor.setSelectionRange(node.$indices.start, node.$indices.end);
          }
        }}
      >
        {children}
      </TreeItem>
    );
  }
}

function AstViz(props: { ast: Ast.AstJson | undefined }) {
  const { ast } = props;
  if (ast === undefined) {
    return <div></div>;
  }

  const astNodes = nodeToTreeItem(`root`, undefined, ast);

  return (
    <Box>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {astNodes}
      </TreeView>
    </Box>
  );
}

function App() {
  const [sourceText, setSourceText] = useState('');
  const [astJson, setAstJson] = useState<Ast.AstJson | undefined>(undefined);
  const [diagnostics, setDiagnostics] = useState<any[]>([]);

  return (
    <div className="App">
      <div id="primary">
        <textarea
          id="editor"
          value={sourceText}
          onChange={(e) => {
            setSourceText(e.target.value);
          }}
        ></textarea>
        <div id="inspector">
          <button
            onClick={(e) => {
              const parser = new CWScriptParser(sourceText);
              const { sourceFile, diagnostics } = parser.parse();
              const ast = sourceFile?.ast.json();
              setDiagnostics(diagnostics);
              setAstJson(ast);
            }}
          >
            Hi
          </button>
          <AstViz ast={astJson} />
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
          <tbody>
            {diagnostics.map((x, i) => (
              <tr key={i}>
                <td>{x.severity}</td>
                <td>{x.message}</td>
                <td>{x.start}</td>
                <td>{x.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import { CWScriptParser } from 'cwsc';
import * as Ast from 'cwsc/dist/ast';

import {
  DiffEditor,
  useMonaco,
  loader,
  Editor,
  Monaco,
} from '@monaco-editor/react';

import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { IRange, editor } from 'monaco-editor';

function nodeToTreeItem(
  id: string,
  fieldName: string | undefined,
  node: Ast.AstJson | string | number | boolean | null,
  editorRef: React.RefObject<editor.IStandaloneCodeEditor | null>
): any {
  const editor = editorRef.current;
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
      children.push(
        nodeToTreeItem(`${id}__list[${i}]`, i.toFixed(), x, editorRef)
      );
    });
    label += 'List';
    return (
      <TreeItem
        nodeId={id}
        label={label}
        onMouseEnter={(e) => {
          if (node.$range) {
            let start = node.$range.start;
            let end = node.$range.end;
            let range = {
              startLineNumber: start.line + 1,
              startColumn: start.character + 1,
              endLineNumber: end.line + 1,
              endColumn: end.character + 1,
            };
            editor?.focus();
            editor?.setSelection(range);
            editor?.revealRangeInCenter(range);
          }
        }}
      >
        {children}
      </TreeItem>
    );
  } else {
    label += node.$kind;
    for (const [key, value] of Object.entries(node.$fields)) {
      children.push(nodeToTreeItem(`${id}__${key}`, key, value, editorRef));
    }

    return (
      <TreeItem
        nodeId={id}
        label={label}
        onMouseEnter={(e) => {
          if (node.$range) {
            let start = node.$range.start;
            let end = node.$range.end;
            let range = {
              startLineNumber: start.line + 1,
              startColumn: start.character + 1,
              endLineNumber: end.line + 1,
              endColumn: end.character + 1,
            };
            editor?.focus();
            editor?.setSelection(range);
            editor?.revealRangeInCenter(range);
          }
        }}
      >
        {children}
      </TreeItem>
    );
  }
}

function AstViz(props: { ast: Ast.AstJson | undefined; editorRef: any }) {
  const { ast, editorRef } = props;
  if (ast === undefined) {
    return <div></div>;
  }

  const astNodes = nodeToTreeItem(`root`, undefined, ast, editorRef);

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
  const [sourceFile, setSourceFile] = useState<Ast.SourceFile | undefined>(
    undefined
  );
  const [astJson, setAstJson] = useState<Ast.AstJson | undefined>(undefined);
  const [diagnostics, setDiagnostics] = useState<any[]>([]);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
    monaco.languages.register({
      id: 'cwscript',
    });
    monaco.languages.setLanguageConfiguration('cwscript', {
      comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
      },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: '`', close: '`', notIn: ['string', 'comment'] },
        { open: '/**', close: ' */', notIn: ['string'] },
      ],
      autoCloseBefore: ';:.,=}])>` \n\t',
      surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: "'", close: "'" },
        { open: '"', close: '"' },
        { open: '`', close: '`' },
      ],
      folding: {
        markers: {
          start: new RegExp('^\\s*//\\s*#?region\\b'),
          end: new RegExp('^\\s*//\\s*#?endregion\\b'),
        },
      },
      wordPattern: /(-?\d*\.\d\w*)|([^`~!@#%^&*()\-+=\[\]{}\\|;:'",.<>/?\s]+)/g,
      // '(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\\'\\"\\,\\.\\<\\>\\/\\?\\s]+)',
      indentationRules: {
        increaseIndentPattern: new RegExp(
          '^((?!.*?\\/\\/).)*(\\{[^}"\'`]*|\\([^)"\'`]*|\\[[^\\]"\'`]*)$'
        ),
        decreaseIndentPattern: new RegExp(
          '^((?!.*?\\/\\*).*\\*/)?\\s*[\\)\\}\\]].*$'
        ),
      },
    });
  }

  return (
    <div className="App">
      <div id="primary">
        <div id="editor">
          <Editor
            height="100vh"
            defaultLanguage="cwscript"
            defaultValue="// some comment"
            onChange={(value, event) => {
              setSourceText(value ?? '');
            }}
            onMount={handleEditorDidMount}
          />
        </div>
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
            Parse AST
          </button>
          <AstViz ast={astJson} editorRef={editorRef} />
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

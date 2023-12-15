import React, { useState, useCallback, useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { CWScriptLanguage } from 'codemirror-lang-cwscript';
import { language } from '@codemirror/language';
import { AppContext } from '../AppContext';

export type CWScriptEditorProps = React.PropsWithRef<{}>;
export default function CWScriptEditor(props: CWScriptEditorProps) {
  const { state, dispatch } = useContext(AppContext);
  const { sourceText } = state;
  const onChange = useCallback((val: string, viewUpdate: any) => {
    dispatch({ type: 'setSourceText', sourceText: val });
  }, []);
  return (
    <CodeMirror
      extensions={[language.of(CWScriptLanguage)]}
      value={sourceText}
      height="100vh"
      onChange={onChange}
      theme={'dark'}
      placeholder={'// Write your CWScript source code here...'}
      lang="cwscript"
      basicSetup={{
        foldGutter: true,
        closeBrackets: true,
        allowMultipleSelections: false,
        syntaxHighlighting: true,
      }}
    />
  );
}

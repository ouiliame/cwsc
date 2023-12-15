import React, { useEffect, useState, useCallback, useContext } from 'react';
import CodeMirror, {
  useCodeMirror,
  EditorSelection,
  EditorState,
  ViewUpdate,
} from '@uiw/react-codemirror';
import { vim } from '@replit/codemirror-vim';
import { CWScriptLanguage } from 'codemirror-lang-cwscript';
import { language } from '@codemirror/language';
import { AppContext } from '../AppContext';

const extensions = [vim(), language.of(CWScriptLanguage)];

export default function CWScriptEditor() {
  const { state, dispatch } = useContext(AppContext);
  const { sourceText, selection } = state;
  const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
    dispatch({ type: 'setSourceText', sourceText: val });
  }, []);
  const editor = React.useRef<HTMLDivElement>(null);

  const cm = useCodeMirror({
    container: editor.current,
    extensions: extensions,
    height: '100vh',
    value: sourceText,
    onChange: onChange,
    theme: 'dark',
    placeholder: '// Write your CWScript source code here...',
    lang: 'cwscript',
    basicSetup: {
      foldGutter: true,
      closeBrackets: true,
      allowMultipleSelections: false,
      syntaxHighlighting: true,
    },
  });

  useEffect(() => {
    const { view } = cm;
    if (editor.current && selection && view) {
      view.dispatch(
        view.state.update({
          selection: EditorSelection.single(selection.start, selection.end),
          scrollIntoView: true,
          filter: true,
        })
      );
    }
  }, [editor.current, selection]);

  useEffect(() => {
    if (editor.current) {
      cm.setContainer(editor.current);
    }
  }, [editor.current]);

  return <div ref={editor} />;
}

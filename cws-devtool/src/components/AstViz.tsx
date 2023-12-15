import React, { useState, useCallback, useContext } from 'react';
import { Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { TreeView } from '@mui/x-tree-view/TreeView';
import type { Ast } from 'cwsc';
import { AppContext } from '../AppContext';
import {
  EditorSelection,
  EditorState,
  useCodeMirror,
} from '@uiw/react-codemirror';

export type AstVizItemProps = React.PropsWithChildren<{
  nodeId: string;
  label: string | undefined;
  indices?: {
    start: number;
    end: number;
  };
}>;
function AstVizItem(props: AstVizItemProps) {
  const { state, dispatch } = useContext(AppContext);
  const { nodeId, label, children, indices } = props;
  return (
    <TreeItem
      nodeId={nodeId}
      label={label}
      onMouseEnter={() => {
        if (indices) {
          dispatch({
            type: 'setSelection',
            selection: indices,
          });
        }
      }}
    >
      {children}
    </TreeItem>
  );
}

function nodeToTreeItem(
  id: string,
  fieldName: string | undefined,
  node: Ast.AstJson | string | number | boolean | null
): any {
  const children: any[] = [];
  let label = fieldName ? fieldName + ': ' : '';
  if (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    node === null
  ) {
    label += node?.toString() ?? 'null';
    return <AstVizItem nodeId={id + 1} label={label} />;
  } else if (node.$kind === 'List') {
    let $children = node.$fields['$children'] as any as Ast.AstJson[];
    $children.forEach((x, i) => {
      children.push(nodeToTreeItem(`${id}__list[${i}]`, i.toFixed(), x));
    });
    label += 'List';
    return (
      <AstVizItem
        nodeId={id}
        label={label}
        children={children}
        indices={node.$indices}
      />
    );
  } else {
    label += node.$kind;
    for (const [key, value] of Object.entries(node.$fields)) {
      children.push(nodeToTreeItem(`${id}__${key}`, key, value));
    }

    return (
      <AstVizItem
        nodeId={id}
        label={label}
        children={children}
        indices={node.$indices}
      />
    );
  }
}

export default function AstViz() {
  const { state, dispatch } = useContext(AppContext);
  const { astJson } = state;
  const currentNodeId = useState(0);

  if (astJson === undefined) {
    return <div></div>;
  }

  const astNodes = nodeToTreeItem(`root`, undefined, astJson);

  return (
    <Box>
      <TreeView
        aria-label="AST Visualizer"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {astNodes}
      </TreeView>
    </Box>
  );
}

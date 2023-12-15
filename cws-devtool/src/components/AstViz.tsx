import React, { useState, useCallback, useContext } from 'react';
import { Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { TreeView } from '@mui/x-tree-view/TreeView';
import type { Ast } from 'cwsc';
import { AppContext } from '../AppContext';

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
        onMouseEnter={(e: any) => {
          if (node.$range) {
            let start = node.$range.start;
            let end = node.$range.end;
            let range = {
              startLineNumber: start.line + 1,
              startColumn: start.character + 1,
              endLineNumber: end.line + 1,
              endColumn: end.character + 1,
            };
            // TODO: Change editor stuff
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
          if (node.$range) {
            let start = node.$range.start;
            let end = node.$range.end;
            let range = {
              startLineNumber: start.line + 1,
              startColumn: start.character + 1,
              endLineNumber: end.line + 1,
              endColumn: end.character + 1,
            };
            // TODO: Change editor stuff
          }
        }}
      >
        {children}
      </TreeItem>
    );
  }
}

export default function AstViz() {
  const { state, dispatch } = useContext(AppContext);
  const { astJson } = state;

  if (astJson === undefined) {
    return <div></div>;
  }

  const astNodes = nodeToTreeItem(`root`, undefined, astJson);

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

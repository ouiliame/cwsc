import * as fs from 'fs';
import { CWScriptParser } from './parser';

const ast = CWScriptParser.parseFile(
  './examples/kitchen-sink/src/KitchenSink.cws'
);

console.log(ast);

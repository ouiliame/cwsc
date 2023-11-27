import { CWScriptParser } from './parser';
import { ASTEvaluator } from './ast-eval';
import { CWScriptProject } from './projects';

const ast = CWScriptParser.parseFile(
  './examples/kitchen-sink/src/KitchenSink.cws'
);

const evaluator = new ASTEvaluator(
  CWScriptProject.fromProjectRoot('./examples/kitchen-sink'),
  './examples/kitchen-sink/src/KitchenSink.cws'
);

evaluator.visitSourceFile(ast);

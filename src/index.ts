import { CWScriptParser } from './parser';
import { ASTEvaluator } from './ast-eval';
import { CWScriptProject } from './projects';

async function main() {
  const ast = await CWScriptParser.parseFile(
    './examples/kitchen-sink/src/KitchenSink.cws'
  );

  const evaluator = new ASTEvaluator(
    await CWScriptProject.fromProjectRoot('./examples/kitchen-sink'),
    './examples/kitchen-sink/src/KitchenSink.cws'
  );

  evaluator.visitSourceFile(ast);
}
main();

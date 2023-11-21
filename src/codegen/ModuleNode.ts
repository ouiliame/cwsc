import Handlebars from 'handlebars';
import { ModuleStructure } from './ModuleStructure';
import { StatementNode } from './StatementNode';
import { RenderHash } from './Template';

export class ModuleNode implements ModuleStructure {
  constructor(
    public name: string,
    public statements: StatementNode[]
  ) {}

  public static readonly Template = Handlebars.compile(`pub mod {{{name}}} {
    {{#statements}}{{> statement}}{{/statements}}
}`);

  public renderHash(): RenderHash<ModuleNode> {
    return {
      name: this.name,
      statements: this.statements.map((statement) => statement.renderHash()),
    };
  }

  public render() {
    return ModuleNode.Template(this.renderHash());
  }
}

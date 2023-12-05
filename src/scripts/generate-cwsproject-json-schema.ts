import * as fs from 'fs';
import { CWScriptProjectConfigSchema } from '../projects';
import { zodToJsonSchema } from 'zod-to-json-schema';

fs.writeFileSync('./cwsproject.schema.json', JSON.stringify(zodToJsonSchema(CWScriptProjectConfigSchema), null, 2));
import * as path from 'path';
import * as zod from 'zod';
import { findFiles, readFile, writeFile } from './util/filesystem';

/*
 Considerations: we might be using this from a browser, -- we need to separate the
 project representation from the file system. In the browser, we should create a
 virtual file system or use the browser's file system API.

 That should be a later concern -- for now, just use the file system.
*/

export const DependencyDetailSchema = zod.union([
  zod.string(),
  zod.object({
    path: zod.string(),
    version: zod.string().optional(),
  }),
  zod.object({
    git: zod.string(),
    version: zod.string().optional(),
  }),
]);

export type DependencyDetail = zod.infer<typeof DependencyDetailSchema>;

export const ProjectDependenciesSchema = zod.record(DependencyDetailSchema);

export type ProjectDependencies = zod.infer<typeof ProjectDependenciesSchema>;

export const CwscConfigSchema = zod.object({
  languageVersion: zod
    .string()
    .optional()
    .describe('CWScript language version (semver)'),
  debug: zod.boolean().optional().describe('Enable debug mode'),
  showDiagnostics: zod
    .object({
      warnings: zod.boolean().optional().describe('Show warnings'),
      errors: zod.boolean().optional().describe('Show errors'),
      info: zod.boolean().optional().describe('Show info messages'),
      hint: zod.boolean().optional().describe('Show hints'),
    })
    .optional()
    .describe('Flags for showing diagnostic messages during compilation'),
  strict: zod.boolean().optional().describe('Enable strict mode'),
});

export type CwscConfig = zod.infer<typeof CwscConfigSchema>;

export const CWScriptProjectConfigSchema = zod
  .object({
    name: zod.string().describe('Project name'),
    version: zod.string().describe('Project version (semver)'),
    sourceDir: zod
      .string()
      .default('src')
      .describe('Path to directory containing CWScript source files'),
    buildDir: zod
      .string()
      .default('build')
      .describe('Path to directory for build output'),
    packagesDir: zod
      .string()
      .default('packages')
      .describe('Path to directory for package dependencies'),
    package: zod
      .boolean()
      .default(false)
      .describe('Indicates whether a project should be treated as a package'),
    description: zod.string().optional().describe('Project description'),
    authors: zod.array(zod.string()).optional().describe('Project authors'),
    license: zod.string().optional().describe('Project license'),
    website: zod.string().optional().describe('URL to project website'),
    repository: zod.string().optional().describe('URL to project repository'),
    dependencies: ProjectDependenciesSchema.optional().describe(
      'External CWScript packages required by the project'
    ),
    readme: zod.string().optional().describe("Path or URL to project's README"),
    cwsc: CwscConfigSchema.optional().describe('CWScript Compiler settings'),
  })
  .describe('CWScript Project Configuration');

export type CWScriptProjectConfig = zod.infer<
  typeof CWScriptProjectConfigSchema
>;

export class CWScriptProject {
  public config: CWScriptProjectConfig;

  constructor(public projectRoot: string, config: CWScriptProjectConfig) {
    this.config = CWScriptProjectConfigSchema.parse(config);
  }

  public static create(projectRoot: string, config: CWScriptProjectConfig) {
    return new CWScriptProject(projectRoot, config);
  }

  public async update(newConfig: Partial<CWScriptProjectConfig> = {}) {
    let config = {
      ...this.config,
      ...newConfig,
    };
    this.config = CWScriptProjectConfigSchema.parse(config);
    // write the new config to the project config file
    await writeFile(
      path.join(this.projectRoot, 'cwsproject.json'),
      JSON.stringify(config, null, 2)
    );
  }

  public get sourceDir(): string {
    // get absolute path from project root
    return path.resolve(this.projectRoot, this.config.sourceDir);
  }

  public get buildDir(): string {
    return path.resolve(this.projectRoot, this.config.buildDir);
  }

  public get packagesDir(): string {
    return path.resolve(this.projectRoot, this.config.packagesDir);
  }

  public static async fromConfigFile(
    configPath: string
  ): Promise<CWScriptProject> {
    let absPath = path.resolve(configPath);
    let configJson = await readFile(absPath);
    return new CWScriptProject(path.dirname(absPath), JSON.parse(configJson));
  }

  public static async fromProjectRoot(
    projectRoot: string
  ): Promise<CWScriptProject> {
    return CWScriptProject.fromConfigFile(
      path.join(projectRoot, 'cwsproject.json')
    );
  }

  public async getSourceFiles(): Promise<string[]> {
    return findFiles(this.sourceDir, /\.cws$/);
  }

  public async getPackages(): Promise<CWScriptProject[]> {
    let packagesDirPath = path.join(this.projectRoot, this.packagesDir);
    let packageCfgs = await findFiles(packagesDirPath, /\/?cwsproject\.json$/);
    let packages = packageCfgs.map(async (cfgPath) => {
      // read the package's cwsproject.json
      return await CWScriptProject.fromConfigFile(cfgPath);
    });
    return Promise.all(packages);
  }

  public build() {}
}
import { zodToJsonSchema } from 'zod-to-json-schema';
console.log(
  JSON.stringify(zodToJsonSchema(CWScriptProjectConfigSchema), null, 2)
);

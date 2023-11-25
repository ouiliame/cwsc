import * as fs from 'fs';
import * as path from 'path';
import { globSync } from 'glob';
import * as zod from 'zod';

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
  languageVersion: zod.string().optional(),
  debug: zod.boolean().optional(),
  showDiagnostics: zod
    .object({
      warnings: zod.boolean().optional(),
      errors: zod.boolean().optional(),
      info: zod.boolean().optional(),
    })
    .optional(),
  strict: zod.boolean().optional(),
});

export type CwscConfig = zod.infer<typeof CwscConfigSchema>;

export const CWScriptProjectConfigSchema = zod.object({
  name: zod.string(),
  version: zod.string(),
  sourceDir: zod.string().default('src'),
  buildDir: zod.string().default('build'),
  packagesDir: zod.string().default('packages'),
  package: zod.boolean().default(false),
  description: zod.string().optional(),
  authors: zod.array(zod.string()).optional(),
  license: zod.string().optional(),
  website: zod.string().optional(),
  repository: zod.string().optional(),
  dependencies: ProjectDependenciesSchema.optional(),
  readme: zod.string().optional(),
  cwsc: CwscConfigSchema.optional(),
});

export type CWScriptProjectConfig = zod.infer<
  typeof CWScriptProjectConfigSchema
>;

export class CWScriptProject {
  public config: CWScriptProjectConfig;

  constructor(
    public projectRoot: string,
    config: CWScriptProjectConfig
  ) {
    this.config = CWScriptProjectConfigSchema.parse(config);
  }

  public static create(projectRoot: string, config: CWScriptProjectConfig) {
    return new CWScriptProject(projectRoot, config);
  }

  public update(newConfig: Partial<CWScriptProjectConfig> = {}) {
    let config = {
      ...this.config,
      ...newConfig,
    };
    this.config = CWScriptProjectConfigSchema.parse(config);
    // write the new config to the project config file
    fs.writeFileSync(
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

  public static fromConfigFile(configPath: string): CWScriptProject {
    let absPath = path.resolve(configPath);
    let configJson = fs.readFileSync(absPath, 'utf8');
    return new CWScriptProject(path.dirname(absPath), JSON.parse(configJson));
  }

  public static fromProjectRoot(projectRoot: string): CWScriptProject {
    return CWScriptProject.fromConfigFile(
      path.join(projectRoot, 'cwsproject.json')
    );
  }

  public get sourceFiles(): string[] {
    return globSync('**/*.cws', { cwd: this.sourceDir, absolute: true });
  }

  public get packages(): CWScriptProject[] {
    let packagesDirPath = path.join(this.projectRoot, this.packagesDir);
    let packageCfgs = globSync('**/cwsproject.json', {
      cwd: packagesDirPath,
      absolute: true,
    });
    return packageCfgs.map((cfgPath) => {
      // read the package's cwsproject.json
      return CWScriptProject.fromConfigFile(cfgPath);
    });
  }

  public build() {}
}

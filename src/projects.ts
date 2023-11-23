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
  sourceDir: zod.string().optional(),
  buildDir: zod.string().optional(),
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

export class CWScriptProject implements CWScriptProjectConfig {
  public name: string;
  public version: string;
  public sourceDir: string;
  public buildDir: string;
  public description?: string;
  public authors?: string[];
  public license?: string;
  public website?: string;
  public repository?: string;
  public dependencies?: ProjectDependencies;
  public readme?: string;
  public cwsc?: CwscConfig;

  constructor(config: CWScriptProjectConfig) {
    const parsedConfig = CWScriptProjectConfigSchema.parse(config);
    this.name = parsedConfig.name;
    this.version = parsedConfig.version;
    this.sourceDir = parsedConfig.sourceDir || 'src';
    this.buildDir = parsedConfig.buildDir || 'build';
    this.description = parsedConfig.description;
    this.authors = parsedConfig.authors;
    this.license = parsedConfig.license;
    this.website = parsedConfig.website;
    this.repository = parsedConfig.repository;
    this.dependencies = parsedConfig.dependencies;
    this.readme = parsedConfig.readme;
    this.cwsc = parsedConfig.cwsc;
  }
}

export class FsProjectManager {
  public projectRoot: string;
  public configLastLoaded?: number;
  private _project?: CWScriptProject; // cached

  constructor(projectRoot: string) {
    this.projectRoot = path.resolve(projectRoot);
    // determine if this is a cwsc project
    // if not, throw an error
    if (!fs.existsSync(this.configPath)) {
      throw new Error(
        `${projectRoot} is not a CWScript project: missing cwsproject.json`
      );
    }
  }

  /** Get the absolute path to the project's cwsproject.json */
  public get configPath(): string {
    return path.join(this.projectRoot, 'cwsproject.json');
  }

  /** Get the time the parsedconfiguration file was last changed. */
  public get configLastModified(): number {
    return fs.statSync(this.configPath).mtimeMs;
  }

  public get project(): CWScriptProject {
    // check if the project parsedconfig has been modified
    // if so, reload the project
    if (
      !this._project ||
      !this.configLastLoaded ||
      this.configLastLoaded < this.configLastModified
    ) {
      let configJson = fs.readFileSync(this.configPath, 'utf8');
      this.configLastLoaded = this.configLastModified;
      this._project = new CWScriptProject(JSON.parse(configJson));
      return this._project;
    } else {
      return this._project;
    }
  }

  public get sourceFiles(): string[] {
    let sourceDirPath = path.join(this.projectRoot, this.project.sourceDir);
    return globSync('**/*.cws', { cwd: sourceDirPath, absolute: true });
  }
}

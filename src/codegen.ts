import * as IR from './ir';
import { CWScriptProject } from './projects';
import * as Rust from './rust-syntax';
import { pascalToSnake, snakeToPascal } from './util/strings';

import * as toml from '@iarna/toml';
import * as fs from 'fs';
import * as path from 'path';

export interface Package {
  name: string;
  version: string;
  exclude?: string[];
  authors?: string[];
  edition?: string;
  license?: string;
  description?: string;
  readme?: string;
  homepage?: string;
  repository?: string;
  documentation?: string;
  keywords?: string[];
  categories?: string[];
  workspace?: string;
  publish?: boolean;
  metadata?: any;
}

export interface Features {
  [name: string]: string[];
}

export interface Dependencies {
  [name: string]: DependencyDetail;
}

export type DependencyDetail =
  | {
      version: string;
      features?: string[];
      'default-features'?: boolean;
      path?: string;
      git?: string;
      branch?: string;
      tag?: string;
      rev?: string;
    }
  | string;

export interface Profile {
  release?: ProfileDetail;
  dev?: ProfileDetail;
  test?: ProfileDetail;
  bench?: ProfileDetail;
}

export interface ProfileDetail {
  opt_level?: string;
  lto?: string | boolean;
  'codegen-units'?: number;
  debug?: boolean;
  'debug-assertions'?: boolean;
  'overflow-checks'?: boolean;
  'opt-level'?: number;
  rpath?: boolean;
  panic?: string;
  incremental?: boolean;
  'extra-flags'?: string[];
}

export interface CargoToml {
  package: Package;
  lib?: {
    'crate-type': string[];
  };
  features?: Features;
  dependencies?: Dependencies;
  'dev-dependencies'?: Dependencies;
  profile?: Profile;
}

export class Crate {
  constructor(
    public config: CargoToml,
    public files: { [path: string]: string } = {}
  ) {}

  public getFile(path: string) {
    return this.files[path];
  }

  public setFile(path: string, contents: string) {
    this.files[path] = contents;
  }

  public deleteFile(path: string) {
    delete this.files[path];
  }

  public cargoToml(): string {
    return toml.stringify(this.config as any);
  }
}

const DEFAULT_CARGO_TOML: CargoToml = {
  dependencies: {
    'cosmwasm-schema': '1.5.0',
    'cw-storage-plus': '1.1.0',
    cw2: '1.1.1',
    schemars: '0.8.15',
    'cosmwasm-std': {
      features: ['cosmwasm_1_3'],
      version: '1.5.0',
    },
    serde: {
      'default-features': false,
      features: ['derive'],
      version: '1.0.189',
    },
    thiserror: {
      version: '1.0.49',
    },
  },
  'dev-dependencies': {
    'cw-multi-test': '0.17.0',
  },
  features: {
    backtraces: ['cosmwasm-std/backtraces'],
    library: [],
  },
  lib: {
    'crate-type': ['cdylib', 'rlib'],
  },
  package: {
    name: '<EMPTY>', // overwritten by config
    version: '0.0.1', // overwritten by config
    edition: '2021',
    exclude: ['contract.wasm', 'hash.txt'],
    metadata: {
      scripts: {
        optimize:
          'docker run --rm -v "$(pwd)":/code --mount type=volume,source="$(basename "$(pwd)")_cache",target=/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.14.0\n',
      },
    } as any,
  },
  profile: {
    release: {
      'codegen-units': 1,
      debug: false,
      'debug-assertions': false,
      incremental: false,
      lto: true,
      'opt-level': 3,
      'overflow-checks': true,
      panic: 'abort',
      rpath: false,
    },
  },
};

const DOTCARGO_CONFIG = toml.stringify({
  alias: {
    schema: 'run --bin schema',
    'unit-test': 'test --lib',
    wasm: 'build --release --lib --target wasm32-unknown-unknown',
  },
});

export class CGEnv {
  constructor(public crates: { [name: string]: Crate } = {}) {}
  public writeToDisk(buildDir: string) {
    let root = path.resolve(buildDir);
    for (let crateName in this.crates) {
      let crate = this.crates[crateName];
      let crateDir = path.join(root, crateName.split('-')[1]);
      fs.mkdirSync(crateDir, { recursive: true });
      fs.writeFileSync(path.join(crateDir, 'Cargo.toml'), crate.cargoToml());
      for (let filePath in crate.files) {
        let file = crate.files[filePath];
        // if directory for file does not exist, create it
        let dir = path.dirname(filePath);
        fs.mkdirSync(path.join(crateDir, dir), { recursive: true });
        fs.writeFileSync(path.join(crateDir, filePath), file);
      }
    }
  }
}

/**
 * The code generator for building Rust code.
 *
 * `RustCodegen` does not touch the file system -- instead, it creates a virtual
 * representation of the generated Rust code in memory.
 */
export class RustCodegen {
  constructor(
    public project: CWScriptProject,
    public env: CGEnv = new CGEnv()
  ) {}

  public buildContract(contract: IR.Value.Contract) {
    const { config } = this.project;
    let cargoToml = DEFAULT_CARGO_TOML;
    let crateName = config.name + '-' + pascalToSnake(contract.name);
    cargoToml.package.name = crateName;
    cargoToml.package.version = config.version;
    cargoToml.package.authors = config.authors;

    // build crate
    let crate = new Crate(cargoToml);

    crate.setFile('.cargo/config', DOTCARGO_CONFIG);
    crate.setFile('src/lib.rs', this.genContract(contract).render());

    // add crate to env
    this.env.crates[crateName] = crate;
  }

  public genContractStateMod(contract: IR.Value.Contract): Rust.ModuleDefn {
    return Rust.mod('state', []);
  }

  public genContractErrorMod(contract: IR.Value.Contract): Rust.ModuleDefn {
    return Rust.mod('error', []);
  }

  public genContractMsgMod(contract: IR.Value.Contract): Rust.ModuleDefn {
    return Rust.mod('msg', []);
  }

  public genCwsMod(contract: IR.Value.Contract): Rust.ModuleDefn {
    return Rust.mod('cws', []);
  }

  public genContractImplMod(contract: IR.Value.Contract): Rust.ModuleDefn {
    return Rust.mod('impl', []);
  }

  public genContractMod(contract: IR.Value.Contract): Rust.ModuleDefn {
    return Rust.mod('contract', []);
  }

  public genContract(contract: IR.Value.Contract): Rust.ModuleDefn {
    const stateMod = this.genContractStateMod(contract);
    const errorMod = this.genContractErrorMod(contract);
    const msgMod = this.genContractMsgMod(contract);
    const cwsMod = this.genCwsMod(contract);
    const implMod = this.genContractImplMod(contract);
    const contractMod = this.genContractMod(contract);
    // make the contract top-level module
    const mod = Rust.mod(pascalToSnake(contract.name), [
      stateMod,
      errorMod,
      msgMod,
      cwsMod,
      implMod,
      contractMod,
    ]);

    return mod;
  }
}

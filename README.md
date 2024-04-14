# Cross Env (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/cross-env-es](https://img.shields.io/github/v/release/hugoalh-studio/cross-env-es?label=hugoalh-studio/cross-env-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/cross-env-es")](https://github.com/hugoalh-studio/cross-env-es)
[![JSR: @hugoalh/cross-env](https://img.shields.io/jsr/v/@hugoalh/cross-env?label=JSR%20@hugoalh/cross-env&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/cross-env")](https://jsr.io/@hugoalh/cross-env)
[![NPM: @hugoalh/cross-env](https://img.shields.io/npm/v/@hugoalh/cross-env?label=@hugoalh/cross-env&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/cross-env")](https://www.npmjs.com/package/@hugoalh/cross-env)

An ES (JavaScript & TypeScript) module for cross runtime environment variables interface.

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0 / >= v1.41.1 (For JSR Only)
  > **🛡️ Require Permission**
  >
  > - Environment Variable (`allow-env`)
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/cross-env[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/cross-env[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/cross-env[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/cross-env[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/cross-env";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/cross-env[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/cross-env[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/cross-env[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/cross-env[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/cross-env";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/cross-env[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    /* Via GitHub Raw (Require Tag) */
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/cross-env-es/${Tag}/mod.ts";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.

## 🧩 API

- ```ts
  const env: CrossEnv;
  ```
- ```ts
  const envPath: CrossEnvPath;
  ```
- ```ts
  const envPathExt: CrossEnvPathExt;
  ```
- ```ts
  function isEnvironmentCI(): boolean;
  ```
- ```ts
  function isEnvironmentDocker(): Promise<boolean>;
  ```
- ```ts
  function isEnvironmentHeroku(): boolean;
  ```
- ```ts
  function isEnvironmentHyper(): boolean;
  ```
- ```ts
  function isEnvironmentPodman(): Promise<boolean>;
  ```
- ```ts
  function isEnvironmentRoot(): boolean;
  ```
- ```ts
  function isEnvironmentSSH(): boolean;
  ```
- ```ts
  function isEnvironmentTravis(): boolean;
  ```
- ```ts
  function isEnvironmentWSL(): Promise<boolean>;
  ```
- ```ts
  interface CrossEnv {
    delete(key: string): void;
    get(key: string): string | undefined;
    getAll(): { [key: string]: string; };
    has(key: string): boolean;
    set(key: string, value: string): void;
  }
  ```
- ```ts
  interface CrossEnvPath {
    add(...values: string[]): void;
    delete(...values: string[]): void;
    get(): string[];
  }
  ```
- ```ts
  interface CrossEnvPathExt {
    add(...values: string[]): void;
    delete(...values: string[]): void;
    get(): string[] | null;
  }
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/cross-env)

## ✍️ Example

- ```ts
  env.delete("SOME_VAR");
  ```
- ```ts
  env.get("HOME");
  //=> "/home/alice"
  ```
- ```ts
  env.get("SOME_VAR");
  //=> undefined
  ```

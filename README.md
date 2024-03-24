# Cross Env (TypeScript)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/cross-env-ts](https://img.shields.io/badge/hugoalh--studio/cross--env--ts-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/cross-env-ts")](https://github.com/hugoalh-studio/cross-env-ts)
[![JSR: @hugoalh/cross-env](https://img.shields.io/badge/JSR-@hugoalh/cross--env-F7DF1E?labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/cross-env")](https://jsr.io/@hugoalh/cross-env)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/cross-env-ts?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/cross-env-ts?color=2187C0&label=&style=flat "Latest Release Date"))

A TypeScript module for cross runtime environment variables interface.

## 🎯 Target

- Bun ^ v1.0.0
- Deno >= v1.34.0 / >= v1.41.1 *(Via JSR)*
  > **🛡️ Require Permission**
  >
  > - Environment Variable (`allow-env`)
- NodeJS >= v16.13.0

## 🔰 Usage

### Via HTTPS

> **🎯 Supported Target**
>
> - Deno

1. Import at the script (`<ScriptName>.ts`):
    - Via DenoPKG
      ```ts
      import ... from "https://denopkg.com/hugoalh-studio/cross-env-ts[@<Tag>]/mod.ts";
      ```
    - Via GitHub Raw (Require Tag)
      ```ts
      import ... from "https://raw.githubusercontent.com/hugoalh-studio/cross-env-ts/<Tag>/mod.ts";
      ```
    - Via Pax
      ```ts
      import ... from "https://pax.deno.dev/hugoalh-studio/cross-env-ts[@<Tag>]/mod.ts";
      ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
    >
    > - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
    > - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
    > - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
    >
    > These elements are not considered part of the public API, thus no stability is guaranteed for them.

### Via JSR With Native Support

> **🎯 Supported Target**
>
> - Deno

1. Import at the script (`<ScriptName>.ts`):
    ```ts
    import ... from "jsr:@hugoalh/cross-env[@<Tag>]";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.

### Via JSR With NPM Compatibility Layer Support

> **🎯 Supported Target**
>
> - Bun
> - NodeJS

1. Install via console/shell/terminal:
    - Via Bun
      ```sh
      bunx jsr add @hugoalh/cross-env[@<Tag>]
      ```
    - Via NPM
      ```sh
      npx jsr add @hugoalh/cross-env[@<Tag>]
      ```
    - Via PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/cross-env[@<Tag>]
      ```
    - Via Yarn
      ```sh
      yarn dlx jsr add @hugoalh/cross-env[@<Tag>]
      ```
2. Import at the script (`<ScriptName>.ts`):
    ```ts
    import ... from "@hugoalh/cross-env";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.

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

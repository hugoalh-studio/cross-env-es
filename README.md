# Cross Env (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/cross-env-es](https://img.shields.io/github/v/release/hugoalh-studio/cross-env-es?label=hugoalh-studio/cross-env-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/cross-env-es")](https://github.com/hugoalh-studio/cross-env-es)
[![JSR: @hugoalh/cross-env](https://img.shields.io/jsr/v/@hugoalh/cross-env?label=JSR%20@hugoalh/cross-env&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/cross-env")](https://jsr.io/@hugoalh/cross-env)
[![NPM: @hugoalh/cross-env](https://img.shields.io/npm/v/@hugoalh/cross-env?label=@hugoalh/cross-env&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/cross-env")](https://www.npmjs.com/package/@hugoalh/cross-env)

An ES (JavaScript & TypeScript) module for cross runtime environment variables interface.

## 🔰 Begin

### 🎯 Targets

|  | **Registry - JSR** | **Registry - NPM** | **Remote Import** |
|:--|:--|:--|:--|
| **Bun** >= v1.1.0 | [✔️ `node_modules`](https://jsr.io/docs/npm-compatibility) | [✔️ Specifier `npm:`](https://bun.sh/docs/runtime/autoimport) | ❌ |
| **Cloudflare Workers** | [✔️ `node_modules`](https://jsr.io/docs/with/cloudflare-workers) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |
| **Deno** >= v1.42.0 | [✔️ Specifier `jsr:`](https://jsr.io/docs/with/deno) | [✔️ Specifier `npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) | [✔️](https://docs.deno.com/runtime/manual/basics/modules/#remote-import) |
| **NodeJS** >= v16.13.0 | [✔️ `node_modules`](https://jsr.io/docs/with/node) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |

> **ℹ️ Note**
>
> It is possible to use this module in other ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

<table>
<tr>
<th>JSR</th>
<td width="100%">

```
@hugoalh/cross-env
```

</td>
</tr>
<tr>
<th>NPM</th>
<td width="100%">

```
@hugoalh/cross-env
```

</td>
</tr>
</table>

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### #️⃣ Remote Import Paths

- Via GitHub Raw (Require Tag)
  ```
  https://raw.githubusercontent.com/hugoalh-studio/cross-env-es/${Tag}/mod.ts
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

### 🛡️ Permissions

| **Target** | **Type** | **Coverage** |
|:--|:--|:--|
| Deno | Environment Variable (`allow-env`) | All |

## 🧩 APIs

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

## ✍️ Examples

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

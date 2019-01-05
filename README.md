# :lipstick: tsc-definition-.d.ts :lipstick:

## Description

This repository explains making basic TypeScript Definitely Typed.

Install typescript module.

```bash
$ yarn add typescript --dev
```

Make the `tscconfig.json` file.

```bash
$ npx tsc --init
```

Specify baseUrl, paths and typeRoots in compilerOptions key.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {"*": ["types/*"]},
    "typeRoots": ["types", "node_modules/@types"]
  },
  "include": ["app/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Install npm module which does **not have** a definition file.

In the sample below, I installed electron-log-rotate of npm module.

```bash
$ yarn add electron-log-rotate
```

Create the `types` directory in the Root directory.

`types/electron-log-rotate/index.d.ts`

Define functions which it needs.

```javascript
export function setup(encoded: object): void;
export function log(encoded: string): void;
```

So, You use which it does not have a definition file.

```javascript
import { setup, log } from 'electron-log-rotate';
```

and To build TypeScript.

```bash
$ tsc
```

There is no error.

via: [TypeScriptプロジェクトに独自の型定義を配置する方法 - Qiita](https://qiita.com/mtgto/items/e30d1529ca298e49557e)

## Maintainers

 - [hisasann](https://github.com/hisasann)

## License

 MIT © [hisasann](https://github.com/hisasann)

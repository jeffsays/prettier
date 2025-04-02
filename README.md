[![code style: prettier][code-style]][prettier]

# prettier

My shared Prettier configuration

# Usage
## Installation

<details open><summary>yarn</summary>

```shell
yarn add --dev @jeffsays/prettier
```

</details>

<details open><summary>npm</summary>

```shell
npm install --save-dev @jeffsays/prettier
```

</details>

<details open><summary>pnpm</summary>

```shell
pnpm add -D @jeffsays/prettier
```

[code-style]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier

</details>

## `package.json` 

Add to package.json:

```json
{
  "scripts": {
    "lint:check": "NODE_OPTIONS=\"--experimental-strip-types\" prettier --check .",
    "lint:format": "NODE_OPTIONS=\"--experimental-strip-types\" prettier --config src/prettier/prettier.config.ts --write ."
    "prettier:format": "yarn run build && node --experimental-strip-types node_modules/prettier/bin/prettier.cjs  --config src/prettier/.prettierrc.yml --write .",
    "prettier:test": "yarn run build && node --experimental-strip-types node_modules/prettier/bin/prettier.cjs  --config src/prettier/.prettierrc.yml --check .",
  },
  "prettier": "@jeffsays/prettier"
}

```

[![code style: prettier][code-style]][prettier]

# prettier

My shared Prettier configuration

# Usage

## Installation

This projects recommends using [tsx] to run prettier for typescript projects.

<details open><summary>yarn</summary>

```shell
yarn add --dev @jeffsays/prettier tsx
```

</details>

<details open><summary>npm</summary>

```shell
npm install --save-dev @jeffsays/prettier tsx
```

</details>

<details open><summary>pnpm</summary>

```shell
pnpm add -D @jeffsays/prettier tsx
```

</details>

## `package.json`

Add to package.json:

```json
{
  "scripts": {
    "prettier:check": "node --import tsx node_modules/prettier/bin/prettier.cjs . --check",
    "prettier:list-different": "node --import tsx node_modules/prettier/bin/prettier.cjs . --list-different",
    "prettier:write": "node --import tsx node_modules/prettier/bin/prettier.cjs . --write"
  },
  "prettier": "@jeffsays/prettier"
}

```

[code-style]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[tsx]: https://tsx.is/

import { type Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  editorconfig: true,
  endOfLine: "lf",
  experimentalOperatorPosition: "start",
  experimentalTernaries: true,
  insertPragma: false,
  objectWrap: "preserve",
  printWidth: 120,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: ".github/workflows/*.yml",
      options: {
        parser: "yaml",
        proseWrap: "preserve"
      }
    }
  ]
}

export default config;

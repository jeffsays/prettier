import { type Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  braceStyle: "1tbs",
  bracketSameLine: false,
  bracketSpacing: true,
  editorconfig: true,
  endOfLine: "lf",
  experimentalOperatorPosition: "start",
  experimentalTernaries: true,
  insertPragma: false,
  jsdocDescriptionTag: true,
  jsdocVerticalAlignment: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocPrintWidth: 100,
  jsdocLineWrappingStyle: "greedy",
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
  organizeImportsSkipDestructiveCodeActions: true,
  overrides: [
    {
      files: ".github/workflows/*.yml",
      options: {
        parser: "yaml",
        proseWrap: "preserve",
      },
    },
  ],
  plugins: [
    "prettier-plugin-curly",
    "prettier-plugin-packagejson",
    "prettier-plugin-organize-imports",
    "prettier-plugin-brace-style",
    "prettier-plugin-jsdoc",
    "prettier-plugin-merge",
  ],
};

export default config;

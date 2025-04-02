import { type Config } from "prettier";
import jsdoc from "./jsdoc.plugin.ts";
import braceStyle from "./braceStyle.plugin.ts";
import experimentals from "./prettier.experimental.ts";

/**
 * @description
 *
 * Shared prettier configuration
 *
 * @type Config
 */
const config: Config = {
  ...braceStyle,
  ...experimentals,
  ...jsdoc,
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  editorconfig: true,
  endOfLine: "lf",
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

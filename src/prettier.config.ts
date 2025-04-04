import { type Config } from "prettier";
import jsdoc from "./jsdoc.plugin.ts";
import braceStyle from "./braceStyle.plugin.ts";
import experimentals from "./prettier.experimental.ts";
import sh from "./sh.plugin.ts";
import toml from "./toml.plugin.ts";

/**
 * Shared prettier configuration
 *
 * @type Config
 */
const config: Config = {
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
    "prettier-plugin-sh",
    "prettier-plugin-sort-re-exports",
    "prettier-plugin-toml",
    "prettier-plugin-tsconfig",
    "@svgr/plugin-prettier",
  ],
  ...braceStyle,
  ...experimentals,
  ...jsdoc,
  ...sh,
  ...toml,
};

export default config;

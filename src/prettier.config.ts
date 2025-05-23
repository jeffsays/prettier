/**
 * @file - shared configuration for prettier
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier
 * @ref https://github.com/prettier/prettier
 */

import braceStyle from "./braceStyle.plugin.ts";
import ignored from "./ignored.plugin.ts";
import jsdoc from "./jsdoc.plugin.ts";
import multilineArrays from "./multiline-arrays.plugin.ts";
import organizeImports from "./organize-imports.plugin.ts";
import experimentals from "./prettier.experimental.ts";
import sh from "./sh.plugin.ts";
import sortImports from "./sort-imports.plugin.ts";
import toml from "./toml.plugin.ts";
import { type Config } from "prettier";

/**
 * Shared prettier configuration
 *
 * @type Config
 */
const config: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  // editorconfig: true, // [warn] Ignored unknown option { editorconfig: true }.
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
  overrides: [
    {
      files: ".github/workflows/*.yml",
      options: {
        parser: "yaml",
        proseWrap: "preserve",
      },
    },
    {
      files: "src/.prettierignore",
      options: {
        parser: "less",
      },
    },
  ],
  plugins: [
    "prettier-plugin-toml",
    "prettier-plugin-curly",
    "prettier-plugin-packagejson",
    "prettier-plugin-multiline-arrays",
    "prettier-plugin-organize-imports",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-brace-style",
    "prettier-plugin-jsdoc",
    "prettier-plugin-curly-and-jsdoc",
    "prettier-plugin-sh",
    "prettier-plugin-sort-re-exports",
    "@svgr/plugin-prettier",
    "prettier-plugin-ignored",
    "prettier-plugin-merge" /* keep this plugin last */,
  ],
  ...braceStyle,
  ...experimentals,
  ...jsdoc,
  ...sh,
  ...toml,
  ...multilineArrays,
  ...organizeImports,
  ...sortImports,
  ...ignored,
};

export default config;

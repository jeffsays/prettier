/**
 * @file - configuration for "prettier-plugin-jsdoc"
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier-plugin-organize-imports
 * @ref https://github.com/simonhaenisch/prettier-plugin-organize-imports
 */

import { type Config } from "prettier";

const config: Config = {
  organizeImportsSkipDestructiveCodeActions: true,
};

export default config;

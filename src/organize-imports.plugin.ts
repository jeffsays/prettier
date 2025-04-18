/**
 * @file - configuration for "prettier-plugin-jsdoc"
 * @ref https://www.npmjs.com/package/prettier-plugin-organize-imports
 * @ref https://github.com/simonhaenisch/prettier-plugin-organize-imports
 * @author - Jeff Beck
 */

import { type Config } from "prettier";

const config: Config = {
  organizeImportsSkipDestructiveCodeActions: true,
};

export default config;

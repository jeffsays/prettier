/**
 * @file - configuration for "prettier-plugin-jsdoc"
 * @ref https://www.npmjs.com/package/prettier-plugin-jsdoc
 * @ref https://github.com/hosseinmd/prettier-plugin-jsdoc
 * @author - Jeff Beck
 */

import type { Options } from "prettier-plugin-jsdoc";

const config: Options = {
  jsdocSpaces: 1,
  jsdocDescriptionWithDot: false,
  jsdocDescriptionTag: false,
  jsdocVerticalAlignment: true,
  jsdocKeepUnParseAbleExampleIndent: true,
  jsdocCommentLineStrategy: "singleLine",
  jsdocCapitalizeDescription: false,
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: false,
  jsdocPreferCodeFences: true,
  tsdoc: true,
  jsdocPrintWidth: 120,
  jsdocLineWrappingStyle: "greedy",
  jsdocAddDefaultToDescription: true,
};

export default config;

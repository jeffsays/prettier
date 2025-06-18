/**
 * @file - configuration for "prettier-plugin-jsdoc"
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier-plugin-jsdoc
 * @ref https://github.com/hosseinmd/prettier-plugin-jsdoc
 */

import type { Options } from "prettier-plugin-jsdoc";

const config: Options = {
  jsdocSpaces: 2,
  jsdocDescriptionWithDot: true,
  jsdocDescriptionTag: true,
  jsdocVerticalAlignment: true,
  jsdocKeepUnParseAbleExampleIndent: true,
  jsdocCommentLineStrategy: "keep",
  jsdocCapitalizeDescription: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: false,
  jsdocPreferCodeFences: true,
  tsdoc: true,
  jsdocPrintWidth: 100,
  jsdocLineWrappingStyle: "greedy",
  jsdocAddDefaultToDescription: true,
};

export default config;

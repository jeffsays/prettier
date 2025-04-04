import { type Config } from "prettier";
import { Options } from "prettier-plugin-jsdoc"

export const config: Options = {
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

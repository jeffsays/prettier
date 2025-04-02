import { type Config } from "prettier";

export const config: Config = {
  jsdocCapitalizeDescription: true,
  jsdocDescriptionTag: true,
  jsdocKeepUnParseAbleExampleIndent: true,
  jsdocCommentLineStrategy: "singleLine",
  jsdocVerticalAlignment: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocPrintWidth: 100,
  jsdocLineWrappingStyle: "greedy",
  tsdoc: true,
  jsdocAddDefaultToDescription: true,
};

export default config;

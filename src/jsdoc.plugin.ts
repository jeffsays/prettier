import { type Config } from "prettier";

export const config: Config = {
  jsdocCapitalizeDescription: true,
  jsdocDescriptionTag: true,
  jsdocKeepUnParseAbleExampleIndent: true,
  jsdocCommentLineStrategy: "singleLine",
  jsdocVerticalAlignment: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocPrintWidth: 120,
  jsdocLineWrappingStyle: "greedy",
  tsdoc: false,
  jsdocAddDefaultToDescription: true,
};

export default config;

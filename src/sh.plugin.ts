import { type Config } from "prettier";

const config: Config = {
  keepComments: true,
  variant: 0,
  indent: 2,
  switchCaseIndent: true,
  spaceRedirects: true,
  keepPadding: true,
  minify: false,
  functionNextLine: false,
  experimentalWasm: false,
};

export default config;

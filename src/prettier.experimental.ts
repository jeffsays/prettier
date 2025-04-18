/**
 * @file - experimental prettier settings
 * @ref https://www.npmjs.com/package/prettier
 * @ref https://github.com/prettier/prettier
 * @author - Jeff Beck
 */

import { type Config } from "prettier";

export const config: Config = {
  experimentalOperatorPosition: "start",
  experimentalTernaries: true,
};

export default config;

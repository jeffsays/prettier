/**
 * @file - experimental prettier settings
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier
 * @ref https://github.com/prettier/prettier
 */

import { type Config } from "prettier";

export const config: Config = {
  experimentalOperatorPosition: "start",
  experimentalTernaries: true,
};

export default config;

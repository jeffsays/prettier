/**
 * @file - configuration for "prettier-plugin-ignored"
 * @ref https://www.npmjs.com/package/prettier-plugin-ignored
 * @ref https://github.com/tobysmith568/prettier-plugin-ignored
 * @author - Jeff Beck
 */

import { type Config } from "prettier";

export const config: Config = {
  overrides: [
    {
      files: [".prettierignore", "src/.prettierignore"],
      options: {
        parser: "ignored"
      }
    }
  ]
};

export default config;

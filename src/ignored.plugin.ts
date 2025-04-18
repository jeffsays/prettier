/**
 * @file - configuration for "prettier-plugin-ignored"
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier-plugin-ignored
 * @ref https://github.com/tobysmith568/prettier-plugin-ignored
 */

import { type Config } from "prettier";

export const config: Config = {
  overrides: [
    {
      files: [".prettierignore", "src/.prettierignore"],
      options: {
        parser: "ignored",
      },
    },
  ],
};

export default config;

/**
 * @file - configuration for "@ianvs/prettier-plugin-sort-imports"
 * @ref https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports
 * @ref https://github.com/ianvs/prettier-plugin-sort-imports
 * @author - Jeff Beck
 */

import type { PluginConfig } from "@ianvs/prettier-plugin-sort-imports";

const config: PluginConfig = {
  importOrder: [
    "",
    "<BUILTIN_MODULES>",
    "^[.]",
    "^@jeffsays/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^(@api|@assets|@core|@server|@ui)(/.*)$",
    "",
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^[.]",
  ],
  importOrderTypeScriptVersion: "5.8.3",
  importOrderCaseSensitive: true,
};

export default config;

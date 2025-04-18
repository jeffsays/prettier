/**
 * @file - shared configuration for "prettier-plugin-toml"
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier-plugin-toml
 * @ref https://github.com/un-ts/prettier
 * @ref https://github.com/un-ts/prettier/tree/master/packages/toml
 */

import type { PrettierTaploOptions } from "prettier-plugin-toml";

const config: PrettierTaploOptions = {
  // 'Align consecutive entries vertically.'
  alignEntries: false, // default `false`
  // Align consecutive comments after entries and items vertically. This applies
  // to comments that are after entries or array items.
  alignComments: true, // default `true`
  // Expand arrays to multiple lines that exceed the maximum column width.
  arrayAutoExpand: true, // default `true`
  // Collapse arrays that don't exceed the maximum column width and don't
  // contain comments.
  arrayAutoCollapse: true, // default `true`
  // Omit white space padding from single-line arrays.
  compactArrays: true, // default `true`
  // Omit white space padding from the start and end of inline tables.
  compactInlineTables: false, // default `false`
  // Omit white space around `=`.
  compactEntries: false, // default `false`
  // Indent based on tables and arrays of tables and their subtables, subtables
  // out of order are not indented.
  indentTables: false, // default `false`
  // Indent entries under tables.
  indentEntries: false, // default `false`
  // Alphabetically reorder keys that are not separated by empty lines.
  reorderKeys: false, // default `false`
  // The maximum number of allowed blank lines between entries and tables.
  allowedBlankLines: 1, // integer, default `1`
};

export default config;

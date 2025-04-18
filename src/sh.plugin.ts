/**
 * @file - shared configuration for "prettier-plugin-sh"
 * @author - Jeff Beck
 * @ref https://www.npmjs.com/package/prettier-plugin-sh
 * @ref https://github.com/un-ts/prettier https://github.com/un-ts/prettier/tree/master/packages/sh
 */

import type { Config } from "prettier";

const parserOptions = {
  /**
   * KeepComments makes the parser parse comments and attach them to nodes, as opposed to discarding them.
   *
   * @default true
   */
  keepComments: true,
  /**
   * LangVariant describes a shell language variant to use when tokenizing and parsing shell code. The zero value is
   * [LangBash].
   */
  variant: 0,
  /**
   * StopAt configures the lexer to stop at an arbitrary word, treating it as if it were the end of the input. It can
   * contain any characters except whitespace, and cannot be over four bytes in size.
   *
   * This can be useful to embed shell code within another language, as one can use a special word to mark the
   * delimiters between the two.
   *
   * As a word, it will only apply when following whitespace or a separating token. For example, StopAt("$$") will act
   * on the inputs "foo $$" and "foo;$$", but not on "foo '$$'".
   *
   * The match is done by prefix, so the example above will also act on "foo $$bar".
   */
  // stopAt?: string,
  /**
   * RecoverErrors allows the parser to skip up to a maximum number of errors in the given input on a best-effort basis.
   * This can be useful to tab-complete an interactive shell prompt, or when providing diagnostics on slightly
   * incomplete shell source.
   *
   * Currently, this only helps with mandatory tokens from the shell grammar which are not present in the input. They
   * result in position fields or nodes whose position report [Pos.IsRecovered] as true.
   *
   * For example, given the input
   *
   * ```
   * (foo |
   * ```
   *
   * the result will contain two recovered positions; first, the pipe requires a statement to follow, and as [Stmt.Pos]
   * reports, the entire node is recovered. Second, the subshell needs to be closed, so [Subshell.Rparen] is recovered.
   */
  // recoverErrors?: number,
  // experimentalWasm: false,
};

const printerOptions = {
  /** Indent sets the number of spaces used for indentation. If set to 0, tabs will be used instead. */
  indent: 2,
  /**
   * BinaryNextLine will make binary operators appear on the next line when a binary command, such as a pipe, spans
   * multiple lines. A backslash will be used.
   *
   * @default true
   */
  binaryNextLine: true,
  /**
   * SwitchCaseIndent will make switch cases be indented. As such, switch case bodies will be two levels deeper than the
   * switch itself.
   */
  switchCaseIndent: true,
  /** SpaceRedirects will put a space after most redirection operators. The exceptions are '>&', '<&', '>(', and '<('. */
  spaceRedirects: true,
  /**
   * KeepPadding will keep most nodes and tokens in the same column that they were in the original source. This allows
   * the user to decide how to align and pad their code with spaces.
   *
   * Note that this feature is best-effort and will only keep the alignment stable, so it may need some human help the
   * first time it is run.
   *
   * @deprecated: this formatting option is flawed and buggy, and often does
   * not result in what the user wants when the code gets complex enough.
   *
   * The next major version, v4, will remove this feature entirely.
   * See: https://github.com/mvdan/sh/issues/658
   */
  // keepPadding: false,
  /**
   * Minify will print programs in a way to save the most bytes possible. For example, indentation and comments are
   * skipped, and extra whitespace is avoided when possible.
   */
  minify: false,
  /**
   * SingleLine will attempt to print programs in one line. For example, lists of commands or nested blocks do not use
   * newlines in this mode. Note that some newlines must still appear, such as those following comments or around
   * here-documents.
   *
   * Print's trailing newline when given a [*File] is not affected by this option.
   */
  singleLine: true,
  /** FunctionNextLine will place a function's opening braces on the next line. */
  functionNextLine: false,
};

const config: Config = {
  ...parserOptions,
  ...printerOptions,
};

export default config;

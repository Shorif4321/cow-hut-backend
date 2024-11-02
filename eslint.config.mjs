import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
     "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      // "no-unused-expression": "error",
      "no-unreachable": "error",
      "prefer-const": "error"
    }
  },

  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
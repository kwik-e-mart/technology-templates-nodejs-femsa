import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
//   {languageOptions: { globals: globals.browser }},
// ];

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser, // Merge browser globals
      ecmaVersion: 12, // Specify ECMAScript version
    },
    rules: {
      "no-unused-vars": "warn", // Warn for unused variables
      semi: ["error", "always"], // Enforce semicolons at the end
      quotes: ["warn", "single"], // Enforce single quotes
      indent: ["warn", 2], // Enforce 2-space indentation
      "no-console": "off", // Disabled 'no-console' to avoid warnings for console.log
      eqeqeq: "warn", // Enforce use of === and !==
      curly: "warn", // Require curly braces for control statements
    },
  },
  {
    languageOptions: {
      globals: globals.browser, // Reiterate globals in the broader scope if needed
    },
  }
];

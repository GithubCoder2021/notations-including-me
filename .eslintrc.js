module.exports = {
  "env": {
    "es6": true
  },
  "extends": [
    "eslint:all",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/all"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "ignorePatterns": ["spec/**/*.js", "docs/**/*.js", ".eslintrc.js"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": "./tsconfig.json"
  },
  "rules": {
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allowAfterThis": true
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 120,
        "comments": 120
      }
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        "ignoreConsecutiveComments": true
      }
    ],
    "multiline-comment-style": [
      "error",
      "separate-lines"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "multiline-ternary": [
      "error",
      "always-multiline"
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": true
      }
    ],
    "@typescript-eslint/no-type-alias": [
      "error",
      {
        "allowAliases": "in-unions-and-intersections"
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "func-style": "off",
    "no-ternary": "off",
    "id-length": "off",
    "sort-keys": "off",
    "no-continue": "off",
    "no-undefined": "off",
    "sort-imports": "off",
    "no-plusplus": "off",
    "init-declarations": "off",
    "max-statements": "off",
    "max-lines-per-function": "off",
    "no-mixed-operators": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "require-unicode-regexp": "off",
    "array-element-newline": "off",
    "prefer-destructuring": "off",
    "prefer-named-capture-group": "off",
    "no-confusing-arrow": "off",
    "curly": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/space-before-function-paren": "off"
  }
};

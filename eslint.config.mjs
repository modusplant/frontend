// eslint.config.mjs
import js from "@eslint/js";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "cypress/**",
      "jest.config.ts",
      "jest.setup.ts",
      "cypress.config.ts",
      "postcss.config.js",
    ],
  },
  js.configs.recommended,
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "@typescript-eslint": plugin,
      storybook,
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "import/no-extraneous-dependencies": "off",
      "no-console": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
      "react-hooks/rules-of-hooks": "off",
      "import/extensions": "off",
      "prefer-const": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          required: {
            some: ["nesting", "id"],
          },
        },
      ],
      "react/require-default-props": "off",
      ...storybook.configs.recommended.rules,
    },
  },
];

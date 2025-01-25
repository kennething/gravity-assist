import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["**/.nuxt", "**/node_modules", "**/.output", "**/dist"]
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...pluginVue.configs["flat/recommended"],
  {
    name: "main",
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".vue"],
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    rules: {
      "array-callback-return": ["error", { allowImplicit: true }],
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "block-scoped-var": "error",
      camelcase: "error",
      "default-case": "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "func-style": ["warn", "declaration"],
      "max-depth": "error",
      "no-console": ["error", { allow: ["warn", "error", "group", "groupEnd"] }],
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-lonely-if": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "operator-assignment": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      yoda: "error",

      "@typescript-eslint/array-type": "error",
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      complexity: "off",

      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",

      "vue/multi-word-component-names": "off",
      "vue/block-lang": ["error", { script: { lang: "ts" } }],
      "vue/block-order": ["error", { order: ["template", "script", "style"] }],
      "vue/component-api-style": "error",
      "vue/component-name-in-template-casing": "error",
      "vue/custom-event-name-casing": "error",
      "vue/define-emits-declaration": "error",
      "vue/define-props-declaration": "error",
      "vue/enforce-style-attribute": "error",
      "vue/html-button-has-type": "error",
      "vue/new-line-between-multi-line-property": "error",
      "vue/no-static-inline-styles": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-use-template-ref": "error",
      "vue/require-typed-object-prop": "error",
      "vue/v-for-delimiter-style": "error",
      "vue/dot-notation": "error",
      "vue/camelcase": "error",
      "vue/no-console": "error",
      "vue/no-constant-condition": "error",

      "vue/html-self-closing": ["error", { html: { void: "always", normal: "never", component: "always" } }],
      "vue/max-attributes-per-line": "off",
      "vue/require-v-for-key": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/no-static-inline-styles": "off",
      "vue/no-mutating-props": "off",
      "vue/no-use-v-if-with-v-for": "off"
    }
  }
];

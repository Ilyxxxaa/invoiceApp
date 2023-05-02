module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": 0,
    //   "prettier/prettier": [
    //     "warn",
    //     {
    //       bracketSpacing: true,
    //       jsxBracketSameLine: false,
    //       printWidth: 120,
    //       semi: true,
    //       singleQuote: false,
    //       htmlWhitespaceSensitivity: "ignore",
    //     },
    //   ],
  },
};

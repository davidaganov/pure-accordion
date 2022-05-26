module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "quotes": [1, "double"],
    "spaced-comment": ["error", "always", { "markers": ["-", "----"] }],
    "no-param-reassign": ["error", { "props": false }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "comma-dangle": ["error", "never"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

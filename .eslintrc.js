const a11yOff = Object.keys(require("eslint-plugin-jsx-a11y").rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = "off"; return acc }, {})


module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    ...a11yOff,
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": "off",
    "no-console": "warn",
    "react/static-property-placement": "off", // disable if necessary
    "react/require-default-props": "off",
    "quotes": [1, "double"],
    "quote-props": "off",
    "semi": [0, "never"],
    "padded-blocks": ["error", { "classes": "always" }],
    "react/destructuring-assignment": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
    "no-multiple-empty-lines": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-nested-ternary": "off",
    "no-shadow": "off",
    "object-curly-newline": [1, { "ObjectPattern": { "multiline": true } }],
    "arrow-body-style": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": "off",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "react/jsx-no-bind": [0, { "allowBind": true }]

  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ["@babel/preset-env"],
    },
  },
};

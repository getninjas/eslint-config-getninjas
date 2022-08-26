module.exports = {
  env: {
    "browser": true,
    "es2020": true,
    "jest": true,
    "node": true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "@next/next/no-page-custom-font": "off",
    "import/no-anonymous-default-export": "off",
    "comma-dangle": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "global-require": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "camelcase": "off",
    "no-console": ["error", { "allow": ["tron"] }],
    "import/no-extraneous-dependencies": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/semi": "off",
    "import/no-duplicates": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

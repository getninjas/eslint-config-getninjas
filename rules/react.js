module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // This rule allows functions to be declared after its use.
    // Through the concept of hoisting, the functions can be
    // declared anywhere, helping the code legibility
    // This style was inspired by the book Refactoring (2nd Edition)
    'no-use-before-define': ['error', 'nofunc'],

    'no-underscore-dangle': 'off',

    'comma-dangle': 'off',

    'import/prefer-default-export': 'off',

    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',

    'react/button-has-type': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    'react/jsx-no-bind': 'off',

    'react/jsx-props-no-spreading': 'off',

    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test.{ts,tsx}", // repos with a single test file
          "test-*.{ts,tsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts" // jest setup
        ],
        "optionalDependencies": false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

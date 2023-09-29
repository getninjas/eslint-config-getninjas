module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:prettier/recommended' // Prettier recommended rules
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off', // No need to import React when using Next.js
    'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
    'no-use-before-define': ['error'],
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': "off",
    'comma-dangle': 0,
  },
};

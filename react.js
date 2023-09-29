module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:prettier/recommended', // Prettier recommended rules
    'airbnb',
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
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', 'nofunc'],
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': ['error', { allow: ['_links'] }],
    'comma-dangle': [2, 'always-multiline'],
  },
};

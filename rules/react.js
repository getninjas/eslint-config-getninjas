module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // No need to import React in version 17+
    'react/react-in-jsx-scope': 'off',

    // Enable spreading in React components
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

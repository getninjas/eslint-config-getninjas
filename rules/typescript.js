module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Duplicated
    'no-use-before-define': 'off',

    'no-underscore-dangle': 'off',

    'comma-dangle': 'off',

    'import/prefer-default-export': 'off',

    // New Rules
    'import/no-anonymous-default-export': 'off',

    'import/extensions': 'off',

    'import/no-extraneous-dependencies': 'off',

    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    'global-require': 'off',

    'no-param-reassign': 'off',

    camelcase: 'off',

    'no-console': ['error', { allow: ['tron'] }],

    'import/no-duplicates': 'off',

    'multiline-ternary': 'off',

    '@typescript-eslint/dot-notation': 'warn',

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/member-delimiter-style': 'off',

    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/space-before-function-paren': 'off',

    '@typescript-eslint/semi': 'off',

    '@typescript-eslint/strict-boolean-expressions': 'off',

    '@typescript-eslint/restrict-template-expressions': 'off',

    '@typescript-eslint/prefer-nullish-coalescing': 'off',
  },
};

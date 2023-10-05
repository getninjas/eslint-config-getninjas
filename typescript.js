module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'airbnb-typescript/base',
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 0,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '_' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '_' },
    ],
    'import/prefer-default-export': 'off',
  }
}

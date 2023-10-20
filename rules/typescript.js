const baseRules = require('./base').rules;

module.exports = {
  extends: [
    // Precisamos do extend mesmo?
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    // We deactivated the rule to use the typescript equivalent
    // with the same configurations used in our base file
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      baseRules['no-use-before-define'],

    // We deactivated the rule to use the typescript equivalent
    // with the same configurations used in our base file
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],

    // This rule is deactivated because it is stylistic, so prettier will
    // handle this responsability.
    '@typescript-eslint/member-delimiter-style': 'off',

    // Add 'type' before interface or type in imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  },
};

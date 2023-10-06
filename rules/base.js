module.exports = {
  env: {
    es2022: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // This rule is deactivated because it is stylistic, so prettier will
    // handle this responsability.
    'comma-dangle': 'off',

    // We have an rule that unused variables must use _ before the name.
    // This is used in some express middlewares that the request or
    // response is not used, but you need to pass all the arguments
    // and use the last to go to the next middleware.
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '_' }],

    // In our styleguide, we use named exports in all files.
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // This rule allows functions to be declared after its use.
    // Through the concept of hoisting, the functions can be
    // declared anywhere, helping the code legibility
    // This style was inspired by the book Refactoring (2nd Edition)
    'no-use-before-define': ['error', 'nofunc'],
  }
}
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

    // In our styleguide, we don't have a pattern.
    // In some places we use default export, namely because of Next.js.
    // In others, we use named exports.
    'import/prefer-default-export': 'off',

    // This rule allows functions to be declared after its use.
    // Through the concept of hoisting, the functions can be
    // declared anywhere, helping the code legibility
    // This style was inspired by the book Refactoring (2nd Edition)
    'no-use-before-define': ['error', 'nofunc'],

    // Prevent warning "should be listed in the project's dependencies, not devDependencies."
    // Like: faker, eslint, jest etc.
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}
module.exports = {
  // extends: [
  //   'airbnb',
  //   './rules/react'
  // ].map(require.resolve),
  extends: [
    'airbnb',
    './rules/react'
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': ['.js', '.jsx']
      }
    ]
  },
};

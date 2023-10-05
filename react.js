module.exports = {
  // extends: [
  //   'airbnb',
  //   './rules/react'
  // ].map(require.resolve),
  extends: [
    './rules/react.js'
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

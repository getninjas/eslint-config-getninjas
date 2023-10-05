module.exports = {
  extends: [
    './rules/typescript.js',
    './rules/react.js',
    './rules/react-typescript.js',
  ].map(require.resolve),
  rules: {
    "react/require-default-props": "off",
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': ['.ts', '.tsx']
      }
    ]
  }
}

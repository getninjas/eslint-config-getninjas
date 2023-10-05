module.exports = {
  extends: [
    './rules/typescript.js',
    './rules/react.js',
    './rules/react-typescript.js',
  ].map(require.resolve),
  rules: {
    "@typescript-eslint/comma-dangle": "off",
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': ['.ts', '.tsx']
      }
    ]
  }
}

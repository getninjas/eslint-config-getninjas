module.exports = {
  extends: [
    './rules/typescript',
    './rules/react',
    'airbnb-typescript',
  ].map(require.resolve),
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': ['.ts', '.tsx']
      }
    ]
  }
}

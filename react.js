module.exports = {
  extends: [
    'airbnb',
    './rules/base.js',
    './rules/react'
  ].map(require.resolve),
  rules: {},
};

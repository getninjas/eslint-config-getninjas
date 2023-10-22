module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base.js',
    './rules/react'
  ].map(require.resolve),
  rules: {},
};

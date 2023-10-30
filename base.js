module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base.js'
  ].map(require.resolve),
  rules: {},
};

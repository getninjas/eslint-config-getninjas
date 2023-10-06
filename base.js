module.exports = {
  extends: [
    'airbnb-base',
    './rules/base.js'
  ].map(require.resolve),
  rules: {},
};

module.exports = {
  extends: [
    'eslint-config-airbnb-typescript/base',
    './rules/base.js',
    './rules/typescript.js',
    'prettier',
  ].map(require.resolve),
  rules: {}
}

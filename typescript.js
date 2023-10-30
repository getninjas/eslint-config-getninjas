module.exports = {
  extends: [
    'eslint-config-airbnb-typescript/base',
    './rules/base.js',
    './rules/typescript.js',
  ].map(require.resolve).concat('prettier'),
  rules: {}
}

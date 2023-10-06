module.exports = {
  extends: [
    'airbnb-typescript/base',
    './rules/base.js',
    './rules/typescript.js'
  ].map(require.resolve),
  rules: {}
}

module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    './rules/base.js',
    './rules/typescript.js',
    './rules/react.js',
    './rules/react-typescript.js',
    './rules/nextjs-typescript.js'
  ].map(require.resolve),
  rules: {}
}

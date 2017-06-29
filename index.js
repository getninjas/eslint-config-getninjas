module.exports = {
  extends: 'airbnb-base',

  parser: 'babel-eslint',

  plugins: [
    'babel',
    'import',
  ],

  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jquery: true,
    node: true,
  },

  globals: {
    modulejs: true,
    Moderniz: true,
    $: true,
    jquery: true,
    context: false,
    appendLoadFixtures: false,
    readFixtures: false,
    loadFixtures: false,
    preloadFixtures: false,
    spyOnEvent: false,
  },

  rules: {
    strict: 0,
    'func-names': 0,
  },
};

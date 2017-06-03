module.exports = {
  extends: 'airbnb-base',

  parser: 'babel-eslint',

  plugins: ['babel'],

  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jquery: true,
  },

  globals: {
    context: false,
    appendLoadFixtures: false,
    readFixtures: false,
    loadFixtures: false,
    modulejs: false,
    preloadFixtures: false,
    spyOnEvent: false,
  },

  rules: {
    strict: 0,
    'func-names': 0,
  },
};

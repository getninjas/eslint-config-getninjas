module.exports = {
  extends: 'plugin:jasmine-jquery/recommended',

  plugins: [
    'jasmine-jquery'
  ],

  env: {
    browser: true,
    jasmine: true,
    jquery: true,
    node: true,
  },

  globals: {
    modulejs: true,
    Moderniz: true,
    $: true,
    jquery: true,
    preloadFixtures: false,
  },

  rules: {
    strict: 0,
    'no-underscore-dangle': [0, {
      'allowAfterThis': true
    }],
    'class-methods-use-this': ['off', {}]
  },
};
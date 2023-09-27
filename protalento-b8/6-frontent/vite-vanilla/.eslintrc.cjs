module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'semi': [2, 'never'],
    'object-curly-spacing': ['off', 'never'],
    'no-console': [1, {}],
  },
}

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'parser': 'babel-eslint',
  'rules': {
    'semi': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'object-curly-spacing': 'off',
    'arrow-parens': 'off'
  },
};



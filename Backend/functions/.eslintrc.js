module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  rules: {
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'linebreak-style': 0,
    'indent': 'off',
    'semi': 0,
    'object-curly-spacing': ['error', 'always'],
    'skipBlankLines': 0,
    'eol-last': 0,
    'max-len': ['error', { 'code': 120 }],
  },
};
export = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-len': [
      'error',
      {
        'code': 140,
        'tabWidth': 2,
        'comments': 140,
        'ignoreUrls': true
      }
    ],
    'indent': [2, 2],
    'semi': [2, 'always'],
    'no-console': 0,
    'space-before-blocks': 2,
    'prefer-template': 'error',
    'quotes': [
      2,
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'space-infix-ops': 2,
    'comma-spacing': ['error', { 'before': false, 'after': true}],
    'no-trailing-spaces': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        'skipStrings': true,
        'skipComments': true,
        'skipRegExps': true,
        'skipTemplates': true
      }
    ],
    'curly': ['error', 'all'],
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'max-lines': ['error', 300],
    'max-statements': ['error', 30],
  }
};

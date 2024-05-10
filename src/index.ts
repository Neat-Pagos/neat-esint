export = {
  'extends': [
    'plugin:import/recommended',
    'plugin:import/typescript'
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
    'import/newline-after-import': 'error',
    'no-multiple-empty-lines': 'error',
    'object-curly-spacing': ['error', 'always'],
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        'alphabetize': {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          'order': 'asc',
          /* ignore case. Options: [true, false] */
          'caseInsensitive': true,
        },
      },
    ]
  },
  'settings': {
    'import/resolver': {
      'typescript': {
        'project': './tsconfig.json',
      },
    },
  },
};

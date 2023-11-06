module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/jsx-filename-extension': [2, { allow: 'as-needed' }],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-boolean-value': 1,
    'react/no-array-index-key': 1,
    'react/jsx-wrap-multilines': 1,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-object-spread': 'error',
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'no-array-constructor': 'error',
    'quote-props': ['warn', 'as-needed'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': ['warn', 'as-needed'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'no-unneeded-ternary': 'error',
    'spaced-comment': ['warn', 'always', { markers: ['!', '?', 'TODO', '*'] }],
  },
};

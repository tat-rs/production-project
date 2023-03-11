module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  overrides: [
    {
      files: ['global.d.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [
      2, { indentMode: 2, ignoreTernaryOperator: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2, { extensions: ['js', 'jsx', 'ts', 'tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string':
    [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
  },
  globals: {
    __IS_DEV__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:react-native/all',
    // 'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  // parser: 'babel-eslint',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'arrow-body-style': 'error',
    'arrow-spacing': ['warn', { before: true, after: true }],
    'comma-dangle': 'off',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'consistent-return': 'warn',
    curly: ['error', 'multi-line', 'consistent'],
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',

    'implicit-arrow-linebreak': 'off',
    'import/exports-last': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'keyword-spacing': 'error',
    'max-len': 'off',
    'max-nested-callbacks': ['error', { max: 3 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'max-params': ['error', { max: 4 }],
    'no-console': 'off',
    'no-empty-function': 'warn',
    'no-floating-decimal': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-underscore-dangle': 'off',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'off',
    'no-shadow': 'warn',
    'no-trailing-spaces': ['error'],
    'react/no-unused-prop-types': 'warn',
    'no-var': 'warn',
    'no-void': 'warn',
    'no-duplicate-imports': 'error',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'warn',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: 'off',
    radix: 'off',
    'react-native/no-inline-styles': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'warn',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/style-prop-object': 'off',
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'vars-on-top': 'off',
    yoda: 'error',
    // disable react/jsx-indent
    'react/jsx-indent': 'off',
    // disable react/jsx-closing-tag-location
    'react/jsx-closing-tag-location': 'off',
    // disable react/jsx-indent-props
    'react/jsx-indent-props': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~/assets', './assets'],
          ['~/src', './src'],
          ['~/theme', './src/theme'],
          ['~/components', './src/components'],
          ['~/navigation', './src/navigation'],
          ['~/screens', './src/screens'],
          ['~/slices', './src/redux/slices'],
          ['~/utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['node_modules', 'android', 'ios', '**/*.js', '**/*.d.ts'],
};

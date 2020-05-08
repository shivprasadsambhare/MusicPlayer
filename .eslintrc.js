module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      "node": {
        "paths": ["src"]
      },
      webpack: {
        config: 'webpack.config.dev.js',
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    __: true,
  },
  plugins: ['import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
    'no-confusing-arrow': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-duplicates': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for':'off',
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    "import/no-dynamic-require": "off",
    'func-names': "off",
    "no-use-before-define": "off",
    "consistent-return": "off",
    'react/jsx-no-target-blank': 'warn',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-danger': 'off',
    'max-len': 'off',
    'no-useless-escape': 'off',
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    // 'react/jsx-closing-bracket-location': 'off',
    // 'react/jsx-closing-tag-location': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'jsx-a11y/href-no-hash': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'import/no-cycle': 'off',
    'prefer-destructuring': ['error', {
      'array': false,
      'object': false
    }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    // "react/jsx-curly-brace-presence": "warn",
    // "react/jsx-indent": "warn",
    // "import/named":"warn",
  },
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    /**
     * @see https://github.com/import-js/eslint-plugin-import/issues/422
     */
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    /**
     * singleQuote setting
     * @see https://stackoverflow.com/questions/57343517/how-to-disable-eslintprettier-prettier-single-quotes-error
     *
     * windows system endOfLine
     * @see https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
     */
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    /**
     * @see https://stackoverflow.com/questions/55614983/jsx-not-allowed-in-files-with-extension-tsxeslintreact-jsx-filename-extensio
     */
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    /**
     * @see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

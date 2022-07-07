module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-unused-vars': 1,
    'capitalized-comments': 1,
    'arrow-parens': 1,
    'no-confusing-arrow': 1,
    'no-unused-expressions': 1,
    'block-scoped-var': 2,
    camelcase: 2,
  },
};

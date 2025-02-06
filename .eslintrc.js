module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js handles React in scope
      '@typescript-eslint/no-unused-vars': ['error'],
      'jsx-a11y/alt-text': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  
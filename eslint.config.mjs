import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'prettier'],
    plugins: ['check-file', 'n', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'comma-dangle': 'off',
      'no-console': 'warn',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      'prefer-destructuring': ['warn', { object: true, array: true }],
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_*|^(req|res|next|val)',
          args: 'after-used',
          argsIgnorePattern: '^_*|^(req|res|next|val)',
        },
      ],
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      semi: ['error'],
      quotes: ['error', 'single'],
      'n/no-process-env': ['error'],
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/!^[.*': 'KEBAB_CASE',
        },
      ],
    },
  }),
];

export default eslintConfig;

import { defineConfig } from 'eslint-define-config';
import next from 'eslint-config-next';
import typescriptEslintRecommended from '@typescript-eslint/eslint-plugin/dist/configs/recommended';

export default defineConfig([
  ...next,
  ...typescriptEslintRecommended,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-var': 'error',
      'next/next/no-img-element': 'off',
    },
  },
]);
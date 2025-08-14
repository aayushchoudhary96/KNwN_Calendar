import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: { sourceType: 'module' }
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      import: eslintPluginImport
    },
    rules: {
      'import/order': 'error'
    }
  }
];

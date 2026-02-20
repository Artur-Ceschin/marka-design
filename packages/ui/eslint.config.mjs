import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  // Ignore build output and deps
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.{js,mjs,cjs,ts}'],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // React
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // React 17+ new JSX transform — no need to import React in scope
      'react/react-in-jsx-scope': 'off',
      // TypeScript covers prop types
      'react/prop-types': 'off',

      // Prefer explicit return types only for exported functions
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Allow `_`-prefixed unused vars
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  // Prettier must be last — disables all formatting rules
  prettierConfig,
)

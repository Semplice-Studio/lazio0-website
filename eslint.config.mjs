import stylistic from '@stylistic/eslint-plugin'
import stylisticTS from '@stylistic/eslint-plugin-ts'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

import withNuxt from './.nuxt/eslint.config.mjs'

const vueAttributesOrder = [
  'DEFINITION',
  'CONDITIONALS',
  'LIST_RENDERING',
  'RENDER_MODIFIERS',
  ['UNIQUE', 'GLOBAL'],
  'TWO_WAY_BINDING',
  'OTHER_DIRECTIVES',
  'ATTR_SHORTHAND_BOOL',
  'ATTR_STATIC',
  'ATTR_DYNAMIC',
  'EVENTS',
  'CONTENT',
  'SLOT'
]

export default withNuxt([
  {
    ignores: ['.nuxt']
  },
  {
    plugins: {
      '@stylistic/ts': stylisticTS,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports
    },
    rules: {
      '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-debugger': process.env.NODE_ENV === 'develop' ? 'off' : 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
      'vue/attributes-order': ['error', { alphabetical: true, order: vueAttributesOrder }],
      'vue/html-closing-bracket-spacing': 'error',
      'vue/html-indent': 'error',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    }
  },
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  stylistic.configs.customize({
    arrowParens: true,
    braceStyle: '1tbs',
    commaDangle: 'never'
  })
])

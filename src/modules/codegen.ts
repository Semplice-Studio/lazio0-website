import type { CodegenConfig } from '@graphql-codegen/cli'
import { generate } from '@graphql-codegen/cli'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'graphql-codegen',
    configKey: 'codegen'
  },
  defaults: {
    documents: ['./src/graphql/**/*.gql'],
    generates: {
      'src/graphql/index.ts': {
        plugins: [
          { add: { content: '/* eslint-disable */' } },
          'typescript',
          'typescript-operations'
        ],
        config: {
          dedupeFragments: true,
          dedupeOperationSuffix: true,
          documentMode: 'documentNodeImportFragments',
          enumsAsTypes: false,
          includeDirectives: true,
          includeEnums: true,
          includeScalars: true,
          maybeValue: 'T',
          mergeFragmentTypes: true,
          skipTypename: true
        }
      }
    },
    overwrite: true
  } as CodegenConfig,
  setup(config, nuxt) {
    if (!nuxt.options.dev) return
    nuxt.hook('build:done', () => {
      try {
        generate(config)
      } catch {} // eslint-disable-line
    })
    nuxt.hook('builder:watch', (_, path) => {
      if (!['.graphql', '.gql'].some((ext) => path.endsWith(ext))) return
      try {
        generate(config)
      } catch {} // eslint-disable-line
    })
  }
})

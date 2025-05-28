import graphql from '@rollup/plugin-graphql'
import { defineNuxtConfig } from 'nuxt/config'

import { defaultLocale, locales } from './src/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  codegen: {
    schema: process.env.CRAFT_GQL_SCHEMA
  },
  compatibilityDate: '2024-11-01',
  css: [
    // 'bootstrap-italia/dist/css/bootstrap-italia.min.css'
    // 'bootstrap-italia/src/scss/bootstrap-italia.scss'
    '@/styles/main.scss'
  ],
  device: {
    refreshOnResize: true
  },
  devtools: {
    enabled: true
  },
  i18n: {
    baseUrl: process.env.NUXT_URL,
    defaultLocale,
    locales,
    lazy: true,
    langDir: 'i18n/locales',
    strategy: 'prefix',
    restructureDir: false
  },
  image: {
    domains: [process.env.CRAFT_URL as string]
    // provider: 'ipx'
  },
  modules: [
    '@bootstrap-vue-next/nuxt',
    '@nuxt/eslint',
    // '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@nuxtjs/stylelint-module',
    'nuxt-svgo',
    'nuxt-swiper'
  ],
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
      stage: process.env.STAGE,
      craftURL: process.env.CRAFT_URL,
      craftGQLSchema: process.env.CRAFT_GQL_SCHEMA,
      noIndex: process.env.STAGE !== 'production',
      scripts: {
        googleTagManager: {
          id: process.env.NUXT_PUBLIC_SCRIPTS_GOOGLE_TAG_MANAGER_ID
        }
      }
    }
  },
  scripts: {
    registry: {
      googleTagManager: true
    }
  },
  srcDir: 'src/',
  svgo: {
    autoImportPath: false,
    defaultImport: 'component',
    svgo: false
  },
  vite: {
    plugins: [graphql()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '$sass-silent: true;',
          api: 'modern-compiler',
          quietDeps: true
        }
      }
    }
  },
  watch: ['uno.config.ts', 'src/i18n']
})

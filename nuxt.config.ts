import graphql from '@rollup/plugin-graphql'
import { defineNuxtConfig } from 'nuxt/config'

import { defaultLocale, locales } from './src/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  codegen: {
    schema: process.env.CRAFT_GQL_SCHEMA
  },
  compatibilityDate: '2024-11-01',
  css: [
    'bootstrap-italia/dist/css/bootstrap-italia.min.css'
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
    strategy: 'no_prefix',
    restructureDir: false
  },
  image: {
    domains: [process.env.STRAPI_URL as string],
    provider: 'ipx'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
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
    plugins: [graphql()]
  },
  watch: ['uno.config.ts', 'src/i18n']
})

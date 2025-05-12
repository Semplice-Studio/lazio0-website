import type { NuxtI18nOptions } from '@nuxtjs/i18n'

import translations from './locales'

export const defaultLocale = (translations.find((entry) => entry.default)?.code || translations[0]?.code || 'en') as NuxtI18nOptions['defaultLocale']
export const locales = translations.map(({ code, file, language, name }) => ({ code, file, language, name }))

import type { DocumentNode } from 'graphql'
import { print } from 'graphql'

import type { CraftGraphQLResponseError, CraftGraphqlVariables } from '@/types'

export function useCraftGraphQL() {
  const nuxt = useNuxtApp()
  const config = useRuntimeConfig()
  const { previewToken } = usePreview()

  return <T> (query: string | DocumentNode, variables?: CraftGraphqlVariables): Promise<T> => {
    const queryAsString = typeof query === 'string' ? query : print(query)

    try {
      const headers: Record<string, unknown> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

      if (previewToken.value) {
        headers['X-Craft-Token'] = previewToken.value
      }

      return $fetch<T>(config.public.craftGQLSchema, {
        retry: 0,
        method: 'POST',
        body: {
          query: queryAsString,
          variables
        },
        headers: headers as HeadersInit
      })
    } catch (e) {
      const error = e as CraftGraphQLResponseError
      const craftErrors = error.response?._data?.errors ?? [
        { message: error.message }
      ]

      nuxt.hooks.callHook('craft:error', craftErrors)
      throw craftErrors
    }
  }
}

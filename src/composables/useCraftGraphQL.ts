import type { DocumentNode } from 'graphql'
import { print } from 'graphql'

import type { CraftGraphQLResponseError } from '@/types'

export function useCraftGraphQL() {
  const nuxt = useNuxtApp()
  const config = useRuntimeConfig()

  return <T> (query: string | DocumentNode, variables?: Record<string, unknown>): Promise<T> => {
    const queryAsString = typeof query === 'string' ? query : print(query)

    try {
      return $fetch<T>(config.public.craftGQLSchema, {
        retry: 0,
        method: 'POST',
        body: {
          query: queryAsString,
          variables
        },
        headers: {
          accept: 'application/json'
        }
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

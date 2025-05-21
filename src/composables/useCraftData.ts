import type { DocumentNode } from 'graphql'
import type { AsyncDataOptions } from 'nuxt/app'

import type { CraftGraphqlVariables } from '@/types'

export async function useCraftData<T>(cacheKey: string, query: DocumentNode, variables: MaybeRefOrGetter<CraftGraphqlVariables>, options?: AsyncDataOptions<T>) {
  const gql = useCraftGraphQL()
  const gqlVariables = computed(() => toValue(variables))

  return useAsyncData<T>(cacheKey, async () => {
    const { data } = await gql<{ data: T }>(query, gqlVariables.value)
    return data
  }, options)
}

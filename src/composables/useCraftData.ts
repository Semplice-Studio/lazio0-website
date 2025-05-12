import type { StrapiGraphqlVariables } from '@nuxtjs/strapi'
import type { DocumentNode } from 'graphql'
import type { AsyncDataOptions } from 'nuxt/app'

export async function useCraftData<T>(cacheKey: string, query: DocumentNode, variables?: MaybeRefOrGetter<StrapiGraphqlVariables>, options?: AsyncDataOptions<T>) {
  const gql = useCraftGraphQL()
  const gqlVariables = computed(() => toValue(variables))
  const asyncData = await useAsyncData<T>(cacheKey, async () => {
    const { data } = await gql<{ data: T }>(query, gqlVariables.value)
    return data
  }, options)

  watch(gqlVariables, asyncData.refresh, { deep: true })

  return asyncData
}

import type { DocumentNode } from 'graphql'
import type { AsyncDataOptions } from 'nuxt/app'

import type { CraftGraphqlVariables } from '@/types'

export async function useCraftData<T>(cacheKey: MaybeRefOrGetter<string>, query: MaybeRefOrGetter<DocumentNode>, variables: MaybeRefOrGetter<CraftGraphqlVariables>, options?: AsyncDataOptions<T>) {
  const gql = useCraftGraphQL()
  const { previewToken, isPreview } = usePreview()
  const gqlVariables = computed(() => toValue(variables))

  const asyncData = useAsyncData<T>(cacheKey, async () => {
    const { data } = await gql<{ data: T }>(toValue(query), gqlVariables.value)
    return data
  }, options)

  watch([previewToken, isPreview, query, gqlVariables], () => asyncData.refresh(), { deep: true })

  return asyncData
}

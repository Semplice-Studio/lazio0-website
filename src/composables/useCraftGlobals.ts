import type { DocumentNode } from 'graphql'

import type { CraftGraphqlVariables } from '@/types'

export type CraftGlobalSetResponse = {
  globalSet?: Record<string, unknown>
}

export async function useCraftGlobals<T = Record<string, unknown>>(cacheKey: string, gql: DocumentNode, variables?: CraftGraphqlVariables) {
  const { locale } = useI18n()

  const query = await useCraftData<CraftGlobalSetResponse>(cacheKey, gql, {
    ...variables
  }, {
    watch: [locale]
  })

  console.log('useCraftGlobals', query.data.value)

  const data = computed(() => {
    if (!query.data.value?.globalSet) return []
    return query.data.value?.globalSet
  }) as Ref<T>

  return {
    // data: data.value,
    data,
    error: query.error,
    status: query.status
  }
}

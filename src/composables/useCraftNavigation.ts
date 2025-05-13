import type { DocumentNode } from 'graphql'

import type { NodeInterface } from '@/graphql'

export type CraftNavigationResponse = {
  navigationNodes?: NodeInterface[]
}

export async function useCraftNavigation(cacheKey: string, gql: DocumentNode, variables?: Record<string, unknown>) {
  const { locale } = useI18n()

  const query = await useCraftData<CraftNavigationResponse>(cacheKey, gql, {
    ...variables
  }, {
    watch: [locale]
  })

  const data = computed(() => {
    if (!query.data.value?.navigationNodes) return []
    return query.data.value?.navigationNodes
  }) as Ref<NodeInterface[]>

  return {
    data: data.value,
    error: query.error,
    status: query.status
  }
}

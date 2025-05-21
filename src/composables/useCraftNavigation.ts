import type { DocumentNode } from 'graphql'

import type { NodeInterface } from '@/graphql'
import type { CraftGraphqlVariables } from '@/types'

export type CraftNavigationResponse = {
  navigationNodes?: NodeInterface[]
}

export async function useCraftNavigation(cacheKey: string, gql: DocumentNode, variables?: CraftGraphqlVariables) {
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
    // data: data.value,
    data,
    error: query.error,
    status: query.status
  }
}

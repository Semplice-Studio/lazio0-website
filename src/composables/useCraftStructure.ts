import type { DocumentNode } from 'graphql'

import type { CraftGraphqlVariables } from '@/types'

export type CraftStructureResponse = {
  entries?: Record<string, unknown>[]
}

export async function useCraftStructure<T = Record<string, unknown>>(cacheKey: string, gql: DocumentNode, variables: MaybeRefOrGetter<CraftGraphqlVariables> = {}) {
  const { locale } = useI18n()
  const key = ref(Date.now())

  const { error, status, ...query } = await useCraftData<CraftStructureResponse>(cacheKey, gql, variables, {
    watch: [locale, variables]
  })

  const data = computed(() => {
    if (!query.data.value?.entries) return []
    return Array.isArray(query.data.value.entries)
      ? query.data.value.entries
      : [query.data.value.entries]
  }) as Ref<T[]>

  if (status.value === 'success' && !data.value) {
    throw createError({ statusCode: 404 })
  }

  watch(data, () => key.value = Date.now())

  return {
    data,
    key,
    error,
    status
  }
}

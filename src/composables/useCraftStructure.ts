import type { DocumentNode } from 'graphql'

export type CraftStructureResponse = {
  entries?: Record<string, unknown>[]
}

export async function useCraftStructure<T = Record<string, unknown>>(cacheKey: string, gql: DocumentNode, variables?: Record<string, unknown>) {
  const { locale } = useI18n()

  const query = await useCraftData<CraftStructureResponse>(cacheKey, gql, {
    ...variables
  }, {
    watch: [locale]
  })

  const data = computed(() => {
    if (!query.data.value?.entries) return []
    return Array.isArray(query.data.value.entries)
      ? query.data.value.entries
      : [query.data.value.entries]
  }) as Ref<T[]>

  if (query.status.value === 'success' && !data.value) {
    throw createError({ statusCode: 404 })
  }

  return {
    data: data.value,
    error: query.error,
    status: query.status
  }
}

import type { DocumentNode } from 'graphql'

export type CraftPageResponse = {
  entries?: Record<string, unknown>[]
}

export async function useCraftPage<T = Record<string, unknown>>(cacheKey: string, gql: DocumentNode, variables?: Record<string, unknown>) {
  const { locale } = useI18n()

  const query = await useCraftData<CraftPageResponse>(cacheKey, gql, {
    ...variables
  }, {
    watch: [locale]
  })

  const data = computed(() => {
    if (!query.data.value?.entries) return
    return Array.isArray(query.data.value.entries)
      ? query.data.value.entries[0]
      : query.data.value.entries
  }) as Ref<T>

  if (query.status.value === 'success' && !data.value) {
    throw createError({ statusCode: 404 })
  }

  useCraftSeo(data as Ref<Partial<T>>)

  return {
    data: data.value,
    error: query.error,
    status: query.status
  }
}

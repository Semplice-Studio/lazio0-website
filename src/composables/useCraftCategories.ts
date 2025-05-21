import type { DocumentNode } from 'graphql'

export type CraftCategoriesResponse = {
  categories?: Record<string, unknown>[]
}

export async function useCraftCategories<T = Record<string, unknown>>(cacheKey: string, gql: DocumentNode, variables?: Record<string, unknown>) {
  const { locale } = useI18n()

  const query = await useCraftData<CraftCategoriesResponse>(cacheKey, gql, {
    ...variables
  }, {
    watch: [locale]
  })

  const data = computed(() => {
    if (!query.data.value?.categories) return []
    return Array.isArray(query.data.value.categories)
      ? query.data.value.categories
      : [query.data.value.categories]
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

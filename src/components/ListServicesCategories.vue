<template>
  <div v-if="status === 'success'" class="mb-5">
    <div class="row">
      <div class="col-12">
        <Chip v-for="category in categories" :key="category.id" large simple color="primary" tag="button">{{ category.title }}</Chip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CategoryInterface } from '@/graphql'
import ListServicesCategoriesGQL from '@/graphql/ListServicesCategories.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const { data: categories, status } = await useCraftCategories<CategoryInterface>('services-categories', ListServicesCategoriesGQL, { })
</script>

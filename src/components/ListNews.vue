<script setup lang="ts">
import type { CardNewsFragment, CategoryInterface } from '@/graphql'
import ListNewsGQL from '@/graphql/ListNews.gql'
import ListNewsAllGQL from '@/graphql/ListNewsAll.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const props = defineProps({
  categories: {
    type: Array as PropType<CategoryInterface[]>,
    default: () => []
  },
  search: {
    type: String,
    default: ''
  }
})

const gqlVariables = computed(() => ({
  search: props.search,
  ...(props.categories && props.categories.length > 0 && { categorySlugs: props.categories })
}))

const cacheKey = computed(() => {
  return 'list-news-' + JSON.stringify(gqlVariables.value) + '-' + props.search
})

const gqlQuery = computed(() => {
  return props.categories && props.categories.length > 0 ? ListNewsGQL : ListNewsAllGQL
})

const { data: items } = await useCraftStructure<CardNewsFragment>(
  cacheKey,
  gqlQuery,
  gqlVariables
)
</script>

<template>
  <Transition mode="out-in" name="fade">
    <div :key="cacheKey" class="row">
      <div v-for="(item, index) in items" :key="index" class="col-12 col-lg-4">
        <div class="card-wrapper">
          <CardNews v-bind="item" />
        </div>
      </div>
    </div>
  </Transition>
</template>

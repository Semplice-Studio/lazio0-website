<script setup lang="ts">
import type { CardNewsFragment, CategoryInterface } from '@/graphql'
import ListNewsGQL from '@/graphql/ListNews.gql'

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
  categorySlugs: props.categories
}))

const { data: items, key } = await useCraftStructure<CardNewsFragment>(
  'list-news',
  ListNewsGQL,
  gqlVariables
)
</script>

<template>
  <Transition mode="out-in" name="fade">
    <div :key="key" class="row">
      <div v-for="(item, index) in items" :key="index" class="col-12 col-lg-4">
        <div class="card-wrapper">
          <CardNews v-bind="item" />
        </div>
      </div>
    </div>
  </Transition>
</template>

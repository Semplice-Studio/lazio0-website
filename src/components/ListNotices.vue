<script setup lang="ts">
import type { CardNoticesFragment, CategoryInterface } from '@/graphql'
import ListNoticesGQL from '@/graphql/ListNotices.gql'
import ListNoticesAllGQL from '@/graphql/ListNoticesAll.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const props = defineProps({
  search: {
    type: String,
    default: ''
  },
  categories: {
    type: Array as PropType<CategoryInterface[]>,
    default: () => []
  }
})

const gqlVariables = computed(() => ({
  search: props.search,
  ...(props.categories && props.categories.length > 0 && { categorySlugs: props.categories })
}))

const cacheKey = computed(() => {
  return 'list-notices-' + JSON.stringify(gqlVariables.value) + '-' + props.search
})

const gqlQuery = computed(() => {
  return props.categories && props.categories.length > 0 ? ListNoticesGQL : ListNoticesAllGQL
})

const { data: items } = await useCraftStructure<CardNoticesFragment>(
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
          <CardNotice v-bind="item" />
        </div>
      </div>
    </div>
  </Transition>
</template>

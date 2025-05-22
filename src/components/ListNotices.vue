<script setup lang="ts">
import type { CardNoticesFragment, CategoryInterface } from '@/graphql'
import ListNoticesGQL from '@/graphql/ListNotices.gql'

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
  categorySlugs: props.categories
}))

const { data: items, key } = await useCraftStructure<CardNoticesFragment>(
  'list-notices',
  ListNoticesGQL,
  gqlVariables
)
</script>

<template>
  <Transition mode="out-in" name="fade">
    <div :key="key" class="row">
      <div v-for="(item, index) in items" :key="index" class="col-12 col-lg-4">
        <div class="card-wrapper">
          <CardNotice v-bind="item" />
        </div>
      </div>
    </div>
  </Transition>
</template>

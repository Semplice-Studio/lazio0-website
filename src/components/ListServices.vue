<script setup lang="ts">
import type { CardServicesFragment, CategoryInterface } from '@/graphql'
import ListServicesGQL from '@/graphql/ListServices.gql'
import ListServicesAllGQL from '@/graphql/ListServicesAll.gql'

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
  return 'list-services-' + JSON.stringify(gqlVariables.value) + '-' + props.search
})

const gqlQuery = computed(() => {
  return props.categories && props.categories.length > 0 ? ListServicesGQL : ListServicesAllGQL
})

const { data: items } = await useCraftStructure<CardServicesFragment>(
  cacheKey,
  gqlQuery,
  gqlVariables
)
</script>

<template>
  <Transition mode="out-in" name="fade">
    <div :key="cacheKey" class="row">
      <div v-for="(service, index) in items" :key="index" class="col-12 col-lg-4">
        <div class="card-wrapper">
          <CardService v-bind="service" />
        </div>
      </div>
    </div>
  </Transition>
</template>

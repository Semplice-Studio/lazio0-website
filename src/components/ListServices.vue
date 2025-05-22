<script setup lang="ts">
import type { CardServicesFragment, CategoryInterface } from '@/graphql'
import ListServicesGQL from '@/graphql/ListServices.gql'

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

const { data: services, key } = await useCraftStructure<CardServicesFragment>(
  'list-services',
  ListServicesGQL,
  gqlVariables
)
</script>

<template>
  <Transition mode="out-in" name="fade">
    <div :key="key" class="row">
      <div v-for="(service, index) in services" :key="index" class="col-12 col-lg-4">
        <div class="card-wrapper">
          <CardService v-bind="service" />
        </div>
      </div>
    </div>
  </Transition>
</template>

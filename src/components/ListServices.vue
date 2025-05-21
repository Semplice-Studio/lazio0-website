<script setup lang="ts">
import type { CardServicesFragment } from '@/graphql'
import ListServicesGQL from '@/graphql/ListServices.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})

const gqlVariables = computed(() => ({
  search: props.search
}))

const { data: services } = await useCraftStructure<CardServicesFragment>(
  'list-services',
  ListServicesGQL,
  gqlVariables
)
</script>

<template>
  <div>
    <Transition mode="out-in" name="fade">
      <div :key="search" class="row">
        <div v-for="(service, index) in services" :key="index" class="col-12 col-lg-4">
          <div class="card-wrapper">
            <CardService v-bind="service" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { ServicesCardFragment } from '@/graphql'
import ListServicesGQL from '@/graphql/ListServices.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const { data: services, status } = await useCraftStructure<ServicesCardFragment>('list-services', ListServicesGQL, { })
</script>

<template>
  <div v-if="status === 'success'">
    <div class="row">
      <div v-for="(service, index) in services" :key="index" class="col-12 col-lg-4">
        <CardService v-bind="service" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardNoticesFragment } from '@/graphql'
import ListNoticesGQL from '@/graphql/ListNotices.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const { data: items, status } = await useCraftStructure<CardNoticesFragment>('list-notices', ListNoticesGQL, { })
</script>

<template>
  <div v-if="status === 'success'">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-12 col-lg-4">
        <CardNotice v-bind="item" />
      </div>
    </div>
  </div>
</template>

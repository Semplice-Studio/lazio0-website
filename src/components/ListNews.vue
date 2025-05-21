<script setup lang="ts">
import type { CardNewsFragment } from '@/graphql'
import ListNewsGQL from '@/graphql/ListNews.gql'

// const route = useRoute()
// const slug = route.params.slug as string

const { data: items, status } = await useCraftStructure<CardNewsFragment>('list-news', ListNewsGQL, { })
</script>

<template>
  <div v-if="status === 'success'">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-12 col-lg-4">
        <div class="card-wrapper">
          <CardNews v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

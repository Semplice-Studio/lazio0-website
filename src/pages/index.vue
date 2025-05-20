<script setup lang="ts">
import type { CompanyEntryFragment } from '@/graphql'
import PageHomeGQL from '@/graphql/PageHome.gql'

const { data, status } = await useCraftPage<CompanyEntryFragment>('home', PageHomeGQL)
</script>

<template>
  <div v-if="status === 'success'">
    <section class="container my-5">
      <Blocks :blocks="data.companyBlocks" />
    </section>
  </div>
</template>

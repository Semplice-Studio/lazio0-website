<script setup lang="ts">
import type { CompanyEntryFragment } from '@/graphql'
import PageHomeGQL from '@/graphql/PageHome.gql'

const { data, status } = await useCraftPage<CompanyEntryFragment>('home', PageHomeGQL)
</script>

<template>
  <div v-if="status === 'success'">
    <Blocks :blocks="data.companyBlocks" />
  </div>
</template>

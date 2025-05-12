<script setup lang="ts">
import type { CompanyEntryFragment } from '@/graphql'
import PageHomeGQL from '@/graphql/PageHome.gql'

const { data, status } = await useCraftPage<CompanyEntryFragment>('home', PageHomeGQL)
</script>

<template>
  <div v-if="status === 'success'">
    <pre>
      {{ data.title }}
    </pre>
    <button class="btn btn-primary" type="button">Etichetta pulsante</button>
  </div>
</template>

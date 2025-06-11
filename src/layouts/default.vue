<template>
  <main>
    <SiteHeader />
    <slot />
    <SiteFooter />
  </main>
</template>

<script setup lang="ts">
// import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'

import type { Seo_GlobalSet } from '@/graphql'
import GetSEO from '@/graphql/GetSEO.gql'

const { data: seo } = await useCraftGlobals<Seo_GlobalSet>('seo', GetSEO)
useCraftSeo(seo)
</script>

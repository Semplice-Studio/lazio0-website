<template>
  <Card
    no-wrapper
    teaser
    class="card-link card-teaser-info shadow-sm rounded"
  >
    <CraftLink class="text-decoration-none" :link="buttonLink">
      <BCardBody>
        <div class="categoryicon-top mb-2 text-primary">
          <Icon v-if="buttonLink.type === 'asset'" icon="it-clip" />
          <Icon v-else-if="buttonLink.type === 'entry'" icon="it-link" />
          <Icon v-else icon="it-external-link" />
          <BCardTitle class="mb-0" tag="h5">
            {{ buttonLink.label || buttonLink.defaultLabel }}
          </BCardTitle>
        </div>
        <BCardText>
          <p class="ps-4 text-primary font-sans-serif">Descrizione</p>
        </BCardText>
      </BCardBody>
    </CraftLink>
  </Card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { ButtonLinkFragment } from '@/graphql'

defineProps({
  buttonLink: {
    type: Array as PropType<ButtonLinkFragment>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.card-link {
  border-radius: 0;
  background-color: rgb(0 0 0 / 0.04);
  box-shadow: none;
}
</style>

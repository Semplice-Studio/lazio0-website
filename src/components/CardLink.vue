<template>
  <Card
    no-wrapper
    teaser
    class="card-link"
  >
    <BCardBody>
      <div class="categoryicon-top text-primary">
        <Icon icon="it-clip" />
        <!-- <span class="text">{{ buttonLink.label || buttonLink.defaultLabel }}</span> -->
        <BCardTitle class="mb-0" tag="h5">
          {{ buttonLink.label || buttonLink.defaultLabel }}
        </BCardTitle>
      </div>
      <BCardText>
        <p class="font-sans-serif">Descrizione</p>
      </BCardText>
    </BCardBody>
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

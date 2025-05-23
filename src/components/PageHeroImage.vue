<template>
  <section v-if="image" class="it-hero-wrapper">
    <div class="img-responsive-wrapper">
      <div class="img-responsive">
        <div class="img-wrapper">
          <CraftImage
            v-bind="image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ImageFullFragment } from '@/graphql'

defineProps({
  image: {
    type: Object as PropType<ImageFullFragment>,
    default: null
  }
})
</script>

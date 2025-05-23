<template>
  <Section
    :id="uid"
    class="it-page-section px-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div v-if="title" class="row mb-5">
      <div class="col-12">
        <h2 :id="`title-${uid}`" class="primary-color-a9 mb-3">{{ title }}</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, index) in medias" :key="index" class="col-12" :class="item.column">
        <template v-if="item.image && item.image.length > 0">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper">
                <CraftImage  v-bind="item.image?.[0]" />
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="item.video && item.video.length > 0">
          <CraftVideo v-bind="item.video?.[0]" auto-play loop :controls="false" />
        </template>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { MediaFragment } from '@/graphql'

defineProps({
  title: {
    type: String,
    default: ''
  },
  medias: {
    type: Array as PropType<MediaFragment[]>,
    default: () => []
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>

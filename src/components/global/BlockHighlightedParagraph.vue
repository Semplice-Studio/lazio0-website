<template>
  <Section
    :id="uid"
    class="it-page-section"
    :aria-labelledby="`title-${uid}`"
    :class="{
      'lightgrey-bg-b4': evidence
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 :id="`title-${uid}`" class="primary-color-a9 mb-3">{{ title }}</h2>
          <div v-if="htmlContent" class="text-md-left" v-html="htmlContent" />
          <Button
            v-if="buttonLink"
            :download="isAsset ? true : undefined"
            :href="!isNuxtLink ? href : undefined"
            :rel="rel"
            :tag="tagComponent"
            :target="target"
            :to="isNuxtLink ? to : undefined"
          >
            <slot>
              {{ label }}
            </slot>
          </Button>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { ButtonLinkFragment } from '@/graphql'

const props = defineProps({
  buttonLink: {
    type: Object as PropType<ButtonLinkFragment>,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  htmlContent: {
    type: String,
    default: ''
  },
  evidence: {
    type: Boolean,
    default: false
  },
  uid: {
    type: String,
    default: ''
  }
})

const {
  tagComponent,
  href,
  to,
  label,
  isNuxtLink,
  rel,
  target,
  isAsset
} = useCraftLink(props.buttonLink)
</script>

<style scoped>
.text-md-left :deep(p) {
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>

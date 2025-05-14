<template>
  <Section
    :id="uid"
    class="it-page-section"
    :aria-labelledby="`title-${uid}`"
    :class="{
      'p-0': !evidence
    }"
    :color="evidence && 'muted' || undefined"
  >
    <div class="row">
      <div class="col-12">
        <h2 :id="`title-${uid}`">{{ title }}</h2>
        <div v-if="htmlContent" class="text-md-left" v-html="htmlContent" />
        <Button
          v-if="link"
          :aria-label="link.ariaLabel"
          :to="link.url"
        >
          {{ link.label }}
        </Button>
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

const link = useCraftLink(props.buttonLink)
</script>

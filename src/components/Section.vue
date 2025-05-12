<template>
  <section
    class="section"
    :class="{
      'section-image': image,
      'section-neutral': neutral,
      'section-muted': muted,
      [`section-${color}`]: color,
    }"
    :style="backgroundStyle"
  >
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface SectionProps {
  color?: 'primary' | 'neutral' | 'muted' | string
  image?: string
  neutral?: boolean
  muted?: boolean
}

const props = defineProps<SectionProps>()

const {
  color,
  image,
  neutral,
  muted
} = toRefs(props)

// Warn deprecated props
watchEffect(() => {
  if (neutral.value) {
    console.warn(
      '⚠️ [Section] "neutral" is deprecated. Use color="neutral" instead.'
    )
  }
  if (muted.value) {
    console.warn(
      '⚠️ [Section] "muted" is deprecated. Use color="muted" instead.'
    )
  }
})

const backgroundStyle = computed(() => (image.value ? { backgroundImage: `url(${image.value})` } : {}))
</script>

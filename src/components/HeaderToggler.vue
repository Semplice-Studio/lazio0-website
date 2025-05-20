<script setup lang="ts">
import { NAVBAR, SLIM } from '@/composables/useHeaderContext'

const props = defineProps<{
  tag?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  isOpen?: boolean
}>()

const headerType = useHeaderContext()

// Compute tag and type defaults
// const tag = computed(() => props.tag ?? (headerType === SLIM ? 'a' : 'button'))
// const buttonType = computed(() => props.type ?? (headerType === SLIM ? undefined : 'button'))

const ariaExpanded = computed(() => String(props.isOpen ?? false))

onMounted(() => {
  document.querySelectorAll('.container-fluid').forEach((el) => {
    el.classList.remove('container-fluid')
  })
})
</script>

<template>
  <BNavbarToggle
    :aria-expanded="ariaExpanded"
    :class="{
      'it-opener d-lg-none': headerType === SLIM,
      'custom-navbar-toggler': headerType === NAVBAR
    }"
  >
    <!-- :tag="tag"
  :type="buttonType" -->
    <slot />
  </BNavbarToggle>
</template>

<style lang="scss" scoped>
.navbar-toggler {
  padding: 0;
}
</style>

<script setup lang="ts">
import { NAVBAR } from '@/composables/useHeaderContext'

const props = withDefaults(defineProps<{
  megamenu?: boolean
  expand?: boolean | 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  megamenu: false,
  expand: false
})

const type = useHeaderContext()

const className = computed(() => {
  return {
    'it-header-slim-wrapper-content': type === 'slim',
    'it-header-center-content-wrapper': type === 'center',
    'has-megamenu': props.megamenu
  }
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <BNavbar
          v-if="type === NAVBAR"
          :class="className"
          :toggleable="expand"
        >
          <slot />
        </BNavbar>
        <div v-else :class="className">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
nav {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>

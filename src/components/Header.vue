<script setup lang="ts">
import type { HeaderType } from '@/composables/useHeaderContext'

interface HeaderProps {
  type: HeaderType
  small?: boolean
  theme?: 'light' | 'dark' | ''
}

const props = withDefaults(defineProps<HeaderProps>(), {
  small: false,
  theme: ''
})

provideHeaderContext(props.type)
</script>

<template>
  <div
    :class="{
      [`it-header-${type}-wrapper`]: type,
      'it-small-header': type === CENTER && small,
      [`theme-${theme}`]: type !== NAVBAR && theme,
      'theme-dark-mobile': type === NAVBAR && theme === 'dark',
      'theme-light-desk': type === NAVBAR && theme === 'light',
    }"
  >
    <slot />
  </div>
</template>

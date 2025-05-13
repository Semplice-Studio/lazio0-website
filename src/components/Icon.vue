<script setup lang="ts">

// import type { IconName, SVGRProps } from './assets/index'
// import { iconsCache, isBundledIcon, loadIcon } from './assets/index'
// import EmptyIcon from './EmptyIcon.vue'
import SVGSprites from 'bootstrap-italia/dist/svg/sprites.svg?url'

interface Props {
  icon: string
  title?: string
  color?: 'success' | 'warning' | 'danger' | 'note' | 'important' | string
  size?: 'xl' | 'lg' | '' | 'sm' | 'xs'
  padding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  color: '',
  size: '',
  padding: false
})

const iconName = computed(() => `${SVGSprites}#${props.icon}`)
</script>

<template>
  <!-- Bundled SVG loading placeholder -->
  <svg
    class="icon"
    role="img"
    :class="{
      [`icon-${color}`]: color,
      [`icon-${size}`]: size,
      'icon-padded': padding
    }"
    :title="title"
  >
    <use :href="iconName" />
  </svg>
</template>

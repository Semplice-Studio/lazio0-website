<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string | object
  expand?: boolean | string
  light?: boolean
  dark?: boolean
  fixed?: string
  sticky?: string
  color?: string
  container?: boolean | string
}>(), {
  tag: 'nav',
  container: 'fluid',
  expand: false
})

const getExpandClass = (expand: string | boolean) => {
  if (expand === false) {
    return false
  }
  if (expand === true || expand === 'xs') {
    return 'navbar-expand'
  }

  return `navbar-expand-${expand}`
}
</script>

<template>
  <component
    :is="tag"
    class="navbar"
    :class="[
      // Handle expand logic inline
      getExpandClass(expand),
      {
        'navbar-light': light,
        'navbar-dark': dark,
        [`bg-${color}`]: !!color,
        [`fixed-${fixed}`]: !!fixed,
        [`sticky-${sticky}`]: !!sticky
      }
    ]"
  >
    <div
      v-if="container"
      :class="container === true ? 'container' : `container-${container}`"
    >
      <slot />
    </div>
    <slot v-else />
  </component>
</template>

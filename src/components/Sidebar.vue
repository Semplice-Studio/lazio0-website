<script setup lang="ts">
export type SidebarProps = {
  tag?: string
  secondary?: boolean
  left?: boolean
  right?: boolean
  dark?: boolean
}

withDefaults(defineProps<SidebarProps>(), {
  tag: 'aside'
})
</script>

<template>
  <component
    :is="tag"
    v-if="!secondary"
    class="sidebar-wrapper"
    :class="{
      'it-line-left-side': left,
      'it-line-right-side': right,
      'theme-dark': dark
    }">
    <component
      :is="tag"
      class="sidebar-linklist-wrapper"
      :class="{ 'linklist-secondary': secondary }"
    />
    <slot />
  </component>

  <component
    :is="tag"
    v-else
    class="sidebar-wrapper"
    :class="{
      'it-line-left-side': left,
      'it-line-right-side': right,
      'theme-dark': dark
    }"
  >
    <slot />
  </component>
</template>

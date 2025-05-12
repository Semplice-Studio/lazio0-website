<template>
  <li>
    <component
      :is="tagComputed"
      class="list-item"
      :class="{
        active,
        disabled,
        header,
        divider,
        large,
        'medium': bold,
        'dropdown-item': inDropdown
      }"
      :href="href"
      :tabindex="inDropdown ? 0 : undefined"
    >
      <!-- :role="role" -->
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
interface LinkListItemProps {
  active?: boolean
  disabled?: boolean
  large?: boolean
  bold?: boolean
  header?: boolean
  divider?: boolean
  inDropdown?: boolean
  tag?: string
  href?: string
}

const props = withDefaults(defineProps<LinkListItemProps>(), {
  tag: 'div'
})

const tagComputed = computed(() => {
  if (props.header) return 'h3'
  if (props.divider) return 'span'
  return props.tag
})

// const role = computed(() => (attrs.onClick ? 'button' : inDropdown ? 'menuitem' : undefined))

// function onClick(event: MouseEvent) {
//   if (disabled) {
//     event.preventDefault()
//   }
// }
</script>

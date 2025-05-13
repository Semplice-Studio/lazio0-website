<script setup lang="ts">
import { ref } from 'vue'

interface DropdownProps {
  tag?: string
  inNavbar?: boolean
  textCenter?: boolean
  theme?: string
}

const props = withDefaults(defineProps<DropdownProps>(), {
  tag: 'div',
  inNavbar: false,
  textCenter: false
})

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <BDropdown
    menu-role="menu"
    :class=" {
      'text-center': textCenter
    }"
    :color="theme"
    :in-navbar="inNavbar"
    :is-open="isOpen"
    :nav="inNavbar"
    :toggle="toggle"
  >
    <template v-for="(vnode, index) in $slots.default?.()" :key="index">
      <component
        :is="vnode"
        v-bind="{ ...vnode.props, inNavbar: props.inNavbar }"
      />
    </template>
  </BDropdown>
</template>

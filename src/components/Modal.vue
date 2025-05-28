<template>
  <BModal v-model="visible" :size="size" :title="title">
    <slot />
  </BModal>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

interface ModalProps {
  open?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: false
})

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()

const visible = useVModel(props, 'open', emit)
</script>

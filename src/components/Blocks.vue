<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import type { PropType } from 'vue'

export type CraftMatrixField = (Record<string, unknown> & { typeHandle: string })

const props = defineProps({
  blocks: { type: Array as PropType<CraftMatrixField[]>, default: () => [] }
})

const components = computed(() => (props.blocks || []).reduce((acc, entry, i) => {
  if ('typeHandle' in entry) {
    const componentName = useChangeCase(entry.typeHandle, 'pascalCase')
    const { typeHandle, ...bindings } = entry
    acc.push({
      bindings,
      is: componentName.value,
      key: `entry-${i}-${typeHandle.toLowerCase()}`
    })
  }
  return acc
}, [] as { bindings: Record<string, unknown>, is: string, key: string }[]))
</script>

<template>
  <div v-if="components.length" class="blocks">
    <component
      :is="is"
      v-for="{ bindings, is, key }, index in components"
      :key="key"
      v-bind="bindings"
      :index="index"
    />
  </div>
</template>

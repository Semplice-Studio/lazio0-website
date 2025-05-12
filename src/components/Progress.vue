<script setup lang="ts">
const props = withDefaults(defineProps<{
  tag?: string | object
  value?: number | string
  label?: string
  indeterminate?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string
}>(), {
  value: 0,
  tag: 'div',
  indeterminate: false,
  color: 'primary'
})

const numericValue = Number(props.value)

if (!Number.isFinite(numericValue) && !props.indeterminate) {
  console.error(`The passed "value" is not a valid number. You passed "${props.value}"`)
}
</script>

<template>
  <component :is="tag" class="progress-bar-wrapper">
    <div v-if="label" class="progress-bar-label">
      <span class="visually-hidden">{{ label }}</span>
      {{ !indeterminate ? numericValue + '%' : '' }}
    </div>

    <component
      :is="tag"
      class="progress"
      :class="{
        'progress-indeterminate': indeterminate,
        'progress-color': color
      }"
    >
      <div
        aria-valuemax="100"
        aria-valuemin="0"
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="!indeterminate ? numericValue : undefined"
        :class="color ? `bg-${color}` : ''"
        :style="{ width: !indeterminate ? numericValue + '%' : undefined }"
      />
    </component>
  </component>
</template>

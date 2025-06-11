<script setup lang="ts">
interface AccordionBodyProps {
  tag?: string
  active?: boolean
}

withDefaults(defineProps<AccordionBodyProps>(), {
  tag: 'div',
  active: false
})
</script>

<template>
  <!-- <Transition
    enter-active-class="collapsing"
    enter-from-class="collapse"
    enter-to-class="collapse show"
    leave-active-class="collapsing"
    leave-from-class="collapse show"
    leave-to-class="collapse"
  > -->
  <!-- v-if="active" -->
  <component
    :is="tag"
    class="accordion-collapse collapse"
  >
    <div class="accordion-body">
      <slot />
    </div>
  </component>
  <!-- </Transition> -->
</template>

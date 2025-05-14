<script setup lang="ts">
interface TimelinePinProps {
  iconName?: string
  icon?: string
  iconTitle?: string
  date: Date
  past?: boolean
  now?: boolean
  nowText?: string
  tag?: string
}

const props = withDefaults(defineProps<TimelinePinProps>(), {
  iconName: 'it-code-circle',
  icon: 'it-code-circle',
  iconTitle: '',
  // date: new Date(),
  tag: 'h3'
})

const iconToUse = props.iconName || props.icon
</script>

<template>
  <div class="timeline-element">
    <span
      v-if="now"
      class="it-now-label d-none d-lg-flex"
    >
      {{ nowText }}
    </span>

    <component
      :is="tag"
      class="it-pin-wrapper"
      :class="{
        'it-evidence': past,
        'it-now': now
      }"
    >
      <div class="pin-icon">
        <Icon role="img" :icon="iconToUse" :title="iconTitle" />
      </div>
      <div class="pin-text">
        <span>
          <NuxtTime
            day="numeric"
            month="long"
            year="numeric"
            :datetime="date"
          />
        </span>
      </div>
    </component>

    <slot />
  </div>
</template>

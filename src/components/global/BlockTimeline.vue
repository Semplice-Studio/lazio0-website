<template>
  <Section
    :id="uid"
    class="it-page-section p-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="row mb-4">
      <div class="col-12">
        <Paragraph
          :abstract="abstract"
          :html-content="htmlContent"
          :title="title"
          :uid="uid"
        />
      </div>
    </div>
    <Timeline>
      <div class="row">
        <div v-for="(item, index) in timelineItems" :key="index" class="col-12">
          <TimelinePin
            icon-title="Segnaposto"
            :date="new Date(item.date)"
            :now="isToday(item.date)"
            :past="isBefore(item.date, startOfToday())"
          >
            <div class="card-wrapper">
              <Card>
                <BCardBody>
                  <BCardTitle class="h5 big-heading" tag="h4">
                    {{ item.title }}
                  </BCardTitle>
                  <BCardText>
                    <div v-if="item.abstract" v-html="item.abstract" />
                  </BCardText>
                </BCardBody>
              </Card>
            </div>
          </TimelinePin>
        </div>
      </div>
    </Timeline>
  </Section>
</template>

<script setup lang="ts">
import { isBefore, isToday, startOfToday } from 'date-fns'

import type { TimelineItemFragment } from '@/graphql'

defineProps({
  abstract: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  htmlContent: {
    type: String,
    default: ''
  },
  timelineItems: {
    type: Array as PropType<TimelineItemFragment[]>,
    default: () => ([])
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>

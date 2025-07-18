<template>
  <Section
    :id="uid"
    class="it-page-section p-0"
    :aria-labelledby="`title-${uid}`"
  >
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <Paragraph
            :abstract="abstract"
            :html-content="htmlContent"
            :title="title"
            :uid="uid"
          />
          <!-- <h2 :id="`title-${uid}`" class="primary-color-a9">{{ title }}</h2>
          <div v-if="abstract" class="subtitle-text neutral-1-color-a7" v-html="abstract" />
          <div v-if="htmlContent" class="text-md-left" v-html="htmlContent" /> -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div v-if="attachmentItems.length" class="table-responsive">
            <table class="table">
              <thead>
                <tr class="table-dark">
                  <th>{{ $t('Allegato') }}</th>
                  <th>{{ $t('Data') }}</th>
                  <th>{{ $t('Dimensioni') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in attachmentItems" :key="index">
                  <td>
                    <CraftLink class="text" :link="item.buttonLink" />
                  </td>
                  <td>
                    <NuxtTime
                      day="numeric"
                      month="long"
                      year="numeric"
                      :datetime="new Date(item.date)"
                    />
                  </td>
                  <td>{{ item.size }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { ButtonLinkFragment } from '@/graphql'

interface AttachmentItem {
  buttonLink: ButtonLinkFragment
  date: string
  size: string
}

defineProps({
  abstract: {
    type: String,
    default: ''
  },
  htmlContent: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  attachmentItems: {
    type: Array as PropType<AttachmentItem[]>,
    default: () => ([])
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>

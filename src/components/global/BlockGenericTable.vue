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
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Table :table-data="table" />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { Table_TableMakerField } from '~/graphql'

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
  table: {
    type: Object as PropType<Table_TableMakerField>,
    default: null
  },
  uid: {
    type: String,
    default: ''
  }
})
</script>

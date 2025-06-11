<script setup lang="ts">
import type { PropType } from 'vue'

import type { PagesEntryFragment } from '~/graphql'

defineProps({
  navigation: {
    type: Array as PropType<PagesEntryFragment['sidebarNavigation']>,
    default: () => []
  }
})
</script>

<template>
  <BAccordion id="page-nav" flush class="accordion-background-active">
    <BAccordionItem v-for="item in navigation" :key="item.id" :title="item.title">
      <BAccordion v-if="item.children?.[0] && item.children?.[0]?.children && item.children?.[0]?.children.length > 0" flush>
        <BAccordionItem
          v-for="subItem in item.children"
          :key="subItem.id"
          :title="subItem.title"
        >
          <LinkList v-if="subItem.children && subItem.children.length > 0">
            <LinkListItem
              v-for="child in subItem.children"
              :key="child.id"
              :link="child"
            >
              {{ child.title }}
            </LinkListItem>
          </LinkList>
        </BAccordionItem>
      </BAccordion>
      <LinkList v-else>
        <LinkListItem
          v-for="subItem in item.children"
          :key="subItem.id"
          :link="subItem"
        >
          {{ subItem.title }}
        </LinkListItem>
      </LinkList>
    </BAccordionItem>
  </BAccordion>
</template>

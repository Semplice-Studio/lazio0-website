<template>
  <div class="row">
    <div v-if="withSidebar" class="col-12 col-lg-4">
      <BNavbar ref="navScrollEl" class="it-navscroll-wrapper it-bottom-navscroll it-right-side affix-top" toggleable="lg">
        <BNavbarToggle class="custom-navbar-toggler" target="nav-collapse">
          <span class="it-list" />
          <Progress class="custom-navbar-progressbar" />
        </BNavbarToggle>
        <BCollapse id="nav-collapse" is-nav>
          <Progress class="custom-navbar-progressbar" />
          <div className="menu-wrapper">
            <div className="link-list-wrapper">
              <h3>Indice della pagina</h3>
              <Progress class="it-navscroll-progressbar" />
              <LinkList no-wrapper class="mt-4">
                <LinkListItem v-for="block, i in blocks" :key="i" tag="div">
                  <a class="nav-link" :href="`#${block.uid}`">
                    <span>{{ block.title }}</span>
                  </a>
                </LinkListItem>
              </LinkList>
            </div>
          </div>
        </BCollapse>
      </BNavbar>
    </div>
    <div class="it-page-sections-container col-12" :class="{ 'col-lg-8': withSidebar }">
      <Blocks :blocks="blocks" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { unrefElement } from '@vueuse/core'
import { NavScroll } from 'bootstrap-italia'

import type { CraftMatrixField } from '@/components/Blocks.vue'
// import type { TagFragment } from '@/graphql'

defineProps({
  blocks: {
    type: Array as () => CraftMatrixField[],
    required: true
  },
  // tags: {
  //   type: Array as () => TagFragment[],
  //   default: () => []
  // },
  withSidebar: {
    type: Boolean,
    default: false
  }
})

const navScrollEl = ref(null)
const navScrollInstance = ref<NavScroll | null>(null)

onMounted(() => {
  if (navScrollEl.value) {
    const target = unrefElement(navScrollEl)! as HTMLElement
    navScrollInstance.value = new NavScroll(target)
  }
})

onUnmounted(() => {
  if (navScrollInstance.value) {
    navScrollInstance.value.dispose()
  }
})
</script>

<style scoped>
.it-page-sections-container > :not([hidden]) ~ :not([hidden]) {
  margin-top: 2rem;
}
</style>

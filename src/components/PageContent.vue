<template>
  <div class="row">
    <div class="col-12 col-lg-4">
      <Navbar ref="navScrollEl" class="it-navscroll-wrapper it-bottom-navscroll it-right-side affix-top" expand="lg">
        <Progress class="custom-navbar-progressbar" />
        <div className="menu-wrapper">
          <div className="link-list-wrapper">
            <h3>header</h3>
            <Progress class="it-navscroll-progressbar" />
            <LinkList no-wrapper>
              <li v-for="block, i in blocks" :key="i" class="nav-item">
                <NuxtLinkLocale class="nav-link">
                  <span>{{ block.typeHandle }}</span>
                </NuxtLinkLocale>
              </li>
            </LinkList>
          </div>
        </div>
      </Navbar>
    </div>
    <div class="it-page-sections-container col-12 col-lg-8">
      <Blocks :blocks="blocks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { unrefElement } from '@vueuse/core'
import { NavScroll } from 'bootstrap-italia'

import type { CraftMatrixField } from '@/components/Blocks.vue'

const navScrollEl = ref(null)

onMounted(() => {
  const target = unrefElement(navScrollEl)! as HTMLElement
  const navscroll = new NavScroll(target)

  console.log('NavScroll initialized', navscroll)
})

defineProps({
  blocks: {
    type: Array as () => CraftMatrixField[],
    required: true
  }
})
</script>

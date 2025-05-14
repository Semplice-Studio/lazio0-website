<template>
  <div class="row">
    <div class="col-12 col-lg-4">
      <BNavbar ref="navScrollEl" class="it-navscroll-wrapper it-bottom-navscroll it-right-side affix-top" expand="lg">
        <BNavbarToggle class="custom-navbar-toggler" target="nav-collapse">
          <span class="it-list" />
          <Progress class="custom-navbar-progressbar" />
        </BNavbarToggle>
        <BCollapse id="nav-collapse" is-nav>
          <Progress class="custom-navbar-progressbar" />
          <div className="menu-wrapper">
            <div className="link-list-wrapper">
              <h3>indice della pagina</h3>
              <Progress class="it-navscroll-progressbar" />
              <LinkList no-wrapper>
                <LinkListItem v-for="block, i in blocks" :key="i">
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

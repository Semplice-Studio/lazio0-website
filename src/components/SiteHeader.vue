<script setup lang="ts">
import Logo from '@/assets/images/Logo.svg'
import LogoFull from '@/assets/images/LogoFull.svg'
import type { NodeInterface } from '@/graphql'
import GetNavigation from '@/graphql/GetNavigation.gql'
import { NuxtLinkLocale } from '#components'

const route = useRoute()
const { locale } = useI18n()
const { data: navigation } = await useCraftNavigation('mainNavigation', GetNavigation, { navHandle: 'mainNavigation' })

const open = ref(false)

function getNavItemURL(item: NodeInterface) {
  if (item.element?.uri && item.element.uri !== '__home__') {
    return `/${locale.value}/${item.element.uri}`
  }

  return `/${locale.value}`
}

function getIsActive(item: NodeInterface) {
  if (item.element?.uri && item.element.uri !== '__home__') {
    return `/${locale.value}/${item.element.uri}` === route.path
  }

  return `/${locale.value}` === route.path
}
</script>

<template>
  <Headers>
    <Header type="slim">
      <HeaderContent>
        <HeaderBrand responsive to="/" :tag="NuxtLinkLocale">
          <Logo class="me-2" style="height: 24px;" /><!--
          -->REGIONE LAZIO
        </HeaderBrand>
      </HeaderContent>
    </Header>
    <div class="it-nav-wrapper">
      <Header theme="light" type="center">
        <HeaderContent>
          <HeaderBrand to="/" :tag="NuxtLinkLocale">
            <LogoFull />
          </HeaderBrand>
          <HeaderRightZone>
            <HeaderSearch icon-name="it-search" label="Cerca" />
          </HeaderRightZone>
        </HeaderContent>
      </Header>
      <Header theme="light" type="navbar">
        <HeaderContent expand="lg">
          <HeaderToggler
            aria-controls="main-navigation"
            aria-label="Toggle navigation"
            :aria-expanded="open"
            @click="open = true"
          >
            <Icon icon="it-burger" />
          </HeaderToggler>
          <Collapse
            id="main-navigation"
            v-model:open="open"
            navbar
          >
            <div class="menu-wrapper">
              <Nav navbar>
                <BNavItem
                  v-for="(item, index) in navigation"
                  :key="index"
                  exact
                  data-focus-mouse="true"
                  exact-active-class="active"
                  :to="getNavItemURL(item)"
                >
                  <span>{{item.title}}</span>
                </BNavItem>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    </div>
  </Headers>
</template>

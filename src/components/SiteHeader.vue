<script setup lang="ts">
import Logo from '@/assets/images/Logo.svg'
import LogoFull from '@/assets/images/LogoFull.svg'
import GetNavigation from '@/graphql/GetNavigation.gql'

const isOpenSide = ref(false)
const { locale } = useI18n()
const { data: navigation } = await useCraftNavigation('mainNavigation', GetNavigation, { navHandle: 'mainNavigation' })
</script>

<template>
  <Headers>
    <Header type="slim">
      <HeaderContent>
        <HeaderBrand>
          <Logo class="me-2" style="height: 32px;" />
          Regione Lazio
        </HeaderBrand>
      </HeaderContent>
    </Header>
    <div class="it-nav-wrapper">
      <Header small theme="light" type="center">
        <HeaderContent>
          <HeaderBrand>
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
            aria-controls="nav1"
            aria-label="Toggle navigation"
            :aria-expanded="isOpenSide"
            @click="isOpenSide = !isOpenSide"
          >
            <Icon icon="it-burger" />
          </HeaderToggler>

          <Collapse
            header
            navbar
            :is-open="isOpenSide"
            @overlay-click="isOpenSide = false"
          >
            <div class="menu-wrapper">
              <Nav navbar>
                <BNavItem
                  v-for="(item, index) in navigation"
                  :key="index"
                  router-component-name="NuxtLinkLocale"
                  :to="`/${locale}/${item.element!.uri}`"
                >
                  {{item.title}}
                </BNavItem>
                <!-- <BNavItem active><span>link 1 active</span><span class="visually-hidden">current</span></BNavItem>
                <BNavItem disabled>
                  Link 2
                </BNavItem>
                <BNavItem>
                  Link 4
                </BNavItem>
                <BNavItem>
                  Link 5
                </BNavItem> -->
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    </div>
  </Headers>
</template>

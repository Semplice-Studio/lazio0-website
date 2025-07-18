<script setup lang="ts">
import Logo from '@/assets/images/Logo.svg'
import type { CompanyInfo_GlobalSet, MainNavigation_Node, NodeInterface } from '@/graphql'
import GetCompanyInfo from '@/graphql/GetCompanyInfo.gql'
import GetNavigation from '@/graphql/GetNavigation.gql'
import { NuxtLinkLocale } from '#components'

const route = useRoute()
const { locale } = useI18n()
const { data: companyInfo } = await useCraftGlobals<CompanyInfo_GlobalSet>('companyInfo', GetCompanyInfo)
const { data: navigation } = await useCraftNavigation('mainNavigation', GetNavigation, { navHandle: 'mainNavigation' })

const open = ref(false)

const mainNavigation = computed(() => navigation.value.filter((item: MainNavigation_Node) => !item.secondary))
const secondaryNavigation = computed(() => navigation.value.filter((item: MainNavigation_Node) => item.secondary))

function getURI(uri: string | undefined) {
  if (!uri || uri === '__home__') {
    return ''
  } else {
    return `/${uri}`
  }
}

function getNavItemURL(item: NodeInterface) {
  const type = item.type?.match(/([^\\]+)$/)?.[1]
  switch (type) {
    case 'Entry':
      return `/${locale.value}${getURI(item.element?.uri)}`
    case 'Passive':
      return ''
    case 'CustomType':
      return item.url || '#'
    default:
      return `/${locale.value}`
  }
}

// function getIsActive(item: NodeInterface) {
//   if (item.element?.uri && item.element.uri !== '__home__') {
//     return `/${locale.value}/${item.element.uri}` === route.path
//   }

//   return `/${locale.value}` === route.path
// }
</script>

<template>
  <Headers>
    <Header class="primary-bg-a10" type="slim">
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
            <!-- <LogoFull /> -->
            <CraftImage v-bind="companyInfo.logoHeader?.[0]" />
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
              <Nav navbar aria-label="Principale">
                <BNavItem
                  v-for="(item, index) in mainNavigation"
                  :key="index"
                  exact
                  data-focus-mouse="true"
                  exact-active-class="active"
                  :to="getNavItemURL(item)"
                >
                  <span>{{item.title}}</span>
                </BNavItem>
              </Nav>
              <Nav navbar aria-label="Secondaria">
                <template v-for="(item, index) in secondaryNavigation" :key="index">
                  <BNavItem
                    v-if="!(item as MainNavigation_Node).buttonStyle"
                    exact
                    data-focus-mouse="true"
                    exact-active-class="active"
                    :to="getNavItemURL(item)"
                  >
                    <span>{{item.title}}</span>
                  </BNavItem>
                  <Button v-else class="btn-full ms-4" :target="item.newWindow === '1' ? '_self' : '_self'" :to="getNavItemURL(item)">
                    <span>{{item.title}}</span>
                  </Button>
                </template>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    </div>
  </Headers>
</template>

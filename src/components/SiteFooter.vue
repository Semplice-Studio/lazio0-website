<template>
  <footer class="it-footer">
    <div class="it-footer-main">
      <div class="container">
        <div class="row logo-wrapper">
          <div class="col-sm-12">
            <div class="it-brand-wrapper">
              <NuxtLinkLocale to="/">
                <LogoFull />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>

        <div class="row">
          <div v-for="(navigationItems, idx) in navigation.slice(0, Math.min(3, navigation.length))" :key="idx" class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4 class="footer-heading-title">{{ navigationItems.title }}</h4>
            <LinkList class='footer-list clearfix'>
              <LinkListItem
                v-for="item in navigationItems.children"
                :key="item.id"
                :link="item"
                :title="'Vai alla pagina: ' + item.title"
              >
                {{ item.title }}
              </LinkListItem>
            </LinkList>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <template v-for="(navigationItems, idx) in navigation.slice(Math.min(3, navigation.length), navigation.length)" :key="idx">
              <h4 class="footer-heading-title">{{ navigationItems.title }}</h4>
              <LinkList class="footer-list clearfix">
                <LinkListItem
                  v-for="item in navigationItems.children"
                  :key="item.id"
                  :link="item"
                  :title="'Vai alla pagina: ' + item.title"
                >
                  {{ item.title }}
                </LinkListItem>
              </LinkList>
            </template>
          </div>
        </div>

        <div class="row py-4">
          <div class="col-lg-9 col-md-3 pb-2">
            <h4 class="footer-heading-title">Contatti</h4>
            <p>
              <strong>{{ companyInfo.companyName }}</strong>
            </p>
            <div v-if="companyInfo.info" v-html="companyInfo.info" />
            <div v-if="companyInfo.additionalInfo" class="mt-2" v-html="companyInfo.additionalInfo" />
          </div>

          <div class="col-lg-3 col-md-3 pb-2">
            <h4 class="footer-heading-title">Seguici su</h4>
            <ul class="list-inline text-start social">
              <li v-for="icon in socials" :key="icon.name" class="list-inline-item">
                <a class="p-2 text-white" href="#" target="_blank">
                  <Icon class="align-top" color="white" size="sm" :icon="icon.icon" />
                  <span class="visually-hidden">{{ icon.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="it-footer-small-prints clearfix">
      <div class="container">
        <h3 class="visually-hidden">Sezione Link Utili</h3>
        <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li v-for="(navigationItem, idx) in bottomNavigation" :key="idx" class="list-inline-item">
            <!-- <a href="#" :title="navigationItem.title">{{ navigationItem.title }}</a> -->
            <CraftLink :link="navigationItem" :title="'Vai alla pagina: ' + navigationItem.title">
              {{ navigationItem.title }}
            </CraftLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LogoFull from '@/assets/images/LogoFullLight.svg'
import type { CompanyInfo_GlobalSet } from '@/graphql'
import GetCompanyInfo from '@/graphql/GetCompanyInfo.gql'
import GetNavigation from '@/graphql/GetNavigation.gql'

const { data: companyInfo } = await useCraftGlobals<CompanyInfo_GlobalSet>('companyInfo', GetCompanyInfo)
const { data: navigation } = await useCraftNavigation('footerNavigation', GetNavigation, { navHandle: 'footerNavigation' })
const { data: bottomNavigation } = await useCraftNavigation('bottomNavigation', GetNavigation, { navHandle: 'bottomNavigation' })

const socials = ref([
  { icon: 'it-designers-italia', name: 'Designers Italia' },
  { icon: 'it-twitter', name: 'Twitter' },
  { icon: 'it-medium', name: 'Medium' },
  { icon: 'it-behance', name: 'Behance' }
])
</script>

<template>
  <footer class="it-footer">
    <div class="it-footer-main">
      <div class="container">
        <section>
          <div class="row clearfix">
            <div class="col-sm-12">
              <div class="it-brand-wrapper">
                <NuxtLinkLocale to="/">
                  <LogoFull />
                </NuxtLinkLocale>
                <!-- <a href="#">
                  <Icon icon="it-pa" />
                  <div class="it-brand-text">
                    <h2>{{ townName }}</h2>
                    <h3 class="d-none d-md-block">{{ townTagLine }}</h3>
                  </div>
                </a> -->
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="row">
            <div v-for="(navigationItems, idx) in navigation" :key="idx" class="col-lg-3 col-md-3 col-sm-6 pb-2">
              <h4><a :href="navigationItems.link" :title="'Vai alla pagina: ' + navigationItems.title">{{ navigationItems.title }}</a></h4>
              <!-- <ul class="footer-list clearfix">
                <li v-for="item in section.items" :key="item">
                  <a href="#" :title="'Vai alla pagina: ' + item">{{ item }}</a>
                </li>
              </ul> -->
              <LinkList class='footer-list clearfix'>
                <!-- TODO: this neeeds to be a link -->
                <LinkListItem v-for="item in navigationItems.children" :key="item" to="/" :title="'Vai alla pagina: ' + item.title">
                  {{ item.title }}
                </LinkListItem>
              </LinkList>
            </div>
          </div>
        </section>

        <section class="py-4 border-white border-top">
          <div class="row">
            <!-- <div class="col-lg-3 col-md-3 pb-2">
              <h4><a href="#" title="Vai alla pagina: Amministrazione">Amministrazione trasparente</a></h4>
              <p>
                I dati personali pubblicati sono riutilizzabili solo alle condizioni previste dalla direttiva
                comunitaria 2003/98/CE e dal d.lgs. 36/2006
              </p>
            </div> -->

            <div class="col-lg-9 col-md-3 pb-2">
              <h4><a href="#" title="Vai alla pagina: Contatti">Contatti</a></h4>
              <p>
                <strong>Nome del Comune</strong><br>
                Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
              </p>
              <ul class="footer-list clearfix">
                <li v-for="label in contacts" :key="label">
                  <a href="#" :title="'Vai alla pagina: ' + label">{{ label }}</a>
                </li>
              </ul>
            </div>

            <!-- <div class="col-lg-3 col-md-3 pb-2">
              <h4><a href="#" title="Vai alla pagina: Newsletter">Newsletter</a></h4>
              <form action="#" class="form-newsletter" method="post">
                <label class="text-white fw-semibold active" for="input-newsletter" style="transition: none 0s ease 0s;">
                  Iscriviti per riceverla
                </label>
                <input id="input-newsletter" name="input-newsletter" placeholder="mail@example.com" type="email">
                <button class="btn btn-primary btn-icon" type="submit">
                  <Icon color="white" icon="it-mail" />
                  <span>Iscriviti</span>
                </button>
              </form>
            </div> -->

            <div class="col-lg-3 col-md-3 pb-2">
              <h4><a href="#" title="Vai alla pagina: Seguici su">Seguici su</a></h4>
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
        </section>
      </div>
    </div>

    <div class="it-footer-small-prints clearfix">
      <div class="container">
        <h3 class="visually-hidden">Sezione Link Utili</h3>
        <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li v-for="link in footerLinks" :key="link" class="list-inline-item">
            <a href="#" :title="link">{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoFull from '@/assets/images/LogoFullLight.svg'
import GetNavigation from '@/graphql/GetNavigation.gql'

const townName = 'Nome Comune'
const townTagLine = 'Tagline del Comune'

const { locale } = useI18n()
const { data: navigation } = await useCraftNavigation('footerNavigation', GetNavigation, { navHandle: 'footerNavigation' })

const contacts = ref(['Posta Elettronica Certificata', 'URP - Ufficio Relazioni con il Pubblico'])

const socials = ref([
  { icon: 'it-designers-italia', name: 'Designers Italia' },
  { icon: 'it-twitter', name: 'Twitter' },
  { icon: 'it-medium', name: 'Medium' },
  { icon: 'it-behance', name: 'Behance' }
])

const footerLinks = ref(['Media policy', 'Note legali', 'Privacy policy', 'Mappa del sito'])
</script>

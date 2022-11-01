<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>


      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab 
        v-for="nav in navs"
        :key="nav.label" 
        :to="nav.to" 
        :icon="nav.icon" 
        :label="nav.label" />
      </q-tabs>
      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      class="bg-primary"

    >
      <q-list>
        <q-item-label
          class="text-white"
          header
        >
          Menu
        </q-item-label>

        <q-item 
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        class="text-white"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon :name="nav.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ nav.label }}</q-item-label>
        </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default ({
  name: 'MyLayout',
    data () {
      return{
        leftDrawerOpen: this.$q.platform.is.desktop,
        navs: [
          {
            label: 'Accueil',
            icon: 'eva-home-outline',
            to: '/'
          },
          {
            label: 'A propos',
            icon: 'eva-person-outline',
            to: '/about'
          },
          {
            label: 'Tarifs',
            icon: 'eva-credit-card-outline',
            to: '/prices'
          },
          {
            label: 'Prendre rendez-vous',
            icon: 'eva-calendar-outline',
            to: '/appointment'
          },
          {
            label: 'Contact',
            icon: 'eva-email-outline',
            to: '/contact'
          },
          {
            label: 'Connexion',
            icon: 'eva-log-in-outline',
            to: '/login'
          }
        ]
      }
    },
    Methods: {
      openURL
    }
})
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
} 

.q-drawer {
  .q-drawer .q-router-link--exact-active{
  color: white !important ;
}
}


</style>

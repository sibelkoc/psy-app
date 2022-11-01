<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <q-item 
        to="/"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon name="eva-home-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Accueil</q-item-label>
        </q-item-section>
        </q-item>

        <q-item 
        to="/about"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon name="eva-person-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>A propos</q-item-label>
        </q-item-section>
        </q-item>

        <q-item 
        to="/prices"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon name="eva-credit-card-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Tarifs</q-item-label>
        </q-item-section>
        </q-item>

        <q-item 
        to="/appointment"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon name="eva-calendar-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Prendre rendez-vous</q-item-label>
        </q-item-section>
        </q-item>

        <q-item 
        to="/contact"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon name="eva-email-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Contact</q-item-label>
        </q-item-section>
        </q-item>

        <q-item 
        to="/login"
        exact
        clickable>
        <q-item-section avatar>
           <q-icon name="eva-log-in-outline" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Connexion</q-item-label>
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

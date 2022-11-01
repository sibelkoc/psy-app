<template>
  <q-page class="q-pa-md">
<div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
    >

      <q-step
        :name="1"
        title="Choisir le motif"
        icon="eva-list-outline"
        :done="step > 1"
      >
      <q-input
        filled
        v-model="name"
        label="Votre nom"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Inserer votre nom']"
      />

      
    <q-list 
    separator
    bordered>

      <q-item
      v-for="appointment in appointments"
      :key="appointment.id"
      @click="appointment.completed =! appointment.completed"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="appointment.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ appointment.name }}
          </q-item-label>
        </q-item-section>

      </q-item>
    </q-list>
      </q-step>


      <q-step
        :name="2"
        title="Selectionner date et heure"
        icon="eva-clock-outline"
        :done="step > 2"
      >
      <div class="q-pa-md">
    <div class="q-gutter-md row items-start justify-center">
      <q-date v-model="model" mask="DD-MM-YYYY HH:mm" color="primary" />
      <q-time v-model="model" mask="DD-MM-YYYY HH:mm" color="primary" />
    </div>
  </div>
      </q-step>

      <q-step
        :name="3"
        title="Confirmer"
        icon="eva-checkmark-circle-outline"
      >
       A lire avant ! <br>
       <br>
       <q-separator color="secondary" width="100px" />
       <br>
       Motif : <br>
       <br>
       <q-separator color="secondary"  width="100px" />
       <br>
       Se présenter 15 minutes avant avec un masque !
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Valider' : 'Suivant'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Precedent" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>



<!-- 

    <q-list 
    separator
    bordered>

      <q-item
      v-for="appointment in appointments"
      :key="appointment.id"
      @click="appointment.completed =! appointment.completed"
      :class="!appointment.completed ? 'bg-secondary' : 'bg-accent'"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="appointment.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
          >
            {{ appointment.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
        <div class="row">
          <div class="column justify-center">
            <q-icon 
             name="eva-calendar-outline" 
             size="20px"
             class="q-mr-xs"
             />
          </div>
          <div class="column">
            <q-item-label 
            class="row justify-end"
            caption
            >
            {{ appointment.dueDate }}
          </q-item-label>
          <q-item-label 
          class="row justify-end"
          caption
          >
            <small>{{ appointment.dueTime }}</small>
          </q-item-label>
          </div>
        </div>

        </q-item-section>
      </q-item>
    </q-list> -->
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
    data() {
      return {
        appointments: [
          {
            id : 1,
            name: 'Travail',
            description: 'blabla',
            completed: false,
            dueDate: '12/05/2012',
            dueTime: '18:30'
          },
          {
            id : 2,
            name: 'conjugal & Familiale',
            description: 'blabla',
            completed: false,
            dueDate: '06/10/2012',
            dueTime: '08:30'
          },
          {
            id : 3,
            name: 'Addiction',
            description: 'blabla',
            completed: false,
            dueDate: '21/09/2020',
            dueTime: '07:30'
          },
          {
            id : 4,
            name: 'Maladie mentale & Troubles',
            description: 'blabla',
            completed: false,
            dueDate: '14/06/2020',
            dueTime: '16:30'
          },
          {
            id : 5,
            name: 'Education (sexuel ou parentale)',
            description: 'blabla',
            completed: false,
            dueDate: '09/05/2011',
            dueTime: '13:30'
          },
        ],
        step: ref(1),
        model: ref('2019-02-22 21:02')
      }
    }
    
  }
 

</script>

<style>

</style>

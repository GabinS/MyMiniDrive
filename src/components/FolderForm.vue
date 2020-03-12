<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nouveau Dossier</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nom*" v-model="name" :error="error"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indique les champs obligatoirs</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="closeDialog">Annuler</v-btn>
          <v-btn color="green" text @click="addFolder">Sauvegarder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { foldersRef } from '../firebase'

export default {
  data () {
    return {
      name: '',
      error: false
    }
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog', false)
    },
    addFolder () {
      this.error = false
      if (this.name !== '') {
        const folder = { name: this.name, createDate: this.getCurentDate() }
        foldersRef.push(folder)
        this.closeDialog()
        this.name = ''
      } else {
        this.error = true
      }
    },
    getCurentDate () {
      const currentDatetime = new Date()
      const formattedDate = currentDatetime.getDate() + '/' + (currentDatetime.getMonth() + 1) + '/' + currentDatetime.getFullYear() + ' ' + currentDatetime.getHours() + ':' + currentDatetime.getMinutes() + ':' + currentDatetime.getSeconds()
      return formattedDate
    }
  }
}
</script>

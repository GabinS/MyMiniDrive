<template>
  <v-row align="center">
    <v-list two-line subheader class="full-width">
      <v-subheader inset>
        <v-btn class="mx-2" fab x-small right color="primary" @click="openFolderForm = true">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <span>Dossiers</span>
      </v-subheader>

      <v-list-item
        v-for="(folder, name, index) in folders"
        :key="index"
      >
        <v-list-item-avatar>
          <v-icon class="grey lighten-1 white--text">mdi-folder</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.name"></v-list-item-title>
          <v-list-item-subtitle v-text="'Date de création : ' + folder.createDate"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="red lighten-1" @click="removeFolder(name)">mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-subheader inset>
        <v-btn class="mx-2" fab x-small right color="warning">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <span>Fichier</span>
      </v-subheader>

      <v-list-item
        v-for="(file, name, index) in files"
        :key="index"
      >
        <v-list-item-avatar>
          <v-icon class="grey lighten-1 white--text">mdi-file</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="file.name"></v-list-item-title>
          <v-list-item-subtitle v-text="file.dateUpdate"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="red lighten-1" @click="removeFolder(name)">mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <FolderForm :dialog="openFolderForm" v-on:closeDialog="closeFolderForm"/>
  </v-row>
</template>

<script>
import { foldersRef } from '../firebase'
import { FolderForm } from '../components'

export default {
  name: 'MyFiles',
  data () {
    return {
      folders: [],
      files: [],
      openFolderForm: false
    }
  },
  components: {
    FolderForm
  },
  methods: {
    closeFolderForm () {
      this.openFolderForm = false
      this.loadFolders()
    },
    loadFolders () {
      foldersRef.once('value')
        .then((data) => {
          this.folders = data.val()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    removeFolder (key) {
      foldersRef.child(key).remove()
      this.loadFolders()
    }
  },
  mounted () {
    this.loadFolders()
  }
}
</script>

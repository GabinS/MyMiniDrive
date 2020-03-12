<template>

  <v-app>
    <!-- <v-tabs>
      <v-tab><router-link :to="{name: 'Home'}">Accueil</router-link></v-tab>
      <v-tab><router-link :to="{name: 'MyFiles'}">Mes Documents</router-link></v-tab>
    </v-tabs> -->
    <v-bottom-navigation>

      <v-btn value="recent">
        <router-link :to="{name: 'Home'}">
          <v-icon>mdi-home</v-icon>
          <div>Accueil</div>
        </router-link>
      </v-btn>

      <v-btn value="favorites">
        <router-link :to="{name: 'MyFiles'}">
          <v-icon>mdi-folder</v-icon>
          <div>Mes Documents</div>
        </router-link>
      </v-btn>
    </v-bottom-navigation>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style src="./assets/styles/css/default.css"></style>

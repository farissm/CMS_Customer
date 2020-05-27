<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-btn
        class="red black--text"
      >Logout</v-btn>
      <v-btn
        class="blue black--text"
      >Login</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App'
}
</script>

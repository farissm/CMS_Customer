<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-btn
        right
        class="red black--text"
      >click me</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

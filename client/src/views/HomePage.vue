<template>
  <v-app>
    <v-container fluid>
      <v-row class="justify-center">
        <Navbar />
        <v-col>
          <v-layout class="py-5">
            <FetchProduct />
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FetchProduct from '@/components/FetchProduct.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'HomePage',
  components: {
    FetchProduct, Navbar
  }
}
</script>

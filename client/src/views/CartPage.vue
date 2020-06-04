<template>
  <v-app>
    <v-container fluid>
      <v-row class="justify-center">
        <Navbar />
        <v-col>
          <v-layout class="py-5">
            <Cart />
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Cart from '@/components/Cart.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'CartPage',
  components: {
    Cart, Navbar
  }
}
</script>

<style>

</style>

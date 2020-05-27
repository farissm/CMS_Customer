<template>
  <v-app>
    <v-container fluid>
      <v-row class="justify-center">
        <v-cols>
          <v-layout class="py-5">
            <FetchProduct />
          </v-layout>
        </v-cols>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FetchProduct from '@/components/FetchProduct.vue'
export default {
  name: 'HomePage',
  components: {
    FetchProduct
  }
}
</script>

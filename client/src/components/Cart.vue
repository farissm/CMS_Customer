<template>
  <v-app>
    <v-flex d-flex>
      <v-layout wrap>
          <v-flex md-3 v-for="cart in carts" :key="cart.id" class="px-5 py-5">
              <v-card
                class="d-inline-flex mx-auto"
                width="300"
                >
                <v-container>
                <v-row justify="space-between">
                    <v-col cols="auto">
                    <v-img
                        height="200"
                        width="200"
                        :src="cart.Product.image_url"
                    ></v-img>
                    </v-col>

                    <v-col
                    cols="auto"
                    class="text-center pl-0"
                    >
                    <v-row
                        class="flex-column ma-0 fill-height"
                        justify="center"
                    >
                        <v-col class="px-0">
                        Product: {{cart.Product.name}}
                        </v-col>

                        <v-col class="px-0">
                        Price: Rp.{{cart.Product.price}}
                        </v-col>

                    </v-row>
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
          </v-flex>
      </v-layout>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    carts () {
      return this.$store.state.cart
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchCart')
    }
  }
}
</script>

<style>

</style>

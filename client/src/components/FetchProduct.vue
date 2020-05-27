<template>
  <v-app>
      <v-flex d-flex>
        <v-layout wrap>
            <v-flex md-3 v-for="product in products" :key="product.id" class="px-5">
                <v-card
                class="mx-auto"
                width="230px"
                >
                    <v-img
                    :src="product.image_url"
                    height="200px"
                    width="100px"
                    class="align-end"
                    ></v-img>

                    <v-card-title>
                    {{product.name}}
                    </v-card-title>

                    <v-card-subtitle>
                    Rp. {{product.price}}
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn text>Add to Cart</v-btn>

                    <v-btn
                        color="purple"
                        text
                    >
                        <v-icon>favorite</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
      </v-flex>
  </v-app>
</template>

<script>
export default {
  name: 'FetchProduct',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
    console.log(this.$store.state.products)
  }
}
</script>

<style>

</style>

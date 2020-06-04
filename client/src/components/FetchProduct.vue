<template>
  <v-app>
    <v-flex d-flex>
      <v-layout wrap>
        <v-dialog
          v-model="dialog"
          max-width="350"
        >
          <v-card>
            <v-card-title class="headline">{{message}}</v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
                  Rp. {{product.price}} <br/>
                  Stock: {{product.stock}}
                  </v-card-subtitle>

                  <v-card-actions>
                  <v-btn text @click.prevent="addCart(product.id)">Add to Cart</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
    </v-flex>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FetchProduct',
  data () {
    return {
      message: '',
      addStatus: false,
      dialog: false
    }
  },
  methods: {
    addCart (id) {
      if (localStorage.access_token) {
        axios({
          method: 'post',
          url: 'https://calm-beyond-37965.herokuapp.com/cart',
          data: {
            ProductId: id
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(data => {
            this.message = 'success add product to cart'
            this.addStatus = true
            this.dialog = true
            this.$store.dispatch('fetchProduct')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log('error ga sih')
        this.dialog = true
        this.addStatus = false
        this.message = 'please login first'
      }
    }
  },
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

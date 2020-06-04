<template>
  <v-app>
      <v-dialog
        v-model="dialog"
        max-width="550"
      >
        <v-card>
          <v-card-title class="headline">{{message}}</v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click.prevent="checkOut"
            >
              Checkout
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click.prevent="dialog = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-app-bar
      app
      color="black"
      dark
    >
      <h1>ShoeShop</h1>

      <v-spacer></v-spacer>
      <h4
        v-if="isLogin && cartNav"
      >Total: Rp. {{totalPrice}} </h4>
      <v-btn
        v-if="isLogin && cartNav"
        class="black white--text px-5"
        @click.prevent="dialog = true"
      >Checkout</v-btn>
      <v-btn
        v-if="isLogin && cartNav"
        class="black white--text px-5"
        @click.prevent="home"
      ><v-icon>home</v-icon></v-btn>
      <v-btn
        v-if="isLogin && !cartNav"
        class="black white--text px-5"
        @click.prevent="cart"
      ><v-icon>shopping_cart</v-icon></v-btn>
      <v-btn
        v-if="isLogin"
        class="black white--text px-5"
        @click.prevent="logout"
      >Logout</v-btn>
      <v-btn
        v-if="!isLogin"
        class="black white--text px-5"
        @click.prevent="login"
      >Login</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isLogin: false,
      message: 'Are you sure to checkout your item?',
      dialog: false
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'LoginPage' })
    },
    logout () {
      localStorage.clear()
      this.isLogin = false
      this.$router.push({ name: 'HomePage' })
    },
    cart () {
      this.$store.commit('SET_CARTNAV', true)
      this.$router.push({ name: 'CartPage' })
    },
    home () {
      this.$store.commit('SET_CARTNAV', false)
      this.$router.push({ name: 'HomePage' })
    },
    checkOut () {
      this.$store.dispatch('checkOut')
      this.dialog = false
      this.$store.dispatch('fetchCart')
    }

  },
  computed: {
    cartNav () {
      return this.$store.state.cartNav
    },
    totalPrice () {
      return this.$store.state.total
    }
  },
  created () {
    if (localStorage.access_token) {
      this.isLogin = true
      this.$store.dispatch('fetchCart')
    }
  }
}
</script>

<style>

</style>

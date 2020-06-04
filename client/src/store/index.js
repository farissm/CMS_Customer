import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartNav: false,
    total: null,
    message: ''
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CART (state, payload) {
      state.cart = payload
    },
    SET_CARTNAV (state, payload) {
      state.cartNav = payload
    },
    SET_TOTAL (state, payload) {
      state.total = payload
    },
    SET_MESSAGE (state, payload) {
      state.message = payload
    }
  },
  actions: {
    fetchProduct (context, payload) {
      axios({
        method: 'get',
        url: 'https://calm-beyond-37965.herokuapp.com/product',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          const products = data.data.products
          context.commit('SET_PRODUCTS', products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context, payload) {
      axios({
        method: 'get',
        url: 'https://calm-beyond-37965.herokuapp.com/cart',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          const cart = data.data.cart
          let total = 0
          context.commit('SET_CART', cart)
          for (let i = 0; i < cart.length; i++) {
            total += cart[i].Product.price
          }
          context.commit('SET_TOTAL', total)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOut (context, payload) {
      axios({
        method: 'delete',
        url: 'https://calm-beyond-37965.herokuapp.com/cart',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          console.log('success')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

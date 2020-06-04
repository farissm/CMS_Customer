<template>
  <div id="app">
  <v-container>
    <v-layout row class="text-md-center" justify-center>
      <v-flex md3>
        <v-card height="500px" style="background-image: url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')"></v-card>
      </v-flex>
      <v-flex md4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-md-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Welcome back, Login</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="email" name="Email" label="Email" v-model="email"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
            <p>don't have an account? <a href="#" style="text-decoration: none" @click.prevent="getRegister">Register</a></p>
            <v-card-actions>
              <v-btn primary large block @click.prevent="login">Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: 'https://calm-beyond-37965.herokuapp.com/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          this.$router.push({ name: 'HomePage' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRegister () {
      this.$router.push({ name: 'RegisterPage' })
    }
  }
}
</script>

<style>

</style>

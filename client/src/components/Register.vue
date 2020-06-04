<template>
  <div id="app">
  <v-container>
    <v-layout row class="text-md-center" justify-center>
      <v-flex md3>
        <v-card height="500px" style="background-image: url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')"></v-card>
      </v-flex>
      <v-flex md4 class="grey lighten-4" >
        <v-container style="position: relative;top: 13%;" class="text-md-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Register</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="email" name="Email" label="Email" v-model="email"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Confirm Password" type="password" v-model="confirmPass"></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click.prevent="register">Register</v-btn>
            </v-card-actions>
            </v-form>
            <span class="red--text">{{errMessage}}</span>
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
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      confirmPass: '',
      errMessage: ''
    }
  },
  methods: {
    register () {
      if (this.password !== this.confirmPass) {
        this.errMessage = 'password not match'
        this.$router.push({ name: 'RegisterPage' })
      } else {
        axios({
          method: 'post',
          url: 'https://calm-beyond-37965.herokuapp.com/register',
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(data => {
            this.$router.push({ name: 'LoginPage' })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>

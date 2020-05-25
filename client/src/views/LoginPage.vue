<template>
 <div id="app">
  <v-container>
    <v-layout row class="text-md-center">
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
            <v-text-field prepend-icon="person" name="Email" label="Email"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
            <p>don't have an account? <a href="#" style="text-decoration: none">Register</a></p>
            <v-card-actions>
              <v-btn primary large block>Login</v-btn>
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
export default {
  name: 'LoginPage'
}
</script>

<style>

</style>

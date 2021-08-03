<template>
<div id="app">
  <Login
    v-if="auth_token === null"
    @login="login($event)" />
  <!-- <Dashboard v-else /> -->
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import UserService from './services/UserService'

export default {
  name: 'App',
  data() {
    return {
      auth_token: null,
    }
  },
  components: {
    // Dashboard,
    Login,
  },
  methods: {
    login(data) {
      UserService
        .login(data.name, data.password)
        .then(res => {
          if (res.error) {
            console.log('Error returned on login: ', res.error)
          }
          else if (res.token) {
            this.auth_token = res.token
          }
          else {
            console.log('Unexpected response to login: ', res)
          }
        })
    },
  },
}
</script>

<style>
@import './assets/styles/global.css';
</style>

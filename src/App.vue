<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue'

export default {
  components: {
    navbar: Navbar,
  },
  name: 'app'
}
</script>

<style>
</style>

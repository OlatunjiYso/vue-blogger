<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'

export default {
  components: {
    navbar: Navbar,
    'app-footer': Footer,
  },
  name: 'app'
}
</script>

<style>
</style>

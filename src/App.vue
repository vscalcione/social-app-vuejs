<template>
  <v-app id="app">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// Component
import Navbar from './components/layout/AppNavbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch('GET_SCREAMS');
  },
};
</script>

<style>
@import './src/assets/main.css';
#app {
  background: #d6df2e;
}
</style>

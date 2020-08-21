import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex';
import vuetify from './plugins/vuetify';
import axios from 'axios';

import day from './filters/day';
import jwtDecode from 'jwt-decode';

Vue.use(day);
const token = localStorage.FBidToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 > Date.now())
    axios.defaults.headers.common['Authorization'] = token;
  if (decodedToken.exp * 1000 < Date.now()) store.dispatch('LOGOUT_USER');
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  beforeCreate() {
    if (!store.state.token) this.$store.dispatch('FETCH_AUTH_USER');
  },
}).$mount('#app');

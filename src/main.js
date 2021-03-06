import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueResource);
import { routes } from './routes';

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

//new Vue(Vue.util.extend({ router }, App)).$mount('#app');

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

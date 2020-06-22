import Vue from 'vue';
import App from './App.vue';


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueResource from 'vue-resource';
Vue.use(VueResource);

// Created modules
import router from './Router/router';
import store from './components/store/store';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

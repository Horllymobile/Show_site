import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';

Vue.use(VueResource);

import router from './Router/router';


import store from './components/store/store';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

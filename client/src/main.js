import Vue from 'vue';
import './plugins/bootstrap-vue'
require('dotenv').config();
import App from './App.vue';
import router from './router';
import store from './store';
import api from './helpers/api';
Vue.prototype.$api = api;

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);



Vue.prototype.webname = 'familyTree';
Vue.prototype.webname = 'familyTree';
document.title = 'familyTree';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

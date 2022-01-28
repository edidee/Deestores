import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { BootstrapVue, VBHoverPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";



import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(BootstrapVue);

Vue.use(VBHoverPlugin);
Vue.config.ignoredElements = [/^ion-/];




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

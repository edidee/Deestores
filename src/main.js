import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { BootstrapVue, VBHoverPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";



import './registerServiceWorker'
import router from './router'
import store from './store'

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(BootstrapVue);

Vue.use(VBHoverPlugin);
Vue.config.ignoredElements = [/^ion-/];


// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

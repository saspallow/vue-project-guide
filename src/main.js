import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import axios from "axios";
import Title from "@/components/Title";

Vue.config.productionTip = false;

// Axios Settings
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_API;
Vue.prototype.$http = axios;

// Register Components
Vue.component("Title", Title);

// Axios Global Error Handle
axios.interceptors.response.use(null, err => {
  if (err.response.status === 401) {
    // Do Something
  } else {
    return Promise.reject(err);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

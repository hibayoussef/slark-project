import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import { routes } from "./router";
import axios from "axios";
import { store } from './store/index';
import Vuelidate from "vuelidate";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

axios.defaults.baseURL = "localhost:4000/api/services";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token") || null;
axios.defaults.headers.get["Accepts"] = "application/json";


const router = new VueRouter({
  routes,
  mode: "history",
}); 

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

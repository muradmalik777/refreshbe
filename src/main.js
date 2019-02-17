import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./router";
import "./assets/scss/theme.scss";
import Vuetify from 'vuetify'

Vue.use(Vuetify);

Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  render: h => h(App)
});

export default vueInstance;
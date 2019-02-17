import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./router";
import "./assets/scss/theme.scss";
import Vuetify from 'vuetify'
import VueParticles from 'vue-particles'
import Transitions from 'vue2-transitions'

Vue.use(Transitions)
Vue.use(VueParticles)
Vue.use(Vuetify);

Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  render: h => h(App)
});

export default vueInstance;
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./router";
import "./mixins/Global";
import "./assets/scss/theme.scss";
import Vuetify from 'vuetify'
import VueParticles from 'vue-particles'


Vue.use(VueParticles);
Vue.use(Vuetify);
Vue.use(require('vue2-animate/dist/vue2-animate.min.css'));
Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  render: h => h(App)
});

export default vueInstance;
<template>
<div>
  <v-container fluid class="full-screen bg-dark1 hero-section" grid-list-xl>
    <v-layout pa-2>
      <navbar></navbar>
    </v-layout>
    <v-layout pa-2 v-bind="adjustLayout">
      <v-flex>
        <transition name="zoomDown">
          <v-img v-if="show_hero" :src="require('@/assets/imgs/logo.png')" class="hero-logo"></v-img>
        </transition>
        <transition name="bounce" enter-active-class="bounceInLeft">
          <h1 v-if="show_hero" class="c-white text-animation hero-slogan">we are a digital agency that creates business websites that are making the difference</h1>
        </transition>
      </v-flex>
      <!-- <v-flex>
        <div class="particles">
          <vue-particles color="#666" hoverMode="grab" :lineOpacity="0.2" :hoverEffect="true" :clickEffect="false"></vue-particles>
        </div>
      </v-flex> -->
    </v-layout>
  </v-container>

  <v-container fluid class="full-screen bg-dark3 section2">

  </v-container>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
import VueTextGlitch from 'vue-text-glitch'

export default {
  name: 'home',
  components: {
    'navbar': NavBar,
    'TextGlitch': VueTextGlitch,
  },
  data: function(){
    return{
      show_hero: false,
    }
  },
  mounted: function(){
    this.show_hero = true
  },
  computed: {
    adjustLayout () {
      const adjustLayout = {}
      if (this.$vuetify.breakpoint.mdAndUp) {
        adjustLayout.row = true
      } else{
        adjustLayout.column = true
      }
      return adjustLayout
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-section{
  background: url("../assets/imgs/landing/landing-bg-1.png");
  .hero-slogan{
    width: 50%;
    margin: auto;
    text-align: center;
  }
}
</style>

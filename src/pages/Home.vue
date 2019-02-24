<template>
<div>
  <v-container fluid class="section1" grid-list-xl>
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

  <v-container fluid class="section2" grid-list-xl>
    <v-layout pa-4 justify-center v-bind="adjustLayout">
      <v-flex xs4>
        <h2 class="t-r origin">
          We have been around since 1997, but don't let our depth of experience make you feel we are old school.
          We are constantly evolving, moving and growing just as technology does and our clients need change.
        </h2>
        <h1 class="uppercase t-r">Inception</h1>
      </v-flex>
      <v-flex xs4>
        <v-img :src="require('@/assets/imgs/landing/quotation.png')" class="quotation"></v-img>
      </v-flex>
    </v-layout>
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
}
</script>

<style lang="scss" scoped>
.section1{
  height: 126vh;
  background: url("../assets/imgs/landing/landing-bg-1.png");
  background-size: cover;
  background-origin: border-box;
  background-repeat: no-repeat;
  .hero-slogan{
    width: 50%;
    margin: auto;
    text-align: center;
  }
}
.section2{
  .origin{
    margin: 120px auto;
  }
  .quotation{
    width: 400px;
    height: 350px;
    display: block;
    margin: 120px auto;
  }
}
</style>

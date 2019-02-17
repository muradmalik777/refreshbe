<template>
<div>
  <v-container fluid class="full-screen bg-dark1 section1">
    <v-layout pa-2>
      <navbar></navbar>
    </v-layout>
    <v-layout pa-5 justify-space-between row>
      <v-flex xs6 mt-3>
        <transition
          name="bounce"
          enter-active-class="bounceInLeft"
          leave-active-class="bounceOutRight">
          <div v-if="show">
            <TextGlitch class="hero c-white uppercase m-b m-t-3" background="transparent" fill="rgb(221, 145, 4)" highlight1="black" highlight2="black" text="D&D Creations"></TextGlitch>
            <h1 class="c-white hero-slogan">we are a digital agency that creates business websites <br> that are making the difference</h1>
          </div>
        </transition>
      </v-flex>
      <v-flex xs5>
        <vue-particles color="#ffffff"></vue-particles>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container fluid class="full-screen bg-dark1 section2">

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
      show: false
    }
  },
  mounted: function(){
    this.show = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.section1{
  
}
</style>

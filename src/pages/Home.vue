<template>
<div>
  <v-container fluid class="landing" grid-list-xl>
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
    </v-layout>
  </v-container>

  <v-container fluid class="origin" grid-list-xl>
    <v-layout pa-4 justify-center v-bind="adjustLayout">
      <v-flex xs4 align-center>
        <h2 class="t-r origin-text">
          We have been around since 1997, but don't let our depth of experience make you feel we are old school.
          We are constantly evolving, moving and growing just as technology does and our clients need change.
        </h2>
        <h1 class="uppercase t-r origin-title">Inception</h1>
      </v-flex>
      <v-flex xs4 align-center>
        <v-img :src="require('@/assets/imgs/landing/quotation.png')" class="quotation"></v-img>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container fluid class="services" fill-height grid-list-xl>
    <v-layout pa-4 align-center v-bind="adjustLayout">
      <div class="particles">
        <vue-particles color="#666" hoverMode="grab" :lineOpacity="0.2" :hoverEffect="true" :clickEffect="false"></vue-particles>
      </div>
      <v-flex xs12>
        <h1 class="services-title t-c c-white uppercase">services</h1>
        <h3 class="services-text t-c c-white">We provide a range of services in the spectrum of Web Development ranging from design to SEO optimization.
          Click to find out all about our services.</h3>
        <v-btn ripple class="services-btn" to="/services">View All <v-icon left light>arrow_right</v-icon></v-btn>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container fluid class="realizations" grid-list-xl>
    <v-layout pa-4 v-bind="adjustLayout">
      <v-flex xs12>
        <h1 class="realizations-title t-c uppercase p-b-3">realizations</h1>
      </v-flex>
    </v-layout>

    <v-layout pa-4 justify-center v-bind="adjustLayout">
      <v-flex xs3>
        <v-card :elevation="10" max-width="100%">
          <v-img :src="require('@/assets/imgs/default.jpg')" class="portfolio-img"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="card-title m-b">Wesbite 1</h2>
              <h3 class="card-text">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card :elevation="10" max-width="100%">
          <v-img :src="require('@/assets/imgs/default.jpg')" class="portfolio-img"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="card-title m-b">Wesbite 1</h2>
              <h3 class="card-text">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card :elevation="10" max-width="100%">
          <v-img :src="require('@/assets/imgs/default.jpg')" class="portfolio-img"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="card-title m-b">Wesbite 1</h2>
              <h3 class="card-text">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout pa-4 v-bind="adjustLayout">
      <v-flex xs12>
        <v-btn ripple class="relizations-btn" to="/portfolio">View More <v-icon left light>arrow_right</v-icon></v-btn>
      </v-flex>
    </v-layout>
  </v-container>

  <foot background="dark"></foot>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
import VueTextGlitch from 'vue-text-glitch';
import Foot from '../components/Footer';

export default {
  name: 'home',
  components: {
    'navbar': NavBar,
    'TextGlitch': VueTextGlitch,
    'foot': Foot,
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
.landing{
  height: 125vh;
  background: url("../assets/imgs/landing/landing-bg-1.png");
  background-size: cover;
  background-repeat: no-repeat;

  .hero-slogan{
    width: 50%;
    margin: auto;
    text-align: center;
  }
}
.origin{
  .origin-title{
    font-size: 50px;
  }
  .origin-text{
    margin: 100px auto;
    font-size: 28px;
  }
  .quotation{
    width: 400px;
    height: 350px;
    display: block;
    margin: 100px auto;
  }
}
.services{
  position: relative;
  height: 125vh;
  background: url("../assets/imgs/landing/landing-bg-2.png");
  background-repeat: no-repeat;
  background-size: cover;

  .services-title{
    font-size: 50px;
    margin: 30px auto;
  }
  .services-text{
    width: 50%;
    font-size: 28px;
    margin: 50px auto 30px;
  }
  .services-btn{
    color: #ffffff;
    background: transparent !important;
    font-size: 24px;
    width: 250px;
    height: 80px;
    padding: 18px;
    border-radius: 50px;
    border: 3px solid #ffffff;
    display: block;
    margin: 80px auto;

    .v-icon{
      font-size: 40px;
    }
  }
  .particles{
    position: absolute;
    top: 250px;
    left: 7.5%;
    bottom: 250px;
    width: 85%;
    height: 100%;
  }
}
.realizations{
  .realizations-title{
    font-size: 50px;
    margin: 30px auto;
  }
  .v-card{
    border: 3px solid #dddddd;
  }
  .relizations-btn{
    background: transparent !important;
    font-size: 24px;
    width: 250px;
    height: 80px;
    padding: 18px;
    border-radius: 50px;
    border: 3px solid #666666;
    display: block;
    margin: 80px auto;

    .v-btn__content{
      color: #666666 !important;
    }
    .v-icon{
      font-size: 40px;
    }
  }
}
</style>

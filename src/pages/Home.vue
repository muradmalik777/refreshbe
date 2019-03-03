<template>
<div>
  <!-- landing section starts -->
  <v-container v-view="heroHandler" fluid class="landing" grid-list-xl>
    <v-layout pa-2>
      <navbar color="light"></navbar>
    </v-layout>
    <v-layout pa-2 v-bind="adjustLayout">
      <v-flex>
        <transition name="bounce" enter-active-class="bounceInDown">
          <v-img v-if="show_hero" :src="require('@/assets/imgs/logo.png')" class="hero-logo pointer"></v-img>
        </transition>
        <transition name="bounce" enter-active-class="bounceInLeft">
          <h1 v-if="show_hero" class="c-white hero-slogan">we are a digital agency that creates business websites that are making the difference</h1>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>

<!-- origin section starts -->
  <v-container v-view="originHandler" fluid class="origin" grid-list-xl>
    <v-layout pa-4 justify-center v-bind="adjustLayout">
      <v-flex xs4 align-center>
        <transition name="bounce" enter-active-class="bounceInLeft">
          <div v-if="show_origin">
            <h2 class="t-r origin-text">
            We have been around since 1997, but don't let our depth of experience make you feel we are old school.
            We are constantly evolving, moving and growing just as technology does and our clients need change.
          </h2>
          <h1 class="uppercase t-r origin-title">Inception</h1>
          </div>
        </transition>
      </v-flex>
      <v-flex xs4 align-center>
        <transition name="bounce" enter-active-class="bounceInRight">
          <v-img v-if="show_origin" :src="require('@/assets/imgs/landing/quotation.png')" class="quotation"></v-img>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>

<!-- services section starts -->
  <v-container v-view="servicesHandler" fluid class="services" fill-height grid-list-xl>
    <v-layout pa-4 align-center v-bind="adjustLayout">
      <div class="particles">
        <vue-particles color="#666" hoverMode="grab" :lineOpacity="0.2" :hoverEffect="true" :clickEffect="false"></vue-particles>
      </div>
      <v-flex xs12>
        <transition name="bounce" enter-active-class="bounceInLeft">
          <div v-if="show_services">
            <h1 class="services-title t-c c-white uppercase">services</h1>
            <h3 class="services-text t-c c-white">We provide a range of services in the spectrum of Web Development ranging from design to SEO optimization.
              Click to find out all about our services.</h3>
            <v-btn ripple class="services-btn" to="/services">View All <v-icon left light>arrow_right</v-icon></v-btn>
          </div>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>

<!-- relizations section starts -->
  <v-container v-view="realizationsHandler" fluid class="realizations" grid-list-xl>
    <v-layout pa-4 v-bind="adjustLayout">
      <v-flex xs12>
        <transition name="bounce" enter-active-class="bounceInUp">
          <h1 v-if="show_realizations" class="realizations-title t-c uppercase p-b-3">realizations</h1>
        </transition>
      </v-flex>
    </v-layout>

    <v-layout pa-4 justify-center v-bind="adjustLayout">
      <v-flex xs3>
        <transition name="bounce" enter-active-class="bounceInLeft">
          <v-card v-if="show_realizations" :elevation="10" max-width="100%">
            <v-img :src="require('@/assets/imgs/default.jpg')" class="portfolio-img"></v-img>
            <v-card-title primary-title>
              <div>
                <h2 class="card-title m-b">Wesbite 1</h2>
                <h3 class="card-text">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                  ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</h3>
              </div>
            </v-card-title>
          </v-card>
        </transition>
      </v-flex>
      <v-flex xs3>
        <transition name="bounce" enter-active-class="bounceInUp">
          <v-card v-if="show_realizations" :elevation="10" max-width="100%">
            <v-img :src="require('@/assets/imgs/default.jpg')" class="portfolio-img"></v-img>
            <v-card-title primary-title>
              <div>
                <h2 class="card-title m-b">Wesbite 2</h2>
                <h3 class="card-text">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                  ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</h3>
              </div>
            </v-card-title>
          </v-card>
        </transition>
      </v-flex>
      <v-flex xs3>
        <transition name="bounce" enter-active-class="bounceInRight">
          <v-card v-if="show_realizations" :elevation="10" max-width="100%">
            <v-img :src="require('@/assets/imgs/default.jpg')" class="portfolio-img"></v-img>
            <v-card-title primary-title>
              <div>
                <h2 class="card-title m-b">Wesbite 3</h2>
                <h3 class="card-text">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                  ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</h3>
              </div>
            </v-card-title>
          </v-card>
        </transition>
      </v-flex>
    </v-layout>

    <v-layout pa-4 v-bind="adjustLayout">
      <v-flex xs12>
        <transition name="bounce" enter-active-class="bounceInUp">
          <v-btn v-if="show_realizations" ripple class="relizations-btn" to="/portfolio">View More <v-icon left light>arrow_right</v-icon></v-btn>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>

<!-- footer starts -->
  <foot background="dark"></foot>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
import Foot from '../components/Footer';

export default {
  name: 'home',
  components: {
    'navbar': NavBar,
    'foot': Foot,
  },
  data: function(){
    return{
      show_hero: false,
      show_origin: false,
      show_services: false,
      show_realizations: false,
    }
  },
  created: function(){
    window.scrollTo(0,0); 
  },
  mounted: function(){
    this.show_hero = true
  },
  methods: {
    heroHandler: function(event){
      if(event.type === 'enter' && event.percentInView >= 0.3){
        this.show_hero = true
      } else if(event.type === 'exit' && event.percentTop > 0.4){
        this.show_hero = true
      } else {
        if(event.percentInView > 0.48){
          this.show_hero = true
        }
        else{
          this.show_hero = false
        }
      }
    },
    originHandler: function(event){
      if (event.type === 'enter') {
        if (event.percentInView > 0.3) {
            this.show_origin = true
        } else {
            this.show_origin = false
        }
      } else if (event.type === 'exit') {
        if (event.percentInView < 0.3) {
            this.show_origin = false
        } else {
            this.show_origin = true
        }
      } else {
        if (event.percentInView > 0.3) {
            this.show_origin = true
        } else {
            this.show_origin = false
        }
      }
    },
    servicesHandler: function (event) {
      if (event.type === 'enter') {
        if (event.percentInView > 0.3) {
            this.show_services = true
        }
      } else if (event.type === 'exit') {
        if (event.percentTop < 0.3) {
            this.show_services = false
        } else {
            this.show_services = true
        }
      } else {
        if (event.percentInView > 0.3) {
            this.show_services = true
        } else {
            this.show_services = false
        }
      }
    },
    realizationsHandler: function (event) {
      if (event.type === 'enter') {
        if (event.percentInView > 0.3) {
            this.show_realizations = true
        }
      } else if (event.type === 'exit') {
        if (event.percentTop < 0.3) {
            this.show_realizations = false
        } else {
            this.show_realizations = true
        }
      } else {
        if (event.percentInView > 0.3) {
            this.show_realizations = true
        } else {
            this.show_realizations = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.landing{
  background: url("../assets/imgs/landing/landing-bg-1.png");
  min-height: 1285px;
  background-size: cover;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: calc(100% + 20px) 90%;
  background-position: -20px -20px;

  .hero-slogan{
    width: 50%;
    margin: auto;
    text-align: center;
  }
}
.origin{
  min-height: 70vh;
  .origin-title{
    font-size: 50px;
  }
  .origin-text{
    margin: 100px auto;
    font-size: 28px;
  }
  .quotation{
    max-width: 400px;
    height: auto;
    display: block;
    margin: 100px auto;
  }
}
.services{
  position: relative;
  background: url("../assets/imgs/landing/landing-bg-2.png");
  height: 1285px;
  background-size: cover;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: calc(100% + 20px) 90%;
  background-position: -20px -20px;

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
  }
}
.realizations{
  height: 100vh;
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

@media only screen and (max-width: 425px) {
  .landing{
    max-height: 700px;
    .hero-logo{
      max-width: 200px;
      height: auto;
    }
    .hero-slogan{
      width: 90%;
      font-size: 20px;
    }
  }
  .origin{
    height: 600px;
    .origin-title{
      font-size: 28px;
      text-align: center !important;
    }
    .origin-text{
      margin: 30px auto;
      font-size: 16px;
      text-align: center !important
    }
    .quotation{
      max-width: 200px;
      height: auto;
      display: block;
      margin: 30px auto;
    }
  }
  .services{
    position: relative;
    max-height: 700px;

    .services-title{
      font-size: 28px;
      margin: 100px auto 50px;
    }
    .services-text{
      width: 90%;
      font-size: 18px;
      margin: 30px auto;
    }
    .services-btn{
      color: #ffffff;
      background: transparent !important;
      font-size: 18px;
      width: 165px;
      height: 56px;
      padding: 10px;
      border-radius: 50px;
      border: 3px solid #ffffff;
      display: block;
      margin: 30px auto;

      .v-icon{
        font-size: 30px;
      }
    }
    .particles{
      position: absolute;
      top: 200;
      left: 0;
      width: 100%;
      height: 100%;
    }
  } 
  .realizations{
    height: auto;

    .realizations-title{
      font-size: 28px;
      margin: 30px auto;
    }
    .v-card{
      border: 3px solid #dddddd;
      .card-title{
        font-size: 22px;
      }
      .card-text{
        font-size: 16px;
      }
    }
    .relizations-btn{
      background: transparent !important;
      font-size: 18px;
      width: 165px;
      height: 56px;
      padding: 10px;
      border-radius: 50px;
      border: 3px solid #666666;
      display: block;
      margin: 30px auto;

      .v-btn__content{
        color: #666666 !important;
      }
      .v-icon{
        font-size: 30px;
      }
    }
  }
}
</style>

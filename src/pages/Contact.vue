<template>
    <div>
        <v-container fluid class="main" grid-list-lg>
            <v-layout pa-2>
              <navbar :showLogo="false"></navbar>
            </v-layout>

            <v-layout justify-center row>
                <v-flex xs12 sm12 md4 lg4 align-self: center>
                    <transition name="zoomDown">
                        <router-link to="/"><v-img v-if="show_hero" :src="require('../assets/imgs/logo.png')" class="hero-logo pointer"></v-img></router-link>
                    </transition>
                </v-flex>
            </v-layout>

            <v-layout justify-center v-bind="adjustLayout" >
                <v-flex xs3>
                    <transition name="bounce" enter-active-class="bounceInLeft">
                        <div v-if="show_hero">
                            <img src="@/assets/imgs/contact/contact-loc.png" class="image">
                            <h2 class="c-white t-c">Duinparklaan 41, B670 Oostduinkerke</h2>
                        </div>
                    </transition>
                </v-flex>
                <v-flex xs3>
                    <transition name="bounce" enter-active-class="bounceInLeft">
                        <div v-if="show_hero">
                            <img src="@/assets/imgs/contact/contact-ph.png" class="image">
                            <h2 class="c-white t-c">+32 475 529 103</h2>
                        </div>
                    </transition>
                </v-flex>
                <v-flex xs3>
                    <transition name="bounce" enter-active-class="bounceInRight">
                        <div v-if="show_hero">
                            <img src="@/assets/imgs/contact/contact-mail.png" class="image">
                            <h2 class="c-white t-c">info@ddcreation.be</h2>
                        </div>
                    </transition>
                </v-flex>
            </v-layout>
        </v-container>
        <foot background="light"></foot>
    </div>
</template>
<script>
import NavBar from '../components/NavBar';
import Foot from '../components/Footer';

export default {
    name: 'contact',
    components: {
        'navbar': NavBar,
        'foot': Foot
    },
    data: function(){
        return {
            show_hero: false,
        }
    },
    mounted: function() {
        this.show_hero = true
    },
    
}
</script>
<style lang="scss" scoped>
.main {
    min-height: 1285px;
    background: url("../assets/imgs/contact/contact-bg.png");
    background-size: cover;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: calc(100% + 20px) 90%;
    background-position: -20px -20px;
    .footer {
        height: 300px;
        .icon {
            width: 25px;
            height: auto;
            margin: 10px;
        }
    }
    .image {
        max-width: 100px;
        height: auto;
        margin: 75px auto;
        display: block;
    }
}

@media (max-width: 425px) {
    .main {
        .hero-logo {
            max-width: 200px;
            height: auto;
        }
        .footer {
            height: 200px;
            .icon {
                width: 25px;
                height: auto;
                margin: 10px;
            }
        }
        .image {
            max-width: 60px;
            height: auto;
            margin: 30px auto;
            display: block;
        }
        h2{
            font-size: 16px;
            width: 70%;
            display: block;
            margin: auto;
        }
    }
}
</style>

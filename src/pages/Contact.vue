<template>
    <div>
        <v-container fluid class="main" grid-list-lg>
            <!-- <img src="@/assets/imgs/contact/contact-bg.png" class="background"> -->
            <v-layout pa-2>
              <navbar :showLogo="true"></navbar>
            </v-layout>

            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs12 sm12 md4 lg4 align-self: center>
                    <transition name="zoomDown">
                        <img v-if="show_hero" src="@/assets/imgs/logo.png" class="dd-logo">
                    </transition>
                </v-flex>
            </v-layout>

            <v-layout align-center justify-space-around v-bind="adjustLayout" fill-height>
                <v-flex xs4 align-self: center class="contact-container">
                    <transition name="bounce" enter-active-class="bounceInLeft">
                        <div v-if="show_hero">
                            <img src="@/assets/imgs/contact/contact-ph.png" class="image">
                            <h2 class="c-white t-c">Duinparklaan 41, B670 Oostduinkerke</h2>
                        </div>
                    </transition>
                </v-flex>
                <v-flex xs4 align-self: center class="contact-container">
                    <transition name="bounce" enter-active-class="bounceInLeft">
                        <div v-if="show_hero">
                            <img src="@/assets/imgs/contact/contact-mail.png" class="image">
                            <h2 class="c-white t-c">+32 475 529 103</h2>
                        </div>
                    </transition>
                </v-flex>
                <v-flex xs4 align-self: center class="contact-container">
                    <transition name="bounce" enter-active-class="bounceInRight">
                        <div v-if="show_hero">
                            <img src="@/assets/imgs/contact/contact-loc.png" class="image">
                            <h2 class="c-white t-c">info@ddcreation.be</h2>
                        </div>
                    </transition>
                </v-flex>
            </v-layout>

            <!-- <v-layout align-end justify-center row fill-height class="footer">
                    <img src="@/assets/imgs/contact/fb-grad.png" class="icon">
                    <img src="@/assets/imgs/contact/in-grad.png" class="icon">
                    <img src="@/assets/imgs/contact/twitter-grad.png" class="icon">
            </v-layout> -->
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
    // .background {
    //     z-index: 0;
    //     position: absolute;
    //     top: 0px;
    //     left: -25px;
    // }
    min-height: 1285px;
    background: url("../assets/imgs/contact/contact-bg.png");
    background-size: cover;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: calc(100% + 20px) 90%;
    background-position: -20px -20px;
    .dd-logo {
        max-width: 250px;
        height: auto;
        margin: auto;
        display: block;
    }
    .footer {
        height: 300px;
        .icon {
            width: 25px;
            height: auto;
            margin: 10px;
        }
    }
    .contact-container {
        max-width: 300px;
        height: 300px;
        .image {
            max-width: 100px;
            height: auto;
            margin: 75px auto;
            display: block;
        }
    }
}

@media (max-width: 1000px) {
    .main {
        min-height: 1985px;
        background-size: calc(230% + 20px) 90%;
        background-position: -610px -20px;
    }
}
</style>

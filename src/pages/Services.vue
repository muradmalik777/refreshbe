<template>
    <div>
        <v-container fluid>
            <v-layout pa-2>
                <navbar color="dark"></navbar>
            </v-layout>

            <v-layout pa-2 align-center justify-center row fill-height>

                <div class="services-overview">
                    <v-layout pa-2 align-center justify-center row fill-height class="services-overview-flex">
                        <transition name="bounce" enter-active-class="bounceInLeft">
                            <div class="focus" v-if="show">
                                <div class="content" v-if="identityVisible">
                                    <v-layout pa-2 align-center justify-center column fill-height class="services-focus-flex">
                                        <img src="@/assets/imgs/services/5.png" class="focus-img">
                                        <h1>Brand Identity</h1>
                                        <h3 class="focus-text">We provide spot on Brand Identity Services to our clients, from Logo and Theme Design, Web Presence, Social Media Marketing, SEO and much more.</h3> 
                                    </v-layout>
                                </div>
                                <div class="content" v-if="designVisible">
                                    <v-layout pa-2 align-center justify-center column fill-height>
                                        <img src="@/assets/imgs/services/4.png" class="focus-img">
                                        <h1>Web Design</h1>
                                        <h3 class="focus-text">We have developers with verstile set of expertise in web design and development. A long list of fullfilled projects show the services we provide in this regard. Check out our portfolio.</h3> 
                                    </v-layout>
                                </div>
                                <div class="content" v-if="marketingVisible">
                                    <v-layout pa-2 align-center justify-center column fill-height>
                                        <img src="@/assets/imgs/services/9.png" class="focus-img">
                                        <h1>Marketing</h1>
                                        <h3 class="focus-text">Marketing is the backbone of any successfull business venture, we provide a range of services in this niche as well.</h3> 
                                    </v-layout>
                                </div>
                            </div>
                        </transition>
                        <transition name="bounce" enter-active-class="bounceInRight">
                            <div class="mobile-tablet-selector" v-if="show">
                                <div class="ellipse e1" @click="changeContent('identity')" :class="{active: identityVisible}">
                                </div>  
                                <div class="ellipse e2" @click="changeContent('design')" :class="{active: designVisible}">
                                </div>
                                <div class="ellipse e3" @click="changeContent('marketing')" :class="{active: marketingVisible}">
                                </div>
                            </div>
                        </transition>
                        <transition name="bounce" enter-active-class="bounceInRight">
                            <div class="selector" v-if="show">
                                <div class="ellipse e1" @click="changeContent('identity')" :class="{active: identityVisible}">
                                    <img src="@/assets/imgs/services/5.png" class="icon" />    
                                </div>  
                                <div class="ellipse e2" @click="changeContent('design')" :class="{active: designVisible}">
                                    <img src="@/assets/imgs/services/4.png" class="icon" />
                                </div>
                                <div class="ellipse e3" @click="changeContent('marketing')" :class="{active: marketingVisible}">
                                    <img src="@/assets/imgs/services/9.png" class="icon" />
                                </div>
                                <img src="@/assets/imgs/services/half-circle.png" class="selector-bg">
                            </div>
                        </transition>
                        
                        
                    </v-layout>
                </div>
            </v-layout>
        </v-container>

        <v-container fluid class="brand-identity-section">
            <div class="service-bg first-section">
                <v-layout align-center justify-center v-bind="adjustLayout" class="layout-zero-padding">
                    <v-flex xs12 md4>
                        <div class="title">
                            <h2>Brand Identity</h2>
                            
                            <h4>We provide spot on Brand Identity Services to our clients, from Logo and Theme Design, Web Presence, Social Media Marketing, SEO and much more.</h4>
                        </div>
                    </v-flex>
                    <v-flex xs12 md4>
                        <div class="triangle-container">
                            <img src="@/assets/imgs/services/5.png" class="triangle-image" />
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>

        <v-container fluid class="photography-section">
            <div class="service-bg">
                <v-layout align-center justify-center v-bind="adjustLayout" class="layout-zero-padding">
                    <v-flex xs12 md4>
                        <div class="triangle-container">
                            <img src="@/assets/imgs/services/7.png" class="triangle-image" />
                        </div>
                    </v-flex>
                    <v-flex xs12 md4>
                        <div class="title">
                            <h2>Photography</h2>
                            
                            <h4>A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog.</h4>
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>

        <v-container fluid class="brand-identity-section">
            <div class="service-bg">
                <v-layout align-center justify-center v-bind="adjustLayout" class="layout-zero-padding">
                    <v-flex xs12 md4>
                        <div class="title">
                            <h2>Web Design</h2>
                            
                            <h4>A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog.</h4>
                        </div>
                    </v-flex>
                    <v-flex xs12 md4>
                        <div class="triangle-container">
                            <img src="@/assets/imgs/services/4.png" class="triangle-image" />
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>

        <v-container fluid class="photography-section">
            <div class="service-bg">
                <v-layout align-center justify-center v-bind="adjustLayout" class="layout-zero-padding">
                    <v-flex xs12 md4>
                        <div class="triangle-container">
                            <img src="@/assets/imgs/services/9.png" class="triangle-image" />
                        </div>
                    </v-flex>
                    <v-flex xs12 md4>
                        <div class="title">
                            <h2>Marketing</h2>
                            <h4>A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog.</h4>
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>

        <v-container fluid class="last-section brand-identity-section">
            <div class="service-bg">
                <v-layout align-center justify-center v-bind="adjustLayout" class="layout-zero-padding">
                    <v-flex xs12 md4>
                        <div class="title">
                            <h2>SEO</h2>
                            <h4>A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog. A quick brown fox jumps over the lazy sleeping dog.</h4>
                        </div>
                    </v-flex>
                    <v-flex xs12 md4>
                        <div class="triangle-container">
                            <img src="@/assets/imgs/services/3.png" class="triangle-image" />
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>

        <foot></foot>
    </div>
</template>
<script>
import NavBar from '../components/NavBar';
import Foot from '../components/Footer'

export default {
    name: 'services',
    components: {
        'navbar': NavBar,
        'foot': Foot
    },
    data: function () {
        return {
             identityVisible: true,
             designVisible: false,
             marketingVisible: false,
             show: false
        }
    },
    mounted: function(){
        this.show = true
    },
    methods: {
        changeContent: function (section) {
            this.identityVisible = false;
            this.designVisible = false;
            this.marketingVisible = false;
            if (section == 'identity') {
                this.identityVisible = true;
            } else if (section == 'design') {
                this.designVisible = true;
            } else if (section == 'marketing') {
                this.marketingVisible = true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>

.brand-identity-section {
    .first-section {
        margin-top: 250px !important;
    }
}

.brand-identity-section {
    padding: 0px !important;
    .service-bg {
        background: linear-gradient(to bottom right, #140779, #370C2E);
        transform: rotate(-5deg);
        width: 110vw;
        margin-left: -50px;
        .layout-zero-padding {
            transform: rotate(5deg);
            .title {
                padding: 25px;
                h2, h4 {
                    color: #fff;
                }
                h2{
                    position: relative;
                    margin-bottom: 50px;
                    &::before{
                        content: "";
                        position: absolute;
                        top: 55px;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        border-bottom: 5px solid #fff;
                        border-radius: 25px;
                    }
                }
            }
            .triangle-container {
                background: url('../assets/imgs/services/triangles-white.png');
                background-repeat: no-repeat;
                height: 750px;
                width: 400px;
                text-align: right;
                position: relative;
                background-size: 400px auto;
                display: block;
                margin: auto;
                .triangle-image {
                    position: relative;
                    top: 220px;
                    left: -30px;
                }
            }
        }
    }
}

.photography-section {
    padding: 0px !important;
    .service-bg {
        width: 100%;
        .layout-zero-padding {
            .title {
                padding: 25px;
                h2, h4 {
                    color: #000;
                    text-align: right;
                    display: block
                }
                h2{
                    position: relative;
                    margin-bottom: 50px;
                    &::before{
                        content: "";
                        position: absolute;
                        top: 55px;
                        right: 0;
                        bottom: 0;
                        width: 50px;
                        border-bottom: 5px solid #000;
                        border-radius: 25px;
                    }
                }
            }
            .triangle-container {
                background: url('../assets/imgs/services/triangles-dark.png');
                background-repeat: no-repeat;
                height: 750px;
                width: 400px;
                text-align: right;
                position: relative;
                background-size: 400px auto;
                margin-top: 150px;
                .triangle-image {
                    position: relative;
                    top: 220px;
                    left: -130px;
                }
            }
        }
    }
}

.services-overview {
    .selector {
        position: relative;
        width: 300px;
        .ellipse {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            border: 5px solid black;
            background-color: #fff;
            .icon {
                width: 75px;
                height: auto;
                position: relative;
                top: -95px;
            }
            &.e1 {
                position: absolute;
                top: 50px;
                left: 125px;
                &:hover {
                    width: 150px;
                    height: 150px;
                    top: 25px;
                    left: 100px;
                    .icon {
                        width: 150px;
                        height: auto;
                        position: relative;
                        top: -115px;
                        left: -5px;
                    }
                }
                &.active {
                    width: 150px;
                    height: 150px;
                    top: 25px;
                    left: 100px;
                    .icon {
                        width: 150px;
                        height: auto;
                        position: relative;
                        top: -115px;
                        left: -5px;
                    }
                }
            }
            &.e2 {
                position: absolute;
                top: 325px;
                right: -50px;
                .icon {
                    width: 75px;
                    height: auto;
                    position: relative;
                    top: -95px;
                }
                &:hover {
                    width: 150px;
                    height: 150px;
                    top: 300px;
                    right: -75px;
                    .icon {
                        width: 150px;
                        height: auto;
                        position: relative;
                        top: -105px;
                        left: -5px;
                    }
                }
                &.active {
                    width: 150px;
                    height: 150px;
                    top: 300px;
                    right: -75px;
                    .icon {
                        width: 150px;
                        height: auto;
                        position: relative;
                        top: -105px;
                        left: -5px;
                    }
                }
            }
            &.e3 {
                position: absolute;
                bottom: 50px;
                left: 125px;
                &:hover {
                    width: 150px;
                    height: 150px;
                    bottom: 25px;
                    left: 100px;
                    .icon {
                        width: 150px;
                        height: auto;
                        position: relative;
                        top: -105px;
                        left: -5px;
                    }
                }
                &.active {
                    width: 150px;
                    height: 150px;
                    bottom: 25px;
                    left: 100px;
                    .icon {
                        width: 150px;
                        height: auto;
                        position: relative;
                        top: -105px;
                        left: -5px;
                    }
                }
            }
        }
        img {
            &.selector-bg {
                width: 300px;
            }
        }
    }
    .focus {
        margin-right: -50px;
        .content {
            background: url('../assets/imgs/services/full-circle.png');
            width: 550px;
            height: 550px;
            background-size: 550px 550px;
            .focus-img {
                width: 200px;
                height: auto;
            }
            h1 {
                color: #fff;
                text-align: center;
            }
            .focus-text {
                color:#fff;
                text-align: center;
                width: 75%;
                padding: 50px 0px;
            }
        }
    }
}



.mobile-tablet-selector {
    display: none;
    .ellipse {
        width: 25px;
        height: 25px;
        margin: 75px 25px 25px 25px;
        border-radius: 100%;
        border: 5px solid black;
        background-color: #fff;
        display: inline-block;
        &:hover {
            width: 50px;
            height: 50px;
        }
        &.active {
            width: 50px;
            height: 50px;
            background-color: unset;
            border: unset;
            background: linear-gradient(to bottom right, #140779, #370C2E);
        }
    }
}
@media only screen and (max-width: 425px) {
    //top section
    .services-overview-flex {
        flex-direction: column !important;
    }
    .mobile-tablet-selector {
        display: block;
    }
    .selector {
        display: none;
    }
    .focus {
        margin-right: 0px !important;
        .content {
            background: url('../assets/imgs/services/full-circle.png');
            width: 350px !important;
            height: 350px !important;
            background-size: 350px 350px !important;
            .focus-img {
                margin-top: -50px;
                width: 200px !important;
                height: auto;
            }
            h1 {
                margin-top: -30px;
                color: #fff;
                text-align: center;
            }
            .focus-text {
                display: none;
                color:#fff;
                text-align: center;
                width: 75%;
            }
        }
    }

    //other sections
    .brand-identity-section {
        .first-section {
            margin-top: 50px !important;
        }
    }

    .service-bg{
        transform: rotate(0deg) !important;
    }
    .layout-zero-padding{
        transform: rotate(0deg) !important;
    }
    .triangle-container {
        background: url('../assets/imgs/services/triangles-white.png');
        background-repeat: no-repeat;
        height: 450px;
        width: 250px;
        position: relative;
        background-size: 300px auto;
        .triangle-image {
            position: relative;
            top: 220px;
            left: -30px;
        }
    }
}
</style>

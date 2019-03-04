<template>
<div>
    <v-container v-view="heroHandler" fluid>
        <v-layout pa-2>
            <navbar color="dark"></navbar>
        </v-layout>
        <v-layout pa-2 row justify-center>
            <v-flex xs12>
                <transition name="bounce" enter-active-class="bounceInDown">
                    <h1 v-if="hero" class="t-c tagline">Realizations</h1>
                </transition>
            </v-flex>
        </v-layout>

        <v-layout pa-4 justify-center v-bind="adjustLayout" class="projects">
            <transition name="bounce" enter-active-class="bounceInLeft">
                <v-flex xs4 v-if="hero">
                    <div class="f-r content">
                        <h6 class="applications"><span>BLOCKCHAIN</span> <span>SAAS</span> <span>SMART</span> <span>CONTRACTS</span></h6>
                        <h1 class="uppercase c-medium name m-t m-b">wesbite name</h1>
                        <div class="box">
                            <div class="left">
                                <p class="number">01</p>
                            </div>
                            <div class="right">
                                <p class="c-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <h4 class="c-medium uppercase m-b">technologies</h4>
                                <v-chip>VueJs</v-chip>
                                <v-chip>Laravel</v-chip>
                                <v-chip>Lumen</v-chip>
                                <v-chip>Php</v-chip>
                            </div>
                        </div>
                    </div>
                </v-flex>
            </transition>
            <transition name="bounce" enter-active-class="bounceInRight">
                <v-flex xs8 v-if="hero">
                    <v-img :src="require('@/assets/imgs/sample3.png')"></v-img>
                </v-flex>
            </transition>
            
        </v-layout>
    </v-container>

    <v-container v-view="firstHandler" fluid>
        <v-layout pa-4 justify-center v-bind="adjustLayout" class="projects">
            <transition name="bounce" enter-active-class="bounceInLeft">
               <v-flex v-if="first" xs8>
                    <v-img :src="require('@/assets/imgs/sample2.jpg')"></v-img>
                </v-flex>
            </transition>
            <transition name="bounce" enter-active-class="bounceInRight">
                <v-flex v-if="first" xs4>
                    <div class="f-l content">
                        <h6 class="applications"><span>BLOCKCHAIN</span> <span>SAAS</span> <span>SMART</span> <span>CONTRACTS</span></h6>
                        <h1 class="uppercase c-medium name m-t m-b">wesbite name</h1>
                        <div class="box">
                            <div class="left">
                                <p class="number">02</p>
                            </div>
                            <div class="right">
                                <p class="c-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <h4 class="c-medium uppercase m-b">technologies</h4>
                                <v-chip>VueJs</v-chip>
                                <v-chip>Laravel</v-chip>
                                <v-chip>Lumen</v-chip>
                                <v-chip>Php</v-chip>
                            </div>
                        </div>
                    </div>
                </v-flex>
            </transition>
        </v-layout>
    </v-container>

    <v-container v-view="secondHandler" fluid>
        <v-layout pa-4 justify-center v-bind="adjustLayout" class="projects">
            <transition name="bounce" enter-active-class="bounceInLeft">
                <v-flex v-if="second" xs4>
                    <div class="f-r content">
                        <h6 class="applications"><span>BLOCKCHAIN</span> <span>SAAS</span> <span>SMART</span> <span>CONTRACTS</span></h6>
                        <h1 class="uppercase c-medium name m-t m-b">wesbite name</h1>
                        <div class="box">
                            <div class="left">
                                <p class="number">03</p>
                            </div>
                            <div class="right">
                                <p class="c-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <h4 class="c-medium uppercase m-b">technologies</h4>
                                <v-chip>VueJs</v-chip>
                                <v-chip>Laravel</v-chip>
                                <v-chip>Lumen</v-chip>
                                <v-chip>Php</v-chip>
                            </div>
                        </div>
                    </div>
                </v-flex>
            </transition>
            <transition name="bounce" enter-active-class="bounceInRight">
                <v-flex v-if="second" xs8>
                    <v-img :src="require('@/assets/imgs/sample.jpg')"></v-img>
                </v-flex>
            </transition>
            
            
        </v-layout>
    </v-container>

    <foot></foot>

</div>
</template>
<script>
import NavBar from '../components/NavBar';
import Foot from '../components/Footer';

export default {
    name: 'portfolio',
    components: {
        'navbar': NavBar,
        'foot': Foot
    },
    data: function(){
        return{
            hero: false,
            first: false,
            second: false
        }
    },
    mounted: function(){
        this.hero = true
    },
    methods: {
        heroHandler: function(event){
            if(event.type === 'enter' && event.percentInView >= 0.3){
                this.hero = true
            } else if(event.type === 'exit' && event.percentTop > 0.4){
                this.hero = true
            } else {
                if(event.percentInView > 0.48){
                this.hero = true
                }
                else{
                this.hero = false
                }
            }
        },
        firstHandler: function(event){
            if (event.type === 'enter') {
                if (event.percentInView > 0.3) {
                    this.first = true
                } else {
                    this.first = false
                }
            } else if (event.type === 'exit') {
                if (event.percentInView < 0.3) {
                    this.first = false
                } else {
                    this.first = true
                }
            } else {
                if (event.percentInView > 0.3) {
                    this.first = true
                } else {
                    this.first = false
                }
            }
        },
        secondHandler: function (event) {
            if (event.type === 'enter') {
                if (event.percentInView > 0.3) {
                    this.second = true
                }
            } else if (event.type === 'exit') {
                if (event.percentTop < 0.3) {
                    this.second = false
                } else {
                    this.second = true
                }
            } else {
                if (event.percentInView > 0.3) {
                    this.second = true
                } else {
                    this.second = false
                }
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.projects{
    margin: 50px 0px;
    height: 90vh;
    .content{
        width: 90%;
        padding: 2rem 5rem;

        .name{
            width: 100%;
            float: left;
        }
        .applications{
            span{
                width: fit-content;
                margin-right: 15px;
                float: left;
                font-size: 14px;
                background: linear-gradient(to right, rgb(45, 9, 247) 0%, #67083c 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        .box{
            .left{
                width: 20%;
                float: left;
                .number{
                    font-size: 60px;
                    background: linear-gradient(to right, rgb(45, 9, 247) 0%, #67083c 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            .right{
                width: 80%;
                float: left;
            }
        }
    }
}

@media only screen and (max-width: 425px) {
    .tagline{
        font-size: 46px;
    }
    .projects{
        margin: 50px 0px;
        .content{
            width: 100%;
            padding: 0px;
            margin: 30px 10px;

            .name{
                width: 100%;
                float: left;
                font-size: 24px;
            }
            .applications{
                span{
                    width: fit-content;
                    margin-right: 15px;
                    float: left;
                    font-size: 12px;
                    background: linear-gradient(to right, rgb(45, 9, 247) 0%, #67083c 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            .box{
                .left{
                    width: 15%;
                    float: left;
                    .number{
                        font-size: 36px;
                        background: linear-gradient(to right, rgb(45, 9, 247) 0%, #67083c 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                .right{
                    width: 80%;
                    float: left;

                    p{
                        font-size: 14px;
                    }
                    .v-chip{
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>

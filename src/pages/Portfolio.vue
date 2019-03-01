<template>
<div>
    <v-container fluid>
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
            <v-flex xs4>
                <div class="f-r content">
                    <h6 class="applications"><span>BLOCKCHAIN</span> <span>SAAS</span> <span>SMART</span> <span>CONTRACTS</span></h6>
                    <h1 class="uppercase c-medium name m-t m-b">wesbite name</h1>
                    <div class="box">
                        <div class="left">
                            <p class="number">01</p>
                            <v-icon class="icon">arrow_forward</v-icon>
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
            <v-flex xs8>
                <v-img :src="require('@/assets/imgs/sample3.png')"></v-img>
            </v-flex>
        </v-layout>
    </v-container>

    <v-container fluid>
        <v-layout pa-4 justify-center v-bind="adjustLayout" class="projects">
            <v-flex xs8>
                <v-img :src="require('@/assets/imgs/sample2.jpg')"></v-img>
            </v-flex>
            <v-flex xs4>
                <div class="f-l content">
                    <h6 class="applications"><span>BLOCKCHAIN</span> <span>SAAS</span> <span>SMART</span> <span>CONTRACTS</span></h6>
                    <h1 class="uppercase c-medium name m-t m-b">wesbite name</h1>
                    <div class="box">
                        <div class="left">
                            <p class="number">02</p>
                            <v-icon class="icon">arrow_back</v-icon>
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
        </v-layout>
    </v-container>

    <v-container fluid>
        <v-layout pa-4 justify-center v-bind="adjustLayout" class="projects">
            <v-flex xs4>
                <div class="f-r content">
                    <h6 class="applications"><span>BLOCKCHAIN</span> <span>SAAS</span> <span>SMART</span> <span>CONTRACTS</span></h6>
                    <h1 class="uppercase c-medium name m-t m-b">wesbite name</h1>
                    <div class="box">
                        <div class="left">
                            <p class="number">03</p>
                            <v-icon class="icon">arrow_forward</v-icon>
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
            <v-flex xs8>
                <v-img :src="require('@/assets/imgs/sample.jpg')"></v-img>
            </v-flex>
        </v-layout>
    </v-container>

</div>
</template>
<script>
import NavBar from '../components/NavBar';

export default {
    name: 'portfolio',
    components: {
        'navbar': NavBar,
    },
    data: function(){
        return{
            hero: false,
        }
    },
    mounted: function(){
        this.hero = true
    }
    
}
</script>
<style lang="scss" scoped>
.projects{
    margin: 50px 0px;
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
                color: purple;
                font-size: 14px;
            }
        }
        .box{
            .left{
                width: 20%;
                float: left;
                .number{
                    font-size: 60px;
                    color: purple;
                }
                .icon{
                    font-size: 60px;
                    color: purple;
                    margin: 0px !important;
                }
            }
            .right{
                width: 80%;
                float: left;
            }
        }
    }
}
</style>

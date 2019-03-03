<template>
    <v-container fluid>
        <v-layout pa-2 justify-space-between row class="navbar">
            <v-flex xs6>
            <router-link to="/" class="f-l">
                <v-img v-if="light" :src="require('@/assets/imgs/logo.png')" to="/" class="logo"></v-img>
                <v-img v-else :src="require('@/assets/imgs/logo-dark.png')" to="/" class="logo"></v-img>
            </router-link>
            </v-flex>
            <v-flex xs6>
                <v-btn flat @click.stop="drawer = !drawer" class="pointer f-r">
                    <v-img v-if="light" :src="require('@/assets/imgs/burger.png')" class="menu-btn"></v-img>
                    <v-img v-else :src="require('@/assets/imgs/burger-dark.png')" class="menu-btn"></v-img>
                </v-btn>
                <transition name="slideRight">
                    <v-navigation-drawer v-if="drawer" style="animation-duration: 0.35s" :width="325" class="bg-dark1" v-model="drawer" absolute dark right temporary>
                        <v-layout justify-start pt-2>
                            <v-icon class="m-t-2 m-l-2" large @click="hideNavigation">clear</v-icon>
                        </v-layout>
                        <v-layout pa-2 row offset-xs2>
                            <img src="../assets/imgs/logo.png" class="icon">
                        </v-layout>
                        <v-layout pa-2 align-center justify-center column>
                            <v-flex justify-center xs2>
                                <div class="text-xs-center link-box animated-btn">
                                    <v-btn flat depressed to="/">Home</v-btn>
                                </div>
                            </v-flex>
                            <v-flex xs2>
                                <div class="text-xs-center link-box">
                                <v-btn flat to="/contact">Contact</v-btn>
                                </div>
                            </v-flex>
                            <v-flex xs2>
                                <div class="text-xs-center link-box">
                                    
                                <v-btn flat to="/portfolio">Portfolio</v-btn>
                                </div>
                            </v-flex>
                            <v-flex xs2>
                                <div class="text-xs-center link-box">
                                    <v-btn flat to="/services">Services</v-btn>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-navigation-drawer>
                </transition>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'navbar',
    props:['color'],
    data: function(){
        return{
            drawer: false,
            image: "@/assets/imgs/logo.png",
            light: true
        }
    },
    methods: {
        hideNavigation: function(){
            this.drawer = !this.drawer
        }
    },
    mounted: function(){
        if(this.$props.color === 'light'){
            this.light = true
        } else{
            this.light = false
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar{
    height: 120px;
    .v-flex{
        height: 120px;
    }
}
.logo{
  width: 110px;
  height: 125px;
}
.hero-logo{
  max-width: 320px;
  height: auto;
  display: block;
  margin: 10px auto 30px;
}
.v-navigation-drawer{
    background-color: #141720;
}
.link-box{
    margin: 10px;
}
.v-btn{
    font-size: 18px;
    font-weight: 500;
    &:hover{
        color: rgb(221, 145, 4) !important;;
    }
    &:hover::before{
        display: none;
    }
}
.v-btn--active{
    color: rgb(221, 145, 4) !important;
    background-color: transparent !important;
    &::before{
        display: none;
    }
}
.menu-btn{
    max-width: 50px;
}

@media only screen and (max-width: 425px) {
    .navbar{
        height: 100px;
        .v-flex{
            height: 100px;
        }
    }
    .logo{
    width: 80px;
    height: 90px;
    }
    .v-navigation-drawer{
        background-color: #141720;
    }
    .link-box{
        margin: 10px;
    }
    .v-btn{
        font-size: 18px;
        font-weight: 500;
        &:hover{
            color: rgb(221, 145, 4) !important;;
        }
        &:hover::before{
            display: none;
        }
    }
    .v-btn--active{
        color: rgb(221, 145, 4) !important;
        background-color: transparent !important;
        &::before{
            display: none;
        }
    }
    .menu-btn{
        max-width: 35px;
    }
}
</style>

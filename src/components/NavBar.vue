<template>
    <v-container fluid>
        <v-layout pa-2 justify-space-between row>
            <v-flex>
                <router-link to="/" class="f-l"><v-img :src="require('@/assets/imgs/logo.png')" to="/" class="logo"></v-img></router-link>
            </v-flex>
            <v-flex>
                <v-btn flat @click.stop="drawer = !drawer" class="pointer f-r"><v-img :src="require('@/assets/imgs/burger.png')" class="menu-btn"></v-img></v-btn>
                 <v-navigation-drawer class="bg-dark1" v-model="drawer" :width="400" absolute dark right temporary>
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
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'navbar',
    data: function(){
        return{
            drawer: false,
            image: "@/assets/imgs/logo.png",
        }
    },
    methods: {
        hideNavigation: function(){
            this.drawer = !this.drawer
        }
    }
}
</script>
<style lang="scss" scoped>
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
</style>

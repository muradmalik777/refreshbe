<template>
    <v-container fluid>
        <v-layout pa-2 justify-space-between row>
            <v-flex xl12 lg12 md12 xs12>
                <router-link to="/" class="f-l"><v-img :src="require('@/assets/imgs/logo.png')" width="210px" height="130px" to="/"></v-img></router-link>
            </v-flex>
            <v-flex xl12 lg12 md12 xs12>
                <v-icon large @click.stop="drawer = !drawer" class="menu-icon f-r">dehaze</v-icon>
                 <v-navigation-drawer class="bg-dark1" v-model="drawer" :width="400" absolute dark right temporary>
                     <v-layout justify-start pt-2>
                         <v-icon class="m-t" large @click="hideNavigation">clear</v-icon>
                     </v-layout>
                    <v-layout pa-2 row offset-xs2>
                        <img src="../assets/imgs/logo.png" width="210px" height="130px" class="icon">
                    </v-layout>
                    <v-layout pa-2 align-center justify-center column>
                        <v-flex justify-center xs2>
                            <div class="text-xs-center link-box animated-btn">
                                <v-btn flat depressed to="/">Home <v-icon medium>home</v-icon></v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs2>
                            <div class="text-xs-center link-box">
                            <v-btn flat to="/contact">Contact <v-icon medium>contact_support</v-icon></v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs2>
                            <div class="text-xs-center link-box">
                                
                            <v-btn flat to="/portfolio">Portfolio <v-icon medium>verified_user</v-icon></v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs2>
                            <div class="text-xs-center link-box">
                                <v-btn flat to="/services">Services <v-icon medium>cloud_done</v-icon></v-btn>
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
.v-icon{
    color: #ffffff;
    margin-left: 10px;
    margin-bottom: 7px
}
</style>

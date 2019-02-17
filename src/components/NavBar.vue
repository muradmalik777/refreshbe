<template>
    <v-container fluid>
        <v-layout pa-2 justify-space-between row>
            <v-flex xs6>
                <router-link to="/"><img src="../assets/imgs/logo.png" width="210px" height="130px"></router-link>
            </v-flex>
            <v-flex xs6>
                <v-btn @click.stop="drawer = !drawer" class="f-r">
                    <v-icon>format_align_right</v-icon>
                </v-btn>
                 <v-navigation-drawer v-model="drawer" :width="350" absolute dark right temporary>
                    <v-layout pa-2 column offset-xs2>
                        <img src="../assets/imgs/logo.png" width="210px" height="130px" class="icon">
                        <v-btn flat class="m-t-4 animated-btn" to="/">Home</v-btn>
                        <v-btn flat class="animated-btn" to="/contact">Contact</v-btn>
                        <v-btn flat class="animated-btn" to="/portfolio">Portfolio</v-btn>
                        <v-btn flat class="animated-btn" to="/services">Services</v-btn>
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
        }
    }
}
</script>
<style lang="scss" scoped>
.v-navigation-drawer{
    background-color: #151B3F;
    border: none !important;
    width: 0px;
}
</style>

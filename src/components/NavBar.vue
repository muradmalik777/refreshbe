<template>
    <v-container>
        <v-layout pa-2 justify-space-between row>
            <v-flex xs6>
                <img src="../assets/imgs/logo.png" width="210px" height="130px">
            </v-flex>
            <v-flex xs6>
                <v-btn @click.stop="drawer = !drawer" absolute right class="m-t m-r-3">
                    <v-icon>format_align_right</v-icon>
                </v-btn>
            </v-flex>

                <v-navigation-drawer v-model="drawer" absolute dark right temporary>
                    <v-layout pa-2 column>
                        <img src="../assets/imgs/logo.png" width="210px" height="130px" class="m">
                        <v-btn flat class="m-t-4" to="/">Home</v-btn>
                        <v-btn flat to="/contact">Contact</v-btn>
                        <v-btn flat to="/portfolio">Portfolio</v-btn>
                        <v-btn flat to="/services">Services</v-btn>
                    </v-layout>
                </v-navigation-drawer>
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
}
</style>

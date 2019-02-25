<template>
    <div>
        <v-container fluid class="foot" :class="{'dark': dark, 'light': !dark}">
            <v-layout pa-3 align-end justify-center row fill-height>
                <v-flex xs1>
                    <v-img v-if="dark" :src="require('../assets/imgs/landing/fb-white.png')" class="footer-icon"></v-img>
                    <v-img v-else :src="require('../assets/imgs/contact/fb-grad.png')" class="footer-icon"></v-img>
                </v-flex>
                <v-flex xs1>
                    <v-img v-if="dark" :src="require('../assets/imgs/landing/in-white.png')" class="footer-icon"></v-img>
                    <v-img v-else :src="require('../assets/imgs/contact/in-grad.png')" class="footer-icon"></v-img>
                </v-flex>
                <v-flex xs1>
                    <v-img v-if="dark" :src="require('../assets/imgs/landing/twitter-white.png')" class="footer-icon"></v-img>
                    <v-img v-else :src="require('../assets/imgs/contact/twitter-grad.png')" class="footer-icon"></v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'foot',
    props:['background'],
    data: function(){
        return{
            dark: false,
        }
    },
    mounted: function(){
        if(this.$props.background === 'dark'){
            this.dark = true
        }
    }
}
</script>
<style lang="scss" scoped>
.foot{
    // padding-top: 330px;
    .footer-icon{
        max-width: 50px;
        max-height: 50px;
        cursor: pointer;
        display: block;
        margin: auto;
    }
}
.dark{
    background: url('../assets/imgs/landing/footer-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 450px;
}
.light{
    background: #fafafa;
    height: fit-content;
}
</style>

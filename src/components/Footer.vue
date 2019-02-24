<template>
    <div>
        <v-container fluid class="foot" :class="{'dark': dark, 'light': !dark}">
            <v-layout pa-3 justify-center row>
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
        } else{
            this.light = true
        }
    }
}
</script>
<style lang="scss" scoped>
.foot{
    padding-top: 330px;
    .footer-icon{
        max-width: 70px;
        max-height: 70px;
        cursor: pointer;
    }
}
.dark{
    background: url('../assets/imgs/landing/footer-bg.png');
    background-size: cover;
    background-origin: border-box;
    background-repeat: no-repeat;
    height: 450px;
}
.light{
    background: #ffffff;
    height: 300px;
}
</style>

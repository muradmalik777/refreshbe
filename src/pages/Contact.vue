<template>
    <v-container fluid class="full-screen bg-dark4">
        <v-layout pa-2>
          <navbar :showLogo="true"></navbar>
        </v-layout>
    </v-container>
</template>
<script>
import NavBar from '../components/NavBar';

export default {
    name: 'contact',
    components: {
        'navbar': NavBar,
    },
    
}
</script>
<style lang="scss" scoped>

</style>

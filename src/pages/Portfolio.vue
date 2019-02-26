<template>
    <v-container fluid class="full-screen bg-dark3">
        <v-layout pa-2>
            <navbar color="light"></navbar>
        </v-layout>
    </v-container>
</template>
<script>
import NavBar from '../components/NavBar';

export default {
    name: 'portfolio',
    components: {
        'navbar': NavBar,
    },
    
}
</script>
<style lang="scss" scoped>

</style>

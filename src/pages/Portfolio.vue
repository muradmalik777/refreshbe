<template>
    <v-container fluid class="full-screen bg-dark3">
        <navbar></navbar>
        <h1>portfolio</h1>
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

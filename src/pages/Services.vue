<template>
    <v-container fluid class="full-screen bg-dark2">
        <navbar></navbar>
        <h1>Services</h1>
    </v-container>
</template>
<script>
import NavBar from '../components/NavBar';

export default {
    name: 'services',
    components: {
        'navbar': NavBar,
    },
}
</script>
<style lang="scss" scoped>

</style>

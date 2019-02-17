<template>
  <v-container fluid class="full-screen bg-dark1">
        <v-layout pa-2>
            <v-flex xs12>
              <navbar></navbar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
  name: 'home',
  components: {
    'navbar': NavBar,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{

}
</style>

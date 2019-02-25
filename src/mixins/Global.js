import Vue from 'vue'

Vue.mixin({
    computed: {
        adjustLayout() {
            const adjustLayout = {}
            if (this.$vuetify.breakpoint.mdAndUp) {
                adjustLayout.row = true
            } else {
                adjustLayout.column = true
            }
            return adjustLayout
        }
    },
    methods: {

    },
    filters: {

    }

});
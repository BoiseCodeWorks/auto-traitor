<template>
    <div class="car-details">
        {{car}}
    </div>
</template>

<script>
    export default {
        name: 'CarDetails',
        props: ['id'],
        mounted() {
            //this.$route.params.id
            if (this.$store.state.cars.length == 0) {
                this.$store.dispatch('getCars')
            }
        },
        data() {
            return {

            }
        },
        computed: {
            car() {
                return this.$store.state.cars.find(c => c._id == this.id)
            }
        },
        methods: {}
    }

</script>

<style>


</style>
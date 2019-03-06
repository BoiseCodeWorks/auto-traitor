<template>
    <div class="cars container-fluid">
        <div class="row">
            <div class="col">
                <h1>AUTO TRAITOR</h1>
            </div>
        </div>
        <div class="row">
            <car-form></car-form>
        </div>
        <!-- render a car component for each car -->
        <div class="row">
            <car v-for="car in cars" :carData='car' :key="car._id"></car>
        </div>
    </div>
</template>

<script>
    import Car from '@/components/Car.vue'
    import CarForm from '@/components/CarForm.vue'
    export default {
        name: 'Cars',
        mounted() {
            this.$store.dispatch('getCars')
        },
        data() {
            return {

            }
        },
        computed: {
            cars() {
                return this.$store.state.cars
            }
        },
        methods: {},
        components: {
            Car,
            CarForm
        }
    }

</script>

<style>


</style>
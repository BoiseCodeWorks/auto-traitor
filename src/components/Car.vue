<template>
    <div class="car col-3">
        <router-link :to="{name: 'CarDetails', params:{id: carData._id}}">
            <img :src="carData.imgUrl">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Car',
        props: ['carData'],
        data() {
            return {

            }
        },
        computed: {},
        methods: {}
    }

</script>

<style scoped>
    img {
        max-width: 250px
    }
</style>
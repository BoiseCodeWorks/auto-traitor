<template>
    <div class="car-form col">
        <button class="btn" @click="showform = !showform"
            :class="{'btn-danger': showform, 'btn-primary': !showform}">{{showform ? 'Cancel': 'Make Car'}}</button>
        <form v-if="showform" @submit.prevent="makeCar">
            <input v-model="newCar.make" type="text" name="make" placeholder="Make" required>
            <input v-model="newCar.model" type="text" name="model" placeholder="Model" required>
            <input v-model="newCar.year" type="decimal" name="year" placeholder="Year" required>
            <input v-model="newCar.description" type="text" name="description" placeholder="Description">
            <input v-model="newCar.price" type="number" name="price" placeholder="Price" required>
            <input v-model="newCar.imgUrl" type="url" name="imgUrl" placeholder="Image" required>
            <button type="submit">Submit</button>
        </form>`
    </div>
</template>

<script>
    export default {
        name: 'CarForm',
        data() {
            return {
                newCar: {},
                showform: false
            }
        },
        methods: {
            makeCar() {
                this.$store.dispatch('createCar', this.newCar)
            }
        }
    }

</script>

<style>


</style>
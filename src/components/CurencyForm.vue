<template>
  <form @submit.prevent="handleSubmit">
    <select>
        <!-- <option v-model="" key=""></option> -->
    </select>
    <button type="submit">Search!</button>  
  </form>
</template>

<script>
export default {
    methods: {
        handleSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style>

</style>
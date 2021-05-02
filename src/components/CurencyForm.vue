<template>
  <form @submit.prevent="handleSubmit">
    <select>
        <option v-for="curr in currencies" v-bind:key="curr.id">{{curr.id}}</option>
    </select>
    <button type="submit">Search!</button>  
  </form>
</template>

<script>
export default {
    props: {
      currencies: {
        type: Array,
      }
    },
    methods: {
        handleSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style>

</style>
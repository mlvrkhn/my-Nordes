<template>
  <form @submit.prevent="handleSubmit">
    <select v-model="selectedCurrency">
        <option disabled selected>Select Currency</option>
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
    data() {
      return {
        selectedCurrency: '',
      }
    },
    methods: {
        handleSubmit() {
            console.log('submit!');
            this.selectedCurrency = '';
        }
    }
}
</script>

<style>

</style>
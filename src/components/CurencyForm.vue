<template>
  <form @submit.prevent="handleSubmit" class="w-24 md:w-auto">
    <select v-model="selectedCurrency" class="border-2 p-2 rounded">
        <option disabled selected>Select Currency</option>
        <option v-for="curr in currencies" v-bind:key="curr.id">{{curr.id}}</option>
    </select>
    <button type="submit" class="bg-red-400 border-2 p-2 rounded">Generate Chart</button>  
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
            this.$emit('getCurrency', this.selectedCurrency)
            this.selectedCurrency = '';
        }
    }
}
</script>

<style>

</style>
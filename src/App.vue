<template>
  <img alt="Vue logo" src="./assets/logo.png" style="display: none">
  <currency-form :currencies="currencies"></currency-form>
  <line-chart :chartData="chartData"></line-chart>
</template>
<script>
import LineChart from './components/LineCharts.vue'
import CurrencyForm from './components/CurencyForm.vue'
import api from './utils/fetchHelper'

export default {
  name: 'App',
  components: {
    LineChart,
    CurrencyForm
  },
  data() {
    return {
      currencies: [],
      chartData: {
        datki: ['a', 'b', 'c', 'd'],
        totals: [1, 2, 3, 5],
      },
      label: 'martin',
      options: {},
    }
  },
  methods: {
  },
  async created() {
    const response = await api.getAvailCurrencies();
    await this.currencies.push(...response)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

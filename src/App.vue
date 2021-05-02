<template>
  <img alt="Vue logo" src="./assets/logo.png" style="display: none">
  <currency-form></currency-form>
  <line-chart :chartData="chartData"></line-chart>
</template>
<script>
import LineChart from './components/LineCharts.vue'
import CurrencyForm from './components/CurencyForm.vue'

export default {
  name: 'App',
  components: {
    LineChart,
    CurrencyForm
  },
  data() {
    return {
      chartData: {
        datki: ['a', 'b', 'c', 'd'],
        totals: [1, 2, 3, 5],
      },
      label: 'martin',
      options: {},
    }
  },
  methods: {
    fetchAvailCurrencies() {
      console.log('sth');
    }
  },
  async created() {
    // this.logsth();
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

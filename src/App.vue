<template>
  <img alt="Vue logo" src="./assets/nordes-logo.png" style="height: 100px">
  <h2>Nordes Bank API that displays currency fluctuation</h2>
  <currency-form :currencies="currencies" @get-currency="getRates"></currency-form>
  <line-chart v-if="chartData" :chartData="chartData" :label="label"></line-chart>
</template>

<script>
import LineChart from './components/LineCharts.vue';
import CurrencyForm from './components/CurencyForm.vue';
import api from './utils/fetchHelper';

export default {
  name: 'App',
  components: {
    LineChart,
    CurrencyForm
  },
  data() {
    return {
      currencies: [],
      observations: [],
      chartData: {
        observations: [],
        totals: [],
      },
      label: 'martin',
      options: {},
    }
  },
  methods: {
    async getRates(currency) {
      const response = await api.getCurrencyRates(currency);
      console.log('🚀 ~ getRates ~ response', await response)
      await this.chartData.observations.push(Object.values(response))
      // console.log(await response);
    }
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
  /* background-color: #2c3e50; */
  margin-top: 60px;
}
</style>

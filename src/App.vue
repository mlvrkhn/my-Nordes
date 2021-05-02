<template>
  <div class="grid max-w-screen-lg justify-items-center">
    <img alt="NordesBank-logo" src="./assets/nordes-logo.png" class="h-24">
    <h2 class="text-2xl p-4 place-self-center">Nordes Bank API that displays currency fluctuation</h2>
    <currency-form 
      :currencies="currencies" 
      @get-currency="getRates"
      ></currency-form>
    <line-chart 
      v-if="chartData.observations.length"
      v-model="chartData" 
      :chartData="chartData" 
      :label="label"
      ></line-chart>
  </div>
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
      chartData: {
        observations: [],
        prices: [],
      },
      label: 'Rate agains NOK',
      options: {},
    }
  },
  methods: {
    async getRates(currency) {
      const [dates, prices] = await api.getCurrencyRates(currency);
      this.chartData.observations = dates;
      this.chartData.prices = prices;
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
  margin-top: 60px;
}
</style>

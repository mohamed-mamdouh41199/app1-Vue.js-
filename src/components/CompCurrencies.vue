<template>
  <div class="box">
    <input type="number" v-model="amount" placeholder="Enter the Amount" />
    <!-- <input type="text" v-model="fromCurrency" /> -->
    <select v-model="fromCurrency" v-if="exchangeRatesLoaded">
      <option v-for="currency in sortedCurrencies" :key="currency">
        {{ currency }}
      </option>
    </select>
    <select v-model="toCurrency" v-if="exchangeRatesLoaded">
      <option v-for="currency in sortedCurrencies" :key="currency">
        {{ currency }}
      </option>
    </select>
    <h5 v-if="exchangeRatesLoaded">{{ convertedAmount }}</h5>
    <h5 v-else>Loading...</h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompCurrncies",
  props: {
    msg: String,
  },
  data() {
    return {
      amount: "",
      fromCurrency: "USD",
      toCurrency: "EGP",
      exchangeRates: {},
      exchangeRatesLoaded: false,
    };
  },
  computed: {
    convertedAmount() {
      const rateFrom = this.exchangeRates[this.fromCurrency];
      const rateTo = this.exchangeRates[this.toCurrency];
      if (rateFrom && rateTo) {
        return (
          ((this.amount / rateFrom) * rateTo).toFixed(2) + " " + this.toCurrency
        );
      }
      return 0;
    },
    sortedCurrencies() {
      // Check if exchangeRates is empty
      if (Object.keys(this.exchangeRates).length === 0) {
        return [];
      }
      // Sort currencies alphabetically
      return Object.keys(this.exchangeRates).sort();
    },
  },
  created() {
    this.fetchExchangeRates();
  },
  watch: {
    fromCurrency() {
      this.fetchExchangeRates();
    },
    toCurrency() {
      this.fetchExchangeRates();
    },
  },
  methods: {
    async fetchExchangeRates() {
      try {
        const response = await axios.get(
          "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=df3d1160dff84e749941f49c74e61b7f"
        );
        this.exchangeRates = response.data.rates;
        this.exchangeRatesLoaded = true;
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "/src/SCSS/comps/comp-currencies" as *;
</style>

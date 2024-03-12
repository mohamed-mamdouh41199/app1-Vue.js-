<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <CompCurrencies />
  </div>
</template>

<script>
import CompCurrencies from "@/components/CompCurrencies.vue";

export default {
  name: CompCurrencies,
  CompCurrencies,
  components: {
    CompCurrencies,
  },
  data() {
    return {
      title: "Currencies Transfer",
    };
  },
};
</script>
<style scoped>
.container {
  text-align: center;
}
</style>

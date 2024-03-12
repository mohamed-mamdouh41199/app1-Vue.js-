<template>
  <div class="container">
    <CompWeather />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CompTwo from "@/components/CompTwo.vue";
import CompWeather from "@/components/CompWeather.vue";
// import Vue from "vue";

export default {
  name: HelloWorld,
  CompTwo,
  CompWeather,
  components: {
    CompWeather,
  },
};
</script>

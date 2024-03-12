<template>
  <div class="home">
    <div class="container">
      <h3>This is {{ msg }}</h3>
      <p>This page will contain {{ cont }}</p>
      <HelloWorld />
      <CompOne />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CompOne from "@/components/CompOne.vue";
// import Vue from "vue";

export default {
  data: function () {
    return {
      msg: "Home Page",
      cont: "all you need",
    };
  },
  name: HelloWorld,
  CompOne,
  components: {
    HelloWorld,
    CompOne,
  },
};
</script>

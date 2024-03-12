<template>
  <div class="container">
    <h3>This is Contact Page</h3>
    <CompTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CompTwo from "@/components/CompTwo.vue";
// import Vue from "vue";

export default {
  name: HelloWorld,
  CompTwo,
  components: {
    CompTwo,
  },
};
</script>

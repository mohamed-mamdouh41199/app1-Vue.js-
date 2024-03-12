<template>
  <div>
    Hey from comp 1
    <div class="icons">
      <i class="fas fa-home"></i>
      <i class="fa-brands fa-playstation"></i>
      <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
      <i class="fa-brands fa-cc-apple-pay"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompOne",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "/src/SCSS/comps/comp-one" as *;
</style>

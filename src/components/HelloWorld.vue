<template>
  <div>
    Hey from hello world component
    <h5>in this comp we will ...</h5>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "/src/SCSS/comps/helloW-comp" as *;
</style>

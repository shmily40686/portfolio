<template>
  <div class="d3" id="d3">
    <h1>d3</h1>
  </div>
</template>

<script>
export default {
  name: 'D3',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .d3 {
         width: 100vw;
        height: 100vh;
        background-color: rgb(255, 226, 239);
        -webkit-transition: all 0.5s ease;
        padding-top: 200px;
        background-image: url("../assets/leaf.png");
        background-size: cover;
        background-repeat: no-repeat;
  }
</style>
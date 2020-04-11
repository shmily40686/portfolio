<template>
  <div class="kids" id="kids">
    <h1>kids</h1>
  </div>
</template>

<script>
export default {
  name: 'Kids',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .kids {
        width: 100vw;
        height: 100vh;
        background-color: rgb(255, 226, 239);
        -webkit-transition: all 0.5s ease;
        padding-top: 200px;
        background-image: url("../assets/leaf2.png");
        background-size: cover;
        background-repeat: no-repeat;
  }
</style>
<template>
  <div class="frog" id="frog">
    <h1>frog</h1>
  </div>
</template>

<script>
export default {
  name: 'Frog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .frog {
        width: 100vw;
        height: 100vh;
        background-color: rgb(233, 152, 190);
        -webkit-transition: all 0.5s ease;
        padding-top: 200px;
  }
</style>
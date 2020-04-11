<template>
  <div class="udmey" id="udmey">
    <h1>udmey</h1>
  </div>
</template>

<script>
export default {
  name: 'Udmey',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .udmey {
        width: 100vw;
        height: 100vh;
        background-color:  rgb(243, 182, 212);
        -webkit-transition: all 0.5s ease;
        padding-top: 200px;
        background-image: url("../assets/flowers4.png");
        background-size: cover;
        background-repeat: no-repeat;
  }
</style>
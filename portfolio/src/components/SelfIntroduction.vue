<template>
  <div class="self" id="self">
    <h1>Xiaowen Ling Self Introduction</h1>
    <img  src="../assets/me.jpg" >
  </div>
</template>

<script>
export default {
  name: 'SelfIntroduction',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .self {
    width: 100vw;
    height: 100vh;
    background-color: aquamarine;
    -webkit-transition: all 0.5s ease;
  }
  img {
    width: 200px;
    height: 300px;
  }
</style>

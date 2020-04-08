<template>
  <div class="skill" id="skill">
    <h1>Skill</h1>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .skill {
        width: 100vw;
        height: 100vh;
        background-color: rgb(192, 252, 232);
        -webkit-transition: all 0.5s ease;
  }
</style>
<template>
  <div class="skill" id="skill">
    <div id="logo">
      <img src="../assets/skill/js.png" class="skill-img">
      <img src="../assets/skill/html.png" class="skill-img">
      <img src="../assets/skill/css.png" class="skill-img">
      <img src="../assets/skill/react.png" class="skill-img">
      <img src="../assets/skill/redux.png" class="skill-img">
      <img src="../assets/skill/ruby.png" class="skill-img">
      <img src="../assets/skill/rails.png" class="skill-img">
      <img src="../assets/skill/php.png" class="skill-img">
      <img src="../assets/skill/jquery.png" class="skill-img">
      <img src="../assets/skill/vue.png" class="skill-img">
      <img src="../assets/skill/node.png" class="skill-img">
      <img src="../assets/skill/mysql.png" class="skill-img">
      <img src="../assets/skill/postgre.png" class="skill-img">
      <img src="../assets/skill/sql.png" class="skill-img">
      <img src="../assets/skill/git.png" class="skill-img">
      <img src="../assets/skill/socket.png" class="skill-img">
      <img src="../assets/skill/webpack.png" class="skill-img">
    </div>
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
        background-color: rgb(240, 208, 222);
        -webkit-transition: all 0.5s ease;
        padding-top: 200px;
        background-image: url("../assets/flowers1.png");
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 25px 25px 50px 0 white inset;
    }


  #logo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 100px;
    background: rgba(255, 255, 255, 0.6);
  }

  .skill-img {
    width: 14%;
    margin-right: 20px;
    margin-bottom: 30px;
  }
</style>
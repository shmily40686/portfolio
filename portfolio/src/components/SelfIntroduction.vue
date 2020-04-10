<template>
  <div class="self" id="self">
    <div id="info">
        <div id="head">
          <h1>Xiaowen Ling </h1>
          <img src="../assets/me.jpg">
          <h5>Software Engineer | JavaScript & Ruby & PHP specialist</h5>
        </div>
        <div id="text">
          I'm a software engineer with a specialty in technologies such as React, PHP,Redux, Rails, and Ruby. I enjoy working on
          a
          project I find meaningful and useful to others, and nothing excites me more than seeing all the peices of a project
          start coming together to achieve the ultimate goal! Lately, I have been focusing on improving my frontend skills
          (CSS3,
          GraphQL, animations). I find it very rewarding adding an aesthetically appealing design to a seamless and intuitive
          flow
          of actions for a user.
        
          On a more personal note, my hobbies include travelling with my family, playing with my dog, and playing video games. I
          especially like watching movies or television shows because I used to study film production and editing.
        </div>
    </div>
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
    background-color: rgb(243, 214, 227);
    -webkit-transition: all 0.5s ease;
    padding-top: 200px;
  }

  #info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0px 100px;
  }

  #head {
    flex:1;
  }

  #head img {
    border-radius: 100px;
  }
  #text {
    flex:2;
    min-width: 230px;
    font-size: 18px;
  }

  img {
    width: 200px;
    height: 300px;
  }
</style>

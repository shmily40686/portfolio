<template>
  <div class="self" id="self">
    <div id="info">
        <div id="head">
          <h1>Xiaowen Ling </h1>
          <img src="../assets/me.jpg" id="self-img">
          <h5>Software Engineer
          <br/>JavaScript | Ruby | PHP</h5>
        </div>
        <div id="text">
          I'm a software engineer specializing in technologies such as React, PHP, Redux, Rails, and Ruby. I enjoy working on
          projects I find meaningful and useful to others. Nothing excites me more than seeing all the pieces of a project
          start coming together to achieve the ultimate goal! Lately, I have been focusing on improving my frontend skills
          (CSS3, GraphQL, animations). I find it very rewarding to add an aesthetically appealing design to a seamless and
          intuitive flow of actions for a user.
        
          On a more personal note, my hobbies include travelling with my family, playing with my dog, and playing video games. I
          especially like watching movies or television shows because I used to study film production and editing.
        </div>
    </div>
    <a href="#skill" id="down"  v-on:click="showSkill">
        <font-awesome-icon icon="chevron-down" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SelfIntroduction',
  data: function () {
        return {
          textActive: false
        }
      },
  methods: {
     showSkill: function () {
      const sliderImages = document.querySelectorAll('.skill-img');
      sliderImages.forEach(sliderImage => {
        sliderImage.classList.add('active');
      })
    },
  },
  mounted() {
        setTimeout(() => {
          const text = document.getElementById("text")
          const img = document.getElementById("self-img")
          img.style.transform = "scale(0.7)";
          text.style.opacity = 1
          text.style.transform = "translate(0px, 0px)"
        },200)
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .self {
    width: 100vw;
    height: 100vh;
    background-color: rgb(243, 214, 227);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/heart.png");
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    box-shadow: 0 0 100px 70px white inset;
  }

  #down {
    font-size: 60px;
    /* margin-top: -20px; */
    opacity: 0.7;
    color: #aaa1a1;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
  }

  #down:hover {
    opacity: 0.9;
    color: #dbc17b;
  }

  #info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 100px;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 15%;
  }

  #head {
    flex:1;
  }

  #head img {
    border-radius: 100px;
    transform: scale(0);
    -webkit-transition: all 0.5s ease;
  }

  #text {
    flex:2;
    min-width: 205px;
    font-size: 18px;
    opacity: 0;
    -webkit-transition: all 2s ease;
    transform: translate(1000px, 0px);
  }

  #text:hover {
    color: #716207;
  }
  img {
    width: 200px;
    height: 300px;
  }


@media only screen and (max-width: 537px) {
    #text {
      font-size: 11px;
      width: 40vw;
      padding: 20px;
    }

    #info {
      margin-top: 40%;
      transform: scale(0.8);
    }
    
    #head h1 {
      font-size: 20px;
    }
}
</style>

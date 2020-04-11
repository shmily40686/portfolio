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
   methods: {
        debounce: function (func, wait = 20, immediate = true) {
          var timeout;
          return function () {
            var context = this, args = arguments;
            var later = function () {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          }
        },
         checkScroll: function() {
            const div = document.getElementById("skill")
            const sliderImages = document.querySelectorAll('.skill-img');
            sliderImages.forEach(sliderImage => {
              if(window.pageYOffset >= window.innerHeight / 2 - 100) {
                 sliderImage.classList.add('active');
              } 
            })
            console.log("div.offsetTop", div.offsetTop)
            console.log("window.innerHeight", window.innerHeight)
            console.log("window.pageYOffset", window.pageYOffset)
         }
      },
  mounted() {
    window.addEventListener("scroll", this.debounce(this.checkScroll))
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
        padding-top: 130px;
        background-image: url("../assets/flowers1.png");
        background-size: cover;
        background-repeat: no-repeat;
    }


  #logo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 80px 100px;
    margin-top: 110px;
    background: rgba(255, 255, 255, 0.6);
  }

  .skill-img {
    width: 9%;
    margin-right: 20px;
    margin-bottom: 30px;
    transition: all 3s ease;
    opacity: 0;
    transform:translateX(-80%) scale(0.95);
  }

  .skill-img.active {
     opacity: 1;
     transform:translateX(0%) scale(1);
  }

</style>
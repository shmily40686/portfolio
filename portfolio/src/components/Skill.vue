<template>
  <div class="skill" id="skill">
    <!-- <div>
      <i class="fas fa-sort-up"></i>
    </div> -->
    <div class="head-skill">
      <div v-on:click="frontendShow">Frontend Skills</div>
      <div v-on:click="backendShow">Backend Skills</div>
      <div v-on:click="fullstackShow">Fullstack Skills</div>
      <div v-on:click="textShow">Text Form</div>
    </div>
    <div id="logo">
      <img src="../assets/skill/js.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/html.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/css.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/react.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/redux.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/jquery.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/socket.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/webpack.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/vue.png" class="skill-img" v-show="frontend">
      <img src="../assets/skill/db.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/node.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/mysql.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/postgre.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/sql.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/git.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/ruby.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/rails.png" class="skill-img" v-show="backend">
      <img src="../assets/skill/php.png" class="skill-img" v-show="backend">
      <div class="text-form" v-show="text">JavaScript</div>
      <div class="text-form" v-show="text">HTML5</div>
      <div class="text-form" v-show="text">CSS</div>
      <div class="text-form" v-show="text">React.js</div>
      <div class="text-form" v-show="text">Redux.js</div>
      <div class="text-form" v-show="text">jQuery</div>
      <div class="text-form" v-show="text">Socket.io</div>
      <div class="text-form" v-show="text">Webpack</div>
      <div class="text-form" v-show="text">Vue.js</div>
      <div class="text-form" v-show="text">Node.js</div>
      <div class="text-form" v-show="text">SQL</div>
      <div class="text-form" v-show="text">Mysql</div>
      <div class="text-form" v-show="text">Postgre</div>
      <div class="text-form" v-show="text">MongoDB</div>
      <div class="text-form" v-show="text">Git</div>
      <div class="text-form" v-show="text">Ruby</div>
      <div class="text-form" v-show="text">Ruby on Rails</div>
      <div class="text-form" v-show="text">PHP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data: function () {
        return {
          frontend: true,
          backend:true,
          text:false
        }
      },
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
            console.log("window.pageYOffset", window.pageYOffset)
            const sliderImages = document.querySelectorAll('.skill-img');
            sliderImages.forEach(sliderImage => {
              if(window.pageYOffset >= window.innerHeight / 2 - 100) {
                 sliderImage.classList.add('active');
              } 
            })
            const p = document.querySelector(".u-picture");
            const t = document.querySelector(".u-text");
            if ( window.pageYOffset >= window.innerHeight + 100) {
              p.style.transform = "translateX(0%) scale(1)";
              t.style.transform = "translateX(0%) scale(1)";
            }
            const kp = document.querySelector(".k-picture");
            const kt = document.querySelector(".k-text");
             if (window.pageYOffset >= window.innerHeight*2 + 100) {
              kp.style.transform = "translateX(0%) scale(1)";
              kt.style.transform = "translateX(0%) scale(1)";
            }

            const fp = document.querySelector(".f-picture");
            const ft = document.querySelector(".f-text");
            if (window.pageYOffset >= window.innerHeight * 3 + 100) {
             fp.style.transform = "translateX(0%) scale(1)";
             ft.style.transform = "translateX(0%) scale(1)";
            }

            const cp = document.querySelector(".c-picture");
            const ct = document.querySelector(".c-text");
           if (window.pageYOffset >= window.innerHeight * 4 + 100) {
             cp.style.transform = "translateX(0%) scale(1)";
             ct.style.transform = "translateX(0%) scale(1)";
           }

            const dp = document.querySelector(".d-picture");
           const dt = document.querySelector(".d-text");
           if (window.pageYOffset >= window.innerHeight * 5 + 100) {
             dp.style.transform = "translateX(0%) scale(1)";
             dt.style.transform = "translateX(0%) scale(1)";
           }
         },
         frontendShow: function() {
            this.frontend = true;
            this.backend = false;
            this.text = false;
         },
         backendShow: function() {
           this.frontend = false;
           this.backend = true;
           this.text = false;
         },
         fullstackShow: function() {
          this.frontend = true;
          this.backend = true;
          this.text = false;
         },
         textShow: function() {
           this.frontend = false;
           this.backend = false;
           this.text = true;
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
        height: 85vh;
        background-color: rgb(240, 208, 222);
        -webkit-transition: all 0.5s ease;
        padding-top: 120px;
        background-image: url("../assets/flowers1.png");
        background-size: cover;
        background-repeat: no-repeat;
    }


  #logo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 100px 100px;
    margin-top: 55px;
    background: rgba(255, 255, 255, 0.6);
    height: 40%;
  }

  .skill-img {
    width: 9%;
    margin-right: 20px;
    margin-bottom: 30px;
    transition: all 3s ease;
    opacity: 0;
    transform:translateX(-80%) scale(0.95);
  }

  .skill-img.active:hover {
    transform: rotate(45deg)
  }

  .skill-img.active {
     opacity: 1;
     transform:translateX(0%) scale(1);
  }

  .show {
    visibility:hidden;
  }

  .head-skill {
    display: flex;
    justify-content: center;
    font-size: 25px;
  }

  .head-skill div {
    margin-left: 20px;
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    transition: all 0.5s ease;
  }

.head-skill div:hover {
  background: rgba(0, 0, 0, 0.6);
  color: #ffc4ce;
}

.text-form {
  font-size:20px;
  margin: 10px;
  font-weight: 600;
  color: #201f1b;
}

.text-form:hover {
  color: #a0915a;
}

</style>
<template>
  <div class="skill" id="skill">
    <a href="#self" id="down" >
      <font-awesome-icon icon="chevron-up" />
    </a>
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
    <a href="#udmey" id="down"  v-on:click="showUdmey">
      <font-awesome-icon icon="chevron-down" />
    </a>
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
        fadeInContact: function() {
          const title = document.querySelector(".c-white h1");
          setTimeout(() => {
            title.style.transform = "translateX(0%) scale(1)";
            title.style.opacity = 1;
          },0)
          const lines= document.querySelectorAll(".line");
          setTimeout(() => {
            lines.forEach((each) => {
              each.style.transform = "scale(1)";
              each.style.opacity = 1;
            })
          },500)
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
              p.style.opacity = 1;
              t.style.opacity = 1;
            }
            const kp = document.querySelector(".k-picture");
            const kt = document.querySelector(".k-text");
             if (window.pageYOffset >= window.innerHeight*2 + 100) {
              kp.style.transform = "translateX(0%) scale(1)";
              kt.style.transform = "translateX(0%) scale(1)";
              kp.style.opacity = 1;
              kt.style.opacity = 1;
            }

            const fp = document.querySelector(".f-picture");
            const ft = document.querySelector(".f-text");
            if (window.pageYOffset >= window.innerHeight * 3 + 100) {
             fp.style.transform = "translateX(0%) scale(1)";
             ft.style.transform = "translateX(0%) scale(1)";
             fp.style.opacity = 1;
             ft.style.opacity = 1;
            }

            const cp = document.querySelector(".c-picture");
            const ct = document.querySelector(".c-text");
           if (window.pageYOffset >= window.innerHeight * 4 + 300) {
             cp.style.transform = "translateX(0%) scale(1)";
             ct.style.transform = "translateX(0%) scale(1)";
             cp.style.opacity = 1;
             ct.style.opacity = 1;
           }

           const dp = document.querySelector(".d-picture");
           const dt = document.querySelector(".d-text");
           if (window.pageYOffset >= window.innerHeight * 5 + 300) {
             dp.style.transform = "translateX(0%) scale(1)";
             dt.style.transform = "translateX(0%) scale(1)";
             dp.style.opacity = 1;
             dt.style.opacity = 1;
           }

           if(window.pageYOffset >= window.innerHeight * 6 + 300) {
                 this.fadeInContact()
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
         },
         showUdmey: function () {
          const p = document.querySelector(".u-picture");
          const t = document.querySelector(".u-text");
          p.style.transform = "translateX(0%) scale(1)";
          t.style.transform = "translateX(0%) scale(1)";
          p.style.opacity = 1;
          t.style.opacity = 1;
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
        height: 95vh;
        background-color: rgb(240, 208, 222);
        -webkit-transition: all 0.5s ease;
        background-image: url("../assets/flowers1.png");
        background-size: cover;
        background-repeat: no-repeat;
        padding-top:80px;
        box-shadow: 0 0 100px 70px white inset;
    }

  #down {
    font-size: 60px;
    opacity: 0.7;
    color: #aaa1a1;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
  }

  #down:hover {
    opacity: 0.9;
    color: #dbc17b;
  }


  #logo {
    margin-top: 15%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 100px 100px;
    margin-top: 10px;
    background: rgba(255, 255, 255, 0.6);
    height: 35%;
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

@media only screen and (max-width: 537px) {
   .skill {
     padding-top: 37px;
   }
   .head-skill {
        font-size: 10px;
        width: 100vw;
   }

   /* .skill-img.active {
     transform: translateX(0%) scale(2);
   } */
   .text-form {
     font-size: 14px;
   }
}

</style>
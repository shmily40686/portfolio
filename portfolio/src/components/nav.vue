<template>
  <div class="nav">
    <a class="nav-a" href="#self">Introduction</a>
    <a class="nav-a" href="#skill"  v-on:click="showSkill">Skill</a>
    <a class="nav-a p"  v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        Project
        <div class="projects" v-show="active" >
            <a href="#udmey" v-on:click="showUdmey">udmey-clone</a>
            <a href="#kids">KidsCart</a>
            <a href="#frog">Frog Jumper</a>
            <a href="#chat">Fun Chat</a>
            <a href="#d3">D3</a>
        </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
            return {
               active: false
            }
        },
  methods: {
            mouseover: function () {
                this.active = true
            },
             mouseleave: function () {
                 this.active = false
            },
            showSkill: function () {
                 const sliderImages = document.querySelectorAll('.skill-img');
                  sliderImages.forEach(sliderImage => {
                        sliderImage.classList.add('active');
                })
            },
            showUdmey: function () {
                const p = document.querySelector(".u-picture");
                const t = document.querySelector(".u-text");
                p.style.transform= "translateX(0%) scale(1)";
                t.style.transform = "translateX(0%) scale(1)";
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .nav {
       position: fixed;
       display: flex;
       justify-content: center;
       align-items: center;
       width: 100%;
       height: 10vh;
       background-color: white;
       z-index:10;
   }

   .nav-a {
       font-size: 22px;
       cursor: pointer;
       margin-left: 25px;
       text-decoration: none;
       color: #2c3e50;
        -webkit-transition: all 0.35s ease;
   }

   .nav-a p {
       position: relative;
   }

   .nav-a:hover {
       color: rgb(250, 149, 196);
   }

   .projects {
       display: flex;
       flex-direction: column;
       position: absolute;
       background-color: white;
       top: 6.5vh;
       padding: 15px 30px 0px;
       border-bottom-left-radius: 5px;
       border-bottom-right-radius: 5px;
       opacity: 95%;
   }

   .projects a {
       margin-bottom: 16px;
       text-decoration: none;
       color: #2c3e50;
       -webkit-transition: all 0.35s ease;
       font-size: 15px;
   }

   .projects a:hover {
       color: rgb(235, 162, 210);
   }

   .skill-img.active {
     opacity: 1;
     transform:translateX(0%) scale(1);
   }
</style>
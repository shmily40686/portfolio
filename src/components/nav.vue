<template>
  <div class="nav">
    <a class="nav-a" href="#self">Introduction</a>
    <a class="nav-a" href="#skill"  v-on:click="showSkill">Skill</a>
    <a class="nav-a p"  v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        Project
        <div class="projects" v-show="active" >
            <a href="#udmey" v-on:click="showUdmey">udmey-clone</a>
            <a href="#kids" v-on:click="showKids">KidsCart</a>
            <a href="#frog" v-on:click="showFrog">Frog Jumper</a>
            <a href="#chat" v-on:click="showChat">Fun Chat</a>
            <a href="#d3" v-on:click="showD3">D3</a>
        </div>
    </a>
    <a class="nav-a" href="#concat" v-on:click="showMe">Contact Me</a>
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
                p.style.opacity = 1;
                t.style.opacity = 1;
            },
            showKids: function() {
                const kp = document.querySelector(".k-picture");
                const kt = document.querySelector(".k-text");
                    kp.style.transform = "translateX(0%) scale(1)";
                    kt.style.transform = "translateX(0%) scale(1)";
                    kp.style.opacity = 1;
                    kt.style.opacity = 1;
            },
            showFrog: function() {
                const fp = document.querySelector(".f-picture");
                const ft = document.querySelector(".f-text");
                    fp.style.transform = "translateX(0%) scale(1)";
                    ft.style.transform = "translateX(0%) scale(1)";
                    fp.style.opacity = 1;
                    ft.style.opacity = 1;
            },
            showChat: function() {
                const cp = document.querySelector(".c-picture");
                const ct = document.querySelector(".c-text");
                    cp.style.transform = "translateX(0%) scale(1)";
                    ct.style.transform = "translateX(0%) scale(1)";
                    cp.style.opacity = 1;
                    ct.style.opacity = 1;
            },
            showD3: function() {
                const dp = document.querySelector(".d-picture");
                const dt = document.querySelector(".d-text");
                    dp.style.transform = "translateX(0%) scale(1)";
                    dt.style.transform = "translateX(0%) scale(1)";
                    dp.style.opacity = 1;
                    dt.style.opacity = 1;
            },
            showMe: function () {
                const title = document.querySelector(".c-white h1");
                setTimeout(() => {
                    title.style.transform = "translateX(0%) scale(1)";
                    title.style.opacity = 1;
                }, 0)
                const lines = document.querySelectorAll(".line");
                setTimeout(() => {
                    lines.forEach((each) => {
                        each.style.transform = "scale(1)";
                        each.style.opacity = 1;
                    })
                }, 500)
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
       width: 100vw;
       height: 10vh;
       background-color: white;
       z-index: 10;
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

   @media only screen and (max-width: 537px) {
        .nav {
            padding: 10px;
        }
        .nav-a {
             font-size: 15px;
        }
    }
    
</style>
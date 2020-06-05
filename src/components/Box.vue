<template>
  <div class="musicBox" id="musicBox">
    <a href="#frog" id="down">
      <font-awesome-icon icon="chevron-up" />
    </a>
    <div class="big">
      <div class="b-picture">
        <img src="../assets/box/1.png">
        <img src="../assets/box/2.png">
        <img src="../assets/box/3.png">
        <img src="../assets/box/4.png">
        <img src="../assets/box/5.png">
        <img src="../assets/box/6.png">
      </div>
      <div class="b-text">
        <div class="b-text-header">
          <h2>Music Box</h2>
          <h4> (JavaScript, HTML5, CSS)</h4>
        </div>
        <h5>Runner game where a box jumps over obstacles and collects tokens to increase score.
        </h5>
        <ul>
          <li class="list">Created infinitely scrolling game by repeatedly calling HTML5 Canvas draw method using requestAnimationFrame
          </li>
          <li class="list">Designed algorithm using coordinates and the distance formula to detect collisions between player and obstacles
          </li>
          <li class="list">Implemented 3D illusion layering multiple canvas elements for background, objects, and foreground
          </li>
          <li class="list">Utilized webpack and OOP to design classes and separate components into logical concerns
          </li>
        </ul>
        <a href="https://shmily40686.github.io/frog-jumper ">Check the Project</a>
        <a href="https://github.com/shmily40686/frog-jumper">Check the Code</a>
      </div>
    </div>
      <a href="#chat" id="down" v-on:click="goDown">
        <font-awesome-icon icon="chevron-down" />
      </a>
  </div>
</template>

<script>
export default {
  name: 'Box',
  methods: {
        goDown: function () {
          const cp = document.querySelector(".c-picture");
          const ct = document.querySelector(".c-text");
          cp.style.transform = "translateX(0%) scale(1)";
          ct.style.transform = "translateX(0%) scale(1)";
          cp.style.opacity = 1;
          ct.style.opacity = 1;
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .musicBox {
        background-image: url("../assets/leaf2.png");
        background-color:  rgb(246, 239, 243);
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 95vh;
        -webkit-transition: all 0.5s ease;
        padding-top: 85px;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 0 100px 100px white inset;
  }

  .big {
      display: flex;
      justify-content: space-around;
      height: 74%;
      align-items: center;
  }

  #down {
    font-size: 60px;
    opacity: 0.7;
    color:#aaa1a1;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
  }

  #down:hover {
    opacity: 0.9;
    color: #dbc17b;
  }

  .b-picture {
      background: rgba(255, 255, 255, 0.8);
      height: 90%;
      width: 40%;
      padding: 10px 30px;
      border-radius: 15px;
      box-shadow: 5px 2.5px 10px rgba(48,48,48,.6);
      overflow-y:auto;
      -webkit-transition: all 1s ease;
      transform:translateX(-100%) scale(0.95);
      opacity: 0;
   }
   .b-picture img {
     width: 90%;
     padding: 20px;
   }

   .b-text {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.8);
    height: 90%;
    width: 40%;
    border-radius: 15px;
    box-shadow: 5px 2.5px 10px rgba(48,48,48,.6);
    overflow-y:auto;
    justify-content: center;
    padding: 10px 30px;
    -webkit-transition: all 1s ease;
    transform:translateX(100%) scale(0.95);
    opacity: 0;
   }

   .b-text a {
     color: #a0915a;
     margin:10px
   }

   .b-text a:hover {
     color: #e4c44e;
   }

   .b-text-header{
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .b-text-header h2 {
      color: #a0915a;
      margin-right: 10px;
   }

   @media only screen and (max-width: 537px) { 
     .musicBox {
       padding-top: 75px;
     }

     .b-picture {
          height: 60%;
     }
     .b-text {
          height: 60%;
     }
     .b-text-header {
       padding-top:220px;
     }

    #down {
      font-size: 20px;
    }

     .b-text-header h4 {
       font-size: 8px;
     }

     .list {
        font-size: 10px;
        margin-left: -30px;
     }
   }
</style>
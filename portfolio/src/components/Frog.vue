<template>
  <div class="frog" id="frog">
    <div class="f-picture">
      <img src="../assets/frog/1.png">
      <img src="../assets/frog/2.png">
      <img src="../assets/frog/3.png">
      <img src="../assets/frog/4.png">
    </div>
    <div class="f-text">
      <div class="f-text-header">
        <h2>Frog Jumper</h2>
        <h4> (JavaScript, HTML5)</h4>
      </div>
      <h5>Runner game where a frog jumps over obstacles and collects tokens to increase score.
      </h5>
      <ul>
        <li>Created infinitely scrolling game by repeatedly calling HTML5 Canvas draw method using requestAnimationFrame
        </li>
        <li>Designed algorithm using coordinates and the distance formula to detect collisions between player and obstacles
</li>
        <li>Implemented 3D illusion layering multiple canvas elements for background, objects, and foreground
</li>
        <li>Utilized webpack and OOP to design classes and separate components into logical concerns
        </li>
      </ul>
      <a href="https://shmily40686.github.io/frog-jumper ">Check the Project</a>
      <a href="https://github.com/shmily40686/frog-jumper">Check the Code</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .frog {
        background-image: url("../assets/flowers2.png");
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 85vh;
        background-color:  rgb(246, 239, 243);
        -webkit-transition: all 0.5s ease;
        padding-top: 100px;
        background-size: cover;
        background-repeat: no-repeat;
  }

  .f-picture {
      background: rgba(255, 255, 255, 0.8);
      height: 90%;
      width: 40%;
      padding: 10px 30px;
      border-radius: 15px;
      box-shadow: 5px 2.5px 10px rgba(48,48,48,.6);
      overflow-y:auto;
      -webkit-transition: all 1.5s ease;
      transform:translateX(-100%) scale(0.95);
   }
   .f-picture img {
     width: 90%;
     padding: 20px;
   }

   .f-text {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.6);
    height: 90%;
    width: 40%;
    border-radius: 15px;
    box-shadow: 5px 2.5px 10px rgba(48,48,48,.6);
    overflow-y:auto;
    justify-content: center;
    padding: 10px 30px;
    -webkit-transition: all 1.5s ease;
    transform:translateX(100%) scale(0.95);
   }

   .f-text a {
     color: #a0915a;
     margin:10px
   }

   .f-text a:hover {
     color: #e4c44e;
   }

   .f-text-header{
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .f-text-header h2 {
      color: #a0915a;
      margin-right: 10px;
   }
</style>
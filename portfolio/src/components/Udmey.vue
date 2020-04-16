<template>
  <div class="udmey" id="udmey">
    <a href="#skill" id="down">
      <font-awesome-icon icon="chevron-up" />
    </a>
    <div class="big">
        <div class="u-picture">
          <img src="../assets/udemy/1.png">
          <img src="../assets/udemy/3.png">
          <img src="../assets/udemy/2.png">
          <img src="../assets/udemy/4.png">
          <img src="../assets/udemy/5.png">
          <img src="../assets/udemy/6.png">
          <img src="../assets/udemy/7.png">
          <img src="../assets/udemy/8.png">
        </div>
        <div class="u-text">
          <div class="u-text-header">
            <h2>YOUdemy</h2>
            <h4> (Rails, ReactJS)</h4>
          </div>
          <h5>Rails and React complement each other in this app that replicates key features of Udemy
          </h5>
          <ul>
            <li>Utilized object IDs as keys in global redux store to provide constant time lookup of items within application
              state
            </li>
            <li>Incorporated BCrypt with RoR backend to salt and hash passwords to prevent rainbow table attacks</li>
            <li>Implemented original custom CSS animations for sliding window carousel to enhance UX across application</li>
            <li>Optimized API queries to improve speed of search functionality by filtering content metadata by category and
              title
            </li>
          </ul>
          <a href="https://udemy-clone-project.herokuapp.com">Check the Project</a>
          <a href="https://github.com/shmily40686/udemy-clone">Check the Code</a>
        </div>
    </div>
    <a href="#kids" id="down" v-on:click="goDown">
      <font-awesome-icon icon="chevron-down" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Udmey',
  methods: {
    goDown: function() {
      const kp = document.querySelector(".k-picture");
      const kt = document.querySelector(".k-text");
        kp.style.transform = "translateX(0%) scale(1)";
        kt.style.transform = "translateX(0%) scale(1)";
        kp.style.opacity = 1;
        kt.style.opacity = 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .udmey {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 95vh;
        background-color:  rgb(246, 239, 243);
        -webkit-transition: all 0.5s ease;
        padding-top: 85px;
        background-image: url("../assets/flowers4.png");
        background-size: contain;
        background-repeat: no-repeat;
        box-shadow: 0 0 100px 70px white inset;
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
    color: #aaa1a1;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
  }

  #down:hover {
    opacity: 0.9;
    color: #dbc17b;
  }
   .u-picture {
      background: rgba(255, 255, 255, 0.9);
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
   .u-picture img {
     width: 90%;
     padding: 20px;
   }


   .u-text {
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
    -webkit-transition: all 1s ease;
    transform:translateX(100%) scale(0.95);
    opacity: 0;
   }

   .u-text a {
     color: #a0915a;
     margin:10px
   }

   .u-text a:hover {
     color: #e4c44e;
   }

   .u-text-header{
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .u-text-header h2 {
      color: #a0915a;
      margin-right: 10px;
   }
</style>
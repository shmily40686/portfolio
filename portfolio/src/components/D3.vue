<template>
  <div class="d3" id="d3">
    <a href="#chat" id="down">
      <font-awesome-icon icon="chevron-up" />
    </a>
    <div class="big">
      <div class="d-picture">
        <img src="../assets/d3/1.png">
        <img src="../assets/d3/3.png">
        <img src="../assets/d3/2.png">
        <img src="../assets/d3/4.png">
        <img src="../assets/d3/5.png">
        <img src="../assets/d3/6.png">
        <img src="../assets/d3/7.png">
      </div>
      <div class="d-text">
        <div class="d-text-header">
          <h2>Tech-D3</h2>
          <h4> (JavaScript, D3.js)</h4>
        </div>
        <h5>D3 powers these data visualizations to captivate the eye while describing a story of information</h5>
        <ul>
          <li>Reused canvases between multiple visualizations to improve interactive aspect of gallery
          </li>
          <li>Created with vanilla JavaScript and HTML5 without needing to leverage frontend frameworks to control views</li>
        </ul>
        <a href="https://github.com/shmily40686/d3-tech-companies">Check the Project</a>
        <a href="https://shmily40686.github.io/d3-tech-companies">Check the Code</a>
      </div>
    </div>
    <a href="#skill" id="down" v-on:click="showSkill">
      <font-awesome-icon icon="chevron-down" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'D3'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .d3 {
        background-color: rgb(255, 226, 239);
        background-image: url("../assets/leaf.png");
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 95vh;
        -webkit-transition: all 0.5s ease;
        padding-top: 68px;
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
    color: #aaa1a1;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
  }

  #down:hover {
    opacity: 0.9;
    color: #dbc17b;
  }
  .d-picture {
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
   .d-picture img {
     width: 90%;
     padding: 20px;
   }

   .d-text {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.9);
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

   .d-text a {
     color: #a0915a;
     margin:10px
   }

   .d-text a:hover {
     color: #e4c44e;
   }

   .d-text-header{
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .d-text-header h2 {
      color: #a0915a;
      margin-right: 10px;
   }
</style>
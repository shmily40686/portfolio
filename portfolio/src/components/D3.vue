<template>
  <div class="d3" id="d3">
    <div class="d-picture">
      <img src="../assets/udemy/1.png">
      <img src="../assets/udemy/3.png">
      <img src="../assets/udemy/2.png">
      <img src="../assets/udemy/4.png">
      <img src="../assets/udemy/5.png">
      <img src="../assets/udemy/6.png">
      <img src="../assets/udemy/7.png">
      <img src="../assets/udemy/8.png">
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
        justify-content: space-around;
        width: 100vw;
        height: 85vh;
        -webkit-transition: all 0.5s ease;
        padding-top: 100px;
        background-size: cover;
        background-repeat: no-repeat;
   }
  .d-picture {
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
   .d-picture img {
     width: 90%;
     padding: 20px;
   }

   .d-text {
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
<template>
  <div class="kids" id="kids">
    <div class="k-picture">
      <img src="../assets/kid/1.png">
      <img src="../assets/kid/2.png">
      <img src="../assets/kid/3.png">
      <img src="../assets/kid/4.png">
      <img src="../assets/kid/5.png">
      <img src="../assets/kid/6.png">
      <img src="../assets/kid/7.png">
      <img src="../assets/kid/8.png">
      <img src="../assets/kid/9.png">
      <img src="../assets/kid/10.png">
      <img src="../assets/kid/11.png">
      <img src="../assets/kid/12.png">
      <img src="../assets/kid/13.png">
    </div>
    <div class="k-text">
      <div class="k-text-header">
        <h2>KidsCart </h2>
        <h4> (ReactJS, Express)</h4>
      </div>
      <h5>An Express backend and React + Redux frontend built this food ordering app for your kids</h5>
      <ul>
        <li>Designed non-relational database schemas for MongoDB to improve reads based on metadata about meal ingredients
</li>
        <li>Instrumented meal selector using images layered on top of custom SVG graphic to visually display ingredients
</li>
        <li>Implemented responsive search results page by utilizing CSS transitions and media queries to enhance user experience
</li>
      </ul>
      <a href="https://kidscartlive.herokuapp.com">Check the Project</a>
      <a href="https://github.com/ladydragonforever/KidsCart">Check the Code</a>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Kids'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .kids {
        background-color: rgb(255, 226, 239);
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 85vh;
        -webkit-transition: all 0.5s ease;
        padding-top: 100px;
        background-image: url("../assets/leaf2.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
     .k-picture {
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
   .k-picture img {
     width: 90%;
     padding: 20px;
   }

   .k-text {
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

   .k-text a {
     color: #a0915a;
     margin:10px
   }

   .k-text a:hover {
     color: #e4c44e;
   }

   .k-text-header{
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .k-text-header h2 {
      color: #a0915a;
      margin-right: 10px;
   }

</style>
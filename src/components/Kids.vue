<template>
  <div class="kids" id="kids">
    <a href="#udmey" id="down">
      <font-awesome-icon icon="chevron-up" />
    </a>
    <div class="big">
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
            <li class="list">Designed non-relational database schemas for MongoDB to improve reads based on metadata about meal ingredients
            </li>
            <li class="list">Instrumented meal selector using images layered on top of custom SVG graphic to visually display ingredients
            </li>
            <li class="list">Implemented responsive search results page by utilizing CSS transitions and media queries to enhance user
              experience
            </li>
          </ul>
          <a href="https://kidscartlive.herokuapp.com">Check the Project</a>
          <a href="https://github.com/ladydragonforever/KidsCart">Check the Code</a>
        </div>
    </div> 
    <a href="#frog" id="down" v-on:click="goDown">
      <font-awesome-icon icon="chevron-down" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Kids',
  methods: {
        goDown: function () {
          const fp = document.querySelector(".f-picture");
          const ft = document.querySelector(".f-text");
          fp.style.transform = "translateX(0%) scale(1)";
          ft.style.transform = "translateX(0%) scale(1)";
          fp.style.opacity = 1;
          ft.style.opacity = 1;
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .kids {
        background-color: rgb(255, 226, 239);
        background-image: url("../assets/leaf2.png");
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
    color: #aaa1a1;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;
  }

  #down:hover {
    opacity: 0.9;
    color: #dbc17b;
  }
     .k-picture {
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
   .k-picture img {
     width: 90%;
     padding: 20px;
   }

   .k-text {
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

   @media only screen and (max-width: 537px) { 

     .k-picture {
          height: 60%;
     }
     .k-text {
          height: 60%;
     }
     .k-text-header {
       padding-top:220px;
     }

     .kids {
       padding-top: 75px;
     }

    #down {
      font-size: 20px;
    }

     .k-text-header h4 {
       font-size: 8px;
     }

     .list {
        font-size: 10px;
        margin-left: -30px;
     }
   }

</style>
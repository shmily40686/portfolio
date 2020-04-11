<template>
  <div class="udmey" id="udmey">
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
     <h2>YOUdemy (Rails, ReactJS)</h2>
     <h5>Rails and React complement each other in this app that replicates key features of Udemy
</h5>
     <ul>
        <li>Utilized object IDs as keys in global redux store to provide constant time lookup of items within application state
        </li>
        <li>Incorporated BCrypt with RoR backend to salt and hash passwords to prevent rainbow table attacks</li>
        <li>Implemented original custom CSS animations for sliding window carousel to enhance UX across application</li>
        <li>Optimized API queries to improve speed of search functionality by filtering content metadata by category and title
        </li>
     </ul>
    <a href="https://udemy-clone-project.herokuapp.com">Check the Project</a>
    <a href="https://github.com/shmily40686/udemy-clone">Check the Code</a>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Udmey'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .udmey {
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 85vh;
        background-color:  rgb(246, 239, 243);
        -webkit-transition: all 0.5s ease;
        padding-top: 100px;
        background-image: url("../assets/flowers4.png");
        background-size: cover;
        background-repeat: no-repeat;
   }
   .u-picture {
      background: rgba(255, 255, 255, 0.8);
      height: 90%;
      width: 45%;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 5px 2.5px 10px rgba(48,48,48,.6);
      overflow-y:auto
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
    width: 45%;
    border-radius: 15px;
    box-shadow: 5px 2.5px 10px rgba(48,48,48,.6);
    overflow-y:auto;
    justify-content: center;
    padding: 0px 30px;
   }

   .u-text a {
     color: #a0915a;
     margin:10px
   }

   .u-text a:hover {
     color: #e4c44e;
   }
</style>
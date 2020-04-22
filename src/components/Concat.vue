<template>
  <div class="concat" id="concat">
    <a href="#d3" id="down">
      <font-awesome-icon icon="chevron-up" />
    </a>
    <div class="c-white">
        <h1>Contact Information</h1>
        <div class="inside">
            <div class="line">
                <h3>Github:</h3><a href="https://www.github.com/shmily40686">https://www.github.com/shmily40686</a>
            </div>
            <div class="line">
                <h3>LinkedIn:</h3><a href="https://www.linkedin.com/in/lingxiaowen">https://www.linkedin.com/in/lingxiaowen</a>
            </div>
            <div class="line">
                <h3>Email:</h3><a target="_blank" href="mailto:shmily40686@gmail.com">shmily40686@gmail.com</a>
                <a target="_blank" id="click" href="mailto:shmily40686@gmail.com">(CLICK TO EMAIL ME!)</a>
            </div>
            <div class="d-box">
              <a id="download" href="/Xiaowen Ling resume.pdf" download>
                <font-awesome-icon icon="file-pdf"  id="icon"/>
                 Download Xiaowen Ling's Resume
              </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Concat'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .concat{
        background-color: rgb(253, 238, 245);
        background-image: url("../assets/flowers6.png");
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 95vh;
        -webkit-transition: all 0.5s ease;
        padding-top: 78px;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 0 100px 100px white inset;
   }

   .line {
       display: flex;
       justify-content: center;
       align-items: center;
       transform: scale(0);
       -webkit-transition: all 0.8s ease;
       opacity: 0;
   }
   
   .inside {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

   h1 {
       margin-bottom: 30px;
       transform: translateX(-100%) scale(0.5);
       opacity: 0;
       -webkit-transition: all 0.9s ease;
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

  .c-white {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 100px;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 2%;
    padding: 100px;
  }

  .c-white a {
    margin-left: 10px;
    color: #a0915a;
    font-weight: 600;
  }

  #click {
    color:rgb(20, 19, 19);
    margin-left: 10px;
    text-decoration: none;
    -webkit-transition: all 0.5s ease;

  }

   #click:hover {
     transform: scale(1.1);
     color: rgb(185, 51, 74);
   }

   #download{

     font-size: 15px;
     color:#2c3e50;
     text-decoration: none;
      -webkit-transition: all 0.5s ease;
   }

   #download:hover {
     transform: scale(1.3);
      color: rgb(185, 51, 74);
   }

   .d-box {
     padding-top: 10px;
     margin:0 auto;
   }


   #icon {
     font-size:20px;
     margin-right:10px;
   }

   @media only screen and (max-width: 537px) { 
     .c-white {
          padding: 50px 20px 100px 20px;
     }

     .inside {
       transform: scale(0.8);
     }
   }

</style>
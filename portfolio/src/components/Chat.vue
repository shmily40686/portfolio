<template>
  <div class="chat" id="chat">
    <div class="c-picture">
      <img src="../assets/chat/1.png">
      <img src="../assets/chat/2.png">
      <img src="../assets/chat/3.png">
      <img src="../assets/chat/4.png">
      <img src="../assets/chat/5.png">
      <img src="../assets/chat/6.png">
      <img src="../assets/chat/7.png">
      <img src="../assets/chat/8.png">
      <img src="../assets/chat/9.png">
    </div>
    <div class="c-text">
      <div class="c-text-header">
        <h2>Fun Chat</h2>
        <h4> (Socket.io, ReactJS)</h4>
      </div>
      <h5>Chat application focusing on cross-language communication that translates messages you send automatically
      </h5>
      <ul>
        <li>Utilized socket.io library to emit events from an express backend and listened on the frontend using the .on method
        </li>
        <li>Used Validator to ensure normalization of models with metadata to specify language preferences</li>
        <li>Incorporated translation API to automatically translate messages received to current native language</li>
      </ul>
      <a href="https://fun-chats.herokuapp.com">Check the Project</a>
      <a href="https://github.com/shmily40686/FunChat">Check the Code</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .chat {
        background-color: rgb(255, 219, 235);
        background-image: url("../assets/flowers5.png");
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 85vh;
        -webkit-transition: all 0.5s ease;
        padding-top: 100px;
        background-size: cover;
        background-repeat: no-repeat;
   }

   .c-picture {
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
   .c-picture img {
     width: 90%;
     padding: 20px;
   }

   .c-text {
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

   .c-text a {
     color: #a0915a;
     margin:10px
   }

   .c-text a:hover {
     color: #e4c44e;
   }

   .c-text-header{
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .c-text-header h2 {
      color: #a0915a;
      margin-right: 10px;
   }
</style>
<template>
  <div class="chat" id="chat">
    <h1>chat</h1>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .chat {
        width: 100vw;
        height: 100vh;
        background-color: rgb(255, 219, 235);
        display: flex;
        align-items: center;
        padding-top: 35px;
        background-image: url("../assets/flowers5.png");
        background-size: cover;
        background-repeat: no-repeat;
  }
</style>
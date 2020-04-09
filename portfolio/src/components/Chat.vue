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
        background-color: rgb(226, 124, 172);
        -webkit-transition: all 0.5s ease;
        padding-top: 200px;
  }
</style>
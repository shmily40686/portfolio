<template>
  <div class="nav">
    <a class="nav-a" href="#self">Introduction</a>
    <a class="nav-a" href="#skill">Skill</a>
    <a class="nav-a" >
        Project
        <div class="projects">
            <a href="#udmey">udmey-clone</a>
            <a href="#kids">KidsCart</a>
            <a href="#frog">Frog Jumper</a>
            <a href="#chat">Fun Chat</a>
            <a href="#d3">D3</a>
        </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .nav {
       position: fixed;
       display: flex;
       justify-content: center;
       width: 100%;
       height: 20vh;
       background-color: white;
   }

   .nav-a {
       margin-left: 10px;
       text-decoration: none;
   }

   .projects {
       display: flex;
       flex-direction: column;
   }
</style>
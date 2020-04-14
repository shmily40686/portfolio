<template>
  <div id="app">
    <Nav />
    <SelfIntroduction msg="Welcome to Your Vue.js App"/>
    <Skill />
    <Udmey />
    <Kids />
    <Frog />
    <Chat />
    <D3 />

  </div>
</template>

<script>

import SelfIntroduction from './components/SelfIntroduction.vue';
import Skill from './components/Skill.vue';
import Nav from './components/nav.vue';
import Udmey from './components/Udmey.vue';
import Kids from './components/Kids.vue';
import Frog from './components/Frog.vue';
import Chat from './components/Chat.vue';
import D3 from './components/D3.vue';


export default {
  name: 'App',
  components: {
    SelfIntroduction,
    Skill,
    Nav,
    Udmey,
    Kids,
    Frog,
    Chat,
    D3
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

h1 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-transition: all 0.5s ease;
}
</style>

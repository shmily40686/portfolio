<template>
  <div id="app">
    <Nav />
    <SelfIntroduction />
    <Skill />
    <Udmey />
    <Kids />
    <Frog />
    <Box />
    <Chat />
    <D3 />
    <Concat />

  </div>
</template>

<script>

import SelfIntroduction from './components/SelfIntroduction.vue';
import Skill from './components/Skill.vue';
import Nav from './components/nav.vue';
import Udmey from './components/Udmey.vue';
import Kids from './components/Kids.vue';
import Frog from './components/Frog.vue';
import Box from './components/Box.vue';
import Chat from './components/Chat.vue';
import D3 from './components/D3.vue';
import Concat from './components/Concat.vue';


export default {
  name: 'App',
  components: {
    SelfIntroduction,
    Skill,
    Nav,
    Udmey,
    Kids,
    Frog,
    Box,
    Chat,
    D3,
    Concat
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

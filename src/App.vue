<template>
  <div id="app">
    <router-link to="/formulaire" tag="button" class="formu">Formulaire</router-link>
    <Header msg="Movies"/>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: "app",
  components: {
    Header,
  }
}
</script>

<style lang="less">
@import "~normalize.css";

#app {
  display: flex;
  flex-direction: column;
  background-color: #17181b;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  .formu {
    width: 200px;
    height: 40px;
    font-size: 20px;
    font-family: Verdana, sans-serif;
    color: white;
    background-color: #2b71d8;
    border-radius: 10px 10px 10px 10px;
    border: 0;
    position: absolute;
    top: 85%;
    right: 5%;
    z-index: 2;
  }
}
</style>

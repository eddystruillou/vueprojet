<template>
  <div id="app">
    <Header msg="Movies"/>
      <router-link to="/formulaire" tag="button">Formulaire</router-link>
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
}
</style>

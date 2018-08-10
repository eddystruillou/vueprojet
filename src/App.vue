<template>
  <div id="app">
<!--     <Test /> -->
    <Header msg="Movies"/>
    <div class="first">
      <div class="second" :class="{ 'slide' : moviesState.selectedMovie }">
        <MoviesList />
        <Popup v-if="moviesState.selectedMovie"/>
      </div>
    </div>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Header from "./components/Header.vue";
import MoviesList from "./components/MoviesList.vue";
import Movie from "./components/Movie.vue";
import Popup from './components/Popup.vue'
import { moviesState } from './states/movies-state'

export default {
  name: "app",
  components: {
    Header,
    Popup,
    MoviesList,
    Movie
  },
  data () {
    return {
      moviesState,
    }
  },
};
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
.first {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  .second {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200vw;
    transition-duration: 2s;
    &.slide {
      transform: translate(-100vw);
    }
  }
}
</style>

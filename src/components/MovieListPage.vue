<template>
  <div class="first">
      <div class="second" :class="{ 'slide' : moviesState.selectedMovie }">
        <MoviesList />
        <Popup v-if="moviesState.selectedMovie"/>
      </div>
  </div>
</template>

<script>
import MoviesList from './MoviesList.vue'
import Popup from './Popup.vue'
import { moviesState } from '../states/movies-state'

export default {
  name: 'MovieListPage',
  components: {
    MoviesList,
    Popup
  },
  data () {
    return {
      moviesState,
    }
  }
}
</script>

<style lang="less" scoped>
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

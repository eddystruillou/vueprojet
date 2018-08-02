<template>
  <div class="container">
    <!-- v-for est l'équivalent du for en js, ex: for(movie in movies) -->
    <Movie v-for="(movie, index) in moviesState.movies" 
    :key="index" 
    :movie="movie"
    />
    <Popup v-if="moviesState.selectedMovie"/>
  </div>
</template>

<script>
import Movie from './Movie.vue'
import Popup from './Popup.vue'
import { moviesState } from '../states/movies-state'

export default {
  name: 'MoviesList',
  components: {
    Movie,
    Popup
  },
  //data est une function il va donc s'appliquer qu'à un seul component
  data () {
    return {
      moviesState
    }
  },
  async created() {
    //fetch
    try {
      let response = await fetch('movies.json')
      this.moviesState.movies = await response.json();

    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="less" scoped>

.container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    width: 100%;
    flex-grow: 1;
}
</style>

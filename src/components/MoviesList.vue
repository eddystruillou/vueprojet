<template>
  <div class="container">
    <!-- v-for est l'équivalent du for en js, ex: for(movie in movies) -->
    <Loader class="load" v-if="loading.value"/>
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
import Loader from './Loader.vue'
import { moviesState } from '../states/movies-state'

export default {
  name: 'MoviesList',
  components: {
    Movie,
    Popup,
    Loader
  },
  // data est une function il va donc s'appliquer qu'à un seul component
  data () {
    return {
      moviesState,
      loading: {
        value: false
      }
    }
  },
  async created () {
    // fetch
    try {
      this.loading.value = true
      let response = await fetch('http://localhost:5000/Movies')
      this.moviesState.movies = await response.json()
      this.loading.value = false
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

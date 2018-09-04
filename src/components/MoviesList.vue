<template>
    <div class="container">
      <!-- v-for est l'équivalent du for en js, ex: for(movie in movies) -->
      <Loader class="load" v-if="loading.value"/>
      <Movie 
        v-for="(movie, index) in moviesState.movies"
        :key="index"
        :movie="movie"
      />
</div>
</template>

<script>
import Movie from './Movie.vue'
import Loader from './Loader.vue'
import { moviesState } from '../states/movies-state'

export default {
  name: 'MoviesList',
  components: {
    Movie,
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
  },
  sockets: {
    'insert-movie': function (movie) {
      this.moviesState.movies.push(movie)
    },
    'delete-movie': function (id) {
      console.log(id);
      
      const movie = this.moviesState.movies.find(movie => {
        return movie._id == id
      })
      movie && this.moviesState.movies.splice(this.moviesState.movies.indexOf(movie), 1)
    },
    'update-movie': function (movie) {
      const movieUpdate = this.moviesState.movies.find(movie => {
        return movie
      })
      this.moviesState.movies.splice(this.moviesState.movies.indexOf(movie), 1)
    }
  }
}
</script>

<style lang="less" scoped>

.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
}
</style>

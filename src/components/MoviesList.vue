<template>
  <div class="container">
    <!-- v-for est l'équivalent du for en js, ex: for(movie in movies) -->
    <Movie v-for="(movie, index) in movies" 
    :key="index" 
    :movie="movie"
    :selectMovie="selectMovie"
    />
    <Popup v-if="selectedMovie" 
    :movie="selectedMovie"
    :closeDetail="closeDetail"
    />
  </div>
</template>

<script>
import Movie from './Movie.vue'
import Popup from './Popup.vue'
export default {
  name: 'MoviesList',
  components: {
    Movie,
    Popup
  },
  //data est une function il va donc s'appliquer qu'à un seul component
  data () {
    return {
      movies: null,
      selectedMovie: null
    }
  },
  async created() {
    //fetch
    try {
      let response = await fetch('movies.json')
      this.movies = await response.json();

    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    selectMovie(movie) {
      this.selectedMovie = movie
    },
    closeDetail() {
      this.selectedMovie = null
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

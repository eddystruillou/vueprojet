<template>
  <div class="container">
    <!-- v-for est l'équivalent du for en js, ex: for(movie in movies) -->
    <Movie v-for="(movie, index) in movies" 
    :key="index" 
    :msg="movie.title" 
    :img="getImgUrl(movie)">
    </Movie>
  </div>
</template>

<script>
import Movie from './Movie.vue'
export default {
  name: 'MoviesList',
  components: {
    Movie
  },
  //data est une function il va donc s'appliquer qu'à un seul component
  data () {
    return {
      movies: null
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
    getImgUrl(movie) {
      return `/images/${movie.imagesURL}`
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

<template>
  <div id="app">
    <Header msg="Movies"/>
    <MoviesList />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MoviesList from './components/MoviesList.vue'
import Movie from './components/Movie.vue'

export default {
  name: 'app',
  components: {
    Header,
    MoviesList,
    Movie
  }
}
</script>

<style>

@import '~normalize.css';

  #app {
    display: flex;
    flex-direction: column;
    background-color: #17181b;
    overflow: hidden;
    height: 100vh;
}
</style>

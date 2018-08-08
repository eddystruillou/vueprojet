<template>
  <div class="movie" @click="selectMovie()">
    <img :src="getImgUrl(movie)" />
    <Loader v-if="loading.value"/>
    <h4>{{ movie.title }}</h4>
  </div>
</template>

<script>
import Loader from './Loader.vue'
import { moviesState } from '../states/movies-state'
import { posterUtils } from '../mixins/poster-utils'
export default {
  name: 'Movie',
  components: {
    Loader
  },
  mixins: [posterUtils],
  props: {
    movie: Object
  },
  data () {
    return {
      moviesState,
      loading: {
        value: false
      }
    }
  },
  methods: {
    async selectMovie () {
      // fetch
    try {
      this.loading.value = true
      let response = await fetch('http://localhost:5000/filtreMovies/' + this.movie.id)
      this.moviesState.selectedMovie = await response.json()
      this.loading.value = false
    } catch (error) {
      console.log(error)
    }
    }
  }
}
</script>

<style lang="less" scoped>

.movie {
  position: relative;
  background-color: #17181b;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 35px;
  height: 400px;
  h4 {
    font-family: Verdana, sans-serif;
    color: white;
    margin-top: 5px;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    width: 250px;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 0px 15px black;
    transition: transform 2s;
    &:hover {
      transform: scale(1.2);
      border: solid #2b71d8;
    }
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 200px;
      &:hover {
        transform: none;
        border: none;
      }
      &:active {
        transform: scale(1.2);
        border: solid #2b71d8;
      }
    }
  }
  @media screen and (max-width: 720px) {
    img {
      width: 150px;
      &:hover {
        transform: none;
        border: none;
      }
      &:active {
        transform: scale(1.2);
        border: solid #2b71d8;
      }
    }
  }
}
</style>

<template>
  <div class="movie" @click="selectMovie()">
    <img :src="getImgUrl()"/>
    <h4>{{ movie.title }}</h4>
  </div>
</template>

<script>
import { moviesState } from '../states/movies-state'
export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  data () {
    return {
      moviesState
    }
  },
  methods: {
    getImgUrl() {
      return `/images/${this.movie.imagesURL}`
    },
    selectMovie() {
      this.moviesState.selectedMovie = this.movie
    }
  }
}
</script>

<style lang="less" scoped>

.movie {
  display: flex;
  flex-direction: column;
  background-color: #17181b;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 35px;
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

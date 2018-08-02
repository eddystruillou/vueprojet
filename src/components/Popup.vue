<template>
  <div class="backgrou">
    <div class="cadre">
      <h1>{{ moviesState.selectedMovie.title }}</h1>
      <div class="bloc">
      <img :src="'/images/' + moviesState.selectedMovie.imagesURL">
      <p>{{ moviesState.selectedMovie.synopsis }}</p>
      </div>
      <button type="button" @click="clickOnClose()">Close</button>
    </div>
  </div>
</template>

<script>
import { moviesState } from '../states/movies-state'
export default {
  name: 'Popup',
  props: {
    movie: Object
  },
  data () {
    return {
      moviesState
    }
  },
  created () {
    document.addEventListener('keydown', this.closeWithEchap)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.closeWithEchap)
  },
  methods: {
    clickOnClose () {
      this.moviesState.selectedMovie = null
    },
    closeWithEchap(event) {
      console.log('echap')
      if(event.keyCode === 27) {
        this.clickOnClose()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.backgrou {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: scroll;
}
/* ---> Modifications sur la div du Synopsis <--- */
.cadre {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  margin-left: 25%;
  width: 40%;
  background-color: #17181b;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 15px black;
  h1 {
    color: white;
    font-family: Verdana, sans-serif;
    margin-left: 15px;
  }
  p {
    margin-top: 0px;
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    font-family: Verdana, sans-serif;
    font-size: 20px;
  }
  img {
    width: 200px;
    margin-left: 15px;
    margin-right: 10px;
    padding-bottom: 5px;
    float: left;
  }
  img:hover {
      transform: none;
      border: none;
  }
  button {
    height: 50px;
    font-size: 25px;
    font-family: Verdana, sans-serif;
    color: white;
    background-color: #2b71d8;
    border-radius: 10px 10px 10px 10px;
    border: 0;
  }
}
/* <--------------------------------------------> */
</style>

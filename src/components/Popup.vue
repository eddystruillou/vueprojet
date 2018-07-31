<template>
  <div class="backgrou">
    <div class="cadre">
      <h1>{{ movie.title }}</h1>
      <img :src="movie.imagesURL">
      <p>{{ movie.synopsis }}</p>
      <button type="button" @click="closeDetail()">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    movie: Object,
    closeDetail: Function
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
  width: 50%;
  background-color: #17181b;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 15px black;
  h1 {
    color: white;
    font-family: Verdana, sans-serif;
    margin-left: 15px;
  }
  p {
    color: white;
    font-family: Verdana, sans-serif;
    font-size: 20px;
    margin-left: 15px;
  }
  img {
    width: 200px;
    margin-left: 15px;
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

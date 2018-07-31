<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
  
</template>

<script>
export default {
  name: 'titre',
  props: {
    msg: String
  }
}
</script>

<style lang="less" scoped>

header {
    font-family: Verdana, sans-serif;
    background-color: #17181b;
    color: white;
    text-align: center;
    @media screen and (max-width: 1024px) {
    h1 {
      font-size: x-large;
    }
  }
    @media screen and (max-width: 720px) {
    h1 {
      font-size: large;
    }
  }
}
</style>

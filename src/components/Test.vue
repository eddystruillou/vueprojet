<template>
<section>
  <div class="gros" :class="{'focused': hasFocus(1,1)}">
    Test1
  </div>
  <div class="gros" :class="{'focused': hasFocus(1,2)}">
    Test2
    <div class="little">
      Petit1
    </div>
    <div class="little">
      Petit2
    </div>
    <div class="little">
      Petit3
    </div>
  </div>
  <div class="gros" :class="{'focused': hasFocus(1,3)}">
    Test3
  </div>
</section>
</template>

<script>
import { moveClav } from "../mixins/move-clav"
export default {
  name: 'Test',
  mixins : [moveClav],
  data () {
    return {
      grid: [1, 3],
      pos: [1, 1]
    }
  },
  created () {
    document.addEventListener('keydown', this.addListen)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.addListen)
  }
}
</script>

<style lang="less" scoped>
div {
  border-style: solid;
  border-color: white;
  color: white;
}
.gros {
  height: 100px;
  width: 300px;
}
.focused {
  color: red;
  border-color: red;
}
</style>

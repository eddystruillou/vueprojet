export const moveClav = {
  methods: {
    setPosition (newPos) {
      this.pos = newPos
    },
    calcPosition (x, y) {
      const newx = this.pos[0] + x
      const newy = this.pos[1] + y
      return [newx, newy]
    },
    addListen (e) {
      if (e.keyCode === 40 && this.pos[1] < 3) {
        this.setPosition(this.calcPosition(0, 1))
      } else if (e.keyCode === 38 && this.pos[1] > 1) {
        this.setPosition(this.calcPosition(0, -1))
      }
    },
    hasFocus (x, y) {
      return this.pos[0] === x && this.pos[1] === y
    }
  }
}

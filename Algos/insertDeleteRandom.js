class RandomizedSet {
  constructor () {
    this.map = {}
    this.values = []
  }

  insert(val) {
    if (this.map[val]) return false
    this.map[val] = this.values.length
    this.values.push(val)
    return true
  }

  remove(val) {
    if (this.map[val] === undefined) return false
    let current = this.map[val]
    delete current
    let last = this.values.pop()
    if (this.values.length === current) return true
    this.map[last] = current
    this.values[current] = last
    return true
  }

  getRandom() {
    if (this.values.length === 0) return null
    return this.values[Math.floor(Math.random() * this.values.length)]
  }
}
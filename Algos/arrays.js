const strings = ['a', 'b', 'c', 'd']
// 4 * 4 =16 bytes of storage

// strings[2]
// strings.push('e') //O(1)  constant
// console.log(strings) // ['a', 'b', 'c', 'd', 'e']
// strings.pop() //O(1)  constant
// console.log(strings) // ['a', 'b', 'c', 'd']
// strings.pop() //O(1)  constant
// console.log(strings) // ['a', 'b', 'c']

// strings.unshift('X') //O(N)  linear
// console.log(strings); // ['x', 'a', 'b', 'c']

// strings.splice(2, 0, "alien") // O(N/2) -> O(N)
// console.log(strings); // ['x', 'a', 'alien', 'b', 'c']

/* 
static arrays:
  Pros:
    fast lookups
    fast push/pop
    ordered
  Cons:
    slow inserts
    slow deletes
    fixed size 
    
dynamic arrays:
  lookup O(1)
  append O(1) (can be O(N))
  insert O(N)
  delete O(N)
*/

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
  }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('you')
newArray.push('you')
// newArray.pop()
newArray.delete(1)
newArray.push('are')
newArray.push('nice')
console.log(newArray);
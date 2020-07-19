/*
also works without constructor 

class MyArray {
  length = 0;
  data = {};

  get(index) {
    return this.data[index]
  }

  push(value) {
    this.data[this.length] = value
    this.length++
  }
}
*/

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return data[index]
  }

  push(value) {
    this.data[this.length] = value
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    // instead of what it had before, it will reassign to the next value
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    
    const itemDeleted = this.data[index]
    return `${itemDeleted} deleted`
  }
}

const newArray = new MyArray
newArray.push(1)
newArray.push(2)
newArray.push(3)
newArray.push(4)
newArray.push(5)
newArray.push(6)
// newArray.pop()
// newArray.pop()
newArray.delete(1)
console.log(newArray);
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  // takes users input (for example, apples) and then checks against the map to find if it exists
  // if user input exists in currentBucket[i][0] -> anywhere in the map that has user input matching to index 0
  // if the key exists, return the value item
  /*
    [ 
      ["apples", 10000],
      ["grapes", 9]
    ] 
  */

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    console.log(currentBucket)
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  // returns the values of the array
  // keys method without collision
  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory bucket
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result;
  }

  // returns the values of the hash table
  values() {
    const valuesArray = []
    for (let i = 0; i < this.data.length; i++) {
      // if data simply exists within the hash map, push the values of keys into the empty array, valuesArray
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1])
      }
    }
    return valuesArray
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.set('oranges', 2)
myHashTable.keys()
myHashTable.values()
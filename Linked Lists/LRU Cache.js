/**
Design and implement a data structure
for Least Recently Used(LRU) cache.It should support the following operations: get and put.

get(key) - Get the value(will always be positive) of the key
if the key exists in the cache, otherwise
return null.
put(key, value) - Set or insert the value
if the key is not already present.When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

cache.put(1, 1)
cache.put(2, 2)
cache.get(1) // returns 1
cache.put(3, 3) // evicts key 2
cache.get(2) // returns null (not found)
cache.put(4, 4) // evicts key 1
cache.get(1) // returns null (not found)
cache.get(3) // returns 3
cache.get(4) // returns 4
*/

/*
Create a doubly linked LinkedList to store all the value where each value is a node
Using a hash table to store each node, each element in the table can refer to the address of the node in a doubly linked LinkedList
Whenever a new node is PUT, you can get the node in object and directly access to the doubly linked LinkedList to remove

INSTANTIATE class LinkedListNode
  CONSTRUCTOR will take in a key, value
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
END class

INSTANTIATE a class LRUCache 
  CONSTRUCTOR will take in a capacity value that will dictate the maximum capacity of the new LRUCache
    this.capacity = capacity
    this.size = 0
    this.head = null
    this.tail = null
    this.mapObject = {}

INSTANTIATE GET method that takes in a key
  instantiate node variable to be an instance in the mapObject object 
  IF the node doesn't exist, return -1
  END IF
    delete(node)
    addNode(node)
    mapObject[key input] will equal node
    return node's value
END INSTANTIATE

INSTANTIATE PUT takes in a key value input
  if (the key exists inside the mapObject)
    assign node variable to the key of the mapObject
    the value of node will equal the value of input
    DELETE the node  (the purpose of this is that every time you do something to the node, it gets put in the front)
    add THE node
    return to break out of if
  if size is equal to the set capacity
    remove the head key from mapObject
    call the deleteNode method to remove the head node from cache
  assign the new key in mapObject to have the values of linkedListNode constructor (key, value, prev, next)
  add a new node of the values of the mapObject key values
END INSTANTIATE

INSTANTIATE deleteNode method to take in a node input
  IF node input is equal to this.head 
    head node will be the next node
    IF head node already exists
      there should be no previous node so this.head.prev = null
    ELSE IF node input is equal to tail node
      tail node is reassigned to prev node
      the next node of tail will be null
    ELSE 
      next = node.next
      prev = node.prev
      node.next = null
      node.prev = null
      prev.next = next
      next.prev = prev
  Decrement Size
END INSTANTIATE


INSTANTIATE add method to take in node
    node.prev, node.next = null  
  IF incremented size = 0
    this.head = this.tail = node
    return
  END if
  new input node becomes the next value of tail node
  previous node of input node becomes the tail value
  tail becomes the next value of tail which is the input node
END INSTANTIATE


END class


*/


class LinkedListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.size = 0
    this.head = null
    this.tail = null
    this.mapObject = {}
  }

  get(key) {
    let node = this.mapObject[key]
    if (!node) {
      return -1
    }
    this.deleteNode(node)
    this.addNode(node)
    this.mapObject[key] = node
    return node.value
  }

  put(key, value) {
    if (this.mapObject[key]) {
      let node = this.mapObject[key]
      node.value = value
      this.deleteNode(node)
      this.addNode(node)
      return
    }
    if (this.size === this.capacity) {
      delete this.mapObject[this.head.key]
      this.deleteNode(this.head)
    }
    this.mapObject[key] = new LinkedListNode(key, value)
    this.addNode(this.mapObject[key])
  }

  deleteNode(node) {
    if (node === this.head) {
      this.head = this.head.next
      if (this.head) {
        this.head.prev = null
      }
    } else if (node === this.tail) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      let next = node.next
      let prev = node.prev
      node.next = null
      node.prev = null
      prev.next = next
      next.prev = prev
    }
    this.size--
  }

  addNode(node) {
    node.next = null
    node.prev = null
    if (this.size++ === 0) {
      this.head = this.tail = node
      return
    }
    this.tail.next = node
    node.prev = this.tail
    this.tail = this.tail.next
  }
}

let cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)
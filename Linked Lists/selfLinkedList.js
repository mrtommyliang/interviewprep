/*
Create a linked list with the head as 10
10 --> 5 --> 16
Create an append method that adds to the linked list
Create a prepend method that adds a value to the head of the linked list
Create an insert method that takes in two parameters, (index, value) where you insert into the ilnked list
Create a printList method that displays all the notes
*/

// class Node constructor so we don't have to repeat it every time

class Node {
  constructor(value) {
    this.head = value,
      this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    //since we're first instantiating the linked list, there will only be one value so the head will also be the tail
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    // reassigns tail to = the new Value or newNode
    // previous node points to users new appended node which will be the most recent input so it will also be the tail node
    this.tail.next = newNode
    this.tail = newNode
    // increment length 
    this.length++
    return this
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    // reassigns head to equal the next value of newNode 
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    // if the user inputted index is at a value large than the linkedList size, add the value to the end of the linkedList 
    if (index >= this.length) {
      return this.append(value)
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    // creating a new instance of node as with the other methods
    const newNode = {
      value: value,
      next: null
    }

    // assigns previous node to the index of user input subtracted by one
    // this allows users input's previous node point to users input node
    // leaderNode is also previous node
    // currentNode is the next value of leaderNode
    const leaderNode = this.traverseToIndex(index - 1)
    const currentPointer = leaderNode.next
    leaderNode.next = newNode
    newNode.next = currentPointer
    this.length++
    return this.printList()
  }

  traverseToIndex(index) {
    // counter will be comparing itself against index
    // until the counter value is equal to the index value, it will keep incrementing
    // by reassigning currentNode to equal this.head, it means that currentNode is starting at this.head which is index 0
    // currentNode or this.head will keep pointing at the next node and will keep doing so until counter equals index
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  printList() {
    // instantiate and empty array to push the nodes into
    const nodesArray = []
    // holds on to the current value starting at the head value
    let currentNode = this.head
    // as long as there is a currentNode
    while (currentNode !== null) {
      nodesArray.push(currentNode.value)
      // starts at currentNode which is the head, then reassigns it to currentNode.next which points to the following value so it goes from head -> next node -> next node
      currentNode = currentNode.next
    }
    return nodesArray
  }

  // remove does not allow removal of head node
  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }

  reverse() {
    // if head.next doesn't exist or is null (checking if there's only a head node)
    // also works -> if (this.length === 1)
    if (this.length === 1) {
      return this.head;
    }

    let node = this.head // assigns the node to be the head
    this.head = this.tail // reassigns the head to be the tail, flipping the first and last values 
    this.tail = node // the tail (formerly head), is the node, new starting spot at index 0

    let prev = null // prev starts at null and will be reassigned within the for loop
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next // moves forward the linkedList
      node.next = prev // reassigns the value within the linkedList to equal the previous value
      prev = node // assigns prev to equal the value of node, flipping the two values to point backwards
      node = next // moves forward node to next 
    }
    return this
  }
}

const myLinkedList = new LinkedList(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)
myLinkedList.prepend(1)
console.log(myLinkedList);
// myLinkedList.remove(4)
myLinkedList.insert(5, 6)
myLinkedList.insert(0, 0)
myLinkedList.reverse()
console.log(myLinkedList.printList());
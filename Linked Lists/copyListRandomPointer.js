/*

Linear Time    O(N)
Constant Space O(1)

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input / output as a list of n nodes.Each node is represented as a pair of [val, random_index] where:

  val: an integer representing Node.val
random_index: the index of the node(range from 0 to n - 1) where random pointer points to, or null
if it does not point to any node.
*/

/*
KEY:
  Node -> Node -> Node -> Node

^       ^       ^       ^
VALUE:
  Node -> Node -> Node  -> Node

When do I connect the pointers?
How do I get from the original lists to the clone?

Use a hash table

Access each of the original, grab their values, and create a new node
Need to populate next field and random field

Deep copy - copy of the object but also recreates the new object with values from the original

Create a map where new node points to old node
7 -> 13 -> 11 -> 10 -> 1

map = {
  old 7:  new 7   -> points to null
  old 13: new 13  -> points to 7
  old 11: new 11  -> points to 1
  old 10: new 10  -> points to 11
  old 1:  new 1   -> points to 7
}

In first loop:
Creating original node as key and new Node as its value

In second loop: 
Copying random node from original node into random node in new Node
*/

// node is defined for us
class Node {
  constructor(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
  }
}

const copyRandomList = function (head) {
  // if head node does not exist
  if (!head) return null

  // create an empty map object
  const copy = new Map()
  // instantiates the map with key: value to null: null
  copy.set(null, null)
  // instantiates the curVal to start at the head
  let curVal = head

  // as long as curVal exists
  while (curVal != null) {
    // making a copy of the original
    // assigns key to equal current value
    // assigns curVal's value to = curVal // next to = curVal to null // random to = curVal to null
    // this gives each value a starting value and null next and random values
    //           head                   this.val         this.next  this.random
    copy.set(curVal, new Node(curVal.val, null, null))
    // move on to the next value
    curVal = curVal.next
  }
  // set curVal to start at head 
  curVal = head

  // as long as curVal exists
  while (curVal != null) {
    // grab each copy node based off each original node
    copy.get(curVal).next = copy.get(curVal.next)
    copy.get(curVal).random = copy.get(curVal.random)
    curVal = curVal.next
  }
    //this works too
  //return copy 
  return copy.get(head)
}

copyRandomList([
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0]
])
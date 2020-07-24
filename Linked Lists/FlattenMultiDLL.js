/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

[1--2--3--7--8--11--12--9--10--4--5--6--null]

  1---2---3---4---5---6--NULL
          |
          7---8---9---10--NULL
              |
              11--12--NULL

*/
// Constructor that holds all the values that we'll be passing
class Node {
  constructor(val, prev, next, child) {
    this.val = val
    this.prev = prev
    this.next = next
    this.child = child
  }
}


const flatten = (head) => {
  // instantiate stack array
  let stack = [] 
  // instantiate current to be head (this is where it'll begin the logic)
  let current = head

  // if head doesn't exist, return whatever was inputted
  if (!head){
    return head
  }
  
  // while current exists
  while (current) {
    // if the child of current exists
    if (current.child) {
      // if the next value of current exists
      if (current.next) {
        // push the the next value of current into the stack
        stack.push(current.next) 
      }
      // reassign the next value to be the child of the current value
      current.next = current.child
      // reassign the value before current to be the new current
      current.next.prev = current
      // child node is null
      current.child = null 
      // if current.next doesn't exist or the length of stack has values
    } else if (!current.next && stack.length != 0) { 
      // current.next will be equal to the stack's value and also pop it out of the stack
        current.next = stack.pop()
        // reassign the value before current to be the new current
        current.next.prev = current
    }
    // move the pointer forward
    current = current.next
  }
  return head 
}

console.log(flatten([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12]))


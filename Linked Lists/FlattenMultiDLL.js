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

class Node {
  constructor(val, prev, next, child) {
    this.val = val
    this.prev = prev
    this.next = next
    this.child = child
  }
};

const flatten = (head) => {
  if (!head) return null;
  let dummyHead = new Node(0, null, head, null);

  let stack = [head];
  let current = dummyHead;
  let prev = null;

  while (stack.length != 0) {
    current = stack.pop();
    if (prev) {
      current.prev = prev;
      prev.next = current;
    }
    if (current.next != null) stack.push(current.next);
    if (current.child != null) { // has a child
      stack.push(current.child);
      current.child = null; // remove child reference
    }
    prev = current;
  }
  return dummyHead.next;
};

flatten([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12])
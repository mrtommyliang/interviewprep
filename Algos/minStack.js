/*
 Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.

*/

class MinStack {
  constructor() {
    this.minStack = []
    this.fullstack = []
  }

  push(x) {
    this.fullstack.push(x)
    // if length of minStack is zero OR the input value is less than the value already in minStack, push it in
    // only pushes into minstack if it is less
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x)
    }
  }

  pop() {
    let x = this.fullstack.pop()
    // if the popped value is less than the value inside minStack
    if (x === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
  }

  top() {
    return this.fullstack[this.fullstack.length - 1]
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}
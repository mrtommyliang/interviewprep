/*
`You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val) *
  this.next = (next === undefined ? null : next) *
}

  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}

*/

const addTwoNumbers = (l1, l2) => {
  let digits1 = []
  let digits2 = []

  // fills in the digits from each list
  for(let n = l1; n !== null; n = n.next){
    digits1.push(n.val)
  }
  
  for (let n = l2; n !== null; n = n.next) {
    digits2.push(n.val)
  }

  // sum the digits in reverse order from least significant to first
  let prev = null
  let carry = 0
  // while digits1 or digits2 or carry exists
  // || 0 represents a boolean conversion if one array is shorter than the other while popping, when it reaches a place value where there is no number, it'll assign that value to be 0 
  while(digits1.length || digits2.length || carry) {
    let val1 = digits1.pop() || 0
    let val2 = digits2.pop() || 0
    let sum = val1 + val2 + carry
    // if (sum > 9) { return 1 } else { return 0} 
    carry = (sum > 9) ? 1 : 0
    
    const newNode = new ListNode(sum % 10)
    newNode.next = prev
    prev = newNode
  }
  return prev
}
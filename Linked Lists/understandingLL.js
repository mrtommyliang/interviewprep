const basket = ['apples', 'grapes', 'pears'] // grocery as array

//linkedlist: apples --> grapes --> pears

/*
apples
8947  --> grapes
          8742    --> pears
                      372   --> null
*/

/*
prepend O(1)
append O(1)
lookup O(n)
insert O(n)
delete O(n)
*/

let obj1 = {
  a: true
}
let obj2 = obj1 // pointing to obj1 but not actually equal to {a: true}
obj1.a = 'booya'
delete obj1
obj2 = 'hello'

// console.log('obj2', obj2);

// 10 --> 5 --> 16

/*
let myLinkedList = { 
  head: {
    value: 10, 
    next: {
      value: 5,
      next: {
        value: 16,
        next: {
          null
        }
      }
    }
  }
}
*/
# Recursion
## When to use recursion
- Divide and conquer using recursion
- Every time you are using a tree or converting something into a tree, consider recursion
  - Divided into a number of sub-problems that are smaller instances of the same problem
  - Each instance of the sub-problem is identical in nature
    - if the calculations are the same (despite value)
  - The solutions of each sub-problem can be combined to solve the problem at hand
    - if you solve the leaf nodes and combine them

```js
let counter = 0 

const inception = (value) => {
  if(value >= 3) {
    console.log('Done');// `Done!`
  }
  counter++ 
  return inception
}


inception(4)
```
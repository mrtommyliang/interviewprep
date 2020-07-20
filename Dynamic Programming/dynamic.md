# Dynamic Programming
- An optimization technique
- Solve problems by breaking it down into a collection of sub problem
- Storing their solutions in case the subproblem occurs again

## Memoization
- Can be divided into subproblems
- Recursive Solution
- Are there repetitive subproblems?
- Memoize subproblems
- Hold items that you need
- Speed up programs by holding some piece of data in a "box"

```js
const addTo80 = (n) => {
  return n + 80
}

addTo80(5)
addTo80(5)
addTo80(5)
// output -> 85
```

```js
let cache = {}
const memoizedAddTo80 = (n) => {
  if (cache.n) {
    return cache[n]
  } else {
    cache[n] = n + 80
  }
  return cache[n]
}

memoizedAddTo80(5)
```
- Creates an object to store user input and calculations already done
- Runs the function, `memoizedAddTo80`
- The first time it is run, `n + 80 = 85` is stored inside the cache through the `else` statement
- The second time it is run, it hits the `if` condition
- A hashmap is much faster, so instead of running the function to add `n to 80`, it just checks to see if it already exists in the cache object

## Alternative
```js
const memoizedAddTo80 = (n) => {
let cache = {}
return function(n) {
    if (cache.n) {
      return cache[n]
    } else {
      cache[n] = n + 80
    }
    return cache[n]
  }
}

const memoized = memoizedAddTo80()
memoized(5)
```
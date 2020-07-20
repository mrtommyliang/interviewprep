// Fibonnaci with Dynamic Programming
// O(N) but increases space complexity

let cache = {}
const fibonacciDynamic = () => {
  return function fib(n) {
    if (cache.n) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

const fasterFib = fibonacciDynamic()
console.log(fasterFib(10));
// output -> 55
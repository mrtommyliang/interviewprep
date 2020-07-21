// works but not in vscode
// Recursive is O(N) because we're still calling the function over and over
const findFactorialRecursive = number => {
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number-1)
}

console.log(findFactorialRecursive(5))

// Iterative is O(N)
// Even though we're taking a shortcut and starting at i = 2, we're considering worst case scenario so it'd still be O(N)
const findFactorialIterative = number => {
  let answer = 1
  if (number === 2 ) {
    answer = 2
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer
}

// console.log(findFactorialIterative(5))
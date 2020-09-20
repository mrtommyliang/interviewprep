// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

// n is always a number
// base case needs to return a variable, called result that we'll create as a parameter and give it a value of 1
// base case is met when n = 1
// return the function, factorial while decrementing n and reassigning result to be the multiplied value of n
// example: 1 * 5 = 5
// 5 * 4 = 20, etc

const factorial = (n, result = 1) => {
  if (n === 1) return result
  return factorial(n - 1, result *= n)
}

console.log(factorial(5), "factorial")

/***************************************************** */

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

/*
  create a default variable as a param, starting at 0 which will hold the index that we pass to the array, called idx
  create a result variable which will hold the result
  base case: if(idx > array.length) return result
  return the function call that takes in original array, increment i, and result will be reassigned using the addition operator which will check against array using idx

*/

const sum = (array, idx = 0, result = 0) => {
  if (idx >= array.length) return result
  return sum(array, idx + 1, result += array[idx])
}

console.log(sum([1, 2, 3, 4, 5, 6]), "sum")

/***************************************************** */

// 4. Check if a number is even.

/*
  the idea is that a number if it is even, can be subtracted by 2 to eventually hit 0
  if it is odd, subtracting 2, the lowest it can go without being a negative is 1 so we:

  declare 2 local variables, even = 0, odd = 1, 
  if n equals 0 return true
  if n equals 1 return false
  otherwise, keep decrementing n by 2 
*/

const isEven = n => {
  let even = 0,
    odd = 1
  if (n === 0) return true
  if (n === 1) return false
  else return isEven(n - 2)
}

console.log(isEven(72), "isEven")

/***************************************************** */
// 5. Sum all integers below a given integer.

/*
  create two variables, result, and counter
  counter will continue to increment until it reaches n
  base case: if counter is equal to n, return result

  return case:
  return sumBelow(takes in n, increment counter, result will be the addition assignment operator of counter)

*/

const sumBelow = (n, counter = 0, result = 0) => {
  if (counter >= n) return result
  return sumBelow(n, counter + 1, result += counter)
}

console.log(sumBelow(10), "sumBelow") // 45
console.log(sumBelow(7), "sumBelow") // 21

/***************************************************** */

// 6. Get the integers within a range (x, y).
/*
  create a current variable in param that holds a value that will be between x and y, starting at "x+1"
  create a result variable that will be an empty array in param
  base case: if current >= y return result
  push the value of current into result
  return range function with (x, y, current +1, result)
*/
const range = (x, y, current = x + 1, result = []) => {
  if (current >= y) return result
  result.push(current)
  return range(x, y, current + 1, result)
}

console.log(range(2, 9), "range") // [3,4,5,6,7,8]

/***************************************************** */

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.

/*
  create a default param, product that will eqaul 1
  base case: if exp equals 0, return product 
  product will equal base times base
  return: function call with base, exp that is decremented, and product

*/

const exponent = (base, exp, product = 1) => {
  if (exp === 0) return product
  product *= base
  return exponent(base, exp - 1, product)
}

console.log(exponent(4, 3), "exponent"); // 64

/***************************************************** */

// 8. Determine if a number is a power of two.

/*
  the overview: through each function call, n will be halved, 
    if the final half is 2, return true
    if the final half is greater than 2, return false (1.5)

  create a variable result that holds the halved value of n
  if(result === 2 OR result === 1 OR result n === 1 ) return true
  if(result is greater than 2) return false
  otherwise return powerOfTwo(result)

*/

const powerOfTwo = (n) => {
  let res = n / 2
  if (res === 2 || n === 1 || res === 1) return true
  if (res < 2) return false
  else return powerOfTwo(res)
}

console.log(powerOfTwo(1), "powerOfTwo")  // true
console.log(powerOfTwo(2), "powerOfTwo")  // true
console.log(powerOfTwo(4), "powerOfTwo")  // true
console.log(powerOfTwo(6), "powerOfTwo")  // false
console.log(powerOfTwo(8), "powerOfTwo")  // true
console.log(powerOfTwo(16), "powerOfTwo") // true
console.log(powerOfTwo(10), "powerOfTwo") // false

/***************************************************** */

// 9. Write a function that reverses a string.

/*
  overview: string will hold an index variable that starts at the end of the string and will continue to decrement until it reaches 0
  each function call, the string with index passed will concat onto a variable "result"
  base case: once index is equal to 0, return result
*/

const reverse = (string, index = string.length - 1, result = "") => {
  if (index < 0) return result
  return reverse(string, index - 1, result += string[index])
}

console.log(reverse("words"), "reverse")

/***************************************************** */

// 10. Write a function that determines if a string is a palindrome.

/*
  reverse input and compare it against the original input

  overview: string will hold an index variable that starts at the end of the string and will continue to decrement until it reaches 0
  each function call, the string with index passed will concat onto a variable "reversed"
  base case: once index is equal to 0, return the comparison against string input
*/

const isPalindrome = (string, index = string.length - 1, reversed = "") => {
  if (index < 0) return (string === reversed)
  return isPalindrome(string, index - 1, reversed += string[index])
}

console.log(isPalindrome("anna"), "isPalindrome") // true
console.log(isPalindrome("text"), "isPalindrome") // false

/***************************************************** */

// 11. Write a function that returns the remainder of x divided by y without using the modulo (%) operator.

// y has to subtract x 

/*
  overview: 
    y will continue to subtract from x through each call and decrement x by y
  base case: if x is less than y, return x
  function call modulo(x = x-y, y)
*/

const modulo = (x, y) => {
  if (x < y) return x
  return modulo(x = x - y, y)
}

console.log(modulo(5, 2), "modulo")  // 1
console.log(modulo(17, 5), "modulo") // 2
console.log(modulo(22, 6), "modulo") // 4

/***************************************************** */
// 12. Write a function that multiplies two numbers without using the * operator or Math methods.

/*
  Overview: multiplying is just adding a number a certain amount of times so we have to add x to x, y amount of times

  -> create a sum variable as param that will start at 0 and continue to add "x" until y === 0

  base case: if y = 0, return sum
  function call: multiply(x+=x, y-1)
*/

const multiply = (x, y, sum = 0) => {
  if (y === 0) return sum
  return multiply(x, y - 1, sum += x)
}

console.log(multiply(5, 2), "multiply")  // 10
console.log(multiply(3, 7), "multiply")  // 21


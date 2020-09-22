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

/***************************************************** */

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

/*
overview: dividing a number is just subtracting a number from another a certain amount of times, so we have to subtract x from y until y = 0, assuming that the number is evenly divisible OR until y is less than x

  -> create a result variable that will start at 0 and increment every time the function is run until y === 0 or y < 4
    -> return result
  -> function call will be x, y - x, result increments every time the function is run

*/

const divide = (x, y, result = 0) => {
  if (y === 0 || y < x) return result
  return divide(x, y - x, result + 1)
}

console.log(divide(4, 36), "divide") // --> 9
// console.log(divide(5,36), "divide") // --> 7
// console.log(divide(2,222), "divide") // --> 111


/***************************************************** */

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

const gcd = (x, y) => {
  if (y === 0) return x
  return gcd(x, y % x)
}

console.log(gcd(4, 36), "gcd") // 4)

/***************************************************** */

// 15. Write a function that compares each character of two strings and returns true if both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true

/*
  overview -> through each function call, remove the first letter of the two string inputs and compare them
  -> if at any point the string at 0 index doesn't equal each other, return true
  -> if string input only has one value each, compare the two values
*/

const compareStr = (str1, str2) => {
  if (str1.length === 1 && str2.length === 1) {
    if (str1[0] === str2[0]) {
      return true;
    }
  }
  if (str1[0] !== str2[0]) {
    return false;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
}
console.log(compareStr('house', 'tomato'), "compareStr")
console.log(compareStr('tomato', 'tomato'), "compareStr")
console.log(compareStr('house', 'houses'), "compareStr")

/***************************************************** */

// 17. Reverse the order of an array

/*
  overview: through each function call, we will push the popped value of the array input a result variable. once array's length is 0, we will return the result

  create result which will be a variable as a param that equals empty array
  create a popped variable the will pop the array but also hold its value
  push popped into result
  basecase: if array.length === 0, return result

  function call will take array and result
*/

const reverseArr = (array, result = []) => {
  if (array.length === 0) return result
  let popped = array.pop()
  result.push(popped)
  return reverseArr(array, result)
}

console.log(reverseArr([1, 2, 3, 4, 5]), "reverseArr")

/***************************************************** */

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

/*
  overview: 
    through each function call, value will be pushed into result, an empty array. once the length of result is equal to length, result will be returned
*/

const buildList = (value, length, result = []) => {
  if (result.length === length) return result
  result.push(value)
  return buildList(value, length, result)
}

console.log(buildList(7, 3), "buildList")

/***************************************************** */

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

/*
  overview: 
    through each function call, a counter variable will be incremented from 1 until it equals n,
    -> For multiples of three, output 'Fizz' instead of the number and get pushed into result
    -> For multiples of five, output 'Buzz' instead of the number and get pushed into result
    -> For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number and get pushed into result
    -> Otherwise,  pushed into result
      base case: if counter === n, return result
*/

const fizzBuzz = (n, counter = 1, result = []) => {
  if (counter === n + 1) return result
  if (counter % 3 === 0 && counter % 5 === 0) result.push("FizzBuzz")
  else if (counter % 5 === 0) result.push("Buzz")
  else if (counter % 3 === 0) result.push("Fizz")
  else result.push("" + counter)

  return fizzBuzz(n, counter + 1, result)
}

console.log(fizzBuzz(15), "fizzBuzz") // ['1','2','Fizz','4','Buzz']

/***************************************************** */

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

/*
 overview: 
  a popped variable is going to be created that will hold the popped value of the array input
    if popped value equals the search value, increment a counter variable that will start at 0

  if the original array's length === 0, return counter
*/

const countOccurrence = (array, value, counter = 0) => {
  if (array.length === 0) return counter
  let popped = array.pop()
  if (popped === value) counter++
  return countOccurrence(array, value, counter)
}

console.log(countOccurrence([2, 'banana', 4, 4, 1, 'banana'], 'banana'), "countOccurrence")
console.log(countOccurrence([2, 7, 4, 4, 1, 4], 5), "countOccurrence")

/***************************************************** */

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

/*
  overview: 
    starting from the first value of array, pass it to the callback function, and whatever that value is, push it into an empty array, result that is a variable as a param

    create a variable shifted that equals array.shift()
    push into result the vlaue of shifted that will be the value passed into the callacbk

    if the array's length is 0, return result    
*/

const rMap = (array, callback, result = []) => {
  if (array.length === 0) return result
  let shifted = array.shift()
  result.push(callback(shifted))
  return rMap(array, callback, result)
}

const timesTwo = num => num * 2

console.log(rMap([1, 2, 3], timesTwo))

/***************************************************** */

// 22. Write a function that counts the number of times a key occurs in an object.
var obj = {
  'e': { 'x': 'y' },
  't': {
    'r': { 'e': 'r' },
    'p': { 'y': 'r' }
  },
  'y': 'e'
};

const countKeysInObj = (obj, key) => {
  let num = 0
  for (let property in obj) {
    if (property === key) {
      num++
    }
    let value = obj[property]
    if (typeof value === 'object') {
      num += countKeysInObj(value, key)
    }
  }
  return num
}

console.log(countKeysInObj(obj, 'r'), 'countKeysInObj') // 1
console.log(countKeysInObj(obj, 'e'), 'countKeysInObj') // 2

/***************************************************** */

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

/*
  overview: 
    to get the next number, you must add the number before it plus the current number where the first two numbers are always 0 and 1

    create an array that will start with 0 and 1
    
    base case: the length of the fib array should be n - 1 so i need to continue the function calls until a counter variable equals n, once it does return result array

    through each function call, use counter to keep track of the index, 

    return function (n, increment counter, result)
*/

const fibonacci = (n, counter = 1, result = [0, 1]) => {
  if (counter === n) return result
  let current = result[counter] + result[counter - 1]
  result.push(current)
  return fibonacci(n, counter + 1, result)
}

console.log(fibonacci(5), "fib")

/***************************************************** */

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

/*
  overview: 
    to get the next number, you must add the number before it plus the current number where the first two numbers are always 0 and 1

    create an array that will start with 0 and 1
    
    base case: the length of the fib array should be n - 1 so i need to continue the function calls until a counter variable equals n, once it does return result array with index of n

    through each function call, use counter to keep track of the index, 

    return function (n, increment counter, result)
*/

const nthFibo = (n, counter = 1, result = [0, 1]) => {
  if (counter === n) return result[n]
  let current = result[counter] + result[counter - 1]
  result.push(current)
  return nthFibo(n, counter + 1, result)
}

console.log(nthFibo(7), "nthFibo")

/***************************************************** */

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/*
  overview: 
    create an empty array, results that will hold all the values to be returned... this variable will be a param
    create a variable shifted that will simultaneously remove the first value of array and hold that value
    through each function call, the upperCased values of shifted will be pushed into result
    basecase: if array's length is 0, that means we're done with it so we return result
    function call: function (array, result)
*/

const capitalizeWords = (array, result = []) => {
  if (array.length === 0) return result
  let shifted = (array.shift().toUpperCase())
  result.push(shifted)
  return capitalizeWords(array, result)
}
let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizeWords(words), "capitalizeWords")

/***************************************************** */

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']

const capitalizeFirst = (array) => {
  if (array.length === 0) return []
  let result = capitalizeFirst(array.slice(1, array.length))
  console.log(result)
  result.unshift(array[0][0].toUpperCase() + array[0].substring(1))
  return result
}

console.log(capitalizeFirst(['car', 'mango', 'banana']), "capitalizeFirst")


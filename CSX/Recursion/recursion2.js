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

/*
  overview: 
  create a capitalize function that will take a string input and return the capitalize version of that word
    - charAt(0).toUpperCase() takes the first letter of a string and turns it to an uppercase version of itself
    - it then concatentates with the remaining letters using the slice method that removes the first letter 
  within the capitalize first function, i'll be creating a i variable that keeps track of index and result variable which will be an empty array
    - thorugh each iteration, i will be incremented and passed to array to check its index, the base case will return result when i is equivalent or greater than array's length
    - through each iteration, a single word in array based off the i variable will be passed to the capitalize function and pushed into result
    - function call will take in array, incremented i, and result
*/

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const capitalizeFirst = (array, i = 0, result = []) => {
  if (i >= array.length) return result
  result.push(capitalize(array[i]))
  return capitalizeFirst(array, i + 1, result);
}

console.log(capitalizeFirst(['car', 'poop', 'banana']), "capitalizeFirst")

/***************************************************** */

// Initialize the function, with starting offset ("counter") i=0
console.log(capitalizeFirst(['car', 'poop', 'banana']), "capitalizeFirst")

// 29. Return the sum of all even numbers in an object containing nested objects.

let obj1 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

/* 
  overview: 
    create a sum variable that will hold the summed values of evens
    iterate through the obj using a for in loop to check key value pairs
      if the value is of the current key is is even, add it to sum
      if the key contains another object, sum the value of that object through recursive callback to the original function
    end iteration when it reaches the end of object
    return sum
*/
const nestedEvenSum = (obj) => {
  let sum = 0;
  for (let prop in obj) {
    if (obj[prop] % 2 === 0) sum += obj[prop];
    if (obj[prop] instanceof Object) sum += nestedEvenSum(obj[prop])
  }
  return sum;
}
console.log(nestedEvenSum(obj1), "nestedEvenSum")

/***************************************************** */

// 30. Flatten an array containing nested arrays.

/*
  overview: 
    flatten function will hold an array argument and will iterate through it to see if there are any subarrays, and if there is, that sub array will then be used as the next argument
    - each value within array and subarrays will be pushed into an empty array, flattened which will then be returned in the end

    - create a flattened variable
    - if the array input has no values, return an empty array
    - iterate through the array
      - if the value at the current index is an array (meaning its a subarray), pass the value into the flatten function call using the spread operator
      - otherwise, push the current value into flattened
    - return flattened  
*/

const flatten = (array) => {
  let flattened = []
  if (array.length === 0) return []
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      flattened.push(...flatten(array[i]))
    } else {
      flattened.push(array[i])
    }
  }
  return flattened
}

console.log(flatten([1, [2], [3, [[4]]], 5]), "flatten") // [1,2,3,4,5]

/***************************************************** */

/*
  overview:
    iterate through the function using an index variable to keep track of the position that i'm at

    create an empty obj as param,
    create index variable as param 
      
      - go through each string at each index 
        - if it exists in an obj, 
          - if it doesn't, create the string as key, and give it a value of one
          - if it does, increment the value
    base case: if the index variable is greater than or equal to the string's input return obj
    function call: return letterTally with string, obj, index, and result
*/

// 31. Given a string, return an object containing tallies of each letter.

const letterTally = (str, index = 0, result = {}) => {
  if (index >= str.length) return result
  if (!result[str[index]]) {
    result[str[index]] = 1
  } else {
    result[str[index]]++
  }
  return letterTally(str, index + 1, result)
}
console.log(letterTally("potato"), "letterTally") // {p:1, o:2, t:2, a:1}

/***************************************************** */

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

/*
  overview: 
    start at the 0 and 1 index and do some comparison, if they don't equal each other, push the "i" index value
    each comparison will be comparing current and next value starting at 0 index 
    0 1 // 2 3 // 4 5 // etc

    base case: if "i" is equal to array's length return result
    if first value and next value are not equivalent, push first value into array
    function call will take in the array,  result, and incremented i
*/

const compress = (array, result = [], i = 0) => {
  if (array.length === i) return result;
  if (array[i] !== array[i + 1]) result.push(array[i])
  return compress(array, result, i + 1);
}


console.log(compress([1, 2, 2, 3, 4, 4, 5, 5, 5]), "compress") // [1,2,3,4,5]
console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4]), "compress") // [1,2,3,4,2,5,4]

/***************************************************** */

// 33. Augment every element in a list with a new value where each element is an array itself.

/*
  overview: 
    iterate through each array using an index variable to keep track of position and push aug value into each nested array

    basecase: if index variable is equal to input array's length, return array
    push aug into array at index position equal to index variable
    function call takes in array, and increment index variable
*/

const augmentElements = (array, aug, index = 0) => {
  if (index >= array.length) return array
  array[index].push(aug)
  return augmentElements(array, aug, index + 1)
}

console.log(augmentElements([[], [3], [7]], 5), "augmentElements") // [[5],[3,5],[7,5]]

/***************************************************** */

// Is Prime Recursively
// Prime number can only divide evenly by itself or one

/*
  The idea is to bubble up. Div starts at 2 but if conditions aren't met, div will keep incrementing until num is less than or equal to div, or if div goes into num evenly. The function call will continue to increment until those conditions are met. The bulk of the logic belongs in `if(num <= div)` and `if(num % 2 === 0)` because this will tell the recursive call to keep incrementing until it finds if div goes into num evenly OR if the only other value that divides into itself is itself

  1 false, 2 true, 3 true, 4 false, 5 true, 6 false, 7 true, 8 false, 9 false, 10 false, 11 true

  if input number is 1, return false 
  if input number is less than or equal to div return true
  if input number divides evenly into div variable return false

  -> if none of the if conditions are met, increment div until num is less than or greater than div or if num divides into div evenly
  return the function call with num and incremented div
*/


const isPrime = (num, div = 2) => {
  if(num === 1) return false
  if(num <= div) return true
  if(num % div === 0) return false
  return isPrime(num, div+1)
}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false

/***************************************************** */

/*
  Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.

const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
const arr = ["first","second","third"];
pathFinder(obj,arr);   //-> "finish"
*/

/***************************************************** */

/*
  Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.
*/

const flattenRecursively = (array) => {
  let flattened = []
  for(let vals of array) {
    if(Array.isArray(vals)){
      flattened = flattened.concat(flattenRecursively(vals))
    } else {
      flattened.push(vals)
    }
  }
  return flattened
}


console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

/***************************************************** */

/* 
  Write a recursive function findInOrderedSet that determines if a number is in an ordered array. 
  Assume the array is sorted. 
  BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.
*/

const nums = [1, 4, 6, 7, 9, 17, 45];

const findInOrderedSet = (nums, target, i = 0) => {
  if(!nums.includes(target)) return false
  if(nums[i] === target) {
    return true
  }
  return findInOrderedSet(nums, target, i+1)
}

console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 17));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false
console.log(findInOrderedSet(nums, 46));  //-> false

/***************************************************** */

/*
  There are n stairs. A person standing at the bottom wants to reach the top.The person can climb either 1 or 2 stairs at a time.
  Write a function countWaysToReachNthStair to count the number of ways the person can reach the top(order does matter.
  See test cases for examples.
*/

const countWaysToReachNthStair = (n) => {
  if(n === 1) return 1
  if(n === 2) return 2
  return countWaysToReachNthStair(n-1) + countWaysToReachNthStair(n-2)
  return sum
}

console.log(countWaysToReachNthStair(3)) //-> 3 ((1,1,1), (2,1), (1,2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
console.log(countWaysToReachNthStair(5)) 
console.log(countWaysToReachNthStair(6)) 

/***************************************************** */

// Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.

/*
  Create function getRangeBetween that accepts a start value and an end value as arguments
    need to iterate through and get the values between x and y so i will need to create a cur variable that will hold keep track of the values starting at the next position of start (start + 1)
    push that value into a result variable that will be an empty array
    continue to do this until the current variable is the same as the end value
    recursively call the function while it accepts starting value, ending value, current value, and result


    create a function that accepts, x, y, cur, and res (cur will be one greater than x, res will be an empty array)
      base case: if cur is the same value as end value, return result array
      push the value of cur into result
      recursively call function that accepts x, y, incremented cur, and res
*/

const getRangeBetween = (x, y, cur = x+1, res = []) => {
  if(cur === y) return res
  res.push(cur)
  return getRangeBetween(x, y, cur+1, res)
}

console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]


/*
  Given a collection of distinct integers, return all possible permutations.
  
  Input: [1,2,3]
  
  Output: [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]

  The idea is to pop the last element and save it. Call permute() on the remaining numbers. Once the recursive call is returned and the permuatations have been generated, inject the popped element between numbers in each permuation and save the new permutation.

  https://bit.ly/3djxDYS
*/

const permute = (numsArray) => {
  if (numsArray.length === 0) return [[]];
  let popped = numsArray.pop();
  const permutations = permute(numsArray);
  let result = [];
  for (vals of permutations) {
    for (let i = 0; i <= vals.length; i++) {
      let arrVals = Array.from(vals);
      arrVals.splice(i, 0, popped);
      result.push(arrVals);
    }
  }
  return result;
};

console.log(permute([1,2,3]));

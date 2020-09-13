// Declare a variable 'number' and set it to the value 10.

let number = 10

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

const addNumbers = (num) => {
  // create a total and counter variable starting at 0
  let total = 0,
    counter = 0
  // while counter is less than or equal to num
  while (counter <= num) {
    // total will add the counter
    total += counter
    // increment counter
    counter++
    // end while
  }
  // return total
  return total
}

console.log(addNumbers(4), "addNumbers")

/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

const between50And500 = (num) => {
  // if num is greater than 50 AND less than 500
  if (num > 50 && num < 500) {
    // return true
    return true
  } else {
    return false
  }
  // otherwise return false
}

console.log(between50And500(501), "between50And500")
console.log(between50And500(500), "between50And500")
console.log(between50And500(49), "between50And500")


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

const divBy100 = (num) => {
  return (num % 100 === 0) ? true : false
}

console.log(divBy100(100), "divBy100")
console.log(divBy100(10), "divBy100")

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" 

should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

const negativeOrEven = (num) => {
  // true of num is < 0 || num % 2 === 0
  return (num < 0 || num % 2 === 0) ? true : false
  // otherwise return false
}

console.log(negativeOrEven(-1), "negativeOrEven")
console.log(negativeOrEven(1), "negativeOrEven")
console.log(negativeOrEven(2), "negativeOrEven")

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

const passAllTests = (array, val) => {
  // create an empty array to hold results
  let result = []
  // iterate through the array of functions
  for (let i = 0; i < array.length; i++) {
    // if the result is truthy, push true into the array, otherwise push false
    (array[i](val)) ? result.push("true") : result.push("false")
  }
  // if result has false in it, return false, otherwise return true
  return !(result.includes("false"))

}

console.log(passAllTests([between50And500, divBy100, negativeOrEven], 300), "passAllTests")
console.log(passAllTests([between50And500, divBy100, negativeOrEven], 250), "passAllTests")

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

const isPalindrome = (string) => {
  // create empty string
  let reversed = ""
  // iterate through the string in reverse
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  return (reversed === string) ? true : false
}

console.log(isPalindrome("car"), "isPalindrome")
console.log(isPalindrome("racecar"), "isPalindrome")

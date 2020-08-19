let counter = 0

function recurse() {
  if(counter === 2) return 'done'
  counter++
  return recurse()
}

/************************************************************************/
// param as storage to not pollute the global storage
function recurse(counter = 0) {
  if (counter === 2) return 'done'
  const newCounter = counter + 1  
  return recurse(newCounter)
}

const output = recurse(0)
console.log(output);

/************************************************************************/

// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

function repeater(char, num) {
  let string = ''
  if (string.length >= num) {
    return string
  }
  string += char
  return repeater(char, num)
}

// console.log(repeater('g'));
console.log(repeater('j', 5));

/************************************************************************/

// Write a function that returns the factorial of a number.

function factorial(num) {
  if (num <= 0) return undefined
  if (num <= 1) return 1
  return num * factorial(num - 1)
}

// ternary
function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

// Param as storage

function factorial(num, product = 4) {
  if (num === 1) return product
  let newProduct = product * num
  let newNum = num - 1
  return factorial(newNum, newProduct)
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1

/************************************************************************/

// Get the length of an array using recursion without accessing its length property.

function getLength(array, count = 0) {
  if (array.length === 0) {
    return count
  }
  else {
    count++;
    array.pop()
    return getLength(array, count)
  }
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

/************************************************************************/

// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

function pow(base, exponent) {
  if (exponent === 0) {
    return 1
  } else {
    return base * pow(base, exponent - 1)
  }
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

/************************************************************************/

// Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

function flow(input, funcArray, count = 0) {
  if (count === funcArray.length) return input
  return flow(funcArray[count](input), funcArray, ++count)
}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -
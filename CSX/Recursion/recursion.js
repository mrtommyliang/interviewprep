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

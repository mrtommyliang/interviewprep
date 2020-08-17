const createFunction = () => {
  let text = 'hello world'
  const helloWorld = () => {
    return text
  }
  return helloWorld
}

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'

/************************************************************************/

const score = () => {
  let result = 0
  const incrementScore = () => {
    result++
  }
  return incrementScore
}
result++
const tommysFunction = score()
const bryansFunction = score()

tommyFunction() //1
tommyFunction() //2
bryansFunction() //1

/************************************************************************/

const createFunctionWithInput = (stringInput) => {
  const inputReturn = () => {
    return stringInput
  }
  return inputReturn
}
// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'

/************************************************************************/

// Now we are going to create a function addByX that returns a function that will add an input by x.

const addByX = (input) => {
  const add = (x) => {
    return input + x
  }
  return add
}

const addByTwo = addByX(2);

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14

/************************************************************************/

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

const once = (callback) => {
  let hasBeenCalled = false
  let result
  const oncifiedCallback = (...args) => {
    if (!hasBeenCalled) {
      result = callback(...args)
      hasBeenCalled = true
    }
    return result
  }
  return oncifiedCallback
}

const addByTwoOnce = once(function (num) {
  return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

/************************************************************************/

//Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

const after = (repeater, callback) => {
  let counter = 0
  return function(...args) {
    counter++
    if(counter >= repeater) {
      return callback(...args)
    }
  }
}

const called = function (string) { return ('hello ' + string); };
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
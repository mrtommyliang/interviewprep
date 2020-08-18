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

/************************************************************************/
// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

const delay = (inputFunc, waitTime, ...args) => {
  return function () {
    return setTimeout(inputFunc, waitTime, ...args)
  }
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

/************************************************************************/


// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values

// instantiate a map variable
// instantiate a function that takes in one argument
// if string input doesn't equal val input
// assign output variable to be the result of the callback with val as arg
// output will then equal the key in map
// return output
// otherwise return the object
// return function

const saveOutput = (callback, string) => {
  let map = {}

  const myFunction = (val) => {
    if (string !== val) {
      let output = callback(val)
      map[val] = output
      return output
    } else {
      return map
    }
  }
  return myFunction
}


const multiplyBy2 = function (num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// input will be used as key, value will be key * 2
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

/************************************************************************/

// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

/*
Instantiate cycleIterator to take in an array input
  Instantiate index variable to keep track of which index we're at
  Instantiate incrementDay variable
    Instantiate result variable to be the value in the array using index as its place holder
    IF the value of index is greater than the array's length,
      RESET index to be zero
    END if
    RETURN result variable
  END incrementDay
  return incrementDay function

*/

const cycleIterator = (array) => {
  let index = 0

  const incrementDay = () => {
    let result = array[index++]
    if(index >= array.length) index = 0
    return result
  }
  return incrementDay
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

/************************************************************************/

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

const defineFirstArg = (func, arg) => {
  return function() {
    return func(input, ...arguments)
  }
}

const subtract = function(big, small) {return big-small}
const subFrom20 =  defineFirstArg(subtract, 20)
console.log(subFrom20(5));

/************************************************************************/

// Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

const dateStamp = (callback) => {
  let today = new Date()
  return (...args) => {
    return {
      date: today.toDateString(),
      output: callback(...args)
    }
  }
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

/************************************************************************/

// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

// declare function censor that takes no arguments
// create variable storage to store key, value pair
// return function tha takes up to two arguments
// check to see how many strings are passed into the returned function
  // if two strings are passed in, store as key, value pair in storage obj
  // if one string passed, modify the string to replace any instance of the keys in the storage
// return modified string


const censor = () => {
  let storage = {}

  return function(string1, string2) {
    if(string2) {
      storage[string1] = string2
      return
    }
    Object.keys(storage).forEach(key => {
      string1 = string1.replace(key, storage[key])
    })
    return string1
  }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
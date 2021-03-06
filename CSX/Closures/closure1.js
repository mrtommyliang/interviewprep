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
    return result++
  }
  return incrementScore
}

const tommysFunction = score()
const bryansFunction = score()

tommysFunction() //1
tommysFunction() //2
bryansFunction() //1

/************************************************************************/

const createFunctionWithInput = (stringInput) => {
  const inputReturn = () => {
    return stringInput
  }
  return inputReturn
}
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

// create a function that takes in another function
	// hold a result variable
  // hold a boolean value that checks if the this function has been called already (false)
  // create inner function that takes in a value
		// if hasBeenCalled is false
		// give the result variable the value of callback(input)
		// reassign hasBeenCalled to true
  // return inner function
	// return result
// end function


const once = (callback) => {
  // create result variable
  let result
  // create hasBennCalled variable that will hold a boolean
  let hasBeenCalled = false
  // create inner function that takes in any amount of inputs
  const inner = (...args) => {
    // check whether hasBeenCalled is true or false, if false
    if (!hasBeenCalled) {
      // result will equal the callback value using args as argument
      result = callback(...args)
      // hasBeenCalled reassigned to true
      hasBeenCalled = true
    }
    return result
  }
  return inner
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
  // create counter variable
  let counter = 0
  // create inner function that will take in any amount of inputs
  const inner = (val) => {
    // increment counter everytime function is called
    counter++
    // if counter is greater than or equal to the value of repeater
    if (counter >= repeater) {
      // return the callback function with inputs
      return callback(val)
    }
  }
  // return inner function defintion
  return inner
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

const saveOutput = (callback, pw) => {
  // instantiate a map variable
  let obj = {}
  // instantiate a function that takes in one argument
  const inner = (checkPW) => {
    // if string input doesn't equal val input
    if (pw !== checkPW) {
      // assign output variable to be the result of the callback with val as arg
      let output = callback(checkPW)
      // output will then equal the key in map
      obj[checkPW] = output
      // return output
      return output
      // otherwise return the object
    } else {
      return obj
    }
  }
  // return function
  return inner
}

const multiplyBy2 =  (num) => { return num * 2; };
// setting password as 'boo' ===> input will be used as key, value will be key * 2
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// incorrect pass
console.log(multBy2AndLog(2)); // should log: 4
// incorrect pass
console.log(multBy2AndLog(9)); // should log: 18
// correct pass
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
  // create counter variable
  let counter = 0
  // create inner function 
  const inner = () => {
    // if counter is larger than length of array, reassign counter to 0
    if (counter >= array.length) counter = 0
    // return array while incrementing counter
    return array[counter++]
  }
  return inner
}

  const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  const getDay = cycleIterator(threeDayWeekend);
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'
  console.log(getDay()); // should log: 'Fri'



/************************************************************************/

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

const defineFirstArg = (cb, ...arg) => {
  const inner = (...val) => {
    return cb(...arg, ...val)
  }
  return inner
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

// declare function with no inputs
const censor = () => {
  // create variable, storage as empty obj
  let storage = {}
  // create inner function that will take up to 2 strings
  const inner = (s1, s2) => {
    // if string2 input eixsts
    if (s2) {
      // use s1 as key and s2 as value within storage variable
      storage[s1] = s2
      // break out of if
    } else {
      //turn storage's keys as an array and iterate through each value
      Object.keys(storage).forEach((key) => {
        // for each value, replace the key with the value
        s1 = s1.replace(key, storage[key])
      })
      // return s1 input
      return s1
    }
  }
  // return inner function
  return inner
}

/************************************************************************/

const censor = () => {
  let result = {}
  const inner = (s1, s2) => {
    if (s2) {
      result[s1] = s2
    } else {
      for(let property in result) {
        s1 = s1.replace(property, result[property]);
      }
      return s1
    }
  }
  return inner;
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

/************************************************************************/

// Create a function that returns user's input every odd iteration and 'Even' at every even iteration

// need to create a counter variable to see what iteration i'm at, and depending on whether that variable is even or odd, a different output is returned

// create counter variable to check if even or odd
  // for every function call, counter will increment
  // return input if values are odd, otherwise return even
  
const outter = (input) => {
  let counter = 0
  const inner = () => {
    counter++
    return (counter % 2 === 1) ? input : 'Even'  
  }
  return inner
}

let hello = oddReturns("Hello World")
console.log(hello())
console.log(hello())
console.log(hello())
console.log(hello())
console.log(hello())

/************************************************************************/
/*
  holdPrev will hold no input but will return an inner function
  create a previous variable that will start at 0 and be returned at the initial function call
  inner function will hold a val that user inputs
    a current variable will be equal to previous 
    reassign previous to equal val 
    return current variable which is the original number
  return inner

  overview: 
    this method will be sort of a two pointer approach where i'll be able to hold user's input for the next function call while also taking in a new value for the next function call

*/

const holdPrev = () => {
  let previous = 0
  const inner = (val) => {
    let current = previous
    previous = val
    return current
  }
  return inner
}

const lastNumber = holdPrev()
console.log(lastNumber(10)) // 0
console.log(lastNumber(15)) // 10
console.log(lastNumber(8)) // 15
console.log(lastNumber(33)) // 8
/************************************************************************/
/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value). 

The returned function should have the following behavior:

If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.

>>> If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:
const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/
/*
  checkerlogger takes a callback
  create an obj that has true/false key value pairs starting at 0
  inner takes a arg
    if arg doesn't exist
      return obj
    otherwise 
      result variable = cb(val) // true/false
      using result, i pass it to object as key and increment the value
      return result variable
  return inner
*/

const isOdd = num => num % 2 === 1

const checkerLogger = (cb) => {
  let obj = { true: 0, false: 0 }
  const inner = (val) => {
    if (!val) {
      return obj
    } else {
      let result = cb(val)
      obj[result]++
      return result
    }
  }
  return inner
}

const oddCounter = checkerLogger(isOdd);
console.log(oddCounter())   //->  { true: 0, false: 0 }
console.log(oddCounter(3))  //-> true
console.log(oddCounter(2))  //->  false
console.log(oddCounter())   //-> { true: 1, false: 1 }
/*
Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
*/

const createFunction = () => {
  const inner = () => {
    return 'hello'
  }
  return inner
}

const hello = createFunction();
console.log(hello()); // => should console.log('hello');

/***************************************************************************************/

/*
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
*/

const createFunctionPrinter = (val) => {
  const inner = () => {
    return val
  }
  return inner
}

const printSample = createFunctionPrinter('sample');
console.log(printSample()); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
console.log(printHello()); // => should console.log('hello');

/***************************************************************************************/

/*
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
*/

const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    return ['counter', counter]
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

console.log(willCounter())
console.log(willCounter())
console.log(willCounter())
console.log(jasCounter())
console.log(willCounter())

const addByX = (input) => {
  const inner = (val) => {
    return  val + input
  }
  return inner
}

const addByTwo = addByX(2);
console.log(addByTwo(1));
console.log(addByTwo(2));
console.log(addByTwo(3));

const addByThree = addByX(3);
console.log(addByThree(1));
console.log(addByThree(2));

const addByFour = addByX(4);
console.log(addByFour(4));
console.log(addByFour(5));

/***************************************************************************************/

/*
Challenge 4
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

const once = (cb) => {
  let result
  let hasBeenCalled = false
  const inner = (val) => {
    if(!hasBeenCalled) {
      result = cb(val)
      hasBeenCalled = true
    }
    return result 
  }
  return inner
}

const onceFunc = once(addByTwo)
console.log(onceFunc(4));
console.log(onceFunc(10));
console.log(onceFunc(9001));

/***************************************************************************************/

/*
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/

const after = (count, cb) => {
  let counter = 0
  const inner = () => {
    counter++
    if(counter === count) {
      return cb()
    }
  }
  return inner
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);
console.log(afterCalled());
console.log(afterCalled());
console.log(afterCalled());

/***************************************************************************************/

/*
Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
*/

const rollCall = (array) => {
  let counter = 0
  const inner = () => {
    if(counter < array.length )console.log(array[counter++]);
    if(counter === array.length) console.log("Everyone accounted for");
  }
  return inner
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
console.log(rollCaller())
console.log(rollCaller())
console.log(rollCaller())
console.log(rollCaller())

// changing challenge 7 to returns instead of logs

const rollCall2 = (array) => {
  let counter = 0
  const inner = () => {
    if(counter < array.length) return array[counter++]
    if(counter >= array.length) return "Everyone accounted for"
  }
  return inner
}

const rollCaller2 = rollCall2(['Victoria', 'Juan', 'Ruth'])
console.log(rollCaller2())
console.log(rollCaller2())
console.log(rollCaller2())
console.log(rollCaller2())

/***************************************************************************************/

/*
Challenge 8
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, 
except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/

const saveOutput = (cb, pw) => {
  let obj = {}
  const inner = (val) => {
    if(val !== pw) {
      obj[val] = cb(val)
      return cb(val)
    } else {
      return obj
    }
  }
  return inner
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

/***************************************************************************************/

/*
Challenge 9
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/

const cycleIterator = (array) => {
  let counter = 0
  const inner = () => {
    if(counter === array.length) counter = 0
    return array[counter++]
  }
  return inner
}


const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

/***************************************************************************************/

/*
Challenge 10
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
*/

const defineFirstArg = (cb, ...val) => {
  const inner = (...arg) => {
    return cb(...val,...arg)
  }
  return inner
}

const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

/***************************************************************************************/

/*
Challenge 13
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
*/

const createSecretHolder = (secret) => {
  let _secret = secret
  return {
    getSecret: function() {
      return _secret
    },
    setSecret: function(secret) {
      _secret = secret
    }
  }
}

obj = createSecretHolder(5)
console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret(2));

/***************************************************************************************/

/*
Challenge 14
Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.
*/

const callTimes = () => {
  let counter = 0
  const inner = () => {
    counter++
    return counter
  }
  return inner
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1());
console.log(myNewFunc1());
console.log(myNewFunc2());
console.log(myNewFunc2());

/***************************************************************************************/

/*
Challenge 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
*/

const russianRoulette = (num) => {
  let counter = 0
  const inner = () => {
    counter++
    if(num > counter) return "click"
    if(num === counter) return "bang"
    if(num < counter) return "reload to play again"
  }
  return inner
}


const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

/***************************************************************************************/

/*
Challenge 16
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
*/
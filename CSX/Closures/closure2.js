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

const hello = createFunction()
console.log(hello()) // => should console.log('hello')

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

const printSample = createFunctionPrinter('sample')
console.log(printSample()) // => should console.log('sample')
const printHello = createFunctionPrinter('hello')
console.log(printHello()) // => should console.log('hello')

/***************************************************************************************/

/*
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
*/

const outer = () => {
  let counter = 0 // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++
    return ['counter', counter]
  }
  return incrementCounter
}

const willCounter = outer()
const jasCounter = outer()

console.log(willCounter())
console.log(willCounter())
console.log(willCounter())
console.log(jasCounter())
console.log(willCounter())

const addByX = (input) => {
  const inner = (val) => {
    return val + input
  }
  return inner
}

const addByTwo = addByX(2)
console.log(addByTwo(1))
console.log(addByTwo(2))
console.log(addByTwo(3))

const addByThree = addByX(3)
console.log(addByThree(1))
console.log(addByThree(2))

const addByFour = addByX(4)
console.log(addByFour(4))
console.log(addByFour(5))

/***************************************************************************************/

/*
Challenge 4
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

const once = (cb) => {
  let result
  let hasBeenCalled = false
  const inner = (val) => {
    if (!hasBeenCalled) {
      result = cb(val)
      hasBeenCalled = true
    }
    return result
  }
  return inner
}

const onceFunc = once(addByTwo)
console.log(onceFunc(4))
console.log(onceFunc(10))
console.log(onceFunc(9001))

/***************************************************************************************/

/*
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/

const after = (count, cb) => {
  let counter = 0
  const inner = () => {
    counter++
    if (counter === count) {
      return cb()
    }
  }
  return inner
}

const called = function () { console.log('hello') }
const afterCalled = after(3, called)
console.log(afterCalled())
console.log(afterCalled())
console.log(afterCalled())

/***************************************************************************************/

/*
Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
*/

const rollCall = (array) => {
  let counter = 0
  const inner = () => {
    if (counter < array.length) console.log(array[counter++])
    if (counter === array.length) console.log("Everyone accounted for")
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
    if (counter < array.length) return array[counter++]
    if (counter >= array.length) return "Everyone accounted for"
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
    if (val !== pw) {
      obj[val] = cb(val)
      return cb(val)
    } else {
      return obj
    }
  }
  return inner
}

const multiplyBy2 = function (num) { return num * 2 }
const multBy2AndLog = saveOutput(multiplyBy2, 'boo')
console.log(multBy2AndLog(2)) // => should log 4
console.log(multBy2AndLog(9)) // => should log 18
console.log(multBy2AndLog('boo')) // => should log { 2: 4, 9: 18 }

/***************************************************************************************/

/*
Challenge 9
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/

const cycleIterator = (array) => {
  let counter = 0
  const inner = () => {
    if (counter === array.length) counter = 0
    return array[counter++]
  }
  return inner
}


const threeDayWeekend = ['Fri', 'Sat', 'Sun']
const getDay = cycleIterator(threeDayWeekend)
console.log(getDay()) // => should log 'Fri'
console.log(getDay()) // => should log 'Sat'
console.log(getDay()) // => should log 'Sun'
console.log(getDay()) // => should log 'Fri'

/***************************************************************************************/

/*
Challenge 10
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
*/

const defineFirstArg = (cb, ...val) => {
  const inner = (...arg) => {
    return cb(...val, ...arg)
  }
  return inner
}

const subtract = function (big, small) { return big - small }
const subFrom20 = defineFirstArg(subtract, 20)
console.log(subFrom20(5)) // => should log 15

/***************************************************************************************/

/*
Challenge 13
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
*/

const createSecretHolder = (secret) => {
  let _secret = secret
  return {
    getSecret: function () {
      return _secret
    },
    setSecret: function (secret) {
      _secret = secret
    }
  }
}

obj = createSecretHolder(5)
console.log(obj.getSecret())
console.log(obj.setSecret(2))
console.log(obj.getSecret(2))

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

let myNewFunc1 = callTimes()
let myNewFunc2 = callTimes()
console.log(myNewFunc1())
console.log(myNewFunc1())
console.log(myNewFunc2())
console.log(myNewFunc2())

/***************************************************************************************/

/*
Challenge 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
*/

const russianRoulette = (num) => {
  let counter = 0
  const inner = () => {
    counter++
    if (num > counter) return "click"
    if (num === counter) return "bang"
    if (num < counter) return "reload to play again"
  }
  return inner
}


const play = russianRoulette(3)
console.log(play()) // => should log 'click'
console.log(play()) // => should log 'click'
console.log(play()) // => should log 'bang'
console.log(play()) // => should log 'reload to play again'
console.log(play()) // => should log 'reload to play again'

/***************************************************************************************/

/*
Challenge 16
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). 

When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). 

When the returned function is invoked with no arguments, the current average is outputted. 

If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
*/

/*
  need to create an array of values that will hold onto inputted vals
  need to create an average variable that will be the averageo of the array
  if there is no val inputted and there are no inputs within the array return 0
  if there is no val inputted but there are values within the array, return the average
  if there is a val arg, push it into the the array and return the average of the array
*/

const average = () => {
  let average
  let args = []
  const inner = (val) => {
    if (!val && args.length === 0) {
      average = 0
    }
    if (val) {
      args.push(val)
      let total = args.reduce((acc, cur) => {
        return acc + cur
      })
      average = total / args.length
    }
    return average
  }
  return inner
}

const avgSoFar = average()
console.log(avgSoFar())    // => should log 0
console.log(avgSoFar(4))   // => should log 4
console.log(avgSoFar(8))   // => should log 6
console.log(avgSoFar())    // => should log 6
console.log(avgSoFar(12))  // => should log 8
console.log(avgSoFar())    // => should log 8

/***************************************************************************************/

/*
Challenge 17
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
*/

/*
  iterate through each pair of arrays

*/

const capLastTestCases = []
capLastTestCases.push(['hello', 'hellO'])
capLastTestCases.push(['goodbye', 'goodbyE'])
capLastTestCases.push(['howdy', 'howdY'])
const capLastAttempt1 = (str) => str.toUpperCase()
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase()

/***************** APPROACH 1 ******************/

const makeFuncTester = (array) => {
  const inner = (cb) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
      result.push(cb(array[i][0]) === array[i][1])
    }
    return !(result.includes(false))
  }
  return inner
}

/***************** APPROACH 2 ******************/

const makeFuncTester2 = (array) => {
  const inner = (cb) => {
    return array.every((pairs) => cb(pairs[0]) === pairs[1])
  }
  return inner
}

const shouldCapitalizeLast = makeFuncTester(capLastTestCases)
const shouldCapitalizeLast2 = makeFuncTester2(capLastTestCases)
console.log(shouldCapitalizeLast(capLastAttempt1)) // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)) // => should log true

console.log(shouldCapitalizeLast2(capLastAttempt1)) // => should log false
console.log(shouldCapitalizeLast2(capLastAttempt2)) // => should log true

/***************************************************************************************/

/*
Challenge 18
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that delted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.
*/

/*
  makehistory function will accept an arg, limit which will be a integer
    create a memory variable that will be an empty array to hold the inputs
    inner function will accept an input arg which will be users input
      if input does not equal undone
        if memory's length is greater than or equal the limit
          remove the first value
          push input into memory
          return input + "done"
        else 
          if memory's length is 0 return "nothing to do"
          create a remove variable that will remove the last value of the memory array
          return the remove variable + " undone"
    
*/

const makeHistory = (limit) => {
  let memory = []
  const inner = (input) => {
    if (input !== "undo") {
      if (memory.length > limit) memory.shift()
      memory.push(input)
      return input + " done"
    } else {
      if (memory.length === 0) return "nothing to do"
      let remove = memory.pop()
      return remove + " undone"
    }
  }
  return inner
}
const myActions = makeHistory(2)
console.log(myActions('jump')) // => should log 'jump done'
console.log(myActions('undo')) // => should log 'jump undone'
console.log(myActions('walk')) // => should log 'walk done'
console.log(myActions('code')) // => should log 'code done'
console.log(myActions('pose')) // => should log 'pose done'
console.log(myActions('undo')) // => should log 'pose undone'
console.log(myActions('undo')) // => should log 'code undone'
console.log(myActions('undo')) // => should log 'nothing to undo'

/***************************************************************************************/

/*
Challenge 19
Inspect the commented out test cases carefully if you need help to understand these instructions.

Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

On the SECOND invocation of the PLAYER function, it will return either:

the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
the string 'bust' if that sum is over 21.

If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
the string 'bust' if the new sum is over 21.

And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
You may assume that the given array is long enough to give a 'bust' before running out of numbers.

BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
*/

/*
  https://dev.to/internettradie/mastering-hard-parts-of-javascript-closure-iv-2i4k

  The most important concept here is that we have two closures here, one inside the other. The outer function can be thought of as the deck of cards, the function inside that can be thought of as the dealer, and the one inside that can be thought of as the players. Thinking logically about blackjack, a dealer can deal many players, and a single deck of cards can be used in many dealings. Thinking like this should clarify where each variable that acts as memory should reside.

  Implementing the bonus part just required realising that we needed two different counters, one for the dealer and one for the players, and then to modify the logic very slightly to count correctly.
*/

const blackjack = (array) => {
  let dealerCount = 0
  const dealer = (a, b) => {
    let playerCount = 0
    let total = a + b
    const player = () => {
      if (total === "bust") return "you are done!"
      dealerCount++
      playerCount++
      if (playerCount === 1) return total
      total += array[dealerCount - 2]
      if (total > 21) {
        total = "bust"
        dealerCount--
      }
      return total
    }
    return player
  }
  return dealer
}

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11])

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5)
console.log(i_like_to_live_dangerously()) // => should log 9
console.log(i_like_to_live_dangerously()) // => should log 11
console.log(i_like_to_live_dangerously()) // => should log 17
console.log(i_like_to_live_dangerously()) // => should log 18
console.log(i_like_to_live_dangerously()) // => should log 'bust'
console.log(i_like_to_live_dangerously()) // => should log 'you are done!'
console.log(i_like_to_live_dangerously()) // => should log 'you are done!'

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2)
console.log(i_TOO_like_to_live_dangerously()) // => should log 4
console.log(i_TOO_like_to_live_dangerously()) // => should log 15
console.log(i_TOO_like_to_live_dangerously()) // => should log 19
console.log(i_TOO_like_to_live_dangerously()) // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()) // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()) // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7)
console.log(i_ALSO_like_to_live_dangerously()) // => should log 10
console.log(i_ALSO_like_to_live_dangerously()) // => should log 13
console.log(i_ALSO_like_to_live_dangerously()) // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()) // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()) // => should log 'you are done!
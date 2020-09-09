/*
Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.
*/

const pluralize = (array) => {
  return array.reduce((acc, cur) => {
    acc.push(cur + 's')
    return acc
  }, [])
}

const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

/************************************************************************/

/*
Create a function subtractTwo that accepts a number and returns that number minus 2.

Then create a function map that takes two inputs -
  an array of numbers (a list of numbers)
  a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.
*/

const subtractTwo = (num) => {
  return num - 2
}

const map = (array, callback) => {
  return array.reduce((acc, cur) => {
    acc.push(callback(cur))
    return acc
  }, [])
}

console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

/************************************************************************/

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

const map2 = (array, callback) => {
  return array.reduce((acc, cur) => {
    acc.push(callback(cur))
    return acc
  }, [])
}

forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(map2([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]

/************************************************************************/

const filterArray = (array, callback) => {
  return array.reduce((acc, cur) => {
    if (callback(cur)) acc.push(callback(cur))
    return acc
  }, [])
}
const arrOfNums = [1, 2, 3, 4, 5];

const isEven = (num) => {
  if (num % 2 === 0) {
    return num
  }
}
const isOdd = (num) => {
  if (num % 2 === 1) {
    return num
  }
}

console.log(filterArray(arrOfNums, isEven)); // should log: [2, 4]
console.log(filterArray(arrOfNums, isOdd)); // should log: [1, 3, 5]

/************************************************************************/

/*
The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
*/

const eitherFilter = (array, callback1, callback2) => {
  return array.reduce((acc, cur) => {
    if (callback1(cur)) acc.push(cur)
    if (callback2(cur)) acc.push(cur)
    return acc
  }, [])
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

/************************************************************************/

/*
Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. Notice that the lines of code testing your work are using functions and an array from previous challenges. The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.
*/

const eitherCallback = (callback1, callback2) => {
  const inner = (input) => {
    // if it is truthy, return true
    if (callback1(input)) return true
    if (callback2(input)) return true
  }
  return inner
}

const filterArray = (array, callback) => {
  // create empty array variable
  const newArray = [];
  // iterate through the length of the array
  for (let i = 0; i < array.length; i ++) {
    // if the value of the callback function is truthy, push it into the array
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

const filterArray2 = (array, callback) => {
	return array.reduce((acc, cur) => {
    if(callback(cur)) acc.push(cur)
    return acc
  }, [])
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

/************************************************************************/

/*
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.
*/

const intersection = (input) => {
  // use the reduce method to condense multiple arrays
  return input.reduce((acc, cur) => {
    // filter out the the current value of the first array
    return acc.filter((common) => {
      // 	check to see if the following values contains those values
      return cur.includes(common)
    })
  })
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

/************************************************************************/

/*
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
*/

const union = (arrays) => {
  let combined = arrays.flat()
  return [...new Set(combined)]
}

const union2 = (arrays) => {
  let combined = arrays.reduce((acc, cur) => {
    return [...acc, ...cur]
  }, [])
  return [...new Set(combined)]
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

/************************************************************************/

const reduce = (input, operation, initial) => {
  if (Array.isArray(input)) {
    let acc
    if (!initial) {
      acc = input[0]
      input = input.slice(1)
    } else {
      acc = initial
    }
    input.forEach(function (val) {
      acc = operation(acc, val)
    })
    return acc
  }
  return `Not an array`
}


const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8

/************************************************************************/

// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

const objOfMatches = (array1, array2, callback) => {
  // create empty obj, obj
  let obj = {}
  // iterate through array1
  for (let i = 0; i < array1.length; i++) {
    // compare the callback(array1) value against array2 value
    // if the values are the same
    if (callback(array1[i]) === array2[i]) {
      // use matching array1 as key and array2 as value
      obj[array1[i]] = array2[i]
    }
  }
  // return obj
  return obj
}
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

/************************************************************************/

// arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

const arrToObj = (array, callback) => {
  // create empty obj variable, obj
  let obj = {}
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // assign the key to be the the value of array, and the value to be the result of array passed to callback
    obj[array[i]] = callback(array[i])
  }
  // return obj
  return obj
}

const arrToObj2 = (array, callback) => {
  // return array using the reduce method where acc is intialized as an obj and cur is each value
  return array.reduce((acc, cur) => {
    // for each value of cur, assign the key to be cur and the value to be the callback result
    acc[cur] = callback(cur)
    // return acc/ the obj
    return acc
  }, {})
}

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

/************************************************************************/

// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

const multiMap = (arr, callbacks) => {
  // create an empty object, obj
  let obj = {}
  // iterate through arr of strings 
  for (let vals of arr) {
    // assign arr strings to be key and value will be an empty array
    obj[vals] = []
    // iterate through callbacks
    for (let funcs of callbacks) {
      // push the callback with arg of arr results into their array within obj
      obj[vals].push(funcs(vals))
    }
  }
  // return obj
  return obj
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/************************************************************************/

// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

const majority = (arr, callback) => {
  // assign even and odd values of 0
  let odd = 0
  //iterate through arr
  let even = arr.reduce((acc, cur) => {
    // if callback with the current value is odd, increment odd variable
    (callback(cur)) ? odd++ : acc++
    return acc
    // otherwise increment even variable
  }, 0)
  // if odd is greater than even return true otherwise return false
  return (odd > even) ? true : false
}

const majority2 = (arr, callback) => {
  let odd = 0,
    even = 0

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      odd++
    } else even++
  }
  if (odd > even) {
    return true
  } else return false
}

const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/************************************************************************/

// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

const prioritize = (arr, cb) => {
  // instantiate two empty arrays
  let startsWithS = []
  let remaining = arr.reduce((acc, cur) => {
    (cb(cur)) ? startsWithS.push(cur) : acc.push(cur)
    return acc
  }, [])
  return [...startsWithS, ...remaining]
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/************************************************************************/

// Create a function countBy that accepts an array and a callback, and returns an object.countBy will iterate through the array and perform the callback on each element.Each return value from the callback will be saved as a key on the object.The value associated with each key will be the number of times that particular return value was returned.

const countBy = (arr, cb) => {
  // create empty obj, obj
  let obj = {}
  //iterate through arr
  for (let vals of arr) {
    // create result variable that will hold the result of callbacks 
    let result = cb(vals)
    // if result doesn't exist in obj or is falsey
    if (!obj[result]) {
      // pass the value of one to the result key
      obj[result] = 1
    // otherwise
    } else {
      // increment hte count
      obj[result]++
    }
  }
  // return the obj
  return obj
}

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

/************************************************************************/

// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

const groupBy = (arr, cb) => {
  // create empty obj
  let obj = {}
  // iterate through arr
  for (let vals of arr) {
    // assign result variable to hold the result of cb(arr)
    let result = cb(vals)
    //check if these keys exist within the obj
    if (!obj[result]) {
      // if it doesn't, give the value an empty array
      obj[result] = []
    }
    // push the values into the empty array
    obj[result].push(vals)
  }
  // return the obj
  return obj
}

const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/************************************************************************/

// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

const goodKeys = (input, cb) => {
  // create empty array
  let arr = []
  // iterate through the values of the object
  for (let vals in input) {
    // if the cb(input[vals]) is truthy
    if (cb(input[vals]))
      // push the value into empty arr
      arr.push(vals)
  }
  // return arr
  return arr
}


const sunny = {
  mac: 'priest',
  dennis: 'calculator',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog'
}
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
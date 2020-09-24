/*
Declare a variable 'myNums' and set it to an object.
On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
The other key will be 'randomNumber' and its value will be 12.
*/

const myNums = {}
// objName.keyName = value
myNums.favoriteNumber = 21
myNums.randomNumber = 13
// objName[keyName] = value
myNums["favoriteNumber2"] = 20
myNums["randomNumber2"] = 12
console.log(myNums, "myNums")

/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

const largestSwap = (num) => {
  // turn the num input to a string to check for index positions
  const numArray = num.toString()
  // create varibales to hold each index of the num
  const val1 = numArray[0]
  const val2 = numArray[1]
  // if val2 is greater than val1 return false, otherwise true
  return (val2 > val1) ? false : true
}

// 27 would return false
// 72 would return true

console.log(largestSwap(27), 'largestSwap')
console.log(largestSwap(72), 'largestSwap')


/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

const countTimes1 = (array, searchVal) => {
  // create a counter variable and initialize it at 0
  let counter = 0
  // iterate through the array
  for (let vals of array) {
    // if any value equals the searchVal
    if (vals === searchVal) {
      // increment the counter
      counter++
    }
  }
  // return counter
  return counter
}

const countTimes2 = (array, searchVal) => {
  // return the array using the reduce method that takes an acc initialized at 0 and a cur that will check each value
  return array.reduce((acc, cur) => {
    // if the cur value is equal to the search value, increment the acc 
    if (cur === searchVal) acc++
    // return the acc
    return acc
  }, 0)
}

console.log(countTimes1([1, 8, 9, 9, 10], 9), "countTimes1")
console.log(countTimes2([1, 8, 9, 9, 10], 9), "countTimes2")


/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/



const wordSearchLetterCounter = (array, searchVal) => {
  // flatten the array
  const flattenedArray = array.flat()
  // using the flattened array, pass it into countTimes along with the search val and return the result
  return countTimes(flattenedArray, searchVal)
}



console.log(wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D"), 'wordSearch')

/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

const changeCase = (letter) => {
  // if letter is already lowercase, change it to uppercase
  if (letter === letter.toLowerCase()) {
    return letter.toUpperCase()
  }
  // otherwise return the lowercase of letter
  return letter.toLowerCase()
}

console.log(changeCase('a'), 'changeCase')
console.log(changeCase('B'), 'changeCase')
/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

const effectString = (string, callback) => {
  // create an empty string that will hold the value
  let res = '';
  // iterate through the string input
  for (let i = 0; i < string.length; i++) {
    // concat string with the result of callback taking in string
    res += (callback(string[i]))
  }
  // return res
  return res
}

console.log(effectString("hello", changeCase), 'effectString')

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
  - if val input doesn't exist, return the obj
  - if val input does exist, pass it to cb and cb should return true or false
  - create an obj that holds the true or false
  - using the true or false as a key, i can increment the value which i'll initialize as 0
    - whatever the result of the cb with the val is, it gets checked against the key, and since i'm initializing it, i know it exists

  checkerLogger takes a cb
    should be an object
  inner function val
    if val doesn't exist
      return an object
    else 
      create a result variable that holds cb(val) 
      obj[result]++
      return the obj
    returns a boolean value using cb and val as the arg
  return inner
*/

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

const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter())   // ->  { true: 0, false: 0 }
console.log(oddCounter(3))  //  -> true
console.log(oddCounter(2))  //  ->  false
console.log(oddCounter())   //  -> { true: 1, false: 1 }

/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/


const countChar = (string, target, i = 0, resultCount = 0) => {
  // base case: 
  // iterate through the string for as long as iterator reaches string's length,
  // return the resultCount variable 
  if (i === string.length) return resultCount;
  // if the value at the index of string is equal to the target, increment result
  if (string[i] === target) resultCount++
  // return the function again but increment i to keep track against the length
  return countChar(string, target, i + 1, resultCount)
}


console.log(countChar('asdasdooo', 'o'), 'countChar')
console.log(countChar('javascript', 'j'), 'countChar')




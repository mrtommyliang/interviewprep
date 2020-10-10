/*
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
*/
// is there a method that removes white spaces in a string javascript?
// https://futurestud.io/tutorials/remove-all-whitespace-from-a-string-in-javascript
/*
  \s: matches any whitespace symbol: spaces, tabs, and line breaks
  +: match one or more of the preceding tokens (referencing \s)
  g: the g at the end indicates iterative searching throughout the full string
  
  "word"
*/


const countCharsWithoutWhiteSpaces1 = (string) => {
  let noWhiteSpaces = string.replace(/\s+/g, '')
  let counter = 0
  for (let i = 0; i < noWhiteSpaces.length; i++) {
    counter++
  }
  return counter
}

console.log(countCharsWithoutWhiteSpaces1("word"))
console.log(countCharsWithoutWhiteSpaces1("word "))


const countCharsWithoutWhiteSpaces2 = (string) => {
  let removed = string.split(" ")
  return removed.length
}

console.log(countCharsWithoutWhiteSpaces2("word"), "countCharsWithoutWhiteSpaces")
console.log(countCharsWithoutWhiteSpaces2("word "), "countCharsWithoutWhiteSpaces")

/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/

const memoryMaker = () => {
  let array = []
  const inner = (val) => {
    array.push(val)
    return array
  }
  return inner
}

const iRemember = memoryMaker();
console.log(iRemember('hello'))		//-> ['hello']
console.log(iRemember(1)) 		//-> ['hello', 1]
console.log(iRemember('world')) 		//-> ['hello', 1, 'world']
console.log(iRemember(true)) 		//-> ['hello', 1, 'world', true]

/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.

Example: 				10 			+ 10 = 20
sumAllElements([1,2,3,4], 10) -> 20

Note: Do NOT use any native JS methods, or loops
*/


/*
  overview
    sumAllElements (array, inital, index = 0, result = 0)
    index should increment until it is greater than or equal array's length
    sum array by adding array values into result 
    result should also add the inital value
    function call (array, initial, increment index, result)
*/

const sumAllElements = (array, initial, index = 0, result = 0) => {
  // basecase
  if (index >= array.length) return result + initial
  result += array[index]
  return sumAllElements(array, initial, index + 1, result)
}


console.log(sumAllElements([1, 2, 3, 4], 10))

/*
Create a function "fastCache" that takes one argument (a function) and returns a function. 

When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 

Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;<<<<<<
const cachedMultiplyBy2 = fastCache(multiplyBy2);
>>> cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object

MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2); <<<<<
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
                    5*2 10*2 
                    10	20 => 30
*/

/*
  inner take val 
    check if it exists: if it doesn't 
      store that val as a key in an object and assign the value to be the result of the cb(val) obj[val] = cb(val)
    let result = cb(val)
    return cb(val)
*/



const fastCache = (cb) => {
  let obj = {}
  const inner = (...val) => {

    if (obj[val]) return obj[val]

    if (val) {
      let result = cb(...val)
      obj[val] = result
      return result
    }
  }

  return inner
}

const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
console.log(cachedMultiplyBy2(100))
console.log(cachedMultiplyBy2(150))
console.log(cachedMultiplyBy2(100))

const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2)
const cachedSumMultiplyBy2 = fastCache(sumMultiplyBy2);
console.log(cachedSumMultiplyBy2(5, 10))
console.log(cachedSumMultiplyBy2(1, 2))
console.log(cachedSumMultiplyBy2(5, 10))

/*
I have an array stock_prices_yesterday where:

- The indices are the time in minutes past trade opening time, which was 9:30am local time
- The values are the prices in dollars of Apple stock at the time

For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;

Write a function 'bestProfit' for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday

Return 0 if no profit is possible OR if input is invalid.

More examples:
                  123 - 1 => 				122
profit = 99
    1 => 123
profit = 122

bestProfit([ 100, 1, 123, 120 ]); // 122
bestProfit([ 100, 100, 100, 100 ]); // 0

bestProfit([ 100, 88, 44, 2 ]); // 0
bestProfit([ 100, 88, 99, 300 ]); // 212
*/

/*
  index represents time past trade opening
    index[1] = 1 minute past etc, $1
    index[0] = 0 minte past, $100
    index[0] => index[1] => $99 potential profit lost
    index[60] => 1 hr after 9:30 => 10:30 => $500



    create a profit variable that holds the difference between iterating both indexes but at the absolute value without negatives // use Math.abs()
    if(all values in the array are the SAME or if all values AFTER index 0 are less than index 0)
      return 0
    iterate through the array starting at index 0
      iterate through the array starting at index 1
        current would be the absolute difference between the two iterated loops
        if(current greater than or equal profit)
          profit would equal current

      end loop 2
    end loop 1

    return profit

*/


const bestProfit = (prices) => {
  let maxProfit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit)
        maxProfit = profit;
    }
  }
  return maxProfit;
}

console.log(bestProfit([100, 1, 123, 120]), "bestProfit")  // 122
console.log(bestProfit([100, 100, 100, 100]), "bestProfit")   // 0
console.log(bestProfit([100, 88, 44, 2]), "bestProfit")       // 0
console.log(bestProfit([100, 88, 99, 300]), "bestProfit")     // 212



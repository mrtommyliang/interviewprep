// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.


const groupBy = (array, callback) => {
  // create empty obj variable, map
  let map = {}
  // itereate through the array
  for (let vals of array) {
    // instantiate a variable, cb which is the values of the array passed to the callback function
    let cb = callback(vals)
    // if those values don't exist in map, keys will hold an empty array
    if (!map[cb]) map[cb] = []
    // push the values of the array into the the empty array
    map[cb].push(vals)
    // move on to the next number
  }
  // return the map object
  return map
}

const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

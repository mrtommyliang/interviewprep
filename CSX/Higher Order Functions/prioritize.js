/*
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
*/

const prioritize = (arr, callback) => {
  let result = []
  let following = []
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? result.push(arr[i]) : following.push(arr[i])
    if (callback(arr[i])) {
      result.push(arr[i])
    } else {
      following.push(arr[i])
    }
  }
  return [...result, ...following]
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

const prioritize = (arr, callback) => {
  let following = []
  let contains = arr.reduce((acc, curVal) => {
    callback(curVal) ? acc.push(curVal) : following.push(curVal)
    return acc
  }, [])
  return [...contains, ...following]
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// create a function, prioritize that takes in an array and a callback function 
  // create two empty arrays [contains, following] to that will accept words starting with s and words that don't
  // iterate through the array
    // if values start with s, push into contains array
    // else push into following array
// return the values in all arrays
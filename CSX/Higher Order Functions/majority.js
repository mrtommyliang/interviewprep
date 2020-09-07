/*
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
*/

const majority = (arr, callback) => {
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

const majority2 = (arr, callback) => {
  let odd = 0
  let even = arr.reduce((acc, cur) => {
    callback(cur) ? odd++ : acc++
    return acc
  }, 0)
  return (odd > even) ? true : false
}

const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
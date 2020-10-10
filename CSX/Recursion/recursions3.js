let obj1 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

let obj2 = {
  1: "a",
  2: { 3: "b", 4: { 5: "c", 6: { 7: "d" } } },
  8: { 9: { 10: "e" }, 11: "f", 13: "g" },
  14: "h",
  15: { 16: { 17: "i" }, 18: "i" }
}

let arr1 = [[1, 2], 3, [4, [[5]]]]
let arr2 = [1, {}, [3, [[4]]]]

/***************************************************************************************/


/* 
  Problem: Push all interger values of a nested object into an array

  create a function that accepts an obj as an argument 
    create an empty array, result
    iterate through the object using a for..in loop
      if the type of the obj's value is the same as type as an integer
        push the value into an empty array
      if the value of the object is an Object, pass that value into the function and recursively call it
        push the value into result
  return the flattened array
*/

const valToArray = (obj) => {
  let result = []
  for (let i in obj) {
    if (typeof obj[i] === typeof 1) result.push(obj[i])
    if (obj[i] instanceof Object) result.push(valToArray(obj[i]))
  }
  return flattenArr(result)
}
console.log(valToArray(obj1), "nested obj vals")

/***************************************************************************************/

/*
  Problem: flatten an array recursively

  create the function flattenArr that accepts an array
    create an empty array, flattened
    iterate through the arr
      if the value in an array is an Array
        the flattened variable will be reassigned to the concatenated value of the recursive function call with the iterate value passed to it
      otherwise 
        push the value into flattened
  return flattened variable
*/

/*
  .concat() is used to merge two or more arrays and does not change the original arrays but instead returns a new array
*/

const flattenArr = (arr) => {
  let flattened = []
  for (let vals of arr) {
    if (Array.isArray(vals)) {
      flattened = flattened.concat(flattenArr(vals))
    } else {
      flattened.push(vals)
    }
  }
  return flattened
}

console.log(flattenArr(arr2), "nested array vals")

/***************************************************************************************/

/*
  Problem: Push all keys of a nested object into an array

  create a function that accepts an obj as an argument
    create an empty array, result
    iterate through the object using a for..in loop
      push all keys of the object into result
      if the value of the current key is an Object
        pass the 
  return the flattened array
*/

const keysToArray = (obj) => {
  let result = []
  for (let keys in obj) {
    result.push(keys)
    if (obj[keys] instanceof Object) result.push(keysToArray(obj[keys]))
  }
  return result.flat(Infinity)
}

console.log(keysToArray(obj2), "keys to arr")

/***************************************************************************************/

/*
  Problem: Traverse through a nested object and find the target value

  create a function that accepts an obj and a searchVal as an argument
    create a counter that keeps track of how many times that searchVal shows up
    iterate through the keys within obj
      if the iterated keys has a value of the search, increment counter
      if the iterated keys has a value of an object
        recursively call the function with the key and the search value and add the returned count
    return counter
*/

const strFinToArr = (obj, searchVal) => {
  let counter = 0
  for (let vals in obj) {
    if (obj[vals] === searchVal) counter++
    if (obj[vals] instanceof Object) {
      counter += strFinToArr(obj[vals], searchVal)
    }
  }
  return counter
}

console.log(strFinToArr(obj2, "finish"), strFinToArr)
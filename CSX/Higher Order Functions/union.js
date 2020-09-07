/*
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!
*/

// combine all the values in each array
// using the combined values in the new array, create a new Set which by definition is an array of unique values


const union = (arrays) => {
  let combined = arrays.reduce((acc, cur) => {
    return [...acc, ...cur]
  }, [])
  let unique = [...new Set(combined)]
  return unique
}

const union2 = (arrays) => {
  let combined = arrays.reduce((acc, curVal) => [...acc, ...curVal], [])
  let unique = [...new Set(combined)]
  return unique
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

/*
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
*/

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

const intersection = (input) => {
  let common = input.reduce(function(accumulator, currentValue) {
    return accumulator.filter(function(x) {
      return currentValue.indexOf(x) > -1
    })
  })
  return common
}
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// use the reduce method to condense multiple arrays
  // filter out the the current value of the first array
    // 	check to see if the following values contains those values

/******************************************************************************************/

const intersection2 = (input) => {
  let commonVals = input.reduce((acc, cur) => {
    return acc.filter((ele) => {
      return cur.includes(ele)
    })
  })
  return commonVals
}

// a             b               common
// 5,10,15,20    15,88,1,5,7     5, 15
// 5,15          1,10,15,5,20    5, 15

console.log(intersection2([arr1, arr2, arr3])); // should log: [5, 15]
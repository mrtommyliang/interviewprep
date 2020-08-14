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
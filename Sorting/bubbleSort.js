const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

/*
Start from beginning
compare first and second item
swap out items if left is larger than right
keep going until largest is at the end
do one final loop to confirm
*/

const bubbleSort = (array) => {
  let length = array.length // 11
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++) {
      if(array[j] > array[j+1]) {
        // Swap numbers
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array
}
console.log(bubbleSort(numbers))
// bubbleSort(numbers)
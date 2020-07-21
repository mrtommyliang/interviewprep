// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
/*
PROGRAM START take in an N value
  INSTANTIATE an array with 0 and 1 value [0, 1] because we know if N = 1 or 0, iterating through will return itself

  ITERATE starting from index 2, and as long as N input is greater than 1, continue to increment
    PUSH the values of (index - 2) + (index - 1)
  END ITERATE
  RETURN the value at array[N input]
PROGRAM END


[0, 1]
array[2-2] + array[2-1]
array[0] + array[1] = 0 + 1 = 1 -> gets pushed into the array
[0, 1, 1]

array[3-2] + array[3-1]
array[1] + array[2] = 1 + 1 = 2 -> gets pushed into array
[0, 1, 1, 2]

array[4-2] + array[4-1]
array[2] + array[3] = 1 + 2 = 3 -> gets pushed into array
[0, 1, 1, 2, 5]

array[5-2] + array[5-1]
array[3] + array[4] = 2 + 3 = 5 -> gets pushed into array
[0, 1, 1, 2, 3, 5]
y
array[6-2] + array[6-1]
array[4] + array[5] = 3 + 5 = 8 -> gets pushed into array
[0, 1, 1, 2, 3, 5, 8]
*/


// O(N) - linear time
// **************************** ITERATIVE ****************************

const fibonacciIterative = (n) => {
  let array = [0, 1]

  for (let i = 2; i < n + 1; i++) {
    array.push(array[i - 2] + array[i - 1])
  }

  return array[n]
}

fibonacciIterative(8)


// **************************** ITERATIVE WITH MAP ****************************

//O(N)
const fibItWithMap = (n) => {
  const array = [0, 1]
  const map = {}
  let counter = 0

  for (let i = 2; i < n + 1; i++) {
    let point1 = array[i - 1]
    let point2 = array[i - 2]
    array.push(point1 + point2)
  }

  for (item in array) {
    map[counter] = array[item]
    counter++
  }
  return map
}

fibItWithMap(5)

/* returns: 
  {
    0: 0
    1: 1
    2: 1
    3: 2
    4: 3
    5: 5
  }
*/

// **************************** RECURSIVE ****************************
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

fibonacciRecursive(5)
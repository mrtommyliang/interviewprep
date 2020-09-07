const filterArray = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

/* alternative 

const filterArray = (array, callback) => {
	return array.reduce((acc, cur) => {
		if(callback(cur)) acc.push(callback(cur))
    return acc
  }, [])
}
*/

const arrOfNums = [1, 2, 3, 4, 5];

const func1 = (num) => {
  if (num % 2 === 0) {
    return num
  }
}
const func2 = (num) => {
  if (num % 2 === 1) {
    return num
  }
}

console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]
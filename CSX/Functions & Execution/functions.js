/*
Challenge: gradeCalculator
Create a function gradeCalculator which takes a grade(number) and returns its letter grade.

grades 90 and above should return "A"
grades 80 to 89 should return "B"
grades 70 to 79 should return "C"
grades 60 to 69 should return "D"
59 and below should return "F"
*/

const gradeCalculator = (grade) => {
  if (grade >= 90) return "A"
  if (grade >= 80 && grade <= 89) return "B"
  if (grade >= 70 && grade <= 79) return "C"
  if (grade >= 60 && grade <= 69) return "D"
  else return "F"
}

console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"

/************************************************************************/

/*
Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.
*/

const droids = (array) => {
  return array.reduce((acc, cur) => {
    return (cur === "Droids") ? "Found Droids!" : "These are not the droids you're looking for."
  }, [])
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."

/************************************************************************/
// using forEach (forEach cannot break out of execution until completed, so you can't really "return")
const droids = (array) => {
  let result = ''
  array.forEach((item) => {
    (item === "Droids") ? result = 'Found Droids!' : result = "These are not the droids you're looking for."
  })
  return result
}

/************************************************************************/

/*
Complete the function holidays that accepts an array of strings and iterates through the array. If the array contains the string "October", return "Happy Halloween". Otherwise, return the string "Have a great day!". Do not use a variable to store the result that you are returning.
*/

const holidays = (array) => {
  return array.reduce((acc, cur) => {
    return (cur === "October") ? "Happy Halloween" : "Have a great day!"
  }, [])
}

const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"

/************************************************************************/

/*
Using a FOR loop, write a function addN which adds the argument n to each number in the array arr and returns the updated arr.
*/

const addN = (array, num) => {
  // iterate through each array using reduce, giving initializer an empty array
  return array.reduce((acc, cur) => {
    // each iteration, add num to the cur value then push it into acc, which will be an empty array
    acc.push(cur + num)
    // return acc
    return acc
  }, [])
}

console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

/************************************************************************/

/*
Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.
*/

const getTheSum = (array) => {
  let result = 0
  for(let vals of array) {
    result += vals
  }
  return result
}


const getTheSumReduce = (array) => {
  return array.reduce((acc, cur) => {
    return acc + cur
  })
}

console.log(getTheSumReduce([3, 6, 9])); // expected log 18
console.log(getTheSumReduce([10, 11, 12])); // expected log 33

/************************************************************************/

/*
Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.
*/

const multiplyAll = (...args) => {
  return args.reduce((acc, cur) => {
    return acc * cur
  }, 1)
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

/************************************************************************/

/*
Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.
*/

const mergingElements = (arr1, arr2) => {
  let result = []
  for (let i = 0; i <= 3; i++) {
    result.push(arr1[i] + arr2[i])
  }
  return result
}

console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

/************************************************************************/

/*
Write a function mergingTripletsAndQuints which adds the corresponding element from array2 if the element from array1 is divisible by 3 or 5 and returns the new array.
*/

function mergingTripletsAndQuints(array1, array2) {
  let result = []
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 3 == 0 || array1[i] % 5 === 0) {
      result.push(array1[i] + array2[i])
    } else {
      result.push(array1[i])
    }
  }
  return result
}

/************************************************************************/

/*
Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.
*/

const imAboutToExplodeWithExcitement = (n) => {
  while (n >= 0) {
    if (n === 5) {
      console.log(`Oh wow, I can't handle the anticipation!`)
    } else if (n === 3) {
      console.log(`I'm about to explode with excitement!`)
    } else if (n === 0) {
      console.log('That was kind of a let down')
    } else console.log(n)
    n--
  }
}

console.log(imAboutToExplodeWithExcitement(10)) // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

/************************************************************************/

/*
Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.
*/

const closestToTheMark = (player1, player2) => {
  let theMark = Math.floor(Math.random() * 75)
  let p1Diff = Math.abs(player1 - theMark)
  let p2Diff = Math.abs(player2 - theMark)
  return (p1Diff > p2Diff) ? `Player 2 closest` : `Player 1 closest`
}
console.log(closestToTheMark(55, 75))

/************************************************************************/

/*
Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.
*/

const getTheRange = (array) => {
  let low = array[0],
    hi = array[0],
    range = (hi - low)
  for (let i = 1; i < array.length; i++) {
    if (array[i] < low) {
      low = array[i]
    }
    if (array[i] > hi) {
      hi = array[i]
    }
    range = (hi - low)
  }
  return [low, hi, range]
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

const getTheRangeSorted = (array) => {
  let sorted = array.sort((a, b) => (a - b))
  console.log(sorted)
  let lo = sorted[0]
  let hi = sorted[sorted.length - 1]
  let range = hi - lo

  return [lo, hi, range]
}
console.log(getTheRangeSorted([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

/************************************************************************/

/*
Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
*/

const disemvowel = (string) => {
  // create a vowels object that has values as false
  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }
  // create empty string
  let result = ""

  // itereate through the string
  for (let vals of string) {
    // lowercase each character to check against vowels
    let letter = vals.toLowerCase()
    // if the letter doesn't exist in vowels object
    if (!vowels[letter]) {
      // concat that value to result
      result += vals
    }
  }
  // return the result
  return result
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

/************************************************************************/

/*
Create a function addWaldo that accepts an object with keys being first names and values being last names. For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.
*/

const addWaldo = (object) => {
  return object['Waldo'] = 'unknown'
}

const siliconValley = { 'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle' }
console.log(addWaldo(siliconValley)) 
/* should log
{ 
  Richard: 'Hendricks', 
  Erlich: 'Bachman', 
  Bertram: 'Gilfoyle', 
  Waldo: 'unknown' 
}
*/

/************************************************************************/


/*
Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'
*/

const findWaldo = (object) => {
  return (object.hasOwnProperty('Waldo')) ? object['Waldo'] : `Where's Waldo?`
}

const DC = { 'Bruce': 'Wayne', 'Harley': 'Quinn' }
const supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown' }
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'

/************************************************************************/

/*
Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
*/

const arrayBuilder = (object) => {
  let result = []
  for (let vals in object) {
    let repeater = object[vals]

    while (repeater > 0) {
      result.push(vals)
      repeater--
    }
  }
  return result
}

console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []

/************************************************************************/

let evenOrOddVals = [1,2,3,5,6,7,8,9,10]

// output { even: [2,4,6], odd: [1,3,5]}


// Create a helper function that checks for you and returns either even or odd
const evenOrOdd = (num) => {
  return (num % 2 === 0) ? "even" : "odd" 
}

// will take an array input, initialize acc with the relevant key value pairs
const sortNums = (array) => {
  return array.reduce((acc, cur) => {
    
  }, {"even": [], "odd": []})
}
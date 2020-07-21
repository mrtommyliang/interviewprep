//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// NESTED FOR LOOP
// O(n^2) - slower but more space

const firstRecurringCharacter = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++ ) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]) 

// HASH TABLE

const firstRecurringCharacterV2 = (input) => {
  let hashTable = {}

  for (let i = 0; i < input.length; i++) {
    if (hashTable[input[i]] !== undefined) {
      return input[i]
    } else {
      hashTable[input[i]] = i
    }
  }
  console.log(hashTable);
  return undefined
}

firstRecurringCharacterV2([2, 5, 1, 2, 3, 5, 1, 2, 4])
// O(N) but increased space complexity
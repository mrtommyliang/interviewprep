/*
Given a string containing just the characters '(', ')', '{', '}', '['
and ']', determine
if the input string is valid.

An input string is valid
if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

/*
Need to implement some sort of stack since we're comparing first in versus last and stacks follow a LIFO principle


PROGRAM START takes in a string variable

  INSTANTIATE brackets map which have a key: value pair for matching brackets
  INSTANTIATE arr variable which will be the inputString as an arr
  INSTANTIATE stack variable as an empty array which will do the check later
  IF input is an empty string, return true
  IF input length is less than 2 OR no input OR input is not a string OR input's length is odd, return false
  IF the string does not start with an opening bracket or end with a closing bracket, return false

  ITERATE through through string as array (arr variable)
    IF bracket contains currentBracket
      push currentBracket into stack
      ELSE 
        INSTANTIATE a prevBracket that will pop that bracket out of the stack
        IF previous bracket does not equal currentBracket
          RETURN FALSE
        END IF
      END ELSE
    END IF
  END ITERATE
  RETURN true
PROGRAM END
*/

const isValid = (inputString) => {
  let brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let arr = inputString.split('')
  const stack = []

  // if input is a string
  // needs to be on top because it will hit the other if conditions and return false
  if (inputString === '') {
      return true
  }
  // if input is less than 2 or input doesn't exist or input isn't a string or input is odd numbered
  if (inputString.length < 2 || !inputString || typeof inputString != typeof "" || inputString.length % 2 !== 0) {
    return false
  }
  // if a value at index 0 does not exist or if brackets object doesn't have the last value of arr
  if (!brackets[arr[0]] || !Object.values(brackets).includes(arr[arr.length - 1])) {
    return false
  }

  // currentStack = i of arr
  for (let currentBracket of arr) {
    // if the value that is being held exists in the brackets object
    if (brackets[currentBracket]) {
      // push it into empty array "stack"
      stack.push(currentBracket)
    } else {
      // instantiate prevBracket variable to remove the last entry in the array that will also be used to compare
      const prevBracket = stack.pop()
      // if bracketsObject at the key of prevBracket does not equal the value of currentBracket return false
      if (brackets[prevBracket] !== currentBracket) {
        return false
      }
    }
  }
  return true
}

isValid("()")         // true
isValid("()[]{}")     // true
isValid("(]")         // false
isValid("([)]")       // false
isValid("{[]}")       // true
isValid("}")          // false

// ["(", ")", "[", "]", "{", "}"]
// true

//["(", "[", ")", "]" ]
// false

// ["(", "]"]
// false

// ["{", "(", ")", "}"]
// true
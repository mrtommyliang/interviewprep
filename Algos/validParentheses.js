/*
Given a string containing just the characters '(', ')', '{', '}', '['
and ']', determine
if the input string is valid.

An input string is valid
if :

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

/*
Need to implement some sort of stack since we're comparing first in versus last


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

  if (inputString === '') {
      return true
  }
  if (inputString.length < 2 || !inputString || typeof inputString != typeof "" || inputString.length % 2 !== 0) {
    return false
  }
  if (!brackets[arr[0]] || !Object.values(brackets).includes(arr[arr.length - 1])) {
    return false
  }

  for (let currentBracket of arr) {
    if (brackets[currentBracket]) {
      stack.push(currentBracket)
    } else {
      const prevBracket = stack.pop()
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
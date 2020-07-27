/**
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Input: s = "3[a2[c]]"
Output: "accaccacc"
*/


/*

if number
  construct a temp value to be equal to the full digit number (31 => 31, not 3,1) which will be how many times we repeat stuff
if [
  start storing values that we need to repeat
if ]
  time to start repeating
if letter

PROGRAM START = (s input)
  INSTANTIATE multiply, and repeatStr array to be empty array which will be our stack
  INSTANTIATE temporary multipler value which will be the value we're repeating by 
  INSTANTIATE solution to be an empty string which will be where we build our input

  ITEREATE through all values of s input
    IF NUMBER
      build the number
    END IF
    ELSE IF opening bracket [
      push the temporary multiplier into the multply stack
      reset the temporary multipler 
      push the solution into the repeatStr stack
      reset solution string to empty string ''
    END ELSE IF
    ELSE IF closing bracket ]
      assign soltuion to be the popped value of repeatStr (letter) + the repeated solution * the amount it should be repeated 
    END ELSE IF
    ELSE anything else (which will be a letter)
      BUILD the string
    END ELSE
  END ITERATE

PROGRAM END
*/


const decodeString = (s) => {
  let multiply = []
  let repeatStr = []
  let tempMult = ''
  let solution = ''

  for (let char of s) {
    if (!isNaN(char)) {
      tempMult = `${tempMult}${char}`
    } else if (char === '[') {
      multiply.push(tempMult)
      tempMult = ''
      repeatStr.push(solution) // ['']
      solution = ''
    } else if (char === ']') {
      solution = repeatStr.pop() + solution.repeat(multiply.pop())
    } else {
      solution += char
    }
  }
  return solution
}

decodeString()
/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

const reverse = (x) => {
  let max = Math.pow(2, 31) - 1
  let min = Math.pow(-2, 31)
  let xArray = ("" + x).split("")
  let empty = []

  for (let i = xArray.length - 1; i >= 0; i--) {
    empty.push(xArray[i])
  }

  if (empty[empty.length - 1] === '-') {
    empty.pop()
    empty.unshift('-')
  }

  if (empty[0] === '0') {
    empty.shift()
  }
  if (empty.join('') > max || empty.join('') < min) {
    return 0
  } else return empty.join('')
}
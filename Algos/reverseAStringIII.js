/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/


let input = "Let's take LeetCode contest"

const reverseWords = (s) => {
  // fully reversed word
  let reversed = ''
  let word = ''

  // iterate through the characters of is
  for (char of s) {
    // if we hit an white space
    if (char === ' ') {
      // build the character backwards by putting the char after a ""
      // build the word first, then assign it to reversed
      reversed += word + char
      // reset word to be a blank "" to continue building it
      word = ''
    } else {
      // the invidiaul word
      word = char + word
    }
  }
  // after hitting all the conditions, return all the reversed words and the final word that needs to be reversed
  return reversed + word
}

reverseWords(input)
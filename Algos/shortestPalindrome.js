/*
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"
*/


/*
The idea of this solution is trying to find the palindrome center.
We have 2 pointers 'head' and 'tail pointing to the expected center.
At the beginning of each loop, we find neighbors which have the same value, then adjust the pointers.
If s[head] is equals to the s[tail], head--, tail++.
If head is equals to 0, the result is the inverted string behind 'tail'.
Noticed that 1. Palindrome center only existing in the first half of the string.
2. If the center is not a single character, they should be same letters.
*/

const shortestPalindrome = (s) => {
  // instantiate prefix that will be returned and pos,head, tail variables
  let prefix = "";
  let pos, head, tail;

  // pos, head, tail will equal the of input / 2
  for (pos = head = tail = parseInt(s.length / 2); pos > 0; head = tail = --pos) {
    while (head !== 0 && s[head - 1] === s[head]) {
      head--; pos--;
    }
    while (tail != s.length - 1 && s[tail + 1] === s[tail]) {
      tail++;
    }
    var isSame = true;
    while (head >= 0) {
      if (s[head] !== s[tail]) {
        isSame = false;
        break;
      }
      head--; tail++;
    }
    if (isSame) {
      break;
    }
  }

  for (let k = s.length - 1; k >= tail && k !== 0; k--) {
    prefix += s[k];
  }
  return prefix + s;
};
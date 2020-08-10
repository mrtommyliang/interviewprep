/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


const lengthOfLongestSubstring = (s) => {
  let start = 0, maxLen = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map.get(char) >= start) {
      start = map.get(char) + 1;
    }
    map.set(char, i);
    if (i - start + 1 > maxLen) {
      maxLen = i - start + 1;
    }
  }

  return maxLen;
};
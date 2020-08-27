/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

const longestPalindrome = s => {
  s = [...s].sort();                    //Group all letters into adjacency groups
  let singleCounted = false, len = 0;   //Track whether the single letter in the middle of the palindrome has been accounted for
  let i = 0, j = 1;                     //Two pointer traversal
  while (i < s.length) {
    while (s[j] === s[i]) j++;         //Move the second pointer until the boundary of the current adjacency group is reached
    let group = j - i;                 //Get the size of the group
    if (!singleCounted && group % 2) {  //If the single letter hasn't been used yet and the group has an odd length, use the single letter
      len++;
      singleCounted = true;
    }
    len += group % 2 ? group - 1 : group; //Add the group size or the even part of the group's size to the length
    i = j;                             //Move first pointer to the first unaccounted letter
  }
  return len;
};
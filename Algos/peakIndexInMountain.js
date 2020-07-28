/*
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ...A[i - 1] < A[i] > A[i + 1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ...A[i - 1] < A[i] > A[i + 1] > ... > A[A.length - 1].

  Example 1:

Input: [0, 1, 0]
Output: 1
Example 2:

Input: [0, 2, 1, 0]
Output: 1
*/

const peakIndexInMountainArray = (A) => {
  if (!A.length) return -1;
  
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i + 1] < A[i]) return i;
  }
  return -1;
};
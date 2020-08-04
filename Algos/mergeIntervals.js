/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

const merge = (intervals) => {
  // start = 0, end = 1
  let [start, end] = [0, 1]
  
  // if input doesn't exist, return input
  if (!intervals.length) return intervals
  // sort input from smallest to largest based on the value at index 0
  intervals = intervals.sort((a,b) => a[start]-b[start])
  
  // instantiates previous as the first subarray
  let previous = intervals[0]
  // creates a nested array starting with the first sub array
  let answer = [previous]

  // iterate through all the intervals input
  for (let current of intervals) {
    // if iterated input of intervals at 0 index is less than or equal to the first subarray's index 1 value
    if(current[start] <= previous[end]) {
      // reassign previous[end] to be the largest value between current index 1 and previous index 1
      previous[end] = Math.max(previous[end], current[end])
    } else {
      // otherwise, push the values of current to answer
      answer.push(current)
      // reassign previous to be current to continue the cycle
      previous = current
    }
  }
  return answer
}
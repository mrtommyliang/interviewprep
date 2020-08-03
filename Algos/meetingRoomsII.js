/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

const minMeetingRooms = (intervals) => {
  if(intervals === null || intervals.length === 0) return 0
  if(intervals.length < 2) return intervals.length
  intervals.sort((a,b) => {return a[0]-b[0]})

  let roomTime = [intervals[0][1]]
  for(let i = 1; i < intervals.length; i++) {
    let [start, end] = [...intervals[i]]
    let earliest = Math.min(...roomTime)

    if(start < earliest) {
      roomTime.push(end)
    } else {
      roomTime[roomTime.indexOf(earliest)] = end
    }
  }
  return roomTime.length
}
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/


// essentially we're finding the largest possible area of the given constraints

const trap = (height) => {
  // instantiate left, leftMax, rightMax, raincollected to be 0 and right to the end of the array
  let left = 0
  let right = height.length-1
  let leftMax = 0
  let rightMax = 0
  let rainCollected = 0

  // while the left starting point is less than the right starting point, keep iterating (this is to have a comparison from left starting point ot right )
  while(left <= right) {
    // if leftMax is less than or equal to the right starting point
    if (leftMax <= rightMax) {
      // leftMax will keep reassigning itself as it iterates through the array [0,1,0,2] 
      // leftMax = 0.... 1.... 2...
      leftMax = Math.max(leftMax, height[left])
      // rainCollected will be the difference between the value of leftMax and the current value of the array
      rainCollected += leftMax - height[left]
      // increment left to continue down the array
      left++
      // do the same for the right side
    } else {
      rightMax = Math.max(rightMax, height[right])
      rainCollected += rightMax - height[right]
      right--
    }
  }
  // return the final value colllected
  return rainCollected
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])


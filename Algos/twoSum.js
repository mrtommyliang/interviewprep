/*
Given an array of integers,
  return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].

*/

// I could also add some conditional logic that user has to input the values properly like 
/*  
if (nums.length <= 1) {
  return "Not enough values"
}
*/

/* BRUTE FORCE METHOD
Program Start (nums, target)
  ITERATE through nums starting from index 0
    ITERATE through nums starting from index 1
      IF nums at spot A + nums at spot B equals the target value,
        return the index of the values
      END IF
    END ITERATE
  END ITERATE
  RETURN undefined
Program End
*/

let twoSum = (nums, target) => {
  if (nums.length <= 1) {
    return "Not enough values"
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      } 
    }
  }
  return undefined
}

twoSum([2, 7, 11, 15], 10)

// Solution 2
/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

nums1 = [3]
nums2 = [-2, -1]

const findMedianSortedArrays = (nums1, nums2) => {
  let merged = []

  for (let i = 0; i < nums1.length; i++) {
    merged.push(nums1[i])
  }

  for (let j = 0; j < nums2.length; j++) {
    merged.push(nums2[j])
  }

  merged.sort((a, b) => { return a - b })
  if (merged.length % 2 === 0) {
    let medianEven = (merged.length / 2) - 1
    let result1 = (merged[medianEven] + merged[medianEven + 1]) / 2
    return result1
  } else {
    let medianOdd = Math.floor(merged.length / 2)
    let result2 = (merged[medianOdd])
    return result2
  }
}

findMedianSortedArrays(nums1, nums2)


/*
Program Start nums1, nums2
  Instantiate merged variable that is an empty array

  ITERATE through nums1 
    PUSH values into merged variable
  END ITERATE

  ITERATE through nums2
    PUSH values into merged variable
  END ITERATE

  sort merged

  IF merged is even
    ADD the two values in the middle and divide it by 2
    RETURN that value
    ELSE merged is odd
      return the median
  END IF
  
Program End
*/

findMedianSortedArrays(nums1, nums2)
/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

/*
PROGRAM START string input
  INSTANTIATE map to be an empty object

  ITERATE through the string input
    INSTANTIATE string input values to be the keys of map
    INCREMENT each key that shows up multiple times

    END ITERATE


PROGRAM END
*/


const firstUniqChar = (s) => {
  let map = {}

  for (char of s) {
    map[char] = (map[char] || 0) + 1
  }

  for (char in map) {
    if (map[char] === 1)
    return s.indexOf(char)
  }
  return -1
}

firstUniqueChar("leetcode")
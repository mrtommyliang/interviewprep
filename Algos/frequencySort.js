/*
Given a string, sort it in decreasing order based on the frequency of characters.

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

/*
INSTANTIATE map object
ITERATE through map object
  IF map contains values of s

*/

const frequencySort = (s) => {
  let map = {}
  
  for(let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    map[char] = map[char] + 1 || 1
  }
  
  let sorted = Object.keys(map).sort((a, b) => map[b] - map[a])
  let result = ''

  for(let i = 0; i < sorted.length; i++) {
    let char = sorted[i]
    result += char.repeat(map[char])
  }
  return result
}
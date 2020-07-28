const reverseString = (s) => {
  let start = 0
  let end = s.length - 1

  while (end > start) {
    [s[start], s[end]] = [s[end], s[start]]
    end--
    start++
  }
  return s
}


reverseString(["h", "e", "l", "l", "o"])
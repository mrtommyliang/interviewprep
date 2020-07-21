let string = "reverse me"

const reverse = (str) => {
  // check for valid input
  // if(!str || str.length < 2 || typeof str !== 'string') {
  //   console.log("Invalid Input")
  // }

  let reversed = ""

  for(char of str) {
    reversed = char + reversed
  }
  return reversed
}

reverse(string)


const reverse2 = (str) => {
  let backwards = []
  const length = str.length - 1

  for(let i = length; i >= 0; i--) {
    backwards.push(str[i])
  }
  return backwards.join('')
  // console.log(backwards.join(''))
}

reverse2(string)

const reverse3 = (str) => {
  return str.split('').reverse().join('')
}

reverse3(string)

const reverse4 = (str) => str.split('').reverse().join('')
const reverse5 = (str) => [...str].reverse().join('')

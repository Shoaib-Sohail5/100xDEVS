/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
  str = str.split(" ").join("")
  check = true

  for(i = 0;i < str.length/2; i++) {
    if(str[i] === str[str.length -i - 1]) {
      continue;
    }
    else {
      check = false
      break
    }
  }
  return check;
}

module.exports = isPalindrome;

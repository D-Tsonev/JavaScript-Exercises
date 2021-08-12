// ? 1) Define a function `maxOfTwoNumbers` that takes two numbers as
// ? arguments and returns the largest of them.
function maxOfTwoNumbers(num1,num2){
  let maxNum 
  if (num1 > num2){
    maxNum = num1
  } else if (num2 > num1){
    maxNum = num2
  } else {
    maxNum = 'They are equal'
  }
  return maxNum 
}

console.log(maxOfTwoNumbers(115,15))

// ? 2) Define a function `isCharacterAVowel` that takes a character
// ? (i.e. a string of length 1) and returns true if it is a vowel and false,
// ? otherwise.

function isCharacterAVowel(char){
  // const vowels = 'aeiou'
  // return vowels.includes(char)
  return 'aeiou'.includes(char)
}

console.log(isCharacterAVowel('o'))

// ? 3) Define a function `reverseString` that reverses a string. For example,
// ? reverseString("jag testar") should return the string "ratset gaj".


// function isCharacterAVowel(char)
// {
//   if ('aeiou'.includes(char)) 
//   {
//   console.log( true )
// }
//   else 
//   {
//   console.log(false) 
// }
// }


// console.log(isCharacterAVowel('a')

// function reverseString(str) 
// {
// word = 'internet'

// for (i = 0; i < word.length - 1; i --) {
//   console.log(word[i])



// }

// console.log(reverseString('web'))
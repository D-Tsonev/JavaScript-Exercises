
// * Write some if statements to make the program behave in the right way!

// ? 👨‍🏫 --- example (select these lines and hit CMD + / to enable this code)
// const someString = 'pancakes' // try changing the value of someString to 'pancakes 🥞'

// if (someString=true) {
// console.log('The following string is truthy: ', someString)
// } else {
// console.log('Most definitely the empty string.')
// }
// ? example end ---

// ? Define a const oddOrEvenNum, which is some number (no decimals)
const oddOrEvenNum = 1
if (oddOrEvenNum % 2 === 0){
  console.log('Even!')
} else {
  console.log('Odd!')
}
// ? Write an if statement that console logs:
// 'Even!' IF oddOrEvenNum is even
// 'Odd!' If oddOrEvenNum is odd.
// ? Assume the input must be a number, and can't be anything else.
// ? Make sure you test for both odd and even numbers!


// ? Define a const superNum, which is a number between 1 and 10 (no decimals)
// ? Write an if statement that console logs:

// '🦸 Between 1 and 10' IF superNum is above 1 and less than 10.
// '🦸 10, amazing!' IF superNum is 10
// '🦸 Barely made it' IF superNum is 1
// '🦹 Not a real superNum' is superNum is anything else.
// ? Make sure you test it for 1, 10, and at least a few numbers in between and outside the range!

const superNum = Math.round(Math.random() * 10)
console.log(superNum)
if (superNum > 1 && superNum < 10 ) {
  console.log('Between 1 and 10')
} else if (superNum === 10){
  console.log('10 Amazing')
} else if (superNum === 1){

  console.log('Barely made it')
} else {
  console.log('Nor a real superNum ')
}


// ? Define a const quiteACharacter, which can be any single letter in the alphabet
// ? Write an if statement to test if a quiteACharacter is a vowel. Console log:
// 'A 𝒱owel!' if quiteACharacter is a vowel
// 'A 𝒸onsonant' if quiteACharacter is a consonant
// ? Test it for both vowels and consonants!
const quiteACharacter = 'h'
const vowels = 'aeiou'
if (vowels.includes(quiteACharacter)){
  console.log(`${quiteACharacter}` + ' ' + 'is a vowel!')
} else {
  console.log(`${quiteACharacter}` + ' ' + 'is consonant!')
}

// * Figure out the passwords to find the rabbit in your hat 🎩

// ? To play, you must change the values of these 4 constants to get the rabbit
// ? Out of the hat 🎩. When you find that right values, the rabbit will be logged to the console 🐇.
// ? You'll need to look at the if/else block below to work out what the values should be!

const firstPassword = false
const secondPassword = 5
const thirdPassword = 'pppp'
const finalPassword = '🎩'


if (!firstPassword) {
  if (secondPassword % 5 === 0 && secondPassword < 10) {
    // Feel free to google 'includes javascript' if you haven't seen 'includes' before!
    if ('aeiou'.includes(thirdPassword)) {
      console.log('Not quite the right kind of character..')
    } else if (!'aeiou'.includes(thirdPassword)) {
      if (finalPassword === '🎩') {
        console.log('🐇')
      }
    }
  }
}

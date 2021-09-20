/* eslint-disable no-unused-vars */

// ? Below is a demo function to practice running the automated tests.
// ? add the statement 'return []' to the function, save the file.
// ? Run the tests with the command inside your terminal 'npm run test'
// ? You should now see this demo test passing in the ouput report
function demo(array) {
  return []
}

// ? using `map` write a function that returns the total number of characters of each character in an array of words
// ? eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]
function characterCount(array) {
  const mappedArray = array.map(item=> {
    return item.length
    
  })
  return mappedArray
}


// ? using `map` write a function that converts an array of farenheit values to celcius
// ? eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]
function convertTemps(array) {
  const mappedArray = array.map(item=>{
    const celcius = (item - 32) * 5 / 9
    return celcius 
  })
  return mappedArray
}

// ? using `filter` write a function which returns all the string elements in an array
// ? eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

function stringsOnly(array) {
  const filterred = array.filter(item=>{
    if (typeof item === 'string')
      return item 
  })
  return filterred
}


// ? using `filter` write a function that returns an array only containing falsey value
// ? eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]
function containsFalsey(array) {
  const filterred = array.filter(item=>{
    
    return Boolean(!item)
  })
  return filterred
}

// ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false
function divisibleBy5(array) {
  const check = array.some(item=>{
    return item % 5 === 0 
  } )
  return check
}

// ? write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false
function divisibleBy10(array) {
  const check = array.every(item=>{
    return item % 5 === 0 
  } )
  return check
}


// ? write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
// ? eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
function sumOfArray(array) {
  const total = array.reduce((acc,item)=> {
    return acc + Number(item)
  }, 0)
  return total
}

// ? using `split` and `filter` write a function that counts the number of vowels in a sentence
// ? eg: numberOfVowels('Stay classy San Diego') => 6
// function numberOfVowels(string) {
// const vowels="AEIOUaeio"
// const vowelsSums=string.filter((words)=>{
//   return vowels.includes(words).length
// })
// return vowels
// }

// ? using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// ? eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'
// function titleCase(string) {


// }


// ! please do not alter below ✋

module.exports = {
  demo,
  stringsOnly,
  convertTemps,
  characterCount,
  containsFalsey,
  divisibleBy5,
  divisibleBy10,
  sumOfArray,
  // numberOfVowels,
  // titleCase
}
